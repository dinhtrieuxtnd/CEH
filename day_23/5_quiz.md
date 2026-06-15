Dưới đây là bộ quiz 10 câu hỏi trắc nghiệm khách quan được thiết kế chuẩn hóa cho nội dung **NGÀY 23: Honeypot (Bẫy Ngọt Ngào Cho Hacker)**. Bộ câu hỏi bám sát kiến thức tài liệu CEH v11 và được định dạng rõ ràng, sẵn sàng để thầy/cô copy trực tiếp lên Google Form, Quizizz hoặc in ra làm phiếu bài tập trên lớp.

---

# BỘ QUIZ BẢO MẬT: HỆ THỐNG PHÒNG THỦ VÀ BẪY HONEYPOT (NGÀY 23)

## PHẦN 1: MỨC ĐỘ NHẬN BIẾT (4 CÂU)

**Câu 1. Thuật ngữ nào sau đây định nghĩa chính xác nhất về một Honeypot?**
A. Hệ thống tường lửa nâng cao dùng để ngăn chặn mã độc mã hóa tống tiền dữ liệu doanh nghiệp.

B. Thiết bị phần cứng chuyên dụng có chức năng phân tích sâu gói tin ở tầng ứng dụng (Layer 7).

C. Một tài nguyên thông tin giả lập hoặc thật được thiết lập cố tình để bị quét, tấn công hoặc chiếm đoạt.

D. Cơ sở dữ liệu tập trung lưu trữ toàn bộ lịch sử log ghi nhận hành vi của nhân viên nội bộ công ty.

* **Đáp án đúng:** C
* **Giải thích:** * *TẠI SAO ĐÚNG:* Theo lý thuyết CEH v11, Honeypot là một tài nguyên an ninh mang tính mồi nhử. Nó không chứa dữ liệu thực mà chỉ được dựng lên để thu hút và bẫy kẻ tấn công.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì đó là tính năng của Tường lửa/EDR; B sai vì đó là Tường lửa thế hệ mới (NGFW) hoặc WAF; D sai vì đó là hệ thống SIEM hoặc Log Server.



**Câu 2. Đặc điểm cốt lõi phân biệt giữa Low-interaction Honeypot và High-interaction Honeypot là gì?**
A. Giá thành bản quyền phần mềm và nhà cung cấp giải pháp.

B. Vị trí vật lý đặt thiết bị nằm trước hay sau Tường lửa chính.

C. Mức độ tương tác (giả lập dịch vụ so với hệ điều hành thật) cho phép hacker thực hiện.

D. Khả năng tự động chặn (Block) địa chỉ IP nguồn của kẻ tấn công theo thời gian thực.

* **Đáp án đúng:** C
* **Giải thích:** * *TẠI SAO ĐÚNG:* Sự phân loại Honeypot dựa hoàn toàn vào mức độ tương tác (Level of Interaction). Thấp (Low) chỉ giả lập bề nổi của dịch vụ, còn Cao (High) cung cấp cả một hệ điều hành thực sự đứng sau.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A, B và D không phải là tiêu chí kỹ thuật dùng để phân loại phân tầng bản chất của Honeypot.



**Câu 3. Công cụ nào sau đây là ví dụ điển hình của một Low-interaction Honeypot dùng để bẫy mã độc và giả lập dịch vụ phổ biến?**
A. Wireshark

B. Dionaea

C. Nmap

D. Snort

* **Đáp án đúng:** B
* **Giải thích:** * *TẠI SAO ĐÚNG:* Dionaea là một Low-interaction Honeypot cực kỳ nổi tiếng trong giới an ninh mạng, được thiết kế để giả lập các giao thức mạng phổ biến nhằm thu thập mẫu mã độc (malware payloads).
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A là công cụ bắt gói tin; C là công cụ quét cổng và trinh sát mạng; D là hệ thống phát hiện xâm nhập mã nguồn mở (IDS).



**Câu 4. Trong an toàn thông tin, khái niệm "Honeytoken" được hiểu là gì?**
A. Thẻ xác thực vật lý OTP phát cho các chuyên gia Blue Team.

B. Một chuỗi dữ liệu, tệp tin hoặc tài khoản giả được dùng làm mồi nhử để phát hiện hành vi trộm cắp thông tin.

C. Khóa mật mã dùng để mã hóa đường truyền liên lạc giữa các Honeypot với nhau.

D. Phần thưởng bằng tiền mã hóa trao cho các hacker mũ trắng tìm ra lỗ hổng bẫy.

* **Đáp án đúng:** B
* **Giải thích:** * *TẠI SAO ĐÚNG:* Honeytoken là các tài sản dữ liệu giả (ví dụ: file Excel ghi thông tin thẻ tín dụng giả, hoặc một account giả) đặt rải rác trong mạng. Nếu thấy có ai chạm vào hoặc sử dụng tài sản này, hệ thống sẽ báo động.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì đó là phần cứng Token xác thực; C và D đều là các định nghĩa phóng đại, không có thật trong thuật ngữ an ninh mạng.



