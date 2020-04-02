import {vehicle} from './access'; 

export class Demo{
    
    //properties, methods and constructor
    username:string;
    password:string;
    ssn:number;

    constructor(ssn:number){
        this.ssn=ssn;
    }

    getUsername(){
        return this.username;
    }

    setUsername(username:string){
        this.username=username;
    }
    
    getSsn(){
        return this.ssn;
    }
}
/*
let c = new Demo(123);
c.setUsername("Rui Oliveira");
console.log(c.getUsername());
console.log(c.getSsn());
*/