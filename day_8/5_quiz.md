Bộ quiz 10 câu trắc nghiệm theo lộ trình CEH v11 — **NGÀY 8: Liệt Kê Tài Nguyên (Enumeration) Căn Bản**.

Phân bổ cấp độ: 4 Nhận biết · 3 Thông hiểu · 3 Vận dụng.

---

## PHẦN BÀI KIỂM TRA (DÀNH CHO HỌC VIÊN)

**Câu 1 [Nhận biết]:** Tiến trình Liệt kê tài nguyên (Enumeration) thuộc giai đoạn nào trong quy trình hack một hệ thống (System Hacking) theo chuẩn CEH?

* A. Giai đoạn thu thập thông tin thụ động (Passive Footprinting).
* B. Giai đoạn duy trì quyền truy cập ổn định lâu dài (Maintaining Access).
* C. Giai đoạn thiết lập kết nối chủ động để trích xuất thông tin chi tiết.
* D. Giai đoạn che giấu vết tích và xóa nhật ký hệ thống (Clearing Logs).

---

**Câu 2 [Nhận biết]:** Trong cấu hình định danh tên của NetBIOS, ký tự thứ 16 (Hex code) có giá trị `<20>` biểu thị cho dịch vụ nào đang hoạt động trên hệ thống Windows?

* A. Workstation Service (Máy trạm thông thường).
* B. File Server Service (Dịch vụ chia sẻ tệp tin và máy in).
* C. Domain Controller Service (Máy chủ quản lý miền).
* D. Messenger Service (Dịch vụ gửi tin nhắn nội bộ).

---

**Câu 3 [Nhận biết]:** Các công cụ quét thông tin tự động thường nhắm vào cổng mặc định nào sau đây khi tiến hành kiểm tra giao thức quản lý mạng SNMP?

* A. Cổng 161 (UDP).
* B. Cổng 445 (TCP).
* C. Cổng 139 (TCP).
* D. Cổng 389 (UDP).

---

**Câu 4 [Nhận biết]:** Chuỗi ký tự xác thực mặc định nào thường được các hệ thống sử dụng cho cấu hình SNMP cũ, cho phép người dùng từ xa có quyền CHỈ ĐỌC (Read-Only) toàn bộ thông tin tài nguyên?

* A. administrative
* B. private
* C. public
* D. default

---

**Câu 5 [Thông hiểu]:** Điểm khác biệt cốt lõi nhất giữa giai đoạn Quét mạng (Network Scanning) và giai đoạn Liệt kê tài nguyên (Enumeration) là gì?

* A. Scanning hoàn toàn không gửi gói tin đến mục tiêu, còn Enumeration thì gửi lưu lượng rất lớn.
* B. Scanning chỉ xác định trạng thái mở/đóng của cổng, còn Enumeration thiết lập kết nối chủ động để truy vấn thông tin đặc định bên trong.
* C. Scanning chỉ thực hiện được từ ngoài Internet, còn Enumeration bắt buộc phải triển khai trong mạng LAN nội bộ.
* D. Scanning thu thập các bản ghi công khai trên môi trường DNS, còn Enumeration thu thập tên miền của doanh nghiệp.

---

**Câu 6 [Thông hiểu]:** Tại sao các chuyên gia bảo mật luôn khuyến cáo quản trị viên hệ thống nên nâng cấp cấu hình giám sát từ phiên bản SNMPv1/v2c lên phiên bản SNMPv3?

* A. SNMPv3 cho phép tốc độ truyền dữ liệu và phản hồi truy vấn của thiết bị mạng nhanh hơn gấp nhiều lần.
* B. SNMPv3 hỗ trợ cơ chế xác thực người dùng bằng mật khẩu kết hợp mã hóa dữ liệu truyền tải để chống nghe lén.
* C. SNMPv3 tự động khóa tài khoản của hacker nếu phát hiện có hành vi dò quét dò mật khẩu liên tục.
* D. SNMPv3 loại bỏ hoàn toàn việc sử dụng các cổng dịch vụ UDP truyền thống để chuyển sang dùng giao thức TCP bảo mật.

---

**Câu 7 [Thông hiểu]:** Một quản trị viên hệ thống bật tính năng ẩn máy tính của mình trên giao diện đồ họa (Tắt tính năng Network Discovery trong Windows). Dưới góc độ an ninh mạng, hành động này mang lại hiệu quả bảo vệ như thế nào?

