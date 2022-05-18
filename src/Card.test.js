describe("Card", () => {
    it("should have a value and a colored suit", () => {
        const card = new Card();
        expect(
            ["hearts", "clubs", "diamonds", "spades"].includes(card.suit.value)
        ).toBeTruthy();
        expect(
            ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"].includes(card.value)
        ).toBeTruthy();
        expect(["red", "black"].includes(card.suit.color)).toBeTruthy();
    });
});