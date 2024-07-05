const array_char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const array_sym = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?', '|', '\\', '`', '~'];
const array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];



display = document.getElementById("display").innerHTML;
const button = document.getElementById('mybutton');
button.addEventListener('click',calculate);

const numbers = document.getElementById('numbers');

        
        numbers.addEventListener('change', function() {
            
            const selectedValue = numbers.value;
            console.log('Selected number:', selectedValue);
            
            let number = selectedValue;
            
            console.log('Stored number:', number);
        });

const chars = document.getElementById('chars');
chars.addEventListener('change',function(){
    const selected_char = chars.value;
    
})
const sym = document.getElementById('sym')
sym.addEventListener('change',function(){
    const selected_sym_num = sym.value;
}) 
const num = document.getElementById('numbers');
num.addEventListener('change',function (){
    const selected_num = num.value;
})
var output = [];
var pos = [];
function calculate(){
    for(i = 0;i<num.value; i++){

        const randomNumber3 = Math.floor(Math.random() * 8) + 1;
        
        output.push(array_num[randomNumber3])
        pos.push(randomNumber3)
        
    
        
    
    }
    for(i = 0;i<chars.value; i++){

        const randomNumber2 = Math.floor(Math.random() * 26) + 1;
        
        output.push(array_char[randomNumber2])
        pos.push(randomNumber2)
        
    
        
    
    }
    for(i = 0;i<sym.value; i++){

        const randomNumber1 = Math.floor(Math.random() * 29) + 1;
        
        output.push(array_sym[randomNumber1])
        pos.push(randomNumber1)
        
    
        
    
    }
    
    my_string = output.join("")
    const display = document.getElementById("display").innerHTML = my_string;
    pos.length = 0
    my_string = ""
    output.length = 0
   

}




