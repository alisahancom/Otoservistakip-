# OtoServisTakip

2026 standartlarında web, Android ve iOS için modern oto servis yönetim platformu.

## Vizyon
Plaka okut → araç/müşteri geçmişini getir → iş emri aç → kontrol/teklif/onay → teknisyen/servis → kalite kontrol → tahsilat/teslim → bakım hatırlatması.

## Teknoloji
- Monorepo: pnpm + Turborepo
- Web: Next.js + React + TypeScript + Tailwind CSS + shadcn/ui
- Mobil: React Native + Expo
- API: NestJS + Prisma + PostgreSQL
- Redis + BullMQ, WebSocket, S3 uyumlu dosya depolama
- Zod, OpenAPI, Docker, GitHub Actions

## Başlangıç
1. [AGENTS.md](AGENTS.md) — Codex için bağlayıcı geliştirme kuralları
2. [docs/MASTER_PROMPT.md](docs/MASTER_PROMPT.md) — kapsamlı geliştirme talimatı
3. [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md) — fazlar ve kabul kriterleri
4. [docs/DATA_MODEL.md](docs/DATA_MODEL.md) — veri modeli
5. [docs/UI_UX.md](docs/UI_UX.md) — web/mobil ekran tasarımı

> Durum: Planlama aşaması. Henüz çalışan uygulama, OCR veya gerçek entegrasyon yoktur. Demo verileri gerçek müşteri bilgisi olarak kullanılmamalıdır.

## İlk hedef
Plaka sorgusundan araç teslimine kadar uçtan uca çalışan, testli MVP. Harici entegrasyonlar adapter arayüzü ve mock ile başlar; gerçek entegrasyon ayrıca doğrulanır.
