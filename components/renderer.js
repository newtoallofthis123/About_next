import marked from 'marked';

const renderer = new marked.Renderer();

renderer.heading = function (text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `<h${level} class="custom-heading-${level}">${text}</h${level}>`;
};

renderer.paragraph = function (text) {
    return `<p class="custom-paragraph">${text}</p>`;
};

const markdown = `
# My Heading

This is a paragraph.
`;

const html = marked(markdown, { renderer });

function MyComponent() {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}