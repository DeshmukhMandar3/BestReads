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
        status:false,
        platform:form.platform.value,
        website:form.shop.value,
    }
   form.name.value=null;
   form.exp.value=null;
   form.file.value=null;
 let res= await fetch('https://my-nstagram.herokuapp.com/posts',{
    method: 'POST',
    body:JSON.stringify(obj),
    headers:{
        'Content-Type': 'application/json',

    },
 });
 let data=await res.json();
 //console.log(data);
    
    
}

// form function end 
// products start 
let body=document.getElementsByName('tbody');
const showData=async()=>{
    let res=await fetch(' https://my-nstagram.herokuapp.com/posts')
    let data= await res.json();
    console.log(data);
    
   append(data);

    


}

showData();
let tb=document.querySelector('tbody');
const append=(data)=>{
    tb.innerHTML=null;
    data.forEach((el)=>{
        let tr=document.createElement('tr');
    let name=document.createElement('td');
    name.innerText=el.name;
    let media=document.createElement('td');
    let img=document.createElement('href');
    img.innerText=el.thumbnil;
    media.append(img);
    let dsc=document.createElement('td');
    dsc.innerText=el.exp;
    let status=document.createElement('td');
    status.innerText=el.status;
    tr.append(name,media,dsc,status);
    tb.append(tr);

    });
    
}
// products  end here 
// statusbar items 
const getStatus=async()=>{
    let apr=document.getElementById('approved');
    let faild=document.getElementById('faild');
    let review=document.getElementById('reviewe');
    let res = await fetch('https://my-nstagram.herokuapp.com/posts')
    let data= await res.json();
    let count=0;
    let c=0;
    data.forEach((el)=>{
        if(el.status)
        {
            count++;
        }
        else c++;
    });
    faild.innerText=0+' '+'Could not Pass Review';
    review.innerText=c+' '+'Under Review';
    let tPost=count+"/"+data.length+" " + 'Approved';
    apr.append(tPost);


}
getStatus();


let si_out = document.getElementById("sign_out");
si_out.onclick = () => {
    window.location.href="index.html";
    localStorage.clear();
  
}

