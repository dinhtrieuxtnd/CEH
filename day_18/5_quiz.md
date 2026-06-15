Dưới đây là bộ quiz 10 câu hỏi trắc nghiệm hoàn chỉnh cho nội dung **NGÀY 18: Thao túng giao thức mạng (MAC Flooding & ARP Poisoning)**. Nội dung được thiết kế theo cấu trúc phân loại nhận thức (Nhận biết, Thông hiểu, Vận dụng) với các tình huống thực tế và kỹ thuật sâu sắc, sẵn sàng để copy lên Google Form, Quizizz hoặc in trực tiếp.

---

### PHẦN I: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

**Câu 1. Trạng thái "Fail-Open" của một bộ chuyển mạch (Switch) xảy ra khi nào trong cuộc tấn công MAC Flooding?**

* A. Khi Switch tắt hoàn toàn nguồn điện để bảo vệ an toàn dữ liệu.
* B. Khi bảng địa chỉ MAC (CAM table) bị lấp đầy bởi dữ liệu rác, buộc Switch phải phát tán (broadcast) mọi gói tin ra tất cả các cổng.
* C. Khi Switch chuyển sang chế độ mã hóa tự động toàn bộ lưu lượng mạng nội bộ.
* D. Khi quản trị viên thực hiện lệnh khóa (shutdown) cổng mạng bị nghi ngờ có dấu hiệu tấn công.

*Đáp án đúng:* **B**
* *Giải thích:* Khi bảng CAM bị đầy tràn do đòn tấn công MAC Flooding, để duy trì tính sẵn sàng của mạng và tránh làm gián đoạn kết nối, Switch sẽ tự động rơi vào cơ chế "Fail-Open", tức là hoạt động như một bộ tập trung (Hub) ngốc nghếch bằng cách gửi broadcast mọi gói tin đến tất cả các cổng, vô tình tạo điều kiện cho hacker nghe lén dữ liệu.

**Câu 2. Điểm yếu cốt lõi nào của giao thức ARP (Address Resolution Protocol) bị kẻ tấn công khai thác trong kỹ thuật ARP Spoofing?**

* A. ARP sử dụng cơ chế mã hóa quá yếu khiến khóa bí mật bị bẻ gãy nhanh chóng.
* B. Giao thức ARP không có cơ chế xác thực nội bộ và luôn tin tưởng các thông điệp ARP Reply ngay cả khi không có yêu cầu trước đó.
* C. ARP chỉ hoạt động trên hệ điều hành Windows và không hỗ trợ trên nền tảng Linux.
* D. Thời gian lưu trữ (TTL) của một bản ghi ARP mặc định kéo dài quá nhiều năm.

*Đáp án đúng:* **B**
* *Giải thích:* Giao thức ARP được thiết kế từ thời kỳ đầu của Internet với sự ngây thơ rất lớn: nó hoàn toàn không có cơ chế xác thực danh tính. Bất kỳ máy tính nào cũng có thể gửi gói tin ARP Reply (trả lời) tự phát (Gratuitous ARP) đến máy khác để khai báo sai lệch dối trá về cặp địa chỉ IP-MAC mà máy nhận vẫn tin tưởng cập nhật vào bảng bộ nhớ đệm (ARP cache).

**Câu 3. Tính năng bảo mật nâng cao nào trên các thiết bị mạng quản trị (Managed Switch) được dùng để phòng chống cuộc tấn công MAC Flooding bằng cách giới hạn số lượng địa chỉ MAC vật lý được phép kết nối trên một cổng?**

* A. Dynamic ARP Inspection (DAI).
* B. Port Security.
* C. DHCP Snooping.
* D. Access Control List (ACL).

*Đáp án đúng:* **B**
* *Giải thích:* Port Security là tính năng được cấu hình trực tiếp trên các cổng mạng của Switch doanh nghiệp nhằm kiểm soát và giới hạn số lượng địa chỉ phần cứng MAC tối đa được học trên cổng đó (ví dụ chỉ cho tối đa 2 địa chỉ MAC). Nếu vượt quá số lượng cấu hình, Switch sẽ áp dụng hành vi xử lý (violation) như khóa cổng (shutdown) để chặn đòn làm tràn bảng CAM.

**Câu 4. Trong hệ điều hành Windows, câu lệnh nào được thực thi thông qua Command Prompt để quản trị viên có thể kiểm tra danh sách bản đồ ánh xạ IP và địa chỉ MAC hiện tại trong bộ nhớ đệm của máy tính?**

* A. `ipconfig /all`
* B. `netstat -an`
* C. `arp -a`
* D. `tracert 8.8.8.8`

*Đáp án đúng:* **C**
* *Giải thích:* Lệnh `arp -a` hiển thị toàn bộ nội dung của bảng bộ nhớ đệm ARP (ARP Cache) của máy tính hiện tại, giúp người kiểm thử rà soát xem có địa chỉ IP nào đang bị trùng địa chỉ MAC vật lý bất thường hay không.

---

### PHẦN II: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

