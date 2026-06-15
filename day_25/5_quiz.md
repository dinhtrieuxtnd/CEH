Dưới đây là bộ quiz 10 câu trắc nghiệm chuyên sâu phục vụ giảng dạy cho **NGÀY 25: LỖ HỔNG ỨNG DỤNG WEB (OWASP TOP 10) & CHIẾN THUẬT XSS**. Tài liệu được biên soạn định dạng chuẩn chỉnh, sẵn sàng để thầy/cô in ấn hoặc copy trực tiếp lên các nền tảng như Google Forms, Microsoft Forms, Quizizz hay Kahoot.

---

# BỘ QUIZ TRẮC NGHIỆM: NGÀY 25 (CEH v11 - WEB APPLICATION & XSS)

## PHẦN I: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

**Câu 1. Tổ chức OWASP (Open Web Application Security Project) được biết đến rộng rãi nhất trong ngành an toàn thông tin nhờ tài liệu định kỳ nào sau đây?**

* A. Danh mục mã lỗi hệ điều hành và kỹ thuật dịch ngược phần mềm.
* B. Danh sách 10 lỗ hổng bảo mật ứng dụng Web phổ biến và nguy hiểm nhất.
* C. Bộ quy chuẩn cấu hình tường lửa cứng cho mạng nội bộ doanh nghiệp.
* D. Cẩm nang hướng dẫn điều tra số và khôi phục dữ liệu sau thảm họa sập máy chủ.

**Câu 2. Cuộc tấn công Cross-Site Scripting (XSS) thuộc nhóm phân loại lỗ hổng bảo mật lớn nào theo các chuẩn thiết kế hệ thống?**

* A. Sụp đổ cấu trúc mã hóa bất đối xứng (Cryptographic Failure).
* B. Lỗi cấu hình sai dịch vụ hệ điều hành (Security Misconfiguration).
* C. Lỗi chèn mã độc hại (Injection).
* D. Lỗi rò rỉ bộ nhớ đệm vật lý (Buffer Overflow).

**Câu 3. Trong kịch bản tấn công Reflected XSS thành công, các đoạn mã lệnh JavaScript độc hại thường được kẻ tấn công nhúng trực tiếp vào vị trí nào?**

* A. Tập tin cấu hình hệ quản trị cơ sở dữ liệu (như tệp config.php).
* B. Các dòng bản ghi lịch sử chat vĩnh viễn trong Database của máy chủ.
* C. Tham số truyền tải nằm ngay trên đường dẫn URL độc hại.
* D. Phân vùng khởi động Master Boot Record (MBR) của máy chủ Web.

**Câu 4. Thuộc tính nào sau đây khi được thiết lập cấu hình cho Cookie phiên làm việc (Session Cookie) trên trình duyệt sẽ chặn đứng hoàn toàn việc JavaScript tiếp cận giá trị của nó?**

* A. Secure
* B. SameSite
* C. HttpOnly
* D. Expires

---

## PHẦN II: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

**Câu 5. Điểm khác biệt cốt lõi về mặt kỹ thuật giữa lỗi Stored XSS và Reflected XSS nằm ở yếu tố nào dưới đây?**

* A. Stored XSS chỉ tấn công được các máy chủ chạy hệ điều hành Windows, còn Reflected XSS tấn công mọi nền tảng.
* B. Mã độc Stored XSS lưu trữ vĩnh viễn trong Database máy chủ, còn Reflected XSS chỉ phản xạ tức thì từ Request và không lưu trên Server.
* C. Reflected XSS có khả năng đánh cắp mật khẩu dạng rõ, trong khi Stored XSS chỉ có thể lấy được Session Cookie.
* D. Stored XSS yêu cầu hacker phải lừa được nạn nhân bấm vào một đường URL lạ, còn Reflected XSS thì không cần link.

**Câu 6. Tại sao giải pháp xây dựng một bộ lọc danh sách đen (Blacklisting) chuyên tìm và xóa bỏ từ khóa `<script>` lại không thể bảo vệ ứng dụng Web an toàn trước XSS?**

* A. Vì giao thức HTTPS mã hóa toàn bộ dữ liệu gói tin khiến bộ lọc không đọc được chữ `<script>`.
* B. Vì mã lệnh JavaScript chỉ chạy trên môi trường Front-end nên bộ lọc Back-end hoàn toàn bị mù thông tin.
* C. Vì hacker có thể sử dụng các thuộc tính sự kiện của các thẻ HTML khác (như `onload`, `onerror` trên thẻ `<img>`) hoặc lồng ký tự để bypass bộ lọc.
* D. Vì thẻ `<script>` là thành phần bắt buộc phải mở ở tất cả các ô nhập liệu Front-end thì website mới hoạt động được.

**Câu 7. Kỹ thuật "Mã hóa đầu ra" (Output Encoding) giúp triệt tiêu nguy cơ tấn công XSS hiển thị trên trình duyệt dựa trên cơ chế nào?**

