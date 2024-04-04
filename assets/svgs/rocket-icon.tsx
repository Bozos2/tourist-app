import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M171.181 340.819c-52.5-52.5-118.497 43.543-118.497 43.543l24.597-7.532-53.691 63.3 35.351-9.502L0 511.999l81.371-58.94-9.502 35.35 63.299-53.691-7.532 24.597c.001.001 96.045-65.996 43.545-118.496z"
      style={{
        fill: "#f9d026",
      }}
    />
    <path
      d="M171.181 340.819 0 511.999l81.371-58.94-9.502 35.35 63.299-53.691-7.532 24.597c.001.001 96.045-65.996 43.545-118.496z"
      style={{
        fill: "#e7c224",
      }}
    />
    <path
      d="m183.216 222.837-129.41-21.812 67.988-67.987 129.41 21.811z"
      style={{
        fill: "#f74d37",
      }}
    />
    <path
      d="m289.163 328.785 21.812 129.41 67.988-67.988-21.812-129.409z"
      style={{
        fill: "#c43d2c",
      }}
    />
    <path
      d="M465.429 159.887C508.154 86.257 512 .005 512 .002c0 0-86.254 3.843-159.885 46.57-16.993 9.862-33.312 21.791-47.746 36.225L144.103 243.063c-24.293 24.293-24.9 68.627 15.655 109.182 40.555 40.555 84.888 39.947 109.182 15.655l160.266-160.266c14.432-14.435 26.363-30.754 36.223-47.747z"
      style={{
        fill: "#edeef0",
      }}
    />
    <path
      d="M465.429 159.887C508.154 86.257 512 .005 512 .002L408.772 103.23 206.521 305.481l-46.763 46.763c40.555 40.555 84.888 39.947 109.182 15.655l160.266-160.266c14.432-14.434 26.363-30.753 36.223-47.746z"
      style={{
        fill: "#dcdee2",
      }}
    />
    <path
      d="M512 .002s-86.254 3.843-159.885 46.57l56.657 56.657 56.657 56.657C508.154 86.257 512 .005 512 .002z"
      style={{
        fill: "#f74d37",
      }}
    />
    <path
      d="m206.52 305.481-62.418-62.418c-24.293 24.293-24.9 68.627 15.655 109.182s84.888 39.947 109.182 15.655l-62.419-62.419z"
      style={{
        fill: "#444242",
      }}
    />
    <path
      d="m268.938 367.899-62.418-62.418-46.763 46.763c40.554 40.555 84.889 39.947 109.181 15.655z"
      style={{
        fill: "#3a3839",
      }}
    />
    <circle
      cx={344.932}
      cy={167.068}
      r={40.764}
      style={{
        fill: "#bce8f7",
      }}
    />
    <path
      d="m273.048 238.951-105.833 75.482-75.482 105.834-.002.001 105.835-75.482z"
      style={{
        fill: "#f74d37",
      }}
    />
    <path
      d="m197.566 344.786 75.482-105.835L91.733 420.267l-.002.001zM512 .001 408.772 103.229l56.657 56.657C508.154 86.257 512 .005 512 .001z"
      style={{
        fill: "#c43d2c",
      }}
    />
    <path
      d="M373.756 195.894c15.919-15.919 15.919-41.729 0-57.649l-57.649 57.649c15.918 15.92 41.729 15.92 57.649 0z"
      style={{
        fill: "#8ec1d6",
      }}
    />
  </svg>
  /*   <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M4.56 16.737c-1.337 1.297.417 2.686-2.274 4.572 0 0 1.583.531 3.017-1.275.491-.622 1.063-.88 1.063-.88.194.115.045.749-.646 1.269 0 0 1.08.029 1.754-.646.675-.674 1.132-1.645 1.132-1.645.463.811-.697 1.84-.697 1.84s1.09-.286 2.388-1.583c1.006-1.006 1.726-3.515.28-4.955s-4.023-1.182-5.286.086c-.554.554-1.12 1.417-1.194 2.126 0 0 1.063-1.149 1.44-.663 0 0-1.8 1.086-2.091 2.12.005 0 .902-.537 1.114-.366Z"
    />
    <path
      fill="url(#b)"
      d="M3.566 17.726c-1.4.56-.497 1.737-1.103 2.343 0 0 .806-.44.794-1.303-.011-.703.309-1.04.309-1.04Z"
    />
    <path
      fill="url(#c)"
      d="M3.891 21.812c.36-.04.966-1.086 1.789-.915 0 0-.737 1.075-1.789.915Z"
    />
    <path
      fill="url(#d)"
      d="M8.32 19.714c.44-.165 1.189-.531 1.977-1.325.886-.886 1.623-3.4.171-4.846-1.417-1.417-3.902-1.131-5.097.063-.428.428-.885 1.074-1.068 1.668.257-.228.64-.514.96-.548a.417.417 0 0 1 .388.154l.092.114-.16.098c-.017.011-1.412.862-1.886 1.731.326-.166.772-.349.954-.2l.103.086-.12.12c-.497.485-.525.983-.548 1.56-.04.828-.086 1.76-1.492 2.84.48.063 1.572.034 2.606-1.263.514-.652 1.109-.926 1.131-.937L6.4 19l.051.029c.098.057.143.183.126.348-.023.229-.171.555-.491.886.354-.046.908-.177 1.303-.571.645-.646 1.091-1.583 1.097-1.595l.125-.268.12.211c.309.549-.034 1.217-.411 1.674Z"
      opacity={0.5}
    />
    <path
      fill="url(#e)"
      d="M2.463 20.069c.394-.32.8-.949.794-1.303-.006-.326.086-.783.309-1.04-.983.417-.846 1.074-.72 1.4.057.143-.017.566-.383.943Z"
    />
    <path
      fill="url(#f)"
      d="M3.223 21.035c1.863-.612 2.36-2.726 3.554-3.092 1.2-.366.897.777.434 1.297 0 0 1.583-1.588 1.589-2.828.011-1.24 1.674.697 1.16 1.703 0 0 2.543-2.543.509-4.572-2.035-2.028-4.738-.005-4.738-.005s1.543-.063 1.406 1.057c0 0-1.188.451-2.126 1.2 0 0 .458.051.772.52 0 0-1.4.965-1.343 1.794.08 1.068-.617 2.731-1.217 2.926Z"
    />
    <path
      fill="url(#g)"
      d="M4.526 19.429c.868-.217 1.634-2.252 2.857-2.137.674.062.52.645.52.645s.468-.668.577-1.566c.108-.897 1.783-.594 1.708 1.098 0 0 1.84-2.395-.394-3.92-2.463-1.68-4.268.428-4.268.428s1.685-.56 1.948.777c0 0-1.394.389-1.908.903 0 0 .594.086.737.72 0 0-1.372 1.006-1.332 1.406.097.954-.445 1.646-.445 1.646Z"
    />
    <path
      fill="url(#h)"
      d="M4.56 16.737c-1.337 1.297.417 2.686-2.274 4.572 0 0 1.583.531 3.017-1.275.491-.622 1.063-.88 1.063-.88.194.115.045.749-.646 1.269 0 0 1.08.029 1.754-.646.675-.674 1.132-1.645 1.132-1.645.463.811-.697 1.84-.697 1.84s1.09-.286 2.388-1.583c1.006-1.006 1.726-3.515.28-4.955s-4.023-1.182-5.286.086c-.554.554-1.12 1.417-1.194 2.126 0 0 1.063-1.149 1.44-.663 0 0-1.8 1.086-2.091 2.12.005 0 .902-.537 1.114-.366Z"
      opacity={0.5}
    />
    <path
      fill="url(#i)"
      d="M4.56 16.737c-1.337 1.297.417 2.686-2.274 4.572 0 0 1.583.531 3.017-1.275.491-.622 1.063-.88 1.063-.88.194.115.045.749-.646 1.269 0 0 1.08.029 1.754-.646.675-.674 1.132-1.645 1.132-1.645.463.811-.697 1.84-.697 1.84s1.09-.286 2.388-1.583c1.006-1.006 1.726-3.515.28-4.955s-4.023-1.182-5.286.086c-.554.554-1.12 1.417-1.194 2.126 0 0 1.063-1.149 1.44-.663 0 0-1.8 1.086-2.091 2.12.005 0 .902-.537 1.114-.366Z"
      opacity={0.5}
    />
    <path
      fill="url(#j)"
      d="M9.623 18.817c1.303-1.388 2.04-3.868.68-5.228-1.36-1.36-3.863-.217-4.972.806 0 0 .886-.372 1.583.074s-1.297 1.217-1.714 2.44c0 0 1.777-1.069 2.337-.617.56.451-.006 1.874-.543 2.411 0 0 1.275-.651 1.96-1.491 1.046-1.286.669 1.605.669 1.605Z"
    />
    <path
      fill="url(#k)"
      d="M4.56 16.737c-1.337 1.297.417 2.686-2.274 4.572 0 0 1.583.531 3.017-1.275.491-.622 1.063-.88 1.063-.88.194.115.045.749-.646 1.269 0 0 1.08.029 1.754-.646.675-.674 1.132-1.645 1.132-1.645.463.811-.697 1.84-.697 1.84s1.09-.286 2.388-1.583c1.006-1.006 1.726-3.515.28-4.955s-4.023-1.182-5.286.086c-.554.554-1.12 1.417-1.194 2.126 0 0 1.063-1.149 1.44-.663 0 0-1.8 1.086-2.091 2.12.005 0 .902-.537 1.114-.366Z"
      opacity={0.5}
    />
    <path
      fill="url(#l)"
      d="M3.566 17.726c-1.4.56-.497 1.737-1.103 2.343 0 0 .806-.44.794-1.303-.011-.703.309-1.04.309-1.04Z"
      opacity={0.5}
    />
    <path
      fill="url(#m)"
      d="M3.891 21.811c.36-.04.886-.777 1.789-.914 0 0-.737 1.074-1.789.914Z"
    />
    <path
      fill="url(#n)"
      d="M3.891 21.812c.36-.04.966-1.086 1.789-.915 0 0-.737 1.075-1.789.915Z"
      opacity={0.5}
    />
    <path
      fill="url(#o)"
      d="M4.56 16.737c-1.337 1.297.417 2.686-2.274 4.572 0 0 1.583.531 3.017-1.275.491-.622 1.063-.88 1.063-.88.194.115.045.749-.646 1.269 0 0 1.08.029 1.754-.646.675-.674 1.132-1.645 1.132-1.645.463.811-.697 1.84-.697 1.84s1.09-.286 2.388-1.583c1.006-1.006 1.726-3.515.28-4.955s-4.023-1.182-5.286.086c-.554.554-1.12 1.417-1.194 2.126 0 0 1.063-1.149 1.44-.663 0 0-1.8 1.086-2.091 2.12.005 0 .902-.537 1.114-.366Z"
      opacity={0.5}
    />
    <path
      fill="url(#p)"
      d="M4.56 16.737c-1.337 1.297.417 2.686-2.274 4.572 0 0 1.583.531 3.017-1.275.491-.622 1.063-.88 1.063-.88.194.115.045.749-.646 1.269 0 0 1.08.029 1.754-.646.675-.674 1.132-1.645 1.132-1.645.463.811-.697 1.84-.697 1.84s1.09-.286 2.388-1.583c1.006-1.006 1.726-3.515.28-4.955s-4.023-1.182-5.286.086c-.554.554-1.12 1.417-1.194 2.126 0 0 1.063-1.149 1.44-.663 0 0-1.8 1.086-2.091 2.12.005 0 .902-.537 1.114-.366Z"
      opacity={0.25}
    />
    <path
      fill="url(#q)"
      d="M4.56 16.737c-1.337 1.297.417 2.686-2.274 4.572 0 0 1.583.531 3.017-1.275.491-.622 1.063-.88 1.063-.88.194.115.045.749-.646 1.269 0 0 1.08.029 1.754-.646.675-.674 1.132-1.645 1.132-1.645.463.811-.697 1.84-.697 1.84s1.09-.286 2.388-1.583c1.006-1.006 1.726-3.515.28-4.955s-4.023-1.182-5.286.086c-.554.554-1.12 1.417-1.194 2.126 0 0 1.063-1.149 1.44-.663 0 0-1.8 1.086-2.091 2.12.005 0 .902-.537 1.114-.366Z"
      opacity={0.75}
    />
    <path
      fill="url(#r)"
      d="M15.354 15.463c-.131-1.274.166-2.628.84-3.851l.212-.389-3.298 2.154-.274 1.983-1.286 1.235c.275 1.074.286 2.125.286 2.125 2.189-1.308 3.52-3.257 3.52-3.257Z"
    />
    <path
      fill="url(#s)"
      d="M11.84 18.726s-.006-1.063-.286-2.126l.543-.52c.166.366.492 1.189.572 2.097-.263.183-.538.377-.83.549Z"
    />
    <path
      fill="url(#t)"
      d="M15.354 15.463c-.131-1.274.166-2.628.84-3.851l.212-.389-3.298 2.154-.274 1.983-1.286 1.235c.275 1.074.286 2.125.286 2.125 2.189-1.308 3.52-3.257 3.52-3.257Z"
      opacity={0.75}
    />
    <path
      fill="url(#u)"
      d="M15.674 12.794c.137-.4.309-.8.52-1.183l.12-.217-.086-.051-3.114 2.04-.189 1.337c.71-.292 1.715-.886 2.75-1.926Z"
    />
    <path
      fill="url(#v)"
      d="M12.097 7.829c-.034-.08-.051-.138-.08-.212a6.451 6.451 0 0 1-3.954.497S6.086 9.411 4.868 11.71c0 0 1.132.108 2.32.514l1.218-1.309 1.965-.114c.44-.989.972-2.046 1.726-2.971Z"
    />
    <path
      fill="url(#w)"
      d="M4.868 11.703s1.132.108 2.32.514l.52-.56c-.417-.217-1.32-.634-2.32-.811a8.99 8.99 0 0 0-.52.857Z"
    />
    <path
      fill="url(#x)"
      d="M12.097 7.829c-.034-.08-.051-.138-.08-.212a6.451 6.451 0 0 1-3.954.497S6.086 9.411 4.868 11.71c0 0 1.132.108 2.32.514l1.218-1.309 1.965-.114c.44-.989.972-2.046 1.726-2.971Z"
      opacity={0.75}
    />
    <path
      fill="url(#y)"
      d="M12.017 7.611c-.48.366-1.983 1.817-2.508 3.229l.857-.051a14.08 14.08 0 0 1 1.863-2.983l-.212-.195Z"
    />
    <path
      fill="url(#z)"
      d="M12.537 7.332a12.711 12.711 0 0 0 1.931 2.383c.035.034.075.068.11.103a12.25 12.25 0 0 0 2.016 1.571c.063-.063.126-.12.189-.183 1.8-1.8 2.845-3.154 3.743-4.874A6.91 6.91 0 0 0 17.594 3.4c-1.72.898-3.068 1.938-4.874 3.743a5.622 5.622 0 0 0-.183.189Z"
    />
    <path
      fill="url(#A)"
      d="M20.52 6.332c1.217-2.338 1.063-3.595.863-3.795-.2-.2-1.452-.354-3.795.863a6.91 6.91 0 0 1 2.932 2.932Z"
    />
    <path
      fill="url(#B)"
      d="M10.474 13.451c.646.646 1.24 1.12 1.4 1.12a16.456 16.456 0 0 0 4.72-3.182 12.49 12.49 0 0 1-2.017-1.572c-.034-.034-.074-.068-.108-.103a12.711 12.711 0 0 1-1.932-2.382 16.496 16.496 0 0 0-3.183 4.731c.023.177.486.76 1.12 1.388Z"
    />
    <path
      fill="url(#C)"
      d="M10.474 13.451c.646.646 1.24 1.12 1.4 1.12a16.456 16.456 0 0 0 4.72-3.182 12.49 12.49 0 0 1-2.017-1.572c-.034-.034-.074-.068-.108-.103a12.711 12.711 0 0 1-1.932-2.382 16.496 16.496 0 0 0-3.183 4.731c.023.177.486.76 1.12 1.388Z"
      opacity={0.75}
    />
    <path
      fill="url(#D)"
      d="M14.577 9.817c-.034-.034-.074-.068-.108-.103a12.711 12.711 0 0 1-1.932-2.382c-.04.04-.074.08-.109.12 1.04 1.965 4.218 3.84 1.795 4.828-1.589.652-2.303 1.423-2.686 2.109.16.12.286.183.343.183a16.457 16.457 0 0 0 4.72-3.183 12.05 12.05 0 0 1-2.023-1.572Z"
      opacity={0.5}
    />
    <path
      fill="url(#E)"
      d="M10.474 13.452c-.628-.629-1.091-1.212-1.12-1.389l-.891.394c-.103.103.48.863 1.314 1.692.829.828 1.589 1.417 1.691 1.314l.406-.891c-.16 0-.754-.475-1.4-1.12Z"
    />
    <path
      fill="url(#F)"
      d="M10.474 13.452c-.628-.629-1.091-1.212-1.12-1.389l-.891.394c-.103.103.48.863 1.314 1.692.829.828 1.589 1.417 1.691 1.314l.406-.891c-.16 0-.754-.475-1.4-1.12Z"
    />
    <path
      fill="url(#G)"
      d="M20.274 6.789c.012-.017.24-.44.246-.457A6.91 6.91 0 0 0 17.589 3.4c-.018.012-.035.018-.052.029 1.217.691 2.594 2.246 2.737 3.36Z"
    />
    <path
      fill="url(#H)"
      d="M21.383 2.537c-.2-.2-1.451-.354-3.794.863-1.72.897-3.069 1.937-4.875 3.743-.063.063-.12.126-.183.189a16.498 16.498 0 0 0-3.182 4.731c.028.177.491.76 1.12 1.389.645.645 1.24 1.12 1.4 1.12a16.457 16.457 0 0 0 4.72-3.183c.063-.063.125-.12.188-.183 1.8-1.8 2.846-3.154 3.743-4.874 1.223-2.338 1.069-3.595.863-3.795Z"
      opacity={0.75}
    />
    <path
      fill="url(#I)"
      d="M9.091 16.366c1.92-1.548 3.423-3.274 3.463-3.32l-.297-.297s-1.566 1.709-3.434 3.349l.268.268Z"
    />
    <path
      fill="url(#J)"
      d="M12.251 12.749c.349-.663.937-1.497 1.692-2.394a.516.516 0 0 0-.057-.052A56.45 56.45 0 0 1 11.53 12.4l-.845 1.24-1.275 1.252c-.223.56-.6 1.206-.6 1.206 1.875-1.64 3.44-3.35 3.44-3.35Z"
    />
    <path
      fill="url(#K)"
      d="M9.48 15.503s.445-.806.405-1.068l-.468.462c-.223.56-.6 1.206-.6 1.206.228-.206.446-.406.663-.6Z"
    />
    <path
      fill="url(#L)"
      d="M12.554 13.046c.252-.765.817-1.622 1.543-2.554-.051-.046-.097-.091-.149-.137-.754.897-1.342 1.731-1.691 2.394 0 0-1.566 1.709-3.434 3.349l.274.268c1.937-1.565 3.457-3.32 3.457-3.32Z"
    />
    <path
      fill="url(#M)"
      d="M9.091 16.366c1.92-1.548 3.423-3.274 3.463-3.32l-.297-.297s-1.566 1.709-3.434 3.349l.268.268Z"
    />
    <path
      fill="url(#N)"
      d="M12.251 12.749c.349-.663.937-1.497 1.692-2.394a.516.516 0 0 0-.057-.052A56.45 56.45 0 0 1 11.53 12.4l-.845 1.24-1.275 1.252c-.223.56-.6 1.206-.6 1.206 1.875-1.64 3.44-3.35 3.44-3.35Z"
      opacity={0.75}
    />
    <path
      fill="url(#O)"
      d="M21.383 2.537c-.2-.2-1.451-.354-3.794.863-1.72.897-3.069 1.937-4.875 3.743-.063.063-.12.126-.183.189a16.498 16.498 0 0 0-3.182 4.731c.028.177.491.76 1.12 1.389.645.645 1.24 1.12 1.4 1.12a16.457 16.457 0 0 0 4.72-3.183c.063-.063.125-.12.188-.183 1.8-1.8 2.846-3.154 3.743-4.874 1.223-2.338 1.069-3.595.863-3.795Z"
      opacity={0.75}
    />
    <g opacity={0.16}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M17.297 10.692a11.862 11.862 0 0 1-2.28-1.789 11.523 11.523 0 0 1-1.788-2.28M19.537 6.618c.172.211.326.417.474.623"
        opacity={0.16}
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M18.611 4.035a5.538 5.538 0 0 0-.223.165c-1.497 1.12-2.765 2.246-4.565 4.046-.063.063-.126.126-.183.189-.057.063-.12.12-.177.183M16.503 10.172c1.582-1.612 2.594-2.834 3.548-4.309.04-.057.075-.114.109-.171"
        opacity={0.16}
      />
    </g>
    <path
      fill="url(#P)"
      d="M11.469 14.166c1.314-.766 2.942-1.943 4.468-3.435Z"
      opacity={0.75}
    />
    <path
      fill="url(#Q)"
      d="M17.36 7.486c-.732.674-1.817.68-2.423.011-.606-.668-.497-1.76.234-2.434.732-.674 1.817-.68 2.423-.011.606.668.497 1.76-.234 2.434Z"
    />
    <path
      fill="url(#R)"
      d="M17.046 7.109c-.6.554-1.492.56-1.989.011-.497-.549-.412-1.446.194-2 .6-.554 1.492-.56 1.989-.011.491.548.405 1.445-.194 2Z"
    />
    <path
      fill="url(#S)"
      d="M16.903 6.96c-.537.497-1.332.497-1.772.012-.44-.492-.366-1.286.172-1.783.537-.497 1.331-.497 1.771-.012.44.486.366 1.286-.171 1.783Z"
    />
    <path
      fill="url(#T)"
      d="M16.903 6.96c-.537.497-1.332.497-1.772.012-.44-.492-.366-1.286.172-1.783.537-.497 1.331-.497 1.771-.012.44.486.366 1.286-.171 1.783Z"
      opacity={0.5}
    />
    <path
      fill="#000"
      d="M16.971 5.543c.2.223.309.503.332.795.125-.406.057-.846-.229-1.16-.44-.492-1.234-.486-1.771.011-.052.051-.103.103-.149.16.611-.371 1.366-.303 1.817.194Z"
      opacity={0.5}
    />
    <path
      fill="url(#U)"
      d="M17.074 5.178c-.44-.492-1.234-.486-1.771.011-.538.497-.612 1.291-.172 1.783.046.051.092.086.063.063-.394-.395-.274-1.206.234-1.715.412-.411 1.2-.56 1.646-.142Z"
    />
    <path
      fill="url(#V)"
      d="M17.074 5.177c-.446-.423-1.24-.268-1.646.137-.485.486-.617 1.252-.285 1.663.051.029.074.08.045.057-.017-.017-.034-.034-.045-.057-.006 0-.012-.005-.017-.005.44.491 1.234.485 1.771-.012.543-.497.623-1.291.177-1.783Z"
      opacity={0.5}
    />
    <path
      stroke="#008EE6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.75}
      d="M20.531 6.314a6.871 6.871 0 0 0-2.92-2.925M16.594 11.389a12.49 12.49 0 0 1-2.017-1.572c-.034-.034-.074-.068-.108-.103a12.711 12.711 0 0 1-1.932-2.382"
    />
    <defs>
      <linearGradient
        id="a"
        x1={10.259}
        x2={1.16}
        y1={12.687}
        y2={24.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="red" />
        <stop offset={0.232} stopColor="#FF1500" />
        <stop offset={0.737} stopColor="#FF3D00" />
        <stop offset={0.999} stopColor="#FF4C00" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={8.511}
        x2={-0.478}
        y1={11.557}
        y2={23.425}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="red" />
        <stop offset={0.232} stopColor="#FF1500" />
        <stop offset={0.737} stopColor="#FF3D00" />
        <stop offset={0.999} stopColor="#FF4C00" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={11.078}
        x2={1.857}
        y1={13.05}
        y2={25.224}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="red" />
        <stop offset={0.232} stopColor="#FF1500" />
        <stop offset={0.737} stopColor="#FF3D00" />
        <stop offset={0.999} stopColor="#FF4C00" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={8.456}
        x2={2.596}
        y1={14.57}
        y2={26.745}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8000" />
        <stop offset={0.639} stopColor="#FF5B00" />
        <stop offset={0.999} stopColor="#FF4C00" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={3.704}
        x2={8.992}
        y1={21.823}
        y2={14.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8000" />
        <stop offset={0.023} stopColor="#FE7F02" stopOpacity={0.977} />
        <stop offset={0.666} stopColor="#ED582A" stopOpacity={0.334} />
        <stop offset={1} stopColor="#E74939" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="g"
        x1={9.779}
        x2={4.997}
        y1={13.98}
        y2={18.264}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBC47" />
        <stop offset={0.187} stopColor="#FFB137" stopOpacity={0.813} />
        <stop offset={0.722} stopColor="#FF940F" stopOpacity={0.278} />
        <stop offset={1} stopColor="#FF8900" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="r"
        x1={9.804}
        x2={15.664}
        y1={19.264}
        y2={12.944}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="s"
        x1={13.211}
        x2={11.372}
        y1={16.303}
        y2={18.109}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC8D41" />
        <stop offset={0.09} stopColor="#FC7837" />
        <stop offset={0.294} stopColor="#FD4D24" />
        <stop offset={0.492} stopColor="#FE2C14" />
        <stop offset={0.68} stopColor="#FF1409" />
        <stop offset={0.854} stopColor="#FF0502" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="u"
        x1={13.348}
        x2={22.431}
        y1={14.3}
        y2={3.772}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="v"
        x1={4.166}
        x2={9.7}
        y1={11.928}
        y2={9.212}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="w"
        x1={7.325}
        x2={5.585}
        y1={10.324}
        y2={12.393}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC8D41" />
        <stop offset={0.09} stopColor="#FC7837" />
        <stop offset={0.294} stopColor="#FD4D24" />
        <stop offset={0.492} stopColor="#FE2C14" />
        <stop offset={0.68} stopColor="#FF1409" />
        <stop offset={0.854} stopColor="#FF0502" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="y"
        x1={11.819}
        x2={2.893}
        y1={9.177}
        y2={9.595}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="z"
        x1={15.048}
        x2={18.64}
        y1={5.351}
        y2={8.943}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BBCACC" />
        <stop offset={0.372} stopColor="#fff" />
        <stop offset={1} stopColor="#99AFB3" />
      </linearGradient>
      <linearGradient
        id="A"
        x1={21.137}
        x2={19.181}
        y1={5.108}
        y2={2.57}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#008EE6" />
        <stop offset={0.688} stopColor="#80DAFE" />
        <stop offset={0.733} stopColor="#76D5FB" />
        <stop offset={0.807} stopColor="#5CC8F3" />
        <stop offset={0.903} stopColor="#32B2E6" />
        <stop offset={1} stopColor="#0099D6" />
      </linearGradient>
      <linearGradient
        id="B"
        x1={14.257}
        x2={10.175}
        y1={13.128}
        y2={9.068}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#008EE6" />
        <stop offset={0.688} stopColor="#80DAFE" />
        <stop offset={0.733} stopColor="#76D5FB" />
        <stop offset={0.807} stopColor="#5CC8F3" />
        <stop offset={0.903} stopColor="#32B2E6" />
        <stop offset={1} stopColor="#0099D6" />
      </linearGradient>
      <linearGradient
        id="E"
        x1={8.971}
        x2={11.531}
        y1={12.028}
        y2={15.39}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={0.196} stopColor="#4D4D4C" />
        <stop offset={0.765} />
      </linearGradient>
      <linearGradient
        id="F"
        x1={8.971}
        x2={11.531}
        y1={12.028}
        y2={15.39}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0} />
        <stop offset={0.198} stopColor="#CFDCDE" stopOpacity={0.5} />
        <stop offset={0.765} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="G"
        x1={14.333}
        x2={20.205}
        y1={4.045}
        y2={5.386}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BBCACC" />
        <stop offset={0.372} stopColor="#fff" />
        <stop offset={1} stopColor="#99AFB3" />
      </linearGradient>
      <linearGradient
        id="I"
        x1={8.661}
        x2={15.408}
        y1={15.857}
        y2={11.506}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="J"
        x1={7.565}
        x2={11.044}
        y1={16.086}
        y2={13.437}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="K"
        x1={10.875}
        x2={8.883}
        y1={13.855}
        y2={15.716}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC8D41" />
        <stop offset={0.09} stopColor="#FC7837" />
        <stop offset={0.294} stopColor="#FD4D24" />
        <stop offset={0.492} stopColor="#FE2C14" />
        <stop offset={0.68} stopColor="#FF1409" />
        <stop offset={0.854} stopColor="#FF0502" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="L"
        x1={10.809}
        x2={13.17}
        y1={15.145}
        y2={8.39}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="M"
        x1={8.661}
        x2={15.408}
        y1={15.857}
        y2={11.506}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="Q"
        x1={15.319}
        x2={17.203}
        y1={8.311}
        y2={4.254}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.215} stopColor="#D41A10" />
        <stop offset={0.505} stopColor="#EC0C07" />
        <stop offset={0.774} stopColor="#FA0302" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="R"
        x1={16.662}
        x2={15.636}
        y1={4.403}
        y2={7.809}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC8D41" />
        <stop offset={0.09} stopColor="#FC7837" />
        <stop offset={0.294} stopColor="#FD4D24" />
        <stop offset={0.492} stopColor="#FE2C14" />
        <stop offset={0.68} stopColor="#FF1409" />
        <stop offset={0.854} stopColor="#FF0502" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <linearGradient
        id="U"
        x1={15.997}
        x2={16.12}
        y1={5.063}
        y2={2.865}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD2719" />
        <stop offset={0.042} stopColor="#B42717" />
        <stop offset={0.257} stopColor="#89250F" />
        <stop offset={0.465} stopColor="#682408" />
        <stop offset={0.663} stopColor="#502304" />
        <stop offset={0.846} stopColor="#412201" />
        <stop offset={1} stopColor="#3C2200" />
      </linearGradient>
      <radialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-135 4.38 10.453) scale(4.72606 6.00135)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" stopOpacity={0.6} />
        <stop offset={0.948} stopColor="#FFED1C" stopOpacity={0.026} />
        <stop offset={0.991} stopColor="#FFED1C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-135 7.44 5.85) scale(3.65587 3.7683)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFBC47" />
        <stop offset={0.294} stopColor="#FFBF4B" stopOpacity={0.707} />
        <stop offset={0.562} stopColor="#FEC656" stopOpacity={0.438} />
        <stop offset={0.82} stopColor="#FCD368" stopOpacity={0.18} />
        <stop offset={1} stopColor="#FBE07A" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="i"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-135 7.401 5.946) scale(3.54322 3.65218)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="j"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-135 8.358 5.834) scale(4.35259 6.43605)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" stopOpacity={0.6} />
        <stop offset={0.948} stopColor="#FFED1C" stopOpacity={0.026} />
        <stop offset={0.991} stopColor="#FFED1C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="k"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(1.283 -1.18505 .7581 .82075 8.484 15.355)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="l"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-135 5.454 9.572) scale(1.56145 1.98279)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" />
        <stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
        <stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="m"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(162.598 .899 11.05) scale(1.51008 .30555)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" stopOpacity={0.6} />
        <stop offset={0.948} stopColor="#FFED1C" stopOpacity={0.026} />
        <stop offset={0.991} stopColor="#FFED1C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="n"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-41.019 31.445 5.68) scale(1.4413 .45793)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" />
        <stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
        <stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="o"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-135 5.575 9.77) scale(4.87219 6.1869)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FF4C00" />
        <stop offset={0.135} stopColor="#FF5B0C" stopOpacity={0.866} />
        <stop offset={0.394} stopColor="#FF842C" stopOpacity={0.607} />
        <stop offset={0.749} stopColor="#FFC45F" stopOpacity={0.251} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="p"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-135 5.505 6.805) scale(2.58608 3.28391)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" />
        <stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
        <stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="q"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-3.8239 -3.8239 4.85574 -4.85574 8.428 15.63)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" />
        <stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
        <stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="t"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45 -17.811 20.047) scale(7.92842)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" />
        <stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
        <stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="x"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45 -14.4 17.52) scale(8.5278)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" />
        <stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
        <stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="C"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45 -11.73 21.101) scale(3.88398 7.10881)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0.75} />
        <stop offset={1} stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="D"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45 -8.362 26.108) scale(3.88398 7.10881)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0.75} />
        <stop offset={1} stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="H"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(44.234 -5.988 25.479) scale(2.50596 8.11509)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#440063" stopOpacity={0.75} />
        <stop offset={1} stopColor="#420061" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="N"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-39.05 25.825 -4.497) scale(5.97524 2.00375)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.001} stopColor="#FFED1C" />
        <stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
        <stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
        <stop offset={1} stopColor="#FFF686" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="O"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(44.234 -1.828 21.303) scale(2.50596 8.11509)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.5} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="P"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(43.864 -9.31 23.645) scale(.60845 2.92153)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#440063" stopOpacity={0.75} />
        <stop offset={1} stopColor="#420061" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="S"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(2.34326 2.34293 -2.34277 2.3431 15.62 6.127)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#512D00" />
        <stop offset={1} />
      </radialGradient>
      <radialGradient
        id="T"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(16.266 5.471) scale(2.90715)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.487} stopColor="#F5CBC0" stopOpacity={0} />
        <stop offset={1} stopColor="#E67E62" />
      </radialGradient>
      <radialGradient
        id="V"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(12.165 4.76) scale(3.94219)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.5} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg> */
);
export default SvgComponent;
