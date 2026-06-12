Dưới đây là bộ quiz 10 câu trắc nghiệm được biên soạn chi tiết theo đúng lộ trình và nội dung bài giảng của **NGÀY 7: Nhận Diện Hệ Điều Hành & Vẽ Sơ Đồ Mạng** (thuộc Module 03 của chương trình CEH v11).

Bộ câu hỏi được thiết kế theo các cấp độ tư duy từ dễ đến khó, định dạng rõ ràng, giúp bạn dễ dàng copy trực tiếp lên Google Form, Quizizz, Microsoft Forms hoặc in ra giấy để kiểm tra trên lớp.

---

# BỘ TRẮC NGHIỆM ĐÁNH GIÁ: NGÀY 7 - NHẬN DIỆN OS & VẼ SƠ ĐỒ MẠNG

## PHẦN 1: MỨC ĐỘ NHẬN BIẾT (4 Câu)

**Câu 1:** Thuật ngữ "Banner Grabbing" trong kỹ thuật quét mạng được định nghĩa là gì?
A. Kỹ thuật gửi gói tin độc hại để làm tràn bộ đệm hệ thống.
B. Quy trình thu thập thông tin phiên bản phần mềm hiển thị mặc định từ các dịch vụ đang chạy.
C. Hành vi thay đổi giao diện trang chủ của một website sau khi chiếm quyền điều khiển.
D. Quá trình bắt gói tin thô trên đường truyền mạng ở chế độ Promiscuous.

**Câu 2:** Giá trị TTL (Time to Live) mặc định ban đầu trong gói tin ICMP Echo Reply của hệ điều hành Linux/Unix thường là bao nhiêu?
A. 32
B. 64
C. 128
D. 255

**Câu 3:** Lệnh nào sau đây của công cụ Nmap được sử dụng chuyên biệt để kích hoạt tính năng phát hiện Hệ điều hành (Active OS Fingerprinting)?
A. `nmap -sV <Target_IP>`
B. `nmap -sS <Target_IP>`
C. `nmap -O <Target_IP>`
D. `nmap -sn <Target_IP>`

**Câu 4:** Để xác định các chặng (Hops) bộ định tuyến mà gói tin đi qua từ máy kiểm thử đến máy chủ mục tiêu trên hệ điều hành Linux, công cụ nào được sử dụng?
A. `ping`
B. `nslookup`
C. `traceroute`
D. `netstat`

---

## PHẦN 2: MỨC ĐỘ THÔNG HIỂU (3 Câu)

**Câu 5:** Tại sao kỹ thuật Passive OS Fingerprinting (như sử dụng công cụ p0f) lại được coi là giải pháp tối ưu hơn Active OS Fingerprinting trong các chiến dịch kiểm thử đòi hỏi tính bí mật cao?
A. Vì nó cho kết quả chính xác 100% đối với mọi thiết bị mạng mà không cần cơ sở dữ liệu.
B. Vì nó chỉ thực hiện lắng nghe luồng dữ liệu hiện tại, không gửi thêm bất kỳ gói tin bất thường nào khiến hệ thống IDS/Firewall phát hiện.
C. Vì nó có khả năng tự động tắt tường lửa của mục tiêu trước khi tiến hành nhận diện.
D. Vì nó hoạt động ở tầng Ứng dụng (Application) nên không bị ảnh hưởng bởi giao thức TCP/IP.

**Câu 6:** Khi thực hiện lệnh kiểm tra kết nối mạng (Ping) đến một máy chủ nội bộ bí ẩn, kết quả trả về hiển thị giá trị `TTL = 127`. Dựa trên nguyên lý hoạt động của TTL, hệ điều hành của máy chủ này nhiều khả năng là gì và gói tin đã đi qua bao nhiêu Router?
A. Hệ điều hành Linux, đi qua 1 Router.
B. Hệ điều hành Windows, đi qua 1 Router.
C. Hệ điều hành Windows, không đi qua Router nào (cùng mạng LAN).
D. Thiết bị mạng Cisco, đi qua 128 Router.

**Câu 7:** Một quản trị viên bảo mật thay đổi file cấu hình dịch vụ Web Apache để chuỗi hiển thị trả về cho người dùng luôn là `Server: Microsoft-IIS/10.0`. Hành động này có bản chất là gì?
A. Nâng cấp hệ thống từ Apache lên IIS mà không cần cài đặt lại phần mềm.
B. Cấu hình Honeypot mức tương tác cao để bẫy kẻ tấn công.
C. Giả mạo Banner (Banner Spoofing) nhằm làm sai lệch kết quả trinh sát của kẻ tấn công.
D. Mã hóa lưu lượng HTTP để phòng chống kỹ thuật nghe lén Sniffing.

---

## PHẦN 3: MỨC ĐỘ VẬN DỤNG (3 Câu)

