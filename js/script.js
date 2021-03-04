let selectedButton = undefined,
    current = undefined;

let settingIMG = {
    shadow: 0,
    mirror: false,
    flip: 0,
    sepia: 0,
    BW: 0,
    blur: 0
};

function selectFilter(filter, elem) {
   current = filter;
   if (selectedButton !== undefined) {
       selectedButton.classList.remove('select');
   }
   elem.classList.add('select');
    selectedButton = elem;
   if(typeof settingIMG[filter] === "number") {
       document.getElementsByClassName('range')[0].classList.remove('hidden');
       document.getElementsByClassName('inputRange')[0].value = settingIMG[filter];
   } else {
       if(!document.getElementsByClassName('range')[0].classList.contains('hidden')) {
           document.getElementsByClassName('range')[0].classList.add('hidden');
       }
       settingIMG.mirror = !settingIMG.mirror;
       document.getElementsByClassName('currentMirror')[0].innerText = `Mirror: ${settingIMG.mirror}`
       updateFilters();
   }
}

function setRange(elem) {
    let currentElem = 'current' + upFirst(current);
    settingIMG[current] = Number(elem.value);
    document.getElementsByClassName(currentElem)[0].innerText = `${upFirst(current)}: ${settingIMG[current]}`
    updateFilters();
}

function updateFilters() {
    let filters = String();
    filters += `blur(${settingIMG.blur}px) `
    filters += `sepia(${settingIMG.sepia}) `
    filters += `grayscale(${settingIMG.BW}) `
    document.getElementById('logoNULP').style.filter = filters;
    document.getElementById('logoNULP').style.boxShadow = "0px 41px 64px "+(settingIMG.shadow-100)+"px #000000"
    document.getElementById('logoNULP').style.transform = `rotate(${settingIMG.flip}deg) scale(${settingIMG.mirror === false ? 1:-1}, 1)`
}

function upFirst (text) {
    return text[0].toUpperCase() + text.slice(1);
}
