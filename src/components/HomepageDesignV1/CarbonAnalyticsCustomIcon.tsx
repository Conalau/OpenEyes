import { memo, SVGProps } from 'react';

const CarbonAnalyticsCustomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M29.707 19.293L26.707 16.293C26.5195 16.1055 26.2652 16.0002 26 16.0002C25.7348 16.0002 25.4805 16.1055 25.293 16.293L16 25.586V30H20.414L29.707 20.707C29.8945 20.5195 29.9998 20.2652 29.9998 20C29.9998 19.7348 29.8945 19.4805 29.707 19.293ZM19.586 28H18V26.414L23 21.414L24.586 23L19.586 28ZM26 21.586L24.414 20L26 18.414L27.586 20L26 21.586ZM30 4H23V6H26.586L19 13.586L14.707 9.293C14.5195 9.10553 14.2652 9.00021 14 9.00021C13.7348 9.00021 13.4805 9.10553 13.293 9.293L6 16.586L7.414 18L14 11.414L18.293 15.707C18.4805 15.8945 18.7348 15.9998 19 15.9998C19.2652 15.9998 19.5195 15.8945 19.707 15.707L28 7.414V11H30V4Z'
      fill='url(#paint0_linear_63_409)'
    />
    <path
      d='M4 2H2V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H12V28H4V2Z'
      fill='url(#paint1_linear_63_409)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_63_409'
        x1={6}
        y1={7.25}
        x2={28.3795}
        y2={9.39011}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D95E26' />
        <stop offset={1} stopColor='#FF9416' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_63_409'
        x1={2}
        y1={5.5}
        x2={11.3972}
        y2={5.84769}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D95E26' />
        <stop offset={1} stopColor='#FF9416' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(CarbonAnalyticsCustomIcon);
export { Memo as CarbonAnalyticsCustomIcon };
