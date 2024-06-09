let first = document.getElementById("1");
let second = document.getElementById("2");
let third = document.getElementById("3");
let option  = document.getElementById("option")
let clicked = document.getElementById("clicked");
let random_img = document.getElementById("random_img");
let user_choose = document.getElementById("user_choose");
let score = document.getElementById("score");
let play_again = document.getElementById("play_again");
let user_chose_li = document.getElementById("user_chose_li");
let computer_chose_li = document.getElementById("computer_chose_li");
let win_status = false;
let starter_count = 12;
let user_status = document.getElementById("user_status");
let status = "";
let user_won = document.getElementById("user_won");
let computer_won = document.getElementById("computer_won");

score.innerHTML = `${starter_count}`



//
// let paper = 0;
// let rock = 1;
// let scissors = 2;

let clicked_element;
//
// random_img.src = "./images/icon-scissors.svg"


first.addEventListener("click", () => {
   clicked_element = 1;
    check(clicked_element)
});

second.addEventListener("click", () => {
     clicked_element = 2;
    check(clicked_element)
})

third.addEventListener("click", () => {
     clicked_element = 3;
    check(clicked_element)
})


function check_winner(){
    let computer_chose =  Math.floor(Math.random() * 3);

    computer_chose_li.classList.contains("yellow") && computer_chose_li.classList.remove("yellow");
    computer_chose_li.classList.contains("red") && computer_chose_li.classList.remove("red");
    computer_chose_li.classList.contains("blue") && computer_chose_li.classList.remove("blue");
    computer_won.classList.contains("gradient") && computer_won.classList.remove("gradient");
    user_won.classList.contains("gradient") && user_won.classList.remove("gradient");



    computer_chose === 0 && (random_img.src = "./images/icon-paper.svg") && (computer_chose_li.classList.add("blue"));
    computer_chose === 1 && (random_img.src = "./images/icon-scissors.svg") && (computer_chose_li.classList.add("yellow"));
    computer_chose === 2 && (random_img.src = "./images/icon-rock.svg") && (computer_chose_li.classList.add("red"));

    (clicked_element === 1 &&  computer_chose === 0) && (win_status = "draw") ;
    (clicked_element === 1 &&  computer_chose === 1) && (win_status = false);
    (clicked_element === 1 &&  computer_chose === 2) && (win_status = true);
    (clicked_element === 2 &&  computer_chose === 0) && (win_status = true);
    (clicked_element === 2 &&  computer_chose === 1) && (win_status = "draw");
    (clicked_element === 2 &&  computer_chose === 2) && (win_status = false);
    (clicked_element === 3 &&  computer_chose === 0) && (win_status = false);
    (clicked_element === 3 &&  computer_chose === 1) && (win_status = true);
    (clicked_element === 3 &&  computer_chose === 2) && (win_status = "draw");
    (win_status && win_status !== "draw") && starter_count++;
    (!win_status && win_status !== "draw") && starter_count--;
    (win_status === "draw") && ( status = "Draw") && (user_won.classList.remove("gradient")) && (computer_won.classList.remove("gradient"));
    (win_status === true) && ( status = "You win") && (user_won.classList.add("gradient"));
    (win_status === false) && ( status = "You lose") && (computer_won.classList.add("gradient"));
    user_status.innerHTML = `${status}`
    score.innerHTML = `${starter_count}`;
    console.log(computer_chose);
}

play_again.addEventListener("click", function (){
    option.classList.remove("hidden");
    clicked.classList.add("hidden");
});

function check(element) {
    switch (element){
        case 1:
            option.classList.add("hidden");
            clicked.classList.remove("hidden");
            user_choose.src = "./images/icon-paper.svg";
            user_chose_li.classList.add("blue");
            user_chose_li.classList.remove("yellow");
            user_chose_li.classList.remove("red");
            check_winner();
            break;
        case 2:
            option.classList.add("hidden");
            clicked.classList.remove("hidden");
            user_choose.src = "./images/icon-scissors.svg";
            user_chose_li.classList.add("yellow");
            user_chose_li.classList.remove("blue");
            user_chose_li.classList.remove("red");
            check_winner();
            break;
        case 3:
            option.classList.add("hidden");
            clicked.classList.remove("hidden");
            user_choose.src = "./images/icon-rock.svg";
            user_chose_li.classList.add("red");
            user_chose_li.classList.remove("yellow");
            user_chose_li.classList.remove("blue");
            check_winner();
            break;
    }
}

