import { Card } from "~/components/ui/card"
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { Button } from "~/components/ui/button";
import { increment, decrement } from "../plants/plantSlice";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";

export default function Products() {
    const plants = [
        {
            id: 1,
            category: "Indoor",
            name: "Ficus",
            description: "The Ficus is a popular houseplant known for its glossy leaves",
            url: "/plant1.webp",
            price: "$20",
            count: 0
        },
        {
            id: 2,
            category: "Indoor",
            name: "Monstera",
            description: "The Monstera is a tropical plant with large, distinctive leaves",
            url: "/plant2.avif",
            price: "$25",
            count: 0
        },
        {
            id: 3,
            category: "Outdoor",
            name: "Snake Plant",
            description: "The Snake Plant is a hardy plant that can tolerate low light and infrequent watering",
            url: "/plant3.jpg",
            price: "$15",
            count: 0
        },
        {
            id: 4,
            category: "Outdoor",
            name: "Pothos",
            description: "The Pothos is a trailing plant that is easy to care for and can thrive in a variety of conditions",
            url: "/plant4.jpg",
            price: "$10",
            count: 0
        },
        {
            id: 5,
            category: "garden",
            name: "Spider Plant",
            description: "The Spider Plant is a popular houseplant that is known for its air-purifying properties",
            url: "/plant5.jpg",
            price: "$12",
            count: 0
        },
        {
            id: 6,
            category: "garden",
            name: "Succulent",
            description: "Succulents are a diverse group of plants that store water in their leaves, making them drought-tolerant and easy to care for",
            url: "/plant6.avif",
            price: "$8",
            count: 0
        }
    ]
    const cartCount = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [flowers, setFlowers] = useState(plants);
    const [cartItems, setCartItems] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const handleEachIncrement = (id) => {

        setFlowers(prevFlowers => prevFlowers.map(p => p.id === id ? { ...p, count: p.count + 1 } : p));
        setCartItems(prevCartItems => [...prevCartItems, flowers.find(p => p.id === id)]);
        dispatch(increment());
        setIsClicked(true);
    }

    const handleEachDecrement = (id) => {
        setFlowers(prevFlowers => prevFlowers.map(p => p.id === id ? { ...p, count: p.count - 1 } : p));
        dispatch(decrement());

    }

    useEffect(() => {
        localStorage.setItem("plants", JSON.stringify(flowers));
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [flowers]);


    return (
        <>
            <Provider store={store}>

                <Navbar />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-300 mx-auto my-18">
                    {flowers.map((plant, index) => {
                        return (
                            <Card key={index} className="m-4 ">

                                <img src={plant.url} alt={plant.name} className="w-full h-64 object-cover" />
                                <h2 className=" px-4 text-xl font-bold mt-4">{plant.name}</h2>
                                <p className=" px-4 text-gray-600 mt-2">{plant.category}</p>
                                <div className="flex items-center justify-center gap-5">
                                    <Button
                                        disabled={isClicked}
                                        onClick={() => { handleEachIncrement(plant.id) }}

                                    >+</Button>
                                    <p>{plant.count}</p>
                                    <Button
                                        onClick={() => { handleEachDecrement(plant.id) }}
                                    >-</Button>
                                </div>



                                <p className=" px-4 text-gray-600 mt-2">{plant.description}</p>
                                <p className=" px-4 text-green-600 font-bold mt-2">{plant.price}</p>
                            </Card>
                        )

                    })}

                </div>

            </Provider>
        </>
    )
}
