class Burger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
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
            console.log(burger);
        });
        bigSize.addEventListener('click', () => {
            burgerSize.forEach(element => element.style.width = '300px');
            toppingSize.style.width = '310px';
            this.size = 'bigSize';
            console.log(burger);
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
            console.log(burger);
        });
        salad.addEventListener('click', () => {
            topping.classList.add('get-topping');
            topping.style.background = '#72C901';
            this.stuffing = 'salad';
            console.log(burger);
        });
        potato.addEventListener('click', () => {
            topping.classList.add('get-topping');
            topping.style.background = '#BD7800';
            this.stuffing = 'potato';
            console.log(burger);
        });
    }

    getPrice() {
        console.log(burger);
        let price = document.querySelector('.price');
        switch (this.stuffing) {
            case 'cheese':
                price.innerText = '10';
                console.log(1);
                break;
            case 'potato':
                price.innerText = '15';
                break;
            case 'salad':
                price.innerText = '20';
                break;
        }
        switch (this.size) {
            case 'smallSize':
                price.innerText = '50';
                break;
            case 'bigSize':
                price.innerText = '100';
                break;
        }
    }
}

const burger = new Burger();
burger.getSize();
burger.addTopping();
burger.getPrice();