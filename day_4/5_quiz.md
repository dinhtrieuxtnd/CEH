Dưới đây là bộ quiz 10 câu trắc nghiệm được biên soạn chi tiết theo cấu trúc phân loại nhận thức (Nhận biết, Thông hiểu, Vận dụng) dựa trên nội dung **NGÀY 4: Truy Tìm Dấu Vết Số (Whois & DNS)**. Bộ câu hỏi được chuẩn hóa định dạng văn bản sạch, giúp bạn dễ dàng copy trực tiếp lên các nền tảng như Google Forms, Microsoft Forms, Quizizz hoặc Kahoot.

---

# 🧠 BỘ TRẮC NGHIỆM ĐÁNH GIÁ NĂNG LỰC: NGÀY 4 (WHOIS & DNS)

## PHẦN 1: MỨC ĐỘ NHẬN BIẾT (KIỂM TRA GHI NHỚ)

**Câu 1: Bản ghi nào trong hệ thống DNS chịu trách nhiệm ánh xạ một tên miền hoặc tên miền con (subdomain) sang một địa chỉ IPv4 cụ thể?**

A. Bản ghi MX

B. Bản ghi A

C. Bản ghi NS

D. Bản ghi TXT

**Câu 2: Giao thức hoặc công cụ nào dưới đây cho phép thu thập thông tin về nhà đăng ký (Registrar), ngày tạo, ngày hết hạn và thông tin liên hệ kỹ thuật của một tên miền?**

A. Traceroute

B. Nslookup

C. Whois

D. Dig

**Câu 3: Bản ghi nào trong hệ thống DNS chỉ định máy chủ chịu trách nhiệm xử lý và tiếp nhận email cho một doanh nghiệp?**

A. Bản ghi A

B. Bản ghi TXT

C. Bản ghi NS

D. Bản ghi MX

**Câu 4: Khi sử dụng công cụ Traceroute, các ký tự `* * *` trả về tại một chặng (Hop) nhất định biểu thị điều gì?**

A. Máy chủ mục tiêu đã bị sập hoàn toàn

B. Băng thông mạng tại vị trí đó đã bị nghẽn

C. Thiết bị định tuyến tại chặng đó cấu hình chặn gói tin ICMP/UDP kiểm thám

D. Địa chỉ IP của mục tiêu không tồn tại

---

## PHẦN 2: MỨC ĐỘ THÔNG HIỂU (KIỂM TRA BẢN CHẤT)

**Câu 5: Tại sao việc thu thập thông tin từ dịch vụ Whois công cộng và truy vấn DNS lại được phân loại là phương pháp Trinh sát bị động (Passive Footprinting)?**

A. Vì hacker phải sử dụng các phần mềm mã nguồn mở để chạy dòng lệnh

B. Vì các yêu cầu truy vấn được gửi tới các máy chủ công cộng trung gian, không tương tác trực tiếp và không để lại log trên hệ thống của nạn nhân

C. Vì phương pháp này bắt buộc phải thực hiện vào ban đêm khi hệ thống ít hoạt động

D. Vì dữ liệu thu về chỉ có giá trị tham khảo, không dùng để tấn công được

**Câu 6: Bản chất kỹ thuật của cơ chế hoạt động của lệnh Traceroute (hoặc Tracert trên Windows) dựa vào trường dữ liệu nào trong phần đầu (Header) của gói tin IP?**

A. Trường TTL (Time to Live)

B. Trường Checksum lỗi

C. Trường Kích thước gói tin (Payload Size)

D. Trường Số thứ tự gói tin (Sequence Number)

**Câu 7: Một quản trị viên cấu hình bộ lọc bảo mật email của công ty bằng cách thêm một chuỗi ký tự dạng `v=spf1 include:_spf.google.com ~all` vào hệ thống DNS. Bản ghi này phải thuộc loại bản ghi nào?**

A. Bản ghi A

B. Bản ghi CNAME

C. Bản ghi TXT

D. Bản ghi PTR

---

## PHẦN 3: MỨC ĐỘ VẬN DỤNG (KIỂM TRA TÌNH HUỐNG)

**Câu 8: Trong một đợt kiểm thử an ninh mạng (Penetration Testing) cho một công ty tài chính, hacker thực hiện lệnh `dig company.com A +short` và nhận về kết quả là địa chỉ IP `104.26.3.128`. Tra cứu IP này cho thấy nó thuộc sở hữu của Cloudflare. Hành động tiếp theo nào của hacker là ĐÚNG ĐẮN nhất dưới góc độ kỹ thuật?**

A. Sử dụng công cụ tự động quét lỗ hổng trực tiếp vào địa chỉ IP `104.26.3.128` này

