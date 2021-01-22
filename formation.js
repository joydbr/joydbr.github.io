/* tab talents */
let form = [
    {id: 'GEI', title: 'General Enhancement I <hr>', desc:'Increase front fighters HP by 800 & rear fighters ATK by 100 <hr>', costs:'415000 Gold & 36 Points'},

    {id: 'DF', title: 'Defense Formation<hr>', desc:'Increase front fighters HP by 1600<hr>', costs:'415000 Gold & 36 Points'},
    {id: 'DFM', title: 'Defense Formation Modified<hr>', desc:'Increase front fighters HP by 20%<hr>', costs:'415000 Gold & 36 Points'},
    {id: 'DFU', title: 'Defense Formation Ultimate<hr>', desc:'Increase front fighters Res Rate by 10%<hr>', costs:'415000 Gold & 36 Points'},

    {id: 'OF', title: 'Offensive Formation<hr>', desc:'Increase front fighters ATK by 200<hr>', costs:'415000 Gold & 36 Points'},
    {id: 'OFM', title: 'Offensive Formation Modified<hr>', desc:'Increase front fighters ATK by 20%<hr>', costs:'415000 Gold & 36 Points'},
    {id: 'OFU', title: 'Offensive Formation Ultimate<hr>', desc:'Increase front fighters Damage by 10%<hr>', costs:'415000 Gold & 36 Points'},

    {id: 'FT', title: 'Formation Tree', desc:'', costs:''}
];

let firt = [
    {id: 'GEI', title: 'General Enhancement II', desc:'Increase all fighters HP by 800 & ATK by 100', costs:'670000 Gold & 36 Points'},

    {id: 'DF', title: 'Strength Improvement', desc:'Increase DPS fighters ATK by 250', costs:'670000 Gold & 36 Points'},
    {id: 'DFM', title: 'Restriction of Defense Offense', desc:'Reduces DPS fighters damage taken from GANK by 10%', costs:'670000 Gold & 46 Points'},
    {id: 'DFU', title: 'Restriction of Offense Offense', desc:'Increase DPS fighters damage dealt against GANK by 10%', costs:'670000 Gold & 56 Points'},

    {id: 'OF', title: 'Technique Improvement', desc:'Increase GANK fighters HP by 1000 & ATK by 150', costs:'670000 Gold & 36 Points'},
    {id: 'OFM', title: 'Restriction of Defense Skill', desc:'Reduces GANK fighters damage taken from TANK by 10%', costs:'670000 Gold & 46 Points'},
    {id: 'OFU', title: 'Restriction of Offense Skill', desc:'Increase GANK fighters damage dealt against TANK by 10%', costs:'670000 Gold & 56 Points'},

    {id: 'TI', title: 'Health Mastery', desc:'Increase TANK fighters HP by 2000', costs:'670000 Gold & 36 Points'},
    {id: 'TIM', title: 'Restriction of Defense Offense', desc:'Reduces TANK fighters damage taken from DPS by 10%', costs:'670000 Gold & 46 Points'},
    {id: 'TIU', title: 'Restriction of Offense Offense', desc:'Increase TANK fighters damage dealt against DPS by 10%', costs:'670000 Gold & 56 Points'},

    {id: 'FT', title: 'Fighting Arts Tree', desc:'Unlock: Player Lv 50 & 150 points in previous tree', costs:''}
];

let mkil = [
    {id: 'GEI', title: 'General Enhancement III', desc:'Increase all fighters HP by 1600 & ATK by 200', costs:'2340000 Gold & 46 Points'},

    {id: 'DF', title: 'Crit Enhancement I', desc:'Increases DPS fighters Crit by 10%', costs:'2340000 Gold & 56 Points'},
    {id: 'DFM', title: 'Crit Enhancement II', desc:'Increases DPS fighters Crit Damage by 30%', costs:'2340000 Gold & 66 Points'},
    {id: 'DFU', title: 'Bloodlust', desc:'Enable DPS fighters to drain HP by 10%', costs:'2340000 Gold & 80 Points'},

    {id: 'OF', title: 'OF', desc:'increase rear fighters atk 200', costs:'2340000 Gold & 56 Points'},
    {id: 'OFM', title: 'OFM', desc:'increase rear fighters atk 20%', costs:'2340000 Gold & 66 Points'},
    {id: 'OFU', title: 'OFU', desc:'increase rear fighters damage 10%', costs:'2340000 Gold & 80 Points'},

    {id: 'TI', title: 'OF', desc:'increase rear fighters atk 200', costs:'2340000 Gold & 56 Points'},
    {id: 'TIM', title: 'OFM', desc:'increase rear fighters atk 20%', costs:'2340000 Gold & 66 Points'},
    {id: 'TIU', title: 'OFU', desc:'increase rear fighters damage 10%', costs:'2340000 Gold & 80 Points'},

    {id: 'FT', title: 'Master Skill Tree', desc:'Unlock: Player Lv 70 & 280 points in previous tree', costs:''}
];

