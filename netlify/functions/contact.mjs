exports.handler = async function (req, context) {
  console.log("req: ", req.body)
  const FORM_POST_URL = `https://rab.swbcreative.ca/wp-json/contact-form-7/v1/contact-forms/165/feedback`
  const formData = req.body

  const formDataArray = Object.entries(formData)
  const bodyFormData = new FormData()
  formDataArray.forEach(field => {
    bodyFormData.append(field[0], field[1])
  })

  const response = await fetch(FORM_POST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: bodyFormData,
  })

  console.log("response: ", response)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "That was easy!",
    }),
  }
}
