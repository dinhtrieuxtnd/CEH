# BỘ QUIZ TRẮC NGHIỆM: NGÀY 16 – PHÂN TÍCH MÃ ĐỘC CƠ BẢN (MALWARE ANALYSIS)

**Môn học:** Ethical Hacking (Chuẩn kiến thức CEH v11)

**Số lượng:** 10 câu hỏi trắc nghiệm

---

## PHẦN 1: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

**Câu 1: Thuật ngữ nào sau đây dùng để chỉ phương pháp mổ xẻ, phân tích cấu trúc cấu tạo bên trong của một tệp tin độc hại mà tuyệt đối KHÔNG khởi chạy hay thực thi tệp tin đó?**

* A. Dynamic Analysis (Phân tích động)

* B. Live Monitoring (Giám sát trực tiếp)

* C. Static Analysis (Phân tích tĩnh)

* D. Behavioral Analysis (Phân tích hành vi)

**Đáp án đúng:** C
* **Giải thích tại sao đúng:** Theo lý thuyết chuẩn, Static Analysis (Phân tích tĩnh) là việc kiểm tra mã nguồn, chuỗi ký tự, chứng chỉ hoặc cấu trúc file băm khi file đang ở trạng thái đứng yên, không kích hoạt thực thi.
* **Giải thích tại sao các đáp án khác sai:** A và D đều là các thuật ngữ mô tả việc cho phép file chạy để theo dõi hành vi trực tiếp. B là một khái niệm chung chung về giám sát, không phải tên phương pháp phân tích.

**Câu 2: Mục đích chính của việc trích xuất và kiểm tra giá trị băm (Hash value) như MD5, SHA1 hay SHA256 của một tệp tin nghi ngờ là gì?**

* A. Để theo dõi xem file đó chỉnh sửa những khóa Registry nào của Windows.

* B. Trích xuất "dấu vân tay số" độc nhất nhằm đối chiếu nhanh với cơ sở dữ liệu mã độc toàn cầu.

* C. Để dịch ngược hoàn toàn tệp tin từ mã máy (Binary) trở lại thành mã nguồn gốc (Source code).

* D. Đóng gói mã độc lại thành một định dạng an toàn hơn để gửi qua môi trường Internet.

**Đáp án đúng:** B
* **Giải thích tại sao đúng:** Mã băm hoạt động như một thuật toán sinh ra chuỗi định danh duy nhất (vân tay số) cho từng tệp dữ liệu. Chuyên gia dùng chuỗi này tra cứu trên hệ thống như VirusTotal để nhận diện mã độc đã biết trong vài giây.
* **Giải thích tại sao các đáp án khác sai:** A thuộc về kết quả của phân tích động. C là kỹ thuật Reverse Engineering (Kỹ nghệ đảo ngược), không phải chức năng của mã băm. D sai vì mã băm chỉ là một chuỗi ký tự đại diện cho file chứ không có chức năng đóng gói file.

**Câu 3: Trong an ninh mạng, một môi trường máy tính ảo được cấu hình hoàn toàn cô lập, tách biệt với hệ điều hành máy thật và mạng nội bộ để chuyên phục vụ việc kích nổ và quan sát mã độc được gọi là gì?**

* A. Honeypot

* B. Sandbox

* C. Firewall

* D. DMZ (Demilitarized Zone)

**Đáp án đúng:** B
* **Giải thích tại sao đúng:** Sandbox (Hộp cát) là thuật ngữ kỹ thuật tiêu chuẩn chỉ môi trường ảo hóa biệt lập an toàn, cho phép chạy thử nghiệm các tệp có nguy cơ độc hại mà không làm lây lan ra ngoài.
* **Giải thích tại sao các đáp án khác sai:** A là hệ thống bẫy nhử hacker. C là tường lửa để chặn lọc lưu lượng mạng. D là vùng mạng trung gian giữa mạng nội bộ và Internet.

**Câu 4: Nền tảng trực tuyến miễn phí nào sau đây được cộng đồng bảo mật sử dụng phổ biến nhất để quét tệp tin hoặc tra cứu nhanh mã băm (Hash) dựa trên sự tổng hợp của hơn 70 trình diệt virus lớn trên thế giới?**

* A. Github

* B. Any.Run

* C. VirusTotal

* D. Wireshark

**Đáp án đúng:** C
* **Giải thích tại sao đúng:** VirusTotal là website nổi tiếng nhất thế giới chuyên cung cấp giải pháp kiểm tra mã băm và tệp tin tự động bằng cách tổng hợp dữ liệu từ hàng loạt hãng diệt virus lớn.
* **Giải thích tại sao các đáp án khác sai:** A là kho lưu trữ mã nguồn. B là một Sandbox tương tác trực quan (không phải bộ tổng hợp kết quả của 70 trình quét virus). D là công cụ phân tích gói tin mạng chuyên sâu.

---

## PHẦN 2: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

**Câu 5: Tại sao việc thay đổi dù chỉ một dấu chấm hoặc một ký tự nhỏ trong tệp tin văn bản chứa hàng triệu từ lại làm thay đổi hoàn toàn chuỗi mã băm SHA256 của tệp tin đó?**

