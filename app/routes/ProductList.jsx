// import { Card } from "~/components/ui/card"
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { store } from "../store";
// import { Button } from "~/components/ui/button";
// import { increment, decrement } from "../plants/plantSlice";
// import Navbar from "../components/Navbar";
// import { useState } from "react";
// import { useEffect } from "react";
// import { addItem } from "../plants/CartSlice";

// export default function Products() {
//     const plants = [
//         {
//             id: 1,
//             category: "Indoor",
//             name: "Ficus",
//             description: "The Ficus is a popular houseplant known for its glossy leaves",
//             url: "/plant1.webp",
//             price: "$20",
//             count: 0
//         },
//         {
//             id: 2,
//             category: "Indoor",
//             name: "Monstera",
//             description: "The Monstera is a tropical plant with large, distinctive leaves",
//             url: "/plant2.avif",
//             price: "$25",
//             count: 0
//         },
//         {
//             id: 3,
//             category: "Outdoor",
//             name: "Snake Plant",
//             description: "The Snake Plant is a hardy plant that can tolerate low light and infrequent watering",
//             url: "/plant3.jpg",
//             price: "$15",
//             count: 0
//         },
//         {
//             id: 4,
//             category: "Outdoor",
//             name: "Pothos",
//             description: "The Pothos is a trailing plant that is easy to care for and can thrive in a variety of conditions",
//             url: "/plant4.jpg",
//             price: "$10",
//             count: 0
//         },
//         {
//             id: 5,
//             category: "garden",
//             name: "Spider Plant",
//             description: "The Spider Plant is a popular houseplant that is known for its air-purifying properties",
//             url: "/plant5.jpg",
//             price: "$12",
//             count: 0
//         },
//         {
//             id: 6,
//             category: "garden",
//             name: "Succulent",
//             description: "Succulents are a diverse group of plants that store water in their leaves, making them drought-tolerant and easy to care for",
//             url: "/plant6.avif",
//             price: "$8",
//             count: 0
//         }
//     ]
//     const cartCount = useSelector((state) => state.counter.count);
//     const dispatch = useDispatch();
//     const [flowers, setFlowers] = useState(plants);
//     const [cartItems, setCartItems] = useState([]);
//     const [isClicked, setIsClicked] = useState(false);

//     const handleEachIncrement = (id) => {

//         setFlowers(prevFlowers => prevFlowers.map(p => p.id === id ? { ...p, count: p.count + 1 } : p));
//         setCartItems(prevCartItems => [...prevCartItems, flowers.find(p => p.id === id)]);
//         dispatch(addItem(flowers.find(p => p.id === id)));
//         setIsClicked(true);
//     }

//     const handleEachDecrement = (id) => {
//         setFlowers(prevFlowers => prevFlowers.map(p => p.id === id ? { ...p, count: p.count - 1 } : p));
//         dispatch(removeItem(id));

//     }

//     useEffect(() => {
//         localStorage.setItem("plants", JSON.stringify(flowers));
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }, [flowers]);


//     return (
//         <>
//             <Provider store={store}>

//                 <Navbar />
//                 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-300 mx-auto my-18">
//                     {flowers.map((plant, index) => {
//                         return (
//                             <Card key={index} className="m-4 ">

//                                 <img src={plant.url} alt={plant.name} className="w-full h-64 object-cover" />
//                                 <h2 className=" px-4 text-xl font-bold mt-4">{plant.name}</h2>
//                                 <p className=" px-4 text-gray-600 mt-2">{plant.category}</p>
//                                 <div className="flex items-center justify-center gap-5">
//                                     <Button
//                                         disabled={isClicked}
//                                         onClick={() => { handleEachIncrement(plant.id) }}

//                                     >+</Button>
//                                     <p>{plant.count}</p>
//                                     <Button
//                                         onClick={() => { handleEachDecrement(plant.id) }}
//                                     >-</Button>
//                                 </div>



//                                 <p className=" px-4 text-gray-600 mt-2">{plant.description}</p>
//                                 <p className=" px-4 text-green-600 font-bold mt-2">{plant.price}</p>
//                             </Card>
//                         )

//                     })}

//                 </div>

//             </Provider>
//         </>
//     )
// }

import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../plants/CartSlice";
import { useEffect, useState } from "react";

