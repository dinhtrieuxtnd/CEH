### BÀI GIẢNG CHI TIẾT – NGÀY 29: BẢO MẬT ĐIỆN TOÁN ĐÁM MÂY & ĐỒNG BỘ AN TOÀN IOT/OT

* **Mục tiêu bài giảng (Đo lường được):**
* Phân biệt bản chất cơ học và ranh giới trách nhiệm của 3 mô hình dịch vụ đám mây Cloud cơ bản: IaaS, PaaS và SaaS.
* Thấu hiểu sâu sắc Mô hình trách nhiệm chung (Shared Responsibility Model) giữa khách hàng và nhà cung cấp Cloud để không bỏ trống lỗ hổng cấu hình.
* Nhận diện các rủi ro bảo mật cốt lõi, đặc thù của hệ thống thiết bị thông minh IoT và môi trường vận hành công nghiệp nặng OT.


* **Thời lượng giảng dạy dự kiến:** 50 phút.
* **Đối tượng hướng đến:** Người học chuyên sâu về An toàn thông tin, chuẩn hóa tư duy theo chương trình CEH v11.

---

### 1. MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Hãy tưởng tượng bạn là Giám đốc An ninh thông tin (CISO) của một chuỗi nhà máy sản xuất nước giải khát lớn. Để tối ưu hóa chi phí, công ty chuyển toàn bộ hệ thống quản lý đơn hàng lên Cloud, triển khai các cảm biến thông minh (IoT) để đo lường nhiệt độ bồn chứa và dùng hệ thống máy tính điều khiển (OT) để tự động hóa dây chuyền đóng chai. Một ngày nọ, hacker xâm nhập thành công, chiếm quyền điều khiển Cloud, từ đó gửi lệnh xuống các thiết bị IoT làm sai lệch nhiệt độ, đồng thời can thiệp vào hệ thống OT khiến toàn bộ dây chuyền đóng chai bị tê liệt hoàn toàn. Khi sự cố xảy ra, kỹ sư Cloud đổ lỗi cho nhà cung cấp, kỹ sư vận hành nhà máy đổ lỗi cho phòng IT, còn doanh nghiệp thì chịu tổn thất hàng tỷ đồng mỗi giờ. Ai thực sự là người phải chịu trách nhiệm kỹ thuật cho lỗ hổng này?

---

### 2. KIẾN THỨC CỐT LÕI: ĐÁM MÂY (CLOUD), IOT VÀ CƠ SỞ OT

Để giải quyết bài toán trên, chúng ta cần bóc tách hệ thống công nghệ hiện đại này thành ba mảnh ghép lớn: Điện toán đám mây (Cloud Computing), Internet vạn vật (IoT), và Công nghệ vận hành (OT).

#### Mảnh ghép 1: Ba mô hình dịch vụ đám mây (IaaS, PaaS, SaaS)

Thay vì tự mua máy chủ vật lý cồng kềnh, doanh nghiệp ngày nay "thuê" tài nguyên trên Internet. Tùy thuộc vào nhu cầu, họ sẽ chọn một trong ba mức độ thuê sau đây:

* **IaaS (Infrastructure as a Service - Dịch vụ hạ tầng):** * *Giải thích:* Nhà cung cấp chỉ bán cho bạn một "máy tính ảo" trống rỗng (gồm CPU, RAM, ổ cứng). Bạn phải tự cài hệ điều hành (Windows/Linux), tự cấu hình tường lửa, tự cài cơ sở dữ liệu và ứng dụng mã nguồn của mình lên đó.
* *Ví dụ thực tế:* Nó giống như việc bạn đi **thuê một căn nhà thô** mới xây xong phần khung bê tông. Chủ nhà chỉ đảm bảo móng nhà chắc chắn, điện nước cấp đến cửa. Còn việc sơn tường, ngăn phòng, lắp camera, mua bàn ghế là việc của bạn. Nếu có trộm lẻn vào do bạn quên khóa cửa phòng ngủ, đó là lỗi của bạn.
* *Đại diện công nghệ:* Amazon EC2, Microsoft Azure Virtual Machines, Google Compute Engine.


