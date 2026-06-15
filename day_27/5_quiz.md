Dưới đây là bộ quiz 10 câu trắc nghiệm chuyên sâu phục vụ cho nội dung **NGÀY 27: TẤN CÔNG MẠNG KHÔNG DÂY (WI-FI HACKING) & CHIẾN LƯỢC NÂNG CẤP WPA3**.

Cấu trúc bộ câu hỏi được phân tách rõ ràng theo đúng 3 cấp độ nhận thức (4 Nhận biết, 3 Thông hiểu, 3 Vận dụng), sử dụng tư duy kỹ thuật chuẩn CEH v11 và được định dạng tối ưu để thầy/cô dễ dàng in ấn hoặc copy-paste lên Google Forms, Quizizz, Kahoot.

---

### PHẦN I: BÀI KIỂM TRA (DÀNH CHO HỌC VIÊN)

#### MỨC ĐỘ 1: NHẬN BIẾT (4 CÂU)

**Câu 1:** Chuẩn mã hóa Wi-Fi quốc dân WPA2-PSK sử dụng thuật toán mã hóa cốt lõi nào sau đây để bảo vệ luồng dữ liệu truyền tải?
A. RC4
B. DES
C. MD5
D. AES

**Câu 2:** Giao thức nào sau đây được tích hợp vào chuẩn bảo mật thế hệ mới WPA3 nhằm thay thế cơ chế xác thực Pre-Shared Key (PSK) lỗi thời của WPA2?
A. TKIP
B. CCMP
C. SAE (Simultaneous Authentication of Equals)
D. EAP-TLS

**Câu 3:** Để thực hiện việc rình rập và thu giữ lưu lượng mạng Wi-Fi của các thiết bị xung quanh một cách chủ động, card mạng không dây của kẻ tấn công bắt buộc phải chuyển sang chế độ hoạt động nào?
A. Managed Mode
B. Monitor Mode
C. Ad-Hoc Mode
D. Promiscuous Mode trong mạng dây

**Câu 4:** Quá trình trao đổi khóa mã hóa diễn ra công khai giữa thiết bị khách (Client) và trạm phát sóng (Access Point) trong cấu hình bảo mật WPA2 được gọi là gì?
A. 3-Way Handshake
B. 4-Way Handshake
C. Diffie-Hellman Handshake
D. RADIUS Handshake

---

#### MỨC ĐỘ 2: THÔNG HIỂU (3 CÂU)

**Câu 5:** Tại sao đòn tấn công bẻ khóa mật khẩu ngoại tuyến (Offline Dictionary Attack) nhắm vào tệp tin `.cap/.pcap` thu giữ được từ quy trình WPA2 Handshake lại cực kỳ nguy hiểm đối với hệ thống?
A. Vì nó gây cạn kiệt tài nguyên băng thông và làm sập thiết bị Router Wi-Fi của mục tiêu.
B. Vì kẻ tấn công có thể mang file này về hệ thống riêng của họ để rà quét mật khẩu thông qua sức mạnh xử lý của GPU mà thiết bị phát sóng của nạn nhân không hề hay biết để ngăn chặn hay khóa IP.
C. Vì gói tin Handshake thu giữ được luôn chứa mật khẩu Wi-Fi của nạn nhân dưới dạng văn bản rõ (Plaintext).
D. Vì đòn tấn công này giúp hacker tự động chiếm đặc quyền root trên máy chủ RADIUS nội bộ.

**Câu 6:** Điểm yếu logic cốt lõi nào thuộc quy trình bắt tay của giao thức WPA2 đã bị đòn tấn công KRACKs (Key Reinstallation Attacks) khai thác vào năm 2017?
A. Độ dài của Vectơ khởi tạo (IV) chỉ có 24-bit dẫn đến va chạm khóa.
B. Thiết bị AP gửi mật khẩu trực tiếp qua không gian không mã hóa ở bước thứ 4.
C. Logic hệ thống cho phép ép thiết bị khách cài đặt lại một khóa mã hóa đã từng sử dụng khi gói tin ở Bước 3 bị truyền lại, làm mất tính ngẫu nhiên của bộ đếm mật mã.
D. Cơ chế bắt buộc thiết bị khách phải sử dụng thuật toán băm yếu MD4 để kiểm tra MIC.

