// const addElement = (element,label,root) =>{ 
// let ele = document.createElement(element);
// let text = document.createTextNode(label);
// let code =  document.getElementById(root);
// ele.appendChild(text);
// code.appendChild(ele);
// }
// addElement("view","div","List");
// addElement("view","p","text");
 

const addElement =(root,element,label) => {
    let code = document.getElementById(root);
    let ele = document.createElement(element);
    let text = document.createTextNode(label);
    ele.appendChild(text);
    code.appendChild(ele);
}
addElement("view","div","List");
addElement("view","p","the below example list are furits");
addElement("view","button","submit_view");
addElement("view","li","apple");
addElement("view","li","mango");
addElement("view","li","grapes");
