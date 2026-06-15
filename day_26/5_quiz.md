Dưới đây là bộ quiz trắc nghiệm gồm 10 câu hỏi phân hóa theo đúng các mức độ tư duy (Nhận biết, Thông hiểu, Vận dụng) bám sát nội dung **NGÀY 26: TUYỆT KỸ SQL INJECTION CƠ BẢN** và cấu trúc chuẩn của tài liệu CEH v11.

Bộ câu hỏi được định dạng rõ ràng, chuyên sâu, sẵn sàng để thầy/cô copy trực tiếp lên Google Forms, Quizizz hoặc in ấn làm bài kiểm tra trên lớp.

---

### PHẦN BÀI TRẮC NGHIỆM (DÀNH CHO HỌC VIÊN)

#### MỨC ĐỘ 1: NHẬN BIẾT (4 CÂU KHẢO SÁT GHI NHỚ)

**Câu 1:** Bản chất cốt lõi của lỗ hổng bảo mật SQL Injection (SQLi) thuộc về phân loại rủi ro nào sau đây trên ứng dụng ứng dụng web?

* A. Lỗi cấu hình sai quyền hạn của hệ điều hành (Security Misconfiguration).
* B. Lỗi không kiểm soát và lọc dữ liệu đầu vào từ phía người dùng (Input Validation Failure).
* C. Lỗi sử dụng các thuật toán mã hóa dữ liệu cũ lỗi thời (Broken Cryptography).
* D. Lỗi rò rỉ phiên làm việc do quản lý Token yếu kém (Session Management Leak).

**Câu 2:** Trong ngôn ngữ truy vấn cấu trúc SQL tiêu chuẩn, cặp ký tự nào sau đây thường được sử dụng để bắt đầu một đoạn chú thích (comment) nhằm vô hiệu hóa các mệnh đề kiểm tra phía sau?

* A. `//`
* B. `/*`
* C. `--`
* D. `#`

**Câu 3:** Giải pháp kỹ thuật nào sau đây được cộng đồng bảo mật quốc tế đánh giá là biện pháp triệt để nhất để ngăn chặn hoàn toàn lỗ hổng SQL Injection?

