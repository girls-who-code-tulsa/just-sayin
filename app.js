//initialize our animations
new WOW().init();

//initialize our counter
var count = 0;

//called when the button is clicked
function mainAlert()
{
    //get name
    var name = $('#name').val();
    
    //show alert
    alert(name+", you're a beautiful unicorn!");
    
    // show count
    count++;
    $('#countAlert').show();
    $('#countAlert #number').text(count);
    
}


