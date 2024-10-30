exports.handler = async function (req, context) {
  console.log("req: ", req.body)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "That was easy!",
    }),
  }
}
