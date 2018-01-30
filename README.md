# Node-Mailer
> 根据 [nodemailer][0] 这个插件封装的node.js发送邮件方法

**只是个练习**

## 使用

- 克隆或下载项目之后运行
   ```
   $ npm install
   ```
 - 创建一个js文件，在其中引入index.js中导出的
    ```js
    const MailSender = require('./index.js')
    ```
 - 然后在创建的文件中
    ```js
    const sender = new MailSender(transporterOption, mailOptions)
    sender.send()
    ```
 - `node 创建的文件名 `

## 参数
```js
  transporterOption = {
   host:'发送邮件的邮箱设置SMTP后的host名', //https://nodemailer.com/smtp/well-known/
   post: 465 or any number,
   secure: true or false,// true for 465, false for other ports
   auth:{
       user:'发送邮件的邮箱账号',
       pass:'你设置的smtp授权码不是你的邮箱密码' 
   }
  }
  mailOptions = {
   form:'发件人',
   to:'收件人',// String or Array
   subject:'邮件主题',
   text:'纯文本正文',//plain text body
   html：'html内容',
   .....
   ....
  }
```
## 参考
- [Node.js使用Nodemailer发送邮件][1]

- [各种邮箱pop，SMTP设置][2]
## 最后
只是一个简单的封装,只完成基础功能，就是能群发，能抄送。

更多研究查看[nodemailer项目][0]



[0]: https://github.com/nodemailer/nodemailer
[1]: https://segmentfault.com/a/1190000012251328
[2]: https://www.jianshu.com/p/1ae1329e1345
