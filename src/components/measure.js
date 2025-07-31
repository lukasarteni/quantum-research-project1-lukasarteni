import { multiply, transpose } from 'mathjs';

function measureTest1(){ 
const A = [[0], [1]];
const B = [[0], [1]];


const transposed = transpose(A);
const product = multiply(A, B);
alert(product);
}
