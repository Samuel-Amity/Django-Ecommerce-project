
document.addEventListener("DOMContentLoaded", function () {
    $('.plus-cart').click(function () {
        var id = $(this).attr("pid"); // Corrected: Removed .tostring()
        var em1 = this.parentNode.children[2];
        console.log("pid =", id);
        $.ajax({
            type: "GET",
            url: "/pluscart",
            data: {
                prod_id: id
            },
            success: function (data) {
                console.log("data =", data);
                em1.innerText = data.quantity;
                document.getElementById("amount").innerHTML = data.amount;
                document.getElementById("totalamount").innerHTML = data.totalamount;
            }
        });
    });
});

// $('.plus-cart').click(function () {
//     var id = $(this).attr("pid"); // Corrected: Removed .tostring()
//     var em1 = this.parentNode.children[2];
//     console.log("pid =", id);
//     $.ajax({
//         type: "GET",
//         url: "/pluscart",
//         data: {
//             prod_id: id
//         },
//         success: function (data) {
//             console.log("data =", data);
//             em1.innerText = data.quantity;
//             document.getElementById("amount").innerHTML = data.amount;
//             document.getElementById("totalamount").innerHTML = data.totalamount;
//         }
//     });
// });


// $('.minus-cart').click(function () {
//     var id = $(this).attr("pid"); // Removed .tostring()
//     var em1 = this.parentNode.children[2];
//     console.log("pid =", id);
//     $.ajax({
//         type: "GET",
//         url: "/minuscart",
//         data: {
//             prod_id: id
//         },
//         success: function (data) {
//             console.log("data =", data);
//             em1.innerText = data.quantity;
//             document.getElementById("amount").innerHTML = data.amount;
//             document.getElementById("totalamount").innerHTML = data.totalamount;
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    $('.minus-cart').click(function () {
        var id = $(this).attr("pid"); // Corrected: Removed .tostring()
        var em1 = this.parentNode.children[2];
        console.log("pid =", id);
        $.ajax({
            type: "GET",
            url: "/minuscart",
            data: {
                prod_id: id
            },
            success: function (data) {
                console.log("data =", data);
                em1.innerText = data.quantity;
                document.getElementById("amount").innerHTML = data.amount;
                document.getElementById("totalamount").innerHTML = data.totalamount;
            }
        });
    });
});

// $('.remove-cart').click(function () {
//     var id = $(this).attr("pid");
//     var em1 = this.parentNode.children[2];
//     console.log("pid =", id);
//     $.ajax({
//         type: "GET",
//         url: "/removecart",
//         data: {
//             prod_id: id
//         },
//         success: function (data) {
//             console.log("data =", data);
//             em1.innerText = data.quantity;
//             document.getElementById("amount").innerHTML = data.amount;
//             document.getElementById("totalamount").innerHTML = data.totalamount;
//             em1.parentNode.parentNode.parentNode.parentNode.remove();
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    $('.remove-cart').click(function () {
        var id = $(this).attr("pid"); // Corrected: Removed .tostring()
        var em1 = this.parentNode.children[2];
        console.log("pid =", id);
        $.ajax({
            type: "GET",
            url: "/removecart",
            data: {
                prod_id: id
            },
            success: function (data) {
                console.log("data =", data);
                em1.innerText = data.quantity;
                document.getElementById("amount").innerHTML = data.amount;
                document.getElementById("totalamount").innerHTML = data.totalamount;
                em1.parentNode.parentNode.parentNode.parentNode.remove();
            }
        });
    });
});
