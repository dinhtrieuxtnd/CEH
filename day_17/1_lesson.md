# BÀI GIẢNG CHI TIẾT: NGÀY 17 – "NGHE LÉN" LƯU LƯỢNG MẠNG (SNIFFING CONCEPTS)

* **Mục tiêu bài học:** Hiểu rõ cơ chế hoạt động của Sniffing (Chế độ Promiscuous Mode); phân biệt Sniffing chủ động (Active) và bị động (Passive); nhận diện các giao thức dễ bị nghe lén (HTTP, FTP, Telnet) và đề xuất giải pháp thay thế mã hóa.
* **Thời lượng gợi ý:** 45 phút.
* **Đối tượng hướng đến:** Người mới bắt đầu học An ninh mạng (Ethical Hacking).

---

## 1. MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Hãy tưởng tượng bạn đang ngồi trong một quán cà phê buổi sáng rất đông đúc. Ở bàn bên cạnh, có một nhóm người đang bàn bạc về một dự án kinh doanh bí mật. Họ không vào phòng kín, họ cũng không nói thầm, mà lại nói chuyện với âm lượng vừa đủ nghe giữa không gian chung. Nếu bạn vô tình hoặc cố ý tập trung lắng nghe, toàn bộ ý tưởng, số liệu doanh thu và kế hoạch của họ sẽ lọt vào tai bạn mà họ không hề hay biết.

Trong thế giới mạng cũng vậy, khi bạn gửi một dữ liệu từ máy tính của mình ra Internet qua mạng Wi-Fi công cộng hoặc mạng nội bộ, dữ liệu đó giống như những lời nói được phát tán vào không trung. Nếu các dữ liệu này không được "mã hóa" (giống như việc nói bằng một ngôn ngữ mật mã riêng), bất kỳ ai ngồi cùng mạng với bạn cũng có thể "nghe lén" được. Hôm nay, chúng ta sẽ cùng bóc tách kỹ thuật này – kỹ thuật **Sniffing (Nghe lén gói tin)** để hiểu cách kẻ xấu đánh cắp thông tin và cách chúng ta xây dựng lá chắn bảo vệ.

---

## 2. KIẾN THỨC CỐT LÕI (CORE KNOWLEDGE)

Để làm chủ module này theo chuẩn CEH v11, chúng ta cần chuyển hóa các khái niệm kỹ thuật thành những nguyên lý đời thường dễ hiểu nhất.

### 2.1. Sniffing là gì? Và ma lực của Chế độ "Hỗn tạp" (Promiscuous Mode)

Trong một mạng máy tính thông thường, các thiết bị giao tiếp với nhau bằng cách gửi các "gói tin" (Packets). Hãy tưởng tượng mỗi gói tin giống như một bức thư có ghi rõ địa chỉ người gửi (Source IP/MAC) và địa chỉ người nhận (Destination IP/MAC).

Theo cơ chế mặc định, card mạng (NIC) của máy tính giống như một người phát thư lịch sự: Nó chỉ nhận những bức thư có ghi đúng tên của nó, còn những bức thư gửi cho máy khác, nó sẽ lập tức vứt bỏ và không thèm đọc.

Tuy nhiên, câu chuyện sẽ hoàn toàn thay đổi khi kẻ tấn công chuyển card mạng sang một chế độ đặc biệt gọi là **Promiscuous Mode (Chế độ hỗn tạp)**.

> **Khái niệm cốt lõi:** **Promiscuous Mode** là chế độ cấu hình cho phép card mạng chấp nhận và xử lý *tất cả* các gói tin mà nó nhận được trên đường truyền, bất kể gói tin đó có địa chỉ đích gửi đến nó hay gửi đến một máy tính nào khác trong mạng.

* **Ví dụ minh họa:** Bình thường bạn đi ngoài đường, tai bạn nghe thấy rất nhiều âm thanh nhưng não bạn sẽ tự động lọc bỏ (mặc định loại bỏ nhiễu). Nhưng khi bạn chủ động ghé tai vào vách tường để nghe trộm phòng bên cạnh, bạn đang bật "Promiscuous Mode" của chính mình – thu nhận toàn bộ âm thanh không thuộc về mình.

