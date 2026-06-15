Dưới đây là bộ quiz trắc nghiệm 10 câu được thiết kế đầy đủ theo cấu trúc ma trận 3 mức độ (Nhận biết - Thông hiểu - Vận dụng) dựa trên nội dung bài giảng Ngày 3. Tài liệu được định dạng rõ ràng, chuẩn hóa để thầy/cô có thể dễ dàng in ấn, biên soạn phiếu bài tập hoặc copy-paste trực tiếp lên các nền tảng trực tuyến như Google Form, Microsoft Forms, Quizizz, Kahoot.

---

## BÀI KIỂM TRA ĐÁNH GIÁ: GOOGLE HACKING & WAYBACK MACHINE

*Thời gian làm bài: 15 phút — Số câu hỏi: 10 câu trắc nghiệm khách quan*

### PHẦN 1: MỨC ĐỘ NHẬN BIẾT (KIỂM TRA GHI NHỚ)

**Câu 1. Trong kỹ thuật Google Hacking, toán tử nào được sử dụng để giới hạn kết quả tìm kiếm duy nhất bên trong một trang web hoặc một đuôi miền cụ thể?**

A. `inurl:`

B. `site:`

C. `intitle:`

D. `filetype:`

**Câu 2. Cơ sở dữ liệu chứa hàng ngàn câu lệnh mẫu (Dork) được thiết kế sẵn để săn lùng lỗ hổng cấu hình sai trên Internet có tên gọi là gì?**

A. OWASP Top 10

B. Exploit Database

C. GHDB (Google Hacking Database)

D. NVD (National Vulnerability Database)

**Câu 3. Công cụ trực tuyến Wayback Machine (archive.org) được các chuyên gia bảo mật sử dụng chủ yếu vào mục đích gì trong giai đoạn trinh sát bị động?**

A. Tấn công từ chối dịch vụ vào máy chủ web cũ

B. Xem lại lịch sử và các bản chụp trạng thái của trang web trong quá khứ

C. Giải mã mật khẩu của các file cấu hình được tải xuống

D. Quét lỗ hổng bảo mật thời gian thực trên mã nguồn hiện tại

**Câu 4. Cú pháp nào sau đây bắt buộc Google lọc ra các trang có tiêu đề hiển thị chính xác chứa cụm từ "Index of"?**

A. `inurl:index of`

B. `site:"index of"`

C. `intext:index of`

D. `intitle:"index of"`

---

### PHẦN 2: MỨC ĐỘ THÔNG HIỂU (KIỂM TRA BẢN CHẤT)

**Câu 5. Tại sao Google Hacking/Dorking lại được phân loại vào nhóm kỹ thuật "Trinh sát bị động" (Passive Footprinting)?**

A. Vì hacker phải dùng các công cụ tự động dò quét mạnh như Nmap để thu thập dữ liệu

B. Vì mọi yêu cầu truy vấn đều gửi tới máy chủ của Google, hệ thống của nạn nhân hoàn toàn không biết và không thể ghi vết IP của hacker

C. Vì kỹ thuật này chỉ áp dụng được đối với các website đã ngừng hoạt động hoặc đã bị sập

D. Vì kỹ thuật này đòi hỏi sự cho phép và cấp quyền bằng văn bản thỏa thuận từ chủ quản hệ thống

**Câu 6. Khi thực hiện lệnh dork bảo mật phức tạp với tần suất liên tục trên trình duyệt, người học thường đối mặt với hiện tượng gì và nguyên nhân do đâu?**

A. Website mục tiêu bị sập do lệnh dork gửi quá nhiều gói tin độc hại

B. Máy tính người học bị nhiễm mã độc do Google tự động đẩy tệp tin về

C. Bị Google bắt giải mã Captcha liên tục do hệ thống nghi ngờ hành vi rà quét tự động của bot

D. Đường truyền Internet bị mất kết nối hoàn toàn do nhà mạng (ISP) chặn cổng

**Câu 7. Bản chất của file cấu hình hệ thống `robots.txt` đối với các cỗ máy tìm kiếm như Google là gì?**

A. Là một bức tường lửa mạnh mẽ có khả năng ngăn chặn hoàn toàn mọi cuộc tấn công khai thác của hacker

