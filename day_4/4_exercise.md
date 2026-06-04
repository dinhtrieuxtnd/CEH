Chào bạn! Với tư cách là một chuyên gia đào tạo theo phương pháp **"Action-Based Learning" (Học qua hành động)**, tôi hiểu rằng lý thuyết về An ninh mạng sẽ vô nghĩa nếu bạn không tự tay gõ lệnh và giải quyết các bài toán thực tế.

Dưới đây là bộ 3 bài tập thực hành thiết kế riêng cho kiến thức **NGÀY 4: Truy Tìm Dấu Vết Số (Whois & DNS)**. Bộ bài tập này gắn liền với các tình huống công việc quen thuộc (Kinh doanh, Giảng dạy, Văn phòng) giúp bạn tự làm, tự đánh giá mà không cần giáo viên đứng cạnh thúc giục.

---

### BÀI TẬP 1: MỨC ĐỘ CƠ BẢN (Mức độ: ⭐)

#### 📌 Chủ đề: Thẩm định đối tác Kinh doanh qua dấu vết Whois

* **Thời gian hoàn thành dự kiến:** 15 phút.
* **Bối cảnh thực tế (Kinh doanh):** Bạn là một nhân viên Phát triển Kinh doanh (BD). Công ty của bạn nhận được lời mời hợp tác từ một đại lý phân phối tự xưng là *"đã có 10 năm uy tín trên thị trường châu Á"* với trang web có tên miền `mục_tiêu_kinh_doanh.com` (Hãy chọn 1 tên miền của một doanh nghiệp bất kỳ hoặc một trang tin tức để thực hành). Giám đốc yêu cầu bạn thẩm định nhanh tính xác thực của thông tin này trước khi lên lịch họp trực tiếp.

#### 🎯 Yêu cầu cụ thể:

1. Sử dụng công cụ tra cứu Whois trực tuyến để trích xuất hồ sơ pháp lý của tên miền đó.
2. Xác định chính xác 3 thông tin: **Nhà đăng ký (Registrar)**, **Ngày khởi tạo tên miền (Creation Date)**, và tên miền còn bao lâu thì **Hết hạn (Expiry Date)**.
3. Đối chiếu xem ngày khởi tạo tên miền có trùng khớp với lời tuyên bố "10 năm uy tín" của đối tác hay không.

#### 💡 Gợi ý cách làm:

* **Cách làm:** Truy cập vào một trong các trang web Whois miễn phí: `https://whois.domaintools.com` hoặc `https://www.whois.com`. Gõ tên miền bạn muốn kiểm tra vào ô tìm kiếm và nhấn Enter.
* **Mẹo đọc dữ liệu:** Tìm các dòng chữ tiếng Anh kỹ thuật sau:
* *Registrar:* Tên đơn vị bán tên miền.
* *Creation Date / Registered On:* Ngày đăng ký.
* *Registry Expiry Date / Expires On:* Ngày hết hạn.



#### ✅ Tiêu chí đánh giá kết quả:

* [ ] **Đạt yêu cầu:** Chụp lại được ảnh màn hình chứa các thông tin cốt lõi (Registrar, Creation Date, Expiry Date) và đưa ra kết luận: Đối tác nói thật hay nói dối (Ví dụ: Nếu họ bảo có 10 năm kinh nghiệm nhưng tên miền mới tạo được 6 tháng $\rightarrow$ Có dấu hiệu lừa đảo nguy hiểm).

---

### BÀI TẬP 2: MỨC ĐỘ TRUNG BÌNH (Mức độ: ⭐⭐)

#### 📌 Chủ đề: Kiểm tra "Bản đồ số" DNS phục vụ hạ tầng Giáo dục trực tuyến

* **Thời gian hoàn thành dự kiến:** 30 phút.
* **Bối cảnh thực tế (Giảng dạy / Quản lý):** Bạn là cán bộ kỹ thuật hoặc giảng viên phụ trách CNTT của một trường học/trung tâm đào tạo. Gần đây, giảng viên và học sinh liên tục phản ánh hệ thống học trực tuyến (LMS) của trường hoạt động chập chờn, lúc gửi được email thông báo bài tập, lúc không. Bạn cần truy vấn hệ thống DNS của trường (`tên_trường_bạn.edu.vn` hoặc dùng tên miền `ucl.ac.uk` của Đại học London để thử nghiệm) để xem máy chủ web và hệ thống mail đang được cấu hình cấu trúc như thế nào.

#### 🎯 Yêu cầu cụ thể:

Sử dụng dòng lệnh (CLI) trên máy tính của bạn để tìm ra:

1. Địa chỉ IPv4 thực tế của máy chủ Web (Tìm bản ghi **A**).
2. Hệ thống quản lý Email của trường đang dùng giải pháp của ai (Tìm bản ghi **MX**).
3. Đơn vị nào đang giữ quyền quản lý danh bạ DNS này (Tìm bản ghi **NS**).

#### 💡 Gợi ý cách làm:

* **Môi trường:** * Nếu dùng **Windows**: Bấm phím tổ hợp `Windows + R`, gõ `cmd` rồi nhấn Enter.
* Nếu dùng **Linux/macOS**: Mở ứng dụng `Terminal`.


