
gsap.from(".login-container", { y: -50, opacity: 0, duration: 1, ease: "power2.out" });

function checkUsername() {
    let username = document.getElementById('username').value;
    
    if (username.toLowerCase() === 'yash') {
        alert('Aaja bhai, apna hi banda hai!');
        document.getElementById('password-container').style.display = 'block';
        gsap.from("#password-container", { y: 20, opacity: 0, duration: 0.5 });
    } else if (username === '') {
        alert('Bhai naam to bata!');
    } else {
        alert('Bhaag yaha se, security bulaun kya?');
    }
}

function checkPassword() {
    let password = document.getElementById('password').value;
    
    if (password === 'nodogyara') {
        alert('Arey apna aadmi hai, VIP entry de di!');
    } else if (password === '') {
        alert('Bhai bina password ke entry nahi milegi, soch le!');
    } else {
        alert('Access Denied!');
    }
}