function modalAppOpen (id) {
    document.querySelector(id).style.display = "grid"
    document.querySelector(`${id}Con`).style.display = "flex" 
    if (!document.querySelector(id).style.display === "grid") {
        document.body.style.overflow = "unset"

    } else {
        document.body.style.overflow = "hidden"
    }
}

function closeModal (id) {
document.body.addEventListener("keydown", (event) => {
if(event.key === "Escape") {
document.querySelector(id).style.display = "none";
document.querySelector(`${id}Con`).style.display = "none";
document.body.style.overflow = "unset"}
})
}


const imgElementsHTML = document.body.querySelectorAll(".modalTrigger")
imgElementsHTML.forEach((el) => {
    el.addEventListener("click", (event) => {
        let elementId = [...event.srcElement.classList]
        elementId = elementId[2]
        modalAppOpen(`#${elementId}`)
        closeModal(`#${elementId}`)
    })
})

document.getElementById('info').addEventListener("click", (event) => {
    event.preventDefault()

    document.getElementById('modalAppInfo').style.display = "grid"
    document.getElementById('modalAppInfo_text').style.display = "flex"
    if (document.getElementById('modalAppInfo').style.display === "grid") {document.body.style.overflow = "hidden"} else {document.body.style.overflow = "unset"}

    document.body.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            document.getElementById('modalAppInfo').style.display = "none"
            document.getElementById('modalAppInfo_text').style.display = "none"

        }
        if (document.getElementById('modalAppInfo').style.display === "grid") {document.body.style.overflow = "hidden"} else {document.body.style.overflow = "unset"}
    })
})

// Регистрация аккордеон

document.getElementById('LKbutton').addEventListener("click", (event) => {
event.preventDefault()
if (document.getElementById('accordeonReg').style.display === "block") {
    return document.getElementById('accordeonReg').style.display = "none"
} else {
    document.getElementById('accordeonReg').style.display = "block"
}

    
})

// регистация



let users = []

if (localStorage.getItem("users")) {users = JSON.parse(localStorage.getItem("users"))}

document.forms.regForm.submit.addEventListener("click", (event) => {
    event.preventDefault()
    let login = document.forms.regForm.login
    let password = document.forms.regForm.password
    let forgotPassword = document.forms.regForm.forgotPassword
    let email = document.forms.regForm.email
    let numberPhone = document.forms.regForm.numberPhone

let errText = null
let error = null
function err() {
if (login.value.length === 0) {return errText = `Ошибка: поле "${login.placeholder}" не заполнено`
} else if (login.value.length < 4) {return errText = `Ошибка: поле "${login.placeholder}" меньше 4 символов`
} else if (password.value.length === 0) {return errText = `Ошибка: поле "${password.placeholder}" не заполнено`
} else if (password.value.length < 6) {return errText = `Ошибка: поле "${password.placeholder}" меньше 6 символов`
} else if (forgotPassword.value.length === 0) {return errText = `Ошибка: поле "${forgotPassword.placeholder}" не заполнено`
} else if (forgotPassword.value.length < 6) {return errText = `Ошибка: поле "${forgotPassword.placeholder}" меньше 6 символов`
} else if (email.value.length === 0) {return errText = `Ошибка: поле "${email.placeholder}" не заполнено`
} else if (email.value.length < 8) {return errText = `Ошибка: поле "${email.placeholder}" меньше 8 символов`
} else if (numberPhone.value.length === 0) {return errText = `Ошибка: поле "${numberPhone.placeholder}" не заполнено`
} else if (numberPhone.value.length < 10) {return errText = `Ошибка: поле "${numberPhone.placeholder}" меньше 10 символов`
} else {error = false}
}
err()
  
if (login.value.length < 4 || password.value.length < 6 || forgotPassword.value.length < 6 || email.value.length < 8 || numberPhone.value.length < 10) {
document.getElementById('loginErrorEmpty').textContent = errText
    if (!document.getElementById('loginErrorEmpty').hasAttribute("open")) {
    return document.getElementById('loginErrorEmpty').toggleAttribute("open")
}
} else {
    document.getElementById('loginErrorEmpty').removeAttribute("open")
}

if (error === false) {
    users.push({
        login: login.value,
        password: password.value,
        forgotPassword: forgotPassword.value,
        email: email.value,
        phone: numberPhone.value
    })
        localStorage.setItem("users", JSON.stringify(users))

        errText = "Регистрация произведена успешно"
        document.getElementById('loginErrorEmpty').style.background = "green"
        document.getElementById('loginErrorEmpty').textContent = errText
        document.getElementById('loginErrorEmpty').toggleAttribute("open")

        setTimeout(() => {document.getElementById('loginErrorEmpty').removeAttribute("open")}, 2000)
        

} else {return}






})

let addedNews = []



