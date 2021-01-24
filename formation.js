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
    {id: 'GEI', title: 'General Enhancement II<hr>', desc:'Increase all fighters HP by 800 & ATK by 100<hr>', costs:'670000 Gold & 36 Points'},

    {id: 'DF', title: 'Strength Improvement<hr>', desc:'Increase DPS fighters ATK by 250<hr>', costs:'670000 Gold & 36 Points'},
    {id: 'DFM', title: 'Restriction of Defense Offense<hr>', desc:'Reduces DPS fighters damage taken from GANK by 10%<hr>', costs:'670000 Gold & 46 Points'},
    {id: 'DFU', title: 'Restriction of Offense Offense<hr>', desc:'Increase DPS fighters damage dealt against GANK by 10%<hr>', costs:'670000 Gold & 56 Points'},

    {id: 'OF', title: 'Technique Improvement<hr>', desc:'Increase GANK fighters HP by 1000 & ATK by 150<hr>', costs:'670000 Gold & 36 Points'},
    {id: 'OFM', title: 'Restriction of Defense Skill<hr>', desc:'Reduces GANK fighters damage taken from TANK by 10%<hr>', costs:'670000 Gold & 46 Points'},
    {id: 'OFU', title: 'Restriction of Offense Skill<hr>', desc:'Increase GANK fighters damage dealt against TANK by 10%<hr>', costs:'670000 Gold & 56 Points'},

    {id: 'TI', title: 'Health Mastery<hr>', desc:'Increase TANK fighters HP by 2000<hr>', costs:'670000 Gold & 36 Points'},
    {id: 'TIM', title: 'Restriction of Defense Offense<hr>', desc:'Reduces TANK fighters damage taken from DPS by 10%<hr>', costs:'670000 Gold & 46 Points'},
    {id: 'TIU', title: 'Restriction of Offense Offense<hr>', desc:'Increase TANK fighters damage dealt against DPS by 10%<hr>', costs:'670000 Gold & 56 Points'},

    {id: 'FT', title: 'Fighting Arts Tree<hr>', desc:'Unlock: Player Lv 50 & 150 points in previous tree', costs:''}
];

let mkil = [
    {id: 'GEI', title: 'General Enhancement III<hr>', desc:'Increase all fighters HP by 1600 & ATK by 200<hr>', costs:'2340000 Gold & 46 Points'},

    {id: 'DF', title: 'Crit Enhancement I<hr>', desc:'Increases DPS fighters Crit by 10%<hr>', costs:'2340000 Gold & 56 Points'},
    {id: 'DFM', title: 'Crit Enhancement II<hr>', desc:'Increases DPS fighters Crit Damage by 30%<hr>', costs:'2340000 Gold & 66 Points'},
    {id: 'DFU', title: 'Bloodlust<hr>', desc:'Enable DPS fighters to drain HP by 10%<hr>', costs:'2340000 Gold & 80 Points'},

    {id: 'OF', title: 'DMG Enhancement<hr>', desc:'Increase GANK fighters damage by 3%<hr>', costs:'2340000 Gold & 56 Points'},
    {id: 'OFM', title: 'Res Enhancement I<hr>', desc:'Increase GANK fighters Res Rate by 3%<hr>', costs:'2340000 Gold & 66 Points'},
    {id: 'OFU', title: 'Slaughter<hr>', desc:'Increases Damage GANK fighters Ultimate Skills by 20%<hr>', costs:'2340000 Gold & 80 Points'},

    {id: 'TI', title: 'Block Enhancement I<hr>', desc:'Increase TANK fighters Block by 12%<hr>', costs:'2340000 Gold & 56 Points'},
    {id: 'TIM', title: 'Res Enhancement II<hr>', desc:'Increase TANK fighters Res Rate by 3,5%<hr>', costs:'2340000 Gold & 66 Points'},
    {id: 'TIU', title: 'Revenge<hr>', desc:'Enable TANK fighters to reflect damage by 12%<hr>', costs:'2340000 Gold & 80 Points'},

    {id: 'FT', title: 'Master Skill Tree<hr>', desc:'Unlock: Player Lv 70 & 280 points in previous tree', costs:''}
];

