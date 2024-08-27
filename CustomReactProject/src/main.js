// This is our function which will render our domElements.

function customRender(domElement, container){

    const domEle= document.createElement(domElement.type);

    domEle.innerHTML= domElement.children;

    // domEle.setAttribute('href',domElement.props.href);
    // domEle.setAttribute('target',domElement.props.target);

    // container.appendChild(domEle);


    for (const prop in domElement.props) {
        
        if(prop === domElement.children) continue;

        domEle.setAttribute(`${prop}`, domElement.prop);      
    }
    
    container.appendChild(domEle);

}

// These are the defination of our domElement

let domElement = {

    type: 'a',

    props: {

        href: 'https:www.google.com',
        target: '_blank'
    },

    children: "Hey click me to visit google"
}

// container where our element will be show.
let container = document.querySelector('.app')

// This method will render the domElement into the container
customRender(domElement, container)