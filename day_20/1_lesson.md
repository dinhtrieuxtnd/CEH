# BÀI GIẢNG CHI TIẾT: NGÀY 20 – TẤN CÔNG ĐÁNH SẬP HỆ THỐNG (DoS/DDoS)

**Mục tiêu bài giảng:** * Phân biệt rõ ràng giữa cuộc tấn công Từ chối dịch vụ DoS và DDoS.

* Thấu hiểu sâu sắc cơ chế cạn kiệt tài nguyên của các đòn tấn công lũ lụt mạng phổ biến (SYN Flood, UDP Flood, ICMP Flood).


* Nắm vững khái niệm "Mạng máy tính ma" (Botnet).


* Đề xuất tư duy và giải pháp phòng thủ vững chắc để bảo vệ tính Sẵn sàng (Availability) của hệ thống.



---

## 1. MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Hãy tưởng tượng bạn đang là chủ của một quán trà sữa vô cùng đông khách vào giờ cao điểm. Quán của bạn chỉ có một quầy thu ngân duy nhất với một nhân viên phục vụ và một máy in hóa đơn. Bỗng nhiên, có một nhóm khoảng 50 người ăn mặc lịch sự, tràn vào quán. Họ không hề đập phá, không la hét, nhưng họ xếp thành một hàng dài dằng dặc trước quầy. Cứ mỗi người tiến lên, họ lại hỏi nhân viên những câu hỏi kiểu: *"Menu này có tổng cộng bao nhiêu hạt trân châu?"*, *"Cho tôi xin một ly nước lọc đá nhưng chia làm ba cốc nhỏ"*... rồi đứng phân vân rất lâu mà không mua gì cả.

Lúc này, những vị khách thực sự muốn mua trà sữa không thể nào tiếp cận được quầy thu ngân, họ đành bực bội bỏ đi. Nhân viên của bạn thì kiệt sức, máy in hóa đơn thì nghẽn mạng, và doanh thu của quán hôm đó bằng không.

Trong thế giới mạng mạng, đòn tấn công **DoS (Denial of Service - Từ chối dịch vụ)** hay **DDoS (Distributed Denial of Service - Từ chối dịch vụ phân tán)** hoạt động chính xác theo cách như vậy. Kẻ tấn công không cần "ăn trộm" dữ liệu của bạn, chúng chỉ đơn giản là làm cho hệ thống của bạn bận rộn đến mức tê liệt, không thể phục vụ những người dùng hợp pháp. Hôm nay, chúng ta sẽ cùng nhau bóc tách thứ vũ khí "lấy thịt đè người" khét tiếng này.

---

## 2. KIẾN THỨC CỐT LÕI (CORE KNOWLEDGE)

Để làm chủ được lý thuyết chuẩn CEH v11 về DoS/DDoS, chúng ta sẽ chuyển hóa các thuật ngữ chuyên môn khô khan thành các khái niệm đời sống dễ hiểu nhất.

### 2.1. Phân biệt DoS và DDoS: Sức mạnh của số đông

* 
**DoS (Denial of Service):** Là cuộc tấn công xuất phát từ **một nguồn duy nhất** (một máy tính, một địa chỉ IP) nhắm vào một mục tiêu.


* *Ví dụ:* Một kẻ phá hoại liên tục bấm nút gọi điện thoại tới hotline của một công ty làm cho đường dây luôn bận. Việc chặn DoS khá đơn giản: bạn chỉ cần tìm ra số điện thoại (hoặc IP) đó và chặn đứng (Block) nó lại.


* 
**DDoS (Distributed Denial of Service):** Là cuộc tấn công **phân tán**, xuất phát từ **hàng ngàn, hàng triệu nguồn khác nhau** đồng thời dội lưu lượng vào một mục tiêu.


* *Ví dụ:* Thay vì một người, kẻ xấu thuê hẳn 10.000 người từ khắp các tỉnh thành cùng gọi vào hotline của bạn một lúc. Bạn không thể chặn tất cả vì bạn không biết đâu là cuộc gọi của khách hàng thật, đâu là của kẻ phá hoại.



### 2.2. Botnet – "Đội quân thây ma" (Zombie Army)

Làm thế nào mà một hacker có thể huy động hàng triệu máy tính tấn công bạn cùng một lúc? Câu trả lời chính là **Botnet**.