let pvp = [
    {id: 'PVP', title: 'PVP Tree<hr>', desc:'Unlock: Player Lv 80 & 520 points in previous tree', costs:''},

    {id: 'I', title: 'Arena Tree', desc:'', costs:''},
    {id: 'II', title: 'Arena I<hr>', desc:'Increases fighters ATK by 200 & HP by 1000<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'III', title: 'Arena II<hr>', desc:'Increases fighters DMG & Res Rate by 2%<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'IV', title: 'Arena III<hr>', desc:'Increases fighters ULT DMG & ULT Resistance by 2%<hr>', costs:'5250000 Gold & 56 Points'},

    {id: 'V', title: 'Tournament Tree', desc:'', costs:''},
    {id: 'VI', title: 'KOF Tournament I<hr>', desc:'Increases fighters ATK by 200 & HP by 1000<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'VII', title: 'KOF Tournament II<hr>', desc:'Increases fighters DMG & Res Rate by 2%<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'VIII', title: 'KOF Tournament III<hr>', desc:'Increases fighters ULT DMG & ULT Resistance by 2%<hr>', costs:'5250000 Gold & 56 Points'},

    {id: 'IX', title: 'Club Battle Tree', desc:'', costs:''},
    {id: 'X', title: 'Club Battle I<hr>', desc:'Increases fighters ATK by 200 & HP by 1000<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XI', title: 'Club Battle II<hr>', desc:'Increases fighters DMG & Res Rate by 2%<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XII', title: 'Club Battle III<hr>', desc:'Increases fighters ULT DMG & ULT Resistance by 2%<hr>', costs:'5250000 Gold & 56 Points'},

    {id: 'XIII', title: 'Honor Battle Tree', desc:'', costs:''},
    {id: 'XIV', title: 'Honor Duel I<hr>', desc:'Increases fighters ATK by 200 & HP by 1000<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XV', title: 'Honor Duel II<hr>', desc:'Increases fighters DMG & Res Rate by 2%<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XVI', title: 'Honor Duel III<hr>', desc:'Increases fighters ULT DMG & ULT Resistance by 2%<hr>', costs:'5250000 Gold & 56 Points'},

    {id: 'XVII', title: 'Cross-Server Tournament Tree', desc:'', costs:''},
    {id: 'XVIII', title: 'Cross-Server Tournament I<hr>', desc:'Increases fighters ATK by 200 & HP by 1000<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XIX', title: 'Cross-Server Tournament II<hr>', desc:'Increases fighters DMG & Res Rate by 2%<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XX', title: 'Cross-Server Tournament III<hr>', desc:'Increases fighters ULT DMG & ULT Resistance by 2%<hr>', costs:'5250000 Gold & 56 Points'},

    {id: 'XXI', title: 'Cross-Server Loot Battle Tree', desc:'', costs:''},
    {id: 'XXII', title: 'Cross-Server Loot Battle I<hr>', desc:'Increases fighters ATK by 200 & HP by 1000<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XXIII', title: 'Cross-Server Loot Battle II<hr>', desc:'Increases fighters DMG & Res Rate by 2%<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XXIV', title: 'Cross-Server Loot Battle III<hr>', desc:'Increases fighters ULT DMG & ULT Resistance by 2%<hr>', costs:'5250000 Gold & 56 Points'},

    {id: 'XXV', title: 'Cross-Server Arena Tree', desc:'', costs:''},
    {id: 'XXVI', title: 'Cross-Server Arena I<hr>', desc:'Increases fighters ATK by 200 & HP by 1000<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XXVII', title: 'Cross-Server Arena II<hr>', desc:'Increases fighters DMG & Res Rate by 2%<hr>', costs:'5250000 Gold & 56 Points'},
    {id: 'XXVIII', title: 'Cross-Server Arena III<hr>', desc:'Increases fighters ULT DMG & ULT Resistance by 2%<hr>', costs:'5250000 Gold & 56 Points'}
];

/* tab fashion */

