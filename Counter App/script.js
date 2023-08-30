const countValue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(countValue.innerText);
    value++;
    countValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value--;
    countValue.innerText = value;
};