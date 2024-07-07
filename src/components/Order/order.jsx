import { OrderItem } from "../OrderItem/orderItem";

export const Order = ({ items }) => {
  return (
      <div className="container order__content">
        <h1>Vaše objednávka</h1>
        {items.length === 0 ? (
          <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) : (
          <div className="order__items">
            {items.map((item) => (
              <div key={item.id} className="order-item">
                 <OrderItem key={item.id} name={item.name} image={`http://localhost:4000${item.image}`} />
              </div>
            ))}
          </div>
        )}
      </div>
  );
};




