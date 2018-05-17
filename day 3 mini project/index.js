let arr=[];

let form= document.querySelector('form');

form.addEventListener('submit',function(ev){
ev.preventDefault();
arr.push(form.box.value);
console.log(arr);
populate(form.box.value);
form.box.value="";


   
});

function populate(item){
     
    const del =document.createTextNode("DELETE");
    const edit_text=document.createTextNode("EDIT")
    let ls=document.getElementById("listSpace");
    let li=document.createElement("li");
    let button= document.createElement("button");
    let edit=document.createElement("button");
    button.style.margin="10px";
    button.appendChild(del);
    edit.appendChild(edit_text);
    li.innerHTML=item;
    li.appendChild(button);
    li.appendChild(edit);
    ls.appendChild(li);

    button.addEventListener("click",function(){
        ls.removeChild(li);
    });

    edit.addEventListener("click",function(){
        var response=prompt("Edit your text", "");
        if(response!="" && response!=null)
        {
            li.childNodes[0].nodeValue=response;
        }
    });
    

        
    

}
