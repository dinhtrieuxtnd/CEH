# 📝 BỘ QUIZ TRẮC NGHIỆM: NGÀY 14 – XÓA DẤU VẾT & CHE GIẤU TẬP TIN

## PHẦN 1: MỨC ĐỘ NHẬN BIẾT (4 Câu - Kiểm tra ghi nhớ dữ liệu)

### Câu 1: Sự khác biệt cốt lõi giữa Giấu tin (Steganography) và Mật mã học (Cryptography) là gì?

* A. Steganography làm nội dung thông điệp không thể đọc được, còn Cryptography giấu hoàn toàn sự tồn tại của thông điệp.
* B. Steganography che giấu sự tồn tại của thông điệp bí mật, còn Cryptography làm cho nội dung thông điệp không thể đọc được nếu không có khóa.
* C. Cryptography chỉ áp dụng cho văn bản, trong khi Steganography chỉ áp dụng được cho tệp tin hình ảnh `.jpg` hoặc `.png`.
* D. Cả hai kỹ thuật đều có mục đích giống nhau hoàn toàn và chỉ khác nhau ở tên gọi thuật ngữ qua các thời kỳ.

### Câu 2: Trong kỹ thuật giấu tin trên ảnh số, phương pháp LSB (Least Significant Bit) thực hiện can thiệp vào vị trí nào của chuỗi dữ liệu?

* A. Các bit đầu tiên (bit quan trọng nhất) của pixel màu.
* B. Toàn bộ cấu trúc metadata (Exif dữ liệu) của bức ảnh.
* C. Các bit cuối cùng (bit ít quan trọng nhất) của pixel màu.
* D. Phần tiêu đề (Header tệp tin) để mở rộng dung lượng ảnh.

### Câu 3: Trên hệ điều hành Windows, công cụ giao diện dòng lệnh (CLI) nào thường được quản trị viên hoặc kẻ tấn công sử dụng để quản lý và xóa bỏ các tệp tin Event Logs?

* A. `taskmgr`
* B. `wevtutil`
* C. `vssadmin`
* D. `netstat`

### Câu 4: Trên hệ điều hành Linux, nhật ký ghi lại lịch sử các lần đăng nhập (thành công lẫn thất bại) của người dùng thường được lưu trữ mặc định tại tệp tin nào?

* A. `/var/log/syslog`
* B. `/var/log/nginx/access.log`
* C. `/var/log/auth.log`
* D. `/var/log/cron`

---

## PHẦN 2: MỨC ĐỘ THÔNG HIỂU (3 Câu - Kiểm tra bản chất)

### Câu 5: Tại sao việc sử dụng lệnh `rm -rf /var/log/auth.log` trên Linux lại bị coi là một hành vi xóa dấu vết sai lầm của một hacker nghiệp dư?

* A. Vì lệnh này sẽ làm treo toàn bộ máy chủ và buộc hệ thống phải khởi động lại ngay lập tức.
* B. Vì tệp tin log sẽ biến mất hoàn toàn, gây ra lỗi ghi log của hệ thống và lập tức cảnh báo cho người quản trị qua sự bất thường này.
* C. Vì lệnh `rm` không có hiệu lực đối với các tệp tin nằm trong thư mục `/var/log`.
* D. Vì hệ thống Linux sẽ tự động sao lưu lại tệp tin vừa xóa vào thư mục `/backup` trong 1 giây.

### Câu 6: Một chuyên gia phân tích điều tra số (Forensics) sử dụng kỹ thuật Steganalysis bằng các thuật toán thống kê bit để làm gì?

* A. Để giải mã các chuỗi mật mã đối xứng như AES hoặc DES.
* B. Để khôi phục lại các tệp tin log hệ thống đã bị xóa bằng lệnh `wevtutil`.
* C. Để phát hiện sự thay đổi cấu trúc bit bất thường trong các tệp tin đa phương tiện nhằm xác định xem chúng có chứa dữ liệu ẩn hay không.
* D. Để tăng tốc độ truyền tải các tệp tin ảnh qua mạng nội bộ.

### Câu 7: Giải pháp phòng thủ "Centralized Logging" (Ghi log tập trung) hoạt động dựa trên nguyên lý nào để chống lại hành vi xóa log của kẻ tấn công?

