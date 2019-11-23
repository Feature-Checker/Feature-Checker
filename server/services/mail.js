const nodemailer = require('nodemailer')

const credentials = {
    user: 'alberto9@ethereal.email',
    pass: 'mMbGVCW6k3TftraZru'
}

const send = async (template) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: credentials.user,
            pass: credentials.pass
        }
    });

    const mailOptions = {
        from: '"FeatureChecker" <featurechecker@gmail.com>',
        to: 'marek.kowalonek@gmail.com',
        ...template
    };
    
    try {
        const result = await transporter.sendMail(mailOptions)
        console.log(result)
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    send
}