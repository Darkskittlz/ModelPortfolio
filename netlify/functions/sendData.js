require('dotenv').config()
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);



exports.handler = async function (event, context, callback) {
    try {
        console.log('event', event);
        const name = event.queryStringParameters.name
        const email = event.queryStringParameters.email
        const mood = event.queryStringParameters.mood
        const message = event.queryStringParameters.message
        const email2 = "tristanneal@pm.me"

        const payload = {
            to: `${name} <${email}>`,
            dynamicTemplateData: {
                subject: `Hi ${name}, its Tristan!`,
                greeting: `Hi ${name}, I'll be sure to respond to your email soon. Or feel free to send me a text. `,
                mood: `${mood}`,
                message: `${message}`,
                signature: `Thanks,`,
                signature2: `Tristan`,
                phone: `Phone: 786-475-7908`
            }
        }

        const payload2 = {
            to: `Model Site Sendgrid E-Mail <${email2}>`,
            dynamicTemplateData: {
                subject: `New Email from ${name}`,
                email: `${email}`,
                mood: `${mood}`,
                message: `${message}`,
                message2: `Yoooo, this is an email from your Model Portfolio site`
            }
        }

        await mail.send({
            from: 'Tristan <noreply@darkmeowproductions.com>',
            replyTo: "noreply@darkmeowproductions.com",
            templateId: 'd-3b4091f044574fe98b4461b6cc0f3d01',
            personalizations: [payload, payload2]
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email Sent!' }),
        };
    } catch (error) {
        console.log(error.response.body);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'ERROR SENDING EMAIL' }),
        };
    }
}