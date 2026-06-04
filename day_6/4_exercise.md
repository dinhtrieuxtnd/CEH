Chào bạn! Với tư cách là một chuyên gia đào tạo theo phương pháp **"Học qua hành" (Learning-by-doing)**, tôi hiểu rằng việc gõ một câu lệnh vô thức trên Lab không bao giờ hiệu quả bằng việc giải quyết một bài toán gắn liền với áp lực công việc hàng ngày.

Dưới đây là thiết kế bộ **3 bài tập thực hành độc lập cho NGÀY 6**, được lồng ghép vào các bối cảnh công việc thực tế (Giảng dạy, Kinh doanh, Văn phòng) để người học tự triển khai, tự đối chiếu kết quả mà không cần giáo viên đứng lớp trợ giúp.

---

### BÀI TẬP 1: CƠ BẢN (Độ khó: 1/5)

#### 🎯 Chủ đề: "Kiểm toán" cổng mạng dịch vụ giáo dục trực tuyến

* **Ngữ cảnh thực tế (Giảng dạy/Trường học):** Bạn là một giảng viên kiêm quản trị viên mạng cho một trung tâm đào tạo trực tuyến. Chuẩn bị đến kỳ thi cuối kỳ, bạn cần kiểm tra xem máy chủ chứa đề thi và tài liệu học tập của trường (chạy Linux) có đang vô tình mở các cổng dịch vụ không an toàn (như FTP, Telnet, HTTP không mã hóa) hay không, nhằm ngăn chặn sinh viên gian lận hoặc hacker tấn công đổi điểm. Do máy chủ này đang chịu tải lớn từ sinh viên truy cập, bạn cần một phương thức quét nhanh, tiết kiệm tài nguyên hệ thống.
* **Thời gian hoàn thành dự kiến:** 20 phút.
* **Yêu cầu cụ thể:**
1. Sử dụng kỹ thuật quét "Nửa mở" (SYN Scan) để dò quét nhanh dải cổng phổ biến (1-1024) của máy chủ mục tiêu.
2. Xuất kết quả hiển thị danh sách các cổng đang mở (Open) và dịch vụ tương ứng đi kèm.


* **Gợi ý cách làm:**
* Sử dụng cờ lệnh mặc định ưu tiên quyền root/administrator để tạo gói tin SYN thô.
* Cú pháp lệnh gợi ý trong Terminal: `sudo nmap -sS -p 1-1024 [IP_Máy_Chủ_Mục_Tiêu]`


* **Tiêu chí đánh giá kết quả (Tự chấm điểm):**
* [ ] Thực thi lệnh không bị lỗi quyền (`Omit sudo...`).
* [ ] Đọc được bảng kết quả có 3 cột: `PORT`, `STATE`, `SERVICE`.
* [ ] Xác định đúng trạng thái cổng: Nếu kết quả ghi `80/tcp open http` hoặc `23/tcp open telnet`, bạn đã hoàn thành việc chỉ ra "lối vào" nguy hiểm của máy chủ trường học.



---

### BÀI TẬP 2: TRUNG BÌNH (Độ khó: 3/5)

#### 🎯 Chủ đề: Trinh sát đối thủ và tối ưu hóa hệ thống bán hàng Cloud

* **Ngữ cảnh thực tế (Kinh doanh/Doanh nghiệp):** Bạn là chuyên viên tư vấn giải pháp CNTT cho một doanh nghiệp thương mại điện tử. Công ty đang muốn ra mắt một tính năng săn Deal mới để cạnh tranh trực tiếp với một đối thủ lớn trong ngành. Ban giám đốc yêu cầu bạn khảo sát hạ tầng hạ tầng mạng của đối thủ (đang chạy hệ thống phân phối trên nền tảng Unix/Linux) để xem họ dùng các giải pháp gì nhằm tối ưu hệ thống của mình. Tuy nhiên, website đối thủ được bảo vệ bởi hệ thống tường lửa (Firewall) rất nghiêm ngặt, họ tự động cấu hình chặn chặn tuyệt đối mọi gói tin chứa cờ `SYN` lạ gửi tới.
* **Thời gian hoàn thành dự kiến:** 45 phút.
* **Yêu cầu cụ thể:**
1. Vận dụng kỹ thuật quét ngầm dị dạng không chứa cờ `SYN` (gợi ý: **Xmas Scan** hoặc **Null Scan**) để đánh lừa cấu hình mặc định của Firewall đối thủ.
2. Chụp cấu trúc gói tin mạng được gửi đi để hiểu lý do tại sao nó vượt qua bộ lọc Firewall.


* **Gợi ý cách làm:**
* **Bước 1:** Bật công cụ giám sát luồng mạng **Wireshark** trên máy tấn công Kali của bạn, chọn đúng card mạng đang kết nối (ví dụ: `eth0` hoặc `wlan0`), gõ bộ lọc `tcp` ở thanh tìm kiếm để lọc nhiễu.
* **Bước 2:** Mở Terminal và thực thi lệnh thắp sáng các cờ trạng thái dị dạng của Nmap: `sudo nmap -sX [IP_Dối_Thủ]`
* **Bước 3:** Quay lại màn hình Wireshark, bấm dừng bắt gói tin và phân tích phần chi tiết cấu trúc TCP (TCP Flags) của gói tin Nmap vừa gửi đi.


