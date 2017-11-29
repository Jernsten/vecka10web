import * as angular from "angular";
import { movieData } from "./data";
import { Review } from "./interfaces";

const app = angular.module("movieCardApp", []);

app.controller("movieCardAppController", ($scope) => {
    $scope.movie = movieData;

    $scope.rating = 0;
    $scope.changeStarRating = (newRating) => {
        if (newRating === $scope.rating) {
            $scope.rating = 0;
        } else {
            $scope.rating = newRating;
        }
    };
});
