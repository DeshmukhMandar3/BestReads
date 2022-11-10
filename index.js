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

    //Fetch Movie Data from Google Books API
    const getIt=async()=>{
        let res=await fetch("https://www.googleapis.com/books/v1/volumes?q=+subject:fantasy&key=AIzaSyBPyy1Lx0veEyDixS2W3lh5qgCBOIZqb_c&&maxResults=40&&orderBy=relevance");
        let data=await res.json();
        append(data.items);
    }
    
    getIt();

    //append movie data
    const append=(data)=>{
        let container=document.getElementById("container");
        container.innerHTML=null;
        
        data.forEach((el)=>{

            let card=document.createElement("div");
            card.setAttribute("class","card");

            let image=document.createElement("img");
            image.setAttribute("class","image");
            image.src=el.volumeInfo.imageLinks.thumbnail;

            let name=document.createElement("h3");
            name.setAttribute("class","name");
            name.innerHTML=el.volumeInfo.title;

            let authors=document.createElement("p");
            authors.setAttribute("class","authors");
            authors.innerHTML="By: "+el.volumeInfo.authors[0];

            let bottom=document.createElement("div");
            bottom.setAttribute("class","bottom");

            let rating=document.createElement("p");
            rating.setAttribute("class","rating");
            rating.innerHTML="Rating: "+(el.volumeInfo.averageRating || "--");
            

            let more_details=document.createElement("button");
            more_details.setAttribute("class","more_details");
            more_details.innerHTML="More Details";
            more_details.onclick=()=>{
                see_details(el);
            }

            bottom.append(rating,more_details);
            card.append(image,name,authors,bottom);
            container.append(card);
        })

    
    }

    const see_details=(el)=>{
        let bookdetails=el;
        localStorage.setItem("bookdetails",JSON.stringify(bookdetails));
        window.open("./Productpage.html","_self");
    }