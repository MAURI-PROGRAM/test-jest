afterEach(()=>console.log('Despues de cada prueba'))
afterAll(()=>console.log('Despues de todas las pruebas'))

beforeEach(()=>console.log('Antes de cada prueba'))
beforeAll(()=>console.log('Antes de todas prueba'))

describe('preparar antes de ejecutar',()=>{
    test('Es verdadero',()=>{
        expect(true).toBeTruthy();
    })
})

