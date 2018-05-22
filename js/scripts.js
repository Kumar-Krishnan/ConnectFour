$(document).ready(function() {

   //for loop to create 42 elements for 2d array all initial values set to 0.
   var greaterObjectArray = []

   for (x = 0; x < 7; x++) {
   
       var newXArray = []
   
       for (y = 0; y < 6; y++ ) {
   
       var newYValue = 0
   
   
   
       newXArray.push(newYValue)
       }
   
      
       greaterObjectArray.push(newXArray)
   }

   console.log(greaterObjectArray)
// 

// Clickable object
playCount = 1

var ClickableObject = {

    changeColor : function (x,y){
        if (playCount%2 === 1) {
            greaterObjectArray[x][y] = 1
        } 
        else {
            greaterObjectArray[x][y] = 2
        }

        playCount = playCount +1 



    }
}
$('.clickable').click(function(){
    
    var conversionCount = 0
    var xClick = $(this).attr('x')
    var yClick = $(this).attr('y')
    if (yClick = 0 && conversionCount === 0) {
        yClick = 6
        conversionCount++
    } else if (yClick = 1 && conversionCount === 0) {
        yClick = 5
        conversionCount++
    } else if (yClick = 2 && conversionCount === 0) {
        yClick = 4
        conversionCount++
    } else if (yClick = 4 && conversionCount === 0) {
        yClick = 2
        conversionCount++
    } else if (yClick = 5 && conversionCount === 0) {
        yClick = 1
        conversionCount++
    } else if (yClick = 6 && conversionCount === 0) {
        yClick = 0
        conversionCount++
    } else if (conversionCount === 1) {
        yClick = yClick
    }
    
    $(this).removeClass('clickable')
    console.log(xClick, yClick)

    ClickableObject.changeColor(xClick, yClick)
    console.log(greaterObjectArray)
})

});