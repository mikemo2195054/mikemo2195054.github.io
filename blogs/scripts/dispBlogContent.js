var fetchedContent = JSON.parse(content);
var mainContainer = document.getElementById("blogContent");

for (i = 0; i < fetchedContent.length; i++) {
    var div = document.createElement("div");
    div.className = "ablogincontent";
    div.innerHTML = '<div class="blogtitle">'
        + '<a href="' + fetchedContent[i].location + '">'
        + fetchedContent[i].title
        + '</a></div>\n<div class="blogabstract">' + fetchedContent[i].abstract + "</div>";
    mainContainer.appendChild(div);
}