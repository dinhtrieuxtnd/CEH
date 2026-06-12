Dưới đây là bộ quiz 10 câu hỏi trắc nghiệm được biên soạn chi tiết theo đúng cấu trúc và nội dung của **NGÀY 9: KHAI THÁC THÔNG TIN NÂNG CAO (LDAP & SMTP)** dựa trên tài liệu chuẩn CEH v11. Bộ câu hỏi được định dạng rõ ràng, sẵn sàng để bạn copy-paste trực tiếp lên các nền tảng như Google Forms, Quizizz hoặc Microsoft Forms.

---

# BỘ QUIZ TRẮC NGHIỆM: NGÀY 9 – ENUMERATION NÂNG CAO (LDAP & SMTP)

## PHẦN I: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

**Câu 1: Cổng dịch vụ mặc định được sử dụng bởi giao thức LDAP không mã hóa và giao thức LDAPS (LDAP over TLS/SSL) lần lượt là:**
A. Cổng 389 và Cổng 443
B. Cổng 25 và Cổng 465
C. Cổng 389 và Cổng 636
D. Cổng 161 và Cổng 162

* **Đáp án đúng:** C
* **Giải thích:** Theo kiến trúc hệ thống mạng, cổng mặc định cho dịch vụ thư mục LDAP là TCP/UDP 389, và khi được mã hóa bảo mật thông qua giao thức TLS/SSL (LDAPS), nó sẽ chạy trên cổng TCP 636.
* **Tại sao các đáp án khác sai:** * A sai vì cổng 443 là dành cho giao thức HTTPS.
* B sai vì cổng 25 và 465 thuộc về dịch vụ chuyển thư SMTP/SMTPS.
* D sai vì cổng 161 và 162 dành cho giao thức quản trị mạng SNMP.



**Câu 2: Trong giao thức SMTP, lệnh nào dưới đây được sử dụng phổ biến nhất để xác thực xem một tên người dùng (username) cụ thể có tồn tại trên hệ thống máy chủ mail mục tiêu hay không?**
A. EXPN
B. VRFY
C. HELO
D. MAIL FROM

* **Đáp án đúng:** B
* **Giải thích:** Lệnh `VRFY` (Verify) là lệnh tích hợp sẵn của giao thức SMTP, cho phép người dùng hoặc ứng dụng gửi một chuỗi định danh người dùng lên máy chủ để xác thực sự tồn tại của hòm thư đó trên hệ thống.
* **Tại sao các đáp án khác sai:**
* A sai vì lệnh `EXPN` (Expand) dùng để mở rộng một danh sách phân phối email (mailing list) thành các địa chỉ email thành viên cụ thể chứ không dùng để xác thực một cá nhân duy nhất.
* C sai vì `HELO` chỉ là lệnh khởi tạo phiên làm việc ban đầu giữa máy trạm và máy chủ SMTP.
* D sai vì `MAIL FROM` dùng để khai báo địa chỉ của người gửi khi bắt đầu một quy trình gửi thư.



**Câu 3: Thuật ngữ "Anonymous Bind" trong dịch vụ thư mục LDAP có ý nghĩa kỹ thuật là gì?**
A. Quá trình kết nối bắt buộc phải dùng chứng thư số (Digital Certificate).
B. Tính năng cho phép người dùng truy vấn thông tin thư mục mà không cần cung cấp tên tài khoản và mật khẩu.
C. Kỹ thuật ẩn danh địa chỉ IP của máy chủ LDAP trước các máy quét bên ngoài.
D. Cơ chế tự động khóa tài khoản khi phát hiện hành vi dò quét dò mật khẩu dồn dập.

* **Đáp án đúng:** B
* **Giải thích:** "Anonymous Bind" (Liên kết ẩn danh) là trạng thái cấu hình của máy chủ LDAP, cho phép bất kỳ kết nối nào thiết lập tới hệ thống đều có quyền tìm kiếm và trích xuất dữ liệu bên trong cây thư mục mà không cần thực hiện bước đăng nhập xác thực (No Authentication).
* **Tại sao các đáp án khác sai:**
* A sai vì kết nối ẩn danh hoàn toàn không sử dụng phương thức xác thực nâng cao nào.
* C và D sai vì đây là các suy đoán sai lệch, không phản ánh đúng định nghĩa cốt lõi của tính năng thư mục này.



**Câu 4: Để ngăn chặn kẻ tấn công lợi dụng dịch vụ SMTP để rà quét và trích xuất danh sách tài khoản email nội bộ của doanh nghiệp, quản trị viên cần triển khai biện pháp phòng vệ nào sau đây?**
A. Vô hiệu hóa lệnh VRFY và lệnh EXPN trên máy chủ Mail.
B. Đóng hoàn toàn cổng số 25 trên tường lửa biên.
C. Cấu hình chuyển toàn bộ lưu lượng mail nội bộ sang giao thức FTP.
D. Chặn tất cả các gói tin ICMP Echo Request hướng tới hệ thống Mail.