B. Là một bộ quy tắc mang tính "khuyến nghị" hướng dẫn các bot tìm kiếm biết khu vực nào được hoặc không được phép thu thập dữ liệu (index)

C. Là một chương trình mã hóa dữ liệu tự động các file nhạy cảm trên máy chủ

D. Là file mã nguồn điều hướng người dùng từ trang quản trị về trang chủ

---

### PHẦN 3: MỨC ĐỘ VẬN DỤNG (KIỂM TRA TÌNH HUỐNG THỰC TẾ)

**Câu 8. Bạn được giao nhiệm vụ rà soát nội bộ website cơ quan có tên miền `company.com` để tìm xem có tệp tin sao lưu cơ sở dữ liệu (`.sql` hoặc `.bak`) nào vô tình bị hiển thị công khai trên Internet hay không. Chuỗi lệnh nào sau đây thực hiện chính xác và tối ưu nhất yêu cầu trên?**

A. `company.com filetype:sql OR filetype:bak`

B. `site:company.com (filetype:sql OR filetype:bak)`

C. `intitle:company.com inurl:sql OR inurl:bak`

D. `site:company.com filetype:sql AND filetype:bak`

**Câu 9. Là một quản trị viên mạng, bạn phát hiện ra một file cấu hình chứa thông tin tài khoản admin cũ của công ty từng bị lộ công khai vào năm 2022. Hiện tại file đó đã được xóa hoàn toàn trên máy chủ web trực tuyến. Hành động nào sau đây là an toàn và đúng đắn nhất để phòng ngừa rủi ro trinh sát từ Wayback Machine?**

A. Không cần làm gì vì file đã được xóa trên website hiện tại, hacker không thể tải về được nữa

B. Liên hệ với tổ chức archive.org yêu cầu xóa bỏ lịch sử snapshot của website để đảm bảo an toàn

C. Đổi ngay lập tức toàn bộ mật khẩu hệ thống có liên quan đến thông tin trong file cũ đó, do dữ liệu quá khứ trên Wayback Machine vẫn có thể bị hacker khai thác

D. Viết lệnh chặn truy cập đối với tất cả người dùng sử dụng trình duyệt cũ

**Câu 10. Trong một buổi đánh giá an ninh mạng cho một trường đại học (`university.edu.vn`), một chuyên gia mũ trắng muốn kiểm tra xem hệ thống có bị lỗi cấu hình "Directory Listing" (lộ danh mục thư mục gốc trần trụi) hay không. Cú pháp nào dưới đây phản ánh đúng tư duy này?**

A. `site:university.edu.vn inurl:login`

B. `site:university.edu.vn filetype:pdf "danh sách"`

C. `site:university.edu.vn intitle:"index of"`

D. `intitle:university.edu.vn "index of"`

---

## ĐÁP ÁN CHI TIẾT & BÀI PHÂN TÍCH RATIONALE

*(Dành cho giáo viên/người chấm bài đối chiếu)*

* **Câu 1: Chọn B**
* *Vì sao đúng:* Toán tử `site:` ép Google chỉ tìm kiếm kết quả trong một miền cụ thể.
* *Vì sao các đáp án khác sai:* `inurl:` tìm trong đường dẫn; `intitle:` tìm trong tiêu đề; `filetype:` tìm định dạng file.


* **Câu 2: Chọn C**
* *Vì sao đúng:* GHDB viết tắt của Google Hacking Database, kho lưu trữ các dork tìm lỗi cấu hình của cộng đồng bảo mật thế giới.
* *Vì sao các đáp án khác sai:* OWASP Top 10 là danh mục lỗ hổng web; Exploit DB chứa mã khai thác phần mềm; NVD là kho lưu trữ lỗ hổng quốc gia.


* **Câu 3: Chọn B**
* *Vì sao đúng:* Wayback Machine là kho lưu trữ kỹ thuật số chụp lại trạng thái các website theo mốc thời gian lịch sử trong quá khứ.
* *Vì sao các đáp án khác sai:* Công cụ này chỉ đọc dữ liệu lịch sử lưu trữ tĩnh, không thể tương tác trực tiếp hay quét lỗ hổng thời gian thực/gây sập máy chủ mục tiêu.


