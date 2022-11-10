// tab switching 
let btn_click=document.querySelectorAll('.btn_container');
let nav =document.querySelectorAll('.nav-tab');
const tabSwitch=(index,color)=>{
    btn_click.forEach((node)=>{
        node.style.backgroundColor="";
        node.style.color="";

    });
    btn_click[index].style.backgroundColor='white';
    btn_click[index].style.color=color;
    nav.forEach((node)=>{
        node.style.display='none';
    });
    console.log(index);
    nav[index].style.display="block";
   
}
tabSwitch(0,' #7b7b7b');
// tab switch end 


