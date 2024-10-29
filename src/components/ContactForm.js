import React from "react"

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      netlify
      onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label>
          First Name <br />
          <input type="text" name="first-name" />
        </label>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input id="email" type="email" name="email" />
      </div>

      <div>
        <label>
          Any Comments <br />
          <textarea name="comments" rows="5" cols="40"></textarea>
        </label>
      </div>

      <button type="submit">Submit The Form</button>
    </form>
  )
}

export default ContactForm