let fashiondb = [
    {fname:'Kim', skin:'Warrior', fimg:'',stats:'DEF +300 <br><hr> Block +3% <br><hr> ATK +40',cost:'💎777'},
    {fname:'Momoko', skin:'High Schooler', fimg:'',stats:'ATK +360 <br><hr> DMG +3% <br><hr> ATK +40',cost:'💎1277'},
    {fname:'O. Shermie', skin:'Red Robe', fimg:'',stats:'ATK +360 <br><hr> ULT DMG +4% <br><hr> ATK +40',cost:'💎2777'},
    {fname:'Todo', skin:'Taisho Girl', fimg:'',stats:'ATK +360 <br><hr> Res Rate +3% <br><hr> ATK +40',cost:'💎2077'},
    {fname:'Yamazaki', skin:'Gambling Master', fimg:'',stats:'ATK +300 <br><hr> HP Drain +3% <br><hr> ATK +40',cost:'💎1577'},
    {fname:'Mary', skin:'Varsity Jacket', fimg:'',stats:'DEF +300 <br><hr> Res Rate +3% <br><hr> DEF +15',cost:'💎2077'},
    {fname:'Yuri', skin:'Summer Swimsuit', fimg:'',stats:'ATK +300 <br><hr> Crit +3% <br><hr> ATK +40',cost:'💎1777'},
    {fname:'O. Chris', skin:'Fashion Icon', fimg:'',stats:'ATK +360 <br><hr> DMG +3% <br><hr> ATK +40',cost:'💎2777'},
    {fname:'Athena', skin:'Red Dream', fimg:'',stats:'ATK 280 <br><hr> DEF +260 <br><hr> DEF +15',cost:'💎1077'},
    {fname:'Athena', skin:'Witch Heart', fimg:'',stats:'ATK +360 <br><hr> HP +2000 <br><hr> HP +400',cost:'💎2777'},
    {fname:'Angel', skin:'Wrestler', fimg:'',stats:'ATK +360 <br><hr> DMG +3% <br><hr> ATK +40',cost:'💎1777'},
    {fname:'Iori', skin:'Red Prince', fimg:'',stats:'ATK +500 <br><hr> DEF +400 <br><hr> ATK +40',cost:'💎2077'},
    {fname:'Iori', skin:'Dark Musician', fimg:'',stats:'ATK +500 <br><hr> Priority +35 <br><hr> ATK +40',cost:'💎2777'},
    {fname:'Iori', skin:'Blue Whirlwind', fimg:'',stats:'ATK +500 <br><hr> DEF +400 <br><hr> DEF +20',cost:'💎2077'},
    {fname:'Shizuru', skin:'Korean Dress', fimg:'',stats:'ATK +300 <br><hr> HP +2000 <br><hr> HP +400',cost:'💎1777'},
    {fname:'Leona', skin:'Mercenary Spirit', fimg:'',stats:'ATK +360 <br><hr> ULT DMG +4% <br><hr> ATK +40',cost:'💎2077'},
    {fname:'Kyo', skin:'Red Fire', fimg:'',stats:'ATK +300 <br><hr> DEF +240 <br><hr> ATK +40',cost:'💎777'},
    {fname:'Mai', skin:'Blossoms', fimg:'',stats:'ATK +360 <br><hr> DEF +260 <br><hr> DEF +15',cost:'💎2777'},
    {fname:'Mai', skin:'Sexy Bunny', fimg:'',stats:'ATK +300 <br><hr> DEF +260 <br><hr> DEF +15',cost:'💎2077'},
    {fname:'Robert', skin:'Butler', fimg:'',stats:'ATK +360 <br><hr> DMG +3% <br><hr> ATK +40',cost:'💎2077'},
    {fname:'Shermie', skin:'Pretty Nurse', fimg:'',stats:'ATK +500 <br><hr> DMG +3% <br><hr> ATK +40',cost:'💎1077'},
    {fname:'O. Yashiro', skin:'Rock Singer', fimg:'',stats:'DEF +300 <br><hr> Res Rate +3% <br><hr> DEF +15',cost:'💎2777'},
    {fname:'Kensou', skin:'Kung Fu', fimg:'',stats:'ATK +280 <br><hr> Heal +10% <br><hr> ATK +40',cost:'💎777'},
    {fname:'Terry', skin:'Baseball Uniform', fimg:'',stats:'ATK +300 <br><hr> DMG +3% <br><hr> ATK +40',cost:'💎2777'}

];

/*
,
    {fname:'', skin:'', fimg:'',stats:'',cost:''}

*/