* 
**Bot (hoặc Zombie):** Là một máy tính, điện thoại, hoặc thiết bị thông minh (như camera IP, bộ định tuyến Wi-Fi) của người dùng bình thường bị nhiễm mã độc độc. Mã độc này chạy ngầm, không phá hoại dữ liệu nên người dùng hoàn toàn không hay biết thiết bị của mình đã bị kiểm soát.


* 
**Botmaster (Kẻ điều khiển):** Là hacker đứng sau cánh gà.


* **Command and Control Server (C&C Server - Máy chủ điều khiển):** Là trung tâm điều hành do hacker dựng lên.

> **Cơ chế hoạt động:** Khi muốn đánh sập một trang web, Botmaster chỉ cần gửi một lệnh duy nhất từ máy tính của mình tới C&C Server: *"Tất cả tấn công trang web X!"*. Ngay lập tức, hàng triệu thiết bị "Zombie" trên toàn cầu sẽ đồng loạt gửi dữ liệu về trang web X, bóp nghẹt băng thông của mục tiêu.
> 
> 

### 2.3. Bản chất của các đòn tấn công lũ lụt (Flood Attacks)

Hacker thường sử dụng 3 loại "lũ lụt mạng" phổ biến sau đây để đánh sập hệ thống:

#### 2.3.1. SYN Flood – Đòn tấn công "bắt tay nửa vời"

Đây là đòn tấn công tầng Giao vận (Transport Layer) khai thác lỗ hổng trong quy trình bắt tay 3 bước (3-way handshake) của giao thức TCP.

* 
**Quy trình bình thường:** 1. Người dùng gửi gói tin `SYN` (Chào anh, tôi muốn kết nối).
2. Máy chủ phản hồi `SYN-ACK` (Chào bạn, tôi đã mở phòng chờ cho bạn, hãy gửi xác nhận để vào).
3. Người dùng gửi gói tin `ACK` (Ok, tôi vào đây). Kết nối thiết lập thành công.


* 
**Kịch bản SYN Flood:** Kẻ tấn công gửi liên tục hàng triệu gói tin `SYN` với IP giả mạo. Máy chủ ngoan ngoãn phản hồi `SYN-ACK` và dành ra một phần bộ nhớ (phòng chờ) để đợi gói tin `ACK` cuối cùng. Nhưng kẻ tấn công **im lặng và không bao giờ gửi gói `ACK**`.


* 
*Hậu quả:* Máy chủ bị cạn kiệt bộ nhớ vì phải giữ quá nhiều "phòng chờ" cho những kết nối ma, dẫn đến sập hệ thống.



#### 2.3.2. UDP Flood – Làm kiệt quệ tài nguyên cổng

Giao thức UDP là giao thức "không tin cậy", nó gửi dữ liệu đi mà không cần bắt tay hay kiểm tra xem bên nhận có sẵn sàng hay không.

* 
**Kịch bản UDP Flood:** Hacker gửi một lượng khổng lồ các gói tin UDP vào các cổng ngẫu nhiên trên máy chủ mục tiêu.


* *Cơ chế gây sập:* Khi nhận được một gói tin UDP vào một cổng không mở, máy chủ sẽ phải mất công kiểm tra ứng dụng, phát hiện không có ai nhận, sau đó phải sinh ra một gói tin báo lỗi `ICMP Destination Unreachable` gửi ngược trở lại. Việc liên tục kiểm tra và gửi báo lỗi với tần suất hàng triệu lần/giây khiến CPU của máy chủ bị quá tải 100%.



#### 2.3.3. ICMP Flood – Làm nghẽn băng thông đường truyền

ICMP là giao thức dùng để kiểm tra trạng thái mạng (lệnh Ping mà chúng ta học ở Ngày 5).

* 
**Kịch bản ICMP Flood (hoặc Ping Flood):** Kẻ tấn công gửi các gói tin Ping liên tục với dung lượng lớn nhất có thể tới mục tiêu.


* *Cơ chế gây sập:* Máy chủ nhận được bao nhiêu gói Ping thì phải tốn bấy nhiêu băng thông để phản hồi lại (Ping Reply). Đòn tấn công này giống như việc đổ một xô nước lớn vào một cái phễu nhỏ, làm tràn ngập toàn bộ băng thông đường truyền Internet của nạn nhân, khiến không một dữ liệu nào khác có thể chen chân vào được.



---

## 3. PHÂN TÍCH SÂU (DEEP DIVE)

