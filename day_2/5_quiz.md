Dưới đây là bộ quiz 10 câu trắc nghiệm được thiết kế theo đúng lộ trình và kiến thức của **NGÀY 2: "Săn tin" Chủ động & Bị động (Footprinting Concepts)**. Bộ câu hỏi được phân loại theo 3 cấp độ nhận thức, có kèm đáp án và giải thích chi tiết, rất thuận tiện để thầy/cô copy lên Google Form, Quizizz hoặc in ra giấy cho học sinh làm bài.

---

### MỨC ĐỘ 1: NHẬN BIẾT (4 CÂU)

**Câu 1: Mục tiêu lớn nhất của giai đoạn Footprinting trong quy trình kiểm thử xâm nhập (Penetration Testing) là gì?**

* A. Khai thác thành công lỗ hổng để chiếm quyền điều khiển hệ thống.
* B. Tạo ra một hồ sơ dữ liệu chi tiết và toàn diện về mục tiêu (Target Profile).
* C. Xóa bỏ hoàn toàn các file nhật ký (Log files) để ẩn mình trên máy chủ.
* D. Cài đặt các phần mềm độc hại (Malware) vào mạng nội bộ của nạn nhân.

**Câu 2: Ranh giới cốt lõi để phân biệt giữa Trinh sát Bị động (Passive Footprinting) và Trinh sát Chủ động (Active Footprinting) là gì?**

* A. Thời gian diễn ra cuộc tấn công là ban ngày hay ban đêm.
* B. Việc kẻ tấn công có sử dụng hệ điều hành Linux hay không.
* C. Việc có thực hiện tương tác và gửi gói tin trực tiếp đến hạ tầng của mục tiêu hay không.
* D. Số lượng thành viên tham gia vào chiến dịch thu thập thông tin công ty.

**Câu 3: Đâu là một nguồn thông tin điển hình được khai thác trong quá trình Passive Footprinting?**

* A. Các gói tin phản hồi từ lệnh quét cổng Nmap.
* B. Nhật ký lưu vết truy cập (Access Log) trên Tường lửa của mục tiêu.
* C. Các bài đăng tuyển dụng kỹ sư và hồ sơ nhân sự công khai trên LinkedIn.
* D. Dữ liệu cấu hình banner thu được khi kết nối trực tiếp vào cổng 80 (HTTP).

**Câu 4: Khi thực hiện tra cứu WHOIS đối với một tên miền (Domain Name), kỹ sư an ninh mạng KHÔNG THỂ thu thập trực tiếp thông tin nào sau đây?**

* A. Tên nhà đăng ký tên miền (Registrar).
* B. Ngày đăng ký và ngày hết hạn của tên miền.
* C. Địa chỉ máy chủ phân giải tên miền (Name Servers - NS).
* D. Danh sách các lỗ hổng bảo mật chưa vá trên máy chủ Web của mục tiêu.

---

### MỨC ĐỘ 2: THÔNG HIỂU (3 CÂU)

**Câu 5: Tại sao Trinh sát Bị động (Passive Footprinting) lại được coi là phương pháp an toàn tuyệt đối cho người thực hiện?**

* A. Vì phương pháp này tự động mã hóa mọi dữ liệu tải về máy tính cá nhân.
* B. Vì người thực hiện chỉ tương tác với bên thứ ba hoặc nguồn công khai, hệ thống phòng thủ của mục tiêu không hề nhận được gói tin thăm dò nào để ghi vết.
* C. Vì luật pháp quốc tế quy định không được phép lưu log đối với các truy cập công khai.
* D. Vì các công cụ bị động luôn có khả năng tự động bẻ khóa Tường lửa (Firewall) của mục tiêu.

**Câu 6: Một kỹ sư an ninh mạng sử dụng công cụ Wayback Machine (archive.org) nhằm mục đích gì trong giai đoạn thu thập thông tin?**

* A. Để tấn công từ chối dịch vụ (DDoS) làm sập website của mục tiêu.
* B. Để tìm kiếm các lỗ hổng SQL Injection đang tồn tại trên trang web hiện tại.
* C. Để kiểm tra lịch sử, cấu trúc trang web hoặc các tài liệu, thông tin liên hệ cũ từng được đăng tải công khai nhưng hiện tại đã bị gỡ bỏ.
* D. Để tăng tốc độ tải trang và tối ưu hóa SEO cho website của công ty mình.

