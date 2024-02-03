addLayer("air", {
  name: "Air",
  symbol: "AI",
  position: 0,
  startData() { return {
    unlocked: false,
    points: new Decimal(0),
  }},
  color: "#D0FCFF",
  requires() {
    req = new Decimal(10)
    return req
  },
  resource: "Air", // Name of prestige currency
  baseResource: "Elemental", // Name of resource prestige is based on
  baseAmount() {return player.elemental.points}, // Get the current amount of baseResource
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
  row: 3, // Row the layer is in on the tree (0 is the first row)
  hotkeys: [
      {key: "ma", description: "A: Reset for Air", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){
      return (player.air.unlocked)
  },
  upgrades: {
      11: {
          title: "Infuse",
          description: "Double Essence Gain",
          cost: new Decimal(1)
      }
  }
})