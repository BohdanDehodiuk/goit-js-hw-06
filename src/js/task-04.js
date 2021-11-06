const CounterValue = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);

  this._startEvents();
};

CounterValue.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.conteiner = document.querySelector(rootSelector);
  refs.decrementBtn = refs.conteiner.querySelector('[data-action="decrement"]');
  refs.incrementBtn = refs.conteiner.querySelector('[data-action="increment"]');
  refs.value = refs.conteiner.querySelector("#value");

  return refs;
};

CounterValue.prototype._startEvents = function () {
  this._refs.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this.changeValue();
  });

  this._refs.incrementBtn.addEventListener("click", () => {
    this.increment();
    this.changeValue();
  });
};

CounterValue.prototype.changeValue = function () {
  this._refs.value.textContent = this._value;
};

CounterValue.prototype.increment = function () {
  this._value += this._step;
};

CounterValue.prototype.decrement = function () {
  this._value -= this._step;
};

const counter = new CounterValue({ rootSelector: "#counter", step: 1 });
console.log("counter", counter);
