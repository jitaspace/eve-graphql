import { DogmaApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";

class DogmaApi extends GeneratedApi {
  async getDogmaAttributeByIdConverted(attributeId, opts?, requestInit?) {
    const { headers, body } = await super.getDogmaAttributesAttributeId(
      attributeId,
      opts,
      requestInit
    );
    return {
      headers,
      body: {
        id: body.attribute_id,
        name: body.name,
        description: body.description,
        icon: body.icon_id ? { id: body.icon_id } : null,
        defaultValue: body.default_value,
        unit: body.unit_id ? { id: body.unit_id } : null,
        published: body.published ?? false,
        displayName: body.display_name,
        stackable: body.stackable,
        highIsGood: body.high_is_good,
      },
    };
  }

  async getDogmaEffectByIdConverted(effectId, opts?, requestInit?) {
    const result = await super.getDogmaEffectsEffectId(
      effectId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: result.body.effect_id,
        description: result.body.description,
        disallowAutoRepeat: result.body.disallow_auto_repeat,
        dischargeAttribute: result.body.discharge_attribute_id
          ? { id: result.body.discharge_attribute_id }
          : null,
        displayName: result.body.display_name,
        durationAttribute: result.body.duration_attribute_id
          ? { id: result.body.duration_attribute_id }
          : null,
        effectCategory: result.body.effect_category
          ? { id: result.body.effect_category }
          : null,
        electronicChance: result.body.electronic_chance,
        falloffAttribute: result.body.falloff_attribute_id
          ? { id: result.body.falloff_attribute_id }
          : null,
        icon: result.body.icon_id ? { id: result.body.icon_id } : null,
        isAssistance: result.body.is_assistance,
        isOffensive: result.body.is_offensive,
        isWarpSafe: result.body.is_warp_safe,
        modifiers:
          result.body.modifiers?.map(
            ({
              domain,
              effect_id,
              func,
              modified_attribute_id,
              modifying_attribute_id,
              operator,
            }) => ({
              effect: effect_id ? { id: effect_id } : null,
              domain,
              func,
              modifiedAttribute: modified_attribute_id
                ? { id: modified_attribute_id }
                : null,
              modifyingAttribute: modifying_attribute_id
                ? { id: modifying_attribute_id }
                : null,
              operator,
            })
          ) ?? [],
        name: result.body.name,
        postExpression: result.body.post_expression,
        preExpression: result.body.pre_expression,
        published: result.body.published,
        rangeAttribute: result.body.range_attribute_id
          ? { id: result.body.range_attribute_id }
          : null,
        rangeChance: result.body.range_chance,
        trackingSpeedAttribute: result.body.tracking_speed_attribute_id
          ? { id: result.body.tracking_speed_attribute_id }
          : null,
      },
    };
  }
}

export default DogmaApi;
