Chào các thầy cô! Dưới đây là bộ quiz 10 câu hỏi trắc nghiệm được biên soạn chi tiết theo lộ trình và chuẩn tài liệu CEH v11 dành cho **NGÀY 29: BẢO MẬT ĐIỆN TOÁN ĐÁM MÂY & ĐỒNG BỘ AN TOÀN IOT/OT**.

Bộ câu hỏi tuân thủ đúng ma trận nhận thức (4 Nhận biết, 3 Thông hiểu, 3 Vận dụng), loại bỏ hoàn toàn các câu hỏi "đố mẹo" hoặc "đoán mò", tập trung hoàn toàn vào kỹ thuật và tư duy thực tế để dễ dàng đồng bộ lên Google Forms, Quizizz, Kahoot.

---

### PHẦN I: BÀI KIỂM TRA (DÀNH CHO HỌC VIÊN)

#### MỨC ĐỘ 1: NHẬN BIẾT (4 CÂU KHẢO SÁT GHI NHỚ)

**Câu 1:** Theo Mô hình trách nhiệm chung (Shared Responsibility Model) của các nhà cung cấp dịch vụ đám mây lớn (AWS, Azure, Google Cloud), thành phần nào sau đây hoàn toàn thuộc trách nhiệm cấu hình bảo mật của **khách hàng (Customer)** trong mô hình dịch vụ IaaS?

* A. Bảo mật vật lý tại trung tâm dữ liệu (Data Center).
* B. Hệ điều hành khách (Guest OS) và cấu hình tường lửa mạng ảo (Security Groups).
* C. Lớp ảo hóa hạ tầng (Hypervisor).
* D. Tính toàn vẹn của phần cứng máy chủ vật lý.

**Câu 2:** Mô hình dịch vụ đám mây nào mà nhà cung cấp chuẩn bị sẵn môi trường thực thi, hệ điều hành và cơ sở dữ liệu nền tảng, cho phép lập trình viên chỉ cần tập trung đẩy mã nguồn ứng dụng (code) lên chạy mà không cần quan tâm cấu hình hệ điều hành?

* A. Infrastructure as a Service (IaaS)
* B. Software as a Service (SaaS)
* C. Platform as a Service (PaaS)
* D. Storage as a Service (STaaS)

**Câu 3:** Lý do cốt lõi nào khiến các thiết bị thông minh IoT (Internet of Things) thường trở thành mục tiêu bẻ khóa và tuyển dụng vào mạng lưới máy tính ma (Botnet) diện rộng của hacker?

* A. Giao thức mạng IoT luôn chạy thuật toán mã hóa quá nặng gây sập băng thông.
* B. Chip xử lý yếu nên không thể cài phần mềm diệt virus, đi kèm thói quen dùng mật khẩu mặc định của người dùng.
* C. Thiết bị IoT không sử dụng địa chỉ IP để định tuyến trên Internet.
* D. Nhà sản xuất luôn tắt hoàn toàn các cổng kết nối mạng của thiết bị IoT.

**Câu 4:** Trong môi trường vận hành công nghiệp (Operational Technology - OT), hệ thống nào thường được sử dụng để giám sát, thu thập dữ liệu tập trung và gửi lệnh điều khiển xuống các bộ điều khiển lập trình PLC/thiết bị phần cứng nhà máy?

* A. Identity and Access Management (IAM)
* B. Supervisory Control and Data Acquisition (SCADA)
* C. Mobile Device Management (MDM)
* D. Cloud Access Security Broker (CASB)

---

#### MỨC ĐỘ 2: THÔNG HIỂU (3 CÂU KIỂM TRA BẢN CHẤT)

**Câu 5:** Một kỹ sư thiết kế hệ thống phát biểu: "Khi chúng ta chuyển toàn bộ hạ tầng từ IaaS lên sử dụng SaaS (ví dụ: chuyển từ tự cài đặt Mail Server trên máy chủ ảo sang dùng Microsoft 365/Gmail), rủi ro an ninh thông tin của doanh nghiệp sẽ giảm về bằng 0 vì nhà cung cấp đã lo hết". Phát biểu này **SAI** kỹ thuật vì lý do nào?

* A. Nhà cung cấp SaaS không chịu trách nhiệm bảo mật lớp vật lý hạ tầng dữ liệu.
* B. Doanh nghiệp vẫn phải tự chịu trách nhiệm tối cao đối với dữ liệu, phân quyền tài khoản (IAM) và rủi ro rò rỉ mật khẩu của nhân viên.
* C. Mô hình SaaS yêu cầu khách hàng phải tự viết lại toàn bộ mã nguồn lõi của phần mềm.
* D. Trên thực tế, mô hình SaaS có mức độ rủi ro phần cứng cao hơn rất nhiều so với IaaS.

