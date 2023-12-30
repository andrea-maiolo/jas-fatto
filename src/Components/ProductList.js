import React, { useState, useEffect } from "react";
import { fs } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(fs, "products"));

      const newData = [];
      snapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
      });

      setData(newData);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Your Firestore Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}:{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// const ProductList = ({ products, addToCart }) => {
//   return (
//     <div className="product-list">
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default ProductList;
