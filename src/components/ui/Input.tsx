import { InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

/**
 * Input 컴포넌트
 * 레이블, 에러 메시지, 헬퍼 텍스트를 지원하는 기본 입력 필드
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const widthStyle = fullWidth ? "w-full" : ""
    const errorStyle = error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"

    return (
      <div className={`${widthStyle}`}>
        {label && (
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <input
          ref={ref}
          className={`
            rounded-lg border px-3 py-2 text-base
            transition-colors
            focus:outline-none focus:ring-2 focus:ring-offset-1
            disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500
            ${errorStyle}
            ${widthStyle}
            ${className}
          `}
          disabled={disabled}
          {...props}
        />

        {error && (
          <p className="mt-1.5 text-sm text-red-600">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
