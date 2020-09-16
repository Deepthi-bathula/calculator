// var sub=function(a,b){return a-b;}
// console.log(sub(15,12));

// var mul=function(a,b){return a*b;}
// console.log(mul(2,15));

// tesrtfhjgk
var add=function(){
    var ar=arguments;
    var res=0;
for(var i=0;i<ar.length;i++){
res += ar[i];
}
return res;
}

var sub=function(){
    var ar=arguments;
    var res=ar[0];
    for(var i=1;i<ar.length;i++)
    {
    res = res-ar[i];
    }
    return res;
}

var mul=function(){
    var ar=arguments;
    var res=ar[0];
    for(var i=1;i<ar.length;i++)
    {
    res = res*ar[i];
    }
    return res;
}

var div=function(){
    var ar=arguments;
    var res=ar[0];
    for(var i=1;i<ar.length;i++)
    {
    res = res/ar[i];
    }
    return res;
}

var mod=function(){
    var ar=arguments;
    var res=ar[0];
    for(var i=1;i<ar.length;i++)
    {
    res %= ar[i];
    }
    return res;
}