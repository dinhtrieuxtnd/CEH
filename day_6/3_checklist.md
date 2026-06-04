Chào bạn! Lý thuyết mà không đi đôi với thực hành thì rất dễ rơi rụng, đặc biệt là với các kỹ thuật mạng đòi hỏi sự chính xác cao như Nmap.

Dưới đây là **Checklist hành động 24h** được thiết kế dưới dạng bảng tối ưu, sắp xếp theo tiến trình từ dễ đến khó, sẵn sàng để bạn in ra giấy (khổ A4 dọc) phục vụ cho việc tự học hoặc làm việc nhóm.

---

# 📋 CHECKLIST THỰC HÀNH 24H: NGHỆ THUẬT QUÉT CỔNG TÀNG HÌNH

* **Mục tiêu:** Làm chủ các cờ lệnh Nmap, đọc hiểu lưu lượng gói tin thực tế và kiểm chứng cơ chế tàng hình trước hệ thống phòng thủ.
* **Môi trường khuyến nghị:** Lab cô lập (Kali Linux làm máy quét, Metasploitable/Ubuntu/Windows Server làm mục tiêu).

| STT | Trạng thái | Nhiệm vụ (Làm gì) | Hướng dẫn chi tiết (Làm như thế nào) | Thời gian | Kết quả mong đợi |
| --- | --- | --- | --- | --- | --- |
| **1** | ☐ | **Cấu hình môi trường Lab an toàn** | Khởi động máy tấn công (Kali Linux) và máy mục tiêu (Linux/Windows Lab). Kiểm tra kết nối giữa 2 máy bằng lệnh `ping [IP_Muc_Tieu]` để đảm bảo thông suốt đường truyền. | 10 phút | Hai máy kết nối thành công mà không cần ra internet công cộng. |
| **2** | ☐ | **Thực thi quét "Ồn ào" (TCP Connect Scan)** | Chạy lệnh: `sudo nmap -sT -p 1-1024 [IP_Muc_Tieu]`. Quan sát cách Nmap liệt kê các cổng đang mở. | 10 phút | Nmap trả về danh sách cổng mở (Open). Giao tiếp hoàn thành đủ 3 bước của TCP Handshake. |
| **3** | ☐ | **Khai hỏa tuyệt kỹ "Nửa mở" (SYN Scan)** | Gõ lệnh mặc định của hacker: `sudo nmap -sS -v [IP_Muc_Tieu]`. So sánh tốc độ hiển thị và kết quả với Bước 2. | 10 phút | Kết quả cổng mở tương tự Bước 2 nhưng tốc độ nhanh hơn; không tạo phiên kết nối đầy đủ. |
| **4** | ☐ | **Bắt gói tin kiểm chứng lý thuyết** | 1. Mở công cụ **Wireshark** trên máy tấn công hoặc máy mục tiêu.<br>

<br>2. Lọc lưu lượng bằng từ khóa `tcp`.<br>

<br>3. Chạy lại lệnh quét SYN (`-sS`) ở Bước 3 và quan sát các cờ mạng. | 15 phút | Thấy rõ gói tin `SYN` gửi đi, mục tiêu trả về `SYN/ACK`, và máy Kali lập tức dập tắt bằng gói `RST`. |
| **5** | ☐ | **Thử nghiệm Bộ ba quét ngầm (Xmas Scan)** | Chạy lệnh quét cây thông Giáng sinh: `sudo nmap -sX [IP_Muc_Tieu_Linux]`. Theo dõi phản hồi từ hệ thống. | 10 phút | Các cổng mở/có tường lửa sẽ hiển thị trạng thái `open|filtered` do máy mục tiêu im lặng. |
| **6** | ☐ | **Kiểm chứng sự khác biệt Hệ điều hành** | Dùng lệnh FIN Scan (`-sF`) hoặc Xmas Scan (`-sX`) để quét một máy mục tiêu chạy **Windows**. | 15 phút | Tất cả các cổng trên Windows đều báo `closed` (bị đánh lừa) do Windows không tuân thủ chuẩn RFC 793. |
| **7** | ☐ | **Vượt rào phòng thủ (Điều tốc & Phân mảnh)** | Giả lập tình huống đối đầu Firewall. Bẻ nhỏ gói tin và kéo giãn thời gian bằng lệnh:<br>

<br>`sudo nmap -sS -T2 -f [IP_Muc_Tieu]` | 20 phút | Quét diễn ra chậm rãi, các mảnh gói tin (fragments) được gửi rải rác để né bộ lọc signature của IDS. |

---

## 👥 HƯỚNG DẪN DÀNH CHO NHÓM HỌC (TEAMWORK)

Nếu các bạn thực hành theo nhóm từ 2-3 người, hãy phân chia vai trò để tăng tính cọ xát thực tế:

* **Thành viên A (Vai Kẻ tấn công):** Sử dụng Kali Linux, chịu trách nhiệm thử nghiệm các cờ lệnh Nmap (`-sS`, `-sT`, `-sX`, `-f`) và thay đổi tốc độ mạng.
* **Thành viên B (Vai Người phòng thủ):** Ngồi trên máy mục tiêu, bật **Wireshark** để "bắt quả tang" hành vi của Thành viên A. Xem cờ nào tạo ra nhiều tiếng động nhất, cờ nào lướt qua êm ái nhất và ghi lại nhật ký (Log).

> 💡 **Mẹo in ấn:** Bạn có thể copy bảng này vào Word/Docs, căn lề gọn gàng và in ra để đặt ngay cạnh bàn máy tính. Mỗi lần gõ xong lệnh và hiểu bản chất gói tin, hãy lấy bút đánh dấu vào ô trống ☐. Chúc bạn sớm làm chủ kỹ thuật quét cổng nâng cao!