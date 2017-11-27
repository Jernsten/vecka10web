function renderMovie(movie) {
    document.getElementById("imgPic").setAttribute("src",movie.imgUrl);
    document.getElementById("movieTitle").innerText = movie.title;
    document.getElementById("movieDescription").innerText = movie.description;
    
    var ul = document.getElementById("movieActors");

    movie.actors.forEach(element => {
        var li = ul.appendChild(document.createElement("li"));
        li.innerText = element;
    });
}

function changeStarRating(grade, stars){

    for (let i = 0; i <= grade; i++) {
        stars[i].classList.add("filled");
        stars[i].classList.remove("empty");
    };

    for (let i = grade+1; i<=4; i++) {
        stars[i].classList.remove("filled");
        stars[i].classList.add("empty");
    };
}

renderMovie(movieData);

var stars = document.querySelectorAll(".stars>span");

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", function(){
        changeStarRating(i, stars);
    })
};