Dưới đây là bộ quiz 10 câu trắc nghiệm hoàn chỉnh cho nội dung **NGÀY 11: Thâm nhập hệ thống và Bẻ khóa mật khẩu**, được thiết kế phân loại theo 3 mức độ (Nhận biết, Thông hiểu, Vận dụng) với đầy đủ đáp án và giải thích chi tiết. Định dạng này rất thuận tiện để thầy/cô in ấn hoặc sao chép nhanh lên các nền tảng trực tuyến như Google Form, Quizizz hoặc Kahoot.

---

### PHẦN I: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

#### Câu 1: Công cụ nào sau đây được tích hợp sẵn trong Kali Linux và thường được sử dụng phổ biến nhất để thực hiện bẻ khóa mật khẩu ngoại tuyến (Offline Password Cracking)?

* A. Nmap
* B. John the Ripper
* C. Wireshark
* D. Nikto

**Đáp án đúng:** B

* **Giải thích tại sao đúng:** John the Ripper (cùng với Hashcat) là công cụ mã nguồn mở huyền thoại, chuyên biệt cho việc bẻ khóa mật khẩu ngoại tuyến bằng phương pháp tấn công từ điển hoặc vét cạn.
* **Giải thích tại sao các đáp án khác sai:** A sai vì Nmap là công cụ dùng để quét cổng và dò tìm dịch vụ mạng. C sai vì Wireshark là công cụ bắt và phân tích gói tin trên đường truyền. D sai vì Nikto là công cụ quét lỗ hổng ứng dụng web.

#### Câu 2: Trong kỹ thuật bảo mật mật khẩu, khái niệm "Salt" (Muối băm) được định nghĩa là gì?

* A. Một thuật toán mã hóa đối xứng dùng để khóa tệp cơ sở dữ liệu.
* B. Một chuỗi ký tự ngẫu nhiên được hệ thống tự động chèn thêm vào mật khẩu trước khi thực hiện băm.
* C. Một dạng phần mềm độc hại có chức năng ghi lại các ký tự được gõ từ bàn phím.
* D. Giới hạn số lần nhập sai mật khẩu tối đa trước khi tài khoản bị khóa.

**Đáp án đúng:** B

* **Giải thích tại sao đúng:** Salt là một chuỗi dữ liệu ngẫu nhiên được thêm vào mật khẩu gốc nhằm làm thay đổi giá trị đầu ra của hàm băm, chống lại các hình thức tấn công tra cứu bảng băm có sẵn.
* **Giải thích tại sao các đáp án khác sai:** A sai vì Salt không phải thuật toán mã hóa đối xứng mà là dữ liệu bổ trợ cho hàm băm. C sai vì đây là định nghĩa của Keylogger. D sai vì đây là chính sách khóa tài khoản (Account Lockout Policy).

#### Câu 3: Hàm băm mật khẩu (Password Hash) có đặc điểm cốt lõi nào dưới đây?

* A. Là một hàm toán học hai chiều, có thể giải mã ngược lại bằng khóa bí mật.
* B. Là một hàm xử lý một chiều, không thể biến đổi chuỗi băm kết quả ngược lại thành văn bản thô ban đầu.
* C. Chỉ hoạt động hiệu quả khi mật khẩu chứa toàn bộ ký tự đặc biệt.
* D. Tự động gửi mật khẩu của người dùng về máy chủ quản trị dưới dạng văn bản thô (Plaintext).

**Đáp án đúng:** B

* **Giải thích tại sao đúng:** Hàm băm là thuật toán một chiều (One-way function). Về mặt lý thuyết và kỹ thuật, không thể suy ngược lại mật khẩu gốc từ chuỗi băm thu được.
* **Giải thích tại sao các đáp án khác sai:** A sai vì hàm băm không có tính chất giải mã ngược bằng khóa (đó là mã hóa). C sai vì hàm băm chấp nhận mọi chuỗi ký tự đầu vào. D sai vì hàm băm che giấu hoàn toàn văn bản thô để bảo vệ dữ liệu.

#### Câu 4: Tệp tin nào trên hệ điều hành Linux chứa toàn bộ chuỗi băm mật khẩu của người dùng hệ thống mà hacker luôn tìm cách trích xuất?

