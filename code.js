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
    
    $(".stars span").removeClass("filled");

    for (let i = 0; i < 5; i++) {
    
        if (i <= index) {
            $(".stars span").eq(i).addClass("filled");
        }
    }
}

renderMovie(movieData);

$(".stars").on("click", "span", function (e) {
    changeStarRating($(e.target).index());

})