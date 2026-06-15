Chào các bạn! Chào mừng các bạn đến với **Ngày 22: "Vượt Tường Lửa" (Evading IDS & Firewalls)** trong lộ trình chinh phục thế giới An toàn thông tin.

Hôm nay, chúng ta sẽ cùng nhau đóng vai cả hai bên chiến tuyến: một bên là người bảo vệ cố gắng xây dựng pháo đài kiên cố, và một bên là hacker tìm mọi cách lách qua những khe hở nhỏ nhất để đột nhập vào hệ thống. Hãy pha một tách cà phê, chuẩn bị một tinh thần thật tập trung, và chúng ta cùng bắt đầu bài giảng nhé!

---

## Mở đầu: Câu chuyện của người vận chuyển và trạm kiểm soát

Hãy tưởng tượng bạn là một mật vụ cần vận chuyển một tài liệu tuyệt mật vào trong một tòa thành được canh gác cẩn mật. Ở cổng thành, lính gác sẽ lục soát từng người, kiểm tra chứng minh thư, và nếu thấy bất kỳ món vũ khí hay vật dụng nghi vấn nào, họ sẽ tịch thu và tống giam bạn ngay lập tức.

Nếu bạn giấu nguyên một thanh kiếm trong bọc, bạn chắc chắn sẽ bị bắt. Vậy làm cách nào để món đồ đó lọt qua cửa an ninh? Bạn có thể tháo rời thanh kiếm thành lưỡi, chuôi, và bao kiếm, giấu chúng vào 3 cỗ xe chở nông sản khác nhau đi vào thành ở các khung giờ khác nhau, sau đó lắp ráp lại khi đã vào bên trong. Hoặc bạn có thể hóa trang, làm giả giấy tờ của một vị quan lớn để lính gác không dám kiểm tra sâu.

Trong thế giới mạng, "tòa thành" chính là hệ thống nội bộ của doanh nghiệp, "lính gác" chính là Tường lửa (Firewall) và Hệ thống phát hiện xâm nhập (IDS), còn "chiêu thức tháo rời thanh kiếm" chính là kỹ thuật vượt tường lửa mà chúng ta sẽ học ngày hôm nay.

---

## Kiến thức cốt lõi: Những "vị thần canh cửa" và cách đánh lừa họ

Để vượt qua được kẻ địch, trước hết chúng ta phải hiểu rõ họ hoạt động như thế nào. Trong một hệ thống mạng tiêu chuẩn, có hai thiết bị an ninh cốt lõi mà bạn luôn phải đối mặt: **IDS (Intrusion Detection System)** và **Firewall (Tường lửa)**.

### 1. Hệ thống phát hiện xâm nhập (IDS) hoạt động ra sao?

IDS giống như một camera giám sát thông minh kết hợp với một bảo vệ ngồi phòng máy. Nó không trực tiếp chặn dòng người đi vào, nhưng nó nhìn thấy tất cả và sẽ rú còi báo động (Alert) nếu phát hiện hành vi bất thường. IDS có hai "mắt thần" chính để nhận diện kẻ xấu:

* **Nhận diện dựa trên chữ ký (Signature-based Detection):**
* *Khái niệm:* IDS sở hữu một cuốn từ điển khổng lồ chứa "dấu vân tay" (Signatures) của tất cả các loại mã độc hoặc kiểu tấn công đã biết. Khi có một gói tin đi qua, IDS sẽ so sánh nội dung gói tin đó với cuốn từ điển này. Nếu trùng khớp, còi sẽ kêu.
* *Ví dụ thực tế:* Giống như bảo vệ tại ngân hàng có một danh sách ảnh chân dung của các tên tội phạm bị truy nã. Cứ ai mặt giống trong ảnh bước vào là họ giữ lại.


* **Nhận diện dựa trên bất thường (Anomaly-based Detection):**
* *Khái niệm:* Thay vì tìm kẻ xấu cụ thể, IDS sẽ học xem một ngày bình thường của hệ thống diễn ra như thế nào (gọi là Baseline - Đường cơ sở). Nếu tự nhiên có một sự kiện đột biến, nó sẽ báo động.
* *Ví dụ thực tế:* Cửa hàng của bạn trung bình mỗi ngày chỉ có khoảng 50 khách ra vào. Tự dưng hôm nay, vào lúc 2 giờ sáng, có 500 người cùng lúc ùa vào cửa hàng. Đó là điều bất thường, và hệ thống sẽ phát cảnh báo ngay.



### 2. Kỹ thuật phân mảnh gói tin (Packet Fragmentation) là gì?

