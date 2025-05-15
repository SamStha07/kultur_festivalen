import { IconProps } from '@/utils/types';

export const HamburgerIcon = (props: IconProps) => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="62" height="62" rx="31" fill="black" />
      <path
        d="M19 39V36.3333H43V39H19ZM19 32.3333V29.6667H43V32.3333H19ZM19 25.6667V23H43V25.6667H19Z"
        fill="white"
      />
    </svg>
  );
};
