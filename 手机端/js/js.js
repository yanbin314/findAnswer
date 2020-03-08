var openSlide = document.getElementById("openSlide");
var slide_lt = document.getElementById("slide_lt");
var app = document.getElementById("app");
//var display = "none";

openSlide.onclick = function () {
    if (slide_lt.style.display == "block") {
        slide_lt.style.display = "none";
       //display = "block";
    } else {
        slide_lt.style.display = "block"; 
        //display = "none";
    }
}

var qr_box_content = document.getElementById("qr_box_content");
var img = document.getElementsByTagName("img");
var submit = document.getElementById("submit");


submit.onclick = function () {
    ajax( 
            {
                method: "GET",
                url: "1.php",
                str: qr_box_content.innerText,
                time: 3000,
                success: {
                    function () {
                        
                    }
                },
                error: {
                    function (xhr) {
                       alert(xhr.status); 
                    }
                    
                }
            }
        
    )
}