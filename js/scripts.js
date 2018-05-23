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

// Clickable object
playCount = 1

const ClickableObject = {

    changeColor : function (x){
        newValue = 0
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
                greaterObjectArray[checker][x] = newValue;
                playCount = playCount +1 
                // const xCoordinateElements = $("div[x='x']")
                // const exactCoordinateElements = $("xCoordinateElements[y='checker']")
                // console.log(exactCoordinateElements)
                // $(exactCoordinateElements).css("background-color" , "red")
                // // console.log(xCoordinateElements)

                var columnCoordinate = x.toString();
                var columnCoordinateName = ".col" + columnCoordinate
                var rowCoordinate = checker.toString();
                var rowCoordinateName = ".row" + rowCoordinate
                // console.log(columnCoordinateName)
                // console.log(rowCoordinateName)
                // if (newValue === 1) {
                //     $('.rowCoordinateName.columnCoordinateName.columnCoordinateName').css("background-color" , "purple" )
                // } else {
                //     $('.rowCoordinateName.columnCoordinateName.columnCoordinateName').css("background-color" , "green" )
                // }
                const changedBox = $(rowCoordinateName, columnCoordinateName);
                $(changedBox).css("background-color", "red")
                
                break
            }
        }

       



    }
}
$('.col').click(function(){
    
    let conversionCount = 0
    let xClick = $(this).attr('x')
    // var yClick = $(this).attr('y')
    // if (yClick = 0 && conversionCount === 0) {
    //     yClick = 6
    //     conversionCount++
    // } else if (yClick = 1 && conversionCount === 0) {
    //     yClick = 5
    //     conversionCount++
    // } else if (yClick = 2 && conversionCount === 0) {
    //     yClick = 4
    //     conversionCount++
    // } else if (yClick = 4 && conversionCount === 0) {
    //     yClick = 2
    //     conversionCount++
    // } else if (yClick = 5 && conversionCount === 0) {
    //     yClick = 1
    //     conversionCount++
    // } else if (yClick = 6 && conversionCount === 0) {
    //     yClick = 0
    //     conversionCount++
    // } else if (conversionCount === 1) {
    //     yClick = yClick
    // }
    
    // $(event.target).off();
    console.log(xClick)

    ClickableObject.changeColor(xClick)
    console.log(greaterObjectArray)
})

});