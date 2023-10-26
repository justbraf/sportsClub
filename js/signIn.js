document.addEventListener('DOMContentLoaded', ()=> {
    // run code after page has loaded
    let myForm = document.querySelector('#js-signIn')
    myForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(myForm[1].value)
    })
})