Dưới đây là bộ quiz trắc nghiệm gồm 10 câu hỏi bám sát nội dung bài học **NGÀY 22: Vượt Tường Lửa và IDS (Evading IDS & Firewalls)** theo tư duy chuẩn quốc tế CEH v11.

Định dạng này đã được tối ưu hóa để bạn có thể dễ dàng sao chép trực tiếp vào tệp tài liệu giảng dạy hoặc import thẳng lên các nền tảng trắc nghiệm trực tuyến như **Google Forms, Quizizz, Kahoot, Microsoft Forms**.

---

# BỘ TRẮC NGHIỆM ĐÁNH GIÁ: NGÀY 22 (Bypass IDS & Firewall)

## PHẦN I: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

**Câu 1:** Hệ thống phát hiện xâm nhập (IDS) hoạt động dựa trên cơ chế so sánh dữ liệu truyền qua mạng với một cơ sở dữ liệu chứa "dấu vân tay" của các cuộc tấn công đã biết được gọi là gì?

* A. Anomaly-based Detection
* B. Signature-based Detection
* C. Behavior-based Detection
* D. Heuristic-based Detection

**Câu 2:** Kỹ thuật nào sau đây liên quan trực tiếp đến việc kẻ tấn công cố tình thay đổi thông tin trong trường "Source IP" của tiêu đề gói tin (Packet Header) nhằm đánh lừa bộ lọc của Tường lửa?

* A. Packet Fragmentation
* B. IP Spoofing
* C. Session Hijacking
* D. Source Routing

**Câu 3:** Khái niệm "Baseline" (Đường cơ sở) trong hệ thống mạng thường được sử dụng làm tham chiếu cốt lõi cho phương pháp phát hiện xâm nhập nào dưới đây?

* A. Signature-based Detection
* B. Protocol Scanning
* C. Anomaly-based Detection
* D. Pattern Matching

**Câu 4:** Đâu là thuật ngữ viết tắt đại diện cho giới hạn kích thước tối đa của một gói tin dữ liệu mà một giao tiếp mạng có thể truyền tải mà không cần phải thực hiện băm nhỏ (phân mảnh)?

* A. TTL
* B. MSS
* C. MTU
* D. MAC

---

## PHẦN II: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

**Câu 5:** Bản chất kỹ thuật của phương pháp "Packet Fragmentation" giúp kẻ tấn công bypass qua hệ thống IDS dựa trên chữ ký (Signature-based IDS) là gì?

* A. Nó mã hóa toàn bộ dữ liệu Payload của gói tin khiến IDS không thể giải mã để phân tích nội dung bên trong.
* B. Dữ liệu tấn công được băm nhỏ thành nhiều mảnh khiến từng gói tin riêng lẻ không khớp với chữ ký (Signature) trong từ điển, việc lắp ráp hoàn chỉnh chỉ diễn ra tại máy đích của nạn nhân.
* C. Nó ép buộc IDS phải chuyển sang trạng thái "Fail-open" và tự động bỏ qua toàn bộ quy trình kiểm tra an ninh để tránh nghẽn mạng.
* D. Nó thay đổi cổng dịch vụ (Port) truyền tải dữ liệu liên tục theo thời gian thực làm nhiễu hệ thống phân tích trạng thái dòng tin.

**Câu 6:** Vì sao một hệ thống IDS được đặt ở vị trí **phía trước** Tường lửa biên (Internet-facing) thường bị coi là một sai lầm nghiêm trọng trong thiết kế kiến trúc an ninh mạng?

* A. IDS đặt ở đây sẽ tự động chặn toàn bộ các kết nối hợp lệ từ khách hàng ngoài Internet đi vào website.
* B. IDS sẽ bị quá tải tài nguyên phần cứng (CPU/RAM) và gây ra tình trạng bão hòa cảnh báo (Alert Fatigue) do phải xử lý hàng triệu gói tin rác chưa qua bộ lọc của Tường lửa.
* C. Vị trí này làm mất đi khả năng kiểm tra lưu lượng mã hóa SSL/TLS của IDS.
* D. Hacker có thể dễ dàng gửi lệnh cấu hình lại bộ quy tắc (Rules) của IDS trực tiếp từ ngoài Internet.

