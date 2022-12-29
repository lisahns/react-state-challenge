import dishes from "./data.js";
import FilterPrice from "./FilterPrice.jsx";
import FilterCategory from "./FilterCategory.jsx";
import ListDishes from "./ListDishes.jsx";
import { useState } from "react"

function App() {
  const [price, setPrice] = useState(9)
  const [category, setCategory] = useState("all")
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice price={price} setPrice={setPrice}/>
            <FilterCategory category={category} setCategory={setCategory}/>
          </form>
        </div>
      </section>
     <ListDishes price={price} category={category}/>
    </main>
  );
}

export default App;
