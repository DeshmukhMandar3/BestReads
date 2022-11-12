import { navbar_fn } from "./components/navbar.js"
let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar_fn();

// navbar code snippet start
let ddn_btn = document.querySelector(".ddn-name");
ddn_btn.onclick = () => {
    let dropdown_class = document.getElementById("dropdown-content");
    show_hide(dropdown_class);
}

let signIn_btn = document.getElementById("SignIn");
signIn_btn.onclick = () => {
    let SignIn_class = document.getElementById("signIn-ddn");
    show_hide(SignIn_class);
}
const show_hide = (list) => {

    list.classList.toggle("show");
}
//when user logins, set item with local_name as key and name of user as value in local storage
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


let create_btn=document.getElementById("sendmessage");
create_btn.onclick=(e)=>{


    CreateMessage(e)
}


const CreateMessage=async(event)=>{
     event.preventDefault()
console.log("send message")
    let firstname_id=document.getElementById("firstname").value;
    // if(firstname_id=="")
    // {
    //     alert("please enter the firstname")
    // }
    let lastname_id=document.getElementById("lastname").value;
     let email_id=document.getElementById("email").value;
     let Phone_id=document.getElementById("Phone").value;
     let Message_id=document.getElementById("Message").value;

    let sendData = {
        first_name : firstname_id,
        Last_name: lastname_id,
        email: email_id,
        Phone:Phone_id,
        Message:Message_id
    }
    console.log(sendData)

    let response = await fetch ("http://localhost:3000/sms", {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
            "Content-Type" :"application/json"
        }
    })
    let data = await response.json();
    console.log(data)
}
