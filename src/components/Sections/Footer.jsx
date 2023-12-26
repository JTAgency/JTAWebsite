import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
// import LogoImg from "../../assets/svg/Logo";
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <Logo style={{ width: '180px', height: '180px', transition: 'opacity 0.2s ease-in-out', filter: 'invert(100%)'}} onMouseOver={(e) => e.target.style.opacity = 0.75} onMouseOut={(e) => e.target.style.opacity = 1}/>
              {/* <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Fanatic
              </h1> */}
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">JarTech</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;