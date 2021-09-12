import React, { useState } from "react";
import Image from "next/image";

//assets
import ContactIcon from "@assets/images/contact.png";
import styled from "styled-components";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <ContactContainer>
      <form>
        <h2>Contact</h2>

        <ContactInput
          name="fullName"
          type="text"
          placeholder="Full Name*"
          value={form.fullName}
          onChange={handleChange}
        />
        <br />
        <ContactInput
          name="email"
          type="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <ContactTextArea
          name="message"
          rows={5}
          placeholder="Message*"
          value={form.message}
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </form>

      <ContactIconDiv>
        <Image src={ContactIcon} alt="contact" height={350} width={350} />
      </ContactIconDiv>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3rem 0;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const ContactIconDiv = styled.div`
  display: block;
  margin: 3rem auto;
`;

const ContactInput = styled.input`
  width: 100%;
  margin: 1rem 0;
  padding: 0.75rem 1rem;
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  margin: 1rem 0;
  resize: none;
  padding: 0.75rem 1rem;
`;

const Button = styled.div`
  padding: 0.75rem 2rem;
  background: var(--primary);
  font-size: 1rem;
  color: white;
  width: fit-content;
  cursor: pointer;
  border-radius: 0.25rem;
`;

export default Contact;
