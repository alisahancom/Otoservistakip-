# Web ve Mobil UI/UX Rehberi

## Tasarım
Kurumsal premium SaaS, açık/koyu mod, erişilebilir kontrast, responsive grid, tutarlı boşluk/typography. Masaüstü sidebar + üst arama; mobil alt navigasyon, büyük dokunma hedefleri; tablet atölye modu. Türkçe birincil dil.

## Web ekran haritası
1. Giriş / şifre yenileme
2. Dashboard (KPI, bekleyen onay, günlük servis, teknisyen durumu)
3. Global plaka arama / kamera OCR
4. Müşteri listesi ve müşteri 360° kartı
5. Araç listesi ve araç 360° kartı / zaman çizelgesi
6. Araç kabul / fotoğraf / kontrol
7. İş emri listesi / Kanban / detay / yeni iş emri
8. Teklif / kalem bazlı onay / servis fişi
9. Randevu takvimi
10. Atölye ve teknisyen iş yükü
11. Parça/stok/tedarikçi
12. Tahsilat/cari/kasa
13. CRM/hatırlatmalar/bildirimler
14. Raporlar
15. Kullanıcı/rol/şube/ayarlar

## Mobil ekran haritası
Giriş → Ana ekran → Plaka tara → OCR doğrula → Araç kartı → Yeni iş emri → Kontrol listesi/fotoğraf → Teknisyen görevleri → İşlem durumu → Teslim. Çevrimdışı taslaklar ayrı gösterilir.

## Kritik UX
- Plaka tarama sonrası ilk ekranda araç, müşteri, açık işler, son km ve son 3 servis.
- Ana CTA: Yeni İş Emri; yanlış eşleşme için 'Başka araç' ve manuel düzeltme.
- İş emrinde katalogdan hızlı çoklu seçim, not, fiyat ve onay durumu.
- Durumlar renk yanında metin ve ikonla anlaşılır.
- Formlarda otomatik kayıt yalnız güvenli taslaklarda; finansal onay açık işlem gerektirir.
- Loading, empty, error, offline, permission-denied, conflict, success durumları ayrı tasarlanır.
- Ekran okuyucu, klavye erişimi ve odak yönetimi test edilir.
