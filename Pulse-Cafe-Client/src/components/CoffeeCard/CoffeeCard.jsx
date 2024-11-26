const CoffeeCard = ({ coffee }) => {
  const { name, supplier, category, chef, taste, details, photo_url } = coffee;
  return (
    <div>
      <div className="card bg-base-100 w-[650px] h-[400px] border-2  ">
        <div className="flex items-center justify-between gap-8 mt-6">
          <div>
            <img className="w-[200px] h-[200px] ml-8" src={photo_url} />
          </div>
          <div className="space-y-4 text-lg">
            <div class="card-body">
              <h2 class="card-title">Name: {name}</h2>
              <h2 class="card-title">Chef: {chef}</h2>
              <h2 class="card-title">Supplier: {supplier}</h2>
              <h2 class="card-title">Taste: {taste} </h2>
              <h2 class="card-title">Category: {category} </h2>
              <h2 class="card-title">Details: {details} </h2>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around gap-12 px-2">
          <button className="border-2 p-2 rounded-xl w-full bg-blue-200 font-bold text-blue-600 border-blue-300 text-lg">
            View
          </button>
          <button className="border-2 p-2 rounded-xl w-full bg-orange-200 font-bold text-orange-600 border-orange-300 text-lg">
            Edit
          </button>
          <button className="border-2 p-2 rounded-xl w-full bg-red-200 font-bold text-red-600 border-red-300 text-lg">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
