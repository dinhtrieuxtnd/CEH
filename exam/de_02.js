export const quizData = [
    {
        "id": 1,
        "question": "Câu 1: Rootkit thường được kẻ tấn công sử dụng nhằm mục đích chính là gì?",
        "points": 0.15,
        "options": [
            "A. Mã hóa dữ liệu tống tiền.",
            "B. Che giấu sự tồn tại của các tiến trình và tệp tin độc hại khỏi hệ điều hành.",
            "C. Quét các cổng mạng đang mở.",
            "D. Giải mã mật khẩu Wi-Fi."
        ],
        "correctIndex": 1,
        "explanation": "Rootkit can thiệp sâu vào nhân hệ điều hành (Kernel) để ẩn giấu backdoor, tiến trình lạ khỏi các công cụ giám sát thông thường."
    },
    {
        "id": 2,
        "question": "Câu 2: Kỹ thuật Steganography (Giấu tin) khác biệt như thế nào so với Cryptography (Mật mã học)?",
        "points": 0.15,
        "options": [
            "A. Steganography làm cho dữ liệu không thể đọc được, còn Cryptography thì không.",
            "B. Steganography hoạt động nhanh hơn Cryptography.",
            "C. Steganography che giấu chính SỰ TỒN TẠI của thông điệp, trong khi Cryptography làm xáo trộn nội dung thông điệp.",
            "D. Steganography chỉ áp dụng cho dữ liệu văn bản text."
        ],
        "correctIndex": 2,
        "explanation": "Giấu tin (Steganography) thường giấu dữ liệu vào các file hình ảnh/âm thanh khiến mắt người không nhận ra có thông điệp tồn tại."
    },
    {
        "id": 3,
        "question": "Câu 3: Đâu là đặc điểm phân biệt cơ bản nhất giữa Virus và Worm?",
        "points": 0.15,
        "options": [
            "A. Worm cần người dùng kích hoạt file để lây nhiễm, Virus thì không.",
            "B. Virus tốn nhiều RAM hơn Worm.",
            "C. Worm có khả năng tự sao chép và lây lan qua mạng mà không cần bám vào một file chủ (host file) hay sự can thiệp của con người.",
            "D. Virus chỉ tấn công hệ điều hành Linux."
        ],
        "correctIndex": 2,
        "explanation": "Worm hoạt động độc lập, lợi dụng các lỗ hổng mạng để tự động lan truyền."
    },
    {
        "id": 4,
        "question": "Câu 4: Mã độc tống tiền (Ransomware) thường sử dụng kỹ thuật nào để ngăn người dùng truy cập dữ liệu?",
        "points": 0.15,
        "options": [
            "A. Mã hóa các tệp tin bằng thuật toán mạnh và yêu cầu khóa giải mã.",
            "B. Đổi tên đuôi file thành .txt.",
            "C. Ẩn thư mục bằng lệnh của hệ điều hành.",
            "D. Đăng xuất tài khoản người dùng."
        ],
        "correctIndex": 0,
        "explanation": "Ransomware mã hóa dữ liệu (thường bằng RSA/AES) và đòi tiền chuộc để cung cấp khóa giải mã."
    },
    {
        "id": 5,
        "question": "Câu 5: Tấn công APT (Advanced Persistent Threat) có đặc trưng nào nổi bật?",
        "points": 0.15,
        "options": [
            "A. Tấn công ồ ạt, ồn ào và kết thúc nhanh chóng trong vài phút.",
            "B. Sử dụng các kỹ thuật tinh vi, hoạt động âm thầm và nằm vùng trong hệ thống mục tiêu thời gian rất dài.",
            "C. Chỉ nhắm vào các thiết bị cá nhân di động.",
            "D. Luôn sử dụng mã nguồn mở."
        ],
        "correctIndex": 1,
        "explanation": "APT là các chiến dịch tấn công quy mô lớn, có tổ chức, kiên nhẫn ẩn mình để đánh cắp dữ liệu chiến lược."
    },
    {
        "id": 6,
        "question": "Câu 6: Trojans (Ngựa thành Troy) thường xâm nhập vào máy tính người dùng qua con đường nào phổ biến nhất?",
        "points": 0.15,
        "options": [
            "A. Qua sóng Wi-Fi.",
            "B. Núp bóng dưới dạng các phần mềm hợp pháp, hữu ích (ví dụ: crack, game miễn phí) để lừa người dùng tải về cài đặt.",
            "C. Qua các cổng kết nối USB bị hỏng.",
            "D. Tự động lây qua địa chỉ MAC."
        ],
        "correctIndex": 1,
        "explanation": "Giống như điển tích con ngựa gỗ, Trojan lừa người dùng tự rước mã độc vào nhà bằng vẻ ngoài vô hại."
    },
    {
        "id": 7,
        "question": "Câu 7: Danh sách OWASP Top 10 cung cấp thông tin gì?",
        "points": 0.15,
        "options": [
            "A. 10 loại phần mềm diệt virus tốt nhất.",
            "B. 10 hệ điều hành bảo mật nhất.",
            "C. 10 rủi ro/lỗ hổng bảo mật ứng dụng web phổ biến và nguy hiểm nhất.",
            "D. 10 công cụ quét mạng hàng đầu."
        ],
        "correctIndex": 2,
        "explanation": "OWASP Top 10 là tiêu chuẩn quốc tế được công nhận rộng rãi về các rủi ro an ninh ứng dụng web."
    },
    {
        "id": 8,
        "question": "Câu 8: Lỗ hổng Cross-Site Scripting (XSS) cho phép kẻ tấn công thực hiện hành vi gì?",
        "points": 0.15,
        "options": [
            "A. Can thiệp trực tiếp vào Cơ sở dữ liệu của máy chủ.",
            "B. Chèn mã kịch bản (thường là JavaScript) độc hại vào trang web để thực thi trên trình duyệt của người dùng khác.",
            "C. Tắt máy chủ web từ xa.",
            "D. Sửa đổi cấu hình Tường lửa."
        ],
        "correctIndex": 1,
        "explanation": "XSS nhắm vào trình duyệt của người dùng (Client-side) bằng cách chạy mã JS lấy cắp cookie hoặc điều hướng trang."
    },
    {
        "id": 9,
        "question": "Câu 9: Dấu hiệu đặc trưng nhất để nhận biết một trường nhập liệu có khả năng dính lỗ hổng SQL Injection cơ bản là gì?",
        "points": 0.15,
        "options": [
            "A. Nhập chữ in hoa.",
            "B. Hệ thống báo lỗi ngữ pháp SQL khi nhập ký tự dấu nháy đơn (').",
            "C. Hệ thống bắt buộc nhập mật khẩu 8 ký tự.",
            "D. Trang web tải chậm đi 1 giây."
        ],
        "correctIndex": 1,
        "explanation": "Dấu nháy đơn (') thường phá vỡ cú pháp chuỗi của truy vấn SQL ở backend. Nếu web báo lỗi cơ sở dữ liệu, khả năng cao nó bị lỗi SQLi."
    },
    {
        "id": 10,
        "question": "Câu 10: Kỹ thuật Directory Traversal (Duyệt thư mục ngược) sử dụng chuỗi ký tự đặc trưng nào để truy cập các file ngoài thư mục gốc của Web?",
        "points": 0.15,
        "options": [
            "A. http://",
            "B. ../ (Dot-dot-slash)",
            "C. 1=1--",
            "D. <script>"
        ],
        "correctIndex": 1,
        "explanation": "Sử dụng ../ giúp kẻ tấn công lùi lại thư mục cha, hướng đến các file nhạy cảm như /etc/passwd trên Linux."
    },
    {
        "id": 11,
        "question": "Câu 11: Hình thức tấn công Defacement nhắm vào Web Server nhằm mục đích gì?",
        "points": 0.15,
        "options": [
            "A. Đánh cắp mã nguồn dự án.",
            "B. Thay đổi trái phép nội dung hiển thị (thường là trang chủ) để phá hoại danh tiếng hoặc truyền tải thông điệp.",
            "C. Làm cạn kiệt băng thông máy chủ.",
            "D. Xóa các tài khoản quản trị."
        ],
        "correctIndex": 1,
        "explanation": "Defacement giống như việc xịt sơn bôi bẩn lên bức tường mặt tiền của công ty trên không gian mạng."
    },
    {
        "id": 12,
        "question": "Câu 12: WAF (Web Application Firewall) được triển khai chủ yếu để ngăn chặn loại tấn công nào?",
        "points": 0.15,
        "options": [
            "A. Tấn công vật lý vào Data Center.",
            "B. ARP Spoofing.",
            "C. SQL Injection, XSS và các cuộc tấn công nhắm vào tầng Ứng dụng (Layer 7).",
            "D. Ping Flood."
        ],
        "correctIndex": 2,
        "explanation": "WAF chuyên đọc và lọc payload HTTP/HTTPS để bảo vệ trực tiếp các ứng dụng Web."
    },
    {
        "id": 13,
        "question": "Câu 13: Giao thức mã hóa Wi-Fi nào sau đây bị coi là yếu nhất và có thể bị bẻ khóa dễ dàng trong vài phút?",
        "points": 0.15,
        "options": [
            "A. WPA",
            "B. WPA2-PSK",
            "C. WPA3",
            "D. WEP"
        ],
        "correctIndex": 3,
        "explanation": "WEP sử dụng thuật toán RC4 cũ với IV (Initialization Vector) quá ngắn, tạo ra lỗ hổng nghiêm trọng."
    },
    {
        "id": 14,
        "question": "Câu 14: Hành động 'Rooting' (trên Android) hoặc 'Jailbreaking' (trên iOS) tiềm ẩn rủi ro an ninh mạng nào lớn nhất?",
        "points": 0.15,
        "options": [
            "A. Làm máy chạy chậm hơn.",
            "B. Vô hiệu hóa các cơ chế bảo vệ hộp cát (Sandbox) cốt lõi của hệ điều hành, cho phép mã độc chiếm quyền kiểm soát toàn bộ thiết bị.",
            "C. Làm hỏng màn hình cảm ứng.",
            "D. Xóa toàn bộ danh bạ."
        ],
        "correctIndex": 1,
        "explanation": "Việc phá vỡ hệ thống bảo vệ nguyên bản giúp người dùng cài ứng dụng lậu nhưng đồng thời cũng mở toang cánh cửa cho Malware hoạt động."
    },
    {
        "id": 15,
        "question": "Câu 15: MDM (Mobile Device Management) là giải pháp giúp doanh nghiệp thực hiện việc gì?",
        "points": 0.15,
        "options": [
            "A. Quản lý mạng nội bộ.",
            "B. Bẻ khóa thiết bị của nhân viên.",
            "C. Quản lý tập trung, áp dụng chính sách bảo mật, và có khả năng xóa dữ liệu từ xa (Wipe) trên các thiết bị di động của nhân viên.",
            "D. Cung cấp Wi-Fi miễn phí."
        ],
        "correctIndex": 2,
        "explanation": "MDM là công cụ không thể thiếu để duy trì an ninh cho xu hướng BYOD (Bring Your Own Device) trong doanh nghiệp."
    },
    {
        "id": 16,
        "question": "Câu 16: Một trong những nguyên nhân hàng đầu khiến các thiết bị IoT (Camera, Router) dễ bị nhiễm mã độc (như Mirai Botnet) là gì?",
        "points": 0.15,
        "options": [
            "A. Sử dụng phần cứng quá mạnh.",
            "B. Luôn được cập nhật tự động.",
            "C. Bị người dùng giữ nguyên mật khẩu quản trị mặc định (Default Passwords) do nhà sản xuất cài đặt.",
            "D. Không có kết nối mạng."
        ],
        "correctIndex": 2,
        "explanation": "Thiết bị IoT thường được cài đặt hời hợt, dùng mật khẩu mặc định rập khuôn khiến chúng dễ bị Brute-force và kiểm soát."
    },
    {
        "id": 17,
        "question": "Câu 17: Trong mô hình điện toán đám mây, SaaS (Software as a Service) có nghĩa là gì?",
        "points": 0.15,
        "options": [
            "A. Nhà cung cấp cho thuê hạ tầng máy chủ, khách hàng tự cài Hệ điều hành.",
            "B. Nhà cung cấp cung cấp sẵn phần mềm hoàn chỉnh cho người dùng cuối qua Internet (ví dụ: Google Workspace, Microsoft 365).",
            "C. Đám mây chỉ dùng cho mục đích cá nhân.",
            "D. Nhà cung cấp bán máy chủ vật lý."
        ],
        "correctIndex": 1,
        "explanation": "SaaS là mô hình cao nhất nơi khách hàng chỉ việc sử dụng ứng dụng mà không cần quản lý bất kỳ hạ tầng hay mã nguồn nào."
    },
    {
        "id": 18,
        "question": "Câu 18: Theo Mô hình trách nhiệm chung (Shared Responsibility Model) của Cloud, bảo vệ an ninh vật lý cho các Trung tâm Dữ liệu là trách nhiệm của ai?",
        "points": 0.15,
        "options": [
            "A. Của người dùng cuối (End-user).",
            "B. Của bộ phận IT doanh nghiệp thuê Cloud.",
            "C. Của Nhà cung cấp Dịch vụ Đám mây (Cloud Provider như AWS, Azure).",
            "D. Của Chính phủ."
        ],
        "correctIndex": 2,
        "explanation": "Các vấn đề về điện, làm mát, bảo vệ máy chủ vật lý (Security OF the Cloud) là nghĩa vụ bắt buộc của nhà cung cấp."
    },
    {
        "id": 19,
        "question": "Câu 19: Hàm băm (Hash Function) như SHA-256 được sử dụng trong mật mã học nhằm mục đích cốt lõi gì?",
        "points": 0.15,
        "options": [
            "A. Mã hóa dữ liệu để gửi đi và sau đó giải mã lại.",
            "B. Tạo ra một \"vân tay số\" độ dài cố định để kiểm tra tính toàn vẹn (Integrity) của dữ liệu hoặc tệp tin.",
            "C. Thay thế cho Tường lửa.",
            "D. Tăng tốc độ đường truyền mạng."
        ],
        "correctIndex": 1,
        "explanation": "Hàm băm là hàm một chiều (không thể dịch ngược), dùng để đối chiếu xem file/dữ liệu có bị thay đổi trong quá trình lưu trữ/truyền tải hay không."
    },
    {
        "id": 20,
        "question": "Câu 20: Hệ mật mã Không đối xứng (Asymmetric Cryptography) giải quyết được nhược điểm lớn nhất nào của Hệ mật mã Đối xứng?",
        "points": 0.15,
        "options": [
            "A. Tốc độ xử lý quá chậm.",
            "B. Dễ bị tấn công bằng phần cứng.",
            "C. Bài toán trao đổi khóa an toàn (Distribution Key Problem).",
            "D. Thiếu sự hỗ trợ từ các Hệ điều hành."
        ],
        "correctIndex": 2,
        "explanation": "Trong mã hóa bất đối xứng (như RSA), mỗi người có 1 Public Key và 1 Private Key riêng, nên không phải chia sẻ khóa bí mật qua mạng rủi ro như mã hóa đối xứng."
    },
    {
        "id": 21,
        "question": "Câu 21: Tấn công Phishing (Lừa đảo qua mạng) chủ yếu dựa vào yếu tố nào để thành công?",
        "points": 0.15,
        "options": [
            "A. Sức mạnh tính toán của máy tính hacker.",
            "B. Thao túng tâm lý con người (sợ hãi, tham lam, tò mò) để họ tự nguyện cung cấp thông tin nhạy cảm.",
            "C. Lỗ hổng của hệ thống tường lửa phần cứng.",
            "D. Lỗi tràn bộ đệm (Buffer Overflow)."
        ],
        "correctIndex": 1,
        "explanation": "Phishing là dạng tấn công Social Engineering, tấn công vào mắt xích yếu nhất là con người thay vì rào cản kỹ thuật."
    },
    {
        "id": 22,
        "question": "Câu 22: Kỹ thuật 'Tailgating' trong Social Engineering là hành vi gì?",
        "points": 0.15,
        "options": [
            "A. Gắn thiết bị nghe lén vào điện thoại.",
            "B. Đi bám sát theo ngay sau một nhân viên hợp pháp để lẻn qua cửa an ninh, thẻ từ mà không cần xác thực.",
            "C. Lục lọi thùng rác của công ty.",
            "D. Gửi tin nhắn rác SMS."
        ],
        "correctIndex": 1,
        "explanation": "Tailgating (hay Piggybacking) lợi dụng sự lịch sự của người đi trước (giữ cửa) để thâm nhập vật lý vào khu vực hạn chế."
    },
    {
        "id": 23,
        "question": "Câu 23: Dumpster Diving (Lục lọi thùng rác) có thể giúp Hacker thu thập được gì?",
        "points": 0.15,
        "options": [
            "A. Các thiết bị Router mới.",
            "B. Tài liệu bản cứng in lỗi có chứa sơ đồ mạng, danh bạ nhân viên, hoặc sổ tay ghi mật khẩu bị vứt bỏ.",
            "C. Mã nguồn trang web trực tuyến.",
            "D. Tín hiệu Wi-Fi."
        ],
        "correctIndex": 1,
        "explanation": "Rất nhiều doanh nghiệp vứt các bản nháp tài liệu mật thẳng vào thùng rác mà không qua máy hủy tài liệu, tạo cơ hội cho kẻ tấn công."
    },
    {
        "id": 24,
        "question": "Câu 24: Toán tử nào sau đây của Google Dorking được dùng để tìm kiếm các tệp tin có định dạng cụ thể (như .pdf, .xls)?",
        "points": 0.15,
        "options": [
            "A. intitle:",
            "B. inurl:",
            "C. filetype:",
            "D. site:"
        ],
        "correctIndex": 2,
        "explanation": "filetype:pdf kết hợp với các từ khóa khác sẽ giúp định vị tài liệu lộ lọt trên các trang web."
    },
    {
        "id": 25,
        "question": "Câu 25: Công cụ Wayback Machine (archive.org) có tác dụng gì trong giai đoạn Thu thập thông tin (Footprinting)?",
        "points": 0.15,
        "options": [
            "A. Tìm địa chỉ IP của máy chủ ẩn.",
            "B. Xem lại các phiên bản giao diện và nội dung cũ của một trang web trong quá khứ, dù dữ liệu đó đã bị quản trị viên xóa.",
            "C. Dịch ngược mã nguồn ứng dụng.",
            "D. Bẻ khóa mật khẩu quản trị."
        ],
        "correctIndex": 1,
        "explanation": "Wayback Machine lưu trữ ảnh chụp trang web theo thời gian. Hacker thường dùng nó để tìm các trang ẩn hoặc thông tin bị bỏ sót trong quá khứ."
    },
    {
        "id": 26,
        "question": "Câu 26: Lệnh 'whois' khi tra cứu một tên miền (domain) sẽ cung cấp thông tin gì chủ yếu?",
        "points": 0.15,
        "options": [
            "A. Danh sách các lỗ hổng trên web đó.",
            "B. Thông tin về cá nhân/tổ chức đăng ký sở hữu, ngày đăng ký, ngày hết hạn và địa chỉ máy chủ DNS quản lý.",
            "C. Mã nguồn của trang web.",
            "D. Cấu trúc thư mục của máy chủ."
        ],
        "correctIndex": 1,
        "explanation": "Cơ sở dữ liệu Whois chứa thông tin liên hệ hành chính và kỹ thuật của chủ sở hữu tên miền."
    },
    {
        "id": 27,
        "question": "Câu 27: Tấn công SYN Flood thuộc thể loại tấn công nào sau đây?",
        "points": 0.15,
        "options": [
            "A. Tấn công leo thang đặc quyền.",
            "B. Tấn công Từ chối dịch vụ (DoS) nhắm vào cạn kiệt tài nguyên kết nối.",
            "C. Tấn công kỹ thuật xã hội.",
            "D. Tấn công nghe lén."
        ],
        "correctIndex": 1,
        "explanation": "SYN Flood gửi hàng loạt gói tin SYN yêu cầu kết nối nhưng không bao giờ hoàn tất (không gửi ACK), khiến máy chủ treo vì giữ quá nhiều kết nối bán mở."
    },
    {
        "id": 28,
        "question": "Câu 28: Kỹ thuật Session Hijacking (Cướp phiên làm việc) là hành động gì?",
        "points": 0.15,
        "options": [
            "A. Đoán mật khẩu của người dùng bằng từ điển.",
            "B. Lấy cắp Session ID (thường qua mã thông báo Cookie) đã xác thực thành công để mạo danh người dùng hợp pháp thâm nhập ứng dụng.",
            "C. Chiếm quyền điều khiển Router.",
            "D. Tạo một tài khoản giả mạo mới."
        ],
        "correctIndex": 1,
        "explanation": "Hacker không cần biết Username/Password, chỉ cần trộm được thẻ Session ID (giống như vé vào cửa) là có thể thao tác với tư cách nạn nhân."
    },
    {
        "id": 29,
        "question": "Câu 29: Kẻ tấn công có thể dễ dàng lấy cắp Session ID nếu Cookie của nạn nhân gặp vấn đề nào sau đây?",
        "points": 0.15,
        "options": [
            "A. Cookie bị mã hóa RSA.",
            "B. Cookie truyền qua mạng HTTP không mã hóa và không được cấu hình cờ bảo mật (Secure/HttpOnly flags).",
            "C. Cookie có kích thước quá ngắn.",
            "D. Hệ thống tắt tính năng Cookie."
        ],
        "correctIndex": 1,
        "explanation": "Giao thức HTTP truyền dữ liệu dưới dạng văn bản rõ (plaintext). Nếu không có TLS/HTTPS và cờ Secure, hacker nghe lén sẽ thấy nguyên vẹn Session ID."
    },
    {
        "id": 30,
        "question": "Câu 30: Một đặc trưng của phương pháp 'Footprinting bị động' (Passive Reconnaissance) là gì?",
        "points": 0.15,
        "options": [
            "A. Ping thẳng vào máy chủ mục tiêu.",
            "B. Chạy Nmap quét toàn bộ hệ thống.",
            "C. Thu thập thông tin từ xa qua báo chí, công cụ tìm kiếm, mạng xã hội mà không gửi bất kỳ gói tin mạng nào chạm trực tiếp đến máy chủ đích.",
            "D. Gọi điện thẳng cho phòng IT giả vờ hỏi cấu hình."
        ],
        "correctIndex": 2,
        "explanation": "Thu thập bị động giúp hacker không để lại dấu vết IP trong log của mục tiêu, hoàn toàn tàng hình trong quá trình lên kế hoạch."
    },
    {
        "id": 31,
        "question": "Câu 31 [System Hacking]: Sự khác biệt giữa Leo thang đặc quyền theo chiều dọc (Vertical) và theo chiều ngang (Horizontal) là gì?",
        "points": 0.2,
        "options": [
            "A. Dọc là đổi mật khẩu, ngang là tạo user mới.",
            "B. Dọc là người dùng thường chiếm quyền Quản trị tối cao (Admin/Root); Ngang là người dùng truy cập trái phép sang tài khoản của một người dùng khác ngang cấp.",
            "C. Dọc nhắm vào Hệ điều hành, ngang nhắm vào Cơ sở dữ liệu.",
            "D. Cả hai đều bắt buộc phải dùng mã độc mã hóa."
        ],
        "correctIndex": 1,
        "explanation": "Ngang (Horizontal) là User A xem trộm dữ liệu của User B. Dọc (Vertical) là User A lợi dụng lỗi SUID/Kernel để vươn lên làm Root."
    },
    {
        "id": 32,
        "question": "Câu 32 [Malware]: Kẻ tấn công thường sử dụng công cụ Crypter hoặc Packer nhằm mục đích gì đối với một file Trojan?",
        "points": 0.2,
        "options": [
            "A. Biến Trojan thành Ransomware.",
            "B. Xóa tệp tin trên hệ thống đích.",
            "C. Mã hóa và xáo trộn cấu trúc bên trong (Obfuscation) của mã độc để qua mặt công cụ quét dựa trên Chữ ký (Signature-based) của phần mềm diệt Virus.",
            "D. Giải nén file nhanh hơn."
        ],
        "correctIndex": 2,
        "explanation": "Packer/Crypter giống như việc gói mã độc vào các lớp hộp quà bọc kín, khiến Antivirus không nhìn thấy chuỗi byte đặc trưng quen thuộc để báo động."
    },
    {
        "id": 33,
        "question": "Câu 33 [Social Engineering]: Tấn công Spear Phishing nguy hiểm hơn Phishing thông thường ở điểm nào?",
        "points": 0.2,
        "options": [
            "A. Nó phát tán nhanh hơn.",
            "B. Thay vì rải lưới rộng rãi một nội dung chung chung, Spear Phishing nhắm mục tiêu cực kỳ cụ thể (một cá nhân/phòng ban) và sử dụng dữ liệu trinh sát để cá nhân hóa nội dung lừa đảo, khiến nạn nhân mất cảnh giác.",
            "C. Nó luôn chứa mã độc phá hủy phần cứng.",
            "D. Nó dùng tin nhắn SMS thay vì Email."
        ],
        "correctIndex": 1,
        "explanation": "Spear Phishing được thiết kế đo ni đóng giày. Ví dụ: Kẻ lừa đảo xưng tên Giám đốc, gọi đúng tên và dự án nạn nhân đang làm."
    },
    {
        "id": 34,
        "question": "Câu 34 [Web App]: Lỗ hổng CSRF (Cross-Site Request Forgery) lợi dụng cơ chế hoạt động nào của trình duyệt web?",
        "points": 0.2,
        "options": [
            "A. Trình duyệt không có khả năng chống virus.",
            "B. Trình duyệt tự động lưu mật khẩu người dùng.",
            "C. Khi gửi một yêu cầu (Request) đến một Domain, trình duyệt tự động đính kèm toàn bộ Cookie xác thực hợp lệ của Domain đó, khiến máy chủ tưởng lầm đây là lệnh do chính người dùng tự ý bấm gửi.",
            "D. Trình duyệt tự động chặn popup."
        ],
        "correctIndex": 2,
        "explanation": "CSRF lợi dụng \"sự nhiệt tình\" của trình duyệt. Nếu bạn đang đăng nhập Ngân hàng, mở tab khác có link xấu, link xấu đó sẽ mượn Cookie Ngân hàng của bạn để ra lệnh chuyển tiền."
    },
    {
        "id": 35,
        "question": "Câu 35 [SQL Injection]: Khi hacker chèn đoạn mã `' OR 1=1 --` vào form Đăng nhập, hệ thống dễ bị xâm nhập vì lý do logic nào sau đây?",
        "points": 0.2,
        "options": [
            "A. Câu lệnh làm quá tải CPU máy chủ.",
            "B. Mệnh đề OR 1=1 luôn mang giá trị TRUE, và dấu '--' xóa bỏ phần kiểm tra mật khẩu phía sau, ép cơ sở dữ liệu phải phê duyệt quyền đăng nhập mà không cần password hợp lệ.",
            "C. Nó reset mật khẩu quản trị về giá trị rỗng.",
            "D. Nó xóa toàn bộ bảng dữ liệu người dùng."
        ],
        "correctIndex": 1,
        "explanation": "Đây là Tautology SQLi. Logic xác thực biến thành \"Đúng tên đăng nhập HOẶC 1=1 (luôn đúng)\", hệ thống sẽ đăng nhập ngay vào tài khoản đầu tiên trong bảng."
    },
    {
        "id": 36,
        "question": "Câu 36 [SQL Injection]: Khái niệm Tham số hóa truy vấn (Parameterized Query / Prepared Statement) giúp chống lại SQLi triệt để bằng cách nào?",
        "points": 0.2,
        "options": [
            "A. Nó mã hóa toàn bộ dữ liệu trước khi lưu.",
            "B. Cơ sở dữ liệu xử lý cú pháp lệnh SQL (Logic) riêng biệt hoàn toàn với dữ liệu nhập vào (Data). Bất kỳ ký tự đặc biệt nào người dùng nhập đều chỉ được xem là chuỗi văn bản vô hại.",
            "C. Nó chặn các dải IP lạ truy cập.",
            "D. Nó cấm người dùng gõ dấu nháy đơn."
        ],
        "correctIndex": 1,
        "explanation": "Prepared Statement biên dịch trước khung lệnh. Dữ liệu gõ vào chỉ điền vào chỗ trống (Placeholder), nên không thể bẻ gãy hay thay đổi cấu trúc lệnh gốc."
    },
    {
        "id": 37,
        "question": "Câu 37 [Wireless]: Tại sao chuẩn bảo mật WPA3 lại có khả năng chống lại các cuộc tấn công bẻ khóa mật khẩu ngoại tuyến (Offline Dictionary Attack) mà WPA2 mắc phải?",
        "points": 0.2,
        "options": [
            "A. Vì WPA3 yêu cầu mật khẩu phải dài 20 ký tự.",
            "B. WPA3 ẩn địa chỉ MAC của thiết bị.",
            "C. WPA3 thay thế quy trình bắt tay 4 bước bằng Giao thức xác thực SAE (Simultaneous Authentication of Equals), không cho phép kẻ tấn công bắt một gói tin duy nhất rồi mang về máy nhà để chạy công cụ đoán mật khẩu nhiều lần.",
            "D. WPA3 chỉ hoạt động trên băng tần 5GHz."
        ],
        "correctIndex": 2,
        "explanation": "Giao thức SAE (Dragonfly) bắt buộc người dùng và Router tương tác với nhau mỗi lần thử mật khẩu. Không thể \"Bắt 1 lần - Giải mã triệu lần offline\" như WPA2."
    },
    {
        "id": 38,
        "question": "Câu 38 [Mobile]: Kỹ thuật Containerization (Công nghệ vùng chứa) trong nền tảng MDM giải quyết bài toán bảo mật cốt lõi nào của thiết bị BYOD (Mang thiết bị cá nhân đi làm)?",
        "points": 0.2,
        "options": [
            "A. Giúp điện thoại chạy ứng dụng Windows.",
            "B. Tăng dung lượng pin cho điện thoại.",
            "C. Thiết lập một vùng mã hóa cô lập hoàn toàn Dữ liệu Công ty (App, Mail nội bộ) khỏi Dữ liệu Cá nhân của nhân viên, giúp admin kiểm soát quyền công ty mà không vi phạm quyền riêng tư cá nhân.",
            "D. Ngăn chặn điện thoại kết nối Wi-Fi ngoài."
        ],
        "correctIndex": 2,
        "explanation": "Containerization tạo \"chiếc hộp an toàn\" trên thiết bị. Dữ liệu công ty nằm trong hộp, nếu nhân viên nghỉ việc, MDM chỉ xóa sạch hộp đó mà không đụng tới ảnh cá nhân."
    },
    {
        "id": 39,
        "question": "Câu 39 [IoT/OT]: Việc vá lỗi bảo mật (Patching) cho các hệ thống công nghiệp OT/ICS thường gặp trở ngại cực kỳ lớn vì nguyên nhân nào?",
        "points": 0.2,
        "options": [
            "A. Các thiết bị này không có bộ nhớ ROM.",
            "B. Nhà sản xuất cố tình không làm bản vá.",
            "C. Các hệ thống OT (như điện lực, nhà máy) yêu cầu tính sẵn sàng liên tục (Uptime 99.99%). Việc dừng máy để cập nhật và khởi động lại có thể gây thiệt hại khổng lồ hoặc tai nạn nguy hiểm.",
            "D. Phần cứng OT không hỗ trợ cáp mạng LAN."
        ],
        "correctIndex": 2,
        "explanation": "Trái với máy tính văn phòng, hệ thống SCADA/PLC điều khiển vật lý. Sập một hệ thống nhà máy trong 5 phút để vá lỗ hổng là điều cấm kỵ trong vận hành OT."
    },
    {
        "id": 40,
        "question": "Câu 40 [Cloud]: Nguyên nhân hàng đầu dẫn đến các vụ rò rỉ dữ liệu khổng lồ trên môi trường Cloud (ví dụ AWS S3 Buckets) không đến từ kỹ thuật hack siêu việt, mà là do:",
        "points": 0.2,
        "options": [
            "A. Hệ thống làm mát của AWS bị hỏng.",
            "B. Sự bất cẩn trong cấu hình (Misconfiguration) của quản trị viên: Phân quyền truy cập các kho lưu trữ dữ liệu ở chế độ Public (Ai cũng có thể đọc/tải).",
            "C. AWS sử dụng mã hóa yếu.",
            "D. Cloud dễ bị tấn công vật lý."
        ],
        "correctIndex": 1,
        "explanation": "Misconfiguration (Cấu hình sai) là lỗ hổng chí mạng. Một kho chứa dữ liệu dù bảo vệ bởi tường lửa AWS nhưng thiết lập quyền là \"Mọi người trên Internet\" thì coi như phơi bày toàn bộ."
    },
    {
        "id": 41,
        "question": "Câu 41 [Cryptography]: Mật mã học lai (Hybrid Cryptography) như SSL/TLS áp dụng chiến lược thiết kế nào để tối ưu hóa?",
        "points": 0.2,
        "options": [
            "A. Chỉ dùng thuật toán Băm (Hash).",
            "B. Dùng Mã hóa đối xứng (AES) để giải quyết bài toán phân phối khóa, rồi chuyển sang dùng Mã hóa bất đối xứng (RSA) để truyền file.",
            "C. Dùng Mã hóa bất đối xứng (như RSA) để thiết lập, trao đổi khóa bí mật một cách an toàn, sau đó dùng Mã hóa đối xứng (như AES) với khóa bí mật đó để truyền tải lượng lớn dữ liệu với tốc độ cao.",
            "D. Không mã hóa, chỉ nén dữ liệu."
        ],
        "correctIndex": 2,
        "explanation": "Bất đối xứng an toàn tuyệt đối nhưng tính toán rất chậm. Đối xứng truyền dữ liệu nhanh. Hybrid tận dụng điểm mạnh của cả hai."
    },
    {
        "id": 42,
        "question": "Câu 42 [Cryptography]: Khái niệm 'Salt' trong quá trình lưu trữ mật khẩu có tác dụng bảo vệ dữ liệu chống lại loại tấn công nào?",
        "points": 0.2,
        "options": [
            "A. Tấn công DDoS.",
            "B. Tấn công Phishing.",
            "C. Bẻ khóa dựa trên bảng Rainbow Tables (Bảng mã băm cầu vồng chuẩn bị sẵn).",
            "D. Tấn công MITM (Đứng giữa)."
        ],
        "correctIndex": 2,
        "explanation": "Salt (Muối) là chuỗi ngẫu nhiên thêm vào mật khẩu trước khi băm. Nó khiến hai người có chung pass '123456' sẽ có 2 mã Hash hoàn toàn khác nhau, làm vô hiệu hóa Rainbow Table."
    },
    {
        "id": 43,
        "question": "Câu 43 [Enumeration]: Giao thức LDAP (Lightweight Directory Access Protocol) thường bị hacker lợi dụng ở giai đoạn Enumeration để làm gì?",
        "points": 0.2,
        "options": [
            "A. Lây nhiễm Ransomware trực tiếp.",
            "B. Khởi động lại máy chủ Windows.",
            "C. Rút trích toàn bộ cấu trúc phòng ban, danh sách tài khoản người dùng, máy tính từ hệ thống Active Directory (AD) của doanh nghiệp.",
            "D. Mở các cổng mạng Tường lửa."
        ],
        "correctIndex": 2,
        "explanation": "LDAP là xương sống lưu trữ danh bạ nhân sự. Nếu không cấu hình phân quyền cẩn thận (Null Session), hacker có thể dump toàn bộ sơ đồ tổ chức công ty."
    },
    {
        "id": 44,
        "question": "Câu 44 [DoS/DDoS]: Tấn công DDoS theo phương thức Khuếch đại (Amplification Attack) sử dụng giao thức UDP (như DNS/NTP) dựa trên nguyên lý nào?",
        "points": 0.2,
        "options": [
            "A. Gửi hàng triệu email báo lỗi đến nạn nhân.",
            "B. Đánh cắp session của máy chủ DNS.",
            "C. Giả mạo IP nguồn thành IP nạn nhân, gửi một truy vấn nhỏ đến máy chủ trung gian. Máy chủ trung gian này sẽ phản hồi một gói dữ liệu siêu lớn dội thẳng vào đầu nạn nhân.",
            "D. Xóa bảng định tuyến của DNS."
        ],
        "correctIndex": 2,
        "explanation": "Giống như đặt pizza trả tiền sau nhưng ghi địa chỉ giao hàng là nhà kẻ thù. Kẻ tấn công tốn 1 đồng sức lực, nạn nhân gánh 50 đồng thiệt hại."
    },
    {
        "id": 45,
        "question": "Câu 45 [Session Hijacking]: Một nhà phát triển gắn tham số Session ID trực tiếp lên URL (vd: `site.com?sid=123xyz`). Hành động này vi phạm nguyên tắc bảo mật vì:",
        "points": 0.2,
        "options": [
            "A. Làm URL quá dài, vi phạm chuẩn SEO.",
            "B. URL có chứa thẻ phiên sẽ dễ dàng bị lộ qua Lịch sử trình duyệt, Referer Headers khi bấm link ra ngoài, và Proxy/Server Logs.",
            "C. Mã hóa HTTPS không che dấu URL.",
            "D. Gây lỗi tràn bộ nhớ Cache."
        ],
        "correctIndex": 1,
        "explanation": "Thông tin trên thanh địa chỉ URL có thể được sao chép, chia sẻ nhầm, hoặc lưu công khai ở nhiều log thiết bị, mở đường cho Session Hijacking."
    },
    {
        "id": 46,
        "question": "Câu 46 [Vận Dụng - Web App / XSS]: Ứng dụng web hiển thị bình luận của người dùng trên diễn đàn mà không lọc dữ liệu (Stored XSS). Nếu bạn là nhà phát triển, phương pháp thiết kế nào sau đây là TỐI ƯU NHẤT để vô hiệu hóa triệt để khả năng thực thi mã JavaScript độc hại trên trình duyệt?",
        "points": 0.5,
        "options": [
            "A. Áp dụng Context-Aware Output Encoding (Mã hóa đầu ra): Chuyển đổi các ký tự nguy hiểm thành thực thể HTML (ví dụ: `<` thành `&lt;`) trước khi hiển thị lên màn hình.",
            "B. Thiết lập Tường lửa chặn địa chỉ IP của người viết.",
            "C. Dùng JavaScript để ẩn thẻ script do người dùng nhập.",
            "D. Đổi hệ quản trị cơ sở dữ liệu sang MongoDB."
        ],
        "correctIndex": 0,
        "explanation": "Output Encoding tước bỏ ý nghĩa 'lệnh' của các ký tự mã kịch bản. Trình duyệt chỉ xem nó là văn bản bình thường để hiển thị chứ không thực thi."
    },
    {
        "id": 47,
        "question": "Câu 47 [Vận Dụng - Cryptography]: Công ty yêu cầu thiết kế hệ thống lưu trữ Mật khẩu người dùng chống lại các đòn Brute-force mạnh nhất bằng Card đồ họa (GPU). Kiến trúc nào sau đây là chuẩn mực chuyên gia bảo mật?",
        "points": 0.5,
        "options": [
            "A. Băm mật khẩu 3 lần bằng MD5.",
            "B. Dùng thuật toán AES-256 mã hóa hai chiều.",
            "C. Băm mật khẩu bằng Argon2 hoặc bcrypt, kết hợp thêm Salt ngẫu nhiên cấp phát riêng cho từng người dùng, để làm chậm tối đa quá trình dò mật khẩu.",
            "D. Bắt buộc người dùng đổi mật khẩu 3 ngày một lần."
        ],
        "correctIndex": 2,
        "explanation": "MD5 rất nhanh và dễ bị bẻ. Argon2/bcrypt là thuật toán băm tốn tài nguyên bộ nhớ (Memory-hard/CPU-hard), khiến các siêu máy tính/GPU mất vô vàn thời gian để chạy, bảo vệ triệt để mật khẩu."
    },
    {
        "id": 48,
        "question": "Câu 48 [Vận Dụng - Malware Incident]: Trong tư cách chuyên gia SOC, bạn nhận được cuộc gọi: Một máy tính phòng nhân sự bị mã hóa toàn bộ dữ liệu, màn hình hiện thông báo đòi Bitcoin (Ransomware). Quy tắc VÀNG, thao tác đầu tiên cần hướng dẫn nhân viên ngay trong 10 giây đầu là gì?",
        "points": 0.5,
        "options": [
            "A. Tải phần mềm diệt virus mới nhất và quét máy.",
            "B. Trả tiền chuộc ngay để cứu dữ liệu công ty.",
            "C. Tìm cách xóa file text đòi tiền chuộc.",
            "D. Lập tức rút cáp mạng LAN hoặc ngắt Wi-Fi vật lý để ngăn mã độc lây lan theo chiều ngang sang các máy chủ khác trong cùng hệ thống."
        ],
        "correctIndex": 3,
        "explanation": "Cô lập (Containment) là bước tối quan trọng trong Ứng phó sự cố. Rút dây mạng lập tức chặn đường lây lan của mã độc worm-like (như WannaCry)."
    },
    {
        "id": 49,
        "question": "Câu 49 [Vận Dụng - Wireless]: Doanh nghiệp mở mạng Wi-Fi 'Guest' cho khách hàng sử dụng miễn phí tại sảnh. Làm sao cấu hình để khách chỉ lướt web mà tuyệt đối không thể quét Nmap (Scanning) tìm máy chủ Kế toán và không bắt được gói tin (Sniffing) của nhau?",
        "points": 0.5,
        "options": [
            "A. Dùng WEP để tăng tính tương thích.",
            "B. Yêu cầu mọi người dùng đăng ký địa chỉ MAC với lễ tân.",
            "C. Đặt mạng Guest vào một VLAN hoàn toàn riêng biệt (cách ly với VLAN nội bộ) và Kích hoạt tính năng 'Client Isolation/AP Isolation' trên bộ phát Wi-Fi.",
            "D. Chạy một phần mềm chống Virus trên máy chủ kế toán."
        ],
        "correctIndex": 2,
        "explanation": "VLAN riêng cắt đứt đường sang hệ thống công ty. Client Isolation cấm các thiết bị cùng kết nối vào một Access Point được nhìn thấy và giao tiếp với nhau (chặn Sniffing/Scanning nội mạng khách)."
    },
    {
        "id": 50,
        "question": "Câu 50 [Vận Dụng - System Hacking Ethics]: Bạn là Penetration Tester. Sau khi tìm được lỗ hổng SUID trên Linux và leo thang thành quyền Root, bạn quyết định tạo một user ẩn mới (`hacker_admin`) có quyền root để lần sau test cho nhanh. Bạn đã phạm phải sai lầm nghiêm trọng nào về Đạo đức Hacking?",
        "points": 0.5,
        "options": [
            "A. Bạn không phạm sai lầm nào vì bạn là chuyên gia.",
            "B. User đó phải đặt mật khẩu cực khó.",
            "C. Việc để lại cửa hậu (Backdoor) hoặc tài khoản lạ sau khi kiểm thử phá vỡ tính vẹn toàn của hệ thống, tạo lỗ hổng thật cho hacker mũ đen xâm nhập. Ethical hacker bắt buộc phải Dọn dẹp sạch sẽ (Clearing/Revert) mọi thiết lập thử nghiệm.",
            "D. Bạn nên công khai tài khoản đó lên diễn đàn."
        ],
        "correctIndex": 2,
        "explanation": "Nguyên tắc cao nhất của kiểm thử là 'Do No Harm' (Không gây hại). Mọi công cụ, rác, tài khoản backdoor phục vụ việc test phải được thu hồi, dọn sạch để hệ thống không chịu rủi ro thực tế."
    }
];


