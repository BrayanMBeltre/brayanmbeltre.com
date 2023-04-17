import React, { useState } from "react";
import emailjs from "emailjs-com";

const contactData = {
  email: ["brayanmb07@gmail.com"],
  github: "github.com/brayanMBeltre",
  telegram: "t.me/BrayanMBeltre",
  linkedin: "linkedin.com/in/brayanmbeltre",
};

const initialFormData = {
  from_name: "",
  reply_to: "",
  message: "",
};

function Contact() {
  const [formdata, setFormdata] = useState(initialFormData);

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setisSending] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formdata.from_name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.reply_to) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setisSending(true);
      setError(false);
      console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
      try {
        const res = await emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          event.target,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        setisSending(false);
        console.log(res);

        setError(false);
        setFormdata(initialFormData);
        setMessage("You message has been sent!!!");
      } catch (error) {
        console.log(error);
        setisSending(false);
        setError(true);
        setMessage("Something went wrong...");
      }
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      <div className="row col-md-12 mb-10 mb-md-0">
        <div className="col-md-6 contact-info mb-5">
          <i className="icon-envelope"></i>
          <div className="details">
            <h5>Email</h5>
            <a
              href="mailto:brayanmbeltre@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactData.email}
            </a>
          </div>
        </div>
        <div className="col-md-6 contact-info mb-5">
          <i className="icon-phone"></i>
          <div className="details">
            <h5>GitHub</h5>
            <a
              href={`https://${contactData.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactData.github}
            </a>
          </div>
        </div>
        <div className="col-md-6 contact-info mb-5">
          <i className="icon-location-pin"></i>
          <div className="details">
            <h5>Linkedin</h5>
            <a
              href={`https://${contactData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactData.linkedin}
            </a>
          </div>
        </div>
        <div className="col-md-6 contact-info mb-5">
          <i className="icon-location-pin"></i>
          <div className="details">
            <h5>Telegram</h5>
            <a
              href={`https://${contactData.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactData.telegram}
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-40">
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="row">
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="from_name"
                  id="from_name"
                  placeholder="Your name"
                  onChange={handleChange}
                  value={formdata.from_name}
                />
              </div>
            </div>

            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="reply_to"
                  id="reply_to"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formdata.reply_to}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formdata.message}
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-default"
            disabled={isSending}
          >
            <i className="icon-paper-plane"></i>Send Message
          </button>
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;
