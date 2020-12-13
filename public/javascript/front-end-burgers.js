//this file will handle all the javascript logic
//on the front end or on the client. We throw all of our ajax 
//requests inside of a call back function. The reason for that
// is because we dont want select elements before they are loaded
// onto the screen, without the callback function jquery would 
// be looking for elements that are not loaded yet.  
$(function(){
    $('.devour').on('click',function(event){
        var id = $(this).data('id')
        var isDevoured = $(this).data('isDevoured');

        var devouredState = {
            devoured:isDevoured;
        }

        $.ajax(`api/burgers/${id}`,{
            type:"PUT",
            data:devouredState
        }).then(
            function(){
                location.reload()
            }
        )
    })

    $('order-burger').on('submit',function(event){
        event.preventDefault();
        var newBurger = {
            name:$('#burger').val().trim()
        }

        $.ajax("/api/burgers",{
            type:"POST",
            data:newBurger
        }).then(
            function(){
                localtion.reload();
            }
        )
    })

})