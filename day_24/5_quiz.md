Chào thầy/cô và các em học viên! Để củng cố toàn diện kiến thức của **NGÀY 24: Phòng Thủ Chiều Sâu Cho Web Server (Web Server Defenses)**, dưới đây là bộ quiz 10 câu hỏi trắc nghiệm chuyên sâu được biên soạn chuẩn theo cấu trúc phân loại nhận thức.

Bộ câu hỏi này được thiết kế định dạng rõ ràng, bám sát lý thuyết thực tế lẫn các lỗ hổng hệ thống, đi kèm đáp án và giải thích chi tiết lý do đúng/sai để thầy/cô có thể dễ dàng in ấn, biên soạn giáo án hoặc copy trực tiếp lên các nền tảng trắc nghiệm trực tuyến như Google Forms, Quizizz, Kahoot! hay Microsoft Forms.

---

### PHẦN I: MỨC ĐỘ NHẬN BIẾT (4 CÂU KHẢO SÁT GHI NHỚ)

#### Câu 1. Trong cấu hình an toàn ứng dụng Web, chỉ thị `server_tokens off;` trong file cấu hình của dịch vụ Nginx có mục đích trực tiếp là gì?

* A. Bật tính năng tường lửa bảo vệ mã nguồn ứng dụng web.
* B. Ẩn thông tin phiên bản (version) của phần mềm Web Server để chống Banner Grabbing.
* C. Giới hạn dải địa chỉ IP của quản trị viên hệ thống khi truy cập từ xa.
* D. Chặn đứng các đợt tấn công từ chối dịch vụ DDoS tầng mạng Layer 4.

#### Câu 2. Khi áp dụng nguyên tắc "Đặc quyền tối thiểu" (Least Privilege) cho Web Server chạy trên hệ điều hành Linux, dịch vụ ứng dụng Web (như Apache hoặc Nginx) nên được thực thi dưới quyền của tài khoản nào?

* A. root
* B. Administrator
* C. Một user riêng biệt có quyền hạn cực kỳ hạn chế (như www-data hoặc nginx)
* D. Khách vô danh (Anonymous Guest) có quyền Read/Write toàn bộ hệ thống

#### Câu 3. Thiết bị hoặc phần mềm nào dưới đây hoạt động trực tiếp ở tầng Ứng dụng (Layer 7) và chuyên dùng để phân tích sâu nội dung luồng traffic HTTP/HTTPS nhằm ngăn chặn lỗi SQL Injection hay Cross-Site Scripting (XSS)?

* A. Tường lửa mạng thông thường (Network Firewall)
* B. Thiết bị định tuyến mạng (Router)
* C. Bộ chuyển mạch Core Switch tầng 2
* D. Tường lửa ứng dụng Web (WAF - Web Application Firewall)

#### Câu 4. Quy trình kiểm tra định kỳ, thử nghiệm sự ổn định và tiến hành cài đặt các bản sửa lỗi từ nhà sản xuất cho hệ điều hành và phần mềm Web Server được gọi là gì?

* A. Patch Management (Quản lý bản vá)
* B. Banner Grabbing (Thu thập biểu ngữ)
* C. Directory Listing (Duyệt thư mục công khai)
* D. Identity Theft (Đánh cắp danh tính)

---

### PHẦN II: MỨC ĐỘ THÔNG HIỂU (3 CÂU KIỂM TRA BẢN CHẤT)

#### Câu 5. Tại sao chiến lược "Phòng thủ chiều sâu" (Defense-in-Depth) lại đóng vai trò quyết định trong việc bảo vệ Web Server trước các cuộc tấn công nâng cao (APT)?

* A. Vì nó giúp giảm chi phí mua sắm các thiết bị phần cứng bảo mật đắt tiền vòng ngoài.
* B. Vì nó đảm bảo rằng nếu kẻ tấn công vượt qua được một lớp bảo vệ (ví dụ: WAF), họ vẫn phải đối mặt với các lớp phòng thủ tiếp theo bên trong.
* C. Vì nó tự động sửa chữa toàn bộ các lỗ hổng mã nguồn của website mà không cần lập trình viên can thiệp.
* D. Vì nó có khả năng định danh và tìm ra vị trí vật lý chính xác của hacker trên bản đồ thế giới theo thời gian thực.

