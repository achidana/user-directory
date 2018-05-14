const x=document.querySelector('button')
x.addEventListener('click',function(){
    if(document.querySelector('#name').value=="")
    {
    alert("PLEASE ENTER NAME")
    return
    }
const y= document.querySelector('#pick_me')
y.textContent=document.querySelector('#name').value
})