Chào bạn, dưới đây là bộ quiz trắc nghiệm gồm 10 câu hỏi được thiết kế theo đúng phân phối mức độ nhận thức (4 Nhận biết, 3 Thông hiểu, 3 Vận dụng) bám sát nội dung **NGÀY 6: NGHỆ THUẬT QUÉT CỔNG "TÀNG HÌNH"** và cấu trúc chuẩn của tài liệu CEH v11.

Bộ câu hỏi này được tối ưu định dạng văn bản rõ ràng để bạn có thể dễ dàng in ấn trực tiếp hoặc sao chép nhanh lên các nền tảng trực tuyến như Google Forms, Quizizz, hay Kahoot!

---

### BỘ QUIZ TRẮC NGHIỆM: NGHỆ THUẬT QUÉT CỔNG TÀNG HÌNH (NGÀY 6)

#### MỨC ĐỘ 1: NHẬN BIẾT (4 CÂU KHẢO SÁT GHI NHỚ)

**Câu 1:** Lệnh quét cổng nào dưới đây của công cụ Nmap sẽ thực hiện đầy đủ cú bắt tay 3 bước (3-way handshake) của giao thức TCP với mục tiêu?

* A. `nmap -sS`
* B. `nmap -sT`
* C. `nmap -sX`
* D. `nmap -sN`

**Đáp án đúng:** B
* **Giải thích:** Tùy chọn `-sT` kích hoạt kỹ thuật TCP Connect Scan, sử dụng các hàm hệ điều hành để hoàn tất chu trình giao tiếp bắt tay 3 bước đầy đủ trước khi ngắt kết nối. Các tùy chọn khác như `-sS` (SYN Scan), `-sX` (Xmas Scan), hay `-sN` (Null Scan) đều cố tình can thiệp hoặc bẻ gãy quy trình bắt tay này để tàng hình.

**Câu 2:** Một gói tin TCP bất thường mang kỹ thuật quét Xmas Scan (`nmap -sX`) sẽ thắp sáng những cờ trạng thái (Flags) nào cùng một lúc?

* A. SYN, ACK, FIN
* B. URG, PSH, FIN
* C. RST, PSH, SYN
* D. FIN, RST, ACK

**Đáp án đúng:** B
* **Giải thích:** Theo lý thuyết CEH và quy chuẩn mạng, Xmas Scan thắp sáng gói tin mạng bằng cách bật đồng thời 3 cờ là `URG` (Urgent), `PSH` (Push), và `FIN` (Finish). Các tổ hợp cờ ở phương án khác không tạo nên chữ ký đặc trưng của một gói tin Xmas.

**Câu 3:** Khi thực hiện kỹ thuật quét tàng hình Null Scan (`-sN`), cấu trúc của tiêu đề (Header) gói tin TCP gửi đi có đặc điểm gì?

* A. Bật duy nhất cờ SYN
* B. Bật tất cả các cờ trạng thái hiện có
* C. Không bật bất kỳ cờ trạng thái nào
* D. Chỉ bật cờ ACK và cờ FIN

**Đáp án đúng:** C
* **Giải thích:** Đúng như tên gọi "Null", kỹ thuật này truyền đi một gói tin TCP hoàn toàn trống rỗng, không thiết lập (bật) bất kỳ một cờ trạng thái nào trong Header để kiểm tra phản hồi. Các đáp án còn lại mô tả sai đặc tính cấu trúc gói tin Null.

**Câu 4:** Tùy chọn điều tốc thời gian (Timing) nào của Nmap giúp kéo giãn khoảng thời gian gửi gói tin ở mức tối đa nhằm tránh bị hệ thống IDS phát hiện chữ ký?

* A. `-T5`
* B. `-T4`
* C. `-T3`
* D. `-T0`

**Đáp án đúng:** D
* **Giải thích:** Nmap cung cấp các mức thời gian từ `-T0` (Paranoid) đến `-T5` (Insane). Mức `-T0` là mức chậm nhất, có thể mất vài phút cho tới vài giờ để hoàn thành việc quét một cổng, giúp đánh lừa bộ đếm tuần suất gói tin của thiết bị phòng vệ. Mức `-T5` là mức nhanh nhất và dễ làm báo động hệ thống nhất.

---

#### MỨC ĐỘ 2: THÔNG HIỂU (3 CÂU KIỂM TRA BẢN CHẤT)

**Câu 5:** Tại sao kỹ thuật quét nửa mở SYN Scan (`-sS`) lại được gọi là kỹ thuật quét "Tàng hình" đối với các máy chủ dịch vụ?

