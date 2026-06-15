Dưới đây là bộ quiz 10 câu trắc nghiệm hoàn chỉnh cho nội dung **NGÀY 20: TẤN CÔNG TỪ CHỐI DỊCH VỤ (DoS/DDoS)** được biên soạn chuẩn hóa theo tư duy CEH v11. Định dạng này đã được tối ưu hóa để bạn có thể dễ dàng in ấn hoặc copy-paste trực tiếp lên các nền tảng như Google Forms, Microsoft Forms, Quizizz hay Kahoot.

---

# BỘ QUIZ TRẮC NGHIỆM: NGÀY 20 – TẤN CÔNG DoS/DDoS

## PHẦN I: CÁC CÂU HỎI TRẮC NGHIỆM

### MỨC ĐỘ 1: NHẬN BIẾT (4 CÂU)

**Câu 1: Mục tiêu cốt lõi của một cuộc tấn công Từ chối dịch vụ (DoS/DDoS) nhắm vào thành phần nào trong mô hình an toàn thông tin CIA Triad?**
A. Tính bảo mật (Confidentiality).
B. Tính toàn vẹn (Integrity).
C. Tính sẵn sàng (Availability).
D. Tính chống chối bỏ (Non-repudiation).

**Câu 2: Thuật ngữ nào sau đây được dùng để chỉ một máy tính hoặc thiết bị thông minh bị nhiễm mã độc ngầm, mất quyền kiểm soát hoàn toàn và trở thành một công cụ tham gia tấn công DDoS theo lệnh của hacker?**
A. Botmaster.
B. Zombie (hoặc Bot).
C. C&C Server.
D. Honeypot.

**Câu 3: Đòn tấn công nào lợi dụng quy trình bắt tay 3 bước (3-way handshake) của giao thức TCP bằng cách gửi liên tục gói tin khởi tạo nhưng cố tình im lặng, không gửi gói tin xác nhận cuối cùng?**
A. SYN Flood.
B. UDP Flood.
C. ICMP Flood.
D. HTTP Flood.

**Câu 4: Khi hacker sử dụng một mạng lưới gồm hàng vạn thiết bị ma (Botnet) nằm rải rác trên toàn cầu để đồng loạt dội bom lưu lượng rác vào một máy chủ duy nhất, cuộc tấn công này được phân loại chính xác là gì?**
A. Tấn công DoS (Denial of Service).
B. Tấn công Phishing (Lừa đảo).
C. Tấn công DDoS (Distributed Denial of Service).
D. Tấn công Sniffing (Nghe lén).

---

### MỨC ĐỘ 2: THÔNG HIỂU (3 CÂU)

**Câu 5: Trong một cuộc tấn công UDP Flood, cơ chế nào sau đây là nguyên nhân chính trực tiếp khiến CPU của máy chủ mục tiêu bị quá tải và rơi vào trạng thái tê liệt?**
A. Máy chủ phải tiêu tốn toàn bộ bộ nhớ đệm để duy trì trạng thái "chờ bắt tay" với các cổng.
B. Máy chủ liên tục phải rà soát ứng dụng đứng sau cổng, phát hiện cổng đóng và tốn tài nguyên sinh ra gói tin lỗi ICMP Destination Unreachable gửi ngược lại.
C. Giao thức UDP bẻ gãy khóa mã hóa SSL/TLS của máy chủ, buộc hệ thống phải khởi động lại liên tục.
D. Đường truyền Internet bị chiếm dụng bởi các tệp tin dữ liệu có kích thước vượt quá giới hạn băng thông vật lý của card mạng.

**Câu 6: Điểm khác biệt cốt lõi giữa đòn tấn công DDoS tầng Hạ tầng (Volumetric Attack - Layer 3/4) và tấn công DDoS tầng Ứng dụng (Application Layer Attack - Layer 7) là gì?**
A. Tấn công Layer 3/4 nhắm vào lỗ hổng mã nguồn của trang web, còn Layer 7 nhắm vào thiết bị Router phần cứng.
B. Tấn công Layer 3/4 tìm cách làm nghẽn băng thông mạng bằng lưu lượng khổng lồ, còn Layer 7 giả lập hành vi người dùng thật để làm cạn kiệt tài nguyên xử lý (RAM/CPU) của máy chủ thông qua các yêu cầu dịch vụ nặng.
C. Tấn công Layer 7 luôn đi kèm hành vi ăn cắp cơ sở dữ liệu (Database), còn Layer 3/4 thì không.
D. Tấn công Layer 3/4 rất khó bị phát hiện trên biểu đồ giám sát mạng, trong khi Layer 7 hiển thị lưu lượng tăng đột biến hàng Terabit rất rõ ràng.

