import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ContactForm = () => {
  const [loader, setLoader] = useState(false);

  const [state, setState] = useState(1);

  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleCountryChange = (selectedOptions) => {
    getSingleCountryCode(selectedOptions.label);
  };

  const handleCountryFocus = () => {
    if (emailInputRef.current || phoneInputRef.current) {
      emailInputRef.current.blur();
      phoneInputRef.current.blur();
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is required"),
    phone: Yup.string().matches(/^[0-9()+\- ]+$/, "invlaid numver"),
  });

  const options = ["one", "two", "three"];

  const nextpage = () => {
    setState((pre) => pre + 1);
  };

  const handleSubmit = async (values) => {
alert('fuck')
    // setState((pre) => pre  +1);

  };

  return (
    <>
      <div className="full_col_block h_126_vh m_h_60_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content m_align_content">
              <section className="request_landing_content mb_90 m_mb_0">
                <div className="request_landing_content_col">
                  <div className="request_contact_form">
                    {state === 1 ? (
                      <div>
                        <button onClick={() => nextpage()}>next page</button>
                      </div>
                    ) : state === 2 ? 
                      <Formik
                        initialValues={{ email: "", phone: "" }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                      >
                        {({ values, errors, touched }) => (
                          <Form className="form_floating">
                            <div className="form_block">
                              <label htmlFor="email">dcdcdcdcdcd</label>
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
                            <div className="form_block">
                              <label htmlFor="phone">dcdc</label>

                              <div style={{ display: "flex", gap: "8px" }}>
                                <Dropdown
                                  options={options}
                                  value={1}
                                  onChange={handleCountryChange}
                                  onFocus={handleCountryFocus} // Blur email input field on focus
                                >
                                  {options.map((option) => (
                                    <option
                                      key={option.key}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </Dropdown>

                                <Field
                                  type="text"
                                  id="phone"
                                  name="phone"
                                  className="form_control"
                                  placeholder="Your phone number"
                                  innerRef={phoneInputRef}
                                />
                              </div>
                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="error"
                              />
                            </div>

                            <div className="request_ref_btn rqst_btn_bottom request_mob_fixed m_gap_16 m_pb_15 m_pt_10">
                              <button
                                className="btn_defult_base pull_right align_self_end m_w_50pc"
                                type="submit"
                              >
                                dcdcdc
                                {loader && (
                                  <span
                                    className="spinner-border spinner-border-sm"
                                    aria-hidden="true"
                                  ></span>
                                )}
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>  : <div> <p>hiii</p>   <button onClick={() => nextpage()}>next page</button>  </div>
                    }
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
