// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Potted_Plants.css";

// export const Potted_Plants = () => {
//   const [pots, setPots] = useState([]);
//   const [allPots, setAllPots] = useState([]); // keep original list for filters

//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";
//   const pot_url = `${API_URL}/flower/pot`;

//   useEffect(() => {
//     fetchPotData();
//   }, []);

//   const fetchPotData = async () => {
//     try {
//       const res = await axios.get(pot_url);
//       console.log("pot", res.data);
//       setAllPots(res.data);
//       setPots(res.data);
//     } catch (err) {
//       console.error("Error fetching pots:", err);
//     }
//   };

//   const filterByPrice = (min, max) => {
//     const filtered = allPots.filter(
//       (el) => el.price > min && el.price <= max
//     );
//     setPots(filtered);
//   };

//   const sortByPrice5 = () => {
//     filterByPrice(500, 1000);
//   };

//   const sortByPrice10 = () => {
//     filterByPrice(1000, 1500);
//   };

//   const sortByPrice15 = () => {
//     filterByPrice(1500, 2000);
//   };

//   return (
//     <div className="potted_Plants_Main">
//       <div className="potted_Plants_first">
//         <p>Spring Bouquets</p>
//         <p>Lobby and Office Flowers</p>
//         <p>Luxuary Collection</p>
//         <hr />
//         <h2>Filter your results</h2>
//         <p>Price range</p>

//         <div className="priceSelect">
//           <div>
//             <input
//               className="checkbox_price"
//               onChange={sortByPrice5}
//               type="checkbox"
//             />
//             <span>500 - 1000</span>
//           </div>
//           <div>
//             <input
//               className="checkbox_price"
//               onChange={sortByPrice10}
//               type="checkbox"
//             />
//             <span>1000 - 1500</span>
//           </div>
//           <div>
//             <input
//               className="checkbox_price"
//               onChange={sortByPrice15}
//               type="checkbox"
//             />
//             <span>1500 - 2000</span>
//           </div>
//           {/* If you want a "reset" option later, you can add another checkbox/button */}
//         </div>

//         <hr />
//       </div>

//       <div className="potted_Plants_second">
//         <div className="ptterd_plants">
//           {pots.map((el) => (
//             <div
//               key={el.id}
//               className="prductDetail_potted_Plants"
//               onClick={() => navigate(`/product-details/${el.id}`)}
//             >
//               <img src={el.image} alt={el.name} />
//               <h5>{el.name}</h5>
//               <p>{el.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
