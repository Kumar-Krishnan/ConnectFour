$(document).ready(function() {

   //starting grid that is 7x6 to represent grid for game logic. 0 = empty, 1= player 1 tile, 2 = player 2 tile.
   const greaterObjectArray = [[0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0]]

   console.log(greaterObjectArray)
// 

// Global variables that count play count and win counts.
playCount = 1
playerOneWinCount = 0
playerTwoWinCount = 0

const ClickableObject = {

    changeColor : function (x){
        let newValue = 0
        // using modue to determine which value to assign to grid, modulusing ever increasing playcount by 2
        if (playCount%2 === 1) {
            newValue = 1

        } 
        else {
            newValue = 2

        }
        // skip over tiles that already have a red or black color value (1, or 2) and assign the new player color to the first element in the column that was clicked.
        for (checker = 0; checker < 6; checker++){
            if (greaterObjectArray[checker][x] !== 0) {
                continue
            } else {
                greaterObjectArray[checker][x] = newValue

                var columnCoordinate = x.toString()
                var columnCoordinateName = ".col" + columnCoordinate
                var rowCoordinate = checker.toString()
                var rowCoordinateName = ".row" + rowCoordinate
            
                const changedBox = $(rowCoordinateName, columnCoordinateName)
                if (newValue === 1) {
                $(changedBox).css("background-color", "black")
                } else if (newValue === 2){
                $(changedBox).css("background-color", "red")    
                }


                WinChecker.horizontalWinner()
                WinChecker.verticalWinner()
                WinChecker.upDiagonalWinner()
                WinChecker.downDiagonalWinner()
                
                playCount = playCount +1 

                console.log(greaterObjectArray)                
                
                break
            }
        }
    }
}









const WinChecker = {

    horizontalWinner : function() {
        for (let row = 0; row < 6; row++){
            for (let column = 0; column < 6; column++) {
                if (greaterObjectArray[row][column] === greaterObjectArray[row][column+ 1] && greaterObjectArray[row][column] === greaterObjectArray[row][column+2] && greaterObjectArray[row][column] === greaterObjectArray[row][column+3] && greaterObjectArray[row][column] !== 0) {
                    WinAssignAndReset.winConditionMet()
                    console.log("YOU ARE A WINNER!")
                    break
                }
                else {
                    continue
                    }                     
            }
        }
    },

    verticalWinner : function() {
        for (let row = 0; row < 3; row++){
            for (let column = 0; column < 7; column++) {
                if (greaterObjectArray[row][column] === greaterObjectArray[row+1][column] && greaterObjectArray[row][column] === greaterObjectArray[row+2][column] && greaterObjectArray[row][column] === greaterObjectArray[row+3][column] && greaterObjectArray[row][column] !== 0) {
                    WinAssignAndReset.winConditionMet()
                    console.log("YOU ARE A WINNER!")
                    break
                }
                else {
                    continue
                    }                     
            }
        }
    },

    upDiagonalWinner : function() {

        for (let row = 0; row < 2; row++){

            for (let column = 0; column < 3; column++) {
                if (greaterObjectArray[row][column] === greaterObjectArray[row+1][column+1] && greaterObjectArray[row][column] === greaterObjectArray[row+2][column+2] && greaterObjectArray[row][column] === greaterObjectArray[row+3][column+3] && greaterObjectArray[row][column] !== 0) {
                    WinAssignAndReset.winConditionMet()
                    console.log("YOU ARE A WINNER!")
                    break
                }
                else {
                    continue
                    }                     
            }
        }
    },


    downDiagonalWinner : function() {

        for (let row = 5; row > 2; row--){
            for (let column = 0; column < 3; column++) {
                if (greaterObjectArray[row][column] === greaterObjectArray[row-1][column+1] && greaterObjectArray[row][column] === greaterObjectArray[row-2][column+2] && greaterObjectArray[row][column] === greaterObjectArray[row-3][column+3] && greaterObjectArray[row][column] !== 0) {
                    WinAssignAndReset.winConditionMet()
                    console.log("YOU ARE A WINNER!")
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

const WinAssignAndReset = {
    winConditionMet : function() {
        if (playCount % 2 === 1) {
            playerOneWinCount++
        }
        else{
            playerTwoWinCount++
        }
        
        this.updateGameBoard()
        $('.row').css("background-color", "white")
        //resets every single array inside the array greaterobjectarray to 0 values and creates a blank game board again.
        greaterObjectArray[0] = [0,0,0,0,0,0,0]
        greaterObjectArray[1] = [0,0,0,0,0,0,0]
        greaterObjectArray[2] = [0,0,0,0,0,0,0]
        greaterObjectArray[3] = [0,0,0,0,0,0,0]
        greaterObjectArray[4] = [0,0,0,0,0,0,0]
        greaterObjectArray[5] = [0,0,0,0,0,0,0]
        playCount = 1
    },

    updateGameBoard : function() {
        $('#playerOneScore').text(playerOneWinCount)
        $('#playerTwoScore').text(playerTwoWinCount)
    }
}






// pulls column/x value  of column that was clicked from game board and assigns it to Xclick. Xclick is then fed into changeGrid function.
$('.col').click(function(){
    let xClick = $(this).attr('x')
    ClickableObject.changeColor(xClick)
})

});