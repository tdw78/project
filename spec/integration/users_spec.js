const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/users/";
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("user: routes", () => {

  beforeEach((done) => {
      sequelize.sync({ force: true })
      .then(() => {
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  describe("POST users/signUp", () => {
      it("should create a new user", (done) => {
          const options = {
              url: base,
              form : {
                name: "John Smith",
                email: "js@mail.com",
                password: "abc123"
              }
          }  
        request.post(options, (err, res, body) => {
          User.findOne({where: { name: "John Smith"}})
          .then((user) => {
            expect(user.name).toBe("John Smith");
            expect(user.id).toBe(1);
            expect(err).toBeNull();
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          })
        })


      });
  });

  describe("GET /users/signUp", () => {
     it("should render the sign up form", (done) => {
         request.get(`${base}signUp`, (err, res, body) => {
            expect(body).toContain("Thank you for signing up!");
            expect(err).toBeNull();
            done();      
         })
     });
  });

  describe("GET /user/signIn", () => {
        it("should render the sign in form", (done) => {
          request.get(`${base}signIn`, (err, res, body) => {
            expect(err).toBeNull();
            expect(body).toContain("Please Sign In")
            done();
          })    
    });
  });



});


