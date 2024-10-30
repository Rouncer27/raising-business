import axios from "axios"

exports.handler = async function (req, context) {
  console.log("req Type:  ", typeof req.body)
  console.log("req : ", req.body)
  const FORM_POST_URL = `https://rab.swbcreative.ca/wp-json/contact-form-7/v1/contact-forms/165/feedback`
  const config = { headers: { "Content-Type": "multipart/form-data" } }
  const formData = JSON.parse(req.body)

  console.log("formData: ", formData)

  const formDataArray = Object.entries(formData)
  const bodyFormData = new FormData()
  formDataArray.forEach(field => {
    bodyFormData.append(field[0], field[1])
  })

  const response = await axios.post(FORM_POST_URL, formData, config)

  // const response = await fetch(FORM_POST_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "multipart/form-data" },
  //   body: bodyFormData,
  // })

  console.log("response: ", response)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "That was easy!",
    }),
  }
}
