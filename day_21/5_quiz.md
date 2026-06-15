Dưới đây là bộ quiz trắc nghiệm gồm 10 câu hỏi bám sát nội dung **NGÀY 21: CƯỚP PHIÊN LÀM VIỆC (SESSION HIJACKING)** theo chuẩn tư duy CEH v11. Bộ câu hỏi được cấu trúc rõ ràng, chuyên sâu, đi kèm đáp án và giải thích chi tiết, định dạng tối ưu để thầy/cô dễ dàng in ấn hoặc copy lên Google Form/Quizizz.

---

## PHẦN 1: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

**Câu 1. Kỹ thuật tấn công nào sau đây thuộc nhóm Cướp phiên làm việc ở Tầng Ứng dụng (Application Level Session Hijacking)?**

* A. TCP Sequence Number Prediction
* B. Cross-Site Scripting (XSS)
* C. IP Spoofing
* D. RST Packet Injection
* **Đáp án đúng:** B
* **Giải thích:** * *Tại sao đúng:* Tấn công XSS cho phép kẻ tấn công chèn mã JavaScript độc hại vào trình duyệt nạn nhân để đọc giá trị Cookie (`document.cookie`), đây là thành phần thuộc lớp ứng dụng (HTTP/HTTPS).
* *Tại sao các đáp án khác sai:* A, C, D đều là các kỹ thuật can thiệp sâu vào các gói tin TCP/IP, cấu trúc gói hoặc địa chỉ IP, do đó chúng thuộc về Tầng Mạng (Network Level).



**Câu 2. Để ngăn chặn hoàn toàn các đoạn mã độc JavaScript (như trong tấn công XSS) truy cập và đánh cắp mã Session ID trong Cookie, lập trình viên cần cấu hình thuộc tính (Flag) nào sau đây cho Cookie?**

* A. Secure
* B. SameSite=Strict
* C. HttpOnly
* D. Path=/
* **Đáp án đúng:** C
* **Giải thích:**
* *Tại sao đúng:* Cờ `HttpOnly` là cơ chế bảo mật phía trình duyệt, khi được kích hoạt, nó cấm hoàn toàn mọi tập lệnh client-side (như JavaScript) đọc nội dung của Cookie đó, chặn đứng nguy cơ lộ mã phiên qua XSS.
* *Tại sao các đáp án khác sai:* A (Secure) chỉ ép buộc truyền cookie qua HTTPS; B (SameSite) chống tấn công CSRF; D (Path) giới hạn phạm vi đường dẫn gửi kèm cookie chứ không chặn JavaScript.



**Câu 3. Trong một cuộc tấn công Cố định phiên (Session Fixation), hành động cốt lõi của kẻ tấn công là gì?**

* A. Dự đoán số thứ tự gói tin TCP (Sequence Number) tiếp theo của nạn nhân.
* B. Ép buộc hoặc dụ dỗ nạn nhân đăng nhập bằng một mã Session ID đã được kẻ tấn công biết hoặc khởi tạo từ trước.
* C. Gửi liên tiếp các gói tin RST để ngắt kết nối hợp lệ giữa client và server.
* D. Nghe lén lưu lượng mạng không mã hóa bằng công cụ Wireshark để chụp lại Cookie.
* **Đáp án đúng:** B
* **Giải thích:**
* *Tại sao đúng:* Bản chất của Session Fixation là kẻ tấn công đã chọn sẵn một mã Session ID (ví dụ thông qua một đường link lừa đảo), lừa nạn nhân đăng nhập qua mã đó để máy chủ kích hoạt phiên hợp lệ cho mã có sẵn này.
* *Tại sao các đáp án khác sai:* A là kỹ thuật thuộc TCP Hijacking; C là kỹ thuật ngắt phiên (Session Desynchronization); D là tấn công Sniffing thụ động thông thường.



**Câu 4. Bản chất của giao thức HTTP được coi là "Stateless" (Không lưu trạng thái). Khái niệm này nghĩa là gì?**

