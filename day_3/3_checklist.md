Dưới đây là thiết kế bảng checklist hành động được thiết kế trực quan, sắp xếp theo độ khó tăng dần để bạn có thể dễ dàng in ra giấy (A4 dọc/ngang) làm tài liệu theo dõi cá nhân hoặc thảo luận nhóm ngay trong vòng 24 giờ sau bài học NGÀY 3.

---

# 📋 CHECKLIST HÀNH ĐỘNG: CHIẾN BÌNH GOOGLE HACKING (NGÀY 3)

*Áp dụng trong vòng 24 giờ sau khi học — Dành cho Cá nhân & Nhóm học tập*

| STT | ⬜ Trạng thái | Làm gì? | Làm như thế nào? | Thời gian | Kết quả mong đợi |
| --- | --- | --- | --- | --- | --- |
| **1** | ☐ Chưa học<br>

<br>☐ Đang làm<br>

<br>☐ Đã xong | **"Khởi động cơ tay" với 5 Toán tử cơ bản** | Truy cập Google và gõ thử 5 câu lệnh riêng lẻ để hiểu cách hoạt động:<br>

<br>• `site:edu.vn`<br>

<br>• `filetype:pdf`<br>

<br>• `intitle:"báo cáo"`<br>

<br>• `inurl:login`<br>

<br>• `intext:"bảo mật"` | **5 phút** | Hiểu rõ cách mỗi toán tử thu hẹp phạm vi tìm kiếm của Google một cách độc lập. |
| **2** | ☐ Chưa học<br>

<br>☐ Đang làm<br>

<br>☐ Đã xong | **Lắp ráp câu lệnh phức hợp** | Kết hợp các toán tử lại thành một chuỗi logic để săn lùng file văn bản lộ lọt công khai.<br>

<br>• *Cú pháp:* `site:edu.vn filetype:xlsx "danh sách sinh viên"` hoặc tìm file tài liệu nội bộ của một đuôi miền cụ thể. | **10 phút** | Gom được danh sách các liên kết trực tiếp dẫn tới các file Excel hoặc PDF chứa thông tin thực tế từ Google. |
| **3** | ☐ Chưa học<br>

<br>☐ Đang làm<br>

<br>☐ Đã xong | **Vượt ải Thử thách "Index of"** | Tìm kiếm các máy chủ cấu hình sai hiển thị toàn bộ thư mục gốc.<br>

<br>• *Cú pháp:* `intitle:"index of" "parent directory"`<br>

<br>*(Lưu ý nhóm: Thử bấm vào một vài thư mục trống xem cấu trúc cây thư mục, tuyệt đối không tải file lạ).* | **10 phút** | Nhìn thấy giao diện danh sách thư mục (Directory Listing) trần trụi của các website bị lỗi cấu hình. |
| **4** | ☐ Chưa học<br>

<br>☐ Đang làm<br>

<br>☐ Đã xong | **Khai phá kho vũ khí GHDB** | 1. Truy cập vào trang web [exploit-db.com/google-hacking-database](https://www.exploit-db.com/google-hacking-database).<br>

<br>2. Chọn một danh mục (ví dụ: *Files Containing Passwords* hoặc *Sensitive Directories*).<br>

<br>3. Copy thử một câu lệnh Dork có sẵn để nghiên cứu cấu trúc của nó. | **15 phút** | Biết cách tự tra cứu và sử dụng "thư viện" dork có sẵn của thế giới thay vì tự nghĩ từ đầu. |
| **5** | ☐ Chưa học<br>

<br>☐ Đang làm<br>

<br>☐ Đã xong | **Kích hoạt "Cỗ máy thời gian"** | 1. Truy cập trang [archive.org](https://archive.org).<br>

<br>2. Nhập một website trường học cũ hoặc một trang tin tức phổ biến.<br>

<br>3. Chọn mốc thời gian cách đây 3 - 5 năm để xem lại giao diện và các bài viết cũ của họ. | **15 phút** | Hiểu được cách dòng thời gian của Internet hoạt động và cách hacker tìm lại các trang web đã bị xóa/thay đổi. |
| **6** | ☐ Chưa học<br>

<br>☐ Đang làm<br>

<br>☐ Đã xong | **Tự rà soát (Audit) "nhà mình"** | Sử dụng tên miền của trường học, công ty hiện tại (hoặc website cá nhân của bạn) làm mục tiêu hợp pháp. Chạy thử chuỗi lệnh:<br>

<br>`site:yourtarget.com (filetype:sql OR filetype:conf OR filetype:bak)` để xem hệ thống có bị lộ file mã nguồn/cấu hình không. | **20 phút** | Nhận diện được mức độ an toàn của tổ chức mình; có bằng chứng (nếu có lỗi công khai) để báo cáo cấp trên vá lỗi. |
| **7** | ☐ Chưa học<br>

<br>☐ Đang làm<br>

<br>☐ Đã xong | **Thảo luận và Ghi nhận nhật ký (Dành cho nhóm)** | *Làm việc nhóm:* Ngồi lại cùng nhau (hoặc qua cuộc gọi), chia sẻ màn hình kết quả thu được. Phân tích xem vì sao lỗi đó xảy ra và làm sao để khắc phục (Ví dụ: Dùng file `robots.txt` để chặn Google index). | **15 phút** | Hoàn thành báo cáo thu hoạch Ngày 3. Khắc sâu tư duy phòng thủ (Defender) thay vì chỉ đi tìm lỗi (Attacker). |

---

### 💡 GỢI Ý KHI THỰC HIỆN DÀNH CHO NHÓM:

* **Phân chia mục tiêu:** Mỗi thành viên trong nhóm có thể chọn một đuôi tên miền quốc gia khác nhau (ví dụ: `.sg`, `.th`, `.my`) hoặc các lĩnh vực khác nhau để quét thử, sau đó đối chiếu xem lĩnh vực nào thường để lộ lọt thông tin nhiều nhất.
* **Quy tắc Đạo đức:** *Chỉ nhìn, không chạm.* Nếu vô tình tìm thấy trang quản trị hoặc file chứa thông tin nhạy cảm, tuyệt đối không cố gắng đăng nhập thử bằng các tài khoản dò đoán hay tải toàn bộ cơ sở dữ liệu về máy. Việc đó vi phạm nghiêm trọng đạo đức của một Hacker Mũ Trắng!