"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    const input = req.query.input;

    if (!input || typeof input !== "string") {
      return res.send("invalid unit");
    }

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    const isNumError = initNum?.error === "invalid number";
    const isUnitError = initUnit?.error === "invalid unit";

    if (isNumError && isUnitError) {
      return res.send("invalid number and unit");
    }

    if (isNumError) {
      return res.send("invalid number");
    }

    if (isUnitError) {
      return res.send("invalid unit");
    }

    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const outputString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    res.send({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: outputString,
    });
  });
};
