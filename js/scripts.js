$(document).ready(function() {



        


   //starting grid that is 7x6 to represent grid for game logic. 0 = empty, 1= player 1 tile, 2 = player 2 tile.
   const greaterObjectArray = [[0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0]]
 

// Global variables that count play count and win counts and who started first last round.

    whichPlayerLeads = 1
    startCount = 0
    playCount = 1
    playerOneWinCount = 0
    playerTwoWinCount = 0

    //the consquences of player clicking a column element.

    const ClickableObject = {

        clickConsequence : function (x){
            let newValue = 0
            // using modulus to determine which value to assign to grid, modulusing ever increasing playcount by 2
            if (playCount%2 === 1) {
                newValue = 1

            } 
            else {
                newValue = 2

            }
            // assigns new value to array and calls all subsequent functions.
            GridChanger.gridAssigner(x,newValue)

        }
    }

// responsible for taking in user input through clicking and then changing the grid value and then pulling all cascading functions. 
const GridChanger = {

    gridAssigner : function(x,newValue) {
    
        for (row = 0; row < 6; row++){
            if (greaterObjectArray[row][x] !== 0) {
                continue
            } else {
                greaterObjectArray[row][x] = newValue
                ColorChanger.gridColorer(x,row,newValue)
                WinChecker.horizontalWinner()
                WinChecker.verticalWinner()
                WinChecker.upDiagonalWinner()
                WinChecker.downDiagonalWinner()
                playCount = playCount +1 
                WinAssignAndReset.resetDueToDraw()
                console.log(greaterObjectArray)

                 
                
                break
            }
        }
    }
}


// reponsible for parsing column visual grid attribute values into strings, conconating to .col and .row to choose specific grid box to be 
// colored and change color, based on modus of global play count to appropriate player color.
const ColorChanger = {

    gridColorer : function(x,y,player) {
        var columnCoordinate = x.toString()
        var columnCoordinateName = ".col" + columnCoordinate
        var rowCoordinate = y.toString()
        var rowCoordinateName = ".row" + rowCoordinate
    
        const changedBox = $(rowCoordinateName, columnCoordinateName)
        if (player === 1) {
        $(changedBox).css("background", 'linear-gradient(to top, rgb(231, 255, 255), rgb(114, 195, 222))')
        } else if (player === 2){
        $(changedBox).css("background", 'linear-gradient(to top, rgb(254, 150, 50),rgb(230, 50, 35)')    
        }

    }

}





    //goes through numerical array and looks for winning patterns and calls win function if found.
const WinChecker = {

    // checks for winning horizontal pattern.
    horizontalWinner : function() {
        for (let row = 0; row < 6; row++){
            for (let column = 0; column < 6; column++) {
                if (greaterObjectArray[row][column] === greaterObjectArray[row][column+ 1] && greaterObjectArray[row][column] === greaterObjectArray[row][column+2] && greaterObjectArray[row][column] === greaterObjectArray[row][column+3] && greaterObjectArray[row][column] !== 0) {
                    WinAssignAndReset.winConditionMet()
                    break
                }
                else {
                    continue
                    }                     
            }
        }
    },

    // checks for winning vertical pattern.
    verticalWinner : function() {
        for (let row = 0; row < 3; row++){
            for (let column = 0; column < 7; column++) {
                if (greaterObjectArray[row][column] === greaterObjectArray[row+1][column] && greaterObjectArray[row][column] === greaterObjectArray[row+2][column] && greaterObjectArray[row][column] === greaterObjectArray[row+3][column] && greaterObjectArray[row][column] !== 0) {
                    WinAssignAndReset.winConditionMet()
                    break
                }
                else {
                    continue
                    }                     
            }
        }
    },

    //checks for winning diagonal pattern starting from bottom and going up.
    upDiagonalWinner : function() {

        for (let row = 0; row < 2; row++){

            for (let column = 0; column < 4; column++) {
                if (greaterObjectArray[row][column] === greaterObjectArray[row+1][column+1] && greaterObjectArray[row][column] === greaterObjectArray[row+2][column+2] && greaterObjectArray[row][column] === greaterObjectArray[row+3][column+3] && greaterObjectArray[row][column] !== 0) {
                    WinAssignAndReset.winConditionMet()
                    break
                }
                else {
                    continue
                    }                     
            }
        }
    },

    //checks for winning diagonal pattern starting from top and going down.
    downDiagonalWinner : function() {

        for (let row = 5; row > 2; row--){
            for (let column = 0; column < 4; column++) {
                if (greaterObjectArray[row][column] === greaterObjectArray[row-1][column+1] && greaterObjectArray[row][column] === greaterObjectArray[row-2][column+2] && greaterObjectArray[row][column] === greaterObjectArray[row-3][column+3] && greaterObjectArray[row][column] !== 0) {
                    WinAssignAndReset.winConditionMet()
                    break
                }
                else {
                    continue
                    }                     
            }
        }
    }
}



// Assigning winner and resetting board

// updates player win count and alerts them when a player has won. This func used by win checkers. Resets the board.
const WinAssignAndReset = {
    winConditionMet : function() {
        let winner = ""
        if (playCount % 2 === 1) {
            playerOneWinCount++
            // alert("Player One Wins!")
            winner = "One Wins!"
        }
        else{
            playerTwoWinCount++
            // alert("Player Two Wins!") 
            winner = "Two Wins!"
        }
        $('#winnerDisplay').html(winner)
        $('.modal').modal('show');
        // WinDisplayer.showWinner(winner)
        this.updateGameScoreBoard()
        this.resetDueToWin()
    },

    // name reset due to win is misleading, it is used to reset in multiple occasions. Resets visual board, and numerical arrays to original values.
    resetDueToWin : function() {
        //resets every single array inside the array greaterobjectarray to 0 values and creates a blank game board again.
        $('.row').css("background", " rgba(16, 17, 17, 0.856)")
        greaterObjectArray[0] = [0,0,0,0,0,0,0]
        greaterObjectArray[1] = [0,0,0,0,0,0,0]
        greaterObjectArray[2] = [0,0,0,0,0,0,0]
        greaterObjectArray[3] = [0,0,0,0,0,0,0]
        greaterObjectArray[4] = [0,0,0,0,0,0,0]
        greaterObjectArray[5] = [0,0,0,0,0,0,0]
        if(whichPlayerLeads%2 === 0 && whichPlayerLeads != 1337){
            playCount = 0
        } else if (whichPlayerLeads%2 ===0 && whichPlayerLeads != 1337){
            playCount = 1
        }
        else if (whichPlayerLeads === 1337){
            playCount = 1 
            whichPlayerLeads = 0
        }
        whichPlayerLeads++
    },

    // pulls global player win counts and pushes them into appropriate html span elements to display scores
    updateGameScoreBoard : function() {
        $('#playerOneScore').text(playerOneWinCount)
        $('#playerTwoScore').text(playerTwoWinCount)
    },


    // resets the board if players have filled the board with no plausible winner and no more possible game moves. 
    // does this by seeing that all array values are non empty.
    resetDueToDraw : function() {

        let countOfNonZeros = 0
        for (row = 0; row <6;row++) {

            for(column = 0; column < 7; column++ ){

                if(greaterObjectArray[row][column]!== 0){
                    countOfNonZeros++
                    

                }

            }
              // ITS A DRAW!
            if (countOfNonZeros === 42) {
                $('#winnerDisplay').html("have both exhausted all options. This is a draw. Meaning neither party won. Or that neither lost. Depends on your perspective.")
                $('.modal').modal('show')
                // alert("You have both exhausted all options! Begin Anew!")
                this.resetDueToWin()
                
            }
        
        }
      
    },
    
    
    resetDueToButton : function (){
        // resets win counts, resets count for alternating players and resets lead player to player 1.
        playerOneWinCount = 0
        playerTwoWinCount = 0
        WinAssignAndReset.updateGameScoreBoard()
        whichPlayerLeads = 1337
        playCount = 1
        WinAssignAndReset.resetDueToWin()

    }
}




// new icebox project
const GridBattleInitiator = {

    lightCycleBegins : function () {
        $('.col').css("border-top-color", "red")
        $('.col').css("border-right-color", "red")
        $('.col').css("border-bottom-color", "red")
        // $('.col').css("border-left-color", "red")
    }
}


// all button interactions.
// pulls column/x value  of column that was clicked from game board and assigns it to Xclick. Xclick is then fed into changeGrid function.
    $('.col').click(function(){
        if(startCount > 0) {
            let xClick = $(this).attr('x')
            ClickableObject.clickConsequence(xClick)
        }
    })

    // allows columns to be clickable and for the game to begin.
    $('#startButton').click(function(){
        startCount = 1
        let audioBegin = new Audio('../audio/battle.mp3')

        audioBegin.play()
        GridBattleInitiator.lightCycleBegins()
    })

    //resets the player scores and board.
    $('#resetButton').click(WinAssignAndReset.resetDueToButton)


    // hides modal winner display event when user clicks outside body.
    $('body').click(function(){
        
        $('.modal').modal('hide')
    
    })

    
})

