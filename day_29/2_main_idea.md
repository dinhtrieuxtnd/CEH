Dưới đây là bản tóm tắt cốt lõi của bài giảng **NGÀY 29: BẢO MẬT ĐIỆN TOÁN ĐÁM MÂY & ĐỒNG BỘ AN TOÀN IOT/OT** dành cho các em:

1. ☁️ **BA MÔ HÌNH CLOUD CỐT LÕI**: Dịch vụ đám mây được chia làm 3 cấp độ thuê từ thấp đến cao bao gồm hạ tầng thô **IaaS**, nền tảng lập trình **PaaS** và phần mềm mì ăn liền **SaaS**.
2. 🤝 **MÔ HÌNH TRÁCH NHIỆM CHUNG**: Nhà cung cấp dịch vụ chịu trách nhiệm bảo mật **CỦA CLOUD** (hạ tầng, vật lý), trong khi khách hàng bắt buộc phải tự cấu hình bảo mật **TRONG CLOUD** (tài khoản, dữ liệu, mã nguồn).
3. 🚨 **TỬ HUYỆT BẢO MẬT IOT**: Thiết bị thông minh IoT có phần cứng yếu nên không thể cài phần mềm diệt virus, thường xuyên bị hacker khai thác do người dùng giữ **MẬT KHẨU MẶC ĐỊNH** hoặc lười cập nhật phần mềm (Firmware).
4. ⚙️ **RỦI RO ĐẶC THÙ CỦA OT**: Hệ thống vận hành nhà máy công nghiệp OT/SCADA vốn ưu tiên tính sẵn sàng liên tục và không có cơ chế tự vệ, dễ dàng bị đánh sập khi ép buộc phải **KẾT NỐI INTERNET**.
5. 🔐 **CHIẾN THUẬT SIẾT CHẶT ĐỊNH DANH**: Bước đầu tiên trong phòng thủ Cloud là áp dụng nguyên tắc quyền hạn tối thiểu và bắt buộc kích hoạt xác thực hai lớp **MFA/2FA** cho toàn bộ tài khoản quản trị.
6. 🛡️ **PHÂN VÙNG CÁCH LY MẠNG**: Tuyệt đối không để IoT/OT dùng chung mạng với khối văn phòng, cần tạo các phân vùng mạng ảo **VLAN** riêng biệt và thiết lập vùng đệm trung gian **IDMZ** để kiểm soát dòng tin.
7. 🚫 **CẤM QUÉT CHỦ ĐỘNG TRONG OT**: Sai lầm chết người của quản trị viên là dùng công cụ quét lỗ hổng chủ động (Active Scan) vào mạng nhà máy làm treo thiết bị PLC, bắt buộc phải thay thế bằng cơ chế giám sát thụ động **PASSIVE MONITORING**.

💡 **SLOGAN CHỐT HẠ:**

> **"Đám mây có thể thuộc về nhà cung cấp, nhưng dữ liệu luôn là của chúng ta; thiết bị IoT/OT có thể nhỏ bé, nhưng hậu quả vật lý từ lỗ hổng là khôn lường!"**