* A. Tuyệt đối an toàn vì máy tính biến mất hoàn toàn khỏi mạng nội bộ và hacker không thể gửi gói tin đến.
* B. Chỉ ngăn chặn được người dùng phổ thông nhìn thấy máy, các cổng dịch vụ cốt lõi (139, 445) vẫn mở và vẫn bị quét ra bởi công cụ chuyên dụng.
* C. Khiến cho các lệnh dòng lệnh tích hợp sẵn như `nbtstat` hoặc `net view` không thể trả về kết quả.
* D. Thay đổi toàn bộ các mã Hex định danh của NetBIOS khiến hacker không thể phân biệt được loại dịch vụ.

---

**Câu 8 [Vận dụng]:** Bạn đang đứng trong mạng nội bộ và thực hiện lệnh `nbtstat -A 192.168.1.100`. Kết quả trả về chứa dòng thông tin sau: `KETOAN <03> UNIQUE Registered`. Dựa vào kiến thức về NetBIOS, bạn có thể khai thác hoặc biết được điều gì từ hệ thống mục tiêu này?

* A. Hệ thống này đang chạy dịch vụ chia sẻ file và bạn có thể dùng lệnh `net view` để liệt kê thư mục.
* B. Máy tính này đang mở dịch vụ Messenger Service, cho phép gửi các thông điệp dạng pop-up trực tiếp lên màn hình của họ.
* C. Đây là một máy chủ Domain Controller nắm giữ toàn bộ cơ sở dữ liệu tài khoản người dùng của công ty.
* D. Máy tính mục tiêu đang bị nhiễm mã độc gián điệp chạy ngầm trên cổng NetBIOS.

---

**Câu 9 [Vận dụng]:** Kiểm tra một máy chủ Linux trong mạng doanh nghiệp, công cụ giám sát báo động phát hiện có hàng trăm gói tin truy vấn liên tiếp gửi đến cổng 161 kèm theo các chuỗi thử nghiệm như `admin`, `cisco`, `root`, `manager`. Hệ thống này nhiều khả năng đang phải gánh chịu hình thức tấn công nào?

* A. Tấn công đầu độc bảng định tuyến ARP (ARP Poisoning).
* B. Tấn công từ chối dịch vụ làm cạn kiệt băng thông (DoS SYN Flood).
* C. Tấn công dò quét tìm kiếm chuỗi Community String của dịch vụ SNMP (SNMP Brute-Force).
* D. Tấn công nghe lén dữ liệu chưa được mã hóa bằng chế độ Promiscuous Mode.

---

**Câu 10 [Vận dụng]:** Là một chuyên gia kiểm thử xâm nhập (Penetration Tester), sau khi dùng công cụ `snmpcheck` thành công với chuỗi xác thực `private` trên một thiết bị Switch cốt lõi của khách hàng, hành động tiếp theo nào giúp chứng minh được mức độ nguy hại cao nhất của lỗ hổng này?

* A. Chụp cấu hình hiện tại của Switch rồi gửi báo cáo mà không thực hiện thêm bất cứ thay đổi nào.
* B. Sử dụng quyền Read-Write được cấp để thay đổi cấu hình cổng, chuyển hướng lưu lượng mạng hoặc tắt/mở các cổng kết nối từ xa.
* C. Thử tiến hành bẻ khóa mật khẩu cục bộ (SAM file) của hệ điều hành Windows đang chạy trên Switch đó.
* D. Thực hiện lệnh xóa toàn bộ nhật ký hệ thống (Event Logs) trên một máy chủ Windows Server nằm cạnh Switch.

---

## PHẦN ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

**Câu 1 — Đáp án: C**
- **Đúng:** Định nghĩa của Enumeration là thiết lập kết nối chủ động nhằm trích xuất thông tin chi tiết hệ thống.
- **Sai:** A thuộc bước 2 (Footprinting); B thuộc bước 4 (Maintaining Access); D thuộc bước 5 (Clearing Logs) trong quy trình tấn công hệ thống của CEH.

---

**Câu 2 — Đáp án: B**
- **Đúng:** Theo bảng đặc tả mã Hex NetBIOS của Microsoft, mã `<20>` đại diện cho File Server Service (chia sẻ file/máy in).
- **Sai:** A tương ứng với mã `<00>`; C tương ứng với mã `<1C>` hoặc `<1D>`; D tương ứng với mã `<03>`.

---

