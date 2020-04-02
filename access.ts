import {Demo} from './classDemo';



//defines outer skeleton of the body
//camera? ---> is now optional
export interface vehicle
{ 
    color:string;
    engine:number;
    camera?:boolean;
} 

let c = new Demo(123);
c.setUsername("Rui Oliveira");
console.log(c.getUsername());
console.log(c.getSsn());

function validate(value:string):string{
    return value;
}

function validateCar(car:vehicle){
    
}

validate("hey");

//objects
let bmw =
{
    color: "red",
    engine: 100,
    camera:true
}

let vw =
{
    color: "blue",
    engine: 150,
}

console.log(bmw.color);

validateCar(bmw);
validateCar(vw);


