document.getElementById("login-button").addEventListener("click",function(){
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    
    // ======= user password ======
    const passwordField = document.getElementById("user-password");
    const passwordValue = passwordField.value;
    if(emailValue == 'baaperchele@baap.com' && passwordValue == 'cheleno1' ){
        window.location.href = 'secondPage.html';
    }
    else{
        alert('sorry! you entered wrong email and password');
    }
})