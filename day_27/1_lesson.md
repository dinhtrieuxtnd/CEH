**BÀI GIẢNG CHI TIẾT – NGÀY 27: TẤN CÔNG MẠNG KHÔNG DÂY (WI-FI HACKING) & CHIẾN LƯỢC NÂNG CẤP WPA3**

* **Mục tiêu bài giảng (Đo lường được):**
* Phân biệt chính xác bản chất logic và điểm yếu cốt lõi của các chuẩn mã hóa Wi-Fi: WEP, WPA, WPA2 và WPA3.
* Thấu hiểu tường tận quy trình bắt cái bắt tay 4 bước (4-way handshake) trong cơ chế WPA2 và lý do nó bị khai thác ngoại tuyến (Offline Dictionary Attack).
* Giải thích được nguyên lý vận hành của đòn tấn công KRACKs và Dragonblood.
* Chỉ ra lý do doanh nghiệp bắt buộc phải nâng cấp lên chuẩn bảo mật WPA3 thông qua mô hình bẻ khóa toán học.


* **Thời lượng gợi ý:** 50 phút.
* **Đối tượng hướng đến:** Người học An toàn thông tin, Quản trị mạng doanh nghiệp.

---

### 1. MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Hãy tưởng tượng các em đang ngồi ở một quán cà phê quen thuộc, lướt điện thoại và kết nối vào mạng Wi-Fi có tên "Café Sách Free". Mọi thứ trông thật bình thường và tiện lợi. Tuy nhiên, các em có bao giờ tự hỏi: Khi nhấn nút "Kết nối" và nhập mật khẩu, luồng dữ liệu chứa tin nhắn riêng tư, tài khoản ngân hàng hay email công việc của các em di chuyển trong không khí như thế nào?

Bản chất của mạng không dâu (Wi-Fi) giống như việc các em đang đứng ở giữa một sân vận động và dùng loa phóng thanh để nói chuyện với một người bạn ở khán đài đối diện. Bất kỳ ai có mặt trong sân vận động đó, chỉ cần họ bật một thiết bị thu âm (card mạng ở chế độ Monitor Mode), đều có thể "nghe" thấy toàn bộ nội dung câu chuyện của các em. Hôm nay, chúng ta sẽ cùng nhau bóc trần những chiếc "áo giáp mật mã" bảo vệ sóng Wi-Fi và học cách các hacker mũ đen tìm cách lột bỏ lớp áo giáp này như thế nào.

---

### 2. KIẾN THỨC CỐT LÕI

Để hiểu cách tấn công và phòng thủ mạng không dây, trước hết chúng ta phải nắm rõ lịch sử tiến hóa của các thuật toán mã hóa Wi-Fi (Tư duy chuẩn Module 16 CEH v11).

#### A. Lịch sử và Điểm yếu của các chuẩn mã hóa Wi-Fi

* **WEP (Wired Equivalent Privacy - Ra đời năm 1997):** * *Khái niệm đơn giản:* Đây là chuẩn bảo mật đời đầu, mục tiêu ban đầu là làm cho mạng không dây an toàn "tương đương mạng dây". WEP sử dụng thuật toán mã hóa dòng RC4 kết hợp với một Vectơ khởi tạo (IV - Initialization Vector) chỉ dài 24-bit.
* *Ví dụ minh họa:* Hãy tưởng tượng WEP giống như một ổ khóa sử dụng mã số gồm 3 chữ số. Vì số lượng tổ hợp quá ngắn, nếu có một lượng lớn xe cộ đi qua cửa (lưu lượng mạng lớn), chiếc khóa này sẽ tự động dùng lại các mã số cũ (IV Collision). Hacker chỉ cần thu thập đủ số lượng gói tin (khoảng vài chục ngàn gói) là có thể giải mã ra mật khẩu gốc trong vòng chưa đầy 3 phút bằng các công cụ tự động như `aircrack-ng`. *Kết luận: WEP hiện nay coi như vô giá trị.*


