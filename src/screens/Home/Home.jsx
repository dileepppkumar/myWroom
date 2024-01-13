import React, { useEffect, useRef, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import What from "../Home/What.png";
import lij from "../Home/lij.png";
import "./home.css";

export const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phoneNumber: "",
    location: "",
    businessType: "",
    wantToJoinUs: "",
  });
  const [enquireData, setEnquireData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    byOrganization: "",
    toOrganization: "",
    leads: "",
    message: "",
    personalName: "",
  });
  const [data, setData] = useState([]);
  const history = useNavigate();
  const contactSectionRef = useRef(null);
  const aboutUs = useRef(null);

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToAbout = () => {
    if (aboutUs.current) {
      aboutUs.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEnquireChange = (e) => {
    const { name, value } = e.target;
    setEnquireData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const fetchdata = async () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(URL).then((res) => res.json());
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const handleClick = (item) => {
    history({
      pathname: "/portfolio",
      state: { selectedItem: item },
    });
  };

  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap-2">
          <div className="group-wrapper">
            <div className="div-wrapper">
              <div className="group-19">
                <div className="group-20">
                  <div className="group-21">
                    <div className="text-wrapper-17">Businesses</div>
                    <div className="text-wrapper-18">10+</div>
                  </div>
                </div>
                <div className="group-22">
                  <div className="group-23">
                    <div className="text-wrapper-17">Years of Experience</div>
                    <div className="text-wrapper-19">20+</div>
                  </div>
                </div>
                <div className="group-24">
                  <div className="group-25">
                    <div className="text-wrapper-20">Awards Received</div>
                    <div className="text-wrapper-21">10+</div>
                  </div>
                </div>
                <div className="group-26">
                  <div className="group-27">
                    <div className="text-wrapper-17">Satisfied Clients</div>
                    <div className="text-wrapper-22">500+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-28">
            <div className="group-29">
              <div className="overlap-group-2">
                <img
                  className="remove-bg"
                  alt="Remove bg"
                  src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/remove-bg-2.png"
                />
                <div className="group-30">
                  <div className="frame">
                    <div className="text-wrapper-23">LEARN MORE</div>
                  </div>
                  <div className="EXPERIENCES">
                    EXPERIENCES &amp; EXCELLENCE
                  </div>
                  <p className="welcome-to-vizag">
                    Welcome to Vizag Achievers the platform to <br />
                    discover and showcase businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="header">
            <div className="group-31">
              <div className="">HOME</div>
              <div style={{ cursor: "pointer" }} onClick={scrollToAbout}>
                ABOUT US
              </div>
              <div style={{ cursor: "pointer" }} onClick={scrollToContact}>
                CONTACT
              </div>
            </div>
            <div>
              <button
                className="text-wrapper-27"
                onClick={() => history("signin")}
              >
                LOGIN
              </button>
            </div>
          </div>
          <img
            className="logo-white"
            alt="Logo white"
            src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/logo-white-3.png"
          />
        </div>
        <div className="group-32">
          <div className="overlap-group-3">
            <p className="text-wrapper-28">
              “We Loved Using Vizag Achievers to show case our business. It
              helped us connect with new clients and grow our customer base.”
            </p>
            <div className="text-wrapper-29">--NAidu Noida</div>
            <div className="text-wrapper-30">Business Testimonial</div>
            <img
              className="img"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/rectangle-127-2@2x.png"
            />
          </div>
        </div>
        <div className="group-33">
          <img
            className="element"
            alt="Element"
            src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/6127-1-2.png"
          />
          <div className="group-34">
            <div className="text-wrapper-31">What is Vizag Achievers?</div>
            <p className="text-wrapper-32">
              MyWroom is a group of ambitious business owners who meet every
              week over breakfast and help each other to optimize and develop
              their businesses and their personal lives.
            </p>
            <p className="accelerate-your">
              <span className="span">
                Accelerate your Personal Growth
                <br />
              </span>
              <span className="text-wrapper-33">
                With valuable trainings and sessions, become a lifelong learner
                and develop your mind, body and soul.
              </span>
            </p>
            <p className="have-a-meaningful">
              <span className="span">
                Have a Meaningful Social life
                <br />
              </span>
              <span className="text-wrapper-33">
                Be a part of a close-knit community of successful business
                owners who are passionate about helping each other and the
                society at large.
              </span>
            </p>
            <p className="supercharge-your">
              <span className="span">
                Supercharge your Business
                <br />
              </span>
              <span className="text-wrapper-33">
                Expand your customer base and sales through quality referrals
                and MyWroom’s special mechanisms. An absolute win- win for both
                you and your customers.
              </span>
            </p>
          </div>
        </div>
        <div className="group-35">
          <img
            className="business-team"
            alt="Business team"
            src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/business-team-huddling-table-1-2@2x.png"
          />
          <div className="group-36">
            <div className="text-wrapper-34">Our Values</div>
            <p className="holistic-well-being">
              <span className="text-wrapper-35">Holistic well-being-</span>
              <span className="text-wrapper-36">
                {" "}
                MyWroom gives equal importance to your physical, mental, social
                and financial well being
                <br />
              </span>
              <span className="text-wrapper-35">
                Relationships, Not Contacts-
              </span>
              <span className="text-wrapper-36">
                {" "}
                MyWroom Believes in the power of healthy and fulfilling
                relationships and provides a wholesome community to its members
                <br />
              </span>
              <span className="text-wrapper-35">
                Gratitude and reciprocity-{" "}
              </span>
              <span className="text-wrapper-36">
                Growth comes with a spirit of gratitude and a willingness to
                extend a helping hand.
                <br />
              </span>
              <span className="text-wrapper-35">Family involvement- </span>
              <span className="text-wrapper-36">
                We believe that family pays an important role in one’s life and
                seek to increase family involvement at every step
                <br />
              </span>
              <span className="text-wrapper-35">Contribution to Society-</span>
              <span className="text-wrapper-36">
                {" "}
                MyWroom regularly contributes to social causes and we strongly
                believe in the social obligation of individuals.
              </span>
            </p>
          </div>
        </div>
        <div className="group-37">
          <div className="text-wrapper-31">What Sets Apart</div>
          <div className="design-component-instance-node">
            <img src={What} alt="dileep" className="what" />
          </div>
        </div>
        <div className="group-38">
          <div className="text-wrapper-37">Meet Our Team</div>
          <div className="teamCard">
            <img src={lij} alt="liju" style={{ width: "100%" }} />
            <h3>Srinivasa rao</h3>
            <p>National Director</p>
          </div>{" "}
          <div className="teamCard">
            <img src={lij} alt="liju" style={{ width: "100%" }} />
            <h3>Srinivasa rao</h3>
            <p>National Director</p>
          </div>{" "}
          <div className="teamCard">
            <img src={lij} alt="liju" style={{ width: "100%" }} />
            <h3>Srinivasa rao</h3>
            <p>National Director</p>
          </div>{" "}
          <div className="teamCard">
            <img src={lij} alt="liju" style={{ width: "100%" }} />
            <h3>Srinivasa rao</h3>
            <p>National Director</p>
          </div>{" "}
          <div className="teamCard">
            <img src={lij} alt="liju" style={{ width: "100%" }} />
            <h3>Srinivasa rao</h3>
            <p>National Director</p>
          </div>{" "}
          <div className="teamCard">
            <img src={lij} alt="liju" style={{ width: "100%" }} />
            <h3>Srinivasa rao</h3>
            <p>National Director</p>
          </div>{" "}
        </div>
        <div className="group-39" ref={aboutUs}>
          <div className="group-40">
            <div className="heading-liju-nair">Liju Nair</div>
            <div className="text-wrapper-38">CVO</div>
            <img
              className="rectangle-21"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/rectangle-135-3@2x.png"
            />
            <p className="text-wrapper-39">
              Liju R Nair is the founder and CVO of MyWroom. After completing 21
              years’ central government service in Delhi, he began to actively
              pursue his lifelong passion for entrepreneurship. He started an
              interior contracting firm in 2013 and forayed into the arena of
              gene profiling in 2018.During his entrepreneurial pursuits, he
              became part of various business referral clubs and realised their
              power to fuel the multi-dimensional growth of business owners.
              Attending multiple training sessions and coming in contact with
              many successful business owners made him realise the still
              untapped potential of business referral clubs, prompting him to
              establish MyWroom as an organisation. Since the first chapter of
              MyWroom launched in February 2021, MyWroom now has a strong
              presence across multiple cities in India.
            </p>
          </div>
          <div className="group-41">
            <div className="heading-srinivas-7">Srinivas Venigalla</div>
            <div className="national-director-7">NATIONAL DIRECTOR</div>
            <img
              className="rectangle-22"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/rectangle-139-2@2x.png"
            />
            <div className="srinivas-venigalla-wrapper">
              <p className="srinivas-venigalla">
                Srinivas Venigalla started his career in 1996 in Hyderabad and
                then moved to Middle East. Worked in Diallo Airlines and Airline
                Telecommunication Companies in UAE and East African countries
                and travelled extensively to various countries like Djibouti,
                Somalia, Kenya, Eritrea, Ethiopia, Singapore, Indonesia,
                Malaysia and Thailand. Later he added trading activities to his
                portfolio from 2004. With vast knowledge and experience in
                diversified fields like mining, timber, veterinary industry and
                agricultural sectors, took on the responsibility as Director in
                Sterling &amp; Generic Biotech Companies. He is presently the
                Founder director of Proprenz Biotech Private Limited and has
                steered and guided his team to spread wings across 22 states in
                India in just a short span of 5 years and is now ready with his
                blue print to continue his success streak by expanding outside
                the country too..
              </p>
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-3">
            <div className="overlap-group-4">
              <p className="text-wrapper-40">Some tag line to join our</p>
              <div className="text-wrapper-41">Are You Ready</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-42">Register Now</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-43">Featured Businesses</div>
        <div className="group-42">
          {data.map((item) => (
            <div className="group-43" key={item.id}>
              <div className="overlap-4">
                <div className="group-44">
                  <div className="overlap-5">
                    <div className="group-45">
                      <div className="group-46">
                        <div className="overlap-group-5">
                          <button
                            className="text-wrapper-44"
                            onClick={() => handleClick(item)}
                          >
                            View more
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="group-47">
                      <div className="text-wrapper-45">{item.name}</div>
                      <div className="group-48">Web flow creation</div>
                    </div>

                    <div className="div-3" />

                    <img
                      className="layer"
                      alt="Layer"
                      src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/layer-18-3@2x.png"
                    />
                  </div>
                  <img
                    className="group-49"
                    alt="Group"
                    src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/group-64@2x.png"
                  />
                  <img
                    className="group-50"
                    alt="Group"
                    src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bbbf5ea1c0897b96a64dd/img/group-299@2x.png"
                  />
                  <img
                    className="group-51"
                    alt="Group"
                    src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/group-47@2x.png"
                  />
                </div>
                <div className="group-52" />
              </div>
            </div>
          ))}
        </div>

        <div className="reg-wrapper">
          <div className="reg">
            <div className="group-54">
              <div className="overlap-group-7">
                <p className="text-wrapper-51">
                  Some tag line to join our program Some tag to join
                </p>
                <p className="text-wrapper-52">
                  Some tag line to Join our Program
                </p>
              </div>
              <form onSubmit={handleSubmit} className="form1">
                <input
                  className="frame-5"
                  type="text"
                  id="name"
                  placeholder="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="frame-6"
                  type="text"
                  id="name"
                  placeholder="location"
                  name="location"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="frame-7"
                  type="text"
                  id="name"
                  placeholder="name"
                  name="bussiness name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="frame-8"
                  type="text"
                  id="name"
                  placeholder="phone"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  placeholder="Bussiness type"
                  className="frame-9"
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                />

                <select
                  className="frame-10"
                  id="wantToJoinUs"
                  name="wantToJoinUs"
                  value={formData.wantToJoinUs}
                  onChange={handleChange}
                  required
                >
                  <option value="">Want to Join Us</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <div className="frame-4">
                  <button className="text-wrapper-53" type="submit">
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="group-76">
        <div className="group-77">
          <div className="overlap-8">
            <div className="group-78">
              <div className="overlap-group-8">
                <p className="text-wrapper-56">
                  Still Didn’t find what you are looking?
                </p>
                <p className="text-wrapper-57">Some tag line some tag line</p>
              </div>
            </div>
            <div className="group-79">
              <div className="group-80">
                <div className="group-81">
                  <div>
                    <form className="group-82" onSubmit={handleSubmit}>
                      <input
                        className="frame-11"
                        type="text"
                        id="name"
                        placeholder="Full Name"
                        name="name"
                        value={enquireData.fullName}
                        onChange={handleEnquireChange}
                        required
                      />
                      <select
                        className="frame-11"
                        id="byOraganization"
                        name="By Organization"
                        value={enquireData.byOrganization}
                        onChange={handleEnquireChange}
                        required
                      >
                        <option value="">By Organization</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <input
                        className="frame-11"
                        type="text"
                        id="name"
                        placeholder="Leads"
                        name="location"
                        value={enquireData.leads}
                        onChange={handleEnquireChange}
                        required
                      />
                      <input
                        className="frame-11"
                        type="text"
                        id="name"
                        placeholder="phone number"
                        name="phone number"
                        value={enquireData.phoneNumber}
                        onChange={handleEnquireChange}
                        required
                      />
                      <input
                        className="frame-11"
                        type="text"
                        id="name"
                        placeholder="personal name"
                        name="personal name"
                        value={enquireData.personalName}
                        onChange={handleEnquireChange}
                        required
                      />

                      <input
                        placeholder="Email"
                        className="frame-11"
                        type="text"
                        id="email"
                        name="email"
                        value={enquireData.email}
                        onChange={handleEnquireChange}
                        required
                      />

                      <select
                        className="frame-11"
                        id="wantToJoinUs"
                        name="To Organization"
                        value={enquireData.toOrganization}
                        onChange={handleEnquireChange}
                        required
                      >
                        <option value="">To Organization</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <textarea
                        placeholder="Message"
                        className="frame-13"
                        type="message"
                        id="message"
                        name="message"
                        value={enquireData.message}
                        onChange={handleEnquireChange}
                        required
                      />
                      <div className="group-90">
                        <div className="group-91">
                          <div className="group-92">
                            <div className="group-93">
                              <button className="text-wrapper-59">
                                SUBMIT
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <img
                className="high-five-satisfied"
                alt="High five satisfied"
                src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/high-five-satisfied-happy-joyful-employees-have-fun-raising-thei-2.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="group-94" ref={contactSectionRef}>
        <div className="overlap-9">
          <div className="group-95">
            <div className="overlap-10">
              <div className="group-96">
                <div className="group-97">
                  <div className="group-98">
                    <div className="text-wrapper-60">Contact Us</div>
                    <div className="group-99">
                      <div className="group-100">
                        <div className="group-101">
                          <div className="group-102">
                            <div className="overlap-group-9">
                              <div className="text-wrapper-61">
                                +91-00000000
                              </div>
                              <div className="text-wrapper-62">Phone</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img-2"
                          alt="Phone"
                          src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/phone-2@2x.png"
                        />
                      </div>
                      <div className="group-103">
                        <div className="overlap-11">
                          <div className="text-wrapper-62">Email</div>
                          <div className="text-wrapper-63">
                            Office@vizag.com
                          </div>
                        </div>
                        <img
                          className="img-2"
                          alt="Envelope"
                          src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/envelope-2@2x.png"
                        />
                      </div>
                      <div className="group-104">
                        <div className="overlap-12">
                          <div className="text-wrapper-62">Address</div>
                          <div className="text-wrapper-64">Visakhapatnam</div>
                        </div>
                        <img
                          className="img-2"
                          alt="Map marker"
                          src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/map-marker-2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-wrapper-65">
                © 2023 VASMI GROUP. All Rights Reserved.
              </p>
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/line-237-1.svg"
              />
            </div>
          </div>
          <div className="group-105">
            <FacebookIcon
              sx={{
                color: "white",
                width: "50px",
                cursor: "pointer",
                "&..css-1wedauf-MuiSvgIcon-root": {
                  fontSize: "2.5rem",
                },
              }}
            />
            <LinkedInIcon
              sx={{
                color: "white",
                width: "50px",
                cursor: "pointer",
                "&.css-7druj4-MuiSvgIcon-root": {
                  fontSize: "2.5rem",
                },
              }}
            />
            <InstagramIcon
              sx={{
                color: "white",
                cursor: "pointer",
                width: "50px",
                "&.css-7druj4-MuiSvgIcon-root": {
                  fontSize: "2.5rem",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
