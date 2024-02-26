export function niv(id, content){
    let div = document.getElementById(id);
    if (div) {
        div.innerHTML = content;
    }
}
export function gv(id){
    let value = document.getElementById(id).value;
    if(value){
        return value;
    }
    return null;
}
export function cet(type, id, content){
    let element = document.createElement(type);
    element.id = id;
    
    if (type === 'input') {
        element.placeholder = content;
    } else if (type === 'button') {
        element.innerText = content;
    } else {
        element.innerHTML = content;
    }
    document.body.appendChild(element);
    return element;
}
export function rv(id){
    let element = document.getElementById(id);
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
    
}
export function Ec(color, id){
    let elements = document.getElementById(id);
    elements.style.color(color);
}
export function ani(id, position, position2){
    let element = document.getElementById(id);
    let pos = position;
    let ids = setInterval(frame, 10);
    function frame(){
        if(pos == position2){
            clearInterval(ids);
        } else{
            pos++; 
            element.style.top = pos + 'px'; 
            element.style.left = pos + 'px'; 
        }
    }
}
export function fh(apiURL, element) {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => niv(element, JSON.stringify(data)));
}