**Câu 7:** Cơ chế kiểm soát luồng dữ liệu đi vào mạng nội bộ của Tường lửa dựa trên nguyên tắc nào sau đây mang lại mức độ bảo mật cao nhất cho doanh nghiệp?

* A. Cho phép tất cả lưu lượng đi qua, chỉ chặn các địa chỉ IP nằm trong danh sách đen (Blacklist).
* B. Mở tất cả các cổng dịch vụ lớn hơn 1024 và chỉ đóng các cổng hệ thống chuẩn (Well-known ports).
* C. Cấm tất cả mọi lưu lượng truy cập theo mặc định (Deny All by Default), chỉ mở quyền cụ thể cho những nguồn và dịch vụ được định nghĩa tường minh.
* D. Tự động chuyển tiếp toàn bộ lưu lượng không xác định vào vùng mạng Internal để máy trạm tự xử lý bằng Antivirus.

---

## PHẦN III: MỨC ĐỘ VẬN DỤNG (3 CÂU)

**Câu 8:** Một Hacker mũ trắng đang thực hiện kiểm thử xâm nhập vào hệ thống mạng của một ngân hàng. Anh ta phát hiện Tường lửa chặn toàn bộ gói tin gửi từ IP bên ngoài văn phòng của mình, nhưng lại cho phép các gói tin có IP nguồn là `10.0.5.25` (IP của máy chủ quản trị nội bộ) đi qua. Để lách qua bộ lọc này từ xa mà không cần ngồi trong văn phòng ngân hàng, kỹ thuật thâm nhập nào cần được áp dụng đầu tiên?

* A. Khai thác lỗi tràn bộ nhớ đệm (Buffer Overflow) trên Tường lửa.
* B. Thực hiện tấn công từ chối dịch vụ (DDoS) làm sập Tường lửa rồi xông vào.
* C. Áp dụng kỹ thuật IP Spoofing, giả mạo IP nguồn của gói tin tấn công thành địa chỉ `10.0.5.25`.
* D. Dùng công cụ bẻ khóa mật khẩu quản trị của Tường lửa qua giao thức SSH.

**Câu 9:** Hệ thống giám sát an ninh mạng (SOC) của một tập đoàn ghi nhận một lượng lớn gói tin TCP bị phân mảnh bất thường gửi đến Máy chủ Web thuộc vùng DMZ. Các mảnh gói tin này có giá trị độ lệch vị trí (Fragment Offset) bị cố tình ghi đè chèn lên nhau (Overlapping Fragments). Hiện tượng này là dấu hiệu rõ ràng của hành vi bypass nào?

* A. Hacker đang cố tình phá hủy phần cứng của Switch trung tâm bằng đòn MAC Flooding.
* B. Hacker đang thực hiện kỹ thuật tấn công trốn tránh (Evasion Technique) nhằm khai thác sự bất đồng bộ trong việc tái lắp ráp gói tin giữa IDS cũ và Hệ điều hành máy chủ.
* C. Đây là cơ chế tối ưu hóa băng thông truyền tải tự động của giao thức HTTP/2.
* D. Kẻ tấn công đang cố gắng chiếm đoạt Cookie phiên làm việc của người quản trị bằng Session Hijacking.

**Câu 10:** Bạn được giao nhiệm vụ cấu hình Tường lửa biên cho một công ty để chống lại các cuộc tấn công thâm nhập bằng kỹ thuật **IP Spoofing** (kẻ tấn công bên ngoài Internet làm giả địa chỉ IP nguồn là dải IP nội bộ của công ty `192.168.1.0/24` để gửi lệnh độc hại vào trong). Thao tác cấu hình nào sau đây giải quyết triệt để rủi ro này?

