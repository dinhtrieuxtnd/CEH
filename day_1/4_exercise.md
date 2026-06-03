Chào bạn, là một chuyên gia đào tạo theo phương pháp **"Action Learning" (Học qua làm)**, tôi hiểu rằng lý thuyết về An ninh mạng sẽ vô giá trị nếu người học không tự tay bóc tách và giải quyết các vấn đề trong thực tế đời sống hay công việc.

Dưới đây là bộ 3 bài tập thực hành thiết kế riêng cho **NGÀY 1** (Tư duy Hacker Mũ Trắng, Tam giác CIA, và 5 Giai đoạn Hacking). Các tình huống được lấy trực tiếp từ môi trường Văn phòng, Giảng dạy và Kinh doanh để bạn có thể tự làm ngay lập tức mà không cần máy tính cấu hình mạnh hay sự hỗ trợ của giáo viên.

---

### BÀI TẬP 1: THIẾT KẾ BẢN ĐỒ CIA CHO CÔNG VIỆC HÀNG NGÀY

* **Cấp độ:** Cơ bản (Ai cũng làm được)
* **Thời gian dự kiến:** 20 phút
* **Bối cảnh thực tế:** Bạn là nhân viên văn phòng (HR, Kế toán), Giáo viên (quản lý điểm, đề thi), hoặc Người kinh doanh tự do (quản lý thông tin đơn hàng, data khách hàng). Mỗi ngày bạn xử lý hàng tá dữ liệu nhưng chưa bao giờ phân loại mức độ rủi ro bảo mật của chúng.

#### Yêu cầu cụ thể:

Hãy chọn một công việc/nhiệm vụ cốt lõi hàng ngày của bạn và chọn ra **3 loại tài sản dữ liệu quan trọng nhất** đang xử lý. Vẽ một bảng phân tích rủi ro dựa trên Tam giác Bảo mật CIA cho 3 loại tài sản đó, chỉ ra hậu quả lớn nhất nếu một trong ba cạnh (C - I - A) bị phá vỡ.

#### Gợi ý cách làm:

Kẻ một bảng gồm 5 cột: *Tên tài sản dữ liệu | Rủi ro nếu mất Tính Bảo mật (C) | Rủi ro nếu mất Tính Toàn vẹn (I) | Rủi ro nếu mất Tính Sẵn sàng (A) | Giải pháp hiện tại*.

* *Ví dụ cho Giáo viên:* Tài sản là "Đề thi học kỳ chưa công bố". Mất C (lộ đề) -> Phải hủy đợt thi; Mất I (ai đó sửa đáp án hoặc sửa câu hỏi) -> Học sinh làm sai, sai lệch kết quả; Mất A (đến giờ thi máy in hỏng, không mở được file) -> Buổi thi bị hoãn.

#### Tiêu chí đánh giá kết quả (Học viên tự đối chiếu):

* [ ] Xác định đúng danh tính 3 loại dữ liệu liên quan trực tiếp đến công việc của mình.
* [ ] Chỉ ra hậu quả cụ thể, thực tế cho cả 3 khía cạnh C, I, A của từng loại dữ liệu (không viết lý thuyết chung chung, phải ghi rõ thiệt hại công việc).
* [ ] Đề xuất được ít nhất 1 hành động chỉnh sửa ngay (ví dụ: đặt mật khẩu file đề thi, backup danh sách đơn hàng sang ổ phụ).

---

### BÀI TẬP 2: ĐÓNG VAI HACKER – KHẢO SÁT VECTƠ TRINH SÁT BỊ ĐỘNG (PHASE 1)

* **Cấp độ:** Trung bình (Đòi hỏi tư duy phân tích)
* **Thời gian dự kiến:** 30 phút
* **Bối cảnh thực tế:** Bạn tin rằng bản thân hoặc tổ chức của bạn bảo mật rất tốt. Bài tập này yêu cầu bạn đóng vai một Hacker Mũ Đen đang thực hiện **Giai đoạn 1: Reconnaissance (Trinh sát bị động)** để thu thập thông tin về chính cơ quan/công ty/trường học của bạn hoặc bản thân bạn thông qua các nguồn thông tin mở (OSINT).

