import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./portfolio.css";
import { Footer } from "../../components/Footer/Footer.jsx/Footer";
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const [data, setData] = useState([]);
  const cardref = useRef(null);

  const navigation = useNavigate();

  const scrollToCard = () => {
    if (cardref.current) {
      cardref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  const fetchdata = async () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(URL).then((res) => res.json());
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="portfolio">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="layer"
              alt="Layer"
              src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/layer-20@2x.png"
            />
          </div>
          <div className="group">
            <div className="overlap-2">
              <div className="text-wrapper">Sai Krishna</div>
              <div className="text-wrapper-2">CEO</div>
            </div>
          </div>
          <img
            className="element-home"
            alt="Element home"
            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/9-home@2x.png"
          />
        </div>
        <div className="group-60"></div>
        <div className="text-wrapper-3">About Us</div>
        <p className="p">
          Welcome to Vasmi Group, a pioneering leader in delivering
          comprehensive Recruitment, IT, and Marketing services that drive
          growth and innovation for businesses across diverse industries. With
          an unwavering commitment to excellence, we stand as your strategic
          partner in navigating the complex landscape of talent acquisition,
          technology empowerment, and market outreach.
        </p>
        <div className="overlap-3">
          <img
            className="OBJECTS"
            alt="Objects"
            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/objects@2x.png"
          />
          <div className="group-wrapper">
            <div className="group-2">
              <p className="text-wrapper-4">Advantages of working with us</p>
              <div className="group-3">
                <div className="div-wrapper">
                  <div className="group-4">
                    <p className="text-wrapper-5">
                      At Vasmi Group, we understand that every successful
                      organization is built on the foundation of exceptional
                      talent. Our Recruitment Services specialize in identifying
                      and securing the finest professionals who not only possess
                      the right skills but also align with your company&#39;s
                      values and vision.
                    </p>
                    <div className="text-wrapper-6">Recruitment Services:</div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="group-6">
                    <p className="text-wrapper-5">
                      Stand out in a competitive market with Vasmi Group&#39;s
                      expert Marketing Services. Our Marketing Strategies are
                      tailored to resonate with your target audience, driving
                      brand awareness and customer engagement. From crafting
                      captivating Marketing Campaigns to implementing
                      cutting-edge Digital Marketing techniques, we elevate your
                      brand&#39;s presence across channels.
                    </p>
                    <div className="text-wrapper-7">Marketing Excellence:</div>
                  </div>
                </div>
                <div className="group-7">
                  <div className="group-8">
                    <p className="in-the-digital-age-a">
                      In the digital age, a robust IT infrastructure is
                      indispensable for sustainable success. Vasmi Group&#39;s
                      IT Solutions cater to your unique technological needs,
                      whether it&#39;s developing custom software, optimizing
                      networks, or enhancing cybersecurity measures. We empower
                      your business with the tools needed to thrive in a rapidly
                      evolving digital landscape.
                    </p>
                    <div className="text-wrapper-8">IT Solutions:</div>
                  </div>
                </div>
                <div className="OBJECTS-2">
                  <div className="group-9">
                    <div className="group-10">
                      <div className="group-9">
                        <div className="overlap-4">
                          <img
                            className="vector"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-9.svg"
                          />
                          <img
                            className="img"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-10.svg"
                          />
                          <img
                            className="group-11"
                            alt="Group"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-65@2x.png"
                          />
                          <img
                            className="group-12"
                            alt="Group"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-74@2x.png"
                          />
                          <img
                            className="vector-2"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-11.svg"
                          />
                          <img
                            className="vector-3"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-12.svg"
                          />
                          <img
                            className="vector-4"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-13.svg"
                          />
                          <img
                            className="vector-5"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-14.svg"
                          />
                          <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                              <img
                                className="vector-6"
                                alt="Vector"
                                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-15.svg"
                              />
                              <div className="group-13">
                                <div className="text-wrapper-9">?</div>
                              </div>
                            </div>
                          </div>
                          <div className="overlap-wrapper">
                            <div className="overlap-5">
                              <img
                                className="vector-7"
                                alt="Vector"
                                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-16.svg"
                              />
                              <div className="group-14">
                                <div className="text-wrapper-10">?</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-15">
            <div className="group-16">
              <div className="group-17">
                <div className="overlap-6">
                  <div className="group-18">
                    <div className="TEXT-wrapper">
                      <div className="TEXT">
                        <div className="group-19">
                          <img
                            className="vector-8"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-5.svg"
                          />
                          <div className="REFER-a-LEAD">
                            REFER A <br />
                            LEAD
                          </div>
                          <p className="text-wrapper-11">
                            Let’s grow together. Refer us to your potential
                            clients
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="group-20">
                      <div className="overlap-group-3">
                        <button
                          className="text-wrapper-12"
                          onClick={() => navigation("modal")}
                        >
                          Refer Now
                        </button>
                        <div className="rectangle" />
                      </div>
                    </div>
                  </div>
                  <img
                    className="OBJECTS-3"
                    alt="Objects"
                    src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/objects-3@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-7">
          <div className="group-21">
            <div className="group-22">
              <div className="group-23">
                <p className="text-wrapper-13">
                  Complex solutions in the three-step process of our services
                </p>
              </div>
              <img
                className="group-24"
                alt="Group"
                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-8@2x.png"
              />
              <img
                className="group-25"
                alt="Group"
                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-9@2x.png"
              />
              <div className="group-26">
                <div className="group-27">
                  <div className="text-wrapper-14">Initiation</div>
                  <p className="text-wrapper-15">
                    Initiating with the pre-requisites, planning, and data
                    analysis
                  </p>
                  <div className="img-wrapper">
                    <img
                      className="group-28"
                      alt="Group"
                      src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-107@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="group-29">
                <div className="group-30">
                  <div className="group-31">
                    <div className="group-32">
                      <p className="text-wrapper-16">
                        Closing and completion of the project with the final
                        settlement of the payment.
                      </p>
                      <div className="text-wrapper-17">Contracts and pay</div>
                      <div className="group-33">
                        <div className="group-34">
                          <img
                            className="group-35"
                            alt="Group"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-1686561997-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-36">
                <div className="group-30">
                  <div className="group-37">
                    <p className="text-wrapper-18">
                      Scheduling the plan that works for the project to progress
                    </p>
                    <div className="text-wrapper-19">Scheduling</div>
                    <div className="img-wrapper">
                      <img
                        className="group-38"
                        alt="Group"
                        src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-109@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-wrapper-20">Three Stages of Vasmi Group</p>
        </div>
        <div className="group-39">
          <div className="overlap-8">
            <div style={{ width: "450px", height: "100%" }}>
              <p className="text-wrapper-23">Some tag line like Interact Now</p>
              <div style={{ width: "500px", display: "flex", gap: "20px" }}>
                <div className="group-40">
                  <div className="button-wrapper">
                    <button className="button">
                      <div className="frame">
                        <img
                          className="group-41"
                          alt="Group"
                          src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-4@2x.png"
                        />
                        <div className="text-wrapper-21">Visit our Website</div>
                        <div className="arrow-right-up" />
                        <img
                          className="vector-9"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-3.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="group-42">
                  <div className="button-wrapper">
                    <button className="button">
                      <div className="frame">
                        <img
                          className="group-41"
                          alt="Group"
                          src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-4@2x.png"
                        />
                        <div className="text-wrapper-22">Refer a Lead</div>
                        <img
                          className="vector-9"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/vector-3.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-9">
          <div className="group-43">
            <div className="group-44">
              <div className="group-45">
                <img
                  className="landscaping-post"
                  alt="Landscaping post"
                  src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/landscaping-post-copy-2@2x.png"
                />
              </div>
            </div>
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="asset-wrapper">
              <img
                className="asset"
                alt="Asset"
                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/asset-2-4x-1@2x.png"
              />
            </div>
            <div className="excelhire-logo-wrapper">
              <img
                className="excelhire-logo"
                alt="Excelhire logo"
                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/excelhire-logo-1.png"
              />
            </div>
            <div className="group-46">
              <div className="group-45">
                <img
                  className="js-logo-colours"
                  alt="Js logo colours"
                  src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/js-logo-colours-1-1@2x.png"
                />
              </div>
            </div>
            <div className="aadhya-associates-wrapper">
              <img
                className="aadhya-associates"
                alt="Aadhya associates"
                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/6597a104c3042f8262f6ec5e/img/aadhya-associates-logo-1.png"
              />
            </div>
            <div className="group-47">
              <div className="group-45">
                <img
                  className="AGV-logo"
                  alt="Agv logo"
                  src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/agv-logo-2@2x.png"
                />
              </div>
            </div>
            <div className="logo-copy-wrapper">
              <img
                className="logo-copy"
                alt="Logo copy"
                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/logo-2-copy-1.png"
              />
            </div>
            <div className="text-wrapper-24">Our Clients</div>
          </div>
          <img
            className="element-logo-FULL"
            alt="Element logo FULL"
            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/7arrows-logo-full-and-final-copy-1-1.png"
          />
        </div>
        <div className="group-48">
          <div className="group-49">
            <div className="group-50">
              <div className="group-51">
                <div className="div-2">
                  <div className="overlap-group-4">
                    <img
                      className="ellipse"
                      alt="Ellipse"
                      src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/ellipse-98-3@2x.png"
                    />
                    <p className="text-wrapper-25">
                      Vasmi Group is very accurate when comes to helping you
                      find a job and if that job fininshes. They help you to
                      find another.
                    </p>
                    <div className="text-wrapper-26">Developer</div>
                    <div className="john-SMITH">JOHN SMITH</div>
                    <img
                      className="group-52"
                      alt="Group"
                      src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-338@2x.png"
                    />
                  </div>
                  <img
                    className="line"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/6597a104c3042f8262f6ec5e/img/--1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-53">
              <div className="group-51">
                <div className="div-2">
                  <div className="overlap-group-4">
                    <img
                      className="ellipse"
                      alt="Ellipse"
                      src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/ellipse-98-3@2x.png"
                    />
                    <p className="text-wrapper-25">
                      Vasmi Group is very accurate when comes to helping you
                      find a job and if that job fininshes. They help you to
                      find another.
                    </p>
                    <div className="text-wrapper-26">Developer</div>
                    <div className="john-SMITH">JOHN SMITH</div>
                    <img
                      className="group-52"
                      alt="Group"
                      src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-338@2x.png"
                    />
                  </div>
                  <img
                    className="line"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/6597a104c3042f8262f6ec5e/img/--1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-100">
              <div className="group-51">
                <div className="div-2">
                  <div className="group-101">
                    <div className="overlap-group-4">
                      <img
                        className="ellipse"
                        alt="Ellipse"
                        src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/ellipse-98-3@2x.png"
                      />
                      <p className="text-wrapper-25">
                        Vasmi Group is very accurate when comes to helping you
                        find a job and if that job fininshes. They help you to
                        find another.
                      </p>
                      <div className="text-wrapper-26">Developer</div>
                      <div className="john-SMITH-2">JOHN SMITH</div>
                    </div>
                    <img
                      className="line"
                      alt="Line"
                      src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/6597a104c3042f8262f6ec5e/img/--1@2x.png"
                    />
                  </div>
                  <img
                    className="group-52"
                    alt="Group"
                    src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-338@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-27">Testimonials</div>
        </div>
        <div className="group-54" ref={cardref}>
          <div className="overlap-10">
            <div className="group-55">
              <p className="text-wrapper-32">Looking for some thing else?</p>
              <p className="text-wrapper-33">Fill the Details to connect!</p>

              <div className="group-56">
                <div className="group-57">
                  <div>
                    <input placeholder="Phone number" className="overlap-11" />
                  </div>
                  <div className="overlap-12">
                    <div className="group-58">
                      <div>
                        <button className="group-59">SUBMIT</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      className="message-OR-auto-wrapper"
                      placeholder="Message"
                    />
                    <p className="message-OR-auto">
                      <span className="text-wrapper-30">
                        OR(Auto selects service)
                      </span>
                    </p>
                  </div>
                  <div className="group-60">
                    <div>
                      <input
                        className="overlap-group-5"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-34">Contact Us</div>

        <div className="overlap-18">
          <div className="group-81">
            <div className="group-82">
              <div className="text-wrapper-27">Our Services</div>
              <div className="frame-2">
                <>
                  <div class="button-contianer">
                    <button
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: arrowDisable
                          ? "#01020273"
                          : "#3a5acf73",
                        border: "4px solid white",
                      }}
                      onClick={() => {
                        handleHorizantalScroll(
                          elementRef.current,
                          35,
                          100,
                          -10
                        );
                      }}
                      disabled={arrowDisable}
                    >
                      <KeyboardArrowLeftIcon
                        sx={{ color: "white", fontSize: "40px" }}
                      />
                    </button>
                    <button
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#3a5acf73",
                        border: "4px solid white",
                      }}
                      onClick={() => {
                        handleHorizantalScroll(elementRef.current, 35, 100, 10);
                      }}
                    >
                      <KeyboardArrowRightIcon />
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      width: "100%",
                      overflow: "hidden",
                    }}
                    ref={elementRef}
                    class="img-container"
                  >
                    {data.map((placement) => (
                      <div loading="lazy" key={placement.id}>
                        <div className="div-3">
                          <div
                            style={{
                              backgroundColor: getRandomColor(),
                              borderRadius: "30px",
                              boxShadow: "4px 4px 4px #00000040",
                              height: "320px",
                              left: 0,
                              position: "absolute",
                              top: 0,
                              width: "320px",
                            }}
                          >
                            <div className="text-wrapper-46">
                              {placement.name}
                            </div>
                            <div className="overlap-group-11">
                              <p className="text-wrapper-47">
                                Effective planning works out with strategic
                                implementation. Vasmi Group enhances your plans
                                and execute them seamlessly with optimal
                                marketing strategies.
                              </p>
                              <div className="ellipse-3" />
                              <img
                                onClick={scrollToCard}
                                className="layer-2"
                                alt="Layer"
                                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/layer-2@2x.png"
                              />
                            </div>
                          </div>
                          <img
                            className="research-2"
                            alt="Research"
                            src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/research-1309308-1-1.svg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              </div>
            </div>
          </div>
          <button className="button-2">
            <div className="overlap-21">
              <img
                className="group-98"
                alt="Group"
                src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-6@2x.png"
              />
              <div className="text-wrapper-50">Visit our Website</div>
            </div>
            <img
              className="group-99"
              alt="Group"
              src="https://cdn.animaapp.com/projects/65964703eafdb58ab4b00040/releases/659915ebf17778d544f3d823/img/group-7@2x.png"
            />
          </button>
        </div>

        <div className="group-102">
          <div
            style={{
              width: "80%",
              height: "90%",
              position: "relative",
              top: "9%",
              left: "10%",
            }}
          >
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
      <Footer />
    </div>
  );
};
