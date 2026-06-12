Dưới đây là bản tóm tắt súc tích nhất cho nội dung bài giảng **NGÀY 8: Liệt Kê Tài Nguyên (Enumeration) Căn Bản**:

1. 🔍 **BẢN CHẤT ENUMERATION:** Là quá trình thiết lập kết nối chủ động đến mục tiêu để trích xuất thông tin chi tiết như tên người dùng (Usernames) và thư mục chia sẻ (Network Shares).
2. 🏷️ **ĐỊNH DANH NetBIOS:** Sử dụng chuỗi 16 ký tự để tự giới thiệu máy tính trong mạng nội bộ Windows, trong đó **KÝ TỰ THỨ 16** tiết lộ chính xác chức năng dịch vụ đang chạy (ví dụ mã `<20>` là chia sẻ file).
3. 📦 **GIAO THỨC SNMP:** Đóng vai trò như "người quản kho" mạng lưới, sẵn sàng dâng nộp toàn bộ sơ đồ và cấu hình thiết bị nếu hacker nắm được chuỗi mật khẩu mặc định **COMMUNITY STRING** (`public`/`private`).
4. 📢 **HÀNH VI ỒN ÀO:** Khác với trinh sát bị động, Enumeration tạo ra các kết nối trực tiếp, liên tục nên rất dễ bị các hệ thống giám sát an ninh (IDS/SIEM) phát hiện và **GHI LOG BÁO ĐỘNG**.
5. 🛠️ **CÔNG CỤ THỰC CHIẾN:** Luyện tập kỹ năng thông qua lệnh `nbtstat` / `net view` trên Windows để dò quét thư mục chia sẻ, hoặc dùng `snmpcheck` trên Kali Linux để thu thập thông tin cấu hình từ xa.
6. 🛡️ **TƯ DUY PHÒNG THỦ:** Luôn tuân thủ nguyên tắc **CHỈ BIẾT KHI CẦN** (Need-to-know) bằng cách vô hiệu hóa tài khoản Guest, loại bỏ quyền truy cập của nhóm `Everyone`, và nâng cấp lên phiên bản bảo mật mã hóa **SNMPv3**.

---

> 💡 **CÂU CHỐT HẠ:** *"Đừng để hệ thống của bạn 'nói quá nhiều', vì mọi thông tin lộ ra đều là vũ khí để hacker bẻ khóa!"*