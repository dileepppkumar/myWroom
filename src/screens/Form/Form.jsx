import React, { useCallback, useMemo, useState } from "react";
import "./form.css";
import { useWindowWidth } from "../../breakpoint";

const FormField = ({
  placeholder,
  className,
  label,
  name,
  type,
  value,
  onChange,
}) => (
  <div className="form-field">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  </div>
);

export const Form = () => {
  const widthh = useWindowWidth();
  const screenWidth = useMemo(() => widthh, [widthh]);
  const [form, setForm] = useState({
    workCompleted: "",
    profession: "",
    location: "",
    fullName: "",
    businessName: "",
    yearsInBusiness: "",
    contacts: [
      { name: "", companyName: "", personOfContact: "" },
      { name: "", companyName: "", personOfContact: "" },
      { name: "", companyName: "", personOfContact: "" },
      { name: "", companyName: "", personOfContact: "" },
      { name: "", companyName: "", personOfContact: "" },
    ],
    talent: "",
    spouse: "",
    children: "",
    hobbies: "",
    businessGoal: {
      exactAmount: "",
      referralsNeeded: "",
      achievable: "",
      actions: "",
      deadline: "",
    },
    introToClient: "",
  });

  const handleChange = useCallback(
    ({ target }) => {
      setForm({
        ...form,
        [target.name]: target.value,
      });
    },
    [form]
  );

  const handleContactsChange = useCallback(
    (index, { target }) => {
      const contacts = [...form.contacts];
      contacts[index][target.name] = target.value;
      setForm({
        ...form,
        contacts,
      });
    },
    [form.contacts]
  );

  const handleBusinessGoalChange = useCallback(
    ({ target }) => {
      setForm({
        ...form,
        businessGoal: {
          ...form.businessGoal,
          [target.name]: target.value,
        },
      });
    },
    [form.businessGoal]
  );

  return (
    <div className="form">
      <div
        className="ff-form"
        style={{
          height: "1500px",
          width:
            screenWidth < 1440
              ? "842.0px"
              : screenWidth >= 1440
              ? "842px"
              : undefined,
        }}
      >
        <div
          className="text-wrapper"
          style={{
            fontSize:
              screenWidth < 1440
                ? "29.2px"
                : screenWidth >= 1440
                ? "36.0px"
                : undefined,
            lineHeight:
              screenWidth < 140
                ? "38.4px"
                : screenWidth >= 140
                ? "5.0px"
                : undefined,
            textAlign: screenWidth < 140 ? "" : undefined,

            boxSizing: "border-box",
          }}
        >
          {" "}
          <p className="title">
            {" "}
            Tell us about yourself and your business{" "}
          </p>{" "}
          <p className="subtitle">
            {" "}
            We want to get to know you and your business better.{" "}
          </p>{" "}
        </div>{" "}
        <div className="form-wrapper">
          <div
            style={{
              width: "50%",
              display: "flex",
              flexWrap: "wrap",
              columnGap: "20px",
            }}
          >
            {" "}
            <FormField
              placeholder="What work have you completed?"
              name="workCompleted"
              type="text"
              className="buss"
              value={form.workCompleted}
              onChange={handleChange}
            />{" "}
            <FormField
              placeholder="What is your profession?"
              name="profession"
              type="text"
              value={form.profession}
              onChange={handleChange}
            />{" "}
            <FormField
              placeholder="Where are you located?"
              name="location"
              type="text"
              value={form.location}
              onChange={handleChange}
            />{" "}
            <FormField
              placeholder="What is your full name?"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
            />{" "}
            <FormField
              placeholder="What is the name of your business?"
              name="businessName"
              type="text"
              value={form.businessName}
              onChange={handleChange}
            />{" "}
            <FormField
              placeholder="How many years have you been in business?"
              name="yearsInBusiness"
              type="text"
              className="work"
              value={form.yearsInBusiness}
              onChange={handleChange}
            />{" "}
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <FormField
              placeholder="What is your spouse's name?"
              name="spouse"
              type="text"
              value={form.spouse}
              onChange={handleChange}
            />{" "}
            <FormField
              placeholder="How many children do you have?"
              name="children"
              type="text"
              value={form.children}
              onChange={handleChange}
            />{" "}
            <FormField
              placeholder="What are your hobbies?"
              name="hobbies"
              type="text"
              value={form.hobbies}
              onChange={handleChange}
            />{" "}
            <FormField
              placeholder="What is your talent?"
              name="talent"
              type="text"
              className="talent"
              value={form.talent}
              onChange={handleChange}
            />{" "}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p className="contacts-title"> Contacts </p>{" "}
            {form.contacts.map((contact, index) => (
              <div key={index} className="contact-wrapper">
                {" "}
                <FormField
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={contact.name}
                  onChange={(e) => handleContactsChange(index, e)}
                />{" "}
                <FormField
                  placeholder="Company Name"
                  name="companyName"
                  type="text"
                  value={contact.companyName}
                  onChange={(e) => handleContactsChange(index, e)}
                />{" "}
                <FormField
                  placeholder="Person of Contact"
                  name="personOfContact"
                  type="text"
                  value={contact.personOfContact}
                  onChange={(e) => handleContactsChange(index, e)}
                />{" "}
              </div>
            ))}{" "}
          </div>
          <p className="business-goal-title"> Business Goal </p>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormField
              label="Exact Amount"
              name="exactAmount"
              type="text"
              className="business"
              value={form.businessGoal.exactAmount}
              onChange={handleBusinessGoalChange}
            />{" "}
            <FormField
              label="How many refferals you Referrals Needed"
              name="referralsNeeded"
              type="text"
              value={form.businessGoal.referralsNeeded}
              onChange={handleBusinessGoalChange}
            />{" "}
            <FormField
              label="Achievable"
              name="achievable"
              type="text"
              value={form.businessGoal.achievable}
              onChange={handleBusinessGoalChange}
            />{" "}
            <FormField
              label="Actions"
              name="actions"
              type="text"
              value={form.businessGoal.actions}
              onChange={handleBusinessGoalChange}
            />{" "}
            <FormField
              label="Deadline"
              name="deadline"
              type="text"
              value={form.businessGoal.deadline}
              onChange={handleBusinessGoalChange}
            />{" "}
            <FormField
              label="Intro to Client"
              name="introToClient"
              type="text"
              value={form.introToClient}
              onChange={handleChange}
            />{" "}
            <button className="submitt">Submit</button>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};