* **WPA (Wi-Fi Protected Access - Ra đời năm 2003):**
* *Khái niệm đơn giản:* Là giải pháp vá lỗi tạm thời cho WEP. WPA giới thiệu giao thức TKIP (Temporal Key Integrity Protocol), giúp thay đổi khóa mã hóa liên tục theo từng gói tin để tránh lỗi trùng lặp IV của WEP. Tuy nhiên, nó vẫn chạy trên nền tảng phần cứng cũ của WEP nên TKIP nhanh chóng bị bẻ gãy.


* **WPA2 (Wi-Fi Protected Access 2 - Ra đời năm 2004):**
* *Khái niệm đơn giản:* Đây là chuẩn bảo mật quốc dân mà hiện tại phần lớn gia đình và doanh nghiệp vẫn đang dùng. WPA2 bắt buộc sử dụng thuật toán mã hóa cực mạnh **AES (Advanced Encryption Standard)** kết hợp với cơ chế kiểm tra toàn vẹn dữ liệu **CCMP**. WPA2 chia làm hai chế độ: WPA2-Personal (Dùng chung 1 mật khẩu - Pre-Shared Key - PSK) và WPA2-Enterprise (Mỗi nhân viên 1 tài khoản riêng xác thực qua máy chủ RADIUS).


* **WPA3 (Wi-Fi Protected Access 3 - Ra đời năm 2018):**
* *Khái niệm đơn giản:* Lá chắn hiện đại nhất hiện nay. WPA3 thay thế cơ chế xác thực PSK bằng giao thức **SAE (Simultaneous Authentication of Equals)**, giúp triệt tiêu hoàn toàn các đòn tấn công mò mật khẩu ngoại tuyến, ngay cả khi người dùng đặt mật khẩu yếu.



#### B. Quy trình bắt cái "Bắt tay 4 bước" (4-Way Handshake) trong WPA2

Đối với một Ethical Hacker, **4-Way Handshake** là khái niệm bắt buộc phải thuộc lòng. Đây là quy trình diễn ra khi thiết bị của em (Client - điện thoại/máy tính) kết nối vào cục Router Wi-Fi (Access Point - AP) sử dụng WPA2-PSK.

Mục đích của 4 bước này không phải là gửi mật khẩu trực tiếp qua không khí (vì như vậy sẽ bị lộ ngay), mà là để hai bên chứng minh cho nhau thấy: *"Tôi có giữ mật khẩu đúng"* và cùng nhau tạo ra một Khóa mã hóa tạm thời gọi là **PTK (Pairwise Transient Key)** để mã hóa dữ liệu sau đó.

1. **Bước 1 (AP $\rightarrow$ Client):** Router gửi cho Client một chuỗi số ngẫu nhiên gọi là **ANonce** (Access Point Nonce).
2. **Bước 2 (Client $\rightarrow$ AP):** Client tự tạo ra một chuỗi số ngẫu nhiên của riêng mình gọi là **CNonce** (Client Nonce). Kết hợp ANonce, Cnonce, địa chỉ MAC của hai thiết bị và mật khẩu Wi-Fi (PSK) để tính toán ra khóa **PTK**. Sau đó, Client gửi chuỗi CNonce này cùng với một mã kiểm tra toàn vẹn gọi là **MIC (Message Integrity Code)** về cho Router.
3. **Bước 3 (AP $\rightarrow$ Client):** Router nhận CNonce, tự tính toán ra PTK theo công thức tương tự. Nếu PTK của Router khớp với mã MIC do Client gửi, Router xác nhận Client biết mật khẩu đúng. Router gửi một mã xác nhận kèm theo khóa nhóm GTK (Group Temporal Key dùng cho truyền hình multicast).
4. **Bước 4 (Client $\rightarrow$ AP):** Client gửi gói tin cuối cùng để báo cáo: *"Tôi đã sẵn sàng, hãy bật mã hóa lên"*.

* **Tử huyệt bảo mật của WPA2:** Toàn bộ quá trình này đều truyền công khai trong không gian. Hacker hoàn toàn có thể đứng từ xa dùng card mạng rình rập, ghi lại trọn vẹn 4 bước này vào một file định dạng `.cap` hoặc `.pcap`.

---

### 3. PHÂN TÍCH SÂU: GÓC NHÌN CHUYÊN GIA VỀ CÁC ĐÒN TẤN CÔNG

