
window.onload = () => {

    var cannon = document.getElementById("cannon");

    /*
    document.addEventListener('keydown', function (event) {
        var cannon_board_c = cannon_board.parentElement.getBoundingClientRect();

        if (event.code == 'KeyD' || event.code == 'ArrowRight') {
            let goLeft = cannon.offsetLeft
            if (goLeft >= (cannon_board_c.width - cannon.getBoundingClientRect().width - 5)) { }
            else {
                cannon.style.left = goLeft + 5 + "px"
            }

        }

        else if (event.code == 'KeyA' || event.code == 'ArrowLeft') {
            let goLeft = cannon.offsetLeft
            if (goLeft <= 0) { }
            else {
                cannon.style.left = goLeft - 5 + "px"
            }
        }

    });
    */

    var events = {};

    document.addEventListener('keydown', function (e) {
        events[e.keyCode] = true;
        action();
    });

    document.addEventListener('keyup', function (e) {
        events[e.keyCode] = false;
    });

    function action() {
        /**/
        if (events[37]) {
            let goLeft = cannon.offsetLeft
            if (goLeft <= 0) { }
            else {
                cannon.style.left = goLeft - 5 + "px"
            }
        }
        /**/
        if (events[39]) {
            var cannon_board_c = cannon_board.parentElement.getBoundingClientRect();
            let goLeft = cannon.offsetLeft
            if (goLeft >= (cannon_board_c.width - cannon.getBoundingClientRect().width - 5)) { }
            else {
                cannon.style.left = goLeft + 5 + "px"
            }
        };
        /**/
        if (events[32]) {
            console.log("fire");
        }
        /**/
        else if (events[32] && events[37]) {
            console.log('fire');

            let goLeft = cannon.offsetLeft
            if (goLeft <= 0) { }
            else {
                cannon.style.left = goLeft - 5 + "px"
            }
        }
        /**/
        else if (events[32] && events[39]) {
            console.log('fire');

            var cannon_board_c = cannon_board.parentElement.getBoundingClientRect();
            let goLeft = cannon.offsetLeft
            if (goLeft >= (cannon_board_c.width - cannon.getBoundingClientRect().width - 5)) { }
            else {
                cannon.style.left = goLeft + 5 + "px"
            }
        }
    }





    cannon.onclick = () => {
        var cannon_c = cannon.parentElement.getBoundingClientRect();
        console.log(cannon_c);
    }



}
