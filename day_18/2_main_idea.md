Dưới đây là tóm tắt cốt lõi của bài giảng **NGÀY 18: Thao túng giao thức mạng** dành cho bạn:

1. 🎯 **BẢNG MAC CỦA SWITCH**: Thiết bị Switch dựa vào bảng địa chỉ MAC để chuyển chính xác gói tin đến đúng máy nhận, đảm bảo tính riêng tư trong mạng LAN.
2. 🌊 **TẤN CÔNG MAC FLOODING**: Hacker gửi hàng loạt địa chỉ MAC giả lập nhằm làm tràn bộ nhớ Switch, ép thiết bị này rơi vào trạng thái "mất trí nhớ" và hoạt động như một Hub cũ kỹ.
3. 📡 **HẬU QUẢ PHÁT TÁN (BROADCAST)**: Khi bị tràn bảng MAC, Switch sẽ phát tán tất cả dữ liệu ra mọi cổng mạng, giúp hacker dễ dàng dùng công cụ để nghe lén toàn bộ hệ thống.
4. 🎭 **TẤN CÔNG ARP SPOOFING**: Lợi dụng điểm yếu không xác thực của giao thức ARP, hacker gửi các phản hồi giả mạo để lừa máy nạn nhân và Router, tự biến mình thành kẻ đứng giữa (MITM).
5. 🛡️ **PHÒNG THỦ BẰNG PORT SECURITY**: Cấu hình giới hạn số lượng địa chỉ MAC trên mỗi cổng Switch để ngăn chặn triệt để đòn tấn công MAC Flooding.
6. 🔍 **PHÒNG THỦ BẰNG DAI (DYNAMIC ARP INSPECTION)**: Bật tính năng DAI trên Switch doanh nghiệp để chủ động kiểm tra, đối chiếu và loại bỏ ngay lập tức các gói tin ARP giả mạo.

---

> 💡 **SLOGAN CHỐT HẠ:** "Muốn làm chủ đường truyền, phải thấu hiểu giao thức; muốn bảo mật vững thực, phải thắt chặt Tầng hai!"