import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, supplier, category, chef, taste, details, photo_url } =
    coffee;

  const redirect = useNavigate();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
              redirect("/");
            }
          });
      }
    });
  };

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
          <Link
            to={`/updateCoffee/${_id}`}
            className="border-2 p-2 rounded-xl w-full bg-orange-200 font-bold text-orange-600 border-orange-300 text-lg text-center"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="border-2 p-2 rounded-xl w-full bg-red-200 font-bold text-red-600 border-red-300 text-lg"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
