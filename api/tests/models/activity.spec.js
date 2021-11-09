const { Country, conn, Activity } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('propiedades', () => {
      it("'name' has an invalid length", () => {
        Activity.create({ name: "sant" })
          .then(()=> done(new Error("'name' must contain at least 5 characters")))
          .catch(()=> done())
      });
      it("'name' has an invalid length", () => {
        Activity.create({ name: "asdjklasdjklasdjklasjklasdjklasdjklasdjklasdasasdasd" })
          .then(()=> done(new Error("'name' must contains less than 50 characters")))
          .catch(()=> done())
      });
      it("'season' don't recibe an array of 'strings'", () => {
        Activity.create({ season: "123" })
          .then(()=> done(new Error("'season' have to be an array of 'strings'")))
          .catch(()=> done())
      });
      it("don't recive the property: 'dificulty, duration, season'",()=>{
        Activity.create({name:"activity example" })
          .then(()=> done(new Error("don't recived 'dificulty', 'duration','season'")))
          .catch(()=> done())        
      })
      it("don't recive the property: 'dificulty, duration'",()=>{
        Activity.create({name:"activity example",season:["Summer"]})
          .then(()=> done(new Error("don't recived 'dificulty','duration'")))
          .catch(()=> done())        
      })
      it("don't recive the property: 'duration'",()=>{
        Activity.create({name:"activity example",season:["Summer"],dificulty:5})
          .then(()=> done(new Error("don't recived 'duration'")))
          .catch(()=> done())        
      })
    });
  })
});