# BÀI GIẢNG CHI TIẾT: NGÀY 5 – VẼ SƠ ĐỒ HỆ THỐNG BẰNG PING & NMAP

**Mục tiêu bài giảng (Đo lường được):** * Hiểu rõ cơ chế hoạt động của lệnh Ping và giao thức ICMP.

* Phân biệt chính xác giữa máy chủ đang hoạt động (Live Hosts) và máy chủ ngoại tuyến.
* Nắm vững quy trình quét cổng cơ bản (Port Scanning) để lập danh sách IP trong mạng nội bộ giả lập.

---

## 1. MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Hãy tưởng tượng bạn được thuê làm tổng đạo diễn an ninh cho một tòa nhà chung cư 50 tầng vừa mới bàn giao. Chủ đầu tư đưa cho bạn một tập hồ sơ trống trơn và bảo: *"Hãy bảo vệ tòa nhà này!"*. Bạn không biết phòng nào có người ở, phòng nào đang khóa trái bỏ hoang, và cửa sổ phòng nào đang mở toang để trộm có thể leo vào. Việc đầu tiên bạn làm chắc chắn không phải là đi mua camera về lắp bừa bãi.

Bạn sẽ đi gõ cửa từng phòng (Ping) để xem phòng nào có tiếng người trả lời (Live Hosts). Sau đó, với những phòng có người, bạn sẽ đi kiểm tra kỹ xem cửa chính, cửa sổ, hay cửa ban công của họ có đang mở hay không (Port Scanning).

Trong an ninh mạng cũng vậy, trước khi muốn tấn công hay bảo vệ một hệ thống, bạn phải vẽ được bản đồ trực quan của nó. Hôm nay, chúng ta sẽ học cách làm việc đó bằng hai công cụ kinh điển: **Ping** và **Nmap**.

---

## 2. KIẾN THỨC CỐT LÕI (CORE KNOWLEDGE)

Sau khi đã hoàn thành giai đoạn trinh sát bị động ở các ngày trước, hôm nay chúng ta chính thức bước sang **Giai đoạn 2: Scanning (Quét và thăm dò)** theo chuẩn tài liệu CEH v11.

### 2.1. Cơ chế quét ICMP (Lệnh Ping hoạt động như thế nào?)

Trong đời sống, khi bạn muốn biết một người có đang tập trung nghe mình nói hay không, bạn sẽ gọi: *"Alô, Nam có đó không?"*. Nếu Nam trả lời: *"Có, tớ đây!"*, bạn biết Nam đang "hoạt động".

Trong mạng máy tính, lệnh `ping` hoạt động y hệt như vậy. Nó sử dụng một giao thức có tên là **ICMP (Internet Control Message Protocol)** – giao thức điều khiển truyền tải thông điệp Internet.

Khi bạn gõ lệnh `ping 192.168.1.1`:

1. Máy tính của bạn sẽ gửi đi một gói tin gọi là **ICMP Echo Request** (Yêu cầu phản hồi) đến địa chỉ IP mục tiêu. Nó giống như câu hỏi: *"Anh có trực tuyến không?"*.
2. Nếu máy chủ mục tiêu đang bật và kết nối mạng, nó sẽ bắt buộc phải gửi ngược lại một gói tin gọi là **ICMP Echo Reply** (Phản hồi trả lời). Nó nói: *"Tôi đây, tôi vẫn đang chạy!"*.

> 💡 **Khái niệm then chốt:** Nhờ sự tương tác hai chiều này, chúng ta xác định được một máy chủ là **Live Host** (Máy đang hoạt động) hay **Dead Host** (Máy đang tắt hoặc không tồn tại).

### 2.2. Quy trình quét cổng (Port Scanning) là gì?

Sau khi biết "phòng chung cư" đó có người ở (IP đang hoạt động), bước tiếp theo là kiểm tra các "cửa ra vào" của máy tính đó. Trong ngành mạng, các cửa này được gọi là **Cổng (Ports)**.

Mỗi máy tính giống như một ngôi nhà có đúng **65.535 cánh cửa** (được đánh số từ 1 đến 65535). Mỗi dịch vụ mạng sẽ "ngồi" ở một cánh cửa nhất định để đón khách:

* Cửa số **80** (HTTP) và **443** (HTTPS): Dành cho dịch vụ Web.
* Cửa số **21** (FTP): Dành cho dịch vụ truyền tải tệp tin.
* Cửa số **22** (SSH): Dành cho quản trị viên điều khiển máy chủ từ xa.

**Quét cổng (Port Scanning)** là hành vi gửi các gói tin thử nghiệm đến lần lượt các cổng của mục tiêu để xem cửa nào đang **Mở (Open)**, cửa nào đang **Đóng (Closed)**, hoặc cửa nào đang bị **Lọc (Filtered - có bảo vệ)**.

Nếu một cổng đang mở, điều đó có nghĩa là có một phần mềm (dịch vụ) đang chạy sau cánh cửa đó. Và đối với một Ethical Hacker, mỗi dịch vụ đang mở chính là một lối vào tiềm năng cần được kiểm tra lỗ hổng.

---

