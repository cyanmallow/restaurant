//module about
export function menuModule(){
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = '';


    // breakfast
    var img = document.createElement("img");
    img.src = "bacon_egg.jpg";
    img.alt = "bacon and egg";
    // connect to css
    img.classList.add('menu_pic');
    document.getElementById("content").appendChild(img);

    var breakfast = document.createElement("p");
    var nodeBreakfast = document.createTextNode("Bacon, Egg & Cheese Biscuit");
    breakfast.appendChild(nodeBreakfast);
    breakfast.classList.add('menu');
    document.getElementById("content").appendChild(breakfast);

    //burger
    var img = document.createElement("img");
    img.src = "big_mac.jpg";
    img.alt = "burger";
    // connect to css
    img.classList.add('menu_pic');
    document.getElementById("content").appendChild(img);

    var p = document.createElement("p");
    var nodeP = document.createTextNode("Big Mac®");
    p.appendChild(nodeP);
    p.classList.add('menu');
    document.getElementById("content").appendChild(p);


    // drink
    var img = document.createElement("img");
    img.src = "vanilla_cone.jpg";
    img.alt = "ice cream";
    // connect to css
    img.classList.add('menu_pic');
    document.getElementById("content").appendChild(img);

    var p = document.createElement("p");
    var nodeP = document.createTextNode("Vanilla Cone");
    p.appendChild(nodeP);
    p.classList.add('menu');
    document.getElementById("content").appendChild(p);
}