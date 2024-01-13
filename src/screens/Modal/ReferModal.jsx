import React from "react";
import "./modal.css";

export const ReferModal = () => {
  return (
    <div className="modal">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="overlap-group">
              <div className="group">
                <div className="let-s-collaborate">Let’s Collaborate</div>
              </div>
              <p className="some-tag-linesome">
                Some Tag Linesome Tag Line Some Tag Line
              </p>
            </div>
            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <div className="div">
                <div>
                  <input
                    className="div-wrapper"
                    placeholder="Organization name"
                  />
                </div>
                <div className="referal-by">Referal By</div>
              </div>
              <div className="overlap-2">
                <div className="group-2">
                  <div>
                    <input
                      className="div-wrapper"
                      placeholder="Organization Name"
                    />
                  </div>
                  <div className="referal-to">Referal To</div>
                </div>
              </div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-3">
                <div>
                  <input className="overlap-4" placeholder="Name" />
                </div>
                <div className="overlap-5">
                  <input className="rectangle" placeholder="Organization" />
                  <div>
                    <input
                      className="referring-for-wrapper"
                      placeholder="Referring For"
                    />
                  </div>
                  <inp className="text-wrapper-4" placeholder="Organization" />
                </div>
                <div className="text-wrapper-5">Referal</div>
                <div className="group-4">
                  <div>
                    <input
                      className="phone-number-wrapper"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="group-5">
                  <button className="overlap-6">Submit</button>
                </div>
              </div>
            </div>
            <img
              className="close-circle-line"
              alt="Close circle line"
              src="https://cdn.animaapp.com/projects/65994cc167b7339261665c3e/releases/65a0ffff4d95cf907e9ed99f/img/close-circle-line-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
