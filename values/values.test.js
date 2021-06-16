import {isNull,isTrue} from './values'
import {isFalse,isUndefined} from './values'

describe('Probar resultados nulos',()=>{
    test('null',()=>{
        expect(isNull()).toBeNull();
    })
})


describe('probar resultados verdadero',()=>{
    test('verdadero',()=>{
        expect(isTrue()).toBeTruthy();
    })
})

describe('Probar resultados falsos',()=>{
    test('Falso',()=>{
        expect(isFalse()).toBeFalsy();
    })
})

describe('Probar resultados undifined',()=>{
    test('Undifined',()=>{
        expect(isUndefined()).toBeFalsy();
    })
})