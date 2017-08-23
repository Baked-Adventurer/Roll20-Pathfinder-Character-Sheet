export default {
	/* Pathfinder SHEET constants */
	version: 1.70,
	announcementVersionAttr: 'attentionv169-show',

	/***************************************Lists of Fields ************************************************************/
	//add any new repeating sections here. This is the word after "repeating_"
	repeatingSections: ["weapon", "ability", "class-ability", "feat", "racial-trait", "trait", "item", "npc-spell-like-abilities", "mythic-ability", "mythic-feat", "buff", "spells", "buff2"],
	//repeating sections that have used and used|max and max-calculation fields
	repeatingMaxUseSections: ["class-ability", "feat", "racial-trait", "trait", "mythic-ability", "mythic-feat", "ability"],

	//attribute of a dropdown mapped to attribute to write evaluated number to.
	//all simple dropdowns that do not need to call any other function when evaluating besides setDropdownValue and findAbilityInString
	//non repeating
	abilityScoreManualDropdowns: {
		"HP-ability": "HP-ability-mod",
		"init-ability": "init-ability-mod",
		"Fort-ability": "Fort-ability-mod",
		"Ref-ability": "Ref-ability-mod",
		"Will-ability": "Will-ability-mod",
		"melee-ability": "melee-ability-mod",
		"melee2-ability": "melee2-ability-mod",
		"ranged-ability": "ranged-ability-mod",
		"ranged2-ability": "ranged2-ability-mod",
		"CMB-ability": "CMB-ability-mod",
		"CMB2-ability": "CMB2-ability-mod",
		"sanity-ability": "sanity-ability-mod",
		"concentration-0-ability": "concentration-0-mod",
		"concentration-1-ability": "concentration-1-mod",
		"concentration-2-ability": "concentration-2-mod",
        'AC-ability': 'AC-ability-mod',
        'FF-ability': 'FF-DEX',
        'CMD-ability': 'FF-CMD',
        'CMD-ability1': 'CMD-STR',
        'CMD-ability2':	'CMD-DEX',
		'selected-ability-psionic-power': 'ability-psionic-power',
		'kineticist_ability': 'kineticist_ability-mod'
		},
	levelPlusBABManualDropdowns:[
		'melee_bab','melee2_bab','ranged_bab','ranged2_bab','cmb_bab','cmb2_bab','kineticist_level'
	],
	manualDropdownDefaults: {
		"HP-ability": "CON-mod",
		"init-ability": "DEX-mod",
		"Fort-ability": "CON-mod",
		"Ref-ability": "DEX-mod",
		"Will-ability": "WIS-mod",
		"melee-ability": "STR-mod",
		"melee2-ability": "0",
		"ranged-ability": "DEX-mod",
		"ranged2-ability": "0",
		"melee_bab": "bab",
		"melee2_bab": "bab",
		"ranged_bab": "bab",
		"ranged2_bab": "bab",
		"cmb_bab": "bab",
		"cmb2_bab": "bab",
		"sanity-ability": "0",
		"concentration-0-ability": "0",
		"concentration-1-ability": "0",
		"concentration-2-ability": "0",
        'AC-ability': 'DEX-mod',
        'FF-ability': '0',
        'CMD-ability': '0',
        'CMD-ability1': 'STR-mod',
        'CMD-ability2':	'DEX-mod',
		'selected-ability-psionic-power': '0',
		'kineticist_ability':'CON-mod'
	},
	repeatingAttackTypeManualDropdowns:{
		"weapon":"attack-type",
		"item":"item-attack-type",
		"spells":"spell-attack-type",
		"ability":"abil-attack-type"
	},

	//attribute of a macro, mapped to attribute to write evaluation to
	//all simple macros that do not need to call other functions besides evaluateAndSetNumber
	equationMacros: {
		"init-misc": "init-misc-mod",
		"HP-formula-macro-text": "HP-formula-mod",
		"Max-Skill-Ranks-Misc": "Max-Skill-Ranks-mod",
		"SR-macro-text": "SR",
		"spellclass-0-SP_misc": "spellclass-0-SP-mod",
		"spellclass-1-SP_misc": "spellclass-1-SP-mod",
		"spellclass-2-SP_misc": "spellclass-2-SP-mod",
		"sanity_score_misc": "sanity_score_misc-mod",
		"sanity_threshold_misc": "sanity_threshold_misc-mod",
		"spellclass-0-level-misc": "spellclass-0-level-misc-mod",
		"spellclass-1-level-misc": "spellclass-1-level-misc-mod",
		"spellclass-2-level-misc": "spellclass-2-level-misc-mod",
		"Concentration-0-misc": "Concentration-0-misc-mod",
		"Concentration-1-misc": "Concentration-1-misc-mod",
		"Concentration-2-misc": "Concentration-2-misc-mod",
		"Ref-misc": "Ref-misc-mod",
		"Fort-misc": "Fort-misc-mod",
		"Will-misc": "Will-misc-mod",
		"AC-misc": "AC-misc-mod",
		"CMD-misc": "CMD-misc-mod",
		"attk-melee-misc": "attk-melee-misc-mod",
		"attk-ranged-misc": "attk-ranged-misc-mod",
		"attk-CMB-misc": "attk-CMB-misc-mod",
		"attk-melee2-misc": "attk-melee2-misc-mod",
		"attk-ranged2-misc": "attk-ranged2-misc-mod",
		"attk-CMB2-misc": "attk-CMB2-misc-mod",
		"kineticistburn_macro_text": "kineticistburn_max",
		"internalbuffer_macro_text": "internalbuffer_max",
		"kineticblast_attack_macro_text": "kineticblast_attack-mod",
		"kineticblast_dmg_macro_text": "kineticblast_dmg-mod",
		"spellclass-0-spell-points-misc": "spellclass-0-spell-points-misc-mod",
		"spellclass-1-spell-points-misc": "spellclass-1-spell-points-misc-mod",
		"spellclass-2-spell-points-misc": "spellclass-2-spell-points-misc-mod"
	},
	customEquationMacros: {
		"customa1": "customa1-mod",
		"customa2": "customa2-mod",
		"customa3": "customa3-mod",
		"customa4": "customa4-mod_max",
		"customa5": "customa5-mod_max",
		"customa6": "customa6-mod_max",
		"customa7": "customa7-mod_max",
		"customa8": "customa8-mod_max",
		"customa9": "customa9-mod_max",
		"customa10": "customa10-mod",
		"customa11": "customa11-mod",
		"customa12": "customa12-mod"
	},

	//the 3 spell classes at top of spells page
	spellClassIndexes: ["0", "1", "2"],
	silentParams : {'silent':true},
	minusreg : /\-|&Mdash;|&\#8212;|\u2013|\u2014|\u2212|\u02d7/,
	dashtominusreg : /&Mdash;|&\#8212;|\u2013|\u2014|\u2212|\u02d7/g,
	critreg : /\/(\d+)[\-|\u2013|\u2014|\u2212|\u02d7]20(?:[x\u00d7](\d+)){0,1}/,
	critmultreg : /[x\u00d7](\d+)/,
	diceDiereg : /(\d+)d(\d+)\s*(?:([\+|\-|\u2013|\u2014|\u2212|\u02d7])(\d+)){0,1}/,
	diceDieregOneGroup : /(\d+d\d+\s*(?:[\+|\-|\u2013|\u2014|\u2212|\u02d7]\d+){0,1})/g,
	findBadNegDice : /(\d+)d([123468])([13456789])/g,   // invalid: 2nd digit not 0 or 2 actually what if it's d10-1? d101?d1012?
	findBadCritRange : /\/(\d+)20/g
};