let pvp = [
    {id: 'PVP', title: 'PVP Tree', desc:'Unlock: Player Lv 80 & 520 points in previous tree', costs:''},

    {id: 'I', title: 'Arena Tree', desc:'', costs:''},
    {id: 'II', title: 'GEI', desc:'increase hp 560 & atk 70', costs:'415000 Gold & 36 Points'},
    {id: 'III', title: 'DF', desc:'increase front fighters hp 1500', costs:'415000 Gold & 36 Points'},
    {id: 'IV', title: 'DFM', desc:'increase front fighters hp 20%', costs:'415000 Gold & 36 Points'},

    {id: 'V', title: 'Tournament Tree', desc:'', costs:''},
    {id: 'VI', title: 'GEI', desc:'increase hp 560 & atk 70', costs:'415000 Gold & 36 Points'},
    {id: 'VII', title: 'DF', desc:'increase front fighters hp 1500', costs:'415000 Gold & 36 Points'},
    {id: 'VIII', title: 'DFM', desc:'increase front fighters hp 20%', costs:'415000 Gold & 36 Points'},

    {id: 'IX', title: 'Club Battle Tree', desc:'', costs:''},
    {id: 'X', title: 'GEI', desc:'increase hp 560 & atk 70', costs:'415000 Gold & 36 Points'},
    {id: 'XI', title: 'DF', desc:'increase front fighters hp 1500', costs:'415000 Gold & 36 Points'},
    {id: 'XII', title: 'DFM', desc:'increase front fighters hp 20%', costs:'415000 Gold & 36 Points'},

    {id: 'XIII', title: 'Honor Battle Tree', desc:'', costs:''},
    {id: 'XIV', title: 'GEI', desc:'increase hp 560 & atk 70', costs:'415000 Gold & 36 Points'},
    {id: 'XV', title: 'DF', desc:'increase front fighters hp 1500', costs:'415000 Gold & 36 Points'},
    {id: 'XVI', title: 'DFM', desc:'increase front fighters hp 20%', costs:'415000 Gold & 36 Points'},

    {id: 'XVII', title: 'Cross-Server Tournament Tree', desc:'', costs:''},
    {id: 'XVIII', title: 'GEI', desc:'increase hp 560 & atk 70', costs:'415000 Gold & 36 Points'},
    {id: 'XIX', title: 'DF', desc:'increase front fighters hp 1500', costs:'415000 Gold & 36 Points'},
    {id: 'XX', title: 'DFM', desc:'increase front fighters hp 20%', costs:'415000 Gold & 36 Points'},

    {id: 'XXI', title: 'Cross-Server Loot Battle Tree', desc:'', costs:''},
    {id: 'XXII', title: 'GEI', desc:'increase hp 560 & atk 70', costs:'415000 Gold & 36 Points'},
    {id: 'XXIII', title: 'DF', desc:'increase front fighters hp 1500', costs:'415000 Gold & 36 Points'},
    {id: 'XXIV', title: 'DFM', desc:'increase front fighters hp 20%', costs:'415000 Gold & 36 Points'},

    {id: 'XXV', title: 'Cross-Server Arena Tree', desc:'', costs:''},
    {id: 'XXVI', title: 'GEI', desc:'increase hp 560 & atk 70', costs:'415000 Gold & 36 Points'},
    {id: 'XXVII', title: 'DF', desc:'increase front fighters hp 1500', costs:'415000 Gold & 36 Points'},
    {id: 'XXVIII', title: 'DFM', desc:'increase front fighters hp 20%', costs:'415000 Gold & 36 Points'}
];

/* tab fashion */