#### Câu 6. Điểm khác biệt cốt lõi giữa cơ chế lọc dữ liệu của Tường lửa mạng thông thường (Network Firewall) và Tường lửa ứng dụng Web (WAF) là gì?

* A. Network Firewall chỉ kiểm tra thông tin địa chỉ IP và cổng dịch vụ (Layer 3/4), trong khi WAF phân tích sâu vào nội dung dữ liệu bên trong các gói tin HTTP/HTTPS (Layer 7).
* B. WAF hoạt động bằng cách ngắt nguồn điện của máy chủ khi bị tấn công, còn Network Firewall thì không.
* C. Network Firewall bắt buộc phải cài trực tiếp trên máy trạm của người dùng cuối, còn WAF chỉ đặt ở cổng Internet.
* D. WAF kiểm tra tốc độ đường truyền vật lý của cáp quang, còn Network Firewall quản trị tài khoản người dùng Windows.

#### Câu 7. Dưới góc nhìn quản trị hệ thống, tại sao việc lập tức bấm nút cập nhật (Update) một bản vá bảo mật mới lên máy chủ Web đang chạy thực tế (Production) mà không qua kiểm thử lại bị coi là một sai lầm nguy hại?

* A. Vì việc cập nhật sẽ làm thay đổi địa chỉ IP công khai của website, khiến khách hàng không truy cập được.
* B. Vì bản vá bảo mật từ nhà sản xuất có thể gây xung đột hệ thống, làm treo ứng dụng và sập toàn bộ dịch vụ đang hoạt động.
* C. Vì hacker có thể lợi dụng quá trình update để đánh cắp băng thông và thực hiện đào tiền ảo ngầm.
* D. Vì cập nhật phần mềm Web Server sẽ xóa toàn bộ cơ sở dữ liệu khách hàng được lưu trữ trong Database.

---

### PHẦN III: MỨC ĐỘ VẬN DỤNG (3 CÂU ĐÁNH GIÁ TÌNH HUỐNG)

#### Câu 8. Kẻ tấn công tìm ra một thư mục bị lỗi cấu hình "Directory Listing" công khai trên Web Server của công ty bạn. Hacker có thể tận dụng sai lầm nào sau đây của đội ngũ Ops/Dev để chiếm đoạt chuỗi kết nối (Database Credentials) sang máy chủ cơ sở dữ liệu?

* A. Việc cấu hình ẩn mã lỗi HTTP 500 trên trình duyệt của người dùng.
* B. Việc lập trình viên vô tình để lại các tệp tin nén lưu trữ mã nguồn cũ hoặc file cấu hình dạng `.bak`, `config.php.old` trong thư mục web công khai.
* C. Việc hệ thống yêu cầu người dùng đổi mật khẩu định kỳ sau mỗi 90 ngày hoạt động.
* D. Việc quản trị viên đổi cổng dịch vụ quản trị từ xa SSH từ cổng mặc định 22 sang cổng ngẫu nhiên 2222.

#### Câu 9. Trong một đợt kiểm thử xâm nhập, bạn phát hiện ra dù website của khách hàng đã bật Cloud WAF vòng ngoài, nhưng máy chủ Web thật (Origin Server) bên trong lại cấu hình tường lửa nội bộ mở công khai cổng 80/443 cho toàn bộ Internet. Bạn sẽ cảnh báo nguy cơ gì nguy hiểm nhất trong báo cáo bảo mật?

* A. Hacker sẽ dùng kỹ thuật Brute-force để bẻ khóa tài khoản Cloud WAF.
* B. Kẻ tấn công có thể dò tìm ra IP gốc (Origin IP) của máy chủ và gửi gói tin tấn công trực diện vào Web Server nhằm bypass (vượt qua) hoàn toàn lớp lọc của Cloud WAF.
* C. Hệ thống sẽ tự động kích hoạt trạng thái "Fail-Open" và biến thành một máy chủ phát tán thư rác (Spam Bot).
* D. Website sẽ chạy chậm đi gấp đôi do phải xử lý dữ liệu trùng lặp từ hai luồng tường lửa mạng khác nhau.

#### Câu 10. Để ngăn chặn kịch bản Hacker sau khi chiếm được quyền điều khiển Web Server sẽ tiến hành xóa hoặc chỉnh sửa file nhật ký (`Clear Logs`) hòng xóa dấu vết, chuyên gia an ninh mạng nên triển khai giải pháp kiến trúc nào sau đây?