* A. `/etc/passwd`
* B. `/etc/hosts`
* C. `/etc/shadow`
* D. `/etc/fstab`

**Đáp án đúng:** C

* **Giải thích tại sao đúng:** Trên các hệ điều hành Linux hiện đại, để đảm bảo an toàn, chuỗi băm mật khẩu được chuyển hoàn toàn từ tệp `/etc/passwd` sang tệp `/etc/shadow` và chỉ có quyền root mới đọc được.
* **Giải thích tại sao các đáp án khác sai:** A sai vì tệp `/etc/passwd` ngày nay chỉ lưu thông tin cơ bản về user (UID, GID, thư mục nhà) chứ không lưu chuỗi băm mật khẩu. B sai vì tệp `/etc/hosts` dùng để ánh xạ tên miền cục bộ sang IP. D sai vì tệp `/etc/fstab` chứa cấu hình gắn kết (mount) các ổ đĩa hệ thống.

---

### PHẦN II: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

#### Câu 5: Tại sao cuộc tấn công bẻ khóa mật khẩu bằng phương pháp "Từ điển" (Dictionary Attack) thường được ưu tiên thực hiện trước cuộc tấn công "Vét cạn" (Brute-Force Attack)?

* A. Vì tấn công từ điển luôn đạt tỷ lệ chính xác tuyệt đối 100% đối với mọi loại mật khẩu.
* B. Vì tấn công từ điển tốn ít tài nguyên và thời gian xử lý hơn do chỉ tập trung quét các chuỗi ký tự có tính phổ biến cao.
* C. Vì tấn công từ điển phá hủy hoàn toàn cơ chế bảo vệ "Salt" của hệ thống mục tiêu.
* D. Vì tấn công từ điển được thực hiện trực tiếp trên giao diện đăng nhập (Online) mà không bị tường lửa ngăn chặn.

**Đáp án đúng:** B

* **Giải thích tại sao đúng:** Con người thường đặt mật khẩu dựa trên thói quen tâm lý (từ ngữ có nghĩa, số dễ nhớ). Do đó, thử danh sách các mật khẩu phổ biến trước sẽ giúp hacker tiết kiệm hàng năm trời so với việc thử mò từng ký tự ngẫu nhiên của đòn Brute-Force.
* **Giải thích tại sao các đáp án khác sai:** A sai vì nếu người dùng đặt mật khẩu hoàn toàn ngẫu nhiên và phức tạp, tấn công từ điển sẽ thất bại. C sai vì tấn công từ điển không phá hủy được Salt; nếu có Salt, hacker vẫn phải băm kèm Salt cho từng từ trong từ điển. D sai vì tấn công từ điển trong bài học được chạy Offline trên máy hacker sau khi thu thập tệp băm.

#### Câu 6: Việc người phòng thủ cấu hình sử dụng các hàm băm "chậm" như Bcrypt hay Scrypt thay cho các hàm băm tốc độ cao như MD5 hay SHA-256 nhằm mục đích cốt lõi gì?

* A. Để tiết kiệm dung lượng lưu trữ cơ sở dữ liệu của máy chủ doanh nghiệp.
* B. Để ép buộc máy tính của hacker phải tiêu tốn nhiều năng lượng CPU/RAM hơn cho mỗi lần thử chuỗi băm, làm giảm tốc độ bẻ khóa một cách đáng kể.
* C. Để ngăn chặn hoàn toàn việc nhân viên vô tình tiết lộ mật khẩu qua các cuộc gọi điện thoại.
* D. Để tăng tốc độ phản hồi đăng nhập của người dùng khi hệ thống bị quá tải traffic.

**Đáp án đúng:** B

