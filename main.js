let btn = document.getElementById("btn");
let container = document.getElementById("container");
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
    let retry = false;
    if (e.code == "KeyC") {
        let arr = Array.from(grids);
        for (i = 0; i <= arr.length; i++) {
            $(arr[i]).css("background-color", "white");
        }
    } else if (e.code == "KeyM" || retry == true) {
        let rows = prompt('Enter rows quantity (max 100)');
        let cols = prompt('Enter columns quantity (max 100)');
        if(rows >100 || cols > 100){
        alert("Rows or cols number must be under 100m");
        }else{
     $(container).empty();
      makeRows(rows, cols);
    }
}});



