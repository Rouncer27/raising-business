exports.handler = async function (req, context) {
  console.log("req: ", req.body)
  const formData = req.body
  console.log("formData: ", formData)

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const FORM_POST_URL = `https://rab.swbcreative.ca/wp-json/contact-form-7/v1/contact-forms/165/feedback`

  const response = await fetch(FORM_POST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ ...formData }),
  })

  console.log("response: ", response)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "That was easy!",
    }),
  }
}
