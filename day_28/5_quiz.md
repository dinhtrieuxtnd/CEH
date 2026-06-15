Dưới đây là bộ quiz 10 câu trắc nghiệm được thiết kế chuyên biệt cho nội dung **NGÀY 28: MỐI ĐE DỌA TỪ THIẾT BỊ DI ĐỘNG & QUẢN TRỊ MDM** theo đúng chuẩn cấu trúc nhận thức, định dạng rõ ràng, sẵn sàng để copy trực tiếp vào Google Forms, Quizizz hoặc in ra làm bài kiểm tra trên lớp.

---

# PHẦN BÀI KIỂM TRA (DÀNH CHO HỌC VIÊN)

## PHẦN I: MỨC ĐỘ NHẬN BIẾT (4 CÂU KHẢO SÁT GHI NHỚ)

**Câu 1:** Trong kiến trúc an ninh của hệ điều hành di động, cơ chế bảo mật nghiêm ngặt nào buộc mỗi ứng dụng phải chạy biệt lập trong một vùng nhớ riêng, không được phép can thiệp hay đọc trộm dữ liệu của ứng dụng khác?

* A. Containerization
* B. Sandboxing
* C. Per-App VPN
* D. Configuration Profiling

**Câu 2:** Thuật ngữ chuyên ngành an toàn thông tin nào chỉ việc người dùng can thiệp kỹ thuật vào hệ điều hành Android để phá bỏ các rào cản bảo mật của nhà sản xuất nhằm chiếm đặc quyền kiểm soát cao nhất (Superuser)?

* A. Jailbreaking
* B. Rooting
* C. Side-loading
* D. Sniffing

**Câu 3:** Giải pháp phần mềm tổng thể nào được các doanh nghiệp triển khai để quản trị, cấu hình bảo mật, theo dõi và áp đặt chính sách an toàn từ xa lên toàn bộ thiết bị di động kết nối vào mạng lưới nội bộ công ty?

* A. BYOD (Bring Your Own Device)
* B. SOC (Security Operations Center)
* C. MDM (Mobile Device Management)
* D. WAF (Web Application Firewall)

**Câu 4:** Khi cấu hình hệ thống MDM để ứng phó với trường hợp nhân viên báo mất điện thoại cá nhân (mô hình BYOD), tính năng nào cho phép người quản trị CHỈ phá hủy dữ liệu doanh nghiệp mà không làm mất ảnh hay danh bạ riêng tư của nhân viên?

* A. Full-Disk Remote Wipe
* B. Factory Reset Lệnh từ xa
* C. Selective Wipe (Xóa chọn lọc)
* D. Device Enrollment Unregister

---

## PHẦN II: MỨC ĐỘ THÔNG HIỂU (3 CÂU KIỂM TRA BẢN CHẤT)

**Câu 5:** Bản chất kỹ thuật nguy hiểm nhất của việc nhân viên sử dụng một thiết bị di động đã bị Root (Android) hoặc Jailbreak (iOS) để truy cập vào mạng nội bộ công ty là gì?

* A. Thiết bị sẽ bị tiêu hao pin nhanh hơn và gây nóng nghẽn băng thông Wi-Fi nội bộ.
* B. Cơ chế Hộp cát (Sandboxing) bị gãy, mã độc nằm vùng có thể tự do đọc trộm dữ liệu từ các app làm việc bảo mật.
* C. Điện thoại sẽ không thể nhận được các gói tin cấu hình định tuyến IP thông thường từ Router.
* D. Hệ thống định vị phần cứng GPS của Apple và Google sẽ tự động bị tắt vĩnh viễn.

**Câu 6:** Vì sao triết lý bảo mật "Hộp đóng" của hệ điều hành iOS được đánh giá là an toàn hơn trước các cuộc tấn công dạng App-based (ứng dụng độc hại) so với hệ điều hành Android?

* A. iOS mã hóa dữ liệu bằng thuật toán có độ dài khóa bit lớn gấp đôi Android.
* B. iOS cấm hoàn toàn các kết nối Wi-Fi công cộng không có mật khẩu mở.
* C. iOS ngăn chặn cơ chế cài đặt ứng dụng tự do từ các file đuôi bên ngoài (lách qua kho ứng dụng chính thống).
* D. iPhone tích hợp sẵn một chip tường lửa cứng (Hardware Firewall) ngay trên bo mạch chủ.

**Câu 7:** Trong xu hướng BYOD, kỹ thuật Containerization (Phân vùng dữ liệu) trên MDM giải quyết mâu thuẫn giữa lợi ích bảo mật của công ty và quyền riêng tư của nhân viên như thế nào?

