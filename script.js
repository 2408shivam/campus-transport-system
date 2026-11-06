function searchRoute() {
    // Get the text entered by the user
    var searchText = document.getElementById("search").value.toLowerCase();

    // Get all bus route boxes
    var routes = document.getElementsByClassName("route");

    // This variable checks whether a route is found
    var found = false;

    // Check every route one by one
    for (var i = 0; i < routes.length; i++) {
        var routeName = routes[i].innerText.toLowerCase();

        if (routeName.includes(searchText)) {
            routes[i].style.display = "block";
            found = true;
        } else {
            routes[i].style.display = "none";
        }
    }

    // Show a message if no route is found
    if (found == false) {
        document.getElementById("message").innerText = "No route found.";
    } else {
        document.getElementById("message").innerText = "";
    }
}
