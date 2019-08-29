import request from './helpers/request';

describe('App Entry File', () => {
  test('should app handle home route', done => {
    return request
      .get('/')
      .expect(200)
      .then(res => {
        const { message } = res.body;
        expect(message).toBeTruthy();
        done();
      });
  });

  test('should app handle non existing route', done => {
    return request
      .get('/hello')
      .expect(404)
      .then(res => {
        const { error } = res.body;
        expect(error).toBeTruthy();
        done();
      });
  });
});
