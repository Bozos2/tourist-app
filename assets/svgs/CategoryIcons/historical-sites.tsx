import * as React from "react";
import { SVGProps } from "react";
const HistoricalSites = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 45 45"
    {...props}
  >
    <path
      fill="currentColor"
      d="M23 15.5h1a1 1 0 0 1 .993.883L25 16.5v2h1v-2c0-.473.329-.87.771-.974l.112-.019L27 15.5h4a1 1 0 0 1 .993.883L32 16.5v5a1 1 0 0 1-.108.453l-.06.102L30 24.802V36.5c0 .473-.329.87-.771.974l-.112.019L29 37.5H15a1 1 0 0 1-.993-.883L14 36.5V24.804l-1.832-2.749a.992.992 0 0 1-.14-.322l-.021-.115L12 21.5v-5a1 1 0 0 1 .883-.993L13 15.5h4a1 1 0 0 1 .993.883L18 16.5v2h1v-2c0-.473.329-.87.771-.974l.112-.019L20 15.5h3Zm-7 2h-2v3.697l1.832 2.748a.992.992 0 0 1 .14.322l.021.115.007.118v11h2v-4a4 4 0 0 1 3.8-3.995l.2-.005a4 4 0 0 1 3.995 3.8l.005.2v4h2v-8h-2v-2h2v-1c0-.118.021-.235.062-.345l.046-.108.06-.102L30 21.196V17.5h-2v2c0 .473-.329.87-.771.974l-.112.019L27 20.5h-3a1 1 0 0 1-.993-.883L23 19.5v-2h-2v2c0 .473-.329.87-.771.974l-.112.019L20 20.5h-3a1 1 0 0 1-.993-.883L16 19.5v-2Zm6 12a2.001 2.001 0 0 0-1.995 1.851L20 31.5v4h4v-4a2 2 0 0 0-1.697-1.977l-.154-.018L22 29.5Zm4-5h-3v-2h3v2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.25 16.25V8.562M27.385 12.504h-5.01V8.498h5.01v4.006Z"
    />
  </svg>
);
export default HistoricalSites;
