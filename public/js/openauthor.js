function openAuthors() {
    $.getJSON('authors', function(data) {
        var table = $('<table></table>');
        table.append("<tr><th>Name</th><th>Nationality</th><th>Birth Date</th></tr>");
    })

$.each(data, function(key, value){
    var row = $('<tr></tr>');
    var nameCell = $('<td> onClick="openBooks"('+"'"+value.name+"'"+1)">'+value.name+</td>');
    var nationCell = $('<td>'+value.nationality+'</td>');
    var birthDateCell = $('<td>'+value.birthDate+'</td>');
    row.append(nameCell);
    row.append(nationCell);
    row.append(birthDateCell);
    table.append(row);
});
   $("#konyvek").html(table);
}
