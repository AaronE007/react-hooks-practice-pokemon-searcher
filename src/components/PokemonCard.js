import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  return (
    <Card>
      <div>
        <div className="image">
          <img src={pokemon.sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;


// function PokemonCard({ pokemon }) {
//   const [showFront, setShowFront] = useState(true);

//   const { name, hp, sprites } = pokemon;

//   function handleClick() {
//     setShowFront((showFront) => !showFront);
//   }

//   return (
//     <Card>
//       <div onClick={handleClick}>
//         <div className="image">
//           <img src={showFront ? sprites.front : sprites.back} alt={name} />
//         </div>
//         <div className="content">
//           <div className="header">{name}</div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat red" />
//             {hp}
//           </span>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default PokemonCard;