import React, { useState ,useRef} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ContactForm = () => {
  const options = ["one", "two", "three"];


  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null); // New ref for phone input field

  const handleCountryFocus = () => {
    if (emailInputRef.current || phoneInputRef.current) {
      emailInputRef.current.blur();
      phoneInputRef.current.blur();
    }
  };


  const handleCountryChange = (selectedOptions) => {
    console.log(selectedOptions ,"selectedOptions")
  };

  return (
    <>
      <div className="full_col_block h_126_vh m_h_118_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content mb_90">
                <div className="request_landing_content_col">
                  <h2>cdcdc</h2>
                  <div className="request_contact_form">
                    <Formik initialValues={{ email: "cd", phone: "cd" }}>
                      {({ values, errors, touched }) => (
                        <Form className="form_floating">
                          <div className="form_block">
                            <label htmlFor="email">ddcdc</label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form_control"
                              placeholder="Your e-mail"
                              innerRef={emailInputRef} // Assign the ref

                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="error"
                            />
                          </div>
                          <div className="form_block mt_10">
                            <label htmlFor="phone">cdcd</label>
                            <div style={{ display: "flex", gap: "8px" }}>
                              <Dropdown
                                options={options}
                                value={"c"}
                                onChange={handleCountryChange}
                                onFocus={handleCountryFocus} // Blur email input field on focus

                              />
                              <Field
                                type="text"
                                id="phone"
                                name="phone"
                                className="form_control"
                                placeholder="Your phone number"
                                innerRef={phoneInputRef} // Assign the ref
                              />
                            </div>
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="error"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn_secondary btn_cutom_40 mt_15 pull_right align_self_end bdr_rad_4"
                          >
                            dccd
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
