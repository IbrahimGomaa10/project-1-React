import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openTime = 12;
  const closeTime = 22;
  const isOpen = hour >= openTime && hour <= closeTime;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openTime={openTime} closeTime={closeTime} />
      ) : (
        <p>
          We're happy to welcome you between {openTime}:00 and {closeTime}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