* **PaaS (Platform as a Service - Dịch vụ nền tảng):**
* *Giải thích:* Nhà cung cấp chuẩn bị sẵn hệ điều hành, môi trường chạy code và cơ sở dữ liệu được tối ưu. Bạn không cần quan tâm máy chủ chạy Linux gì, cập nhật bản vá ra sao, bạn chỉ cần ném đoạn mã nguồn (code) ứng dụng của mình lên là chạy.
* *Ví dụ thực tế:* Giống như việc bạn **thuê một căn hộ chung cư dịch vụ full nội thất** để ở. Bạn không cần lo sửa đường ống nước, không lo bảo trì thang máy, nhưng bạn phải tự quản lý tài sản cá nhân và những người bạn cho phép vào nhà chơi.
* *Đại diện công nghệ:* AWS Elastic Beanstalk, Google App Engine, Heroku.


* **SaaS (Software as a Service - Dịch vụ phần mềm):**
* *Giải thích:* Bạn không cần viết code, không cần quản trị hạ tầng. Bạn chỉ cần đăng ký tài khoản, trả tiền theo tháng và dùng phần mềm trực tiếp qua trình duyệt Web.
* *Ví dụ thực tế:* Giống như việc bạn **ở khách sạn 5 sao**. Mọi thứ từ dọn phòng, an ninh, điện nước đều do khách sạn lo. Bạn chỉ chịu trách nhiệm bảo vệ chìa khóa phòng (mật khẩu tài khoản) của mình. Nếu bạn để lộ mật khẩu và bị người khác vào phòng lấy đồ, khách sạn không thể chịu trách nhiệm hoàn toàn cho bạn.
* *Đại diện công nghệ:* Microsoft 365, Google Drive, Salesforce, Gmail.



#### Mảnh ghép 2: Mô hình trách nhiệm chung (Shared Responsibility Model)

Đây là "kinh thánh" của bảo mật Cloud. Ranh giới cốt lõi bạn bắt buộc phải thuộc lòng là: **Nhà cung cấp đám mây chịu trách nhiệm bảo mật "CỦA" Đám mây (Security OF the Cloud), còn Khách hàng chịu trách nhiệm bảo mật "TRONG" Đám mây (Security IN the Cloud).**

* **Security OF the Cloud:** Bảo mật vật lý của trung tâm dữ liệu (vòng lính gác, camera chống đột nhập, nguồn điện dự phòng), bảo mật lớp ảo hóa thiết bị và hạ tầng mạng phần cứng cốt lõi. Đây là việc của AWS, Microsoft, Google.
* **Security IN the Cloud:** Cấu hình phân quyền tài khoản (Identity and Access Management - IAM), mã hóa dữ liệu lưu trữ, thiết lập quy tắc tường lửa mạng ảo (Security Groups), viết code ứng dụng không để dính lỗi SQLi/XSS. Đây hoàn toàn là trách nhiệm của doanh nghiệp bạn.

#### Mảnh ghép 3: Rủi ro đặc thù của IoT (Internet of Things) và OT (Operational Technology)

* **Hệ thống IoT (Thiết bị thông minh):** Là các camera giám sát, bóng đèn thông minh, cảm biến nhiệt độ...
* *Điểm yếu cốt lõi:* Thiết bị IoT thường có chip xử lý rất yếu, bộ nhớ nhỏ nên **không thể cài đặt các phần mềm diệt virus** hoặc chạy các thuật toán mã hóa phức tạp. Thêm vào đó, nhà sản xuất thường cài sẵn mật khẩu mặc định cực kỳ dễ đoán (như `admin/admin`, `123456`) và người dùng rất ít khi cập nhật phần mềm (Firmware) cho chúng.


