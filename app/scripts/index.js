const stylizeLine = (element, display, width, height, backgroundColor) => {
    element.style.display = display;
    element.style.width = width;
    element.style.height = height;
    element.style.backgroundColor = backgroundColor;
};

const render = () => {
    const root = document.getElementById('root');
    const lines = params.lines;

    lines.map(item => {
        const line = document.createElement('div');
        const lineElements = item.elements;
        const updateTime = item.updateTime;

        stylizeLine(line, 'block', '100%', `${100 / lines.length}%`, item.background);
        updateColor(line, updateTime);

        lineElements.map(item => {
            const lineElement = document.createElement('div');

            stylizeLine(lineElement, 'inline-block', `${item.width}%`, '100%', item.background);
            updateColor(lineElement, updateTime);

            line.appendChild(lineElement);
        });

        root.appendChild(line);
    });

    const body = document.body;
    body.style.margin = 0;
    body.style.padding = 0;
    root.style.height = '100vh';
};

window.addEventListener('load', render);