document.addEventListener('DOMContentLoaded', () => {
// ПОДГРУЗКА ДОБАВЛЕННЫХ НОВОСТЕЙ

let date = new Date

if (localStorage.getItem('newsAdded')) {
    addedNews = JSON.parse(localStorage.getItem('newsAdded'))
    addedNews.forEach((el) => {
        document.getElementById('autocrSec').insertAdjacentHTML('beforebegin', `<article class="newBase">
        <img src="${el.src}" class="imgBaseNew modalTrigger autoCraftModal_${el.id}">
    
        <section class="modalAppSection" id="autoCraftModal_${el.id}">
            <article class="modalContent" id="autoCraftModal_${el.id}Con">
                <img src="${el.src}" alt="">
                <section class="modalContenAuthorAndDate">
    <article><p>${el.authorNew}, ${date.getDate()}.${date.getUTCMonth()}.${date.getFullYear()}</p></article>
    <article><p>Alpha-News</p></article>
                </section>
    
                <section class="modalAppText">
                <h1>${el.zag}</h1>
                <p>${el.textContent}</p>
             </section>
    
            </article>
         </section>
    
        <span>
        <p class="nameNew">Автомобилестроение</p>
        <p class="date">${date.getDate()}.${date.getUTCMonth()}.${date.getFullYear()}</p>
        </span>
        <h3>${el.zag}</h3>
        <h4>${el.podZag}</h4>
    </article>`)
    })
}


const imgElementsHTML = document.body.querySelectorAll(".modalTrigger")
imgElementsHTML.forEach((el) => {
    el.addEventListener("click", (event) => {
        let elementId = [...event.srcElement.classList]
        elementId = elementId[2]
        modalAppOpen(`#${elementId}`)
        closeModal(`#${elementId}`)
    })
})
// ПОДГРУЗКА ДОБАВЛЕННЫХ НОВОСТЕЙ

    document.getElementById('authForm').style.display = "none"
            // Работа с окном личного кабинета
    if (JSON.parse(localStorage.getItem("auth")) === true) {

        document.getElementById('authForm').style.display = "none"
        document.getElementById('regForm').style.display = 'none'
        document.getElementById('regAccordeonH1').textContent = "Личный кабинет"
        document.getElementById('authButton').textContent = ''
  
        document.getElementById('loginAuth').style.display = 'block'
        document.getElementById('emailAuth').style.display = 'block'
        document.getElementById('outAccount').style.display = 'block'

        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        document.getElementById('loginAuth').textContent = `Ваш логин: ${currentUser.login}`
        document.getElementById('emailAuth').textContent = `Ваш email: ${currentUser.email}`
        // Работа с окном личного кабинета
    }
})

document.getElementById('authButton').addEventListener('click', (event) => {
    event.preventDefault()
    if (document.getElementById('regForm').style.display === 'none') {
        document.getElementById('authButton').textContent = 'Уже есть аккаунт?'
        document.getElementById('regForm').style.display = 'flex'
        document.getElementById('regAccordeonH1').textContent = "Регистрация"
        document.getElementById('authForm').style.display = "none"
    } else {
    document.getElementById('authButton').textContent = 'Регистрация'
    document.getElementById('regForm').style.display = 'none'
    document.getElementById('regAccordeonH1').textContent = "Авторизация"
    document.getElementById('authForm').style.display = "flex"}
})

document.forms.authForm.submit.addEventListener('click', (event) => {
    event.preventDefault()
    let users = JSON.parse(localStorage.getItem("users"))
    let loginAuth = document.forms.authForm.login
    let passwordAuth = document.forms.authForm.password
    let account = null
    users.forEach((el) => {
        if (el.login === loginAuth.value) {account = el}
    })
    if (loginAuth.value === account.login && passwordAuth.value === account.password) {
        document.getElementById('authDialogApp').textContent = 'Вход выполнен успешно!'
        document.getElementById('authDialogApp').toggleAttribute("open")
        setTimeout(() => {document.getElementById('authDialogApp').style.animation = 'dialogAppClose .2s ease-in-out'}, 1000)
        setTimeout(() => {document.getElementById('authDialogApp').removeAttribute("open")}, 1200)

        setTimeout(() => {
            localStorage.setItem('auth', true)
            localStorage.setItem('currentUser', JSON.stringify(account))
            document.getElementById('authForm').style.display = "none"
            document.getElementById('regForm').style.display = 'none'
            document.getElementById('regAccordeonH1').textContent = "Личный кабинет"
            document.getElementById('authButton').textContent = ''
            document.getElementById('loginAuth').style.display = 'block'
            document.getElementById('emailAuth').style.display = 'block'
            document.getElementById('outAccount').style.display = 'block'
            let currentUser = JSON.parse(localStorage.getItem('currentUser'))
            document.getElementById('loginAuth').textContent = `Ваш логин: ${currentUser.login}`
            document.getElementById('emailAuth').textContent = `Ваш email: ${currentUser.email}`
            document.getElementById('authDialogApp').style.animation = "authDialogOpen .2s ease-in-out"
        }, 1400)




} else {alert('Не правильные данные')}


})

