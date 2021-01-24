const c = (e) => document.querySelector(e);
const cs = (e) => document.querySelectorAll(e);

/* team menus*/

menuSelect("tdias")
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

var fmenuSection = document.getElementById('tmarea');
var menufilts = fmenuSection.getElementsByClassName('tmenu');

for (var i = 0; i < menufilts.length; i++) {
    menufilts[i].addEventListener("click", function (e) {
        e.preventDefault();
        var x = document.getElementsByClassName("active");
        x[0].className = x[0].className.replace(" active", "");
        this.className += " active";
    });
}


/* talent tree content*/

form.map((i, index)=>{
    let tfItem = c('.tcomparea').cloneNode(true);

    tfItem.setAttribute('id', i.id);
    tfItem.querySelector('.ttitle').innerHTML = i.title;
    tfItem.querySelector('.tdesc').innerHTML = i.desc;
    tfItem.querySelector('.tcosts').innerHTML = i.costs;


    c('.tform').append (tfItem);
});

firt.map((i, index)=>{
    let tfItem = c('.tcomparea').cloneNode(true);

    tfItem.setAttribute('id', i.id);
    tfItem.querySelector('.ttitle').innerHTML = i.title;
    tfItem.querySelector('.tdesc').innerHTML = i.desc;
    tfItem.querySelector('.tcosts').innerHTML = i.costs;


    c('.tfirt').append (tfItem);
});

mkil.map((i, index)=>{
    let tfItem = c('.tcomparea').cloneNode(true);

    tfItem.setAttribute('id', i.id);
    tfItem.querySelector('.ttitle').innerHTML = i.title;
    tfItem.querySelector('.tdesc').innerHTML = i.desc;
    tfItem.querySelector('.tcosts').innerHTML = i.costs;


    c('.tmkil').append (tfItem);
});

pvp.map((i, index)=>{
    let tfItem = c('.tcomparea').cloneNode(true);

    tfItem.setAttribute('id', i.id);
    tfItem.querySelector('.ttitle').innerHTML = i.title;
    tfItem.querySelector('.tdesc').innerHTML = i.desc;
    tfItem.querySelector('.tcosts').innerHTML = i.costs;


    c('.tpvp').append (tfItem);
});


/* fashion */

fashiondb.map ((item, index)=>{
    let fcardm = c('.fcard').cloneNode(true);

    fcardm.querySelector('.fname').innerHTML = item.skin;
    fcardm.querySelector('.fcard img').src = item.fimg;
    fcardm.querySelector('.fstats').innerHTML = item.stats;
    fcardm.querySelector('.fcost').innerHTML = item.cost;


    c('.fashioncontarea').append(fcardm);
});