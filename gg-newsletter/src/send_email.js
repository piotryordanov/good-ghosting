const mailjet = require('node-mailjet')
    .connect('', '')


const send_email = (email_to) => {
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "",
                        "Name": ""
                    },
                    "To": [
                        {
                            "Email": email_to,
                        }
                    ],
                    "Subject": "Greetings, from GoodGhosting",
                    "TextPart": "My first Mailjet email",
                    "HTMLPart": "<h3>Dear player,<h3/> <br />Welcome to <a href='https://goodghosting.com/'>GoodGhosting</a>!",
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
}
module.exports = send_email;