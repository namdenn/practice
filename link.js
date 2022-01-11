function signIn() {
    let username = document.getElementsByClassName("usernameSI").value
    let pass = document.getElementsByClassName("passwordSI").value
    localStorage.setItem("username", username)
    localStorage.setItem("password", pass)

}