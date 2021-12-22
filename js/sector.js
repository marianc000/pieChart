// from https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle

export function getD(radius, startAngle, endAngle) {

    const isCircle = endAngle - startAngle === 360;

    if (isCircle) {
        endAngle--;
    }

    const start = polarToCartesian(radius, startAngle);
    const end = polarToCartesian(radius, endAngle);


    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    const d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y];

    if (isCircle) {
        d.push("Z");
    } else {
        d.push("L", radius, radius,
            "L", start.x, start.y,
            "Z");
    }

    return d.join(" ");
}

function round(n) {
    return Math.round(n * 10) / 10;
}

function polarToCartesian(radius, angleInDegrees) {
    var radians = (angleInDegrees - 90) * Math.PI / 180;

    return {
        x: round(radius + (radius * Math.cos(radians))),
        y: round(radius + (radius * Math.sin(radians)))
    };
}
