const up = document.getElementById('uppercase');
const low = document.getElementById('lowercase');
const num = document.getElementById('number');
const sym = document.getElementById('symbol');
var criteria = [0,0,0,0];
var characterLength = 0;
var strength = 0;

up.addEventListener("click", function(){
    if (up.checked){
        strength++;
        criteria[0] = 1;
    }
    else{
        strength--;
        criteria[0] = 0;
    }
});

low.addEventListener("click", function(){
    if (low.checked){
        strength++;
        criteria[1] = 1;
    }
    else{
        strength--;
        criteria[1] = 0;
    }
});

num.addEventListener("click", function(){
    if (num.checked){
        strength++;
        criteria[2] = 1;
    }
    else{
        strength--;
        criteria[2] = 0;
    }
});

sym.addEventListener("click", function(){
    if (sym.checked){
        strength++;
        criteria[3] = 1;
    }
    else{
        strength--;
        criteria[3] = 0;
    }
});


document.getElementById('generate').addEventListener("click", function(){
    document.getElementById('div1').value="";
    console.log(document.getElementById('slider').value);
    characterLength = document.getElementById('slider').value;
    var lower = "abcdefghijklmnopqrstuvwxyz"; //to upper
    var upper = lower.toUpperCase(); 
    var numeric = '0123456789';
    var symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    if(characterLength >= criteria[0]+criteria[1]+criteria[2]+criteria[3]){
        if (criteria[0] == 1){
            password += upper.charAt(Math.floor(Math.random() * upper.length));
            characterLength--;
        }
        if (criteria[1] == 1){
            password += lower.charAt(Math.floor(Math.random() * lower.length));
            characterLength--;
        }
    
        if (criteria[2] == 1){
            password += numeric.charAt(Math.floor(Math.random() * numeric.length));
            characterLength--;
        }
        if (criteria[3] == 1){
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));
            characterLength--;
        }
    
        for (var i = 0, n = lower.length; i < characterLength; ++i) {
            password += lower.charAt(Math.floor(Math.random() * n));
        }
    }
    console.log(password);
    document.getElementById('div1').value += password;
});

var button = document.getElementById("copy");
button.addEventListener("click", function(){
    var inputField = document.getElementById("div1");
  
    // Copy the value to the clipboard
    navigator.clipboard.writeText(inputField.value)
      .then(function() {
        // Provide some visual feedback to the user
        alert("Copied to clipboard: " + inputField.value);
      })
      .catch(function(error) {
        // Handle error if the copy operation fails
        console.error("Unable to copy to clipboard: ", error);
      });
 });
