let modInfo = {
	name: "The Elemental Tree",
	id: "drachronic-elemental-tree",
	author: "Drachronic",
	pointsName: "Essence",
	modFiles: [
		"tree.js", 
		"layers/01_mana.js",
		"layers/02_magic.js",
		"layers/03a_light.js",
		"layers/03b_dark.js",
		"layers/04_elemental.js",
		"layers/05a_air.js",
		"layers/05b_water.js",
		"layers/05c_earth.js",
		"layers/05d_fire.js",
		"layers/06a_life.js",
		"layers/06b_chaos.js",
		"layers/07a_alpha.js",
		"layers/07b_omega.js"
	],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Elemental Wisp",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)

	// Mana Upgrades
	if (hasUpgrade('mana', 11)) gain = gain.times(2)
	if (hasUpgrade('mana', 21)) gain = gain.times(3)
	if (hasUpgrade('mana', 31)) gain = gain.times(4)

  if (hasUpgrade('mana', 15)) gain = gain.times(upgradeEffect('mana', 15))
  if (hasUpgrade('mana', 25)) gain = gain.times(upgradeEffect('mana', 25))





	// Magic Upgrades
	if (hasUpgrade('magic', 11)) gain = gain.times(3)
	if (hasUpgrade('magic', 21)) gain = gain.times(3)

	// Light Upgrades
	
	// Dark Upgrades
	
	// Elemental Upgrades

	// Air Upgrades

	// Water Upgrades

	// Earth Upgrades
	
	// Fire Upgrades

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}