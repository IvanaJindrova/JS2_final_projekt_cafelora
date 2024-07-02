import { Layers } from '../Layers/layers';
import './style.css';

const dataDrink = {
  name: "Ivanky pití",
  image: "/favicon.ico"
}



export const Drink = (id, name, image) => {
    return (
        <>
            <div className="drink" id={`drink-${id}`}>
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={dataDrink.image} alt={name}  />
                </div>
                <div className="drink__info">
                  <h3>{dataDrink.name}</h3>
                  <Layers />

                </div>
              </div>              
                <form className="drink__controls">
                <input type="hidden" className="order-id" value="0" />
                <button className="order-btn">
                  Objednat
                </button>
              </form>
              </div>
        </>
    )
}