* A. Tắt hoàn toàn tính năng Access Log và Error Log trên Web Server để hacker không có gì để xóa.
* B. Cài đặt phần mềm diệt virus Windows Defender trên toàn bộ các máy trạm của nhân viên văn phòng.
* C. Cấu hình đẩy toàn bộ nhật ký hệ thống (Logs) tập trung về một máy chủ lưu trữ log biệt lập (Centralized Log Server) theo thời gian thực.
* D. Nén các tệp tin log lại, đặt mật khẩu mã hóa rồi lưu trữ ngay tại thư mục `/root` của chính Web Server đó.

---

### PHẦN IV: ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT

* **Câu 1: Chọn B**
* *TẠI SAO ĐÚNG:* Chỉ thị `server_tokens off;` tắt tính năng hiển thị phiên bản chi tiết của Nginx trên các trang báo lỗi mặc định (ví dụ: Nginx 1.18.0). Điều này khiến hacker khó thu thập thông tin tình báo (Banner Grabbing) để tìm các exploit code tương ứng với phiên bản đó.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu A sai vì đây là cấu hình ẩn thông tin, không phải tính năng tường lửa; câu C sai vì chỉ thị này không quản lý quyền truy cập IP; câu D sai vì nó không có chức năng chống DDoS.


* **Câu 2: Chọn C**
* *TẠI SAO ĐÚNG:* Chạy dịch vụ web bằng tài khoản hạn chế (như user `www-data`) đảm bảo nếu ứng dụng web bị hack chiếm quyền điều khiển (ví dụ thông qua lỗ hổng RCE hoặc dính Web Shell), kẻ tấn công chỉ có quyền hạn tối thiểu của user đó và không thể can thiệp sâu vào nhân hệ điều hành hay đọc file của user khác.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu A và B sai vì `root` hay `Administrator` là tài khoản tối cao, nếu ứng dụng dính lỗ hổng, hacker sẽ có toàn quyền kiểm soát máy chủ ngay lập tức; câu D vi phạm nghiêm trọng nguyên tắc an toàn thông tin cơ bản.


* **Câu 3: Chọn D**
* *TẠI SAO ĐÚNG:* WAF (Web Application Firewall) hoạt động ở tầng ứng dụng (Layer 7), nó hiểu các cấu trúc của giao thức HTTP/HTTPS để phân tích chuỗi truy vấn (Query String) và các tham số gửi lên nhằm nhận diện các dấu hiệu tấn công đặc thù của web.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu A, B, C đều là các thiết bị/tính năng hoạt động ở tầng dưới (Layer 2/3/4), chỉ nhìn thấy IP và Port chứ không thể đọc vị hay hiểu được câu lệnh SQLi hay mã độc JavaScript ẩn trong traffic web.


* **Câu 4: Chọn A**
* *TẠI SAO ĐÚNG:* Đây là định nghĩa chuẩn của quy trình Quản lý bản vá (Patch Management) - bịt các lỗ hổng đã biết từ nhà sản xuất phần mềm/OS.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu B là kỹ thuật trinh sát hệ thống của hacker; câu C là lỗi cấu hình lộ lọt thư mục; câu D là hành vi tấn công giả mạo con người.


* **Câu 5: Chọn B**
* *TẠI SAO ĐÚNG:* Bản chất của "Phòng thủ chiều sâu" là xây dựng các rào chắn độc lập nối tiếp nhau. Khi một mắt xích phòng thủ thất bại, hệ thống không bị sụp đổ hoàn toàn vì hacker sẽ bị chặn lại ở lớp cửa tiếp theo.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu A sai vì triển khai nhiều lớp thường làm tăng chi phí quản trị và vận hành; câu C sai vì giải pháp kỹ thuật phòng thủ không tự sửa được lỗi logic trong code của lập trình viên; câu D là tính năng giả tưởng viễn tưởng, không đúng thực tế.


* **Câu 6: Chọn A**
* *TẠI SAO ĐÚNG:* Tường lửa mạng thông thường đưa ra quyết định chặn/cho phép dựa trên Luật IP nguồn/đích và Cổng dịch vụ (ví dụ: cho phép IP bất kỳ truy cập cổng 443). Còn WAF sẽ nhìn sâu vào phần thân (Body/Header) của request gửi đến cổng 443 đó xem có chứa mã độc hay không.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu B, C, D đều chứa các nhận định phi kỹ thuật, suy đoán sai lệch bản chất hoạt động của hai loại tường lửa.


