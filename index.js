
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

// ARRAY
// ARRAY
// ARRAY
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

// slice() method = syntax slice(firstIndexIncluded, secondIndexExcluded)
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
// syntax = splice(startIndex, deletedCount)
const splice1 = [1,2,3,4,5,6,7];
splice1.splice(1,3,23,23,12);
console.log(splice1);

// indexOf() method
// syntax = indexOf(searchElement, startIndexForSearch)
const indexof = [12,34,12,55,34,75];
const indexof1  = indexof.indexOf(34, 3);
const indexof2 = indexof.indexOf(12, 3);
console.log(indexof1);
console.log(indexof2);

// filter() method
// filter syntax = filter(callback(element, index, array))
const filter1 = [1,2,3,4,5,6,7,8,9,10];
const filter2 = filter1.filter((elem, indx, array) => elem == array[2] );
const filter3 = filter1.filter((elem, indx, array) => elem );
const filter4 = filter1.filter((elem, indx, array) => indx % 2 == 0);

console.log(filter2);
console.log(filter3);
console.log(filter4);

// map method = create new array
// syntax = map(callback(currentValue, index, array))
const map1 = [1,2,3,4,5,6,7,8,9];
const mp2 = map1.map((num,index) => num * 1);
map1.map((num, index) => {console.log(num)});
const map3 = map1.map((num) => num);
console.log(map3);
console.log(mp2);

// forEach() method
// syntax = arr.forEach(callback(currentValue, index, array))
// not modify nor create array
const each1 = [1,2,3,4,5,6,7,8,9];
each1.forEach((elem, index) => {console.log(`${index}: ${elem}`)});

// OBJECT
// OBJECT
// OBJECT

// object literal
const object1 = {name: 'orange', color: 'orange', age: '2 months'};
console.log(object1);

// object literal : empty object
const object2 = {};
object2.name = "apple";
object2.color = 'red';
object2.age = '3 months';
console.log(object2);

// new Object()
// rarely use this new Object, for simplicity just use object literals
const object3 = new Object();
object3.name = 'pear';
object3.age = '4 months';
object3.color = 'green';
console.log(object3);

// object is mutable
const object5 = {
    name: 'amin',
    age: 22,
    food: 'mango'
};

console.log(
    object5.name + ' very like ' + object5.food
)

// change object5
const x = object5;
x.name = 'hanim';
x.food = 'pineapple';

console.log(object5.name + ' very love ' + object5.food);

// accessing object properties
const object6 = {
    name: 'watermelon',
    age: '3 months',
    color: 'yellow and green'
};

// access object6 
console.log(object6.name);
console.log(object6['name']);

// for .. in loop
const object7 = {
    name: 'apple',
    age: 22,
    color: 'green',
    gred: [
        {
            A : 1,
        },
        {
            A : 2,
        },
        {
            A : 3,
        }
    ],
    origin: 'western'
};

for(let v in object7){
    console.log(object7[v] + " ")
};

for(let cc in object7.gred){
    console.log(object7.gred[cc].A);
};

// DELETE IN OBJECT
const object8 = {
    name: 'apple',
    gred: 'AB',
    color: 'greenlight',
    origin: 'eastern'
};
const a = object8;
console.log(a)
console.log(a.name + ' is gred ' + a.gred + ' from ' + a.origin );

// delete
delete a.origin;
console.log(a.name + ' is gred ' + a.gred + ' from ' + a.origin );
console.log(a);

// NESTED OBJECT
const nestedObject1 = {
    name: 'apple',
    gred: 'AA',
    color: 'red',
    origin: {
        western: 'britain',
        eastern: 'egypt',
        southEast: 'malaysia'
    }
};

const aa = nestedObject1;
console.log(aa['origin']['southEast']);
console.log(aa.origin.eastern);

