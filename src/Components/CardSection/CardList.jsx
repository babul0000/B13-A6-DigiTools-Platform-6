import React, { useState } from "react";

// Props হিসেবে setNumber এবং number অবশ্যই নিতে হবে
const CardList = ({ card, setNumber, number }) => {
  const [isAdded, setIsAdded] = useState(false);

  const status = card.badge;

  const handleClick = () => {
    if (!isAdded) {
      setIsAdded(true);
      // এই লাইনটি নেভিবারের সংখ্যা বাড়াবে
      if (setNumber) {
        setNumber(number + 1);
      }
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <div className="card-body">
        {/* ... বাকি কোড ... */}
        
        <div className="mt-3">
          <button
            onClick={handleClick} // বাটনটি এখন ক্লিক করা যাবে
            className={`btn btn-block rounded-full text-white border-none transition-all ${
              isAdded ? "bg-green-600" : "bg-indigo-600"
            }`}
          >
            {isAdded ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;