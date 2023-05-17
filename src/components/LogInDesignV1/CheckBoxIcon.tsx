import { memo, SVGProps } from 'react';

const CheckBoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={30} height={27} rx={4} fill='white' />
    <path
      d='M22 9L13.0625 18L9 13.9091'
      stroke='#4B5D70'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CheckBoxIcon);
export { Memo as CheckBoxIcon };
