import React from "react";

const CardList = ({ card }) => {
  console.log(card);
  const status = card.badge;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">


        <div className="card-body ">

            <div className="flex justify-end ">
                <h3 className={`px-2 py-1 rounded-2xl ${
                    status ===  "Best Seller" ? " bg-[#FEF3C6] text-[rgb(164,136,22)]" :
                    status === "New" ? "bg-[#DBFCE7] text-[#0fb64c]" : "bg-[#E1E7FF] text-[#4e61ae]"
                    }` }> {status}

                    </h3>
            </div>
            

          <div>
            <img className="w-15 border-1 border-gray-100 p-3 rounded-full" src={card.icon} alt="" />
          </div>

          

          <div>
            <h2 className="text-3xl font-bold mb-3">{card.title}</h2>
            <p>{card.description}</p>
          </div>

          <div className="flex justify-between">
            <span className="text-xl">
              ${card.price} {card.period}{" "}
            </span>
          </div>

          <ul className="mt-3 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{card.features[0]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{card.features[1]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{card.features[2]}</span>
            </li>
          </ul>
          <div className="mt-3">
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
