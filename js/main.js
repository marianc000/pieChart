import { pie } from './pie.js';

function random(max) {
    return Math.floor(Math.random() * max);
}

function values() {
    return Array.from({ length: random(15) + 3 }, () => random(9) + 1);
}

onePieDiv.innerHTML = pie(100, 1) + pie(100, 1, 2) + pie(100, 1, 2, 3) + pie(100, 1, 2, 3, 4) + pie(100, 1, 2, 3, 4, 5) + pie(100, 1, 2, 3, 4, 5, 6) + pie(100, 1, 2, 3, 4, 5, 6, 7);


function many() {
    for (let i = 0; i < 100; i++) {
        const svg = pie(50, ...values());
        manyPiesDiv.insertAdjacentHTML('beforeend', svg);
    }
}

for (let i = 0; i < 100; i++) {
    setTimeout(many);
}

setTimeout(() =>
    [...manyPiesDiv.querySelectorAll('svg')].forEach(el => el.style.transform = 'rotate(' + random(360) + 'deg)'));
