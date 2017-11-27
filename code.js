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

renderMovie(movieData);