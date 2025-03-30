export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('sqft must be a number');
    if (
      this.constructor !== Building
      && Object.getPrototypeOf(this).evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