B. Tiến hành tìm kiếm các lỗ hổng cấu hình hoặc bản ghi DNS lịch sử để tìm ra IP gốc (Backend IP) đứng sau Cloudflare

C. Kết luận hệ thống hoàn toàn an toàn và chuyển sang mục tiêu khác

D. Gửi email lừa đảo (Phishing) trực tiếp tới Cloudflare để chiếm quyền quản trị

**Câu 9: Bạn đang thực hiện điều tra một email lừa đảo mạo danh đối tác gửi tới phòng kế toán của công ty. Khi thực hiện truy vấn bản ghi MX của tên miền đối tác thật, bạn thấy hệ thống trả về chuỗi `inbound-smtp.us-east-1.amazonaws.com`. Tuy nhiên, kết quả tra cứu Whois của tên miền cho thấy thông tin đăng ký mới thay đổi cách đây 2 ngày tại một nhà đăng ký giá rẻ ở Đông Âu. Dấu hiệu này chỉ ra kịch bản nào khả thi nhất?**

A. Đối tác thật đang nâng cấp hệ thống email văn phòng lên đám mây Amazon

B. Kẻ tấn công đã mua lại một tên miền gần giống (Typosquatting) hoặc chiếm quyền kiểm soát thông tin Whois để thực hiện lừa đảo công ty bạn

C. Máy chủ DNS của Amazon đang bị tấn công DDoS nghẽn mạng

D. Hệ thống mạng nội bộ của công ty bạn bị nhiễm mã độc nghe lén dữ liệu

**Câu 10: Bạn là chuyên gia bảo mật được thuê để giảm thiểu rủi ro bị thu thập thông tin (Footprinting) cho một tập đoàn lớn. Biện pháp nào sau đây giúp bảo vệ thông tin nhân sự vận hành hệ thống khỏi bị khai thác qua dịch vụ tra cứu Whois công cộng?**

A. Cấu hình chặn toàn bộ cổng 53 (DNS) trên hệ thống tường lửa lõi

B. Đổi toàn bộ các bản ghi A sang bản ghi dạng CNAME

C. Kích hoạt dịch vụ Whois Privacy (Ẩn thông tin tên miền) thông qua nhà đăng ký tên miền (Registrar)

D. Mã hóa nội dung toàn bộ trang web bằng thuật toán RSA 2048-bit

---

# 📝 ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

**Câu 1: Chọn B**

* *Tại sao đúng:* Bản ghi **A (Address Record)** dùng để ánh xạ (dịch) một tên miền/tên miền con thành một địa chỉ IPv4.
* *Tại sao các đáp án khác sai:* A sai vì MX dùng cho máy chủ mail; C sai vì NS chỉ định Name Server giữ quyền quản lý; D sai vì TXT chứa văn bản ghi chú cấu hình.

**Câu 2: Chọn C**

* *Tại sao đúng:* **Whois** là cơ sở dữ liệu và giao thức chuẩn dùng để tra cứu thông tin đăng ký sở hữu pháp lý của một tên miền.
* *Tại sao các đáp án khác sai:* A sai vì Traceroute dùng để dò tuyến đường đi của gói tin; B và D sai vì Nslookup và Dig là công cụ để truy vấn các bản ghi DNS cụ thể chứ không đọc dữ liệu đăng ký sở hữu tên miền.

**Câu 3: Chọn D**

* *Tại sao đúng:* Bản ghi **MX (Mail Exchange)** là bản ghi bắt buộc phải có để định tuyến email trên Internet đến đúng máy chủ nhận thư của tên miền đó.
* *Tại sao các đáp án khác sai:* A sai vì dùng cho máy chủ Web/IP hạ tầng; B sai vì chứa thông tin xác thực cấu hình; C sai vì chỉ chứa thông tin định danh máy chủ phân giải tên miền.

**Câu 4: Chọn C**

* *Tại sao đúng:* Ký hiệu `* * *` xuất hiện khi thiết bị định tuyến tại chặng đó chặn các gói tin trả về (ICMP Time Exceeded) do chính sách bảo mật/tường lửa nhằm ẩn mình trước các công cụ dò quét [Environmental scan/Reconnaissance].
* *Tại sao các đáp án khác sai:* A sai vì nếu máy chủ sập thì lệnh sẽ không thể chạy tiếp hoặc lỗi ở chặng cuối; B sai vì nghẽn mạng sẽ phản hồi chậm (thời gian tính bằng ms cao) chứ không mất gói tin hàng loạt cố định; D sai vì nếu tên miền không tồn tại, lệnh sẽ thất bại ngay từ chặng đầu tiên khi phân giải DNS.

**Câu 5: Chọn B**

