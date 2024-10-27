import { Container, Wrapper, Title, Description, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactSendButton } from './ContactMeStyledComponent';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {

    // Email JS API
    const refForm = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_serviceID,
                process.env.REACT_APP_templateID,
                refForm.current,
                process.env.REACT_APP_publicKey
            )
            .then(
                (result) => {
                    // Show success toast notification
                    toast.success("Message successfully sent!");
                    refForm.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    toast.error("Failed to send the message, please try again");
                }
            );
    }

    return (
        <Container id="ContactMe">
            <Wrapper>
                <Title>CONTACT ME</Title>
                <Description>Flick me a quick message :)</Description>
                <ContactForm ref={refForm} onSubmit={sendEmail}>
                    <ContactTitle>Get In Touch 🚀</ContactTitle>
                    <ContactInput
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />
                    <ContactInput
                        name="user_email"
                        placeholder="Your Email"
                        required
                    />
                    <ContactInput
                        name="contact_number"
                        placeholder="Your Contact Number"
                        required
                    />
                    <ContactInputMessage
                        name="message"
                        placeholder="Leave your message"
                        rows="8"
                        required
                    />
                    <ContactSendButton type="submit" value="Send" />
                </ContactForm>
                
                {/* Toast Container for notifications */}
                <ToastContainer position="top-right" autoClose={6000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
            </Wrapper>
        </Container>
    );
}

export default ContactMe;
