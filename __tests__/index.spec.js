import request from './helpers/request';

const scenario = [
  { 
  title: 'should app handle home route', 
  path:'/', 
  status: 200, 
  key:'message' 
  },
  {
    title: 'should app handle non existing route',
    path: '/hello',
    status: 404,
    key: 'error'
  }
]
describe('App Entry File', () => {
  scenario.forEach(element => {
    test(element.title, done => {
      return request
        .get(element.path)
        .expect(element.status)
        .then(res => {
          expect(res.body[element.key]).toBeTruthy();
          done();
        });
    });
  });
});
