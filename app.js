
const item = document.querySelector("#item_box");
const todo = document.querySelector("#list_todo");

item.addEventListener(
    "keyup",
    function(event){
        // console.log(event.key)
        if(event.key == "Enter"){
            addtodo(this.value)
            this.value = ""
        }
    }
)

const addtodo = (item) =>{
const list_todo = document.createElement("li");
list_todo.innerHTML = `
${item}
<i class="fas fa-times"></i>
`;

list_todo.addEventListener (
    "click",
    function(){
        this.classList.toggle("one");
    }
)

list_todo.querySelector("i").addEventListener(
    "click",
    function(){
        list_todo.remove()
    }
)

todo.appendChild(list_todo)
}