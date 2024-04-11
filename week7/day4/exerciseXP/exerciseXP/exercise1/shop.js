
import {arr} from './product.js'


function findObj(name){

   const prodSearch = arr.find(product => product.name === name )
   return prodSearch

}
console.log(findObj('a'))