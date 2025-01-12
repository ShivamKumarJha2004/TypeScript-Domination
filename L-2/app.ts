//object,array, Tuple, enum
const obj:{
    firstname:string,
    age:number,
    skills:string[]
}={
    firstname:"Shivam",
    age:20,
    skills:["ReactJs","NodeJs"]
}
const lang:string[]=["ReactJs,JavaScript,TypeScript"]

console.log(lang);

console.log(obj);

//tuple
const person:{
    name:string,
    age:number,
    add:string
    product:[number,string]
}={
    name:"Shivam",
    age:12,
    add:"siswar",
    product:[100,"hello"]
}
console.log(person);

//enum
enum Role {Admin,User}
const data={
    name:"Shivam",
    role:Role.Admin
}
if(data.role===Role.Admin)
{
    console.log("hi admin");
    
}
else{
    console.log("No role");
    
}

