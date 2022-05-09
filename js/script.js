"use strict";

function showFeaturesContent(event) {
    let contentName = event.path[1].id;
    let featuresContentTitle = document.getElementsByClassName("features__title")[0];
    let featuresContentText = document.getElementsByClassName("features__text")[0];
    switch (contentName) {
        case "notifications":
            featuresContentTitle.innerHTML = "Get your personal in-App <span class=\"features__title_green\">Notifications!</span>";
            featuresContentText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
            break;
        case "calendar":
            featuresContentTitle.innerHTML = "Make your own <span class=\"features__title_green\">Eating Schedule!</span>";
            featuresContentText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
            break;
        case "progress":
            featuresContentTitle.innerHTML = "Best calorie <span class=\"features__title_green\">counter app!</span>";
            featuresContentText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
            break;
        case "favourites":
            featuresContentTitle.innerHTML = "Add your regular food in <span class=\"features__title_green\">Favourites!</span>";
            featuresContentText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
            break;
        case "groups":
            featuresContentTitle.innerHTML = "Create your personal menu by <span class=\"features__title_green\">Food Groups!</span>";
            featuresContentText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
            break;
    }
}