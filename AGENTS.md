# Codex Proje Kuralları — OtoServisTakip

Bu dosyayı her görevden önce oku. docs/MASTER_PROMPT.md, docs/PROJECT_PLAN.md, docs/DATA_MODEL.md ve docs/UI_UX.md belgelerini referans al.

## İş yapış şekli
1. Önce repository'yi ve mevcut kodu incele; çalışan kodu bozma.
2. Değişiklikten önce kısa uygulama planı çıkar, bağımlılıkları ve riskleri belirle.
3. İşlevsel dikey dilimler geliştir: veri modeli + API + yetki + UI + test.
4. Sahte API veya hardcoded veriyle 'tamamlandı' deme; demo/mock kullanımını açıkça etiketle.
5. Her değişiklikte migration, validasyon, audit, hata yönetimi ve testleri düşün.
6. Her faz sonunda build/lint/test çıktısını ve açık kalan işleri raporla.
7. Gizli anahtarları commit etme; .env.example oluştur. Gerçek müşteri verilerini seed'e koyma.
8. Kullanıcı açıkça istemedikçe üretim verisini silme, force push yapma, migration geçmişini yeniden yazma.

## Mimari
- pnpm/Turborepo: apps/web, apps/mobile, apps/api; packages/types, validation, config.
- Web: Next.js/TypeScript/Tailwind/shadcn; mobil: React Native/Expo; API: NestJS.
- PostgreSQL/Prisma; Redis/BullMQ; dosya için S3 adapter; olaylar için WebSocket.
- Tek iş mantığı API'de; DTO/Zod şemaları tutarlı; OpenAPI sürümlü.
- İlk sürüm tek işletme + şube desteği; tenant izolasyonuna hazır organization_id/branch_id tasarımı. Her sorguda veri kapsamı kontrolü.
- Türkçe UI; tarih veritabanında UTC, gösterimde Europe/Istanbul; para DECIMAL, float kullanma.
- Dış OCR/SMS/WhatsApp/e-belge servisleri adapter arkasında; yetkisiz resmi veri sorgusu yok.

## Güvenlik ve kalite
- RBAC + nesne bazlı yetkilendirme; oturum koruması; MFA hazırlığı; rate limiting.
- KVKK, ticari ileti izinleri, saklama politikaları, erişim ve audit log.
- İş emri, stok, ödeme gibi işlemlerde transaction/idempotency; para ve stok hareketleri izlenebilir.
- Test: unit, integration, E2E, authorization, responsive, erişilebilirlik, OCR düzeltme.
- Mobil çevrimdışı işlemlerde senkronizasyon/çakışma stratejisi.
- Müşteri onayı olmadan ücretli işlem otomatik başlamaz.
- AI çıktıları öneridir, kesin teşhis veya otomatik onay değildir.

## Öncelik
İlk çalışan akış: giriş → plaka → araç/müşteri → servis geçmişi → iş emri → teklif/onay → teknisyen → kalite kontrol → ödeme → teslim. Önce bu akışın gerçek veriyle çalışmasını sağla; sonra genişlet.

## Tasarım
Premium SaaS, erişilebilir, responsive, dark/light; web sidebar + veri tabloları, mobil büyük dokunma alanları; tablet atölye modu. Boş/yükleniyor/hata/izin yok durumlarını tasarla.