* **Cú pháp câu lệnh thực hiện:**
* *Tìm bản ghi A:* Gõ `nslookup ten_mien.com`
* *Tìm bản ghi MX:* Gõ `nslookup -type=mx ten_mien.com` (Trên Windows) hoặc `dig ten_mien.com MX` (Trên Linux).
* *Tìm bản ghi NS:* Gõ `nslookup -type=ns ten_mien.com` (Trên Windows) hoặc `dig ten_mien.com NS` (Trên Linux).



#### ✅ Tiêu chí đánh giá kết quả:

* [ ] **Đạt yêu cầu:** Xuất ra dòng text hoặc ảnh chụp màn hình terminal hiển thị rõ ràng:
* Dải IP dạng `X.X.X.X` của bản ghi A.
* Tên máy chủ mail (Ví dụ: nếu kết quả chứa `google.com` nghĩa là trường đang thuê Gmail doanh nghiệp, nếu chứa IP riêng nghĩa là trường tự dựng mail server).
* Danh sách Name Server (NS).



---

### BÀI TẬP 3: MỨC ĐỘ NÂNG CAO (Mức độ: ⭐⭐⭐)

#### 📌 Chủ đề: Điều tra lộ trình gói tin và Đánh giá an toàn Email văn phòng chống giả mạo

* **Thời gian hoàn thành dự kiến:** 45 phút.
* **Bối cảnh thực tế (Hành chính văn phòng / IT Doanh nghiệp):** Cơ quan văn phòng của bạn vừa bị một hacker gửi thư giả mạo danh nghĩa Tổng giám đốc để lừa kế toán chuyển tiền (Tấn công Phishing). Với vai trò phụ trách an toàn hệ thống, bạn cần thực hiện hai nhiệm vụ: Một là kiểm tra xem cấu hình Email văn phòng của công ty (`tên_công_ty_bạn.com`) có cấu hình lá chắn bảo mật chống giả mạo hay chưa; Hai là dò tìm xem con đường gói tin từ máy bạn tới máy chủ công ty phải đi qua những router thuộc nhà mạng nào.

#### 🎯 Yêu cầu cụ thể:

1. Truy vấn bản ghi cấu hình đặc biệt mang tên **TXT** của tên miền công ty để trích xuất chuỗi mã hóa chống giả mạo email (**SPF**). Phân tích chuỗi đó xem nó cho phép những IP nào được quyền gửi mail thay mặt công ty.
2. Sử dụng công cụ dò đường để theo vết hành trình gói tin tới máy chủ, xác định xem gói tin có bị đi vòng qua các quốc gia khác hay không và tìm ra điểm bắt đầu bị chặn tường lửa (ký hiệu bằng dấu `* * *`).

#### 💡 Gợi ý cách làm:

* **Nhiệm vụ 1 (Săn tìm SPF):** * Dùng lệnh: `nslookup -type=txt tên_công_ty.com` hoặc dùng công cụ web chuyên sâu `https://mxtoolbox.com` (gõ tên miền vào mục SPF Record).
* *Cách đọc hiểu kết quả:* Tìm dòng có chứa kí tự `v=spf1 ...`. Nếu kết quả trống rỗng hoặc báo *No record found*, hệ thống email văn phòng của bạn đang cực kỳ nguy hiểm, ai cũng có thể giả mạo đuôi email của công ty bạn để đi lừa đảo!


* **Nhiệm vụ 2 (Dò tuyến đường):**
* Trên **Windows**: Gõ lệnh `tracert tên_công_ty.com`
* On **Linux/macOS**: Gõ lệnh `traceroute tên_công_ty.com`
* *Cách phân tích:* Quan sát danh sách các chặng (Hop). Tên của hop thường chứa tên nhà mạng (Ví dụ: `viettel.vn`, `fpt.vn`). Nếu thấy dải IP chuyển sang dạng ẩn danh `* * *`, ghi chú lại chặng đó vì đó chính là vị trí đặt thiết bị bảo mật/tường lửa chặn gói tin kiểm thám.



#### ✅ Tiêu chí đánh giá kết quả:

* [ ] **Đạt yêu cầu:** Viết được một báo cáo ngắn gọn (khoảng 10 dòng) gồm 2 ý:
1. Chuỗi SPF của công ty là gì? Hệ thống email hiện tại an toàn hay không an toàn?
2. Tổng số chặng (Hops) mà gói tin phải đi qua để tới đích là bao nhiêu chặng? Có chặng nào bị chặn bởi tường lửa không?



---

### 💡 LỜI KHUYÊN TỪ CHUYÊN GIA ĐÀO TẠO

Hãy chuẩn bị sẵn một file Notepad hoặc Word có tên là `Bao_Cao_Trinh_Sat_Ngay_4.txt`. Cứ làm xong câu lệnh nào, bạn hãy **Copy - Paste** kết quả thô từ terminal vào file đó. Việc lưu trữ dữ liệu một cách khoa học ngay từ những bài tập đầu tiên chính là thói quen chuyên nghiệp phân biệt giữa một **Chuyên gia kiểm thử thực thụ (Ethical Hacker)** và một người xem dạo!

Chúc bạn hoàn thành xuất sắc chuỗi thử thách thực chiến này!