* **Đáp án đúng:** A
* **Giải thích:** Việc tắt (disable) hai lệnh nguy hiểm `VRFY` và `EXPN` trong tệp cấu hình của dịch vụ SMTP (ví dụ Postfix, Sendmail) là biện pháp phòng thủ trực diện, khiến máy chủ từ chối trả lời phản hồi xác nhận tài khoản cho kẻ quét dữ liệu.
* **Tại sao các đáp án khác sai:**
* B sai vì đóng cổng 25 sẽ làm tê liệt toàn bộ hệ thống gửi/nhận email của doanh nghiệp với thế giới bên ngoài.
* C sai vì FTP là giao thức truyền tệp tin, không có chức năng xử lý và định tuyến thư điện tử.
* D sai vì chặn ICMP (Ping) chỉ ngăn chặn bước dò tìm máy chủ trực tuyến sơ khai, không giải quyết được lỗ hổng dịch vụ SMTP ở tầng ứng dụng.



---

## PHẦN II: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

**Câu 5: Tại sao việc kẻ tấn công thu thập thành công toàn bộ cấu trúc sơ đồ tổ chức phòng ban và danh sách nhân sự từ một máy chủ LDAP cấu hình sai lại là rủi ro an ninh đặc biệt nghiêm trọng, mặc dù các thông tin này không chứa mật khẩu?**
A. Vì từ sơ đồ tổ chức, kẻ tấn công có thể bẻ khóa thuật toán mã hóa LDAPS của hệ thống.
B. Vì các thông tin này cung cấp ngữ cảnh chính xác cao về chức danh, email để kẻ tấn công xây dựng kịch bản lừa đảo có chủ đích (Spear Phishing) đạt tỷ lệ sập bẫy lớn.
C. Vì có danh sách người dùng sẽ khiến máy chủ LDAP tự động kích hoạt trạng thái từ chối dịch vụ (DoS).
D. Vì sơ đồ phòng ban sẽ tiết lộ vị trí vật lý chính xác phòng chứa máy chủ (Server Room) của công ty.

* **Đáp án đúng:** B
* **Giải thích:** Trong chuỗi tấn công (Kill Chain), thông tin thu thập từ Enumeration là vũ khí cực kỳ nguy hiểm cho bước Social Engineering. Biết chính xác ai làm ở phòng ban nào, mối quan hệ cấp trên - cấp dưới ra sao, kẻ tấn công sẽ mạo danh ban lãnh đạo gửi email lừa đảo chứa mã độc độc hại khiến nhân viên rất dễ tin tưởng và click vào.
* **Tại sao các đáp án khác sai:**
* A sai vì sơ đồ tổ chức không ảnh hưởng đến độ an toàn của thuật toán mã hóa đường truyền.
* C sai vì LDAP chỉ trả về dữ liệu truy vấn tĩnh, không tự gây quá tải trừ khi bị Brute-Force lưu lượng lớn.
* D sai vì thư mục LDAP quản lý thực thể logic trên mạng mạng máy tính, không chứa dữ liệu bản vẽ kiến trúc tòa nhà vật lý.



**Câu 6: Hãy phân tích sự khác biệt bản chất về mặt kỹ thuật giữa việc lấy danh sách người dùng (User Enumeration) qua dịch vụ NetBIOS (Bài 8) và qua dịch vụ LDAP (Bài 9):**
A. NetBIOS trả về danh sách tài khoản email trên Internet, còn LDAP trả về tài khoản đăng nhập cục bộ của máy trạm.
B. NetBIOS hoạt động ở tầng Mạng dựa trên giao thức ICMP, trong khi LDAP hoạt động hoàn toàn ở tầng Ứng dụng.
C. NetBIOS liệt kê tài khoản cục bộ hoặc tài khoản hệ thống của riêng một máy cụ thể, trong khi LDAP truy vấn vào "sổ cái" tập trung quản lý thông tin của toàn bộ tập đoàn (Active Directory).
D. Không có sự khác biệt, cả hai dịch vụ đều dùng chung một câu lệnh truy vấn trên hệ điều hành Linux.

* **Đáp án đúng:** C
* **Giải thích:** NetBIOS là giao thức định danh ở quy mô mạng nhỏ/cục bộ, giúp trích xuất tài nguyên hoặc người dùng thuộc về thiết bị đó. Trái lại, LDAP là giao thức truy vấn dịch vụ thư mục trung tâm (như Active Directory Domain Services), nơi lưu trữ tập trung cấu trúc của cả một tổ chức/doanh nghiệp lớn.
* **Tại sao các đáp án khác sai:**
* A sai vì NetBIOS không quản lý email Internet.
* B sai vì NetBIOS sử dụng các cổng 137, 139 (tầng Phiên/Vận chuyển), không dựa trên ICMP của tầng Mạng.
* D sai vì đây là hai dịch vụ sử dụng cấu trúc gói tin và công cụ khai thác hoàn toàn khác biệt (`nbtstat`/`enum4linux` so với `ldapsearch`).



