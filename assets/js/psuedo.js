// Assigning Variables

// grabbing button from html
var btn = document.querySelector('button');


// Character choices and temporary bank
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specChars = ["!","@","#","$","%","^","&","*","(",")"];
var bank = [];

btn.addEventListener('click', generate);

function generate(){
    console.log("button pressed");

    // Prompt for password length
    var pwLength = prompt("Please enter length of password desired (Must be between 8-128 characters)");
    console.log("The user picked " + pwLength + " characters.")
    
    if(pwLength >= 8 && pwLength <= 128) {
        
        var incLower = window.confirm("Include lowercase characters?");
        var incUpper = window.confirm("Include uppercase characters?");
        var incNumbers = window.confirm("Include numeric characters?");
        var incSpecChars = window.confirm("Include special characters?");
        
        if (incLower == true) {
            bank = bank.concat(lower);
        }
        
        if (incUpper == true) {
            bank = bank.concat(upper);
        }
        if (incNumbers == true) {
            bank = bank.concat(numbers);
        }
        
        if (incSpecChars == true) {
            bank = bank.concat(specChars);
        }

        if (!incLower && !incUpper && !incNumbers && !incSpecChars == true){
            alert("YOU MUST INCLUDE AT LEAST ONE CHARACTER TYPE");
            generate();
            return;
        }
    }
    // alerts user if incorrect length was used
    else {
        alert("You entered an invalid password length");
        return;
    }
    
    // Generates password with provided charcter type selections and length
        var password = [];
        for (var i = 0; i < pwLength; i++) {
             var passwordGen =
                bank[Math.floor(Math.random() * bank.length)];
                password = password.concat(passwordGen);
        }
        password = password.join('');
        console.log("Password: " + password);
        alert("Password: " + password);

        
}




