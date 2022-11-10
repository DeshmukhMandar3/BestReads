let data = JSON.parse(localStorage.getItem("bookdetails")) || [];
console.log(data)
const append=(data)=>{
    let container=document.getElementById("container");
    container.innerHTML=null;
    
    

        let card=document.createElement("div");
        card.setAttribute("class","card");

        let image=document.createElement("img");
        image.setAttribute("class","image");
        image.src=data.volumeInfo.imageLinks.thumbnail;

        let constant = document.createElement("p");
        constant.innerText = "Buy it at best price from here"
        constant.setAttribute("class","constant")

        let price = document.createElement("p")
        if(data.saleInfo.saleability== "FOR_SALE"){
        price.innerText="Rs: "+(data.saleInfo.listPrice.amount);
        }
        else{
            price.innerText="Rs.:NOT FOR SALE "  
        }
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
        

        let more_details=document.createElement("button");
        more_details.setAttribute("class","more_details");
        more_details.innerHTML="More Details";
        more_details.onclick=()=>{
            see_details(el);
        }

        bottom.append(rating,more_details);
        card.append(image,constant,price,name,authors,bottom);
        container.append(card);
    


}


append(data)