* A. Cấu hình quy tắc chặn toàn bộ gói tin đi ra (Egress Filtering) nhắm vào cổng 80 và 443.
* B. Thiết lập bộ lọc gói tin đi vào (Ingress Filtering) trên cổng WAN kết nối Internet: Từ chối (Drop) ngay lập tức bất kỳ gói tin nào đi từ ngoài vào mạng nhưng lại mang địa chỉ IP nguồn thuộc dải `192.168.1.0/24`.
* C. Tăng băng thông đường truyền Internet lên gấp đôi để làm loãng dòng tin giả mạo.
* D. Bật tính năng chống phân mảnh gói tin (Fragment Reassembly) trên toàn bộ hệ thống máy trạm của nhân viên.

---

# ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT

* **Câu 1: Chọn B**
* *TẠI SAO ĐÚNG:* **Signature-based Detection** (Nhận diện dựa trên chữ ký) hoạt động giống như một trình quét virus, nó tìm kiếm các chuỗi nhị phân hoặc mẫu dữ liệu đặc trưng (Signatures) đã được định nghĩa sẵn trong cơ sở dữ liệu để đưa ra cảnh báo.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A và C tìm kiếm các hành vi lệch khỏi trạng thái bình thường (Baseline) chứ không so khớp chữ ký; D sử dụng thuật toán phân tích logic phỏng đoán dựa trên kinh nghiệm để tìm mã độc chưa rõ chữ ký.


* **Câu 2: Chọn B**
* *TẠI SAO ĐÚNG:* **IP Spoofing** (Giả mạo IP) là hành vi thay đổi giá trị của trường Địa chỉ IP nguồn trong Header của gói tin để giả danh một thực thể hoặc máy tính khác hợp pháp.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A băm nhỏ gói tin; C cướp phiên đăng nhập đang hoạt động; D là kỹ thuật ép gói tin đi theo một tuyến đường vạch sẵn qua các Router.


* **Câu 3: Chọn C**
* *TẠI SAO ĐÚNG:* **Anomaly-based Detection** (Nhận diện dựa trên bất thường) bắt buộc phải "học" các hoạt động thường nhật của mạng để xây dựng nên một thước đo chuẩn gọi là **Baseline**. Bất kỳ lưu lượng nào vượt ngưỡng hoặc sai lệch mạnh so với Baseline này sẽ kích hoạt báo động.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A và D tìm mẫu cố định, không quan tâm hệ thống ngày thường hoạt động ra sao; B là việc quét các giao thức mạng đang mở.


* **Câu 4: Chọn C**
* *TẠI SAO ĐÚNG:* **MTU (Maximum Transmission Unit)** quy định kích thước lớn nhất (tính bằng bytes) của một gói tin dữ liệu mà một môi trường mạng vật lý (như Ethernet) có thể truyền đi trực tiếp. Nếu gói tin vượt quá MTU, nó phải bị phân mảnh (Fragmentation).
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A là số bước nhảy gói tin (Time-to-Live); B quy định kích thước dữ liệu tối đa của tầng TCP (Maximum Segment Size); D là địa chỉ vật lý của card mạng.


* **Câu 5: Chọn B**
* *TẠI SAO ĐÚNG:* Chữ ký của IDS tìm kiếm toàn vẹn cả câu lệnh độc hại (ví dụ: `ATTACK`). Bằng cách băm nhỏ gói tin thành `AT`, `TA`, `CK`, các gói tin đơn lẻ hoàn toàn vô hại khi đi qua thiết bị kiểm soát dòng tin của IDS. Hệ điều hành của máy mục tiêu nhận các mảnh này và tự ráp lại để thực thi lệnh độc, lúc này đòn tấn công đã thành công.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì phân mảnh không phải là mã hóa; C là cơ chế xử lý lỗi khi quá tải của IDS chứ không phải bản chất của phân mảnh; D sai vì cổng kết nối của gói tin không bị thay đổi bởi kỹ thuật phân mảnh.