* **Hệ thống OT (Công nghệ vận hành):** Là các hệ thống phần cứng và phần mềm chuyên dụng dùng để điều khiển các thiết bị vật lý trong công nghiệp (như van áp suất, cánh tay rô-bốt, máy đóng chai, hệ thống điện lưới). Chúng vận hành dựa trên các bộ điều khiển lập trình SCADA/PLC.
* *Điểm yếu cốt lõi:* Hệ thống OT vốn được thiết kế từ hàng chục năm trước với tư duy "cô lập hoàn toàn với Internet" (Air-gapped), ưu tiên tính liên tục tuyệt đối, không hề có cơ chế mã hóa hay xác thực nâng cao. Khi làn sóng chuyển đổi số ép các hệ thống OT này phải kết nối mạng để truyền dữ liệu lên Cloud, chúng lập tức trở thành "mồi ngon" cho hacker vì không có khả năng tự vệ trước các đòn tấn công mạng cơ bản.



---

### 3. PHÂN TÍCH SÂU: GÓC NHÌN ĐA CHIỀU VỀ AN TOÀN ĐÁM MÂY & IOT

Để có tư duy của một chuyên gia đánh giá an ninh mạng chuyên nghiệp, chúng ta cần phân tích vấn đề này dưới 3 lăng kính khác nhau:

#### Góc nhìn 1: Từ phía Kỹ sư Lập trình ứng dụng Cloud (DevOps/Cloud Engineer)

Họ thường nhìn Cloud dưới góc độ "sự tiện lợi và tốc độ". Cần một máy chủ? Chỉ mất 3 nhấp chuột là có ngay. Tuy nhiên, chính sự dễ dàng này tạo ra tâm lý chủ quan. Họ thường bật tính năng cho phép truy cập từ mọi địa chỉ IP trên thế giới (`0.0.0.0/0`) vào cơ sở dữ liệu để tiện cho việc sửa code từ xa, hoặc lưu trữ thẳng các khóa bảo mật (Access Keys) ở dạng chữ rõ (Plaintext) vào mã nguồn trên GitHub. Đối với họ, bảo mật đôi khi là một "vật cản" làm chậm tiến độ triển khai dự án.

#### Góc nhìn 2: Từ phía Kỹ sư Vận hành Nhà máy (OT Engineer)

Đối với các kỹ sư cơ khí, điện tử tại nhà máy, nguyên tắc tối cao là: **"Hệ thống đang chạy ổn định thì cấm được chạm vào!"**. Họ cực kỳ sợ việc cập nhật bản vá (Patching) hoặc quét lỗ hổng bảo mật (Vulnerability Scanning). Tại sao? Vì một lệnh quét mạng quét sai cách của phòng IT có thể làm treo bộ điều khiển PLC, khiến toàn bộ dây chuyền sản xuất thép hoặc lọc nước ngừng hoạt động, gây thiệt hại hàng triệu đô-la. Họ nhìn bảo mật mạng bằng con mắt nghi ngại vì nó đe dọa đến tính sẵn sàng (Availability) - yếu tố sống còn của môi trường OT.

#### Góc nhìn 3: Từ phía Kẻ tấn công (Hacker / Penetration Tester)

Hacker không bao giờ tấn công trực diện vào bức tường lửa kiên cố của nhà cung cấp Cloud (AWS/Azure). Chúng chọn con đường dễ nhất: **Tấn công vào sự cẩu thả của con người**.
Hacker sẽ quét các dải IP để tìm kiếm các phân vùng lưu trữ dữ liệu (như AWS S3 Buckets) bị cấu hình sai chế độ "Public" để tải toàn bộ thông tin nhạy cảm về. Đối với IoT, chúng dùng các công cụ tự động như `Shodan` để tìm các camera còn để mật khẩu mặc định, biến chúng thành một mạng lưới máy tính ma (Botnet) nhằm thực hiện các đòn tấn công từ chối dịch vụ tổng lực (DDoS).

---

### 4. CÁCH ÁP DỤNG VÀO THỰC TẾ: CHIẾN THUẬT PHÒNG THỦ CHIỀU SÂU

Nếu bạn được giao nhiệm vụ thiết kế kiến trúc bảo mật toàn diện cho một doanh nghiệp kết hợp cả ba yếu tố Cloud, IoT và OT, hãy triển khai chính xác theo quy trình 4 bước chiến lược sau:

