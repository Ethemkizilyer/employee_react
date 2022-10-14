import { useState } from "react";
import data from "./helper/data";
import List from "./components/List";
import './App.css'
function App() {

data.sort(function (a, b) {
  return a.age - b.age;
});
  console.log(data)
  const [people, setPeople] = useState(data.slice(0, 5));
  const [index, setIndex] = useState(0);

  const Next = () => {
    let newIndex = index + 5;
    if (newIndex > data.length - 1) newIndex = 0;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };
  const Prev = () => {
    let newIndex = index - 5;
    if (newIndex < 0) newIndex = data.length - 5;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List people={people} />
        <div className="sag">
          <button className="prev" onClick={Prev}>Prev</button>
          <button className="next" onClick={Next}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