Để thấu hiểu toàn diện về DoS/DDoS, một Ethical Hacker cần nhìn nhận vấn đề dưới 2 góc nhìn phản biện cốt lõi:

### Góc nhìn 1: Sự bất đối xứng chi phí giữa Tấn công và Phòng thủ

Tấn công DDoS là đỉnh cao của sự bất đối xứng trong an ninh mạng.

* **Phía Hacker:** Chi phí để thực hiện một cuộc tấn công DDoS ngày nay cực kỳ rẻ. Hacker không cần có kiến thức quá cao siêu, chúng có thể lên các "chợ đen" (Dark Web) để thuê các dịch vụ Botnet (gọi là DDoS-as-a-Service) với giá chỉ vài đô la cho một giờ tấn công.
* **Phía Doanh nghiệp:** Để chống lại trận lũ lụt dữ liệu này, doanh nghiệp phải đầu tư những hệ thống tường lửa phần cứng đắt đỏ, thuê băng thông dự phòng cực lớn, hoặc mua các dịch vụ giảm thiểu DDoS (DDoS Mitigation) từ các ông lớn như Cloudflare, Akamai với chi phí hàng ngàn đô la mỗi tháng.
* 
*Bài học tư duy:* Do đó, bảo vệ hệ thống trước DDoS không phải là tìm cách "ngăn chặn kẻ xấu không cho chúng tấn công" (vì ta không thể quản lý máy tính của người khác), mà là **xây dựng một hệ thống có tính chịu lỗi cao và có khả năng hấp thụ/lọc bỏ lưu lượng rác**.



### Góc nhìn 2: Tấn công tầng Hạ tầng (Volumetric) vs Tấn công tầng Ứng dụng (Application Layer)

Chúng ta cần phân biệt rõ hai trường phái tấn công để có giải pháp phòng thủ đúng chỗ:

* 
**Tấn công tầng Hạ tầng (Layer 3/4 - như SYN/UDP/ICMP Flood):** Đánh vào băng thông mạng và năng lực xử lý của thiết bị định tuyến. Mục tiêu là làm "tắc nghẽn đường cao tốc". Kỹ thuật này dễ bị phát hiện vì lưu lượng (Traffic) tăng đột biến một cách bất thường.


* **Tấn công tầng Ứng dụng (Layer 7 - HTTP Flood):** Hacker không gửi lưu lượng lớn. Chúng chỉ giả lập hành vi của người dùng thật gửi các yêu cầu hợp pháp nhưng tốn tài nguyên máy chủ.


* 
*Ví dụ:* Thay vì tải trang chủ, robot của hacker liên tục gửi yêu cầu vào ô "Tìm kiếm sản phẩm kèm theo bộ lọc thông minh" hoặc bấm "Xuất báo cáo PDF tài chính". Những câu lệnh này buộc máy chủ phải truy vấn sâu vào cơ sở dữ liệu (Database), khiến RAM và CPU của máy chủ sập nguồn trong khi băng thông mạng trông vẫn rất bình thường. Đây là loại tấn công cực kỳ tinh vi và khó phòng chống nhất.





---

## 4. CÁCH ÁP DỤNG VÀO THỰC TẾ (PRACTICAL APPLICATION)

Với tư cách là một chuyên gia bảo mật mũ trắng, bạn không được tự ý đi tấn công hệ thống của người khác, nhưng bạn hoàn toàn có thể áp dụng tư duy phòng ngự DDoS thông qua quy trình 3 bước sau:

### Bước 1: Giảm thiểu vùng phơi nhiễm (Attack Surface Reduction)

Hãy rà soát và đóng tất cả các cổng dịch vụ không cần thiết trên máy chủ của bạn (như chúng ta đã học cách dùng Nmap rà quét ở Ngày 5 & 6).

* Nếu máy chủ của bạn chỉ làm nhiệm vụ chạy Website, hãy chỉ mở cổng 80 (HTTP) và 443 (HTTPS).


* Đóng ngay các cổng dễ bị lợi dụng để khuếch đại tấn công UDP hoặc ICMP như cổng DNS (53), NTP (123) ra ngoài Internet công cộng.



### Bước 2: Cấu hình Tường lửa hạn chế tốc độ (Rate Limiting)

Bạn cần thiết lập các quy tắc trên tường lửa (Firewall) hoặc máy chủ Web (như Nginx/Apache) để giới hạn số lượng kết nối từ một địa chỉ IP trong một khoảng thời gian.