**Câu 7:** Bản chất toán học nào giúp giao thức SAE trong WPA3 triệt tiêu hoàn toàn nguy cơ bị bẻ khóa mật khẩu bằng đòn tấn công từ điển ngoại tuyến (Offline Dictionary Attack)?
A. SAE sử dụng thuật toán trao đổi khóa dựa trên bài toán hình học đường cong Elliptic (Diffie-Hellman), buộc kẻ tấn công phải thực hiện một phiên tương tác trực tiếp (Online) với Router cho mỗi lần đoán mật mã.
B. SAE tự động thay đổi độ dài mật khẩu của người dùng lên thành 256 ký tự ngẫu nhiên.
C. SAE mã hóa toàn bộ tên sóng Wi-Fi (SSID) khiến card mạng hacker không thể dò quét được.
D. SAE loại bỏ hoàn toàn việc tính toán mã integrity MIC trong luồng truyền tin.

---

#### MỨC ĐỘ 3: VẬN DỤNG (3 CÂU)

**Câu 8:** Đang ngồi trong văn phòng công ty, điện thoại của một nhân viên đột ngột bị mất kết nối Wi-Fi liên tục trong vòng 10 giây, sau đó tự động kết nối lại. Khi bật công cụ giám sát Wireshark lên rà soát, chuyên gia SOC phát hiện một chuỗi các gói tin quản trị (Management Frames) gửi liên tục mang mã code ngắt kết nối lặp đi lặp lại nhắm vào địa chỉ MAC của điện thoại đó. Hệ thống văn phòng đang bị tấn công bởi kỹ thuật nào?
A. MAC Flooding Attack
B. KRACKs Attack
C. Deauthentication Attack
D. Rogue Access Point Insertion

**Câu 9:** Một chuyên gia bảo mật tiến hành kiểm thử mạng Wi-Fi WPA2 nội bộ của một doanh nghiệp. Sau khi ngắt kết nối một máy trạm và bắt thành công gói tin WPA Handshake, chuyên gia này sử dụng file từ điển `rockyou.txt` chứa 14 triệu mật khẩu để chạy lệnh giải mã nhưng kết quả báo `KEY NOT FOUND`. Kết luận nào sau đây là chính xác nhất về mặt kỹ thuật?
A. Hệ thống Wi-Fi này đã được nâng cấp lên WPA3 nên không thể dùng file handshake.
B. Mật khẩu Wi-Fi hiện tại của doanh nghiệp là một mật khẩu mạnh, không nằm trong danh sách các mật khẩu phổ biến của tệp từ điển thử nghiệm.
C. Card mạng của chuyên gia bảo mật chưa bật chế độ Monitor Mode nên file bắt tay bị lỗi cấu trúc.
D. Thiết bị Router của doanh nghiệp đã chặn đứng địa chỉ IP của chuyên gia bảo mật trong quá trình bẻ khóa ngoại tuyến.

**Câu 10:** Bạn được thuê làm kiến trúc sư an ninh mạng cho một ngân hàng lớn. Để ngăn chặn triệt để đòn tấn công Ngắt kết nối (Deauthentication Attack) nhằm phá hoại hoặc ép người dùng văng ra ngoài để bắt Handshake, bạn cần cấu hình tính năng kỹ thuật nào sau đây trên hệ thống Controller/Access Point?
A. Tắt tính năng phát quảng bá tên sóng Wi-Fi (Disable SSID Broadcasting).
B. Kích hoạt tính năng bảo vệ gói tin quản trị 802.11w - MFP (Management Frame Protection).
C. Cấu hình bộ lọc địa chỉ MAC (MAC Filtering List) chỉ cho phép thiết bị của nhân viên kết nối.
D. Nâng cấp băng thông đường truyền internet của nhà mạng lên gấp đôi.