**Câu 7: Dưới góc nhìn của một Hacker Mũ Trắng, việc thực hiện chiến dịch Footprinting lên chính hệ thống doanh nghiệp của mình mang lại lợi ích cốt lõi nào?**

* A. Giúp chứng minh cho ban giám đốc thấy hệ thống hoàn toàn không thể bị tấn công.
* B. Xác định chính xác "Bề mặt tấn công" (Attack Surface) công khai mà thế giới bên ngoài nhìn thấy, từ đó chủ động thu hẹp và vá các vùng thông tin lộ lọt.
* C. Giúp kiểm tra hiệu suất làm việc và tốc độ gõ phím của các nhân viên IT trong phòng.
* D. Tự động hóa quy trình sao lưu (Backup) dữ liệu định kỳ cho máy chủ kế toán.

---

### MỨC ĐỘ 3: VẬN DỤNG (3 CÂU)

**Câu 8: Tình huống: Kỹ sư A được giao nhiệm vụ thu thập dải IP và sơ đồ hạ tầng số của công ty đối thủ nhưng yêu cầu đặt ra là "tuyệt đối không được kích hoạt các cảnh báo trên hệ thống phát hiện xâm nhập (IDS) của họ". Kỹ sư A nên chọn chuỗi hành động nào?**

* A. Sử dụng phần mềm Nmap quét toàn bộ các cổng từ 1 đến 65535 của IP máy chủ chính.
* B. Sử dụng các công cụ tra cứu bản ghi DNS công khai và dịch vụ bên thứ ba như `dnsdumpster.com` để phân tích dữ liệu đã lưu trữ sẵn trên Internet.
* C. Gửi liên tục các gói tin Ping (ICMP) với dung lượng lớn đến trang web của đối thủ.
* D. Viết một đoạn mã (Script) để liên tục đăng nhập thử (Brute-force) vào trang quản trị của họ.

**Câu 9: Tình huống: Trong một bài đăng tuyển dụng vị trí "Chuyên viên quản trị hệ thống", công ty X ghi rõ yêu cầu: "Có kinh nghiệm cấu hình thiết bị Firewall Fortinet, quản trị hệ điều hành Windows Server 2019 và ảo hóa VMware". Hành vi này vô tình tạo ra nguy cơ gì dưới góc độ An ninh thông tin?**

* A. Không có nguy cơ nào vì đây là các thông tin tuyển dụng bắt buộc phải công khai.
* B. Làm lộ lọt sơ đồ mật khẩu nội bộ của hệ thống máy chủ.
* C. Giúp kẻ tấn công thu hẹp phạm vi nghiên cứu, tập trung tìm kiếm các lỗ hổng bảo mật cụ thể (Exploits) nhắm riêng vào Fortinet, Windows Server 2019 và VMware để lên kịch bản tấn công.
* D. Làm giảm uy tín của công ty vì sử dụng các công nghệ lỗi thời trên thị trường.

**Câu 10: Tình huống: Kỹ sư B thực hiện lệnh `nslookup` đối với tên miền `target.com` và nhận được kết quả trả về là địa chỉ IPv4 `192.0.2.1`. Nhận định nào sau đây về hành động này là ĐÚNG nhất theo lý thuyết CEH?**

* A. Đây là hành vi tấn công phá hoại tài nguyên mạng trực tiếp.
* B. Đây là hành vi Trinh sát Bị động (Passive) vì lệnh này chỉ truy vấn thông tin từ máy chủ DNS công cộng chứ không gửi gói tin tấn công vào máy chủ `192.0.2.1`.
* C. Kỹ sư B chắc chắn sẽ bị hệ thống IDS của `target.com` chặn IP ngay lập tức.
* D. Lệnh này giúp kỹ sư B lấy được toàn bộ mật khẩu của người quản trị tên miền.

---

## DÁNH SÁCH ĐÁP ÁN & GIẢI THÍCH CHI TIẾT

**Câu 1:**

