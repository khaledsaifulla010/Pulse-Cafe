import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const allCoffee = useLoaderData();
  console.log(allCoffee);
  const [coffees,setCoffees] = useState(allCoffee)

  return (
    <div className=" mt-6 ml-4">
      {/* <h1>Coffee : {allCoffee.length} </h1> */}

      <div className="grid grid-cols-2 gap-y-12 mt-24 mb-24">
        {allCoffee.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
