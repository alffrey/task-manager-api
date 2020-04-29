const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alffrey.george@gmail.com',
        subject: 'Welcome to Task Manager App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alffrey.george@gmail.com',
        subject: 'Sorry to see you go',
        text: `Sorry to see you go, ${name}. Please let us know how we could help you better.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}