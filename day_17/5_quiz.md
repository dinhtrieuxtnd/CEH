Chào bạn! Dưới đây là bộ quiz 10 câu hỏi trắc nghiệm chuyên sâu về chủ đề **NGÀY 17 – "Nghe lén" Lưu Lượng Mạng (Sniffing Concepts)** theo tư duy chuẩn CEH v11.

Bộ câu hỏi được thiết kế theo đúng phân phối ma trận yêu cầu (4 câu Nhận biết, 3 câu Thông hiểu, 3 câu Vận dụng), loại bỏ hoàn toàn các phương án gây nhiễu hời hợt để đảm bảo tính phân loại học viên cực tốt, sẵn sàng giúp bạn copy-paste trực tiếp lên Google Form, Quizizz hoặc in ra làm tài liệu kiểm tra trên lớp.

---

### PHẦN I: NỘI DUNG CÂU HỎI TRẮC NGHIỆM

**MỨC ĐỘ: NHẬN BIẾT (4 CÂU)**

**Câu 1:** Trong môi trường mạng máy tính, cấu hình nào sau đây bắt buộc phải được kích hoạt trên Card giao tiếp mạng (NIC) của kẻ tấn công để hệ thống chấp nhận và chuyển lên các tầng trên xử lý toàn bộ các gói tin di chuyển qua đường truyền, bất kể địa chỉ MAC đích là gì?
* A. Monitor Mode
* B. Promiscuous Mode
* C. Half-Duplex Mode
* D. Stealth Mode

**Câu 2:** Khi một cuộc tấn công "nghe lén" mạng diễn ra một cách hoàn toàn vô hình, kẻ tấn công không gửi thêm bất kỳ gói tin nào vào hệ thống mạng nội bộ mà chỉ thụ động bắt các lưu lượng đang quảng bá (broadcast). Hiện tượng này thường xảy ra trong môi trường hạ tầng sử dụng thiết bị phần cứng nào sau đây?
* A. Managed Switch
* B. Router
* C. Hub
* D. Gateway

**Câu 3:** Giao thức nào sau đây truyền tải dữ liệu hoàn toàn dưới dạng văn bản thuần túy (Plaintext), khiến cho thông tin đăng nhập của người quản trị (Username/Password) bị lộ hoàn toàn ngay khi kẻ tấn công thực hiện bắt gói tin bằng Wireshark?
* A. Telnet
* B. SSH
* C. SFTP
* D. HTTPS

**Câu 4:** Để giảm thiểu tối đa rủi ro bị nghe lén dữ liệu truyền tải trên môi trường Web, doanh nghiệp được khuyến nghị đồng loạt chuyển đổi và thay thế hoàn toàn giao thức HTTP truyền thống sang giao thức bảo mật nào sau đây?
* A. SMTP
* B. SNMP
* C. FTP
* D. HTTPS

---

**MỨC ĐỘ: THÔNG HIỂU (3 CÂU)**

**Câu 5:** Tại sao kỹ thuật Tấn công Sniffing bị động (Passive Sniffing) hầu như không thể bị phát hiện bởi các hệ thống giám sát an ninh mạng truyền thống (như IDS hay Firewall)?
* A. Vì card mạng của hacker lúc này đã tự động ẩn địa chỉ IP và địa chỉ MAC vật lý.
* B. Vì các gói tin chạy qua HUB được nhân bản bằng phần cứng nên không làm thay đổi hay tiêu hao lưu lượng đường truyền.
* C. Vì hacker không phát tán hay can thiệp bất kỳ gói tin lạ nào vào lưu lượng chung của mạng.
* D. Vì bộ lọc của hệ thống IDS mặc định bỏ qua toàn bộ lưu lượng dữ liệu dạng quảng bá (Broadcast).

**Câu 6:** Điểm khác biệt cốt lõi về mặt cơ chế vận hành giữa Active Sniffing (Sniffing chủ động) và Passive Sniffing (Sniffing bị động) trong hạ tầng mạng là gì?
* A. Active Sniffing chỉ bắt được gói tin ở tầng Network (Tầng 3), còn Passive Sniffing bắt được ở tầng Data Link (Tầng 2).
* B. Active Sniffing đòi hỏi hacker phải gửi các gói tin giả mạo để thao túng bảng định tuyến/chuyển mạch của thiết bị, trong khi Passive Sniffing chỉ việc nhận dữ liệu tự động đổ về.
* C. Active Sniffing chỉ thực hiện được trên mạng không dây (Wi-Fi), còn Passive Sniffing chỉ áp dụng cho mạng dây truyền thống.
* D. Active Sniffing có khả năng tự động giải mã các gói tin mã hóa SSL/TLS, còn Passive Sniffing thì không thể.

