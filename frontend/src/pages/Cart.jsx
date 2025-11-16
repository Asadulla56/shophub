import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Cart</h1>
          <p className="text-lg">Your cart is empty.</p>
        </div>
      </main>
    </div>
  );
};

export default Cart;
