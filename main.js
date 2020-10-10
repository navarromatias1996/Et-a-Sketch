let container = document.getElementById("container");
let btn = document.getElementById("btn");
let colours = ['red', 'blue', 'green', 'orange', 'black', 'purple'];

makeRows(14, 85);

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
    $('div').hover(function () {
        let grids = document.getElementsByClassName("grid-item");
        if ($(this).hasClass('grid-item')) {
            for (let i = 0; i < grids.length; i++) {
                $(this).css("background-color", "black");
            }
        }
    });
}
window.addEventListener('keydown', function (e) {
    let grids = document.getElementsByClassName("grid-item");
    if (e.code == "KeyC") {
        let arr = Array.from(grids);
        for (i = 0; i <= arr.length; i++) {
            $(arr[i]).css("background-color", "white");
        }
    } else if (e.code == "KeyM") {
        let rows = prompt('Enter rows quantity');
        let cols = prompt('Enter columns quantity');
        makeRows(rows, cols);


    }
});



