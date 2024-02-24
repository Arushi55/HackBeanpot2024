function dot(v1, v2) {
    var sum = 0;

    if (v1.length === v2.length) {
        v1.forEach((element, idx) => {
            sum += element * v2[idx];
        });
        return sum;
    } else {
        throw new Error('Vectors are not of the same length');
    }
}

function mag(v) {
    var sum = 0;

    v.forEach(elem => {
        sum += Math.pow(elem, 2);
    });
    return Math.sqrt(sum);
}

//export default 
function angleBetween(v1, v2) {
    return Math.acos(dot(v1, v2) / (mag(v1) * mag(v2)));
}

//module.exports = angleBetween;
export { angleBetween };

const vec1 = [1, 2, 3];
const vec2 = [-1, -2, -3];

console.log(dot(vec1, vec2));
console.log(mag(vec1), mag(vec2));
console.log(angleBetween(vec1, vec2));