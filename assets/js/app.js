let cl = console.log;

const loginForm = document.getElementById("loginForm");
const emailCon = document.getElementById("email");
const passCon = document.getElementById("password");


const onLogin = (eve) => {
    eve.preventDefault();
    let obj = {
            email: emailCon.value,
            password: passCon.value
        }
        //cl(obj)
    loginAPi(obj)
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: res,
                timer: 3500
            })
        })
        .catch((rej) => {
            Swal.fire({
                icon: 'error',
                title: rej,
                timer: 3500
            })
        })
        .finally(() => {
            loginForm.reset()
        })
}

const loginAPi = (loginobj) => {
    let promise = new Promise((reslove, reject) => {
        setTimeout(() => {
            if (loginobj.email === "khushiyapatil360@gmail.com" && loginobj.password === "khushi@123") {
                reslove("login Successfully")
            } else {
                reject('invalid username and password')
            }
        }, 1500);
    })
    return promise
}
loginForm.addEventListener("submit", onLogin);