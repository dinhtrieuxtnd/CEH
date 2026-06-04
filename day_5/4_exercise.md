Chào bạn! Với tư cách là một chuyên gia đào tạo theo phương pháp **"Học qua hành" (Action Learning)**, tôi đã thiết kế bộ bài tập thực hành dành riêng cho **NGÀY 5** dựa trên tài liệu chuẩn CEH v11 Module 03 (Scanning Networks).

Các bài tập này được xây dựng từ các tình huống thực tế mà bất kỳ nhân viên văn phòng, giáo viên, hay người làm kinh doanh nào cũng có thể gặp phải trong công việc hàng ngày. Bộ bài tập có hướng dẫn chi tiết từng bước (Step-by-Step) để người học tự hoàn thành một cách độc lập mà không cần trợ giảng.

---

## BÀI TẬP 1: XÁC ĐỊNH THIẾT BỊ SỐNG TRONG MẠNG VĂN PHÒNG (MỨC ĐỘ: CƠ BẢN)

* **Thời gian hoàn thành dự kiến:** 20 phút.
* **Tình huống thực tế:** Bạn là một nhân viên hành chính/kinh doanh tại một văn phòng chi nhánh. Sáng nay, công ty vừa lắp đặt một chiếc máy in mạng (Network Printer) mới và một ổ cứng lưu trữ chung (NAS) phục vụ lưu file văn bản. Tuy nhiên, kỹ thuật viên rời đi mà quên rà soát và ghi lại địa chỉ IP của các thiết bị này, khiến mọi người trong văn phòng không thể kết nối để in tài liệu hoặc lấy file. Bạn cần tìm ra các thiết bị đang online trong mạng để lấy lại thông tin IP.

### 1. Yêu cầu cụ thể

1. Xác định chính xác dải mạng nội bộ (Subnet) mà máy tính của bạn đang kết nối.
2. Thực hiện kỹ thuật quét Ping diện rộng (Ping Sweep) bằng Nmap để liệt kê toàn bộ các máy chủ/thiết bị đang hoạt động (`Live Hosts`) trong văn phòng.

### 2. Hướng dẫn cách làm chi tiết

* **Bước 1: Tìm dải mạng của bạn**
* Mở Terminal trên Kali Linux (hoặc CMD trên Windows nếu dùng Nmap cho Windows).
* Gõ lệnh: `ip a` hoặc `ifconfig` (nếu dùng Windows gõ: `ipconfig`).
* Tìm dải mạng tại mục kết nối mạng dây (`eth0`/`enp3s0`) hoặc Wi-Fi (`wlan0`). Nhìn vào dòng `inet`. Ví dụ bạn thấy: `192.168.1.45/24` $\rightarrow$ dải mạng của bạn là `192.168.1.0/24`.


* **Bước 2: Thực hiện quét Ping Sweep diện rộng**
* Để quét nhanh không làm nghẽn mạng văn phòng và không quét sâu vào cổng, gõ lệnh Nmap sau:
```bash
nmap -sn [Dải_mạng_của_bạn]/24

```


*(Ví dụ: `nmap -sn 192.168.1.0/24`)*
* Đợi Nmap chạy trong vài giây và quan sát kết quả trả về.



### 3. Tiêu chí đánh giá kết quả

* **ĐẠT:** Xuất ra được danh sách các IP đang hoạt động kèm trạng thái `Host is up`. Người học chỉ ra được đâu là IP của Router (thường là `.1`) và liệt kê được tổng số thiết bị số tìm thấy trong phòng.
* **XUẤT SẮC:** Chụp lại được ảnh màn hình Terminal kết quả sạch sẽ và ghi chú rõ ràng các IP nghi ngờ là máy in hoặc ổ cứng lưu trữ dựa trên địa chỉ MAC hiển thị (nếu quét bằng quyền `sudo nmap -sn ...`).

---

## BÀI TẬP 2: KIỂM TRA "CỬA MỞ" CỦA HỆ THỐNG DẠY HỌC/KÌNH DOANH TRỰC TUYẾN (MỨC ĐỘ: TRUNG BÌNH)

