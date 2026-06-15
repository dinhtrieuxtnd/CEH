Chào các em, chào mừng các em đã đi được hơn 2/3 chặng đường của lộ trình Chuyên gia An ninh mạng! Hôm nay, chúng ta sẽ cùng nhau bước vào **Ngày 21**, một bài học cực kỳ thú vị và mang tính thực chiến cao: **Cướp Phiên Làm Việc (Session Hijacking)**.

Nếu như ở các bài học trước, chúng ta đã biết cách quét cổng, dò tìm lỗ hổng hay nghe lén, thì hôm nay chúng ta sẽ học cách kẻ tấn công "nẫng tay trên" một phiên đăng nhập hợp lệ của người dùng mà không cần biết mật khẩu của họ là gì. Hãy chuẩn bị một ly nước, một cuốn sổ tay, chúng ta cùng bắt đầu nhé!

---

## Mở đầu: Câu chuyện ở quán cà phê

Hãy tưởng tượng một buổi sáng đẹp trời, bạn bước vào quán cà phê quen thuộc, xếp hàng và gọi một ly Latte đá. Bạn trả tiền xong, nhân viên đưa cho bạn một chiếc **thẻ rung số 5** và dặn: *"Khi nào thẻ rung, anh/chị ra quầy nhận nước nhé"*.

Bạn tìm một góc bàn ngồi lướt điện thoại. Một kẻ gian lén lút tiếp cận và nhanh tay "thó" mất chiếc thẻ rung số 5 trên bàn của bạn mà bạn không hề hay biết. 2 phút sau, chiếc thẻ trong tay kẻ gian rung lên. Hắn ung dung đi ra quầy, chìa chiếc thẻ ra và nhận ly Latte đá của bạn rồi rời đi. Nhân viên quán cà phê hoàn toàn không biết có sự tráo đổi, vì họ chỉ nhận diện người có quyền lấy nước thông qua **chiếc thẻ số 5** chứ không nhìn mặt khách hàng.

Trong thế giới mạng, **Session Hijacking** hoạt động chính xác theo cách như vậy!

---

## Kiến thức cốt lõi: Khi "Thẻ rung" bị đánh cắp

Để hiểu được kỹ thuật này, trước hết chúng ta phải làm quen với một số khái niệm nền tảng theo chuẩn CEH v11 bằng ngôn ngữ đời thường nhất.

### 1. Phiên làm việc (Session) và Mã phiên (Session ID/Cookie) là gì?

Giao thức HTTP – nền tảng của mạng Internet – là một giao thức **Stateless (Không lưu trạng thái)**. Nghĩa là máy chủ (Web Server) rất "não cá vàng", nó không có trí nhớ. Mỗi khi bạn nhấn F5 hoặc chuyển sang một trang con, máy chủ sẽ xem bạn như một người hoàn toàn mới xa lạ.

Để không bắt người dùng phải nhập lại Username/Password mỗi khi bấm vào một liên kết, người ta sinh ra khái niệm **Session**.

* Khi bạn đăng nhập thành công, máy chủ sẽ cấp cho bạn một "chiếc thẻ rung" định danh duy nhất, gọi là **Session ID** (thường được lưu trong **Cookie** của trình duyệt).
* Từ đó về sau, mỗi click của bạn sẽ tự động đính kèm chiếc Cookie này. Máy chủ nhìn thấy Cookie liền bảo: *"À, đây là anh Nam, anh ấy đã đăng nhập rồi, cho anh ấy xem giỏ hàng nhé!"*.

### 2. Cướp phiên làm việc (Session Hijacking) là gì?

> **Định nghĩa:** Session Hijacking là hành vi kẻ tấn công đánh cắp hoặc dự đoán được mã Session ID hợp lệ của một người dùng đang hoạt động, từ đó "chèn" chính mình vào phiên làm việc đó để giả mạo nạn nhân mà không cần biết thông tin đăng nhập (Mật khẩu/Mã OTP).

### 3. Phân loại Session Hijacking: Tầng Ứng dụng vs. Tầng Mạng

Chúng ta chia kỹ thuật này làm hai loại lớn dựa trên mô hình mạng:

#### a. Tầng Ứng dụng (Application Level Hijacking)

Ở tầng này, kẻ tấn công nhắm trực tiếp vào **Session ID** được quản lý bởi các ứng dụng web (HTTP/HTTPS).

* **Cách thức:** Kẻ tấn công tìm cách lấy được chuỗi ký tự Session ID (ví dụ: `PHPSESSID=xyz123...`) đang lưu ở trình duyệt của nạn nhân.
* **Ví dụ đời sống:** Giống như việc kẻ trộm copy lại chính xác số sê-ri trên chiếc vé xe của bạn để tự in ra một chiếc vé y hệt nhằm lấy xe của bạn ra khỏi bãi.

