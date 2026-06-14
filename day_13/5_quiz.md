Dưới đây là bộ câu hỏi trắc nghiệm gồm 10 câu được thiết kế chi tiết theo các cấp độ Nhận biết, Thông hiểu và Vận dụng dựa trên nội dung bài giảng **NGÀY 13: Leo thang đặc quyền & Chiếm quyền kiểm soát** (chuẩn kiến thức CEH). Bộ câu hỏi kèm theo đáp án và giải thích chi tiết, phù hợp để in ấn hoặc đưa lên Google Form/Quizizz.

---

### PHẦN 1: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

#### Câu 1: Hành vi một người dùng tìm cách truy cập trái phép vào tài nguyên hoặc chức năng của một tài khoản khác có cùng mức độ phân quyền trong hệ thống được gọi là gì?

A. Vertical Privilege Escalation

B. Horizontal Privilege Escalation

C. Kernel Exploitation

D. Local Reconnaissance

* **Đáp án đúng:** B
* **Giải thích:** * *Vì sao đúng:* Leo thang đặc quyền hàng ngang (Horizontal Privilege Escalation) là hình thức hacker chiếm quyền kiểm soát tài khoản của người dùng khác có cùng mức đặc quyền/phân quyền.
* *Vì sao các đáp án khác sai:* A sai vì Vertical là leo thang hàng dọc (quy quyền thấp lên quyền cao hơn). C là kỹ thuật khai thác hạt nhân. D là giai đoạn trinh sát nội bộ.



#### Câu 2: Trong hệ điều hành Linux, một file thực thi được thiết lập thuộc tính đặc biệt nào dưới đây sẽ chạy với quyền của chủ sở hữu file (thường là root) thay vì quyền của người dùng hiện tại?

A. Sticky Bit

B. Read/Write Command

C. SUID (Set User ID)

D. SGID (Set Group ID)

* **Đáp án đúng:** C
* **Giải thích:** * *Vì sao đúng:* Thuộc tính SUID (Set User ID) cho phép một tệp tin thực thi được chạy với đặc quyền của chủ sở hữu tệp tin đó (thường là tài khoản quản trị tối cao root).
* *Vì sao các đáp án khác sai:* A dùng để bảo vệ thư mục chung khỏi bị xóa bừa bãi. B chỉ là quyền đọc/ghi thông thường. D (SGID) cho phép thừa hưởng quyền hạn của nhóm (Group) chứ không phải cá nhân chủ sở hữu (User).



#### Câu 3: Nguyên tắc bảo mật cốt lõi nào yêu cầu hệ thống chỉ cấp vừa đủ quyền hạn để một người dùng hoặc ứng dụng hoàn thành công việc của họ?

A. Separation of Duties

B. Defense in Depth

C. Least Privilege

D. Trust but Verify

* **Đáp án đúng:** C
* **Giải thích:** * *Vì sao đúng:* Nguyên tắc đặc quyền tối thiểu (Least Privilege) là lá chắn phòng thủ tốt nhất chống lại việc leo thang đặc quyền vì nó hạn chế tối đa phạm vi quyền lực ban đầu của các tài khoản thường.
* *Vì sao các đáp án khác sai:* A là nguyên tắc tách biệt nghĩa vụ công việc. B là phòng thủ chiều sâu nhiều lớp. D là tư duy kiểm thử xác minh.



#### Câu 4: Kỹ thuật leo thang đặc quyền nào tác động trực tiếp vào lõi hệ điều hành nhằm đánh lừa cơ chế kiểm soát quyền hạn để chiếm quyền Administrator hoặc Root?

A. Kernel Exploitation

B. Misconfiguration Exploitation

C. Buffer Overflow Application Attacks

D. Clear-text Password Hunting

* **Đáp án đúng:** A
* **Giải thích:** * *Vì sao đúng:* Kernel Exploitation (Khai thác lỗi hạt nhân) nhắm thẳng vào phần lõi của OS (Windows/Linux) để vượt qua ranh giới tin cậy nhằm đạt đặc quyền cao nhất.
* *Vì sao các đáp án khác sai:* B nhắm vào lỗi cấu hình do con người. C nhắm vào ứng dụng bên thứ ba. D nhắm vào việc tìm kiếm mật khẩu lưu thô.



---

### PHẦN 2: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

#### Câu 5: Tại sao việc sử dụng các mã khai thác hạt nhân (Kernel Exploits) tải từ Internet để thực hiện leo thang đặc quyền lại được coi là giải pháp nguy hiểm nhất trong môi trường doanh nghiệp?

A. Vì các mã khai thác này thường yêu cầu phải có kết nối Internet trực tiếp ra bên ngoài khi chạy.

B. Vì mã khai thác Kernel hoạt động ở chế độ User Mode nên không có đủ quyền thực thi.

C. Vì mã khai thác Kernel tác động thô vào lõi hệ thống, dễ gây lỗi màn hình xanh (BSOD) hoặc sập toàn bộ máy chủ dịch vụ.

D. Vì các công cụ quét tự động như LinPeas sẽ tự động chặn các file thực thi này.