---

### PHẦN II: ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

**Câu 1: Chọn D**

* **TẠI SAO ĐÚNG:** Chuẩn WPA2 ra đời năm 2004 bắt buộc sử dụng thuật toán mã hóa đối xứng cực mạnh là **AES (Advanced Encryption Standard)** kết hợp với cơ chế kiểm tra toàn vẹn CCMP nhằm thay thế triệt để thuật toán mã hóa dòng RC4 bị lỗi của WEP.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A sai vì RC4 là thuật toán của chuẩn WEP và WPA-TKIP; B và C không phải thuật toán mã hóa cốt lõi được định nghĩa trong kiến trúc WPA2 CCMP.

**Câu 2: Chọn C**

* **TẠI SAO ĐÚNG:** WPA3 giới thiệu giao thức toán học **SAE (Simultaneous Authentication of Equals)** để thay thế cơ chế xác thực Pre-Shared Key (PSK) cũ của WPA2, giúp bảo vệ người dùng khỏi đòn tấn công Brute-force/Dictionary ngoại tuyến.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A là cơ chế vá lỗi tạm thời của WPA1; B là giao thức bảo mật của WPA2; D là một phương thức xác thực tầng ứng dụng dựa trên chứng chỉ số của mạng Enterprise chứ không phải giao thức thay thế PSK lõi của WPA3.

**Câu 3: Chọn B**

* **TẠI SAO ĐÚNG:** **Monitor Mode** là chế độ đặc biệt của card mạng không dây, cho phép nó bắt và đọc tất cả các gói tin (gói tin quản trị, gói tin dữ liệu) di chuyển trong không gian của một tần số sóng mà không cần phải thực hiện kết nối (associate/authenticate) vào bất kỳ Access Point nào.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A là chế độ kết nối Wi-Fi thông thường; C là chế độ kết nối ngang hàng giữa 2 máy tính; D là chế độ nghe lén của card mạng dây (Ethernet) trên Switch chứ không phải card không dây.

**Câu 4: Chọn B**

* **TẠI SAO ĐÚNG:** Quy trình xác thực và tạo khóa mã hóa tạm thời (PTK/GTK) giữa Client và AP trong mạng WPA2 sử dụng tổng cộng 4 gói tin di chuyển qua lại, do đó nó có tên gọi kỹ thuật chính thức là **4-Way Handshake**.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A là quy trình thiết lập phiên của giao thức TCP tầng mạng dây; C và D không phải tên gọi của quy trình xác thực không dây này.

**Câu 5: Chọn B**

* **TẠI SAO ĐÚNG:** Bản chất nguy hiểm của Offline Attack là sau khi thu được file handshake, hacker xử lý bẻ khóa hoàn toàn trên máy tính riêng của họ. Quá trình này không gửi bất kỳ yêu cầu nào đến Router Wi-Fi mục tiêu, vì vậy Router hoàn toàn "bị mù" và không thể bật các tính năng bảo vệ như chặn IP hay khóa tài khoản.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A sai vì tấn công offline không tốn băng thông mục tiêu; C sai vì gói tin handshake chỉ chứa mã băm integrity MIC để kiểm tra chứ không chứa mật khẩu rõ; D sai vì đây là mạng Personal (PSK), không liên quan đến máy chủ RADIUS.

**Câu 6: Chọn C**

* **TẠI SAO ĐÚNG:** Lỗ hổng **KRACKs** nằm ở Bước 3 của quy trình bắt tay WPA2. Nếu gói tin Bước 3 bị mất hoặc bị hacker chặn, AP sẽ gửi lại. Khi Client nhận lại gói tin này, logic của WPA2 ép Client phải cài đặt lại (reinstall) khóa mã hóa đã tạo, làm thiết lập lại bộ đếm gói tin (Nonces/Counters) về giá trị ban đầu, khiến luồng mã hóa dòng bị lặp lại và bị hacker giải mã dữ liệu.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A là lỗi của WEP; B sai vì WPA2 không bao giờ truyền mật khẩu rõ; D sai vì WPA2 dùng thuật toán mã hóa khối AES kèm mã MIC của CCMP chứ không dùng MD4.