* A. Nó mã hóa toàn bộ nội dung sang dạng AES-256 để hacker không thể đọc hiểu cấu trúc mã nguồn trang Web.
* B. Nó chuyển đổi các ký tự điều khiển HTML nguy hiểm như `<`, `>` thành các thực thể an toàn như `&lt;`, `&gt;` khiến trình duyệt chỉ hiểu đó là văn bản thô để hiển thị chứ không thực thi lệnh.
* C. Nó tự động kích hoạt tính năng tường lửa Windows Defender trên máy trạm của người dùng để quét tìm mã độc.
* D. Nó chặn đứng gói tin ngay tại tầng mạng (Layer 3) và không cho phép gói tin đi vào xử lý tại tầng ứng dụng Web.

---

## PHẦN III: MỨC ĐỘ VẬN DỤNG (3 CÂU)

**Câu 8. Một Ethical Hacker đang tiến hành kiểm thử hộp đen (Black-box Testing) ô Tìm kiếm sản phẩm của một trang Web thương mại điện tử. Anh ta nhập chuỗi ký tự `Áo khoác <script>alert(1)</script>` vào ô tìm kiếm và nhấn Enter. Website lập tức load lại và hiện một hộp thoại Popup thông báo số `1`. Chuyên gia này sẽ ghi nhận lỗ hổng nào vào báo cáo bảo mật?**

* A. Hệ thống dính lỗ hổng Stored XSS nghiêm trọng.
* B. Hệ thống dính lỗ hổng Reflected XSS.
* C. Hệ thống dính lỗi cấu hình sụp đổ cơ chế xác thực phiên (Broken Authentication).
* D. Hệ thống hoàn toàn an toàn vì trang Web vẫn hiển thị đúng chữ "Áo khoác".

**Câu 9. Trong quá trình rà soát mã nguồn (Code Review) cho một mạng xã hội nội bộ của doanh nghiệp, bạn phát hiện tính năng bình luận dưới bài viết đang lấy dữ liệu trực tiếp từ ô nhập liệu của nhân viên, lưu thẳng vào database và hiển thị lên bảng tin của toàn công ty mà không qua bất kỳ khâu xử lý nào. Nguy cơ lớn nhất hệ thống này phải đối mặt là gì?**

* A. Một nhân viên bất mãn có thể chèn mã Stored XSS độc hại để tự động thu thập Session Cookie của bất kỳ ai vào xem bảng tin, dẫn đến chiếm đoạt hàng loạt tài khoản.
* B. Hacker bên ngoài mạng Internet có thể gửi gói tin SYN Flood làm cạn kiệt băng thông đường truyền nội bộ của doanh nghiệp.
* C. Cơ sở dữ liệu Database bị quá tải vật lý và tự động xóa bỏ toàn bộ lịch sử bài đăng cũ của năm trước.
* D. Trình duyệt của người xem tự động tải về các tệp tin virus định dạng `.exe` và phá hủy phần cứng máy tính cá nhân.

