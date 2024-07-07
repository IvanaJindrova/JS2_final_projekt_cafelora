import { OrderItem } from "../OrderItem/orderItem";

export const Order = ({ items }) => {
  return (
    <main className="order">
      <div className="container order__content">
        <h1>Vaše objednávka</h1>
        {items.length === 0 ? (
          <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) : (
          <div className="order__items">
            {items.map((item) => (
              <div key={item.id} className="order-item">
                 <OrderItem />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

