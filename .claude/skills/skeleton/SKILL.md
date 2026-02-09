# Component Skeleton Skill

새로운 React 컴포넌트를 프로젝트 컨벤션에 맞춰 빠르게 생성합니다.

## 사용법

```
/skeleton <컴포넌트명> [타입]
```

- `컴포넌트명`: PascalCase로 작성 (예: UserCard, LoginForm)
- `타입`: ui | layout | features (기본값: ui)

## 예시

```
/skeleton Button ui
/skeleton Header layout
/skeleton UserProfile features
```

## 동작

1. 사용자로부터 컴포넌트명과 타입을 입력받음
2. 적절한 디렉토리에 TypeScript 컴포넌트 파일 생성
3. 프로젝트 컨벤션에 맞는 보일러플레이트 코드 작성

## 컴포넌트 템플릿

생성되는 컴포넌트는 다음 규칙을 따릅니다:

- **TypeScript** 사용
- **Named export** (default export 사용 안 함)
- **Tailwind CSS** 스타일링
- 적절한 **타입 정의** 포함
- **한국어 주석** 사용

### 디렉토리 구조

- `ui` → `src/components/ui/`
- `layout` → `src/components/layout/`
- `features` → `src/components/features/`

## 템플릿 구조

```typescript
interface [ComponentName]Props {
  // props 타입 정의
}

export function [ComponentName]({ }: [ComponentName]Props) {
  return (
    <div className="">
      {/* 컴포넌트 내용 */}
    </div>
  )
}
```

## 실행 단계

1. 컴포넌트명과 타입 확인
2. 타입에 따라 대상 디렉토리 결정
3. 파일 경로: `src/components/{type}/{ComponentName}.tsx`
4. 템플릿 코드로 파일 생성
5. 생성 완료 메시지 출력

## 주의사항

- 컴포넌트명은 반드시 PascalCase
- 이미 존재하는 파일은 덮어쓰지 않음 (확인 필요)
- 생성 후 추가 코드는 사용자가 직접 작성
