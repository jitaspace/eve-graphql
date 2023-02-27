import { RESTDataSource } from "@apollo/datasource-rest";

type Category = "alliances" | "corporations" | "characters" | "types";

class ImageApi extends RESTDataSource {
  constructor(options) {
    super(options);
    this.baseURL = "https://images.evetech.net"; // do not append a slash!
  }

  // @ts-ignore
  override async didReceiveResponse(response, request) {
    if (response.ok) {
      return {
        body: await this.parseBody(response),
        headers: Object.fromEntries(response.headers.entries()),
      };
    } else {
      throw await this.errorFromResponse(response);
    }
  }

  override cacheOptionsFor(response, request) {
    // cache image metadata responses for one day
    return {
      ttl: 86400,
    };
  }

  getImageVariants(category: Category, id: number) {
    return this.get(`${category}/${id}`);
  }

  getVariantURL(category: Category, id: number, variant: string) {
    return `${this.baseURL}/${category}/${id}/${variant}`;
  }

  async getImageVariantsConverted(category: Category, id: number) {
    try {
      const { headers, body } = await this.getImageVariants(category, id);
      return {
        headers,
        body: body.map((name) => ({
          name,
          url: this.getVariantURL(category, id, name),
        })),
      };
    } catch (e) {
      return {
        headers: {},
        body: [],
      };
    }
  }

  getAllianceImageVariants(id: number) {
    return this.getImageVariantsConverted("alliances", id);
  }

  getCorporationImageVariants(id: number) {
    return this.getImageVariantsConverted("corporations", id);
  }

  getFactionImageVariants(id: number) {
    return this.getImageVariantsConverted("corporations", id);
  }

  getCharacterImageVariants(id: number) {
    return this.getImageVariantsConverted("characters", id);
  }

  getTypeImageVariants(id: number) {
    return this.getImageVariantsConverted("types", id);
  }
}

export default ImageApi;