* A. Mã hóa toàn bộ log trên máy cục bộ bằng thuật toán không thể giải mã để ngăn kẻ tấn công đọc dữ liệu log.
* B. Chuyển tiếp (forward) các dòng log theo thời gian thực về một máy chủ lưu trữ độc lập, khiến việc xóa log tại máy trạm bị chiếm quyền trở nên vô hiệu.
* C. Tự động ngắt kết nối mạng của máy chủ ngay khi phát hiện có ai đó cố gắng xem tệp tin nhật ký.
* D. Nhân bản tệp tin log thành hàng ngàn bản sao ẩn nằm rải rác trên các phân vùng ổ đĩa khác nhau của máy tính.

---

## PHẦN 3: MỨC ĐỘ VẬN DỤNG (3 Câu - Giải quyết tình huống thực tế)

### Câu 8: Bạn đang kiểm thử một hệ thống Linux và cần làm trống nội dung của file `/var/log/syslog` mà không xóa file, nhằm tránh kích hoạt cảnh báo hệ thống. Câu lệnh nào sau đây thực hiện đúng yêu cầu trên?

* A. `echo "delete" > /var/log/syslog`
* B. `cat /dev/null > /var/log/syslog`
* C. `history -c /var/log/syslog`
* D. `shred -u /var/log/syslog`

### Câu 9: Kẻ tấn công sử dụng công cụ Steghide để giấu một file văn bản vào một bức ảnh. Sau khi thực hiện, người quản trị mở bức ảnh bằng phần mềm xem ảnh thông thường thì điều gì sẽ xảy ra?

* A. Bức ảnh báo lỗi "Corrupted file" và không thể hiển thị nội dung hình ảnh.
* B. Bức ảnh hiển thị một cửa sổ yêu cầu nhập mật khẩu (passphrase) thì mới cho xem ảnh.
* C. Bức ảnh hiển thị hoàn toàn bình thường, mắt người không thể thấy sự khác biệt về màu sắc hay nội dung ẩn bên trong.
* D. Bức ảnh sẽ bị biến đổi thành một màn hình đen kèm theo các ký tự mã băm loằng ngoằng.

### Câu 10: Bạn là một Chuyên gia đánh giá an ninh (Pentester). Sau khi chiếm được quyền Admin trên một máy chủ Windows giả lập của khách hàng để thử nghiệm, hành động nào sau đây tuân thủ đúng đạo đức nghề nghiệp và quy trình chuẩn hóa?

* A. Xóa sạch sành sanh toàn bộ Event Logs và không báo cáo lại để chứng minh mình có khả năng ẩn mình tối cao.
* B. Ghi nhận lại chính xác mốc thời gian thực hiện các lệnh thử nghiệm, tiến hành xóa chọn lọc nếu có trong kịch bản và cung cấp đầy đủ nhật ký thao tác (Timeline) cho đội phòng thủ (Blue Team) của khách hàng để họ đối chiếu hệ thống cảnh báo.
* C. Cài đặt thêm một phần mềm giấu tin mã nguồn đóng không rõ nguồn gốc để giấu mã độc nằm vùng lâu dài mà không báo trước.
* D. Tải tệp nhật ký an ninh của khách hàng lên các diễn đàn công khai để nhờ cộng đồng mạng phân tích hộ.

---

# 🔑 ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT

* **Câu 1: Chọn B**
* *Tại sao đúng:* Cryptography (Mật mã) tập trung vào việc xáo trộn nội dung khiến người khác không đọc được, nhưng nhìn vào biết ngay là thư mật. Ngược lại, Steganography (Giấu tin) che giấu chính sự tồn tại của thông điệp dưới một lớp bọc vô hại.
* *Tại sao sai:* Các đáp án A, C, D đều phát biểu ngược tính chất hoặc đưa ra giới hạn sai về định dạng tệp tin (Stego giấu được cả trong âm thanh, video...).


* **Câu 2: Chọn C**
* *Tại sao đúng:* LSB (Bit ít quan trọng nhất) thay đổi các bit cuối của pixel màu. Sự thay đổi này chỉ làm biến đổi sắc độ màu cực kỳ nhỏ, mắt người không phát hiện được.
* *Tại sao sai:* Thay đổi bit đầu (A) sẽ phá vỡ hoàn toàn màu sắc gốc của ảnh. Thay đổi metadata (B) hay Header (D) không phải là nguyên lý của kỹ thuật LSB.