---

## PHẦN 2: MỨC ĐỘ THÔNG HIỂU (3 CÂU)

**Câu 5. Tại sao lưu lượng mạng đi vào Honeypot lại được các chuyên gia SOC đánh giá là có tỷ lệ cảnh báo chính xác (True Positive) cao hơn rất nhiều so với hệ thống IDS truyền thống?**
A. Vì Honeypot được tích hợp sẵn các thuật toán trí tuệ nhân tạo (AI) mạnh hơn IDS.

B. Vì Honeypot không phục vụ người dùng thật, nên bất kỳ ai tương tác với nó gần như chắc chắn là kẻ tấn công hoặc mã độc.

C. Vì Honeypot chỉ nhận các gói tin đã được mã hóa an toàn từ tường lửa gửi qua.

D. Vì Honeypot tự động lọc bỏ toàn bộ các gói tin quét cổng (Port scan) từ Internet.

* **Đáp án đúng:** B
* **Giải thích:** * *TẠI SAO ĐÚNG:* Một hệ thống IDS/Firewall thường xuyên báo động giả (False Positive) do người dùng nội bộ gõ sai hoặc cấu hình mạng lỗi. Nhưng Honeypot hoàn toàn không có hoạt động sản xuất (no production traffic), không ai được cấp quyền vào đó. Do đó, cứ có kết nối vào là có dấu hiệu bất thường.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì độ chính xác đến từ kiến trúc logic chứ không phụ thuộc vào thuật toán AI; C và D hoàn toàn sai lệch bản chất hoạt động của bẫy mật.



**Câu 6. Hacker lão luyện thường sử dụng kỹ thuật nào để phát hiện xem máy chủ mục tiêu họ vừa hack được có phải là một Honeypot tương tác thấp (Low-interaction) hay không?**
A. Thực hiện các đòn tấn công từ chối dịch vụ DDoS cường độ lớn xem máy chủ có bị sập không.

B. Chạy các câu lệnh hệ điều hành phức tạp hoặc kiểm tra độ trễ phản hồi của các cổng dịch vụ giả lập.

C. Sử dụng công cụ Wireshark ngay trên máy tấn công để xem địa chỉ MAC nguồn của máy chủ.

D. Gửi email lừa đảo (Phishing) tới tài khoản quản trị tối cao của máy chủ đó.

* **Đáp án đúng:** B
* **Giải thích:** * *TẠI SAO ĐÚNG:* Vì Low-interaction Honeypot chỉ giả lập dịch vụ (ví dụ: dùng phần mềm giả vờ trả về thông báo SSH login), nên khi hacker gõ các câu lệnh Linux chuyên sâu hoặc thực thi kịch bản phức tạp, bẫy sẽ không xử lý được hoặc phản hồi sai lệch, làm lộ bản chất là đồ giả.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A phá hoại hệ thống, không giúp kiểm tra tính chất bẫy; C không đọc được thông tin phân tầng phản hồi lệnh; D không khả thi vì bẫy tương tác thấp không chạy ứng dụng email thật.



**Câu 7. Một trong những rủi ro an ninh nghiêm trọng nhất (được gọi là "Stepping Stone") khi vận hành một High-interaction Honeypot là gì?**
A. Hệ thống quá tốn tài nguyên RAM/CPU khiến mạng công ty bị nghẽn mạch cục bộ.

B. Hacker phát hiện ra bẫy và tiến hành kiện doanh nghiệp ra tòa vì hành vi gài bẫy người dùng.

C. Hacker có thể chiếm quyền điều khiển hoàn toàn hệ điều hành thật của bẫy, biến nó thành bàn đạp để tấn công sâu vào mạng nội bộ hoặc tấn công tổ chức khác.

D. Bẫy tự động xóa sạch nhật ký hệ thống (Logs) sau mỗi 24 giờ hoạt động khiến Blue Team mất dấu vết.

* **Đáp án đúng:** C
* **Giải thích:** * *TẠI SAO ĐÚNG:* High-interaction Honeypot chạy trên hệ điều hành thực tế. Nếu Blue Team không cấu hình tường lửa cô lập thật chặt, hacker sau khi chiếm quyền Root/Administrator của bẫy sẽ biến nó thành một "trạm trung chuyển" (Stepping stone) để quét mạng và nện thẳng vào các máy chủ thật bên cạnh.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì tốn tài nguyên không phải rủi ro an ninh lớn nhất; B sai vì việc tự vệ trên hạ tầng của mình là hợp pháp; D sai vì Honeypot được thiết kế để đẩy log đi liên tục chứ không tự xóa log bảo vệ.



---

## PHẦN 3: MỨC ĐỘ VẬN DỤNG (3 CÂU)

