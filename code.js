let $ = require("jquery");

function renderMovie(movie) {
    $("#imgPic").attr("src", movie.imgUrl);
    $("#movieTitle").text(movie.title);
    $("#movieDescription").text(movie.description);

    var ul = document.getElementById("movieActors");

    movie.actors.forEach(element => {
        var li = ul.appendChild(document.createElement("li"));
        li.innerText = element;
    });
}

function changeStarRating(index) {
    if (index == 0 && $(".stars span").eq(0).hasClass("filled") && !$(".stars span").eq(1).hasClass("filled")) {
        $(".stars span").removeClass("filled");
        return;
    }

    $(".stars span").removeClass("filled");

    for (let i = 0; i < 5; i++) {

        if (i <= index) {
            $(".stars span").eq(i).addClass("filled");
        }
    }
}

import { movieData } from "./data";
renderMovie(movieData);

$(".stars").on("click", "span", function (e) {
    changeStarRating($(e.target).index());
})