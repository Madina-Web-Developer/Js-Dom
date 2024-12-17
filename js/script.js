



let input  = document.querySelector('.searchDiv2');
let button = document.querySelector('.button1');
let result = document.querySelector('.result');
let error  = document.querySelector('.error');
let clear  = document.querySelector('.clear');


button.addEventListener('click', ()=>{

    if(input.value == ''){

        error.innerHTML = 'Enter Your Text'
    }

    else{

        error.innerHTML = ''
        result.innerHTML = ''

        for(let i = 1 ; i<11 ; i++){

            result.innerHTML += input.value + ' x ' + i + ' = ' + input.value * i + '<br>'

        }

        
    }

})
