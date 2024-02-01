addLayer("m", {
    name: "Mana", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MNA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    branches: ['g'],
    color: "#41A9EE",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Mana", // Name of prestige currency
    baseResource: "Essence", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('m', 12)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for Mana", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infusion I",
            description: "Doubles essence gain",
            cost: new Decimal(1)
        },
        12: {
            title: "Control I",
            description: "Doubles mana gain",
            cost: new Decimal(3)
        },
        13: {
            title: "Siphon I",
            description: "Effect scales with mana",
            cost: new Decimal(5),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id))+"x"
            }
        },
        21: {
            title: "Infusion II",
            description: "Triples essence gain",
            cost: new Decimal(20)
        },
        22: {
            title: "Control II",
            description: "Triples mana gain",
            cost: new Decimal(100)
        },
        23: {
            title: "Siphon II",
            description: "Effect scales with mana",
            cost: new Decimal(500)
        },
        31: {
            title: "Infusion III",
            description: "Quintuples essence gain",
            cost: new Decimal(1500)
        },
        32: {
            title: "Control III",
            description: "Quintuples mana gain",
            cost: new Decimal(100)
        },
        33: {
            title: "Siphon III",
            description: "Effect scales with mana",
            cost: new Decimal(500)
        },
    }
})

addLayer("g", {
    name: "Magic",
    symbol: "MAG",
    position: 0,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    branches: ['l', 'd'],
    color: "#34EBDB",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Magic", // Name of prestige currency
    baseResource: "Mana", // Name of resource prestige is based on
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Magic", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("l", {
    name: "Light",
    symbol: "LGT",
    position: 0,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    branches: ['t', 'i'],
    color: "#D1D1D1",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Light", // Name of prestige currency
    baseResource: "Magic", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "L: Reset for Light", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("d", {
    name: "Dark",
    symbol: "DRK",
    position: 1,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    branches: ['t', 'c'],
    color: "#3F3F3F",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Dark", // Name of prestige currency
    baseResource: "Magic", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for Dark", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("t", {
    name: "Elemental",
    symbol: "ELE",
    position: 1,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    branches: ['a', 'w', 'e', 'f'],
    color: "#3F3F3F",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Elemental", // Name of prestige currency
    baseResource: "Magic", // Name of resource prestige is based on
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: Reset for Elemental", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("a", {
    name: "Air",
    symbol: "AIR",
    position: 0,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#D0FCFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Air", // Name of prestige currency
    baseResource: "Elemental", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "ma", description: "A: Reset for Air", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("w", {
    name: "Water",
    symbol: "WTR",
    position: 1,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#0065B8",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Water", // Name of prestige currency
    baseResource: "Elemental", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "W: Reset for Water", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("e", {
    name: "Earth",
    symbol: "ERT",
    position: 2,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#0A5A35",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Earth", // Name of prestige currency
    baseResource: "Elemental", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for Earth", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("f", {
    name: "Fire",
    symbol: "FIR",
    position: 3,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#E94848",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Fire", // Name of prestige currency
    baseResource: "Elemental", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for Fire", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("i", {
    name: "Life",
    symbol: "LIF",
    position: -1,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#E94848",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Life", // Name of prestige currency
    baseResource: "Light", // Name of resource prestige is based on
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "i: Reset for Life", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})

addLayer("c", {
    name: "Chaos",
    symbol: "CAS",
    position: 4,
        startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#E94848",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Chaos", // Name of prestige currency
    baseResource: "Dark", // Name of resource prestige is based on
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Chaos", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infuse",
            description: "Double Essence Gain",
            cost: new Decimal(1)
        }
    }
})