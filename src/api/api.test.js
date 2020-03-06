import config from './config';
import api from './index';

describe('API service tests', () => {
  it('Generates proper API security parameters', () => {
    const TIMESTAMP = 1583426722880;
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => TIMESTAMP);
    global.Date.now = dateNowStub;
  
    expect(Date.now()).toBe(TIMESTAMP);
    expect(dateNowStub).toHaveBeenCalled();
  
    expect(config.MARVEL.params()).toStrictEqual({
      ts: TIMESTAMP,
      apikey: 'public',
      hash: 'a6fb03b5588d346493847e5c4eb07465',
    });
  
    global.Date.now = realDateNow;
  });

  it('generates the service', () => {
    const spyedGetCharacters = jest.spyOn(api.MARVEL, 'getCharacters')
    const spyedGetCharacterComics = jest.spyOn(api.MARVEL, 'getCharacterComics')
    api.MARVEL.getCharacters();
    api.MARVEL.getCharacterComics({ id: 1 });
    expect(spyedGetCharacters).toBeCalled();
    expect(spyedGetCharacterComics).toBeCalled();
  })
})
