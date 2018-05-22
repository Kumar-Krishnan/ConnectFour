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
$('clickable').click(ClickableObject.changeColor(this.attr(x),this.attr(y)))

});