**Câu 5. Tại sao cuộc tấn công ARP Poisoning lại tạo tiền đề hoàn hảo cho kỹ thuật tấn công xen giữa Man-in-the-Middle (MITM)?**

* A. Vì ARP Poisoning có khả năng bẻ khóa toàn bộ các mật khẩu đã băm trên máy chủ Gateway của hệ thống.
* B. Vì nó ép lưu lượng mạng của cả máy nạn nhân và Router phải đi vòng qua card mạng của hacker trước khi đến đích thật, cho phép hacker chặn bắt hoặc sửa đổi dữ liệu lưu thông.
* C. Vì nó làm sập toàn bộ hệ thống tường lửa (Firewall) bảo vệ biên của doanh nghiệp.
* D. Vì nó tự động tăng đặc quyền của tài khoản người dùng thông thường lên quyền quản trị tối cao của hệ thống.

*Đáp án đúng:* **B**
* *Giải thích:* Bản chất của ARP Poisoning là đầu độc ý thức của hai đầu kết nối (Máy nạn nhân và Gateway). Khi cả hai thực thể này đều bị lừa rằng "địa chỉ phần cứng MAC của Router/Nạn nhân chính là MAC của máy Hacker", mọi dữ liệu gửi đi từ cả hai phía sẽ tự động điều hướng chạy thẳng vào card mạng của hacker, biến vị trí của hacker thành trạm trung chuyển ở giữa (MITM).

**Câu 6. Khi cấu hình giải pháp bảo mật Dynamic ARP Inspection (DAI) trên Switch Cisco để chống đòn ARP Spoofing, tại sao quản trị viên bắt buộc phải kích hoạt tính năng DHCP Snooping trước đó?**

* A. Vì DAI cần cơ sở dữ liệu đáng tin cậy (IP-to-MAC binding table) do DHCP Snooping thu thập được để đối chiếu, xác thực các gói tin ARP lưu thông qua mạng.
* B. Vì DHCP Snooping sẽ tự động tăng băng thông phần cứng của Switch lên gấp đôi để xử lý traffic.
* C. Vì nếu không bật DHCP Snooping thì Switch không thể cấp phát được địa chỉ IP động cho các máy trạm trong văn phòng.
* D. Vì DAI chỉ bảo vệ các máy chủ có IP tĩnh, còn DHCP Snooping bảo vệ các máy có IP động.

*Đáp án đúng:* **A**
* *Giải thích:* Tính năng DAI hoạt động như một thám tử xác minh tính đúng đắn của các gói tin ARP. Để biết một gói ARP khai báo IP-MAC là đúng hay sai, DAI cần một "bản đồ chân lý" để tham chiếu. Bản đồ này được xây dựng hoàn toàn dựa trên bảng cơ sở dữ liệu ràng buộc (DHCP Snooping Binding Database) do DHCP Snooping tạo ra trong quá trình giám sát các máy nhận IP hợp lệ từ DHCP Server.

**Câu 7. Một cuộc tấn công MAC Flooding thành công sẽ làm mất đi tính năng cốt lõi nào giúp phân biệt giữa thiết bị Switch và thiết bị Hub đời cũ?**

* A. Khả năng gộp băng thông nhiều đường truyền vật lý lại làm một.
* B. Khả năng cô lập lưu lượng truyền tin theo phương thức Unicast (chỉ gửi gói tin chính xác từ cổng nguồn tới cổng đích duy nhất dựa trên địa chỉ MAC).
* C. Khả năng tự động cấp phát địa chỉ IP cho các máy trạm khi cắm dây mạng.
* D. Khả năng định tuyến gói tin đi xuyên qua các mạng khác nhau trên Internet (Layer 3).
*Đáp án đúng:* **B**

* *Giải thích:* Điểm vượt trội của Switch so với Hub là sự thông minh: Switch đọc địa chỉ MAC đích và chỉ chuyển tiếp gói tin ra đúng cổng có máy đích ngồi (Unicast), đảm bảo an toàn kết nối mạng. Khi bị MAC Flooding gây tràn bảng CAM, sự thông minh này biến mất, Switch mất khả năng gửi Unicast và ép buộc phải gửi Broadcast ra tất cả các cổng giống hệt cơ chế hoạt động thô sơ của một chiếc Hub.

---

### PHẦN III: MỨC ĐỘ VẬN DỤNG (3 CÂU)

**Câu 8. Một chuyên gia phân tích an ninh mạng tiến hành rà soát hệ thống và gõ lệnh `arp -a` trên một máy trạm của nhân viên kế toán. Kết quả hiển thị như sau:**

* `Internet Address      Physical Address      Type`
* `192.168.1.1           00-0c-29-3e-4f-11     dynamic`
* `192.168.1.50          00-0c-29-3e-4f-11     dynamic`
*(Biết rằng địa chỉ `192.168.1.1` là Default Gateway của văn phòng).* **Chuyên gia này cần đưa ra kết luận gì về hiện trạng mạng nội bộ?**
* A. Hệ thống đang hoạt động hoàn toàn bình thường, đây là cơ chế phân tải tải trọng mạng của Windows.
* B. Máy kế toán đang là nạn nhân của cuộc tấn công ARP Spoofing và máy có IP `192.168.1.50` rất có thể là máy của kẻ tấn công đang mạo danh Router.
* C. Máy kế toán bị nhiễm mã độc tống tiền Ransomware làm mã hóa tệp tin cấu hình hệ thống.
* D. Switch trung tâm bị hỏng phần cứng cổng mạng vật lý và cần phải thay dây cáp mới.

