var rumble = document.querySelector("h1");
if (rumble.innerHTML === "Let's Get Ready To Rumble") {

    var intro = new Audio(`sounds/rumble.mp3`);
    intro.play();
}

var click_button = document.querySelectorAll(".ele-btn");
for (var index = 0; index < click_button.length; index++) {

    click_button[index].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        if (buttonInnerHTML === 'Click Me or Press E') {
            change_event();
        } else if (buttonInnerHTML === 'Refresh Me or Press R') {
            refresh();
        } else {
            console.log(buttonInnerHTML);
        }
    });
}

document.addEventListener("keydown", function (keyboardEvent) {

    press_key(keyboardEvent.key);
})

function press_key(key) {

    switch (key) {

        case 'e':
        case 'E':
            change_event();
            break;

        case 'r':
        case 'R':
            refresh();
            break;

        default:
            console.log(key);
            break;
    }
}


function change_event() {
    // Change dice image 1

    var random_Number1 = Math.floor(Math.random() * 6) + 1;
    var random_Dice_Image_1 = `dice${random_Number1}.png`;
    document.querySelector(".img1").setAttribute("src", `images/${random_Dice_Image_1}`);

    // Change dice image 2

    var random_Number2 = Math.floor(Math.random() * 6) + 1;
    var random_Dice_Image_2 = `dice${random_Number2}.png`;
    document.querySelector(".img2").setAttribute("src", `images/${random_Dice_Image_2}`);

    // Winner = Compare the dice

    if (random_Number1 > random_Number2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
        var winner_1 = new Audio(`sounds/winner_1.mp3`)
        winner_1.play();

    } else if (random_Number1 < random_Number2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
        var winner_2 = new Audio(`sounds/winner_2.mp3`)
        winner_2.play();

    } else {
        document.querySelector("h1").innerHTML = "Draw!";
        var draw = new Audio(`sounds/draw.mp3`)
        draw.play();
    }
}


function refresh() {

    location.reload()
}