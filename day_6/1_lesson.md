# BÀI GIẢNG CHI TIẾT: NGÀY 6 – NGHỆ THUẬT QUÉT CỔNG "TÀNG HÌNH"

* **Mục tiêu bài giảng:** Phân biệt và làm chủ các kỹ thuật quét cổng TCP Connect, SYN, FIN, Xmas, Null Scan; thấu hiểu cơ chế ẩn mình và vượt qua hệ thống phát hiện xâm nhập (IDS/Firewall) dựa trên tài liệu chuẩn CEH v11.
* **Thời lượng gợi ý:** 60 phút.

---

## 1. MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Hãy tưởng tượng bạn là một tên trộm đang muốn đột nhập vào một tòa nhà văn phòng vào ban đêm. Nếu bạn đến thẳng cửa chính, đập cửa rầm rầm và hỏi bảo vệ: *"Cửa này có khóa không?"*, ngay lập tức hệ thống báo động sẽ rú lên, camera sẽ ghi hình khuôn mặt bạn và bảo vệ sẽ còng tay bạn lại.

Trong thế giới mạng cũng vậy. Nếu bạn quét cổng (Port Scanning) một hệ thống bằng những cách thông thường, hệ thống tường lửa (Firewall) và hệ thống phát hiện xâm nhập (IDS) sẽ lập tức chặn (block) địa chỉ IP của bạn.

Vậy làm thế nào để một kẻ tấn công – hoặc một chuyên gia kiểm thử xâm nhập (Penetrator) – có thể dò tìm các cổng đang mở của một hệ thống một cách "êm ru", nhẹ nhàng như một bóng ma mà không để lại bất kỳ dấu vết báo động nào? Hôm nay, chúng ta sẽ cùng nhau giải mã **"Nghệ thuật quét cổng tàng hình"**.

---

## 2. KIẾN THỨC CỐT LÕI (CORE KNOWLEDGE)

Để hiểu được các kỹ thuật quét cổng nâng cao của công cụ huyền thoại **Nmap**, trước hết chúng ta phải ôn lại "thủ tục giao tiếp" cơ bản nhất của Internet: **Cú bắt tay 3 bước của giao thức TCP (TCP 3-Way Handshake)**.

Hãy tưởng tượng TCP Handshake giống như cách hai người lịch sự chào hỏi nhau qua điện thoại:

1. **Khách (Gửi cờ SYN):** *"Alo, anh có nghe rõ không? Tôi muốn kết nối."*
2. **Chủ nhà (Phản hồi cờ SYN/ACK):** *"Nghe rõ! Tôi sẵn sàng kết nối rồi, anh nghe rõ tôi không?"*
3. **Khách (Gửi cờ ACK):** *"Nghe rõ! Chúng ta bắt đầu nói chuyện nhé."*

Hacker sẽ lợi dụng, "bẻ cong" hoặc cố tình phá vỡ quy trình lịch sự này để thăm dò xem một cổng đang ĐÓNG (Closed) hay MỞ (Open). Dưới đây là 5 tuyệt kỹ quét cổng cốt lõi trong Module 03 của CEH v11.

### 2.1. Quét toàn diện – TCP Connect Scan (`-sT`)

Đây là kiểu quét "chính quy" và ồn ào nhất. Máy tính của bạn sẽ thực hiện **đầy đủ cả 3 bước** của cú bắt tay TCP với mục tiêu.

* **Cơ chế khi cổng MỞ:** Bạn gửi `SYN` $\rightarrow$ Mục tiêu trả về `SYN/ACK` $\rightarrow$ Bạn gửi `ACK`. Kết nối được thiết lập hoàn toàn, sau đó bạn chủ động ngắt bằng gói `RST` (Reset).
* **Cơ chế khi cổng ĐÓNG:** Bạn gửi `SYN` $\rightarrow$ Mục tiêu lập tức trả về gói `RST` để từ chối.
* **Ví dụ đời thực:** Bạn đến gõ cửa nhà người ta. Người ta mở cửa, bạn thò tay ra bắt tay họ, chào hỏi đàng hoàng, rồi... quay lưng bỏ đi.
* **Đánh giá:** Rất chính xác nhưng **CỰC KỲ ỒN ÀO**. Hệ thống Log của máy chủ mục tiêu sẽ ghi nhận lại toàn bộ việc IP của bạn đã kết nối thành công.

