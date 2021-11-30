import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: IButtonProps) {
  return (
    <Container {...props}/>
  );
}