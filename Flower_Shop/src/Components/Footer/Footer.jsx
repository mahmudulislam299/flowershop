import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer">
        <div>
          <img
            className="footer_logo"
            src="https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg"
            alt="Shahbag Cake Shop Logo"
          />
        </div>
        <div className="Contact_info">
          <p className="footer_heading">Contact Information</p>
          <p>📞 +880 1712-345678</p>
          <p>🏠 Shahbag More, Ramna, Dhaka-1000, Bangladesh</p>
          <p>✉️ info@shahbagcakes.com</p>
        </div>
        <div className="Contact_info">
          <p className="footer_heading">Opening Hours</p>
          <p>🕐 Sunday – Thursday <span>9 AM – 10 PM</span></p>
          <p>🕐 Friday <span>3 PM – 10 PM</span></p>
          <p>🕐 Saturday <span>9 AM – 11 PM</span></p>
        </div>
      </div>
      <p className="footer_p">
        Choose <strong>Shahbag Cake Shop</strong> for fresh, made-to-order cakes,
        cupcakes and desserts for birthdays, weddings and all your special days.
      </p>
      <p className="footer_p">
        We offer same-day cake delivery across Dhaka city, including Dhanmondi, Banani,
        Gulshan, Motijheel and Old Dhaka. Order online and get your cake delivered with
        care.
      </p>
    </div>
  );
};