* **Tiêu chí đánh giá kết quả (Tự chấm điểm):**
* [ ] Lệnh Nmap thực thi thành công và trả về trạng thái cổng là `open|filtered` hoặc `closed`.
* [ ] Trong Wireshark, khi click vào một gói tin gửi từ IP của bạn sang đối thủ, ở phần `Flags`, người học phải nhìn thấy dòng trạng thái bật đồng thời cả 3 cờ: `Fin: Set`, `Push: Set`, `Urgent: Set` (đối với Xmas Scan) hoặc tất cả các cờ đều bằng `0` (đối với Null Scan).



---

### BÀI TẬP 3: NÂNG CAO (Độ khó: 5/5)

#### 🎯 Chủ đề: Kiểm thử xâm nhập vượt rào tường lửa doanh nghiệp

* **Ngữ cảnh thực tế (Văn phòng/Chuyên gia an toàn thông tin):** Bạn là Chuyên gia Pentest (Kiểm thử xâm nhập) được thuê để đánh giá lỗ hổng định kỳ cho một Ngân hàng. Hệ thống của Ngân hàng sở hữu thiết bị IPS (Hệ thống ngăn ngừa xâm nhập) thế hệ mới có khả năng đếm tần suất gói tin (Rate-limiting). Nếu bạn quét cổng với tốc độ thông thường, IPS sẽ nhận diện thuật toán quét tuyến tính, lập tức kích hoạt cảnh báo "Báo động đỏ" gửi tới Đội vận hành an ninh (SOC) và khóa vĩnh viễn IP của bạn, khiến cuộc kiểm thử thất bại. Bạn buộc phải thực hiện một cuộc trinh sát kỹ thuật cao: vừa phải xé nhỏ gói tin để máy scan Firewall không đọc được chữ ký, vừa phải kéo giãn thời gian gửi gói tin như một người dùng thông thường duyệt web để đánh lừa bộ đếm tần suất.
* **Thời gian hoàn thành dự kiến:** 60 phút.
* **Yêu cầu cụ thể:**
1. Viết một lệnh Nmap phức hợp, tích hợp đồng thời hai kỹ thuật nâng cao: **Phân mảnh gói tin IP (Fragmentation)** và **Điều tốc thời gian cấp độ thấp (Polite/Sneaky Timing)**.
2. Quét tập trung vào đúng 3 cổng dịch vụ "nhạy cảm" nhất của hệ thống quản trị tài chính ngân hàng: Cổng `22` (SSH), Cổng `443` (HTTPS), và Cổng `3389` (Remote Desktop).


* **Gợi ý cách làm:**
* Nghiên cứu kỹ menu trợ giúp của Nmap bằng lệnh `nmap --help`.
* Tìm cờ lệnh đại diện cho tính năng Fragment (phân mảnh dữ liệu thành các đoạn nhỏ 8-byte).
* Tìm cờ lệnh điều chỉnh tốc độ từ T0 đến T5. Để "né" IPS, cấp độ `T1` (Sneaky) hoặc `T2` (Polite) là bắt buộc.
* Sử dụng cờ `-p` để giới hạn danh sách cổng quét, tránh quét tràn lan gây động hệ thống.
* *Lệnh mẫu cấu trúc tham khảo:* `sudo nmap -sS -f -T2 -p 22,443,3389 [IP_Ngan_Hang_Lab]`


* **Tiêu chí đánh giá kết quả (Tự chấm điểm):**
* [ ] Lệnh chạy mất thời gian lâu hơn bình thường đáng kể (đúng đặc trưng của quét tàng hình điều tốc).
* [ ] Kết quả hiển thị chính xác trạng thái của 3 cổng chỉ định: `22/tcp`, `443/tcp`, `3389/tcp`.
* [ ] (Nâng cao nếu có Lab IPS): Hệ thống giám sát IPS của Ngân hàng giả lập **không** kích hoạt bất kỳ cảnh báo nguy hiểm nào trong suốt quá trình bạn thực thi lệnh.



---

### 💡 LỜI KHUYÊN DÀNH CHO NGƯỜI TỰ HỌC

Để tối ưu hóa hiệu quả của 3 bài tập này, bạn hãy chuẩn bị sẵn một cuốn sổ tay kỹ thuật (hoặc file Notion/Word). Với mỗi bài tập, hãy ghi lại 3 dòng:

1. *Câu lệnh tôi đã gõ là gì?*
2. *Hệ thống mục tiêu đã phản hồi trạng thái như thế nào?*
3. *Tôi rút ra được bài học cốt lõi nào từ cấu trúc gói tin này?*

Chúc bạn thực hiện thành công cuộc "trinh sát tàng hình" đầu tiên trong sự nghiệp Mũ Trắng!