```
[Mạng Internet Công Cộng]
         │
         ▼
 ┌──────────────┐      ┌───────────────────────────┐
 │ CLOUD (SaaS) │ ───> │ Cấu hình IAM & MFA        │ (Bước 1: Siết chặt định danh)
 └──────────────┘      └───────────────────────────┘
         │
         ▼
 ┌──────────────┐      ┌───────────────────────────┐
 │ CLOUD (IaaS) │ ───> │ Mã hóa Dữ liệu (AES-256) │ (Bước 2: Mã hóa dữ liệu)
 └──────────────┘      └───────────────────────────┘
         │
         ▼
 ┌──────────────┐      ┌───────────────────────────┐
 │  MẠNG IOT    │ ───> │ Cô lập vùng mạng (VLAN)   │ (Bước 3: Phân vùng IoT)
 └──────────────┘      └───────────────────────────┘
         │
         ▼
 ┌──────────────┐      ┌───────────────────────────┐
 │   VÙNG OT    │ ───> │ Triển khai DMZ & IDMZ     │ (Bước 4: Thiết lập ranh giới OT)
 └──────────────┘      └───────────────────────────┘

```

#### Bước 1: Siết chặt quản trị định danh trên Cloud (IAM & MFA)

* **Hành động:** Áp dụng triệt để nguyên tắc "Quyền hạn tối thiểu" (Least Privilege). Chỉ cấp vừa đủ quyền cho nhân viên hoàn thành công việc, tuyệt đối không dùng tài khoản Root (tài khoản tối cao của Cloud) cho các hoạt động cấu hình hàng ngày.
* **Kỹ thuật:** Bắt buộc kích hoạt Xác thực 2 yếu tố (Multi-Factor Authentication - MFA) cho 100% tài khoản truy cập vào bảng điều khiển Cloud. Nếu hacker có dò được mật khẩu, chúng vẫn bị chặn lại ở bước nhập mã OTP.

#### Bước 2: Kích hoạt cơ chế mã hóa dữ liệu toàn vẹn

* **Hành động:** Cấu hình mã hóa dữ liệu ở cả hai trạng thái: Khi đang lưu trữ trên ổ đĩa Cloud (At-Rest) bằng thuật toán AES-256 và khi đang truyền tải trên đường truyền Internet (In-Transit) qua giao thức TLS 1.3.
* **Kỹ thuật:** Sử dụng dịch vụ quản lý khóa của các nhà cung cấp (như AWS KMS) để tự động xoay vòng khóa mã hóa định kỳ.

#### Bước 3: Phân vùng cách ly tuyệt đối mạng IoT

* **Hành động:** Không bao giờ được phép để các thiết bị IoT (như camera, tivi thông minh, máy chấm công Wi-Fi) kết nối chung vào phân vùng mạng nội bộ chứa các máy chủ dữ liệu quan trọng của công ty.
* **Kỹ thuật:** Tạo một mạng ảo riêng biệt (**VLAN IoT**) cách ly hoàn toàn. Thiết lập luật trên Tường lửa: Chỉ cho phép thiết bị IoT gửi dữ liệu đi ra một địa chỉ IP máy chủ Cloud cụ thể, chặn đứng toàn bộ lưu lượng quét mạng hàng ngang từ vùng IoT sang vùng làm việc của nhân viên.

#### Bước 4: Thiết lập ranh giới an toàn cho vùng OT (Mô hình Purdue)

* **Hành động:** Xây dựng một phân vùng mạng đệm (DMZ công nghiệp - IDMZ) nằm giữa mạng văn phòng (IT) và mạng điều khiển nhà máy (OT).
* **Kỹ thuật:** Không một máy tính nào ở văn phòng được phép kết nối trực tiếp vào bộ điều khiển PLC của nhà máy. Mọi luồng dữ liệu sản xuất truyền lên Cloud phải được đẩy tập trung vào một máy chủ trung gian nằm ở vùng IDMZ, sau đó máy chủ này mới đồng bộ an toàn lên Cloud.

---

### 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

Trong thực tế triển khai bảo mật Đám mây và IoT/OT, rất nhiều doanh nghiệp lớn đã phải trả giá đắt vì mắc phải những sai lầm kinh điển sau:

