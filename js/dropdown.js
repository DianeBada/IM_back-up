fetch('dropdown.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_dropdown");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})