**Câu 7: Giải pháp Reverse Proxy (như Cloudflare) bảo vệ máy chủ thật đứng sau khỏi các đòn tấn công DDoS dồn dập bằng cơ chế cốt lõi nào?**
A. Nó tự động ngắt kết nối Internet của toàn bộ mạng nội bộ khi phát hiện lưu lượng tăng cao.
B. Nó đứng ra làm trung gian tiếp nhận toàn bộ lưu lượng, ẩn địa chỉ IP thật của máy chủ đích, và sử dụng hạ tầng đám mây khổng lồ để phân tích, lọc bỏ kết nối rác trước khi chuyển tiếp người dùng thật vào trong.
C. Nó tiến hành mã hóa toàn bộ dữ liệu ổ cứng máy chủ thành định dạng không thể đọc được đối với Botnet.
D. Nó tự động gửi các gói tin tấn công ngược trở lại (Counter-attack) máy tính của hacker để làm sập nguồn đội quân Zombie.

---

### MỨC ĐỘ 3: VẬN DỤNG (3 CÂU GIẢI QUYẾT TÌNH HUỐNG)

**Câu 8: Website của một doanh nghiệp vừa tung ra chương trình "Săn Sale 0 đồng" vào đúng 12h đêm. Ngay lập tức, website bị nghẽn mạng nghiêm trọng, người dùng nhận thông báo "504 Gateway Timeout". Hệ thống giám sát cho thấy lưu lượng truy cập cao gấp 200 lần ngày thường nhưng phân bổ đều từ khách hàng thật đang bấm F5 liên tục. Người quản trị mạng cần kết luận và xử lý tình huống này như thế nào?**
A. Đây là một cuộc tấn công DDoS bằng Botnet xuyên quốc gia, lập tức kích hoạt tường lửa chặn toàn bộ các địa chỉ IP truy cập.
B. Đây là hiện tượng quá tải tự nhiên (Flash Crowd), không phải tấn công DDoS. Cần sử dụng giải pháp hàng đợi (Queue), cân bằng tải (Load Balancing) và tối ưu hạ tầng để điều phối khách hàng thay vì chặn IP.
C. Hệ thống đã bị nhiễm mã độc tống tiền Ransomware, cần tắt nguồn toàn bộ máy chủ để cô lập.
D. Hacker đang thực hiện đòn tấn công ICMP Flood, cần cấu hình tường lửa khóa hoàn toàn giao thức TCP của hệ thống.

**Câu 9: Trong quá trình rà quét an ninh định kỳ cho hệ thống máy chủ dịch vụ của một ngân hàng, một Ethical Hacker phát hiện ra các cổng dịch vụ DNS (53), NTP (123) đang mở toang ra môi trường Internet công cộng mặc dù ngân hàng không hề có nhu cầu làm máy chủ phân giải tên miền công cộng. Chuyên gia bảo mật này nên đưa ra khuyến nghị gì để ngăn chặn nguy cơ tiềm ẩn liên quan đến DDoS?**
A. Giữ nguyên cấu hình để đảm bảo tính sẵn sàng cao cho nhân viên truy cập từ xa.
B. Nâng cấp băng thông đường truyền Internet của ngân hàng lên gấp đôi để phòng hờ.
C. Khuyến nghị đóng ngay các cổng này hoặc cấu hình tường lửa chỉ cho phép các IP nội bộ cụ thể truy cập, nhằm tránh việc hệ thống bị hacker lợi dụng làm bệ phóng khuếch đại tấn công DDoS (Amplification Attack) nhắm vào nạn nhân khác.
D. Cài đặt thêm phần mềm diệt virus Windows Defender trên các máy trạm của nhân viên kế toán.

