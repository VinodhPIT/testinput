import React, { useState, useEffect, useRef } from "react";



import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";



const ContactForm = () => {
  const [loader, setLoader] = useState(false);





  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);



  const handleCountryFocus = () => {
    if (emailInputRef.current || phoneInputRef.current) {
      emailInputRef.current.blur();
      phoneInputRef.current.blur();
    }
  };

  const handleSubmit = async (values) => {
  
  };


  

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('jkhk').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "jj"),
      phone: Yup.string().matches(
      /^[0-9()+\- ]+$/,
     'nlklk'
    ),
  });

  useEffect(() => {
    //fetchCountryCodelists();
  }, []);

  const options = [
    'one', 'two', 'three'
  ];

  return (
    <>
      <div className="full_col_block h_126_vh m_h_60_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content m_align_content">
              <section className="request_landing_content mb_90 m_mb_0">
                <div className="request_landing_content_col">
                  <h2>dwdwd</h2>
                  <div className="request_contact_form">
                    <Formik
                      initialValues={{ email: "", phone: '' }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ values, errors, touched }) => (
                        <Form className="form_floating">
                          <div className="form_block">
                            <label htmlFor="email">
                             efewfe
                            </label>
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
                            <label htmlFor="phone">
                             eded
                            </label>

                            <div style={{ display: "flex", gap: "8px" }}>
                              <Dropdown
                                options={options}
                                value={'1'}
                              
                                onFocus={handleCountryFocus} // Blur email input field on focus
                              >
                                {options.map((option) => (
                                  <option key={option.key} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </Dropdown>

                              <Field
                                type="number"
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
                              disabled={values.email === ""}
                              type="submit"
                            >
                           ded

                              {loader && (
                                <span
                                  className="spinner-border spinner-border-sm"
                                  aria-hidden="true"
                                ></span>
                              )}
                            </button>
                          </div>

                          {/* {values.email && (
                            <button
                              type="submit"
                              className="btn_defult_base mt_15 pull_right align_self_end"
                            >
                              {t("common:next")}
                              {loader && (
                                <span
                                  className="spinner-border spinner-border-sm"
                                  aria-hidden="true"
                                ></span>
                              )}
                            </button>
                          )} */}
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
