$(document).ready(function () {
    $(".add_wishlist").click(function (e) {
        var product_id =  $(this).attr('product-id');
        var add_wishlist = $(this)
        $.ajax({
            type: 'POST',
            url: `/wishlist/add_to_wishlist/${product_id}`,
            success: function(res) {
                if ( res.status === "success" ){
                    $(add_wishlist[0].firstElementChild).removeClass("fa-heart-o empty");
                    $(add_wishlist[0].firstElementChild).addClass("fa-heart");
                    add_wishlist.css("color","red")
                    add_wishlist.off('click');
                    $("#count_wishlist")[0].innerHTML = parseInt($("#count_wishlist")[0].innerHTML) + 1
                }
            }
        })
    })
})
