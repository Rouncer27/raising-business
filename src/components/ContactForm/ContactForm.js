import React, { useState } from "react"

import SubmitModal from "./SubmitModal"
import ErrorModal from "./ErrorModal"
import SuccessModal from "./SuccessModal"

const ContactForm = () => {
  //bump
  const [formData, setFormData] = useState({
    firstName: "",
    yourEmail: "",
    comments: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    yourEmail: null,
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
        yourEmail: "",
        comments: "",
      }
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + ":" + encodeURIComponent(data[key]))
      .join(",")
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
      // const response = await fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encode({ "form-name": "contact", ...formData }),
      // })

      const formDataArray = Object.entries(formData)
      const bodyFormData = new FormData()
      formDataArray.forEach(field => {
        bodyFormData.append(field[0], field[1])
      })

      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      })

      console.log("response", response)
      console.log("response.body", response.body)

      if (response.ok) {
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
              required={true}
            />
          </label>
        </div>

        <div>
          <label htmlFor="yourEmail">Email</label>
          <br />
          <input
            id="yourEmail"
            type="email"
            name="yourEmail"
            value={formData.yourEmail}
            onChange={e => handleOnChange(e)}
            required={true}
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
              required={true}
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
