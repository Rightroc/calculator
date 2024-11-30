const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        if(button.textContent === '='){
            //evaluate the following expression
            try{
                result.value = eval(result.value);
            }catch (error){
                result.value = 'Error';
            }
        } else if(button.textContent === 'AC'){
            //clear the result
            result.value = '0';
        } else if (button.textContent === '+/-'){
            //toggle the sign
            result.value = parseFloat(result.value)*-1;
        } else if (button.textContent === '%'){
            //calculate the percentage
        } else {
            //append the button's value to the result
            result.value += button.textContent;
        }
    })
})