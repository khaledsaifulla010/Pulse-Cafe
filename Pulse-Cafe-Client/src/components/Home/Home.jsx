import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allCoffee = useLoaderData();
  console.log(allCoffee);

  return (
    <div className=" mt-6 ml-4">
      <h1>Coffee : {allCoffee.length} </h1>
    </div>
  );
};

export default Home;
