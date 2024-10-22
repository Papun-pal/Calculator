let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        // console.log(e.target)
        if(e.target.innerHTML == '='){
            // string = eval(string);
            // input.value = string;

            try {
                let evalString = string.replace(/\^/g, '**');
                string = eval(evalString); 
                input.value = string; 
            } catch (error) {
                input.value = "Error"; 
                string = ""; 
            }
            
        } 
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;

        }
        else if (e.target.innerHTML === '^') {
           
            string += '^'; 
            input.value = string;
        } 
        else if(e.target.innerHTML == 'DE'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;

        }
        
    })
    
});


