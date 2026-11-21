# OtoServisTakip 2026

Web, Android ve iOS için modern oto servis yönetim platformu. **Durum: geliştirme başlangıç sürümü; üretime hazır değildir.**

## Monorepo
- `apps/web` — Next.js + React + TypeScript başlangıç dashboard'u, plaka sorgu ekranı
- `apps/mobile` — React Native + Expo başlangıç ekranı
- `apps/api` — NestJS + Prisma API, `GET /health` ve JWT korumalı `GET /vehicles/by-plate?plate=...`
- `apps/api/prisma/schema.prisma` — organization, branch, user, customer, vehicle, plate history, work order ve ilişkiler
- `docs/` — mimari, master prompt, yol haritası ve UI/UX

## Yerel kurulum
Node.js 22, pnpm 9 ve Docker gereklidir.

```bash
git clone https://github.com/alisahancom/Otoservistakip-.git
cd Otoservistakip-
cp .env.example .env
docker compose up -d
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm dev
```

**Önemli:** `.env` değişkenlerini uygulama süreçlerinin okuyacağı şekilde yapılandırın (örneğin `apps/api/.env` ve `apps/web/.env.local`). `JWT_SECRET` değerini güvenli rastgele anahtarla değiştirin. İlk kurulumda kullanıcı oluşturma/giriş akışı henüz yoktur; plaka sorgulama ekranı geçerli JWT olmadan veri göstermez. Mobil cihazda `localhost` yerine bilgisayarın LAN adresi kullanılmalıdır.

## Sınırlar
- OCR kamera okuma, müşteri kayıt ekranları, teklif/onay, stok, ödeme ve tam iş emri iş akışı **henüz uygulanmadı**.
- Oturum açma ve kullanıcı yönetimi **henüz uygulanmadı**; JWT doğrulama iskeleti vardır. Gerçek kullanıma açılmamalıdır.
- Migration dosyaları ilk `pnpm db:migrate` çalıştırıldığında üretilecektir.
- CI build/typecheck çalıştıracak şekilde tanımlandı; bu commitlerin test/build sonuçları burada doğrulanmamıştır.
- Gerçek müşteri verilerini örnek/seed olarak commit etmeyin.

## Codex belgeleri
[AGENTS.md](AGENTS.md) · [Ana prompt](docs/MASTER_PROMPT.md) · [Yol haritası](docs/PROJECT_PLAN.md) · [Veri modeli](docs/DATA_MODEL.md) · [UI/UX](docs/UI_UX.md)
