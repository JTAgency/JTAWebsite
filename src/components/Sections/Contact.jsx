import styled from "styled-components";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// Assets
// import ContactImg1 from "../../assets/img/contact-1.png";
// import ContactImg2 from "../../assets/img/contact-2.png";
// import ContactImg3 from "../../assets/img/contact-3.png";

// import ContactImg1 from "../../assets/img/chat.png";
// import ContactImg2 from "../../assets/img/contact.png";
// import ContactImg3 from "../../assets/gif/CustomerService1Resized.gif";


export default function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfvq5wf', 'template_2vi3lmm', form.current, 'xbswr75u_oQ668-fU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Reach out and let's start a conversation to explore how we can collaborate and elevate your business together.
              <br />
              We'd love to connect and discuss how our tailored solutions can contribute to the success of your business.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form ref={form} onSubmit={sendEmail}>
                <label className="font13">Name:</label>
                <input type="text" id="fname" name="user_name" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="user_email" className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <label className="font13">Inquiry:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
                {/* <input type="submit" value="Send" className="pointer animate radius8" style={{ maxWidth: "220px" }} /> */}
                <input type="submit" value="Send Message" class="pointer animate radius8" style={{ color: "white", maxWidth: "220px", backgroundColor: "#7620FF", padding: "15px", height:"50px"}} onClick={()=>{ alert('Successfully sent!'); }} />
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  {/* <img src={ContactImg1} alt="office" className="radius6" /> */}
                  {/* <img src={ContactImg1} alt="office" className="radius6" style={{ width: '180px', height: 'auto' }} /> */}
                </ContactImgBox>
                <ContactImgBox>
                  {/* <img src={ContactImg2} alt="office" className="radius6" /> */}
                  {/* <img src={ContactImg2} alt="office" className="radius6" style={{ width: '180px', height: 'auto' }} /> */}
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  {/* <img src={ContactImg3} alt="office" className="radius6" /> */}
                  {/* <img src={ContactImg3} alt="office" className="radius6" style={{ width: '278px', height: 'auto' }} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
// const ButtonInput = styled.input`
//   border: 1px solid #7620ff;
//   background-color: #7620ff;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #7620ff;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
// const SumbitWrapper = styled.div`
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 50px;
//   }
// `;