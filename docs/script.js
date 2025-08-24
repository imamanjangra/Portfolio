let menu_btn = document.querySelector(".menu");
let menu_data = document.querySelector(".menu_data");
let same_a = document.querySelectorAll(".same_a");

let menu_v = true;
menu_btn.addEventListener("click" , ()=>{
    menu_data.classList.toggle('hidden')
  
})

same_a.forEach(btn => {
    btn.addEventListener('click' , ()=>{
        menu_data.classList.add("hidden");
    })
});