* A. Do thuật toán băm tự động mã hóa tệp tin dựa trên thời gian thực tế của hệ thống.

* B. Do tính chất nhạy bén cao của hiệu ứng tuyết lở (Avalanche Effect) trong các thuật toán băm mã nguồn.

* C. Do tệp tin khi bị sửa đổi sẽ tự động kích hoạt tính năng chống phân tích tĩnh của hệ điều hành.

* D. Do kích thước dung lượng (Bytes) của file bị tăng lên đột biến sau mỗi lần chỉnh sửa văn bản.

**Đáp án đúng:** B
* **Giải thích tại sao đúng:** Bản chất toán học của hàm băm mật mã học sở hữu hiệu ứng tuyết lở (Avalanche Effect). Một thay đổi cực kỳ nhỏ ở đầu vào (Input) sẽ dẫn đến một kết quả đầu ra (Output) thay đổi hoàn toàn một cách ngẫu nhiên và không thể đoán trước.
* **Giải thích tại sao các đáp án khác sai:** A sai vì mã băm không phụ thuộc vào thời gian hệ thống mà phụ thuộc hoàn toàn vào nội dung bit của file. C sai vì đây là tính chất toán học của file chứ không liên quan đến hệ điều hành. D sai vì sửa một ký tự thành một ký tự khác không làm thay đổi tổng dung lượng byte của file văn bản thuần túy.

**Câu 6: Khi một con mã độc thực hiện kỹ thuật "Chống phân tích động" (Anti-VM / Anti-Sandbox), hành vi điển hình nhất của nó khi nhận diện mình đang nằm trong môi trường máy ảo là gì?**

* A. Lập tức tự nhân bản hàng loạt để làm tràn ổ cứng và làm sập máy chủ Sandbox.

* B. Tự động mã hóa toàn bộ dữ liệu của máy thật (Host OS) thông qua mạng chia sẻ.

* C. Ngừng thực hiện các hành vi phá hoại ngầm và đóng giả làm một tệp tin sạch lành tính.

* D. Tự động kết nối trực tiếp đến máy chủ điều khiển (C2 Server) để tải thêm các biến thể mã độc khác.

**Đáp án đúng:** C
* **Giải thích tại sao đúng:** Mục đích của kỹ thuật Anti-VM/Anti-Sandbox là đánh lừa chuyên gia phân tích. Khi phát hiện các dấu hiệu máy ảo (dung lượng ổ cứng nhỏ, thiếu cử động chuột người dùng, RAM thấp), mã độc sẽ "nằm im" đóng giả làm file sạch để được chuyên gia đánh giá là an toàn.
* **Giải thích tại sao các đáp án khác sai:** A, B và D đều là các hành vi bộc lộ tính chất độc hại thô bạo. Nếu làm vậy, mã độc sẽ lập tức bị hệ thống giám sát Sandbox ghi nhận và phát hiện ngay, đi ngược lại mục đích ẩn mình chống phân tích.

**Câu 7: Điểm khác biệt cốt lõi về mặt bản chất thông tin thu được giữa phương pháp Phân tích tĩnh (Static Analysis) và Phân tích động (Dynamic Analysis) là gì?**

* A. Phân tích tĩnh giúp xem cấu trúc tệp tin khi đứng yên; Phân tích động giúp thấy trực tiếp hành vi tương tác thực tế của tệp tin với hệ điều hành khi hoạt động.

* B. Phân tích tĩnh cho kết quả chính xác 100% đối với mã độc mới; Phân tích động chỉ có tác dụng với các dòng virus đời cũ.

* C. Phân tích tĩnh bắt buộc phải thực hiện trên máy thật; Phân tích động bắt buộc phải triển khai trên nền tảng đám mây trực tuyến.

* D. Phân tích tĩnh chỉ tiêu tốn tài nguyên phần cứng; Phân tích động hoàn toàn không sử dụng đến bộ nhớ RAM của hệ thống ảo.

**Đáp án đúng:** A
* **Giải thích tại sao đúng:** Đây là định nghĩa và phân biệt bản chất cốt lõi: Phân tích tĩnh là nhìn vào "vỏ bọc cơ thể và cấu trúc gen đứng yên" của file; Phân tích động là nhìn vào "hành động phá hoại thực tế" của nó khi sống.
* **Giải thích tại sao các đáp án khác sai:** B sai vì phân tích tĩnh dễ bị qua mặt bởi các công cụ đóng gói mã hóa (Packers/Crypters). C sai vì phân tích tĩnh thường làm trên máy Lab cô lập, không phân biệt máy thật hay ảo. D sai vì phân tích động chạy file thực tế nên tiêu tốn rất nhiều tài nguyên RAM của máy ảo.

---

## PHẦN 3: MỨC ĐỘ VẬN DỤNG (3 CÂU)

**Câu 8: Bạn nhận được một file văn bản lạ gửi qua hòm thư doanh nghiệp dạng `Bao_cao_taichinh.pdf.exe`. Khi tra cứu mã băm SHA256 của file này trên VirusTotal, kết quả trả về hiển thị tỷ lệ phát hiện là `0/73` (Tất cả các trình diệt virus đều báo sạch). Dựa trên kiến thức bài học, hành động nào sau đây là khôn ngoan và an toàn nhất tiếp theo?**

