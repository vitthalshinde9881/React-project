 function customRender(reactElement, container){
 /*   const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; // Corrected from 'childer' to 'children'
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement); */

    const domElment = document.createElement
    (reactElement.type)
    domElment.innerHTML = reactElement.children
    for (const key in props) {
        if (prop === 'children') continue;
        domElment.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'Click me to visit google' // Corrected from 'childer' to 'children'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
