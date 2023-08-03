// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/cardlList.component";
import SearchBox from "./components/search-box/searchBox.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // console.log("rendered");

  const onChange = (event) => {
    const searchFieldValue = event.target.value.toLowerCase();
    setSearchField(searchFieldValue);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    const newFilteredmonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return setFilteredMonsters(newFilteredmonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="Search monsters"
        onChangeHandler={onChange}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then((res) => res.json())
//       .then((data) =>
//         this.setState(
//           () => {
//             return { monsters: data };
//           },
//           () => {}
//         )
//       );
//   }

//   onChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           placeholder="Search monsters"
//           onChangeHandler={onChange}
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
