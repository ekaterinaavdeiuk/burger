class Burger {
    constructor() {
        this.size = 0;
        this.stuffing = [];
        this.sauce = '';
        this.price = []
    }

    getSize() {
        let smallSize = document.querySelector('.button-small');
        let toppingSize = document.querySelectorAll('.topping');
        let bigSize = document.querySelector('.button-big');
        let burgerSize = document.querySelectorAll('.burger-size');
        smallSize.addEventListener('click', () => {
            burgerSize.forEach(element => element.style.width = '200px');
            toppingSize.forEach(element => element.style.width = '210px');
            this.size = 'smallSize';
            this.getPrice();
        });
        bigSize.addEventListener('click', () => {
            burgerSize.forEach(element => element.style.width = '300px');
            toppingSize.forEach(element => element.style.width = '320px');
            this.size = 'bigSize';
            this.getPrice();
        });
    }

    addTopping() {
        let cheese = document.querySelector('.cheese');
        let salad = document.querySelector('.salad');
        let bacon = document.querySelector('.bacon');
        let cheeseButton = document.getElementById('cheese');
        let saladButton = document.getElementById('salad');
        let baconButton = document.getElementById('bacon');

        cheeseButton.addEventListener('click', () => {
            cheese.classList.add('get-topping');
            cheese.style.background = '#F7CF24';
            this.stuffing[0] = 'cheese';
            this.getPrice();
        });

        saladButton.addEventListener('click', () => {
            salad.classList.add('get-topping');
            salad.style.background = '#72C901';
            this.stuffing[1] = 'salad';
            this.getPrice();
        });

        baconButton.addEventListener('click', () => {
            bacon.classList.add('get-topping');
            bacon.style.background = '#D9855B';
            this.stuffing[2] = 'bacon';
            this.getPrice();
        });
    }

    addSauce() {
        let mustardButton = document.querySelector('.mustard');
        let ketchupButton = document.querySelector('.ketchup');
        mustardButton.addEventListener('click', () => {
            this.sauce = 'mustard';
            this.getPrice();
        });
        ketchupButton.addEventListener('click', () => {
            this.sauce = 'ketchup';
            this.getPrice();
        })
    }

    deleteTopping() {
        this.addTopping();
        let cheese = document.querySelector('.cheese');
        let salad = document.querySelector('.salad');
        let bacon = document.querySelector('.bacon');
        let deleteButton = document.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            switch (this.stuffing.pop()) {
                case 'cheese':
                    cheese.classList.remove('get-topping');
                    break;
                case 'salad':
                    salad.classList.remove('get-topping');
                    break;
                case 'bacon':
                    bacon.classList.remove('get-topping');
                    break;
            }
        });
    }

    getPrice() {
        console.log(burger);
        let totalPrice = document.querySelector('.price');
        switch (this.stuffing) {
            case 'cheese':
                this.price[0] = 50;
                break;
            case 'bacon':
                this.price[0] = 65;
                break;
            case 'salad':
                this.price[0] = 55;
                break;
        }
        switch (this.size) {
            case 'smallSize':
                this.price[1] = 50;
                break;
            case 'bigSize':
                this.price[1] = 100;
                break;
        }
        switch (this.sauce) {
            case 'mustard':
                this.price[2] = 15;
                break;
            case 'ketchup':
                this.price[2] = 10;
                break;
        }
        totalPrice.innerText = `Итого: ${this.price.reduce((accumulator, currentValue) =>
            accumulator + currentValue, 0)}руб`;
    }
}

const burger = new Burger();
burger.getSize();
burger.addTopping();
burger.getPrice();
burger.addSauce();
burger.deleteTopping();