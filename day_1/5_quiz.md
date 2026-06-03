# QUIZ KIỂM TRA KIẾN THỨC - NGÀY 1
## Chủ đề: Tổng Quan Về Ethical Hacking & Tư Duy An Ninh Cốt Lõi (Chuẩn CEH v11)

---

### PHẦN I: MỨC ĐỘ NHẬN BIẾT (KIỂM TRA GHI NHỚ LÝ THUYẾT)

#### Câu 1: Theo khung lý thuyết an ninh thông tin CEH v11, hành vi nào sau đây mô tả chính xác nhất một cuộc trinh sát bị động (Passive Reconnaissance)?
- [ ] A. Sử dụng lệnh Ping để kiểm tra danh sách các dải địa chỉ IP của công ty đang hoạt động.
- [ ] B. Tra cứu các thông tin bản ghi đăng ký tên miền lịch sử của mục tiêu thông qua các trang web công khai.
- [ ] C. Gọi điện đến quầy lễ tân của doanh nghiệp mục tiêu giả danh làm nhân viên hỗ trợ kỹ thuật để hỏi tên sếp.
- [ ] D. Gửi các gói tin rà quét cổng (Port Scanning) chuyên sâu để nhận diện các dịch vụ mạng đang mở.

#### Câu 2: Khi một hacker thâm nhập vào máy chủ dịch vụ của một tổ chức, tiến hành cài đặt một tiến trình ngầm (Rootkit) cho phép truy cập lại từ xa bất cứ khi nào mà không cần hack lại, cuộc tấn công này đang nằm ở giai đoạn nào?
- [ ] A. Gaining Access (Chiếm quyền kiểm soát)
- [ ] B. Scanning (Quét và thăm dò)
- [ ] C. Maintaining Access (Duy trì quyền truy cập)
- [ ] D. Covering Tracks (Xóa bỏ dấu vết)

#### Câu 3: Cạnh nào trong Tam giác An toàn Thông tin (CIA Triad) bị ảnh hưởng trực tiếp và nghiêm trọng nhất bởi một cuộc tấn công từ chối dịch vụ phân tán (DDoS Attack)?
- [ ] A. Confidentiality (Tính bảo mật)
- [ ] B. Integrity (Tính toàn vẹn)
- [ ] C. Availability (Tính sẵn sàng)
- [ ] D. Authenticity (Tính xác thực)

#### Câu 4: Điểm khác biệt cốt lõi và mang tính quyết định về mặt pháp lý giữa một Hacker Mũ Xám (Grey Hat) và một Hacker Mũ Trắng (White Hat) là gì?
- [ ] A. Trình độ kỹ năng công nghệ và các bộ công cụ rà quét lỗ hổng bảo mật sử dụng.
- [ ] B. Văn bản ủy quyền và chấp thuận kiểm thử xâm nhập được ký kết trước khi thực hiện tấn công.
- [ ] C. Động cơ hành động vì tiền thưởng hay vì mục đích phá hoại tài sản doanh nghiệp.
- [ ] D. Hệ điều hành họ sử dụng để triển khai rà quét (Kali Linux hoặc Parrot OS).

---

### PHẦN II: MỨC ĐỘ THÔNG HIỂU (KIỂM TRA BẢN CHẤT KHÁI NIỆM)

#### Câu 5: Tại sao trong quy trình tấn công mạng, giai đoạn Reconnaissance (Thu thập thông tin) luôn được các chuyên gia đánh giá là bước đi quan trọng nhất quyết định sự thành bại?
- [ ] A. Vì đây là giai đoạn trực tiếp phá vỡ cơ chế mã hóa dữ liệu của máy chủ mục tiêu.
- [ ] B. Vì lượng thông tin thu được giúp kẻ tấn công thu hẹp phạm vi, xác định chính xác vectơ khai thác phù hợp và giảm thiểu khả năng bị lộ.
- [ ] C. Vì đây là bước duy nhất kẻ tấn công có thể xóa bỏ hoàn toàn các tệp tin nhật ký (Log tệp) lưu trữ.
- [ ] D. Vì giai đoạn này bắt buộc phải sử dụng các quyền tối cao (Root/Administrator) để triển khai thực hiện.