**Câu 10. Lập trình viên Front-end báo cáo với bạn: "Tôi đã viết mã JavaScript rất kỹ ở giao diện Web, nếu người dùng cố tình gõ các ký tự đặc biệt như `<`, `>`, `'`, `"` vào biểu mẫu Đăng ký, hệ thống sẽ báo lỗi màu đỏ và không cho nhấn nút gửi gói tin lên Server. Như vậy trang web của chúng ta đã miễn nhiễm 100% với XSS" . Là một chuyên gia an ninh mạng, bạn sẽ phản hồi thế nào?**

* A. Đồng ý với lập trình viên vì JavaScript ở Front-end là rào chắn vững chắc nhất để bảo vệ máy chủ Web.
* B. Không đồng ý, vì kiểm tra Front-end là vô dụng; hacker có thể bypass giao diện bằng cách dùng các công cụ như Burp Suite/Postman để bắt gói tin và gửi thẳng dữ liệu độc hại vào Server.
* C. Không đồng ý, vì kiểm tra bằng JavaScript sẽ làm chậm tốc độ xử lý CPU của máy chủ Web khi có hàng triệu người đăng ký cùng lúc.
* D. Đồng ý, vì trình duyệt hiện đại ngày nay tự động từ chối xử lý tất cả các yêu cầu không đi qua bộ lọc Front-end.

---

# PHẦN II: ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT

| Câu | Đáp án | Giải thích lý do đúng (TẠI SAO ĐÚNG / TẠI SAO SAI) |
| --- | --- | --- |
| **1** | **B** | **- TẠI SAO ĐÚNG:** OWASP nổi tiếng nhất toàn cầu nhờ tài liệu "OWASP Top 10" – danh sách cập nhật định kỳ cảnh báo 10 nguy cơ lỗ hổng phần mềm Web nguy hiểm nhất.<br>**- TẠI SAO SAI:** Các câu A, C, D mô tả các phạm vi chuyên môn khác không thuộc sản phẩm cốt lõi của dự án OWASP. |
| **2** | **C** | **- TẠI SAO ĐÚNG:** Bản chất của XSS là việc dữ liệu nhập vào (Input) chứa mã lệnh độc hại bị ứng dụng nhận diện sai mục đích và chèn thẳng vào cấu trúc trang, do đó nó thuộc nhóm lỗi lớn Injection (Chèn mã).<br>**- TẠI SAO SAI:** A, B, D là các nhóm lỗi độc lập khác (Mã hóa, Cấu hình mạng, Tràn bộ đệm) không phản ánh cơ chế của XSS. |
| **3** | **C** | **- TẠI SAO ĐÚNG:** Reflected XSS có đặc tính không lưu trữ trên Server, mã độc chỉ "phản xạ" qua lại trong một chu kỳ Request - Response duy nhất, do đó kẻ tấn công bắt buộc phải nhúng sẵn mã độc vào tham số của đường dẫn URL và lừa người dùng kích hoạt.<br>**- TẠI SAO SAI:** A và B thuộc về cấu trúc lưu trữ cố định (đặc trưng của Stored XSS); D vi phạm lỗi cấp hệ điều hành (System Hacking) chứ không phải lỗi Web. |
| **4** | **C** | **- TẠI SAO ĐÚNG:** Cờ cấu hình `HttpOnly` sinh ra như một quy chuẩn an toàn bắt buộc cho Cookie. Khi bật cờ này, trình duyệt sẽ cấm tuyệt đối mọi script JavaScript tiếp cận lệnh `document.cookie`, vô hiệu hóa mục tiêu tối thượng của hacker.<br>**- TẠI SAO SAI:** `Secure` bắt buộc truyền qua HTTPS; `SameSite` chống lỗi CSRF; `Expires` cấu hình thời gian hết hạn của Cookie. |
| **5** | **B** | **- TẠI SAO ĐÚNG:** Đây là ranh giới phân định bản chất: Stored XSS là tấn công vĩnh viễn vì mã nằm trong Database (nạn nhân cứ vào xem trang là dính), còn Reflected XSS chỉ tồn tại trên đường link cá nhân tạm thời.<br>**- TẠI SAO SAI:** Các câu A, C, D đều đưa ra các nhận định sai về mặt kỹ thuật, môi trường hoạt động và mục tiêu khai thác dữ liệu của hai lỗi. |
| **6** | **C** | **- TẠI SAO ĐÚNG:** Lập trình an toàn không bao giờ tin tưởng danh sách đen (Blacklist). Hacker dễ dàng dùng thẻ `<img>` lỗi để kích hoạt sự kiện chạy JS ngầm: `<img src=x onerror=alert(1)>` mà hoàn toàn không cần dùng đến chữ `<script>`.<br>**- TẠI SAO SAI:** A sai vì HTTPS chỉ mã hóa đường truyền, Server vẫn giải mã đọc bình thường; B sai vì Server hoàn toàn đọc được chuỗi thô gửi lên; D sai vì ô nhập liệu không cần thẻ script để vận hành. |
| **7** | **B** | **- TẠI SAO ĐÚNG:** Khi chuyển dấu `<` thành `&lt;`, trình duyệt sẽ chỉ hiểu đây là văn bản cần in ra màn hình cho người dùng đọc, tính năng biên dịch thẻ lệnh bị vô hiệu hóa hoàn toàn, mã độc biến thành chữ thô vô hại.<br>**- TẠI SAO SAI:** A sai vì AES dùng bảo mật lưu trữ/đường truyền chứ không dùng xử lý hiển thị HTML; C và D nhầm lẫn sang các tầng thiết bị bảo mật hạ tầng mạng/OS. |
| **8** | **B** | **- TẠI SAO ĐÚNG:** Mã độc được truyền qua ô tìm kiếm, phản xạ thẳng ngược lại màn hình ngay lập tức tạo hộp thoại Popup mà không hề được lưu lại trong hệ thống cơ sở dữ liệu, đây là dấu hiệu chuẩn xác của Reflected XSS.<br>**- TẠI SAO SAI:** A sai vì dữ liệu chưa hề lưu vĩnh viễn; C sai vì đây không phải lỗi logic đăng nhập; D chủ quan vì popup chạy chứng tỏ web thực thi mã lạ của khách. |
| **9** | **A** | **- TẠI SAO ĐÚNG:** Ô bình luận lưu thẳng vào cơ sở dữ liệu và hiển thị công khai cho toàn bộ người dùng khác xem chính là môi trường lý tưởng để kích hoạt Stored XSS diện rộng, hacker có thể cướp hàng loạt phiên làm việc của nhân viên công ty.<br>**- TẠI SAO SAI:** B nhầm sang lỗi từ chối dịch vụ; C nhầm sang lỗi tài nguyên phần cứng; D sai vì JavaScript trên trình duyệt bị giới hạn Sandbox, không thể tự chạy file `.exe` phá phần cứng. |
| **10** | **B** | **- TẠI SAO ĐÚNG:** Nguyên tắc an ninh mạng tối thượng: "Không bao giờ tin tưởng Client (Front-end)". Các bộ mã kiểm tra JavaScript ở Front-end chỉ dùng để tăng trải nghiệm người dùng, hacker luôn dùng Burp Suite/Postman để đẩy thẳng payload qua mặt Front-end vào Server.<br>**- TẠI SAO SAI:** A, C, D đều thể hiện tư duy sai lầm nghiêm trọng trong kiến trúc bảo mật ứng dụng Web đa tầng. |