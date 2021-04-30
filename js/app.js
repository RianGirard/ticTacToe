var nextFirst = "X";
var turn = "";
$(function() {
    $('button').click(function() {
        
        let player = ($(this).attr("id") === "btn-X") ? $("#player_X") : $(this).attr("id") === "btn-O" ? $("#player_O") : null;

        if (player) {   // player exists and is an HTML element. 
            let currentScore = parseInt(player.find('.player__score').text());
            player.find('.player__score').text(currentScore + 1);

        }

        setupNewRound();
    });

    setupNewRound();
});

function setupNewRound() {
    turn = nextFirst;
    // ternary example follows:
    //               T/F test      TRUE  FALSE
    nextFirst = nextFirst === 'X' ? 'O' : 'X';

    updateScoreBoard();

    $(".square")  // example of chaining functions off a selector
        .off()
        .empty()
        .addClass('square--active')
        .removeClass('square--O')
        .removeClass('square--X')
        .click(function() {
            $(this)
                .off()  // makes the square no longer selectable, once clicked by a player
                .removeClass('square--active')  // makes selected square no longer among the "active" squares for selection
                .text(turn)  // puts X or O into the square
                .addClass(`square--${turn}`);  // this adds the class for whichever player ("turn") went; makes the box red or green based on CSS
            toggleTurn();   // function will shift play to the other player     
        });
}

function toggleTurn() {
    // ternary e.g. if turn==X is TRUE, then turn=O; if FALSE, then turn=X;
    turn = (turn === 'X') ? 'O' : 'X';
    updateScoreBoard();
}


function updateScoreBoard() {
    if (turn === 'X') {
        $('#player_O').removeClass('is_turn');
        $('#player_X').addClass('is_turn');
    } else {
        $('#player_X').removeClass('is_turn');
        $('#player_O').addClass('is_turn');
    }
}

