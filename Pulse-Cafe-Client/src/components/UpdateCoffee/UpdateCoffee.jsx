import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, category, chef, taste, details, photo_url } =
    coffee;

  const redirects = useNavigate();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo_url = form.photo_url.value;
    const updatedCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo_url,
    };
    console.log(updatedCoffee);

    // Send a new coffee in server //

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee Updated Successfully!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Opps",
            text: "Something went wrong!",
            icon: "error",
          });
        }
        redirects("/");
      });
  };

  return (
    <div>
      <div className="card bg-[#F4F3F0] w-[1200px] h-[600px] ml-24 mt-12 mb-12">
        <h1 className="text-center font-black text-4xl mt-9">Update Coffee</h1>

        {/* FORM START */}

        <form onSubmit={handleUpdateCoffee} className="card-body ">
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
                  className="input  w-[500px]"
                  required
                  defaultValue={name}
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
                  className="input  w-[500px]"
                  required
                  defaultValue={supplier}
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
                  className="input  w-[500px]"
                  required
                  defaultValue={category}
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
                  className="input  w-[500px]"
                  required
                  defaultValue={chef}
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
                  className="input  w-[500px]"
                  required
                  defaultValue={taste}
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
                  className="input  w-[500px]"
                  required
                  defaultValue={details}
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
              name="photo_url"
              placeholder="Enter Photo URL"
              className="input  w-full"
              required
              defaultValue={photo_url}
            />
          </div>
          <div className="form-control mt-6">
            <input
              className=" p-2 rounded-xl w-full font-bold text-xl bg-[#D2B48C] text-[#331A15]"
              type="submit"
              value="Update Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
