addLayer("mana", {
  name: "Mana", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  startData() { return {
    unlocked: true,
    points: new Decimal(0),
  }},
  branches: ['magic'],
  color: "#41A9EE",
  requires() {
    req = new Decimal(0.1)
    if (hasMilestone('mana', 0)) req = req.div(2)
    if (hasUpgrade('mana', 25)) req = req.div(2)
    if (hasUpgrade('mana', 35)) req = req.times(upgradeEffect('mana', 35))
    return req
  },
  resource: "Mana", // Name of prestige currency
  baseResource: "Essence", // Name of resource prestige is based on
  baseAmount() {
    return player.points
  }, // Get the current amount of baseResource
  type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
  exponent() {
      exp = new Decimal(0.15)
      if (hasMilestone('mana', 10)) exp = exp.times(milestoneEffect('mana', 10))
      return exp.add(1)
  }, // Prestige currency exponent
  gainMult() { // Calculate the multiplier for main currency from bonuses
      mult = new Decimal(1)
      if (hasUpgrade('mana', 31)) mult = mult.times(2)
      if (getBuyableAmount('mana', 23) > 0) {
        mult = mult.times(getBuyableAmount('mana', 23))
      }
      return mult
  },
  gainExp() { // Calculate the exponent on main currency from bonuses
    gxp = new Decimal(1)
    if (hasUpgrade('mana', 32)) gxp = gxp.add(0.2)
    return gxp
  },
  row: 0, // Row the layer is in on the tree (0 is the first row)
  hotkeys: [
      {key: "m", description: "M: Reset for Mana", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown() {
    return true
  },
  canBuyMax() {
    return hasMilestone('mana', 1)
  },
  doReset(layer) {
    if(layers[layer].row <= layers[this.layer].row || layers[layer].row == "side")return;

    layerDataReset(this.layer, ["milestones", "upgrades"])
  },
  passiveGeneration() {
    let gen = new Decimal(0)
    if (hasMilestone('mana', 11)) gen = gen.add(milestoneEffect('mana', 11))
    if (hasMilestone('mana', 12)) gen = gen.add(milestoneEffect('mana', 12))
    if (hasMilestone('mana', 13)) gen = gen.add(milestoneEffect('mana', 13))
    if (hasMilestone('mana', 14)) gen = gen.add(milestoneEffect('mana', 14))
    if (hasMilestone('mana', 15)) gen = gen.add(milestoneEffect('mana', 15))
    return gen.times(getResetGain('mana'))
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
      title: "[1-1] Strange Energy",
      body() {
        return "You discover a strange energy in a cave. Unsure of what it is, \
        you intend to come back with some quipment to study it further."
      },
      unlocked() {
        return hasUpgrade('mana', 11)
      }
    },
    12: {
      title: "[1-2] Further Research Required",
      body() {
        return "You bring your equipment back to the cave and being studying \
        the unique properties of the energy. In some of the films the air itself \
        seems to glow around the cave."
      },
      unlocked() {
        return hasUpgrade('mana', 12)
      }
    },
    13: {
      title: "[1-3] Found More Strange Energy",
      body() {
        return "You stumble upon reports online of someone who seems to have \
        discovered another cave of this strange energy. You start to work with \
        them to compare the properties of the energy."
      },
      unlocked() {
        return hasUpgrade('mana', 13)
      }
    },
    14: {
      title: "[1-4] Discovered how to Synethesize Mana",
      body() {
        return "After many sleepless nights and hundreds of hours of research, \
        you discover a way to synthesize the energy using a ton of very rare \
        materials. It's slow and expensive, but you begin making more of it."
      },
      unlocked() {
        return hasUpgrade('mana', 14)
      }
    },
    15: {
      title: "[1-5] Energy Usefullness",
      body() {
        return "Finally, you've figured out a way to utilize the amazing \
        properties of the energy as a power source for your research machines. \
        Strangely, the energy seems to make them extremely efficient at no extra \
        cost of power or heat."
      },
      unlocked() {
        return hasUpgrade('mana', 15)
      }
    },
    21: {
      title: "[2-1] Weird Stuff is Happening",
      body() {
        return "The machines are beginning to act strangely. You disconnected a \
        few computers from the wall outlets and yet they still seem to be working. \
        It's like the energy itself is powerful the entire machine, and is still \
        making it run faster than ever before."
      },
      unlocked() {
        return hasUpgrade('mana', 21)
      }
    },
    22: {
      title: "[2-2] Massive Source Found",
      body() {
        return "Your cohort across the world calls you up, beaming with good \
        news. A third source for this energy has been found, deep underground \
        in another cave. The source, your friend says, is tenfold more massive \
        than either of the sources you've found so far. You immediately get off \
        the phone and book a plane ticket."
      },
      unlocked() {
        return hasUpgrade('mana', 22)
      }
    },
    23: {
      title: "[2-3] New Properties Discovered",
      body() {
        return "This new source of the strange energy is unlike either of others. \
        Inside this cave, the walls seem to hum and their is a faint glow in the \
        air that follows you wherever you go, growing brighter as you get to the \
        source at the center. If you could figure out what makes it glow, you \
        could revolutionize lighting throughout the world."
      },
      unlocked() {
        return hasUpgrade('mana', 23)
      }
    },
    24: {
      title: "[2-4] Energy Mitosis",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 24)
      }
    },
    25: {
      title: "[2-5] The Future is Now!",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 25)
      }
    },
    31: {
      title: "[3-1] ",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 31)
      }
    },
    32: {
      title: "[3-2] ",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 32)
      }
    },
    33: {
      title: "[3-3]",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 33)
      }
    },
    34: {
      title: "[3-4]",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 34)
      }
    },
    35: {
      title: "[3-5]",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 35)
      }
    },
    41: {
      title: "[4-1]",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 41)
      }
    },
    42: {
      title: "[4-2]",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 42)
      }
    },
    43: {
      title: "[4-3]",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 43)
      }
    },
    44: {
      title: "[4-4]",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 44)
      }
    },
    45: {
      title: "[4-5]",
      body() {
        return ""
      },
      unlocked() {
        return hasUpgrade('mana', 45)
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
    111: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    112: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    113: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    114: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    },
    115: {
      title: "",
      body() {
        return ""
      },
      unlocked() {
        
      }
    }
	},
  upgrades: {
    11: {
      title: "Discover Essence",
      description: "Begin generating Essence per second",
      cost: new Decimal(0),
      effect() {
        let eff = new Decimal(0.01)
        if (hasUpgrade('mana', 45)) eff = eff.times(upgradeEffect('mana', 45))
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"/sec"
      }
    },
    12: {
      title: "Study Essence",
      description: "Increases Essence Generation",
      cost: new Decimal(1),
      effect() {
        let eff = new Decimal(2)
        if (hasUpgrade('mana', 45)) eff = eff.times(upgradeEffect('mana', 45))
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 11)
      }
    },
    13: {
      title: "Locate More Essence",
      description() {
        let cap = new Decimal(25)
        if (getBuyableAmount('mana', 21) > 0) {
          let data = tmp[this.layer].buyables[21]
          cap = data.effect.second
        }

        return "Essence Generation Increases Based on Reset Time, caps at " + cap + "x"
      },
      cost: new Decimal(2),
      effect() {
        let cap = new Decimal(25)
        let eff = new Decimal(1)
        let rTime = player[this.layer].resetTime

        if (rTime <= 40) {
          eff = eff.add(player[this.layer].resetTime / 10)
        }
        else if (rTime <= 140) {
          eff = eff.add(4)
          eff = eff.add(player[this.layer].resetTime / 20)
        }
        else if (rTime <= 340) {
          eff = eff.add(9)
          eff = eff.add(player[this.layer].resetTime / 40)
        }
        else if (rTime <= 1340) {
          eff = eff.add(14)
          eff = eff.add(player[this.layer].resetTime / 100)
        }
        else {
          eff = eff.add(24)
          eff = eff.add(player[this.layer].resetTime / 300)
        }

        if (getBuyableAmount('mana', 21) > 0) {
          let data = tmp[this.layer].buyables[21]
          eff = eff.times(data.effect.first)
          cap = data.effect.second
        }

        if (hasUpgrade('mana', 45)) eff = eff.times(upgradeEffect('mana', 45))

        if (eff > cap) {
          return cap
        }
        else {
          return eff
        }
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 12)
      }
    },
    14: {
      title: "Divine More Essence",
      description: "Essence Generation Increases Based on Essence Found",
      cost: new Decimal(3),
      effect() {
        let eff = new Decimal(1)
        eff = eff.add(player[this.layer].points.pow(0.75) / 2.5)
        if (hasUpgrade('mana', 45)) eff = eff.times(upgradeEffect('mana', 45))
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 12)
      }
    },
    15: {
      title: "Find a Use for Essence",
      description: "Base Essence Generation is now 0.1/sec",
      cost: new Decimal(4),
      effect() {
        let eff = new Decimal(0.1)
        if (hasUpgrade('mana', 45)) eff = eff.times(upgradeEffect('mana', 45))
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"/sec"
      },
      unlocked() {
        return hasUpgrade(this.layer, 12)
      }
    },
    21: {
      title: "Study the Effects of Mana",
      description: "Unlock Mana Milestones",
      cost: new Decimal(5),
      unlocked() {
        return hasUpgrade(this.layer, 15)
      }
    },
    22: {
      title: "Discover a Strange Anomaly",
      description: "Triple Essence Production",
      cost: new Decimal(6),
      unlocked() {
        return hasUpgrade(this.layer, 21)
      }
    },
    23: {
      title: "Siphon Essence from the Anomaly",
      description: "Base Essence Generation is now 0.5/sec",
      cost: new Decimal(8),
      unlocked() {
        return hasUpgrade(this.layer, 22)
      }
    },
    24: {
      title: "Alchemize Essence into More Mana",
      description: "Base Essence Generation is now 1/sec",
      cost: new Decimal(10),
      unlocked() {
        return hasUpgrade(this.layer, 23)
      }
    },
    25: {
      title: "Transmute Essence into Matter",
      description: "Decrease Mana's base Essence cost by 50%",
      cost: new Decimal(12),
      unlocked() {
        return hasUpgrade(this.layer, 24)
      }
    },
    31: {
      title: "Enhance Mana with Essence",
      description: "Essence converts into more Mana",
      cost: new Decimal(15),
      unlocked() {
        return hasUpgrade(this.layer, 25)
      }
    },
    32: {
      title: "Essence Quantification Methodologies",
      description: "Increase the amount of Mana you get from Essence",
      cost: new Decimal(20),
      unlocked() {
        return hasUpgrade(this.layer, 25)
      }
    },
    33: {
      title: "Mana Infusion",
      description: "Essence Production is increased based on Mana Upgrades bought",
      cost: new Decimal(30),
      effect() {
        let uCount = new Decimal(player[this.layer].upgrades.length)
        if (getBuyableAmount('mana', 22) > 0) {
          uCount = uCount.times(getBuyableAmount('mana', 22).add(1))
        }
        return uCount
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 31) && hasUpgrade(this.layer, 32)
      }
    },
    34: {
      title: "Mana Diffusion",
      description: "Essence Production is increased based on Mana Buyables bought",
      cost: new Decimal(40),
      effect() {
        let bCount = getFullBuyablesCount(this.layer)
        return bCount
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 31) && hasUpgrade(this.layer, 32)
      }
    },
    35: {
      title: "Learn the secrets of Mana",
      description: "Lowers Essence cost per Mana based on Mana amount",
      cost: new Decimal(50),
      effect() {
        if (player[this.layer].points < 5) return new Decimal(0.95)
        else if (player[this.layer].points < 10) return new Decimal(0.90)
        else if (player[this.layer].points < 15) return new Decimal(0.85)
        else if (player[this.layer].points < 20) return new Decimal(0.80)
        else if (player[this.layer].points < 25) return new Decimal(0.75)
        else if (player[this.layer].points < 30) return new Decimal(0.7)
        else if (player[this.layer].points < 35) return new Decimal(0.65)
        else if (player[this.layer].points < 40) return new Decimal(0.6)
        else if (player[this.layer].points < 45) return new Decimal(0.55)
        else if (player[this.layer].points < 50) return new Decimal(0.5)
        else return new Decimal(0.4)
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 33) && hasUpgrade(this.layer, 34)
      }
    },
    41: {
      title: "Advanced Mana-Crafting",
      description: "Increase Essence Generation based on the lowest level of Row 1 Buyable you have",
      cost: new Decimal(60),
      effect() {
        let lowest = getLowestBuyableAmount(this.layer, [11, 12, 13])
        let eff = new Decimal(10).times(lowest).pow(4)

        if (eff < 1) return new Decimal(0)
        else return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 35)
      }
    },
    42: {
      title: "Advanced Mana-Divining",
      description: "Increase Essence Generation based on the lowest level of Row 2 Buyable you have",
      cost: new Decimal(70),
      effect() {
        let lowest = getLowestBuyableAmount(this.layer, [21, 22, 23])
        let eff = new Decimal(5).times(lowest).pow(5)

        if (eff < 1) return new Decimal(0)
        else return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 41)
      }
    },
    43: {
      title: "Advanced Mana-Infusion",
      description: "Increase the effects of Row 1 Buyables",
      cost: new Decimal(80),
      effect() {
        let eff = new Decimal(1.5)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 41)
      }
    },
    44: {
      title: "Meta Mana Magic",
      description: "Increase the effects of Row 2 Buyables",
      cost: new Decimal(90),
      effect() {
        let eff = new Decimal(1.5)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 42) && hasUpgrade(this.layer, 43)
      }
    },
    45: {
      title: "Mana Explosions",
      description: "Increases all Row 1 Mana Upgrades based on your Mana",
      cost: new Decimal(100),
      effect() {
        let eff = new Decimal(1)
        eff = player[this.layer].points.pow(0.1)
        return eff
      },
      effectDisplay() {
        return format(this.effect())+"x"
      },
      unlocked() {
        return hasUpgrade(this.layer, 44)
      }
    }
  },
	buyables: {
    11: {
      title: "Mana Siphon",
      cost(x) {
        let bCost = new Decimal(2).times(x).add(2)
        return bCost
      },
      effect(x) {
        let def = new Decimal(1)
        let eff = new Decimal(0.1).times(x)
        let power = new Decimal(0.5).times(x)
        let final = baseBuyableEffect(x, def, def.add(eff).pow(power).add(x))
        if (getBuyableAmount('mana', 13) > 0) final = final.times(buyableEffect('mana', 13))
        if (hasUpgrade('mana', 43)) final = final.pow(upgradeEffect('mana', 43))
        return final
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "Increases Essence Generation")
      },
      unlocked() {
        return hasMilestone('mana', 2)
      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(10)
        limit = limit.times(getBuyableAmount('mana', 31)).add(10)
        return limit
      }
    },
    12: {
      title: "Mana Generator",
      cost(x) {
        let bCost = new Decimal(3).times(x).add(3)
        return bCost
      },
      effect(x) {
        let eff = new Decimal(0)
        eff = baseBuyableEffect(x, eff, eff.add(x).times(x))
        if (hasUpgrade('mana', 43)) eff = eff.pow(upgradeEffect('mana', 43))
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "Increases Base Essence Rate")
      },
      unlocked() {
        return hasMilestone('mana', 3)
      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(10)
        limit = limit.times(getBuyableAmount('mana', 31)).add(10)
        return limit
      }
    },
    13: {
      title: "Mana Vacuum",
      cost(x) {
        let bCost = new Decimal(4).times(x).add(4)
        return bCost
      },
      effect(x) {
        let eff = new Decimal(1)
        if (hasUpgrade('mana', 43)) eff = eff.pow(upgradeEffect('mana', 43))
        eff = baseBuyableEffect(x, eff, eff.add(0.6).pow(x))
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "Increases effect of Mana Siphons")
      },
      unlocked() {
        return hasMilestone('mana', 4)
      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(10)
        limit = limit.times(getBuyableAmount('mana', 31)).add(10)
        return limit
      }
    },
    21: {
      title: "Mana Portal",
      cost(x) {
        let bCost = new Decimal(5).times(x).add(5)
        return bCost
      },
      effect(x) {
        let eff = {}
        eff.first = new Decimal(1)
        eff.second = new Decimal(0)
        eff.first = baseBuyableEffect(x, eff.first, eff.first.add(0.4).pow(x))
        eff.second = baseBuyableEffect(x, eff.second, eff.second.add(25).times(x))
        if (hasUpgrade('mana', 44)) eff.first = eff.first.pow(upgradeEffect('mana', 44))
        if (hasUpgrade('mana', 44)) eff.second = eff.second.pow(upgradeEffect('mana', 44))
        return eff
      },
      display() {
        return baseBuyableTextTwoEffects(this.layer, this.id, this.purchaseLimit(), 
          "Increases Effect of 'Locate More Essence'",
          "Increases Cap of 'Locate More Essence'")
      },
      unlocked() {
        return hasMilestone('mana', 5)
      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(10)
        limit = limit.times(getBuyableAmount('mana', 31)).add(10)
        return limit
      }
    },
    22: {
      title: "Mana Infuser",
      cost(x) {
        let bCost = new Decimal(6).times(x).add(6)
        return bCost
      },
      effect(x) {
        let eff = new Decimal(1)
        if (hasUpgrade('mana', 44)) eff = eff.pow(upgradeEffect('mana', 44))
        eff = baseBuyableEffect(x, eff, eff.add(4).times(x))
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "Increases the Effects of Mana Infusion")
      },
      unlocked() {
        return hasMilestone('mana', 6)
      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(10)
        limit = limit.times(getBuyableAmount('mana', 31)).add(10)
        return limit
      }
    },
    23: {
      title: "Mana Dimensions",
      cost(x) {
        let bCost = new Decimal(7).times(x).add(7)
        return bCost
      },
      effect(x) {
        let eff = new Decimal(1)
        if (hasUpgrade('mana', 44)) eff = eff.pow(upgradeEffect('mana', 44))
        eff = baseBuyableEffect(x, eff, eff.times(x).div(2).pow(x))
        return eff
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit(), 
          "Increases Mana Multiplier")
      },
      unlocked() {
        return hasMilestone('mana', 7)
      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit() {
        let limit = new Decimal(10)
        limit = limit.times(getBuyableAmount('mana', 31)).add(10)
        return limit
      }
    },
    31: {
      title: "Mana Singularity",
      cost(x) {
        let bCost = new Decimal(8).times(x).add(8)
        return bCost
      },
      effect(x) {
        let eff = new Decimal(1)
        return baseBuyableEffect(x, 1, eff.times(x).add(1))
      },
      display() {
        return baseBuyableText(this.layer, this.id, this.purchaseLimit,
          "Increase Max Amount for all other Mana Buyables")
      },
      unlocked() {
        return hasMilestone('mana', 8)
      },
      canAfford() {
        return baseBuyableAfford(this.layer, this.id)
      },
      buy() {
        baseBuyablePurchase(this.layer, this.id)
      },
      purchaseLimit: new Decimal(9)
    }
	},
  milestones: {
    0: {
      requirementDescription: "7 Mana",
      effectDescription: "Base Essence Cost per Mana is halved",
      effect() {
        let eff = new Decimal(0.5)
        return eff
      },
      done() {
        return player[this.layer].points.gte(7)
      }
    },
    1: {
      requirementDescription: "9 Mana",
      effectDescription: "Can Purchase Max Mana",
      done() {
        return player[this.layer].points.gte(9)
      }
    },
    2: {
      requirementDescription: "11 Mana",
      effectDescription: "Unlock Mana Siphons",
      done() {
        return player[this.layer].points.gte(11)
      }
    },
    3: {
      requirementDescription: "15 Mana",
      effectDescription: "Unlock Mana Generators",
      done() {
        return player[this.layer].points.gte(15)
      }
    },
    4: {
      requirementDescription: "20 Mana",
      effectDescription: "Unlock Mana Vacuums",
      done() {
        return player[this.layer].points.gte(20)
      }
    },
    5: {
      requirementDescription: "25 Mana",
      effectDescription: "Unlock Mana Portals",
      done() {
        return player[this.layer].points.gte(25)
      }
    },
    6: {
      requirementDescription: "30 Mana",
      effectDescription: "Unlock Mana Infusers",
      done() {
        return player[this.layer].points.gte(30)
      }
    },
    7: {
      requirementDescription: "35 Mana",
      effectDescription: "Unlocks Mana Dimensions",
      done() {
        return player[this.layer].points.gte(35)
      }
    },
    8: {
      requirementDescription: "40 Mana",
      effectDescription: "Unlocks Mana Singularities",
      done() {
        return player[this.layer].points.gte(40)
      }
    },
    9: {
      requirementDescription: "50 Mana",
      effectDescription: "Unlocks Simple Magic",
      done() {
        return player[this.layer].points.gte(50)
      }
    },
    10: {
      requirementDescription: "75 Mana",
      effectDescription: "Mana costs rise slower",
      effect() {
        let eff = new Decimal(0.5)
        return eff
      },
      done() {
        return player[this.layer].points.gte(75)
      }
    },
    11: {
      requirementDescription: "100 Mana",
      effectDescription: "Passively Generate 1% of Mana Reset per second",
      effect() {
        let eff = new Decimal(0.01)
        return eff
      },
      done() {
        return player[this.layer].points.gte(100)
      }
    },
    12: {
      requirementDescription: "200 Mana",
      effectDescription: "Passively Generate 5% of Mana Reset per second",
      effect() {
        let eff = new Decimal(0.04)
        return eff
      },
      done() {
        return player[this.layer].points.gte(200)
      }
    },
    13: {
      requirementDescription: "500 Mana",
      effectDescription: "Passively Generate 20% of Mana Reset per second",
      effect() {
        let eff = new Decimal(0.15)
        return eff
      },
      done() {
        return player[this.layer].points.gte(500)
      }
    },
    14: {
      requirementDescription: "1000 Mana",
      effectDescription: "Passively Generate 50% of Mana Reset per second",
      effect() {
        let eff = new Decimal(0.30)
        return eff
      },
      done() {
        return player[this.layer].points.gte(1000)
      }
    },
    15: {
      requirementDescription: "5000 Mana",
      effectDescription: "Passively Generate 100% of Mana Reset per second",
      effect() {
        let eff = new Decimal(0.50)
        return eff
      },
      done() {
        return player[this.layer].points.gte(5000)
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
          "blank",
          "h-line",
          "blank",
          ["display-text", function() {
            return "<h3>Row 4 Upgrades</h3>"
          }],
          "blank",
          ["infobox", 41],
          ["infobox", 42],
          ["infobox", 43],
          ["infobox", 44],
          ["infobox", 45],
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
          ["infobox", 110],
          ["infobox", 111],
          ["infobox", 112],
          ["infobox", 113],
          ["infobox", 114],
          ["infobox", 115]
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
        return hasUpgrade('mana', 21)
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
        return hasMilestone('mana', 2)
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
        return hasUpgrade('mana', 11)
      }
    }
  }
})