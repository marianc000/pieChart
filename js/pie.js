import { getD } from './sector.js';

export function pie(radius, ...vals) {

    const total = vals.reduce((a, b) => a + b, 0);

    const data = vals.map(val => ({ val, degrees: val / total * 360 }));

    data.forEach((o, i, ar) => {
        if (!i) {
            o.from = 0;
            o.to = o.degrees;
        } else {
            o.from = ar[i - 1].to;
            o.to = o.from + o.degrees;
        }
        o.path = path(getD(radius, o.from, o.to ), i);
    });

    return svg(radius * 2, data.map(o => o.path).join(''));
}

function svg(width, content ) {
    return `<svg viewBox="0 0 ${width} ${width}"><g class='sectors'>${content}</g></svg>`;
}

function path(d, idx) {
    return `<path d='${d}' class='type${idx}'/>`;
}