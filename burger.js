class Burger {
    constructor() {
        this.size = 0;
        this.stuffing = [];
        this.sauce = '';
        this.price = [];
        this.calories = []
    }

    getSize() {
        let smallSize = document.querySelector('.button-small');
        let toppingSize = document.querySelectorAll('.topping');
        let bigSize = document.querySelector('.button-big');
        let burgerSize = document.querySelectorAll('.burger-size');
        smallSize.addEventListener('click', () => {
            burgerSize.forEach(element => element.style.width = '200px');
            toppingSize.forEach(element => element.style.width = '210px');
            smallSize.style.border = '3px solid #E02F89';
            bigSize.style.border = '3px solid transparent';
            this.size = 'smallSize';
            this.getPrice();
            this.getCalories();
        });
        bigSize.addEventListener('click', () => {
            burgerSize.forEach(element => element.style.width = '300px');
            toppingSize.forEach(element => element.style.width = '320px');
            bigSize.style.border = '3px solid #E02F89';
            smallSize.style.border = '3px solid transparent';
            this.size = 'bigSize';
            this.getPrice();
            this.getCalories();
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
            cheeseButton.style.border = '3px solid #E02F89';
            this.stuffing[0] = 'cheese';
            this.getPrice();
            this.getCalories();
        });

        saladButton.addEventListener('click', () => {
            salad.classList.add('get-topping');
            salad.style.background = '#72C901';
            saladButton.style.border = '3px solid #E02F89';
            this.stuffing[1] = 'salad';
            this.getPrice();
            this.getCalories();
        });

        baconButton.addEventListener('click', () => {
            bacon.classList.add('get-topping');
            bacon.style.background = '#D9855B';
            baconButton.style.border = '3px solid #E02F89';
            this.stuffing[2] = 'bacon';
            this.getPrice();
            this.getCalories();
        });
    }

    addSauce() {
        let mustardButton = document.querySelector('.mustard');
        let ketchupButton = document.querySelector('.ketchup');
        mustardButton.addEventListener('click', () => {
            this.sauce = 'mustard';
            mustardButton.style.border = '3px solid #E02F89';
            ketchupButton.style.border = '3px solid transparent';
            this.getPrice();
            this.getCalories();
        });
        ketchupButton.addEventListener('click', () => {
            this.sauce = 'ketchup';
            ketchupButton.style.border = '3px solid #E02F89';
            mustardButton.style.border = '3px solid transparent';
            this.getPrice();
            this.getCalories();
        })
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

    getCalories() {
        let allCalories = document.querySelector('.calories');
        switch (this.stuffing) {
            case 'cheese':
                this.calories[0] = 70;
                break;
            case 'bacon':
                this.calories[0] = 110;
                break;
            case 'salad':
                this.calories[0] = 10;
                break;
        }
        switch (this.size) {
            case 'smallSize':
                this.calories[1] = 150;
                break;
            case 'bigSize':
                this.calories[1] = 200;
                break;
        }
        switch (this.sauce) {
            case 'mustard':
                this.calories[2] = 30;
                break;
            case 'ketchup':
                this.calories[2] = 20;
                break;
        }
        allCalories.innerText = `Калории: ${this.calories.reduce((accumulator, currentValue) =>
            accumulator + currentValue, 0)}ккал`;
    }

    deleteTopping() {
        this.addTopping();
        let cheese = document.querySelector('.cheese');
        let salad = document.querySelector('.salad');
        let bacon = document.querySelector('.bacon');
        let cheeseButton = document.getElementById('cheese');
        let saladButton = document.getElementById('salad');
        let baconButton = document.getElementById('bacon');
        let deleteButton = document.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            switch (this.stuffing.pop()) {
                case 'cheese':
                    cheese.classList.remove('get-topping');
                    cheeseButton.style.border = '3px solid transparent';
                    break;
                case 'salad':
                    salad.classList.remove('get-topping');
                    saladButton.style.border = '3px solid transparent';
                    break;
                case 'bacon':
                    bacon.classList.remove('get-topping');
                    baconButton.style.border = '3px solid transparent';
                    break;
            }
        });
    }

    deleteSauce() {
        this.addSauce();
        let deleteButton = document.querySelector('#delete');
        let mustardButton = document.querySelector('.mustard');
        let ketchupButton = document.querySelector('.ketchup');
        deleteButton.addEventListener('click', () => {
            this.price[2] = 0;
            this.calories[2] = 0;
            ketchupButton.style.border = '3px solid transparent';
            mustardButton.style.border = '3px solid transparent';
            console.log(burger);
        });
    }

}

const burger = new Burger();
burger.getSize();
burger.addTopping();
burger.addSauce();
burger.deleteTopping();
burger.deleteSauce();
burger.getCalories();
burger.getPrice();