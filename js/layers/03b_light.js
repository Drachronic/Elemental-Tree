addLayer("light", {
  name: "Light", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() { return {
    unlocked: true,
    points: new Decimal(0),
  }},
  branches: [],
  color: "#E0E0E0",
  requires() {
    req = new Decimal(5)
    return req
  },
  resource: "Light", // Name of prestige currency
  baseResource: "Magic", // Name of resource prestige is based on
  baseAmount() {
    return player.points
  }, // Get the current amount of baseResource
  type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent() {
      exp = new Decimal(0.5)
      return exp
  }, // Prestige currency exponent
  gainMult() { // Calculate the multiplier for main currency from bonuses
      mult = new Decimal(1)
      return mult
  },
  gainExp() { // Calculate the exponent on main currency from bonuses
    gxp = new Decimal(1)
    return gxp
  },
  row: 0, // Row the layer is in on the tree (0 is the first row)
  hotkeys: [
      {key: "l", description: "L: Reset for Light", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown() {
    return true
  },
  doReset(layer) {
    if(layers[layer].row <= layers[this.layer].row || layers[layer].row == "side")return;

    layerDataReset(this.layer, ["milestones"])
  },
  automate() {
    
  },
  bars: {
    pointProgress: {
      direction: RIGHT,
      width: 120,
      height: 10,
      progress() {
        return  player.points / getNextAt(this.layer)
      }
    },
    loreProgress: {
      direction: RIGHT,
      width: 200,
      height: 20,
      progress() {
        
      }
    }
  },
	infoboxes: {
    11: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    12: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    13: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    14: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    15: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    21: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    22: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    23: {
      title: "[2-3]",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    24: {
      title: "[2-4]",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    25: {
      title: "[2-5]",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    100: {
      title: "",
      body() {
        return ""
      },
      unlocked() {

      }
    },
    101: {
      title: "",
      body() {
        return ""
      },
      unlocked() {

      }
    },
    102: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    103: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    104: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    105: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    106: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    107: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    108: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    109: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    110: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
	},
	buyables: {

	},
  upgrades: {
    11: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    12: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    13: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    14:{
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    15: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    21: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    22: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    23: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    24: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    25: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    },
    31: {
      title: "",
      description: "",
      cost: new Decimal(1),
      effect() {
        
      },
      effectDisplay() {

      },
      unlocked() {
        
      }
    }
  },
  milestones: {
		0: {
      requirementDescription: "",
      effectDescription: "",
      effect() {

      },
      done() {
        
      }
		},
    1: {
      requirementDescription: "",
      effectDescription: "",
      effect() {

      },
      done() {
        
      }
    },
    2: {
      requirementDescription: "",
      effectDescription: "",
      effect() {

      },
      done() {
        
      }
    },
    3: {
      requirementDescription: "",
      effectDescription: "",
      effect() {

      },
      done() {
        
      }
    },
    4: {
      requirementDescription: "",
      effectDescription: "",
      effect() {

      },
      done() {
        
      }
    }
  },
  microtabs: {
    lore: {
      upgrades: {
        content: [
          "blank",
          ["display-text", function() {
            return "<h2>Upgrade-Based Lore</h2>"
          }],
          "blank",
          ["bar", "loreProgress"],
          "blank",
          "h-line",
          "blank",
          ["display-text", function() {
            return "<h3>Row 1 Upgrades</h3>"
          }],
          "blank",
          ["infobox", 11],
          ["infobox", 12],
          ["infobox", 13],
          ["infobox", 14],
          ["infobox", 15],
          "blank",
          "h-line",
          "blank",
          ["display-text", function() {
            return "<h3>Row 2 Upgrades</h3>"
          }],
          "blank",
          ["infobox", 21],
          ["infobox", 22],
          ["infobox", 23],
          ["infobox", 24],
          ["infobox", 25],
          "blank",
          "h-line",
          "blank",
          ["display-text", function() {
            return "<h3>Row 3 Upgrades</h3>"
          }],
          "blank",
          ["infobox", 31]
        ]
      },
      milestones: {
        content: [
          "blank",
          ["display-text", function() {
            return "<h2>Milestone-Based Lore</h2>"
          }],
          "blank",
          "h-line",
          "blank",
          ["infobox", 100],
          ["infobox", 101],
          ["infobox", 102],
          ["infobox", 103],
          ["infobox", 104],
          ["infobox", 105],
          ["infobox", 106],
          ["infobox", 107],
          ["infobox", 108],
          ["infobox", 109],
          ["infobox", 110]
        ]
      }
    }
  },
  tabFormat: {
    "Upgrades": {
        content: [
            ["display-text", function() {
              return 'You have ' + format(player[this.layer].points) + 
              ' ' + tmp[this.layer].resource
            }],
            "blank",
            ["prestige-button-with-progress", "pointProgress"],
            "blank",
            ["display-text", function() {
              return 'You have ' + format(player.points) + 
              ' ' + tmp[this.layer].baseResource
            }],
            "blank",
            "upgrades"
        ]
    },
    "Milestones": {
        content: [
            ["display-text", function() {
              return 'You have ' + format(player[this.layer].points) + 
              ' ' + tmp[this.layer].resource
            }],
            "blank",
            ["prestige-button-with-progress", "pointProgress"],
            "blank",
            ["display-text", function() {
              return 'You have ' + format(player.points) + 
              ' ' + tmp[this.layer].baseResource
            }],
            "blank",
            "milestones"
        ],
        unlocked() {
          
        }
    },
    "Buyables": {
      content: [
        ["display-text", function() {
          return 'You have ' + format(player[this.layer].points) + 
          ' ' + tmp[this.layer].resource
        }],
        "blank",
        ["prestige-button-with-progress", "pointProgress"],
        "blank",
        ["display-text", function() {
          return 'You have ' + format(player.points) + 
          ' ' + tmp[this.layer].baseResource
        }],
        "blank",
        "buyables"
      ],
      unlocked() {

      }
    },
    "Lore": {
      content: [
        ["display-text", function() {
          return 'You have ' + format(player[this.layer].points) + 
          ' ' + tmp[this.layer].resource
        }],
        "blank",
        ["prestige-button-with-progress", "pointProgress"],
        "blank",
        ["display-text", function() {
          return 'You have ' + format(player.points) + 
          ' ' + tmp[this.layer].baseResource
        }],
        "blank",
        ["microtabs", "lore"]
      ],
      unlocked() {
        
      }
    }
  }
})