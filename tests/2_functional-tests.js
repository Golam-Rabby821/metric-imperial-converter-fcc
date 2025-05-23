const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

chai.use(chaiHttp);

suite("Functional Tests", function () {
  // #1
  test("Convert a valid input such as 10L", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=10L")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.approximately(res.body.returnNum, 2.64172, 0.1);
        assert.equal(res.body.initNum, 10);
        assert.equal(res.body.initUnit, "L");
        assert.equal(res.body.returnUnit, "gal");
        assert.include(res.body.string, "10 liters converts to");
        done();
      });
  });

  // #2
  test("Convert an invalid input such as 32g", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=32g")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, "invalid unit");
        done();
      });
  });

  // #3
  test("Convert an invalid number such as 3/7.2/4kg", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=3/7.2/4kg")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, "invalid number");
        done();
      });
  });

  // #4
  test("Convert an invalid number AND unit such as 3/7.2/4kilomegagram", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=3/7.2/4kilomegagram")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, "invalid number and unit");
        done();
      });
  });

  // #5
  test("Convert with no number such as kg", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=kg")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.approximately(res.body.returnNum, 2.20462, 0.1);
        assert.equal(res.body.initNum, 1);
        assert.equal(res.body.initUnit, "kg");
        assert.equal(res.body.returnUnit, "lbs");
        assert.include(res.body.string, "1 kilograms converts to");
        done();
      });
  });
});
