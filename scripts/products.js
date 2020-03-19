// Instantiate document elements
const E_form = document.getElementById("registration");
var E_emailOne = document.getElementById("emailOne");
var E_emailTwo = document.getElementById("emailTwo");
var E_passOne = document.getElementById("passOne");
var E_passTwo = document.getElementById("passTwo");

// Listeners
E_form.addEventListener("submit", logSubmit);

// Functions
function logSubmit(event) {
    var mailOne = E_emailOne.value;
    var mailTwo = E_emailTwo.value;
    var passOne = E_passOne.value;
    var passTwo = E_passTwo.value;
    
    // Warn about email and password mismatches
    if (mailOne != mailTwo) {
        alert('Ensure emails match');
        E_emailOne.value = '';
        E_emailTwo.value = '';
    } else if (passOne != passTwo) {
        alert('Ensure passwords match');
        E_passOne.value = '';
        E_passTwo.value = '';
    } else {
        alert('THANK YOU!');
    }
    event.preventDefault();
}