* A. Máy chủ sẽ tự động chặn mọi yêu cầu nếu không có chứng chỉ bảo mật SSL/TLS.
* B. Trình duyệt tự động xóa lịch sử truy cập ngay sau khi người dùng đóng tab.
* C. Máy chủ xử lý mỗi yêu cầu (Request) một cách độc lập và không lưu giữ ký ức hay thông tin về các yêu cầu trước đó của cùng một client.
* D. Máy chủ không thể ghi lại địa chỉ IP nguồn của các gói tin gửi đến.
* **Đáp án đúng:** C
* **Giải thích:**
* *Tại sao đúng:* Stateless nghĩa là không giữ trạng thái. Mỗi chu kỳ Request/Response của HTTP hoàn toàn biệt lập, máy chủ không tự nhận diện được client vừa gửi request trước đó nếu không có cơ chế Session/Cookie hỗ trợ.
* *Tại sao các đáp án khác sai:* Các phương án A, B, D đều mô tả sai định nghĩa kỹ thuật của thuộc tính "Stateless" trong kiến trúc mạng và Web.



---

## PHẦN 2: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

**Câu 5. Tại sao việc chuyển dịch toàn bộ hệ thống từ HTTP sang HTTPS (Mã hóa đường truyền) lại giúp chống lại kỹ thuật Session Hijacking ở Tầng Mạng, nhưng KHÔNG THỂ bảo vệ hoàn toàn ứng dụng khỏi Session Hijacking ở Tầng Ứng dụng?**

* A. Vì HTTPS chỉ hoạt động ở tầng Network chứ không mã hóa dữ liệu ở tầng Web.
* B. Vì HTTPS chỉ mã hóa dữ liệu trên đường truyền; nếu ứng dụng bị dính lỗi XSS, kẻ tấn công vẫn lấy được Cookie trực tiếp từ bộ nhớ trình duyệt của nạn nhân.
* C. Vì HTTPS chỉ bảo vệ được hệ điều hành Linux chứ không bảo vệ được hệ điều hành Windows.
* D. Vì chứng chỉ HTTPS (SSL) dễ dàng bị bypass bằng các công cụ quét cổng như Nmap.
* **Đáp án đúng:** B
* **Giải thích:**
* *Tại sao đúng:* HTTPS bảo vệ dữ liệu chống lại việc nghe lén trên đường truyền (Sniffing mạng). Tuy nhiên, nếu mã nguồn web có lỗ hổng XSS, mã độc chạy trực tiếp ngay trong trình duyệt của nạn nhân (nơi dữ liệu đã được giải mã), cho phép lấy Session ID mà không cần chặn bắt trên mạng.
* *Tại sao các đáp án khác sai:* A sai vì HTTPS hoạt động ở tầng ứng dụng/vận chuyển; C và D hoàn toàn sai kiến thức cơ bản về hệ điều hành và mật mã học.



**Câu 6. Trong kỹ thuật Cướp phiên làm việc ở Tầng Mạng (Network Level Session Hijacking), tại sao kẻ tấn công phải tìm mọi cách dự đoán chính xác số TCP Sequence Number tiếp theo?**

* A. Để giải mã nội dung đã bị mã hóa bởi thuật toán RSA của máy chủ.
* B. Để vượt qua cơ chế xác thực sinh trắc học của thiết bị di động.
* C. Để chế tạo một gói tin giả mạo có số thứ tự khớp với tiến trình mong đợi của máy chủ, từ đó chèn lệnh độc hại trước khi gói tin thật của nạn nhân tới đích.
* D. Để làm tràn ngập bộ nhớ đệm (Buffer Overflow) của thiết bị Switch.
* **Đáp án đúng:** C
* **Giải thích:**
* *Tại sao đúng:* Giao thức TCP dựa vào Sequence Number để sắp xếp các gói tin và xác thực luồng truyền. Nếu hacker đoán được số này, hắn có thể gửi gói tin giả mạo có số SEQ hợp lệ, máy chủ sẽ tin tưởng tiếp nhận gói tin này và bỏ qua gói tin thật đến sau.
* *Tại sao các đáp án khác sai:* A sai vì Sequence Number không dùng để mã hóa hay giải mã dữ liệu; B và D không liên quan đến bản chất hoạt động của giao thức TCP 3-Way Handshake.



