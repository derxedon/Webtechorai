$(document).ready(function(){


    $.getJSON('books', function( data ) {
        for (var i = 0; i < data.length; i++) {
            var konyv = data[i];
            $("#hogolyo").append("<tr><td>"+ konyv.title +"</td>"+
                "<td>"+ konyv.genre +"</td>"+
                "<td>"+ konyv.author +"</td>"+
                "<td>"+ konyv.quantity +"</td>"+
                "<td>"+ konyv.available +"</td>"+
                "<td>"+ konyv.publisher +"</td>"+
                "</tr>");
        }
    });
});