**Câu 7: Chọn A**

* **TẠI SAO ĐÚNG:** Giao thức SAE dựa trên cơ chế toán học trao đổi khóa Diffie-Hellman (đường cong Elliptic). Cấu trúc toán học này đảm bảo dữ liệu bắt được trong không khí không đủ để thực hiện tính toán thử-sai mật khẩu ngoại tuyến. Mỗi lần muốn thử một mật khẩu mới, hacker buộc phải tương tác trực tiếp (**Online Handshake**) với Router, giúp Router dễ dàng phát hiện và chặn đứng hành vi dò mật mã.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** B sai vì người dùng vẫn đặt mật khẩu ngắn dài tùy ý; C sai vì SAE không ẩn SSID; D sai vì cơ chế kiểm tra tính toàn vẹn luôn luôn bắt buộc phải có trong mật mã an ninh mạng.

**Câu 8: Chọn C**

* **TẠI SAO ĐÚNG:** Gói tin giả mạo mang lệnh ngắt kết nối truyền liên tiếp trong không khí chính là đòn tấn công **Deauthentication Attack** (Deauth). Mục tiêu của hacker là chủ động ép điện thoại nạn nhân văng ra khỏi mạng để ngay khi điện thoại tự động kết nối lại, hacker sẽ bắt lấy gói tin bắt tay 4 bước (4-Way Handshake).
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A là đòn tấn công làm tràn bảng CAM của Switch mạng dây; B là tấn công giải mã dữ liệu logic phiên; D là hành vi cắm trộm một cục phát Wi-Fi giả mạo vào hệ thống.

**Câu 9: Chọn B**

* **TẠI SAO ĐÚNG:** Lệnh bẻ khóa báo `KEY NOT FOUND` có nghĩa là toàn bộ quy trình cấu trúc file bắt tay `.cap` thu được hoàn toàn chuẩn chỉnh, công cụ đã chạy rà soát qua hết 14 triệu mật khẩu mẫu trong file từ điển nhưng không có từ nào khớp. Điều này chứng minh mật khẩu thực tế của doanh nghiệp nằm ngoài danh mục từ điển phổ biến (Mật khẩu có độ phức tạp cao hoặc sử dụng chuỗi cụm từ passphrase ngẫu nhiên).
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A sai vì nếu là WPA3 chuyên gia đã không thể lấy được file handshake WPA2 truyền thống; C sai vì nếu chưa bật Monitor Mode thì ngay từ đầu đã không thể bắt được gói tin handshake hợp lệ để chạy lệnh; D sai vì đây là quá trình bẻ khóa offline trên máy tính chuyên gia, Router không thể can thiệp hay chặn được.

**Câu 10: Chọn B**

* **TẠI SAO ĐÚNG:** Bản chất các gói tin Deauthentication ở chuẩn 802.11 đời cũ truyền công khai dưới dạng text rõ không mã hóa, cho phép bất kỳ card mạng nào cũng có thể giả mạo địa chỉ MAC để gửi lệnh ngắt kết nối. Chuẩn **802.11w - MFP (Management Frame Protection)** ra đời để mã hóa các gói tin quản trị này. Khi tính năng này được bật, thiết bị khách sẽ bỏ qua hoàn toàn các gói tin Deauth giả mạo không có khóa mã hóa hợp lệ từ hacker.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A vô ích vì thiết bị của nhân viên vẫn phát probe request lộ tên; C vô ích vì hacker dễ dàng giả mạo địa chỉ MAC (MAC Spoofing) của máy đang kết nối; D không giải quyết được lỗ hổng logic của giao thức mạng.