**Câu 6:** Bản chất logic khác biệt lớn nhất giữa kiến trúc mạng Công nghệ thông tin (IT) truyền thống và mạng Công nghệ vận hành nhà máy (OT) khi đối diện với bài toán an ninh mạng là gì?

* A. IT đặt ưu tiên cao nhất vào tính Bảo mật (Confidentiality), trong khi OT đặt ưu tiên tuyệt đối vào tính Sẵn sàng (Availability) và tính liên tục.
* B. Mạng IT không bao giờ sử dụng Internet, mạng OT kết nối Internet 24/7.
* C. Hệ thống OT thay đổi phiên bản phần mềm hàng ngày, hệ thống IT chạy ổn định hàng chục năm không vá lỗi.
* D. Mạng IT chỉ chạy trên Linux, còn mạng OT chỉ chạy trên Windows Server.

**Câu 7:** Vì sao việc sử dụng các công cụ rà quét lỗ hổng chủ động (Active Scanner) quét mạnh theo dải IP và cổng dịch vụ lại bị coi là **hành vi cấm kỵ** hoặc cực kỳ nguy hiểm trong môi trường mạng OT/SCADA?

* A. Vì các thiết bị OT sẽ tự động mã hóa toàn bộ dữ liệu máy chủ để chống lại lệnh quét.
* B. Vì các gói tin rác ngẫu nhiên của công cụ quét có thể làm tràn bộ nhớ đệm (Buffer Overflow) khiến bộ điều khiển PLC đời cũ bị treo, gây dừng dây chuyền sản xuất thật.
* C. Vì lệnh quét chủ động sẽ làm tăng cấu hình RAM/CPU của máy tính kiểm thử lên 100%.
* D. Vì thiết bị OT chỉ nhận diện được duy nhất lệnh Ping từ hệ điều hành Kali Linux.

---

#### MỨC ĐỘ 3: VẬN DỤNG (3 CÂU GIẢI QUYẾT TÌNH HUỐNG)

**Câu 8:** Đội an ninh mạng phát hiện hacker đang lợi dụng công cụ công cộng tìm kiếm thiết bị mạng (như Shodan) để định vị ra hàng loạt camera giám sát IP lắp đặt tại các kho hàng của công ty đang mở cổng công khai ra Internet. Để xử lý triệt để nguy cơ lộ lọt hình ảnh này mà không ảnh hưởng tới việc xem camera từ xa của ban giám đốc, giải pháp nào sau đây là tối ưu?

* A. Tắt nguồn toàn bộ hệ thống camera kho hàng và chuyển sang dùng bảo vệ tuần tra thủ công.
* B. Cấu hình phân vùng cách ly hệ thống camera vào một **VLAN IoT riêng biệt**, đóng cổng công khai trên Router và thiết lập kết nối xem từ xa bắt buộc qua kênh **VPN mã hóa**.
* C. Tăng băng thông đường truyền Internet của công ty lên gấp 3 lần để làm nhiễu công cụ quét Shodan.
* D. Đổi tên tài khoản đăng nhập camera từ `admin` thành `administrator` và giữ nguyên mật khẩu mặc định.

**Câu 9:** Một tập đoàn sản xuất ô tô muốn thiết lập luồng đồng bộ dữ liệu thời gian thực từ các cánh tay rô-bốt lắp ráp ở xưởng (vùng OT) lên ứng dụng phân tích hiệu suất tối ưu chạy trên nền tảng đám mây (vùng IT Đám mây). Theo mô hình phân tầng an ninh chuẩn (Mô hình Purdue), kiến trúc sư an ninh mạng nên triển khai luồng kết nối này như thế nào?

* A. Cắm dây cáp mạng trực tiếp từ cánh tay rô-bốt vào Router Internet công cộng của xưởng.
* B. Mở cổng tường lửa cho phép mọi IP từ đám mây Internet kết nối thẳng vào địa chỉ IP nội bộ của bộ điều khiển PLC.
* C. Thiết lập một vùng đệm trung gian **IDMZ (Industrial DMZ)**; dữ liệu từ vùng OT sẽ đẩy tập trung về máy chủ đệm ở vùng IDMZ này, sau đó máy chủ đệm mới thực hiện đồng bộ an toàn lên Cloud.
* D. Chuyển toàn bộ hệ thống cánh tay rô-bốt sang kết nối Wi-Fi công cộng không mật khẩu để tối ưu tốc độ truyền.

