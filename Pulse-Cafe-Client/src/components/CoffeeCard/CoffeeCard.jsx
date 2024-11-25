const CoffeeCard = ({ coffee }) => {
  const { name, supplier, category, chef, taste, details, photo_url } = coffee;
  return (
    <div>
      <div className="card bg-base-100 w-[600px] h-[300px] border-2  ">
        <div className="flex items-center justify-evenly mt-6">
          <div>
            <img className="h-[200px]" src={photo_url} />
          </div>
          <div className="space-y-4 text-lg">
            <h1 className="font-bold text-lg ">
              Name:
              <span className="font-semibold text-slate-500 text-lg ml-2">
                {name}
              </span>
            </h1>
            <h1 className="font-bold text-lg ">
              Chef:
              <span className="font-semibold text-slate-500 text-lg ml-2">
                {chef}
              </span>
            </h1>
            <h1 className="font-bold text-lg ">
              Supplier:
              <span className="font-semibold text-slate-500 text-lg ml-2">
                {supplier}
              </span>
            </h1>
            <h1 className="font-bold text-lg ">
              Taste:
              <span className="font-semibold text-slate-500 text-lg ml-2">
                {taste}
              </span>
            </h1>
            <h1 className="font-bold text-lg ">
              Category:
              <span className="font-semibold text-slate-500 text-lg ml-2">
                {category}
              </span>
            </h1>
            <h1 className="font-bold text-lg ">
              Details:
              <span className="font-semibold text-slate-500 text-lg ml-2">
                {details}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
