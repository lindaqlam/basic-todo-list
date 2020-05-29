// Check off specific items by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");   
});

// Click on file cabinet to archive (hide) all items
$(".fa-archive").click(function() {
    var items = document.querySelectorAll("li");

    items.forEach((item) => {
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

// Click on X to delete item
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
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});