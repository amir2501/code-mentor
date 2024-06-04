let first = document.getElementById("1");
let second = document.getElementById("2");
let third = document.getElementById("3");
let option  = document.getElementById("option")
let clicked = document.getElementById("clicked");

let clicked_element;


first.addEventListener("click", function() {

   clicked_element = 1;
    check()
});

second.addEventListener("click", function() {

     clicked_element = 2;
    check()

})

third.addEventListener("click", function() {

     clicked_element = 3;
    check()

})

function check(){
    switch (clicked_element){
        case 1:
            option.classList.add("hidden");
            clicked.classList.remove("hidden");
            alert(clicked_element)
            break;
        case 2:
            option.classList.add("hidden");
            clicked.classList.remove("hidden");
            alert(clicked_element)
            break;
        case 3:
            option.classList.add("hidden");
            clicked.classList.remove("hidden");
            alert(clicked_element)
            break;
    }
}
