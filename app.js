let exampleForm = document.forms.example_form
let errorIcon = document.querySelectorAll('.icon')
let requiredInps = document.querySelectorAll('.required')
let req = document.querySelectorAll('.req')
exampleForm.onsubmit = (event) => {
    event.preventDefault()
    let isError = false

    requiredInps.forEach((inp) => {
        inp.classList.remove('error')
        inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
        if (inp.value.length === 0) {
            inp.classList.add('error')
            isError = true
            inp.nextElementSibling.nextElementSibling.classList.add('error-icon-active')
        }
    })

    req.forEach((inp) => {
        inp.classList.remove('req')
        inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
        if (inp.value.length === 0) {
            inp.classList.add('red')
            isError = true
            inp.nextElementSibling.nextElementSibling.classList.add('error-icon-active')
        }
    })









    if (isError === true) {

    } else {
        onSubmit()
    }
}

function onSubmit() {
    let user = {}
    let fm = new FormData(exampleForm)

    fm.forEach((value, key) => {
        user[key] = value

    })

    console.log(user);
}
