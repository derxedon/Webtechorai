 $(document).ready(function() {
     $("#subidu").hide().show(3000);
     $("#stuff").load("home.html");

     $('.menuButton, .menuButton1, .menuButton2, .menuButton3').hover(function(){
         $(this).css("color", "gold");
     },
         function(){
         $(this).css("color", "burlywood");
         }
         );

     $('.menuButton').click(function () {
         $("#stuff").empty()
             .animate({width: '90%', height: '400px'}, "slow")
             .promise().done(function() {
             $("#stuff").load("home.html");
             });
     });

     $('.menuButton1').click(function(){
         $("#stuff").empty()
             .animate({width: '26%', height: '340px'}, "slow")
             .promise().done(function() {
             $("#stuff").load("booksform.html");
         });
     });

     $('.menuButton2').click(function(){
            $("#stuff").empty()
                .animate({width: '22%', height: '250px'}, "slow")
                .promise().done(function() {
                $("#stuff").load("authorform2.html");
            });
     });

     $('.menuButton3').click(function(){
         $("#stuff").empty()
             .animate({width: '35%', height: '250px'}, "slow")
             .promise().done(function() {
                 $("#stuff").load("kereses.html");
            });
     });
 });


/*
 function openAuthors() {
     $.getJSON('authors', function(data) {
         var table = $('<table></table>');
         table.append("<tr><th>Name</th><th>Nationality</th><th>Birth Date</th></tr>");
     });

     $.each(data, function(key, value){
         var row = $('<tr></tr>');
         var nameCell = $('<td> onClick="openBooks"('+"'" + value.name + "'"+')">' + value.name + '</td>');
         var nationCell = $('<td>' + value.nationality + '</td>');
         var birthDateCell = $('<td>' + value.birthDate + '</td>');
         row.append(nameCell);
         row.append(nationCell);
         row.append(birthDateCell);
         table.append(row);
     });
     $("#konyvek").html(table);
 }
*/