## 3. PHÂN TÍCH SÂU (DEEP DIVE)

Để làm chủ được kỹ năng này, chúng ta cần mổ xẻ vấn đề dưới những lăng kính chuyên sâu và phản biện hơn.

### Góc nhìn 1: Sự thật về việc Ping không phản hồi

Rất nhiều bạn mới học bảo mật thường thắc mắc: *"Thầy ơi, em ping đến trang web của chính phủ hoặc máy tính của bạn em, hệ thống báo 'Request timed out' (Hết thời gian chờ). Có phải máy của họ bị sập rồi không?"*.

* **Câu trả lời là: Chưa chắc.** Hệ thống của họ có thể vẫn đang chạy cực kỳ khỏe mạnh.
* **Lý do:** Các quản trị viên hệ thống và các hệ điều hành hiện đại (như Windows 10/11, Windows Server) có một cơ chế an ninh mặc định: **Chặn gói tin ICMP tại Tường lửa (Firewall)**. Tường lửa nhìn thấy gói tin "Echo Request" của bạn và nó âm thầm vứt vào sọt rác, không cho phép máy tính trả lời.
* **Tư duy Ethical Hacker:** Nếu chỉ dùng lệnh Ping thông thường mà thấy mục tiêu không trả lời, bạn không được phép kết luận máy đó đã chết. Chúng ta phải nâng cấp lên các kỹ thuật quét nâng cao hơn của Nmap (quét bằng gói tin TCP/UDP) để "đánh lừa" hoặc đi xuyên qua tường lửa, buộc máy chủ phải lộ diện.

### Góc nhìn 2: Bản đồ mạng – Điểm khởi đầu của mọi chiến dịch

Tại sao EC-Council lại xếp bài "Vẽ sơ đồ mạng" ngay đầu phần quét hệ thống?

Hãy đứng ở góc nhìn của một kẻ tấn công phòng thủ: Nếu bạn không biết doanh nghiệp của mình có tổng cộng bao nhiêu thiết bị (máy tính nhân viên, máy in, máy chấm công, camera, máy chủ dữ liệu), làm sao bạn bảo vệ được chúng? Kẻ tấn công thường không chọn tấn công vào máy chủ chính của công ty (nơi có tường lửa bảo vệ nghiêm ngặt). Chúng sẽ quét toàn bộ mạng nội bộ để tìm ra một chiếc máy in mạng cũ kỹ, một chiếc camera giám sát quên đổi mật khẩu mặc định, rồi từ thiết bị yếu ớt đó làm bàn đạp để tấn công sang các máy chủ quan trọng khác.

Do đó, việc lập được danh sách các IP đang hoạt động và vẽ lại sơ đồ topo mạng chính là việc đặt viên gạch đầu tiên cho "nhận thức tình huống an ninh" của toàn doanh nghiệp.

---

## 4. CÁCH ÁP DỤNG VÀO THỰC TẾ (PRACTICAL APPLICATION)

Bây giờ, chúng ta sẽ cùng nhau thực hành từng bước để dò tìm và lập danh sách các máy tính đang hoạt động trong một mạng nội bộ giả lập bằng công cụ **Nmap** (Network Mapper) – ông vua của các công cụ quét mạng.

```
Mô hình Lab giả lập của bạn:
[ Máy của bạn (Kali Linux) ] ---> [ Router/Switch mạng ] ---> [ Các máy mục tiêu trong nhà ]

```

### Bước 1: Xác định dải mạng nội bộ của bạn

Trước khi quét, bạn phải biết mình đang đứng ở đâu.

* Trên máy tính của bạn, hãy mở Terminal (dòng lệnh) lên.
* Gõ lệnh: `ip a` (trên Linux) hoặc `ifconfig` (trên Mac) hoặc `ipconfig` (trên Windows).
* Hãy nhìn vào dòng `inet`. Bạn sẽ thấy địa chỉ IP của mình, ví dụ: `192.168.1.15` kèm theo Subnet Mask là `/24` (tương đương mạng của bạn chạy từ `192.168.1.1` đến `192.168.1.254`).

### Bước 2: Thực hiện quét Ping toàn mạng (Ping Sweep) để tìm Live Hosts

Thay vì phải ngồi gõ lệnh ping từng địa chỉ IP trong số 254 máy cực kỳ tốn thời gian, chúng ta sẽ ra lệnh cho Nmap thực hiện quét đồng loạt bằng kỹ thuật **Ping Sweep**.

* Gõ lệnh sau vào Terminal:
```bash
nmap -sn 192.168.1.0/24

```


* **Giải thích tham số:**
* `nmap`: Gọi công cụ.
* `-sn`: Đây là tùy chọn **No Port Scan** (chỉ kiểm tra máy sống/chết bằng ICMP và ARP, không quét cổng sâu bên trong).
* `192.168.1.0/24`: Toàn bộ dải mạng của bạn.


* **Kết quả đầu ra mong đợi:** Sau vài giây, Nmap sẽ trả về một danh sách gọn gàng:
```text
Nmap scan report for 192.168.1.1 (Router nhà mạng)
Host is up.
Nmap scan report for 192.168.1.10 (Máy tính của bố)
Host is up.
Nmap scan report for 192.168.1.20 (Máy ảo Lab mục tiêu)
Host is up.

```