**Câu 7. Một quản trị viên cấu hình hệ thống web như sau: Khi người dùng nhấn nút "Đăng xuất" (Log out), ứng dụng sẽ thực thi đoạn mã JavaScript xóa Cookie chứa Session ID trên trình duyệt của người dùng. Tại sao cơ chế này vẫn bị coi là lỗi quản lý phiên nghiêm trọng?**

* A. Vì xóa cookie bằng JavaScript sẽ làm hỏng giao diện hiển thị của trang web.
* B. Vì nếu Session ID không bị hủy (invalidate) trong cơ sở dữ liệu/bộ nhớ phía Máy chủ (Server-side), kẻ tấn công đã đánh cắp được mã này từ trước vẫn có thể sử dụng lại nó để truy cập tài khoản thành công.
* C. Vì cơ chế xóa cookie chỉ hoạt động trên trình duyệt Chrome, không có tác dụng trên Firefox.
* D. Vì xóa cookie sẽ khiến máy tính của người dùng bị nhiễm mã độc mã nguồn mở.
* **Đáp án đúng:** B
* **Giải thích:**
* *Tại sao đúng:* Việc quản lý phiên an toàn bắt buộc phải thực hiện ở cả hai phía. Nếu chỉ xóa cookie ở client (bề nổi) mà server vẫn coi mã Session ID đó là hợp lệ, thì chiếc "thẻ thông hành" đó vẫn sống và hacker vẫn dùng được.
* *Tại sao các đáp án khác sai:* A, C, D đều là các nhận định chủ quan, không đúng với thực tế vận hành kỹ thuật của cookie và trình duyệt.



---

## PHẦN 3: MỨC ĐỘ VẬN DỤNG (3 CÂU)

**Câu 8. Bạn đang thực hiện kiểm thử xâm nhập (Penetration Testing) cho một ngân hàng điện tử. Hệ thống yêu cầu xác thực đa yếu tố (2FA) bằng mã OTP gửi về điện thoại khi đăng nhập. Bạn phát hiện trang web này bị dính lỗ hổng XSS nặng và bạn đã lấy được chuỗi cookie phiên `SESSION_ID=abc123XYZ` của một khách hàng vừa đăng nhập thành công. Bạn sẽ làm gì tiếp theo để chứng minh lỗ hổng Session Hijacking tồn tại?**

* A. Tiếp tục tìm cách bẻ khóa mật khẩu gốc của người dùng bằng công cụ Hashcat.
* B. Sử dụng một trình duyệt khác, chèn chuỗi `SESSION_ID=abc123XYZ` vào phần Cookie lưu trữ và F5 lại trang web để truy cập thẳng vào trang quản trị tài khoản mà không cần nhập OTP.
* C. Gọi điện cho khách hàng để lừa họ đọc mã OTP vừa gửi về điện thoại.
* D. Tiến hành tấn công Từ chối dịch vụ (DDoS) vào máy chủ ngân hàng để ép hệ thống tự động nhả quyền truy cập.
* **Đáp án đúng:** B
* **Giải thích:**
* *Tại sao đúng:* Session Hijacking xảy ra **sau khi** quá trình xác thực hoàn tất. Khách hàng đã nhập đúng mật khẩu và OTP, máy chủ đã cấp Session ID hợp lệ. Khi hacker cầm được Session ID này và chèn vào trình duyệt của mình, máy chủ sẽ nhận diện hacker chính là khách hàng đó và cho phép truy cập mà không hỏi lại OTP.
* *Tại sao các đáp án khác sai:* A không cần thiết vì cướp phiên giúp bỏ qua mật khẩu; C là Social Engineering chứ không phải kỹ thuật cướp phiên; D phá hoại hệ thống và vi phạm đạo đức kiểm thử.



