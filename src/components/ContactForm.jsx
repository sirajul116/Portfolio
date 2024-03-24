import React, { useState } from 'react';

// const show = false;

function ContactForm() {
  const [show, setShow] = useState(false);
  const showForm = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="grid place-items-center ">
      {show && (
        <div className="border-4 rounded-md p-6 m-4 ">
          <form>
            <p>
              <b>Your Name:</b>
            </p>
            <input
              type="text"
              name="Name"
              placeholder=" Your Name"
              required
              className="border-4 pl-6 pr-6 pt-1 pb-1 rounded-md"
            />
            <p>
              <b>Your Mail:</b>
            </p>
            <input
              type="email"
              name="Email"
              placeholder=" Your Mail"
              required
              className="border-4 pl-6 pr-6 pt-1 pb-1 rounded-md"
            />
            <p>
              <b>Type Message:</b>
            </p>
            <textarea
              name="Message"
              rows="6"
              placeholder=" Your Message"
              className="border-4 pl-6 pr-6 pt-1 pb-1 rounded-md"
            ></textarea>
            <div className="space-x-2 p-2">
              <button type="button" className="border p-2 rounded">
                <b>Submit</b>
              </button>
              <button
                type="button"
                onClick={showForm}
                className="border p-2 rounded"
              >
                <b>Cancle</b>
              </button>
            </div>
          </form>
        </div>
      )}
      <button onClick={showForm} className="border p-2 rounded-md">
        Write Message
      </button>
    </div>
  );
}

export default ContactForm;
