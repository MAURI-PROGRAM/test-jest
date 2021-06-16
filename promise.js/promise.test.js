import {getDataFromApi} from './promise'

describe('Probando promesas', () => {
    it('Realizando una peticion a una api',  async () => {
        const api = 'https://rickandmortyapi.com/api/character/'
        const {data} = await getDataFromApi(api)
        expect(data.results.length).toBeGreaterThan(0)
    })
    it('resuelve un hola',async ()=>{
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola')
    })
    it('resuelve un hola',async ()=>{
        await expect(Promise.reject('Error')).rejects.toBe('Error')
    })
})