*Đáp án đúng:* **B**
* *Giải thích:* Trong một phân đoạn mạng (subnet) tiêu chuẩn, mỗi thiết bị phần cứng card mạng sẽ sở hữu một địa chỉ MAC duy nhất. Việc cả địa chỉ IP của Router (`192.168.1.1`) và một địa chỉ IP khác trong mạng (`192.168.1.50`) **có cùng một địa chỉ MAC vật lý giống hệt nhau** (`00-0c-29-3e-4f-11`) chứng tỏ máy `192.168.1.50` đang liên tục gửi các gói tin ARP Reply giả mạo để đầu độc bộ nhớ đệm, tự nhận mình là Router.

**Câu 9. Doanh nghiệp của bạn có một số phòng máy chủ (Server Room) chứa dữ liệu tối mật. Để phòng chống rủi ro hacker thâm nhập vật lý vào văn phòng, cắm các thiết bị giả lập tinh vi nhằm thực hiện cuộc tấn công MAC Flooding phá hoại hệ thống Switch, cấu hình Port Security nào sau đây là tối ưu và an toàn nhất cho các cổng mạng kết nối đến máy chủ?**

* A. `switchport port-security maximum 1` kết hợp `switchport port-security violation protect`
* B. `switchport port-security maximum 100` kết hợp `switchport port-security violation restrict`
* C. `switchport port-security maximum 1` kết hợp `switchport port-security violation shutdown`
* D. Tắt hoàn toàn tính năng Port Security để tránh xung đột với các tiến trình kết nối mạng của máy chủ.

*Đáp án đúng:* **C**
* *Giải thích:* Đối với cổng mạng nối trực tiếp đến các máy chủ cố định quan trọng, số lượng địa chỉ MAC tối đa chạy qua cổng này chỉ nên giới hạn bằng 1 (`maximum 1`). Đồng thời, khi có hành vi vi phạm (như hacker gửi MAC rác giả lập), hành động xử lý bắt buộc phải là `shutdown` (tắt hẳn cổng mạng đó ngay lập tức và gửi cảnh báo về hệ thống giám sát) để chặn đứng hoàn toàn cuộc tấn công xâm nhập. Chọn `protect` hay `restrict` chỉ làm rơi gói tin vi phạm nhưng cổng vẫn mở, không đủ độ nghiêm ngặt cho hạ tầng máy chủ cốt lõi.

**Câu 10. Trong một cuộc kiểm thử xâm nhập (Penetration Testing) mạng nội bộ văn phòng, hacker mũ trắng đã thực hiện thành công đòn tấn công ARP Spoofing hướng vào máy tính của Giám đốc tài chính. Tuy nhiên, khi bật phần mềm Wireshark lên để bắt gói tin, hacker nhận thấy toàn bộ nội dung dữ liệu nhạy cảm truyền lên các trang web ngân hàng lớn đều là các chuỗi ký tự mã hóa lộn xộn, không thể đọc trực tiếp được văn bản rõ (plaintext). Lý do kỹ thuật chính xác nhất giải thích cho hiện tượng này là gì?**

* A. Đòn tấn công ARP Spoofing đã bị tính năng Port Security trên Switch chặn đứng hoàn toàn làm nhiễu gói tin.
* B. Các trang web ngân hàng sử dụng giao thức mã hóa bảo mật HTTPS (SSL/TLS) ở tầng ứng dụng, giúp bảo vệ tính toàn vẹn và bí mật của nội dung dữ liệu lưu thông ngay cả khi đường truyền tầng thấp bị thao túng chiếm giữ.
* C. Hệ điều hành Windows trên máy Giám đốc tự động kích hoạt tính năng đổi địa chỉ MAC liên tục để chống nghe lén.
* D. Phần mềm Wireshark chưa được hacker đăng ký bản quyền trả phí nên bị giới hạn tính năng đọc văn bản rõ.

*Đáp án đúng:* **B**
* *Giải thích:* Đòn tấn công ARP Spoofing chỉ hoạt động ở Tầng 2 (Data Link) để chiếm quyền điều hướng dòng chảy dữ liệu (chặn bắt packet). Tuy nhiên, nếu các ứng dụng ở tầng trên (Application Layer) sử dụng các giao thức có mã hóa đầu-cuối mạnh mẽ như HTTPS, dữ liệu bên trong phong bì packet đã được mã hóa bằng thuật toán mật mã học trước khi truyền đi. Kẻ đứng giữa (MITM) dù bắt được gói tin cũng chỉ thấy các chuỗi dữ liệu đã mã hóa (Ciphertext) và không thể đọc được mật khẩu hay thông tin nhạy cảm dạng chữ rõ nếu không bẻ gãy được lớp mã hóa SSL/TLS.