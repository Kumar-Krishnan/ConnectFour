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
    whichPlayerLeads = 1
    startCount = 0
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
            GridChanger.gridAssigner(x,newValue)
            // for (checker = 0; checker < 6; checker++){
            //     if (greaterObjectArray[checker][x] !== 0) {
            //         continue
            //     } else {
            //         greaterObjectArray[checker][x] = newValue


            //         ColorChanger.gridColorer(x,checker,newValue)
            //         WinChecker.horizontalWinner()
            //         WinChecker.verticalWinner()
            //         WinChecker.upDiagonalWinner()
            //         WinChecker.downDiagonalWinner()
            //         playCount = playCount +1 
            //         WinAssignAndReset.resetDueToDraw()

            //         console.log(playCount)
            //         console.log(greaterObjectArray)                
                    
            //         break
            //     }
            // }
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
            alert("Player One Wins!")
        }
        else{
            playerTwoWinCount++
            alert("Player Two Wins!")
        }
        
        this.updateGameScoreBoard()
        this.resetDueToWin()
    },

    resetDueToWin : function() {
        //resets every single array inside the array greaterobjectarray to 0 values and creates a blank game board again.
        $('.row').css("background", " rgba(16, 17, 17, 0.856)")
        greaterObjectArray[0] = [0,0,0,0,0,0,0]
        greaterObjectArray[1] = [0,0,0,0,0,0,0]
        greaterObjectArray[2] = [0,0,0,0,0,0,0]
        greaterObjectArray[3] = [0,0,0,0,0,0,0]
        greaterObjectArray[4] = [0,0,0,0,0,0,0]
        greaterObjectArray[5] = [0,0,0,0,0,0,0]
        if(whichPlayerLeads%2 === 0){
            playCount = 0
        } else {
            playCount = 1
        }
        whichPlayerLeads++
    },

    updateGameScoreBoard : function() {
        $('#playerOneScore').text(playerOneWinCount)
        $('#playerTwoScore').text(playerTwoWinCount)
    },

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
                alert("You have both exhausted all options! Begin Anew!")
                this.resetDueToWin()
                
            }
        
        }
      
    }
}

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
        $(changedBox).css("background", 'linear-gradient(to top, rgb(254, 229, 91),rgb(221, 115, 35)')    
        }

    }

}

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
    
                    console.log(playCount)
                    console.log(greaterObjectArray)                
                    
                    break
                }
            }
        }
    }




// pulls column/x value  of column that was clicked from game board and assigns it to Xclick. Xclick is then fed into changeGrid function.
    $('.col').click(function(){
        if(startCount > 0) {
            let xClick = $(this).attr('x')
            ClickableObject.changeColor(xClick)
        }
    })

    $('#startButton').click(function(){
        startCount = 1
    })
});