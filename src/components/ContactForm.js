import React, { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    comments: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label>
          First Name <br />
          <input
            type="text"
            name="first-name"
            value={formData.firstName}
            onChange={e => handleOnChange(e)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={e => handleOnChange(e)}
        />
      </div>

      <div>
        <label>
          Any Comments <br />
          <textarea
            name="comments"
            rows="5"
            cols="40"
            value={formData.comments}
            onChange={e => handleOnChange(e)}
          ></textarea>
        </label>
      </div>

      <button type="submit">Submit The Form</button>
    </form>
  )
}

export default ContactForm
