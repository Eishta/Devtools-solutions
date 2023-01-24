class Node {
    constructor(name) {
        this.name = name
        this.innerHTML = ''
        this.children = [];
    }
    appendChild(node) {
        this.children.push(node)
    }
}

let INDENT_SIZE = 4;
const getSpaces = length => Array(length).fill(' ').join('');

class VDocument extends Node {
    constructor() {
        super('html')
    }
    createElement(nodeName) {
        return new Node(nodeName)
    }
    render() {
        function printTree(currentNode, currentLevel) {
            let spaces = getSpaces(currentLevel * INDENT_SIZE);
            let output = ''

            output += `${spaces}<${currentNode.name}>\n`;
            if (currentNode.innerHTML){
                output += `${spaces}${getSpaces(INDENT_SIZE)}${currentNode.innerHTML}\n`
            }
               
            for (let child of currentNode.children) {
                output += printTree(child, currentLevel + 1)
            }
            output += `${spaces}</${currentNode.name}>\n`
            return output;
        }

        console.log(printTree(this, 0))
    }
}

let vDocument = new VDocument();

const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);
vDocument.appendChild(body);

// proper html structure 
const html = vDocument.render();