* **Thời gian hoàn thành dự kiến:** 30 phút.
* **Tình huống thực tế:** Bạn là một giáo viên đang quản lý một máy chủ bài giảng trực tiếp qua mạng (E-learning web server) nội bộ, hoặc bạn là một chủ hộ kinh doanh đang vận hành một máy chủ quản lý kho hàng chạy cục bộ tại địa chỉ IP `192.168.1.20` (hoặc một IP mục tiêu cụ thể trong phòng Lab của bạn). Bạn nghe nói có nhiều vụ tấn công mạng phá hoại tài liệu lớp học/dữ liệu kinh doanh thông qua các cổng dịch vụ không an toàn. Bạn cần thực hiện rà soát các cổng (Port Scanning) để biết máy chủ này đang "mở cửa" cho những dịch vụ nào ra bên ngoài.

### 1. Yêu cầu cụ thể

1. Quét rà soát 1.000 cổng mặc định phổ biến nhất trên máy chủ mục tiêu.
2. Đọc hiểu trạng thái của cổng (`open`, `closed`, `filtered`) và xác định các cổng dịch vụ quan trọng phục vụ công việc đang chạy.

### 2. Hướng dẫn cách làm chi tiết

* **Bước 1: Chạy lệnh quét cổng cơ bản**
* Mở Terminal trên máy Kali Linux.
* Nhập lệnh quét Nmap mặc định nhắm vào IP mục tiêu (thay IP bên dưới bằng IP máy ảo Lab hoặc thiết bị của bạn):
```bash
nmap 192.168.1.20

```




* **Bước 2: Phân tích bảng trạng thái cổng (Port State)**
* Nhìn vào kết quả cột `PORT` và `STATE`.
* Nếu thấy cổng **80/tcp** hoặc **443/tcp** có trạng thái `open`: Máy chủ đang mở cửa chạy dịch vụ Web (Web Server) phục vụ xem bài giảng hoặc đặt hàng.
* Nếu thấy cổng **22/tcp** hoặc **23/tcp** `open`: Máy chủ đang mở tính năng quản trị từ xa (SSH/Telnet). Cần lưu ý cổng 23 (Telnet) vì nó truyền dữ liệu dạng văn bản rõ, cực kỳ nguy hiểm.
* Nếu trạng thái là `filtered`: Cổng này đang được bảo vệ bởi tường lửa.



### 3. Tiêu chí đánh giá kết quả

* **ĐẠT:** Lập được bảng danh sách các cổng đang ở trạng thái `open` trên thiết bị mục tiêu.
* **XUẤT SẮC:** Trả lời chính xác câu hỏi phản biện: *"Nếu cổng 80 (HTTP) mở công khai nhưng cổng 21 (FTP - truyền file) và cổng 23 (Telnet) cũng đang mở công khai thì hệ thống này có nguy cơ gì đối với công việc hàng ngày của bạn?"* (Gợi ý: Kẻ xấu có thể dò mật khẩu FTP để đánh cắp tệp tin dữ liệu hoặc nghe lén mật khẩu quản trị qua Telnet).

---

## BÀI TẬP 3: THIẾT KẾ BẢN ĐỒ TOPO MẠNG KHẨN CẤP CHO DOANH NGHIỆP (MỨC ĐỘ: NANG CAO)

* **Thời gian hoàn thành dự kiến:** 45 phút.
* **Tình huống thực tế:** Ban giám đốc công ty văn phòng/trường học của bạn chuẩn bị đón một đoàn kiểm toán an ninh mạng độc lập. Trưởng phòng yêu cầu bạn ngay lập tức lập một báo cáo sơ đồ kiến trúc mạng (Network Topology Diagram) hiện tại của phòng ban để chứng minh doanh nghiệp kiểm soát tốt tài sản công nghệ thông tin. Bạn không thể đi hỏi từng người hay lật từng dây cáp mạng. Bạn phải dùng công cụ để tự động dựng lại bản đồ kết nối này một cách trực quan.

### 1. Yêu cầu cụ thể