### 2.2. Phân biệt Sniffing Bị động (Passive) và Chủ động (Active)

Không phải mạng lưới nào cũng có cách nghe lén giống nhau. Tùy thuộc vào thiết bị phần cứng của mạng đó, Sniffing được chia làm hai loại:

| Tiêu chí | Sniffing Bị động (Passive Sniffing) | Sniffing Chủ động (Active Sniffing) |
| --- | --- | --- |
| **Môi trường hoạt động** | Thường diễn ra trong mạng sử dụng thiết bị **Hub** (Thiết bị mạng cũ, hoạt động theo cơ chế phát tán quảng bá - Broadcast). | Diễn ra trong mạng sử dụng thiết bị **Switch** (Thiết bị mạng hiện đại, thông minh, chỉ gửi gói tin đến đúng cổng của người nhận). |
| **Cơ chế hoạt động** | Kẻ tấn công chỉ việc "ngồi im và nhặt gói tin". Vì Hub gửi dữ liệu đến tất cả các cổng, gói tin của người khác tự động chạy qua card mạng của hacker. | Kẻ tấn công buộc phải "bơm" các gói tin độc hại vào mạng (như đầu độc ARP, ngập lụt bảng MAC) để đánh lừa Switch gửi nhầm dữ liệu của người khác sang máy của hacker. |
| **Mức độ bị phát hiện** | **Cực kỳ khó phát hiện** vì hacker không gửi thêm bất kỳ dữ liệu lạ nào vào hệ thống mạng, họ hoàn toàn vô hình. | **Dễ bị phát hiện** bởi các hệ thống giám sát an ninh (IDS/Firewall) vì tạo ra lưu lượng mạng bất thường và các gói tin giả mạo. |

### 2.3. Diện kiến "Kẻ ở trần" – Các giao thức dễ bị nghe lén

Khi nghe lén thành công, điều hacker mong muốn nhất là nhìn thấy dữ liệu ở dạng **Plaintext (Văn bản thuần túy)** – tức là đọc được ngay mà không cần giải mã. Đáng buồn là có rất nhiều giao thức truyền thống, lâu đời trên Internet lại gửi dữ liệu hoàn toàn "ở trần" như vậy. Dưới đây là những cái tên nguy hiểm nhất:

* **HTTP (Hypertext Transfer Protocol):** Giao thức truyền tải web truyền thống. Khi bạn nhập mật khẩu trên một trang web sử dụng `http://`, mật khẩu đó bay lơ lửng trên mạng dưới dạng chữ rõ ràng.
* **FTP (File Transfer Protocol):** Giao thức truyền tải tập tin. Toàn bộ tài khoản, mật khẩu quản trị và nội dung file truyền đi đều có thể bị đọc trọn vẹn.
* **Telnet:** Giao thức quản trị thiết bị từ xa. Kẻ tấn công có thể nhìn thấy từng câu lệnh, từng mật khẩu cấu hình Router/Switch của người quản trị.
* **SMTP & POP3:** Giao thức gửi và nhận email cũ. Nội dung bức thư tình hay tài liệu mật của công ty sẽ bị phơi bày.

---

## 3. PHÂN TÍCH SÂU (DEEP DIVE)

Để hiểu sâu sắc về bản chất của Sniffing dưới góc nhìn của một chuyên gia an ninh mạng, chúng ta cần phân tích vấn đề qua các lăng kính tương phản:

### Góc nhìn 1: Bản chất nhị nguyên – Sniffing là Công cụ tấn công hay Vũ khí phòng thủ?

Nhiều người nghe đến "nghe lén" là nghĩ ngay đến tội phạm. Nhưng thực tế, phần mềm Sniffing phổ biến nhất thế giới hiện nay là **Wireshark** lại là công cụ gối đầu giường của mọi kỹ sư mạng và chuyên gia bảo mật chính trực.

