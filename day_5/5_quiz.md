# 📝 BỘ QUIZ TRẮC NGHIỆM: NGÀY 5 (QUÉT MẠNG & DÒ TÌM HỆ THỐNG)

*Thời gian làm bài gợi ý: 15-20 phút*

---

## PHẦN 1: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

### Câu 1

**Lệnh `ping` thông thường sử dụng giao thức nào của tầng Mạng (Network Layer) để kiểm tra kết nối giữa hai thiết bị?**

- A. TCP (Transmission Control Protocol)
- B. UDP (User Datagram Protocol)
- C. ICMP (Internet Control Message Protocol)
- D. ARP (Address Resolution Protocol)

### Câu 2

**Tổng số lượng cổng (ports) logic tối đa có thể tồn tại trên một giao diện mạng máy tính là bao nhiêu?**

- A. 1.024
- B. 443
- C. 65.535
- D. 100.000

### Câu 3

**Trong công cụ Nmap, tùy chọn (flag) nào được sử dụng để thực hiện kỹ thuật "Ping Sweep" nhằm quét nhanh các máy chủ đang hoạt động mà không tiến hành quét cổng sâu?**

- A. `-sS`
- B. `-sn`
- C. `-p-`
- D. `-sV`

### Câu 4

**Cổng dịch vụ mạng mặc định của giao thức bảo mật lớp truyền tải HTTPS dùng cho website an toàn là cổng số mấy?**

- A. 80
- B. 21
- C. 22
- D. 443

---

## PHẦN 2: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

### Câu 5

**Khi thực hiện lệnh `ping` đến một địa chỉ IP máy chủ trên Internet và nhận được thông báo "Request timed out", kết luận nào sau đây là chính xác nhất về mặt bản chất an ninh mạng?**

- A. Máy chủ đó chắc chắn đã bị sập nguồn hoặc ngắt hoàn toàn kết nối vật lý khỏi Internet.
- B. Tường lửa của máy chủ hoặc thiết bị bảo vệ chặn gói tin ICMP Echo Request hoặc Echo Reply.
- C. Băng thông đường truyền Internet của bạn đã bị nghẽn hoàn toàn không thể gửi tin đi.
- D. Máy chủ mục tiêu không hỗ trợ dải địa chỉ IP nguồn của người dùng.

### Câu 6

**Tại sao cấu hình mặc định của Nmap chỉ thực hiện quét 1.000 cổng (ports) thay vì quét toàn bộ các cổng hiện có trên hệ thống mục tiêu?**

- A. Vì hệ điều hành máy tính thông thường không cho phép rà soát vượt quá con số 1.000 cổng.
- B. Để cân bằng giữa tốc độ quét, hiệu năng hệ thống và độ chính xác, do 1.000 cổng này chứa hầu hết các dịch vụ phổ biến trên thế giới.
- C. Do Nmap phiên bản miễn phí bị giới hạn tính năng và bắt buộc phải trả phí để quét nhiều hơn.
- D. Vì các cổng có số thứ tự từ 1.001 đến 65.535 luôn ở trạng thái đóng trên mọi hệ điều hành.

### Câu 7

**Trạng thái cổng `filtered` (Bị lọc) trong kết quả trả về của một câu lệnh Nmap có ý nghĩa bản chất là gì?**

- A. Cổng đó chắc chắn đang mở và sẵn sàng tiếp nhận mọi kết nối.
- B. Không có bất kỳ ứng dụng hay dịch vụ nào đang lắng nghe tại cánh cửa đó.
- C. Nmap không thể xác định được cổng đóng hay mở do gói tin thăm dò bị tường lửa hoặc bộ lọc gói tin ngăn chặn.
- D. Cổng đó đã bị hacker tấn công và chiếm quyền điều khiển từ trước.

---

## PHẦN 3: MỨC ĐỘ VẬN DỤNG (3 CÂU)

### Câu 8

