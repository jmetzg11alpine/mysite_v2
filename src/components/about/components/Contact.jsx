import { useState } from 'react'
import '../styles/contact.css'
import { send } from 'emailjs-com'

const Contact = () => {
  const [senderName, setSenderName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [senderMessage, setSenderMessage] = useState('')

  const handleName = (e) => {
    setSenderName(e.target.value)
  }
  const handleEmail = (e) => {
    setSenderEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setSenderMessage(e.target.value)
  }
  const sendMail = (e) => {
    e.preventDefault()
    send(
      'service_dinqh0m',
      'template_38tl4ow',
      {
        senderName,
        senderEmail,
        senderMessage,
      },
      'nV6Sx0FCl2gj7iaVp'
    ).then(() => {
      makePopUp()
    })

    setSenderName('')
    setSenderEmail('')
    setSenderMessage('')
  }

  const makePopUp = () => {
    document.getElementById('about-form-popup').className =
      'about-form-popup-in'
    setTimeout(() => {
      document.getElementById('about-form-popup').className =
        'about-form-popup-out'
    }, 1300)
  }
  return (
    <>
      <div className='about-form-container'>
        <form onSubmit={sendMail}>
          <div className='about-form-title'>
            <h2>CONTACT</h2>
          </div>
          <input
            className='about-form-inputContent'
            type='text'
            name='senderName'
            value={senderName}
            onChange={handleName}
            required
            placeholder='name'
          />
          <input
            className='about-form-inputContent'
            type='email'
            name='senderEmail'
            value={senderEmail}
            onChange={handleEmail}
            required
            placeholder='email'
          />
          <textarea
            className='about-form-inputContent'
            name='senderMessage'
            value={senderMessage}
            onChange={handleMessage}
            required
            placeholder='message'
          />
          <button className='about-form-button' type='submit'>
            Send Message
          </button>
        </form>
      </div>
      <div id='about-form-popup' className='about-form-popup-out'>
        <h1>Message Sent</h1>
      </div>
    </>
  )
}

export default Contact