### 2.2. Quét nửa mở/Tàng hình – SYN Scan (`-sS`)

Đây là vũ khí mặc định và phổ biến nhất của các hacker. Người ta gọi nó là "quét nửa mở" (Half-open) vì cuộc giao tiếp **không bao giờ hoàn thành**.

* **Cơ chế khi cổng MỞ:** Bạn gửi `SYN` $\rightarrow$ Mục tiêu trả về `SYN/ACK` (Chứng tỏ cổng đang mở!). Ngay lập tức, thay vì gửi `ACK` để hoàn tất, bạn lật lọng gửi một gói `RST` để hủy ngang kết nối.
* **Cơ chế khi cổng ĐÓNG:** Bạn gửi `SYN` $\rightarrow$ Mục tiêu trả về `RST`.
* **Ví dụ đời thực:** Bạn bấm chuông cửa. Chủ nhà vừa hé cửa bước ra định chào, bạn lập tức lấy một chiếc mặt nạ che mặt, quay ngoắt người chạy mất.
* **Đánh giá:** Vì kết nối chưa bao giờ được thiết lập hoàn chỉnh, ứng dụng ở tầng trên (như Web Server, FTP Server) sẽ **không ghi nhận bất kỳ dòng Log nào**. Đó là lý do tại sao nó được gọi là quét tàng hình.

### 2.3. Bộ ba quét "Ngầm" – Inverse Mapping (FIN, Xmas, và Null Scan)

Nếu hệ thống mục tiêu được bảo vệ bởi một Firewall cứng nhắc, Firewall sẽ chặn ngay bất kỳ gói tin `SYN` lạ mặt nào. Để vượt qua, hacker chuyển sang sử dụng các gói tin TCP "dị dạng" không chứa cờ `SYN`.

Theo quy chuẩn thiết kế TCP (RFC 793), nếu một cổng đang **ĐÓNG**, khi nhận được một gói tin bất thường không đúng quy trình, nó bắt buộc phải trả về gói `RST`. Ngược lại, nếu cổng đang **MỞ**, nó sẽ phớt lờ và **IM LẶNG** (No response). Hacker sẽ dựa vào "sự im lặng" này để đoán cổng mở!

#### 🔎 FIN Scan (`-sF`)

* **Cơ chế:** Bạn gửi một gói tin chỉ bật duy nhất cờ `FIN` (Finish - cờ dùng để ngắt kết nối, trong khi hai bên chưa hề kết nối!).
* **Kết quả:** Nếu mục tiêu im lặng $\rightarrow$ Cổng MỞ. Nếu mục tiêu trả về `RST` $\rightarrow$ Cổng ĐÓNG.

#### 🎄 Xmas Scan (`-sX`)

* **Cơ chế:** Bạn gửi một gói tin bật cùng lúc 3 cờ: `FIN`, `URG` (Urgent), và `PSH` (Push). Gói tin này thắp sáng các thanh trạng thái trong hệ thống giống như một cây thông Giáng sinh được lên đèn.
* **Kết quả:** Nếu mục tiêu im lặng $\rightarrow$ Cổng MỞ. Nếu mục tiêu trả về `RST` $\rightarrow$ Cổng ĐÓNG.

#### 🕳️ Null Scan (`-sN`)

* **Cơ chế:** Bạn gửi một gói tin TCP trống rỗng, **không bật bất kỳ cờ nào** (Một điều hoàn toàn phi thực tế trong giao tiếp thông thường).
* **Kết quả:** Nếu mục tiêu im lặng $\rightarrow$ Cổng MỞ. Nếu mục tiêu trả về `RST` $\rightarrow$ Cổng ĐÓNG.

> ⚠️ **Lưu ý từ đời thực:** Bộ ba quét ngầm này cực kỳ hiệu quả với các hệ điều hành dựa trên kiến trúc Unix/Linux (Ubuntu, CentOS, macOS...). Tuy nhiên, chúng sẽ **thất bại hoàn toàn** (tất cả các cổng đều báo đóng) khi quét hệ điều hành Windows, vì Microsoft không tuân thủ hoàn toàn quy chuẩn RFC 793 này.

