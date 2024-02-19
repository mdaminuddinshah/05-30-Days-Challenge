
// innerHTML
const btns = document.getElementById('btns');

const inner = () => {
    document.getElementById('inner').textContent = 'Second';
}

btns.addEventListener('click', inner);

// getAttribute() method
// img
const squidwardimg = document.getElementById('squidward');
const mr_krab_image = document.getElementById('mr_krab');
const patrick_image = document.getElementById('patrick');
const spongebob_img = document.getElementById('spongebob');

console.log(squidwardimg.getAttribute('src'));

// buttons
const classs = document.getElementById('classs');
const srcs =  document.getElementById('srcs');
const alts = document.getElementById('alts');
const ids = document.getElementById('ids');

// attribute squidward
const getTheValueClass = squidwardimg.getAttribute('class');
const getTheValueSrc = squidwardimg.getAttribute('src');
const getTheValueAlt = squidwardimg.getAttribute('alt');
const getTheValueId = squidwardimg.getAttribute('id');

// attribute mr krab
const getMrKrabClass = mr_krab_image.getAttribute('class');
const getMrKrabSrc = mr_krab_image.getAttribute('src');
const getMrKrabAlt = mr_krab_image.getAttribute('alt');
const getMrKrabId = mr_krab_image.getAttribute('id');

// attribute patrick
const getpatrickClass = patrick_image.getAttribute('class');
const getpatrickSrc = patrick_image.getAttribute('src');
const getpatrickAlt = patrick_image.getAttribute('alt');
const getpatrickId = patrick_image.getAttribute('id');

// attribute spongebob
const getspongebobClass = spongebob_img.getAttribute('class');
const getspongebobSrc = spongebob_img.getAttribute('src');
const getspongebobAlt = spongebob_img.getAttribute('alt');
const getspongebobId = spongebob_img.getAttribute('id');

// p tag
const resultImg = document.querySelector('#result');

const getClassImg = () => {
    const currentSrc = squidwardimg.getAttribute('src');
    
    if(currentSrc === './images/And when you do decide to study_.jpg'){
        resultImg.textContent = getTheValueClass;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/Mr_ Krabs money.jpg'){
        resultImg.textContent = getMrKrabClass;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/When your friend swim without you.jpg'){
        resultImg.textContent = getspongebobClass;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/When the gas prices up.jpg'){
        resultImg.textContent = getpatrickClass;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    }
}

const getSrcImg = () => {
    currentSrc = squidwardimg.getAttribute('src');

    if(currentSrc === './images/And when you do decide to study_.jpg'){
        resultImg.textContent = getTheValueSrc;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/Mr_ Krabs money.jpg'){
        resultImg.textContent = getMrKrabSrc;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/When the gas prices up.jpg'){
        resultImg.textContent = getpatrickSrc;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/When your friend swim without you.jpg'){
        resultImg.textContent = getspongebobSrc;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    }
}


const getAltImg = () => {
    currentSrc = squidwardimg.getAttribute('src');

    if(currentSrc === './images/And when you do decide to study_.jpg'){
        resultImg.textContent = getTheValueAlt;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/Mr_ Krabs money.jpg'){
        resultImg.textContent = getMrKrabAlt;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/When the gas prices up.jpg'){
        resultImg.textContent = getpatrickAlt;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/When your friend swim without you.jpg'){
        resultImg.textContent = getspongebobAlt;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    }
}


const getIdImg = () => {
    currentSrc = squidwardimg.getAttribute('src');

    if(currentSrc === './images/And when you do decide to study_.jpg'){
        resultImg.textContent = getTheValueId;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/Mr_ Krabs money.jpg'){
        resultImg.textContent = getMrKrabId;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/When the gas prices up.jpg'){
        resultImg.textContent = getpatrickId;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    } else if(currentSrc === './images/When your friend swim without you.jpg'){
        resultImg.textContent = getspongebobId;
        resultImg.style.display = 'block';
        resultImg.style.backgroundColor = 'black';
    };
}

// setAttribute() method
    const patrickImg = './images/When the gas prices up.jpg';
    const spongebobImg = './images/When your friend swim without you.jpg';
    const mrKrab = "./images/Mr_ Krabs money.jpg";

    const mr_krab_click = () => {
        squidwardimg.setAttribute('src', mrKrab);
    }
    const patrickClick = () => {
        squidwardimg.setAttribute('src', patrickImg);
    }
    const spongebobClick = () => {
        squidwardimg.setAttribute('src', spongebobImg);
    }


// array
const fruits = ['apple', 'orange', 'banana', 'pear'];
console.log(fruits);

// length of array element
const fruitsLength = fruits.length;
console.log(fruitsLength);

// pop method = pop() method delete last element
fruits.pop();
console.log(fruits)
console.log(fruitsLength);

// push method = push('value') method is add to last element to array
fruits.push('watermelon');

// array index
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

const array2 = [1,2,3,4,5];
console.log(array2.length);
console.log(array2);
console.log(array2[4]);
array2.pop();
console.log(array2[5]);
console.log(array2);
console.log(array2.length);

// shift() method = delete first element of array
const arrayShift = [1,2,3,4,5];
const deleteShift = arrayShift.shift();
console.log(arrayShift);
console.log(arrayShift.length);
console.log(deleteShift);

// unshifft() method = add new element to first index of array
const array3 = [2,3,4,5];
const addUnshift = array3.unshift(0,1);
console.log(array3);
console.log(addUnshift);

// concat() method
const concat1 = [1,2,3,4,5];
const concat2 = [6,7,8,9,10];
const concat3 = concat1.concat(concat2, 11,12);
console.log(concat3);

// slice() method = syntax slice(firstIndex, secondIndex)
// firsIndex = included not deleted
// secondIndex = excluded, deleted
// slice method not modify original array
const slice1 = [1,2,3,4,5,6,7,8,9,10];
const slice3 = slice1.slice(2,4);
console.log(slice3);

// index of 2 is 3 and included not delete
// index of 4 is 5 and is excluded which is deleted
const slice2 = slice1.slice(2, 4);
console.log(slice2);
console.log(slice1);

// splice() method
const splice1 = [1,2,3,4,5,6,7];
splice1.splice(1,3,23,23,12);
console.log(splice1);

// indexOf() method