* **Đáp án đúng:** C
* **Giải thích:** * *Vì sao đúng:* Mã khai thác lỗi lõi hệ thống rất không ổn định nếu không trùng khớp chính xác 100% phiên bản hệ điều hành và các hotfix, dễ khiến hệ thống máy chủ bị treo cứng (Kernel Panic/BSOD) làm gián đoạn vận hành của doanh nghiệp.
* *Vì sao các đáp án khác sai:* A sai vì mã khai thác có thể chạy offline tại chỗ. B sai vì Kernel Exploit chạy nhằm mục đích nhảy từ User Mode vào Kernel Mode. D sai vì LinPeas chỉ là script liệt kê lỗi cấu hình chứ không phải phần mềm diệt virus bảo mật để chặn file.



#### Câu 6: Dưới góc nhìn quản trị an ninh mạng, hiện tượng "Leo thang đặc quyền hàng dọc" xảy ra chủ yếu phản ánh sự yếu kém nào trong quy trình quản lý?

A. Hệ thống tường lửa (Firewall) bảo vệ vòng ngoài bị cấu hình sai cổng kết nối công khai.

B. Sự lười biếng hoặc thiếu quy trình trong việc phân cấp quyền hạn, để ranh giới tin cậy (Trust Boundary) giữa tài khoản thường và tài khoản Admin bị mờ nhạt hoặc quá lỏng lẻo.

C. Nhân viên trong công ty không được đào tạo kỹ năng nhận diện các email lừa đảo (Phishing).

D. Hệ thống máy chủ thiếu băng thông xử lý khi có lưu lượng lớn từ bên ngoài truy cập vào.

* **Đáp án đúng:** B
* **Giải thích:** * *Vì sao đúng:* Leo thang đặc quyền là lỗi kiểm soát nội bộ (Local/Internal Boundary). Người quản trị lười cấp quyền chi tiết nên thường cho tài khoản thường mượn quyền Admin hoặc để cấu hình sai cho phép ghi đè dịch vụ hệ thống.
* *Vì sao các đáp án khác sai:* A và C liên quan đến giai đoạn thâm nhập ban đầu (Initial Access) bên ngoài chứ không phản ánh bản chất bảo mật nội bộ sau khi đã vào máy. D là vấn đề hạ tầng chống DoS.



#### Câu 7: Khi một hacker thu được Reverse Shell với tư cách là tài khoản dịch vụ web thấp (như `www-data` trên Linux hoặc `iis_iusrs` trên Windows), bước đi logic tiếp theo mà hacker CẦN THỰC HIỆN TRƯỚC KHI chạy mã độc là gì?

A. Thực hiện xóa toàn bộ các file log hệ thống để xóa dấu vết ngay lập tức.

B. Thực hiện trinh sát nội bộ (Local Enumeration) để thu thập thông tin về phiên bản OS, cấu hình quyền hạn, dịch vụ chạy ngầm và các bản vá lỗi bị thiếu.

C. Tiến hành tấn công từ chối dịch vụ (DoS) để làm treo máy chủ nhằm kích hoạt quyền Admin dự phòng.

D. Gửi các file cấu hình chứa mật khẩu thô lên các kho lưu trữ công khai như GitHub.

* **Đáp án đúng:** B
* **Giải thích:** * *Vì sao đúng:* Nguyên tắc an toàn thông tin là không thể tấn công mù quáng. Hacker phải hiểu rõ mình đang ở đâu, hệ thống thiếu bản vá gì, có lỗi cấu hình nào (Local Enumeration) thì mới chọn đúng phương án leo thang đặc quyền hợp lý.
* *Vì sao các đáp án khác sai:* A sai vì tài khoản quyền thấp hoàn toàn không đủ đặc quyền để xóa file log hệ thống. C sai vì DoS gây sập máy sẽ làm mất kết nối shell hiện tại. D vô lý và không phục vụ mục đích chiếm quyền.



---

### PHẦN 3: MỨC ĐỘ VẬN DỤNG (3 CÂU)

#### Câu 8: Một chuyên gia đánh giá an ninh mạng (Pen-tester) thực hiện lệnh tìm kiếm các file có quyền SUID trên máy chủ Linux của khách hàng và nhận được kết quả như sau: Trình chỉnh sửa văn bản `/usr/bin/nano` có thuộc tính quyền là `-rwsr-xr-x` và chủ sở hữu là `root`. Tình huống này mở ra hướng khai thác leo thang đặc quyền như thế nào?

A. Vô vọng, vì trình chỉnh sửa `nano` không thể thực thi lệnh hệ thống mà chỉ dùng để đọc chữ thuần túy.

B. Chuyên gia có thể mở `nano` để chỉnh sửa file cấu hình nhạy cảm `/etc/passwd` hoặc lợi dụng tính năng thực thi lệnh của `nano` để gọi ra một Shell mới trực tiếp thừa hưởng quyền `root`.

C. Lỗ hổng này chỉ cho phép leo thang đặc quyền hàng ngang sang một tài khoản user thường khác chứ không lên root được.

