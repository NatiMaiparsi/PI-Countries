const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country,Activity, conn } = require('../../src/db.js');

const agent = session(app);
const countriesExample = [{
  id: "SAV",
  name: 'country example',
  flags: "example",
  continent: "example",
  capital: "example"
},
{
  id: "ABC",
  name: 'country example2',
  flags: "example2",
  continent: "example2",
  capital: "example2"
}];

describe('Activity routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true }))
   describe('POST /activities', function () {
      it('should post 200', function(){
        return agent.post('/activities')
          .send({
            name:"activity example",
            dificulty:5,
            duration:5,
            season:["Summer"],
            country:["SAV","ABC"]
          })
          .then(()=>{
            return Activity.findOne({
              where:{
                name:"activity example"
              }
            })
          })
          .then(activity=>{
            expect(activity).to.exist;
          })
      });
  })
});