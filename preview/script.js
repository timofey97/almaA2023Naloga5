const btn = document.querySelector('.btn');
const overlay = document.querySelector('.oerlay');


let i = 0;
const deleteElement = (e) => {
    e.target.remove();
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};
btn.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});