**Câu 10: Website của một cơ quan chính phủ bất ngờ bị tê liệt hoàn toàn. Kiểm tra băng thông mạng đường truyền thấy vẫn rất trống trải, lưu lượng mạng ở mức thấp. Tuy nhiên, log của máy chủ web (Nginx) ghi nhận có hàng trăm địa chỉ IP liên tục gửi yêu cầu (Request) lặp đi lặp lại vào tính năng "Tìm kiếm văn bản pháp luật nâng cao có lồng ghép nhiều bảng dữ liệu (Join Query)". CPU của máy chủ cơ sở dữ liệu (Database) luôn treo ở mức 100%. Đây là dấu hiệu của loại tấn công nào và cách xử lý phù hợp nhất là gì?**
A. Đây là tấn công ICMP Flood tầng mạng; xử lý bằng cách chặn hoàn toàn lệnh Ping trên tường lửa.
B. Đây là tấn công SYN Flood lợi dụng bắt tay TCP; xử lý bằng cách tăng kích thước hàng chờ SYN (SYN Queue).
C. Đây là tấn công HTTP Flood nhắm vào tầng Ứng dụng (Layer 7); xử lý bằng cách cấu hình giới hạn tần suất (Rate Limiting) trên Nginx, tối ưu câu lệnh truy vấn Database hoặc bật màng lọc CAPTCHA đối với tính năng tìm kiếm.
D. Đây là hiện tượng đứt cáp quang biển quốc tế; cần liên hệ nhà mạng ISP để chuyển hướng đường truyền dữ liệu.

---

## PHẦN II: ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT

| Câu hỏi | Đáp án đúng |
| --- | --- |
| **Câu 1** | **C** |
| **Câu 2** | **B** |
| **Câu 3** | **A** |
| **Câu 4** | **C** |
| **Câu 5** | **B** |
| **Câu 6** | **B** |
| **Câu 7** | **B** |
| **Câu 8** | **B** |
| **Câu 9** | **C** |
| **Câu 10** | **C** |

### GIẢI THÍCH CHI TIẾT TỪNG CÂU:

* **Câu 1: Chọn C**
* *Tại sao đúng:* Tính Sẵn sàng (Availability) đảm bảo rằng hệ thống và dịch vụ luôn sẵn sàng phục vụ người dùng hợp pháp bất cứ khi nào họ cần. Tác hại duy nhất của DoS/DDoS là làm gián đoạn, tê liệt dịch vụ này.
* *Tại sao các đáp án khác sai:* DoS/DDoS không đọc trộm dữ liệu nên không vi phạm tính Bảo mật (A); không sửa đổi dữ liệu trái phép nên không vi phạm tính Toàn vẹn (B).


* **Câu 2: Chọn B**
* *Tại sao đúng:* Theo lý thuyết chuẩn CEH, các máy tính bị nhiễm malware và bị điều khiển chạy ngầm để thực hiện DDoS được gọi là Zombie (thây ma) hoặc Bot.
* *Tại sao các đáp án khác sai:* Botmaster (A) là kẻ điều khiển; C&C Server (C) là máy chủ ra lệnh; Honeypot (D) là hệ thống bẫy hacker.


* **Câu 3: Chọn A**
* *Tại sao đúng:* SYN Flood khai thác cạn kiệt tài nguyên bộ nhớ đệm (SYN Backlog Queue) bằng cách gửi liên tục gói tin `SYN` nhưng không phản hồi gói `ACK` cuối cùng để hoàn tất quy trình bắt tay TCP.
* *Tại sao các đáp án khác sai:* UDP (B) và ICMP (C) là các giao thức "không kết nối" (Connectionless) nên hoàn toàn không có quy trình bắt tay 3 bước. HTTP Flood (D) chạy ở tầng ứng dụng, giao thức TCP lúc này đã bắt tay thành công rồi.


* **Câu 4: Chọn C**
* *Tại sao đúng:* Chữ **"D"** đầu tiên trong cụm từ **DDoS** viết tắt của **Distributed (Phân tán)**, thể hiện đòn tấn công huy động từ rất nhiều nguồn (mạng Botnet) đồng thời dội vào một đích.
* *Tại sao các đáp án khác sai:* DoS (A) chỉ xuất phát từ một nguồn đơn lẻ; Phishing (B) là lừa đảo; Sniffing (D) là nghe lén, không có tính chất làm sập dịch vụ.


