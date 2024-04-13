//module about
export function aboutModule(){
    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = '';

    // paragraph
    var p = document.createElement("p");
    var nodeP = document.createTextNode("Contact us today at ggmmallow@gmail.com!!!!");
    p.appendChild(nodeP);
    p.classList.add('about');
    document.getElementById("content").appendChild(p);
}