* A. Nó biến điện thoại thành một máy ảo chạy ngầm và gửi toàn bộ nhật ký cuộc gọi cá nhân về tổng đài SOC.
* B. Nó mã hóa toàn bộ ổ đĩa cứng và bắt buộc nhân viên phải giao chìa khóa giải mã Master Key cho phòng IT.
* C. Nó cô lập các ứng dụng công việc vào một phân vùng bộ nhớ riêng chịu sự giám sát của IT, vùng cá nhân còn lại IT hoàn toàn không có quyền can thiệp.
* D. Nó tự động ẩn tất cả các ứng dụng giải trí riêng tư như Facebook, Zalo mỗi khi nhân viên bước chân vào văn phòng.

---

## PHẦN III: MỨC ĐỘ VẬN DỤNG (3 CÂU GIẢI QUYẾT TÌNH HUỐNG)

**Câu 8:** Một nhân viên ngân hàng đi công tác và mở email nội bộ bằng mạng Wi-Fi miễn phí không mật khẩu tại sảnh sân bay. Bằng công cụ Wireshark, kẻ tấn công ngồi gần đó đã thu giữ được toàn bộ lưu lượng dữ liệu truyền đi. Để triệt tiêu hoàn toàn rủi ro bị nghe lén (Sniffing) qua mạng trong tình huống này, phòng IT cần áp đặt chính sách kỹ thuật nào thông qua MDM?

* A. Bắt buộc thiết bị phải đặt mã PIN mở màn hình dài tối thiểu 8 ký tự ký số phức tạp.
* B. Cấu hình tính năng Per-App VPN, tự động kích hoạt đường truyền mã hóa thẳng về máy chủ ngân hàng mỗi khi mở app công việc.
* C. Chặn quyền truy cập vào kho ứng dụng App Store không cho nhân viên cài game lậu.
* D. Cài đặt phần mềm diệt virus cục bộ trực tiếp trên nền tảng hệ điều hành của điện thoại di động.

**Câu 9:** Một doanh nghiệp triển khai giải pháp MDM và yêu cầu toàn bộ nhân viên đăng ký thiết bị cá nhân để làm việc. Tuy nhiên, một số nhân viên phản đối vì sợ phòng IT dùng MDM định vị GPS để theo dõi hành trình cá nhân ngoài giờ làm việc của họ. Là một chuyên gia an ninh mạng, bước đi nào sau đây là chuẩn xác nhất để xử lý bài toán này?

* A. Bỏ qua MDM, cho phép nhân viên truy cập trực tiếp vào hệ thống bằng tài khoản mật khẩu thông thường để tránh mâu thuẫn nội bộ.
* B. Khẳng định công ty có quyền kiểm soát 100% thiết bị khi nhân viên đã chấp nhận tham gia mô hình làm việc từ xa.
* C. Cấu hình phân vùng Android Enterprise / User Enrollment, kích hoạt Containerization và ban hành cam kết kỹ thuật rõ ràng bằng văn bản chứng minh IT chỉ quản lý Vùng làm việc, hoàn toàn bị chặn quyền xem Vùng cá nhân.
* D. Ép buộc nhân viên phải mua một chiếc điện thoại thứ hai hoàn toàn trắng thông tin để cài cấu hình MDM.

**Câu 10:** Trong một đợt rà soát an ninh thiết bị di động kết nối mạng văn phòng, hệ thống giám sát phát hiện một chiếc máy Android của một nhân viên thiết kế đồ họa liên tục gửi các gói tin quét cổng (Port Scanning) thăm dò dải mạng LAN công ty vào lúc 12h đêm. Chiếc điện thoại này trước đó đã được nhân viên tự ý Root để cài một số bộ lọc màu đồ họa miễn phí dạng file `.apk` trên mạng. Đội SOC cần thực hiện quy trình phản ứng sự cố nào khẩn cấp nhất?

* A. Gửi email nhắc nhở nhân viên sáng mai lên phòng IT để gỡ bỏ bộ lọc màu đồ họa đó.
* B. Thay đổi mật khẩu tài khoản Wi-Fi của toàn bộ cơ quan để chặn chiếc máy đó kết nối lại.
* C. Ngay lập tức kích hoạt lệnh cô lập thiết bị trên MDM, thực hiện lệnh Selective Wipe từ xa để hủy quyền truy cập và xóa dữ liệu làm việc trên máy đó, đồng thời chặn MAC của thiết bị tại Switch.
* D. Tiến hành khởi động lại (Reboot) máy chủ Active Directory của công ty để xóa bộ nhớ đệm gói tin độc hại.

---

---

# ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