#### Yêu cầu cụ thể:

Tìm kiếm và thu thập các "mảnh vỡ thông tin" nhạy cảm có thể bị hacker lợi dụng để làm bàn đạp cho các cuộc tấn công lừa đảo (Social Engineering) hoặc dò mật khẩu. Bạn chỉ được dùng Google và các mạng xã hội công khai, tuyệt đối không tương tác hay chạm vào hệ thống kỹ thuật của đơn vị.

#### Gợi ý cách làm:

Hãy mở trình duyệt ẩn danh, đóng vai kẻ tấn công và thực hiện tìm kiếm 3 nhóm thông tin sau:

1. **Thông tin Nhân sự & Email:** Lên Google gõ cấu trúc `site:facebook.com "tên công ty/trường học của bạn"` hoặc tìm trên LinkedIn. Xem có thể tìm được tên các nhân sự chủ chốt, phòng ban, và cấu trúc định dạng Email của họ không (ví dụ: `ten.nhanvien@congty.com`).
2. **Thông tin Công nghệ:** Tìm xem đơn vị có đang đăng tuyển dụng kỹ sư IT/Hệ thống không. Đọc mô tả công việc (JD): Họ có ghi rõ là *"Yêu cầu kinh nghiệm quản trị hệ thống Windows Server 2016, cơ sở dữ liệu SQL Server, Firewall Fortinet..."* không? (Hacker cực kỳ thích điều này vì JD đã vô tình tiết lộ toàn bộ công nghệ lõi bên trong).
3. **Hình ảnh lộ lọt:** Tìm các hình ảnh check-in văn phòng của nhân viên trên mạng xã hội. Xem có bức ảnh nào vô tình chụp dính thẻ nhân viên, màn hình máy tính đang mở, hoặc mật khẩu Wi-Fi dán trên tường góc phòng không.

#### Tiêu chí đánh giá kết quả (Học viên tự đối chiếu):

* [ ] Lập được một danh sách (Hồ sơ mục tiêu giả định) chứa ít nhất: 3 địa chỉ email nhân sự thật, cấu trúc sơ đồ phòng ban sơ bộ, và ít nhất 2 công nghệ/phần mềm mà đơn vị đang xài.
* [ ] Chỉ ra được 1 lỗ hổng thông tin (ví dụ: Một bài đăng chứa ảnh chụp phòng máy chủ hoặc bàn làm việc quá chi tiết).
* [ ] Đưa ra biện pháp khắc phục: Đề xuất quy định truyền thông nội bộ (ví dụ: Nhắc nhở nhân sự không đăng ảnh lộ màn hình làm việc, IT lược bỏ bớt tên phiên bản phần mềm chi tiết trên bài đăng tuyển dụng).

---

### BÀI TẬP 3: XÂY DỰNG KỊCH BẢN TẤN CÔNG TOÀN DIỆN 5 GIAI ĐOẠN (HACKING SIMULATION)

* **Cấp độ:** Nâng cao (Tích hợp toàn bộ kiến thức Ngày 1)
* **Thời gian dự kiến:** 40 phút
* **Bối cảnh thực tế:** Một cửa hàng kinh doanh thời trang trực tuyến lớn của người quen (hoặc một website do bạn tự chọn) có một trang đăng nhập dành cho đại lý quản lý kho hàng. Bạn cần chứng minh cho họ thấy hệ thống của họ có thể bị hack như thế nào bằng cách lập một **Bản thiết kế kịch bản tấn công giả định** tuân thủ đúng 5 giai đoạn của Hacking để từ đó hiến kế phòng thủ.

#### Yêu cầu cụ thể:

Không được gõ bất kỳ lệnh phá hoại nào. Hãy viết một báo cáo kịch bản dưới dạng văn bản (độ dài khoảng 1 trang giấy), mô tả chi tiết các bước một hacker mũ đen có thể áp dụng từ Giai đoạn 1 đến Giai đoạn 5 để chiếm đoạt tài khoản Admin của cửa hàng đó, thu thập data khách hàng và ẩn mình. Sau mỗi giai đoạn, phải ghi rõ giải pháp Mũ Trắng tương ứng để chặn đứng bước đi đó của hacker.

