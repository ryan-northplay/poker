import classNames from 'classnames'
import React, { ReactElement, useId, useState, useMemo } from 'react'

type Props = {
  onClick?(): void
  className?: string
  icon?: ReactElement
  hoverIcon?: ReactElement
  label?: string
}
export default function IconButton({ icon, hoverIcon, onClick, className, label }:Props) {
  const id = useId()
  const [isHovered, setHover] = useState(false)

  const currentIcon = useMemo(() => {
    if (!hoverIcon) {
      return icon
    }

    return isHovered ? hoverIcon : icon
  }, [isHovered])
  return (
    <div
      className={classNames(className, 'flex', 'flex-col', 'items-center')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        id={id}
        onClick={onClick}
        className={classNames('rounded-full', 'bg-secondary-idle', 'p-2.5', 'hover:shadow-primary-emphasis', 'hover:shadow-button-primary-emphasis', 'transition-shadow', 'cursor-pointer')}
        tabIndex={0}
      >
        {currentIcon}
      </button>
      {label && (
        <label
          className={classNames('text-sm', 'font-semibold', 'text-secondary-idle', 'mt-1', 'cursor-pointer')}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  )
}
