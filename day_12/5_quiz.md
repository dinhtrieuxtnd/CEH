Bộ quiz 10 câu trắc nghiệm theo lộ trình CEH v11 — **NGÀY 12: "Bẻ Khóa" Mật Khẩu và Cơ Chế Bảo Vệ Hệ Thống**.

Phân bổ cấp độ: 4 Nhận biết · 3 Thông hiểu · 3 Vận dụng.

---

## PHẦN ĐỀ BÀI (DÀNH CHO HỌC VIÊN)

**Câu 1 [Nhận biết]:** Trên hệ điều hành Windows, mã băm mật khẩu (Password Hash) của các tài khoản người dùng cục bộ được lưu trữ mặc định trong file nào dưới đây?

* A. `C:\Windows\System32\drivers\etc\hosts`
* B. `C:\Windows\System32\config\SAM`
* C. `/etc/shadow`
* D. `C:\Windows\System32\config\AppEvent.evt`

---

**Câu 2 [Nhận biết]:** Thuật ngữ nào đại diện cho một cơ sở dữ liệu khổng lồ được tính toán băm sẵn trước (Pre-computed hashes) từ hàng tỷ chuỗi ký tự, giúp hacker bẻ khóa ngoại tuyến (Offline) gần như ngay lập tức?

* A. Wordlist
* B. Shadow Table
* C. Rainbow Table
* D. Active Directory

---

**Câu 3 [Nhận biết]:** Đâu là cơ chế phòng thủ tự động khóa quyền truy cập của một tài khoản trên hệ thống nếu phát hiện có hành vi nhập sai mật khẩu liên tiếp vượt quá số lần quy định?

* A. Account Lockout Policy
* B. Password History Enforce
* C. Password Complexity Policy
* D. Multi-Factor Authentication

---

**Câu 4 [Nhận biết]:** Trên hệ điều hành Linux, file nào chỉ cho phép tài khoản tối cao (`root`) mở để quản lý và kiểm tra chuỗi mã băm mã hóa một chiều mật khẩu của người dùng?

* A. `/etc/passwd`
* B. `/etc/hosts`
* C. `/etc/shadow`
* D. `/etc/security`

---

**Câu 5 [Thông hiểu]:** Bản chất cốt lõi của kỹ thuật "Salting" (Thêm muối) trong việc lưu trữ bảo mật cơ sở dữ liệu mật khẩu là gì?

* A. Chèn thêm ký tự ngẫu nhiên vào mật khẩu gốc trước khi thực hiện chạy hàm băm toán học để triệt tiêu hiệu quả của Rainbow Table.
* B. Sử dụng thuật toán đối xứng cường độ cao để có thể dịch ngược chuỗi băm trở lại văn bản rõ khi cần thiết.
* C. Mã hóa toàn bộ ổ đĩa cứng chứa file cơ sở dữ liệu để ngăn hacker sao chép ngoại tuyến.
* D. Tự động chuyển đổi mật khẩu của người dùng sang dạng chữ Leetspeak (thay ký tự bằng số hoặc ký tự đặc biệt).

---

**Câu 6 [Thông hiểu]:** Tại sao kẻ tấn công (Hacker) luôn tìm mọi cách xâm nhập vào hệ thống để lấy cắp file dữ liệu băm mật khẩu (SAM hoặc Shadow) về máy cục bộ nhằm thực hiện tấn công Offline thay vì tấn công Online trực tiếp tại trang đăng nhập?

* A. Vì tấn công Offline sử dụng thuật toán toán học để dịch ngược trực tiếp mã băm toán học sang mật khẩu rõ mà không cần thử sai.
* B. Vì các hệ thống online hiện đại đều có cơ chế Account Lockout (Khóa tài khoản), trong khi tấn công Offline trên máy cục bộ cho phép hacker thử hàng tỷ mật khẩu/giây mà không lo bị phát hiện hay khóa acc.
* C. Vì file SAM và Shadow chứa mật khẩu rõ (Plaintext) của người dùng dưới dạng văn bản không mã hóa.
* D. Vì tấn công Online yêu cầu cấu hình phần cứng máy Kali Linux của hacker mạnh gấp đôi so với tấn công Offline.

---

**Câu 7 [Thông hiểu]:** Điểm khác biệt mấu chốt nhất giữa tấn công Vét cạn (Brute-Force Attack) và tấn công Từ điển (Dictionary Attack) là gì?

