import { memo, SVGProps } from 'react';

const Ellipse1Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={5} cy={5} r={5} fill='#2CA319' />
  </svg>
);
const Memo = memo(Ellipse1Icon3);
export { Memo as Ellipse1Icon3 };
