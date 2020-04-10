class Burger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.price = []
    }

    getSize() {
        let smallSize = document.querySelector('.button-small');
        let toppingSize = document.querySelector('.topping');
        let bigSize = document.querySelector('.button-big');
        let burgerSize = document.querySelectorAll('.burger-size');
        smallSize.addEventListener('click', () => {
            burgerSize.forEach(element => element.style.width = '200px');
            toppingSize.style.width = '210px';
            this.size = 'smallSize';
            this.getPrice();
        });
        bigSize.addEventListener('click', () => {
            burgerSize.forEach(element => element.style.width = '300px');
            toppingSize.style.width = '310px';
            this.size = 'bigSize';
            this.getPrice();
        })
    }

    addTopping() {
        let topping = document.querySelector('.topping');
        let cheese = document.querySelector('.cheese');
        let salad = document.querySelector('.salad');
        let potato = document.querySelector('.potato');
        cheese.addEventListener('click', () => {
            topping.classList.add('get-topping');
            topping.style.background = '#FAFF65';
            this.stuffing = 'cheese';
            this.getPrice();
        });
        salad.addEventListener('click', () => {
            topping.classList.add('get-topping');
            topping.style.background = '#72C901';
            this.stuffing = 'salad';
            this.getPrice();
        });
        potato.addEventListener('click', () => {
            topping.classList.add('get-topping');
            topping.style.background = '#BD7800';
            this.stuffing = 'potato';
            this.getPrice();
        });
    }

    getPrice() {
        console.log(burger);
        let price = document.querySelector('.price');
        switch (this.stuffing) {
            case 'cheese':
                this.price[0] = 10;
                break;
            case 'potato':
                this.price[0] = 15;
                break;
            case 'salad':
                this.price[0] = 20;
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
        price.innerText = `Итого: ${this.price.reduce((accumulator, currentValue) =>
            accumulator + currentValue, 0)}руб`;
    }
}

const burger = new Burger(0 , 0);
burger.getSize();
burger.addTopping();
burger.getPrice();