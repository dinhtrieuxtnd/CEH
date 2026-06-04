Dưới đây là bản tóm tắt cốt lõi của bài giảng **NGÀY 4: Truy Tìm Dấu Vết Số (Whois & DNS)** để bạn dễ dàng ghi nhớ và ôn tập:

1. 🕵️‍♂️ **TRINH SÁT BỊ ĐỘNG (Passive Footprinting):** Là quá trình thu thập thông tin mục tiêu hoàn toàn qua các nguồn công khai. Phương pháp này giúp hacker thu được lượng lớn dữ liệu quý giá mà không hề để lại dấu vết hay đánh động nạn nhân.
2. 🆔 **TRA CỨU WHOIS – "Chứng Minh Thư" Tên Miền:** Cung cấp thông tin đăng ký chính thức của một hệ thống, bao gồm nhà đăng ký, ngày khởi tạo và thông tin liên hệ của quản trị viên. Đây là dữ liệu gốc quan trọng để khai thác các đòn tấn công tâm lý (Social Engineering) về sau.
3. 🗂️ **BẢN GHI DNS – "Sơ Đồ Phòng Ban" Hệ Thống:** Hệ thống phân giải tên miền (DNS) lưu giữ các bản ghi cốt lõi giúp phơi bày cấu trúc hạ tầng. Trong đó, bản ghi **A** lộ diện IP máy chủ Web, còn bản ghi **MX** chỉ đích danh hệ thống máy chủ Email đang sử dụng.
4. 🛡️ **BẢN GHI NS & TXT – "Lá Chắn" Cấu Hình:** Bản ghi **NS** cho biết đơn vị đang quản lý cấu hình tên miền (như Cloudflare để ẩn IP gốc), trong khi bản ghi **TXT** chứa các tham số bảo mật email (SPF, DKIM) giúp đánh giá khả năng phòng chống thư rác của doanh nghiệp.
5. 🗺️ **TRACEROUTE – "Bản Đồ" Đường Đi Gói Tin:** Công cụ này ép các thiết bị định tuyến dọc đường phải điểm danh dựa vào chỉ số TTL. Từ đó, người kiểm thử có thể vẽ lại tuyến đường di chuyển của dữ liệu và định vị vị trí của hệ thống tường lửa (Firewall).
6. ⚠️ **BẢO MỆT CHỦ ĐỘNG – "Ẩn Mình" Trước Kẻ Địch:** Để phòng thủ, nhà quản trị cần sử dụng dịch vụ **Whois Privacy** để ẩn thông tin cá nhân nhạy cảm, đồng thời cấu hình chặn tính năng *DNS Zone Transfer* nhằm ngăn kẻ xấu tải về toàn bộ danh bạ sơ đồ mạng công ty.

---

> 💡 **Slogan chốt hạ:** *"Biết địch biết ta, trăm trận không nguy – Làm chủ thông tin trước khi bắt đầu nổ súng!"*