import React from "react";
import { useState, useEffect } from "react";
import "../Elements/Contact.css";
import { MdCall, MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checkCategory, setCheckCategory] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    email: "",
    company_name: "",
    gst_no: "",
    category: "Retailer",
    payment_status: "PENDING",
  });

  const [error, setError] = useState({
    name: false,
    phone_number: false,
    email: false,
    company_name: false,
  });

  const handleValidate = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const phone_regex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    setError((prevError) => ({
      ...prevError,
      phone_number:
        data.phone_number === "" || !phone_regex.test(data.phone_number),
    }));

    // For handling name
    if (data.name === "") {
      setData((prevData) => ({ ...prevData, name: "" }));
      setError((prevError) => ({ ...prevError, name: true }));
    } else {
      setError((prevError) => ({ ...prevError, name: false }));
    }

    // For handling email
    setError((prevError) => ({
      ...prevError,
      email: data.email === "" || !regex.test(data.email),
    }));

    // For handling company_name
    setError((prevError) => ({
      ...prevError,
      company_name: data.company_name === "",
    }));

    const new_interval = setTimeout(() => {
      if (
        error.email ||
        error.name ||
        error.company_name ||
        error.phone_number
      ) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    }, 1000);
  };

  const handleChangeInput = (e) => {
    const new_data = data;
    new_data[e.target.id] = e.target.value;
    setData(new_data);
    if (isSubmitted) {
      handleValidate();
      handleCheckCategory();
    }
  };

  const handleCheckCategory = () => {
    if (
      (data.category == "Manufacturer" && data.gst_no == "") ||
      (data.category == "Technician" && data.gst_no == "")
    ) {
      setCheckCategory(true);
    } else {
      setCheckCategory(false);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const interval = setTimeout(() => {
      handleValidate();
      handleCheckCategory();
    }, 1000);

    // if (!hasError) {
    //   axios
    //     .post("/api/v1/user", data)
    //     .then((response) => {
    //       if (response.data.success) {
    //         alert("Your Data is Successfully Registered");
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // }

    checkoutHandler(1500);
    console.log(data);
  };

  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("/api/getkey");

    const {
      data: { order },
    } = await axios.post("/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Razorpay testing",
      description: "Tutorial of RazorPay",
      image: "",
      order_id: order.id,
      callback_url: "/api/paymentverification",
      prefill: {
        name: "Karan Dattani",
        email: "dattanikaran25@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <div className="contact-page">
        <div className="center-title">
          <div className="get-in-touch">Get In Touch</div>
          <div className="get-in-touch-desc">
            Iste penatibus, neque dolor quisquam anim. Rutrum excepturi porro!
            Est id cras morbi ut at ratione tempor vero, elementum
            reprehenderit.
          </div>
        </div>
        <div className="center-box">
          <div className="left-box">
            <div className="left-box-title">
              <div className="info-title">Contact Information</div>
              <div className="info-desc">
                Suscipit rem eum leo potenti sagittis, justo et nullam,
                dignissimos,
              </div>
            </div>
            <div className="left-box-desc">
              <div className="phn">
                <div>
                  <MdCall />
                </div>
                <div>9638935265</div>
              </div>
              <div className="email">
                <div>
                  <MdMail />
                </div>
                <div>dattanikaran25@gmail.com</div>
              </div>
              <div className="location">
                <div>
                  <FaLocationDot />
                </div>
                <div>Surat Gujarat</div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="contact-form">
              <div className="form-fields">
                <div
                  className="name"
                  style={{ flexDirection: error.name ? "column" : "" }}
                >
                  <input
                    onChange={handleChangeInput}
                    className={
                      error.name ? "error form-control" : "form-control"
                    }
                    id="name"
                    autoComplete="off"
                    type="text"
                    name="name"
                    placeholder=""
                  />
                  <span
                    style={{
                      position: "relative",
                      border: "none",
                      display: error.name ? "block" : "none",
                    }}
                  >
                    Correct name is required
                  </span>
                  <label htmlFor="name">Name</label>
                </div>
                <div
                  className="phone_number"
                  style={{ flexDirection: error.phone_number ? "column" : "" }}
                >
                  <input
                    onChange={handleChangeInput}
                    className={
                      error.phone_number ? "error form-control" : "form-control"
                    }
                    id="phone_number"
                    autoComplete="off"
                    type="text"
                    name="phone_number"
                    placeholder=""
                  />
                  <span
                    style={{
                      position: "relative",
                      border: "none",
                      display: error.phone_number ? "block" : "none",
                    }}
                  >
                    Correct phone_number is required
                  </span>
                  <label htmlFor="phone_number">Phone Number</label>
                </div>
                <div
                  className="email"
                  style={{ flexDirection: error.email ? "column" : "" }}
                >
                  <input
                    onChange={handleChangeInput}
                    className={
                      error.email ? "error form-control" : "form-control"
                    }
                    id="email"
                    autoComplete="off"
                    type="text"
                    name="email"
                    placeholder=""
                  />
                  <span
                    style={{
                      position: "relative",
                      border: "none",
                      display: error.email ? "block" : "none",
                    }}
                  >
                    Correct email is required
                  </span>

                  <label htmlFor="email">email</label>
                </div>
                <div className="drop-down" style={{ gap: "40px" }}>
                  <label htmlFor="">Select</label>
                  <select
                    defaultValue={"Choose from the menu"}
                    onChange={handleChangeInput}
                    id="category"
                    name="type"
                  >
                    <option>Retailer</option>
                    <option>Manufacturer</option>
                    <option>Wholesaler</option>
                    <option>Technician</option>
                  </select>
                </div>
                <div
                  className="comp-name"
                  style={{ flexDirection: error.company_name ? "column" : "" }}
                >
                  <input
                    onChange={handleChangeInput}
                    className={
                      error.company_name ? "error form-control" : "form-control"
                    }
                    id="company_name"
                    autoComplete="off"
                    type="text"
                    name="company_name"
                    placeholder=""
                  />
                  <span
                    style={{
                      position: "relative",
                      border: "none",
                      display: error.company_name ? "block" : "none",
                    }}
                  >
                    Correct company_name is required
                  </span>
                  <label htmlFor="comp-name">Company Name</label>
                </div>
                <div
                  className="gst_no"
                  style={{ flexDirection: checkCategory ? "column" : "" }}
                >
                  <input
                    onChange={handleChangeInput}
                    id="gst_no"
                    autoComplete="off"
                    type="text"
                    placeholder=""
                    className={
                      checkCategory ? "error form-control" : "form-control"
                    }
                  />
                  <span
                    style={{
                      position: "relative",
                      border: "none",
                      display: checkCategory ? "block" : "none",
                    }}
                  >
                    gst_no is required
                  </span>
                  <label htmlFor="gst_no">gst_no No.</label>
                </div>
              </div>
              <div className="register-btn">
                <button type="submit" onClick={handleSubmit}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
