export class CardList {
    constructor(container, buttonsMoreCards) {
        this.container = container;
        this.showCards = 15;
        this.lastCard = 0;
        this.buttonsMoreCards = buttonsMoreCards;
    }
    addCard(domCard, prepend = 0) {
        if(prepend) {
            this.container.prepend(domCard);
        } else this.container.appendChild(domCard);
    }
    // render(cards) {
    //     cards.forEach(function (item) {
    //         this.addCard(item)
    //     }, this);
    // }

    render(cards) {
        for (let i = this.lastCard; i < Math.min(this.lastCard + this.showCards, cards.length); i++) {
            const item = cards[i];
            this.addCard(item);
        }
        this.lastCard = this.lastCard + this.showCards;
        this._check(cards);
    }

    _check(cards) {
        if (this.lastCard < cards.length) {
            this.buttonsMoreCards.style = 'display: block;';
            this.buttonsMoreCards.onclick = () => this.render(cards);
        } else {
            this.buttonsMoreCards.style = 'display: none;';
        }
    }
}