* **Câu 3: Chọn B**
* *Tại sao đúng:* `wevtutil` (Windows Event Utility) là lệnh CLI mặc định chuyên dụng trên Windows dùng để truy vấn, cài đặt, lưu hoặc xóa (clear-log) các bản ghi Event Logs.
* *Tại sao sai:* `taskmgr` là Quản lý tiến trình (Task Manager), `vssadmin` quản lý Volume Shadow Copy (sao lưu), còn `netstat` kiểm tra kết nối mạng.


* **Câu 4: Chọn C**
* *Tại sao đúng:* Trên các bản phân phối Linux như Ubuntu/Debian, tệp `/var/log/auth.log` chịu trách nhiệm lưu trữ thông tin xác thực hệ thống (Authentication Logs).
* *Tại sao sai:* `syslog` (A) lưu nhật ký chung của hệ thống, `nginx/access.log` (B) lưu truy cập web server, `cron` (D) lưu lịch sử các tác vụ tự động.


* **Câu 5: Chọn B**
* *Tại sao đúng:* Khi xóa hẳn file `auth.log`, các tiến trình dịch vụ đang chạy sẽ không tìm thấy file để ghi tiếp, hệ thống sẽ sinh lỗi nghiêm trọng và người quản trị (Sysadmin) sẽ phát hiện ra ngay lập tức một khoảng trống dữ liệu bất thường.
* *Tại sao sai:* Lệnh này không làm sập máy chủ (A), hoàn toàn có hiệu lực nếu chạy với quyền root (C), và Linux không tự động sao lưu theo kiểu chụp ảnh thời gian thực như đáp án D nói.


* **Câu 6: Chọn C**
* *Tại sao đúng:* Steganalysis là ngành khoa học phát hiện giấu tin. Các chuyên gia phân tích cấu trúc phân phối bit để tìm ra các điểm bất thường, chứng minh ảnh/nhạc có chứa mã độc hoặc thông tin ẩn.
* *Tại sao sai:* Nó không dùng để giải mã mật mã học (A), khôi phục log hệ thống (B) hay tăng tốc mạng (D).


* **Câu 7: Chọn B**
* *Tại sao đúng:* Centralized Logging giúp đẩy log về máy chủ SIEM tập trung. Khi hacker chiếm máy trạm và dùng quyền Admin để xóa log tại chỗ, bản sao log đã nằm ở SIEM từ trước đó và hacker không thể xóa được log trên SIEM nếu không chiếm được nốt máy chủ này.
* *Tại sao sai:* Các đáp án A, C, D đều mô tả sai cơ chế hoạt động thực tế của giải pháp ghi log tập trung.


* **Câu 8: Chọn B**
* *Tại sao đúng:* Lệnh `cat /dev/null > /var/log/syslog` truyền một luồng dữ liệu rỗng (null) vào file, đưa dung lượng file về 0 byte nhưng giữ nguyên sự tồn tại và quyền hạn (permissions) của file, giúp che giấu hành vi hoàn hảo.
* *Tại sao sai:* Lệnh (A) sẽ ghi chữ "delete" vào file, lệnh (C) dùng sai cú pháp xóa lịch sử command, lệnh (D) dùng để xóa và ghi đè hủy diệt file (file sẽ mất).


* **Câu 9: Chọn C**
* *Tại sao đúng:* Đây là đặc trưng tối thượng của Steganography. File ảnh đầu ra (`stego_image.jpg`) vẫn là một file ảnh chuẩn, hiển thị bình thường trên mọi trình xem ảnh mà không đòi hỏi mật khẩu hay bị lỗi hiển thị. Mật khẩu chỉ yêu cầu khi chạy lệnh trích xuất dữ liệu (`extract`).
* *Tại sao sai:* Các đáp án A, B, D đều làm lộ việc file bị can thiệp, đi ngược lại định nghĩa "che giấu sự tồn tại".


* **Câu 10: Chọn B**
* *Tại sao đúng:* Một Pentester mũ trắng luôn phải ghi lại "Timeline hành động" để báo cáo và giúp khách hàng đối chiếu, cải thiện năng lực phát hiện của hệ thống (Blue Team).
* *Tại sao sai:* Hành vi (A) và (C) mang tính chất phá hoại của mũ đen. Hành vi (D) vi phạm nghiêm trọng thỏa thuận bảo mật dữ liệu khách hàng (NDA).



---

Chúc bạn có một buổi thực hành và ôn tập **Ngày 14** thật hiệu quả! Đừng ngần ngại yêu cầu nếu bạn cần hỗ trợ thiết lập bài Lab giả lập cụ thể cho các nội dung kế tiếp!