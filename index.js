const choice = document.querySelector('.choice');
const options = document.querySelector('.options');

const buttons_num = 3;

const removeContent = (target) => {
    target.innerHTML = "";
}

const setContentAndValue = (target, value) => {
    target.textContent = value;
    target.value = target.textContent;
};

const createButton = value => {
    const button = document.createElement('button');
    setContentAndValue(button, value + 1);
    button.type = "button";
    return button;
}

const buttons = Array.from(Array(buttons_num).keys(), createButton);

const optionsHandler = (e) => {
    const target = e.target;

    if (target.closest('button')) {
        setContentAndValue(choice, target.value);
        removeContent(options);
    }

    options.removeEventListener('click', optionsHandler);
};

const choiceHandler = () => {
    buttons.forEach(elem => options.insertAdjacentElement('beforeend', elem));
    options.addEventListener('click', optionsHandler);
};

choice.addEventListener('click', choiceHandler);