#### Câu 6: Một doanh nghiệp cấu hình hệ thống sao lưu dữ liệu tự động theo thời gian thực (Real-time Backup) sang một trung tâm dữ liệu dự phòng. Tuy nhiên, họ lại bỏ quên không thiết lập mật khẩu mã hóa cho phân vùng lưu trữ dự phòng này. Dưới góc nhìn quản trị an ninh, tam giác CIA của doanh nghiệp đang ở trạng thái nào?
- [ ] A. Tính sẵn sàng [A] được đảm bảo rất tốt, nhưng Tính bảo mật [C] đang gặp nguy hiểm nghiêm trọng.
- [ ] B. Tính bảo mật [C] được củng cố mạnh mẽ, nhưng Tính toàn vẹn [I] bị gãy hoàn toàn.
- [ ] C. Cả ba cạnh của tam giác CIA đều được bảo vệ toàn diện nhờ cơ chế đồng bộ hóa.
- [ ] D. Tính toàn vẹn [I] được bảo vệ tối đa, trong khi Tính sẵn sàng [A] bị suy giảm nặng nề.

#### Câu 7: Mối quan hệ bất đối xứng giữa người phòng thủ hệ thống (Defender) và kẻ tấn công mạng (Attacker) thể hiện bản chất nào dưới đây của an toàn thông tin?
- [ ] A. Người phòng thủ luôn có lợi thế tuyệt đối vì họ làm chủ và am hiểu hạ tầng thiết bị phần cứng bên trong.
- [ ] B. Kẻ tấn công chỉ cần tìm ra một lỗ hổng duy nhất để chiến thắng, trong khi người phòng thủ phải tìm cách bảo vệ toàn vẹn 100% chiến tuyến.
- [ ] C. Kẻ tấn công luôn gặp bất lợi lớn vì họ phải đầu tư nhiều chi phí mua sắm công cụ bản quyền hơn người phòng thủ.
- [ ] D. Sự bất đối xứng này sẽ hoàn toàn biến mất nếu tổ chức tiến hành cài đặt một hệ thống tường lửa (Firewall) đắt tiền.

---

### PHẦN III: MỨC ĐỘ VẬN DỤNG (GIẢI QUYẾT TÌNH HUỐNG THỰC TẾ)

#### Câu 8: Bạn là giáo viên đang quản lý cổng thông tin nhập điểm thi của trường. Một học sinh sử dụng tài khoản của phụ huynh đăng nhập vào hệ thống, tìm cách thay đổi điểm số môn Toán của mình từ 5.0 thành 9.0 mà không làm sập trang web hay rò rỉ dữ liệu của học sinh khác. Hành vi này đã trực tiếp phá hoại cạnh nào của tam giác CIA?
- [ ] A. Confidentiality (Tính bảo mật)
- [ ] B. Integrity (Tính toàn vẹn)
- [ ] C. Availability (Tính sẵn sàng)
- [ ] D. Non-repudiation (Tính chống chối bỏ)

#### Câu 9: Trong lúc rà soát các bài đăng tuyển dụng trên mạng xã hội của phòng nhân sự công ty, một chuyên gia bảo mật phát hiện mô tả công việc (JD) tuyển kỹ sư IT ghi chi tiết: "Yêu cầu kinh nghiệm vận hành máy chủ Windows Server 2012 R2, quản trị hệ quản trị cơ sở dữ liệu MySQL phiên bản 5.6". Hành động này mang ý nghĩa gì dưới lăng kính Ethical Hacking?
- [ ] A. Đây là hành động bình thường và hoàn toàn vô hại vì mọi thông tin tuyển dụng đều phải công khai minh bạch.
- [ ] B. Chuyên gia bảo mật đang đóng vai hacker thực hiện trinh sát bị động để phát hiện nguy cơ lộ lọt thông tin công nghệ lõi.
- [ ] C. Công ty đang chủ động thực hiện giai đoạn Duy trì quyền truy cập (Maintaining Access) thông qua kênh nhân sự.
- [ ] D. Đây là hành vi tấn công chủ động phá hoại Tính sẵn sàng [A] của hệ thống mạng nội bộ công ty.