#### b. Tầng Mạng (Network Level Hijacking)

Ở tầng này, kẻ tấn công không quan tâm đến Cookie của ứng dụng Web nữa, mà chúng can thiệp trực tiếp vào các gói tin truyền tải ở tầng vận chuyển (TCP/IP).

* **Cách thức:** Kẻ tấn công khai thác điểm yếu của giao thức **TCP 3-Way Handshake (Bắt tay 3 bước)**. Mỗi gói tin TCP gửi đi đều có một số thứ tự gọi là **Sequence Number (SEQ)** để đảm bảo các gói tin đến đúng thứ tự. Kẻ tấn công sẽ tính toán, dự đoán số SEQ tiếp theo, sau đó gửi một gói tin giả mạo đến máy chủ trước khi nạn nhân kịp gửi, khiến máy chủ nghĩ rằng gói tin đó đến từ nạn nhân thực sự.
* **Ví dụ đời sống:** Bạn đang đứng xếp hàng truyền tay nhau các thùng hàng theo số thứ tự 1, 2, 3, 4... Kẻ gian đứng chen giữa, đoán trước thùng tiếp theo phải là số 5. Hắn nhanh tay ném một thùng hàng giả mang số 5 vào hàng ngũ trước khi bạn kịp đưa thùng số 5 thật ra.

---

## Phân tích sâu: Ba góc nhìn về một cuộc tấn công

Để trở thành một Hacker mũ trắng thực thụ, chúng ta cần phân tích Session Hijacking dưới 3 lăng kính khác nhau:

### Góc nhìn 1: Từ phía Kẻ tấn công (Attacker) – "Làm sao để lấy được mã?"

Kẻ tấn công thường sử dụng 3 chiến thuật chính để sở hữu chiếc "thẻ phiên":

1. **Dự đoán (Prediction):** Nếu lập trình viên lười biếng, tạo ra Session ID theo quy luật (ví dụ: `User01_Session01`, `User01_Session02`...), hacker chỉ cần chạy một vòng lặp để đoán ra phiên của người khác.
2. **Đánh cắp (Stealing):** Sử dụng mã độc, hoặc phổ biến nhất là tấn công **XSS (Cross-Site Scripting)** để chèn một đoạn mã JavaScript độc hại vào trang web. Đoạn mã này sẽ tự động đọc `document.cookie` của nạn nhân và gửi thẳng về máy chủ của hacker.
3. **Cố định phiên (Session Fixation):** Hacker chủ động tạo ra một Session ID hợp lệ từ trước (ví dụ: gửi một đường link có sẵn mã session: `http://example.com/?sessionid=HACKED`). Hắn dụ nạn nhân đăng nhập qua đường link đó. Khi nạn nhân đăng nhập thành công, máy chủ vô tình kích hoạt chính cái mã `HACKED` đó cho nạn nhân. Giờ đây, hacker chỉ cần dùng lại đúng mã đó là vào được tài khoản.

### Góc nhìn 2: Từ phía Nạn nhân (Victim) – "Tại sao tôi bị mất quyền kiểm soát?"

Người dùng thông thường hoàn toàn không có cảm giác gì khi bị cướp phiên. Họ vẫn thấy mình đang lướt web bình thường. Tuy nhiên, dấu hiệu nhận biết (đôi khi) là:

* Bị đăng xuất đột ngột (do hacker thực hiện hành động đổi mật khẩu hoặc máy chủ phát hiện bất thường nên hủy phiên).
* Có những hành động, giao dịch tự động phát sinh (như tự động gửi tin nhắn, chuyển tiền) mà họ không hề bấm.

### Góc nhìn 3: Từ phía Máy chủ/Hệ thống (Server) – "Ai đang nói chuyện với tôi?"

Đối với máy chủ, nó chỉ là một cái máy tuân theo thuật toán. Nó nhận được một gói tin có Cookie trùng khớp, hoặc có số TCP Sequence Number chính xác, nó sẽ thực thi lệnh. Máy chủ không thể tự phân biệt được gói tin đó được gửi từ ngón tay của anh Nam (nạn nhân) hay từ máy tính của kẻ tấn công đang ngồi ở một quốc gia khác, trừ khi có các cơ chế giám sát hành vi nâng cao.

---

## Cách áp dụng vào thực tế: Phòng thủ và Giám sát

Là một kỹ sư an ninh mạng hoặc một lập trình viên, nhiệm vụ của bạn là phải biến hệ thống của mình thành một pháo đài chống lại Session Hijacking. Dưới đây là các bước cụ thể:

### Bước 1: Bảo mật Cookie ở tầng Ứng dụng

Khi cấu hình và lập trình ứng dụng Web, bắt buộc phải đính kèm các cờ (Flags) bảo mật sau đây cho Cookie chứa Session ID:

