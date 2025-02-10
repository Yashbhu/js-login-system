let username = prompt('Kaun be tu?', '');

if (username === 'yash') {
    alert('Aaja bhai, apna hi banda hai!');

    let password = prompt('Chal password bata ab:', '');

    if (password === 'nodogyara') {
        alert('Arey apna aadmi hai, VIP entry de di!');
    } else if (password === '' || password === null) {
        alert('Bhai bina password ke entry nahi milegi, soch le!');
    } else {
        alert('Bhaag yaha se, security bulaun kya?');
    }
} else if (username === '' || username === null) {
    alert(