| Câu hỏi | Đáp án | Giải thích ngắn gọn TẠI SAO đúng | Giải thích ngắn gọn TẠI SAO các đáp án khác sai |
| --- | --- | --- | --- |
| **Câu 1** | **B** | **Sandboxing (Hộp cát)** là cơ chế cốt lõi của OS di động, cô lập các ứng dụng để bảo vệ tính toàn vẹn dữ liệu. | A sai vì Containerization là kỹ thuật chia tách dữ liệu làm việc/cá nhân của MDM tầng ứng dụng. C và D là các phương thức kết nối/cấu hình. |
| **Câu 2** | **B** | **Rooting** là thuật ngữ dành riêng cho việc bẻ khóa hệ điều hành Android để chiếm quyền tối cao (Root access). | A nhầm sang hệ điều hành iOS (Jailbreaking). C là hành vi cài app ngoài. D là kỹ thuật nghe lén mạng. |
| **Câu 3** | **C** | **MDM (Mobile Device Management)** là khái niệm chuẩn xác nhất dùng để chỉ hệ thống quản trị thiết bị di động tập trung của doanh nghiệp. | A là mô hình chính sách cho mang máy đi làm. B là trung tâm vận hành an ninh. D là tường lửa bảo vệ ứng dụng Web. |
| **Câu 4** | **C** | **Selective Wipe (Xóa chọn lọc)** là tính năng nhân văn và chiến lược của MDM, chỉ tìm và xóa sạch dữ liệu thuộc phân vùng công việc. | A và B sẽ xóa trắng toàn bộ máy, phá hủy cả ảnh và danh bạ cá nhân của người dùng. D chỉ gỡ quyền quản lý chứ không xóa dữ liệu nằm lại trên máy. |
| **Câu 5** | **B** | Khi Root/Jailbreak, bức tường **Sandboxing bị phá vỡ hoàn toàn**. Mã độc có thể leo thang chiếm quyền, vượt biên giới vùng nhớ để đọc trộm tài liệu của app kế bên. | A phóng đại rủi ro vật lý, không phải tử huyệt an ninh mạng. C sai vì máy bẻ khóa vẫn nhận IP định tuyến bình thường. D sai thực tế. |
| **Câu 6** | **C** | iOS áp dụng chính sách **đóng kín nghiêm ngặt**, cấm người dùng tự ý cài app từ tệp tin không rõ nguồn gốc bên ngoài, triệt tiêu vectơ tấn công app giả mạo. | A sai vì thuật toán mã hóa do giao thức quyết định, không phụ thuộc OS. B sai vì iOS vẫn cho kết nối Wi-Fi tự do. D sai kiến trúc phần cứng. |
| **Câu 7** | **C** | **Containerization** tạo ra hai thế giới song song trên một thiết bị. IT kiểm soát vùng công việc nhưng "bị mù" hoàn toàn trước vùng cá nhân của nhân viên. | A vi phạm nghiêm trọng pháp luật về quyền riêng tư. B sai vì IT không thu giữ Master Key cá nhân. D không phải tính năng ẩn app của MDM. |
| **Câu 8** | **B** | **Per-App VPN** là chốt chặn tối thượng. Lưu lượng dữ liệu của app làm việc sẽ bị bọc trong đường hầm mã hóa VPN trước khi đẩy ra Wi-Fi sân bay, hacker thu được cũng chỉ là các chuỗi rác vô nghĩ
* a. | A chỉ chống trộm vật lý cầm máy. C chống app độc hại chứ không chống được sniffing mạng. D không mã hóa được đường truyền tầng mạng. |
| **Câu 9** | **C** | Việc kết hợp **kỹ thuật Containerization và minh bạch chính sách bằng văn bản** là cách duy nhất để cân bằng giữa bài toán kỹ thuật an toàn và tâm lý người dùng. | A thỏa hiệp chủ quan, đẩy doanh nghiệp vào nguy cơ mất an toàn. B độc đoán, gây làn sóng nghỉ việc. D tốn kém chi phí hạ tầng và vi phạm triết lý BYOD. |
| **Câu 10** | **C** | Máy đã Root chạy kịch bản quét mạng chứng tỏ **đã bị mã độc chiếm quyền điều khiển (C2 nằm vùng)**. Hành động khẩn cấp là dùng MDM cách ly, xóa sạch dữ liệu công ty từ xa để chặn đứng mã độc leo thang. | A quá chậm trễ và ngây thơ trước sự cố an ninh. B làm gián đoạn sản xuất của toàn bộ công ty. D không giải quyết được lỗ hổng đang nằm trên điện thoại di động khách. |

---

🚀 **Lời khuyên cho Giáo viên khi sử dụng tài liệu này:**

* Nếu đưa lên **Google Forms**: Bạn hãy bật tính năng *"Đặt làm bài kiểm tra"*, copy câu hỏi và 4 đáp án. Ở mục *"Phản hồi đáp án"*, hãy paste phần nội dung ở cột *"TẠI SAO đúng"* và *"TẠI SAO các đáp án khác sai"* vào ô phản hồi để học viên tự đối chiếu kiến thức ngay sau khi nộp bài.
* Bộ quiz này bám sát tư duy của chứng chỉ **EC-Council CEH v11 (Module 17)**, rất thích hợp để nâng cao tư duy thực chiến thay vì học vẹt lý thuyết!