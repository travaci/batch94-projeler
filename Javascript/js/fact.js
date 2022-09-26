const factorial = () => {
let n = document.querySelector("#num").value;
if (!n || isNaN(n) || n<0){
    alert("Not a valid number");
    return;
}
let f = 1;
for(let i=1; i<=n; i++){
    f*=i;
}
document.querySelector("#result").innerHTML=`Factorial of ${n} = ${f}`;
}