* **Giải thích tại sao đúng:** Các hàm băm như MD5 hay SHA-256 được thiết kế để kiểm tra tính toàn vẹn dữ liệu cực nhanh (hàng tỷ phép tính/giây). Nếu dùng chúng cho mật khẩu, dàn GPU của hacker sẽ bẻ khóa rất nhanh. Các hàm băm chậm ép thiết bị xử lý phải tốn một khoảng thời gian trễ nhất định cho mỗi lần tính toán, khiến việc thử hàng tỷ mật khẩu trở nên bất khả thi về mặt thời gian.
* **Giải thích tại sao các đáp án khác sai:** A sai vì hàm băm chậm không có tác dụng tiết kiệm dung lượng đĩa. C sai vì hàm băm chậm thuộc lớp kỹ thuật phần mềm, không can thiệp được vào hành vi xã hội (Social Engineering) của con người. D sai vì nó làm giảm tốc độ xử lý đăng nhập (tuy nhiên độ trễ này con người không cảm nhận rõ, nhưng máy tính của hacker thì bị ảnh hưởng nặng nề).

#### Câu 7: Điểm khác biệt mấu chốt giữa hình thức tấn công mật khẩu Trực tuyến (Online Attack) và Ngoại tuyến (Offline Cracking) là gì?

* A. Tấn công Online không cần kết nối mạng, còn tấn công Offline yêu cầu kết nối Internet băng thông rộng liên tục.
* B. Tấn công Online gửi yêu cầu thử trực tiếp vào trang đăng nhập hệ thống và dễ bị cơ chế khóa tài khoản chặn đứng; trong khi tấn công Offline bẻ khóa tệp băm lưu cục bộ trên máy của hacker mà hệ thống nạn nhân không hề hay biết.
* C. Tấn công Online chỉ dùng được phương pháp vét cạn, còn tấn công Offline chỉ dùng được phương pháp từ điển.
* D. Tấn công Offline vi phạm pháp luật nghiêm trọng, còn tấn công Online là hành vi hợp pháp trong kiểm thử an ninh.

**Đáp án đúng:** B

* **Giải thích tại sao đúng:** Tấn công Online tương tác trực tiếp với dịch vụ đang chạy, chịu giới hạn bởi tốc độ mạng và cơ chế chống Brute-force (khóa tài khoản sau 5 lần nhập sai). Tấn công Offline xử lý trực tiếp trên tệp băm đã lấy cắp được, hacker có toàn quyền dùng sức mạnh phần cứng máy mình để quét mà không để lại bất kỳ cảnh báo nào trên máy chủ nạn nhân.
* **Giải thích tại sao các đáp án khác sai:** A sai vì định nghĩa bị ngược hoàn toàn. C sai vì cả hai môi trường đều có thể áp dụng các phương pháp này, nhưng Online bị giới hạn số lần thử. D sai vì bất kỳ hành vi nào không được cấp phép bằng văn bản thỏa thuận đều là bất hợp pháp.

---

### PHẦN III: MỨC ĐỘ VẬN DỤNG (3 CÂU)

#### Câu 8: Một công ty áp dụng chính sách bắt buộc nhân viên đặt mật khẩu dài tối thiểu 8 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt (ví dụ: `P@ss123!`). Dưới góc nhìn kiểm thử an ninh mạng, mật khẩu này có điểm yếu chí mạng nào trước đòn tấn công lai (Hybrid Attack)?

* A. Thuật toán của John the Ripper không thể nhận diện được ký tự `@`.
* B. Nhân viên có xu hướng đặt ký tự theo các khuôn mẫu tâm lý cố định như viết hoa chữ cái đầu tiên, đặt ký tự đặc biệt ở cuối cùng, khiến công cụ bẻ khóa dễ dàng đoán biết quy luật cấu trúc.
* C. Mật khẩu có ký tự đặc biệt sẽ làm tăng tốc độ xử lý đồ họa của card GPU phía hacker.
* D. Hệ thống sẽ tự động vô hiệu hóa cơ chế thêm muối (Salting) nếu mật khẩu có độ phức tạp cao.

**Đáp án đúng:** B

