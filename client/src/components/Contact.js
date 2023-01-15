import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 ">
              <div className="phone p-3 h">Phone</div>
              <div className="phone-no p-3 h">79830598903</div>
            </div>
            <div className="col-md-4 ">
              <div className="email p-3 h">Email</div>
              <div className="email-id p-3 h">aryan@gmail.com</div>
            </div>
            <div className="col-md-4 ">
              <div className="address p-3 h">Address</div>
              <div className="address-text p-3 h">bhopal</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container c-1">
      <form>
        <input
          name="name"
          placeholder="What is your name?"
          class="name"
          required
        />
        <input
          name="emailaddress"
          placeholder="What is your email?"
          class="email"
          type="email"
          required
        />
        <textarea
          rows="4"
          cols="50"
          name="subject"
          placeholder="Please enter your message"
          class="message"
          required
        ></textarea>
        <input name="submit" class="btn" type="submit" value="Send" />
      </form>
      </div>
    </>
  );
};

export default Contact;
