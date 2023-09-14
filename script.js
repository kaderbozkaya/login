const showPassword = (pass, eyeicon) => {
    const input = document.getElementById(pass),
        EyeIcon = document.getElementById(eyeicon)

    EyeIcon.addEventListener('click', () => {
           //change to password type(text)
        if (input.type === 'password') {
            input.type = 'text'
            //icon change 
            EyeIcon.classList.add('bi-eye')
            EyeIcon.classList.remove('bi-eye-slash')
        } else {
            //change to password type(password)
            input.type = 'password'
            //icon change
            EyeIcon.classList.remove('bi-eye')
            EyeIcon.classList.add('bi-eye-slash')

        }
    })
}

showPassword('login-password', 'password-eye')