Đây chính là chiêu thức "tháo rời thanh kiếm" mà tôi đã nói ở phần mở đầu.

Mọi dữ liệu truyền đi trên Internet đều được chia nhỏ thành các gói tin (Packets). Mỗi mạng máy tính có một giới hạn kích thước gói tin tối đa gọi là **MTU (Maximum Transmission Unit)**. Nếu gói tin lớn hơn MTU, nó phải bị băm nhỏ ra (Fragmentation).

Hacker lợi dụng cơ chế này để băm nhỏ các đoạn mã tấn công (Payload) thành các mảnh siêu nhỏ.

* *Ví dụ:* Nếu chuỗi mã độc mà IDS đang tìm kiếm trong từ điển là chữ `ATTACK`.
* Nếu hacker gửi nguyên chữ `ATTACK`, IDS sẽ chặn lại ngay.
* Nhưng nếu hacker dùng kỹ thuật phân mảnh để gửi đi 3 gói tin nhỏ liên tiếp: Gói 1 chứa chữ `AT`, Gói 2 chứa chữ `TA`, Gói 3 chứa chữ `CK`.
* Khi đi qua IDS, thiết bị này kiểm tra từng gói riêng lẻ và thấy: "À, mảnh này chỉ là 'AT', không có trong danh sách truy nã, cho qua!". Chỉ đến khi các mảnh này vượt qua IDS thành công và đi vào máy tính nạn nhân, hệ điều hành của nạn nhân mới xếp chúng lại với nhau thành chữ `ATTACK` hoàn chỉnh. Lúc này, cuộc tấn công đã thành công và IDS đã bị dắt mũi!

### 3. Kỹ thuật làm giả IP (IP Spoofing)

IP Spoofing là việc kẻ tấn công thay đổi thông tin trong trường "Source IP" (IP nguồn) của gói tin thành một địa chỉ IP khác - thường là một IP đáng tin cậy trong mạng nội bộ hoặc một IP hợp pháp bất kỳ.

* *Ví dụ thực tế:* Bạn gửi một bức thư đe dọa nhưng trên góc phong bì, ở mục "Người gửi", bạn lại ghi tên và địa chỉ của Trưởng công an quận. Người nhận khi nhìn thấy phong bì sẽ mất cảnh giác và mở ra xem ngay lập tức. Trong mạng máy tính, Tường lửa khi thấy một gói tin đến từ một IP "thân quen" được cấu hình từ trước sẽ tự động mở cửa cho qua mà không hề nghi ngờ.

---

## Phân tích sâu: Cuộc chiến tư duy giữa Hacker và Quản trị viên

Để thực sự làm chủ kiến thức này, chúng ta cần nhìn nhận vấn đề dưới 3 góc độ khác nhau: Góc nhìn của Kẻ tấn công, Góc nhìn của Người phòng thủ, và Góc nhìn của Kiến trúc sư hệ thống.

```
+--------------------------------------------------------+
|                   INTERNET (Hacker)                    |
+--------------------------------------------------------+
                           |
                           v
              +-------------------------+
              |   Tường lửa (Firewall)  | <--- Giám sát & Chặn
              +-------------------------+
                           |
                           v
              +-------------------------+
              |       Hệ thống IDS      | <--- Phân tích & Cảnh báo
              +-------------------------+
                           |
                           v
+--------------------------------------------------------+
|                    MẠNG NỘI BỘ (LAN)                   |
|   +------------------+          +------------------+   |
|   |   DMZ (Web/Mail) |          |  Vùng Cốt Lõi    |   |
|   +------------------+          +------------------+   |
+--------------------------------------------------------+

```

### 1. Góc nhìn của Kẻ tấn công (Attacker)

Đối với một Hacker, Firewall và IDS không phải là những bức tường không thể phá hủy, chúng chỉ là những **chương trình phần mềm chạy trên máy tính**. Mà đã là phần mềm thì luôn có giới hạn về tài nguyên (CPU, RAM) và có logic xử lý cố định.

* Nếu ta gửi gói tin phân mảnh quá nhanh và quá nhiều, bộ nhớ đệm (Buffer) của IDS sẽ bị tràn, buộc nó phải bỏ qua việc kiểm tra để không làm nghẽn mạng (Fail-open).
* Hoặc nếu ta gửi các mảnh gói tin bị cố tình làm lệch thứ tự (Overlapping Fragments), một số dòng IDS cũ sẽ không biết phải lắp ghép mảnh nào trước, mảnh nào sau, dẫn đến việc hiểu sai nội dung và bỏ lọt mã độc.

### 2. Góc nhìn của Người phòng thủ (Defender)