**Câu 7: Điểm mù lớn nhất của việc chỉ triển khai mã hóa đường truyền LDAPS (cổng 636) mà không cấu hình lại chính sách xác thực trên máy chủ LDAP là gì?**
A. Kẻ tấn công vẫn có thể nghe lén (Sniffing) được mật khẩu dạng văn bản rõ trên đường truyền.
B. Dữ liệu truyền đi sẽ bị chậm hơn 100 lần khiến hệ thống ngưng trệ.
C. Đường truyền bị mã hóa nhưng quyền truy vấn ẩn danh (Anonymous Bind) vẫn tồn tại; kẻ tấn công vẫn kết nối được và tải về toàn bộ danh bạ một cách an toàn mà không sợ bị hệ thống phát hiện xâm nhập (IDS) đọc gói tin thô.
D. Máy chủ sẽ không thể kết nối được với các máy trạm chạy hệ điều hành Windows 11.

* **Đáp án đúng:** C
* **Giải thích:** Mã hóa đường truyền (LDAPS) chỉ đảm bảo tính toàn vẹn và bảo mật của dữ liệu *trên đường đi*, tránh bị nghe lén (MitM). Tuy nhiên, nếu bản thân máy chủ vẫn mở toang cửa cho truy cập ẩn danh (Anonymous), kẻ tấn công kết nối vào cổng 636 vẫn lấy được thông tin như thường, thậm chí lưu lượng mã hóa còn giúp chúng che giấu hành vi trước các bộ lọc IDS truyền thống.
* **Tại sao các đáp án khác sai:**
* A sai vì LDAPS đã mã hóa luồng dữ liệu nên không thể nghe lén văn bản rõ được nữa.
* B và D sai vì đây là các nhận định phóng đại hoặc sai lệch về mặt kỹ thuật, không phản ánh đúng bản chất của quản trị an toàn thông tin.



---

## PHẦN III: MỨC ĐỘ VẬN DỤNG (3 CÂU)

**Câu 8: Trong một đợt kiểm thử xâm nhập mạng nội bộ (Internal Penetration Testing), bạn kiểm tra máy chủ Active Directory Domain Controller của khách hàng có IP `192.168.10.5`. Bạn thực thi lệnh sau trên máy Kali Linux:**
`ldapsearch -x -h 192.168.10.5 -b "dc=targetcorp,dc=local"`
**Kết quả màn hình hiển thị hàng ngàn dòng thông tin chi tiết bao gồm `sAMAccountName`, `mail`, `telephoneNumber` của toàn bộ nhân viên công ty. Bạn sẽ đưa ra kết luận và khuyến nghị nào trong báo cáo của mình?**
A. Hệ thống hoàn toàn an toàn vì lệnh `ldapsearch` chỉ hiển thị thông tin công khai, không lấy được mật khẩu NTLM Hash.
B. Máy chủ đang dính lỗ hổng cấu hình sai nghiêm trọng (Anonymous Bind Enabled), cần cấu hình bắt buộc phải xác thực (Require Authenticated Binds) cho mọi truy vấn LDAP.
C. Máy chủ đã bị nhiễm mã độc Ransomware, cần cách ly máy chủ này ra khỏi mạng LAN ngay lập tức.
D. Cần đổi địa chỉ IP của Domain Controller sang một dải mạng khác để hacker không thể tìm thấy cổng 389.

* **Đáp án đúng:** B
* **Giải thích:** Việc sử dụng tham số `-x` (Simple Authentication / Anonymous) kết hợp với gốc thư mục `-b` mà hệ thống vẫn nhả ra toàn bộ thông tin nhạy cảm của người dùng là minh chứng rõ ràng nhất cho thấy lỗ hổng Anonymous Bind đang mở. Khuyến nghị chính xác là cấu hình thắt chặt, chỉ cho phép tài khoản đã định danh truy vấn.
* **Tại sao các đáp án khác sai:**
* A sai vì để rò rỉ toàn bộ danh bạ nội bộ là một lỗi nghiêm trọng, vi phạm tính bảo mật (Confidentiality).
* C sai vì đây là lỗi cấu hình sai (Misconfiguration) của quản trị viên, không phải dấu hiệu của mã độc tống tiền Ransomware.
* D sai vì đổi IP không giải quyết được lỗ hổng gốc, kẻ tấn công chỉ cần quét cổng lại là tìm ra IP mới.



