const getSms=async()=>{
    let res= await fetch('https://my-nstagram.herokuapp.com/sms')
    let sms=await res.json();
    appendSms(sms);
}
let tbody=document.querySelector('tbody');
let c=0;
const appendSms=(sms)=>{
  sms.forEach((el)=>{
    let tr=document.createElement('tr');
    let id=document.createElement('td');
    id.innerText=c++;
    let name =document.createElement('td');
    name.innerText=el.first_name+" "+el.Last_name;
    let email=document.createElement('td');
    email.innerText=el.email;
    let Phone=document.createElement('td');
    Phone.innerText=el.Phone;
    let msg=document.createElement('td');
    msg.innerText=el.Message;
    tr.append(id,name,email,Phone,msg);
    tbody.append(tr);
  }) ;
}
window.addEventListener('load', (event) => {
    getSms();
  });