* **Câu 4: Chọn D**
* *Vì sao đúng:* Cú pháp `intitle:` tìm từ khóa trong tiêu đề trang, và dấu ngoặc kép `""` giúp tìm chính xác cụm từ có khoảng cách `"index of"`.
* *Vì sao các đáp án khác sai:* Các phương án khác dùng sai toán tử tìm kiếm hoặc thiếu dấu ngoặc kép khiến kết quả trả về bị phân mảnh, không chính xác.


* **Câu 5: Chọn B**
* *Vì sao đúng:* Bản chất của trinh sát bị động là không tương tác trực tiếp với nạn nhân. Hacker gửi lệnh tới Google, Google trả kết quả thu thập từ trước, nên Firewall của nạn nhân không ghi nhận dấu vết tấn công.
* *Vì sao các đáp án khác sai:* Dùng Nmap là trinh sát chủ động; kỹ thuật áp dụng cho cả trang đang chạy; và trinh sát bị động thì không cần xin phép hệ thống.


* **Câu 6: Chọn C**
* *Vì sao đúng:* Khi nhận quá nhiều truy vấn phức tạp liên tục từ một IP, cơ chế chống cào dữ liệu (Anti-scrapping) của Google sẽ kích hoạt Captcha để xác minh người dùng không phải robot.
* *Vì sao các đáp án khác sai:* Hành động này không tương tác trực tiếp nên không làm sập trang đích, không tự tải mã độc và không khiến nhà mạng cắt Internet của bạn.


* **Câu 7: Chọn B**
* *Vì sao đúng:* `robots.txt` nằm trên thư mục gốc của website, chỉ có tác dụng hướng dẫn các bot tìm kiếm hợp pháp (như Googlebot) không lập chỉ mục các thư mục được chỉ định, mang tính tự nguyện phối hợp.
* *Vì sao các đáp án khác sai:* File này là file văn bản cấu hình thuần túy, không có tính năng kỹ thuật của tường lửa bảo mật, không mã hóa dữ liệu và không điều hướng người dùng.


* **Câu 8: Chọn B**
* *Vì sao đúng:* Cú pháp sử dụng đúng toán tử `site:` đi kèm dấu hai chấm viết liền tên miền, sử dụng dấu ngoặc đơn kết hợp toán tử logic `OR` để tìm kiếm đồng thời một trong hai định dạng tệp tin.
* *Vì sao các đáp án khác sai:* Câu A thiếu toán tử `site:`; câu C dùng sai toán tử mục tiêu; câu D dùng toán tử `AND` bắt buộc file phải vừa đuôi `.sql` vừa đuôi `.bak` cùng lúc (vô lý).


* **Câu 9: Chọn C**
* *Vì sao đúng:* Dù file đã xóa trên máy chủ thật, hacker vẫn có thể xem lại nội dung cũ trên Wayback Machine. Nếu thông tin đó chưa đổi (như mật khẩu dùng chung), hacker vẫn có thể đăng nhập. Do đó việc đổi mật khẩu ngay lập tức là hành động triệt tiêu rủi ro gốc.
* *Vì sao các đáp án khác sai:* Chủ quan không làm gì sẽ gặp nguy hiểm; yêu cầu archive.org gỡ lịch sử mất rất nhiều thời gian và không khả thi; chặn trình duyệt cũ không giải quyết được bài toán lộ mật khẩu.


* **Câu 10: Chọn C**
* *Vì sao đúng:* Chuỗi `"index of"` trong thẻ tiêu đề trang (`intitle:`) kết hợp với phạm vi trang trường đại học (`site:university.edu.vn`) giúp săn lùng chính xác lỗi Directory Listing của riêng mục tiêu đó.
* *Vì sao các đáp án khác sai:* Câu A tìm trang đăng nhập; câu B tìm file tài liệu; câu D thiếu toán tử `site:` nên sẽ quét lỗi này trên toàn thế giới thay vì tập trung vào trường đại học đích.



---

Chúc thầy/cô và các bạn học viên hoàn thành tốt bài kiểm tra Ngày 3 để làm bệ phóng vững chắc tiến vào giai đoạn Quét mạng (Scanning) tiếp theo!