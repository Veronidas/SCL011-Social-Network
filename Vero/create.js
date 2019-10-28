const paragraph = document.createElement("p");
// Crear nodo de tipo Text
const content = document.createTextNode("Hola Mundo!");
// Añadir el nodo Text como hijo del nodo Element
paragraph.appendChild(content);
// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(paragraph);