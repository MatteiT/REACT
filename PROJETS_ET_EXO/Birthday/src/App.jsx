import List from './exo/Exo1/1-Exo-Birthday';
import data from './exo/Exo1/data';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthdays Today</h3>
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>
          tout supprimer
        </button>
      </section>
    </main>
  );
}

export default App;