// NESTED OBJECT AND ARRAY
const objectArray1 = {
    name: 'Amin',
    age: 22,
    cars: [
        {name: 'perodua', models: ['myvi', 'axia', 'alza']},
        {name: 'mazda', models: ['mazda1', 'mazda3', 'mazda6']},
        {name: 'mercedes', models: ['merc1', 'merc2', 'merc3']},
    ]
}

const car = objectArray1;

for(let i in car.cars){
    console.log(car.cars[i].name),
    console.log(car.cars[i]['models']),
    console.log(car.cars[i]['models'][0]),
    console.log(car.cars[1]),
    console.log(car.cars[i])
}

// this keyword = use for object 
// we use indices for array and this for object

// use this in method, constructor function, event handlers

// OBJECT METHOD

// access objcet method using invoke from outside
const objectMethod1= {
    name: 'apple',
    color: 'green',
    gred: 'B',
    origin: [
        {place: 'north-east'},
        {place: 'western'},
        {place: 'eastern'}
    ],
    title: function(){
        console.log(`this ${this.name} is gred ${this.gred} and from ${this.origin[1].place}`)
    }
}

objectMethod1.title();

// access object method using return
const objectMethod2 = {
    name: [
        'apple', 'pear', 'mango', 'lemon'
    ],
    color: 'green',
    gred: [
        'B', 'A', 'C'
    ],
    origin: [
        {place: 'north-east'},
        {place: 'western'},
        {place: 'eastern'}
    ],
    title: function(){
        return `this ${this.name[2]} is gred ${this.gred[2]} and from ${this.origin[2].place}`
    }
}
console.log(objectMethod2.title());

// add method to existing object
const object10 = {
    color: 'green',
    gred: [
        'B', 'A', 'C'
    ],
    origin: [
        {place: 'north-east'},
        {place: 'western'},
        {place: 'eastern'}
    ],
};

// create method outside object
object10.name = function(){
    return this.origin[1].place +" and "+ this.origin[2].place
};

console.log(object10.name());

// Display object with 4 ways:
// with properties
// with for..in loop
// with Object.values()
// with JSON.Stringify()

// display with properties
const p = {
    name: 'apple',
    origin: 'northeast',
    color: 'red'
};

console.log(p.name);

// display with for..in loop
const qq = {
    name: 'pear',
    origin: 'australia',
    color: 'green',
    gred: {
        name: 'ab',
        brand: 'cd',
        quality: 'd'

    }
};

for(let i in qq.gred){
    document.getElementById('pp').textContent += " " + qq.gred[i] + " ";
}

// display with Object.values()
const w1 = {
    name: 'watermelon',
    origin: 'thailand',
    color: 'green-yellow',
    taste: {
        1: 'sweet',
        2: 'sour',
        3: 'no taste'
    }
};

console.log(Object.values(w1.taste));
document.getElementById('pp').textContent = Object.values(w1.taste);

// display with JSON.Stringify()
const w2 = {
    name: "apple",
    origin: {
        A: "north-east",
        B: "western",
        C: "south-east",
        D: "east-blue",
        E: "water-seven"
    }
};

console.log(JSON.stringify(w2.origin));

// JAVASCRIPT ACCESSORS ( GETTERS & SETTERS )
// GETTER
const gg = {
    name: 'mango',
    origin: 'thailand',
    get quality(){
        return "this " + this.name + " is from " + this.origin
    }
}
document.getElementById('pp').textContent = gg.quality;

// SETTER
const setterGoal = {
    name: 'apple',
    set Nama(val){
        return this.name = val;
    }
}

setterGoal.Nama = 'pear';
console.log(setterGoal.name);

// JAVASCRIPT OBJECT CONSTRUCTOR
// create function for object 
function object11(nama, tahun, tempatan){  //letak value sebagai parameter

    // setkan property = value
    this.name = nama;
    this.umur = tahun;
    this.buah = tempatan
}

// create object constructor 
const object12 = new object11('amin', 21, 2024, 'johor');
console.log(object12.name +" "+object12.buah);

