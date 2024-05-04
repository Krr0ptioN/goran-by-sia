import Button from '@/components/button'

export default function Action({
  label,
  className,
  icon: Icon,
  disabled,
  value,
  onClick,
}) {
  return (
    <Button
      className={className}
      disabled={disabled}
      onClick={() => onClick && onClick(value)}
    >
      {Icon && <Icon className="icon" />}
      {label}
    </Button>
  )
}