Để thấy rõ tại sao WPA2 bị lung lay và WPA3 là bắt buộc, chúng ta cần phân tích sâu các chiến thuật tấn công mạng không dây dưới góc nhìn kỹ thuật:

#### Góc nhìn 1: Đòn tấn công Tách biệt (Deauthentication Attack) & Bẻ khóa mật khẩu ngoại tuyến (Offline Dictionary Attack)

Thông thường, nếu một thiết bị đã kết nối vào mạng Wi-Fi từ trước, quy trình 4-Way Handshake sẽ không xảy ra nữa. Hacker không thể ngồi chờ cho đến khi có người mới vào quán cà phê để bắt gói tin. Do đó, họ sử dụng đòn tấn công chủ động: **Deauthentication Attack**.

* **Cơ chế:** Hacker gửi các gói tin giả mạo địa chỉ MAC của Router, phát lệnh "Ngắt kết nối" (Deauth packet) nhắm trực tiếp vào điện thoại của nạn nhân. Điện thoại ngay lập tức bị văng ra khỏi mạng Wi-Fi. Theo cơ chế tự động của hệ điều hành, điện thoại sẽ lập tức gửi yêu cầu kết nối lại. Ngay tại khoảnh khắc kết nối lại đó, quy trình 4-Way Handshake tái diễn, và hacker thu giữ được file bắt tay thành công.
* **Bẻ khóa ngoại tuyến (Offline):** Sau khi có được file `.cap` chứa dữ liệu bắt tay, hacker không cần phải tương tác với Router Wi-Fi nữa. Họ đem file này về máy cá nhân hoặc đẩy lên các dàn máy đào hash chuyên dụng sử dụng GPU (qua các công cụ như `Hashcat`). Hacker sẽ chạy một danh sách hàng triệu mật khẩu mẫu (Dictionary). Với mỗi mật khẩu trong danh sách, thuật toán sẽ tính thử xem nó có tạo ra mã MIC trùng khớp với mã MIC trong gói tin bắt tay thu được hay không. Nếu trùng, mật khẩu đã bị tìm ra. Vì là tấn công ngoại tuyến, hệ thống Router hoàn toàn không hề hay biết và không thể bật cơ chế khóa tài khoản hay chặn IP.

#### Góc nhìn 2: Lỗ hổng logic hệ thống - Tấn công KRACKs (Key Reinstallation Attacks)

Năm 2017, chuyên gia bảo mật Mathy Vanhoef công bố lỗ hổng **KRACKs**, giáng một đòn chí mạng vào giao thức WPA2. Lỗ hổng này không nằm ở độ dài mật khẩu ngắn hay dài, mà nằm ngay trong chính logic thiết kế của quy trình 4-Way Handshake.

* **Cơ chế:** Ở Bước 3 của quy trình bắt tay, Router gửi khóa mã hóa cho Client. Nếu gói tin này bị suy hao do khoảng cách vật lý hoặc bị hacker chặn lại, Router sẽ tự động gửi lại (retransmit) gói tin Bước 3 một lần nữa. Lợi dụng điều này, hacker cố tình ép Client phải cài đặt lại một khóa mã hóa đã sử dụng (Key Reinstallation). Khi một khóa mật mã bị ép buộc khởi tạo lại về giá trị ban đầu, các bộ đếm gói tin (Nonces/Counters) bị lặp lại, khiến cho thuật toán mã hóa dòng bị mất tính ngẫu nhiên. Hacker có thể tận dụng điều này để giải mã lưu lượng mạng hoặc chèn mã độc vào luồng truyền tin mà không cần biết mật khẩu Wi-Fi của mục tiêu.

#### Góc nhìn 3: Cuộc cách mạng WPA3 và Lỗ hổng Dragonblood

Để giải quyết triệt để vấn đề bẻ khóa ngoại tuyến và lỗi cài đặt lại khóa, WPA3 ra đời với giao thức **SAE (Simultaneous Authentication of Equals)**. SAE áp dụng thuật toán trao đổi khóa toán học dựa trên đường cong Elliptic (Diffie-Hellman).

