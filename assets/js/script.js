function menu(){
    
    let h2s = document.querySelectorAll("main > aside h2");

    for(h2 of h2s){
        
        h2.addEventListener('click', function(event){
            
            let title = event.target;
            let dataNav = title.getAttribute("data-nav");
            let ul = document.querySelector("ul[data-nav='" + dataNav + "']");


            ul.classList.toggle("close");
        });
    }
    
    let menubtn = document.getElementById("menu-btn");
    
    menubtn.addEventListener('click', function(){
        
        let header = document.querySelector("body > header > section");
        header.classList.toggle("open");
        
        let aside = document.querySelector("body > main > aside");
        aside.classList.toggle("open");
        
        let main = document.querySelector("body > main > section");
        
        if(aside.classList.contains("open")){
            main.style.gridColumn = "";
        }else{
            main.style.gridColumn = "1 / 3";
        }
    });
}
window.addEventListener("DOMContentLoaded", function(){
    menu();

});