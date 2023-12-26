import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
              Explore our competitive pricing plans designed to suit the unique needs of your business. Unlock 
              <br />
              the full potential of cutting-edge technology without breaking the bank.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$20/mo"
                title="Basic"
                text="Kickstart your online presence with a personalized website and a custom domain tailored for you."
                offers={[
                  { name: "Personalized Website", cheked: true },
                  { name: "Custom Domain", cheked: true },
                  { name: "E-commerce Integration", cheked: false },
                  { name: "Robust analytics", cheked: false },
                  { name: "Advanced SEO tools", cheked: false },
                  { name: "Advanced customization options", cheked: false },
                ]}
                action={() => (window.open("https://buy.stripe.com/28obM78U7c3S4uIeUU", "_blank", "noopener noreferrer"))}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$50/mo"
                title="Pro"
                text="Boost your business with seamless e-commerce integration, expanding your online reach and enhancing overall performance."
                offers={[
                  { name: "Personalized Website", cheked: true },
                  { name: "Custom Domain", cheked: true },
                  { name: "E-commerce Integration", cheked: true },
                  { name: "Robust analytics", cheked: false },
                  { name: "Advanced SEO tools", cheked: false },
                  { name: "Advanced customization options", cheked: false },
                ]}
                action={() => (window.open("https://buy.stripe.com/dR63fB4DRec06CQcMN", "_blank", "noopener noreferrer"))}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$100/mo"
                title="Ultimate"
                text="Unleash your business's full potential with advanced SEO and unlimited customization backed by priority support and exclusive insights."
                offers={[
                  { name: "Personalized Website", cheked: true },
                  { name: "Custom Domain", cheked: true },
                  { name: "E-commerce Integration", cheked: true },
                  { name: "Robust analytics", cheked: true },
                  { name: "Advanced SEO tools", cheked: true },
                  { name: "Advanced customization options", cheked: true },
                ]}
                action={() => (window.open("https://buy.stripe.com/bIY7vR7Q34Bqd1eaEG", "_blank", "noopener noreferrer"))}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




