import * as React from "react";
import { SVGProps } from "react";
const RatingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 30 30"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M12 4.71h7V13h-7Zm0 0" />
      </clipPath>
      <clipPath id="b">
        <path d="M4.172 7h22.5v17h-22.5Zm0 0" />
      </clipPath>
      <clipPath id="c">
        <path d="M4.172 7h22.5v17.309h-22.5Zm0 0" />
      </clipPath>
      <clipPath id="d">
        <path d="M7 7h5v17.309H7Zm0 0" />
      </clipPath>
      <clipPath id="e">
        <path d="M19 7h4v17.309h-4Zm0 0" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        fill="#454dd8"
        d="M16.145 12.277h-1.516a2.276 2.276 0 0 1-2.274-2.273v-3.02a2.276 2.276 0 0 1 2.274-2.273h1.516a2.273 2.273 0 0 1 2.273 2.273v3.02a2.273 2.273 0 0 1-2.273 2.273Zm-1.512-6.433c-.633 0-1.145.511-1.145 1.14v3.02c0 .633.512 1.144 1.145 1.144h1.515c.63 0 1.145-.511 1.145-1.144v-3.02c0-.629-.516-1.14-1.145-1.14Zm0 0"
      />
    </g>
    <g clipPath="url(#b)">
      <path
        fill="#848ae5"
        d="M24.953 23.969H5.824a1.309 1.309 0 0 1-1.308-1.309V9.137c0-.723.586-1.309 1.308-1.309h19.13c.722 0 1.308.586 1.308 1.309v13.52a1.31 1.31 0 0 1-1.309 1.312Zm0 0"
      />
    </g>
    <g clipPath="url(#c)">
      <path
        fill="#454dd8"
        d="M24.953 24.309H5.824c-.91 0-1.648-.739-1.648-1.649V9.137c0-.91.738-1.649 1.648-1.649h19.13c.91 0 1.648.739 1.648 1.649v13.52c0 .913-.743 1.652-1.649 1.652ZM5.824 8.164a.972.972 0 0 0-.969.973v13.52c0 .534.434.972.97.972h19.128a.975.975 0 0 0 .973-.973V9.136a.975.975 0 0 0-.973-.972Zm0 0"
      />
    </g>
    <path fill="#5a61dc" d="M8.328 7.828h2.914v16.14H8.328Zm0 0" />
    <g clipPath="url(#d)">
      <path
        fill="#454dd8"
        d="M11.242 24.309H8.328a.338.338 0 0 1-.34-.34V7.829a.34.34 0 0 1 .34-.34h2.914a.34.34 0 0 1 .34.34v16.14c0 .191-.152.34-.34.34Zm-2.574-.676h2.234V8.164H8.668Zm0 0"
      />
    </g>
    <path fill="#5a61dc" d="M19.535 7.828h2.914v16.14h-2.914Zm0 0" />
    <g clipPath="url(#e)">
      <path
        fill="#454dd8"
        d="M22.45 24.309h-2.915a.338.338 0 0 1-.34-.34V7.829a.34.34 0 0 1 .34-.34h2.914c.192 0 .34.152.34.34v16.14c0 .191-.148.34-.34.34Zm-2.575-.676h2.238V8.164h-2.238Zm0 0"
      />
    </g>
    <path
      fill="#454dd8"
      d="M12.625 17.36a.34.34 0 0 1-.34-.34v-3.27a.34.34 0 0 1 .34-.34c.188 0 .336.152.336.34v3.27c0 .187-.149.34-.336.34Zm5.531 0a.34.34 0 0 1-.34-.34v-3.27a.34.34 0 0 1 .68 0v3.27c0 .187-.156.34-.34.34Zm0 0"
    />
  </svg>
);
export default RatingIcon;
