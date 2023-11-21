import '../css/style.css';

const DOMSelectors = {
    gallery: document.querySelector(".gallery"),
  };

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


document.querySelector(".switch2").addEventListener("click", function(){
    DOMSelectors.gallery.insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
        <div class="card-title">ASJKD</div>
        <div class="card-image"><img src="" alt=""></div>
        <div class="card-desciption">asjdkhsajdhsahji
        </div>
      </div>
      <div class="card">
        <div class="card-title">ASJKD</div>
        <div class="card-image"><img src="" alt=""></div>
        <div class="card-desciption">asjdkhsajdhsahji
        </div>
      </div>
      <div class="card">
        <div class="card-title">ASJKD</div>
        <div class="card-image"><img src="" alt=""></div>
        <div class="card-desciption">asjdkhsajdhsahji
        </div>
      </div>`
)});
