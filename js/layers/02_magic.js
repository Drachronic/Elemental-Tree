addLayer("magic", {
  name: "Magic",
  symbol: "MG",
  position: 0,
  startData() { return {
    unlocked: false,
    points: new Decimal(0),
  }},
  branches: ['elemental'],
  color: "#34EBDB",
  requires() {
    req = new Decimal(10)
    return req
  },
  resource: "Magic", // Name of prestige currency
  baseResource: "Mana", // Name of resource prestige is based on
  baseAmount() {return player.mana.points}, // Get the current amount of baseResource
  type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent() {
    exp = new Decimal(0.5)
    if (hasMilestone('magic', 1)) exp = exp.add(0.1)
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
  row: 1, // Row the layer is in on the tree (0 is the first row)
  hotkeys: [
      {key: "g", description: "G: Reset for Magic", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){
      return (player.magic.unlocked)
  },
  upgrades: {
    // 1st Row (Available at Start)

    // 2nd Row (Unlocked by Elemental)
  },
  milestones: {
    0: {
      requirementDescription: "10 Magic",
      effectDescription: "Triples Essence Production",
      done() {
        return player.magic.points.gte(10)
      }
    },
    1: {
      requirementDescription: "25 Magic",
      effectDescription: "Magic Scales Slower",
      done() {
        return player.magic.points.gte(25)
      }
    },
    2: {
      requirementDescription: "100 Magic",
      effectDescription: "Doubles Mana Production",
      done() {
        return player.magic.points.gte(100)
      }
    },
    3: {
      requirementDescription: "500 Magic",
      effectDescription: "Unlock Elemental Production",
      done() {
        return player.magic.points.gte(500)
      },
      onComplete() {
        player.elemental.unlocked = true
      }
    },
    4: {
      requirementDescription: "1K Magic",
      effectDescription: "Unlock 2nd Row Mana Upgrades",
      done() {
        return player.magic.points.gte(1000)
      }
    },
    5: {
      requirementDescription: "5K Magic",
      effectDescription: "Keep Mana Upgrades Through ALL Resets",
      done() {
        return player.magic.points.gte(5000)
      }
    },
    6: {
      requirementDescription: "10K Magic",
      effectDescription: "Magic Affects Essence Production",
      done() {
        return player.magic.points.gte(1e4)
      },
      effect() {
        return player[this.layer].points.add(1).pow(0.15)
      },
      effectDisplay() {
        return format(milestoneEffect(this.layer, this.id))+"x"
      }
    },
    7: {
      requirementDescription: "100K Magic",
      effectDescription: "Unlock 3rd Row Mana Upgrades",
      done() {
        return player.magic.points.gte(1e6)
      }
    },
    8: {
      requirementDescription: "1B Magic",
      effectDescription: "Passively gain 10% Magic every second (combines)",
      done() {
        return player.magic.points.gte(1e9)
      }
    },
    9: {
      requirementDescription: "1e15 Magic",
      effectDescription: "Passively Gain 20% Magic every second (combines)",
      done() {
        return player.magic.points.gte(1e15)
      }
    },
    10: {
      requirementDescription: "1e50 Magic",
      effectDescription: "Unlocks Mirage, Nature, Frost, and Lava (if other requirments are met)",
      done() {
        return player.magic.points.gte(1e50)
      },
      onComplete() {
        if (player.air.points.gte(100)) {
          player.mirage.unlocked
        }
        if (player.earth.points.gte(100)) {
          player.nature.unlocked
        }
        if (player.water.points.gte(100)) {
          player.frost.unlocked
        }
        if (player.fire.points.gte(100)) {
          player.lava.unlocked
        }
      }
    },
    11: {
      requirementDescription: "1e1000 Magic",
      done() {
        return player.magic.points.gte(1e1000)
      }
    }
  },
  tabFormat: {
    "Upgrades": {
        content: [
            ["display-text", function() {
                return 'You have ' + format(player.magic.points) + ' magic'
            }],
            "blank",
            "prestige-button",
            "blank",
            ["display-text", function() {
              return 'You have ' + format(player.mana.points) + ' mana'
            }],
            "blank",
            "upgrades"
        ]
    },
    "Milestones": {
        content: [
            ["display-text", function() {
              return 'You have ' + format(player.magic.points) + ' magic'
            }],
            "blank",
            "prestige-button",
            "blank",
            ["display-text", function() {
              return 'You have ' + format(player.mana.points) + ' mana'
            }],
            "blank",
            "milestones"
        ]
    }
  }
})