**Câu 7:** Một quản trị viên hệ thống bật công cụ Wireshark trên máy tính cá nhân để rà soát lỗi ứng dụng và thấy rất nhiều gói tin của các máy tính khác trong cùng phòng ban đổ về máy mình. Nguyên nhân sâu xa nào dẫn tới hiện tượng mạng này?
* A. Máy tính của quản trị viên đang bị nhiễm mã độc Trojan điều khiển từ xa.
* B. Hạ tầng mạng nội bộ của phòng ban này đang kết nối tập trung qua một thiết bị HUB cũ hoặc Switch bị lỗi chuyển thành HUB.
* C. Tường lửa (Firewall) trên máy tính của quản trị viên đã bị tắt hoàn toàn.
* D. Do giao thức HTTPS trên các máy trạm khác đang bị lỗi chứng chỉ bảo mật (SSL Certificate).

---

**MỨC ĐỘ: VẬN DỤNG (3 CÂU)**

**Câu 8:** Một kỹ sư an ninh mạng đang xây dựng một phòng thí nghiệm cô lập (Malware Lab) trên máy ảo VMware để phân tích hành vi của một mẫu mã độc Trojan. Thao tác nào sau đây đối với card mạng máy ảo là chuẩn xác nhất để vừa có thể dùng Wireshark bắt gói tin phân tích kết nối ngầm của mã độc, vừa đảm bảo an toàn tuyệt đối cho máy thật (Host) và mạng doanh nghiệp?
* A. Cấu hình card mạng sang chế độ Bridged để máy ảo nhận IP trực tiếp từ Router thật.
* B. Cấu hình card mạng sang chế độ Host-Only (hoặc NAT Network cô lập) và ngắt kết nối với mạng LAN thật.
* C. Bật chế độ Promiscuous Mode trên card mạng của máy thật để theo dõi máy ảo.
* D. Chia sẻ chung thư mục dữ liệu (Shared Folders) giữa máy thật và máy ảo đang chạy mã độc.

**Câu 9:** Bạn đến một quán cà phê và kết nối vào mạng Wi-Fi công cộng có đặt mật khẩu bảo mật chuẩn WPA2. Bạn cần đăng nhập vào tài khoản quản trị hệ thống của công ty nhưng phát hiện website quản trị chỉ hỗ trợ giao thức kết nối `http://`. Hành động nào sau đây giúp bạn bảo vệ tài khoản của mình an toàn nhất trước nguy cơ bị Sniffing?
* A. Yên tâm đăng nhập vì mạng Wi-Fi của quán đã được bảo vệ bằng mật khẩu WPA2 nên không ai nghe lén được.
* B. Sử dụng một dịch vụ VPN đáng tin cậy để mã hóa toàn bộ lưu lượng mạng trước khi thực hiện đăng nhập vào trang web HTTP đó.
* C. Chuyển trình duyệt sang chế độ ẩn danh (Incognito Mode) để hacker không thể bắt được Cookie phiên làm việc.
* D. Đổi mật khẩu tài khoản của mình thành chuỗi ký tự cực kỳ dài và phức tạp trước khi bấm nút đăng nhập qua HTTP.

**Câu 10:** Trong vai trò là Chuyên gia kiểm thử xâm nhập (Ethical Hacker) được thuê để đánh giá an ninh mạng nội bộ cho một tổ chức, sau khi kết nối máy tính Kali Linux vào một cổng Switch của công ty, bạn nhận thấy Switch cấu hình bảo mật rất chặt nên không thể dùng Passive Sniffing. Bạn nên triển khai bước đi tiếp theo nào để kiểm thử khả năng bắt gói tin thu thập thông tin?
* A. Gửi liên tiếp các gói tin ICMP Echo Request (Ping) dung lượng lớn để làm sập Switch.
* B. Chuyển card mạng sang Monitor Mode để ép Switch phải gửi toàn bộ gói tin sang máy mình.
* C. Sử dụng công cụ để thực hiện đòn tấn công Active Sniffing thông qua kỹ thuật giả mạo/đầu độc gói tin ARP (ARP Spoofing).
* D. Báo cáo ngay với doanh nghiệp rằng hệ thống mạng nội bộ của họ đã an toàn tuyệt đối và không thể bị nghe lén.

