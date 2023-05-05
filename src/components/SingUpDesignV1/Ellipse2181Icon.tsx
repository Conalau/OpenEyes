import { memo, SVGProps } from 'react';

const Ellipse2181Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.5} cx={6} cy={6} r={6} fill='#4B5D70' />
  </svg>
);
const Memo = memo(Ellipse2181Icon);
export { Memo as Ellipse2181Icon };
