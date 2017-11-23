const request = require('request')

let base_url = 'http://localhost:9000/'

describe('Hello World Server', () => {
  describe('GET', () =>{
    it('returns status code 200', function(){
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      })
    })       
  });
});