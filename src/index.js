import _ from 'lodash';
import { veletlen } from './matek.js';
import {NEV,LOREM} from './texts/sepcial.js';

console.log("Hello");
console.log(veletlen(5,10));
console.log(NEV + ' ' + LOREM);

let t1 = [1,455,6];
let t2 = [454, 33, 1];
let t3=[3];

let merge = _.concat(t1,t2,t3);
console.log(merge);

function katt(){
    alert('EYOO CHIIIIIIIL')
}

document.getElementById("gomb").addEventListener('click',katt);

//src be kell dolgozni
//npm init --> package.json => type:module
//npm install --save ldash --> node_modules - package library || package-lock.json - more detailed project information pending on package.json
//.gitignore when commit u dont need to upload the node_modules/ because of the package-lock.json and package.json know the detail of the project so u can get the packages any time
//vgső összes js file convert to one big js file
//dist be szerepel majd az apk vagy az amit meg kell jelenitei pl html
//webpack tömöriti a kódokat hogy a neten vagy telefonon könnyen be tudja tölteni ha változtatunk magától változik
//node dist/main.js == node ./src/index.js
//npm install al hozza létre a node_modules mappát a package lock segítségével
//package.json script köze a kezdő pontot node al elotte start:node src/index.js ezt utána el tudjuk inditani npm start al
//npm run build lefuttatja a buildet