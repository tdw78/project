const User = require("../../src/db/models").User;
const sequelize = require("../../src/db/models/index").sequelize;

describe("User", () => {
  beforeEach((done) => {
     sequelize.sync({ force: true })
     .then(() => {
       done();
     })
     .catch((err) => {
       console.log(err);
       done();
     })
  });

  describe("#create()", () => {
    it("should create a new user", (done) => {
        User.create({
          name: "Joey Doey",
          email: "jd@mail.com",
          password: "1234"
        })
        .then((user) => {
           expect(user.name).toBe("Joey Doey");
           expect(err).toBeNull();
           expect(user.email).toBe("jd@mail.com")
           done();
        })
        .catch((err) => {
          console.log(err);
          done();
        })
    });
    it("should not create a new user", (done) => {
       User.create({
         email: "fds@ds.com",
         password: "fds"
       })
       .then((user) => {
         expect(user.id).toBeNull();
         done();
       })
       .catch((err) => {
         expect(err.message).toContain("notNull Violation: User.name cannot be null");
         done();
       })
    });
  });

});









