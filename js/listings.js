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
    let teamData = getData()
})

let getData = () => {
    let URL = "js/teamData.json"
    fetch(URL)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let teamDat = document.querySelector(".teamData")
            teamDat.innerHTML = "<h4>" + data["name"] + "</h4>"
            data["clubs"].forEach(club => {
                teamDat.innerHTML += "<p>" + club["name"] + "</p>"
                
            });
        })
        .catch(()=>{
            console.error("cry for help")
        })
}