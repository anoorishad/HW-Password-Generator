// Assigning Variables

// grabbing button from html
var btn = document.querySelector('button');

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specChars = ["!","@","#","$","%","^","&","*","(",")"];
var bank = [];
var password = "";

btn.addEventListener('click', generate);

function generate(){
    console.log("button pressed");

    // Prompt for password length
    var pwLength = prompt("Please enter length of password desired (Must be between 8 - 128 characters)");
    console.log("The user picked " + pwLength + " characters.")
    
    if(pwLength >= 8 && pwLength <= 128) {
        
        var incLower = window.confirm("Include lowercase characters?");
        if (incLower == true) {
            bank = bank.concat(lower);
        }

        var incUpper = window.confirm("Include uppercase characters");
        if (incUpper == true) {
            bank = bank.concat(upper);
        }

        var incNumbers = window.confirm("Include numbers?");
        if (incNumbers == true) {
            bank = bank.concat(numbers);
        }
        
        var incSpecChars = window.confirm("Include numbers?");
        if (incSpecChars == true) {
            bank = bank.concat(specChars);
        }

        else {
            alert("YOU MUST INCLUDE AT LEAST ONE CHARACTER TYPE");
        }

    }
    // alerts user if incorrect length was used
    else {
        alert("You entered an invalid password length");
    }
}