* A. File này an toàn tuyệt đối vì toàn bộ hệ thống bảo mật toàn cầu đã xác nhận, bạn có thể tự tin kích đúp mở ngay trên máy làm việc.

* B. Lập tức đổi đuôi file từ `.exe` thành `.txt` để đọc nội dung văn bản một cách an toàn trên hệ điều hành máy thật.

* C. Tiếp tục nghi vấn file vì có thể đây là mã độc mới tinh (FUD) chưa cập nhật mẫu; tiến hành ném file vào môi trường Windows Sandbox cô lập hoàn toàn mạng để chạy thử nghiệm hành vi.

* D. Tải file lên máy chủ dùng chung của công ty (File Server) để nhờ các nhân viên phòng ban khác tải về mở thử xem có lỗi hiển thị không.

**Đáp án đúng:** C
* **Giải thích tại sao đúng:** Kết quả `0/73` chỉ phản ánh file này chưa từng bị bắt mẫu (hoặc là mã độc dạng FUD - Fully Undetectable). Với định dạng đánh lừa thị giác người dùng như đuôi kép `.pdf.exe`, trực giác và quy trình bảo mật bắt buộc phải đưa nó vào Sandbox cô lập mạng (Host-Only) để rà soát hành vi thực tế.
* **Giải thích tại sao các đáp án khác sai:** A chủ quan vì virus mới có thể qua mặt mọi trình quét tĩnh. B sai bản chất vì đổi đuôi file không làm mất đi mã thực thi độc hại bên trong, click nhầm vẫn có nguy cơ dính lỗ hổng hệ thống. D vi phạm nghiêm trọng quy trình an toàn, làm lây lan mã độc ra toàn bộ doanh nghiệp.

**Câu 9: Trong quá trình xây dựng một phòng thí nghiệm (Lab) ảo cá nhân trên phần mềm VMware Workstation để phân tích một biến thể Ransomware (Mã độc tống tiền), thao tác cấu hình card mạng nào sau đây cho máy ảo là bắt buộc để bảo vệ an toàn cho máy thật (Host) và mạng gia đình/công ty?**

* A. Thiết lập cấu hình mạng ở chế độ Bridged (Cầu nối trực tiếp).

* B. Cấu hình card mạng sang chế độ Host-Only (hoặc ngắt hoàn toàn kết nối mạng - Disconnect).

* C. Cấu hình card mạng ở chế độ NAT (Network Address Translation) mặc định để virus tự do cập nhật.

* D. Chia sẻ chung thư mục dữ liệu (Shared Folders) giữa máy thật và máy ảo để tiện copy file mã độc qua lại.

**Đáp án đúng:** B
* **Giải thích tại sao đúng:** Chế độ Host-Only giúp tạo ra một mạng nội bộ ảo chỉ tồn tại giữa các máy ảo với nhau hoặc với máy thật thông qua một card mạng ảo biệt lập, không đi ra internet và không nhìn thấy mạng LAN thật. Điều này ngăn chặn triệt để việc các dòng virus thông minh (như Worm hoặc Ransomware có tính năng quét mạng) tự động lây nhiễm sang hạ tầng mạng thật của doanh nghiệp.
* **Giải thích tại sao các đáp án khác sai:** A và C đều cho phép máy ảo liên lạc hoặc truyền gói tin ra dải mạng thực tế, rất nguy hiểm. D sai vì Ransomware trong máy ảo có thể thông qua tính năng Shared Folders bò ra ngoài và mã hóa sạch toàn bộ ổ đĩa cứng máy thật của bạn.

**Câu 10: Bạn đang sử dụng công cụ PowerShell trên hệ điều hành Windows để trích xuất dấu vân tay số của một file tài liệu nghi vấn nằm tại ổ đĩa `D:\MalwareLab\strangetool.exe`. Câu lệnh nào sau đây viết đúng cú pháp kỹ thuật để lấy mã băm SHA256 của file này?**

* A. `Get-FileHash D:\MalwareLab\strangetool.exe -Algorithm SHA256`

* B. `Extract-Hash -File D:\MalwareLab\strangetool.exe -Type SHA256`

* C. `Check-Fingerprint -Path D:\MalwareLab\strangetool.exe`

* D. `Get-FileHash -Path D:\MalwareLab\strangetool.exe -Mode MD5`

**Đáp án đúng:** A
* **Giải thích tại sao đúng:** Trong Windows PowerShell, lệnh tiêu chuẩn để tính giá trị băm mã mật mã của tệp tin là `Get-FileHash`, đi kèm tham số đường dẫn file và tham số chỉ định thuật toán `-Algorithm SHA256`.
* **Giải thích tại sao các đáp án khác sai:** B và C dùng sai hoàn toàn tên lệnh (lệnh giả không tồn tại trong PowerShell mặc định). D sai tham số cấu hình hệ thống (yêu cầu đề bài lấy mã băm SHA256 nhưng câu lệnh lại để `-Mode MD5`).