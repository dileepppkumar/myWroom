import React from "react";

export const Yes69 = ({
  color = "url(#paint0_linear_900_4522)",
  fill = "url(#paint1_linear_900_4522)",
  className,
}) => {
  return (
    <svg
      className={`yes-69 ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.5251 35.0482C7.86164 35.0482 0 27.1862 0 17.5231C0 12.8417 1.82356 8.44134 5.13474 5.13217C8.44191 1.82271 12.8423 0 17.5254 0C22.2085 0 26.6089 1.82271 29.9163 5.13245C33.2272 8.44105 35.0508 12.8414 35.0508 17.5228C35.0508 22.2056 33.2272 26.6068 29.916 29.916C26.6086 33.2255 22.2079 35.0482 17.5251 35.0482ZM17.5251 1.43205C13.2246 1.43205 9.18399 3.10582 6.1472 6.14491C3.10639 9.18371 1.43176 13.2244 1.43176 17.5231C1.43176 26.3969 8.65099 33.6161 17.5248 33.6161C21.8252 33.6161 25.8659 31.9424 28.9027 28.9033C31.9435 25.8645 33.6181 21.8229 33.6181 17.5228C33.6181 13.2241 31.9435 9.18342 28.903 6.14491C25.8662 3.10582 21.8255 1.43205 17.5251 1.43205Z"
        fill={color}
      />
      <path
        className="path"
        d="M27.3462 7.69745L15.0587 27.5903C14.811 27.9915 14.2344 28.0107 13.9603 27.6272L7.71404 18.884C7.48921 18.5693 7.85324 18.1709 8.1869 18.3665L14.1024 21.8355L26.7708 7.27356C27.0601 6.94161 27.5777 7.32283 27.3462 7.69745Z"
        fill={fill}
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_900_4507"
          x1="-0.000171846"
          x2="35.0503"
          y1="17.5241"
          y2="17.5241"
        >
          <stop className="stop" stopColor="#4FC646" />
          <stop className="stop" offset="1" stopColor="#3FB06B" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_900_4507"
          x1="7.64464"
          x2="27.4042"
          y1="17.5252"
          y2="17.5252"
        >
          <stop className="stop" stopColor="#4FC646" />
          <stop className="stop" offset="1" stopColor="#3FB06B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
