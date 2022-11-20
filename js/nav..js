const navData =[
    {title: "BADABLING", link: "../index.html", class: "logo"},
    {title: "Blog", link: "../Blog.html"},
    {title: "Design", link: "../Design.html"},
    {title: "Data-Visualisation", link: "../DataViz/DataVisualisation.html"},
    {title: "Data-Art", link: "../DataArt/dataArt.html"},

]

const navbar = document.getElementsByClassName("navbar");
for(var i =0; i<navbar.length; i++){
    let list = document.createElement("ul");

    for (var j =0; j< navData.length; j++){
      let  dataLink = document.createElement("a");
        dataLink.innerText = navData[j].title;
        dataLink.setAttribute("href", navData[j].link);
        let dataList = document.createElement("li");
        dataList.appendChild(dataLink);
        list.appendChild(dataList);
    }

    navData[i].appendChild(list);
}