* A. Brute-Force bẻ khóa online, còn Dictionary bắt buộc phải thực hiện bẻ khóa offline.
* B. Brute-Force dịch ngược hàm băm, còn Dictionary tra cứu bảng băm có sẵn.
* C. Brute-Force tự động sinh và thử lần lượt mọi tổ hợp ký tự toán học có thể có, còn Dictionary chỉ băm và thử các từ ngữ/cụm từ có sẵn trong một file danh bạ (Wordlist).
* D. Brute-Force luôn tìm ra mật khẩu nhanh hơn tấn công Dictionary trong mọi tình huống thực tế.

---

**Câu 8 [Vận dụng]:** Bạn là một quản trị viên hệ thống. Người dùng đặt một mật khẩu là `Ad@m123!`. Theo các kiến thức đã học về bẻ khóa, mật khẩu này có an toàn trước các công cụ bẻ khóa hiện đại (như Hashcat hay John the Ripper) hay không? Vì sao?

* A. Có, vì nó đã bao gồm chữ hoa, chữ thường, số, ký tự đặc biệt và sử dụng phong cách biến đổi Leetspeak rất khó đoán.
* B. Có, vì thuật toán băm NTLM/SHA-512 sẽ nhận diện đây là mật khẩu phức tạp bậc cao và tự động từ chối bẻ khóa.
* C. Không, vì mật khẩu này quá ngắn (dưới 12 ký tự) và cấu trúc biến đổi ký tự dạng Leetspeak (`a` thành `@`) dễ dàng bị bẻ gãy bởi các bộ quy tắc (Rules) tự động của công cụ hack.
* D. Không, vì hệ thống Windows sẽ tự động lưu mật khẩu này dưới dạng văn bản rõ (Plaintext) trong file hosts.

---

**Câu 9 [Vận dụng]:** Một doanh nghiệp vừa bị hacker tấn công mạng, lấy đi toàn bộ file Backup cơ sở dữ liệu người dùng chứa chuỗi mã băm mật khẩu MD5 không sử dụng cơ chế Salting. Giải pháp khẩn cấp mang tính "lá chắn cuối cùng" nào giúp doanh nghiệp bảo vệ tài khoản của khách hàng không bị thâm nhập trái phép, ngay cả khi hacker dùng Rainbow Table giải mã thành công mật khẩu của họ?

* A. Nâng cấp cấu hình RAM và CPU của máy chủ web lên gấp đôi.
* B. Kích hoạt bắt buộc Xác thực hai yếu tố (2FA/MFA) trên toàn hệ thống ngay lập tức.
* C. Chạy lệnh ẩn toàn bộ nút Đăng nhập trên giao diện web của doanh nghiệp đối với các dải IP lạ ngoài Việt Nam.
* D. Gửi email yêu cầu toàn bộ khách hàng đổi mật khẩu mới dài hơn 8 ký tự.

---

**Câu 10 [Vận dụng]:** Một nhân viên IT thiết lập chính sách bảo mật cho máy chủ doanh nghiệp. Anh ta cấu hình mật khẩu tối thiểu là 14 ký tự, bắt buộc phức tạp, nhưng lại **tắt (Disable)** chính sách "Account lockout threshold". Hệ thống này đang đối mặt với nguy cơ chí mạng nào?

* A. Hacker có thể sử dụng kỹ thuật Sniffing để nghe lén gói tin trong mạng nội bộ.
* B. Hacker có thể đứng tại trang đăng nhập Online và treo máy chạy công cụ bẻ khóa tự động (như Hydra) liên tục ngày đêm cho đến khi dò ra mật khẩu mà không bao giờ bị hệ thống chặn đứng.
* C. Máy chủ sẽ bị xung đột phần mềm và tự động xóa file `/etc/shadow`.
* D. Người dùng không thể đăng nhập được vào hệ thống do độ dài mật khẩu quá lớn làm tràn bộ nhớ đệm.

---

## PHẦN ĐÁP ÁN & GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

**Câu 1 — Đáp án: B**
- **Đúng:** SAM (Security Accounts Manager) là file cơ sở dữ liệu trên Windows chuyên lưu trữ thông tin và mã băm mật khẩu cục bộ.
- **Sai:** A là file ánh xạ IP thành tên miền; C là file lưu băm trên Linux; D là file nhật ký sự kiện hệ thống.

---

