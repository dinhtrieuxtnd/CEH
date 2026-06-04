# 📋 CHECKLIST HÀNH ĐỘNG: CHINH PHỤC GOOGLE HACKING (NGÀY 3)

*Áp dụng trong vòng 24 giờ sau khi học — Dành cho Cá nhân & Nhóm học tập*

---

## Nhiệm vụ 1 — "Khởi động cơ tay" với 5 Toán tử cơ bản

| | |
| --- | --- |
| ⏱ Thời gian | **5 phút** |
| 🎯 Kết quả mong đợi | Hiểu rõ cách mỗi toán tử thu hẹp phạm vi tìm kiếm của Google một cách độc lập. |

**Cách làm:** Truy cập Google và gõ thử 5 câu lệnh riêng lẻ để hiểu cách hoạt động:

- `site:edu.vn`
- `filetype:pdf`
- `intitle:"báo cáo"`
- `inurl:login`
- `intext:"bảo mật"`

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 2 — Lắp ráp câu lệnh phức hợp

| | |
| --- | --- |
| ⏱ Thời gian | **10 phút** |
| 🎯 Kết quả mong đợi | Gom được danh sách các liên kết trực tiếp dẫn tới các file Excel hoặc PDF chứa thông tin thực tế từ Google. |

**Cách làm:** Kết hợp các toán tử lại thành một chuỗi logic để săn lùng file văn bản lộ lọt công khai.

- *Cú pháp:* `site:edu.vn filetype:xlsx "danh sách sinh viên"` hoặc tìm file tài liệu nội bộ của một đuôi miền cụ thể.

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 3 — Vượt ải Thử thách "Index of"

| | |
| --- | --- |
| ⏱ Thời gian | **10 phút** |
| 🎯 Kết quả mong đợi | Nhìn thấy giao diện danh sách thư mục (Directory Listing) trần trụi của các website bị lỗi cấu hình. |

**Cách làm:** Tìm kiếm các máy chủ cấu hình sai hiển thị toàn bộ thư mục gốc.

- *Cú pháp:* `intitle:"index of" "parent directory"`
- *(Lưu ý nhóm: Thử bấm vào một vài thư mục trống xem cấu trúc cây thư mục, tuyệt đối không tải file lạ).*

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 4 — Khai phá kho vũ khí GHDB

| | |
| --- | --- |
| ⏱ Thời gian | **15 phút** |
| 🎯 Kết quả mong đợi | Biết cách tự tra cứu và sử dụng "thư viện" dork có sẵn của thế giới thay vì tự nghĩ từ đầu. |

**Cách làm:**

1. Truy cập vào trang web [exploit-db.com/google-hacking-database](https://www.exploit-db.com/google-hacking-database).
2. Chọn một danh mục (ví dụ: *Files Containing Passwords* hoặc *Sensitive Directories*).
3. Copy thử một câu lệnh Dork có sẵn để nghiên cứu cấu trúc của nó.

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 5 — Kích hoạt "Cỗ máy thời gian"

| | |
| --- | --- |
| ⏱ Thời gian | **15 phút** |
| 🎯 Kết quả mong đợi | Hiểu được cách dòng thời gian của Internet hoạt động và cách hacker tìm lại các trang web đã bị xóa/thay đổi. |

**Cách làm:**

1. Truy cập trang [archive.org](https://archive.org).
2. Nhập một website trường học cũ hoặc một trang tin tức phổ biến.
3. Chọn mốc thời gian cách đây 3 – 5 năm để xem lại giao diện và các bài viết cũ của họ.

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 6 — Tự rà soát (Audit) "nhà mình"

| | |
| --- | --- |
| ⏱ Thời gian | **20 phút** |
| 🎯 Kết quả mong đợi | Nhận diện được mức độ an toàn của tổ chức mình; có bằng chứng (nếu có lỗi công khai) để báo cáo cấp trên vá lỗi. |

**Cách làm:** Sử dụng tên miền của trường học, công ty hiện tại (hoặc website cá nhân của bạn) làm mục tiêu hợp pháp. Chạy thử chuỗi lệnh:

```
site:yourtarget.com (filetype:sql OR filetype:conf OR filetype:bak)
```

để xem hệ thống có bị lộ file mã nguồn/cấu hình không.

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 7 — Thảo luận và Ghi nhận nhật ký *(Dành cho nhóm)*

| | |
| --- | --- |
| ⏱ Thời gian | **15 phút** |
| 🎯 Kết quả mong đợi | Hoàn thành báo cáo thu hoạch Ngày 3. Khắc sâu tư duy phòng thủ (Defender) thay vì chỉ đi tìm lỗi (Attacker). |

**Cách làm:** *Làm việc nhóm:* Ngồi lại cùng nhau (hoặc qua cuộc gọi), chia sẻ màn hình kết quả thu được. Phân tích xem vì sao lỗi đó xảy ra và làm sao để khắc phục (Ví dụ: Dùng file `robots.txt` để chặn Google index).

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## 💡 GỢI Ý KHI THỰC HIỆN DÀNH CHO NHÓM

- **Phân chia mục tiêu:** Mỗi thành viên trong nhóm có thể chọn một đuôi tên miền quốc gia khác nhau (ví dụ: `.sg`, `.th`, `.my`) hoặc các lĩnh vực khác nhau để quét thử, sau đó đối chiếu xem lĩnh vực nào thường để lộ lọt thông tin nhiều nhất.
- **Quy tắc Đạo đức:** *Chỉ nhìn, không chạm.* Nếu vô tình tìm thấy trang quản trị hoặc file chứa thông tin nhạy cảm, tuyệt đối không cố gắng đăng nhập thử bằng các tài khoản dò đoán hay tải toàn bộ cơ sở dữ liệu về máy. Việc đó vi phạm nghiêm trọng đạo đức của một Hacker Mũ Trắng!