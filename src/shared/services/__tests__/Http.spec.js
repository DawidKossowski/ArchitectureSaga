import { Http } from '../Http';

describe('Api', () => {
    const endpoint = 'http://fake.com';
    let httpService;

    beforeEach(() => {
        httpService = new Http('http://fake.com')
    });

    it('should have correct endpoint', async () => {
        expect(httpService.url).toEqual(endpoint);
    });

    describe('get', () => {
        it('should return correct json response', async () => {
            const response = await httpService.get('endpoint');
            expect(response).toEqual('response');
        })
    })
});