---

## 3. PHÂN TÍCH SÂU (DEEP DIVE)

Để hiểu sâu sắc bản chất của nghệ thuật này, chúng ta sẽ mổ xẻ vấn đề dưới 2 góc nhìn phản biện cốt lõi:

### Góc nhìn 1: Sự đối đầu giữa Kẻ quét cổng và Hệ thống phòng thủ (IDS/Firewall)

Các hệ thống phát hiện xâm nhập (IDS) hiện đại không hề "ngốc". Chúng kiểm soát lưu lượng mạng dựa trên hai cơ chế chính:

* **Nhận diện theo chữ ký (Signature-based):** Nếu thấy một IP gửi liên tục hàng ngàn gói tin `SYN` trong 1 giây đến các cổng khác nhau, IDS sẽ kích hoạt luật (rule) cảnh báo Tấn công Quét Cổng.
* **Nhận diện theo hành vi (Anomaly-based):** Nếu phát hiện các gói tin kỳ quái như Null hay Xmas (vốn không bao giờ xuất hiện trong lưu lượng mạng sạch), IDS sẽ lập tức cắm cờ đen cảnh báo nguy hiểm.

Vì vậy, một Ethical Hacker giỏi không chỉ biết gõ lệnh, mà phải hiểu cách **điều chỉnh tốc độ và cấu trúc gói tin**. Nmap cung cấp các tùy chọn thời gian từ `T0` (Paranoid - Cực kỳ chậm, vài phút mới gửi 1 gói tin để đánh lừa IDS) đến `T5` (Insane - Cực nhanh, bạt mạng). Kỹ năng tàng hình nằm ở chỗ bạn chọn đúng thời điểm và kỹ thuật phù hợp với con mồi.

### Góc nhìn 2: Ranh giới pháp lý của hành vi quét cổng nâng cao

Nhiều bạn nghĩ rằng: *"Em chỉ gửi vài gói tin FIN hay Xmas kiểm tra thôi, có phá hoại gì đâu mà vi phạm pháp luật?"*.

Thực tế, việc gửi các gói tin dị dạng (Xmas, Null) ra mạng Internet công cộng được các nhà cung cấp dịch vụ (ISP) và các cơ quan an ninh mạng định nghĩa là **"Hành vi thăm dò có ác ý" (Malicious Probing)**. Nó giống như việc bạn đeo mặt nạ, đi găng tay và dùng kính lúp soi mói vào các ổ khóa cửa của một ngân hàng giữa đêm. Hệ thống giám sát của họ sẽ lưu lại địa chỉ IP nguồn của bạn, và bạn hoàn toàn có thể bị nhà mạng cắt dịch vụ Internet hoặc bị cơ quan chức năng sờ gáy.

---

## 4. CÁCH ÁP DỤNG VÀO THỰC TẾ (PRACTICAL APPLICATION)

Để thực hành các kỹ thuật này một cách an toàn, bạn hãy thiết lập một môi trường Lab cô lập (gồm 1 máy tấn công Kali Linux và 1 máy mục tiêu Metasploitable hoặc Ubuntu) và thực hiện theo quy trình 3 bước sau:

### Bước 1: Quét khảo sát diện rộng bằng kỹ thuật "Nửa mở" (SYN Scan)

Khi bắt đầu tiếp cận mục tiêu, bạn cần một kỹ thuật nhanh, chính xác và tương đối kín đáo để lọc ra các cổng mở.

* **Hành động:** Mở Terminal trên Kali Linux và gõ lệnh:
```bash
sudo nmap -sS -v [IP_Mục_Tiêu]

```


*(Trong đó `-sS` yêu cầu quét SYN, `-v` là hiển thị tiến trình chi tiết).*
* **Kiểm chứng:** Hãy mở công cụ Wireshark trên máy mục tiêu lên để bắt gói tin. Bạn sẽ thấy một loạt các gói `SYN` đổ về, hệ thống trả lời `SYN/ACK`, và máy Kali lập tức dập tắt bằng gói `RST`.

