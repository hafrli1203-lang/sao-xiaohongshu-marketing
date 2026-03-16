# 샤오홍슈 체험단 마케팅 홍보 사이트

## Project Overview
- **Company**: 잘파는 연구소
- **Type**: B2B 랜딩페이지 - 샤오홍슈 마케팅 서비스 홍보
- **Tech**: Next.js 15 (App Router, TypeScript)
- **Font**: Paperlogy (9 weights, local TTF, CSS variable: `--font-paperlogy`)
- **Routes**: `/` (랜딩), `/inquiry` (고객문의), `/api/inquiry` (POST)

## Development Rules

### bot_created_rule.md 준수 (필수)
이 프로젝트는 `bot_created_rule.md`의 5단계 플로우를 반드시 순서대로 따른다:
1. **설계 문서** → `docs/design-document.md` (완료)
2. **스펙 테스트** → 정상 케이스 검증
3. **아웃풋 체크** → 결과물 품질 확인
4. **인풋 체크** → 예외 상황 검증
5. **모듈화 명령** → 기능 단위 독립 모듈 분리

### 핵심 규칙
- **구조만 수정** — CSS 스타일링은 안티그래비티 AI가 담당. 인라인 스타일이나 Tailwind 클래스 추가 금지.
- **제안서 콘텐츠만** — 모든 사이트 텍스트는 제안서 이미지 원본에서 추출. 임의 카피 작성 금지.
- **전화번호 비표시** — 상품안내에 있는 전화번호는 절대 코드에 포함하지 않는다.
- **연락처**: hafrli1203@gmail.com, 카카오톡 ifcompany772
- **Tailwind은 suggested default** — 안티그래비티가 다른 CSS 전략을 선택할 경우 제거 가능.

### 버전 관리
- 소수점 관리: v1.0 → v1.1 → v2.0
- 버그 발견 시 번호 부여 후 버전 올려서 수정 기록

## File Conventions
- Components: PascalCase → `src/components/`
- Data files: kebab-case → `src/data/`
- Types: `src/types/`
- API routes: `src/app/api/`
- Lib utilities: `src/lib/`
- Static assets: `public/images/`, `public/fonts/`

## Agent Skills (VoltAgent / awesome-agent-skills)

이 프로젝트에서 활용 가능한 agent skills 목록. 각 skill은 해당 작업 수행 시 자동 참조.

### Core Skills (필수)
- **@vercel-labs/next-best-practices** — Next.js App Router 패턴, 서버/클라이언트 컴포넌트 분리, 라우팅 최적화
- **@vercel-labs/react-best-practices** — React 컴포넌트 패턴, 상태 관리, 성능 최적화 (40+ 규칙)
- **@coreyhaines31/form-cro** — 문의폼 전환율 최적화, 필드 배치, 에러 처리 UX
- **@coreyhaines31/page-cro** — 랜딩페이지 전환율 최적화, CTA 배치, 섹션 구성
- **@coreyhaines31/copywriting** — 마케팅 카피라이팅, B2B 설득 문구, CTA 텍스트
- **@vercel-labs/web-design-guidelines** — 웹 디자인 가이드라인, 접근성, 반응형
- **@google-labs-code/shadcn-ui** — UI 컴포넌트 구축, 디자인 시스템

### Auxiliary Skills (보조)
- **@vercel-labs/vercel-deploy-claimable** — Vercel 배포 워크플로우
- **@coreyhaines31/ai-seo** — SEO 최적화, 메타태그, 구조화 데이터
- **@coreyhaines31/content-strategy** — 콘텐츠 전략, 토픽/포맷 우선순위

### Installed OMC Skills (로컬)
- `/autopilot` — 아이디어 → 워킹 코드 자동 실행
- `/ralph` — 완료까지 반복 루프
- `/team` — N개 병렬 에이전트 협업
- `/build-fix` — 빌드/타입 에러 수정
- `/code-review` — 코드 리뷰
- `/security-review` — 보안 리뷰
- `/tdd` — 테스트 주도 개발
- `/analyze` — 디버깅/분석
- `/designer` — UI/UX 디자인
- `/deepinit` — 코드베이스 초기화

## Skill Auto-Trigger Rules

| 트리거 패턴 | 실행 Skill |
|------------|-----------|
| Next.js 컴포넌트 작성 시 | @next-best-practices, @react-best-practices |
| 문의폼 수정 시 | @form-cro |
| 랜딩페이지 섹션 수정 시 | @page-cro |
| 마케팅 텍스트 수정 시 | @copywriting |
| UI 컴포넌트 추가 시 | @shadcn-ui |
| 배포 작업 시 | @vercel-deploy-claimable |
| SEO 메타태그 수정 시 | @ai-seo |
| 빌드 에러 발생 시 | /build-fix |
| 보안 관련 수정 시 | /security-review |
