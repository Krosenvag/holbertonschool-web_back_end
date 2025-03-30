import Building from './5-building.js';

const b = new Building(100);
console.log(b); // Building { _sqft: 100 }

class TestBuilding extends Building {
  evacuationWarningMessage() {
    return 'Evacuate the building immediately!';
  }
}

try {
  const tb = new TestBuilding(200);
  console.log(tb.evacuationWarningMessage()); // Evacuate the building immediately!
} catch (err) {
  console.log(err);
}
