addLayer("magic", {
  name: "Magic",
  symbol: "MG",
  position: 0,
  startData() { return {
    unlocked: false,
    points: new Decimal(0),
  }},
  branches: ['light', 'dark'],
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
    exp = new Decimal(0.25)
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
    11: {
      title: "Training I",
      description: "Triples essence gain",
      cost: new Decimal(1)
    },
    12: {
      title: "Knowledge I",
      description: "Triples mana gain",
      cost: new Decimal(3)
    },
    13: {
      title: "Wizardry I",
      description: "Unlock Mana Row 2",
      cost: new Decimal(5)
    },
    14: {
      title: "Power I",
      description: "Mana cost for Magic increases slower",
      cost: new Decimal(10)
    },
    15: {
      title: "Transmute I",
      description: "Increase Mana Essence Generation by Mana Amount",
      cost: new Decimal(15)
    },
    16: {
      title: "Surge I",
      description: "Reduces base mana requirement by 1",
      cost: new Decimal(20)
    },
    21: {
      title: "Training II",
      description: "Triples essence gain again",
      cost: new Decimal(25)
    },
    22: {
      title: "Knowledge I",
      description: "Triples mana gain again",
      cost: new Decimal(40)
    },
    23: {
      title: "Wizardry II",
      description: "Unlock Mana Row 3",
      cost: new Decimal(80)
    },
    24: {
      title: "Power II",
      description: "Mana cost for Magic increases slower",
      cost: new Decimal(150)
    },
    25: {
      
    }
  }
})