document.querySelector('#outAccount').addEventListener('click', () => {
    document.getElementById('authDialogApp').textContent = 'Вы вышли с аккаунта!'
document.getElementById('authDialogApp').toggleAttribute("open")

    setTimeout(() => {document.getElementById('authDialogApp').style.animation = 'dialogAppClose .2s ease-in-out'}, 1800)
    setTimeout(() => {localStorage.removeItem('currentUser'); localStorage.removeItem('auth'); document.getElementById('authDialogApp').removeAttribute("open")}, 2000)
    setTimeout(() => {
        document.getElementById('loginAuth').style.display = 'none'
        document.getElementById('emailAuth').style.display = 'none'
        document.getElementById('outAccount').style.display = 'none'

        document.getElementById('authButton').textContent = 'Регистрация'
    document.getElementById('regForm').style.display = 'none'
    document.getElementById('regAccordeonH1').textContent = "Авторизация"
    document.getElementById('authForm').style.display = "flex"
    document.getElementById('authDialogApp').style.animation = "authDialogOpen .2s ease-in-out"
    }, 2200)

})

// Добавление новостей

// Кнопка открывания
document.body.addEventListener('keydown', (ev) => {
    ev.key === 'Escape' ? document.getElementById('modalAppAddNews').style.display = 'none' : false
    document.getElementById('modalAppAddNews').style.display === 'block' ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"

})

document.getElementById('addNewsAutocraftOpen').addEventListener('click', (ev) => {
    if (JSON.parse(localStorage.getItem('auth')) === true) {
    document.getElementById('modalAppAddNews').style.display = 'block'
    document.getElementById('modalAppAddNews').style.display === 'block' ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset"
} else {
    document.getElementById('dialogAddNews').toggleAttribute('open')
    setTimeout(() => {document.getElementById('dialogAddNews').style.animation = 'addNewdialogAppClose .3s infinite'}, 2000)
    setTimeout(() => {document.getElementById('dialogAddNews').toggleAttribute('open');document.getElementById('dialogAddNews').style.animation = 'addNewDialogOpen .2s ease-in-out'}, 2200)
}
    



})
// Кнопка открывания


document.getElementById('addNewsAutoCraft').addEventListener('click', (event) => {
    event.preventDefault()
    let srcImage = document.forms.formAddNewsAutoCraft.src.value
    let text = document.forms.formAddNewsAutoCraft.text.value
    let author = document.forms.formAddNewsAutoCraft.author.value
    let h1 = document.forms.formAddNewsAutoCraft.h1.value
    let h2 = document.forms.formAddNewsAutoCraft.h2.value
    let secAdd = document.getElementById('autocrSec')
    console.log(secAdd)
    let date = new Date
    console.log(date.getFullYear())

    setTimeout(() => {
        secAdd.insertAdjacentHTML('beforebegin', `<article class="newBase">
    <img src="${srcImage}" class="imgBaseNew modalTrigger autoCraftModal_${addedNews.length}">

    <section class="modalAppSection" id="autoCraftModal_${addedNews.length}">
        <article class="modalContent" id="autoCraftModal_${addedNews.length}Con">
            <img src="${srcImage}" alt="">
            <section class="modalContenAuthorAndDate">
<article><p>${author}, ${date.getDate()}.${date.getUTCMonth()}.${date.getFullYear()}</p></article>
<article><p>Alpha-News</p></article>
            </section>

            <section class="modalAppText">
            <h1>${h1}</h1>
            <p>${text}</p>
         </section>

        </article>
     </section>

    <span>
    <p class="nameNew">Автомобилестроение</p>
    <p class="date">${date.getDate()}.${date.getUTCMonth()}.${date.getFullYear()}</p>
    </span>
    <h3>${h1}</h3>
    <h4>${h2}</h4>
</article>`)
    }, 2000)
    

addedNews.push({
    id: addedNews.length,
    src: srcImage,
    textContent: text,
    authorNew: author,
    zag: h1,
    podZag: h2,
    secAdd: secAdd
})

const imgElementsHTML = document.body.querySelectorAll(".modalTrigger")
imgElementsHTML.forEach((el) => {
    el.addEventListener("click", (event) => {
        let elementId = [...event.srcElement.classList]
        elementId = elementId[2]
        modalAppOpen(`#${elementId}`)
        closeModal(`#${elementId}`)
    })
})

localStorage.setItem('newsAdded', JSON.stringify(addedNews))

})