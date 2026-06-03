Chào bạn! Với tư cách là một chuyên gia đào tạo áp dụng triết lý **"Học qua hành" (Learning by Doing)**, tôi hiểu rằng lý thuyết về Google Hacking chỉ thực sự có giá trị khi bạn tự tay gõ lệnh và nhìn thấy kết quả kiểm thử.

Dưới đây là thiết kế bộ bài tập thực hành toàn diện cho **NGÀY 3: TUYỆT CHIÊU GOOGLE HACKING (GHDB) & WAYBACK MACHINE**. Bộ bài tập này được xây dựng bám sát các tình huống công việc văn phòng, kinh doanh, giáo dục hàng ngày và được đóng gói để bạn có thể tự hoàn thành độc lập.

---

## BÀI TẬP 1: TRUY TÌM TÀI LIỆU RÒ RỈ (Mức độ: Cơ bản)

* **Ngữ cảnh công việc:** Bạn là nhân viên hành chính văn phòng hoặc giáo viên. Công ty/Trường học của bạn thường xuyên tải các tài liệu nội bộ, danh sách, báo cáo lên website. Bạn cần kiểm tra xem các tài liệu nhạy cảm hoặc định dạng đặc biệt có đang bị lộ công khai trên Google hay không để kịp thời xử lý.
* **Thời gian hoàn thành dự kiến:** 15 phút.
* **Tình huống thực tế:** Sếp hoặc Ban giám hiệu nghi ngờ một số tệp tin chứa từ khóa "Lưu hành nội bộ" hoặc "Danh sách nhân sự" dạng Excel/PDF thuộc cơ quan mình đang bị hiển thị công khai trên công cụ tìm kiếm của Google mà không qua bất kỳ lớp mật khẩu bảo vệ nào.

### Yêu cầu cụ thể:

1. Hãy viết một chuỗi lệnh kết hợp (Advanced Google Dork) nhằm giới hạn tìm kiếm trong một tên miền cụ thể (bạn có thể tự chọn một tên miền cơ quan, trường học hoặc sử dụng các đuôi tên miền chung như `.edu.vn`, `.gov.vn`).
2. Chuỗi lệnh phải lọc chính xác tệp tin định dạng `.pdf` hoặc `.xlsx`.
3. Chuỗi lệnh phải chứa điều kiện tìm chính xác cụm từ nhạy cảm như `"lưu hành nội bộ"` hoặc `"danh sách"`.

### Gợi ý cách làm:

* Sử dụng toán tử toán học và logic như dấu ngoặc kép `""` để cố định cụm từ khóa chính xác và toán tử `OR` để tìm nhiều loại file cùng lúc.
* *Cú pháp tham khảo:* `site:ten-mien-muc-tieu.com (filetype:pdf OR filetype:xlsx) "lưu hành nội bộ"`
*(Lưu ý: Thay `ten-mien-muc-tieu.com` bằng website bạn muốn kiểm tra).*

### Tiêu chí đánh giá kết quả:

* **Đạt:** Google trả về danh sách các tệp tin đúng định dạng (`.pdf` hoặc `.xlsx`) nằm trong phạm vi tên miền đã chỉ định và tiêu đề hoặc nội dung tệp trích dẫn đúng từ khóa nhạy cảm.
* **Xuất sắc:** Bạn phát hiện và liệt kê ra được ít nhất 1 đường tệp tin đáng lẽ phải ẩn nhưng lại đang mở công khai (nếu tệp tin an toàn hoàn toàn, ảnh chụp màn hình hiển thị kết quả *"Không tìm thấy kết quả nào"* từ Google với câu lệnh chính xác vẫn được tính là hoàn thành tốt).

---

## BÀI TẬP 2: ĐÀO BỚI LỊCH SỬ WEBSITE KINH DOANH (Mức độ: Trung bình)

* **Ngữ cảnh công việc:** Bạn là nhân viên phòng Kinh doanh (Sales/Marketing) hoặc chuyên viên Trinh sát thông tin. Bạn đang nghiên cứu đối thủ cạnh tranh hoặc kiểm tra một đối tác doanh nghiệp lớn trước khi ký hợp đồng. Tuy nhiên, đối tác/đối thủ vừa mới thay đổi giao diện trang web và xóa đi nhiều thông tin liên hệ cũ, bảng giá cũ hoặc danh sách nhân sự cấp cao trong quá khứ.
* **Thời gian hoàn thành dự kiến:** 20 phút.
* **Tình huống thực tế:** Website của đối thủ cạnh tranh vừa hạ trang "Báo cáo doanh thu năm 2023" và trang "Sơ đồ tổ chức nhân sự" nhằm tái cấu trúc. Bạn cần tìm lại nguyên bản các thông tin này để làm báo cáo phân tích thị trường cho công ty mình.

### Yêu cầu cụ thể:

1. Sử dụng công cụ **WayBack Machine (archive.org)** để tra cứu lịch sử của một website mục tiêu (bạn tự chọn một trang web doanh nghiệp bất kỳ hoặc một trang tin tức lớn).
2. Tìm và truy cập vào phiên bản website của mục tiêu tại 2 mốc thời gian khác nhau: **Cách đây 2 năm** và **Cách đây 5 năm**.
3. Chỉ ra ít nhất 3 điểm khác biệt quan trọng giữa phiên bản quá khứ đó so với trang web trực tuyến (Live website) hiện tại (Ví dụ: Số điện thoại hotline cũ, danh mục sản phẩm cũ đã ngừng bán, tên của một lãnh đạo cũ...).

