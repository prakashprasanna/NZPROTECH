const ContactMap = () => {
  return (
    <div className="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.480517772446!2d170.5354179!3d-45.881701899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82eac32ff2c57db%3A0x7d100302919916ca!2s207%20Larnach%20Road%2C%20Waverley%2C%20Dunedin%209013!5e0!3m2!1sen!2snz!4v1717836574192!5m2!1sen!2snz"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
