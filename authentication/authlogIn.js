//Login
let Log_btn = document.getElementById("Log-btn");
Log_btn.onclick = (element) => {
    element.preventDefault();
    let Lform = document.getElementById("login");
    let Lusername = Lform.Lusername.value;
    let Lpassword = Lform.Lpassword.value;
    Login(Lusername, Lpassword);
}

const Login = async (username, password) => {
    let send_data = {
        username,
        password
    }

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
        method: "POST",
        body: JSON.stringify(send_data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await res.json();
    console.log(data);
    getUserData(username, data.token);

}

const getUserData = async (username, token) => {
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    let data = await res.json();
    console.log(data);


    localStorage.setItem("local_name", data.username);
}
let local_name = localStorage.getItem("local_name");
if (local_name != null) {
    let log_btn = document.getElementById("log-name");
    log_btn.innerText = local_name;
    let ddn_name = document.querySelector(".ddn-name");
    ddn_name.style.display = "block";
    let sign = document.getElementById("sign")
    sign.style.display = "none";
    let sign_up = document.getElementById("sign-up")
    sign_up.style.display = "none";
}

let si_out = document.getElementById("sign_out");
si_out.onclick = () => {
    localStorage.clear();
}