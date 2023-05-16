
window.onload = () => {

    var cannon = document.getElementById("cannon");

    document.addEventListener('keydown', function (event) {
        var cannon_board_c = cannon_board.parentElement.getBoundingClientRect();
        //console.log(cannon_board_c);
        if (event.code == 'KeyD') {
            // console.log("D");
            let goLeft = cannon.offsetLeft
            // console.log(goLeft);
            if (goLeft >= (cannon_board_c.width - cannon.getBoundingClientRect().width - 5)) { }
            else {
                cannon.style.left = goLeft + 5 + "px"
            }

        }
        else if (event.code == 'KeyA') {
            //console.log("A");
            let goLeft = cannon.offsetLeft
            // console.log(goLeft);
            if (goLeft <= 0) { }
            else {
                cannon.style.left = goLeft - 5 + "px"
            }
        }
        /*Переделать чтобы можно было двигать пушку и стрелять одновременно*/
        if (event.code == 'Space') {
            console.log("fire");
        }
    });





    cannon.onclick = () => {
        var cannon_c = cannon.parentElement.getBoundingClientRect();
        console.log(cannon_c);
    }



}
