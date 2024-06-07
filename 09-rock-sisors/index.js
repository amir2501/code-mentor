let first = document.getElementById("1");
let second = document.getElementById("2");
let third = document.getElementById("3");
let option  = document.getElementById("option")
let clicked = document.getElementById("clicked");
let random_img = document.getElementById("random_img");
let user_choose = document.getElementById("user_choose");


//
// let paper = 0;
// let rock = 1;
// let scissors = 2;

let clicked_element;
//
// random_img.src = "./images/icon-scissors.svg"


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
            user_choose.src = "./images/icon-paper.svg";
            check_winner();
            break;
        case 2:
            option.classList.add("hidden");
            clicked.classList.remove("hidden");
            user_choose.src = "./images/icon-scissors.svg";
            check_winner();
            break;
        case 3:
            option.classList.add("hidden");
            clicked.classList.remove("hidden");
            user_choose.src = "./images/icon-rock.svg";
            check_winner();
            break;
    }
}

function check_winner(){
    let computer_chose =  Math.floor(Math.random() * 3);
    computer_chose === 0 && random_img.src(".images/icon-paper.svg");
    computer_chose === 2 && random_img.src(".images/icon-scissors.svg");
    computer_chose === 3 && random_img.src(".images/icon-rock.svg");

    clicked_element === 1 &&  computer_chose === 0 && alert("draw")
    clicked_element === 1 &&  computer_chose === 1 && alert("lose")
    clicked_element === 1 &&  computer_chose === 2 && alert("win")
    clicked_element === 2 &&  computer_chose === 0 && alert("win")
    clicked_element === 2 &&  computer_chose === 1 && alert("draw")
    clicked_element === 2 &&  computer_chose === 2 && alert("lose")
    clicked_element === 3 &&  computer_chose === 0 && alert("lose")
    clicked_element === 3 &&  computer_chose === 1 && alert("win")
    clicked_element === 3 &&  computer_chose === 2 && alert("draw")

}

