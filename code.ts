import * as $ from "jquery";
import { movieData } from "./data";
import { Review } from "./interfaces";

function renderMovie(data: Review) {
    $("#imgPic").attr("src", data.imgUrl);
    $("#movieTitle").text(data.title);
    $("#movieDescription").text(data.description);
    $("#pageTitle").text(data.pageTitle);

    const ul = document.getElementById("movieActors");

    data.actors.forEach((element) => {
        const li = ul.appendChild(document.createElement("li"));
        li.innerText = element;
    });
}

function changeStarRating(index) {
    if (index === 0 && $(".stars span").eq(0).hasClass("filled") && !$(".stars span").eq(1).hasClass("filled")) {
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

renderMovie(movieData);

$(".stars").on("click", "span", (e) => {
    changeStarRating($(e.target).index());
});
