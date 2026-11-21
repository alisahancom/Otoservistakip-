# CODEX MASTER PROMPT — OTOSERVİSTAKİP 2026

## Rol ve hedef
Kıdemli full-stack mimar, ürün tasarımcısı, mobil geliştirici, DBA ve QA mühendisi gibi çalış. Bu repository'de gerçek kullanıma hazır, modern, güvenli oto servis takip platformunu aşamalı geliştir. Önce AGENTS.md ve tüm docs belgelerini oku. Önce mevcut dosyaları incele; sonra planla, kodla, test et ve raporla.

## Ürün vizyonu
Oto servise gelen araç kamera OCR veya manuel plaka ile tanınır; kayıtlı araç, müşteri, önceki ziyaretler, kilometre, arızalar, parça değişimleri ve açık iş emirleri tek ekranda açılır. Kullanıcı yeni iş emri oluşturur; şikâyet ve işlemleri seçer; teknisyen ve işçilik/parça planlar; teklif ve müşteri onayı alır; servis sürecini, stok hareketlerini, kalite kontrolü, tahsilatı ve teslimi yönetir. Sonraki bakım için CRM hatırlatması oluşur.

## Kapsam
1. Dashboard: günlük girişler, açık işler, bekleyen onaylar, randevular, tahsilat, kârlılık, iş yükü, filtrelenebilir KPI.
2. Plaka OCR: kamera, manuel giriş, Türkiye plaka normalizasyonu, güven skoru, düşük güven düzeltmesi, yanlış eşleşme kontrolü, kayıt yoksa hızlı oluşturma. Harici kimlik/sahiplik verisi izinsiz çekilmez.
3. CRM: bireysel/kurumsal müşteri, iletişim/izinler, araçlar, ziyaretler, notlar, memnuniyet, segmentler, geri dönüş, takip görevleri.
4. Araç: plaka geçmişi, şasi no, marka/model/yıl/motor/yakıt/şanzıman, kilometre geçmişi, bakım/arıza/parça geçmişi, fotoğraf ve evrak.
5. Araç kabul: yakıt, km, anahtar, mevcut hasar, kontrol listesi, fotoğraf üstüne işaret, sesli not, imza.
6. İş emri: şikâyetler, iş kalemleri, işçilik, parça, teknisyen, planlanan süre, durumlar, onay, fiyat, kalite kontrol, teslim; olay geçmişi ve versiyon.
7. İşlem kataloğu: periyodik bakım, motor/şanzıman yağı, filtreler, supap ayarı/contası, ön/arka balata, disk, buji, antifriz, hidrolik, motor kulağı, direksiyon kutusu, klima, elektrik, genel kontrol; yönetilebilir kategoriler, süre ve fiyat.
8. Atölye: teknisyen, uzmanlık, servis alanı, iş yükü, Kanban, süre ölçümü, bekleme nedeni, tekrar arıza.
9. Randevu: takvim, kapasite, hatırlatma, iptal/erteleme, no-show, randevudan iş emri.
10. Stok: parça/OEM/barkod, tedarikçi, depo/raf, maliyet, satış fiyatı, rezervasyon, hareket, kritik stok.
11. Teklif: kalem bazlı fiyat/KDV/indirim, sürüm, güvenli müşteri bağlantısı, kalem bazlı onay/red, onay kanıtı.
12. Finans: nakit/kart/havale, parçalı tahsilat, cari hesap, gider, kasa, iade/ters kayıt, rapor, e-fatura adapteri.
13. Müşteri portalı: kimlik doğrulanmış servis durumu, teklif onayı, fotoğraf, teslim ve ödeme durumu.
14. Bildirim: olay tabanlı SMS/e-posta/WhatsApp/push, şablon, izin, teslim sonucu, yeniden deneme.
15. Raporlar: ciro, brüt/net kâr tanımları, iş emri ortalaması, teklif dönüşümü, servis süresi, teknisyen, stok, müşteri geri dönüşü; CSV/Excel/PDF.
16. Yapay zekâ (sonraki faz): not/ses yapılandırma, bakım önerileri, tekrar arıza, geri dönüş olasılığı; açıklanabilir öneri, insan onayı.
17. Organizasyon: roller (sahip, yönetici, danışman, teknisyen, kasa, müşteri), şubeler, kullanıcılar, izinler, audit.

## Teknoloji ve uygulama
pnpm/Turborepo; apps/web Next.js, apps/mobile Expo/React Native, apps/api NestJS; packages/types, validation, config. PostgreSQL + Prisma, Redis/BullMQ, WebSocket, S3 adapter. TypeScript strict, Zod, OpenAPI. Docker geliştirme ortamı ve CI. Mevcut altyapı varsa sebepsiz değiştirme.

## Kritik iş kuralları
- Bir aracın plakası değişebilir; plaka geçmişini koru, şasi no ile eşleştirme yap.
- Kilometre ve servis olaylarını geçmişi silmeden kaydet.
- Açık iş emri ve müşteri eşleştirme uyarıları göster.
- Ücretli iş, gerekli müşteri onayı alınmadan başlamaz; teklif değişince onay sürümü değişir.
- Stok tüketimi atomik ve denetlenebilir olmalı; ödeme tekrarları idempotent olmalı.
- Servis fişi PDF/yazdırma ile üretilebilir; teslim imzası ve belge bağlantısı saklanır.
- Saatler UTC saklanır, Europe/Istanbul gösterilir; para DECIMAL.
- Çok şubeli kapsam/tenant izolasyonu backend'de zorunlu.
- Üçüncü taraf entegrasyonlar gerçek değilse 'mock' etiketi taşımalı.

## Kullanıcı deneyimi
Modern 2026 SaaS: açık/koyu mod, sidebar, global arama, komut paleti, hızlı plaka araması, kartlar, tablolar, filtreler, Kanban, takvim, mobil kamera ve büyük butonlar, tablet teknisyen modu. Türkçe birincil dil. Erişilebilir, performanslı, responsive. Her ekranda loading/empty/error/success durumları.

## İlk sprint ve kabul kriterleri
1. Monorepo, env.example, Docker, Prisma, lint/typecheck/test ve CI kur.
2. Auth/RBAC, organization/branch, customer, vehicle, plate history, mileage, work order, service catalog şemasını oluştur.
3. Web'de login, dashboard, plaka arama, müşteri/araç kartı, servis geçmişi, iş emri oluşturma.
4. Mobilde login, kamera izni, OCR adapter/mock + manuel düzeltme, araç kartı, iş emri akışı.
5. API, validasyon, yetki, audit, seed ve testleri tamamla.
6. Uçtan uca test: giriş → plaka → araç → geçmiş → iş emri → teklif → onay → teknisyen → kalite → ödeme → teslim.
7. Gerçek OCR ve dış servis entegrasyonlarını yapılandırma gerektiriyorsa güvenli adapter ve açık TODO ile bırak; çalışıyormuş gibi gösterme.

## Çalışma yöntemi
Önce mevcut repository'yi analiz et ve ayrıntılı plan çıkar. Her fazda küçük, gözden geçirilebilir commitler yap. UI ile backend'i birlikte geliştir. Her adımda lint, typecheck, test, build çalıştır; çalışmayan komutları açıkça belirt. Tamamlanan, eksik, riskli ve doğrulanmamış özellikleri ayır. Belgeyi gerektiğinde güncelle. Çalışan kodu bozma, sırf görsel demo üretme. Kullanıcı onayı gerektiren yıkıcı/ücretli işlemleri kendiliğinden yapma.