* **Tại sao WPA3 chống được Offline Attack?** Trong WPA3, ngay cả khi hacker bắt được toàn bộ gói tin xác thực trong không khí, cấu trúc toán học của SAE đảm bảo rằng hacker không thể thực hiện tính toán thử-sai mật khẩu ngoại tuyến được nữa. Mỗi lần muốn thử một mật khẩu, hacker buộc phải thực hiện một phiên tương tác trực tiếp (Online) với Router. Router có thể dễ dàng phát hiện hành vi dò bừa này và khóa kết nối ngay lập tức.
* **Tuy nhiên, không có gì là tuyệt đối (Lỗ hổng Dragonblood):** Giai đoạn đầu triển khai WPA3, các nhà nghiên cứu phát hiện ra nhóm lỗ hổng mang tên *Dragonblood*. Lỗ hổng này khai thác vào cơ chế tương thích ngược (Transition Mode - khi một Router phát sóng hỗ trợ cả WPA2 và WPA3 cùng lúc). Hacker có thể thực hiện đòn tấn công hạ cấp (Downgrade Attack), ép thiết bị của nạn nhân phải tụt xuống dùng WPA2 để chúng tiếp tục bẻ khóa theo cách cũ, hoặc khai thác lỗi rò rỉ kênh bên (Side-channel attacks) trong quá trình tính toán đường cong elliptic của chip xử lý trên Router để dò mật mã.

---

### 4. CÁCH ÁP DỤNG VÀO THỰC TẾ (LAB DEMO & PHÒNG THỦ)

*Cảnh báo đạo đức nghề nghiệp: Chỉ thực hiện các bước này trên hệ thống phòng thí nghiệm cá nhân (Home Lab) hoặc hệ thống của khách hàng đã ký văn bản thỏa thuận kiểm thử (NDA).*

#### Quy trình thực hiện Kiểm thử Đánh giá An ninh mạng Wi-Fi (WPA2)

Để chỉ ra điểm yếu của hệ thống Wi-Fi doanh nghiệp dùng chuẩn cũ cho ban giám đốc, một Ethical Hacker sẽ tiến hành theo các bước sau:

* **Bước 1: Chuyển Card mạng sang chế độ giám sát (Monitor Mode)**
Sử dụng hệ điều hành Kali Linux, xác định tên card mạng không dây (thường là `wlan0`) và gõ lệnh:
```bash
airmon-ng start wlan0

```


Lệnh này biến card mạng từ chế độ thông thường (chỉ nhận gói tin dành cho nó) sang chế độ "nghe lén toàn không gian" (Monitor Mode), giao diện mới thường là `wlan0mon`.
* **Bước 2: Dò quét các mạng Wi-Fi xung quanh**
Sử dụng công cụ `airodump-ng` để tìm kiếm danh sách các trạm phát sóng (BSSID/Địa chỉ MAC của Router) và các kênh (Channel) đang chạy:
```bash
airodump-ng wlan0mon

```


Xác định mục tiêu là một Router dùng mã hóa `WPA2 CCMP PSK` chạy trên Kênh 6, có BSSID là `00:11:22:33:44:55`.
* **Bước 3: Tập trung bắt gói tin Handshake trên mục tiêu đích**
Bật tiến trình ghi lại dữ liệu trên Kênh 6 và lưu vào file tên là `DoanhNghiepTest`:
```bash
airodump-ng -c 6 --bssid 00:11:22:33:44:55 -w DoanhNghiepTest wlan0mon

```


* **Bước 4: Thực hiện đòn tấn công Ngắt kết nối chủ động (Deauth Attack)**
Mở một cửa sổ Terminal mới, gửi 10 gói tin Deauth để ép thiết bị khách (Client) có MAC `AA:BB:CC:DD:EE:FF` phải kết nối lại nhằm thu giữ Handshake ngay lập tức:
```bash
aireplay-ng -0 10 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon

```


Khi trên màn hình của công cụ `airodump-ng` xuất hiện dòng chữ `WPA Handshake: 00:11:22:33:44:55`, việc thu thập dấu vết đã thành công.
* **Bước 5: Tiến hành bẻ khóa ngoại tuyến chứng minh lỗ hổng**
Sử dụng file từ điển mật khẩu `rockyou.txt` có sẵn để rà soát:
```bash
aircrack-ng -w rockyou.txt DoanhNghiepTest-01.cap

```


