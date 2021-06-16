import {arrayFruits,arrayColors} from './fruits'

describe('Comprobaremos',()=>{
    test('Tiene una banana?',()=>{
        expect(arrayFruits()).toContain('banana')
    });
    test('Nocontiene un Platano',()=>{
        expect(arrayFruits()).not.toContain('platano')
    })
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(5);
    });
    test('Comprobar el tamaño de un color', () => {
        expect(arrayColors()).toHaveLength(5);
    });
})