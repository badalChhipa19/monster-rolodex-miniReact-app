// import { Component } from "react";
import "./card.styles.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
// class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className="card-container" >
//         <img alt="monster" src={`https://robohash.org/${id}?set=set2`} />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