* **Secure Flag:** Ép buộc Cookie chỉ được phép truyền tải qua kết nối mã hóa **HTTPS**. Kẻ tấn công dùng Wireshark nghe lén trong mạng Wi-Fi công cộng sẽ chỉ thấy các gói tin đã mã hóa, không thể đọc được Session ID.
* **HttpOnly Flag:** Đây là lá chắn tối thượng chống lại XSS. Khi có cờ này, các đoạn mã JavaScript (kể cả mã độc) hoàn toàn không thể truy cập hoặc đọc được giá trị của Cookie này.
* **SameSite (Strict/Lax):** Ngăn chặn các cuộc tấn công giả mạo yêu cầu từ trang web khác (CSRF).

### Bước 2: Quản lý vòng đời Phiên (Session Management) chặt chẽ

* **Hết hạn phiên (Session Timeout):** Cấu hình thời gian hết hạn ngắn cho các phiên làm việc (ví dụ: 15 phút không hoạt động sẽ tự động đăng xuất).
* **Đổi mã sau khi đăng nhập:** Ngay khi người dùng nhập đúng Username/Password, hệ thống phải hủy bỏ Session ID cũ và cấp một Session ID hoàn toàn mới (Chống Session Fixation).
* **Hủy phiên toàn diện:** Khi người dùng bấm "Log out", phải xóa sạch Session cả trên trình duyệt của khách và trên cơ sở dữ liệu của máy chủ.

### Bước 3: Ràng buộc đa thông số (Fingerprinting)

Trên máy chủ, đừng chỉ kiểm tra mỗi mã Session ID. Hãy viết code để kiểm tra thêm:

* Địa chỉ IP của người dùng có bị thay đổi đột ngột không? (Ví dụ: Giây trước IP ở Việt Nam, giây sau IP gửi lên lại từ Nga).
* Chuỗi `User-Agent` (thông tin về trình duyệt/hệ điều hành) có nhất quán không? Nếu có sự thay đổi, lập tức hủy phiên và yêu cầu đăng nhập lại.

---

## Lưu ý quan trọng: Những sai lầm "chết người" cần tránh

Trong quá trình làm việc thực tế tại các doanh nghiệp, tôi đã gặp rất nhiều sai lầm ngớ ngẩn nhưng để lại hậu quả nghiêm trọng. Các em hãy ghi nhớ để tránh:

| Sai lầm thường gặp | Hậu quả thực tế | Giải pháp đúng đắn |
| --- | --- | --- |
| **Lưu Session ID dưới dạng Plain Text trong URL** | Ví dụ: `website.com/dashboard?sid=12345`. Khi người dùng chia sẻ link này cho bạn bè, họ vô tình dâng luôn quyền kiểm soát tài khoản cho người khác. | Tuyệt đối không đưa dữ liệu nhạy cảm, mã phiên lên URL. Dùng Cookie hoặc Header bảo mật. |
| **Không mã hóa đường truyền (Dùng HTTP)** | Kẻ tấn công chỉ cần ngồi cùng mạng Wi-Fi, bật công cụ Sniffer (như Wireshark) là chụp được toàn bộ Session ID của nhân viên công ty. | Chuyển dịch 100% hệ thống sang **HTTPS** và cấu hình HSTS (HTTP Strict Transport Security). |
| **Mã Session ID quá ngắn hoặc dễ đoán** | Hacker có thể dùng các cuộc tấn công Brute-Force (thử sai liên tục) để dò ra các phiên làm việc đang hoạt động. | Sử dụng các thư viện tạo chuỗi ngẫu nhiên có độ mã hóa cao (Cryptographically Secure Pseudo-Random Number Generator) với độ dài tối thiểu 128-bit. |

---

## Tổng kết bài học

Hôm nay chúng ta đã hiểu rằng: **Session Hijacking không cần bẻ khóa mật khẩu, nó bẻ khóa sự tin tưởng của máy chủ đối với một phiên làm việc sẵn có.** Để bảo vệ doanh nghiệp, một chuyên gia bảo mật không chỉ biết cấu hình Firewall tốt ở tầng mạng, mà còn phải biết tư vấn cho đội ngũ lập trình Web thiết lập các cờ bảo mật cho Cookie và quản lý vòng đời của phiên thật chặt chẽ.

Các em hãy xem lại tài liệu Module 11 của CEH v11 để làm các bài tập trắc nghiệm giả lập nhé.

Để giúp các em khắc sâu kiến thức hôm nay, thầy có một câu hỏi nhỏ để chúng ta cùng thảo luận: **Theo các em, cơ chế xác thực 2 bước (2FA/OTP) có thể giúp ngăn chặn hoàn toàn cuộc tấn công Session Hijacking hay không? Tại sao?**