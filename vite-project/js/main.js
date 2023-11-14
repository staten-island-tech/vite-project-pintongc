import '../css/style.css';
import { Menu, Name } from './menu';

console.log(Menu, Name);

const button = {
    button: document.querySelector(".switch"),
};

document.querySelector(".switch").addEventListener("click", function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark")
        document.body.classList.remove("light");
    }
});