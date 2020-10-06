import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
import { BtnMain, fontSizer } from "../styles/helpers"

import FormSuccess from "./Modals/FormSuccess"
import FormError from "./Modals/FormError"
import FormSubmitting from "./Modals/FormSubmitting"

const InputButtonStyled = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;
  width: 100%;
  text-align: left;

  button {
    ${BtnMain};
  }
`

const IntputStyled = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  margin: 0 1rem;
  padding-top: 2rem;

  @media (min-width: 768px) {
    width: ${props =>
      props.fullWidth ? "calc(100% - 2rem)" : "calc(50% - 2rem)"};
  }

  label {
    ${fontSizer(1.2, 1.4, 76.8, 150, 2)};
    display: inline-block;
    width: 100%;
    text-align: left;

    span {
      ${fontSizer(1, 1, 76.8, 150, 1.4)};
    }
  }

  #field-error-message {
    ${fontSizer(1.2, 1.4, 76.8, 150, 2)};
    position: absolute;
    top: 0;
    left: 0rem;
    color: red !important;
    z-index: 10;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 0.1rem solid var(--accent);

    &:focus {
      border-color: var(--tertiary);
      box-shadow: 0 0 0.1rem 0.1rem var(--tertiary);
      outline: none;
    }
  }
`

const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  max-width: 75rem;
  margin-right: auto;
  margin-left: 0;
  margin-bottom: 5rem;
`

const MailChimpForm = () => {
  const nameErrorMessage = false
  const emailErrorMessage = false
  const [formFeilds, setFormFields] = useState({
    FNAME: "",
    LNAME: "",
    EMAIL: "",
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: "",
  })

  const onChangeFields = e => {
    setFormFields({ ...formFeilds, [e.target.name]: e.target.value })
  }

  const submitTheForm = e => {
    e.preventDefault()

    setFormFields({
      ...formFeilds,
      submitting: true,
      errors: "",
    })

    const listFields = {}
    listFields.FNAME = formFeilds.FNAME
    listFields.LNAME = formFeilds.LNAME

    addToMailchimp(formFeilds.EMAIL, listFields)
      .then(data => {
        setTimeout(() => {
          if (data.result !== "error") {
            emailSentSuccess(data.msg)
          } else {
            formHasErrors(data.msg)
          }
        }, 2000)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const fixTheFormErrors = () => {
    setFormFields({
      ...formFeilds,
      errorWarnDisplay: false,
      submitting: false,
    })
  }

  const emailSentSuccess = () => {
    setFormFields({
      ...formFeilds,
      submitting: false,
      success: true,
    })
  }

  const formHasErrors = errorsFields => {
    setFormFields({
      ...formFeilds,
      submitting: false,
      errorWarnDisplay: true,
      errorMsg: errorsFields,
    })
  }

  const successAndClearForm = () => {
    setFormFields({
      ...formFeilds,
      FNAME: "",
      LNAME: "",
      EMAIL: "",
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: "",
    })
  }

  return (
    <FormStyled onSubmit={e => submitTheForm(e)}>
      <IntputStyled>
        <label htmlFor="FNAME">
          First Name* <span>(required)</span>
        </label>
        {nameErrorMessage}
        <input
          id="FNAME"
          name="FNAME"
          type="text"
          required={false}
          value={formFeilds.FNAME}
          onChange={e => onChangeFields(e)}
        />
      </IntputStyled>
      <IntputStyled>
        <label htmlFor="LNAME">
          Last Name* <span>(required)</span>
        </label>
        {nameErrorMessage}
        <input
          id="LNAME"
          name="LNAME"
          type="text"
          required={false}
          value={formFeilds.LNAME}
          onChange={e => onChangeFields(e)}
        />
      </IntputStyled>
      <IntputStyled fullWidth={true}>
        <label htmlFor="EMAIL">
          Email* <span>(required)</span>
        </label>
        {emailErrorMessage}
        <input
          id="EMAIL"
          name="EMAIL"
          type="email"
          required={false}
          value={formFeilds.EMAIL}
          onChange={e => onChangeFields(e)}
        />
      </IntputStyled>
      <InputButtonStyled className="download-form--btn">
        <button type="submit">Sign Up</button>
      </InputButtonStyled>
      {formFeilds.submitting && <FormSubmitting />}
      {formFeilds.errorWarnDisplay && (
        <FormError
          fixTheFormErrors={fixTheFormErrors}
          errorMessage={formFeilds.errorMsg}
        />
      )}
      {formFeilds.success && (
        <FormSuccess successAndClearForm={successAndClearForm} />
      )}
    </FormStyled>
  )
}

export default MailChimpForm
