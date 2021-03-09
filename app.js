const inputs = document.querySelectorAll('input');
const small = document.querySelectorAll('small');

inputs.forEach(input => {
    input.addEventListener('focusout', function()   {
        const small = this.nextElementSibling.nextElementSibling.nextElementSibling;
        validation(input, small);
    });
});

function validation (input, small) {
    const type = input.id;
    const value = input.value;
    let trueOrFalse = true;
    let message = '';
    
    switch (type) {
        case 'username':
            if (value.length >= 6) {
                trueOrFalse = true;
                changeStyle(trueOrFalse, input, small);
            } else {
                trueOrFalse = false;
                message = 'Wrong Username';
                changeStyle(trueOrFalse, input, small, message);
            }
            break;
        case 'email':
            if (value.length >= 6) {
                trueOrFalse = true;
                changeStyle(trueOrFalse, input, small);
            } else {
                trueOrFalse = false;
                message = 'Wrong Email';
                changeStyle(trueOrFalse, input, small, message);
            }
            break;
        case 'password':
            if (value.length >= 6) {
                trueOrFalse = true;
                changeStyle(trueOrFalse, input, small);
            } else {
                trueOrFalse = false;
                message = 'Wrong Password';
                changeStyle(trueOrFalse, input, small, message);
            }
            break;
        case 'password2':
            if (value.length >= 6) {
                trueOrFalse = true;
                changeStyle(trueOrFalse, input, small);
            } else {
                trueOrFalse = false;
                message = `Password don't match`;
                changeStyle(trueOrFalse, input, small, message);
            }
            break;
        default:
            break;
    }
}

function changeStyle(trueOrFalse, input, small, message) {
    if (trueOrFalse) {
                input.classList.add('success');
                input.classList.remove('error');
                small.style.visibility = 'hidden'; 
                input.nextElementSibling.style.visibility = 'visible';
                input.nextElementSibling.nextElementSibling.style.visibility = 'hidden';
    } else {
                input.classList.add('error');
                input.classList.remove('success');
                small.style.visibility = 'visible';
                input.nextElementSibling.style.visibility = 'hidden';
                input.nextElementSibling.nextElementSibling.style.visibility = 'visible';
                small.innerHTML = message;
    }
}