export default function ProductList() {
  const dispatch = useDispatch();

  const cartCount = useSelector(
    (state) => state.counter.items.length
  );

  const plantsData = [
    // Indoor Plants
    {
      id: 1,
      category: "Indoor",
      name: "Ficus",
      description: "Glossy indoor plant",
      url: "/plant1.webp",
      price: 20,
      added: false,
    },
    {
      id: 2,
      category: "Indoor",
      name: "Monstera",
      description: "Tropical decorative plant",
      url: "/plant2.avif",
      price: 25,
      added: false,
    },
    {
      id: 3,
      category: "Indoor",
      name: "Peace Lily",
      description: "Air purifying plant",
      url: "/plant3.jpg",
      price: 18,
      added: false,
    },
    {
      id: 4,
      category: "Indoor",
      name: "Rubber Plant",
      description: "Elegant green leaves",
      url: "/plant4.jpg",
      price: 22,
      added: false,
    },
    {
      id: 5,
      category: "Indoor",
      name: "ZZ Plant",
      description: "Low maintenance plant",
      url: "/plant5.jpg",
      price: 15,
      added: false,
    },
    {
      id: 6,
      category: "Indoor",
      name: "Areca Palm",
      description: "Beautiful palm plant",
      url: "/plant6.avif",
      price: 30,
      added: false,
    },

    // Outdoor Plants
    {
      id: 7,
      category: "Outdoor",
      name: "Snake Plant",
      description: "Hardy outdoor plant",
      url: "/plant1.webp",
      price: 12,
      added: false,
    },
    {
      id: 8,
      category: "Outdoor",
      name: "Aloe Vera",
      description: "Medicinal succulent",
      url: "/plant2.avif",
      price: 10,
      added: false,
    },
    {
      id: 9,
      category: "Outdoor",
      name: "Lavender",
      description: "Fragrant flowering plant",
      url: "/plant3.jpg",
      price: 14,
      added: false,
    },
    {
      id: 10,
      category: "Outdoor",
      name: "Jasmine",
      description: "Beautiful white flowers",
      url: "/plant4.jpg",
      price: 19,
      added: false,
    },
    {
      id: 11,
      category: "Outdoor",
      name: "Rosemary",
      description: "Fresh herb plant",
      url: "/plant5.jpg",
      price: 11,
      added: false,
    },
    {
      id: 12,
      category: "Outdoor",
      name: "Bamboo",
      description: "Fast growing plant",
      url: "/plant6.avif",
      price: 28,
      added: false,
    },

    // Garden Plants
    {
      id: 13,
      category: "Garden",
      name: "Spider Plant",
      description: "Garden decorative plant",
      url: "/plant1.webp",
      price: 9,
      added: false,
    },
    {
      id: 14,
      category: "Garden",
      name: "Succulent",
      description: "Water storing plant",
      url: "/plant2.avif",
      price: 8,
      added: false,
    },
    {
      id: 15,
      category: "Garden",
      name: "Fern",
      description: "Lush green foliage",
      url: "/plant3.jpg",
      price: 16,
      added: false,
    },
    {
      id: 16,
      category: "Garden",
      name: "Cactus",
      description: "Desert plant",
      url: "/plant4.jpg",
      price: 13,
      added: false,
    },
    {
      id: 17,
      category: "Garden",
      name: "Orchid",
      description: "Elegant flowering plant",
      url: "/plant5.jpg",
      price: 24,
      added: false,
    },
    {
      id: 18,
      category: "Garden",
      name: "Tulip",
      description: "Colorful flowers",
      url: "/plant6.avif",
      price: 17,
      added: false,
    },
  ];

  const [plants, setPlants] = useState(plantsData);

  const handleAddToCart = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id
          ? { ...plant, added: true }
          : plant
      )
    );

    const selectedPlant = plants.find(
      (plant) => plant.id === id
    );

    dispatch(addItem(selectedPlant));
  };

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const indoorPlants = plants.filter(
    (plant) => plant.category === "Indoor"
  );

  const outdoorPlants = plants.filter(
    (plant) => plant.category === "Outdoor"
  );

  const gardenPlants = plants.filter(
    (plant) => plant.category === "Garden"
  );

  const renderPlants = (title, items) => (
    <div className="mb-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        {title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((plant) => (
          <Card key={plant.id} className="p-4 shadow-lg">
            <img
              src={plant.url}
              alt={plant.name}
              className="w-full h-64 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-bold mt-4">
              {plant.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {plant.description}
            </p>

            <p className="text-green-600 font-bold mt-3">
              ${plant.price}
            </p>

            <Button
              className="w-full mt-4"
              disabled={plant.added}
              onClick={() => handleAddToCart(plant.id)}
            >
              {plant.added
                ? "Added to Cart"
                : "Add to Cart"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {renderPlants("Indoor Plants", indoorPlants)}

        {renderPlants("Outdoor Plants", outdoorPlants)}

        {renderPlants("Garden Plants", gardenPlants)}
      </div>
    </>
  );
}