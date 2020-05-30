// Check off specific items by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");   
});

// Click on file cabinet to unarchive (unhide) all items
$(".fa-archive").click(function() {
    var items = document.querySelectorAll("li");

    items.forEach((item) => {
        item.style.display = "block";
    });
});

// Click on trash icon to delete item
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); //stops event from bubbling up
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li draggable=\"true\" ondragstart=\"drag(event)\"><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});

/* Drag and drop functionality */

var temp = {};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target);
    temp = ev.target;
}

function drop(ev) {
    ev.preventDefault();
    temp.style.display = "none";
}

