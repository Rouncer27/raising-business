exports.handler = async (event, context) => {
  console.log("event: ", event)
  console.log("contextevent: ", context)
  const { email } = JSON.parse(event.body)
  console.log("email: ", email)

  return {
    statusCode: 200,
    body: JSON.stringify({ email }),
  }
}
