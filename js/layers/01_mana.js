addLayer("mana", {
  name: "Mana", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "MN", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() { return {
    unlocked: true,
    points: new Decimal(0),
  }},
  branches: ['magic'],
  color: "#41A9EE",
  requires() {
    req = new Decimal(5)
    if (hasUpgrade('mana', 15)) req = req.times(0.25)
    return req
  },
  resource: "Mana", // Name of prestige currency
  baseResource: "Essence", // Name of resource prestige is based on
  baseAmount() {return player.points}, // Get the current amount of baseResource
  type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent() {
      exp = new Decimal(0.5)
      if (hasUpgrade('mana', 14)) exp = exp.add(0.1)
      if (hasMilestone('mana', 1)) exp = exp.add(0.1)
      return exp
  }, // Prestige currency exponent
  gainMult() { // Calculate the multiplier for main currency from bonuses
      mult = new Decimal(1)
      if (hasUpgrade('mana', 13)) mult = mult.times(2)
      if (hasMilestone('mana', 3)) mult = mult.times(2)
      if (hasMilestone('magic', 2)) mult = mult.times(2)
      return mult
  },
  gainExp() { // Calculate the exponent on main currency from bonuses
    gxp = new Decimal(1)
    return gxp
  },
  row: 0, // Row the layer is in on the tree (0 is the first row)
  hotkeys: [
      {key: "m", description: "M: Reset for Mana", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown() {
    return true
  },
  doReset(layer) {
    if(layers[layer].row <= layers[this.layer].row || layers[layer].row == "side")return;

    layerDataReset(this.layer, ["milestones"])
  },
  automate() {
    if (hasMilestone('mana', 4)) player.mana.points = player.mana.points.add(milestoneEffect('mana', 4))
  },
  upgrades: {
    // 1st Row (Available at Start)
    11: {
        title: "Infusion I",
        description: "Doubles essence gain",
        cost: new Decimal(1)
    },
    12: {
        title: "Infusion II",
        description: "Doubles essence gain again",
        cost: new Decimal(3)
    },
    13: {
        title: "Control I",
        description: "Doubles mana gain",
        cost: new Decimal(3)
    },
    14: {
        title: "Study I",
        description: "Essence cost per mana scales slower",
        cost: new Decimal(10)
    },
    15: {
        title: "Energy I",
        description: "Reduces base Essence cost for Mana by 25%",
        cost: new Decimal(25)
    },
    16: {
        title: "Infusion III",
        description: "Doubles essence gain a third time",
        cost: new Decimal(50)
    },

    // 2nd Row (Unlocked by Magic)
    21: {
        title: "",
        description: "",
        cost: new Decimal(0),
        unlocked() {
            return hasMilestone('magic', 4)
        }
    },
    22: {
        title: "",
        description: "",
        cost: new Decimal(0),
        unlocked() {
            return hasMilestone('magic', 4)
        }
    },
    23: {
        title: "",
        description: "",
        cost: new Decimal(0),
        unlocked() {
            return hasMilestone('magic', 4)
        }
    },
    24: {
        title: "",
        description: "",
        cost: new Decimal(0),
        unlocked() {
            return hasMilestone('magic', 4)
        }
    },
    25: {
        title: "",
        description: "",
        cost: new Decimal(0),
        unlocked() {
            return hasMilestone('magic', 4)
        }
    },
    26: {
        title: "",
        description: "",
        cost: new Decimal(0),
        unlocked() {
            return hasMilestone('magic', 4)
        }
    }

    // 3rd Row (Unlocked by Magic)

  },
  milestones: {
    0: {
        requirementDescription: "10 Mana",
        effectDescription: "Doubles Essence Production",
        done() {
          return player.mana.points.gte(10)
        }
    },
    1: {
        requirementDescription: "25 Mana",
        effectDescription: "Mana Scales Slower",
        done() {
            return player.mana.points.gte(25)
        }
    },
    2: {
        requirementDescription: "100 Mana",
        effectDescription: "Unlocks Magic Production",
        done() {
          return player.mana.points.gte(100)
        },
        onComplete() {
            player.magic.unlocked = true
        }
    },
    3: {
        requirementDescription: "500 Mana",
        effectDescription: "Doubles Mana Production",
        done() {
            return player.mana.points.gte(500)
        }
    },
    4: {
        requirementDescription: "2500 Mana",
        effectDescription: "Passively Gain 10% of Mana every second (combines)",
        done() {
            return player.mana.points.gte(2500)
        },
        effect() {
            return tmp[this.layer].resetGain * 0.1
        },
        effectDisplay() {
            return format(milestoneEffect(this.layer, this.id))+"/sec"
        }
    },
    5: {
        requirementDescription: "10K Mana",
        effectDescription: "Mana Affects Essence Production",
        done() {
            return player.mana.points.gte(1e4)
        },
        effect() {
            return player[this.layer].points.add(1).pow(0.15)
        },
        effectDisplay() {
            return format(milestoneEffect(this.layer, this.id))+"x"
        }
    },
    6: {
        requirementDescription: "1M Mana",
        effectDescription: "Passively Gain 15% of Mana every second (combines)",
        done() {
            return player.mana.points.gte(1e6)
        },
        effect() {
            return tmp[this.layer].resetGain * 0.15
        },
        effectDisplay() {
            return format(milestoneEffect(this.layer, this.id))+"/sec"
        }
    },
    7: {
        requirementDescription: "1B Mana",
        effectDescription: "Passively Gain 25% of Mana every second (combines)",
        done() {
            return player.mana.points.gte(1e9)
        },
        effect() {
            return tmp[this.layer].resetGain * 0.25
        },
        effectDisplay() {
            return format(milestoneEffect(this.layer, this.id))+"/sec"
        }
    },
    8: {
        requirementDescription: "1e15 Mana",
        effectDescription: "Passively Gain 50% of Mana every second (combines)",
        done() {
            return player.mana.points.gte(1e15)
        },
        effect() {
            return tmp[this.layer].resetGain * 0.5
        },
        effectDisplay() {
            return format(milestoneEffect(this.layer, this.id))+"/sec"
        }
    },
    9: {
        requirementDescription: "1e40 Mana",
        effectDescription: "Essence Generation Increased Tenfold",
        done() {
            return player.mana.points.gte(1e40)
        }
    }
  },
  tabFormat: {
    "Upgrades": {
        content: [
            ["display-text", function() {
                return 'You have ' + format(player.mana.points) + ' mana'
            }],
            "blank",
            "prestige-button",
            "blank",
            ["display-text", function() {
                return 'You have ' + format(player.points) + ' essence'
            }],
            "blank",
            "upgrades"
        ]
    },
    "Milestones": {
        content: [
            ["display-text", function() {
                return 'You have ' + format(player.mana.points) + ' mana'
            }],
            "blank",
            "prestige-button",
            "blank",
            ["display-text", function() {
                return 'You have ' + format(player.points) + ' essence'
            }],
            "blank",
            "milestones"
        ]
    }
  }
})