**Câu 8. Một chuyên gia bảo mật được giao nhiệm vụ thiết kế kiến trúc mạng để đặt Honeypot cho một ngân hàng nhằm mục đích phát hiện sớm nguy cơ GIÁN ĐIỆP MẠNG HOẶC MỐI ĐE DỌA TỪ NỘI BỘ (Insider Threats). Vị trí đặt Honeypot nào dưới đây là tối ưu nhất?**
A. Đặt ở môi trường Internet bên ngoài, đứng trước cả Tường lửa biên (Perimeter Firewall).

B. Đặt trong vùng mạng nội bộ (Internal LAN Network) chung dải IP với các máy trạm nhân viên.

C. Đặt trong vùng DMZ công cộng, nằm song song với máy chủ Web Server thương mại điện tử.

D. Đặt trực tiếp trên máy tính cá nhân của Giám đốc điều hành công ty.

* **Đáp án đúng:** B
* **Giải thích:** * *TẠI SAO ĐÚNG:* Để phát hiện nội bộ táy máy hoặc mã độc đang lây lan theo chiều ngang (Lateral Movement) trong văn phòng, Honeypot phải nằm ngay trong lòng mạng nội bộ. Bất kỳ máy nhân viên nào tự ý quét cổng trúng Honeypot này sẽ lập tức kích hoạt báo động gửi về đội SOC.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A dùng để đo lường xu hướng tấn công toàn cầu; C dùng để bẫy các cuộc tấn công nhắm vào ứng dụng Web công khai; D phá vỡ quy trình vận hành và gây nguy hiểm cho thiết bị của lãnh đạo.



**Câu 9. Bạn đang cấu hình một máy chủ Honeypot chạy dịch vụ Web giả lập trong vùng mạng cô lập. Để ngăn chặn kịch bản hacker biến Honeypot này thành công cụ đi tấn công từ chối dịch vụ (DDoS) hoặc gửi thư rác (Spam) đến các tổ chức khác trên Internet, cấu hình tường lửa nào sau đây là BẮT BUỘC phải áp dụng cho chiếc bẫy này?**
A. Chặn toàn bộ lưu lượng mạng đi vào (Inbound traffic) từ Internet.

B. Cho phép Honeypot tự do kết nối ra ngoài Internet để cập nhật bản vá Windows Update.

C. Thiết lập chính sách cấm hoặc giới hạn nghiêm ngặt lưu lượng mạng đi ra (Outbound traffic Rate Limiting) hướng ra Internet.

D. Đổi cổng mặc định của dịch vụ Web từ cổng 80 sang cổng 8080.

* **Đáp án đúng:** C
* **Giải thích:** * *TẠI SAO ĐÚNG:* Nguyên tắc an toàn tối thượng khi dựng bẫy là: "Honeypot có thể nhận kết nối vào, nhưng phải bị quản lý chặt đầu ra (Outbound)". Việc cấu hình chặn hoặc giới hạn cực thấp Outbound traffic giúp triệt tiêu khả năng hacker mượn băng thông của bẫy để đi phá hoại thế giới bên ngoài.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A sai vì chặn Inbound thì bẫy không thể hoạt động; B sai vì thả lỏng Outbound sẽ gây hậu quả pháp lý nghiêm trọng; D chỉ thay đổi cổng dịch vụ bề nổi, không có giá trị kiểm soát hành vi mạng của hacker.



**Câu 10. Đội an ninh mạng của một doanh nghiệp tạo ra một file PDF lấy tên là `Ke_hoach_dau_thau_du_an_Mat_2026.pdf`. Họ nhúng vào file này một đoạn mã script ẩn (chứa liên kết tracking kết nối về máy chủ SOC bí mật) và lưu file này tại thư mục chia sẻ chung của công ty. Sau 2 tuần, máy chủ SOC nhận được tín hiệu HTTP báo về từ một địa chỉ IP lạ ở ngoài quán cà phê, thông báo file PDF trên vừa được mở ra xem. Đội an ninh mạng vừa áp dụng thành công kỹ thuật nào?**
A. Phân tích mã độc động (Dynamic Malware Analysis).

B. Tấn công giả mạo địa chỉ IP (ARP Spoofing).

C. Khai thác lỗ hổng leo thang đặc quyền hệ thống (Privilege Escalation).

D. Triển khai tài sản mồi nhử Honeytoken để phát hiện rò rỉ dữ liệu.

* **Đáp án đúng:** D
* **Giải thích:** * *TẠI SAO ĐÚNG:* Tình huống này mô tả chuẩn xác cách thức vận hành của một Honeytoken dạng tệp tin (Document Honeytoken). File này không có giá trị sử dụng thật, mục đích duy nhất là nằm im "chờ đợi" kẻ trộm lấy cắp và kích hoạt chuông báo động gửi về cho Blue Team khi file bị mở ra ở môi trường bên ngoài.
* *TẠI SAO CÁC ĐÁP ÁN KHÁC SAI:* A, B, C đều là các kỹ thuật tấn công hoặc phân tích kỹ thuật hoàn toàn khác, không liên quan đến hành vi đặt mồi nhử theo dõi dữ liệu của Blue Team trong tình huống.