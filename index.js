'use strict';
const nodemailer = require('nodemailer');
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
/**
 * 
 * @param {Object} transporterOption 
 * {
 *  host:'发送邮件的邮箱设置SMTP后的host名', //https://nodemailer.com/smtp/well-known/
 *  post: 465 or any number,
 *  secure: true or false,// true for 465, false for other ports
 *  auth:{
 *      user:'发送邮件的邮箱账号',
 *      pass:'你设置的smtp授权码不是你的邮箱密码' 
 *  }
 * }
 * @param {Object} mailOptions 
 * {
 *  form:'发件人',
 *  to:'收件人',// String or Array
 *  subject:'邮件主题',
 *  text:'纯文本正文',//plain text body
 *  html：'html内容',
 *  .....
 *  ....
 *  //
 * }
 * 
 */
const MailSender = function(transporterOption, mailOptions) {
    try {
        if (!transporterOption || !mailOptions) {
            throw ('params missing')
        }
    } catch (error) {
        console.log("Error caught: ", error); 
        return false
    }
    let self = this
    this.transporterOption = transporterOption
    this.mailOptions = mailOptions
    this.send = function() {
            nodemailer.createTestAccount((err, account) => {
                let transporter = nodemailer.createTransport(self.transporterOption)
                transporter.sendMail(self.mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info);
                    // Preview only available when sending through an Ethereal account
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                })
            });
        }
        // send mail with defined transport object
}

module.exports = MailSender