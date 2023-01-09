let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Judith Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];

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
        
        let span = document.getElementById("span");
        
        if(aside.classList.contains("open")){
            main.style.gridColumn = "";
        }else{
            main.style.gridColumn = "1 / 3";
        }
        
        if(!header.classList.contains("open")){
            span.classList.remove("bi-arrow-down-left-square-fill");
            span.classList.add("bi-arrow-left-square-fill");
        }else{
            span.classList.remove("bi-arrow-left-square-fill");
            span.classList.add("bi-arrow-down-left-square-fill");
        }
    });
}
window.addEventListener("DOMContentLoaded", function(){
    menu();

});