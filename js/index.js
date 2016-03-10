$(document).ready(function() {
    //make table

    var counter = 1;

    var content = "<table class='table table-bordered text-center'>"
    for(i = 0; i < 10; i++){
        content += '<tr>';
        for(j = 0; j < 10; j++) {
            var isPrimeNumber = calculateIfPrimeNumber(counter);
            if(isPrimeNumber) {
                content += '<td style="background-color: RED;: ">' + counter + '</td>';
            }
            else {
                content += '<td>' + counter + '</td>';
            }
            counter++;
        }
        content += '</tr>';
    }
    content += "</table>"

    $('#here_table').append(content);

});

function calculateIfPrimeNumber(num){
    var result = num != 1;
    for(var i = 2; i < num; i++){
        if(num % i == 0){
            result = false;
            break;
        }
    }
    return result;
}
