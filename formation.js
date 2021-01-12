/* tab talents */
let form = [
    {id: 'GEI', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},

    {id: 'DF', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'DFM', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},
    {id: 'DFU', title: 'DFU', desc:'increase res rate front fighters 10%', costs:`250000 Gold & 30 Points`},

    {id: 'OF', title: 'OF', desc:'increase rear fighters atk 200', costs:`250000 Gold & 30 Points`},
    {id: 'OFM', title: 'OFM', desc:'increase rear fighters atk 20%', costs:`250000 Gold & 30 Points`},
    {id: 'OFU', title: 'OFU', desc:'increase rear fighters damage 10%', costs:`250000 Gold & 30 Points`},

    {id: 'FT', title: 'Formation Tree', desc:'', costs:''}
];

let firt = [
    {id: 'GEI', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},

    {id: 'DF', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'DFM', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},
    {id: 'DFU', title: 'DFU', desc:'increase res rate front fighters 10%', costs:`250000 Gold & 30 Points`},

    {id: 'OF', title: 'OF', desc:'increase rear fighters atk 200', costs:`250000 Gold & 30 Points`},
    {id: 'OFM', title: 'OFM', desc:'increase rear fighters atk 20%', costs:`250000 Gold & 30 Points`},
    {id: 'OFU', title: 'OFU', desc:'increase rear fighters damage 10%', costs:`250000 Gold & 30 Points`},

    {id: 'TI', title: 'OF', desc:'increase rear fighters atk 200', costs:`250000 Gold & 30 Points`},
    {id: 'TIM', title: 'OFM', desc:'increase rear fighters atk 20%', costs:`250000 Gold & 30 Points`},
    {id: 'TIU', title: 'OFU', desc:'increase rear fighters damage 10%', costs:`250000 Gold & 30 Points`},

    {id: 'FT', title: 'Fighting Arts Tree', desc:'', costs:''}
];

let mkil = [
    {id: 'GEI', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},

    {id: 'DF', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'DFM', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},
    {id: 'DFU', title: 'DFU', desc:'increase res rate front fighters 10%', costs:`250000 Gold & 30 Points`},

    {id: 'OF', title: 'OF', desc:'increase rear fighters atk 200', costs:`250000 Gold & 30 Points`},
    {id: 'OFM', title: 'OFM', desc:'increase rear fighters atk 20%', costs:`250000 Gold & 30 Points`},
    {id: 'OFU', title: 'OFU', desc:'increase rear fighters damage 10%', costs:`250000 Gold & 30 Points`},

    {id: 'TI', title: 'OF', desc:'increase rear fighters atk 200', costs:`250000 Gold & 30 Points`},
    {id: 'TIM', title: 'OFM', desc:'increase rear fighters atk 20%', costs:`250000 Gold & 30 Points`},
    {id: 'TIU', title: 'OFU', desc:'increase rear fighters damage 10%', costs:`250000 Gold & 30 Points`},

    {id: 'FT', title: 'Master Skill Tree', desc:'', costs:''}
];

let pvp = [
    {id: 'PVP', title: 'PVP Tree', desc:'To unlock tree need previous tree 560 points', costs:'-'},

    {id: 'I', title: 'Arena Tree', desc:'', costs:''},
    {id: 'II', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},
    {id: 'III', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'IV', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},

    {id: 'V', title: 'Tournament Tree', desc:'', costs:''},
    {id: 'VI', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},
    {id: 'VII', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'VIII', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},

    {id: 'IX', title: 'Club Battle Tree', desc:'', costs:''},
    {id: 'X', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},
    {id: 'XI', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'XII', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},

    {id: 'XIII', title: 'Honor Battle Tree', desc:'', costs:''},
    {id: 'XIV', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},
    {id: 'XV', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'XVI', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},

    {id: 'XVII', title: 'Cross-Server Tournament Tree', desc:'', costs:''},
    {id: 'XVIII', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},
    {id: 'XIX', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'XX', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},

    {id: 'XXI', title: 'Cross-Server Loot Battle Tree', desc:'', costs:''},
    {id: 'XXII', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},
    {id: 'XXIII', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'XXIV', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`},

    {id: 'XXV', title: 'Cross-Server Arena Tree', desc:'', costs:''},
    {id: 'XXVI', title: 'GEI', desc:'increase hp 560 & atk 70', costs:`250000 Gold & 30 Points`},
    {id: 'XXVII', title: 'DF', desc:'increase front fighters hp 1500', costs:`250000 Gold & 30 Points`},
    {id: 'XXVIII', title: 'DFM', desc:'increase front fighters hp 20%', costs:`250000 Gold & 30 Points`}
];

/* tab fashion */