* A. Vì nó bẻ gãy cú bắt tay 3 bước khiến ứng dụng tầng trên không ghi nhận dòng nhật ký phiên (Log).
* B. Vì các thiết bị Tường lửa (Firewall) không có khả năng đọc được gói tin dạng SYN.
* C. Vì nó mã hóa toàn bộ dữ liệu gói tin gửi đi bằng giao thức bảo mật IPSec.
* D. Vì nó tự động thay đổi địa chỉ MAC của máy tấn công liên tục sau mỗi giây.

**Đáp án đúng:** A
* **Giải thích:** Phiên kết nối TCP chỉ được máy chủ chuyển giao cho ứng dụng tầng trên (như Apache, Nginx) ghi nhận nhật ký sau khi bước thứ 3 (`ACK`) hoàn tất. Do SYN Scan dập tắt kết nối ngay ở bước thứ 2 bằng gói `RST`, ứng dụng hoàn toàn không biết có sự thăm dò. Firewall vẫn đọc được gói SYN thông thường (loại trừ B), lệnh không kích hoạt mã hóa hay thay đổi MAC tự động (loại trừ C, D).

**Câu 6:** Theo quy chuẩn thiết kế TCP (RFC 793), nếu ta gửi một gói tin không chứa cờ SYN (như FIN Scan) tới một cổng đang **ĐÓNG (Closed)** trên một máy chủ Linux, hệ thống mục tiêu sẽ phản hồi gói tin gì?

* A. Mục tiêu sẽ hoàn toàn im lặng và không gửi lại gì.
* B. Mục tiêu sẽ trả lời bằng một gói tin chứa cờ SYN/ACK.
* C. Mục tiêu bắt buộc phải phản hồi bằng một gói tin chứa cờ RST.
* D. Mục tiêu sẽ gửi một gói tin thông báo lỗi ICMP Destination Unreachable.

**Đáp án đúng:** C
* **Giải thích:** RFC 793 quy định rằng tất cả các cổng đóng, khi nhận được gói tin bất thường không tuân thủ quy trình giao tiếp, bắt buộc phải sinh ra gói `RST` (Reset) để thông báo hủy kết nối. Trạng thái im lặng (A) chỉ xảy ra khi cổng đó đang MỞ. Phản hồi SYN/ACK (B) chỉ dành cho yêu cầu kết nối SYN hợp lệ, còn ICMP (D) là phản hồi của giao thức UDP hoặc tầng IP chứ không phải TCP.

**Câu 7:** Tại sao các kỹ thuật quét ngầm nâng cao như FIN, Xmas, và Null Scan thường trả về kết quả sai lệch (báo đóng toàn bộ) khi hướng mục tiêu vào hệ điều hành Microsoft Windows?

* A. Do Windows tích hợp sẵn công cụ mã hóa dữ liệu mặc định BitLocker trên nhân hệ thống.
* B. Do ngăn xếp (Stack) TCP/IP của Windows được thiết kế không tuân thủ hoàn toàn quy chuẩn RFC 793.
* C. Do Windows Server không hỗ trợ các cổng mạng phổ biến như cổng 80 hay cổng 443.
* D. Do kiến trúc Windows sử dụng mô hình Workgroup thay vì Domain Active Directory.

**Đáp án đúng:** B
* **Giải thích:** Microsoft tùy biến ngăn xếp mạng TCP/IP của mình khiến các cổng của Windows luôn gửi lại gói `RST` khi nhận được gói tin không chứa cờ `SYN`, bất kể cổng đó đang đóng hay mở. Do đó, các kỹ thuật quét dựa trên sự "im lặng" để đoán cổng mở của Nmap sẽ bị Windows đánh lừa hoàn toàn. Các lý do về BitLocker (A), không hỗ trợ cổng (C) hay mô hình mạng (D) không liên quan đến bản chất giao thức tầng Transport.

---

#### MỨC ĐỘ 3: VẬN DỤNG (3 CÂU GIẢI QUYẾT TÌNH HUỐNG)

**Câu 8:** Trong một cuộc kiểm thử xâm nhập mạng nội bộ trường học, bạn nhận thấy website tra cứu điểm thi của trường chạy hệ điều hành Linux. Sau khi dùng lệnh `sudo nmap -sF [IP_Mục_Tiêu]` để quét cổng 80 (HTTP), bạn mở Wireshark lên kiểm tra dòng lưu lượng mạng và nhận thấy **không có bất kỳ phản hồi nào** quay ngược trở lại máy tấn công của bạn. Bạn kết luận thế nào về cổng 80 của mục tiêu?