D. Chuyên gia buộc phải tải một công cụ bẻ khóa mật khẩu tự động về máy để crack mật khẩu root thông qua giao diện của nano.

* **Đáp án đúng:** B
* **Giải thích:** * *Vì sao đúng:* Ký tự `s` trong thuộc tính `-rwsr-xr-x` xác nhận file `nano` chạy với quyền của chủ sở hữu (`root`). Vì `nano` cho phép biên tập văn bản hoặc gọi shell lệnh, bất kỳ ai dùng nó cũng có thể chỉnh sửa file hệ thống trọng yếu hoặc đẻ ra một shell con mang quyền root tối cao.
* *Vì sao các đáp án khác sai:* A sai vì nano hoàn toàn cấu hình gọi lệnh được. C sai vì nó thừa hưởng quyền của root (chủ sở hữu file) nên là hàng dọc lên thẳng root. D sai cấu trúc kỹ thuật.



#### Câu 9: Trong quá trình kiểm thử an ninh máy chủ Windows, bạn phát hiện một dịch vụ bên thứ ba (Dịch vụ Backup dữ liệu) đang chạy ngầm với đặc quyền tài khoản `NT AUTHORITY\SYSTEM`. Tuy nhiên, thư mục cài đặt phần mềm này (`C:\Program Files\BackupTool\`) lại được cấu hình cấp quyền `Everyone: Full Control` (Cho phép mọi người dùng chỉnh sửa, ghi đè file). Bạn sẽ áp dụng kỹ thuật nào để chiếm quyền điều khiển máy chủ này?

A. Sử dụng kỹ thuật SQL Injection để lấy bảng dữ liệu mật khẩu.

B. Tạo một file thực thi độc hại (Reverse Shell) trùng tên với file chạy của dịch vụ Backup, ghi đè nó vào thư mục cài đặt, sau đó kích hoạt khởi động lại dịch vụ hoặc máy tính để hệ thống tự động chạy mã độc với quyền SYSTEM.

C. Chạy lệnh quét cổng Nmap hung hãn để ép dịch vụ Backup phải đổi mật khẩu về mặc định.

D. Tiến hành leo thang đặc quyền hàng ngang để chuyển sang tài khoản của một nhân viên phòng nhân sự.

* **Đáp án đúng:** B
* **Giải thích:** * *Vì sao đúng:* Đây là kỹ thuật tấn công chèn/ghi đè file dịch vụ cấu hình sai (Service File Permission / Weak Folder Permission). Vì tài khoản thường có quyền ghi đè (`Full Control`) vào thư mục ứng dụng chạy quyền cao (`SYSTEM`), ta chỉ cần tráo đổi file thực thi hợp lệ bằng file mã độc của ta để mượn tay hệ thống chạy nó dưới quyền tối cao.
* *Vì sao các đáp án khác sai:* A không liên quan đến cấu hình quyền thư mục hệ thống. C không có tác dụng thay đổi mật khẩu dịch vụ Windows qua quét cổng. D sai mục tiêu vì đích đến ở đây là quyền tối cao SYSTEM (Hàng dọc).



#### Câu 10: Sau khi thực hiện kiểm thử thành công và chiếm được quyền quản trị cao nhất trên máy chủ Linux của một ngân hàng thông qua lỗi cấu hình SUID, hành động nào sau đây thể hiện đúng đạo đức nghề nghiệp và quy trình chuẩn của một Ethical Hacker?

A. Giữ nguyên tài khoản backdoor vừa tạo để tiện cho việc truy cập tự do sau này mà không cần báo cáo khách hàng.

B. Ghi chép lại chi tiết lỗ hổng, dọn dẹp sạch sẽ các file rác/mã độc đã tải lên thư mục tạm `/tmp`, khôi phục cấu hình file SUID về trạng thái an toàn ban đầu và viết báo cáo kiến nghị vá lỗi cho khách hàng.

C. Ngay lập tức công khai thông tin lỗi cấu hình SUID của máy chủ này lên mạng xã hội để cảnh báo cộng đồng.

D. Cài đặt thêm phần mềm đào tiền ảo ngầm trên máy chủ để tận dụng tài nguyên dư thừa của ngân hàng.

* **Đáp án đúng:** B
* **Giải thích:** * *Vì sao đúng:* Đạo đức của một Hacker mũ trắng (Ethical Hacker) bắt buộc phải dọn dẹp hệ thống (Clean up) để tránh để lại "rác" hay lỗ hổng mới cho hacker mũ đen lợi dụng, khôi phục nguyên trạng hệ thống và báo cáo bảo mật chính thống để tổ chức khắc phục.
* *Vì sao các đáp án khác sai:* A, C, D đều vi phạm nghiêm trọng đạo đức nghề nghiệp, quy định pháp lý quốc tế và thỏa thuận bảo mật thông tin (NDA) ký kết với doanh nghiệp.



---

Bây giờ em có thể bắt đầu làm bài quiz để tự đánh giá mức độ tiếp thu kiến thức của mình rồi. Hãy bình tĩnh phân tích từng câu lệnh, thấu hiểu ranh giới tin cậy của hệ thống. Chúc em đạt kết quả thật cao!