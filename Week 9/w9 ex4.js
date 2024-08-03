function multiply(){
    let num1 = document.querySelector('#Number-1').value;
    let num2 = document.querySelector('#Number-2').value;

    let result = num1 * num2;

    document.querySelector('#Multiply').textContent = "The Multiplication of "+num1+" and "+num2+" is "+result;
}document.querySelector('#Multiply').style.color = "red"
document.querySelector('#btn').addEventListener("click",multiply);