**Câu 8:** Trong một đợt đánh giá an ninh mạng nội bộ, chuyên gia Ethical Hacker chạy lệnh `sudo nmap -O 192.168.10.25` nhắm vào một thiết bị điều khiển công nghiệp (PLC) đời cũ. Thiết bị này bất ngờ bị mất kết nối và dừng hoạt động ngay sau đó. Nguyên nhân kỹ thuật nào hợp lý nhất giải thích cho sự cố trên?
A. Lệnh `-O` đã kích hoạt một cuộc tấn công từ chối dịch vụ DDoS dạng SYN Flood làm cạn kiệt băng thông thiết bị.
B. Nmap đã gửi các gói tin có cấu trúc dị dạng (malformed packets) để ép thiết bị phản hồi thuộc tính OS, nhưng phần cứng cũ không xử lý được dẫn đến tràn bộ đệm hoặc treo hệ thống.
C. Thiết bị tự động kích hoạt cơ chế tự hủy dữ liệu khi phát hiện có hành vi quét cổng bảo mật.
D. Địa chỉ IP của thiết bị trùng với địa chỉ IP của máy kiểm thử dẫn đến xung đột IP mạng.

**Câu 9:** Giả sử bạn đang đứng trước một máy chủ Web đã bị quản trị viên ẩn toàn bộ thông tin Banner dịch vụ và cấu hình tường lửa chặn hoàn toàn các gói tin ICMP (không thể Ping). Bạn nên áp dụng chiến lược nào tiếp theo để nhận diện hệ điều hành của máy chủ này?
A. Tiếp tục gửi các gói tin ICMP với kích thước lớn hơn để phá vỡ tường lửa.
B. Sử dụng Nmap với tùy chọn quét dịch vụ và phân tích các đặc trưng phản hồi của giao thức TCP (`nmap -sV -p 80,443 --reason`) kết hợp với việc kiểm tra cấu trúc gói tin phản hồi thực tế.
C. Sử dụng công cụ Whois để truy vấn thông tin đăng ký tên miền của máy chủ.
D. Bỏ qua bước trinh sát và tiến hành brute-force mật khẩu quản trị ngay lập tức.

**Câu 10:** Bạn thực hiện kiểm tra `traceroute` tới một máy chủ Web của doanh nghiệp và thu được sơ đồ đường đi của gói tin. Kết quả cho thấy chặng cuối cùng trước khi tới máy chủ phản hồi `TTL = 64` (Linux), trong khi tài liệu nội bộ ghi chú máy chủ Web của doanh nghiệp sử dụng hệ điều hành Windows Server. Nhận định nào sau đây phân tích đúng cấu trúc thực tế của hệ thống này?
A. Máy chủ Web chạy hệ điều hành Windows đã bị Hacker xâm nhập thành công và cài đặt lại hệ điều hành thành Linux.
B. Kết quả `traceroute` bị sai do đường truyền Internet không ổn định làm suy hao chỉ số TTL.
C. Bạn đang nhìn thấy phản hồi từ một thiết bị trung gian đứng trước (như Firewall, Proxy, Load Balancer chạy Linux) đóng vai trò tiếp nhận và phản hồi thay cho máy chủ Web thật ở phía sau.
D. Hệ điều hành Windows Server phiên bản mới đã thay đổi giá trị mặc định của chỉ số TTL từ 128 xuống 64.

---

# ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

* **Câu 1: Chọn B**
* *Tại sao đúng:* Định nghĩa cốt lõi của Banner Grabbing là thu thập các thông tin mô tả dịch vụ/hệ thống do chính dịch vụ đó gửi ra công khai khi thiết lập kết nối.
* *Tại sao các đáp án khác sai:* A là tấn công khai thác lỗ hổng; C là tấn công thay đổi giao diện (Defacement); D là kỹ thuật nghe lén mạng (Sniffing).


* **Câu 2: Chọn B**
* *Tại sao đúng:* Theo tiêu chuẩn thiết kế ngăn xếp TCP/IP mặc định, các hệ điều hành nhân Linux/Unix đặt giá trị khởi đầu cho TTL là 64.
* *Tại sao các đáp án khác sai:* A không phải giá trị OS mặc định phổ biến; C là của Windows; D là của các thiết bị mạng Cisco hoặc hệ thống cũ.


* **Câu 3: Chọn C**
* *Tại sao đúng:* Tùy chọn `-O` (chữ O in hoa, viết tắt của Operating System) là lệnh ra lệnh cho Nmap thực hiện quét dấu vân tay hệ điều hành.
* *Tại sao các đáp án khác sai:* A dùng để quét phiên bản dịch vụ (`-sV`); B dùng để quét cổng TCP SYN (`-sS`); D dùng để quét kiểm tra thiết bị hoạt động không quét cổng (`-sn`).


