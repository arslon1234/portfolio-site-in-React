import "./contact.scss";
import contact from "../../assets/images/contact6.jpg";
import { useState } from "react";
export default function Contact() {
  const [message, setMessage] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img className="contactimg" src={contact} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Messages"></textarea>
          <button type="Submit">Send</button>
          {message ? <span>Thanks your message :)</span> : ""}
        </form>
      </div>
    </div>
  );
}
