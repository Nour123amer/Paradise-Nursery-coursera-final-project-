import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from "~/components/ui/button";

export default function Cart() {
  const [cartItems, setCartItems] = React.useState([]);
  const cartCount = useSelector((state) => state.counter.count);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className='mt-26'>
        <h1 className='text-3xl font-bold text-center mt-10'>Your Cart</h1>
        <p className='text-center mt-4 text-gray-600 mb-8'>Your selected plants will appear here.</p>
      </div>


      <div className='flex  justify-center mt-10 relative'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn bg-green-500 text-white p-1.5 rounded-md font-bold cursor-pointer" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
        <dialog id="my_modal_1" className="modal p-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   ">
          <div className="modal-box min-w-[300px]">
            {/* show cart items */}
            <h3 className="font-bold text-lg">Cart Items {cartItems.length}</h3>
            <div className='flex flex-col gap-4'>
              {cartItems?.map((item) => (
                <div key={item.id} className='flex items-center  gap-8'>
                  <img src={item.url} alt={item.name} className='w-16 h-16 object-cover rounded-md' />
                  <div>
                    <h4 className='font-bold'>{item.name}</h4>
                     {/* <div className="flex items-center justify-center gap-5">
                                    <Button
                                        onClick={() => { handleEachIncrement(plant.id) }}

                                    >+</Button>
                                    <p>{plant.count}</p>
                                    <Button
                                        onClick={() => { handleEachDecrement(plant.id) }}
                                    >-</Button>
                                </div> */}
                    <p>Quantity : {item.count}</p>
                     {/* show price for each plant */}
                    <p className='text-green-600 font-bold'>{item.price}</p>
                    <Button className='bg-red-500 text-white p-1.5 rounded-md mt-2' onClick={() => {
                      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
                      localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((cartItem) => cartItem.id !== item.id)));
                    }}>Remove</Button>
                  
                  </div>
               
                </div>
              ))}
              {/* show total price */}
              <div className='flex items-center justify-between mt-4'>
                <h4 className='font-bold text-lg'>Total Price</h4>
                <p className='text-green-600 font-bold'>${cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * 1, 0)}</p>
              </div>

            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button 
                className="btn cursor-pointer bg-green-500 text-white p-1.5 rounded-md float-right">
                  Coming Soon</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

    {/* return to products page */}
      <Button 
      className="btn bg-green-500 text-white p-1.5 rounded-md font-bold cursor-pointer
      float-right mt-10 mr-10"
      onClick={() => navigate('/products')}>Return to Shop</Button>
    </>
  )
}
