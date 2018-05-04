$(document).ready( function () {

    var frameCounter = 0;
    var scorePosition = 0;
    var strikeSymbol = "X";

    var xCount = 0;

    var array = [];


    $("#button0").click(function () {

        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 0);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("0");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);

    });

    $("#button1").click(function () {

        array.push("1");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);


    });

    $("#button2").click(function () {

        array.push("2");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);




        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 2);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

    });

    $("#button3").click(function () {

        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 3);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("3");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);
    });

    $("#button4").click(function () {

        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 4);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("4");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);
    });

    $("#button5").click(function () {

        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 5);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("5");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);
    });

    $("#button6").click(function () {

        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 6);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("6");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);
    });

    $("#button7").click(function () {

        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 7);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("7");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);
    });

    $("#button8").click(function () {

        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 8);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("8");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);
    });

    $("#button9").click(function () {

        if (frameLock(frameCounter,  scorePosition)) {
            updateRollDisplay(scorePosition, frameCounter, 9);
            scorePosition += 1;
        }

        if(scorePosition === 2) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("9");

        if (array.length === 20) {
            sendScore(array);
        }

        console.log("Array's length on the go... " + array.length);
    });

    $("#button10").click(function () {

        updateRollDisplay(scorePosition + 1, frameCounter, strikeSymbol);

        scorePosition += 1;

        if(scorePosition === 1) {
            scorePosition = 0;
            frameCounter += 1;
        }

        array.push("X");
        array.push("");
        xCount++;

        if (xCount >= 10){



        } else {
            if (array.length >= 22) {
                sendScore(array);
            }

        }


        console.log("Array's length on the go... " + array.length);
    });

    console.log("Array's length on the go... " + array.length);




});

function sendScore(array) {

        console.log("In method with length = " + array.length);

        $.ajax({

            type: "POST",
            url: "http://localhost:8080/scores/compute?scores=" + array,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            success: function (output) {

                var score = "output";
                console.log("success" + output);
                $(".btn-toolbar").hide();
                $('#gameOver').hide().addClass('game_over').html('<h1>Game Over!</h1>' + output).fadeIn(1000).fadeOut(1000, function () {
                    $('#gameOver').html('<h1><a>Final Score:</a></h1>').html(output).fadeIn(1000);
                });
                $("#test1").show();

            },
            error: function (result) {
                console.log("error" + result);

            }

        });
}

function updateRollDisplay(position, currFrame, displayContent) {
    $('#scoresheetTable tr:eq(1) td:eq(' + ((currFrame*2)+position) + ')').html(displayContent);
}


function frameLock(frameCounter, scorePosition) {

    if(frameCounter === 0 && scorePosition === 0 || frameCounter === 0 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 1 && scorePosition === 0 || frameCounter === 1 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 2 && scorePosition === 0 || frameCounter === 2 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 3 && scorePosition === 0 || frameCounter === 3 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 4 && scorePosition === 0 || frameCounter === 4 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 5 && scorePosition === 0 || frameCounter === 5 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 6 && scorePosition === 0 || frameCounter === 6 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 7 && scorePosition === 0 || frameCounter === 7 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 8 && scorePosition === 0 || frameCounter === 8 && scorePosition === 1) {
        return true;
    }

    else if(frameCounter === 9 && scorePosition === 0 || frameCounter === 9 && scorePosition === 1) {
        return true;
    }

}
