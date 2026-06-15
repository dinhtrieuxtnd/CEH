Bộ trắc nghiệm 10 câu dưới đây được thiết kế bám sát nội dung bài giảng **NGÀY 15 (Mã độc và Tấn công APT)**, tuân thủ các cấp độ nhận thức theo chuẩn CEH v11 và được định dạng rõ ràng để bạn dễ dàng biên soạn lên Google Form, Microsoft Forms hoặc Quizizz.

---

### PHẦN I: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

**Câu 1: Loại mã độc nào dưới đây được thiết kế với mục đích ngụy trang thành một chương trình hợp pháp hoặc có ích để đánh lừa người dùng kích hoạt, nhưng KHÔNG có khả năng tự nhân bản và lây lan qua mạng?**

* A. Worm
* B. Virus
* C. Trojan Horse
* D. Rootkit

**Đáp án đúng:** C
* **Giải thích:** * *Tại sao C đúng:* Định nghĩa cốt lõi của Trojan là đánh lừa người dùng bằng vỏ bọc hợp pháp và nó hoàn toàn không có cơ chế tự nhân bản hay lây lan độc lập.
* *Tại sao các đáp án khác sai:* A (Worm) có khả năng tự nhân bản và tự lây lan qua mạng. B (Virus) có khả năng tự nhân bản bằng cách ký sinh vào file khác. D (Rootkit) là mã độc dùng để che giấu tiến trình và duy trì quyền truy cập cấp cao.



**Câu 2: Điểm khác biệt cốt lõi nhất về hành vi lây lan giữa Virus máy tính và Worm (Sâu máy tính) là gì?**

* A. Virus cần hành động của con người hoặc file vật chủ để phát tán, trong khi Worm có thể tự động bò qua các lỗ hổng mạng mà không cần file vật chủ.
* B. Virus chỉ tấn công hệ điều hành Windows, còn Worm chỉ tấn công hệ điều hành Linux.
* C. Virus làm hỏng phần cứng máy tính, còn Worm chỉ làm chậm băng thông mạng.
* D. Virus có thể bị phát hiện bởi mã băm Hash, còn Worm thì hoàn toàn vô hình trước mã băm.

**Đáp án đúng:** A
* **Giải thích:** * *Tại sao A đúng:* Đây là đặc tính phân loại quan trọng nhất trong CEH. Virus cần bám vào file vật chủ (ký sinh) và cần con người chia sẻ file đó để lây lan; Worm là chương trình độc lập, tự quét mạng và tự lây lan qua lỗ hổng dịch vụ (như SMB).
* *Tại sao các đáp án khác sai:* B, C, D đều là các nhận định sai bản chất kỹ thuật (cả hai đều tấn công đa nền tảng, đều dựa trên phần mềm và đều có mã băm Hash định danh).



**Câu 3: Trong thuật ngữ an ninh mạng, ký tự "P" trong định nghĩa về hình thức tấn công APT viết tắt của từ nào và thể hiện đặc trưng gì?**

* A. Penetration – Khả năng xuyên thủng mọi hệ thống tường lửa.
* B. Persistent – Tính chất dai dẳng, nằm vùng lâu dài và kiên trì thu thập thông tin.
* C. Polymorphic – Khả năng tự thay đổi hình dạng cấu trúc mã nguồn để tránh bị quét.
* D. Privilege – Việc ưu tiên chiếm quyền quản trị tối cao ngay khi thâm nhập.

**Đáp án đúng:** B
* **Giải thích:** * *Tại sao B đúng:* APT là viết tắt của *Advanced Persistent Threat*. Chữ "Persistent" (Dai dẳng) nhấn mạnh việc kẻ tấn công có thể nằm vùng âm thầm trong hệ thống của nạn nhân nhiều tháng hoặc nhiều năm mà không phá hoại ngay.
* *Tại sao các đáp án khác sai:* A, C, D tuy là các kỹ thuật có thể xuất hiện trong APT nhưng không phải là từ ngữ đại diện cho ký tự "P" trong cụm từ viết tắt APT.



**Câu 4: Nền tảng trực tuyến nào phổ biến nhất toàn cầu cho phép các Ethical Hacker kiểm tra nhanh một mã băm (Hash) của file để xem nó có nằm trong danh sách đen của hơn 70 trình quét Antivirus hay không?**

* A. Wayback Machine
* B. GHDB (Google Hacking Database)
* C. VirusTotal
* D. Maltego

**Đáp án đúng:** C
* **Giải thích:** * *Tại sao C đúng:* VirusTotal là một dịch vụ miễn phí thu thập kết quả từ nhiều phần mềm diệt virus và công cụ phân tích tệp để người dùng đối chiếu mã băm MD5/SHA-256.
* *Tại sao các đáp án khác sai:* A dùng để xem lịch sử website. B dùng để tìm kiếm dorking lỗ hổng trên Google. D dùng để vẽ sơ đồ mối quan hệ trinh sát thông tin (OSINT).



---

### PHẦN II: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

