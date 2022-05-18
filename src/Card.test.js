import { Card } from "./Card";
import { suitColors, suitValues, values } from "./constants";

describe("Card", () => {
    it("should have a value and a colored suit", () => {
        const card = new Card();
        expect(
            suitValues.includes(card.suit.value)
        ).toBeTruthy();
        expect(
            values.includes(card.value)
        ).toBeTruthy();
        expect(suitColors.includes(card.suit.color)).toBeTruthy();
    });
});