
    // navbar code snippet end

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





let data = JSON.parse(localStorage.getItem("bookdetails")) || [];
// console.log(data)
const append=(data)=>{
    let container=document.getElementById("container1");
    let container2=document.getElementById("container2");
    container.innerHTML=null;
    container2.innerHTML=null;
    
    

        let card=document.createElement("div");
        card.setAttribute("class","card");

        let image=document.createElement("img");
        image.setAttribute("class","image");
        image.src=data.volumeInfo.imageLinks.thumbnail;

        let constant = document.createElement("p");
        constant.innerText = "Buy it at best price from here"
        constant.style.fontWeight="bold"
        constant.setAttribute("class","constant")

        let price = document.createElement("p")
        price.setAttribute("class","price");
        if(data.saleInfo.saleability== "FOR_SALE"){
        price.innerText="Rs "+(data.saleInfo.listPrice.amount);
        }
        else{
            price.innerText="Not For Sale "  
        }
        
        // let Specification = document.createElement('h3')
        // Specification.innerText="Book Specification"
        

        let name=document.createElement("h3");
        name.setAttribute("class","name");
        name.innerHTML=data.volumeInfo.title;

        let authors=document.createElement("p");
        authors.setAttribute("class","authors");
        authors.innerHTML="By: "+data.volumeInfo.authors[0];

        let bottom=document.createElement("div");
        bottom.setAttribute("class","bottom");

        let rating=document.createElement("p");
        rating.setAttribute("class","rating");
        rating.innerHTML="Rating: "+(data.volumeInfo.averageRating || "--");
        
       
        

        let description = document.createElement("p")
        description.innerText = data.volumeInfo.description;
        
        // let more_details=document.createElement("button");
        // more_details.setAttribute("class","more_details");
        // more_details.innerHTML="More Details";
        // more_details.onclick=()=>{
        //     see_details(el);
        // }
        
        let btn = document.createElement("btn")
        btn.innerText="Buy Now"
        btn.setAttribute("class","btn")
        btn.style.cursor="Pointer"
        btn.onclick=()=>{
            Namesearch(data.volumeInfo.title)
        }
        
        
        card.append(image,constant,price,);
        container.append(card);
       
        container2.append(name,description,btn)


       let tbody = document.querySelector("tbody")
        
      let tr1 = document.createElement('tr')
      
      let td1 = document.createElement('td')
      td1.innerText="Binding"

      let td2 = document.createElement('td')
      td2.innerText="Paperback"

      let tr2 = document.createElement('tr')
      
      let td3 = document.createElement('td')
      td3.innerText="Language"
      
      let td4 = document.createElement('td')
      td4.innerText="English"
     
      let tr3 = document.createElement('tr')
     
      let td5 = document.createElement('td')
      td5.innerText="Number Of Pages"
      
      let td6 = document.createElement('td')
      td6.innerText=data.volumeInfo.pageCount
      
      let tr4 = document.createElement('tr')
     
      let td7 = document.createElement('td')
      td7.innerText="Author"
      
      let td8 = document.createElement('td')
      td8.innerText=data.volumeInfo.authors
      
      let tr5 = document.createElement('tr')
     
      let td9 = document.createElement('td')
      td9.innerText="Publisher"
      
      let td10 = document.createElement('td')
      td10.innerText=data.volumeInfo.publisher

      let tr6 = document.createElement('tr')
     
      let td11 = document.createElement('td')
      td11.innerText="Isbn-10"
      
      let td12 = document.createElement('td')
      td12.innerText=data.volumeInfo.industryIdentifiers[0].identifier

      let tr7 = document.createElement('tr')
     
      let td13 = document.createElement('td')
      td13.innerText="Isbn-13"
      
      let td14 = document.createElement('td')
      td14.innerText=data.volumeInfo.industryIdentifiers[1].identifier
      
      tr1.append(td1,td2)
      tr2.append(td3,td4)
      tr3.append(td5,td6)
      tr4.append(td7,td8)
      tr5.append(td9,td10)
      tr6.append(td11,td12)
      tr7.append(td13,td14)
     tbody.append(tr1,tr2,tr3,tr4,tr5,tr6,tr7)
     
         

}

append(data)

// let btn = document.getElementById("btn")
// btn.onclick=()=>{
//     Namesearch(data.volumeInfo.title)
// }

const Namesearch =(el) => {
   
   window.open(`https://www.amazon.in/s?k=${el}&i=stripbooks&crid=1GRG4STLEHUCM&sprefix=shivaji%2Cstripbooks%2C351&ref=nb_sb_noss_1`,"_self");
    
}


const getIt = async (el) => {
    let res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${el}&key=AIzaSyBPyy1Lx0veEyDixS2W3lh5qgCBOIZqb_c&&maxResults=40&&orderBy=relevance`);
    let data = await res.json();
    console.log(data)
    appendtable(data.items)
}

getIt(data.volumeInfo.authors)

const appendtable=(data)=>{

    let tbody = document.querySelector("#Author")
  data.forEach((el)=>{

    let tr1 = document.createElement('tr')
    tr1.setAttribute("class","tr1")
   let td3=document.createElement('td')
   td3.innerText=el.volumeInfo.title;
   td3.style.color="rgb(113,161,203)"
   td3.style.cursor="Pointer"
   td3.style.textDecoration="underline"
   td3.onclick=()=>{
    append(el)
}

    let td1 = document.createElement('td')
    td1.innerText="Binding"

    let td2 = document.createElement('td')
    td2.innerText="Paperback"

    tr1.append(td3,td1,td2)
    
    tbody.append(tr1)

  })
    


}

// let si_out = document.getElementById("sign_out");
// si_out.onclick = () => {
//     localStorage.clear();
// }
