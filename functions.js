/*
This document contains all of the functions related to navigating the guide.
You do not need to edit this document.

*/


// Changes the content of the page to the correct page's content.
function changeContent(button) {
    // Remove btn-active from any button and add it to the clicked button
    var current = document.getElementsByClassName("btn-active");
    for (var i = 0; i<current.length; i++) {
        current[i].classList.remove("btn-active");
    }
    var clickedButton = contentArray[button.id]["Page Title"].substring(19,contentArray[button.id]["Page Title"].length-5);
    document.getElementById(clickedButton).classList.add("btn-active");
    // Change the content of the page
    var content = "";
    content += contentArray[button.id]["File Path"];
    content += contentArray[button.id]["Page Title"];
    content += contentArray[button.id]["Page Content"];
    document.getElementById("printarea").innerHTML = content;
    
}




// Searches page names for search text and displays the options in content
function search() {
    // Find the text in the search box
    var searchText = document.getElementById('search').value;
    // Make sure there is actually text being searched for
    if (searchText.length>=1) {
        // Remove btn-active since you are no longer on a page
        var current = document.getElementsByClassName("btn-active");
        for (var i = 0; i<current.length; i++) {
            current[i].classList.remove("btn-active");
        }
        // Set up the new content
        var pageTitle = "";
        var pageContent = "";
        var filePath ="";
        var content = "<h1 id='pageTitle'>Search Results:</h1>";
        // Check for search text in the page titles
        for (var page in contentArray) {
            pageTitle= contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
            pageContent= contentArray[page]["Page Content"];
            filePath = contentArray[page]["File Path"].substring(20,contentArray[page]["File Path"].length-4);
            // If the text is in the title, add a button to content
            if (pageTitle.toUpperCase().search(searchText.toUpperCase())!=-1) {
                content += '<button id= "'+pageTitle+'" class="btn btn-search-results" type="button" onclick="changeContent(this)" data-toggle="collapse" data-target=".collapse:not(.in)"><h2 class="searchTitle">'+pageTitle+'</h2><p class="searchPath">'+filePath+'</p></button><br>';
            }
        }
        // Check for search text in the file path
        for (var page in contentArray) {
            pageTitle= contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
            pageContent= contentArray[page]["Page Content"];
            filePath = contentArray[page]["File Path"].substring(20,contentArray[page]["File Path"].length-4);
            // Makes sure any page with the text in the title doesn't get added again
            if (pageTitle.toUpperCase().search(searchText.toUpperCase())!=-1) {
            } else if (filePath.toUpperCase().search(searchText.toUpperCase())!=-1) {
                // If the text is in the content, add a button to content
                content += '<button id= "'+pageTitle+'" class="btn btn-search-results" type="button" onclick="changeContent(this)" data-toggle="collapse" data-target=".collapse:not(.in)"><h2 class="searchTitle">'+pageTitle+'</h2><p class="searchPath">'+filePath+'</p></button><br>';
            }
        }
        // Check for search text in the page content
        for (var page in contentArray) {
            pageTitle= contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
            pageContent= contentArray[page]["Page Content"];
            filePath = contentArray[page]["File Path"].substring(20,contentArray[page]["File Path"].length-4);
            // Makes sure any page with the text in the title or file path doesn't get added again
            if (pageTitle.toUpperCase().search(searchText.toUpperCase())!=-1 || filePath.toUpperCase().search(searchText.toUpperCase())!=-1) {
            } else if (pageContent.toUpperCase().search(searchText.toUpperCase())!=-1) {
                // If the text is in the content, add a button to content
                content += '<button id= "'+pageTitle+'" class="btn btn-search-results" type="button" onclick="changeContent(this)" data-toggle="collapse" data-target=".collapse:not(.in)"><h2 class="searchTitle">'+pageTitle+'</h2><p class="searchPath">'+filePath+'</p></button><br>';
            }
        }
        // Change the content of the page
        document.getElementById("printarea").innerHTML = content;
    }
}




// Moves to the next page
function next() {
    // Find the current page
    var currentPageTitle = document.getElementById("pageTitle").innerHTML;
    var currentIndex = contentArray[currentPageTitle]["Index"];
    // Makes sure it stops at the last page
    if (currentIndex!=Object.keys(contentArray).length-1) {
        // Take btn-active off the current button
        document.getElementById(currentPageTitle).classList.remove("btn-active");
        // Find the next page
        var next;
        for (var page in contentArray) {
            if (contentArray[page]["Index"] == currentIndex+1) {
                next = contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
            }
        }
        // Add btn-active to next button
        document.getElementById(next).classList.add("btn-active");
        // Change the content of the page
        var content = "";
        content += contentArray[next]["File Path"];
        content += contentArray[next]["Page Title"];
        content += contentArray[next]["Page Content"];
        document.getElementById("printarea").innerHTML = content;
    }
}




// Moves to the previous page
function previous() {
    // Find the current page
    var currentPageTitle = document.getElementById("pageTitle").innerHTML;
    var currentIndex = contentArray[currentPageTitle]["Index"];
    // Makes sure it stops at the first page
    if (currentIndex!=0) {
        // Take btn-active off the current button
        document.getElementById(currentPageTitle).classList.remove("btn-active");
        // Find the previous page
        var prev;
        for (var page in contentArray) {
            if (contentArray[page]["Index"] == currentIndex-1) {
                prev = contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
            }
        }
        // Add btn-active to previous button
        document.getElementById(prev).classList.add("btn-active");
        // Change the content of the page
        var content = "";
        content += contentArray[prev]["File Path"];
        content += contentArray[prev]["Page Title"];
        content += contentArray[prev]["Page Content"];
        document.getElementById("printarea").innerHTML = content;
    }
}

