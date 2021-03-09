// const inputs = document.querySelectorAll('input');
// const small = document.querySelectorAll('small');

// inputs.forEach(input => {
//     input.addEventListener('focusout', function()   {
//         const small = this.nextElementSibling.nextElementSibling.nextElementSibling;
//         validation(input, small);
//     });
// });

// function validation (input, small) {
//     const type = input.id;
//     const value = input.value;
//     let trueOrFalse = true;
//     let message = '';
    
//     switch (type) {
//         case 'username':
//             if (value.length >= 6) {
//                 trueOrFalse = true;
//                 changeStyle(trueOrFalse, input, small);
//             } else {
//                 trueOrFalse = false;
//                 message = 'Wrong Username';
//                 changeStyle(trueOrFalse, input, small, message);
//             }
//             break;
//         case 'email':
//             if (value.length >= 6) {
//                 trueOrFalse = true;
//                 changeStyle(trueOrFalse, input, small);
//             } else {
//                 trueOrFalse = false;
//                 message = 'Wrong Email';
//                 changeStyle(trueOrFalse, input, small, message);
//             }
//             break;
//         case 'password':
//             if (value.length >= 6) {
//                 trueOrFalse = true;
//                 changeStyle(trueOrFalse, input, small);
//             } else {
//                 trueOrFalse = false;
//                 message = 'Wrong Password';
//                 changeStyle(trueOrFalse, input, small, message);
//             }
//             break;
//         case 'password2':
//             if (value.length >= 6) {
//                 trueOrFalse = true;
//                 changeStyle(trueOrFalse, input, small);
//             } else {
//                 trueOrFalse = false;
//                 message = `Password don't match`;
//                 changeStyle(trueOrFalse, input, small, message);
//             }
//             break;
//         default:
//             break;
//     }
// }

// function changeStyle(trueOrFalse, input, small, message) {
//     if (trueOrFalse) {
//                 input.classList.add('success');
//                 input.classList.remove('error');
//                 small.style.visibility = 'hidden'; 
//                 input.nextElementSibling.style.visibility = 'visible';
//                 input.nextElementSibling.nextElementSibling.style.visibility = 'hidden';
//     } else {
//                 input.classList.add('error');
//                 input.classList.remove('success');
//                 small.style.visibility = 'visible';
//                 input.nextElementSibling.style.visibility = 'hidden';
//                 input.nextElementSibling.nextElementSibling.style.visibility = 'visible';
//                 small.innerHTML = message;
//     }
// }


const formDivs = document.querySelectorAll('.form-control');
formDivs.forEach(div => {
    const input = div.querySelector('input');
    const small = div.querySelector('small');
    const circleYes = div.querySelector('.fa-check-circle');
    const circleNo = div.querySelector('.fa-exclamation-circle');
    
    input.addEventListener('focusout', () => {
      
        let message = validate(input, password);
        changeStyles(input, small, circleYes, circleNo, message);
    })
})

function validate(input, password) {
        const type = input.id;
        const value = input.value;
        let message = '';

        if (value.length >= 6) {
                message = 'Correct';
            } else {
                message = 'Wrong Input';
            }
        return message;
}

function changeStyles(input, small, circleYes, circleNo, message) {
    if(message == 'Correct') {
        input.classList.add('success');
        input.classList.remove('error');
        small.style.visibility = 'hidden'; 
        circleYes.style.visibility = 'visible';
        circleNo.style.visibility = 'hidden';
    }else {
        input.classList.add('error');
        input.classList.remove('success');
        small.style.visibility = 'visible';
        circleYes.style.visibility = 'hidden';
        circleNo.style.visibility = 'visible';
        small.innerHTML = message;
    }
}