### Bước 2: Sử dụng tuyệt kỹ "Tàng hình" vượt Tường lửa (Xmas Scan)

Giả sử hệ thống mục tiêu đã chặn các gói tin `SYN` thông thường của bạn. Hãy chuyển sang vũ khí giấu mặt.

* **Hành động:** Gõ lệnh quét cây thông Giáng sinh:
```bash
sudo nmap -sX -p 22,80,443 [IP_Mục_Tiêu]

```


*(Quét tập trung vào các cổng dịch vụ nhạy cảm: 22-SSH, 80-HTTP, 443-HTTPS).*
* **Phân tích kết quả:** Nếu kết quả trả về là `open|filtered`, có nghĩa là mục tiêu đã im lặng và rất có thể cổng đó đang mở và có tường lửa bảo vệ.

### Bước 3: Thay đổi tốc độ quét để né tránh IDS

Để không làm kích hoạt các hệ thống cảnh báo tự động dựa trên tần suất (Rate-limiting) của Firewall.

* **Hành động:** Sử dụng tùy chọn thời gian chậm rãi `T2` (Polite) kết hợp phân mảnh gói tin (`-f`):
```bash
sudo nmap -sS -T2 -f [IP_Mục_Tiêu]

```


*Tùy chọn `-f` sẽ bẻ đôi, bẻ ba gói tin TCP ra thành các mảnh nhỏ khi truyền đi trên mạng, làm cho các thiết bị Firewall loại cũ không thể đọc hiểu được toàn bộ nội dung gói tin, từ đó giúp bạn lướt qua bộ lọc một cách êm ái.*

---

## 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

* ❌ **Sai lầm 1: Nhầm tưởng quét tàng hình (`-sS`, `-sX`) là biến mất hoàn toàn, không thể bị phát hiện.**
* **Thực tế:** Chúng chỉ tàng hình đối với **Log của ứng dụng** (như Apache, Nginx không ghi nhận kết nối HTTP). Tuy nhiên, ở tầng mạng, các hệ thống **IDS/IPS hiện đại (như Snort, Suricata) vẫn nhìn thấy rõ mồn một** hành vi gửi gói tin dị dạng và sẽ khóa IP của bạn ngay lập tức.


* ❌ **Sai lầm 2: Sử dụng bừa bãi tùy chọn tốc độ cao nhất (`-T5 / Insane`) cho mọi tình huống.**
* **Thực tế:** Quét quá nhanh không chỉ làm hệ thống phòng thủ báo động đỏ ngay lập tức, mà còn có thể vô tình làm **nghẽn băng thông mạng hoặc gây sập dịch vụ (DoS)** của hệ thống khách hàng, vi phạm nghiêm trọng cam kết an toàn của một Ethical Hacker.


* ❌ **Sai lầm 3: Quét một máy chủ Windows bằng lệnh `-sF` (FIN Scan) rồi kết luận hệ thống không mở cổng nào.**
* **Thực tế:** Như đã phân tích sâu, ngăn xếp TCP/IP của Windows luôn gửi lại gói `RST` khi nhận được gói tin không chứa cờ `SYN`, bất kể cổng đó đang đóng hay mở. Do đó, đối với Windows, bạn bắt buộc phải dùng quét `SYN` (`-sS`) hoặc quét `TCP Connect` (`-sT`).



---

## CÂU HỎI ÔN TẬP VÀ BÀI TẬP TỰ RÈN LUYỆN

1. Tại sao kỹ thuật quét **SYN Scan (`-sS`)** lại không để lại dấu vết kết nối trong tệp Log của dịch vụ trên máy chủ mục tiêu?
2. Trong quá trình kiểm thử một hệ thống Linux, bạn thực hiện **Null Scan (`-sN`)** đến cổng 80 và không nhận được bất kỳ gói tin phản hồi nào từ mục tiêu. Cổng 80 đó đang ở trạng thái nào?
3. Bạn được giao nhiệm vụ quét cổng một hệ thống doanh nghiệp có cài đặt Firewall cực kỳ nhạy cảm. Bạn sẽ kết hợp những tùy chọn nào của Nmap để giảm thiểu tối đa khả năng bị Firewall phát hiện và chặn IP?