Dưới đây là thiết kế **Checklist Hành Động Thực Chiến (24h)** dựa trên nội dung bài học Ngày 4: Truy Tìm Dấu Vết Số (Whois & DNS). Bản dữ liệu này được cấu trúc theo dạng bảng scannable, tối ưu để in ấn ra giấy A4 (nằm ngang) cho cá nhân tự học hoặc làm bài tập nhóm.

---

## 📋 CHECKLIST THỰC HÀNH: TRUY TÌM DẤU VẾT SỐ (24 GIỜ)

* **Mục tiêu:** Biến lý thuyết thành kỹ năng, thu thập hồ sơ mục tiêu ban đầu mà không bị phát hiện.
* **Đối tượng giả định để thực hành:** Một tên miền hợp pháp tùy chọn (Ví dụ: website trường học của bạn, blog cá nhân, hoặc `example.com`).

| STT | 🟩 | Hành động (Làm gì) | Hướng dẫn triển khai (Làm như thế nào) | Thời lượng | Kết quả mong đợi (Milestone) |
| --- | --- | --- | --- | --- | --- |
| **1** | ☐ | **Kiểm tra trạng thái Whois** | Sử dụng Web CLI hoặc các dịch vụ trực tuyến (ví dụ: `whois.domaintools.com`, `whois.com`) để tra cứu thông tin tên miền đã chọn. | 5 phút | Tìm ra nhà đăng ký tên miền (Registrar) và ngày hết hạn. Xác định xem mục tiêu có bật chế độ bảo mật ẩn danh (Whois Privacy) hay không. |
| **2** | ☐ | **Săn lùng Email quản trị** | Rà soát kỹ trường thông tin `Registrant/Admin/Tech Email` trong kết quả Whois. Nếu thông tin bị ẩn, cố gắng tìm email liên hệ hiển thị công khai ở chân trang (Footer) của chính website đó. | 5 phút | Thu thập được ít nhất 1 email hợp lệ phục vụ cho kịch bản mô phỏng Social Engineering. |
| **3** | ☐ | **Truy vấn IP Máy chủ (Bản ghi A)** | Mở Terminal (Linux/macOS) hoặc Command Prompt (Windows). Chạy lệnh:<br>

<br>`nslookup mục_tiêu.com`<br>

<br>hoặc `dig mục_tiêu.com A +short` | 5 phút | Xác định được địa chỉ IPv4 chính xác của máy chủ đang chứa mã nguồn website. |
| **4** | ☐ | **Nhận diện Hạ tầng Mail (Bản ghi MX)** | Thực hiện truy vấn sâu vào cấu hình mail bằng lệnh:<br>

<br>`nslookup -type=mx mục_tiêu.com`<br>

<br>hoặc `dig mục_tiêu.com MX` | 5 phút | Phát hiện được doanh nghiệp đang tự dựng Mail Server riêng hay thuê ngoài dịch vụ (Google Workspace, Microsoft 365, v.v.). |
| **5** | ☐ | **Kiểm tra Bộ lọc Spam (Bản ghi TXT)** | Chạy lệnh truy vấn các bản ghi ghi chú dạng văn bản:<br>

<br>`nslookup -type=txt mục_tiêu.com`<br>

<br>hoặc `dig mục_tiêu.com TXT` | 10 phút | Đọc và trích xuất được dòng cấu hình SPF (`v=spf1...`). Đánh giá xem hệ thống email của họ có bộ lọc chống giả mạo chặt chẽ không. |
| **6** | ☐ | **Vẽ tuyến đường di chuyển (Traceroute)** | Thực hiện dò tìm các trạm trung chuyển dữ liệu bằng lệnh:<br>

<br>`tracert mục_tiêu.com` (trên Windows)<br>

<br>hoặc `traceroute mục_tiêu.com` (trên Linux) | 15 phút | Liệt kê được danh sách các IP/Router trung gian. Xác định vị trí xuất hiện các dấu `* * *` (nơi tường lửa chặn gói tin kiểm thám). |
| **7** | ☐ | **Hệ thống hóa Sơ đồ mục tiêu (Mindmap)** | Sử dụng một công cụ vẽ sơ đồ tư duy miễn phí (như XMind, GitMind) hoặc vẽ tay ra giấy. Gom tất cả thông tin từ **bước 1 đến bước 6** lại thành một bản đồ thông tin tập trung. | 25 phút | Hoàn thành **Hồ sơ trinh sát bị động** đầu tiên của mục tiêu, sẵn sàng làm dữ liệu đầu vào cho bước Quét mạng (Scanning) tiếp theo. |

---

## 👥 HƯỚNG DẪN DÀNH CHO NHÓM HỌC (LEARNING GROUP)

* **Phân chia vai trò (Nếu làm nhóm 2-3 người):** * *Thành viên 1:* Chịu trách nhiệm thám thính thông tin sở hữu (Whois, Email, Nhà đăng ký).
* *Thành viên 2:* Chịu trách nhiệm kỹ thuật hạ tầng (Truy vấn toàn bộ các bản ghi DNS A, MX, TXT).
* *Thành viên 3:* Chịu trách nhiệm dò tuyến đường (Traceroute) và tổng hợp thông tin lên sơ đồ tư duy chung.


* **Tiêu chuẩn nghiệm thu (Definition of Done):** Tất cả các ô vuông `☐` được tick và nhóm xuất ra được 1 file sơ đồ tư duy hoàn chỉnh chứa đầy đủ các thông tin của mục tiêu mà không sinh ra bất kỳ lưu lượng tấn công trực diện nào.