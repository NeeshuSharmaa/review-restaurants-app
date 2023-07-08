import { useDataContext } from "../../components/contexts/DataContextProvider";
import Dish from "../../components/dish/Dish";
import "./Home.css";

export default function Home() {
  const {
    dispatch,
    state: { cuisineData, selectedCuisine, restaurantsData },
  } = useDataContext();

  const cuisine = restaurantsData.reduce(
    (acc, curr) =>
      curr.cuisine_id === selectedCuisine
        ? { ...acc, resName: curr.name, menu: curr.menu }
        : acc,
    {}
  );

  return (
    <div className="home">
      <h1>Food ordering App </h1>
      <h2>Select your Cuisine</h2>
      <div className="cuisine-btns">
        {cuisineData.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => dispatch({ type: "SELECT_CUISINE", payload: id })}
          >
            {name}
          </button>
        ))}
      </div>
      {selectedCuisine && (
        <div className="dishes">
          {cuisine.menu?.map((dish) => (
            <Dish key={dish.name} {...dish} resName={cuisine.resName} />
          ))}
        </div>
      )}
      {!selectedCuisine && (
        <div className="dishes-per-res">
          {restaurantsData.map((res) => (
            <div className="res" key={res.id}>
              <h2>Dishes by {res.name}</h2>
              <div className="dishes">
                {res.menu.map((dish) => (
                  <Dish key={dish.name} {...dish} resName={res.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
