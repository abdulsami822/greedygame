import { useState } from "react";
import styled from "../styles/LeadCaptureForm.module.css";
import InputContainer from "./inputContainer";
import { validation } from "./validation";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    link: "",
    revenue: "",
  });

  //errors for input fields
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    link: "",
    revenue: "",
  });

  //on chnage handlers for input fields
  const changeFullName = (event) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      fullName: value,
    });
  };
  const changeEmail = (event) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      email: value,
    });
  };
  const changePhoneNumber = (event) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };
  const changeLink = (event) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      link: value,
    });
  };
  const changeRevenue = (event) => {
    const value = event.target.value;
    if (value.slice(0, 1) !== "$") {
      value = "$" + value;
    }
    setFormData({
      ...formData,
      revenue: value,
    });
  };

  //performs defined validation on form data
  const validateForm = () => {
    const { fullName, email, phoneNumber, revenue, link } = formData;
    const fullNameError = validation.validateFullName(fullName);
    const emailError = validation.validateEmail(email);
    const phoneError = validation.validatePhoneNumber(phoneNumber);
    const linkError = validation.validateLink(link);
    const revenueError = validation.validateRevenue(revenue);
    console.log(linkError);
    setErrors({
      fullName: fullNameError,
      email: emailError,
      phoneNumber: phoneError,
      link: linkError,
      revenue: revenueError,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    validateForm();
  };

  return (
    <form className={styled.form} id="leadCaptureForm" onSubmit={submitForm}>
      <InputContainer
        id="fullName"
        label="Name"
        placeholder="Enter your Full Name"
        type="text"
        value={formData.fullName}
        onChange={changeFullName}
        error={errors.fullName}
      />
      <InputContainer
        id="email"
        label="Email"
        placeholder="Enter your Email Address"
        type="email"
        value={formData.email}
        onChange={changeEmail}
        error={errors.email}
      />
      <InputContainer
        id="phoneNumber"
        className={styled.fullGridItem}
        label="Phone Number"
        placeholder="Enter your phone number with country code"
        type="text"
        value={formData.phoneNumber}
        onChange={changePhoneNumber}
        error={errors.phoneNumber}
      />
      <InputContainer
        id="links"
        className={styled.fullGridItem}
        label="App/Website Link"
        placeholder="Enter your App/Website you wish to monetise"
        type="text"
        optional
        value={formData.link}
        onChange={changeLink}
        error={errors.link}
      />
      <InputContainer
        id="montlyRevenue"
        className={styled.fullGridItem}
        label="Monthly Revenue (USD)"
        placeholder="Enter your Average monthly revenue in USD"
        type="text"
        value={formData.revenue}
        onChange={changeRevenue}
        error={errors.revenue}
      />
      <button
        className={`${styled.button} ${styled.fullGridItem}`}
        type="submit"
      >
        Get Started
      </button>
      <p className={`${styled.agreement} ${styled.fullGridItem}`}>
        By signing up, you agree to our{" "}
        <span className={styled.highlight}>Terms</span> and{" "}
        <span className={styled.highlight}>Privacy Policy</span>
      </p>
    </form>
  );
}
