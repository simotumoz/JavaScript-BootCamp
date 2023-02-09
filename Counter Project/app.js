function Counter(element, value){
    /* console.log(element, value); */
    this.counter = element;
    this.value = value;

    //acquiring the buttons
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');

    //acquiring the velue text
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;


    this.increase = this.increase.bind(this); // we have to bind it to the COUNTER
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    //adding event listeners to the buttons
    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);

 
}

// setting up the functions

function getElement(selection){
    const element = document.querySelector(selection);

    if(element){
        return element;
    }
    throw new Error(
        `No such element ${selection} exists`
    );
}


Counter.prototype.increase = function(){
    this.value++;
    this.valueDOM.textContent = this.value;
};

Counter.prototype.decrease = function(){
    this.value--;
    this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function(){
    this.value = 0;
    this.valueDOM.textContent = this.value;
};


// creating an istance for each counter

const firstCounter = new Counter(getElement('.first-counter'), 100);

const secondCounter = new Counter(getElement('.second-counter'), 200);