* **Câu 4: Chọn C**
* *Tại sao đúng:* Lệnh `traceroute` (hoặc `tracert` trên Windows) sinh ra các gói tin có TTL tăng dần để ghi nhận địa chỉ IP của từng Router (chặng) trên đường đi.
* *Tại sao các đáp án khác sai:* A chỉ kiểm tra trạng thái sống/chết; B để tra cứu bản ghi DNS; D để xem các kết nối mạng hiện tại trên máy cục bộ.


* **Câu 5: Chọn B**
* *Tại sao đúng:* Quét bị động không tạo ra lưu lượng lạ hay gói tin dị dạng, nó hoạt động như một máy nghe lén thuần túy nên hệ thống giám sát (IDS) hoàn toàn không thể phát hiện hành vi này.
* *Tại sao các đáp án khác sai:* A sai vì quét bị động độ chính xác phụ thuộc vào dữ liệu bắt được, không thể chính xác 100%; C sai vì công cụ này không có chức năng tấn công hay tắt tường lửa; D sai vì nó vẫn phân tích các thuộc tính tầng Giao vận (TCP) và Mạng (IP).


* **Câu 6: Chọn B**
* *Tại sao đúng:* Máy Windows có TTL gốc là 128. Khi gói tin đi qua 1 Router, TTL bị trừ đi 1 ($128 - 1 = 127$). Do đó kết quả nhận được là 127 chứng tỏ nó là máy Windows và cách chúng ta 1 chặng định tuyến.
* *Tại sao các đáp án khác sai:* Nếu là Linux, TTL nhận được phải ở quanh mức 64 (ví dụ 63). Nếu cùng mạng LAN không qua Router thì TTL sẽ giữ nguyên là 128.


* **Câu 7: Chọn C**
* *Tại sao đúng:* Việc sửa chuỗi trả về của dịch vụ nhằm đánh lừa các công cụ tự động quét Banner của Hacker được gọi là kỹ thuật Banner Spoofing (Giả mạo biểu ngữ) để gây nhiễu thông tin trinh sát.
* *Tại sao các đáp án khác sai:* A sai vì hệ điều hành cốt lõi bên dưới không hề thay đổi; B sai vì đây chỉ là đổi cấu hình hiển thị của một máy thật, không phải dựng lên một hệ thống mồi nhử (Honeypot); D sai vì đổi chữ hiển thị không liên quan đến mã hóa dữ liệu SSL/TLS.


* **Câu 8: Chọn B**
* *Tại sao đúng:* Tính năng quét chủ động hệ điều hành của Nmap (`-O`) bắt buộc phải gửi các gói tin vi phạm tiêu chuẩn (như gói FIN-PUSH không tuân theo logic TCP thông thường) để xem OS phản ứng ra sao. Các thiết bị IoT/PLC công nghiệp đời cũ có hệ thống mạng rất thô sơ, khi nhận dữ liệu lỗi này sẽ dễ bị xung đột phần mềm nội bộ gây treo hoặc sập nguồn (Crash).
* *Tại sao các đáp án khác sai:* A sai vì lệnh `-O` không tạo ra lượng băng thông khổng lồ như DDoS; C sai vì thiết bị công nghiệp không có tính năng tự hủy vật lý hay tự xóa khi bị quét; D sai vì máy kiểm thử và máy mục tiêu phải khác IP thì mới quét được nhau trong mạng.


* **Câu 9: Chọn B**
* *Tại sao đúng:* Khi thông tin Banner bề nổi bị ẩn và ICMP bị chặn, ta phải dùng giải pháp phân tích sâu hơn thuộc tính của các cổng TCP đang mở (giao tiếp qua cổng 80, 443 của trang web) bằng lệnh `-sV` kết hợp phân tích chuyên sâu thuật toán phản hồi TCP của Nmap.
* *Tại sao các đáp án khác sai:* A vô ích vì tường lửa đã cấu hình chặn ICMP thì gói tin lớn hay nhỏ đều bị hủy; C chỉ cho biết thông tin nhà đăng ký tên miền, không thể biết OS chạy bên trong máy chủ; D là hành vi tấn công phá hoại, vi phạm đạo đức kiểm thử khi chưa hoàn thành bước trinh sát.


* **Câu 10: Chọn C**
* *Tại sao đúng:* Trong kiến trúc mạng doanh nghiệp lớn, các máy chủ Web thật (Windows) thường được giấu phía sau một thiết bị Gateway, Tường lửa, hoặc Proxy ngược (Reverse Proxy) chạy Linux để bảo mật và cân bằng tải. Khi bạn gửi gói tin, thiết bị Linux này đứng ra xử lý và phản hồi trực tiếp, khiến bạn lầm tưởng toàn bộ hệ thống là Linux.
* *Tại sao các đáp án khác sai:* A là suy đoán vô căn cứ và thiếu tính logic; B sai vì nhiễu mạng không làm giá trị TTL nhảy từ mức 128 xuống tận 64 một cách cố định; D sai vì Microsoft chưa bao giờ thay đổi cấu hình TTL gốc từ 128 xuống 64 trên các dòng Windows Server.