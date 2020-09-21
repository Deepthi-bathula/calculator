
//getting element from html
var calculatorgrid = document.querySelector('.calculator-grid');


//creating o/p div

var divop = document.createElement('div');
var divpre = document.createElement('div');
var divcur = document.createElement('div');




//assing classes to divs
divop.classList.add('output');
divpre.classList.add('previous-operand');
divcur.classList.add('current-operand');
var inside = 0;
divcur.innerText=inside;
//creating buttons

var ac = document.createElement('button');ac.classList.add('span-two');
var del = document.createElement('button');
var mod = document.createElement('button');
var one= document.createElement('button');
var two= document.createElement('button');
var three = document.createElement('button');
var mul = document.createElement('button');
var four= document.createElement('button');
var five = document.createElement('button');
var six = document.createElement('button');
var add= document.createElement('button');
var seven = document.createElement('button');
var eight = document.createElement('button');
var nine = document.createElement('button');
var sub = document.createElement('button');
var decimal = document.createElement('button');
var zero = document.createElement('button');
var equal = document.createElement('button');equal.classList.add('span-two');

//adding button names
ac.innerText='AC';
del.innerText='DEL';
mod.innerText='%';
one.innerText='1';
two.innerText='2';
three.innerText='3';
mul.innerText='*';
four.innerText='4';
five.innerText='5';
six.innerText='6';
add.innerText='+';
seven.innerText='7';
eight.innerText='8';
nine.innerText='9';
sub.innerText='-';
decimal.innerText='.';
zero.innerText='0';
equal.innerText='=';


//onclick events
one.setAttribute('onclick','mynumber(1)');
two.setAttribute('onclick','mynumber(2)');
three.setAttribute('onclick','mynumber(3)');
four.setAttribute('onclick','mynumber(4)');
five.setAttribute('onclick','mynumber(5)');
six.setAttribute('onclick','mynumber(6)');
seven.setAttribute('onclick','mynumber(7)');
eight.setAttribute('onclick','mynumber(8)');
nine.setAttribute('onclick','mynumber(9)');
zero.setAttribute('onclick','mynumber(0)');

add.setAttribute('onclick','myoperator("+")');
sub.setAttribute('onclick','myoperator("-")');
mod.setAttribute('onclick','myoperator("%")');
mul.setAttribute('onclick','myoperator("*")');
decimal.setAttribute('onclick','myoperator(".")');

equal.setAttribute('onclick','equalto()');
ac.setAttribute('onclick','allclear()');
del.setAttribute('onclick','dele()');


//appending elements to html
 divop.append(divpre,divcur);
calculatorgrid.append(divop,ac,del,mod,one,two,three,mul,four,five,six,add,seven,eight,nine,sub,decimal,zero,equal);


console.log(calculatorgrid);


var exp='', number,operator,equal,a=true;

function mynumber(num){
    console.log(num);
    if(equal){
   exp=num;
divcur.innerText=exp;
number=true;
equal=false;
}else{
exp=divcur.innerText+num;
divcur.innerText=exp;
number=true;
}
}

function myoperator(op){
    
    divcur.innerText=exp + op;
operator = true ;
equal = false;
a= false;
}

function equalto(){
    if(exp)
    divpre.innerText=exp;
    exp=eval(exp);
    divcur.innerText=exp;
}

function allclear()
{
    exp='';
    divcur.innerText=exp;
    divpre.innerText=exp;
   
}

function dele()
{
    exp=exp.slice(0,-1);
    divcur.innerText=exp;
}


calculatorgrid.style.cssText ="display:grid;justify-content: center;align-content: center;min-height: 50vh;grid-template-columns:repeat(4,80px);grid-template-rows: minmax(100px,auto) repeat(5,80px);";

console.log(exp);