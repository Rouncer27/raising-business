exports.handler = async function (req, context) {
  console.log("req: ", req.body)
  const FORM_POST_URL = `https://rab.swbcreative.ca/wp-json/contact-form-7/v1/contact-forms/165/feedback`
  const formData = JSON.parse(req.body)
  
  console.log("formData: ", formData)

  const response = await fetch(FORM_POST_URL, {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  })

  console.log("response: ", response)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "That was easy!",
    }),
  }
}
