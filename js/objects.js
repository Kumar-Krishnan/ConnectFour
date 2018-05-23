// var gridArray = [[object1,object2,object3,object4,object5,object6],[object1,object2,object3,object4,object5,object6],[object1,object2,object3,object4,object5,object6],[object1,object2,object3,object4,object5,object6],[object1,object2,object3,object4,object5,object6],[object1,object2,object3,object4,object5,object6],[object1,object2,object3,object4,object5,object6]];

// var displayArray = get.elementsbyclass('row')
// //maybe place inside objects, so that if a object if flipped, it triggers the graphical representation.
// var viewCreator = {




// }

// var gridInteractionEventHandler = {




// }


// Example Object properties {
//     valid: false
//     color:
//     ownerOfTile: noOne, Black, Red
// }

//  var winChecker = {



//     var checkerloop = function(){
//         //maybe three funcitons nested in this one. One horizontal check. One vertical. One diagonal.
//         numberOfRed = []
//         numberOfBlack = []
//         for(i = 0; ) {



//         }
//     }
//  }

//  var objectCreator = {


//  }


//  function gridCreator(x,y) {
//     this.x = x,
//     this.y = y,
//     this.valid = false,
//     this.color = "white"
// }

// var greaterObjectArray = []

//  for (x = 0; x < 7; x++) {

//     var newXArray = []

//     for (y = 0; y < 6; y++ ) {

//     var newYArray = [0,1,2]



//     newXArray.push(newYArray)
//     }

   
//     greaterObjectArray.push()
// }

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

var NewClickableObject = {
    addClick : function (xCoord,yCoord) {
        
        var newClickable = $([x ="xCoord
        
        "])
        $([x="#".addClass('clickable')

    }
}


changeColor : function (x){

    newValue = 0
    if (playCount%2 === 1) {
        newValue = 1
        greaterObjectArray[y][x] = 1
    } 
    else {
        newValue = 2
        greaterObjectArray[y][x] = 2
    }

    for (checker = 0; checker < 6; checker++){
        if (greaterObjectArray[x][checker] === 0)
            greaterObjectArray[x][checker] = newValue
            break;
    }


    playCount = playCount +1 



}



[[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0],
[0,0,0,0,0,0,0]]