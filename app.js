const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let arrOfIndex = [];
let clicked = true;
let count = 0;

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];


function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {

        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
    for (let color of colorArray) {

        const newDiv = document.createElement("div");

        newDiv.classList.add(color);

        newDiv.addEventListener("click", handleCardClick);

        gameContainer.append(newDiv);
    }
}

// TODO: Implement this function!
function handleCardClick(event) {

    if (!clicked) return;
    if (event.target === card1) return;
    event.target.style.backgroundColor = event.target.className;

    if (card1) {
        card2 = event.target;
    } else {
        card1 = event.target;
    }

    if (card2) {
        clicked = false;
        card2Index = shuffledColors.indexOf(card2.className);
        if (arrOfIndex.includes(card2Index)) {
            count += 2;
            card1.removeEventListener("click", handleCardClick);
            card2.removeEventListener("click", handleCardClick);
            card1 = null;
            card2 = null;
            arrOfIndex = []
            clicked = true;
        } else {
            setTimeout(function () {
                card1.style.backgroundColor = "";
                card2.style.backgroundColor = "";
                card1 = null;
                card2 = null;
                arrOfIndex = []
                clicked = true;
            }, 1000)
        }

    } else {

        const card1Index = shuffledColors.indexOf(card1.className);
        arrOfIndex.push(card1Index)

        const index2 = shuffledColors.indexOf(card1.className, 2);
        arrOfIndex.push(index2)

    }
    if (count === COLORS.length) {
        alert("end game")
    }
}

// when the DOM loads
createDivsForColors(shuffledColors);
