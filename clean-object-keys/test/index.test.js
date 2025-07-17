const { cleanObject } = require('../src/index');

const dirtyObject = {
    name: 'Manu',
    age: null,
    address: '',
    phone: undefined,
    city: 'Delhi',
};

const cleaned = cleanObject(dirtyObject);
console.log('Cleaned Object:', cleaned);