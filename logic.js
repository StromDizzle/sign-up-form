var firstPass = document.getElementById("pass0");
var secondPass = document.getElementById("pass1");
main();

function main() {
    firstPass.addEventListener('input', () => {
        checkPassword();
    })
    pass1.addEventListener('input', () => {
        checkPassword();
    })
}


function checkPassword(){
    if (pass0.value === pass1.value){
        pass0.setCustomValidity('');
        pass1.setCustomValidity('');
        console.log("valid");
    }
    else{
        pass0.setCustomValidity('Passwords do not match!');
        pass1.setCustomValidity('Passwords do not match!');
        console.log("invalid");
    }
}