* **Dưới góc nhìn của Kẻ tấn công (Attacker):** Sniffing là bước đi béo bở trong giai đoạn thu thập thông tin và đánh cắp danh tính. Họ dùng nó để lượm lặt cookie, session token, mật khẩu tài khoản ngân hàng.
* **Dưới góc nhìn của Người phòng thủ (Defender/Sysadmin):** Sniffing là công cụ để "bắt bệnh" hệ thống. Khi mạng bị chậm, khi một ứng dụng không kết nối được với cơ sở dữ liệu, người quản trị sẽ tiến hành "bắt gói tin" (Packet Capture) để xem lỗi nằm ở tầng nào, gói tin có bị nghẽn ở đâu không, hoặc phát hiện xem trong mạng có máy nào đang phát tán mã độc hay không.

### Góc nhìn 2: Sự tiến hóa của hạ tầng và cuộc rượt đuổi công nghệ

Ngày xưa, khi mạng máy tính còn sơ khai và sử dụng Hub, việc bảo mật vật lý là tối quan trọng vì ai cắm dây vào mạng cũng xem được dữ liệu của nhau. Khi Switch ra đời, người ta tưởng rằng Sniffing đã sụp đổ vì Switch chỉ chuyển gói tin đích danh đến từng máy.

Nhưng không, hacker đã nâng cấp công nghệ để sinh ra các kỹ thuật tấn công tầng dữ liệu (Data Link Layer) như **ARP Spoofing** hay **MAC Flooding** (chúng ta sẽ học kỹ ở Ngày 18) nhằm biến một chiếc Switch thông minh trở thành một chiếc Hub "ngớ ngẩn" để tiếp tục nghe lén. Điều này cho thấy: *Hạ tầng mạng chỉ cung cấp ranh giới ngăn cách logic, chứ không cung cấp sự an toàn tuyệt đối cho dữ liệu.*

---

## 4. CÁCH ÁP DỤNG VÀO THỰC TẾ (PRACTICAL APPLICATION)

Là một Ethical Hacker, bạn không ngồi lý thuyết suông. Hãy thực hiện quy trình 3 bước sau để rà soát và đóng cánh cửa nghe lén trong hệ thống của bạn hoặc doanh nghiệp:

### Bước 1: Nhận diện các "vùng trần trụi" bằng Wireshark (Môi trường Lab)

1. Hãy bật phần mềm **Wireshark** trên máy ảo Lab của bạn và chọn đúng card mạng đang kết nối để bắt đầu bấm nút "Start Capture" (Biểu tượng vây cá mập màu xanh).
2. Hãy thử truy cập vào một trang web giả lập dùng giao thức `http://` (Ví dụ: các trang web bài tập như `http://testphp.vulnweb.com`).
3. Gõ một tài khoản bất kỳ (Ví dụ: `admin` / `Password123`) vào ô đăng nhập.
4. Quay lại Wireshark, gõ vào thanh lọc (Filter) từ khóa: `http.request.method == "POST"`.
5. Bấm chuột phải vào gói tin tìm được $\rightarrow$ Chọn **Follow** $\rightarrow$ **TCP Stream**. Bạn sẽ rùng mình khi thấy dòng chữ `uname=admin&pass=Password123` hiện ra đỏ chót trên màn hình. Đó chính là cách hacker nhìn thấy dữ liệu của bạn.

```text
[Hình ảnh minh họa kết quả TCP Stream trong Wireshark]
POST /login.php HTTP/1.1
Host: testphp.vulnweb.com
...
Content-Length: 28

uname=admin&pass=Password123

```

### Bước 2: Thực hiện chiến dịch "Thay thế Mã hóa" (Countermeasures)

Sau khi thấy được sự nguy hiểm, hãy lập tức rà soát và thay thế các giao thức không an toàn bằng các phiên bản có mã hóa (Cryptographic Protocols):

* **HTTP $\rightarrow$ Nâng cấp lên HTTPS (Port 443):** Sử dụng chứng chỉ SSL/TLS. Khi đã dùng HTTPS, dù hacker có bật Promiscuous Mode và bắt được gói tin của bạn, thứ họ nhìn thấy chỉ là một chuỗi ký tự rác mã hóa vô nghĩa dạng như `gX92!mK@#L...`.
* **Telnet $\rightarrow$ Nâng cấp lên SSH (Secure Shell - Port 22):** Toàn bộ phiên làm việc của người quản trị với thiết bị mạng sẽ được bảo vệ trong một đường ống mã hóa an toàn.
* **FTP $\rightarrow$ Nâng cấp lên SFTP hoặc FTPS:** Bảo vệ tệp tin và thông tin đăng nhập trong quá trình truyền tải.