* A. Cổng 80 đang bị ĐÓNG (Closed).
* B. Cổng 80 đang MỞ (Open) hoặc đang có Tường lửa chặn gói tin phản hồi.
* C. Hệ thống mạng của trường đã bị sập hoàn toàn do đòn tấn công từ chối dịch vụ.
* D. Lệnh quét cổng FIN Scan của bạn đã bị lỗi cú pháp thực thi.

**Đáp án đúng:** B
* **Giải thích:** Đối với hệ thống Linux, khi thực hiện FIN Scan, nếu cổng đang ĐÓNG thì máy chủ phải trả về gói `RST`. Việc hệ thống hoàn toàn im lặng (không phản hồi) chứng tỏ cổng 80 đó đang MỞ (tuân theo RFC 793) hoặc đang bị thiết bị tường lửa chặn lọc giữ lại không cho phản hồi ra ngoài.

**Câu 9:** Bạn được phân công đánh giá an ninh cho một doanh nghiệp có thiết bị IPS ngăn ngừa xâm nhập rất nhạy cảm. Thiết bị IPS này áp dụng cơ chế chặn tự động nếu phát hiện một chữ ký (Signature) chứa đầy đủ cấu trúc của một gói tin thăm dò Nmap thông thường. Bạn nên kết hợp cờ lệnh nào dưới đây để bẻ gãy chữ ký dữ liệu, giúp gói tin lướt qua bộ lọc lọc của IPS dễ dàng hơn?

* A. Sử dụng thêm cờ `-f` để thực hiện phân mảnh (Fragmentation) gói tin IP.
* B. Sử dụng thêm cờ `--badsum` để cố tình làm sai lệch mã băm kiểm tra checksum.
* C. Sử dụng thêm cờ `-sT` để chuyển đổi sang kiểu quét kết nối toàn phần đầy đủ.
* D. Sử dụng thêm cờ `-A` để kích hoạt tính năng dò tìm chuyên sâu hệ điều hành.

**Đáp án đúng:** A
* **Giải thích:** Cờ `-f` (Fragmentation) sẽ chia nhỏ tiêu đề TCP ra thành nhiều mảnh Header IP kích thước 8-byte nhỏ gọn đổ bộ rải rác vào mạng. Thiết bị IPS loại cũ hoặc cấu hình cơ bản không thể ghép nối kịp các mảnh này để đọc toàn bộ chữ ký thô, giúp hacker vượt qua bộ lọc. Dùng `--badsum` (B) khiến gói tin bị drop ngay lập tức, `-sT` (C) tạo ra nhiều tiếng động nhất, và `-A` (D) quét cực kỳ hung hãn và ồn ào.

**Câu 10:** Một nhân viên quản trị mạng văn phòng kinh doanh muốn dùng Nmap để rà soát nhanh các lỗ hổng dịch vụ từ xa (Remote Desktop) trên một máy trạm kế toán chạy Windows 11 vừa bàn giao. Câu lệnh nào dưới đây đạt hiệu quả cao nhất và cho kết quả chính xác với môi trường Windows này?

* A. `sudo nmap -sX -p 3389 [IP_Windows]`
* B. `sudo nmap -sN -p 3389 [IP_Windows]`
* C. `sudo nmap -sS -p 3389 [IP_Windows]`
* D. `sudo nmap -sF -p 3389 [IP_Windows]`

**Đáp án đúng:** C
* **Giải thích:** Cổng mặc định của Remote Desktop trên Windows là 3389. Vì mục tiêu chạy Windows, ba phương án quét ngầm `-sX` (A), `-sN` (B), `-sF` (D) chắc chắn sẽ trả về kết quả sai lệch (luôn báo cổng đóng do Windows gửi gói `RST`). Do đó, quét nửa mở `SYN Scan` (`-sS`) là lựa chọn duy nhất vừa đảm bảo độ tàn hình tương đối, vừa mang lại kết quả đúng 100% trên nền tảng Windows.

---

Bộ quiz này đã sẵn sàng phục vụ lớp học của bạn! Hãy thử sức ngay để củng cố vững chắc kiến thức của bài học ngày hôm nay.

Chúc bạn thực hiện bài test thật tốt và đạt điểm số tối đa! Việc làm chủ các cờ lệnh và cơ chế phản hồi TCP tầng thấp chính là bước đệm vững chắc đưa bạn trở thành một chuyên gia an toàn thông tin thực thụ. Luôn giữ vững tinh thần học hỏi nhé!