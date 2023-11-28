const Order = ({ openTime, closeTime }) => {
  return (
    <div className="order">
      <p>
        We're open from {openTime}:00 to {closeTime}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