Là một người quản trị hệ thống, bạn không thể chỉ tin tưởng tuyệt đối vào cấu hình mặc định của thiết bị. Người phòng thủ thông minh sẽ hiểu rằng: "Chữ ký" (Signature) luôn đi sau hacker một bước. Nếu hacker dùng mã độc mới tinh (Zero-day), IDS dựa trên chữ ký sẽ hoàn toàn mù lòa.
Do đó, người phòng thủ phải kết hợp thêm công nghệ nhận diện hành vi, liên tục cập nhật cơ sở dữ liệu, và quan trọng nhất: **Giới hạn tối đa quyền hạn của dòng dữ liệu**. Nếu một gói tin IP Spoofing từ ngoài Internet gửi vào nhưng lại mang địa chỉ IP nguồn nội bộ, tường lửa phải được cấu hình để vứt bỏ (Drop) nó ngay lập tức ở vòng gửi xe (Kỹ thuật này gọi là Ingress Filtering).

### 3. Góc nhìn của Kiến trúc sư mạng (Network Architect)

Một kiến trúc sư giỏi sẽ không bao giờ đặt toàn bộ niềm tin vào một lớp phòng thủ duy nhất. Họ áp dụng nguyên lý **Phòng thủ chiều sâu (Defense in Depth)**. Nếu Firewall bị vượt qua, vẫn còn IDS. Nếu IDS bị đánh lừa, vẫn còn Tường lửa trên từng máy host (Host-based Firewall). Nếu Host-based Firewall thất bại, dữ liệu nhạy cảm vẫn được mã hóa an toàn. Việc thiết kế mô hình mạng phân tách (Network Segmentation) hợp lý chính là chìa khóa then chốt để cô lập thiệt hại khi hacker áp dụng thành công các kỹ thuật bypass kể trên.

---

## Cách áp dụng vào thực tế: Thiết kế mô hình phân tách mạng tiêu chuẩn cho doanh nghiệp

Bây giờ, chúng ta hãy xắn tay áo lên và cùng nhau thiết kế một hệ thống mạng doanh nghiệp an toàn, đặt vị trí IDS/Firewall ở đâu để tối ưu hóa khả năng bảo vệ, ngăn chặn các kỹ thuật vượt tường lửa ở trên. Chúng ta sẽ thực hiện theo quy trình 4 bước cụ thể sau:

### Bước 1: Phân tách các vùng mạng (Network Segmentation)

Bạn không được phép để tất cả các máy tính chung vào một "rổ". Hãy chia hệ thống thành 3 vùng biệt lập:

1. **Vùng Ngoài (External/Internet):** Nơi chứa toàn bộ thế giới Internet đầy rẫy hiểm họa.
2. **Vùng DMZ (Demilitarized Zone - Vùng phi quân sự):** Nơi đặt các máy chủ công khai cần giao tiếp với Internet như Web Server, Mail Server. Vùng này chấp nhận rủi ro bị tấn công nhưng được cách ly hoàn toàn với mạng nội bộ.
3. **Vùng Trong (Internal/Trusted Network):** Nơi đặt các máy trạm của nhân viên, máy chủ dữ liệu kế toán, cơ sở dữ liệu khách hàng. Đây là vùng cần bảo mật tuyệt đối.

### Bước 2: Triển khai Tường lửa ba chân (Triple-Homed Firewall)

Chúng ta sẽ sử dụng một thiết bị Tường lửa có ít nhất 3 cổng mạng (Interfaces) để kết nối và kiểm soát lưu lượng giữa 3 vùng trên:

* **Cổng 1:** Kết nối với Internet.
* **Cổng 2:** Kết nối với vùng DMZ.
* **Cổng 3:** Kết nối với vùng Internal.

### Bước 3: Đặt vị trí hệ thống IDS/IPS hợp lý

Để tối ưu hóa hiệu năng và tránh báo động giả, chúng ta nên đặt IDS ở hai vị trí chiến lược:

* **Vị trí 1 (Phía sau Tường lửa, trước vùng DMZ):** Để giám sát toàn bộ lưu lượng đã qua bộ lọc của Firewall xem có chứa mã độc hay kỹ thuật phân mảnh (Fragmentation) nhằm tấn công Web Server hay không.
* **Vị trí 2 (Trước cửa ngõ vào vùng Internal):** Để đảm bảo không có bất kỳ hành vi bất thường nào từ vùng DMZ hoặc từ bên ngoài có thể len lỏi vào vùng dữ liệu cốt lõi của doanh nghiệp.

### Bước 4: Thiết lập bộ quy tắc (Firewall Rules) cốt lõi

