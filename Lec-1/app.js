function add(num1, num2, check, text) {
    if (check) {
        console.log("".concat(text, "shivam"));
    }
    else {
        return num1 + num2;
    }
}
;
var text = "hello world";
console.log(add(10, 20, true, text));