**Câu 2 — Đáp án: C**
- **Đúng:** Rainbow Table là bảng dữ liệu chứa các chuỗi băm được tính toán sẵn từ trước, giúp hacker đối chiếu cực nhanh mà không cần tốn CPU để băm lại khi hack offline.
- **Sai:** A là file văn bản chứa từ ngữ thô; B là thuật ngữ giả lập không có thật; D là dịch vụ thư mục của Windows.

---

**Câu 3 — Đáp án: A**
- **Đúng:** Account Lockout Policy chịu trách nhiệm giám sát và khóa tạm thời tài khoản nếu số lần nhập sai mật khẩu liên tiếp vượt ngưỡng cấu hình.
- **Sai:** B ép nhớ mật khẩu cũ; C ép dùng ký tự đặc biệt; D là cơ chế xác thực nhiều lớp qua điện thoại/token.

---

**Câu 4 — Đáp án: C**
- **Đúng:** File `/etc/shadow` trong Linux được thiết kế chuyên biệt để lưu trữ chuỗi mã băm bảo mật của mật khẩu người dùng và chỉ quyền `root` mới đọc được.
- **Sai:** A là file lưu thông tin tài khoản thô (mọi người dùng đều đọc được); B và D không chứa chuỗi mã băm mật khẩu.

---

**Câu 5 — Đáp án: A**
- **Đúng:** Salting là kỹ thuật chèn thêm chuỗi ngẫu nhiên (muối) vào mật khẩu trước khi băm, khiến mã băm của các mật khẩu giống nhau trở nên khác biệt, làm vô hiệu hóa bảng tra cứu Rainbow Table.
- **Sai:** B sai vì hàm băm không thể dịch ngược; C là mã hóa ổ đĩa; D là thay đổi ký tự thô.

---

**Câu 6 — Đáp án: B**
- **Đúng:** Trên môi trường Offline (máy của hacker), không có cơ chế giám sát khóa tài khoản. Máy tính có thể tận dụng sức mạnh GPU để quét thử hàng tỷ tổ hợp mã băm trong một giây.
- **Sai:** A sai vì hàm băm là một chiều (không thể dịch ngược toán học); C sai vì SAM/Shadow lưu hash chứ không lưu văn bản rõ; D không phải lý do cốt lõi của an ninh.

---

**Câu 7 — Đáp án: C**
- **Đúng:** Brute-force mò mẫm vô định theo thuật toán (a, b, c... aa, ab...), còn Dictionary dùng chiến lược thông minh quét qua một danh sách từ ngữ có sẵn do con người đặt.
- **Sai:** A và B sai bản chất quy trình kỹ thuật; D sai vì Brute-force mật khẩu dài có thể tốn hàng trăm năm, chậm hơn Dictionary rất nhiều.

---

**Câu 8 — Đáp án: C**
- **Đúng:** Các công cụ bẻ khóa như Hashcat có sẵn tính năng "Rules" tự động chạy hoán vị Leetspeak, mật khẩu dài 8 ký tự dạng này sẽ bị bẻ gãy trong vài giây bằng Dictionary Attack nâng cao.
- **Sai:** A và B chủ quan, đánh giá thấp năng lực tính toán của công cụ bẻ khóa; D sai vì Windows không lưu văn bản rõ mật khẩu tại file hosts.

---

**Câu 9 — Đáp án: B**
- **Đúng:** Cho dù hacker có dùng Rainbow Table để giải mã được chuỗi băm tìm ra mật khẩu gốc, lớp cửa thứ hai (MFA/2FA) yêu cầu mã OTP thời gian thực trên điện thoại sẽ chặn đứng hoàn toàn quyền thâm nhập trái phép.
- **Sai:** A không tăng tính bảo mật thuật toán; C chỉ chặn bề nổi giao diện ứng dụng; D vô ích vì cơ sở dữ liệu mã băm cũ không đổi đã nằm trong tay hacker.

---

**Câu 10 — Đáp án: B**
- **Đúng:** Tắt Account Lockout đồng nghĩa với việc hệ thống cho phép nhập sai vô hạn lần. Hacker có thể treo các công cụ tấn công trực tuyến (Online Brute-force) qua giao diện web/SSH liên tục mà không bao giờ bị chặn.
- **Sai:** A nhắm vào giao thức mạng rõ; C và D là các suy đoán lỗi hệ thống không logic với chính sách bảo mật mật khẩu.
