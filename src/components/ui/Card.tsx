interface CardProps {
  children: React.ReactNode
  className?: string
}

/**
 * Card 컴포넌트
 * 콘텐츠를 감싸는 기본 카드 UI
 */
export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

/**
 * CardHeader 컴포넌트
 * 카드 상단 헤더 영역
 */
export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

/**
 * CardTitle 컴포넌트
 * 카드 제목
 */
export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-semibold ${className}`}>
      {children}
    </h3>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

/**
 * CardContent 컴포넌트
 * 카드 본문 영역
 */
export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

/**
 * CardFooter 컴포넌트
 * 카드 하단 푸터 영역
 */
export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`mt-4 flex items-center gap-2 ${className}`}>
      {children}
    </div>
  )
}
