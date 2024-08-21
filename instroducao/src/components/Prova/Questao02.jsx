import React, { useState } from "react";

const Questao02 = () => {
// declaro o estado mudar que é inicializado como false
  const [mudar, setMudar] = useState(false);

  let imageUrl;
  // se mudar for true, recebe a imagem do personagem de costas
  if (mudar) {
    imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/197.png";
  } else {
    imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png";
  }

  // jsx renderiza o componente
  return (
    <div>
      <img src={imageUrl} alt="Umbreon" />
      <button onClick={() => setMudar(!mudar)}>Mudar</button>
    </div>
  );
};

export default Questao02;





























// import React, { useState } from "react";

// const Questao02 = () => {
//   const [inverter, setInverter] = useState(false);

//   return (
//     <div>
//       <img
//         src={
//           inverter
//             // ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/197.png"
//             // : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
//         }
//         alt="Umbreon"
//       />
//       <button
//         onClick={() => {
//           setInverter(!inverter);
//         }}
//       >
//         inverter
//       </button>
//     </div>
//   );
// };

// export default Questao02;