**Câu 9: Bạn đang thực hiện kiểm tra an ninh dịch vụ SMTP của một doanh nghiệp. Khi sử dụng Netcat kết nối vào cổng 25 của máy chủ mail và gõ lệnh kiểm tra một tài khoản không tồn tại, bạn nhận được phản hồi kỹ thuật như sau:**

```text
S: nc mail.company.com 25
R: 220 mail.company.com ESMTP Postfix
S: HELO test.com
R: 250 mail.company.com
S: VRFY non_exist_user_123
R: 502 5.5.1 VRFY command is disabled

```

**Trạng thái an ninh hiện tại của dịch vụ SMTP này được đánh giá như thế nào?**
A. Máy chủ đang bị tấn công Từ chối dịch vụ (DoS) nên phản hồi mã lỗi 502.
B. Hệ thống đã được cấu hình an toàn trước kỹ thuật SMTP Enumeration bằng cách vô hiệu hóa lệnh VRFY thành công.
C. Kẻ tấn công đã chiếm quyền điều khiển hoàn toàn máy chủ này và thay đổi thông điệp phản hồi của hệ thống.
D. Lệnh `VRFY` vẫn chạy bình thường nhưng do tài khoản không có thật nên máy chủ báo lỗi hệ thống.

* **Đáp án đúng:** B
* **Giải thích:** Mã phản hồi `502` kèm thông điệp rõ ràng `VRFY command is disabled` cho thấy quản trị viên hệ thống đã chủ động cấu hình chặn lệnh này (ví dụ đặt thuộc tính `disable_vrfy_command = yes` trong Postfix). Do đó, kẻ tấn công không thể dùng công cụ tự động để dò tìm danh sách tài khoản email qua lệnh này được nữa.
* **Tại sao các đáp án khác sai:**
* A sai vì mã 502 ở đây là mã từ chối thực thi lệnh của giao thức SMTP, không liên quan đến tấn công nghẽn mạng DoS.
* C sai vì đây là phản hồi chuẩn của một hệ thống phòng thủ tốt, không phải dấu hiệu bị hack.
* D sai vì nếu lệnh VRFY còn bật và tài khoản không tồn tại, mã trả về thường là `550 String does not match` chứ không phải mã `502 Disabled`.



**Câu 10: Một hacker mũ đen muốn tự động hóa quy trình dò tìm tất cả các địa chỉ email nhân sự có thật của một công ty mục tiêu thông qua dịch vụ Mail của họ. Biết rằng máy chủ Mail này đã tắt lệnh `VRFY` và `EXPN`. Hacker này có thể áp dụng thủ thuật vận dụng nào dưới đây để tiếp tục dò quét danh sách email?**
A. Gửi liên tiếp các gói tin SYN với số thứ tự tự tăng vào cổng 25 để làm tràn bộ nhớ đệm.
B. Sử dụng một công cụ tự động chạy qua file từ điển chứa tên người dùng, giả lập quy trình gửi mail hàng loạt (gửi lệnh `MAIL FROM` và `RCPT TO`), sau đó phân tích các mã phản hồi lỗi nhận về (như mã `550 User unknown` hoặc `250 OK`) để lọc ra email tồn tại.
C. Chạy lệnh `ldapsearch` trực tiếp vào cổng 25 của máy chủ Mail để tải tệp tin danh bạ về.
D. Hacker buộc phải dừng lại vì không có cách nào khác để dò tìm địa chỉ email một khi lệnh VRFY đã tắt.

* **Đáp án đúng:** B
* **Giải thích:** Đây là kỹ thuật dò quét email nâng cao khi lệnh `VRFY` bị chặn. Hacker sẽ tiến hành quy trình giả lập gửi thư ngắn (chỉ chạy hết lệnh `RCPT TO` - Nhận thư để xem máy chủ có chấp nhận địa chỉ email đó hay không rồi ngắt kết nối). Nếu máy chủ báo `250 OK`, hòm thư đó có thật; nếu báo `550`, hòm thư đó giả. Kỹ thuật này tận dụng cơ chế phản hồi định tuyến bắt buộc của giao thức mail.
* **Tại sao các đáp án khác sai:**
* A sai vì đây là đòn tấn công SYN Flood ở tầng mạng, gây sập hệ thống chứ không thu thập được danh sách email.
* C sai vì lệnh `ldapsearch` chỉ hoạt động với giao thức LDAP (cổng 389/636), gửi vào cổng 25 (SMTP) sẽ bị lỗi cú pháp lập tức.
* D sai vì tư duy của hacker luôn tìm kiếm các đường vòng (workaround) dựa trên bản chất vận hành của giao thức, và việc phân tích mã lỗi Bounce/RCPT là giải pháp thay thế hoàn hảo.