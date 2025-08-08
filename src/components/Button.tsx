import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'primary' | 'accent' }
export default function Button({ className, variant = 'default', ...rest }: Props) {
  return <button className={clsx('btn', variant, className)} {...rest} />
}
