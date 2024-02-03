addLayer("life", {
  name: "Life",
  symbol: "LF",
  position: -1,
  startData() { return {
    unlocked: false,
    points: new Decimal(0),
  }},
  color: "#39CE5E",
  requires: new Decimal(10), // Can be a function that takes requirement increases into account
  resource: "Life", // Name of prestige currency
  baseResource: "Light", // Name of resource prestige is based on
  baseAmount() {return player.light.points}, // Get the current amount of baseResource
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
  row: 2, // Row the layer is in on the tree (0 is the first row)
  hotkeys: [
      {key: "i", description: "i: Reset for Life", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){
      return (player.life.unlocked)
  },
  upgrades: {
      11: {
          title: "Infuse",
          description: "Double Essence Gain",
          cost: new Decimal(1)
      }
  }
})