#### Câu 10: Một công ty kinh doanh trực tuyến vừa bị tin tặc tấn công mã hóa toàn bộ dữ liệu tống tiền (Ransomware). Đội ngũ kỹ thuật phát hiện tin tặc đã dò trúng mật khẩu tài khoản của một nhân viên trực kho (mật khẩu đặt là: `123456`), từ đó thâm nhập vào mạng nội bộ công ty. Lỗi tư duy nghiêm trọng nhất của ban quản trị ở đây là gì?
- [ ] A. Đầu tư quá ít ngân sách cho hệ thống máy in và thiết bị lưu trữ ngoại vi.
- [ ] B. Rơi vào sai lầm chủ quan "Tôi quá nhỏ bé, hacker sẽ không tìm đến", dẫn đến việc buông lỏng chính sách an toàn mật khẩu.
- [ ] C. Tin tưởng quá mức vào tính nguyên vẹn dữ liệu của các thuật toán mã hóa đối xứng.
- [ ] D. Dành quá nhiều thời gian cho giai đoạn Trinh sát bị động (Phase 1) thay vì nâng cấp phần cứng mạng.

---

## ĐÁP ÁN & GIẢI THÍCH CHI TIẾT

### BẢNG ĐÁP ÁN NHANH

| Câu hỏi | Đáp án đúng |
| :---: | :---: |
| **Câu 1** | **B** |
| **Câu 2** | **C** |
| **Câu 3** | **C** |
| **Câu 4** | **B** |
| **Câu 5** | **B** |
| **Câu 6** | **A** |
| **Câu 7** | **B** |
| **Câu 8** | **B** |
| **Câu 9** | **B** |
| **Câu 10** | **B** |

---

### GIẢI THÍCH CHI TIẾT TỪNG CÂU

> [!NOTE]
> Các câu hỏi được biên soạn bám sát theo tư duy và kiến trúc bài thi chứng chỉ Hacker Mũ Trắng quốc tế CEH v11.

#### Câu 1
* **Đáp án đúng:** **B**
* **Giải thích TẠI SAO đúng:** Tra cứu thông tin qua bên thứ ba (OSINT) giúp thu thập dữ liệu hệ thống mà không gửi bất kỳ lưu lượng mạng nào đến máy chủ của nạn nhân, do đó không để lại dấu vết.
* **Giải thích TẠI SAO các đáp án khác sai:** Đáp án A và D yêu cầu tương tác kỹ thuật trực tiếp; đáp án C yêu cầu tương tác xã hội trực tiếp. Tất cả đều thuộc nhóm trinh sát chủ động (Active Reconnaissance) hoặc quét mạng (Scanning).

#### Câu 2
* **Đáp án đúng:** **C**
* **Giải thích TẠI SAO đúng:** Mục tiêu tối cao của giai đoạn Duy trì quyền truy cập (Maintaining Access) là cài đặt các Backdoor, Trojan hoặc Rootkit để duy trì lối đi bí mật bất chấp lỗ hổng ban đầu có bị vá hay không.
* **Giải thích TẠI SAO các đáp án khác sai:** Giai đoạn A chỉ là bước đột nhập ban đầu; giai đoạn B là tìm lỗi; giai đoạn D là xóa tệp tin nhật ký (Logs).

#### Câu 3
* **Đáp án đúng:** **C**
* **Giải thích TẠI SAO đúng:** Bản chất của DDoS là làm tràn ngập lưu lượng rác khiến máy chủ cạn kiệt tài nguyên xử lý, dẫn đến việc dịch vụ bị tê liệt và từ chối phục vụ người dùng hợp pháp (sụp đổ Tính sẵn sàng).
* **Giải thích TẠI SAO các đáp án khác sai:** Tấn công DDoS không làm lộ lọt thông tin (không mất C) và không có khả năng chỉnh sửa cấu trúc dữ liệu lưu trữ (không mất I).

