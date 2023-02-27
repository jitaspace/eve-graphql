import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "EndpointStatus",
        loc: { start: 6, end: 20 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "green", loc: { start: 25, end: 30 } },
          directives: [],
          loc: { start: 25, end: 30 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "yellow", loc: { start: 33, end: 39 } },
          directives: [],
          loc: { start: 33, end: 39 },
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "red", loc: { start: 42, end: 45 } },
          directives: [],
          loc: { start: 42, end: 45 },
        },
      ],
      loc: { start: 1, end: 47 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Position", loc: { start: 54, end: 62 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "x", loc: { start: 67, end: 68 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 70, end: 75 },
              },
              loc: { start: 70, end: 75 },
            },
            loc: { start: 70, end: 76 },
          },
          directives: [],
          loc: { start: 67, end: 76 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "y", loc: { start: 79, end: 80 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 82, end: 87 },
              },
              loc: { start: 82, end: 87 },
            },
            loc: { start: 82, end: 88 },
          },
          directives: [],
          loc: { start: 79, end: 88 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "z", loc: { start: 91, end: 92 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 94, end: 99 },
              },
              loc: { start: 94, end: 99 },
            },
            loc: { start: 94, end: 100 },
          },
          directives: [],
          loc: { start: 91, end: 100 },
        },
      ],
      loc: { start: 49, end: 102 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Endpoint", loc: { start: 109, end: 117 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endpoint",
            loc: { start: 122, end: 130 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 132, end: 134 },
              },
              loc: { start: 132, end: 134 },
            },
            loc: { start: 132, end: 135 },
          },
          directives: [],
          loc: { start: 122, end: 135 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "method",
            loc: { start: 138, end: 144 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 146, end: 152 },
              },
              loc: { start: 146, end: 152 },
            },
            loc: { start: 146, end: 153 },
          },
          directives: [],
          loc: { start: 138, end: 153 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "route", loc: { start: 156, end: 161 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 163, end: 169 },
              },
              loc: { start: 163, end: 169 },
            },
            loc: { start: 163, end: 170 },
          },
          directives: [],
          loc: { start: 156, end: 170 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 173, end: 179 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "EndpointStatus",
                loc: { start: 181, end: 195 },
              },
              loc: { start: 181, end: 195 },
            },
            loc: { start: 181, end: 196 },
          },
          directives: [],
          loc: { start: 173, end: 196 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tags", loc: { start: 199, end: 203 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 206, end: 212 },
                },
                loc: { start: 206, end: 212 },
              },
              loc: { start: 205, end: 213 },
            },
            loc: { start: 205, end: 214 },
          },
          directives: [],
          loc: { start: 199, end: 214 },
        },
      ],
      loc: { start: 104, end: 216 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Region", loc: { start: 223, end: 229 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 234, end: 236 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 238, end: 240 },
              },
              loc: { start: 238, end: 240 },
            },
            loc: { start: 238, end: 241 },
          },
          directives: [],
          loc: { start: 234, end: 241 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 244, end: 248 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 250, end: 256 },
              },
              loc: { start: 250, end: 256 },
            },
            loc: { start: 250, end: 257 },
          },
          directives: [],
          loc: { start: 244, end: 257 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 260, end: 271 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 273, end: 279 },
            },
            loc: { start: 273, end: 279 },
          },
          directives: [],
          loc: { start: 260, end: 279 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "constellations",
            loc: { start: 282, end: 296 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Constellation",
                    loc: { start: 299, end: 312 },
                  },
                  loc: { start: 299, end: 312 },
                },
                loc: { start: 299, end: 313 },
              },
              loc: { start: 298, end: 314 },
            },
            loc: { start: 298, end: 315 },
          },
          directives: [],
          loc: { start: 282, end: 315 },
        },
      ],
      loc: { start: 218, end: 317 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Constellation",
        loc: { start: 324, end: 337 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 342, end: 344 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 346, end: 348 },
              },
              loc: { start: 346, end: 348 },
            },
            loc: { start: 346, end: 349 },
          },
          directives: [],
          loc: { start: 342, end: 349 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 352, end: 356 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 358, end: 364 },
              },
              loc: { start: 358, end: 364 },
            },
            loc: { start: 358, end: 365 },
          },
          directives: [],
          loc: { start: 352, end: 365 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "position",
            loc: { start: 368, end: 376 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Position",
                loc: { start: 378, end: 386 },
              },
              loc: { start: 378, end: 386 },
            },
            loc: { start: 378, end: 387 },
          },
          directives: [],
          loc: { start: 368, end: 387 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "region",
            loc: { start: 390, end: 396 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Region",
                loc: { start: 398, end: 404 },
              },
              loc: { start: 398, end: 404 },
            },
            loc: { start: 398, end: 405 },
          },
          directives: [],
          loc: { start: 390, end: 405 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystems",
            loc: { start: 408, end: 420 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "SolarSystem",
                    loc: { start: 423, end: 434 },
                  },
                  loc: { start: 423, end: 434 },
                },
                loc: { start: 423, end: 435 },
              },
              loc: { start: 422, end: 436 },
            },
            loc: { start: 422, end: 437 },
          },
          directives: [],
          loc: { start: 408, end: 437 },
        },
      ],
      loc: { start: 319, end: 439 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "SolarSystem",
        loc: { start: 446, end: 457 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 462, end: 464 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 466, end: 468 },
              },
              loc: { start: 466, end: 468 },
            },
            loc: { start: 466, end: 469 },
          },
          directives: [],
          loc: { start: 462, end: 469 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 472, end: 476 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 478, end: 484 },
              },
              loc: { start: 478, end: 484 },
            },
            loc: { start: 478, end: 485 },
          },
          directives: [],
          loc: { start: 472, end: 485 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "constellation",
            loc: { start: 488, end: 501 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Constellation",
                loc: { start: 503, end: 516 },
              },
              loc: { start: 503, end: 516 },
            },
            loc: { start: 503, end: 517 },
          },
          directives: [],
          loc: { start: 488, end: 517 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "npcKills",
            loc: { start: 520, end: 528 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 530, end: 533 },
              },
              loc: { start: 530, end: 533 },
            },
            loc: { start: 530, end: 534 },
          },
          directives: [],
          loc: { start: 520, end: 534 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "planets",
            loc: { start: 537, end: 544 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Planet",
                    loc: { start: 547, end: 553 },
                  },
                  loc: { start: 547, end: 553 },
                },
                loc: { start: 547, end: 554 },
              },
              loc: { start: 546, end: 555 },
            },
            loc: { start: 546, end: 556 },
          },
          directives: [],
          loc: { start: 537, end: 556 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "podKills",
            loc: { start: 559, end: 567 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 569, end: 572 },
              },
              loc: { start: 569, end: 572 },
            },
            loc: { start: 569, end: 573 },
          },
          directives: [],
          loc: { start: 559, end: 573 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "position",
            loc: { start: 576, end: 584 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Position",
                loc: { start: 586, end: 594 },
              },
              loc: { start: 586, end: 594 },
            },
            loc: { start: 586, end: 595 },
          },
          directives: [],
          loc: { start: 576, end: 595 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityClass",
            loc: { start: 598, end: 611 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 613, end: 619 },
            },
            loc: { start: 613, end: 619 },
          },
          directives: [],
          loc: { start: 598, end: 619 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityStatus",
            loc: { start: 622, end: 636 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 638, end: 643 },
              },
              loc: { start: 638, end: 643 },
            },
            loc: { start: 638, end: 644 },
          },
          directives: [],
          loc: { start: 622, end: 644 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shipJumps",
            loc: { start: 647, end: 656 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 658, end: 661 },
              },
              loc: { start: 658, end: 661 },
            },
            loc: { start: 658, end: 662 },
          },
          directives: [],
          loc: { start: 647, end: 662 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shipKills",
            loc: { start: 665, end: 674 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 676, end: 679 },
              },
              loc: { start: 676, end: 679 },
            },
            loc: { start: 676, end: 680 },
          },
          directives: [],
          loc: { start: 665, end: 680 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "star", loc: { start: 683, end: 687 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Star",
              loc: { start: 689, end: 693 },
            },
            loc: { start: 689, end: 693 },
          },
          directives: [],
          loc: { start: 683, end: 693 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stargates",
            loc: { start: 696, end: 705 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Stargate",
                    loc: { start: 708, end: 716 },
                  },
                  loc: { start: 708, end: 716 },
                },
                loc: { start: 708, end: 717 },
              },
              loc: { start: 707, end: 718 },
            },
            loc: { start: 707, end: 719 },
          },
          directives: [],
          loc: { start: 696, end: 719 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stations",
            loc: { start: 722, end: 730 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Station",
                    loc: { start: 733, end: 740 },
                  },
                  loc: { start: 733, end: 740 },
                },
                loc: { start: 733, end: 741 },
              },
              loc: { start: 732, end: 742 },
            },
            loc: { start: 732, end: 743 },
          },
          directives: [],
          loc: { start: 722, end: 743 },
        },
      ],
      loc: { start: 441, end: 745 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Planet", loc: { start: 752, end: 758 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 763, end: 765 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 767, end: 769 },
              },
              loc: { start: 767, end: 769 },
            },
            loc: { start: 767, end: 770 },
          },
          directives: [],
          loc: { start: 763, end: 770 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "moons", loc: { start: 773, end: 778 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Moon",
                    loc: { start: 781, end: 785 },
                  },
                  loc: { start: 781, end: 785 },
                },
                loc: { start: 781, end: 786 },
              },
              loc: { start: 780, end: 787 },
            },
            loc: { start: 780, end: 788 },
          },
          directives: [],
          loc: { start: 773, end: 788 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "asteroidBelts",
            loc: { start: 791, end: 804 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "AsteroidBelt",
                    loc: { start: 807, end: 819 },
                  },
                  loc: { start: 807, end: 819 },
                },
                loc: { start: 807, end: 820 },
              },
              loc: { start: 806, end: 821 },
            },
            loc: { start: 806, end: 822 },
          },
          directives: [],
          loc: { start: 791, end: 822 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 825, end: 829 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 831, end: 837 },
              },
              loc: { start: 831, end: 837 },
            },
            loc: { start: 831, end: 838 },
          },
          directives: [],
          loc: { start: 825, end: 838 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "position",
            loc: { start: 841, end: 849 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Position",
                loc: { start: 851, end: 859 },
              },
              loc: { start: 851, end: 859 },
            },
            loc: { start: 851, end: 860 },
          },
          directives: [],
          loc: { start: 841, end: 860 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 863, end: 874 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 876, end: 887 },
              },
              loc: { start: 876, end: 887 },
            },
            loc: { start: 876, end: 888 },
          },
          directives: [],
          loc: { start: 863, end: 888 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type", loc: { start: 891, end: 895 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Type",
                loc: { start: 897, end: 901 },
              },
              loc: { start: 897, end: 901 },
            },
            loc: { start: 897, end: 902 },
          },
          directives: [],
          loc: { start: 891, end: 902 },
        },
      ],
      loc: { start: 747, end: 904 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Star", loc: { start: 911, end: 915 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 920, end: 922 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 924, end: 926 },
              },
              loc: { start: 924, end: 926 },
            },
            loc: { start: 924, end: 927 },
          },
          directives: [],
          loc: { start: 920, end: 927 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "age", loc: { start: 930, end: 933 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 935, end: 941 },
              },
              loc: { start: 935, end: 941 },
            },
            loc: { start: 935, end: 942 },
          },
          directives: [],
          loc: { start: 930, end: 942 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "luminosity",
            loc: { start: 945, end: 955 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 957, end: 962 },
              },
              loc: { start: 957, end: 962 },
            },
            loc: { start: 957, end: 963 },
          },
          directives: [],
          loc: { start: 945, end: 963 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 966, end: 970 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 972, end: 978 },
              },
              loc: { start: 972, end: 978 },
            },
            loc: { start: 972, end: 979 },
          },
          directives: [],
          loc: { start: 966, end: 979 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "radius",
            loc: { start: 982, end: 988 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 990, end: 993 },
              },
              loc: { start: 990, end: 993 },
            },
            loc: { start: 990, end: 994 },
          },
          directives: [],
          loc: { start: 982, end: 994 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 997, end: 1008 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 1010, end: 1021 },
              },
              loc: { start: 1010, end: 1021 },
            },
            loc: { start: 1010, end: 1022 },
          },
          directives: [],
          loc: { start: 997, end: 1022 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "spectralClass",
            loc: { start: 1025, end: 1038 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1040, end: 1046 },
              },
              loc: { start: 1040, end: 1046 },
            },
            loc: { start: 1040, end: 1047 },
          },
          directives: [],
          loc: { start: 1025, end: 1047 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "temperature",
            loc: { start: 1050, end: 1061 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1063, end: 1066 },
              },
              loc: { start: 1063, end: 1066 },
            },
            loc: { start: 1063, end: 1067 },
          },
          directives: [],
          loc: { start: 1050, end: 1067 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 1070, end: 1074 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Type",
                loc: { start: 1076, end: 1080 },
              },
              loc: { start: 1076, end: 1080 },
            },
            loc: { start: 1076, end: 1081 },
          },
          directives: [],
          loc: { start: 1070, end: 1081 },
        },
      ],
      loc: { start: 906, end: 1083 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Stargate",
        loc: { start: 1090, end: 1098 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1103, end: 1105 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1107, end: 1109 },
              },
              loc: { start: 1107, end: 1109 },
            },
            loc: { start: 1107, end: 1110 },
          },
          directives: [],
          loc: { start: 1103, end: 1110 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1113, end: 1117 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1119, end: 1125 },
              },
              loc: { start: 1119, end: 1125 },
            },
            loc: { start: 1119, end: 1126 },
          },
          directives: [],
          loc: { start: 1113, end: 1126 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "destination",
            loc: { start: 1129, end: 1140 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Stargate",
                loc: { start: 1142, end: 1150 },
              },
              loc: { start: 1142, end: 1150 },
            },
            loc: { start: 1142, end: 1151 },
          },
          directives: [],
          loc: { start: 1129, end: 1151 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "position",
            loc: { start: 1154, end: 1162 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Position",
                loc: { start: 1164, end: 1172 },
              },
              loc: { start: 1164, end: 1172 },
            },
            loc: { start: 1164, end: 1173 },
          },
          directives: [],
          loc: { start: 1154, end: 1173 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 1176, end: 1187 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 1189, end: 1200 },
              },
              loc: { start: 1189, end: 1200 },
            },
            loc: { start: 1189, end: 1201 },
          },
          directives: [],
          loc: { start: 1176, end: 1201 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 1204, end: 1208 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Type",
                loc: { start: 1210, end: 1214 },
              },
              loc: { start: 1210, end: 1214 },
            },
            loc: { start: 1210, end: 1215 },
          },
          directives: [],
          loc: { start: 1204, end: 1215 },
        },
      ],
      loc: { start: 1085, end: 1217 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Station", loc: { start: 1224, end: 1231 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1236, end: 1238 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1240, end: 1242 },
              },
              loc: { start: 1240, end: 1242 },
            },
            loc: { start: 1240, end: 1243 },
          },
          directives: [],
          loc: { start: 1236, end: 1243 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1246, end: 1250 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1252, end: 1258 },
              },
              loc: { start: 1252, end: 1258 },
            },
            loc: { start: 1252, end: 1259 },
          },
          directives: [],
          loc: { start: 1246, end: 1259 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "position",
            loc: { start: 1262, end: 1270 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Position",
                loc: { start: 1272, end: 1280 },
              },
              loc: { start: 1272, end: 1280 },
            },
            loc: { start: 1272, end: 1281 },
          },
          directives: [],
          loc: { start: 1262, end: 1281 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 1284, end: 1295 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "SolarSystem",
              loc: { start: 1297, end: 1308 },
            },
            loc: { start: 1297, end: 1308 },
          },
          directives: [],
          loc: { start: 1284, end: 1308 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 1311, end: 1315 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Type",
                loc: { start: 1317, end: 1321 },
              },
              loc: { start: 1317, end: 1321 },
            },
            loc: { start: 1317, end: 1322 },
          },
          directives: [],
          loc: { start: 1311, end: 1322 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "maxDockableShipVolume",
            loc: { start: 1325, end: 1346 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 1348, end: 1353 },
              },
              loc: { start: 1348, end: 1353 },
            },
            loc: { start: 1348, end: 1354 },
          },
          directives: [],
          loc: { start: 1325, end: 1354 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "officeRentalCost",
            loc: { start: 1357, end: 1373 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 1375, end: 1380 },
              },
              loc: { start: 1375, end: 1380 },
            },
            loc: { start: 1375, end: 1381 },
          },
          directives: [],
          loc: { start: 1357, end: 1381 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reprocessingEfficiency",
            loc: { start: 1384, end: 1406 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 1408, end: 1413 },
              },
              loc: { start: 1408, end: 1413 },
            },
            loc: { start: 1408, end: 1414 },
          },
          directives: [],
          loc: { start: 1384, end: 1414 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reprocessingStationsTake",
            loc: { start: 1417, end: 1441 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 1443, end: 1448 },
              },
              loc: { start: 1443, end: 1448 },
            },
            loc: { start: 1443, end: 1449 },
          },
          directives: [],
          loc: { start: 1417, end: 1449 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "services",
            loc: { start: 1452, end: 1460 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1463, end: 1469 },
                  },
                  loc: { start: 1463, end: 1469 },
                },
                loc: { start: 1463, end: 1470 },
              },
              loc: { start: 1462, end: 1471 },
            },
            loc: { start: 1462, end: 1472 },
          },
          directives: [],
          loc: { start: 1452, end: 1472 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "owner",
            loc: { start: 1475, end: 1480 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 1482, end: 1493 },
              },
              loc: { start: 1482, end: 1493 },
            },
            loc: { start: 1482, end: 1494 },
          },
          directives: [],
          loc: { start: 1475, end: 1494 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 1497, end: 1501 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 1503, end: 1507 },
              },
              loc: { start: 1503, end: 1507 },
            },
            loc: { start: 1503, end: 1508 },
          },
          directives: [],
          loc: { start: 1497, end: 1508 },
        },
      ],
      loc: { start: 1219, end: 1510 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Type", loc: { start: 1517, end: 1521 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1526, end: 1528 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1530, end: 1532 },
              },
              loc: { start: 1530, end: 1532 },
            },
            loc: { start: 1530, end: 1533 },
          },
          directives: [],
          loc: { start: 1526, end: 1533 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "capacity",
            loc: { start: 1536, end: 1544 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 1546, end: 1551 },
            },
            loc: { start: 1546, end: 1551 },
          },
          directives: [],
          loc: { start: 1536, end: 1551 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1554, end: 1565 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1567, end: 1573 },
              },
              loc: { start: 1567, end: 1573 },
            },
            loc: { start: 1567, end: 1574 },
          },
          directives: [],
          loc: { start: 1554, end: 1574 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attributes",
            loc: { start: 1577, end: 1587 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "AppliedAttribute",
                    loc: { start: 1590, end: 1606 },
                  },
                  loc: { start: 1590, end: 1606 },
                },
                loc: { start: 1590, end: 1607 },
              },
              loc: { start: 1589, end: 1608 },
            },
            loc: { start: 1589, end: 1609 },
          },
          directives: [],
          loc: { start: 1577, end: 1609 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "effects",
            loc: { start: 1612, end: 1619 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "AppliedEffect",
                    loc: { start: 1622, end: 1635 },
                  },
                  loc: { start: 1622, end: 1635 },
                },
                loc: { start: 1622, end: 1636 },
              },
              loc: { start: 1621, end: 1637 },
            },
            loc: { start: 1621, end: 1638 },
          },
          directives: [],
          loc: { start: 1612, end: 1638 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "graphic",
            loc: { start: 1641, end: 1648 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Graphic",
              loc: { start: 1650, end: 1657 },
            },
            loc: { start: 1650, end: 1657 },
          },
          directives: [],
          loc: { start: 1641, end: 1657 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "group",
            loc: { start: 1660, end: 1665 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Group",
                loc: { start: 1667, end: 1672 },
              },
              loc: { start: 1667, end: 1672 },
            },
            loc: { start: 1667, end: 1673 },
          },
          directives: [],
          loc: { start: 1660, end: 1673 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "icon",
            loc: { start: 1676, end: 1680 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Icon",
              loc: { start: 1682, end: 1686 },
            },
            loc: { start: 1682, end: 1686 },
          },
          directives: [],
          loc: { start: 1676, end: 1686 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 1689, end: 1695 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 1698, end: 1712 },
                  },
                  loc: { start: 1698, end: 1712 },
                },
                loc: { start: 1698, end: 1713 },
              },
              loc: { start: 1697, end: 1714 },
            },
            loc: { start: 1697, end: 1715 },
          },
          directives: [],
          loc: { start: 1689, end: 1715 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "marketGroup",
            loc: { start: 1718, end: 1729 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "MarketGroup",
              loc: { start: 1731, end: 1742 },
            },
            loc: { start: 1731, end: 1742 },
          },
          directives: [],
          loc: { start: 1718, end: 1742 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "mass",
            loc: { start: 1745, end: 1749 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 1751, end: 1756 },
            },
            loc: { start: 1751, end: 1756 },
          },
          directives: [],
          loc: { start: 1745, end: 1756 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1759, end: 1763 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1765, end: 1771 },
              },
              loc: { start: 1765, end: 1771 },
            },
            loc: { start: 1765, end: 1772 },
          },
          directives: [],
          loc: { start: 1759, end: 1772 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "packagedVolume",
            loc: { start: 1775, end: 1789 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 1791, end: 1796 },
            },
            loc: { start: 1791, end: 1796 },
          },
          directives: [],
          loc: { start: 1775, end: 1796 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "portionSize",
            loc: { start: 1799, end: 1810 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1812, end: 1815 },
            },
            loc: { start: 1812, end: 1815 },
          },
          directives: [],
          loc: { start: 1799, end: 1815 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "published",
            loc: { start: 1818, end: 1827 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 1829, end: 1836 },
              },
              loc: { start: 1829, end: 1836 },
            },
            loc: { start: 1829, end: 1837 },
          },
          directives: [],
          loc: { start: 1818, end: 1837 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "radius",
            loc: { start: 1840, end: 1846 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 1848, end: 1853 },
            },
            loc: { start: 1848, end: 1853 },
          },
          directives: [],
          loc: { start: 1840, end: 1853 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 1856, end: 1862 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 1864, end: 1869 },
            },
            loc: { start: 1864, end: 1869 },
          },
          directives: [],
          loc: { start: 1856, end: 1869 },
        },
      ],
      loc: { start: 1512, end: 1871 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AppliedAttribute",
        loc: { start: 1878, end: 1894 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attribute",
            loc: { start: 1899, end: 1908 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attribute",
                loc: { start: 1910, end: 1919 },
              },
              loc: { start: 1910, end: 1919 },
            },
            loc: { start: 1910, end: 1920 },
          },
          directives: [],
          loc: { start: 1899, end: 1920 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "value",
            loc: { start: 1923, end: 1928 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 1930, end: 1935 },
              },
              loc: { start: 1930, end: 1935 },
            },
            loc: { start: 1930, end: 1936 },
          },
          directives: [],
          loc: { start: 1923, end: 1936 },
        },
      ],
      loc: { start: 1873, end: 1938 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AppliedEffect",
        loc: { start: 1945, end: 1958 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "effect",
            loc: { start: 1963, end: 1969 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Effect",
                loc: { start: 1971, end: 1977 },
              },
              loc: { start: 1971, end: 1977 },
            },
            loc: { start: 1971, end: 1978 },
          },
          directives: [],
          loc: { start: 1963, end: 1978 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isDefault",
            loc: { start: 1981, end: 1990 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 1992, end: 1999 },
              },
              loc: { start: 1992, end: 1999 },
            },
            loc: { start: 1992, end: 2000 },
          },
          directives: [],
          loc: { start: 1981, end: 2000 },
        },
      ],
      loc: { start: 1940, end: 2002 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Moon", loc: { start: 2009, end: 2013 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2018, end: 2020 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2022, end: 2024 },
              },
              loc: { start: 2022, end: 2024 },
            },
            loc: { start: 2022, end: 2025 },
          },
          directives: [],
          loc: { start: 2018, end: 2025 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2028, end: 2032 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2034, end: 2040 },
              },
              loc: { start: 2034, end: 2040 },
            },
            loc: { start: 2034, end: 2041 },
          },
          directives: [],
          loc: { start: 2028, end: 2041 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "position",
            loc: { start: 2044, end: 2052 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Position",
                loc: { start: 2054, end: 2062 },
              },
              loc: { start: 2054, end: 2062 },
            },
            loc: { start: 2054, end: 2063 },
          },
          directives: [],
          loc: { start: 2044, end: 2063 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 2066, end: 2077 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 2079, end: 2090 },
              },
              loc: { start: 2079, end: 2090 },
            },
            loc: { start: 2079, end: 2091 },
          },
          directives: [],
          loc: { start: 2066, end: 2091 },
        },
      ],
      loc: { start: 2004, end: 2093 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AsteroidBelt",
        loc: { start: 2100, end: 2112 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2117, end: 2119 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2121, end: 2123 },
              },
              loc: { start: 2121, end: 2123 },
            },
            loc: { start: 2121, end: 2124 },
          },
          directives: [],
          loc: { start: 2117, end: 2124 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2127, end: 2131 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2133, end: 2139 },
              },
              loc: { start: 2133, end: 2139 },
            },
            loc: { start: 2133, end: 2140 },
          },
          directives: [],
          loc: { start: 2127, end: 2140 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "position",
            loc: { start: 2143, end: 2151 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Position",
                loc: { start: 2153, end: 2161 },
              },
              loc: { start: 2153, end: 2161 },
            },
            loc: { start: 2153, end: 2162 },
          },
          directives: [],
          loc: { start: 2143, end: 2162 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 2165, end: 2176 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 2178, end: 2189 },
              },
              loc: { start: 2178, end: 2189 },
            },
            loc: { start: 2178, end: 2190 },
          },
          directives: [],
          loc: { start: 2165, end: 2190 },
        },
      ],
      loc: { start: 2095, end: 2192 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Corporation",
        loc: { start: 2199, end: 2210 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2215, end: 2217 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2219, end: 2221 },
              },
              loc: { start: 2219, end: 2221 },
            },
            loc: { start: 2219, end: 2222 },
          },
          directives: [],
          loc: { start: 2215, end: 2222 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 2225, end: 2233 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 2235, end: 2243 },
            },
            loc: { start: 2235, end: 2243 },
          },
          directives: [],
          loc: { start: 2225, end: 2243 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "ceo", loc: { start: 2246, end: 2249 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Character",
              loc: { start: 2251, end: 2260 },
            },
            loc: { start: 2251, end: 2260 },
          },
          directives: [],
          loc: { start: 2246, end: 2260 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creator",
            loc: { start: 2263, end: 2270 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Character",
              loc: { start: 2272, end: 2281 },
            },
            loc: { start: 2272, end: 2281 },
          },
          directives: [],
          loc: { start: 2263, end: 2281 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dateFounded",
            loc: { start: 2284, end: 2295 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2297, end: 2303 },
            },
            loc: { start: 2297, end: 2303 },
          },
          directives: [],
          loc: { start: 2284, end: 2303 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2306, end: 2317 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2319, end: 2325 },
            },
            loc: { start: 2319, end: 2325 },
          },
          directives: [],
          loc: { start: 2306, end: 2325 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 2328, end: 2335 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 2337, end: 2344 },
            },
            loc: { start: 2337, end: 2344 },
          },
          directives: [],
          loc: { start: 2328, end: 2344 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "homeStation",
            loc: { start: 2347, end: 2358 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Station",
              loc: { start: 2360, end: 2367 },
            },
            loc: { start: 2360, end: 2367 },
          },
          directives: [],
          loc: { start: 2347, end: 2367 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "memberCount",
            loc: { start: 2370, end: 2381 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2383, end: 2386 },
              },
              loc: { start: 2383, end: 2386 },
            },
            loc: { start: 2383, end: 2387 },
          },
          directives: [],
          loc: { start: 2370, end: 2387 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2390, end: 2394 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2396, end: 2402 },
              },
              loc: { start: 2396, end: 2402 },
            },
            loc: { start: 2396, end: 2403 },
          },
          directives: [],
          loc: { start: 2390, end: 2403 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shares",
            loc: { start: 2406, end: 2412 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 2414, end: 2417 },
            },
            loc: { start: 2414, end: 2417 },
          },
          directives: [],
          loc: { start: 2406, end: 2417 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "taxRate",
            loc: { start: 2420, end: 2427 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 2429, end: 2434 },
              },
              loc: { start: 2429, end: 2434 },
            },
            loc: { start: 2429, end: 2435 },
          },
          directives: [],
          loc: { start: 2420, end: 2435 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ticker",
            loc: { start: 2438, end: 2444 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2446, end: 2452 },
              },
              loc: { start: 2446, end: 2452 },
            },
            loc: { start: 2446, end: 2453 },
          },
          directives: [],
          loc: { start: 2438, end: 2453 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 2456, end: 2459 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2461, end: 2467 },
            },
            loc: { start: 2461, end: 2467 },
          },
          directives: [],
          loc: { start: 2456, end: 2467 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "warEligible",
            loc: { start: 2470, end: 2481 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2483, end: 2490 },
            },
            loc: { start: 2483, end: 2490 },
          },
          directives: [],
          loc: { start: 2470, end: 2490 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "allianceHistory",
            loc: { start: 2493, end: 2508 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "AllianceMembership",
                    loc: { start: 2511, end: 2529 },
                  },
                  loc: { start: 2511, end: 2529 },
                },
                loc: { start: 2511, end: 2530 },
              },
              loc: { start: 2510, end: 2531 },
            },
            loc: { start: 2510, end: 2532 },
          },
          directives: [],
          loc: { start: 2493, end: 2532 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 2535, end: 2541 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 2544, end: 2558 },
                  },
                  loc: { start: 2544, end: 2558 },
                },
                loc: { start: 2544, end: 2559 },
              },
              loc: { start: 2543, end: 2560 },
            },
            loc: { start: 2543, end: 2561 },
          },
          directives: [],
          loc: { start: 2535, end: 2561 },
        },
      ],
      loc: { start: 2194, end: 2563 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AllianceMembership",
        loc: { start: 2570, end: 2588 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 2593, end: 2601 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 2603, end: 2611 },
            },
            loc: { start: 2603, end: 2611 },
          },
          directives: [],
          loc: { start: 2593, end: 2611 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 2614, end: 2623 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2625, end: 2631 },
              },
              loc: { start: 2625, end: 2631 },
            },
            loc: { start: 2625, end: 2632 },
          },
          directives: [],
          loc: { start: 2614, end: 2632 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "recordId",
            loc: { start: 2635, end: 2643 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2645, end: 2648 },
              },
              loc: { start: 2645, end: 2648 },
            },
            loc: { start: 2645, end: 2649 },
          },
          directives: [],
          loc: { start: 2635, end: 2649 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isDeleted",
            loc: { start: 2652, end: 2661 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 2663, end: 2670 },
              },
              loc: { start: 2663, end: 2670 },
            },
            loc: { start: 2663, end: 2671 },
          },
          directives: [],
          loc: { start: 2652, end: 2671 },
        },
      ],
      loc: { start: 2565, end: 2673 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Race", loc: { start: 2680, end: 2684 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2689, end: 2691 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2693, end: 2695 },
              },
              loc: { start: 2693, end: 2695 },
            },
            loc: { start: 2693, end: 2696 },
          },
          directives: [],
          loc: { start: 2689, end: 2696 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2699, end: 2703 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2705, end: 2711 },
              },
              loc: { start: 2705, end: 2711 },
            },
            loc: { start: 2705, end: 2712 },
          },
          directives: [],
          loc: { start: 2699, end: 2712 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2715, end: 2726 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2728, end: 2734 },
              },
              loc: { start: 2728, end: 2734 },
            },
            loc: { start: 2728, end: 2735 },
          },
          directives: [],
          loc: { start: 2715, end: 2735 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 2738, end: 2745 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Faction",
                loc: { start: 2747, end: 2754 },
              },
              loc: { start: 2747, end: 2754 },
            },
            loc: { start: 2747, end: 2755 },
          },
          directives: [],
          loc: { start: 2738, end: 2755 },
        },
      ],
      loc: { start: 2675, end: 2757 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Attribute",
        loc: { start: 2764, end: 2773 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2778, end: 2780 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2782, end: 2784 },
              },
              loc: { start: 2782, end: 2784 },
            },
            loc: { start: 2782, end: 2785 },
          },
          directives: [],
          loc: { start: 2778, end: 2785 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "defaultValue",
            loc: { start: 2788, end: 2800 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 2802, end: 2807 },
            },
            loc: { start: 2802, end: 2807 },
          },
          directives: [],
          loc: { start: 2788, end: 2807 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2810, end: 2821 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2823, end: 2829 },
            },
            loc: { start: 2823, end: 2829 },
          },
          directives: [],
          loc: { start: 2810, end: 2829 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 2832, end: 2843 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2845, end: 2851 },
            },
            loc: { start: 2845, end: 2851 },
          },
          directives: [],
          loc: { start: 2832, end: 2851 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "highIsGood",
            loc: { start: 2854, end: 2864 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2866, end: 2873 },
            },
            loc: { start: 2866, end: 2873 },
          },
          directives: [],
          loc: { start: 2854, end: 2873 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "icon",
            loc: { start: 2876, end: 2880 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Icon",
              loc: { start: 2882, end: 2886 },
            },
            loc: { start: 2882, end: 2886 },
          },
          directives: [],
          loc: { start: 2876, end: 2886 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2889, end: 2893 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2895, end: 2901 },
            },
            loc: { start: 2895, end: 2901 },
          },
          directives: [],
          loc: { start: 2889, end: 2901 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "published",
            loc: { start: 2904, end: 2913 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2915, end: 2922 },
            },
            loc: { start: 2915, end: 2922 },
          },
          directives: [],
          loc: { start: 2904, end: 2922 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stackable",
            loc: { start: 2925, end: 2934 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 2936, end: 2943 },
            },
            loc: { start: 2936, end: 2943 },
          },
          directives: [],
          loc: { start: 2925, end: 2943 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "unit",
            loc: { start: 2946, end: 2950 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Unit",
              loc: { start: 2952, end: 2956 },
            },
            loc: { start: 2952, end: 2956 },
          },
          directives: [],
          loc: { start: 2946, end: 2956 },
        },
      ],
      loc: { start: 2759, end: 2958 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Effect", loc: { start: 2965, end: 2971 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2976, end: 2978 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2980, end: 2982 },
              },
              loc: { start: 2980, end: 2982 },
            },
            loc: { start: 2980, end: 2983 },
          },
          directives: [],
          loc: { start: 2976, end: 2983 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2986, end: 2997 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2999, end: 3005 },
            },
            loc: { start: 2999, end: 3005 },
          },
          directives: [],
          loc: { start: 2986, end: 3005 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "disallowAutoRepeat",
            loc: { start: 3008, end: 3026 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3028, end: 3035 },
            },
            loc: { start: 3028, end: 3035 },
          },
          directives: [],
          loc: { start: 3008, end: 3035 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 3038, end: 3049 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3051, end: 3057 },
            },
            loc: { start: 3051, end: 3057 },
          },
          directives: [],
          loc: { start: 3038, end: 3057 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "effectCategory",
            loc: { start: 3060, end: 3074 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3076, end: 3079 },
            },
            loc: { start: 3076, end: 3079 },
          },
          directives: [],
          loc: { start: 3060, end: 3079 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "electronicChance",
            loc: { start: 3082, end: 3098 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3100, end: 3107 },
            },
            loc: { start: 3100, end: 3107 },
          },
          directives: [],
          loc: { start: 3082, end: 3107 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "icon",
            loc: { start: 3110, end: 3114 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Icon",
              loc: { start: 3116, end: 3120 },
            },
            loc: { start: 3116, end: 3120 },
          },
          directives: [],
          loc: { start: 3110, end: 3120 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isAssistance",
            loc: { start: 3123, end: 3135 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3137, end: 3144 },
            },
            loc: { start: 3137, end: 3144 },
          },
          directives: [],
          loc: { start: 3123, end: 3144 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isOffensive",
            loc: { start: 3147, end: 3158 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3160, end: 3167 },
            },
            loc: { start: 3160, end: 3167 },
          },
          directives: [],
          loc: { start: 3147, end: 3167 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isWarpSafe",
            loc: { start: 3170, end: 3180 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3182, end: 3189 },
            },
            loc: { start: 3182, end: 3189 },
          },
          directives: [],
          loc: { start: 3170, end: 3189 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "modifiers",
            loc: { start: 3192, end: 3201 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "EffectModifier",
                    loc: { start: 3204, end: 3218 },
                  },
                  loc: { start: 3204, end: 3218 },
                },
                loc: { start: 3204, end: 3219 },
              },
              loc: { start: 3203, end: 3220 },
            },
            loc: { start: 3203, end: 3221 },
          },
          directives: [],
          loc: { start: 3192, end: 3221 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 3224, end: 3228 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3230, end: 3236 },
            },
            loc: { start: 3230, end: 3236 },
          },
          directives: [],
          loc: { start: 3224, end: 3236 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postExpression",
            loc: { start: 3239, end: 3253 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3255, end: 3258 },
            },
            loc: { start: 3255, end: 3258 },
          },
          directives: [],
          loc: { start: 3239, end: 3258 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "preExpression",
            loc: { start: 3261, end: 3274 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3276, end: 3279 },
            },
            loc: { start: 3276, end: 3279 },
          },
          directives: [],
          loc: { start: 3261, end: 3279 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "published",
            loc: { start: 3282, end: 3291 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3293, end: 3300 },
            },
            loc: { start: 3293, end: 3300 },
          },
          directives: [],
          loc: { start: 3282, end: 3300 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rangeChance",
            loc: { start: 3303, end: 3314 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 3316, end: 3323 },
            },
            loc: { start: 3316, end: 3323 },
          },
          directives: [],
          loc: { start: 3303, end: 3323 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dischargeAttribute",
            loc: { start: 3326, end: 3344 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attribute",
              loc: { start: 3346, end: 3355 },
            },
            loc: { start: 3346, end: 3355 },
          },
          directives: [],
          loc: { start: 3326, end: 3355 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "durationAttribute",
            loc: { start: 3358, end: 3375 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attribute",
              loc: { start: 3377, end: 3386 },
            },
            loc: { start: 3377, end: 3386 },
          },
          directives: [],
          loc: { start: 3358, end: 3386 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "falloffAttribute",
            loc: { start: 3389, end: 3405 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attribute",
              loc: { start: 3407, end: 3416 },
            },
            loc: { start: 3407, end: 3416 },
          },
          directives: [],
          loc: { start: 3389, end: 3416 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rangeAttribute",
            loc: { start: 3419, end: 3433 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attribute",
              loc: { start: 3435, end: 3444 },
            },
            loc: { start: 3435, end: 3444 },
          },
          directives: [],
          loc: { start: 3419, end: 3444 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "trackingSpeedAttribute",
            loc: { start: 3447, end: 3469 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attribute",
              loc: { start: 3471, end: 3480 },
            },
            loc: { start: 3471, end: 3480 },
          },
          directives: [],
          loc: { start: 3447, end: 3480 },
        },
      ],
      loc: { start: 2960, end: 3482 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "EffectModifier",
        loc: { start: 3489, end: 3503 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "func",
            loc: { start: 3508, end: 3512 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3514, end: 3520 },
              },
              loc: { start: 3514, end: 3520 },
            },
            loc: { start: 3514, end: 3521 },
          },
          directives: [],
          loc: { start: 3508, end: 3521 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "domain",
            loc: { start: 3524, end: 3530 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3532, end: 3538 },
            },
            loc: { start: 3532, end: 3538 },
          },
          directives: [],
          loc: { start: 3524, end: 3538 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "effect",
            loc: { start: 3541, end: 3547 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Effect",
              loc: { start: 3549, end: 3555 },
            },
            loc: { start: 3549, end: 3555 },
          },
          directives: [],
          loc: { start: 3541, end: 3555 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "modifiedAttribute",
            loc: { start: 3558, end: 3575 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attribute",
              loc: { start: 3577, end: 3586 },
            },
            loc: { start: 3577, end: 3586 },
          },
          directives: [],
          loc: { start: 3558, end: 3586 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "modifyingAttribute",
            loc: { start: 3589, end: 3607 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Attribute",
              loc: { start: 3609, end: 3618 },
            },
            loc: { start: 3609, end: 3618 },
          },
          directives: [],
          loc: { start: 3589, end: 3618 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "operator",
            loc: { start: 3621, end: 3629 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 3631, end: 3634 },
            },
            loc: { start: 3631, end: 3634 },
          },
          directives: [],
          loc: { start: 3621, end: 3634 },
        },
      ],
      loc: { start: 3484, end: 3636 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Graphic", loc: { start: 3643, end: 3650 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3655, end: 3657 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3659, end: 3661 },
              },
              loc: { start: 3659, end: 3661 },
            },
            loc: { start: 3659, end: 3662 },
          },
          directives: [],
          loc: { start: 3655, end: 3662 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collisionFile",
            loc: { start: 3665, end: 3678 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3680, end: 3686 },
            },
            loc: { start: 3680, end: 3686 },
          },
          directives: [],
          loc: { start: 3665, end: 3686 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "graphicFile",
            loc: { start: 3689, end: 3700 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3702, end: 3708 },
            },
            loc: { start: 3702, end: 3708 },
          },
          directives: [],
          loc: { start: 3689, end: 3708 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "iconFolder",
            loc: { start: 3711, end: 3721 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3723, end: 3729 },
            },
            loc: { start: 3723, end: 3729 },
          },
          directives: [],
          loc: { start: 3711, end: 3729 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sofDna",
            loc: { start: 3732, end: 3738 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3740, end: 3746 },
            },
            loc: { start: 3740, end: 3746 },
          },
          directives: [],
          loc: { start: 3732, end: 3746 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sofFactionName",
            loc: { start: 3749, end: 3763 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3765, end: 3771 },
            },
            loc: { start: 3765, end: 3771 },
          },
          directives: [],
          loc: { start: 3749, end: 3771 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sofHullName",
            loc: { start: 3774, end: 3785 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3787, end: 3793 },
            },
            loc: { start: 3787, end: 3793 },
          },
          directives: [],
          loc: { start: 3774, end: 3793 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sofRaceName",
            loc: { start: 3796, end: 3807 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 3809, end: 3815 },
            },
            loc: { start: 3809, end: 3815 },
          },
          directives: [],
          loc: { start: 3796, end: 3815 },
        },
      ],
      loc: { start: 3638, end: 3817 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Group", loc: { start: 3824, end: 3829 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3834, end: 3836 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3838, end: 3840 },
              },
              loc: { start: 3838, end: 3840 },
            },
            loc: { start: 3838, end: 3841 },
          },
          directives: [],
          loc: { start: 3834, end: 3841 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 3844, end: 3852 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 3854, end: 3862 },
              },
              loc: { start: 3854, end: 3862 },
            },
            loc: { start: 3854, end: 3863 },
          },
          directives: [],
          loc: { start: 3844, end: 3863 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 3866, end: 3870 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3872, end: 3878 },
              },
              loc: { start: 3872, end: 3878 },
            },
            loc: { start: 3872, end: 3879 },
          },
          directives: [],
          loc: { start: 3866, end: 3879 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "published",
            loc: { start: 3882, end: 3891 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 3893, end: 3900 },
              },
              loc: { start: 3893, end: 3900 },
            },
            loc: { start: 3893, end: 3901 },
          },
          directives: [],
          loc: { start: 3882, end: 3901 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "types",
            loc: { start: 3904, end: 3909 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Type",
                    loc: { start: 3912, end: 3916 },
                  },
                  loc: { start: 3912, end: 3916 },
                },
                loc: { start: 3912, end: 3917 },
              },
              loc: { start: 3911, end: 3918 },
            },
            loc: { start: 3911, end: 3919 },
          },
          directives: [],
          loc: { start: 3904, end: 3919 },
        },
      ],
      loc: { start: 3819, end: 3921 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Icon", loc: { start: 3928, end: 3932 } },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: {
            kind: "Name",
            value: "cacheControl",
            loc: { start: 3934, end: 3946 },
          },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "maxAge",
                loc: { start: 3947, end: 3953 },
              },
              value: {
                kind: "IntValue",
                value: "3600",
                loc: { start: 3955, end: 3959 },
              },
              loc: { start: 3947, end: 3959 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "scope",
                loc: { start: 3961, end: 3966 },
              },
              value: {
                kind: "EnumValue",
                value: "PUBLIC",
                loc: { start: 3968, end: 3974 },
              },
              loc: { start: 3961, end: 3974 },
            },
          ],
          loc: { start: 3933, end: 3975 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 3980, end: 3982 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 3984, end: 3986 },
              },
              loc: { start: 3984, end: 3986 },
            },
            loc: { start: 3984, end: 3987 },
          },
          directives: [],
          loc: { start: 3980, end: 3987 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "file",
            loc: { start: 3990, end: 3994 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 3996, end: 4002 },
              },
              loc: { start: 3996, end: 4002 },
            },
            loc: { start: 3996, end: 4003 },
          },
          directives: [],
          loc: { start: 3990, end: 4003 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 4006, end: 4017 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4019, end: 4025 },
            },
            loc: { start: 4019, end: 4025 },
          },
          directives: [],
          loc: { start: 4006, end: 4025 },
        },
      ],
      loc: { start: 3923, end: 4027 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ImageVariation",
        loc: { start: 4034, end: 4048 },
      },
      interfaces: [],
      directives: [
        {
          kind: "Directive",
          name: {
            kind: "Name",
            value: "cacheControl",
            loc: { start: 4050, end: 4062 },
          },
          arguments: [
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "maxAge",
                loc: { start: 4063, end: 4069 },
              },
              value: {
                kind: "IntValue",
                value: "3600",
                loc: { start: 4071, end: 4075 },
              },
              loc: { start: 4063, end: 4075 },
            },
            {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "scope",
                loc: { start: 4077, end: 4082 },
              },
              value: {
                kind: "EnumValue",
                value: "PUBLIC",
                loc: { start: 4084, end: 4090 },
              },
              loc: { start: 4077, end: 4090 },
            },
          ],
          loc: { start: 4049, end: 4091 },
        },
      ],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4096, end: 4100 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4102, end: 4104 },
              },
              loc: { start: 4102, end: 4104 },
            },
            loc: { start: 4102, end: 4105 },
          },
          directives: [],
          loc: { start: 4096, end: 4105 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 4108, end: 4111 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4113, end: 4119 },
              },
              loc: { start: 4113, end: 4119 },
            },
            loc: { start: 4113, end: 4120 },
          },
          directives: [],
          loc: { start: 4108, end: 4120 },
        },
      ],
      loc: { start: 4029, end: 4122 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "MarketGroup",
        loc: { start: 4129, end: 4140 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4145, end: 4147 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4149, end: 4151 },
              },
              loc: { start: 4149, end: 4151 },
            },
            loc: { start: 4149, end: 4152 },
          },
          directives: [],
          loc: { start: 4145, end: 4152 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4155, end: 4159 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4161, end: 4167 },
              },
              loc: { start: 4161, end: 4167 },
            },
            loc: { start: 4161, end: 4168 },
          },
          directives: [],
          loc: { start: 4155, end: 4168 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 4171, end: 4182 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4184, end: 4190 },
              },
              loc: { start: 4184, end: 4190 },
            },
            loc: { start: 4184, end: 4191 },
          },
          directives: [],
          loc: { start: 4171, end: 4191 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "parentGroup",
            loc: { start: 4194, end: 4205 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "MarketGroup",
              loc: { start: 4207, end: 4218 },
            },
            loc: { start: 4207, end: 4218 },
          },
          directives: [],
          loc: { start: 4194, end: 4218 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "types",
            loc: { start: 4221, end: 4226 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Type",
                    loc: { start: 4229, end: 4233 },
                  },
                  loc: { start: 4229, end: 4233 },
                },
                loc: { start: 4229, end: 4234 },
              },
              loc: { start: 4228, end: 4235 },
            },
            loc: { start: 4228, end: 4236 },
          },
          directives: [],
          loc: { start: 4221, end: 4236 },
        },
      ],
      loc: { start: 4124, end: 4238 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Alliance",
        loc: { start: 4245, end: 4253 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4258, end: 4260 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4262, end: 4264 },
              },
              loc: { start: 4262, end: 4264 },
            },
            loc: { start: 4262, end: 4265 },
          },
          directives: [],
          loc: { start: 4258, end: 4265 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creatorCorporation",
            loc: { start: 4268, end: 4286 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 4288, end: 4299 },
              },
              loc: { start: 4288, end: 4299 },
            },
            loc: { start: 4288, end: 4300 },
          },
          directives: [],
          loc: { start: 4268, end: 4300 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "creator",
            loc: { start: 4303, end: 4310 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Character",
                loc: { start: 4312, end: 4321 },
              },
              loc: { start: 4312, end: 4321 },
            },
            loc: { start: 4312, end: 4322 },
          },
          directives: [],
          loc: { start: 4303, end: 4322 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dateFounded",
            loc: { start: 4325, end: 4336 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4338, end: 4344 },
              },
              loc: { start: 4338, end: 4344 },
            },
            loc: { start: 4338, end: 4345 },
          },
          directives: [],
          loc: { start: 4325, end: 4345 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "executorCorporation",
            loc: { start: 4348, end: 4367 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Corporation",
              loc: { start: 4369, end: 4380 },
            },
            loc: { start: 4369, end: 4380 },
          },
          directives: [],
          loc: { start: 4348, end: 4380 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 4383, end: 4390 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 4392, end: 4399 },
            },
            loc: { start: 4392, end: 4399 },
          },
          directives: [],
          loc: { start: 4383, end: 4399 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4402, end: 4406 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4408, end: 4414 },
              },
              loc: { start: 4408, end: 4414 },
            },
            loc: { start: 4408, end: 4415 },
          },
          directives: [],
          loc: { start: 4402, end: 4415 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ticker",
            loc: { start: 4418, end: 4424 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4426, end: 4432 },
              },
              loc: { start: 4426, end: 4432 },
            },
            loc: { start: 4426, end: 4433 },
          },
          directives: [],
          loc: { start: 4418, end: 4433 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporations",
            loc: { start: 4436, end: 4448 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Corporation",
                    loc: { start: 4451, end: 4462 },
                  },
                  loc: { start: 4451, end: 4462 },
                },
                loc: { start: 4451, end: 4463 },
              },
              loc: { start: 4450, end: 4464 },
            },
            loc: { start: 4450, end: 4465 },
          },
          directives: [],
          loc: { start: 4436, end: 4465 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 4468, end: 4474 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 4477, end: 4491 },
                  },
                  loc: { start: 4477, end: 4491 },
                },
                loc: { start: 4477, end: 4492 },
              },
              loc: { start: 4476, end: 4493 },
            },
            loc: { start: 4476, end: 4494 },
          },
          directives: [],
          loc: { start: 4468, end: 4494 },
        },
      ],
      loc: { start: 4240, end: 4496 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CorporationMembership",
        loc: { start: 4503, end: 4524 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 4529, end: 4540 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 4542, end: 4553 },
              },
              loc: { start: 4542, end: 4553 },
            },
            loc: { start: 4542, end: 4554 },
          },
          directives: [],
          loc: { start: 4529, end: 4554 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isDeleted",
            loc: { start: 4557, end: 4566 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 4568, end: 4575 },
              },
              loc: { start: 4568, end: 4575 },
            },
            loc: { start: 4568, end: 4576 },
          },
          directives: [],
          loc: { start: 4557, end: 4576 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "recordId",
            loc: { start: 4579, end: 4587 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 4589, end: 4592 },
              },
              loc: { start: 4589, end: 4592 },
            },
            loc: { start: 4589, end: 4593 },
          },
          directives: [],
          loc: { start: 4579, end: 4593 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startDate",
            loc: { start: 4596, end: 4605 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4607, end: 4613 },
              },
              loc: { start: 4607, end: 4613 },
            },
            loc: { start: 4607, end: 4614 },
          },
          directives: [],
          loc: { start: 4596, end: 4614 },
        },
      ],
      loc: { start: 4498, end: 4616 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Faction", loc: { start: 4623, end: 4630 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4635, end: 4637 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4639, end: 4641 },
              },
              loc: { start: 4639, end: 4641 },
            },
            loc: { start: 4639, end: 4642 },
          },
          directives: [],
          loc: { start: 4635, end: 4642 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 4645, end: 4656 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Corporation",
              loc: { start: 4658, end: 4669 },
            },
            loc: { start: 4658, end: 4669 },
          },
          directives: [],
          loc: { start: 4645, end: 4669 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 4672, end: 4683 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4685, end: 4691 },
              },
              loc: { start: 4685, end: 4691 },
            },
            loc: { start: 4685, end: 4692 },
          },
          directives: [],
          loc: { start: 4672, end: 4692 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isUnique",
            loc: { start: 4695, end: 4703 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 4705, end: 4712 },
              },
              loc: { start: 4705, end: 4712 },
            },
            loc: { start: 4705, end: 4713 },
          },
          directives: [],
          loc: { start: 4695, end: 4713 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "militiaCorporation",
            loc: { start: 4716, end: 4734 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Corporation",
              loc: { start: 4736, end: 4747 },
            },
            loc: { start: 4736, end: 4747 },
          },
          directives: [],
          loc: { start: 4716, end: 4747 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4750, end: 4754 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4756, end: 4762 },
              },
              loc: { start: 4756, end: 4762 },
            },
            loc: { start: 4756, end: 4763 },
          },
          directives: [],
          loc: { start: 4750, end: 4763 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "sizeFactor",
            loc: { start: 4766, end: 4776 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 4778, end: 4783 },
              },
              loc: { start: 4778, end: 4783 },
            },
            loc: { start: 4778, end: 4784 },
          },
          directives: [],
          loc: { start: 4766, end: 4784 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 4787, end: 4798 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "SolarSystem",
              loc: { start: 4800, end: 4811 },
            },
            loc: { start: 4800, end: 4811 },
          },
          directives: [],
          loc: { start: 4787, end: 4811 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stationCount",
            loc: { start: 4814, end: 4826 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 4828, end: 4831 },
              },
              loc: { start: 4828, end: 4831 },
            },
            loc: { start: 4828, end: 4832 },
          },
          directives: [],
          loc: { start: 4814, end: 4832 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stationSystemCount",
            loc: { start: 4835, end: 4853 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 4855, end: 4858 },
              },
              loc: { start: 4855, end: 4858 },
            },
            loc: { start: 4855, end: 4859 },
          },
          directives: [],
          loc: { start: 4835, end: 4859 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 4862, end: 4868 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 4871, end: 4885 },
                  },
                  loc: { start: 4871, end: 4885 },
                },
                loc: { start: 4871, end: 4886 },
              },
              loc: { start: 4870, end: 4887 },
            },
            loc: { start: 4870, end: 4888 },
          },
          directives: [],
          loc: { start: 4862, end: 4888 },
        },
      ],
      loc: { start: 4618, end: 4890 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Unit", loc: { start: 4897, end: 4901 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4906, end: 4908 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4910, end: 4912 },
              },
              loc: { start: 4910, end: 4912 },
            },
            loc: { start: 4910, end: 4913 },
          },
          directives: [],
          loc: { start: 4906, end: 4913 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 4916, end: 4920 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 4922, end: 4928 },
              },
              loc: { start: 4922, end: 4928 },
            },
            loc: { start: 4922, end: 4929 },
          },
          directives: [],
          loc: { start: 4916, end: 4929 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "displayName",
            loc: { start: 4932, end: 4943 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4945, end: 4951 },
            },
            loc: { start: 4945, end: 4951 },
          },
          directives: [],
          loc: { start: 4932, end: 4951 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 4954, end: 4965 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 4967, end: 4973 },
            },
            loc: { start: 4967, end: 4973 },
          },
          directives: [],
          loc: { start: 4954, end: 4973 },
        },
      ],
      loc: { start: 4892, end: 4975 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Category",
        loc: { start: 4982, end: 4990 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 4995, end: 4997 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 4999, end: 5001 },
              },
              loc: { start: 4999, end: 5001 },
            },
            loc: { start: 4999, end: 5002 },
          },
          directives: [],
          loc: { start: 4995, end: 5002 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5005, end: 5009 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5011, end: 5017 },
              },
              loc: { start: 5011, end: 5017 },
            },
            loc: { start: 5011, end: 5018 },
          },
          directives: [],
          loc: { start: 5005, end: 5018 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "published",
            loc: { start: 5021, end: 5030 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 5032, end: 5039 },
              },
              loc: { start: 5032, end: 5039 },
            },
            loc: { start: 5032, end: 5040 },
          },
          directives: [],
          loc: { start: 5021, end: 5040 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "groups",
            loc: { start: 5043, end: 5049 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Group",
                    loc: { start: 5052, end: 5057 },
                  },
                  loc: { start: 5052, end: 5057 },
                },
                loc: { start: 5052, end: 5058 },
              },
              loc: { start: 5051, end: 5059 },
            },
            loc: { start: 5051, end: 5060 },
          },
          directives: [],
          loc: { start: 5043, end: 5060 },
        },
      ],
      loc: { start: 4977, end: 5062 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Bloodline",
        loc: { start: 5069, end: 5078 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5083, end: 5085 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5087, end: 5089 },
              },
              loc: { start: 5087, end: 5089 },
            },
            loc: { start: 5087, end: 5090 },
          },
          directives: [],
          loc: { start: 5083, end: 5090 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "charisma",
            loc: { start: 5093, end: 5101 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5103, end: 5106 },
              },
              loc: { start: 5103, end: 5106 },
            },
            loc: { start: 5103, end: 5107 },
          },
          directives: [],
          loc: { start: 5093, end: 5107 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 5110, end: 5121 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 5123, end: 5134 },
              },
              loc: { start: 5123, end: 5134 },
            },
            loc: { start: 5123, end: 5135 },
          },
          directives: [],
          loc: { start: 5110, end: 5135 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 5138, end: 5149 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5151, end: 5157 },
              },
              loc: { start: 5151, end: 5157 },
            },
            loc: { start: 5151, end: 5158 },
          },
          directives: [],
          loc: { start: 5138, end: 5158 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "intelligence",
            loc: { start: 5161, end: 5173 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5175, end: 5178 },
              },
              loc: { start: 5175, end: 5178 },
            },
            loc: { start: 5175, end: 5179 },
          },
          directives: [],
          loc: { start: 5161, end: 5179 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "memory",
            loc: { start: 5182, end: 5188 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5190, end: 5193 },
              },
              loc: { start: 5190, end: 5193 },
            },
            loc: { start: 5190, end: 5194 },
          },
          directives: [],
          loc: { start: 5182, end: 5194 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5197, end: 5201 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5203, end: 5209 },
              },
              loc: { start: 5203, end: 5209 },
            },
            loc: { start: 5203, end: 5210 },
          },
          directives: [],
          loc: { start: 5197, end: 5210 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "perception",
            loc: { start: 5213, end: 5223 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5225, end: 5228 },
              },
              loc: { start: 5225, end: 5228 },
            },
            loc: { start: 5225, end: 5229 },
          },
          directives: [],
          loc: { start: 5213, end: 5229 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 5232, end: 5236 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 5238, end: 5242 },
              },
              loc: { start: 5238, end: 5242 },
            },
            loc: { start: 5238, end: 5243 },
          },
          directives: [],
          loc: { start: 5232, end: 5243 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shipType",
            loc: { start: 5246, end: 5254 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Type",
              loc: { start: 5256, end: 5260 },
            },
            loc: { start: 5256, end: 5260 },
          },
          directives: [],
          loc: { start: 5246, end: 5260 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "willpower",
            loc: { start: 5263, end: 5272 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5274, end: 5277 },
              },
              loc: { start: 5274, end: 5277 },
            },
            loc: { start: 5274, end: 5278 },
          },
          directives: [],
          loc: { start: 5263, end: 5278 },
        },
      ],
      loc: { start: 5064, end: 5280 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Ancestry",
        loc: { start: 5287, end: 5295 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5300, end: 5302 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5304, end: 5306 },
              },
              loc: { start: 5304, end: 5306 },
            },
            loc: { start: 5304, end: 5307 },
          },
          directives: [],
          loc: { start: 5300, end: 5307 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 5310, end: 5319 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 5321, end: 5330 },
              },
              loc: { start: 5321, end: 5330 },
            },
            loc: { start: 5321, end: 5331 },
          },
          directives: [],
          loc: { start: 5310, end: 5331 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5334, end: 5338 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5340, end: 5346 },
              },
              loc: { start: 5340, end: 5346 },
            },
            loc: { start: 5340, end: 5347 },
          },
          directives: [],
          loc: { start: 5334, end: 5347 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 5350, end: 5361 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5363, end: 5369 },
              },
              loc: { start: 5363, end: 5369 },
            },
            loc: { start: 5363, end: 5370 },
          },
          directives: [],
          loc: { start: 5350, end: 5370 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortDescription",
            loc: { start: 5373, end: 5389 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 5391, end: 5397 },
            },
            loc: { start: 5391, end: 5397 },
          },
          directives: [],
          loc: { start: 5373, end: 5397 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "icon",
            loc: { start: 5400, end: 5404 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Icon",
              loc: { start: 5406, end: 5410 },
            },
            loc: { start: 5406, end: 5410 },
          },
          directives: [],
          loc: { start: 5400, end: 5410 },
        },
      ],
      loc: { start: 5282, end: 5412 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Incursion",
        loc: { start: 5419, end: 5428 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "constellation",
            loc: { start: 5433, end: 5446 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Constellation",
                loc: { start: 5448, end: 5461 },
              },
              loc: { start: 5448, end: 5461 },
            },
            loc: { start: 5448, end: 5462 },
          },
          directives: [],
          loc: { start: 5433, end: 5462 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 5465, end: 5472 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Faction",
                loc: { start: 5474, end: 5481 },
              },
              loc: { start: 5474, end: 5481 },
            },
            loc: { start: 5474, end: 5482 },
          },
          directives: [],
          loc: { start: 5465, end: 5482 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hasBoss",
            loc: { start: 5485, end: 5492 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 5494, end: 5501 },
              },
              loc: { start: 5494, end: 5501 },
            },
            loc: { start: 5494, end: 5502 },
          },
          directives: [],
          loc: { start: 5485, end: 5502 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "infestedSolarSystems",
            loc: { start: 5505, end: 5525 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "SolarSystem",
                    loc: { start: 5528, end: 5539 },
                  },
                  loc: { start: 5528, end: 5539 },
                },
                loc: { start: 5528, end: 5540 },
              },
              loc: { start: 5527, end: 5541 },
            },
            loc: { start: 5527, end: 5542 },
          },
          directives: [],
          loc: { start: 5505, end: 5542 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "influence",
            loc: { start: 5545, end: 5554 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 5556, end: 5561 },
              },
              loc: { start: 5556, end: 5561 },
            },
            loc: { start: 5556, end: 5562 },
          },
          directives: [],
          loc: { start: 5545, end: 5562 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stagingSolarSystem",
            loc: { start: 5565, end: 5583 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 5585, end: 5596 },
              },
              loc: { start: 5585, end: 5596 },
            },
            loc: { start: 5585, end: 5597 },
          },
          directives: [],
          loc: { start: 5565, end: 5597 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "state",
            loc: { start: 5600, end: 5605 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "IncursionState",
                loc: { start: 5607, end: 5621 },
              },
              loc: { start: 5607, end: 5621 },
            },
            loc: { start: 5607, end: 5622 },
          },
          directives: [],
          loc: { start: 5600, end: 5622 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 5625, end: 5629 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5631, end: 5637 },
              },
              loc: { start: 5631, end: 5637 },
            },
            loc: { start: 5631, end: 5638 },
          },
          directives: [],
          loc: { start: 5625, end: 5638 },
        },
      ],
      loc: { start: 5414, end: 5640 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "IncursionState",
        loc: { start: 5647, end: 5661 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "WITHDRAWING",
            loc: { start: 5666, end: 5677 },
          },
          directives: [],
          loc: { start: 5666, end: 5677 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "MOBILIZING",
            loc: { start: 5680, end: 5690 },
          },
          directives: [],
          loc: { start: 5680, end: 5690 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "ESTABLISHED",
            loc: { start: 5693, end: 5704 },
          },
          directives: [],
          loc: { start: 5693, end: 5704 },
        },
      ],
      loc: { start: 5642, end: 5706 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ServerStatus",
        loc: { start: 5713, end: 5725 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5730, end: 5732 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5734, end: 5736 },
              },
              loc: { start: 5734, end: 5736 },
            },
            loc: { start: 5734, end: 5737 },
          },
          directives: [],
          loc: { start: 5730, end: 5737 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "numPlayers",
            loc: { start: 5740, end: 5750 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 5752, end: 5755 },
              },
              loc: { start: 5752, end: 5755 },
            },
            loc: { start: 5752, end: 5756 },
          },
          directives: [],
          loc: { start: 5740, end: 5756 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "version",
            loc: { start: 5759, end: 5766 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5768, end: 5774 },
              },
              loc: { start: 5768, end: 5774 },
            },
            loc: { start: 5768, end: 5775 },
          },
          directives: [],
          loc: { start: 5759, end: 5775 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startTime",
            loc: { start: 5778, end: 5787 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5789, end: 5795 },
              },
              loc: { start: 5789, end: 5795 },
            },
            loc: { start: 5789, end: 5796 },
          },
          directives: [],
          loc: { start: 5778, end: 5796 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "vipMode",
            loc: { start: 5799, end: 5806 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 5808, end: 5815 },
              },
              loc: { start: 5808, end: 5815 },
            },
            loc: { start: 5808, end: 5816 },
          },
          directives: [],
          loc: { start: 5799, end: 5816 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastUpdated",
            loc: { start: 5819, end: 5830 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5832, end: 5838 },
              },
              loc: { start: 5832, end: 5838 },
            },
            loc: { start: 5832, end: 5839 },
          },
          directives: [],
          loc: { start: 5819, end: 5839 },
        },
      ],
      loc: { start: 5708, end: 5841 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Structure",
        loc: { start: 5848, end: 5857 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 5862, end: 5864 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 5866, end: 5868 },
              },
              loc: { start: 5866, end: 5868 },
            },
            loc: { start: 5866, end: 5869 },
          },
          directives: [],
          loc: { start: 5862, end: 5869 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 5872, end: 5876 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 5878, end: 5884 },
              },
              loc: { start: 5878, end: 5884 },
            },
            loc: { start: 5878, end: 5885 },
          },
          directives: [],
          loc: { start: 5872, end: 5885 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "owner",
            loc: { start: 5888, end: 5893 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 5895, end: 5906 },
              },
              loc: { start: 5895, end: 5906 },
            },
            loc: { start: 5895, end: 5907 },
          },
          directives: [],
          loc: { start: 5888, end: 5907 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "position",
            loc: { start: 5910, end: 5918 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Position",
                loc: { start: 5920, end: 5928 },
              },
              loc: { start: 5920, end: 5928 },
            },
            loc: { start: 5920, end: 5929 },
          },
          directives: [],
          loc: { start: 5910, end: 5929 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 5932, end: 5943 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 5945, end: 5956 },
              },
              loc: { start: 5945, end: 5956 },
            },
            loc: { start: 5945, end: 5957 },
          },
          directives: [],
          loc: { start: 5932, end: 5957 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 5960, end: 5964 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Type",
              loc: { start: 5966, end: 5970 },
            },
            loc: { start: 5966, end: 5970 },
          },
          directives: [],
          loc: { start: 5960, end: 5970 },
        },
      ],
      loc: { start: 5843, end: 5972 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "OpportunityGroup",
        loc: { start: 5979, end: 5995 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 6000, end: 6002 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 6004, end: 6006 },
              },
              loc: { start: 6004, end: 6006 },
            },
            loc: { start: 6004, end: 6007 },
          },
          directives: [],
          loc: { start: 6000, end: 6007 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 6010, end: 6014 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6016, end: 6022 },
              },
              loc: { start: 6016, end: 6022 },
            },
            loc: { start: 6016, end: 6023 },
          },
          directives: [],
          loc: { start: 6010, end: 6023 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 6026, end: 6037 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6039, end: 6045 },
              },
              loc: { start: 6039, end: 6045 },
            },
            loc: { start: 6039, end: 6046 },
          },
          directives: [],
          loc: { start: 6026, end: 6046 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "notification",
            loc: { start: 6049, end: 6061 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6063, end: 6069 },
              },
              loc: { start: 6063, end: 6069 },
            },
            loc: { start: 6063, end: 6070 },
          },
          directives: [],
          loc: { start: 6049, end: 6070 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "connectedGroups",
            loc: { start: 6073, end: 6088 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OpportunityGroup",
                    loc: { start: 6091, end: 6107 },
                  },
                  loc: { start: 6091, end: 6107 },
                },
                loc: { start: 6091, end: 6108 },
              },
              loc: { start: 6090, end: 6109 },
            },
            loc: { start: 6090, end: 6110 },
          },
          directives: [],
          loc: { start: 6073, end: 6110 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "requiredTasks",
            loc: { start: 6113, end: 6126 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OpportunityTask",
                    loc: { start: 6129, end: 6144 },
                  },
                  loc: { start: 6129, end: 6144 },
                },
                loc: { start: 6129, end: 6145 },
              },
              loc: { start: 6128, end: 6146 },
            },
            loc: { start: 6128, end: 6147 },
          },
          directives: [],
          loc: { start: 6113, end: 6147 },
        },
      ],
      loc: { start: 5974, end: 6149 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "OpportunityTask",
        loc: { start: 6156, end: 6171 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 6176, end: 6178 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 6180, end: 6182 },
              },
              loc: { start: 6180, end: 6182 },
            },
            loc: { start: 6180, end: 6183 },
          },
          directives: [],
          loc: { start: 6176, end: 6183 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 6186, end: 6190 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6192, end: 6198 },
              },
              loc: { start: 6192, end: 6198 },
            },
            loc: { start: 6192, end: 6199 },
          },
          directives: [],
          loc: { start: 6186, end: 6199 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 6202, end: 6213 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6215, end: 6221 },
              },
              loc: { start: 6215, end: 6221 },
            },
            loc: { start: 6215, end: 6222 },
          },
          directives: [],
          loc: { start: 6202, end: 6222 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "notification",
            loc: { start: 6225, end: 6237 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6239, end: 6245 },
              },
              loc: { start: 6239, end: 6245 },
            },
            loc: { start: 6239, end: 6246 },
          },
          directives: [],
          loc: { start: 6225, end: 6246 },
        },
      ],
      loc: { start: 6151, end: 6248 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "ContractType",
        loc: { start: 6255, end: 6267 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "itemexchange",
            loc: { start: 6272, end: 6284 },
          },
          directives: [],
          loc: { start: 6272, end: 6284 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "auction",
            loc: { start: 6287, end: 6294 },
          },
          directives: [],
          loc: { start: 6287, end: 6294 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "courier",
            loc: { start: 6297, end: 6304 },
          },
          directives: [],
          loc: { start: 6297, end: 6304 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "loan",
            loc: { start: 6307, end: 6311 },
          },
          directives: [],
          loc: { start: 6307, end: 6311 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "unknown",
            loc: { start: 6314, end: 6321 },
          },
          directives: [],
          loc: { start: 6314, end: 6321 },
        },
      ],
      loc: { start: 6250, end: 6323 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: {
        kind: "Name",
        value: "Contract",
        loc: { start: 6335, end: 6343 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 6348, end: 6350 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 6352, end: 6354 },
              },
              loc: { start: 6352, end: 6354 },
            },
            loc: { start: 6352, end: 6355 },
          },
          directives: [],
          loc: { start: 6348, end: 6355 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dateIssued",
            loc: { start: 6358, end: 6368 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6370, end: 6376 },
              },
              loc: { start: 6370, end: 6376 },
            },
            loc: { start: 6370, end: 6377 },
          },
          directives: [],
          loc: { start: 6358, end: 6377 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dateExpired",
            loc: { start: 6380, end: 6391 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6393, end: 6399 },
              },
              loc: { start: 6393, end: 6399 },
            },
            loc: { start: 6393, end: 6400 },
          },
          directives: [],
          loc: { start: 6380, end: 6400 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "daysToComplete",
            loc: { start: 6403, end: 6417 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 6419, end: 6422 },
            },
            loc: { start: 6419, end: 6422 },
          },
          directives: [],
          loc: { start: 6403, end: 6422 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "forCorporation",
            loc: { start: 6425, end: 6439 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 6441, end: 6448 },
              },
              loc: { start: 6441, end: 6448 },
            },
            loc: { start: 6441, end: 6449 },
          },
          directives: [],
          loc: { start: 6425, end: 6449 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issuerCorporation",
            loc: { start: 6452, end: 6469 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Corporation",
              loc: { start: 6471, end: 6482 },
            },
            loc: { start: 6471, end: 6482 },
          },
          directives: [],
          loc: { start: 6452, end: 6482 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issuer",
            loc: { start: 6485, end: 6491 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Character",
              loc: { start: 6493, end: 6502 },
            },
            loc: { start: 6493, end: 6502 },
          },
          directives: [],
          loc: { start: 6485, end: 6502 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 6505, end: 6510 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6512, end: 6518 },
            },
            loc: { start: 6512, end: 6518 },
          },
          directives: [],
          loc: { start: 6505, end: 6518 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 6521, end: 6525 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ContractType",
                loc: { start: 6527, end: 6539 },
              },
              loc: { start: 6527, end: 6539 },
            },
            loc: { start: 6527, end: 6540 },
          },
          directives: [],
          loc: { start: 6521, end: 6540 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 6543, end: 6549 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6551, end: 6556 },
            },
            loc: { start: 6551, end: 6556 },
          },
          directives: [],
          loc: { start: 6543, end: 6556 },
        },
      ],
      loc: { start: 6325, end: 6558 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ItemExchangeContract",
        loc: { start: 6565, end: 6585 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Contract",
            loc: { start: 6597, end: 6605 },
          },
          loc: { start: 6597, end: 6605 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 6610, end: 6612 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 6614, end: 6616 },
              },
              loc: { start: 6614, end: 6616 },
            },
            loc: { start: 6614, end: 6617 },
          },
          directives: [],
          loc: { start: 6610, end: 6617 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "buyout",
            loc: { start: 6620, end: 6626 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6628, end: 6633 },
            },
            loc: { start: 6628, end: 6633 },
          },
          directives: [],
          loc: { start: 6620, end: 6633 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collateral",
            loc: { start: 6636, end: 6646 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6648, end: 6653 },
            },
            loc: { start: 6648, end: 6653 },
          },
          directives: [],
          loc: { start: 6636, end: 6653 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dateIssued",
            loc: { start: 6656, end: 6666 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6668, end: 6674 },
              },
              loc: { start: 6668, end: 6674 },
            },
            loc: { start: 6668, end: 6675 },
          },
          directives: [],
          loc: { start: 6656, end: 6675 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dateExpired",
            loc: { start: 6678, end: 6689 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 6691, end: 6697 },
              },
              loc: { start: 6691, end: 6697 },
            },
            loc: { start: 6691, end: 6698 },
          },
          directives: [],
          loc: { start: 6678, end: 6698 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "daysToComplete",
            loc: { start: 6701, end: 6715 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 6717, end: 6720 },
            },
            loc: { start: 6717, end: 6720 },
          },
          directives: [],
          loc: { start: 6701, end: 6720 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "endLocation",
            loc: { start: 6723, end: 6734 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Station",
              loc: { start: 6736, end: 6743 },
            },
            loc: { start: 6736, end: 6743 },
          },
          directives: [],
          loc: { start: 6723, end: 6743 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "forCorporation",
            loc: { start: 6746, end: 6760 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 6762, end: 6769 },
              },
              loc: { start: 6762, end: 6769 },
            },
            loc: { start: 6762, end: 6770 },
          },
          directives: [],
          loc: { start: 6746, end: 6770 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issuerCorporation",
            loc: { start: 6773, end: 6790 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Corporation",
              loc: { start: 6792, end: 6803 },
            },
            loc: { start: 6792, end: 6803 },
          },
          directives: [],
          loc: { start: 6773, end: 6803 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issuer",
            loc: { start: 6806, end: 6812 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Character",
              loc: { start: 6814, end: 6823 },
            },
            loc: { start: 6814, end: 6823 },
          },
          directives: [],
          loc: { start: 6806, end: 6823 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 6826, end: 6831 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6833, end: 6838 },
            },
            loc: { start: 6833, end: 6838 },
          },
          directives: [],
          loc: { start: 6826, end: 6838 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reward",
            loc: { start: 6841, end: 6847 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6849, end: 6854 },
            },
            loc: { start: 6849, end: 6854 },
          },
          directives: [],
          loc: { start: 6841, end: 6854 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "startLocation",
            loc: { start: 6857, end: 6870 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Station",
              loc: { start: 6872, end: 6879 },
            },
            loc: { start: 6872, end: 6879 },
          },
          directives: [],
          loc: { start: 6857, end: 6879 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 6882, end: 6887 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 6889, end: 6895 },
            },
            loc: { start: 6889, end: 6895 },
          },
          directives: [],
          loc: { start: 6882, end: 6895 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 6898, end: 6902 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ContractType",
                loc: { start: 6904, end: 6916 },
              },
              loc: { start: 6904, end: 6916 },
            },
            loc: { start: 6904, end: 6917 },
          },
          directives: [],
          loc: { start: 6898, end: 6917 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "volume",
            loc: { start: 6920, end: 6926 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 6928, end: 6933 },
            },
            loc: { start: 6928, end: 6933 },
          },
          directives: [],
          loc: { start: 6920, end: 6933 },
        },
      ],
      loc: { start: 6560, end: 6935 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: {
        kind: "Name",
        value: "Character",
        loc: { start: 6947, end: 6956 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 6961, end: 6963 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 6965, end: 6967 },
              },
              loc: { start: 6965, end: 6967 },
            },
            loc: { start: 6965, end: 6968 },
          },
          directives: [],
          loc: { start: 6961, end: 6968 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 6971, end: 6979 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 6981, end: 6989 },
            },
            loc: { start: 6981, end: 6989 },
          },
          directives: [],
          loc: { start: 6971, end: 6989 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "birthday",
            loc: { start: 6992, end: 7000 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 7002, end: 7008 },
              },
              loc: { start: 7002, end: 7008 },
            },
            loc: { start: 7002, end: 7009 },
          },
          directives: [],
          loc: { start: 6992, end: 7009 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 7012, end: 7021 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 7023, end: 7032 },
              },
              loc: { start: 7023, end: 7032 },
            },
            loc: { start: 7023, end: 7033 },
          },
          directives: [],
          loc: { start: 7012, end: 7033 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 7036, end: 7047 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 7049, end: 7060 },
              },
              loc: { start: 7049, end: 7060 },
            },
            loc: { start: 7049, end: 7061 },
          },
          directives: [],
          loc: { start: 7036, end: 7061 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 7064, end: 7075 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 7077, end: 7083 },
            },
            loc: { start: 7077, end: 7083 },
          },
          directives: [],
          loc: { start: 7064, end: 7083 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 7086, end: 7093 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 7095, end: 7102 },
            },
            loc: { start: 7095, end: 7102 },
          },
          directives: [],
          loc: { start: 7086, end: 7102 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gender",
            loc: { start: 7105, end: 7111 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 7113, end: 7119 },
              },
              loc: { start: 7113, end: 7119 },
            },
            loc: { start: 7113, end: 7120 },
          },
          directives: [],
          loc: { start: 7105, end: 7120 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 7123, end: 7127 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 7129, end: 7135 },
              },
              loc: { start: 7129, end: 7135 },
            },
            loc: { start: 7129, end: 7136 },
          },
          directives: [],
          loc: { start: 7123, end: 7136 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 7139, end: 7143 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 7145, end: 7149 },
              },
              loc: { start: 7145, end: 7149 },
            },
            loc: { start: 7145, end: 7150 },
          },
          directives: [],
          loc: { start: 7139, end: 7150 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityStatus",
            loc: { start: 7153, end: 7167 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 7169, end: 7174 },
            },
            loc: { start: 7169, end: 7174 },
          },
          directives: [],
          loc: { start: 7153, end: 7174 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 7177, end: 7182 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 7184, end: 7190 },
            },
            loc: { start: 7184, end: 7190 },
          },
          directives: [],
          loc: { start: 7177, end: 7190 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporationHistory",
            loc: { start: 7193, end: 7211 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CorporationMembership",
                    loc: { start: 7214, end: 7235 },
                  },
                  loc: { start: 7214, end: 7235 },
                },
                loc: { start: 7214, end: 7236 },
              },
              loc: { start: 7213, end: 7237 },
            },
            loc: { start: 7213, end: 7238 },
          },
          directives: [],
          loc: { start: 7193, end: 7238 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 7241, end: 7247 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 7250, end: 7264 },
                  },
                  loc: { start: 7250, end: 7264 },
                },
                loc: { start: 7250, end: 7265 },
              },
              loc: { start: 7249, end: 7266 },
            },
            loc: { start: 7249, end: 7267 },
          },
          directives: [],
          loc: { start: 7241, end: 7267 },
        },
      ],
      loc: { start: 6937, end: 7269 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Player", loc: { start: 7276, end: 7282 } },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Character",
            loc: { start: 7294, end: 7303 },
          },
          loc: { start: 7294, end: 7303 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 7308, end: 7310 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 7312, end: 7314 },
              },
              loc: { start: 7312, end: 7314 },
            },
            loc: { start: 7312, end: 7315 },
          },
          directives: [],
          loc: { start: 7308, end: 7315 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 7318, end: 7326 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 7328, end: 7336 },
            },
            loc: { start: 7328, end: 7336 },
          },
          directives: [],
          loc: { start: 7318, end: 7336 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "birthday",
            loc: { start: 7339, end: 7347 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 7349, end: 7355 },
              },
              loc: { start: 7349, end: 7355 },
            },
            loc: { start: 7349, end: 7356 },
          },
          directives: [],
          loc: { start: 7339, end: 7356 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 7359, end: 7368 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 7370, end: 7379 },
              },
              loc: { start: 7370, end: 7379 },
            },
            loc: { start: 7370, end: 7380 },
          },
          directives: [],
          loc: { start: 7359, end: 7380 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 7383, end: 7394 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 7396, end: 7407 },
              },
              loc: { start: 7396, end: 7407 },
            },
            loc: { start: 7396, end: 7408 },
          },
          directives: [],
          loc: { start: 7383, end: 7408 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 7411, end: 7422 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 7424, end: 7430 },
            },
            loc: { start: 7424, end: 7430 },
          },
          directives: [],
          loc: { start: 7411, end: 7430 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 7433, end: 7440 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 7442, end: 7449 },
            },
            loc: { start: 7442, end: 7449 },
          },
          directives: [],
          loc: { start: 7433, end: 7449 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gender",
            loc: { start: 7452, end: 7458 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 7460, end: 7466 },
              },
              loc: { start: 7460, end: 7466 },
            },
            loc: { start: 7460, end: 7467 },
          },
          directives: [],
          loc: { start: 7452, end: 7467 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 7470, end: 7474 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 7476, end: 7482 },
              },
              loc: { start: 7476, end: 7482 },
            },
            loc: { start: 7476, end: 7483 },
          },
          directives: [],
          loc: { start: 7470, end: 7483 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 7486, end: 7490 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 7492, end: 7496 },
              },
              loc: { start: 7492, end: 7496 },
            },
            loc: { start: 7492, end: 7497 },
          },
          directives: [],
          loc: { start: 7486, end: 7497 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityStatus",
            loc: { start: 7500, end: 7514 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 7516, end: 7521 },
            },
            loc: { start: 7516, end: 7521 },
          },
          directives: [],
          loc: { start: 7500, end: 7521 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 7524, end: 7529 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 7531, end: 7537 },
            },
            loc: { start: 7531, end: 7537 },
          },
          directives: [],
          loc: { start: 7524, end: 7537 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporationHistory",
            loc: { start: 7540, end: 7558 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CorporationMembership",
                    loc: { start: 7561, end: 7582 },
                  },
                  loc: { start: 7561, end: 7582 },
                },
                loc: { start: 7561, end: 7583 },
              },
              loc: { start: 7560, end: 7584 },
            },
            loc: { start: 7560, end: 7585 },
          },
          directives: [],
          loc: { start: 7540, end: 7585 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 7588, end: 7594 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 7597, end: 7611 },
                  },
                  loc: { start: 7597, end: 7611 },
                },
                loc: { start: 7597, end: 7612 },
              },
              loc: { start: 7596, end: 7613 },
            },
            loc: { start: 7596, end: 7614 },
          },
          directives: [],
          loc: { start: 7588, end: 7614 },
        },
      ],
      loc: { start: 7271, end: 7616 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PlayerLocation",
        loc: { start: 7623, end: 7637 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 7642, end: 7653 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 7655, end: 7666 },
              },
              loc: { start: 7655, end: 7666 },
            },
            loc: { start: 7655, end: 7667 },
          },
          directives: [],
          loc: { start: 7642, end: 7667 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "station",
            loc: { start: 7670, end: 7677 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Station",
              loc: { start: 7679, end: 7686 },
            },
            loc: { start: 7679, end: 7686 },
          },
          directives: [],
          loc: { start: 7670, end: 7686 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "structure",
            loc: { start: 7689, end: 7698 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Structure",
              loc: { start: 7700, end: 7709 },
            },
            loc: { start: 7700, end: 7709 },
          },
          directives: [],
          loc: { start: 7689, end: 7709 },
        },
      ],
      loc: { start: 7618, end: 7711 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PlayerOnlineStatus",
        loc: { start: 7718, end: 7736 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastLogin",
            loc: { start: 7741, end: 7750 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 7752, end: 7758 },
            },
            loc: { start: 7752, end: 7758 },
          },
          directives: [],
          loc: { start: 7741, end: 7758 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "lastLogout",
            loc: { start: 7761, end: 7771 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 7773, end: 7779 },
            },
            loc: { start: 7773, end: 7779 },
          },
          directives: [],
          loc: { start: 7761, end: 7779 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "numLogins",
            loc: { start: 7782, end: 7791 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 7793, end: 7796 },
            },
            loc: { start: 7793, end: 7796 },
          },
          directives: [],
          loc: { start: 7782, end: 7796 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isOnline",
            loc: { start: 7799, end: 7807 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 7809, end: 7816 },
              },
              loc: { start: 7809, end: 7816 },
            },
            loc: { start: 7809, end: 7817 },
          },
          directives: [],
          loc: { start: 7799, end: 7817 },
        },
      ],
      loc: { start: 7713, end: 7819 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PlayerShip",
        loc: { start: 7826, end: 7836 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "itemId",
            loc: { start: 7841, end: 7847 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 7849, end: 7851 },
              },
              loc: { start: 7849, end: 7851 },
            },
            loc: { start: 7849, end: 7852 },
          },
          directives: [],
          loc: { start: 7841, end: 7852 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 7855, end: 7859 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Type",
                loc: { start: 7861, end: 7865 },
              },
              loc: { start: 7861, end: 7865 },
            },
            loc: { start: 7861, end: 7866 },
          },
          directives: [],
          loc: { start: 7855, end: 7866 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 7869, end: 7873 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 7875, end: 7881 },
              },
              loc: { start: 7875, end: 7881 },
            },
            loc: { start: 7875, end: 7882 },
          },
          directives: [],
          loc: { start: 7869, end: 7882 },
        },
      ],
      loc: { start: 7821, end: 7884 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthenticatedPlayer",
        loc: { start: 7891, end: 7910 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Character",
            loc: { start: 7922, end: 7931 },
          },
          loc: { start: 7922, end: 7931 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 7936, end: 7938 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 7940, end: 7942 },
              },
              loc: { start: 7940, end: 7942 },
            },
            loc: { start: 7940, end: 7943 },
          },
          directives: [],
          loc: { start: 7936, end: 7943 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 7946, end: 7954 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 7956, end: 7964 },
            },
            loc: { start: 7956, end: 7964 },
          },
          directives: [],
          loc: { start: 7946, end: 7964 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "birthday",
            loc: { start: 7967, end: 7975 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 7977, end: 7983 },
              },
              loc: { start: 7977, end: 7983 },
            },
            loc: { start: 7977, end: 7984 },
          },
          directives: [],
          loc: { start: 7967, end: 7984 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 7987, end: 7996 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 7998, end: 8007 },
              },
              loc: { start: 7998, end: 8007 },
            },
            loc: { start: 7998, end: 8008 },
          },
          directives: [],
          loc: { start: 7987, end: 8008 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 8011, end: 8022 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 8024, end: 8035 },
              },
              loc: { start: 8024, end: 8035 },
            },
            loc: { start: 8024, end: 8036 },
          },
          directives: [],
          loc: { start: 8011, end: 8036 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 8039, end: 8050 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 8052, end: 8058 },
            },
            loc: { start: 8052, end: 8058 },
          },
          directives: [],
          loc: { start: 8039, end: 8058 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 8061, end: 8068 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 8070, end: 8077 },
            },
            loc: { start: 8070, end: 8077 },
          },
          directives: [],
          loc: { start: 8061, end: 8077 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gender",
            loc: { start: 8080, end: 8086 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 8088, end: 8094 },
              },
              loc: { start: 8088, end: 8094 },
            },
            loc: { start: 8088, end: 8095 },
          },
          directives: [],
          loc: { start: 8080, end: 8095 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 8098, end: 8102 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 8104, end: 8110 },
              },
              loc: { start: 8104, end: 8110 },
            },
            loc: { start: 8104, end: 8111 },
          },
          directives: [],
          loc: { start: 8098, end: 8111 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 8114, end: 8118 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 8120, end: 8124 },
              },
              loc: { start: 8120, end: 8124 },
            },
            loc: { start: 8120, end: 8125 },
          },
          directives: [],
          loc: { start: 8114, end: 8125 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityStatus",
            loc: { start: 8128, end: 8142 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 8144, end: 8149 },
            },
            loc: { start: 8144, end: 8149 },
          },
          directives: [],
          loc: { start: 8128, end: 8149 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 8152, end: 8157 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 8159, end: 8165 },
            },
            loc: { start: 8159, end: 8165 },
          },
          directives: [],
          loc: { start: 8152, end: 8165 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporationHistory",
            loc: { start: 8168, end: 8186 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CorporationMembership",
                    loc: { start: 8189, end: 8210 },
                  },
                  loc: { start: 8189, end: 8210 },
                },
                loc: { start: 8189, end: 8211 },
              },
              loc: { start: 8188, end: 8212 },
            },
            loc: { start: 8188, end: 8213 },
          },
          directives: [],
          loc: { start: 8168, end: 8213 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 8216, end: 8222 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 8225, end: 8239 },
                  },
                  loc: { start: 8225, end: 8239 },
                },
                loc: { start: 8225, end: 8240 },
              },
              loc: { start: 8224, end: 8241 },
            },
            loc: { start: 8224, end: 8242 },
          },
          directives: [],
          loc: { start: 8216, end: 8242 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 8245, end: 8253 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PlayerLocation",
                loc: { start: 8255, end: 8269 },
              },
              loc: { start: 8255, end: 8269 },
            },
            loc: { start: 8255, end: 8270 },
          },
          directives: [],
          loc: { start: 8245, end: 8270 },
        },
      ],
      loc: { start: 7886, end: 8272 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AgentType",
        loc: { start: 8279, end: 8288 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 8293, end: 8295 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 8297, end: 8299 },
              },
              loc: { start: 8297, end: 8299 },
            },
            loc: { start: 8297, end: 8300 },
          },
          directives: [],
          loc: { start: 8293, end: 8300 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 8303, end: 8307 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 8309, end: 8315 },
              },
              loc: { start: 8309, end: 8315 },
            },
            loc: { start: 8309, end: 8316 },
          },
          directives: [],
          loc: { start: 8303, end: 8316 },
        },
      ],
      loc: { start: 8274, end: 8318 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AgentDivision",
        loc: { start: 8325, end: 8338 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 8343, end: 8345 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 8347, end: 8349 },
              },
              loc: { start: 8347, end: 8349 },
            },
            loc: { start: 8347, end: 8350 },
          },
          directives: [],
          loc: { start: 8343, end: 8350 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 8353, end: 8357 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 8359, end: 8365 },
              },
              loc: { start: 8359, end: 8365 },
            },
            loc: { start: 8359, end: 8366 },
          },
          directives: [],
          loc: { start: 8353, end: 8366 },
        },
      ],
      loc: { start: 8320, end: 8368 },
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "Agent", loc: { start: 8380, end: 8385 } },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Character",
            loc: { start: 8397, end: 8406 },
          },
          loc: { start: 8397, end: 8406 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "division",
            loc: { start: 8411, end: 8419 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgentDivision",
                loc: { start: 8421, end: 8434 },
              },
              loc: { start: 8421, end: 8434 },
            },
            loc: { start: 8421, end: 8435 },
          },
          directives: [],
          loc: { start: 8411, end: 8435 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 8438, end: 8446 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Station",
                loc: { start: 8448, end: 8455 },
              },
              loc: { start: 8448, end: 8455 },
            },
            loc: { start: 8448, end: 8456 },
          },
          directives: [],
          loc: { start: 8438, end: 8456 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "level",
            loc: { start: 8459, end: 8464 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 8466, end: 8469 },
              },
              loc: { start: 8466, end: 8469 },
            },
            loc: { start: 8466, end: 8470 },
          },
          directives: [],
          loc: { start: 8459, end: 8470 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "agentType",
            loc: { start: 8473, end: 8482 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgentType",
                loc: { start: 8484, end: 8493 },
              },
              loc: { start: 8484, end: 8493 },
            },
            loc: { start: 8484, end: 8494 },
          },
          directives: [],
          loc: { start: 8473, end: 8494 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isLocator",
            loc: { start: 8497, end: 8506 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 8508, end: 8515 },
              },
              loc: { start: 8508, end: 8515 },
            },
            loc: { start: 8508, end: 8516 },
          },
          directives: [],
          loc: { start: 8497, end: 8516 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 8519, end: 8521 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 8523, end: 8525 },
              },
              loc: { start: 8523, end: 8525 },
            },
            loc: { start: 8523, end: 8526 },
          },
          directives: [],
          loc: { start: 8519, end: 8526 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 8529, end: 8537 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 8539, end: 8547 },
            },
            loc: { start: 8539, end: 8547 },
          },
          directives: [],
          loc: { start: 8529, end: 8547 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "birthday",
            loc: { start: 8550, end: 8558 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 8560, end: 8566 },
              },
              loc: { start: 8560, end: 8566 },
            },
            loc: { start: 8560, end: 8567 },
          },
          directives: [],
          loc: { start: 8550, end: 8567 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 8570, end: 8579 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 8581, end: 8590 },
              },
              loc: { start: 8581, end: 8590 },
            },
            loc: { start: 8581, end: 8591 },
          },
          directives: [],
          loc: { start: 8570, end: 8591 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 8594, end: 8605 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 8607, end: 8618 },
              },
              loc: { start: 8607, end: 8618 },
            },
            loc: { start: 8607, end: 8619 },
          },
          directives: [],
          loc: { start: 8594, end: 8619 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 8622, end: 8633 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 8635, end: 8641 },
            },
            loc: { start: 8635, end: 8641 },
          },
          directives: [],
          loc: { start: 8622, end: 8641 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 8644, end: 8651 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 8653, end: 8660 },
            },
            loc: { start: 8653, end: 8660 },
          },
          directives: [],
          loc: { start: 8644, end: 8660 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gender",
            loc: { start: 8663, end: 8669 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 8671, end: 8677 },
              },
              loc: { start: 8671, end: 8677 },
            },
            loc: { start: 8671, end: 8678 },
          },
          directives: [],
          loc: { start: 8663, end: 8678 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 8681, end: 8685 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 8687, end: 8693 },
              },
              loc: { start: 8687, end: 8693 },
            },
            loc: { start: 8687, end: 8694 },
          },
          directives: [],
          loc: { start: 8681, end: 8694 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 8697, end: 8701 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 8703, end: 8707 },
              },
              loc: { start: 8703, end: 8707 },
            },
            loc: { start: 8703, end: 8708 },
          },
          directives: [],
          loc: { start: 8697, end: 8708 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityStatus",
            loc: { start: 8711, end: 8725 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 8727, end: 8732 },
            },
            loc: { start: 8727, end: 8732 },
          },
          directives: [],
          loc: { start: 8711, end: 8732 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 8735, end: 8740 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 8742, end: 8748 },
            },
            loc: { start: 8742, end: 8748 },
          },
          directives: [],
          loc: { start: 8735, end: 8748 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporationHistory",
            loc: { start: 8751, end: 8769 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CorporationMembership",
                    loc: { start: 8772, end: 8793 },
                  },
                  loc: { start: 8772, end: 8793 },
                },
                loc: { start: 8772, end: 8794 },
              },
              loc: { start: 8771, end: 8795 },
            },
            loc: { start: 8771, end: 8796 },
          },
          directives: [],
          loc: { start: 8751, end: 8796 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 8799, end: 8805 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 8808, end: 8822 },
                  },
                  loc: { start: 8808, end: 8822 },
                },
                loc: { start: 8808, end: 8823 },
              },
              loc: { start: 8807, end: 8824 },
            },
            loc: { start: 8807, end: 8825 },
          },
          directives: [],
          loc: { start: 8799, end: 8825 },
        },
      ],
      loc: { start: 8370, end: 8827 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "RegularAgent",
        loc: { start: 8834, end: 8846 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Agent",
            loc: { start: 8858, end: 8863 },
          },
          loc: { start: 8858, end: 8863 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Character",
            loc: { start: 8866, end: 8875 },
          },
          loc: { start: 8866, end: 8875 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 8880, end: 8882 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 8884, end: 8886 },
              },
              loc: { start: 8884, end: 8886 },
            },
            loc: { start: 8884, end: 8887 },
          },
          directives: [],
          loc: { start: 8880, end: 8887 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "division",
            loc: { start: 8890, end: 8898 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgentDivision",
                loc: { start: 8900, end: 8913 },
              },
              loc: { start: 8900, end: 8913 },
            },
            loc: { start: 8900, end: 8914 },
          },
          directives: [],
          loc: { start: 8890, end: 8914 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 8917, end: 8925 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Station",
                loc: { start: 8927, end: 8934 },
              },
              loc: { start: 8927, end: 8934 },
            },
            loc: { start: 8927, end: 8935 },
          },
          directives: [],
          loc: { start: 8917, end: 8935 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "level",
            loc: { start: 8938, end: 8943 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 8945, end: 8948 },
              },
              loc: { start: 8945, end: 8948 },
            },
            loc: { start: 8945, end: 8949 },
          },
          directives: [],
          loc: { start: 8938, end: 8949 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "agentType",
            loc: { start: 8952, end: 8961 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgentType",
                loc: { start: 8963, end: 8972 },
              },
              loc: { start: 8963, end: 8972 },
            },
            loc: { start: 8963, end: 8973 },
          },
          directives: [],
          loc: { start: 8952, end: 8973 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isLocator",
            loc: { start: 8976, end: 8985 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 8987, end: 8994 },
              },
              loc: { start: 8987, end: 8994 },
            },
            loc: { start: 8987, end: 8995 },
          },
          directives: [],
          loc: { start: 8976, end: 8995 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 8998, end: 9006 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 9008, end: 9016 },
            },
            loc: { start: 9008, end: 9016 },
          },
          directives: [],
          loc: { start: 8998, end: 9016 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "birthday",
            loc: { start: 9019, end: 9027 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 9029, end: 9035 },
              },
              loc: { start: 9029, end: 9035 },
            },
            loc: { start: 9029, end: 9036 },
          },
          directives: [],
          loc: { start: 9019, end: 9036 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 9039, end: 9048 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 9050, end: 9059 },
              },
              loc: { start: 9050, end: 9059 },
            },
            loc: { start: 9050, end: 9060 },
          },
          directives: [],
          loc: { start: 9039, end: 9060 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 9063, end: 9074 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 9076, end: 9087 },
              },
              loc: { start: 9076, end: 9087 },
            },
            loc: { start: 9076, end: 9088 },
          },
          directives: [],
          loc: { start: 9063, end: 9088 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 9091, end: 9102 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 9104, end: 9110 },
            },
            loc: { start: 9104, end: 9110 },
          },
          directives: [],
          loc: { start: 9091, end: 9110 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 9113, end: 9120 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 9122, end: 9129 },
            },
            loc: { start: 9122, end: 9129 },
          },
          directives: [],
          loc: { start: 9113, end: 9129 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gender",
            loc: { start: 9132, end: 9138 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 9140, end: 9146 },
              },
              loc: { start: 9140, end: 9146 },
            },
            loc: { start: 9140, end: 9147 },
          },
          directives: [],
          loc: { start: 9132, end: 9147 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 9150, end: 9154 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 9156, end: 9162 },
              },
              loc: { start: 9156, end: 9162 },
            },
            loc: { start: 9156, end: 9163 },
          },
          directives: [],
          loc: { start: 9150, end: 9163 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 9166, end: 9170 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 9172, end: 9176 },
              },
              loc: { start: 9172, end: 9176 },
            },
            loc: { start: 9172, end: 9177 },
          },
          directives: [],
          loc: { start: 9166, end: 9177 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityStatus",
            loc: { start: 9180, end: 9194 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 9196, end: 9201 },
            },
            loc: { start: 9196, end: 9201 },
          },
          directives: [],
          loc: { start: 9180, end: 9201 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 9204, end: 9209 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 9211, end: 9217 },
            },
            loc: { start: 9211, end: 9217 },
          },
          directives: [],
          loc: { start: 9204, end: 9217 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporationHistory",
            loc: { start: 9220, end: 9238 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CorporationMembership",
                    loc: { start: 9241, end: 9262 },
                  },
                  loc: { start: 9241, end: 9262 },
                },
                loc: { start: 9241, end: 9263 },
              },
              loc: { start: 9240, end: 9264 },
            },
            loc: { start: 9240, end: 9265 },
          },
          directives: [],
          loc: { start: 9220, end: 9265 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 9268, end: 9274 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 9277, end: 9291 },
                  },
                  loc: { start: 9277, end: 9291 },
                },
                loc: { start: 9277, end: 9292 },
              },
              loc: { start: 9276, end: 9293 },
            },
            loc: { start: 9276, end: 9294 },
          },
          directives: [],
          loc: { start: 9268, end: 9294 },
        },
      ],
      loc: { start: 8829, end: 9296 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Dungeon", loc: { start: 9303, end: 9310 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 9315, end: 9317 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 9319, end: 9321 },
              },
              loc: { start: 9319, end: 9321 },
            },
            loc: { start: 9319, end: 9322 },
          },
          directives: [],
          loc: { start: 9315, end: 9322 },
        },
      ],
      loc: { start: 9298, end: 9324 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "SpawnPoint",
        loc: { start: 9331, end: 9341 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 9346, end: 9348 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 9350, end: 9352 },
              },
              loc: { start: 9350, end: 9352 },
            },
            loc: { start: 9350, end: 9353 },
          },
          directives: [],
          loc: { start: 9346, end: 9353 },
        },
      ],
      loc: { start: 9326, end: 9355 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AgentInSpace",
        loc: { start: 9362, end: 9374 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Agent",
            loc: { start: 9386, end: 9391 },
          },
          loc: { start: 9386, end: 9391 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Character",
            loc: { start: 9394, end: 9403 },
          },
          loc: { start: 9394, end: 9403 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "dungeon",
            loc: { start: 9408, end: 9415 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Dungeon",
                loc: { start: 9417, end: 9424 },
              },
              loc: { start: 9417, end: 9424 },
            },
            loc: { start: 9417, end: 9425 },
          },
          directives: [],
          loc: { start: 9408, end: 9425 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 9428, end: 9439 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 9441, end: 9452 },
              },
              loc: { start: 9441, end: 9452 },
            },
            loc: { start: 9441, end: 9453 },
          },
          directives: [],
          loc: { start: 9428, end: 9453 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "spawnPoint",
            loc: { start: 9456, end: 9466 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SpawnPoint",
                loc: { start: 9468, end: 9478 },
              },
              loc: { start: 9468, end: 9478 },
            },
            loc: { start: 9468, end: 9479 },
          },
          directives: [],
          loc: { start: 9456, end: 9479 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 9482, end: 9486 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Type",
                loc: { start: 9488, end: 9492 },
              },
              loc: { start: 9488, end: 9492 },
            },
            loc: { start: 9488, end: 9493 },
          },
          directives: [],
          loc: { start: 9482, end: 9493 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 9496, end: 9498 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 9500, end: 9502 },
              },
              loc: { start: 9500, end: 9502 },
            },
            loc: { start: 9500, end: 9503 },
          },
          directives: [],
          loc: { start: 9496, end: 9503 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "division",
            loc: { start: 9506, end: 9514 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgentDivision",
                loc: { start: 9516, end: 9529 },
              },
              loc: { start: 9516, end: 9529 },
            },
            loc: { start: 9516, end: 9530 },
          },
          directives: [],
          loc: { start: 9506, end: 9530 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 9533, end: 9541 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Station",
                loc: { start: 9543, end: 9550 },
              },
              loc: { start: 9543, end: 9550 },
            },
            loc: { start: 9543, end: 9551 },
          },
          directives: [],
          loc: { start: 9533, end: 9551 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "level",
            loc: { start: 9554, end: 9559 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 9561, end: 9564 },
              },
              loc: { start: 9561, end: 9564 },
            },
            loc: { start: 9561, end: 9565 },
          },
          directives: [],
          loc: { start: 9554, end: 9565 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "agentType",
            loc: { start: 9568, end: 9577 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgentType",
                loc: { start: 9579, end: 9588 },
              },
              loc: { start: 9579, end: 9588 },
            },
            loc: { start: 9579, end: 9589 },
          },
          directives: [],
          loc: { start: 9568, end: 9589 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isLocator",
            loc: { start: 9592, end: 9601 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 9603, end: 9610 },
              },
              loc: { start: 9603, end: 9610 },
            },
            loc: { start: 9603, end: 9611 },
          },
          directives: [],
          loc: { start: 9592, end: 9611 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 9614, end: 9622 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 9624, end: 9632 },
            },
            loc: { start: 9624, end: 9632 },
          },
          directives: [],
          loc: { start: 9614, end: 9632 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "birthday",
            loc: { start: 9635, end: 9643 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 9645, end: 9651 },
              },
              loc: { start: 9645, end: 9651 },
            },
            loc: { start: 9645, end: 9652 },
          },
          directives: [],
          loc: { start: 9635, end: 9652 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 9655, end: 9664 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 9666, end: 9675 },
              },
              loc: { start: 9666, end: 9675 },
            },
            loc: { start: 9666, end: 9676 },
          },
          directives: [],
          loc: { start: 9655, end: 9676 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 9679, end: 9690 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 9692, end: 9703 },
              },
              loc: { start: 9692, end: 9703 },
            },
            loc: { start: 9692, end: 9704 },
          },
          directives: [],
          loc: { start: 9679, end: 9704 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 9707, end: 9718 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 9720, end: 9726 },
            },
            loc: { start: 9720, end: 9726 },
          },
          directives: [],
          loc: { start: 9707, end: 9726 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 9729, end: 9736 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 9738, end: 9745 },
            },
            loc: { start: 9738, end: 9745 },
          },
          directives: [],
          loc: { start: 9729, end: 9745 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gender",
            loc: { start: 9748, end: 9754 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 9756, end: 9762 },
              },
              loc: { start: 9756, end: 9762 },
            },
            loc: { start: 9756, end: 9763 },
          },
          directives: [],
          loc: { start: 9748, end: 9763 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 9766, end: 9770 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 9772, end: 9778 },
              },
              loc: { start: 9772, end: 9778 },
            },
            loc: { start: 9772, end: 9779 },
          },
          directives: [],
          loc: { start: 9766, end: 9779 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 9782, end: 9786 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 9788, end: 9792 },
              },
              loc: { start: 9788, end: 9792 },
            },
            loc: { start: 9788, end: 9793 },
          },
          directives: [],
          loc: { start: 9782, end: 9793 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityStatus",
            loc: { start: 9796, end: 9810 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 9812, end: 9817 },
            },
            loc: { start: 9812, end: 9817 },
          },
          directives: [],
          loc: { start: 9796, end: 9817 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 9820, end: 9825 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 9827, end: 9833 },
            },
            loc: { start: 9827, end: 9833 },
          },
          directives: [],
          loc: { start: 9820, end: 9833 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporationHistory",
            loc: { start: 9836, end: 9854 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CorporationMembership",
                    loc: { start: 9857, end: 9878 },
                  },
                  loc: { start: 9857, end: 9878 },
                },
                loc: { start: 9857, end: 9879 },
              },
              loc: { start: 9856, end: 9880 },
            },
            loc: { start: 9856, end: 9881 },
          },
          directives: [],
          loc: { start: 9836, end: 9881 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 9884, end: 9890 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 9893, end: 9907 },
                  },
                  loc: { start: 9893, end: 9907 },
                },
                loc: { start: 9893, end: 9908 },
              },
              loc: { start: 9892, end: 9909 },
            },
            loc: { start: 9892, end: 9910 },
          },
          directives: [],
          loc: { start: 9884, end: 9910 },
        },
      ],
      loc: { start: 9357, end: 9912 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ResearchAgent",
        loc: { start: 9919, end: 9932 },
      },
      interfaces: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Agent",
            loc: { start: 9944, end: 9949 },
          },
          loc: { start: 9944, end: 9949 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Character",
            loc: { start: 9952, end: 9961 },
          },
          loc: { start: 9952, end: 9961 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "researchSkills",
            loc: { start: 9966, end: 9980 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Type",
                    loc: { start: 9983, end: 9987 },
                  },
                  loc: { start: 9983, end: 9987 },
                },
                loc: { start: 9983, end: 9988 },
              },
              loc: { start: 9982, end: 9989 },
            },
            loc: { start: 9982, end: 9990 },
          },
          directives: [],
          loc: { start: 9966, end: 9990 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 9993, end: 9995 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 9997, end: 9999 },
              },
              loc: { start: 9997, end: 9999 },
            },
            loc: { start: 9997, end: 10000 },
          },
          directives: [],
          loc: { start: 9993, end: 10000 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "division",
            loc: { start: 10003, end: 10011 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgentDivision",
                loc: { start: 10013, end: 10026 },
              },
              loc: { start: 10013, end: 10026 },
            },
            loc: { start: 10013, end: 10027 },
          },
          directives: [],
          loc: { start: 10003, end: 10027 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "location",
            loc: { start: 10030, end: 10038 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Station",
                loc: { start: 10040, end: 10047 },
              },
              loc: { start: 10040, end: 10047 },
            },
            loc: { start: 10040, end: 10048 },
          },
          directives: [],
          loc: { start: 10030, end: 10048 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "level",
            loc: { start: 10051, end: 10056 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 10058, end: 10061 },
              },
              loc: { start: 10058, end: 10061 },
            },
            loc: { start: 10058, end: 10062 },
          },
          directives: [],
          loc: { start: 10051, end: 10062 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "agentType",
            loc: { start: 10065, end: 10074 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AgentType",
                loc: { start: 10076, end: 10085 },
              },
              loc: { start: 10076, end: 10085 },
            },
            loc: { start: 10076, end: 10086 },
          },
          directives: [],
          loc: { start: 10065, end: 10086 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "isLocator",
            loc: { start: 10089, end: 10098 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean",
                loc: { start: 10100, end: 10107 },
              },
              loc: { start: 10100, end: 10107 },
            },
            loc: { start: 10100, end: 10108 },
          },
          directives: [],
          loc: { start: 10089, end: 10108 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 10111, end: 10119 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Alliance",
              loc: { start: 10121, end: 10129 },
            },
            loc: { start: 10121, end: 10129 },
          },
          directives: [],
          loc: { start: 10111, end: 10129 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "birthday",
            loc: { start: 10132, end: 10140 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 10142, end: 10148 },
              },
              loc: { start: 10142, end: 10148 },
            },
            loc: { start: 10142, end: 10149 },
          },
          directives: [],
          loc: { start: 10132, end: 10149 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 10152, end: 10161 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 10163, end: 10172 },
              },
              loc: { start: 10163, end: 10172 },
            },
            loc: { start: 10163, end: 10173 },
          },
          directives: [],
          loc: { start: 10152, end: 10173 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 10176, end: 10187 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 10189, end: 10200 },
              },
              loc: { start: 10189, end: 10200 },
            },
            loc: { start: 10189, end: 10201 },
          },
          directives: [],
          loc: { start: 10176, end: 10201 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 10204, end: 10215 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 10217, end: 10223 },
            },
            loc: { start: 10217, end: 10223 },
          },
          directives: [],
          loc: { start: 10204, end: 10223 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 10226, end: 10233 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Faction",
              loc: { start: 10235, end: 10242 },
            },
            loc: { start: 10235, end: 10242 },
          },
          directives: [],
          loc: { start: 10226, end: 10242 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "gender",
            loc: { start: 10245, end: 10251 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 10253, end: 10259 },
              },
              loc: { start: 10253, end: 10259 },
            },
            loc: { start: 10253, end: 10260 },
          },
          directives: [],
          loc: { start: 10245, end: 10260 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 10263, end: 10267 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 10269, end: 10275 },
              },
              loc: { start: 10269, end: 10275 },
            },
            loc: { start: 10269, end: 10276 },
          },
          directives: [],
          loc: { start: 10263, end: 10276 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 10279, end: 10283 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 10285, end: 10289 },
              },
              loc: { start: 10285, end: 10289 },
            },
            loc: { start: 10285, end: 10290 },
          },
          directives: [],
          loc: { start: 10279, end: 10290 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "securityStatus",
            loc: { start: 10293, end: 10307 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Float",
              loc: { start: 10309, end: 10314 },
            },
            loc: { start: 10309, end: 10314 },
          },
          directives: [],
          loc: { start: 10293, end: 10314 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "title",
            loc: { start: 10317, end: 10322 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 10324, end: 10330 },
            },
            loc: { start: 10324, end: 10330 },
          },
          directives: [],
          loc: { start: 10317, end: 10330 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporationHistory",
            loc: { start: 10333, end: 10351 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CorporationMembership",
                    loc: { start: 10354, end: 10375 },
                  },
                  loc: { start: 10354, end: 10375 },
                },
                loc: { start: 10354, end: 10376 },
              },
              loc: { start: 10353, end: 10377 },
            },
            loc: { start: 10353, end: 10378 },
          },
          directives: [],
          loc: { start: 10333, end: 10378 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 10381, end: 10387 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageVariation",
                    loc: { start: 10390, end: 10404 },
                  },
                  loc: { start: 10390, end: 10404 },
                },
                loc: { start: 10390, end: 10405 },
              },
              loc: { start: 10389, end: 10406 },
            },
            loc: { start: 10389, end: 10407 },
          },
          directives: [],
          loc: { start: 10381, end: 10407 },
        },
      ],
      loc: { start: 9914, end: 10409 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 10416, end: 10421 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ping",
            loc: { start: 10426, end: 10430 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 10432, end: 10438 },
              },
              loc: { start: 10432, end: 10438 },
            },
            loc: { start: 10432, end: 10439 },
          },
          directives: [],
          loc: { start: 10426, end: 10439 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 10442, end: 10448 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Endpoint",
                    loc: { start: 10451, end: 10459 },
                  },
                  loc: { start: 10451, end: 10459 },
                },
                loc: { start: 10451, end: 10460 },
              },
              loc: { start: 10450, end: 10461 },
            },
            loc: { start: 10450, end: 10462 },
          },
          directives: [],
          loc: { start: 10442, end: 10462 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliances",
            loc: { start: 10465, end: 10474 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Alliance",
                    loc: { start: 10477, end: 10485 },
                  },
                  loc: { start: 10477, end: 10485 },
                },
                loc: { start: 10477, end: 10486 },
              },
              loc: { start: 10476, end: 10487 },
            },
            loc: { start: 10476, end: 10488 },
          },
          directives: [],
          loc: { start: 10465, end: 10488 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "alliance",
            loc: { start: 10491, end: 10499 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 10500, end: 10502 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 10504, end: 10506 },
                  },
                  loc: { start: 10504, end: 10506 },
                },
                loc: { start: 10504, end: 10507 },
              },
              directives: [],
              loc: { start: 10500, end: 10507 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Alliance",
                loc: { start: 10510, end: 10518 },
              },
              loc: { start: 10510, end: 10518 },
            },
            loc: { start: 10510, end: 10519 },
          },
          directives: [],
          loc: { start: 10491, end: 10519 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "character",
            loc: { start: 10522, end: 10531 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 10532, end: 10534 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 10536, end: 10538 },
                  },
                  loc: { start: 10536, end: 10538 },
                },
                loc: { start: 10536, end: 10539 },
              },
              directives: [],
              loc: { start: 10532, end: 10539 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Character",
                loc: { start: 10542, end: 10551 },
              },
              loc: { start: 10542, end: 10551 },
            },
            loc: { start: 10542, end: 10552 },
          },
          directives: [],
          loc: { start: 10522, end: 10552 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "me",
            loc: { start: 10555, end: 10557 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AuthenticatedPlayer",
                loc: { start: 10559, end: 10578 },
              },
              loc: { start: 10559, end: 10578 },
            },
            loc: { start: 10559, end: 10579 },
          },
          directives: [],
          loc: { start: 10555, end: 10579 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "corporation",
            loc: { start: 10582, end: 10593 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 10594, end: 10596 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 10598, end: 10600 },
                  },
                  loc: { start: 10598, end: 10600 },
                },
                loc: { start: 10598, end: 10601 },
              },
              directives: [],
              loc: { start: 10594, end: 10601 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Corporation",
                loc: { start: 10604, end: 10615 },
              },
              loc: { start: 10604, end: 10615 },
            },
            loc: { start: 10604, end: 10616 },
          },
          directives: [],
          loc: { start: 10582, end: 10616 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "npcCorporations",
            loc: { start: 10619, end: 10634 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Corporation",
                    loc: { start: 10637, end: 10648 },
                  },
                  loc: { start: 10637, end: 10648 },
                },
                loc: { start: 10637, end: 10649 },
              },
              loc: { start: 10636, end: 10650 },
            },
            loc: { start: 10636, end: 10651 },
          },
          directives: [],
          loc: { start: 10619, end: 10651 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attributes",
            loc: { start: 10654, end: 10664 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Attribute",
                    loc: { start: 10667, end: 10676 },
                  },
                  loc: { start: 10667, end: 10676 },
                },
                loc: { start: 10667, end: 10677 },
              },
              loc: { start: 10666, end: 10678 },
            },
            loc: { start: 10666, end: 10679 },
          },
          directives: [],
          loc: { start: 10654, end: 10679 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "attribute",
            loc: { start: 10682, end: 10691 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 10692, end: 10694 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 10696, end: 10698 },
                  },
                  loc: { start: 10696, end: 10698 },
                },
                loc: { start: 10696, end: 10699 },
              },
              directives: [],
              loc: { start: 10692, end: 10699 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Attribute",
                loc: { start: 10702, end: 10711 },
              },
              loc: { start: 10702, end: 10711 },
            },
            loc: { start: 10702, end: 10712 },
          },
          directives: [],
          loc: { start: 10682, end: 10712 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "effects",
            loc: { start: 10715, end: 10722 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Effect",
                    loc: { start: 10725, end: 10731 },
                  },
                  loc: { start: 10725, end: 10731 },
                },
                loc: { start: 10725, end: 10732 },
              },
              loc: { start: 10724, end: 10733 },
            },
            loc: { start: 10724, end: 10734 },
          },
          directives: [],
          loc: { start: 10715, end: 10734 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "effect",
            loc: { start: 10737, end: 10743 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 10744, end: 10746 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 10748, end: 10750 },
                  },
                  loc: { start: 10748, end: 10750 },
                },
                loc: { start: 10748, end: 10751 },
              },
              directives: [],
              loc: { start: 10744, end: 10751 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Effect",
                loc: { start: 10754, end: 10760 },
              },
              loc: { start: 10754, end: 10760 },
            },
            loc: { start: 10754, end: 10761 },
          },
          directives: [],
          loc: { start: 10737, end: 10761 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "incursions",
            loc: { start: 10764, end: 10774 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Incursion",
                    loc: { start: 10777, end: 10786 },
                  },
                  loc: { start: 10777, end: 10786 },
                },
                loc: { start: 10777, end: 10787 },
              },
              loc: { start: 10776, end: 10788 },
            },
            loc: { start: 10776, end: 10789 },
          },
          directives: [],
          loc: { start: 10764, end: 10789 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "marketGroups",
            loc: { start: 10792, end: 10804 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "MarketGroup",
                    loc: { start: 10807, end: 10818 },
                  },
                  loc: { start: 10807, end: 10818 },
                },
                loc: { start: 10807, end: 10819 },
              },
              loc: { start: 10806, end: 10820 },
            },
            loc: { start: 10806, end: 10821 },
          },
          directives: [],
          loc: { start: 10792, end: 10821 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "marketGroup",
            loc: { start: 10824, end: 10835 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 10836, end: 10838 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 10840, end: 10842 },
                  },
                  loc: { start: 10840, end: 10842 },
                },
                loc: { start: 10840, end: 10843 },
              },
              directives: [],
              loc: { start: 10836, end: 10843 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "MarketGroup",
                loc: { start: 10846, end: 10857 },
              },
              loc: { start: 10846, end: 10857 },
            },
            loc: { start: 10846, end: 10858 },
          },
          directives: [],
          loc: { start: 10824, end: 10858 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "opportunityGroups",
            loc: { start: 10861, end: 10878 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OpportunityGroup",
                    loc: { start: 10881, end: 10897 },
                  },
                  loc: { start: 10881, end: 10897 },
                },
                loc: { start: 10881, end: 10898 },
              },
              loc: { start: 10880, end: 10899 },
            },
            loc: { start: 10880, end: 10900 },
          },
          directives: [],
          loc: { start: 10861, end: 10900 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "opportunityGroup",
            loc: { start: 10903, end: 10919 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 10920, end: 10922 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 10924, end: 10926 },
                  },
                  loc: { start: 10924, end: 10926 },
                },
                loc: { start: 10924, end: 10927 },
              },
              directives: [],
              loc: { start: 10920, end: 10927 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "OpportunityGroup",
                loc: { start: 10930, end: 10946 },
              },
              loc: { start: 10930, end: 10946 },
            },
            loc: { start: 10930, end: 10947 },
          },
          directives: [],
          loc: { start: 10903, end: 10947 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "opportunityTasks",
            loc: { start: 10950, end: 10966 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OpportunityTask",
                    loc: { start: 10969, end: 10984 },
                  },
                  loc: { start: 10969, end: 10984 },
                },
                loc: { start: 10969, end: 10985 },
              },
              loc: { start: 10968, end: 10986 },
            },
            loc: { start: 10968, end: 10987 },
          },
          directives: [],
          loc: { start: 10950, end: 10987 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "opportunityTask",
            loc: { start: 10990, end: 11005 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11006, end: 11008 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11010, end: 11012 },
                  },
                  loc: { start: 11010, end: 11012 },
                },
                loc: { start: 11010, end: 11013 },
              },
              directives: [],
              loc: { start: 11006, end: 11013 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "OpportunityTask",
                loc: { start: 11016, end: 11031 },
              },
              loc: { start: 11016, end: 11031 },
            },
            loc: { start: 11016, end: 11032 },
          },
          directives: [],
          loc: { start: 10990, end: 11032 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "serverStatus",
            loc: { start: 11035, end: 11047 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11048, end: 11050 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 11052, end: 11054 },
                },
                loc: { start: 11052, end: 11054 },
              },
              directives: [],
              loc: { start: 11048, end: 11054 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ServerStatus",
                loc: { start: 11057, end: 11069 },
              },
              loc: { start: 11057, end: 11069 },
            },
            loc: { start: 11057, end: 11070 },
          },
          directives: [],
          loc: { start: 11035, end: 11070 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ancestries",
            loc: { start: 11073, end: 11083 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Ancestry",
                    loc: { start: 11086, end: 11094 },
                  },
                  loc: { start: 11086, end: 11094 },
                },
                loc: { start: 11086, end: 11095 },
              },
              loc: { start: 11085, end: 11096 },
            },
            loc: { start: 11085, end: 11097 },
          },
          directives: [],
          loc: { start: 11073, end: 11097 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "ancestry",
            loc: { start: 11100, end: 11108 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11109, end: 11111 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11113, end: 11115 },
                  },
                  loc: { start: 11113, end: 11115 },
                },
                loc: { start: 11113, end: 11116 },
              },
              directives: [],
              loc: { start: 11109, end: 11116 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Ancestry",
                loc: { start: 11119, end: 11127 },
              },
              loc: { start: 11119, end: 11127 },
            },
            loc: { start: 11119, end: 11128 },
          },
          directives: [],
          loc: { start: 11100, end: 11128 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "asteroidBelt",
            loc: { start: 11131, end: 11143 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11144, end: 11146 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11148, end: 11150 },
                  },
                  loc: { start: 11148, end: 11150 },
                },
                loc: { start: 11148, end: 11151 },
              },
              directives: [],
              loc: { start: 11144, end: 11151 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "AsteroidBelt",
                loc: { start: 11154, end: 11166 },
              },
              loc: { start: 11154, end: 11166 },
            },
            loc: { start: 11154, end: 11167 },
          },
          directives: [],
          loc: { start: 11131, end: 11167 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodlines",
            loc: { start: 11170, end: 11180 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Bloodline",
                    loc: { start: 11183, end: 11192 },
                  },
                  loc: { start: 11183, end: 11192 },
                },
                loc: { start: 11183, end: 11193 },
              },
              loc: { start: 11182, end: 11194 },
            },
            loc: { start: 11182, end: 11195 },
          },
          directives: [],
          loc: { start: 11170, end: 11195 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "bloodline",
            loc: { start: 11198, end: 11207 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11208, end: 11210 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11212, end: 11214 },
                  },
                  loc: { start: 11212, end: 11214 },
                },
                loc: { start: 11212, end: 11215 },
              },
              directives: [],
              loc: { start: 11208, end: 11215 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Bloodline",
                loc: { start: 11218, end: 11227 },
              },
              loc: { start: 11218, end: 11227 },
            },
            loc: { start: 11218, end: 11228 },
          },
          directives: [],
          loc: { start: 11198, end: 11228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 11231, end: 11241 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Category",
                    loc: { start: 11244, end: 11252 },
                  },
                  loc: { start: 11244, end: 11252 },
                },
                loc: { start: 11244, end: 11253 },
              },
              loc: { start: 11243, end: 11254 },
            },
            loc: { start: 11243, end: 11255 },
          },
          directives: [],
          loc: { start: 11231, end: 11255 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 11258, end: 11266 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11267, end: 11269 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11271, end: 11273 },
                  },
                  loc: { start: 11271, end: 11273 },
                },
                loc: { start: 11271, end: 11274 },
              },
              directives: [],
              loc: { start: 11267, end: 11274 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 11277, end: 11285 },
              },
              loc: { start: 11277, end: 11285 },
            },
            loc: { start: 11277, end: 11286 },
          },
          directives: [],
          loc: { start: 11258, end: 11286 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "constellations",
            loc: { start: 11289, end: 11303 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Constellation",
                    loc: { start: 11306, end: 11319 },
                  },
                  loc: { start: 11306, end: 11319 },
                },
                loc: { start: 11306, end: 11320 },
              },
              loc: { start: 11305, end: 11321 },
            },
            loc: { start: 11305, end: 11322 },
          },
          directives: [],
          loc: { start: 11289, end: 11322 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "constellation",
            loc: { start: 11325, end: 11338 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11339, end: 11341 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11343, end: 11345 },
                  },
                  loc: { start: 11343, end: 11345 },
                },
                loc: { start: 11343, end: 11346 },
              },
              directives: [],
              loc: { start: 11339, end: 11346 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Constellation",
                loc: { start: 11349, end: 11362 },
              },
              loc: { start: 11349, end: 11362 },
            },
            loc: { start: 11349, end: 11363 },
          },
          directives: [],
          loc: { start: 11325, end: 11363 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "factions",
            loc: { start: 11366, end: 11374 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Faction",
                    loc: { start: 11377, end: 11384 },
                  },
                  loc: { start: 11377, end: 11384 },
                },
                loc: { start: 11377, end: 11385 },
              },
              loc: { start: 11376, end: 11386 },
            },
            loc: { start: 11376, end: 11387 },
          },
          directives: [],
          loc: { start: 11366, end: 11387 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "faction",
            loc: { start: 11390, end: 11397 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11398, end: 11400 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11402, end: 11404 },
                  },
                  loc: { start: 11402, end: 11404 },
                },
                loc: { start: 11402, end: 11405 },
              },
              directives: [],
              loc: { start: 11398, end: 11405 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Faction",
                loc: { start: 11408, end: 11415 },
              },
              loc: { start: 11408, end: 11415 },
            },
            loc: { start: 11408, end: 11416 },
          },
          directives: [],
          loc: { start: 11390, end: 11416 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "graphics",
            loc: { start: 11419, end: 11427 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Graphic",
                    loc: { start: 11430, end: 11437 },
                  },
                  loc: { start: 11430, end: 11437 },
                },
                loc: { start: 11430, end: 11438 },
              },
              loc: { start: 11429, end: 11439 },
            },
            loc: { start: 11429, end: 11440 },
          },
          directives: [],
          loc: { start: 11419, end: 11440 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "graphic",
            loc: { start: 11443, end: 11450 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11451, end: 11453 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11455, end: 11457 },
                  },
                  loc: { start: 11455, end: 11457 },
                },
                loc: { start: 11455, end: 11458 },
              },
              directives: [],
              loc: { start: 11451, end: 11458 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Graphic",
                loc: { start: 11461, end: 11468 },
              },
              loc: { start: 11461, end: 11468 },
            },
            loc: { start: 11461, end: 11469 },
          },
          directives: [],
          loc: { start: 11443, end: 11469 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "groups",
            loc: { start: 11472, end: 11478 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Group",
                    loc: { start: 11481, end: 11486 },
                  },
                  loc: { start: 11481, end: 11486 },
                },
                loc: { start: 11481, end: 11487 },
              },
              loc: { start: 11480, end: 11488 },
            },
            loc: { start: 11480, end: 11489 },
          },
          directives: [],
          loc: { start: 11472, end: 11489 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "group",
            loc: { start: 11492, end: 11497 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11498, end: 11500 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11502, end: 11504 },
                  },
                  loc: { start: 11502, end: 11504 },
                },
                loc: { start: 11502, end: 11505 },
              },
              directives: [],
              loc: { start: 11498, end: 11505 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Group",
                loc: { start: 11508, end: 11513 },
              },
              loc: { start: 11508, end: 11513 },
            },
            loc: { start: 11508, end: 11514 },
          },
          directives: [],
          loc: { start: 11492, end: 11514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "moon",
            loc: { start: 11517, end: 11521 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11522, end: 11524 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11526, end: 11528 },
                  },
                  loc: { start: 11526, end: 11528 },
                },
                loc: { start: 11526, end: 11529 },
              },
              directives: [],
              loc: { start: 11522, end: 11529 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Moon",
                loc: { start: 11532, end: 11536 },
              },
              loc: { start: 11532, end: 11536 },
            },
            loc: { start: 11532, end: 11537 },
          },
          directives: [],
          loc: { start: 11517, end: 11537 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "planet",
            loc: { start: 11540, end: 11546 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11547, end: 11549 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11551, end: 11553 },
                  },
                  loc: { start: 11551, end: 11553 },
                },
                loc: { start: 11551, end: 11554 },
              },
              directives: [],
              loc: { start: 11547, end: 11554 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Planet",
                loc: { start: 11557, end: 11563 },
              },
              loc: { start: 11557, end: 11563 },
            },
            loc: { start: 11557, end: 11564 },
          },
          directives: [],
          loc: { start: 11540, end: 11564 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "races",
            loc: { start: 11567, end: 11572 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Race",
                    loc: { start: 11575, end: 11579 },
                  },
                  loc: { start: 11575, end: 11579 },
                },
                loc: { start: 11575, end: 11580 },
              },
              loc: { start: 11574, end: 11581 },
            },
            loc: { start: 11574, end: 11582 },
          },
          directives: [],
          loc: { start: 11567, end: 11582 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "race",
            loc: { start: 11585, end: 11589 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11590, end: 11592 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11594, end: 11596 },
                  },
                  loc: { start: 11594, end: 11596 },
                },
                loc: { start: 11594, end: 11597 },
              },
              directives: [],
              loc: { start: 11590, end: 11597 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Race",
                loc: { start: 11600, end: 11604 },
              },
              loc: { start: 11600, end: 11604 },
            },
            loc: { start: 11600, end: 11605 },
          },
          directives: [],
          loc: { start: 11585, end: 11605 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "regions",
            loc: { start: 11608, end: 11615 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Region",
                    loc: { start: 11618, end: 11624 },
                  },
                  loc: { start: 11618, end: 11624 },
                },
                loc: { start: 11618, end: 11625 },
              },
              loc: { start: 11617, end: 11626 },
            },
            loc: { start: 11617, end: 11627 },
          },
          directives: [],
          loc: { start: 11608, end: 11627 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "region",
            loc: { start: 11630, end: 11636 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11637, end: 11639 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11641, end: 11643 },
                  },
                  loc: { start: 11641, end: 11643 },
                },
                loc: { start: 11641, end: 11644 },
              },
              directives: [],
              loc: { start: 11637, end: 11644 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Region",
                loc: { start: 11647, end: 11653 },
              },
              loc: { start: 11647, end: 11653 },
            },
            loc: { start: 11647, end: 11654 },
          },
          directives: [],
          loc: { start: 11630, end: 11654 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystems",
            loc: { start: 11657, end: 11669 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "SolarSystem",
                    loc: { start: 11672, end: 11683 },
                  },
                  loc: { start: 11672, end: 11683 },
                },
                loc: { start: 11672, end: 11684 },
              },
              loc: { start: 11671, end: 11685 },
            },
            loc: { start: 11671, end: 11686 },
          },
          directives: [],
          loc: { start: 11657, end: 11686 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "solarSystem",
            loc: { start: 11689, end: 11700 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11701, end: 11703 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11705, end: 11707 },
                  },
                  loc: { start: 11705, end: 11707 },
                },
                loc: { start: 11705, end: 11708 },
              },
              directives: [],
              loc: { start: 11701, end: 11708 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "SolarSystem",
                loc: { start: 11711, end: 11722 },
              },
              loc: { start: 11711, end: 11722 },
            },
            loc: { start: 11711, end: 11723 },
          },
          directives: [],
          loc: { start: 11689, end: 11723 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "star",
            loc: { start: 11726, end: 11730 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11731, end: 11733 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11735, end: 11737 },
                  },
                  loc: { start: 11735, end: 11737 },
                },
                loc: { start: 11735, end: 11738 },
              },
              directives: [],
              loc: { start: 11731, end: 11738 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Star",
                loc: { start: 11741, end: 11745 },
              },
              loc: { start: 11741, end: 11745 },
            },
            loc: { start: 11741, end: 11746 },
          },
          directives: [],
          loc: { start: 11726, end: 11746 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "stargate",
            loc: { start: 11749, end: 11757 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11758, end: 11760 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11762, end: 11764 },
                  },
                  loc: { start: 11762, end: 11764 },
                },
                loc: { start: 11762, end: 11765 },
              },
              directives: [],
              loc: { start: 11758, end: 11765 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Stargate",
                loc: { start: 11768, end: 11776 },
              },
              loc: { start: 11768, end: 11776 },
            },
            loc: { start: 11768, end: 11777 },
          },
          directives: [],
          loc: { start: 11749, end: 11777 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "station",
            loc: { start: 11780, end: 11787 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11788, end: 11790 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11792, end: 11794 },
                  },
                  loc: { start: 11792, end: 11794 },
                },
                loc: { start: 11792, end: 11795 },
              },
              directives: [],
              loc: { start: 11788, end: 11795 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Station",
                loc: { start: 11798, end: 11805 },
              },
              loc: { start: 11798, end: 11805 },
            },
            loc: { start: 11798, end: 11806 },
          },
          directives: [],
          loc: { start: 11780, end: 11806 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "types",
            loc: { start: 11809, end: 11814 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Type",
                    loc: { start: 11817, end: 11821 },
                  },
                  loc: { start: 11817, end: 11821 },
                },
                loc: { start: 11817, end: 11822 },
              },
              loc: { start: 11816, end: 11823 },
            },
            loc: { start: 11816, end: 11824 },
          },
          directives: [],
          loc: { start: 11809, end: 11824 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type",
            loc: { start: 11827, end: 11831 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11832, end: 11834 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11836, end: 11838 },
                  },
                  loc: { start: 11836, end: 11838 },
                },
                loc: { start: 11836, end: 11839 },
              },
              directives: [],
              loc: { start: 11832, end: 11839 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Type",
                loc: { start: 11842, end: 11846 },
              },
              loc: { start: 11842, end: 11846 },
            },
            loc: { start: 11842, end: 11847 },
          },
          directives: [],
          loc: { start: 11827, end: 11847 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "agents",
            loc: { start: 11850, end: 11856 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Agent",
                    loc: { start: 11859, end: 11864 },
                  },
                  loc: { start: 11859, end: 11864 },
                },
                loc: { start: 11859, end: 11865 },
              },
              loc: { start: 11858, end: 11866 },
            },
            loc: { start: 11858, end: 11867 },
          },
          directives: [],
          loc: { start: 11850, end: 11867 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "agent",
            loc: { start: 11870, end: 11875 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11876, end: 11878 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11880, end: 11882 },
                  },
                  loc: { start: 11880, end: 11882 },
                },
                loc: { start: 11880, end: 11883 },
              },
              directives: [],
              loc: { start: 11876, end: 11883 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Agent",
                loc: { start: 11886, end: 11891 },
              },
              loc: { start: 11886, end: 11891 },
            },
            loc: { start: 11886, end: 11892 },
          },
          directives: [],
          loc: { start: 11870, end: 11892 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "icons",
            loc: { start: 11895, end: 11900 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Icon",
                    loc: { start: 11903, end: 11907 },
                  },
                  loc: { start: 11903, end: 11907 },
                },
                loc: { start: 11903, end: 11908 },
              },
              loc: { start: 11902, end: 11909 },
            },
            loc: { start: 11902, end: 11910 },
          },
          directives: [],
          loc: { start: 11895, end: 11910 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "icon",
            loc: { start: 11913, end: 11917 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11918, end: 11920 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11922, end: 11924 },
                  },
                  loc: { start: 11922, end: 11924 },
                },
                loc: { start: 11922, end: 11925 },
              },
              directives: [],
              loc: { start: 11918, end: 11925 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Icon",
                loc: { start: 11928, end: 11932 },
              },
              loc: { start: 11928, end: 11932 },
            },
            loc: { start: 11928, end: 11933 },
          },
          directives: [],
          loc: { start: 11913, end: 11933 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "units",
            loc: { start: 11936, end: 11941 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Unit",
                    loc: { start: 11944, end: 11948 },
                  },
                  loc: { start: 11944, end: 11948 },
                },
                loc: { start: 11944, end: 11949 },
              },
              loc: { start: 11943, end: 11950 },
            },
            loc: { start: 11943, end: 11951 },
          },
          directives: [],
          loc: { start: 11936, end: 11951 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "unit",
            loc: { start: 11954, end: 11958 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 11959, end: 11961 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 11963, end: 11965 },
                  },
                  loc: { start: 11963, end: 11965 },
                },
                loc: { start: 11963, end: 11966 },
              },
              directives: [],
              loc: { start: 11959, end: 11966 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Unit",
                loc: { start: 11969, end: 11973 },
              },
              loc: { start: 11969, end: 11973 },
            },
            loc: { start: 11969, end: 11974 },
          },
          directives: [],
          loc: { start: 11954, end: 11974 },
        },
      ],
      loc: { start: 10411, end: 11976 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 11983, end: 11991 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "nop",
            loc: { start: 11996, end: 11999 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 12001, end: 12007 },
              },
              loc: { start: 12001, end: 12007 },
            },
            loc: { start: 12001, end: 12008 },
          },
          directives: [],
          loc: { start: 11996, end: 12008 },
        },
      ],
      loc: { start: 11978, end: 12010 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Subscription",
        loc: { start: 12017, end: 12029 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "hello",
            loc: { start: 12034, end: 12039 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 12041, end: 12047 },
              },
              loc: { start: 12041, end: 12047 },
            },
            loc: { start: 12041, end: 12048 },
          },
          directives: [],
          loc: { start: 12034, end: 12048 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "postCreated",
            loc: { start: 12051, end: 12062 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 12064, end: 12070 },
              },
              loc: { start: 12064, end: 12070 },
            },
            loc: { start: 12064, end: 12071 },
          },
          directives: [],
          loc: { start: 12051, end: 12071 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "serverStatus",
            loc: { start: 12074, end: 12086 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ServerStatus",
                loc: { start: 12088, end: 12100 },
              },
              loc: { start: 12088, end: 12100 },
            },
            loc: { start: 12088, end: 12101 },
          },
          directives: [],
          loc: { start: 12074, end: 12101 },
        },
      ],
      loc: { start: 12012, end: 12103 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "CacheControlScope",
        loc: { start: 12110, end: 12127 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PUBLIC",
            loc: { start: 12132, end: 12138 },
          },
          directives: [],
          loc: { start: 12132, end: 12138 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PRIVATE",
            loc: { start: 12141, end: 12148 },
          },
          directives: [],
          loc: { start: 12141, end: 12148 },
        },
      ],
      loc: { start: 12105, end: 12150 },
    },
    {
      kind: "DirectiveDefinition",
      name: {
        kind: "Name",
        value: "cacheControl",
        loc: { start: 12163, end: 12175 },
      },
      arguments: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "maxAge",
            loc: { start: 12176, end: 12182 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 12184, end: 12187 },
            },
            loc: { start: 12184, end: 12187 },
          },
          directives: [],
          loc: { start: 12176, end: 12187 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "scope",
            loc: { start: 12189, end: 12194 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CacheControlScope",
              loc: { start: 12196, end: 12213 },
            },
            loc: { start: 12196, end: 12213 },
          },
          directives: [],
          loc: { start: 12189, end: 12213 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "inheritMaxAge",
            loc: { start: 12215, end: 12228 },
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 12230, end: 12237 },
            },
            loc: { start: 12230, end: 12237 },
          },
          directives: [],
          loc: { start: 12215, end: 12237 },
        },
      ],
      repeatable: false,
      locations: [
        {
          kind: "Name",
          value: "FIELD_DEFINITION",
          loc: { start: 12242, end: 12258 },
        },
        { kind: "Name", value: "OBJECT", loc: { start: 12261, end: 12267 } },
        { kind: "Name", value: "INTERFACE", loc: { start: 12270, end: 12279 } },
        { kind: "Name", value: "UNION", loc: { start: 12282, end: 12287 } },
      ],
      loc: { start: 12152, end: 12287 },
    },
  ],
  loc: { start: 0, end: 12287 },
} as unknown as DocumentNode;
