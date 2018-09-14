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

    $(".eatBurger").on("click", function(event){
        var id = $(this).data("id");
        var eaten = {devoured: true};

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(function(){
            console.log("Eating burger");
            location.reload();
        })
    })
})