Nếu mật khẩu của doanh nghiệp nằm trong danh sách từ điển (ví dụ: `congty2025`, `password123`), công cụ sẽ hiển thị mật khẩu dưới dạng văn bản rõ (Plaintext) chỉ sau vài giây.

#### Chiến lược Phòng thủ và Cấu hình Chuẩn cho Doanh nghiệp

Nếu các em là chuyên gia bảo mật được thuê để bảo vệ hạ tầng mạng cho một tập đoàn, hãy triển khai ngay các bước sau:

1. **Kích hoạt WPA3-Enterprise độc lập:** Tuyệt đối không dùng chế độ hỗn hợp (WPA2/WPA3 Transition Mode) ở những khu vực lõi để chặn đứng đòn tấn công hạ cấp (Downgrade Attack).
2. **Áp dụng cơ chế MFP (Management Frame Protection):** Bắt buộc bật tính năng bảo vệ gói tin quản trị 802.11w. Tính năng này sẽ mã hóa các gói tin Deauthentication, khiến hacker không thể đá người dùng ra khỏi mạng Wi-Fi được nữa.
3. **Cô lập mạng khách (Guest Isolation):** Cấu hình phân tách hoàn toàn mạng Wi-Fi dành cho khách vãng lai và mạng nội bộ của nhân viên. Khách truy cập tuyệt đối không được nhìn thấy hoặc ping thấy các máy chủ kế toán, nhân sự trong mạng LAN.

---

### 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

* **Sai lầm 1: Nghĩ rằng ẩn tên Wi-Fi (Disable SSID Broadcasting) là an toàn.**
* *Sự thật:* Nhiều quản trị viên tắt tính năng phát tên Wi-Fi và cho rằng hacker không nhìn thấy thì không hack được. Đây là sai lầm ngớ ngẩn. Khi thiết bị của em đã từng kết nối vào mạng ẩn đó, nó sẽ liên tục phát ra các gói tin thăm dò (Probe Request) trong không khí để hỏi: *"Có Wi-Fi bí mật ở đây không?"*. Hacker chỉ cần dùng `airodump-ng` là nhìn thấy tên SSID ẩn xuất hiện trên màn hình ngay khi có thiết bị kết nối.


* **Sai lầm 2: Nghĩ rằng lọc địa chỉ MAC (MAC Filtering) là lá chắn vững chắc.**
* *Sự thật:* Cấu hình Router chỉ cho phép những địa chỉ MAC đăng ký trước được kết nối vào mạng. Tuy nhiên, địa chỉ MAC truyền hoàn toàn không mã hóa trong không gian. Hacker chỉ cần đứng nhìn thấy một địa chỉ MAC hợp lệ đang truyền tin, sau đó ngắt kết nối máy đó và đổi địa chỉ MAC của máy hacker thành y hệt (MAC Spoofing) bằng lệnh `macchanger` là có thể lách qua bộ lọc trong 1 nốt nhạc.


* **Sai lầm 3: Đặt mật khẩu WPA2 dài nhưng dễ đoán theo ngữ cảnh doanh nghiệp.**
* *Sự thật:* Một mật khẩu dài dạng `WelcomeToVietNam2026!` nghe có vẻ phức tạp nhưng nó hoàn toàn có thể bị bẻ gãy bởi đòn tấn công Dictionary kết hợp luật hoán vị (Rules) của `Hashcat`. Đối với WPA2, giải pháp duy nhất là sử dụng một cụm từ ngẫu nhiên không có nghĩa (Passphrase) hoặc chuyển hẳn sang kiến trúc xác thực tập trung WPA3-Enterprise kết hợp chứng chỉ số (Digital Certificates).



---

### BÀI TẬP TRẮC NGHIỆM CỦNG CỐ (MỤC TIÊU ĐẦU RA NGÀY 27)

