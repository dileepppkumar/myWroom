import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-994">
        <div className="over-9">
          <div className="foot-95">
            <div className="over-10">
              <div className="foot-96">
                <div className="foot-97">
                  <div className="foot-98">
                    <div className="rapper-60">Contact Us</div>
                    <div className="foot-99">
                      <div className="foot-100">
                        <div className="foot-101">
                          <div className="foot-102">
                            <div className="over-group-9">
                              <div className="rapper-61">+91-00000000</div>
                              <div className="rapper-62">Phone</div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img-2"
                          alt="Phone"
                          src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/phone-2@2x.png"
                        />
                      </div>
                      <div className="foot-103">
                        <div className="over-11">
                          <div className="rapper-62">Email</div>
                          <div className="rapper-63">Office@vizag.com</div>
                        </div>
                        <img
                          className="img-2"
                          alt="Envelope"
                          src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/envelope-2@2x.png"
                        />
                      </div>
                      <div className="foot-104">
                        <div className="over-12">
                          <div className="rapper-62">Address</div>
                          <div className="rapper-64">Visakhapatnam</div>
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
              <p className="rapper-65">
                © 2023 VASMI foot. All Rights Reserved.
              </p>
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/659bb63df8c0a7ce7bd372ec/img/line-237-1.svg"
              />
            </div>
          </div>
          <div className="foot-105">
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
