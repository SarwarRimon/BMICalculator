const bmibtn=document.getElementById("bmi");
let bmi=0;
let string="";
bmibtn.addEventListener('click',()=>{
    const age=document.getElementById("age").value;
const weight=parseFloat(document.getElementById("weight").value);
const height=parseFloat(document.getElementById("height").value/100);
bmi=weight/(height*height);
const output=document.getElementById("op");
if(isNaN(age)||age<=0){
output.innerText="Please enter a valid age"
return;
}
if(isNaN(height)||height<=0 ||isNaN(weight)||weight<=0){
    output.innerText="Please enter valid values for weight and height"
    return
}
if(bmi<18.5){
    string="Underweight";
}
else if(bmi>=18.5&& bmi<=24.9){
    string="Normal Weight";
}
else if(bmi>=25&& bmi<=29.9){
    string="Overweight";
}
else if(bmi>=30.0 && bmi<=34.9){
    string="Obesity (Class 1)";
}
else if(bmi>=35.0&& bmi<=39.9){
    string="Obesity (Class 2)";
}
else if(bmi>=40.0){
    string="Severe Obesity (Class 3)";
}

output.innerHTML=`
<hr></hr>
<p>Your age is:${age}</p>
<p>Your BMI is:${bmi.toFixed(2)}</p>
<p>${string}</p>
`
});