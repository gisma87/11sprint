export class CardList {
    constructor(container) {
        this.container = container;
    }
    addCard(domCard) {
        this.container.prepend(domCard);
    }
    render(cards) {
        cards.forEach(function (item) {
            this.addCard(item)
        }, this);
    }
}
