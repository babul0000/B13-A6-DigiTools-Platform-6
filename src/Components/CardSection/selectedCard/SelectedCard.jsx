import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const SelectedCard = ({ carts = [], setcarts, setNumber }) => {
  console.log("Cart items:", carts);

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);

  const handlePayment = () => {
    setcarts([]);
    if (setNumber) setNumber(0);
    toast.success("Payment successful!");
  };

  const handleRemoveItem = (id) => {
    setcarts((prev) => prev.filter((item) => item.id !== id));
    if (setNumber) setNumber((prev) => Math.max(0, prev - 1));
    toast.error("Item removed from cart!");
  };

  return (
    <div className="w-11/12 mx-auto rounded-lg shadow-md space-y-4 p-6 border-1 border-gray-300 mb-10">
      <div>
        <h2 className="text-xl font-bold">Your Cart</h2>
      </div>

      {carts.length === 0 ? (
        <div className="bg-[#627382] p-10 text-white rounded-lg text-center ">
          <h2 className="flex justify-center mb-2">
            {" "}
            <ShoppingCart />
          </h2>
          <h2>Your cart is empty.</h2>
        </div>
      ) : (
        carts.map((item) => (
          <div key={item.id} className="bg-[#F9FAFC] shadow-md rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <div>
                  <img
                    className="bg-white w-15 border-1 border-gray-100 p-3 rounded-full"
                    src={item.icon}
                    alt={item.title}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <h2 className="text-[#627382]">${item.price}</h2>
                </div>
              </div>

              <button
                className="text-red-500 hover:text-red-700 font-semibold"
                onClick={() => handleRemoveItem(item.id)}
              >
                remove
              </button>
            </div>
          </div>
        ))
      )}

      <div className="flex justify-between">
        <h2 className="text-[#627382]">Total</h2>
        <h2 className="text-2xl font-bold">${totalPrice}</h2>
      </div>

      <button
        className={`btn btn-primary w-full rounded-full ${
          carts.length === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePayment}
        disabled={carts.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default SelectedCard;