* **Câu 5: Chọn B**
* *Tại sao đúng:* UDP không cần bắt tay. Khi hacker bắn hàng triệu gói tin UDP vào các cổng ngẫu nhiên, hệ thống buộc phải tốn tài nguyên CPU để kiểm tra xem có ứng dụng nào nhận không. Khi thấy cổng đóng, máy chủ bắt buộc phải sinh ra gói tin thông báo lỗi `ICMP Destination Unreachable` gửi trả lại, tần suất cao sẽ làm CPU nhảy lên 100%.
* *Tại sao các đáp án khác sai:* Chờ bắt tay (A) là cơ chế của SYN Flood (TCP); UDP không liên quan đến việc bẻ khóa SSL (C) hay trực tiếp làm nghẽn băng thông vật lý nếu kích thước gói tin nhỏ (D).


* **Câu 6: Chọn B**
* *Tại sao đúng:* Đây là bản chất phân biệt sâu sắc giữa 2 tầng tấn công. Tầng mạng/giao vận (Layer 3/4) dùng "lấy thịt đè người" về mặt lưu lượng thô. Tầng ứng dụng (Layer 7) dùng robot giả lập người dùng bấm vào các tính năng nặng (như truy vấn database, xuất file) để máy chủ tự vắt kiệt sức mà chết.
* *Tại sao các đáp án khác sai:* Các suy luận nhắm vào Router phần cứng (A), ăn cắp database (C) hay biểu đồ traffic (D) đều bị viết ngược bản chất kỹ thuật.


* **Câu 7: Chọn B**
* *Tại sao đúng:* Reverse Proxy đóng vai trò làm chiếc "khiên" đứng trước máy chủ thật. Địa chỉ IP công khai trên Internet là IP của màng lọc Proxy. Proxy gánh toàn bộ băng thông bẩn, dùng thuật toán lọc bỏ bot rác và chỉ cho dòng traffic sạch đi vào máy chủ nội bộ.
* *Tại sao các đáp án khác sai:* Tự ngắt kết nối (A) là tự sát bảo mật; mã hóa ổ cứng (C) là hành vi của Ransomware; tấn công ngược (D) là hành vi phạm pháp và không khả thi trong thực tế mạng.


* **Câu 8: Chọn B**
* *Tại sao đúng:* Flash Crowd là hiện tượng cạn kiệt tài nguyên do người dùng thật tăng đột biến (như săn sale, xem điểm thi). Bản chất dòng traffic là hợp pháp, nếu chặn IP bừa bãi sẽ đuổi kết khách hàng. Giải pháp đúng là tối ưu hệ thống, sử dụng Load Balancing hoặc hàng đợi điều phối luồng truy cập.
* *Tại sao các đáp án khác sai:* Nhầm lẫn sang Botnet (A) hay Ransomware (C) sẽ dẫn đến hành động tắt máy chủ/chặn IP sai lầm; chặn TCP (D) sẽ làm sập luôn toàn bộ website.


* **Câu 9: Chọn C**
* *Tại sao đúng:* Các giao thức UDP như DNS, NTP rất dễ bị hacker lợi dụng cho kỹ thuật **DDoS Amplification (Tấn công khuếch đại)**. Hacker giả mạo IP nguồn là IP của nạn nhân, rồi gửi một truy vấn nhỏ tới máy chủ DNS/NTP công cộng công ty bạn. Máy chủ của bạn sẽ phản hồi một gói tin có dung lượng lớn gấp hàng chục lần về phía IP của nạn nhân vô tội kia.
* *Tại sao các đáp án khác sai:* Mở cổng bừa bãi (A) vi phạm nguyên tắc an ninh tối thiểu; tăng băng thông (B) không giải quyết được lỗ hổng cấu hình; Windows Defender (D) trên máy trạm không quản lý cổng dịch vụ của máy chủ mạng.


* **Câu 10: Chọn C**
* *Tại sao đúng:* Tình huống mô tả rất rõ đặc trưng của tấn công tầng Ứng dụng (Layer 7): Băng thông mạng trống (không nghẽn đường truyền) nhưng CPU xử lý cơ sở dữ liệu bị treo cứng 100% do các yêu cầu tìm kiếm lồng lệnh nặng. Cách xử lý bắt buộc là áp dụng Rate Limiting (giới hạn tần suất request trên mỗi IP) và bật CAPTCHA để chặn robot tự động gửi câu lệnh.
* *Tại sao các đáp án khác sai:* Chặn Ping (A) hay SYN Queue (B) thuộc về Layer 3/4, không có tác dụng với Layer 7; Đứt cáp quang (D) là suy diễn không có căn cứ kỹ thuật logic với log hệ thống ghi nhận.