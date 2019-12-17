class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(changeDetails) {
        this.observers.forEach(observer => {
            observer.update(this, changeDetails);
        });
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
}

export default Observable;