**Câu 10:** Bạn đang thực hiện kiểm thử xâm nhập (Penetration Testing) một ứng dụng Web chạy trên môi trường AWS IaaS của một doanh nghiệp. Bạn phát hiện lập trình viên do sơ suất đã đẩy một thư mục chứa tệp tin cấu hình môi trường lên GitHub công khai, trong đó lộ chuỗi ký tự **AWS Access Key ID** và **Secret Access Key** có quyền hạn tối cao (Administrator Access). Hacker mũ đen nếu lấy được chuỗi khóa này có thể thực hiện hành vi nguy hại nào sau đây?

* A. Chỉ có thể xem được giao diện trang web khách mà không thể can thiệp sâu.
* B. Chiếm toàn bộ quyền kiểm soát tài khoản Cloud, tùy ý khởi tạo hàng ngàn máy chủ ảo để đào tiền ảo ngầm hoặc xóa sạch toàn bộ sao lưu dữ liệu (Backup) của doanh nghiệp.
* C. Làm hỏng vi mạch phần cứng bo mạch chủ của trung tâm dữ liệu vật lý AWS.
* D. Backdoor này sẽ tự động biến mất sau 5 phút nếu hacker không thực hiện lệnh xóa.

---

### PHẦN II: ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT (DÀNH CHO GIÁO VIÊN)

**Câu 1: Chọn B**

* **TẠI SAO ĐÚNG:** Trong mô hình IaaS (Hạ tầng dịch vụ), nhà cung cấp chỉ lo phần cứng, mạng cốt lõi và lớp ảo hóa ảo (Security OF the cloud). Khách hàng thuê máy chủ ảo về phải tự quản trị hệ điều hành (Guest OS), tự cài bản vá lỗi phần mềm và tự cấu hình luật tường lửa (Security Groups) bảo vệ máy của mình (Security IN the cloud).
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A, C, D đều nằm ở lớp hạ tầng vật lý lõi và ảo hóa cốt lõi, thuộc trách nhiệm 100% của nhà cung cấp dịch vụ đám mây (như AWS/Azure).

**Câu 2: Chọn C**

* **TẠI SAO ĐÚNG:** Bản chất của PaaS (Platform as a Service) là cung cấp một "nền tảng" đã cấu hình sẵn môi trường chạy (Runtime) như Node.js, Python, Java hay Database. Người dùng chỉ cần mang code lên chạy (Ví dụ: AWS Elastic Beanstalk, Heroku).
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A (IaaS) chỉ cấp máy chủ trống, phải tự cài môi trường; B (SaaS) là phần mềm hoàn chỉnh dùng luôn; D (STaaS) chỉ là dịch vụ lưu trữ ổ đĩa.

**Câu 3: Chọn B**

* **TẠI SAO ĐÚNG:** Đây là tử huyệt của IoT. Do giới hạn kích thước vật lý và giá thành, chip xử lý của camera/thiết bị thông minh rất yếu, không đủ tài nguyên chạy phần mềm diệt virus. Đi kèm với việc người dùng chủ quan lười đổi mật khẩu mặc định khiến hacker dễ dàng dùng kịch bản tự động quét bẻ khóa hàng loạt.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A sai vì giao thức IoT thường tối giản, rất nhẹ; C sai vì IoT bắt buộc phải có IP để kết nối mạng; D sai thực tế vì nếu tắt cổng mạng thì thiết bị không còn là IoT.

**Câu 4: Chọn B**

* **TẠI SAO ĐÚNG:** SCADA (Supervisory Control and Data Acquisition) là hệ thống trung tâm thu thập dữ liệu và điều hành giám sát tối cao trong các nhà máy, hạ tầng OT.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A dùng quản lý tài khoản IT; C dùng quản lý điện thoại di động; D là thiết bị bảo mật trung gian cho Cloud văn phòng.

**Câu 5: Chọn B**

* **TẠI SAO ĐÚNG:** Nguyên tắc tối cao của Mô hình trách nhiệm chung: "Nhà cung cấp đám mây không sở hữu dữ liệu của bạn". Kể cả ở mô hình SaaS cao nhất, khách hàng vẫn phải chịu trách nhiệm quản lý quyền truy cập tài khoản, quản trị dữ liệu nhạy cảm và chống lộ mật khẩu nhân viên.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A sai vì SaaS thì nhà cung cấp lo trọn gói vật lý; C sai vì SaaS không yêu cầu viết code; D sai vì SaaS tối giản hóa hoàn toàn rủi ro phần cứng cho khách hàng.

