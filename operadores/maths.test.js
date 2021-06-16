import {sumar, multiplicar, restar , dividir} from './maths'

describe('Calculos matematicos',()=>{
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(2);
    });
    test('Prueba de multiplicar', ()=> {
        expect(multiplicar(5,4)).toBe(20);
    });
    test('Prueba de restar', ()=> {
        expect(restar(5,4)).toBe(1);
    });
    test('Prueba de dividir', ()=> {
        expect(dividir(20,4)).toBe(5);
    });
})