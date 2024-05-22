// exercise2
interface Vehicle {
    make: string,
    model: string
    start(): string
}

interface Car extends Vehicle {
    numberOfDoors: number,
}

class Sedan implements Car{
    constructor(
        public make: string,
        public model: string,
        public numberOfDoors: number,

    ) {
        this.numberOfDoors = numberOfDoors
        this.make = make
        this.model = model
    } 
    start(): string {
        return `${this.model},${this.make},${this.numberOfDoors}`
    }

}

let newCar = new Sedan('a','a',12)

// exercise3
type T = {
    name: string
}

type U = {
    age: number 
}

type Combine = T | U

let D: Combine = {
    name: "dan",
    age: 23
}

function combineObjects(obj3: Combine){
    return obj3
}

// exercise4
class Stack<T> { 
    private elements: T[] = []; 
    push(element: T): void { 
        this.elements.push(element); 
    } 
  
    pop(): T | undefined { 
        return this.elements.pop(); 
    } 

    isEmpty(): boolean {
        if (this.elements.length === 0) {
            return true
        } else {
            return false
            
        }
    }

} 
const numberStack = new Stack < number > (); 

// exercise5
const isGreaterThanTen = (num: number): boolean => {
    return num > 10 ? true : false
} 

const filterArray = <T>(arrelement: T[], predicate:(item: T) => boolean): T[] => {
    const result: T[] = [];
    for(const item in arrelement){
        if(predicate(arrelement[item])){
            result.push(arrelement[item])
        }
    }
    return result

}
