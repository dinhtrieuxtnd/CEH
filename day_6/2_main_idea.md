Dưới đây là bản tóm tắt nội dung cốt lõi của bài giảng **NGÀY 6: NGHỆ THUẬT QUÉT CỔNG "TÀNG HÌNH"** được cô đọng ngắn gọn và sắp xếp theo mạch tư duy logic:

1. 🤝 **BẮT TAY TCP là nền tảng giao tiếp:** Mọi kỹ thuật quét cổng nâng cao đều dựa trên việc thao túng các cờ trạng thái (`SYN`, `ACK`, `RST`, `FIN`) trong quy trình bắt tay 3 bước của giao thức TCP để thăm dò mục tiêu.
2. 📢 **TCP CONNECT Scan gây tiếng động lớn:** Kiểu quét này hoàn tất toàn bộ quy trình kết nối nên có độ chính xác cao, nhưng lại **CỰC KỲ ỒN ÀO** vì để lại dấu vết rõ ràng trong hệ thống Log của máy chủ.
3. 🥷 **SYN Scan là vũ khí tàng hình mặc định:** Bằng cách chủ động hủy ngang kết nối bằng gói `RST` ngay khi nhận được phản hồi `SYN/ACK`, hacker có thể dò ra cổng mở mà **KHÔNG ĐỂ LẠI LOG** ở tầng ứng dụng.
4. 🎄 **BỘ BA QUÉT NGẦM đảo ngược quy trình:** Các kỹ thuật `FIN`, `Xmas`, và `Null Scan` cố ý gửi gói tin dị dạng không chứa cờ `SYN` để lợi dụng quy chuẩn phản hồi của hệ điều hành Unix/Linux nhằm lướt qua bộ lọc tường lửa.
5. 🔏 **HỆ ĐIỀU HÀNH tạo ra sự khác biệt:** Bộ ba quét ngầm (Inverse Mapping) sẽ **THẤT BẠI HOÀN TOÀN** khi đối đầu với hệ điều hành Windows do cơ chế ngăn xếp TCP/IP của Microsoft không tuân theo chuẩn RFC 793.
6. ⏱️ **ĐIỀU TỐC VÀ PHÂN MẢNH để ẩn mình:** Để vượt qua các hệ thống phát hiện xâm nhập (IDS/Firewall) hiện đại, người quét phải biết cách kéo giãn thời gian quét (`-T0` đến `-T2`) và bẻ nhỏ gói tin (`-f`).
7. 🛡️ **QUÉT CÓ TRÁCH NHIỆM là kỷ luật Mũ Trắng:** Tuyệt đối không hướng các công cụ quét cổng ra Internet công cộng khi chưa được cấp phép, vì hành vi gửi gói tin dị dạng luôn bị coi là **THĂM DÒ CÓ ÁC Ý** dưới góc độ pháp lý.

🎯 **Slogan chốt hạ tinh thần:** *"Gõ cửa đập rầm rầm chỉ làm lính gác báo động; lướt đi như bóng ma mới là bậc thầy trinh sát!"*