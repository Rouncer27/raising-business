import axios from "axios"

exports.handler = async function (req, context) {
  const FORM_POST_URL = `https://rab.swbcreative.ca/wp-json/contact-form-7/v1/contact-forms/165/feedback`
  const config = { headers: { "Content-Type": "multipart/form-data" } }
  const formData = JSON.parse(req.body)

  const formDataArray = Object.entries(formData)
  const bodyFormData = new FormData()
  formDataArray.forEach(field => {
    bodyFormData.append(field[0], field[1])
  })

  const response = await axios.post(FORM_POST_URL, formData, config)

  console.log("response.status: ", response.status)
  console.log("response.data: ", response.data)

  return {
    statusCode: response.status,
    body: JSON.stringify({
      data: response.data
    }),
  }
}