**Câu 9. Một kỹ sư an ninh phát hiện hệ thống Web của công ty liên tục bị cướp phiên làm việc dù toàn bộ trang web đã chạy HTTPS 100% và các Cookie đều được cấu hình cờ `HttpOnly` và `Secure` rất nghiêm ngặt. Qua phân tích log, kỹ sư thấy rằng các Session ID bị cướp đều có cấu trúc dạng: `User001_20260615_0001`, `User001_20260615_0002`... Lỗ hổng cốt lõi ở đây là gì và giải pháp khắc phục triệt để nhất?**

* A. Hệ thống bị tấn công tầng vật lý; giải pháp là thay thế toàn bộ ổ cứng máy chủ.
* B. Lập trình viên đã tự viết thuật toán tạo Session ID theo quy luật dễ đoán (Session Prediction); giải pháp là chuyển sang sử dụng thư viện chuẩn của hệ thống để sinh mã phiên ngẫu nhiên mật mã học (Cryptographically Secure Random String).
* C. Do người dùng đặt mật khẩu quá ngắn; giải pháp là ép buộc người dùng đổi mật khẩu có ký tự đặc biệt.
* D. Do hệ thống tường lửa (Firewall) cấu hình sai cổng; giải pháp là đóng cổng 443.
* **Đáp án đúng:** B
* **Giải thích:**
* *Tại sao đúng:* Cấu trúc mã phiên trong tình huống hiển thị rõ quy luật (`TênUser_NgàyTháng_SốThứTự`). Kẻ tấn công không cần dùng mã độc hay nghe lén, chúng chỉ cần chạy một tập lệnh tự động tăng số thứ tự là tự dò ra (Brute-force/Predict) Session ID của người khác.
* *Tại sao các đáp án khác sai:* A, C, D đều đoán mò sai nguyên nhân gốc rễ kỹ thuật của bài toán (Cấu trúc mã phiên yếu).



**Câu 10. Trong một cuộc họp kiến trúc an ninh mạng cho ứng dụng Tài chính, lập trình viên đề xuất: *"Để tăng tốc độ tải trang, tôi sẽ đính kèm mã định danh phiên làm việc trực tiếp lên thanh địa chỉ URL dưới dạng `https://finance.com/dashboard?sid=AMZ999` thay vì dùng Cookie"*. Là một chuyên gia bảo mật, bạn phản đối đề xuất này vì lý do an toàn nào sau đây?**

* A. Mã URL quá dài sẽ khiến băng thông mạng bị nghẽn và gây sập máy chủ.
* B. Mã định danh trên URL sẽ bị lộ lọt dễ dàng thông qua lịch sử trình duyệt (Browser History), nhật ký máy chủ (Server Logs), hoặc thông qua tiêu đề `Referer` khi người dùng bấm vào một liên kết ngoài.
* C. URL có chứa ký tự đặc biệt sẽ bị các phần mềm diệt virus trên máy người dùng tự động xóa bỏ.
* D. Giao thức HTTPS không hỗ trợ mã hóa các tham số truyền trên URL.
* **Đáp án đúng:** B
* **Giải thích:**
* *Tại sao đúng:* Đây là sai lầm kinh điển. URL luôn bị lưu lại ở rất nhiều nơi: lịch sử duyệt web của máy khách, log của proxy công ty, log của web server. Nếu đưa Session ID lên URL, bất kỳ ai xem log hoặc nhìn vào màn hình nạn nhân đều có thể cướp được phiên làm việc.
* *Tại sao các đáp án khác sai:* A và C phóng đại không có căn cứ kỹ thuật; D sai vì HTTPS mã hóa toàn bộ gói tin bao gồm cả chuỗi truy vấn (Query String) trên URL khi truyền qua mạng (nhưng không bảo vệ được dữ liệu khi đã nằm trong log hoặc lịch sử trình duyệt).