* **Giải thích tại sao đúng:** Đây là lỗi tâm lý kinh điển. Dù hệ thống ép đặt ký tự phức tạp, con người vẫn chọn cách dễ nhớ nhất như đổi `a` thành `@`, `i` thành `1`, viết hoa chữ đầu. Tấn công lai sử dụng các bộ quy tắc (Rules) để tự động biến đổi từ điển theo đúng thói quen này, biến mật khẩu phức tạp trên bề nổi thành bia ngắm dễ dàng.
* **Giải thích tại sao các đáp án khác sai:** A sai vì các công cụ bẻ khóa xử lý tất cả ký tự mã ASCII/Unicode bình thường. C sai vì ký tự phức tạp làm tăng thời gian bẻ khóa vét cạn chứ không làm tăng tốc độ xử lý của GPU. D sai vì cơ chế Salt do hệ thống quy định cấu hình, không phụ thuộc vào chuỗi ký tự người dùng nhập.

#### Câu 9: Trong một đợt kiểm thử an ninh (Penetration Testing), bạn đã chiếm được quyền Root trên máy chủ Linux giả lập của khách hàng và trích xuất thành công chuỗi băm sau từ hệ thống: `$6$rounds=5000$saltstring$...`. Dựa vào công cụ nhận diện cấu trúc băm, ký tự `$6$` ở đầu chuỗi băm cho bạn biết hệ thống đang sử dụng thuật toán băm mật khẩu nào?

* A. MD5
* B. SHA-1
* C. SHA-512
* D. Bcrypt

**Đáp án đúng:** C

* **Giải thích tại sao đúng:** Theo quy chuẩn định dạng lưu trữ mật khẩu mã nguồn mở của các bản phân phối Linux (crypt format), ký tự mã hóa đầu ngữ quy định: `$1$` là MD5, `$5$` là SHA-256, và `$6$` chính là dấu hiệu của thuật toán SHA-512 bảo mật cao hơn.
* **Giải thích tại sao các đáp án khác sai:** A, B, D sai vì chúng có định dạng chữ ký chuỗi băm (nhãn prefix) hoàn toàn khác biệt trong kiến trúc lưu trữ hệ thống tệp bóng tối (Shadow file).

#### Câu 10: Bạn được giao nhiệm vụ nâng cấp hệ thống an toàn thông tin cho một ứng dụng web nội bộ của doanh nghiệp chống lại đòn tấn công bẻ khóa mật khẩu bằng dàn máy GPU công suất lớn. Giải pháp nào sau đây mang lại hiệu quả phòng thủ tối ưu nhất?

* A. Tăng cấu hình máy chủ web lên gấp đôi để xử lý traffic nhanh hơn.
* B. Chuyển đổi toàn bộ cơ sở dữ liệu mật khẩu sang băm bằng thuật toán Argon2, kết hợp áp dụng chính sách mật khẩu dài dạng cụm từ (Passphrase) tối thiểu 14 ký tự và kích hoạt xác thực 2 lớp (2FA).
* C. Yêu cầu toàn bộ nhân viên đổi mật khẩu 2 ngày một lần để làm nhiễu thông tin của hacker.
* D. Viết mã nguồn ẩn hoàn toàn nút đăng nhập trên giao diện web đối với các dải IP lạ ngoài văn phòng.

**Đáp án đúng:** B

* **Giải thích tại sao đúng:** Thuật toán Argon2 là hàm băm mật khẩu hiện đại nhất (thắng giải Password Hashing Competition), có khả năng chống lại tối đa sức mạnh tính toán song song của GPU/ASIC nhờ cơ chế cấu hình chiếm dụng bộ nhớ (Memory-hard). Kết hợp với Passphrase (độ dài triệt tiêu Brute-force) và 2FA (lá chắn cuối cùng khi lộ mật khẩu) sẽ tạo ra chuỗi phòng thủ chiều sâu hoàn hảo.
* **Giải thích tại sao các đáp án khác sai:** A sai vì tăng cấu hình máy chủ web không làm thay đổi độ mạnh của thuật toán băm bảo vệ lõi dữ liệu bên trong. C sai vì bắt đổi mật khẩu quá dày (2 ngày/lần) sẽ phản tác dụng, nhân viên sẽ đặt những mật khẩu cực kỳ ngắn, dễ đoán hoặc ghi ra giấy dán ở bàn làm việc. D sai vì đây là giải pháp bảo mật theo kiểu che giấu bề nổi (Security through obscurity), không giải quyết được gốc rễ bài toán nếu tệp cơ sở dữ liệu bị rò rỉ từ hướng tấn công khác (như SQL Injection).