#### Gợi ý cách làm:

Triển khai kịch bản theo mạch tư duy logic sau:

* **Giai đoạn 1 (Reconnaissance):** Hacker tìm ra tài khoản Facebook của nhân viên kho hàng, biết được sở thích của họ là nuôi thú cưng.
* *Giải pháp phòng thủ:* Đào tạo nhận thức an ninh cho nhân viên.


* **Giai đoạn 2 (Scanning):** Hacker phát hiện trang quản trị của cửa hàng sử dụng một nền tảng mã nguồn mở cũ chưa cập nhật và cổng dịch vụ cơ sở dữ liệu đang mở public ra Internet.
* *Giải pháp phòng thủ:* Đóng các cổng không cần thiết, cập nhật hệ thống.


* **Giai đoạn 3 (Gaining Access):** Hacker dùng phương pháp Brute-Force (thử mật khẩu tự động) với các từ khóa liên quan đến "thú cưng" của nhân viên đó kết hợp với lỗi hệ thống cũ để chiếm quyền đăng nhập.
* *Giải pháp phòng thủ:* Cấu hình chính sách khóa tài khoản nếu nhập sai quá 5 lần, bắt buộc bật xác thực 2 lớp (2FA).


* **Giai đoạn 4 (Maintaining Access):** Sau khi vào được hệ thống, hacker tạo thêm một tài khoản Admin ẩn với tên gọi giống như một tài khoản hệ thống (ví dụ: `system_backup_service`) để lần sau đăng nhập lại.
* *Giải pháp phòng thủ:* Thiết lập hệ thống cảnh báo tự động gửi về Telegram/Email mỗi khi có tài khoản Admin mới được tạo ra.


* **Giai đoạn 5 (Covering Tracks):** Hacker tìm đến tệp tin ghi nhật ký (Log file) của ứng dụng web và xóa bỏ các dòng IP của mình vào thời điểm đăng nhập.
* *Giải pháp phòng thủ:* Cấu hình đẩy Log tập trung về một máy chủ lưu trữ độc lập (Centralized Logging Server) mà tài khoản Admin thường không có quyền xóa.



#### Tiêu chí đánh giá kết quả (Học viên tự đối chiếu):

* [ ] Bản kịch bản viết logic, liên kết chặt chẽ (kết quả của giai đoạn trước là nguyên liệu đầu vào cho giai đoạn sau).
* [ ] Áp dụng đúng bản chất lý thuyết 5 giai đoạn CEH v11 vào câu chuyện thực tế, không bị nhầm lẫn giữa các giai đoạn (Ví dụ: Không nhầm lẫn việc Quét cổng ở Phase 2 với Chiếm quyền ở Phase 3).
* [ ] Với mỗi bước đi của Hacker, bạn đề xuất được giải pháp phòng ngự tương ứng mang tính thực tế cao và có thể triển khai được.

---

### MẪU NHẬT KÝ THEO DÕI HOÀN THÀNH BÀI TẬP (Có thể in ra)

* **Họ và tên người học / Nhóm:** ..............................................................
* **Ngày thực hiện:** ...................................................................................

| Bài tập | Kết quả tự đánh giá | Khó khăn gặp phải | Bài học rút ra cho bản thân |
| --- | --- | --- | --- |
| **Bài 1** | ☐ Đạt (Xong 3 tài sản)<br>

<br>☐ Chưa đạt |  |  |
| **Bài 2** | ☐ Đạt (Tìm ra thông tin lọt)<br>

<br>☐ Chưa đạt |  |  |
| **Bài 3** | ☐ Đạt (Đủ 5 giai đoạn + Thủ)<br>

<br>☐ Chưa đạt |  |  |

*💡 Chuyên gia nhắn nhủ: Hãy hoàn thành bộ ba bài tập này vào một cuốn sổ tay cá nhân. Việc tự tay viết ra kịch bản sẽ biến 80% lượng lý thuyết bạn vừa đọc trở thành phản xạ tư duy tự nhiên của một Ethical Hacker thực thụ!*