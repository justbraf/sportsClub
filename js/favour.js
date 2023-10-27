document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem("currentUser"))
        location.assign('/')
    let dispName = document.querySelector(".js-name")
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
    dispName.innerHTML = "Welcome " + currentUser["fname"]
    let signOutBtn = document.querySelector(".js-signOut")
    signOutBtn.addEventListener("click", () => {
        signOut()
    })
    isSignedIn()
})