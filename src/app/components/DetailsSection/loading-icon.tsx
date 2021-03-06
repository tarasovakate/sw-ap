import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface LoadingIconProps {
  width?: number;
  height?: number;
}

function LoadingIcon(props: LoadingIconProps) {
  const { width, height } = props;
  return (
    <Svg
      data-testid="svg-loading"
      xmlns="http://www.w3.org/2000/svg"
      width={width || 20}
      height={height || 20}
      x="0"
      y="0"
      enableBackground="new 0 0 458.186 458.186"
      version="1.1"
      viewBox="0 0 458.186 458.186"
      xmlSpace="preserve"
    >
      <path d='M445.651 201.95c-1.485-9.308-10.235-15.649-19.543-14.164-9.308 1.485-15.649 10.235-14.164 19.543.016.102.033.203.051.304 17.38 102.311-51.47 199.339-153.781 216.719-102.311 17.38-199.339-51.47-216.719-153.781S92.966 71.232 195.276 53.852c62.919-10.688 126.962 11.29 170.059 58.361l-75.605 25.19c-8.944 2.976-13.781 12.638-10.806 21.582l.003.007c2.976 8.944 12.638 13.781 21.582 10.806l.007-.002 102.4-34.133a17.068 17.068 0 0011.674-16.196v-102.4C414.59 7.641 406.949 0 397.523 0s-17.067 7.641-17.067 17.067v62.344C292.564-4.185 153.545-.702 69.949 87.19s-80.114 226.911 7.779 310.508 226.911 80.114 310.508-7.779a219.633 219.633 0 0057.415-187.969z'/>
    </Svg>
  );
}

export default LoadingIcon;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Svg = styled.svg`
  animation: ${rotate} ${2}s linear infinite;
  transform-origin: center;
`;
