import { IMessage } from './IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export class MailProvider {
  private transporter: Mail;

  constructor () {
    const config:SMTPTransport.Options = {
      host: process.env.MAIL_HOST || 'smtp.mailtrap.io',
      port: parseInt(process.env.MAIL_PORT || '2525'),
      auth: {
        user: process.env.MAIL_USER || '942b5bd63e53f1',
        pass: process.env.MAIL_PASS || '2b5a28dcd5942f'
      }

    }
    this.transporter = nodemailer.createTransport(config)
  }

  async sendMail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