### Gợi ý cách làm:

1. Truy cập vào trang chủ [https://archive.org](https://archive.org).
2. Nhập URL của website mục tiêu vào ô tìm kiếm ở giữa trang.
3. Chọn tab **Calendar** (Lịch). Di chuột qua các năm trên thanh đồ thị biểu diễn dòng thời gian.
4. Click vào các chấm tròn màu xanh lá hoặc xanh dương trên lịch của năm cần tìm, chọn một mốc giờ cụ thể để mở ảnh chụp màn hình (Snapshot).

### Tiêu chí đánh giá kết quả:

* **Đạt:** Chụp lại được giao diện website mục tiêu ở 2 mốc năm quá khứ thông qua WayBack Machine.
* **Xuất sắc:** Lập được bảng so sánh chi tiết chỉ ra sự thay đổi cấu trúc URL hoặc thông tin liên hệ rò rỉ từ quá khứ vẫn còn giá trị trinh sát (như email của cựu quản trị viên hệ thống).

---

## BÀI TẬP 3: THIẾT LẬP HỆ THỐNG "CẢNH BÁO SỚM" BẢO MẬT (Mức độ: Nâng cao)

* **Ngữ cảnh công việc:** Bạn đóng vai trò một Chuyên gia An ninh mạng (Hacker Mũ Trắng) chịu trách nhiệm phòng thủ hoặc một Quản trị viên hệ thống của cơ quan. Bạn không thể ngày nào cũng ngồi gõ lệnh Google Dork một cách thủ công để tự quét xem hệ thống có bị lộ file mật khẩu hay không. Bạn cần tự động hóa quy trình này.
* **Thời gian hoàn thành dự kiến:** 30 phút.
* **Tình huống thực tế:** Bạn cần xây dựng một cơ chế tự động theo dõi. Bất cứ khi nào có một file cấu hình nhạy cảm chứa từ khóa `"password"`, `"database"` hoặc trang đăng nhập quản trị mới (`inurl:admin`) của cơ quan bạn vô tình bị Google quét trúng và Index, hệ thống phải tự động gửi một email cảnh báo ngay lập tức về hòm thư của bạn.

### Yêu cầu cụ thể:

1. Sử dụng công cụ **Google Alerts** (một dịch vụ miễn phí của Google hỗ trợ đặt thông báo tự động dựa trên từ khóa).
2. Cấu hình ít nhất 2 chiến dịch "Cảnh báo sớm" sử dụng kỹ thuật Google Dork nâng cao để giám sát một tên miền giả định hoặc tên miền bạn quản lý hợp pháp.
3. Thiết lập tần suất nhận cảnh báo ngay khi kết quả xuất hiện (*As-it-happens*) để đảm bảo tính thời sự trong xử lý sự cố an ninh.

### Gợi ý cách làm:

1. Truy cập vào công cụ [https://google.com/alerts](https://google.com/alerts) bằng tài khoản Google của bạn.
2. Tại ô "Tạo thông báo về...", hãy nhập câu lệnh Dork phức hợp bảo mật của bạn.
*Ví dụ:* `site:ten-mien-cua-ban.com inurl:admin` hoặc `site:ten-mien-cua-ban.com intext:"password"`
3. Bấm vào nút **Hiển thị tùy chọn** (Show options) và cấu hình:
* *Tần suất (How often):* Tùy chọn "Khi có kết quả" (As-it-happens).
* *Nguồn (Sources):* Tự động (Automatic).
* *Ngôn ngữ & Vùng:* Tất cả (All).
* *Số lượng (How many):* Tất cả kết quả (All results).


4. Nhập email nhận thông báo của bạn và bấm **Tạo thông báo** (Create Alert).

### Tiêu chí đánh giá kết quả:

* **Đạt:** Thiết lập thành công và chụp được màn hình danh sách các bộ lọc cảnh báo bảo mật đang hoạt động trong giao diện Google Alerts.
* **Xuất sắc:** Thử nghiệm kiểm chứng bằng cách tạo một từ khóa dork độc lạ hiếm gặp trên trang cá nhân của bạn, chờ Google Index và chụp lại được email thông báo tự động gửi về hộp thư đến (Inbox) của bạn để chứng minh hệ thống vận hành hoàn hảo.

---

### 📝 HƯỚNG DẪN TỰ QUẢN LÝ TIẾN ĐỘ ĐẦU RA

Sau khi hoàn thành cả 3 bài tập trên, bạn hãy gom toàn bộ ảnh chụp màn hình minh chứng kết quả và các câu lệnh dork đã viết vào một file tài liệu (Word/Markdown). Đó chính là **Milestone thành công của Ngày 3**. Hãy tự tin thực hành, giữ vững kỷ luật an toàn thông tin và không cần lo lắng nếu dính Captcha của Google — điều đó chứng tỏ bạn đang tư duy cấu trúc lệnh rất sâu đấy! Chúc bạn thực hành thành công!