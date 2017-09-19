/*
This document contains all of the functions related to navigating the guide.
You do not need to edit this document.

*/


// Changes the content of the page to the correct page's content.
function changeContent(button) {
    var content = "";
    content += contentArray[button.id]["File Path"];
    content += contentArray[button.id]["Page Title"];
    content += contentArray[button.id]["Page Content"];
    document.getElementById("printarea").innerHTML = content;
}

// Searches page names for search text and displays the options in content
function search() {
    var searchText = document.getElementById('search').value;
    if (searchText.length>=1) {
        var pageTitle = "";
        var pageContent = "";
        var filePath ="";
        var content = "<h1 id='pageTitle'>Search Results:</h1>";
    
        for (var page in contentArray) {
            pageTitle= contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
            pageContent= contentArray[page]["Page Content"];
            filePath = contentArray[page]["File Path"].substring(20,contentArray[page]["File Path"].length-4);
            if (pageTitle.toUpperCase().search(searchText.toUpperCase())!=-1) {
                content += '<button id= "'+pageTitle+'" class="btn btn-search-results" type="button" onclick="changeContent(this)"><h2 class="searchTitle">'+pageTitle+'</h2><p class="searchPath">'+filePath+'</p></button><br>';
            }
        }
        for (var page in contentArray) {
            pageTitle= contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
            pageContent= contentArray[page]["Page Content"];
            filePath = contentArray[page]["File Path"].substring(20,contentArray[page]["File Path"].length-4);
            if (pageTitle.toUpperCase().search(searchText.toUpperCase())!=-1) {
            } else if (pageContent.toUpperCase().search(searchText.toUpperCase())!=-1) {
                content += '<button id= "'+pageTitle+'" class="btn btn-search-results" type="button" onclick="changeContent(this)"><h2 class="searchTitle">'+pageTitle+'</h2><p class="searchPath">'+filePath+'</p></button><br>';
            }
        }
        document.getElementById("printarea").innerHTML = content;
    }
}

// Moves to the next page
function next() {
    var currentPageTitle = document.getElementById("pageTitle").innerHTML;
    var currentIndex = contentArray[currentPageTitle]["Index"];
    var next;
    for (var page in contentArray) {
        if (contentArray[page]["Index"] == currentIndex+1) {
            next = contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
        }
    }
    
    var content = "";
    content += contentArray[next]["File Path"];
    content += contentArray[next]["Page Title"];
    content += contentArray[next]["Page Content"];
    document.getElementById("printarea").innerHTML = content;
}

// Moves to the previous page
function previous() {
    var currentPageTitle = document.getElementById("pageTitle").innerHTML;
    var currentIndex = contentArray[currentPageTitle]["Index"];
    var prev;
    for (var page in contentArray) {
        if (contentArray[page]["Index"] == currentIndex-1) {
            prev = contentArray[page]["Page Title"].substring(19,contentArray[page]["Page Title"].length-5);
        }
    }
    
    var content = "";
    content += contentArray[prev]["File Path"];
    content += contentArray[prev]["Page Title"];
    content += contentArray[prev]["Page Content"];
    document.getElementById("printarea").innerHTML = content;
}
