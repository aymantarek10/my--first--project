const lines = document.querySelectorAll(".line");
const button =document.getElementsByClassName("btn")[0];
let save = true;

const saveEdit = () => {
    if(save){
    button.innerHTML='Edit';
    save = false
    }else{
    button.innerHTML ='save';
    save = true ;
}
}

lines.forEach(line => {
    line.setAttribute("maxlength",line.offsetwidth/12);
})
    




 