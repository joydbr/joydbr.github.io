const c = (e) => document.querySelector(e);

/* js para submenus de fighters*/

menuSelect("fightersarea")
function menuSelect(e) {
    var x, i;
    x = document.getElementsByClassName("tmenus");
    if (e == "all") e = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(e) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var fmenuSection = document.getElementById('fmarea');
var menufilts = fmenuSection.getElementsByClassName('fmenu');

for (var i = 0; i < menufilts.length; i++) {
    menufilts[i].addEventListener("click", function (e) {
        e.preventDefault();
        var x = document.getElementsByClassName("active");
        x[0].className = x[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* js para os filtros de fighters */


filtSelect("all")
function filtSelect(e) {
    var x, i;
    x = document.getElementsByClassName("fModels");
    if (e == "all") e = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(e) > -1) addClass(x[i], "show");
    }
}

var filtSection = document.getElementById('fFilters');
var filts = filtSection.getElementsByClassName('filt');

for (var i = 0; i < filts.length; i++) {
    filts[i].addEventListener("click", function () {
        var x = document.getElementsByClassName("active");
        x[0].className = x[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* js to fill fighters content */

fdb.map((item, index)=>{
    let fItem = c('.fModels').cloneNode(true);

    fItem.querySelector('.fAvatar img').src = item.avatar;
    fItem.querySelector('.fName').innerHTML = item.name;
    fItem.querySelector('.fAp').innerHTML = `AP ${item.ap}`;
    fItem.querySelector('.fType img').src = item.type[1];
    fItem.querySelector('.fSoul img').src = item.soul[1];
    fItem.querySelector('.fPar1 img').src = item.fpart[0];
    fItem.querySelector('.fPar2 img').src = item.fpart[1];
    fItem.querySelector('.fPar3 img').src = item.fpart[2];
    fItem.classList.add(item.ap);
    fItem.classList.add(item.type[0]);
    fItem.classList.add(item.soul[0]);
    fItem.classList.add(item.gender);
    if(item.captain == 'true') {
        fItem.classList.add('captain');
    }
    if(item.iskill == 'true') {
        fItem.classList.add('iskill');
    }
    if(item.prota == 'true') {
        fItem.classList.add('prota');
    }
    if(item.orochi == 'true') {
        fItem.classList.add('orochi');
    }
    if(item.flame == 'true') {
        fItem.classList.add('flame');
    }
    if(item.heal == 'true') {
        fItem.classList.add('heal');
    }
    if(item.ikari == 'true') {
        fItem.classList.add('ikari');
    }
    if(item.ryu == 'true') {
        fItem.classList.add('ryu');
    }
    if(item.aid == 'true') {
        fItem.classList.add('aid');
    }



    c('.fcontentArea').append (fItem);
});

/* promote filters */

promaps('promap15')
function promaps(e) {
    var x, i;
    x = document.getElementsByClassName("prommenu");
    if (e == "all") e = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(e) > -1) addClass(x[i], "show");
    }
}

var mpromfilt = document.getElementById('menuprom');
var mpromfilts = mpromfilt.getElementsByClassName('promfilt');

for (var i = 0; i < mpromfilts.length; i++) {
    mpromfilts[i].addEventListener("click", function (e) {
        e.preventDefault();
        var x = document.getElementsByClassName("active");
        x[0].className = x[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* js promote */

promdb.map((item, index)=>{
    let promod = c('.tablinemodel').cloneNode(true);

    promod.querySelector('.promlv span').innerHTML = item.lv;
    promod.querySelector('.epdesc span:first-child').innerHTML = item.ap15[2];
    promod.querySelector('.im1 span:first-child').innerHTML = item.ap15[0];
    promod.querySelector('.im1 span:last-child').innerHTML = item.iname;
    promod.querySelector('.im2 span:first-child').innerHTML = item.ap15[1];
    promod.querySelector('.im2 span:last-child').innerHTML = item.iname;
    promod.querySelector('.im3 span:first-child').innerHTML = item.ap15[1];
    promod.querySelector('.im3 span:last-child').innerHTML = item.iname;
    promod.querySelector('.promgold span:first-child').innerHTML = item.ap15[3];
    promod.querySelector('.promi1 img').src = item.imgi[0];
    promod.querySelector('.promi2 img').src = item.imgi[1];
    promod.querySelector('.promi3 img').src = item.imgi[2];
    promod.classList.add(item.rcolor);

    c('.promap15 tbody').append(promod);
});

promdb.map((item, index)=>{
    let promod = c('.tablinemodel').cloneNode(true);

    promod.querySelector('.promlv span').innerHTML = item.lv;
    promod.querySelector('.epdesc span:first-child').innerHTML = item.ap14[2];
    promod.querySelector('.im1 span:first-child').innerHTML = item.ap14[0];
    promod.querySelector('.im1 span:last-child').innerHTML = item.iname;
    promod.querySelector('.im2 span:first-child').innerHTML = item.ap14[1];
    promod.querySelector('.im2 span:last-child').innerHTML = item.iname;
    promod.querySelector('.im3 span:first-child').innerHTML = item.ap14[1];
    promod.querySelector('.im3 span:last-child').innerHTML = item.iname;
    promod.querySelector('.promgold span:first-child').innerHTML = item.ap14[3];
    promod.querySelector('.promi1 img').src = item.imgi[0];
    promod.querySelector('.promi2 img').src = item.imgi[1];
    promod.querySelector('.promi3 img').src = item.imgi[2];
    promod.classList.add(item.rcolor);

    c('.promap14 tbody').append(promod);
});

promdb.map((item, index)=>{
    let promod = c('.tablinemodel').cloneNode(true);

    promod.querySelector('.promlv span').innerHTML = item.lv;
    promod.querySelector('.epdesc span:first-child').innerHTML = item.ap13[2];
    promod.querySelector('.im1 span:first-child').innerHTML = item.ap13[0];
    promod.querySelector('.im1 span:last-child').innerHTML = item.iname;
    promod.querySelector('.im2 span:first-child').innerHTML = item.ap13[1];
    promod.querySelector('.im2 span:last-child').innerHTML = item.iname;
    promod.querySelector('.im3 span:first-child').innerHTML = item.ap13[1];
    promod.querySelector('.im3 span:last-child').innerHTML = item.iname;
    promod.querySelector('.promgold span:first-child').innerHTML = item.ap13[3];
    promod.querySelector('.promi1 img').src = item.imgi[0];
    promod.querySelector('.promi2 img').src = item.imgi[1];
    promod.querySelector('.promi3 img').src = item.imgi[2];
    promod.classList.add(item.rcolor);

    c('.promap13 tbody').append(promod);
});


/* js to fill up exp */

updb.map ((item, index)=>{
    let upxp = c('.upxpinfo').cloneNode(true);

    upxp.querySelector('.xplv').innerHTML = item.lv;
    upxp.querySelector('.xpnum').innerHTML = item.xp[0];
    

    c('.xptab15 tbody').append(upxp);
});

updb.map ((item, index)=>{
    let upxp = c('.upxpinfo').cloneNode(true);

    upxp.querySelector('.xplv').innerHTML = item.lv;
    upxp.querySelector('.xpnum').innerHTML = item.xp[1];
    

    c('.xptab14 tbody').append(upxp);
});

updb.map ((item, index)=>{
    let upxp = c('.upxpinfo').cloneNode(true);

    upxp.querySelector('.xplv').innerHTML = item.lv;
    upxp.querySelector('.xpnum').innerHTML = item.xp[2];
    

    c('.xptab13 tbody').append(upxp);
});

updb.map ((item, index)=>{
    let upxp = c('.upxpinfo').cloneNode(true);

    upxp.querySelector('.xplv').innerHTML = item.lv;
    upxp.querySelector('.xpnum').innerHTML = item.xp[3];
    

    c('.xptab12 tbody').append(upxp);
});


/* js equip filters menu */

equipmenufilt("enhanceArea")
function equipmenufilt(e) {
    var x, i;
    x = document.getElementsByClassName("equipmenus");
    if (e == "all") e = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(e) > -1) addClass(x[i], "show");
    }
}

var equipfilt = document.getElementById('equipmenufilt');
var eqfilts = equipfilt.getElementsByClassName('equipmenu');

for (var i = 0; i < eqfilts.length; i++) {
    eqfilts[i].addEventListener("click", function (e) {
        e.preventDefault();
        var x = document.getElementsByClassName("active");
        x[0].className = x[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* js equip filters enhanc*/

eemenuap('eqq15')
function eemenuap(e) {
    var x, i;
    x = document.getElementsByClassName("enhanceaps");
    if (e == "all") e = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(e) > -1) addClass(x[i], "show");
    }
}

var eefilt = document.getElementById('eemenufilter');
var eefilts = eefilt.getElementsByClassName('enhancefi');

for (var i = 0; i < eefilts.length; i++) {
    eefilts[i].addEventListener("click", function (e) {
        e.preventDefault();
        var x = document.getElementsByClassName("active");
        x[0].className = x[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* js to fill equip */

equipedb.map((item, index)=>{
    let ees15 = c('.enhantabinfo').cloneNode(true);

    ees15.querySelector('.enhantablv').innerHTML = item.lv;
    ees15.querySelector('.enhantabwea').innerHTML = item.xp15[0];
    ees15.querySelector('.enhantabcoa').innerHTML = item.xp15[1];
    ees15.querySelector('.enhantabpan').innerHTML = item.xp15[2];
    ees15.querySelector('.enhantabxp').innerHTML = item.xp15[3];

    c('.eqq15 tbody').append(ees15);
});

equipedb.map((item, index)=>{
    let ees14 = c('.enhantabinfo').cloneNode(true);

    ees14.querySelector('.enhantablv').innerHTML = item.lv;
    ees14.querySelector('.enhantabwea').innerHTML = item.xp14[0];
    ees14.querySelector('.enhantabcoa').innerHTML = item.xp14[1];
    ees14.querySelector('.enhantabpan').innerHTML = item.xp14[2];
    ees14.querySelector('.enhantabxp').innerHTML = item.xp14[3];

    c('.eqq14 tbody').append(ees14);
});

equipedb.map((item, index)=>{
    let ees13 = c('.enhantabinfo').cloneNode(true);

    ees13.querySelector('.enhantablv').innerHTML = item.lv;
    ees13.querySelector('.enhantabwea').innerHTML = item.xp13[0];
    ees13.querySelector('.enhantabcoa').innerHTML = item.xp13[1];
    ees13.querySelector('.enhantabpan').innerHTML = item.xp13[2];
    ees13.querySelector('.enhantabxp').innerHTML = item.xp13[3];

    c('.eqq13 tbody').append(ees13);
});

blessdb.map((item, index)=>{
    let blessup = c('.blessline').cloneNode(true);

    blessup.querySelector('.blv').innerHTML = item.lv;
    blessup.querySelector('.bwc').innerHTML = item.bcrystals;

    c('.blesstab tbody').append(blessup);
});

/* to fill dark force */

for(let i = 1; i < 100; i++) {
    var dfaelv = c('.statsmodel').cloneNode(true);
    
    
    var totallv = i;
    let atkto = i * 15;
    let dfto = i * 8;
    let hpto = i * 50;
    let cbporc = i * 0.2;
    let paporc = i * 0.1;
    let drporc = i * 0.08;
    
    dfaelv.querySelector('.dfalv').innerHTML = totallv;
    dfaelv.querySelector('.dpsta1').innerHTML = atkto;
    dfaelv.querySelector('.dpsta2').innerHTML = `${cbporc.toFixed(1)} %`;
    dfaelv.querySelector('.dpsta3').innerHTML = `${paporc.toFixed(1)} %`;
    dfaelv.querySelector('.gdsta1').innerHTML = dfto;
    dfaelv.querySelector('.gdsta2').innerHTML = `${drporc.toFixed(2)} %`;
    dfaelv.querySelector('.gdsta3').innerHTML = `${drporc.toFixed(2)} %`;
    dfaelv.querySelector('.tdsta1').innerHTML = hpto;
    dfaelv.querySelector('.tdsta2').innerHTML = `${cbporc.toFixed(1)} %`;
    dfaelv.querySelector('.tdsta3').innerHTML = `${paporc.toFixed(1)} %`;

    if (totallv < 11) {
        dfaelv.querySelector('.dpfs').innerHTML = 5;
        dfaelv.querySelector('.gdfs').innerHTML = 5;
        dfaelv.querySelector('.tdfs').innerHTML = 5;
    } else if (totallv < 31) {
        dfaelv.querySelector('.dpfs').innerHTML = 10;
        dfaelv.querySelector('.gdfs').innerHTML = 10;
        dfaelv.querySelector('.tdfs').innerHTML = 10;
    } else if (totallv < 41) {
        dfaelv.querySelector('.dpfs').innerHTML = 15;
        dfaelv.querySelector('.gdfs').innerHTML = 15;
        dfaelv.querySelector('.tdfs').innerHTML = 15;
    } else if (totallv < 51) {
        dfaelv.querySelector('.dpfs').innerHTML = 20;
        dfaelv.querySelector('.gdfs').innerHTML = 20;
        dfaelv.querySelector('.tdfs').innerHTML = 20;
    } else if (totallv < 61) {
        dfaelv.querySelector('.dpfs').innerHTML = 30;
        dfaelv.querySelector('.gdfs').innerHTML = 30;
        dfaelv.querySelector('.tdfs').innerHTML = 30;
    } else if (totallv < 71) {
        dfaelv.querySelector('.dpfs').innerHTML = 40;
        dfaelv.querySelector('.gdfs').innerHTML = 40;
        dfaelv.querySelector('.tdfs').innerHTML = 40;
    } else if (totallv < 81) {
        dfaelv.querySelector('.dpfs').innerHTML = 60;
        dfaelv.querySelector('.gdfs').innerHTML = 60;
        dfaelv.querySelector('.tdfs').innerHTML = 60;
    } else if (totallv < 86) {
        dfaelv.querySelector('.dpfs').innerHTML = 80;
        dfaelv.querySelector('.gdfs').innerHTML = 80;
        dfaelv.querySelector('.tdfs').innerHTML = 80;
    } else if (totallv < 91) {
        dfaelv.querySelector('.dpfs').innerHTML = 100;
        dfaelv.querySelector('.gdfs').innerHTML = 100;
        dfaelv.querySelector('.tdfs').innerHTML = 100;
    } else if (totallv < 96) {
        dfaelv.querySelector('.dpfs').innerHTML = 200;
        dfaelv.querySelector('.gdfs').innerHTML = 200;
        dfaelv.querySelector('.tdfs').innerHTML = 200;
    } else if (totallv < 99) {
        dfaelv.querySelector('.dpfs').innerHTML = 300;
        dfaelv.querySelector('.gdfs').innerHTML = 300;
        dfaelv.querySelector('.tdfs').innerHTML = 300;
    }

    c('.dfah tbody').append(dfaelv);
};



/* filter for skill */

skmenuap('skillsap1514')
function skmenuap(e) {
    var x, i;
    x = document.getElementsByClassName("skmenu");
    if (e == "all") e = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(e) > -1) addClass(x[i], "show");
    }
}

var sfilt = document.getElementById('skmenus');
var ssfilts = sfilt.getElementsByClassName('skfilter');

for (var i = 0; i < ssfilts.length; i++) {
    ssfilts[i].addEventListener("click", function (e) {
        e.preventDefault();
        var x = document.getElementsByClassName("active");
        x[0].className = x[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* js to fill skills */

fskilldb.map ((item, index)=>{
    let fskill = c('.skilltabinfo').cloneNode(true);

    fskill.querySelector('.skilltablv').innerHTML = item.lv;
    fskill.querySelector('.skilltabpass').innerHTML = item.xp15[0];
    fskill.querySelector('.skilltabult').innerHTML = item.xp15[1];
    fskill.querySelector('.skilltabsk').innerHTML = item.xp15[2];
    fskill.querySelector('.skilltabdmg').innerHTML = item.xp15[3];


    c('.skilltabcont15').append(fskill);
});

fskilldb.map ((item, index)=>{
    let fskill = c('.skilltabinfo').cloneNode(true);

    fskill.querySelector('.skilltablv').innerHTML = item.lv;
    fskill.querySelector('.skilltabpass').innerHTML = item.xp14[0];
    fskill.querySelector('.skilltabult').innerHTML = item.xp14[1];
    fskill.querySelector('.skilltabsk').innerHTML = item.xp14[2];
    fskill.querySelector('.skilltabdmg').innerHTML = item.xp14[3];


    c('.skilltabcont14').append(fskill);
});

fskilldb.map ((item, index)=>{
    let fskill = c('.skilltabinfo').cloneNode(true);

    fskill.querySelector('.skilltablv').innerHTML = item.lv;
    fskill.querySelector('.skilltabpass').innerHTML = item.xp13[0];
    fskill.querySelector('.skilltabult').innerHTML = item.xp13[1];
    fskill.querySelector('.skilltabsk').innerHTML = item.xp13[2];
    fskill.querySelector('.skilltabdmg').innerHTML = item.xp13[3];


    c('.skilltabcont13').append(fskill);
});

fskilldb.map ((item, index)=>{
    let fskill = c('.skilltabinfo').cloneNode(true);

    fskill.querySelector('.skilltablv').innerHTML = item.lv;
    fskill.querySelector('.skilltabpass').innerHTML = item.xp12[0];
    fskill.querySelector('.skilltabult').innerHTML = item.xp12[1];
    fskill.querySelector('.skilltabsk').innerHTML = item.xp12[2];
    fskill.querySelector('.skilltabdmg').innerHTML = item.xp12[3];


    c('.skilltabcont12').append(fskill);
});




/* js to fill fs */

figsoul.map ((item, index)=>{
    let ffsoul = c('.fstrmodel').cloneNode(true);

    ffsoul.querySelector('.fslv').innerHTML = item.lv;
    ffsoul.querySelector('.fseap15').innerHTML = item.xp[0];
    ffsoul.querySelector('.fseap14').innerHTML = item.xp[1];
    ffsoul.querySelector('.fseap13').innerHTML = item.xp[2];
    ffsoul.querySelector('.fseap12').innerHTML = item.xp[3];

    c('.fsoularea table tbody').append(ffsoul);
});


pohesoul.map ((item, index)=>{
    let fpsoul = c('.fstrmodel').cloneNode(true);

    fpsoul.querySelector('.fslv').innerHTML = item.lv;
    fpsoul.querySelector('.fseap15').innerHTML = item.xp[0];
    fpsoul.querySelector('.fseap14').innerHTML = item.xp[1];
    fpsoul.querySelector('.fseap13').innerHTML = item.xp[2];
    fpsoul.querySelector('.fseap12').innerHTML = item.xp[3];

    c('.fpharea table tbody').append(fpsoul);
});

falrocksoul.map ((item, index)=>{
    let ffasoul = c('.fstrmodel').cloneNode(true);

    ffasoul.querySelector('.fslv').innerHTML = item.lv;
    ffasoul.querySelector('.fseap15').innerHTML = item.xp[0];
    ffasoul.querySelector('.fseap14').innerHTML = item.xp[1];
    ffasoul.querySelector('.fseap13').innerHTML = item.xp[2];
    ffasoul.querySelector('.fseap12').innerHTML = item.xp[3];

    c('.fsfarea table tbody').append(ffasoul);
});

falrocksoul.map ((item, index)=>{
    let frsoul = c('.fstrmodel').cloneNode(true);

    frsoul.querySelector('.fslv').innerHTML = item.lv;
    frsoul.querySelector('.fseap15').innerHTML = item.xp[0];
    frsoul.querySelector('.fseap14').innerHTML = item.xp[1];
    frsoul.querySelector('.fseap13').innerHTML = item.xp[2];
    frsoul.querySelector('.fseap12').innerHTML = item.xp[3];

    c('.fsrsarea table tbody').append(frsoul);
});

/* eight elements gates */

gatesMenu('gatesap15')
function gatesMenu(e) {
    var x, i;
    x = document.getElementsByClassName("gatesmenus");
    if (e == "all") e = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(e) > -1) addClass(x[i], "show");
    }
}

var gfilt = document.getElementById('gatesmenua');
var egfilts = gfilt.getElementsByClassName('gatesapm');

for (var i = 0; i < egfilts.length; i++) {
    egfilts[i].addEventListener("click", function (e) {
        e.preventDefault();
        var x = document.getElementsByClassName("active");
        x[0].className = x[0].className.replace(" active", "");
        this.className += " active";
    });
}


eegdbap15.map((item, index)=>{
    let eegtdes = c('.gatesap15 .gatesaps').cloneNode(true);

    eegtdes.querySelector('.gatesname15').innerHTML = item.gate;
    eegtdes.querySelector('.gat15req1').innerHTML = item.req[0];
    eegtdes.querySelector('.gat15req2').innerHTML = item.req[1];
    eegtdes.querySelector('.gat15req3').innerHTML = item.req[2];
    if (rssreq != 'undefined') {
        eegtdes.querySelector('.mtotalap15').innerHTML = `${item.rssreq[0]} ${item.rssreq[1]} ${item.rssreq[3]} ${item.rssreq[4]} ${item.rssreq[5]} ${item.rssreq[6]}`
    }
    
    eegtdes.querySelector('.totalgold').innerHTML = item.rssreq[2];

    c('.gatesap15').append(eegtdes);
});