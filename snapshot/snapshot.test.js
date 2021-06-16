import {getCharacter} from './snapshot'
import rick from './rick.json'
describe('Es hora de las intantaneas', () => {
    it('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    })
    test('snapshot con id que cambia', () => {
        const user = {
            id: Math.floor(Math.random()*20),
            name: "Michael"
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number),
        })
    });
})
