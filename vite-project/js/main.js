import '../css/style.css';
import { Menu, Name } from './menu';

console.log(Menu, Name);

document.querySelector(".switch").addEventListener("click", function(){
    if(document.body.classList.contains("dark", "warm")){
        document.body.classList.add("light");
        document.body.classList.remove("dark", "warm");
    } else {
        document.body.classList.add("dark")
        document.body.classList.remove("light");
    }
});

document.querySelector(".switch1").addEventListener("click", function(){
    if(document.body.classList.contains("dark", "light")){
        document.body.classList.add("warm");
        document.body.classList.remove("dark", "light");
    } else {
        document.body.classList.add("dark")
        document.body.classList.remove("warm");
    }
});