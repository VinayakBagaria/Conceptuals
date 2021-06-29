function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        if (typeof child === 'object') {
          return child;
        }
        return createTextElement(child);
      }),
    },
  };
}

function render(element, container) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter((eachProp) => eachProp !== 'children')
    .forEach((eachProp) => {
      dom[eachProp] = element.props[eachProp];
    });
  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
// translated to
const element = createElement(
  'div',
  { id: 'foo' },
  createElement('a', null, 'bar'),
  createElement('b')
);
const container = document.getElementById('root');
render(element, container);
