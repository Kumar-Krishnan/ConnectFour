$(document).ready(function() {

   
   //for loop to create seven columns and place them in game cotainer, max width is set at 1/7th% of container
//    each div column is given the class "column1" , "column2", respectively based on order
    for (i = 0; i < 8; i++) {

        $column = '<div class="column" + i "></div>' ;

        $('.gameContainer').append($column); 
        $('.div+i').css(max-width: (1/7) * 100 + '%');
        $('.div+i').css(background-color: white);
        }

// for loop to create individual row elements inside each column

    for (j = 0; j < 8; j++) {

        var columnNumber = j;


        for(k = 0; k < 7; k++) {
            $row = '<div class="row' + 'k' + '</div>'
            $('.column' + 'columnNumber').append

        }


    }


});