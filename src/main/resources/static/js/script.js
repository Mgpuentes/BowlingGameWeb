
$(document).ready( function () {

    var frameCounter = 0;
    var scorePosition = 0;

    $("#button1").click(function () {

        var data = "1";
        var rows = document.getElementById('scoresheetTable').rows;

        $.ajax({

            type: "GET",
            url: "http://localhost:8080/scores/1?id=" + data,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            success: function (output) {

                console.log("success" + output);

                if (frameLock(frameCounter,  scorePosition)) {
                    updateRollDisplay(scorePosition, frameCounter, 1);
                    scorePosition += 1;
                }

                if(scorePosition === 2) {
                    scorePosition = 0;
                    frameCounter += 1;
                }

            },
            error: function (result) {
                console.log("error" + result);

            }

        });


    });

    $("#button2").click(function () {

        var data = 2;

        $.ajax({

            type: "POST",
            url: "http://localhost:8080/scores/2?id=" + data,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            success: function (output) {

                console.log("success" + output);
            },
            error: function (result) {
                console.log("error" + result);

            }

        });



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
    });

    $("#button10").click(function () {

        updateRollDisplay(scorePosition + 1, frameCounter, 10);

        scorePosition += 1;

        if(scorePosition === 1) {
            scorePosition = 0;
            frameCounter += 1;
        }
    });


});

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