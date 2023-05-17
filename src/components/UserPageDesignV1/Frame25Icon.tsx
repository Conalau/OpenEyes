import { memo, SVGProps } from 'react';

const Frame25Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 248 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30.72 0H1.28C0.572 0 0 0.572 0 1.28V30.72C0 31.428 0.572 32 1.28 32H30.72C31.428 32 32 31.428 32 30.72V1.28C32 0.572 31.428 0 30.72 0ZM29.44 29.44H22.076V19.608H26.236L26.86 14.78H22.076V11.696C22.076 10.296 22.464 9.344 24.468 9.344H27.024V5.024C26.58 4.964 25.064 4.832 23.296 4.832C19.608 4.832 17.084 7.084 17.084 11.216V14.776H12.916V19.604H17.088V29.44H2.56V2.56H29.44V29.44Z'
      fill='white'
    />
    <path
      d='M96.544 5.536C96.1643 5.536 95.793 5.64861 95.4773 5.85958C95.1616 6.07055 94.9155 6.37041 94.7702 6.72125C94.6248 7.07208 94.5868 7.45813 94.6609 7.83057C94.735 8.20302 94.9178 8.54513 95.1864 8.81365C95.4549 9.08216 95.797 9.26502 96.1694 9.33911C96.5419 9.41319 96.9279 9.37517 97.2788 9.22985C97.6296 9.08453 97.9294 8.83844 98.1404 8.5227C98.3514 8.20695 98.464 7.83574 98.464 7.456C98.464 6.94678 98.2617 6.45843 97.9016 6.09836C97.5416 5.73829 97.0532 5.536 96.544 5.536ZM103.904 9.408C103.873 8.08048 103.624 6.76704 103.168 5.52C102.761 4.45301 102.128 3.48685 101.312 2.688C100.52 1.86788 99.5513 1.23868 98.48 0.848C97.2363 0.377857 95.9214 0.123536 94.592 0.0959999C92.896 -8.9407e-08 92.352 0 88 0C83.648 0 83.104 -8.9407e-08 81.408 0.0959999C80.0786 0.123536 78.7637 0.377857 77.52 0.848C76.4507 1.24264 75.4831 1.8713 74.688 2.688C73.8679 3.48028 73.2387 4.4487 72.848 5.52C72.3779 6.76375 72.1235 8.07864 72.096 9.408C72 11.104 72 11.648 72 16C72 20.352 72 20.896 72.096 22.592C72.1235 23.9214 72.3779 25.2363 72.848 26.48C73.2387 27.5513 73.8679 28.5197 74.688 29.312C75.4831 30.1287 76.4507 30.7574 77.52 31.152C78.7637 31.6221 80.0786 31.8765 81.408 31.904C83.104 32 83.648 32 88 32C92.352 32 92.896 32 94.592 31.904C95.9214 31.8765 97.2363 31.6221 98.48 31.152C99.5513 30.7613 100.52 30.1321 101.312 29.312C102.132 28.5161 102.765 27.5491 103.168 26.48C103.624 25.233 103.873 23.9195 103.904 22.592C103.904 20.896 104 20.352 104 16C104 11.648 104 11.104 103.904 9.408ZM101.024 22.4C101.012 23.4156 100.828 24.4219 100.48 25.376C100.225 26.0723 99.8142 26.7015 99.28 27.216C98.761 27.7448 98.1332 28.1543 97.44 28.416C96.4859 28.7644 95.4796 28.9484 94.464 28.96C92.864 29.04 92.272 29.056 88.064 29.056C83.856 29.056 83.264 29.056 81.664 28.96C80.6094 28.9797 79.5594 28.8174 78.56 28.48C77.8973 28.2049 77.2982 27.7965 76.8 27.28C76.2689 26.766 75.8637 26.1363 75.616 25.44C75.2254 24.4722 75.0087 23.4431 74.976 22.4C74.976 20.8 74.88 20.208 74.88 16C74.88 11.792 74.88 11.2 74.976 9.6C74.9832 8.56169 75.1727 7.53271 75.536 6.56C75.8177 5.88466 76.25 5.28265 76.8 4.8C77.2861 4.24987 77.8869 3.81295 78.56 3.52C79.5353 3.16807 80.5632 2.98413 81.6 2.976C83.2 2.976 83.792 2.88 88 2.88C92.208 2.88 92.8 2.88 94.4 2.976C95.4156 2.98765 96.4219 3.17159 97.376 3.52C98.1031 3.78984 98.7557 4.22855 99.28 4.8C99.8043 5.29149 100.214 5.89237 100.48 6.56C100.836 7.53429 101.02 8.56285 101.024 9.6C101.104 11.2 101.12 11.792 101.12 16C101.12 20.208 101.104 20.8 101.024 22.4ZM88 7.792C86.3773 7.79516 84.7919 8.27924 83.4442 9.18307C82.0966 10.0869 81.047 11.3699 80.4282 12.87C79.8094 14.3701 79.6492 16.0199 79.9677 17.6111C80.2862 19.2022 81.0692 20.6633 82.2177 21.8096C83.3663 22.9559 84.8288 23.736 86.4206 24.0514C88.0123 24.3669 89.6619 24.2034 91.1608 23.5817C92.6596 22.9599 93.9406 21.9079 94.8418 20.5585C95.743 19.209 96.224 17.6227 96.224 16C96.2261 14.9202 96.0147 13.8506 95.602 12.8527C95.1892 11.8549 94.5833 10.9485 93.819 10.1857C93.0547 9.42287 92.1471 8.81868 91.1485 8.40789C90.1498 7.99709 89.0798 7.78778 88 7.792ZM88 21.328C86.9462 21.328 85.9161 21.0155 85.0399 20.4301C84.1637 19.8446 83.4808 19.0125 83.0776 18.0389C82.6743 17.0654 82.5688 15.9941 82.7744 14.9606C82.98 13.927 83.4874 12.9777 84.2325 12.2325C84.9777 11.4874 85.927 10.98 86.9606 10.7744C87.9941 10.5688 89.0654 10.6743 90.0389 11.0776C91.0125 11.4808 91.8446 12.1637 92.4301 13.0399C93.0155 13.9161 93.328 14.9462 93.328 16C93.328 16.6997 93.1902 17.3925 92.9224 18.0389C92.6547 18.6854 92.2622 19.2727 91.7675 19.7675C91.2727 20.2622 90.6854 20.6547 90.0389 20.9224C89.3925 21.1902 88.6997 21.328 88 21.328Z'
      fill='white'
    />
    <path
      d='M173.037 0H146.963C146.177 0 145.423 0.312168 144.868 0.867832C144.312 1.4235 144 2.17714 144 2.96296V29.037C144 29.8229 144.312 30.5765 144.868 31.1322C145.423 31.6878 146.177 32 146.963 32H173.037C173.823 32 174.577 31.6878 175.132 31.1322C175.688 30.5765 176 29.8229 176 29.037V2.96296C176 2.17714 175.688 1.4235 175.132 0.867832C174.577 0.312168 173.823 0 173.037 0ZM172.444 28.4444H147.556V3.55556H172.444V28.4444ZM157.63 23.1111V15.4074C157.63 15.038 157.745 14.6778 157.96 14.377C158.174 14.0762 158.477 13.8496 158.826 13.7289C159.176 13.6082 159.554 13.5992 159.908 13.7033C160.263 13.8074 160.576 14.0193 160.804 14.3096C161.707 13.8363 162.717 13.604 163.736 13.6351C164.755 13.6662 165.749 13.9596 166.621 14.4871C167.494 15.0145 168.216 15.7581 168.717 16.646C169.218 17.5339 169.481 18.5361 169.481 19.5556V23.1111C169.481 23.5826 169.294 24.0348 168.961 24.3682C168.627 24.7016 168.175 24.8889 167.704 24.8889C167.232 24.8889 166.78 24.7016 166.447 24.3682C166.113 24.0348 165.926 23.5826 165.926 23.1111V19.5556C165.926 18.9269 165.676 18.324 165.232 17.8795C164.787 17.4349 164.184 17.1852 163.556 17.1852C162.927 17.1852 162.324 17.4349 161.879 17.8795C161.435 18.324 161.185 18.9269 161.185 19.5556V23.1111C161.185 23.5826 160.998 24.0348 160.664 24.3682C160.331 24.7016 159.879 24.8889 159.407 24.8889C158.936 24.8889 158.484 24.7016 158.15 24.3682C157.817 24.0348 157.63 23.5826 157.63 23.1111ZM155.259 15.4074V23.1111C155.259 23.5826 155.072 24.0348 154.739 24.3682C154.405 24.7016 153.953 24.8889 153.481 24.8889C153.01 24.8889 152.558 24.7016 152.224 24.3682C151.891 24.0348 151.704 23.5826 151.704 23.1111V15.4074C151.704 14.9359 151.891 14.4837 152.224 14.1503C152.558 13.8169 153.01 13.6296 153.481 13.6296C153.953 13.6296 154.405 13.8169 154.739 14.1503C155.072 14.4837 155.259 14.9359 155.259 15.4074ZM151.111 8.88889C151.111 8.42007 151.25 7.96179 151.511 7.57198C151.771 7.18218 152.141 6.87836 152.574 6.69895C153.008 6.51954 153.484 6.4726 153.944 6.56406C154.404 6.65553 154.826 6.88128 155.158 7.21278C155.489 7.54429 155.715 7.96665 155.806 8.42645C155.898 8.88626 155.851 9.36286 155.671 9.79599C155.492 10.2291 155.188 10.5993 154.798 10.8598C154.409 11.1202 153.95 11.2593 153.481 11.2593C152.853 11.2593 152.25 11.0095 151.805 10.565C151.361 10.1205 151.111 9.51755 151.111 8.88889Z'
      fill='white'
    />
    <path
      d='M240 11.1152C239.411 11.3712 238.779 11.5472 238.115 11.624C238.794 11.224 239.312 10.5904 239.558 9.83681C238.912 10.2136 238.207 10.4786 237.472 10.6208C237.163 10.2969 236.791 10.0394 236.379 9.86388C235.968 9.68838 235.524 9.5986 235.077 9.60001C233.264 9.60001 231.795 11.048 231.795 12.832C231.795 13.0848 231.824 13.3312 231.88 13.568C230.58 13.5063 229.307 13.1742 228.142 12.5929C226.977 12.0116 225.946 11.1939 225.115 10.192C224.823 10.6834 224.67 11.2445 224.67 11.816C224.67 12.936 225.251 13.928 226.131 14.5056C225.61 14.4893 225.101 14.3506 224.643 14.1008V14.1408C224.648 14.892 224.913 15.6182 225.393 16.1958C225.874 16.7734 226.539 17.1667 227.277 17.3088C226.793 17.4369 226.286 17.4554 225.794 17.3632C226.008 18.0094 226.419 18.5727 226.968 18.975C227.517 19.3773 228.178 19.5985 228.859 19.608C227.691 20.5081 226.257 20.9944 224.782 20.9904C224.518 20.9904 224.258 20.9744 224 20.9456C225.505 21.8981 227.25 22.4025 229.03 22.4C235.069 22.4 238.37 17.4752 238.37 13.2032L238.358 12.784C239.002 12.3317 239.558 11.7662 240 11.1152Z'
      fill='white'
    />
    <path
      d='M222.4 3.2C221.551 3.2 220.737 3.53714 220.137 4.13726C219.537 4.73737 219.2 5.55131 219.2 6.4V25.6C219.2 26.4487 219.537 27.2626 220.137 27.8627C220.737 28.4629 221.551 28.8 222.4 28.8H241.6C242.449 28.8 243.263 28.4629 243.863 27.8627C244.463 27.2626 244.8 26.4487 244.8 25.6V6.4C244.8 5.55131 244.463 4.73737 243.863 4.13726C243.263 3.53714 242.449 3.2 241.6 3.2H222.4ZM222.4 0H241.6C243.297 0 244.925 0.674284 246.125 1.87452C247.326 3.07475 248 4.70261 248 6.4V25.6C248 27.2974 247.326 28.9252 246.125 30.1255C244.925 31.3257 243.297 32 241.6 32H222.4C220.703 32 219.075 31.3257 217.875 30.1255C216.674 28.9252 216 27.2974 216 25.6V6.4C216 4.70261 216.674 3.07475 217.875 1.87452C219.075 0.674284 220.703 0 222.4 0Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Frame25Icon);
export { Memo as Frame25Icon };
