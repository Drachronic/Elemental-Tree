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
    req = new Decimal(10)
    if (hasUpgrade('mana', 13)) req = req.subtract(1)
    if (hasUpgrade('mana', 23)) req = req.subtract(2)
    return req
  },
  resource: "Mana", // Name of prestige currency
  baseResource: "Essence", // Name of resource prestige is based on
  baseAmount() {return player.points}, // Get the current amount of baseResource
  type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent() {
      exp = new Decimal(0.25)
      if (hasUpgrade('mana', 14)) exp = exp.add(0.25)
      if (hasUpgrade('mana', 24)) exp = exp.add(0.25)
      return exp
  }, // Prestige currency exponent
  gainMult() { // Calculate the multiplier for main currency from bonuses
      mult = new Decimal(1)
      if (hasUpgrade('mana', 12)) mult = mult.times(2)
      if (hasUpgrade('mana', 22)) mult = mult.times(2)

      if (hasUpgrade('magic', 12)) mult = mult.times(3)
      if (hasUpgrade('magic', 22)) mult = mult.times(3)
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
  layerShown(){
    return true
  },
  upgrades: {
    11: {
        title: "Infusion I",
        description: "Doubles essence gain",
        cost: new Decimal(1)
    },
    12: {
        title: "Control I",
        description: "Doubles mana gain",
        cost: new Decimal(3),
        unlocked() {
            return hasUpgrade('mana', 11)
        }
    },
    13: {
        title: "Research I",
        description: "Reduces base essence requirement by 1",
        cost: new Decimal(5),
        unlocked() {
            return hasUpgrade('mana', 12)
        }
    },
    14: {
        title: "Study I",
        description: "Essence cost per mana scales slower",
        cost: new Decimal(10),
        unlocked() {
            return hasUpgrade('mana', 13)
        }
    },
    15: {
          title: "Siphon I",
          description: "Effect scales with mana",
          cost: new Decimal(15),
          effect() {
              return player[this.layer].points.add(1).pow(0.15)
          },
          effectDisplay() {
              return format(upgradeEffect(this.layer, this.id))+"x"
          },
          unlocked() {
              return hasUpgrade('mana', 14)
          }
    },
    16: {
          title: "Unlock Magic",
          description: "Unlocks Magic Resources",
          cost: new Decimal(20),
          onPurchase() {
              player.magic.unlocked = true
          },
          unlocked() {
              return (hasUpgrade('mana', 15) || player.magic.unlocked)
          }
    },
    21: {
        title: "Infusion II",
        description: "Triples essence gain",
        cost: new Decimal(25),
        unlocked() {
            return hasUpgrade('magic', 13)
        }
    },
    22: {
        title: "Control II",
        description: "Doubles mana gain (again)",
        cost: new Decimal(50),
        unlocked() {
            return hasUpgrade('magic', 13)
        }
    },
    23: {
        title: "Research II",
        description: "Reduces base essence requirement by 2",
        cost: new Decimal(100),
        unlocked() {
            return hasUpgrade('magic', 13)
        }
    },
    24: {
        title: "Study II",
        description: "Essence cost per mana scales slower",
        cost: new Decimal(250),
        unlocked() {
            return hasUpgrade('magic', 13)
        }
    },
    25: {
        title: "Siphon II",
        description: "Effect scales with mana",
        cost: new Decimal(500),
        effect() {
            return player[this.layer].points.add(1).pow(0.2)
        },
        effectDisplay() {
            return format(upgradeEffect(this.layer, this.id))+"x"
        },
        unlocked() {
            return hasUpgrade('magic', 13)
        }
    },
    31: {
        title: "Infusion III",
        description: "Quadruples essence gain",
        cost: new Decimal(1000),
        unlocked() {
            return hasUpgrade('magic', 23)
        }
    },
    32: {
        title: "Control III",
        description: "Triples mana gain",
        cost: new Decimal(2000),
    },
    33: {

    },
    34: {

    },
    35: {

    }
  }
})