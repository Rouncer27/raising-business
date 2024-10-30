exports.handler = async (event, context) => {
  console.log("event: ", event)
  console.log("contextevent: ", context)
  const { email } = JSON.parse(event.body)
  console.log("email: ", email)
}