/*
======================================================================
HƯỚNG DẪN CHẤM ĐIỂM VÀ ĐÁNH GIÁ NĂNG LỰC (ĐỀ SỐ 2)
======================================================================
Chủ đề bao phủ: System Hacking, Malware, Web/SQLi, Wireless, Cloud, IoT, Cryptography.
Tổng số câu hỏi: 50 câu. 
Tổng điểm tối đa: 10 Điểm.
- Mức độ Nhận biết (30 câu): 0.15 điểm / câu
- Mức độ Thông hiểu (15 câu): 0.20 điểm / câu
- Mức độ Vận dụng (5 câu): 0.50 điểm / câu

Gợi ý đánh giá năng lực của học viên dựa trên Điểm Đạt Được (X):
- X < 5.0 điểm: CẦN CỐ GẮNG - Bạn cần ôn tập kỹ lại các khái niệm về mã hóa (Cryptography), nền tảng lỗ hổng Web và các nguy cơ Malware cơ bản.
- 5.0 <= X < 6.5 điểm: TRUNG BÌNH KHÁ - Nắm được định nghĩa bề mặt nhưng còn nhầm lẫn trong cơ chế hoạt động của Cloud/Wireless và SQLi.
- 6.5 <= X < 8.0 điểm: KHÁ - Nắm chắc kiến thức, am hiểu các kịch bản tấn công Web, Mobile và có tư duy phòng thủ tốt.
- 8.0 <= X < 9.5 điểm: GIỎI - Phân tích vững chắc các kỹ thuật khai thác tầng sâu (Containerization, Prepared Statement, APT, Cryptography).
- 9.5 <= X <= 10 điểm: XUẤT SẮC - Sở hữu tầm nhìn bao quát của Kiến trúc sư An ninh mạng / Pentester thực thụ. Xử lý sự cố tinh vi và chuẩn mực đạo đức!
*/