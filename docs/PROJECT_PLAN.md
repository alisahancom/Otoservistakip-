# Proje Yol Haritası

## Faz 0 — Temel
Monorepo, Docker, PostgreSQL, Prisma, auth/RBAC, organization/branch, CI, test, tasarım sistemi.
**Kabul:** local ortam tek komutla başlar; migration/seed ve login testleri geçer.

## Faz 1 — Araç ve müşteri
Müşteri CRUD, araç CRUD, plaka geçmişi, kilometre kayıtları, plaka arama, OCR adapter, araç zaman çizelgesi.
**Kabul:** kayıtlı ve yeni plaka akışları, yanlış OCR düzeltmesi, yetki kontrolü testli.

## Faz 2 — Servis MVP
Kabul kontrolü, servis kataloğu, iş emri, şikâyet, iş kalemleri, teknisyen, durum geçmişi.
**Kabul:** gerçek DB ile uçtan uca iş emri açma ve güncelleme.

## Faz 3 — Onay ve teslim
Teklif/sürüm, kalem onayı, kalite kontrol, PDF servis fişi, tahsilat, teslim.
**Kabul:** onaysız ücretli işlem başlamaz; ödeme ve stok idempotent.

## Faz 4 — Operasyon
Randevu/takvim, kapasite, Kanban, işçilik süresi, depo/parça/tedarikçi, stok rezervasyonları.
**Kabul:** çakışma ve stok tutarlılığı testleri.

## Faz 5 — Mobil ve portal
Android/iOS kamera, teknisyen görevleri, fotoğraf, sesli not, çevrimdışı taslak; müşteri portalı.
**Kabul:** yetki ve senkronizasyon testleri, mobil cihaz kontrolü.

## Faz 6 — CRM/finans/analitik
Hatırlatma, bildirim adapterleri, kasa/cari/rapor, müşteri geri dönüş ve kârlılık.
**Kabul:** rapor metrikleri ve finans hesapları testli.

## Faz 7 — Entegrasyon ve AI
Gerçek OCR sağlayıcı, SMS/WhatsApp, e-belge, AI önerileri, izleme ve üretim sertleştirme.
**Kabul:** sırlar güvenli; entegrasyon sonuçları ölçülür; fallback vardır.

## Global tamamlanma tanımı
Çalışan API + UI + migration + validasyon + yetki + audit + test + dokümantasyon. Demo/mock açıkça belirtilir. Kritik yol: plaka → geçmiş → iş emri → teklif/onay → servis → kalite → tahsilat → teslim.
