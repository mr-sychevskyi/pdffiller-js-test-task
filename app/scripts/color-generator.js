const generateColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const updateColor = (element, updateTime) =>
    setInterval(() =>
        element.style.backgroundColor = generateColor(), updateTime);