* *Hướng dẫn tư duy:* Một người dùng bình thường không thể bấm F5 (tải lại trang) 100 lần trong vòng 1 giây. Nếu phát hiện bất kỳ IP nào gửi quá 30 requests/giây, hệ thống sẽ tự động đưa IP đó vào danh sách đen (Blacklist) trong vòng 30 phút.
* *Cách cấu hình (Ý niệm):* Sử dụng các module có sẵn như `limit_req` trong Nginx để chặn đứng các đòn tấn công HTTP Flood sơ đẳng.

### Bước 3: Triển khai giải pháp Reverse Proxy (Học thuyết "Khiên bảo vệ")

Đối với các doanh nghiệp, giải pháp tối ưu nhất hiện nay là đưa hệ thống ra sau một dịch vụ Cloud Mitigation (như Cloudflare).

* **Cơ chế:** Toàn bộ lưu lượng Internet từ người dùng thay vì đi thẳng vào máy chủ của bạn thì sẽ phải đi qua hệ thống máy chủ khổng lồ của Cloudflare trước.
* Hệ thống này sẽ đóng vai trò như một "màng lọc tinh vi", sử dụng trí tuệ nhân tạo để phân tích: đâu là người dùng thật (cho đi qua), đâu là gói tin của Botnet/Robot (chặn lại hoặc bắt xác thực CAPTCHA). Máy chủ thật của bạn sẽ hoàn toàn ẩn mình an toàn phía sau bức khiên này.



---

## 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

❌ **Sai lầm 1: Lầm tưởng cứ tăng băng thông mạng và nâng cấp RAM/CPU máy chủ là sẽ chống được DDoS.**

* *Thực tế:* Đây là một cuộc đua đốt tiền mà doanh nghiệp chắc chắn thua. Đội quân Botnet toàn cầu có thể tạo ra lưu lượng lên tới hàng Terabit mỗi giây ($Tbps$), lớn hơn toàn bộ băng thông của một trung tâm dữ liệu nhỏ. Nâng cấp phần cứng mà không có cơ chế lọc lưu lượng rác thì hệ thống của bạn chỉ chịu đựng được thêm vài phút trước khi sập hẳn.

❌ **Sai lầm 2: Chỉ lo chống tấn công DoS/DDoS ở tầng mạng (Layer 3/4) mà quên mất tầng ứng dụng (Layer 7).**

* 
*Thực tế:* Như đã phân tích ở phần Deep Dive, một cuộc tấn công HTTP Flood tinh vi có thể hạ gục website của bạn chỉ với vài trăm gói tin được thiết kế hiểm hóc nhắm vào lỗ hổng logic hoặc các câu lệnh truy vấn database nặng, khiến tường lửa tầng mạng hoàn toàn bất lực.



❌ **Sai lầm 3: Nhầm lẫn sự cố nghẽn mạng tự nhiên (Flash Crowd) với tấn công DDoS.**

* *Thực tế:* Khi trường học mở cổng đăng ký tín chỉ, hoặc doanh nghiệp tung ra chương trình khuyến mãi "Săn Sale 0 đồng", hàng vạn người dùng thật sẽ ùa vào website cùng một lúc. Hệ thống bị sập do quá tải tự nhiên. Người quản trị không được vội vã chặn IP vô tội vạ (vì đó là khách hàng), mà phải sử dụng các giải pháp hàng đợi (Queue), cân bằng tải (Load Balancing) và tối ưu hóa mã nguồn.

---

## CÂU HỎI ÔN TẬP VÀ BÀI TẬP TỰ RÈN LUYỆN

Để khắc sâu kiến thức của Ngày 20, bạn hãy dành 10 phút tự trả lời các câu hỏi sau vào sổ tay:

1. Trong đòn tấn công SYN Flood, tại sao máy chủ lại bị cạn kiệt tài nguyên bộ nhớ? Kẻ tấn công đã làm gì (hoặc không làm gì) để gây ra điều đó?


2. Một camera IP thông minh ở nhà bạn nếu bị mật khẩu yếu và bị hacker chiếm quyền điều khiển để tham gia vào một cuộc tấn công DDoS, thì camera đó được gọi là thuật ngữ gì trong bài học?


3. Nếu bạn cấu hình tường lửa chặn hoàn toàn giao thức ICMP (khóa lệnh Ping), hệ thống của bạn có thể né được đòn tấn công ICMP Flood không? Việc này mang lại lợi ích và tác hại gì cho người quản trị mạng?