**Câu 3 — Đáp án: A**
- **Đúng:** Giao thức quản lý mạng SNMP chạy mặc định trên nền tảng giao thức UDP, cổng số 161.
- **Sai:** B (445) và C (139) là các cổng phục vụ dịch vụ NetBIOS/SMB trên Windows; D (389) là cổng dịch vụ danh bạ LDAP.

---

**Câu 4 — Đáp án: C**
- **Đúng:** Chuỗi `public` là cấu hình mặc định (Default Community String) kinh điển của SNMP được cấp quyền chỉ đọc (Read-Only).
- **Sai:** B (`private`) cấp quyền đọc-ghi (Read-Write); A và D là các chuỗi phỏng đoán không nằm trong cấu hình mặc định của giao thức.

---

**Câu 5 — Đáp án: B**
- **Đúng:** Bản chất Scanning chỉ gửi gói tin thăm dò phản hồi (gõ cửa xem nhà ai mở), còn Enumeration đi sâu vào tạo phiên kết nối hợp lệ để truy vấn lấy dữ liệu cấu trúc bên trong.
- **Sai:** Cả hai bước đều gửi dữ liệu nên A sai; cả hai bước đều có thể chạy nội bộ hoặc từ xa nên C sai; DNS thuộc giai đoạn Footprinting nên D sai.

---

**Câu 6 — Đáp án: B**
- **Đúng:** Các phiên bản SNMPv1 và v2c gửi Community String dưới dạng văn bản rõ (Plaintext) rất dễ bị nghe lén, trong khi SNMPv3 bổ sung hai tính năng cốt lõi là Authentication (xác thực) và Encryption (mã hóa gói tin).
- **Sai:** A sai vì SNMPv3 tăng tính bảo mật chứ không tối ưu tốc độ phần cứng; C sai vì SNMPv3 không có tính năng tự động khóa IP; D sai vì SNMPv3 vẫn duy trì chạy trên nền UDP cổng 161/162.

---

**Câu 7 — Đáp án: B**
- **Đúng:** Ẩn Network Discovery chỉ đơn thuần là không phản hồi gói tin quảng bá (Broadcast) hiển thị trên giao diện đồ họa Windows Explorer. Các dịch vụ hệ thống chạy ngầm phục vụ chia sẻ dữ liệu (SMB/NetBIOS) qua cổng TCP 139, 445 vẫn mở nên hacker vẫn quét ra dễ dàng.
- **Sai:** A, C, D đều sai vì các công cụ quét cấp thấp không phụ thuộc vào giao diện đồ họa.

---

**Câu 8 — Đáp án: B**
- **Đúng:** Mã Hex `<03>` của NetBIOS đại diện cho Messenger Service, dịch vụ cho phép nhận và hiển thị các tin nhắn văn bản dạng pop-up trên màn hình máy mục tiêu.
- **Sai:** A sai vì chia sẻ file yêu cầu mã `<20>`; C sai vì Domain Controller yêu cầu mã dạng nhóm đặc biệt như `<1C>`; D sai vì đây là tính năng hợp lệ của hệ thống chứ không phải hành vi mã độc.

---

**Câu 9 — Đáp án: C**
- **Đúng:** Việc gửi liên tục hàng loạt từ khóa thông dụng (`admin`, `cisco`...) vào cổng 161 (SNMP) chứng tỏ kẻ tấn công đang cố gắng đoán bừa (Brute-Force) chuỗi Community String nhằm chiếm quyền kiểm soát thông tin thiết bị.
- **Sai:** A nhắm vào giao thức ARP; B nhắm vào làm sập hệ thống bằng cạn kiệt tài nguyên; D là hành vi bắt gói tin thụ động, không gửi lưu lượng dồn dập vào cổng 161.

---

**Câu 10 — Đáp án: B**
- **Đúng:** Chuỗi Community String `private` cấp quyền Read-Write (Đọc-Ghi). Do đó, hành động cấu hình lại thiết bị (như tắt cổng mạng, chuyển hướng lưu lượng qua máy hacker) thể hiện mức độ nguy hại cao nhất khi hacker can thiệp sâu vào luồng vận hành vật lý của mạng.
- **Sai:** A chưa chứng minh được mức độ nguy hại tối đa; C sai vì Switch chạy hệ điều hành chuyên dụng (như Cisco IOS) chứ không có tệp tin SAM của Windows; D sai vì Switch không trực tiếp lưu trữ Event Logs của một máy chủ Windows độc lập khác.
