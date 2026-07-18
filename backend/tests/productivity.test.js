const { calculateEfficiency } = require("../src/utils/productivity");

describe("calculateEfficiency", () => {

    test("deve retornar 90%", () => {

        expect(calculateEfficiency(90, 100)).toBe(90);

    });

    test("deve retornar 0 quando esperado é 0", () => {

        expect(calculateEfficiency(10, 0)).toBe(0);

    });

});