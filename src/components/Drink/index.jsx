import { Layers } from '../Layers/layers';
import './style.css';

export const Drink = (id, name, image) => {
    return (
        <>
            <div className="drink" id={`drinks-${id}`}>
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={image} alt={name}  />
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
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