* *Tại sao đúng:* Khi tra cứu Whois hay DNS, bạn đang gửi yêu cầu đến máy chủ của nhà đăng ký (GoDaddy, Cloudflare, Google DNS...) chứ không gửi bất kỳ gói tin nào vào hệ thống mạng của nạn nhân, giúp hành động này hoàn toàn "vô hình" trước hệ thống IDS/Tường lửa của họ.
* *Tại sao các đáp án khác sai:* A sai vì việc dùng mã nguồn mở hay đóng không quyết định tính chất chủ động/bị động; C sai vì thời gian thực hiện không ảnh hưởng đến giao thức; D sai vì dữ liệu DNS/Whois cực kỳ quan trọng cho các bước tấn công kỹ thuật tiếp theo.

**Câu 6: Chọn A**

* *Tại sao đúng:* Traceroute tăng dần chỉ số **TTL (Time To Live)** từ 1, 2, 3... Mỗi khi gói tin đi qua một router, TTL giảm đi 1 đơn vị. Khi TTL = 0, router bắt buộc phải hủy gói tin và gửi lại một thông điệp lỗi ICMP cho máy nguồn, qua đó lộ diện địa chỉ IP của router đó.
* *Tại sao các đáp án khác sai:* B, C, D là các trường dữ liệu quản lý tính toàn vẹn và kích thước dữ liệu, không có chức năng giới hạn số chặng di chuyển của gói tin trên môi trường mạng.

**Câu 7: Chọn C**

* *Tại sao đúng:* Định dạng chuỗi `v=spf1...` là cấu hình của tính năng **SPF (Sender Policy Framework)** dùng để chống giả mạo email, cấu hình này bắt buộc phải được đặt trong bản ghi dạng văn bản tự do là **TXT Record**.
* *Tại sao các đáp án khác sai:* A sai vì A chỉ chứa địa chỉ IP thuần túy; B sai vì CNAME dùng để trỏ tên miền này sang tên miền khác (Alias); D sai vì PTR là bản ghi phân giải ngược từ IP sang tên miền.

**Câu 8: Chọn B**

* *Tại sao đúng:* IP trả về thuộc Cloudflare (dịch vụ CDN/WAF ẩn IP gốc). Nếu hacker tấn công vào đây sẽ bị Cloudflare chặn và bản chất là đang tấn công hạ tầng của Cloudflare. Hacker buộc phải tìm IP thực (Backend/Origin IP) của máy chủ chứa website mục tiêu thông qua cấu hình lỗi lịch sử hoặc subdomain không qua Cloudflare.
* *Tại sao các đáp án khác sai:* A sai vì quét vào IP Cloudflare vô ích và bị block IP ngay lập tức; C sai vì đây mới chỉ là lớp bảo vệ vòng ngoài, chưa kết luận được an ninh của website; D sai vì Cloudflare là bên thứ ba, không liên quan đến phạm vi tấn công kỹ thuật của mục tiêu doanh nghiệp.

**Câu 9: Chọn B**

* *Tại sao đúng:* Bản ghi MX trỏ về Amazon SMTP hợp lệ nhưng thông tin Whois của tên miền lại mới được đăng ký/thay đổi tại một nơi không uy tín cách đó 2 ngày $\rightarrow$ Kẻ tấn công đã thực hiện đăng ký một tên miền gần giống tên miền đối tác thật để làm giả hệ thống email nhằm lừa tiền công ty bạn (Tấn công BEC - Business Email Compromise).
* *Tại sao các đáp án khác sai:* A sai vì nếu đối tác thật đổi hạ tầng, họ sẽ không thay đổi thông tin nhà đăng ký gốc sang một đơn vị đáng ngờ; C và D sai vì không logic với việc thay đổi dữ liệu đăng ký sở hữu tên miền (Whois) vừa diễn ra.

**Câu 10: Chọn C**

* *Tại sao đúng:* Dịch vụ **Whois Privacy** (hoặc Privacy Protection) sẽ thay thế toàn bộ thông tin nhạy cảm của doanh nghiệp (Tên thật, Email quản trị, SĐT) bằng thông tin ẩn danh của chính nhà đăng ký tên miền, ngăn chặn triệt để kỹ thuật trinh sát bị động của hacker.
* *Tại sao các đáp án khác sai:* A sai vì chặn cổng 53 sẽ làm tê liệt toàn bộ khả năng truy cập internet của nhân viên; B sai vì bản ghi CNAME không có chức năng che giấu dữ liệu đăng ký sở hữu tên miền; D sai vì mã hóa RSA trên website không liên quan và không can thiệp được vào cơ sở dữ liệu tập trung công cộng của giao thức Whois.