* **Câu 7: Chọn B**
* *TẠI SAO ĐÚNG:* Trong thực tế vận hành mạng doanh nghiệp, các bản vá (Patches) khi cài đặt có khả năng làm thay đổi thư viện liên kết động hoặc xung đột với mã nguồn tùy biến của ứng dụng, gây ra lỗi sập dịch vụ (Downtime). Quy trình chuẩn bắt buộc phải kiểm thử độ ổn định trên môi trường giả lập (Staging/Lab) trước khi đưa lên hệ thống thật.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu A sai vì cài vá lỗi phần mềm không làm đổi IP máy chủ; câu C và D là các nhận định phóng đại, không liên quan đến rủi ro kỹ thuật của quy trình cập nhật.


* **Câu 8: Chọn B**
* *TẠI SAO ĐÚNG:* Lỗi Directory Listing cho phép mọi người nhìn thấy danh sách file trong thư mục web công khai. Nếu Dev/Ops có thói quen tạo file backup thủ công (như nén file code cấu hình chứa mật khẩu database thành file `.zip`, `.old` hoặc `.bak` để sửa cho nhanh), hacker chỉ cần click tải về và đọc file rõ ràng để lấy mật khẩu.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu A giúp tăng bảo mật để ẩn lỗi hệ thống; câu C và D đều là các biện pháp hardening đúng đắn, không phải sai lầm gây rò rỉ dữ liệu cấu hình.


* **Câu 9: Chọn B**
* *TẠI SAO ĐÚNG:* Bản chất của Cloud WAF (như Cloudflare) hoạt động giống như một Proxy đứng chắn trước máy chủ gốc để che giấu nó đi. Nếu quản trị viên không cấu hình tường lửa nội bộ trên máy chủ gốc để "chỉ chấp nhận traffic đi từ dải IP của Cloud WAF", hacker có thể dùng các thủ thuật tìm kiếm IP thật của máy chủ rồi gửi request trực diện vào đó. Lúc này, mọi đòn tấn công web sẽ không đi qua Cloud WAF nữa và website bị hack dễ dàng.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Các câu A, C, D đều mô tả sai lệch cơ chế hoạt động của hạ tầng Cloud WAF và cơ chế chuyển hướng lưu lượng mạng.


* **Câu 10: Chọn C**
* *TẠI SAO ĐÚNG:* Khi log được đẩy về một máy chủ log tập trung (Centralized Log Server) biệt lập theo thời gian thực bằng cơ chế "chỉ ghi một chiều" (Append-only), kể cả khi hacker chiếm được đặc quyền cao nhất (`root`) trên máy chủ Web và dùng lệnh xóa log tại chỗ, các bằng chứng và dấu vết tấn công vẫn được lưu trữ nguyên vẹn ở máy chủ log tập trung bên kia, giúp đội điều tra số (Forensics) tìm ra nguyên nhân.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* Câu A làm mù mắt hệ thống quản trị, vô tình giúp ích cho hacker; câu B nhắm sai đối tượng thiết bị bảo vệ; câu D vô dụng vì nếu hacker chiếm được quyền tối cao, họ sẽ dễ dàng tìm ra và xóa file nén đó.



---

### 🚀 Hướng dẫn nhanh cho Thầy/Cô khi đưa lên Google Forms hoặc Quizizz:

1. **Trên Google Forms:** Tạo một biểu mẫu mới $\rightarrow$ Vào phần *Cài đặt* $\rightarrow$ Chọn *Đặt làm bài kiểm tra*. Sau đó copy nội dung câu hỏi và 4 đáp án tương ứng. Tại mục *Đáp án*, chọn câu trả lời đúng và thêm phần "Giải thích lý do" vào mục *Thêm phản hồi cho câu trả lời*.
2. **Trên Quizizz:** Chọn *Tạo mới bài quiz* $\rightarrow$ Chọn định dạng *Nhiều lựa chọn (Multiple Choice)*. Copy-paste câu hỏi, câu trả lời, tích xanh vào đáp án đúng và dán phần giải thích chi tiết vào ô *Explanation* phía dưới để học viên tự học sau khi hoàn thành bài quét.

Chúc thầy/cô có một tiết học thực hành sinh động và hiệu quả! Chúc các em học viên làm chủ được tư duy pháo đài phòng thủ hệ thống!