* ❌ **Sai lầm 1: Lầm tưởng nhà cung cấp Cloud đã bảo mật thay cho mình toàn bộ.**
* *Hệ quả:* Doanh nghiệp bỏ mặc không cấu hình tường lửa bảo vệ máy chủ ảo IaaS, không mã hóa dữ liệu trong database, dẫn đến việc bị hacker quét cổng, khai thác lỗ hổng phần mềm ứng dụng và mã hóa tống tiền (Ransomware) toàn bộ hệ thống Cloud. Khi mất dữ liệu, doanh nghiệp đi kiện nhà cung cấp nhưng thua cuộc vì điều khoản hợp đồng quy định rõ đó là trách nhiệm của khách hàng.


* ❌ **Sai lầm 2: Sử dụng một tài khoản duy nhất (Access Key) dùng chung cho tất cả thiết bị IoT.**
* *Hệ quả:* Kẻ tấn công chỉ cần tháo dỡ vật lý một thiết bị camera thông minh lắp ở bãi giữ xe, dùng kỹ thuật đọc chip để trích xuất ra chuỗi Access Key lưu trong bộ nhớ. Vì mã này dùng chung cho toàn hệ thống, hacker lập tức có quyền kiểm soát và đọc trộm luồng dữ liệu của hàng ngàn camera khác trong toàn bộ tập đoàn.


* ❌ **Sai lầm 3: Quét lỗ hổng trực tiếp bằng công cụ chủ động (Active Scan) vào mạng OT.**
* *Hệ quả:* Việc sử dụng các công cụ như `Nmap` quét mạnh (Aggressive Scan) hoặc dùng trình quét lỗ hổng ứng dụng chạy tự động vào các cổng dịch vụ của thiết bị PLC đời cũ sẽ làm tràn ngập bộ nhớ đệm (Buffer Overflow) của thiết bị này. Kết quả là thiết bị OT bị treo cứng, khiến van xả áp suất hoặc băng chuyền nhà máy ngừng hoạt động đột ngột, gây tai nạn lao động hoặc phá hủy máy móc cơ khí vật lý. *(Giải pháp thay thế: Phải sử dụng các giải pháp giám sát thụ động - Passive Network Monitoring, chỉ nghe lén và phân tích bản tin mạng mà không gửi gói tin rác vào thiết bị OT).*



---

### 6. TỔNG KẾT BÀI HỌC

Để khép lại bài học Ngày 29, thầy muốn các em khắc cốt ghi tâm một nguyên lý tối thượng của kỷ nguyên số:

> **"Đám mây có thể thuộc về nhà cung cấp, nhưng dữ liệu luôn là của chúng ta. Thiết bị IoT/OT có thể nhỏ bé, nhưng hậu quả vật lý từ lỗ hổng của chúng là khôn lường."**

Bảo mật Cloud và IoT/OT không phải là việc xây một bức tường thật cao xung quanh máy chủ, mà là nghệ thuật thấu hiểu ranh giới trách nhiệm cấu hình kỹ thuật, phân vùng cách ly thông minh và kiểm soát nghiêm ngặt từng luồng định danh truy cập vào hệ thống.

---

### BÀI TẬP TỰ RÈN LUYỆN (MILESTONE NGÀY 29)

Để hoàn thành mục tiêu học tập ngày hôm nay và đạt được Milestone đầu ra, các em hãy thực hiện thử thách sau:

1. Hãy truy cập vào trang web tìm kiếm thiết bị hạ tầng mạng **Shodan.io** (đóng vai trò là một Hacker Mũ Trắng nghiên cứu).
2. Sử dụng các cú pháp tìm kiếm cơ bản (ví dụ: tìm các thiết bị chạy giao thức công nghiệp `port:502` cho Modbus hoặc `port:1911` cho Fox).
3. Quan sát số lượng thiết bị công nghiệp OT hoặc camera IP đang bị lộ lọt, hiển thị công khai trên Internet toàn cầu.
4. Viết một bản báo cáo ngắn (khoảng 300 từ) phân tích: Nếu một trong số các thiết bị đó thuộc về công ty của em, em sẽ áp dụng chính sách gì ở lớp mạng Tường lửa để lập tức ẩn giấu và bảo vệ chúng khỏi bộ máy tìm kiếm của Hacker.