* **Đáp án đúng:** **B**
* **Giải thích:** Footprinting là bước trinh sát, mục tiêu là xây dựng hồ sơ (Target Profile). Đáp án A, C, D thuộc về các giai đoạn sau như Khai thác (Gaining Access) và Xóa dấu vết (Clearing Logs).

**Câu 2:**

* **Đáp án đúng:** **C**
* **Giải thích:** Sự tương tác trực tiếp với mục tiêu là tiêu chí phân loại duy nhất. Có tương tác là Active (Chủ động), không tương tác (qua bên thứ ba/nguồn công khai) là Passive (Bị động). Các đáp án A, B, D không liên quan đến bản chất kỹ thuật.

**Câu 3:**

* **Đáp án đúng:** **C**
* **Giải thích:** LinkedIn là nguồn thông tin công khai do bên thứ ba lưu trữ, việc đọc nó không chạm vào mục tiêu nên là Passive. Đáp án A, B, D đều yêu cầu phải kết nối hoặc để lại dấu vết trên thiết bị của mục tiêu (Active).

**Câu 4:**

* **Đáp án đúng:** **D**
* **Giải thích:** Dữ liệu WHOIS chỉ chứa thông tin đăng ký sở hữu và thông tin mạng cơ bản (Registrar, NS, ngày tháng). Muốn tìm lỗ hổng hệ thống (Đáp án D), hacker phải thực hiện giai đoạn Quét lỗ hổng (Vulnerability Assessment) ở các ngày học sau.

**Câu 5:**

* **Đáp án đúng:** **B**
* **Giải thích:** Hệ thống phòng thủ của mục tiêu chỉ ghi log khi có gói tin gửi trực tiếp đến nó. Khi trinh sát bị động, hacker truy cập qua Google, WHOIS, LinkedIn nên mục tiêu hoàn toàn "vô hình" trước hành vi này. Các đáp án khác sai về mặt nguyên lý kỹ thuật.

**Câu 6:**

* **Đáp án đúng:** **C**
* **Giải thích:** Wayback Machine hoạt động như một thư viện lưu trữ ảnh chụp màn hình và mã nguồn web trong quá khứ, giúp thu thập thông tin rò rỉ cũ. Nó không phải công cụ tấn công (A), không quét lỗ hổng code (B) và không tối ưu SEO (D).

**Câu 7:**

* **Đáp án đúng:** **B**
* **Giải thích:** Mục tiêu của Mũ Trắng khi làm Footprinting là nhìn hệ thống dưới lăng kính của kẻ tấn công để biết "Bề mặt tấn công" đang rộng thế nào và chủ động thu hẹp nó. Đáp án A mang tính chủ quan phi thực tế, C và D sai chức năng.

**Câu 8:**

* **Đáp án đúng:** **B**
* **Giải thích:** Để không kích hoạt IDS, phải dùng Passive Footprinting. `dnsdumpster.com` là công cụ bị động thu thập qua bên thứ ba nên an toàn. Các đáp án A, C, D đều gửi lượng lớn gói tin trực tiếp đến mục tiêu, chắc chắn sẽ bị IDS phát hiện và chặn.

**Câu 9:**

* **Đáp án đúng:** **C**
* **Giải thích:** Thông tin tuyển dụng chi tiết vô tình cung cấp cho hacker danh mục công nghệ (Hệ điều hành, Firewall, Ảo hóa) đang dùng. Hacker sẽ không mất thời gian dò tìm nữa mà tập trung tìm các mã khai thác (Exploit) cho các phiên bản đó. Đáp án A, B, D sai bản chất an ninh thông tin.

**Câu 10:**

* **Đáp án đúng:** **B**
* **Giải thích:** Lệnh `nslookup` gửi yêu cầu đến các máy chủ DNS công cộng (như của Google 8.8.8.8 hoặc nhà mạng) để hỏi xem tên miền này tương ứng với IP nào. Nó hoàn toàn không tương tác hay gửi gói tin nào đến máy chủ `192.0.2.1` của mục tiêu, do đó hệ thống của mục tiêu không hề biết và không thể chặn (loại C). Nó cũng không phải lệnh phá hoại (loại A) hay lấy mật khẩu (loại D).