* A. Cài đặt chứng chỉ SSL/TLS (HTTPS) cho toàn bộ hệ thống tên miền.
* B. Viết mã Javascript để chặn người dùng gõ dấu nháy đơn (') ngay tại trình duyệt.
* C. Sử dụng kỹ thuật truy vấn tham số hóa (Parameterized Queries / Prepared Statements).
* D. Chuyển đổi toàn bộ cơ sở dữ liệu sang dạng không cấu hình NoSQL (như MongoDB).

**Câu 4:** Thao tác kiểm thử thủ công đầu tiên và phổ biến nhất để một chuyên gia kiểm thử (Penetrator) nghi ngờ một trường dữ liệu (Input field) bị dính lỗi SQLi Classic là gì?

* A. Nhập một chuỗi ký tự mật khẩu dài hơn 50 ký tự.
* B. Chèn một dấu nháy đơn (`'`) hoặc nháy kép (`"`) để quan sát phản hồi lỗi hệ thống.
* C. Nhấn liên tục phím F5 để làm nghẽn băng thông của cơ sở dữ liệu.
* D. Đổi địa chỉ IP sang một quốc gia khác bằng công cụ VPN.

---

#### MỨC ĐỘ 2: THÔNG HIỂU (3 CÂU KIỂM TRA BẢN CHẤT)

**Câu 5:** Khi một hacker chèn chuỗi ký tự `' OR 1=1 --` vào ô đăng nhập Username, tại sao cơ sở dữ liệu lại cho phép đăng nhập thành công mà không cần kiểm tra Password?

* A. Vì biểu thức logic toán học `1=1` luôn trả về kết quả Đúng (True), biến đổi toàn bộ mệnh đề kiểm tra điều kiện `WHERE` thành Đúng, kết hợp dấu `--` xóa bỏ vế kiểm tra mật khẩu.
* B. Vì hệ quản trị cơ sở dữ liệu bị crash hệ thống và tự động reset tài khoản về chế độ mặc định của Admin.
* C. Vì ký tự `OR` có tính năng ghi đè và xóa sạch mọi tài khoản đang lưu trữ trong bảng `users`.
* D. Vì chuỗi ký tự này kích hoạt tính năng đăng nhập khẩn cấp (Backdoor) được tích hợp sẵn trong nhân hệ điều hành.

**Câu 6:** Điểm khác biệt lớn nhất giữa cuộc tấn công SQL Injection thông thường (In-band/Classic) và cuộc tấn công SQL Injection "Mù" (Blind SQL Injection) là gì?

* A. Blind SQLi chỉ tấn công được vào các hệ thống website chạy trên mạng nội bộ (Intranet).
* B. Blind SQLi không hiển thị trực tiếp dữ liệu hoặc thông báo lỗi cú pháp lên màn hình giao diện web, buộc hacker phải suy luận Đúng/Sai dựa trên hành vi thay đổi hoặc độ trễ thời gian của trang web.
* C. Blind SQLi yêu cầu hacker phải có quyền truy cập vật lý trực tiếp vào phòng máy chủ dữ liệu.
* D. Blind SQLi chỉ xảy ra khi lập trình viên đã mã hóa thành công 100% dữ liệu đầu vào.

**Câu 7:** Tại sao cơ chế phòng thủ SQL Injection bằng chiến lược "Danh sách đen" (Blacklist - cố gắng viết code tìm lọc và xóa bỏ các từ khóa nguy hiểm như `SELECT`, `UNION`, `DROP`) lại thường bị hacker bypass dễ dàng?

* A. Vì hacker có thể thay đổi cách viết bằng cách xen kẽ chữ hoa chữ thường (ví dụ: `sElEcT`) hoặc lồng từ khóa (ví dụ: `UNIUNIONON`) để vượt qua bộ lọc đơn giản.
* B. Vì các từ khóa SQL tự động thay đổi cấu trúc mã hóa liên tục sau mỗi 5 giây.
* C. Vì bộ lọc Blacklist chỉ có tác dụng bảo vệ máy chủ ứng dụng web chứ không có tác dụng với Database máy chủ.
* D. Vì giao thức mạng HTTP tự động chặn mọi bộ lọc dạng văn bản thô truyền qua gói tin.

---

#### MỨC ĐỘ 3: VẬN DỤNG TÌNH HUỐNG (3 CÂU THỰC CHIẾN)

**Câu 8:** Một lập trình viên viết đoạn mã xử lý tìm kiếm sản phẩm bằng ngôn ngữ PHP như sau:
`$query = "SELECT * FROM products WHERE name = '" . $_POST['search'] . "'";`
Đoạn mã này đang mắc phải sai lầm chiến thuật nào và giải pháp khắc phục chuẩn xác nhất là gì?

* A. Sai lầm do dùng sai tên bảng; khắc phục bằng cách đổi tên bảng từ `products` thành `tbl_products`.
* B. Sai lầm do sử dụng phương pháp cộng chuỗi (String Concatenation) trực tiếp với dữ liệu người dùng; khắc phục bằng cách sử dụng PDO Prepared Statements gắn tham số đại diện `?`.
* C. Sai lầm do truyền dữ liệu qua phương thức `POST`; khắc phục bằng cách đổi toàn bộ cổng truyền sang phương thức `GET`.
* D. Sai lầm do chưa bật tường lửa Windows Defender trên máy chủ; khắc phục bằng cách kích hoạt bản quyền phần mềm diệt virus.

**Câu 9:** Trong một đợt đánh giá an ninh mạng, em phát hiện ra khi nhập dấu nháy đơn (`'`) vào thanh URL tìm kiếm bài viết, trang web không hiện dữ liệu gì lạ nhưng tốc độ phản hồi của trang web bị chậm đi chính xác 5 giây so với bình thường. Hệ thống này có khả năng cao đang dính phải loại lỗ hổng nào và em nên dùng công cụ nào trong CEH để khai thác tự động?

* A. Lỗi Stored XSS; sử dụng công cụ mã nguồn mở BeEF để khai thác.
* B. Lỗi Time-based Blind SQL Injection; sử dụng công cụ tự động hóa **SQLMap** kết hợp switch `--time-sec`.
* C. Lỗi ARP Poisoning mạng nội bộ; sử dụng công cụ nghe lén Wireshark để bắt gói tin.
* D. Hệ thống hoàn toàn an toàn, độ trễ 5 giây hoàn toàn là do sự cố nghẽn đường truyền cáp quang biển quốc tế.

**Câu 10:** Ứng dụng Web của một ngân hàng sử dụng kiến trúc ORM hiện đại (như Hibernate/Entity Framework) tự động chống SQLi. Tuy nhiên, ở tính năng báo cáo doanh thu cuối năm, lập trình viên do muốn tối ưu tốc độ nên đã tự viết một câu lệnh truy vấn thô (Raw Query) dạng cộng chuỗi để lọc ngày tháng. Dưới góc nhìn của một chuyên gia bảo mật (Security Auditor), em đánh giá hệ thống này như thế nào?

* A. Hệ thống an toàn tuyệt đối 100% vì nền tảng ORM cốt lõi đã bao bọc và triệt tiêu mọi hành vi chèn lệnh lạ từ bên ngoài.
* B. Hệ thống vẫn có nguy cơ bị tấn công SQLi cục bộ ngay tại tính năng báo cáo doanh thu, vì việc dùng lệnh thô cộng chuỗi đã phá vỡ cơ chế tham số hóa bảo vệ của ORM.
* C. Hệ thống chỉ bị đe dọa nếu hacker biết được mật khẩu gốc của tài khoản quản trị hệ thống cơ sở dữ liệu `sa`.
* D. Tính năng này chỉ nguy hiểm nếu ứng dụng web được triển khai trên hạ tầng điện toán đám mây công cộng (Public Cloud).

---

### PHẦN II: ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

**Câu 1: Chọn B**

* *TẠI SAO ĐÚNG:* SQL Injection xuất phát từ việc mã nguồn ứng dụng web nhận dữ liệu đầu vào từ người dùng (ô nhập liệu, url) nhưng không thực hiện lọc, kiểm tra (Validation) hoặc phân tách dữ liệu thô, dẫn tới việc cơ sở dữ liệu thực thi dữ liệu đó như một mệnh lệnh.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* A, C, D là các phân loại lỗi bảo mật khác hoàn toàn (lỗi cấu hình hệ thống, lỗi mật mã, lỗi quản lý phiên làm việc), không phải nguyên nhân sinh ra SQLi.

**Câu 2: Chọn C**

* *TẠI SAO ĐÚNG:* Trong cú pháp ngôn ngữ SQL tiêu chuẩn (Standard SQL), chuỗi ký tự `--` (hai dấu gạch ngang) báo hiệu phần chú thích (comment). Mọi thứ đứng sau nó trong dòng lệnh sẽ bị trình phân giải cơ sở dữ liệu bỏ qua không thực thi.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* A (`//`) và B (`/*`) thuộc cú pháp chú thích của các ngôn ngữ lập trình như C++, Java, PHP. D (`#`) chỉ dùng được ở một số hệ quản trị cơ sở dữ liệu tùy biến như MySQL chứ không phải tiêu chuẩn chung cho mọi Database (như Oracle, SQL Server).

**Câu 3: Chọn C**

* *TẠI SAO ĐÚNG:* Kỹ thuật truy vấn tham số hóa (Parameterized Queries / Prepared Statements) ép buộc cơ sở dữ liệu phải biên dịch cấu trúc câu lệnh SQL trước, sau đó mới đưa dữ liệu người dùng vào các vị trí tham số đại diện (`?` hoặc `:parameter`). Điều này khiến dữ liệu của hacker dù có chứa mã độc cũng chỉ được xử lý như một chuỗi văn bản thô vô hại.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* A chỉ mã hóa đường truyền chống nghe lén thông tin, không chống được lỗi logic xử lý. B dễ bị hacker vượt qua (bypass) bằng cách dùng Burp Suite sửa gói tin sau khi qua trình duyệt. D (NoSQL) vẫn có nguy cơ dính lỗi NoSQL Injection nếu lập trình viên nối chuỗi lệnh truy vấn logic không an toàn.

**Câu 4: Chọn B**

* *TẠI SAO ĐÚNG:* Khi chèn dấu nháy đơn (`'`), nếu ứng dụng không lọc dữ liệu, dấu nháy này sẽ làm gãy cấu trúc đóng/mở chuỗi nguyên bản của câu lệnh SQL nội bộ, khiến Database trả về lỗi cú pháp (*SQL Syntax Error*) hoặc lỗi trang trắng, báo hiệu hệ thống có kẽ hở SQLi Classic.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* A, C, D không làm thay đổi hay kiểm tra cấu trúc cú pháp của câu lệnh SQL ở tầng back-end.

**Câu 5: Chọn A**

* *TẠI SAO ĐÚNG:* Phép toán logic `OR 1=1` luôn có kết quả là Đúng (True). Trong mệnh đề điều kiện `WHERE [Điều kiện đúng/sai] OR [Đúng]`, toàn bộ biểu thức logic sẽ bị ép kết quả thành Đúng, kết hợp dấu `--` loại bỏ vế kiểm tra Password, giúp hacker đăng nhập trực tiếp mà không cần mật khẩu.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* B, C, D đều mô tả sai lệch bản chất kỹ thuật logic của toán tử SQL, mang tính suy đoán mơ hồ không có cơ sở khoa học.

**Câu 6: Chọn B**

* *TẠI SAO ĐÚNG:* Blind SQLi xảy ra khi nhà phát triển ứng dụng đã tắt tính năng hiển thị lỗi cơ sở dữ liệu ra màn hình. Hacker không nhìn thấy lỗi cú pháp hay dữ liệu trả về trực tiếp, buộc phải áp dụng các câu hỏi logic Đúng/Sai để dò đoán từng ký tự thông tin dữ liệu (qua phản hồi trang hoặc qua hàm tạo độ trễ thời gian như `SLEEP()`).
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* A sai vì Blind SQLi khai thác được trên toàn bộ Internet. C sai vì cuộc tấn công này hoàn toàn thực hiện từ xa qua mạng (Remote). D sai vì nếu dữ liệu đã được bảo mật lọc chuẩn 100% thì không thể khai thác được nữa.

**Câu 7: Chọn A**

* *TẠI SAO ĐÚNG:* Kỹ thuật Blacklist rất lỏng lẻo. Nếu bộ lọc chỉ tìm từ khóa chính xác chữ thường `select`, hacker viết hoa thành `sElEcT` sẽ lọt qua. Hoặc nếu bộ lọc tự động xóa chữ `SELECT` một lần, hacker viết lồng chữ thành `SELSELECTECT`, sau khi chữ ở giữa bị xóa, hai nửa còn lại tự động chập lại thành chữ `SELECT` hoàn chỉnh truyền vào câu lệnh.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* B sai vì từ khóa SQL là cố định theo chuẩn ngôn ngữ. C sai vì bộ lọc viết ở mã nguồn (Web server) nhưng tác động trực tiếp đến việc định hình câu lệnh gửi xuống Database. D sai vì HTTP chỉ làm nhiệm vụ trung chuyển gói tin mạng, không can thiệp bộ lọc logic phần mềm.

**Câu 8: Chọn B**

* *TẠI SAO ĐÚNG:* Đoạn code sử dụng dấu chấm `.` để thực hiện cộng chuỗi trực tiếp dữ liệu thô từ biến siêu cấu trúc `$_POST['search']` vào câu lệnh truy vấn. Giải pháp khắc phục chuẩn mực nhất là chuyển đổi sang dùng Prepared Statements của PDO để tham số hóa trường dữ liệu tìm kiếm.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* A sai vì tên bảng không giải quyết được lỗ hổng bảo mật đầu vào. C sai vì đổi phương thức truyền tin không làm thay đổi bản chất lỗi nối chuỗi ở Back-end. D sai vì phần mềm diệt virus trên OS không thể can thiệp xử lý lỗi logic lập trình của ứng dụng web.

**Câu 9: Chọn B**

* *TẠI SAO ĐÚNG:* Tình huống phản hồi chậm chính xác 5 giây sau khi nhập ký tự đặc biệt là dấu hiệu đặc trưng của lỗ hổng **Time-based Blind SQL Injection** (Hacker đã chèn thành công lệnh ép cơ sở dữ liệu tạm dừng hoạt động trong vài giây để kiểm tra điều kiện). Công cụ tiêu chuẩn hàng đầu thế giới để quét tự động lỗ hổng này là **SQLMap**.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* A sai vì đây là lỗi ứng dụng cơ sở dữ liệu, không phải lỗi thực thi mã kịch bản XSS ở trình duyệt khách. C sai vì đây không phải hành vi thao túng giao thức mạng tầng thấp. D thể hiện tư duy chủ quan, thiếu cảnh giác của nhân viên an ninh mạng.

**Câu 10: Chọn B**

* *TẠI SAO ĐÚNG:* Nguyên tắc an toàn thông tin tối thượng: Hệ thống chỉ an toàn tại những nơi được cấu hình bảo vệ. Việc ứng dụng sử dụng ORM ở 99 tính năng khác nhưng lại tự viết mã lệnh thô (Raw Query) nối chuỗi ở tính năng báo cáo doanh thu sẽ biến tính năng này thành một tử huyệt bảo mật, hacker hoàn toàn có thể tận dụng khe hở này để khai thác SQLi tấn công toàn bộ Database.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SẠI:* A chủ quan, sai bản chất bảo mật theo chiều sâu. C sai vì SQLi có thể giúp hacker truy vấn dữ liệu mà không cần biết mật khẩu của tài khoản `sa`. D sai vì lỗ hổng mã nguồn xuất hiện ở bất kỳ môi trường máy chủ nào (On-premise hay Cloud).