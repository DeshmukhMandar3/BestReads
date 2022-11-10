import {navbar_fn} from "./components/navbar.js"
    let nav_div=document.getElementById("navbar");
    nav_div.innerHTML=navbar_fn();

    // navbar code snippet start
    let ddn_btn=document.querySelector(".ddn-name");
    ddn_btn.onclick=()=>{
        let dropdown_class=document.getElementById("dropdown-content");
        show_hide(dropdown_class);
    }

    let signIn_btn=document.getElementById("SignIn");
    signIn_btn.onclick=()=>{
        let SignIn_class=document.getElementById("signIn-ddn");
        show_hide(SignIn_class);
    }
    const show_hide=(list)=>{
    
       
         list.classList.toggle("show");
    }
    //when user logins, set item with local_name as key and name of user as value in local storage
    let local_name=localStorage.getItem("local_name");
    if(local_name!=null){
        let log_btn=document.getElementById("log-name");
        log_btn.innerText=local_name;
        let ddn_name=document.querySelector(".ddn-name");
        ddn_name.style.display="block";
        let sign=document.getElementById("sign")
        sign.style.display="none";
        let sign_up=document.getElementById("sign-up")
        sign_up.style.display="none";
    }


    // navbar code snippet end
    