**Bạn đang đứng ở máy kiểm thử (Kali Linux) có IP là `192.168.1.15`. Bạn muốn rà quét toàn bộ dải mạng nội bộ văn phòng của mình để tìm xem có tổng cộng bao nhiêu thiết bị đang bật. Câu lệnh Nmap nào dưới đây là đúng tiêu chuẩn và tối ưu nhất?**

- A. `nmap 192.168.1.15`
- B. `nmap -sn 192.168.1.0/24`
- C. `nmap -p 1-65535 192.168.1.0`
- D. `ping 192.168.1.0/24`

### Câu 9

**Một quản trị viên rà soát an ninh mạng văn phòng bằng Nmap đối với một máy chủ dịch vụ (`192.168.1.200`) và nhận được kết quả hiển thị như sau:**

```
PORT     STATE    SERVICE
23/tcp   open     telnet
80/tcp   open     http
```

**Nhận định an ninh nào sau đây phản ánh đúng rủi ro lớn nhất của hệ thống này trong công việc hàng ngày?**

- A. Cổng 80 đang mở nên trang web có nguy cơ bị tấn công từ chối dịch vụ (DoS) bất cứ lúc nào.
- B. Cổng 23 (Telnet) đang mở công khai; dịch vụ này truyền thông tin dữ liệu và mật khẩu quản trị dưới dạng văn bản rõ (plain text), dễ bị nghe lén.
- C. Máy chủ này không có rủi ro gì vì không thấy xuất hiện cổng Remote Desktop (3389).
- D. Việc mở cổng 23 và 80 đồng nghĩa với việc tường lửa của máy chủ đã bị hỏng hoàn toàn.

### Câu 10

**Bạn được giao nhiệm vụ vẽ lại sơ đồ cấu trúc topo mạng nội bộ của một phòng ban để làm báo cáo an toàn thông tin. Phương pháp thực hiện nào dưới đây giúp bạn hoàn thành công việc nhanh chóng và chính xác nhất mà không cần tháo gỡ dây cáp vật lý?**

- A. Dùng giấy bút đi hỏi từng nhân viên trong phòng xem họ đang dùng máy tính gì và tự ghi chép lại.
- B. Chạy lệnh `nmap -sn` thu thập danh sách IP sống, kết hợp quét cổng tìm dịch vụ, sau đó nhập dữ liệu vào công cụ đồ họa như Zenmap (tab Topology) hoặc Draw.io để dựng mô hình.
- C. Bật phần mềm Windows Update trên tất cả các máy để hệ thống tự động đồng bộ sơ đồ lên đám mây.
- D. Tiến hành rút hết dây mạng của các máy ra, máy nào mất kết nối thì đánh dấu vị trí trên sơ đồ phòng.

---

## 🔑 ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

