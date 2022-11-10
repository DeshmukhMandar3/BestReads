// tab switching 
let btn_click=document.querySelectorAll('.btn_container');
let nav =document.querySelectorAll('.nav-tab');
const tabSwitch=(index,color)=>{
    btn_click.forEach((node)=>{
        node.style.backgroundColor="";
        node.style.color="";
        node.style.border='none';

    });
    btn_click[index].style.backgroundColor='white';
    btn_click[index].style.border='1px solid '
    // btn_click[index].style.borderRight='none'

    btn_click[index].style.color=color;
    nav.forEach((node)=>{
        node.style.display='none';
    });
    
    nav[index].style.display="block";
   
}
tabSwitch(0,' #7b7b7b');
// tab switch end 


// form  function 
let submit=document.getElementById('submit');
submit.disabled=true;
let file=document.getElementById('file');
file.onchange=()=>{
    imageHandle();
}
let imgUrl;
const imageHandle=async()=>{
    let img = document.getElementById('file');
    let ac_img=img.files[0];
    let form=new FormData();
    form.append('image',ac_img);
    let res=await fetch(`https://api.imgbb.com/1/upload?key=7653934e21bf1f5ec0f422196404d69f`,{
        method:'POST',
        body:   form,
});
let data=await res.json()
submit.disabled=false
imgUrl=data.data.url;
console.log(data.data.url);



}
let form = document.querySelector('form')




const getData=async(e)=>{
    e.preventDefault();
    let obj={
        id:Date.now(),
        name:form.name.value,
        exp:form.exp.value,
        thumbnil:imgUrl,
        platform:form.platform.value,
        website:form.shop.value,
    }
    var arr=[];
    arr.push(obj);
 let res= await fetch('http://localhost:3000/posts',{
    method: 'POST',
    body:JSON.stringify(arr),
    headers:{
        'Content-Type': 'application/json',

    },
 });
 let data=await res.json();
 console.log(data);
    
    
}

// form function end 



