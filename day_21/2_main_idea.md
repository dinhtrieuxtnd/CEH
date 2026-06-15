Dưới đây là tóm tắt cốt lõi của bài giảng **NGÀY 21: CƯỚP PHIÊN LÀM VIỆC (SESSION HIJACKING)** ngắn gọn, súc tích và dễ nhớ nhất dành cho em:

1. 🍪 **BẢN CHẤT CỦA PHIÊN:** Giao thức HTTP không lưu trạng thái nên máy chủ phải dùng **SESSION ID** (lưu trong Cookie) làm "thẻ nhận diện" quyền đăng nhập của từng người dùng.
2. 🥷 **ĐỊNH NGHĨA ĐƠN GIẢN:** **SESSION HIJACKING** là hành vi độc hại đánh cắp "thẻ nhận diện" này để chiếm đoạt tài khoản đang hoạt động mà hoàn toàn không cần biết mật khẩu.
3. 🌐 **TẦNG ỨNG DỤNG:** Kẻ tấn công tập trung đánh cắp chuỗi **COOKIE** lưu tại trình duyệt của nạn nhân thông qua các kỹ thuật như dự đoán mã, cố định phiên hoặc tấn công XSS.
4. ⚙️ **TẦNG MẠNG:** Kẻ tấn công can thiệp sâu vào giao thức TCP bằng cách dự đoán số thứ tự gói tin **SEQUENCE NUMBER** nhằm chèn mã độc hại trước khi nạn nhân kịp phản hồi.
5. 🛡️ **LÁ CHẮN COOKIE:** Phòng thủ ứng dụng Web tối ưu bằng cách bắt buộc bật các cờ bảo mật **HTTPONLY** (chống XSS độc hại) và **SECURE** (chỉ truyền qua HTTPS mã hóa).
6. 🔒 **QUẢN LÝ THÔNG MINH:** Hệ thống cần thiết lập thời gian **TIMEOUT** ngắn, hủy phiên ngay khi đăng xuất và liên tục kiểm tra dấu vân tay trình duyệt (**FINGERPRINTING**) để phát hiện bất thường.

---

> 💡 **CÂU CHỐT HẠ:** *"Mật khẩu mạnh đến đâu cũng vô nghĩa nếu bạn để Hacker cầm nhầm chiếc Vé thông hành!"*