**Câu 5: Tại sao kỹ thuật che giấu mã độc hoặc thay đổi thuật toán mã hóa ngầm bên dưới (Obfuscation/Polymorphism) lại khiến các phần mềm Antivirus truyền thống dễ dàng bị qua mặt?**

* A. Vì phần mềm Antivirus truyền thống chỉ phát hiện được mã độc khi máy tính bị ngắt kết nối Internet.
* B. Vì các phần mềm Antivirus truyền thống dựa trên cơ chế nhận diện chữ ký (Signature-based), việc thay đổi cấu trúc mã sẽ làm thay đổi mã băm và chuỗi nhận diện của tệp độc hại.
* C. Vì kỹ thuật này làm tăng dung lượng file lên gấp nhiều lần khiến Antivirus bỏ qua không quét để tiết kiệm RAM.
* D. Vì mã độc sau khi thay đổi hình dạng sẽ tự động xóa quyền Admin của phần mềm Antivirus.

**Đáp án đúng:** B
* **Giải thích:** * *Tại sao B đúng:* Antivirus truyền thống hoạt động dựa trên cơ chế tìm kiếm các đoạn mã đặc trưng (chữ ký - signature) đã biết. Khi hacker làm mờ mã (Obfuscation) hoặc biến đổi hình dạng mã (Polymorphism), chữ ký và mã băm thay đổi hoàn toàn, làm AV không đối chiếu được với cơ sở dữ liệu cũ.
* *Tại sao các đáp án khác sai:* A, C, D đều là các suy luận sai lệch, không đúng cơ chế vận hành của công nghệ Antivirus.



**Câu 6: Quy trình di chuyển trong mạng nội bộ của một chiến dịch tấn công APT được gọi là "Lateral Movement" (Dịch chuyển ngang). Bản chất của hành động này là gì?**

* A. Hacker liên tục thay đổi địa chỉ IP bên ngoài của máy chủ ra lệnh (C2 Server) để đánh lừa tường lửa biên.
* B. Hacker mã hóa toàn bộ dữ liệu theo chiều ngang của ổ cứng từ phân vùng A sang phân vùng B.
* C. Từ một máy ban đầu chiếm được quyền kiểm soát, kẻ tấn công rà quét, chiếm đoạt tài khoản và lây lan sang các máy tính, máy chủ khác trong cùng mạng nội bộ doanh nghiệp.
* D. Hacker gửi hàng loạt email lừa đảo (Phishing) ra môi trường Internet để tìm kiếm nạn nhân mới.

**Đáp án đúng:** C
* **Giải thích:** * *Tại sao C đúng:* Dịch vụ dịch chuyển ngang (Lateral Movement) là bước kẻ tấn công mở rộng phạm vi kiểm soát bên trong hạ tầng nạn nhân, đi từ máy trạm của nhân viên thông thường sang các máy chủ chứa dữ liệu quan trọng nằm cùng mạng nội bộ.
* *Tại sao các đáp án khác sai:* A liên quan đến kỹ thuật ẩn náu hạ tầng (C2 Infrastructure). B là nhận định hư cấu. D là giai đoạn xâm nhập ban đầu (Initial Intrusion) chứ không phải dịch chuyển ngang.



**Câu 7: Tại sao một chuyên gia phân tích an ninh mạng khi nhận được một file tài liệu văn phòng dạng `.xlsx` hoặc `.doc` đáng nghi từ nhân viên, họ lại khuyến cáo không được mở trực tiếp mà phải đưa vào môi trường Sandbox?**

* A. Vì các file tài liệu này có thể chứa các đoạn mã script độc hại (Macro) tự động chạy ngầm để tải Trojan về máy khi người dùng vừa mở tệp.
* B. Vì mở file văn phòng lạ sẽ làm màn hình máy tính bị nhiễm từ và hỏng phần cứng.
* C. Vì file `.xlsx` luôn tự động kích hoạt đòn tấn công từ chối dịch vụ DDoS vào router của công ty.
* D. Vì hệ thống Sandbox có khả năng tự động sửa lỗi chính tả và chuyển đổi nội dung file sang tiếng Việt sạch sẽ.

**Đáp án đúng:** A
* **Giải thích:** * *Tại sao A đúng:* Tính năng Macro trong Microsoft Office cho phép nhúng mã kịch bản (VBA). Kẻ tấn công thường lợi dụng điều này để viết mã độc tự động thực thi ngay khi nạn nhân nhấn nút "Enable Content", biến file tài liệu thông thường thành một vũ khí Trojan nguy hiểm.
* *Tại sao các đáp án khác sai:* B, C, D đều chứa các nhận định phi kỹ thuật và sai thực tế.



---

### PHẦN III: MỨC ĐỘ VẬN DỤNG (3 CÂU)

**Câu 8: Một nhân viên phòng hành chính nhận được email từ một đối tác quen thuộc đính kèm tệp tin mang tên `Danh_Sach_Nhan_Su_2026.pdf.exe`. Hệ thống Windows hiển thị icon của tệp tin này giống hệt một file PDF thông thường. Nhân viên này nên xử lý tình huống này thế nào là an toàn nhất dưới góc nhìn bảo mật doanh nghiệp?**

