
//signup
const validateEmail = (email) => {
    return email.includes("@") ? true : false;
}

const validateUser = (u) => {
    return u.includes("@") ? false : true;
}

const validatePassword = (password) => {
    return password.length < 8 ? false : true;
}



let reg_btn = document.getElementById("reg-btn");
reg_btn.onclick = (element) => {
    element.preventDefault();
    let form = document.getElementById("register");
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let username = form.username.value;
    let mobile = form.mobile.value;
    let description = form.description.value;


    if (validateUser(username) && validatePassword(password)) {
        SignUp(name, email, password, username, mobile, description);
    }

}

const SignUp = async (name, email, password, username, mobile, description) => {
    let send_data = {
        name,
        email,
        password,
        username,
        mobile,
        description
    }
    //console.log(send_data);
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify(send_data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let data = await res.json();
    console.log(data);
}

//  -------------------------------------------------------------   //

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





