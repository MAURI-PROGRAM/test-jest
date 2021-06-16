describe('Comprobar cadenas de texto',()=>{
    const text = 'es un bonito texto';
    test('debe contener este texto',()=>{
        expect(text).toMatch(/bonito/);
    })
})