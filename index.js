const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");
const form = document.querySelector(".form");

form.addEventListener('submit', function(e){
   e.preventDefault();

   if(!input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        input.style.borderColor = "red";
        input.style.color = "red";
   }
});

input.addEventListener('input', function (e){
   input.style.borderColor = "rgba(77, 123, 243, 0.3)";
   input.style.color = "rgba(77, 123, 243, 0.8)";
});