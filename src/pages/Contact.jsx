import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Contact view: displays contact information and a form that captures
// first name, last name, phone number, email, and message. Per the
// assignment brief, the form does not send or store the message — it
// only needs to capture the entered values (kept in component state)
// and then return the visitor to the Home page on submission.
const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    // Values are captured in formData above. No backend call is made,
    // per the Assignment 1 requirements. Redirect to Home after submit.
    navigate('/')
  }

  return (
    <section className="contact">
      <h1>Contact</h1>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Email: michael.johnson@example.com</p>
          <p>Phone: +1 (416) 555-0142</p>
          <p>Location: Toronto, Canada</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Contact number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
