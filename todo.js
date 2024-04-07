let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;


    /*let taskText = inp.value.trim();
    if (taskText !== "") {
        item.innerText = taskText;*/

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
 
    item.appendChild(delBtn);
    item.appendChild(checkbox);   
    ol.appendChild(item);

    
    //console.log("clicked!");
    //console.log(inp.value);
    inp.value = "";
});

ol.addEventListener("click",function(event){
    //console.dir(event.target.nodeName);
  // console.log("button clicked");
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});




/*let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
   delBtn.addEventListener("click",function(){
    let par = this.parentElement;
    console.log(par);
    par.remove();
    //console.log("element deleted");
   });
}*/