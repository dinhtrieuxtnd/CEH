Dưới đây là bản tóm tắt cốt lõi của bài giảng **NGÀY 17: "Nghe lén" Lưu Lượng Mạng (Sniffing Concepts)** dành cho bạn:

1. 🎛️ **PROMISCUOUS MODE LÀ CHÌA KHÓA**: Mặc định card mạng chỉ nhận dữ liệu gửi đích danh cho nó, nhưng khi bật CHẾ ĐỘ HỖN TẠP (Promiscuous Mode), nó sẽ chấp nhận và xử lý toàn bộ gói tin chạy qua đường truyền mạng.
2. 🔌 **PASSIVE SNIFFING LÀ VÔ HÌNH**: Diễn ra trong môi trường mạng cũ dùng HUB, kẻ tấn công chỉ cần "ngồi im bắt gói tin" đổ về cổng của mình nên cực kỳ THỤ ĐỘNG và rất khó bị phát hiện.
3. ⚡ **ACTIVE SNIFFING LÀ CHỦ ĐỘNG**: Diễn ra trong hạ tầng mạng hiện đại dùng SWITCH, buộc hacker phải thực hiện các kỹ thuật tấn công (như đầu độc ARP, ngập lụt bảng MAC) để ÉP dữ liệu của người khác chuyển hướng sang máy mình.
4. 🧐 **CÔNG CỤ NHỊ NGUYÊN WIRESHARK**: Phần mềm rà quét gói tin này là vũ khí nguy hiểm trong tay hacker để ăn cắp cookie, mật khẩu, nhưng lại là TRỢ THỦ ĐẮC LỰC của quản trị viên để giám sát mạng và phát hiện mã độc.
5. 🛡️ **MÃ HÓA LÀ LÁ CHẮN**: Biện pháp phòng thủ tối ưu nhất là triệt tiêu các giao thức truyền dữ liệu dạng văn bản rõ (Plaintext) đời cũ để NÂNG CẤP LÊN CÁC PHIÊN BẢN MÃ HÓA an toàn như HTTPS, SSH, SFTP.
6. 🌐 **BẢO VỆ KHI DÙNG WI-FI CÔNG CỘNG**: Đừng lầm tưởng Wi-Fi có mật khẩu là an toàn, khi dùng mạng chung hãy luôn LUÔN BẬT VPN nhằm tạo đường ống mã hóa biệt lập bảo vệ dữ liệu trước các đòn nghe lén.
7. 🚫 **TUÂN THỦ CHÍNH SÁCH LAB**: Tuyệt đối không bật tính năng nghe lén bừa bãi trên mạng doanh nghiệp vì hệ thống SOC/IDS sẽ cảnh báo ngay lập tức, hãy CHỈ THỰC HÀNH TRONG MÔI TRƯỜNG ẢO (Sandbox/Host-only).

🎯 **Slogan chốt hạ ngày 17:** *"Dữ liệu không mã hóa giống như lời thì thầm giữa đám đông. Muốn an toàn, hãy biến thông tin thành mật mã trước khi gửi nó vào không trung!"*