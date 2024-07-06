import { Layers } from '../Layers/layers';
import './style.css';

export const Drink = ({id, name, image, ordered, layers}) => {
    return (
        <>
            <div className="drink" id={id}>
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={`http://localhost:4000${image}`} alt={name}  />
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
                  {layers.map((layer,index) =><Layers key={index} color={layer.color} label={layer.label}/>)}
                </div>
              </div>              
                <form data-id={id} className="drink__controls">
                  <input type="hidden" className="order-id" value="0" />
                  <button className={`order-btn ${ordered ? 'order-btn--ordered' : ''}`}>
                  {ordered ? 'Zrušit' : 'Objednat'}
                </button>
              </form>
              </div>
        </>
    )
}