---

### PHẦN II: ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT

| Câu | Đáp án | Giải thích Tại sao đúng / Tại sao các đáp án khác sai |
| --- | --- | --- |
| **1** | **B** | **- Đúng:** **Promiscuous Mode** là chế độ cho phép card mạng vượt qua bộ lọc địa chỉ MAC lớp vật lý để tiếp nhận và đẩy tất cả các khung dữ liệu (frames) nhận được trên đường truyền lên cho hệ điều hành xử lý.<br>**- Sai:** A sai vì Monitor Mode dùng cho card mạng Wi-Fi để bắt gói tin trên không trung mà không cần kết nối vào Access Point. C là chế độ truyền thông bán song công. D không phải thuật ngữ cấu hình card mạng. |
| **2** | **C** | **- Đúng:** **Hub** hoạt động ở Tầng 1 (Physical), nó không có trí thông minh để đọc địa chỉ MAC nên cơ chế mặc định của nó là sao chép gói tin nhận được từ một cổng và phát tán (Broadcast) ra tất cả các cổng còn lại, tạo điều kiện lý tưởng cho Passive Sniffing.<br>**- Sai:** A, B, D đều là các thiết bị thông minh (hoạt động ở Tầng 2, Tầng 3), chúng chỉ điều hướng gói tin đến đúng đích của thiết bị nhận chứ không phát tán bừa bãi. |
| **3** | **A** | **- Đúng:** **Telnet** là giao thức quản trị từ xa đời cũ, mọi dữ liệu bao gồm cả thông tin xác thực đều truyền đi dưới dạng văn bản rõ (Plaintext), Wireshark có thể đọc được ngay lập tức thông qua tính năng Follow TCP Stream.<br>**- Sai:** B, C, D đều là các giao thức an toàn, dữ liệu đã được mã hóa (bằng SSH hoặc SSL/TLS) nên nếu kẻ tấn công có bắt được gói tin cũng chỉ thấy chuỗi ký tự rác vô nghĩa. |
| **4** | **D** | **- Đúng:** **HTTPS** (HTTP Secure) sử dụng lớp bảo mật SSL/TLS để mã hóa toàn bộ dữ liệu truyền tải giữa Trình duyệt và Máy chủ Web, triệt tiêu hoàn toàn khả năng đọc hiểu nội dung gói tin của kẻ nghe lén.<br>**- Sai:** A là giao thức gửi Mail, B là giao thức quản trị thiết bị mạng, C là giao thức truyền file không mã hóa. |
| **5** | **C** | **- Đúng:** Trong mạng dùng HUB, gói tin tự động chạy qua card mạng của hacker. Hacker chỉ việc "im lặng" thu thập dữ liệu mà không hề tạo ra bất kỳ lưu lượng mạng bất thường hay gói tin giả mạo nào, khiến các hệ thống dò tìm (IDS) hoàn toàn "mù".<br>**- Sai:** A sai vì hacker vẫn phải giữ nguyên card mạng để nhận tin chứ không thể ẩn hoàn toàn MAC vật lý. B giải thích về bản chất phần cứng của HUB nhưng không phải lý do giải thích cho sự "vô hình" của hacker trước IDS. D sai vì IDS không bỏ qua traffic broadcast. |
| **6** | **B** | **- Đúng:** Bản chất cốt lõi là **Active Sniffing** phải chủ động can thiệp (bơm/gửi dữ liệu độc hại như ARP Poisoning) để làm thay đổi luồng đi bình thường của gói tin trên Switch, còn **Passive Sniffing** chỉ đứng im nhặt gói tin có sẵn do cơ chế quảng bá của Hub.<br>**- Sai:** A sai vì cả hai đều hoạt động chủ yếu ở Tầng 2 và 3. C sai vì Active áp dụng rất mạnh trên mạng dây dùng Switch. D sai vì Active Sniffing thông thường không tự giải mã được SSL nếu không kết hợp kỹ thuật tấn công giả mạo chứng chỉ nâng cao (MITM SSL Proxy). |
| **7** | **B** | **- Đúng:** Khi mạng nội bộ vô tình sử dụng thiết bị HUB cũ, hoặc thiết bị Switch bị tấn công tràn ngập bảng MAC (MAC Flooding) dẫn tới việc Switch rơi vào trạng thái lỗi và tự động hoạt động như một chiếc HUB (Fail-open mode), nó sẽ phát tán tất cả gói tin ra mọi cổng và máy của quản trị viên sẽ nhận được lưu lượng của máy khác.<br>**- Sai:** A, C, D không có cơ chế nào có thể tự động "kéo" các gói tin logic vốn thuộc về card mạng của máy tính khác chạy sang cổng vật lý của máy quản trị viên được. |
| **8** | **B** | **- Đúng:** Chế độ **Host-Only** tạo ra một mạng ảo nội bộ hoàn toàn cô lập giữa máy thật và máy ảo, ngắt kết nối ra mạng LAN thật của công ty. Lúc này, mã độc dù có kích hoạt gửi lưu lượng đi đâu cũng chỉ nằm trong máy ảo, kỹ sư có thể bật Wireshark trên card mạng ảo này để bắt gói tin phân tích hành vi kết nối C2 một cách an toàn tuyệt đối.<br>**- Sai:** A nguy hiểm vì Bridged sẽ làm mã độc lây lan thẳng vào mạng LAN thật của doanh nghiệp. C vô ích. D tạo đường mòn cho mã độc tấn công ngược từ máy ảo ra chiếm quyền điều khiển máy thật. |
| **9** | **B** | **- Đúng:** Mật khẩu WPA2 của quán Wi-Fi chỉ bảo vệ dữ liệu truyền từ máy đến cục Router không bị người ngoài đường bắt được. Tuy nhiên, một hacker khác ngồi trong quán cũng có mật khẩu Wi-Fi đó và ở chung mạng với bạn. Do trang web dùng HTTP (không mã hóa), hacker có thể dùng Active Sniffing để bắt trọn gói tin đăng nhập của bạn. Giải pháp duy nhất là bật **VPN** để mã hóa lưu lượng ngay tại máy bạn trước khi nó ra ngoài.<br>**- Sai:** A sai do chủ quan rủi ro đồng mạng. C ẩn danh chỉ giúp xóa lịch sử/cookie trên máy bạn chứ không mã hóa đường truyền. D mật khẩu phức tạp cỡ nào mà truyền dạng chữ rõ (Plaintext) qua HTTP thì hacker vẫn đọc được nguyên văn. |
| **10** | **C** | **- Đúng:** Switch thông minh sẽ cô lập lưu lượng giữa các cổng. Muốn nghe lén trong môi trường Switch, Ethical Hacker buộc phải chuyển sang kỹ thuật **Active Sniffing**, sử dụng công cụ (như Cain & Abel, Ettercap, Arpspoof) để liên tục gửi các gói tin ARP Reply giả mạo (ARP Spoofing/Poisoning) nhằm đánh lừa máy nạn nhân và Switch rằng máy của hacker chính là Gateway, từ đó ép toàn bộ traffic phải đi qua máy mình.<br>**- Sai:** A là tấn công từ chối dịch vụ (DoS) phá hoại hệ thống, không phải nghiệp vụ trinh sát/nghe lén. B sai vì Monitor Mode không có tác dụng điều hướng packet trên Switch dây. D là kết luận vội vã, thiếu năng lực chuyên môn. |

---

### 💡 LỜI KHUYÊN CHO GIÁO VIÊN KHI TRIỂN KHAI TRÊN LỚP:

* **Khi dùng trên Google Form / Quizizz:** Bạn có thể copy phần "Giải thích" vào mục *Feedback cho câu trả lời đúng/sai*. Điều này giúp học sinh tự học và hiểu sâu tại sao mình chọn sai ngay sau khi nộp bài.
* **Điểm nhấn tư duy:** Hãy nhấn mạnh cho học sinh hiểu rõ **Câu 7** và **Câu 9**. Đây là 2 câu hỏi thực tế rất hay xuất hiện trong các đề thi quốc tế (CEH, CompTIA Security+) nhằm phá vỡ những lầm tưởng kinh điển của người làm CNTT về độ an toàn của Switch và Wi-Fi bảo mật!

Chúc bạn và các học viên có một buổi học bùng nổ kiến thức! Nếu bạn cần tinh chỉnh hoặc bổ sung thêm câu hỏi tình huống nào khác, cứ nói cho tôi biết nhé!