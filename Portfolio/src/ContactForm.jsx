import { useState } from "react";
import { sendEmail } from "./server";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    contactReason: '',
  });

  const [alert, setAlert] = useState(null);
  const [loader, setLoader] = useState(false);

  function handleChange(id, value) {
    setFormData({...formData, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setLoader(true);
    sendEmail(formData).then((response) => {
      if (response.status === 'success') {
        setAlert('success');
      } else if (response.status === 'error') {
        setAlert('error');
      } else {
        alert('Something went wrong');
      }
      setLoader(false);
    });
  }

  return (
    <>
      <div className="row" id="overlayerContainer">
        <form className="col-sm-4" id="form" onSubmit={handleSubmit}>
          {alert === 'success'? (
            <div key="alert-success" className="alert alert-success" id="alert" role="alert">
              Your message has been sent successfully!
            </div>
          ) : alert === 'error'? (
            <div key="alert-error" className="alert alert-danger" id="alert" role="alert">
              There was an error sending your message. Please try again.
            </div>
          ) : null}
          <h2 className="contact_me">Contact Me</h2>
          <div className="col">
            <label for="validationCustom01" className="form-label">Your Name</label>
            <input type="text" className="form-control" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} id="name" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col">
            <label for="validationCustomUsername" className="form-label">Mobile Number</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">+91</span>
              <input type="text" className="form-control" value={formData.mobileNumber} onChange={(e) => handleChange('mobileNumber', e.target.value)} id="mobileNumber" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div className="col">
            <label className="form-label">Reason for Contacting me</label>
            <textarea className="form-control" value={formData.contactReason} onChange={(e) => handleChange('contactReason', e.target.value)} id="contactReason" placeholder="Required example textarea" required></textarea>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-outline-primary contact_btn" type="submit" style={{ marginTop: '20px' }}>
              Send Me
            </button>
          </div>
          <br />
          {loader? (
            <div key="loader" className="spinner-border text-primary loader" id="loader" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
}