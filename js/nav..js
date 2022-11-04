
$(function () {
var bar = '';
bar += '<section class="container-fluid">';
bar += '<section class="row d-flex align-items-center">';
bar += '<section class="col-auto">';
    // bar += 'section class="row d-flex align-items-center"';
    bar += '<a href="index.html" class="logo"><h1>BADABLING</h1></a>';
    bar += '</section>';
    bar += '<nav class="text_right">';
    bar += '<input type = "checkbox" id = "check">';
   bar +=  '<label for="check" class = "burger-button" id = "burger-button"><i class="fa-solid fa-bars"></i></label>'
    bar += '<ul class = "nav-sections">';
    bar += '<li><a href="Blog.html">Blog</a></li>';
    bar += '<li><a href="Design.html">Design</a></li>';
    bar += '<li><a href="/DataViz/DataVisualization.html">Data-Visualisation</a></li>';
    bar += '<li><a href="/DataArt/dataArt.html">Data-Art</a></li>';
    bar += '</ul>';
    bar += '</nav>';
    bar += '</section>';
    bar += '</section>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
   const navlinks = document.querySelector('nav-sections');
   
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameteers[0] == "id") {
                return parameters[1];
            }
        }
    }
}