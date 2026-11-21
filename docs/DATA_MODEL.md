# Veri Modeli ve Kurallar

## Temel tablolar
- organizations(id, name, status)
- branches(id, organization_id, name, address)
- users(id, organization_id, branch_id, ...)
- roles, permissions, user_roles
- customers(id, organization_id, type, name, phone, email, consent...)
- vehicles(id, organization_id, vin?, make, model, model_year, fuel, transmission...)
- vehicle_plates(id, vehicle_id, normalized_plate, valid_from, valid_to)
- vehicle_ownerships(id, vehicle_id, customer_id, start_at, end_at)
- vehicle_mileage_logs(id, vehicle_id, km, recorded_at, source)
- appointments(id, branch_id, customer_id, vehicle_id, start_at, end_at, status)
- service_catalog(id, organization_id, code, title, estimated_minutes, labor_price)
- work_orders(id, branch_id, customer_id, vehicle_id, number, status, opened_at, ...)
- work_order_items(id, work_order_id, service_catalog_id?, description, status, labor_amount, parts_amount)
- inspections, inspection_items, attachments
- technicians, technician_assignments, labor_time_entries
- parts, suppliers, warehouses, inventory_movements, inventory_reservations
- quotations, quotation_items, quotation_approvals
- invoices, payments, cash_transactions
- customer_interactions, reminders, notifications, audit_logs

## İlişkiler
organization 1:N branches/customers/vehicles; vehicle 1:N plates/mileage/work_orders; customer N:M vehicle üzerinden ownership; work_order 1:N items/inspections/quotes/payments; quotation 1:N items/approvals; part 1:N movements.

## Tutarlılık
- Her müşteri/araç/iş emri sorgusunda organization ve gerekli branch yetkisi kontrol edilir.
- normalized_plate indekslenir; aynı anda aktif plaka eşleşmelerinin çakışması önlenir; geçmiş korunur.
- VIN benzersizliği yalnız doğrulanmış ve mevcut değerlerde uygun kapsamda uygulanır.
- Miktar/para için decimal; stok hareketleri append-only, dengeleme ters hareketle.
- Ödemeler benzersiz sağlayıcı işlem kimliği/idempotency key ile korunur.
- Teklif onayları teklif sürümüne bağlıdır; revizyon yeni onay gerektirir.
- Audit kayıtları kritik değişiklikleri actor, zaman, kaynak, önce/sonra ile tutar; hassas alanlar maskelenir.
- Migration öncesi veri kaybı ve indeks planı gözden geçirilir.
