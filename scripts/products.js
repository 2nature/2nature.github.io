// Instantiate document elements
const E_form = document.getElementById("registration");
var E_emailOne = document.getElementById("emailOne");
var E_emailTwo = document.getElementById("emailTwo");
var E_passOne = document.getElementById("passOne");
var E_passTwo = document.getElementById("passTwo");

// Listeners
E_form.addEventListener("submit", logSubmit);
E_emailOne.addEventListener("input", checkEmail);
E_emailTwo.addEventListener("input", checkEmail);
E_passOne.addEventListener("input", checkPass);
E_passTwo.addEventListener("input", checkPass);

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

function checkEmail() {
    var mailOne = E_emailOne.value;
    var mailTwo = E_emailTwo.value;

    // Red border around confirmed email
    if (mailOne != mailTwo) {
        E_emailTwo.className = "redBorder";
    } else {
        E_emailTwo.className = "";
    }
}

function checkPass() {
    var passOne = E_passOne.value;
    var passTwo = E_passTwo.value;

    // Red border around confirmed password
    if (passOne != passTwo) {
        E_passTwo.className = "redBorder";
    } else {
        E_passTwo.className = "";
    }
}