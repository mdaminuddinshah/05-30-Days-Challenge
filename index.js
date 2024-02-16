
// innerHTML
const btns = document.getElementById('btns');

const inner = () => {
    document.getElementById('inner').textContent = 'Second';
}

btns.addEventListener('click', inner);

// getAttribute() method
// img
const squidwardimg = document.querySelector('#squidward');

// buttons
const classs = document.getElementById('#classs');
const srcs =  document.getElementById('#srcs');
const alts = document.getElementById('#alts');
const ids = document.getElementById('#ids');

// attribute
const getTheValueClass = squidwardimg.getAttribute('class');
const getTheValueSrc = squidwardimg.getAttribute('src');
const getTheValueAlt = squidwardimg.getAttribute('alt');
const getTheValueId = squidwardimg.getAttribute('id');

// p tag
const resultImg = document.querySelector('#result');

const getClassImg = () => {
    resultImg.textContent = getTheValueClass;
    resultImg.style.display = 'block';
    resultImg.style.backgroundColor = 'black';
}

const getSrcImg = () => {
    resultImg.textContent = getTheValueSrc;
    resultImg.style.display = 'block';
    resultImg.style.backgroundColor = 'black';
}


const getAltImg = () => {
    resultImg.textContent = getTheValueAlt;
    resultImg.style.display = 'block';
    resultImg.style.backgroundColor = 'black';
}


const getIdImg = () => {
    resultImg.textContent = getTheValueId;
    resultImg.style.display = 'block';
    resultImg.style.backgroundColor = 'black';
}



