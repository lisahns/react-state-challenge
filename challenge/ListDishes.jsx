import dishes from "./data.js";

// Get all unique categories from the array of dishes
const categories = [...new Set(dishes.map((dish) => dish.category))];

export default function ListDishes({price, category})  {
    return (
        <section aria-label="dishes">
        <ul className="grid">
          {dishes
          .filter((dish) => dish.price <= price)
          .filter((dish) => dish.category === category || category === "all")
          .map((dish) => (
            <li key={dish.id} className="card">
              <h3>{dish.name}</h3>
              {dish.description && <p>{dish.description}</p>}
              <div>£{dish.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </section>
    )
}