1. Sử dụng kết hợp các kỹ thuật quét dải mạng và quét cổng để thu thập thông tin của toàn bộ các nút mạng.
2. Sử dụng công cụ trực quan hóa (Zenmap Topology hoặc Draw.io) để vẽ một bản đồ mạng hoàn chỉnh bao gồm: Máy định tuyến trung tâm (Router), máy quét (Attacker), và các máy mục tiêu (Targets) phân chia theo các dịch vụ cốt lõi mà chúng đang chạy.

### 2. Hướng dẫn cách làm chi tiết

* **Cách làm cách 1 (Dành cho người thích giao diện đồ họa - Zenmap):**
* Mở công cụ **Zenmap** (Giao diện đồ họa của Nmap trên Kali Linux) bằng cách gõ `sudo zenmap` vào Terminal.
* Tại ô **Target**, điền dải mạng của bạn (Ví dụ: `192.168.1.0/24`).
* Tại ô **Profile**, chọn `Intense scan` (Quét chuyên sâu để dò cả hệ điều hành thiết bị) hoặc `Regular scan`. Bấm **Scan**.
* Sau khi quét xong, nhấn vào tab **Topology**. Hệ thống sẽ tự động vẽ một sơ đồ dạng vòng tròn kết nối từ máy của bạn qua Router đến các thiết bị khác.


* **Cách làm cách 2 (Dành cho người thiết kế sơ đồ báo cáo chuyên nghiệp):**
* Chạy lệnh quét dải mạng trên Terminal: `nmap -F 192.168.1.0/24` để tìm nhanh các cổng mở của cả dải mạng.
* Truy cập trang web thiết kế sơ đồ miễn phí [Draw.io](https://app.diagrams.net/).
* Kéo các biểu tượng thiết bị (Router, Laptop, Server, Smartphone) vào khung thiết kế.
* Gắn nhãn (Label) địa chỉ IP và các cổng mở tương ứng cho từng biểu tượng thiết bị dựa theo kết quả quét được từ Nmap để hoàn thành sơ đồ.



### 3. Tiêu chí đánh giá kết quả

* **ĐẠT:** Vẽ được sơ đồ topo mạng thể hiện được cấu trúc hình sao (Star Topology) hoặc hình cây kết nối từ Router chính xuống tối thiểu 3 thiết bị trong mạng, có ghi rõ địa chỉ IP dưới mỗi thiết bị.
* **XUẤT SẮC:** Bản đồ mạng đạt chuẩn báo cáo kiểm toán, hiển thị đầy đủ: Địa chỉ IP, địa chỉ MAC, hệ điều hành đoán định của thiết bị (Windows/Linux/iOS/Android), và các cổng dịch vụ mở cốt lõi (Ví dụ: `192.168.1.20 - Web Server - Ports: 80, 443`).

---

## 🛠️ KHUNG TỰ CHẤM ĐIỂM (SELF-ASSESSMENT)

Người học hãy đối chiếu kết quả thực hành của mình với bảng dưới đây để tự đánh giá năng lực sau bài tập:

| Mức điểm | Danh hiệu | Tiêu chuẩn tự kiểm tra |
| --- | --- | --- |
| **3 - 4 điểm** | **Tập sự mạng** | Hoàn thành Bài tập 1. Biết gõ lệnh để tìm IP của mình và chạy lệnh quét Ping Sweep cơ bản. |
| **5 - 7 điểm** | **Chuyên viên rà soát** | Hoàn thành Bài tập 1 và Bài tập 2. Phân biệt được cổng nào đóng, cổng nào mở và đọc vị được mục đích của máy chủ mục tiêu đang làm gì. |
| **8 - 10 điểm** | **Kiến trúc sư an ninh** | Hoàn thành xuất sắc cả 3 bài tập. Vẽ được sơ đồ mạng trực quan có đầy đủ thông tin kỹ thuật, có tư duy bảo vệ tài sản số của văn phòng. |

*Chúc các bạn hoàn thành xuất sắc các thử thách thực binh của Ngày 5! Hãy nhớ quy tắc an toàn: Không mang các câu lệnh này quét ra ngoài phạm vi mạng nội bộ mạng mạng của mình.*