console.log("hello world this is it");
document.write("HELLOOOOOOOOOO");
var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="abc";
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));
num=[1,2,3];
console.log(num);
console.log(typeof(num));
var hel=function() {
    alert('sayhello');
}
console.log(hel);

const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2) console.log("true");
else console.log("false");

var a=10;var b=12;var c=14;var linebreak="<br>"
document.write(linebreak);
document.write("a+b+c=");
result=a+b+c;
document.write(result);
document.write(linebreak);