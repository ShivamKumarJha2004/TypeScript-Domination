//object,array, Tuple, enum
var obj = {
    firstname: "Shivam",
    age: 20,
    skills: ["ReactJs", "NodeJs"]
};
var lang = ["ReactJs,JavaScript,TypeScript"];
console.log(lang);
console.log(obj);
//tuple
var person = {
    name: "Shivam",
    age: 12,
    add: "siswar",
    product: [100, "hello"]
};
console.log(person);
//enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
var data = {
    name: "Shivam",
    role: Role.Admin
};
if (data.role === Role.Admin) {
    console.log("hi admin");
}
else {
    console.log("No role");
}