**Câu 1:** Một Ethical Hacker thực hiện quét mạng Wi-Fi của một doanh nghiệp và phát hiện hệ thống đang sử dụng chuẩn bảo mật WEP. Điểm yếu cốt lõi nào của WEP cho phép hacker bẻ khóa được mật khẩu chỉ trong vài phút?
A. WEP sử dụng thuật toán mã hóa AES quá lỗi thời.
B. Độ dài Vectơ khởi tạo (IV) quá ngắn (24-bit) dẫn đến việc lặp lại khóa trong môi trường lưu lượng mạng lớn.
C. WEP không hỗ trợ cơ chế bắt tay 4 bước (4-Way Handshake).
D. WEP bắt buộc người dùng phải xác thực thông qua máy chủ RADIUS từ xa.

**Câu 2:** Tại sao đòn tấn công bẻ khóa mật khẩu ngoại tuyến (Offline Dictionary Attack) nhắm vào quy trình 4-Way Handshake của WPA2 lại cực kỳ nguy hiểm đối với hệ thống phòng thủ của doanh nghiệp?
A. Vì cuộc tấn công này sẽ làm tràn băng thông và gây sập thiết bị Router Wi-Fi của mục tiêu.
B. Vì hacker có thể mang file bắt tay về máy cá nhân để dò mật khẩu mà không cần tương tác với Router, khiến hệ thống giám sát (IDS/Log) hoàn toàn không thể phát hiện hay ngăn chặn.
C. Vì gói tin bắt tay chứa mật khẩu gốc của người dùng dưới dạng văn bản rõ (Plaintext).
D. Vì cuộc tấn công này bắt buộc hacker phải sở hữu đặc quyền quản trị tối cao trên thiết bị khách từ trước.

**Câu 3:** Chuẩn bảo mật không dây thế hệ mới WPA3 sử dụng giao thức SAE (Simultaneous Authentication of Equals) để thay thế cho cơ chế PSK của WPA2. Cải tiến toán học này mang lại lợi ích phòng thủ cốt lõi nào?
A. Làm tăng tốc độ truyền tải dữ liệu của sóng Wi-Fi lên gấp đôi.
B. Triệt tiêu hoàn toàn khả năng thực hiện đòn tấn công từ chối dịch vụ (DoS).
C. Chống lại hoàn toàn đòn tấn công dò mật khẩu ngoại tuyến (Offline Dictionary Attack) ngay cả khi người dùng đặt mật khẩu yếu.
D. Tự động ẩn hoàn toàn địa chỉ MAC vật lý của các thiết bị kết nối vào trạm phát.

---

### ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT

* **Câu 1: Chọn B**
* *TẠI SAO ĐÚNG:* Bản chất thuật toán mã hóa dòng RC4 của WEP không sai, lỗi nằm ở không gian thiết kế Vectơ khởi tạo (IV) quá nhỏ (24-bit). Khi truyền hàng triệu gói tin, các giá trị IV này buộc phải quay vòng và trùng lặp, tạo điều kiện cho các thuật toán phân tích thống kê toán học (như FMS, PTW) bẻ gãy khóa mã hóa gốc.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì WEP dùng RC4 chứ không dùng AES; C và D không phải đặc tính kỹ thuật của chuẩn WEP.


* **Câu 2: Chọn B**
* *TẠI SAO ĐÚNG:* Nguyên lý của Offline Attack là hacker tính toán giá trị băm từ danh sách từ điển trên tài nguyên phần cứng riêng của họ (GPU cá nhân). Do không gửi bất kỳ request lỗi nào tới Router mục tiêu, mọi cơ chế chống rà quét (Brute-force protection) trên Router đều bị vô hiệu hóa hoàn toàn.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì đây là tấn công thụ động thu giữ gói tin, không gây nghẽn mạng; C sai vì gói tin bắt tay chỉ chứa mã kiểm tra MIC chứ không chứa mật khẩu rõ.


* **Câu 3: Chọn C**
* *TẠI SAO ĐÚNG:* Giao thức SAE sử dụng cơ chế trao đổi khóa dựa trên bài toán logarit rời rạc trên đường cong Elliptic (Diffie-Hellman), buộc kẻ tấn công phải tham gia vào một quy trình xác thực trực tiếp (Online) với Router cho mỗi lần đoán mật khẩu, biến việc mò mật khẩu ngoại tuyến thành bất khả thi về mặt toán học.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A, B, D đều phóng đại hoặc sai lệch bản chất mục tiêu thiết kế của giao thức bảo mật SAE.