* A. Click đúp chuột mở bình thường vì tệp tin có biểu tượng PDF an toàn.
* B. Đổi tên tệp tin, xóa bỏ phần đuôi `.exe` đi rồi click mở lại.
* C. Tuyệt đối không mở, tiến hành trích xuất mã băm (Hash) của tệp tin, gửi lên VirusTotal để đối chiếu hoặc báo cáo bộ phận SOC/IT để cô lập phân tích.
* D. Chuyển tiếp email này cho toàn bộ nhân viên khác trong công ty để nhờ họ mở hộ xem có bị lỗi không.

**Đáp án đúng:** C
* **Giải thích:** * *Tại sao C đúng:* Đây là hành vi lừa đảo bằng kỹ thuật phần mở rộng kép (Double Extension). Bản chất tệp tin này là một file thực thi (`.exe`), tức là một chương trình có khả năng chạy mã độc (Trojan), icon PDF chỉ là hình ảnh ngụy trang. Quy trình chuẩn là phải giữ nguyên và kiểm tra an toàn bằng mã băm hoặc báo cáo SOC.
* *Tại sao các đáp án khác sai:* A sẽ kích hoạt mã độc lập tức. B chỉ đổi tên bề nổi, bản chất file thực thi không đổi. D sẽ làm dịch bệnh lan rộng khắp công ty nếu file đó là mã độc.



**Câu 9: Hệ thống giám sát mạng (SIEM) của một ngân hàng phát hiện một máy trạm của nhân viên lễ tân vào lúc 2 giờ sáng (khi văn phòng không có người) liên tục phát sinh hàng chục nghìn gói tin SMB (cổng 445) quét sang dải IP của các máy chủ Core-Banking nội bộ. Dựa vào hành vi này, hệ thống đang có nguy cơ cao đối mặt với loại mã độc nào nhất?**

* A. Một con Spyware/Keylogger đang âm thầm ghi lại phím gõ của lễ tân.
* B. Một biến thể Worm (Sâu máy tính) hoặc một cuộc tấn công APT đang ở giai đoạn Dịch chuyển ngang (Lateral Movement) để lây lan tự động qua lỗ hổng dịch vụ mạng.
* C. Một con Adware hiển thị quảng cáo kiếm tiền trên trình duyệt của máy lễ tân.
* D. Lỗi xung đột phần mềm Windows Update của máy tính thông thường.

**Đáp án đúng:** B
* **Giải thích:** * *Tại sao B đúng:* Hành vi tự động quét dải mạng (Network Scanning) diện rộng qua giao thức chia sẻ file SMB (cổng 445) vào khung giờ không có người làm việc là dấu hiệu điển hình của việc Worm tự động nhân bản tìm lỗ hổng mạng, hoặc hacker APT đang thao tác dịch chuyển ngang từ máy đã chiếm để leo sang máy chủ ngân hàng.
* *Tại sao các đáp án khác sai:* A (Spyware) và C (Adware) là mã độc có hành vi cục bộ thu thập thông tin gõ hoặc hiển thị popup, không có đặc trưng điên cuồng gửi gói tin quét cổng nội bộ hàng loạt như trên. D không khớp với dấu hiệu bất thường về an ninh mạng.



**Câu 10: Bạn nghi ngờ một file công cụ bẻ khóa phần mềm tải trên mạng về máy tính cá nhân là mã độc nằm vùng (Trojan). Bạn đã copy file này vào một máy ảo Windows (Virtual Machine) chuyên dùng test mã độc của mình. Để kiểm tra hành vi kết nối ngầm của nó về máy chủ của Hacker (C2 Server) một cách chuẩn xác nhất, bạn nên dùng công cụ nào kết hợp với thao tác gì?**

* A. Mở Task Manager lên và đếm xem có bao nhiêu ứng dụng đang chạy.
* B. Sử dụng phần mềm Wireshark để bắt lưu lượng mạng (Packet Capture) trên card mạng máy ảo, sau đó chạy file và lọc các gói tin DNS/TCP hướng ra các địa chỉ IP bên ngoài hệ thống.
* C. Dùng Windows Defender quét nhanh ổ đĩa C của máy ảo.
* D. Nén file đó thành định dạng `.zip` cài mật khẩu bảo vệ rồi xóa file gốc đi.

**Đáp án đúng:** B
* **Giải thích:** * *Tại sao B đúng:* Wireshark là công cụ phân tích giao thức mạng chuyên sâu (như đã học ở các ngày trước). Khi mã độc kết nối về máy chủ điều khiển (C2 Server), nó bắt buộc phải phát sinh lưu lượng mạng (gửi request TCP/UDP hoặc truy vấn tên miền DNS). Wireshark sẽ ghi lại toàn bộ các gói tin này, giúp ta chỉ mặt đặt tên được địa chỉ IP lạ của hacker.
* *Tại sao các đáp án khác sai:* A không thấy được lưu lượng ngầm ẩn sâu. C có thể bị qua mặt bởi mã độc chưa có chữ ký (Zero-day). D chỉ là hành động cất giấu file văn bản chứ không phân tích được hành vi của file khi chạy.