**Câu 6: Chọn A**

* **TẠI SAO ĐÚNG:** Đây là bài học tư duy cốt lõi. Mạng IT ưu tiên bảo mật thông tin (Chữ C trong CIA). Nhưng mạng nhà máy OT điều khiển máy móc thật, nếu một hệ thống an ninh mạng làm gián đoạn luồng điều khiển, nhà máy dừng hoạt động sẽ gây thiệt hại khổng lồ, nên tính sẵn sàng (Chữ A trong CIA) luôn là tối cao.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** B, C, D đều chứa nhận định chủ quan, phóng đại và hoàn toàn sai lệch bản chất kiến trúc kỹ thuật hệ thống.

**Câu 7: Chọn B**

* **TẠI SAO ĐÚNG:** Thiết bị điều khiển công nghiệp (PLC) đời cũ chạy các giao thức thô sơ không có khả năng xử lý các gói tin quét dồn dập (như TCP SYN Flood ảo từ công cụ quét). Gói tin rác sẽ làm đầy bộ nhớ đệm khiến thiết bị crash (treo), làm mất liên lạc với hệ thống điều khiển vật lý.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A, C, D đều tự suy diễn kịch bản phi kỹ thuật, không có thật trong môi trường an ninh mạng.

**Câu 8: Chọn B**

* **TẠI SAO ĐÚNG:** Đây là chiến thuật "Phòng thủ chiều sâu". Việc gom camera vào VLAN riêng sẽ ngăn chặn hacker leo thang sang mạng máy tính văn phòng nếu camera bị hack. Việc tắt cổng mở public và ép bắt buộc kết nối qua VPN mã hóa sẽ giấu hoàn toàn thiết bị khỏi bộ máy quét tìm kiếm của Shodan nhưng ban giám đốc vẫn kết nối an toàn từ xa qua đường hầm mã hóa.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A thỏa hiệp tiêu cực làm tê liệt công nghệ; C vô dụng và tốn chi phí; D giữ mật khẩu mặc định là tự sát an ninh mạng.

**Câu 9: Chọn C**

* **TẠI SAO ĐÚNG:** Theo kiến trúc chuẩn quốc tế Purdue Model, mạng OT tuyệt đối không được thông thẳng ra Internet/mạng IT văn phòng. Bắt buộc phải dựng một vùng mạng đệm cách ly gọi là IDMZ. Vùng này chứa máy chủ trung gian làm nhiệm vụ nhận dữ liệu gián tiếp từ nhà máy rồi mới chuyển tiếp ra ngoài, triệt tiêu luồng tấn công trực diện từ Internet vào PLC xưởng.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A và B tạo ra lỗ hổng nghiêm trọng cho phép hacker từ Internet bắn lệnh trực tiếp phá hoại rô-bốt; D làm tăng nguy cơ bị nghe lén sniffing và tấn công Wi-Fi.

**Câu 10: Chọn B**

* **TẠI SAO ĐÚNG:** AWS Access Key ID và Secret Access Key đóng vai trò như "chìa khóa vạn năng" tối cao cấp API. Nếu mang quyền Root/Administrator, hacker không cần thông qua giao diện web mà dùng lệnh API dọn sạch tài nguyên, xóa các bản sao lưu lưu trữ để tống tiền hoặc âm thầm tạo dàn máy chủ công suất lớn phục vụ mục đích trục lợi cá nhân, doanh nghiệp phải trả hóa đơn tiền Cloud khổng lồ.
* **TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:** A đánh giá thấp độ nguy hiểm; C sai vì lệnh phần mềm Cloud không làm cháy nổ vật lý phần cứng trung tâm dữ liệu của hãng AWS; D sai vì chuỗi khóa tĩnh cấu hình sai sẽ tồn tại vĩnh viễn trên GitHub cho đến khi có người chủ động đổi khóa/xóa bỏ.

---

🚀 **Hướng dẫn nhanh cho Giáo viên:** Khi copy lên Google Forms, hãy bật tính năng *"Đặt làm bài kiểm tra"*, thêm phần nội dung cột **"TẠI SAO đúng"** vào mục *"Phân hồi đáp án"* để học viên có thể tự đối chiếu kiến thức tư duy ngay sau khi làm bài xong.