import React from "react";
import { No58 } from "../No58/No";
import { Yes69 } from "../Yes69/Yes";
import "./apart.css";

export const WhatSetApart = ({
  className,
  groupClassName,
  override = <Yes69 />,
  override1 = <Yes69 />,
  override2 = <Yes69 />,
  override3 = <Yes69 />,
  override4 = <Yes69 />,
  override5 = <Yes69 />,
  override6 = <Yes69 />,
  override7 = <Yes69 />,
  override8 = <Yes69 />,
  override9 = <Yes69 />,
  override10 = <No58 />,
  override11 = <No58 />,
  override12 = <No58 />,
  override13 = <No58 />,
  override14 = <No58 />,
  override15 = <No58 />,
  override16 = <No58 />,
  override17 = <No58 />,
  override18 = <No58 />,
}) => {
  return (
    <div className={`what-set-apart ${className}`}>
      <div className="group">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className={`rectangle-wrapper ${groupClassName}`}>
                <div className="rectangle" />
              </div>
              <div className="text-wrapper">Vizag Achievers</div>
            </div>
          </div>
          <div className="div" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="rectangle-9" />
          <div className="rectangle-10" />
          <div className="rectangle-11" />
          <div className="rectangle-12" />
          <div className="rectangle-13" />
          <div className="rectangle-14" />
          <div className="text-wrapper-2">Annual Membership renewal fee</div>
          <div className="text-wrapper-3">Certificates</div>
          <div className="text-wrapper-4">Rewards for performers</div>
          <div className="text-wrapper-5">Importance to physical health</div>
          <div className="text-wrapper-6">Family involvement</div>
          <div className="text-wrapper-7">Social commitment</div>
          <div className="text-wrapper-8">Market capturing mechanism</div>
          <p className="p">Socail media integration for business growth</p>
          <div className="text-wrapper-9">Category duplication</div>
          <div className="text-wrapper-10">Importance to mental health</div>
          <div className="text-wrapper-11">Special debating skill training</div>
          <div className="text-wrapper-12">Certificates+ fee Waivers</div>
          <div className="text-wrapper-13">No58t required for Performers</div>
          <div className="text-wrapper-14">Other Similar Organisations</div>
          <div className="text-wrapper-15">Yes69</div>
          <p className="text-wrapper-16">
            Opportunity for members to own chapters
          </p>
          <div className="Yes69-wrapper">{override}</div>
          <div className="group-2">{override1}</div>
          <div className="group-3">{override2}</div>
          <div className="group-4">{override3}</div>
          <div className="group-5">{override4}</div>
          <div className="group-6">{override5}</div>
          <div className="group-7">{override6}</div>
          <div className="group-8">{override7}</div>
          <div className="group-9">{override8}</div>
          <div className="group-10">{override9}</div>
          <div className="No58-wrapper">{override10}</div>
          <div className="group-11">{override11}</div>
          <div className="group-12">{override12}</div>
          <div className="group-13">{override13}</div>
          <div className="group-14">{override14}</div>
          <div className="group-15">{override15}</div>
          <div className="group-16">{override16}</div>
          <div className="group-17">{override17}</div>
          <div className="group-18">{override18}</div>
        </div>
      </div>
    </div>
  );
};
