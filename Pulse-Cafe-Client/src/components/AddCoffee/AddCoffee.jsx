const AddCoffee = () => {
  return (
    <div>
      <h1>AddCoffee</h1>

      <div className="card bg-base-100 w-[1200px] ml-24 mt-12 border-2 mb-12">
        <form className="card-body">
          <div className="flex items-center justify-between font-bold ">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Coffee Name"
                  className="input input-bordered w-[500px]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter Coffee Supplier"
                  className="input input-bordered w-[500px]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Coffee Category"
                  className="input input-bordered w-[500px]"
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter Coffee Chef"
                  className="input input-bordered w-[500px]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter Coffee Taste"
                  className="input input-bordered w-[500px]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter Coffee Details"
                  className="input input-bordered w-[500px]"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Photo</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Enter Photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="border-2 p-2 rounded-xl w-full font-bold text-xl bg-[#D2B48C] text-[#331A15]">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
