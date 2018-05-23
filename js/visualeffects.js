for (checker = 0; checker < 6; checker++){
    if (greaterObjectArray[checker][x] !== 0) {
        continue
    } else {
        greaterObjectArray[checker][x] = newValue;
        
        // const xCoordinateElements = $("div[x='x']")
        // const exactCoordinateElements = $("xCoordinateElements[y='checker']")
        // console.log(exactCoordinateElements)
        // $(exactCoordinateElements).css("background-color" , "red")
        // // console.log(xCoordinateElements)

        var columnCoordinate = x.toString();
        var columnCoordinateName = "col" + columnCoordinate
        var rowCoordinate = checker.toString();
        var rowCoordinateName = "row" + rowCoordinate
        console.log(columnCoordinateName)
        console.log(rowCoordinateName)
        
        if (newValue === 1) {
            $('.rowCoordinateName.columnCoordinateName.columnCoordinateName').css("background-color" , "purple" )
        } else {
            $('.rowCoordinateName.columnCoordinateName.columnCoordinateName').css("background-color" , "green" )
        }


        playCount = playCount +1 
        break
    }
}