const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  // #1
  test("Read whole number input", function () {
    assert.strictEqual(7, convertHandler.getNum("7gal"));
  });

  // #2
  test("Read decimal number input", function () {
    assert.strictEqual(3.4, convertHandler.getNum("3.4lbs"));
  });

  // #3
  test("Read fractional number input", function () {
    assert.strictEqual(3.5, convertHandler.getNum("7/2gal"));
  });

  // #4
  test("Read fractional input with a decimal", function () {
    assert.strictEqual(1.7, convertHandler.getNum("3.4/2lbs"));
  });

  // #5
  test("Return error on double-fractional i.e. 3/2/3", function () {
    const result = convertHandler.getNum("3/2/3lbs");
    assert.deepEqual(result, { error: "invalid number" });
  });

  // #6
  test("Return default 1 when no numerical input in provided", function () {
    assert.strictEqual(1, convertHandler.getNum("gal"));
  });

  const validUnits = ["gal", "L", "l", "lbs", "kg", "mi", "km"];

  const unitMap = {
    gal: { returnUnit: "L", spellOut: "gallons" },
    lbs: { returnUnit: "kg", spellOut: "pounds" },
    mi: { returnUnit: "km", spellOut: "miles" },
    L: { returnUnit: "gal", spellOut: "liters" },
    kg: { returnUnit: "lbs", spellOut: "kilograms" },
    km: { returnUnit: "mi", spellOut: "kilometers" },
  };

  const conversionRates = {
    galToL: 3.78541,
    lbsToKg: 0.453592,
    miToKm: 1.60934,
  };

  // #7
  test("Read valid input units", function () {
    validUnits.forEach((unit) => {
      const input = `5${unit}`; // setting up for all units
      const expected = unit.toLowerCase() === "l" ? "L" : unit.toLowerCase();
      const actual = convertHandler.getUnit(input);
      assert.strictEqual(actual, expected, `Failed on input: ${input}`);
    });
  });

  // #8
  test("Return error for invalid input unit", function () {
    const invalidInputs = ["2gm", "5meters", "4xyz", "3abc", "1liter"];

    invalidInputs.forEach((input) => {
      const result = convertHandler.getUnit(input);
      assert.deepEqual(
        result,
        { error: "invalid unit" },
        `Failed on input: ${input}`
      );
    });
  });

  // #9
  test("Return the correct return unit for each valid input unit", function () {
    for (const [unit, { returnUnit }] of Object.entries(unitMap)) {
      const actual = convertHandler.getReturnUnit(unit);
      assert.strictEqual(actual, returnUnit, `Failed on unit: ${unit}`);
    }
  });

  // #10
  test("Return the spelled-out string unit for each valid input unit", function () {
    for (const [unit, { spellOut }] of Object.entries(unitMap)) {
      const actual = convertHandler.spellOutUnit(unit);
      assert.strictEqual(actual, spellOut, `Failed on unit: ${unit}`);
    }
  });

  // #11
  test("Convert gal to L", function () {
    const input = 1;
    const expected = input * conversionRates.galToL;
    const result = convertHandler.convert(input, "gal");
    assert.approximately(result, expected, 0.0001);
  });

  // #12
  test("Convert L to gal", function () {
    const input = conversionRates.galToL;
    const expected = 1;
    const result = convertHandler.convert(input, "L");
    assert.approximately(result, expected, 0.0001);
  });

  // #13
  test("Convert mi to km", function () {
    const input = 1;
    const expected = input * conversionRates.miToKm;
    const result = convertHandler.convert(input, "mi");
    assert.approximately(result, expected, 0.0001);
  });

  // #14
  test("Convert km to mi", function () {
    const input = conversionRates.miToKm;
    const expected = 1;
    const result = convertHandler.convert(input, "km");
    assert.approximately(result, expected, 0.0001);
  });

  // #15
  test("Convert lbs to kg", function () {
    const input = 1;
    const expected = input * conversionRates.lbsToKg;
    const result = convertHandler.convert(input, "lbs");
    assert.approximately(result, expected, 0.0001);
  });

  // #16
  test("Convert kg to lbs", function () {
    const input = conversionRates.lbsToKg;
    const expected = 1;
    const result = convertHandler.convert(input, "kg");
    assert.approximately(result, expected, 0.0001);
  });
});
