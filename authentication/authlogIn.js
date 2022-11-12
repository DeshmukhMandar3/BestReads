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
    let create_btn = document.getElementById("submit_btn");
    create_btn.style.display = "block";
    let usertag = document.getElementById("usertag");
    usertag.innerText = data.username;

    localStorage.setItem("usName", data.username);
}