#### Câu 4
* **Đáp án đúng:** **B**
* **Giải thích TẠI SAO đúng:** Hacker mũ trắng luôn hành động dựa trên văn bản pháp lý rõ ràng (Hợp đồng Pen-test), trong khi hacker mũ xám thường tự ý hack trước rồi mới thông báo lỗi sau (bất hợp pháp).
* **Giải thích TẠI SAO các đáp án khác sai:** Trình độ và công cụ của hai bên là như nhau (A, D); cả hai đều có thể hướng tới tiền thưởng tìm lỗi Bug Bounty (C).

#### Câu 5
* **Đáp án đúng:** **B**
* **Giải thích TẠI SAO đúng:** Am hiểu sâu sắc về thói quen nhân sự, sơ đồ tổ chức và kiến trúc công nghệ của mục tiêu giúp xây dựng đòn đánh chính xác, tránh việc rà quét mù quáng gây tiếng động cho tường lửa.
* **Giải thích TẠI SAO các đáp án khác sai:** Trinh sát không phá vỡ mã hóa (A), không xóa log (C), và phần lớn dựa trên thông tin mở công cộng nên không đòi hỏi quyền đặc quyền quản trị (D).

#### Câu 6
* **Đáp án đúng:** **A**
* **Giải thích TẠI SAO đúng:** Hệ thống backup liên tục giúp đảm bảo dữ liệu luôn sẵn sàng để khôi phục khi gặp sự cố (A tốt), nhưng việc để trống mật khẩu lưu trữ đã trực tiếp phá hủy hoàn toàn Tính bảo mật (C xấu).
* **Giải thích TẠI SAO các đáp án khác sai:** Việc bỏ quên mật khẩu không thể gọi là bảo mật mạnh mẽ (B, C); Tính sẵn sàng đang ở mức rất cao chứ không bị suy giảm (D).

#### Câu 7
* **Đáp án đúng:** **B**
* **Giải thích TẠI SAO đúng:** Đây là quy luật bất đối xứng kinh điển của ngành an ninh mạng, đặt áp lực cực lớn lên người phòng thủ vì hacker mũ đen có thể kiên nhẫn tìm kiếm chỉ một lỗi nhỏ trong hàng vạn thiết bị cấu hình sai.
* **Giải thích TẠI SAO các đáp án khác sai:** Người phòng thủ luôn ở thế bị động (A); hacker sử dụng công cụ opensource chi phí cực rẻ (C); tường lửa đắt tiền không thể ngăn chặn các đòn lừa đảo tâm lý nhắm vào con người (D).

#### Câu 8
* **Đáp án đúng:** **B**
* **Giải thích TẠI SAO đúng:** Hành vi tự ý chỉnh sửa, làm sai lệch dữ liệu gốc khi chưa được phép chính là hành vi phá hoại Tính toàn vẹn (Integrity) của thông tin.
* **Giải thích TẠI SAO các đáp án khác sai:** Hệ thống không bị lộ thông tin ra ngoài (không mất C) và trang web vẫn truy cập bình thường (không mất A).

#### Câu 9
* **Đáp án đúng:** **B**
* **Giải thích TẠI SAO đúng:** Bài đăng vô tình tiết lộ tên các phiên bản phần mềm rất cũ và lỗi thời (Windows Server 2012 R2, MySQL 5.6). Chuyên gia bảo mật nhận diện được điều này dưới góc nhìn trinh sát bị động để cảnh báo công ty sửa lại JD trước khi hacker khai thác.
* **Giải thích TẠI SAO các đáp án khác sai:** Thông tin này rất nguy hiểm chứ không vô hại (A); hành động này không cài backdoor (C) và không phá hoại băng thông mạng (D).

#### Câu 10
* **Đáp án đúng:** **B**
* **Giải thích TẠI SAO đúng:** Doanh nghiệp nhỏ thường chủ quan nghĩ mình không phải mục tiêu quan trọng, quên rằng hacker dùng bot quét tự động toàn bộ Internet để tìm mật khẩu yếu. Việc buông lỏng chính sách mật khẩu (để nhân viên đặt `123456`) đã làm sụp đổ pháo đài bảo mật.
* **Giải thích TẠI SAO các đáp án khác sai:** Lỗi ở đây thuộc về khâu quản lý chính sách định danh yếu kém, không phải lỗi tại máy in (A), thuật toán mã hóa (C) hay việc phân bổ thời gian trinh sát (D).