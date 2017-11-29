import * as angular from "angular";
import { movieData } from "./data";
import { Review } from "./interfaces";

const app = angular.module("movieCardApp", []);

app.controller("movieCardAppController", function () {
    this.movie = movieData;

    this.rating = 0;
    this.changeStarRating = function (newRating) {

        if (newRating === this.rating) {
            this.rating = 0;
        } else {
            this.rating = newRating;
        }
    };
});