| Câu | Đáp án | Giải thích đáp án đúng | Tại sao các đáp án khác sai |
| :-: | :----: | ----------------------- | --------------------------- |
| **1** | **C** | **ICMP** là giao thức chuyên biệt dùng để truyền tải các thông điệp điều khiển và kiểm tra lỗi của tầng Mạng, cụ thể lệnh `ping` dùng gói tin ICMP Echo Request/Reply. | **A, B sai**: TCP và UDP thuộc tầng Giao vận (Transport Layer), không phải giao thức gốc của lệnh ping. **D sai**: ARP dùng để phân giải địa chỉ IP sang MAC trong mạng cục bộ, không phải giao thức truyền gói tin ping. |
| **2** | **C** | Số lượng cổng được quy định bởi trường dữ liệu 16-bit trong TCP/UDP header, cho phép giá trị từ 0 đến 2¹⁶ − 1 = 65.535. | **A, B sai**: đây chỉ là số hiệu của các cổng dịch vụ cụ thể (1024 là ranh giới cổng đặc quyền, 443 là cổng HTTPS). **D sai**: vượt quá giới hạn thiết kế 16-bit của giao thức mạng. |
| **3** | **B** | Tham số **`-sn`** lệnh cho Nmap thực hiện rà quét thực thể sống (Host Discovery) bằng ARP/ICMP mà không chạy quét cổng sâu, giúp tăng tốc độ. | **A sai**: `-sS` là kỹ thuật quét cổng nửa mở (SYN Scan). **C sai**: `-p-` là lệnh bắt buộc quét toàn bộ 65.535 cổng. **D sai**: `-sV` dùng để quét dò tìm phiên bản dịch vụ. |
| **4** | **D** | Theo tiêu chuẩn quốc tế của IANA, cổng **443** được ấn định cố định cho dịch vụ truyền tải siêu văn bản an toàn mã hóa (HTTPS). | **A sai**: cổng 80 dành cho HTTP thường (không mã hóa). **B, C sai**: cổng 21 dành cho FTP và cổng 22 dành cho dịch vụ điều khiển SSH. |
| **5** | **B** | Các hệ điều hành hiện đại hoặc thiết bị an ninh thường chặn gói tin ICMP Echo để ẩn mình trước kẻ quét mạng, khiến lệnh ping không nhận được phản hồi và báo Timeout. | **A sai**: máy chủ có thể vẫn đang chạy rất khỏe mạnh nhưng bật tường lửa bảo vệ. **C, D sai**: các lỗi này thuộc về định tuyến hoặc hạ tầng mạng vật lý, không phải tình huống phổ biến dẫn đến việc chặn ping chủ động. |
| **6** | **B** | Trong thực tế, hơn 90% lỗ hổng và dịch vụ phổ biến tập trung ở các cổng quen thuộc. Việc giới hạn quét 1.000 cổng mặc định giúp tiết kiệm thời gian quét của Nmap. | **A, C sai**: hệ điều hành cho phép quét mọi cổng và Nmap hoàn toàn miễn phí không giới hạn tính năng này. **D sai**: các cổng cao vẫn mở nếu người dùng cài đặt dịch vụ chạy trên đó. |
| **7** | **C** | Trạng thái `filtered` xuất hiện khi Nmap phóng gói tin đi nhưng không nhận được bất kỳ phản hồi nào trả về, do tường lửa đã chặn hoặc đánh rơi gói tin trên đường đi. | **A, B sai**: cổng mở sẽ báo `open`, cổng đóng sẽ trả về gói tin RST và báo `closed`. **D sai**: trạng thái này chỉ phản ánh kết quả kỹ thuật gói tin, không phản ánh lịch sử bị hack. |
| **8** | **B** | Cú pháp `-sn` kết hợp định dạng dải mạng `/24` (tương đương mặt nạ mạng 255.255.255.0) là chuẩn xác nhất để rà soát nhanh 254 địa chỉ IP trong mạng nội bộ. | **A sai**: lệnh này chỉ quét chính cái máy Kali đó. **C sai**: viết sai định dạng dải mạng (thiếu Subnet mask `/24`). **D sai**: lệnh ping mặc định của hệ điều hành không thể tự hiểu ký tự dải mạng `/24` để quét hàng loạt. |
| **9** | **B** | Giao thức **Telnet (cổng 23)** là một giao thức đời cũ, không mã hóa dữ liệu. Mọi thao tác gõ mật khẩu của quản trị viên đều bị truyền đi rõ ràng, khiến hacker dễ dàng đánh cắp bằng kỹ thuật Sniffing. | **A sai**: cổng 80 mở là bắt buộc để chạy web, việc bị DoS phụ thuộc vào tài nguyên hạ tầng chứ không phải do lỗi cổng mở. **C, D sai**: các nhận định này chủ quan và không đúng bản chất kỹ thuật an ninh. |
| **10** | **B** | Đây là quy trình chuẩn của một chuyên gia: Dùng công cụ kỹ thuật (Nmap) quét tự động dải IP và cổng dịch vụ mạng, sau đó sơ đồ hóa bằng các phần mềm chuyên dụng, vừa chính xác vừa tiết kiệm thời gian. | **A sai**: phương pháp thủ công này rất tốn thời gian và nhân viên văn phòng thông thường không thể biết máy mình đang mở cổng dịch vụ gì. **C, D sai**: đây là các hành động phá hoại hạ tầng hoặc không có tính năng kỹ thuật tạo sơ đồ mạng. |