function ConvertHandler() {
  // Mapping units to their corresponding return units
  const unitMap = {
    gal: { returnUnit: "L", spellOut: "gallons" },
    lbs: { returnUnit: "kg", spellOut: "pounds" },
    mi: { returnUnit: "km", spellOut: "miles" },
    L: { returnUnit: "gal", spellOut: "liters" },
    kg: { returnUnit: "lbs", spellOut: "kilograms" },
    km: { returnUnit: "mi", spellOut: "kilometers" },
  };

  // Conversion factors
  const conversionRates = {
    galToL: 3.78541,
    lbsToKg: 0.453592,
    miToKm: 1.60934,
  };

  // Helper function to get numeric part
  this.getNum = function (input) {
    let result;

    const numberPart = input.replace(/[a-zA-Z]+$/, "");

    // If there are any spaces left, return error
    if (numberPart.includes(" ")) {
      return { error: "invalid number" };
    }

    if (!numberPart) return 1; // default to 1 if no number

    const slashCount = (numberPart.match(/\//g) || []).length;
    if (slashCount > 1) {
      return { error: "invalid number" };
    }

    if (slashCount === 1) {
      const [numerator, denominator] = numberPart.split("/");

      const num = parseFloat(numerator);
      const den = parseFloat(denominator);

      if (isNaN(num) || isNaN(den) || den === 0) {
        return { error: "invalid number" };
      }

      return num / den;
    }

    // No fraction, just parse number
    result = parseFloat(numberPart);
    if (isNaN(result)) {
      return { error: "invalid number" };
    }

    return result;
  };

  this.getUnit = function (input) {
    let result;

    const regex = /([a-zA-Z]+)/;
    const match = input.split(regex);
    const unitStr = match[1];

    result = unitStr === "L" || unitStr === "l" ? "L" : unitStr.toLowerCase();

    const validUnits = Object.keys(unitMap);
    if (!validUnits.includes(result)) {
      return { error: "invalid unit" };
    }

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    return unitMap[initUnit] ? unitMap[initUnit].returnUnit : null;
  };

  this.spellOutUnit = function (unit) {
    return unitMap[unit] ? unitMap[unit].spellOut : unit;
  };

  this.convert = function (initNum, initUnit) {
    let result;

    switch (initUnit) {
      case "gal":
        result = initNum * conversionRates.galToL;
        break;
      case "lbs":
        result = initNum * conversionRates.lbsToKg;
        break;
      case "mi":
        result = initNum * conversionRates.miToKm;
        break;
      case "L":
        result = initNum / conversionRates.galToL;
        break;
      case "kg":
        result = initNum / conversionRates.lbsToKg;
        break;
      case "km":
        result = initNum / conversionRates.miToKm;
        break;
    }

    return Number(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
}

module.exports = ConvertHandler;
