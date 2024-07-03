import { Drink } from '../Drink';
import './menu.css';

const ziskejOdpovedi = await fetch ("http://localhost:4000/api/drinks")
const prevodNaJson = await ziskejOdpovedi.json()
const drinksZAPI = prevodNaJson.data
console.log(drinksZAPI)

export const Menu = ( drinks ) => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinksZAPI.map((drink) => (
            <Drink 
              key={drink.id}
              id={drink.id}
              name={drink.name}
              ordered={drink.ordered}
              image={drink.image}
              layers={drink.layers}
            />
          ))}
        </div>

          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
      </section>
    );
};