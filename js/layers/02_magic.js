addLayer("magic", {
  name: "Magic", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() { return {
    unlocked: true,
    points: new Decimal(0),
  }},
  branches: [],
  color: "#9241EE",
  requires() {
    req = new Decimal(5)
    return req
  },
  resource: "Magic", // Name of prestige currency
  baseResource: "Mana", // Name of resource prestige is based on
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
      {key: "g", description: "G: Reset for Magic", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown() {
    return hasMilestone('mana', 8)
  },
  doReset(layer) {
    if(layers[layer].row <= layers[this.layer].row || layers[layer].row == "side")return;

    layerDataReset(this.layer, ["milestones"])
  },
  automate() {
    
  },
  unlocked() {
    return hasMilestone('mana', 8)
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
      title: "[1-1]",
      body() {
        return ""
      },
      unlocked() {

      }
    },
    12: {
      title: "[1-2]",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    13: {
      title: "[1-3]",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    14: {
      title: "[1-4]",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    15: {
      title: "[1-5]",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    21: {
      title: "[2-1]",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    22: {
      title: "[2-2]",
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
    11: {
      title: "",
      cost(x) {
        let bCost = new Decimal(1).times(x).add(1)
        return bCost
      },
      effect(x) {
        let eff = new Decimal(1)
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "")
      },
      unlocked() {
        return hasMilestone('magic', -1)
      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(100)
        return limit
      }
    },
    12: {
      title: "",
      cost(x) {
        let bCost = new Decimal(1.1).times(x).add(1)
        return bCost.floor()
      },
      effect(x) {
        let eff = new Decimal(1)
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "")
      },
      unlocked() {

      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(100)
        return limit
      }
    },
    13: {
      title: "",
      cost(x) {
        let bCost = new Decimal(1.2).times(x).add(1)
        return bCost.floor()
      },
      effect(x) {
        let eff = new Decimal(1)
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "")
      },
      unlocked() {

      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(100)
        return limit
      }
    },
    21: {
      title: "",
      cost(x) {
        let bCost = new Decimal(1.3).times(x).add(1)
        return bCost.floor()
      },
      effect(x) {
        let eff = new Decimal(1)
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "")
      },
      unlocked() {

      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(100)
        return limit
      }
    },
    22: {
      title: "",
      cost(x) {
        let bCost = new Decimal(1.4).times(x).add(1)
        return bCost.floor()
      },
      effect(x) {
        let eff = new Decimal(1)
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "")
      },
      unlocked() {

      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(100)
        return limit
      }
    },
    23: {
      title: "",
      cost(x) {
        let bCost = new Decimal(1.5).times(x).add(1)
        return bCost.floor()
      },
      effect(x) {
        let eff = new Decimal(1)
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "")
      },
      unlocked() {

      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(100)
        return limit
      }
    }
	},
  upgrades: {
    11: {
      title: "Magic Infusion",
      description: "Increases Essence Production",
      cost: new Decimal(1),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      }
    },
    12: {
      title: "Magic Training",
      description: "Increases Mana Production",
      cost: new Decimal(1),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      }
    },
    13: {
      title: "",
      description: "",
      cost: new Decimal(2),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 11) && hasUpgrade(this.layer, 12)
      }
    },
    14: {
      title: "",
      description: "",
      cost: new Decimal(2),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 11) && hasUpgrade(this.layer, 12)
      }
    },
    15: {
      title: "",
      description: "",
      cost: new Decimal(3),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 13) && hasUpgrade(this.layer, 14)
      }
    },
    21: {
      title: "",
      description: "",
      cost: new Decimal(4),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 15)
      }
    },
    22: {
      title: "",
      description: "",
      cost: new Decimal(5),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 21)
      }
    },
    23: {
      title: "",
      description: "",
      cost: new Decimal(5),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 21)
      }
    },
    24: {
      title: "",
      description: "",
      cost: new Decimal(8),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 22) && hasUpgrade(this.layer, 23)
      }
    },
    25: {
      title: "",
      description: "",
      cost: new Decimal(10),
      effect() {
        let eff = new Decimal(1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 24)
      }
    }
  },
  milestones: {
    0: {
      requirementDescription: "1 Magic",
      effectDescription: "Lower Essence Cost per Mana",
      effect() {
        let eff = new Decimal(0.5)
        return eff
      },
      done() {
        return player[this.layer].points.gte(1)
      }
    },
    1: {
      requirementDescription: "2 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(2)
      }
    },
    2: {
      requirementDescription: "3 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(3)
      }
    },
    3: {
      requirementDescription: "4 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(4)
      }
    },
    4: {
      requirementDescription: "5 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(5)
      }
    },
    5: {
      requirementDescription: "6 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(6)
      }
    },
    6: {
      requirementDescription: "7 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(7)
      }
    },
    7: {
      requirementDescription: "8 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(8)
      }
    },
    8: {
      requirementDescription: "9 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(9)
      }
    },
    9: {
      requirementDescription: "10 Magic",
      effectDescription: "",
      effect() {

      },
      done() {
        return player[this.layer].points.gte(10)
      }
    },
    10: {
      requirementDescription: "12 Magic",
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
          ["infobox", 31],
          ["infobox", 32],
          ["infobox", 33],
          ["infobox", 34],
          ["infobox", 35],
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
    },
    spellbook: {
      
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