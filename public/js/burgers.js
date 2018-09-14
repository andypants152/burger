$(function(){
    $("#addBurger").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Created new burger");
            location.reload();
        })
    })
})