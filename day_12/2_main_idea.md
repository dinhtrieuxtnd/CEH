Dưới đây là tóm tắt súc tích 6 ý chính cốt lõi từ bài giảng **NGÀY 12: "Bẻ Khóa" Mật Khẩu và Cơ Chế Bảo Vệ Hệ Thống**:

1. 🤐 **MÃ BĂM MỘT CHIỀU (PASSWORD HASHING):** Hệ điều hành không bao giờ lưu mật khẩu rõ mà chuyển thành chuỗi mã băm một chiều không thể dịch ngược toán học.
2. 🗄️ **NƠI LƯU TRỮ HASH:** Windows giấu mã băm trong file **SAM** (`C:\Windows\System32\config\SAM`), còn Linux cô lập chúng trong file **SHADOW** (`/etc/shadow`).
3. 🔨 **BRUTE-FORCE & DICTIONARY ATTACK:** Tấn công **VÉT CẠN (Brute-Force)** thử mọi tổ hợp ký tự có thể, trong khi tấn công **TỪ ĐIỂN (Dictionary)** quét nhanh qua danh sách mật khẩu thông dụng.
4. 🌈 **RAINBOW TABLE & KỸ THUẬT SALTING:** Bảng cầu vồng giúp bẻ khóa siêu tốc bằng dữ liệu băm sẵn, nhưng sẽ bị vô hiệu hóa hoàn toàn nếu hệ thống thêm chuỗi ký tự ngẫu nhiên vào mật khẩu trước khi băm (**SALTING**).
5. 🛡️ **CHÍNH SÁCH PHÒNG THỦ (PASSWORD POLICY):** Quản trị viên cần bắt buộc mật khẩu dài dạng cụm từ (**PASSPHRASE** trên 12 ký tự) và bật tính năng khóa tài khoản khi nhập sai liên tiếp (**ACCOUNT LOCKOUT**).
6. 🔐 **XÁC THỰC HAI YẾU TỐ (2FA/MFA):** Đây là lá chắn tối thượng, giúp bảo vệ tài khoản ngay cả khi hacker đã sở hữu hoặc bẻ khóa thành công mật khẩu của bạn.

---

> 💡 **CÂU CHỐT HẠ:** *"Hacker không hack thuật toán, chúng hack sự lười biếng của con người – Mật khẩu dài kết hợp MFA chính là chiếc khóa vạn năng vô hiệu mọi cuộc tấn công!"*