Hãy cấu hình tường lửa theo nguyên tắc **"Cấm tất cả, chỉ cho phép những gì quy định" (Deny All by Default)**. Cụ thể:

| Quy tắc (Rule) | Nguồn (Source) | Đích (Destination) | Dịch vụ (Service/Port) | Hành động (Action) | Ý nghĩa |
| --- | --- | --- | --- | --- | --- |
| **Rule 1** | Internet | DMZ (Web Server) | HTTP/HTTPS (80/443) | **Allow (Cho phép)** | Khách hàng ngoài Internet truy cập được website công ty. |
| **Rule 2** | Internet | Internal Network | Any (Tất cả) | **Deny (Chặn)** | Ngăn chặn tuyệt đối mọi kết nối trực tiếp từ Internet vào máy nhân viên. |
| **Rule 3** | DMZ | Internal Network | Any (Tất cả) | **Deny (Chặn)** | Nếu Web Server ở vùng DMZ có bị hacker chiếm quyền điều khiển, chúng cũng không thể bò sang vùng nội bộ được. |
| **Rule 4** | Internal Network | DMZ (Database Server) | SQL Port (1433/3306) | **Allow (Cho phép)** | Chỉ cho phép nội bộ truy vấn dữ liệu khi cần thiết. |

---

## Lưu ý quan trọng: Những sai lầm "chết người" cần tránh

Trong quá trình làm nghề, tôi đã chứng kiến rất nhiều hệ thống hàng triệu đô bị sụp đổ chỉ vì những lỗi cấu hình cực kỳ ngây thơ. Hãy ghi nhớ các điều sau để không đi vào vết xe đổ đó:

> ⚠️ **Sai lầm 1: Đặt IDS phía trước Tường lửa (Internet-facing)**
> Nếu bạn đặt IDS ở ngay ngoài rìa Internet trước khi gói tin đi vào Tường lửa, IDS của bạn sẽ phải xử lý hàng tỷ gói tin rác, quét cổng (Port scan) từ Internet mỗi giây. Hệ thống sẽ bị quá tải ngay lập tức, sinh ra hàng tá báo động giả (False Positives) khiến bạn bị "bão hòa cảnh báo" và bỏ sót các cuộc tấn công thực sự. *Luôn luôn đặt IDS phía sau một lớp lọc của Tường lửa.*

> ⚠️ **Sai lầm 2: Tin tưởng tuyệt đối vào cấu hình mặc định (Out-of-the-box)**
> Rất nhiều quản trị viên mua thiết bị đắt tiền về, cắm điện, bật lên và nghĩ thế là an toàn. Kẻ tấn công dày dặn kinh nghiệm luôn biết rõ các thông số mặc định của các hãng lớn (như Cisco, Fortinet, Checkpoint). Nếu bạn không bật tính năng chống phân mảnh gói tin (Fragment Reassembly) hoặc không bật tính năng kiểm tra IP Spoofing, thiết bị của bạn chẳng khác nào một cánh cửa khóa chặt nhưng lại quên đóng cửa sổ.

> ⚠️ **Sai lầm 3: Không cấu hình giới hạn kích thước gói tin (MTU) đồng nhất**
> Nếu các thiết bị mạng trong hệ thống (Router, Firewall, Switch) có cấu hình MTU không đồng nhất, nó sẽ tự động ép các gói tin phải phân mảnh nhiều hơn mức cần thiết. Điều này vô tình tạo điều kiện lý tưởng cho hacker thực hiện các cuộc tấn công lách luật bằng Packet Fragmentation mà hệ thống không kịp trở tay.

---

## Câu hỏi ôn tập dành cho bạn

Để khép lại bài học hôm nay, tôi có một câu hỏi nhỏ để các bạn tự kiểm tra tư duy của mình:

*Nếu kẻ tấn công thực hiện kỹ thuật **IP Spoofing**, làm giả địa chỉ IP của một máy tính Giám đốc đang ngồi trong văn phòng để gửi lệnh từ ngoài Internet vào hệ thống, thì quy tắc (Rule) nào trên Tường lửa hoặc cơ chế nào của IDS sẽ giúp chúng ta phát hiện và ngăn chặn hành vi này?*

Hãy suy nghĩ về kiến thức **Ingress Filtering** (Lọc gói tin đi vào) mà chúng ta vừa thảo luận ở trên để tìm ra câu trả lời nhé!

Chúc các bạn học tốt và hẹn gặp lại các bạn vào **Ngày 23: Bẫy Ngọt Ngào (Honeypot Concepts)** - nơi chúng ta sẽ học cách dựng lên những "kho báu giả" để lừa ngược lại các hacker!