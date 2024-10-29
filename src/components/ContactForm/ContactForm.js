import React, { useState } from "react"

import SubmitModal from "./SubmitModal"
import ErrorModal from "./ErrorModal"
import SuccessModal from "./SuccessModal"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    comments: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    error: null,
    captachError: false,
  })

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: null,
      captachError: false,
    })

    clearFormFields()
  }

  const clearFormFields = () => {
    setFormData(() => {
      return {
        firstName: "",
        email: "",
        comments: "",
      }
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setFormStatus(prevState => {
      return {
        ...prevState,
        submitting: true,
        errors: [],
      }
    })

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })

      console.log(response.ok)

      if (response.ok) {
        console.log("Success: ", response)
        setFormStatus({
          ...formStatus,
          submitting: false,
          errorWarnDisplay: false,
          success: true,
          errors: [],
        })
        clearFormFields()
      } else {
        throw new Error(`Contact Form was not sent - ${response.statusText}`)
      }
    } catch (error) {
      console.log("error: ", error)
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        error,
      })
    }

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...formData }),
    // })
    //   .then(() => {

    //     setFormStatus({
    //       ...formStatus,
    //       submitting: false,
    //       errorWarnDisplay: false,
    //       success: true,
    //       errors: [],
    //     })
    //     clearFormFields()
    //   })
    //   .catch(error => {
    //     setFormStatus({
    //       ...formStatus,
    //       submitting: false,
    //       errorWarnDisplay: true,
    //       success: false,
    //       error,
    //     })
    //   })
  }

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>
            First Name <br />
            <input
              type="text"
              name="firstName"
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
      {formStatus.submitting && <SubmitModal />}
      {formStatus.success && (
        <SuccessModal handleSuccessModalClose={handleSuccessModalClose} />
      )}
      {formStatus.errorWarnDisplay && (
        <ErrorModal
          handleErrorModalClose={handleErrorModalClose}
          errorMessage={formStatus.error}
        />
      )}
    </>
  )
}

export default ContactForm