// create multiple of obtject constructor
// 1st : create function for object constructor
function multipleobject(a,b,c,d){
    this.aa = a,
    this.bb = b,
    this.cc = c,
    this.dd = d
}

// create object constructor
const objectConstructor1 = new multipleobject(1,2,3,4);
const objectConstructor2 = new multipleobject('spiderman', 'batman', 'superman', 'kluangman');

console.log(objectConstructor2.aa);

// ES6
// SPREAD OPERATOR ...
const aaa = [1,2,3,4];
const aaa1 = [0,...aaa, 5,6];
console.log(aaa1);

const aaa2 = (...args) => {
    console.log(args)
}

aaa2(1,2,3);

const bbb1 = {a:1, b:2, c:3};
const bbb2 = {...bbb1, d:4};
console.log(bbb2);

const aaa3 = ['jan','feb','mac','april'];
const aaa4 = ['may', 'jun', 'july'];
const aaa5 = ['aug', 'sept', 'oct', 'nov', 'dec'];
const aaa6 = [...aaa3,...aaa4,...aaa5];
console.log(aaa6);

const aaa7 = [12,42,912,3923,42983,31932,1233];
const aaa8 = Math.max(...aaa7);
console.log(aaa8);

// for ...of loop 
// for of loop: array
const ofLoop = ['apple', 'pear', 'grape'];
for(let i of ofLoop){
    document.getElementById('pp').textContent += ' ' + i;
    console.log(i);
}

// for loop: string
const character = 'aminuddin';
for(let i of character){
    document.getElementById('pp').textContent += ' ' + i + ',' ;
    console.log(i);
}

// MAPS OBJECTS
const map2 = new Map ([
    ['name','apple'],
    ['brand', 'thaibat'],
    ['quality', 1],
    ['origin', 'western']
])

console.log(map2.get('brand'));
map2.set('brand', 'hermes');
console.log(map2.get('brand'));

// set() method for map object
const map4 = new Map();
map4.set('name', 'pear');

console.log(map4.get('name'));

// map.size: index start from 0
const map5 = new Map([
    ['name', 'apple'],
    ['brand', 'good'],
    ['quality', 1]
]);

console.log(map5.size);

// Map.delete() method
const map6 = new Map([
    ['name', 'apple'],
    ['brand', 'terbaik'],
    ['quality', 1]
]);

console.log(map6.size);
console.log(map6.delete('name'));
console.log(map6.size);

// Map.clear(): removes all elements
const map7 = new Map([
    ['name', 'apple'],
    ['age', 2],
    ['as', 1]
])

console.log(map7.size);
console.log(map7.clear());
console.log(map7.size);

// Map.has() method
const map8 = new Map([
    ['name', 12],
    ['age', 21],
    ['quality', 23]
]);

console.log(map8.has('name'));
console.log(map8.delete('name'));
console.log(map8.has('name'));

// forEach(value, index)

const map9 = new Map([
    ['apple', 2],
    ['pear', 3],
    ['mango', 4],
    ['grape', 1]
])

map9.forEach((value, index) => {
    console.log(`${index}: ${value}`);
    document.getElementById('pp').textContent += `[ ${index}: ${value} ]`; 
})


// The entries() method returns an iterator object with the [key,values] in a Map:
const map10 = new Map([
    ["name", 12],
    ["quality", 133],
    ["brand", 214]
]);

let sd = "";
for(let i of map10.entries()){
    console.log(i.entries());
    sd += i + " ";
    
}
document.getElementById('pp').textContent = sd;

// The keys() method returns an iterator object with the keys in a Map:
const map11 = new Map([
    ["name", 12],
    ["quality", 133],
    ["brand", 214]
]);

for(let i of map11.keys()){
    document.getElementById('pp').textContent += i  + ' ';
}

// The values() method returns an iterator object with the values in a Map:
const map12 = new Map([
    ["name", 12],
    ["quality", 133],
    ["brand", 214]
]);

for(let i of map12.values()){
    document.getElementById('pp').textContent += i + ' ';
}
