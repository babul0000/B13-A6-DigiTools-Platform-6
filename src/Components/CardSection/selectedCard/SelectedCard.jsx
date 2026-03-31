const SelectedCard = ({ carts = [] }) => {
  console.log("Cart items:", carts);

  if (!Array.isArray(carts) || carts.length === 0) {
    return (
      <div className="bg-amber-500 p-10 text-white">No items in cart yet.</div>
    );
  }

  return (
    <div className="space-y-4 p-6">
      {carts.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-xl p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
            <span className="badge badge-primary text-base">
              ${item.price}/{item.period}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {item.features?.map((feature, index) => (
              <span key={index} className="badge badge-outline">
                {feature}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedCard;
