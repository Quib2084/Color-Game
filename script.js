
const easySqaures = 3;
const mediumSquares = 6;
const hardSquares = 9;

var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var response = document.querySelector("#response");


var numSquares = mediumSquares;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor(colors);
colorDisplay.textContent = pickedColor;

displaySquares(numSquares);

for (var i = 0; i < modes.length; i++) {
    modes[i].addEventListener("click", function () {

        modes[0].classList.remove("selected");
        modes[1].classList.remove("selected");
        modes[2].classList.remove("selected");

        this.classList.add("selected");

        if (this.textContent === "Easy") {
            numSquares = easySqaures;
        }
        else if (this.textContent === "Medium") {
            numSquares = mediumSquares;
        }
        else {
            numSquares = hardSquares;
        }
        displaySquares(numSquares);
    });
}

resetButton.addEventListener("click", function () {
    displaySquares(numSquares);
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                          Functions

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColor() {
    return "rgb(" + getRandInt(0, 255) + ", " + getRandInt(0, 255) + ", " + getRandInt(0, 255) + ")";
}

function generateRandomColors(numOfColors) {
    var colors = [];
    for (var i = 0; i < numOfColors; i++)
        colors.push(generateRandomColor());
    return colors;
}

function pickColor(colors) {
    return colors[getRandInt(0, colors.length - 1)];
}
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displaySquares(numSquares) {
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    response.textContent = "";

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        //Add initial Colors to the squares
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";

            //Add click listeners to the squares
            squares[i].addEventListener("click", function () {
                //grab color of square
                var clickedColor = this.style.backgroundColor;
                //compare with color of pickedColor
                if (clickedColor === pickedColor) {
                    response.textContent = "Correct";
                    resetButton.textContent = "Play Again!";
                    h1.style.backgroundColor = clickedColor;
                    changeColor(clickedColor);
                }
                else {
                    this.style.backgroundColor = "#232323";
                    response.textContent = "Try Again";
                }
            })
        }
        else
            squares[i].style.display = "none";

    }

}



