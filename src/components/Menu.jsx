import { pizzaData } from "../data";
import Pizza from "./Pizza";
const Menu = () => {
  const pizzaNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaNum > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {pizzaNum} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
