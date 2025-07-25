import React from "react";
import { Link } from "react-router-dom";
import "./Return.css";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";

const ReturnPolicyPage = () => {
  return (
    <div className="container__0">
      <MetaData title="Return Policy" />
      <div className="image-container">
        <img src={TermsImage} alt="Background" />
        <h1 className="policy-text">RETURN ORDER</h1>
      </div>

      <div className="content-container">
        <p>
          Thank you for shopping with ProductTrust! We want to ensure your satisfaction with every purchase. If you are not completely satisfied with your purchase, we offer a return policy of 7 days for most products and 7 days for select products.
        </p>

        <p>
          To be eligible for a return, the item must be unused, in its original packaging, and in the same condition as you received it. You will also need to provide proof of purchase. Please note that certain items, such as personalized or custom-made products, may not be eligible for return unless there is a defect or error on our part.
        </p>

        <p>
          If you would like to initiate a return, please contact our Customer Service Department within the specified return period. Our team will guide you through the return process and provide you with the necessary instructions and return address.
        </p>

        <p>
          Once we receive your returned item and verify its condition, we will process the refund to the original payment method used for the purchase. Please allow up to 2-5 days for the refund to be reflected in your account.
        </p>

        <p>
          Please note that return shipping costs are the responsibility of the customer, unless the return is due to a defect or error on our part. We recommend using a trackable shipping method to ensure the safe and timely delivery of your return.
        </p>

        <p>
          If you have any questions or need further assistance regarding our return policy, please feel free to contact our Customer Service Department. We are here to help!
        </p>

        <h2>Contact Information:</h2>
        <p>
          Customer Service Department<br />
          <span style={{ fontWeight: "500" }}>Email</span>: producttrust030@gmail.com<br />
          <span style={{ fontWeight: "500" }}>Phone number</span>: 8420714968<br />
          <span style={{ fontWeight: "500" }}>Whatsapp number</span>: 9163150488<br />
          <span style={{ fontWeight: "500" }}>Hours of Operation</span>: Monday to Friday, 8:00 AM to 7:00 PM (GMT)
        </p>

        <p>
          Please reach out to us if you have any concerns or require any clarifications regarding our return policy. We strive to provide excellent customer service and ensure your satisfaction.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