### Bước 3: Triển khai lá chắn chủ động trong mạng nội bộ

Nếu bạn là quản trị viên mạng của doanh nghiệp, hãy cấu hình các tính năng bảo mật trên Switch Cisco/HP để chống lại việc Sniffing chủ động:

* **Bật DHCP Snooping:** Ngăn chặn kẻ mạo danh làm máy chủ DHCP cấp IP láo.
* **Bật Dynamic ARP Inspection (DAI):** Ngăn chặn kỹ thuật đầu độc ARP (ARP Poisoning), bẻ gãy đòn tấn công xen giữa (MITM) của kẻ nghe lén.

---

## 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

❌ **Sai lầm 1: Lầm tưởng rằng cứ ngồi trong mạng Wi-Fi có đặt mật khẩu (WPA2/WPA3) là an toàn, không sợ bị Sniffing.**

* **Thực tế:** Mật khẩu Wi-Fi của quán cà phê chỉ bảo vệ đường truyền từ thiết bị của bạn đến Cục Router Wi-Fi để người ngoài đường không xài chùa được. Tuy nhiên, nếu một hacker cũng mua một ly nước, vào quán, nhập đúng mật khẩu Wi-Fi đó để kết nối, thì hắn và bạn đang ở **chung một cái ao**. Lúc này, các đòn tấn công Active Sniffing hoàn toàn có thể được triển khai từ máy của hắn để câu toàn bộ dữ liệu từ máy của bạn sang máy hắn.
* **Giải pháp cứu cánh:** Khi dùng Wi-Fi công cộng, luôn đảm bảo các trang web phải có biểu tượng ổ khóa (HTTPS) hoặc tốt nhất là bật một dịch vụ **VPN (Virtual Private Network)** đáng tin cậy để mã hóa toàn bộ lưu lượng từ máy bạn trước khi nó bay ra không trung.

❌ **Sai lầm 2: Bật Wireshark rà quét bừa bãi lưu lượng mạng ở công ty hoặc trường học.**

* **Thực tế:** Ở các doanh nghiệp hoặc tổ chức có đội ngũ an ninh mạng (SOC), việc một máy tính đột ngột chuyển sang *Promiscuous Mode* hoặc liên tục gửi các gói tin rà quét mạng sẽ kích hoạt cảnh báo trên hệ thống giám sát. Bạn có thể bị khóa tài khoản mạng lập tức và bị mời lên làm việc vì vi phạm chính sách an toàn thông tin, dù bạn chỉ có ý định "học tập".
* **Lời khuyên:** Chỉ thực hành bắt gói tin trên máy cá nhân của mình, hoặc trong môi trường máy ảo mạng nội bộ (Host-Only / NAT Network) do chính bạn dựng lên.

---

## CÂU HỎI ÔN TẬP VÀ BÀI TẬP TỰ RÈN LUYỆN

1. Một hacker ngồi ở quán cà phê và sử dụng Wireshark để bắt các gói tin truyền qua không trung mà không gửi thêm bất kỳ dữ liệu nào vào mạng. Kỹ thuật này thuộc loại Sniffing nào? Tại sao thiết bị Router Wi-Fi của quán lại vô tình hỗ trợ hành vi này?
2. Giả sử bạn đang quản trị một máy chủ Linux cũ và phát hiện ra các kỹ thuật viên đang dùng giao thức Telnet để cấu hình hệ thống từ xa qua Internet. Bạn sẽ đưa ra cảnh báo rủi ro gì cho giám đốc và đề xuất giải pháp thay thế cụ thể như thế nào?

> **Slogan chốt hạ Ngày 17:** > *"Dữ liệu không mã hóa giống như lời thì thầm giữa đám đông. Muốn an toàn, hãy biến thông tin thành mật mã trước khi gửi nó vào không trung!"*