Chúc mừng! Bạn đã lập được danh sách các thiết bị đang "sống" trong mạng nội bộ của mình.

### Bước 3: Quét cổng cơ bản để tìm "cửa mở" trên máy mục tiêu

Bây giờ, hãy chọn ra một IP máy mục tiêu mà bạn được phép thử nghiệm (ví dụ: máy ảo Lab của bạn tại địa chỉ `192.168.1.20`). Chúng ta sẽ kiểm tra xem máy này đang mở những dịch vụ gì.

* Gõ lệnh:
```bash
nmap 192.168.1.20

```


* **Cơ chế chạy:** Mặc định, nếu bạn không điền tham số gì thêm, Nmap sẽ tự động quét **1.000 cổng phổ biến nhất** trên thế giới của mục tiêu đó.
* **Kết quả đầu ra mong đợi:**
```text
PORT     STATE    SERVICE
22/tcp   open     ssh
80/tcp   open     http
443/tcp  open     https

```


* **Phân tích kết quả:** Máy mục tiêu này đang mở cổng 80 và 443, nghĩa là nó đang đóng vai trò làm một **Máy chủ Web (Web Server)**. Bạn hoàn toàn có thể mở trình duyệt ra, gõ địa chỉ `http://192.168.1.20` để truy cập vào trang web nội bộ của nó.

---

## 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

Trong quá trình thực hành bài học này, rất nhiều học viên đã gặp rắc rối hoặc hiểu sai bản chất. Hãy ghi nhớ 3 sai lầm chí mạng sau:

* ❌ **Sai lầm 1: Mang Nmap đi quét bừa bãi các hệ thống trên Internet.**
* *Thực tế:* Việc bạn chạy lệnh Nmap quét cổng vào trang web của một ngân hàng, một công ty lớn mà không có sự đồng ý bằng văn bản hợp pháp được coi là hành vi **thăm dò bất hợp pháp**. Các hệ thống giám sát an ninh (IDS/Firewall) của họ sẽ lập tức ghi lại địa chỉ IP nhà bạn, chặn kết nối và hoàn toàn có thể gửi báo cáo lạm dụng tới nhà mạng (ISP) để cắt Internet của bạn, hoặc nghiêm trọng hơn là chuyển thông tin cho cơ quan công an. **Chúng ta chỉ thực hành trong dải mạng nội bộ giả lập tự tạo (LAN Lab).**


* ❌ **Sai lầm 2: Lầm tưởng kết quả Nmap chính xác 100% trong mọi môi trường.**
* *Thực tế:* Nếu hệ thống mục tiêu có trang bị tường lửa thông minh (Next-Gen Firewall), tường lửa có thể đánh lừa Nmap bằng cách báo tất cả các cổng đều đóng, hoặc tệ hơn là trả về kết quả giả (báo mở hàng ngàn cổng ảo để làm rối loạn công cụ quét của bạn). Đừng bao giờ tin hoàn toàn vào một lần quét duy nhất; một Ethical Hacker giỏi cần phối hợp nhiều kiểu quét khác nhau (chúng ta sẽ học ở Ngày 6).


* ❌ **Sai lầm 3: Quét quá nhanh làm sập hệ thống (DoS vô ý).**
* *Thực tế:* Mặc định Nmap chạy rất nhanh. Nếu bạn quét một dải mạng lớn gồm hàng ngàn máy tính cũ của một doanh nghiệp với tốc độ tối đa, lượng gói tin khổng lồ phóng ra có thể làm nghẽn băng thông mạng nội bộ, hoặc làm treo các thiết bị mạng đời cũ (như Switch/Router cấu hình thấp). Hãy là một Hacker lịch sự, biết điều tiết tốc độ quét phù hợp với sức chịu đựng của hệ thống mục tiêu.



---

## CÂU HỎI ÔN TẬP VÀ BÀI TẬP TỰ RÈN LUYỆN

Để khắc sâu kiến thức của Ngày 5, bạn hãy tự trả lời và thực hiện các thử thách sau vào sổ tay:

1. Giao thức **ICMP** sử dụng hai loại loại gói tin nào để thực hiện lệnh Ping? Nếu tường lửa chặn gói tin trả về thì dòng chữ hiển thị trên màn hình của bạn sẽ là gì?
2. Một máy tính có tối đa bao nhiêu cổng (ports)? Tại sao Nmap mặc định lại chỉ quét 1.000 cổng chứ không quét hết toàn bộ?
3. **Thử thách thực hành (24h):** Hãy bật hệ thống máy ảo của bạn lên, dùng lệnh `nmap -sn` để tìm ra địa chỉ IP chính xác của máy ảo đó. Sau đó, thực hiện quét cổng máy ảo đó và ghi chép lại xem có bao nhiêu cổng đang ở trạng thái **open** (mở). Vẽ lại một sơ đồ tư duy nhỏ thể hiện mối kết nối giữa máy thật của bạn, Router nhà bạn và máy ảo dựa trên các thông số IP vừa tìm được.