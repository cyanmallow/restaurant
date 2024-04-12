//module pageLoad
export function pageLoad(){
    // img
    var img = document.createElement("img");
    img.src = "bg.jpg";
    img.alt = "backgroung";
    // connect to css
    img.classList.add('background-img');
    document.getElementById("content").appendChild(img);

    // heading1
    var heading1 = document.createElement("h1");
    var nodeH1 = document.createTextNode("Come to the best restaurant in all of Terra!!!");
    heading1.appendChild(nodeH1);
    heading1.classList.add('h1');
    document.getElementById("content").appendChild(heading1);

    // paragraph
    var p = document.createElement("p");
    var nodeP = document.createTextNode("We have over 20 years of experience, all for serving you the best food.");
    p.appendChild(nodeP);
    p.classList.add('para');
    document.getElementById("content").appendChild(p);
}