* **Câu 6: Chọn B**
* *TẠI SAO ĐÚNG:* Nếu đặt IDS ở ngoài cùng Internet, nó sẽ phải hứng chịu toàn bộ lưu lượng tấn công quét cổng, các gói tin rác (Spam, DoS). Điều này khiến bộ xử lý của IDS cạn kiệt tài nguyên mạng và sinh ra hàng nghìn cảnh báo rác mỗi phút, làm quản trị viên bị **"bão hòa cảnh báo" (Alert Fatigue)** và không thể lọc ra cuộc tấn công thực sự. Vị trí đúng là phải đặt phía sau Tường lửa để Tường lửa gạt bỏ bớt lưu lượng rác trước.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì IDS thông thường chỉ giám sát (Listen) và cảnh báo, không trực tiếp chặn dòng người đi vào trừ khi đó là IPS; C và D đều là các phán đoán không chính xác về mặt kiến trúc phân lớp.


* **Câu 7: Chọn C**
* *TẠI SAO ĐÚNG:* Chiến lược **"Deny All by Default"** (Cấm tất cả theo mặc định) là nguyên tắc an ninh cốt lõi của mô hình Zero Trust. Tường lửa sẽ đóng chặt mọi lối đi, chỉ mở những "lỗ hở" cực kỳ cụ thể cho các dịch vụ bắt buộc phải chạy (như cổng 80/443 cho Web). Điều này hạn chế tối đa bề mặt tấn công của hệ thống.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A và B áp dụng chiến lược "Mở mặc định" cực kỳ nguy hiểm, hacker chỉ cần dùng IP hoặc cổng chưa nằm trong danh sách cấm là thâm nhập thành công; D vi phạm nghiêm trọng quy trình phân tách và bảo vệ mạng.


* **Câu 8: Chọn C**
* *TẠI SAO ĐÚNG:* Vì Tường lửa dựa vào bộ quy tắc kiểm tra IP nguồn để cho phép truy cập, kẻ tấn công đứng từ xa cần thực hiện kỹ thuật **IP Spoofing** nhằm đổi IP nguồn của gói tin mình gửi đi thành `10.0.5.25` để "mượn danh" quyền đặc quyền của máy chủ quản trị vượt qua kiểm tra của Tường lửa.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A, B và D đều là các kỹ thuật tấn công trực diện phá hoại hoặc bẻ khóa thô bạo, không tận dụng sơ hở về mặt logic cấu hình IP nguồn mà tình huống đã chỉ ra.


* **Câu 9: Chọn B**
* *TẠI SAO ĐÚNG:* Đây là đòn tấn công **Overlapping Fragments**. Hacker cố tình tạo ra các mảnh gói tin có tọa độ vị trí chèn lấp lên nhau. Các dòng IDS đời cũ hoặc không có tính năng Fragment Reassembly tốt sẽ lắp ghép các mảnh này ra một nội dung (vô hại), trong khi hệ điều hành của máy chủ nạn nhân (như Windows/Linux) lại lắp ghép ra một nội dung khác (chứa mã độc), từ đó lách qua mắt bộ kiểm tra của IDS thành công.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì tầng mạng (Layer 3) không làm tràn bảng địa chỉ MAC của Layer 2; C sai vì đây là hành vi tấn công mạng, không phải tính năng tối ưu hợp lệ; D không liên quan đến cấu trúc phân mảnh gói tin IP.


* **Câu 10: Chọn B**
* *TẠI SAO ĐÚNG:* Phương pháp này gọi là **Ingress Filtering** (Lọc dữ liệu đi vào). Về mặt logic vật lý, các gói tin đi từ cổng Internet ngoài (WAN) đi vào hệ thống không bao giờ được phép mang địa chỉ IP nguồn là mạng nội bộ doanh nghiệp (`192.168.1.0/24`). Do đó, nếu xuất hiện gói tin như vậy từ Internet gửi tới, chắc chắn 100% là do hacker đang giả mạo IP (Spoofing) và Tường lửa cần hủy (Drop) nó ngay lập tức.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A lọc dữ liệu đi ra (Egress) là sai hướng bảo vệ của tình huống; C không vá được lỗi cấu hình logic hệ thống; D cấu hình trên từng máy trạm đơn lẻ rất tốn thời gian và không ngăn được gói tin giả mạo đi xuyên qua biên giới mạng.