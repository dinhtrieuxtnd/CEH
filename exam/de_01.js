export const quizData = [
    {
        "id": 1,
        "question": "Câu 1: Tường lửa lọc gói tin (Packet Filtering Firewall) hoạt động chủ yếu ở các tầng nào của mô hình OSI?",
        "points": 0.15,
        "options": [
            "A. Tầng 7 (Application)",
            "B. Tầng 2 (Data Link)",
            "C. Tầng 3 và 4 (Network và Transport)",
            "D. Tầng 1 (Physical)"
        ],
        "correctIndex": 2,
        "explanation": "Packet Filtering Firewall dựa trên địa chỉ IP (tầng 3) và Port (tầng 4) để ra quyết định cho phép hay từ chối."
    },
    {
        "id": 2,
        "question": "Câu 2: Tường lửa trạng thái (Stateful Firewall) khác biệt cơ bản với Tường lửa lọc gói tin ở điểm nào?",
        "points": 0.15,
        "options": [
            "A. Nó theo dõi trạng thái các kết nối đang hoạt động trong một bảng trạng thái.",
            "B. Nó chỉ lọc được các gói tin UDP.",
            "C. Nó hoạt động độc quyền trên môi trường Cloud.",
            "D. Nó không có khả năng chặn địa chỉ IP."
        ],
        "correctIndex": 0,
        "explanation": "Stateful Firewall duy trì một state table để theo dõi các phiên TCP/UDP, biết được gói tin nào thuộc về kết nối đã được thiết lập."
    },
    {
        "id": 3,
        "question": "Câu 3: WAF (Web Application Firewall) được thiết kế đặc biệt để bảo vệ ứng dụng khỏi các cuộc tấn công nào?",
        "points": 0.15,
        "options": [
            "A. MAC Flooding",
            "B. ARP Spoofing",
            "C. SQL Injection và XSS",
            "D. Ping of Death"
        ],
        "correctIndex": 2,
        "explanation": "WAF hoạt động ở tầng 7, chuyên phân tích lưu lượng HTTP/HTTPS để chặn SQLi, XSS và các lỗ hổng web khác."
    },
    {
        "id": 4,
        "question": "Câu 4: Vùng phi quân sự (DMZ) trong kiến trúc mạng có vai trò gì?",
        "points": 0.15,
        "options": [
            "A. Là mạng nội bộ an toàn tuyệt đối, cách ly hoàn toàn với Internet.",
            "B. Là một mạng phụ đặt các dịch vụ cần công khai (như Web, Mail) để tách biệt với mạng nội bộ.",
            "C. Là nơi đặt các máy tính bị nhiễm mã độc.",
            "D. Là trung tâm lưu trữ cơ sở dữ liệu quan trọng nhất."
        ],
        "correctIndex": 1,
        "explanation": "DMZ chứa các máy chủ public-facing, giúp bảo vệ mạng LAN nội bộ ngay cả khi các máy chủ ở DMZ bị tấn công."
    },
    {
        "id": 5,
        "question": "Câu 5: Nguyên tắc bảo mật 'Implicit Deny' (Từ chối ngầm định) trên Tường lửa có nghĩa là gì?",
        "points": 0.15,
        "options": [
            "A. Tường lửa sẽ chặn tất cả các gói tin ngoại trừ những gói tin được cho phép rõ ràng bằng các luật (rules).",
            "B. Tường lửa mặc định cho phép mọi gói tin, chỉ chặn những gói bị đánh dấu là mã độc.",
            "C. Tường lửa tự động từ chối các máy tính có IP nội bộ.",
            "D. Tường lửa sẽ chặn bất kỳ gói tin nào bị mã hóa."
        ],
        "correctIndex": 0,
        "explanation": "Implicit Deny là luật cuối cùng ở mọi tường lửa: Nếu lưu lượng không khớp với bất kỳ luật cho phép nào ở trên, nó sẽ bị từ chối."
    },
    {
        "id": 6,
        "question": "Câu 6: Kỹ thuật 'Egress Filtering' (Lọc đầu ra) trên Tường lửa nhằm mục đích gì?",
        "points": 0.15,
        "options": [
            "A. Ngăn chặn lưu lượng độc hại từ Internet xâm nhập vào mạng nội bộ.",
            "B. Ngăn chặn các nhân viên tải xuống tài liệu từ các trang web chia sẻ file.",
            "C. Kiểm soát và chặn các gói tin đi từ mạng nội bộ ra ngoài Internet (ví dụ: máy tính bị nhiễm botnet liên lạc ra C&C).",
            "D. Ngăn chặn các cuộc tấn công DDoS từ bên ngoài vào web server."
        ],
        "correctIndex": 2,
        "explanation": "Egress Filtering lọc lưu lượng đi ra, giúp ngăn rò rỉ dữ liệu hoặc ngăn máy tính nội bộ bị điều khiển trái phép giao tiếp ra ngoài."
    },
    {
        "id": 7,
        "question": "Câu 7: Sự khác biệt lớn nhất giữa IDS (Intrusion Detection System) và IPS (Intrusion Prevention System) là gì?",
        "points": 0.15,
        "options": [
            "A. IDS chỉ có thể chạy trên Linux, IPS chỉ chạy trên Windows.",
            "B. IDS chỉ phân tích băng thông, IPS phân tích mật khẩu.",
            "C. IDS chỉ giám sát và phát cảnh báo, IPS có khả năng chủ động chặn luồng dữ liệu độc hại.",
            "D. IDS hoạt động ở tầng 7, IPS hoạt động ở tầng 2."
        ],
        "correctIndex": 2,
        "explanation": "IDS là hệ thống thụ động (chỉ phát hiện), còn IPS là hệ thống chủ động (vừa phát hiện vừa ngăn chặn)."
    },
    {
        "id": 8,
        "question": "Câu 8: Cơ chế 'Signature-based Detection' (Nhận diện dựa trên chữ ký) của IDS hoạt động như thế nào?",
        "points": 0.15,
        "options": [
            "A. So sánh lưu lượng mạng với một đường cơ sở (baseline) hành vi bình thường.",
            "B. So sánh nội dung gói tin với cơ sở dữ liệu các mẫu tấn công đã biết trước.",
            "C. Phân tích mã băm của tất cả các file tải qua mạng.",
            "D. Yêu cầu mọi người dùng mạng phải ký chữ ký điện tử."
        ],
        "correctIndex": 1,
        "explanation": "Dựa trên chữ ký là việc đối chiếu các dấu hiệu, chuỗi byte đặc trưng của mã độc hoặc các kiểu tấn công đã được định nghĩa trong từ điển."
    },
    {
        "id": 9,
        "question": "Câu 9: Điểm yếu của hệ thống IDS sử dụng cơ chế Anomaly-based (Dựa trên bất thường) là gì?",
        "points": 0.15,
        "options": [
            "A. Không thể phát hiện các lỗ hổng chưa từng biết đến (Zero-day).",
            "B. Phụ thuộc hoàn toàn vào các chữ ký được cập nhật.",
            "C. Thường tạo ra số lượng cảnh báo giả (False Positives) rất cao.",
            "D. Không thể phân tích được lưu lượng TCP/IP."
        ],
        "correctIndex": 2,
        "explanation": "Vì mọi sự kiện đi lệch khỏi 'đường cơ sở' bình thường đều bị coi là bất thường, nên các hoạt động hợp lệ nhưng hiếm gặp sẽ gây ra cảnh báo giả."
    },
    {
        "id": 10,
        "question": "Câu 10: NIDS (Network-based IDS) thường được triển khai ở vị trí nào trong mạng?",
        "points": 0.15,
        "options": [
            "A. Cài đặt trực tiếp lên từng máy tính của nhân viên.",
            "B. Đặt tại cổng Span Port/Mirror Port của Switch hoặc các điểm chokepoint để giám sát lưu lượng toàn mạng.",
            "C. Cài đặt trên máy tính của kẻ tấn công.",
            "D. Cài đặt tích hợp trong ổ cứng của các Server."
        ],
        "correctIndex": 1,
        "explanation": "NIDS giám sát lưu lượng mạng, do đó cần được đặt ở những vị trí có thể 'nhìn' thấy bản sao của toàn bộ các gói tin qua mạng (như cổng Mirror)."
    },
    {
        "id": 11,
        "question": "Câu 11: Khái niệm 'False Negative' (Âm tính giả) trong IDS mang ý nghĩa gì?",
        "points": 0.15,
        "options": [
            "A. IDS cảnh báo sai về một hành vi hợp pháp.",
            "B. Máy chủ mạng bị mất kết nối do lỗi phần cứng.",
            "C. Cảnh báo bị mất do mạng bị quá tải.",
            "D. Có một cuộc tấn công thực sự xảy ra nhưng IDS không phát hiện được và bỏ qua."
        ],
        "correctIndex": 3,
        "explanation": "Âm tính giả (False Negative) là rủi ro lớn nhất, khi hệ thống bị mù trước một đòn tấn công đang diễn ra."
    },
    {
        "id": 12,
        "question": "Câu 12: Đâu là một kỹ thuật phổ biến mà hacker dùng để trốn tránh (evasion) việc bị IDS phát hiện?",
        "points": 0.15,
        "options": [
            "A. Thay đổi kích thước màn hình hiển thị.",
            "B. Nâng cấp bộ nhớ RAM cho máy tính tấn công.",
            "C. Phân mảnh gói tin IP (IP Fragmentation).",
            "D. Gửi các email báo cáo lỗi cho quản trị viên."
        ],
        "correctIndex": 2,
        "explanation": "Phân mảnh gói tin IP khiến thông tin chữ ký tấn công bị chia nhỏ, làm cho IDS gặp khó khăn hoặc không thể ráp lại và nhận diện được."
    },
    {
        "id": 13,
        "question": "Câu 13: Suricata là công cụ gì?",
        "points": 0.15,
        "options": [
            "A. Một hệ thống Cân bằng tải.",
            "B. Một trình quét lỗ hổng mã nguồn ứng dụng web.",
            "C. Một công cụ giả lập tấn công DDoS.",
            "D. Một Engine giám sát an ninh mạng, đóng vai trò như một IDS/IPS mạnh mẽ."
        ],
        "correctIndex": 3,
        "explanation": "Suricata là một hệ thống phát hiện mối đe dọa (IDS/IPS và Network Security Monitoring) mã nguồn mở nổi tiếng, do OISF duy trì."
    },
    {
        "id": 14,
        "question": "Câu 14: Điểm vượt trội về kiến trúc của Suricata so với thế hệ Snort cũ là gì?",
        "points": 0.15,
        "options": [
            "A. Hỗ trợ đồ họa 3D.",
            "B. Tích hợp sẵn Antivirus của bên thứ ba.",
            "C. Hỗ trợ kiến trúc đa luồng (Multi-threading) nguyên bản, cho phép tận dụng tối đa CPU nhiều lõi.",
            "D. Không cần cấu hình luật (rules)."
        ],
        "correctIndex": 2,
        "explanation": "Kiến trúc đa luồng của Suricata giúp nó xử lý được lưu lượng tốc độ cao hơn rất nhiều (Gigabit/Terabit) so với kiến trúc luồng đơn cũ của Snort."
    },
    {
        "id": 15,
        "question": "Câu 15: Trong một rule của Suricata, hành động (Action) 'alert' có chức năng gì?",
        "points": 0.15,
        "options": [
            "A. Báo hiệu cho Suricata tạo một bản ghi log cảnh báo và cho phép gói tin đi qua.",
            "B. Chặn gói tin ngay lập tức và gửi email cho người dùng.",
            "C. Thay đổi nội dung gói tin.",
            "D. Chuyển hướng gói tin sang một Honeypot."
        ],
        "correctIndex": 0,
        "explanation": "Lệnh 'alert' chỉ sinh ra cảnh báo trong file fast.log hoặc eve.json mà không can thiệp chặn gói tin (chế độ IDS)."
    },
    {
        "id": 16,
        "question": "Câu 16: Biến `$HOME_NET` trong file cấu hình suricata.yaml thường dùng để chỉ định điều gì?",
        "points": 0.15,
        "options": [
            "A. Địa chỉ MAC của máy chủ Suricata.",
            "B. Dải địa chỉ IP của mạng nội bộ cần được bảo vệ.",
            "C. Địa chỉ IP của máy chủ DNS của Google.",
            "D. Địa chỉ của tất cả các dải IP ngoại trừ mạng công ty."
        ],
        "correctIndex": 1,
        "explanation": "$HOME_NET được sử dụng trong các quy tắc để xác định rõ mạng bên trong, phân biệt với $EXTERNAL_NET (bên ngoài)."
    },
    {
        "id": 17,
        "question": "Câu 17: Cấu trúc cơ bản của một Rule trong Suricata gồm những phần chính nào?",
        "points": 0.15,
        "options": [
            "A. Header (Hành động, Giao thức, IP, Port) và Options (Điều kiện kiểm tra).",
            "B. Payload và Metadata.",
            "C. Encrypt Key và Decrypt Key.",
            "D. Username và Password."
        ],
        "correctIndex": 0,
        "explanation": "Một rule Suricata luôn có 2 phần: Header định nghĩa luồng mạng (VD: alert tcp $EXTERNAL_NET any -> $HOME_NET 80) và Options định nghĩa cái cần tìm (VD: msg, content, sid)."
    },
    {
        "id": 18,
        "question": "Câu 18: Trường `sid` (Signature ID) trong tuỳ chọn rule Suricata dùng để làm gì?",
        "points": 0.15,
        "options": [
            "A. Mã hóa đường truyền.",
            "B. Định danh duy nhất cho một rule cụ thể.",
            "C. Xác định địa chỉ cổng mạng.",
            "D. Đếm số lượng gói tin đi qua."
        ],
        "correctIndex": 1,
        "explanation": "SID là định danh (ID) độc nhất của mỗi rule. SID < 1.000.000 thường là rule chuẩn, SID > 1.000.000 là rule tự viết."
    },
    {
        "id": 19,
        "question": "Câu 19: Cờ (Flag) nào sau đây của Nmap được sử dụng để quét kết nối TCP bán mở (Stealth SYN Scan)?",
        "points": 0.15,
        "options": [
            "A. -sT",
            "B. -sU",
            "C. -sS",
            "D. -sN"
        ],
        "correctIndex": 2,
        "explanation": "-sS là SYN Scan, gửi gói SYN và đợi phản hồi nhưng không hoàn tất tiến trình bắt tay 3 bước, giúp lẩn tránh một số log của ứng dụng."
    },
    {
        "id": 20,
        "question": "Câu 20: Tùy chọn `-O` trong lệnh Nmap có tác dụng gì?",
        "points": 0.15,
        "options": [
            "A. Xuất kết quả ra file.",
            "B. Kích hoạt tính năng dò tìm Hệ điều hành (OS Detection).",
            "C. Quét toàn bộ các cổng.",
            "D. Ẩn IP nguồn."
        ],
        "correctIndex": 1,
        "explanation": "Tùy chọn -O yêu cầu Nmap phân tích các thông số của giao thức TCP/IP để đoán xem mục tiêu đang chạy Hệ điều hành gì."
    },
    {
        "id": 21,
        "question": "Câu 21: Theo mặc định, nếu không chỉ định cổng, Nmap sẽ quét bao nhiêu cổng phổ biến nhất?",
        "points": 0.15,
        "options": [
            "A. Tất cả 65535 cổng.",
            "B. Chỉ quét cổng 80 và 443.",
            "C. 100 cổng phổ biến nhất.",
            "D. 1.000 cổng phổ biến nhất."
        ],
        "correctIndex": 3,
        "explanation": "Mặc định Nmap sẽ quét 1.000 cổng TCP phổ biến nhất được định nghĩa trong file nmap-services."
    },
    {
        "id": 22,
        "question": "Câu 22: Trạng thái 'Filtered' (Bị lọc) trong kết quả quét Nmap mang ý nghĩa gì?",
        "points": 0.15,
        "options": [
            "A. Cổng đó chắc chắn đang mở và có dịch vụ.",
            "B. Nmap không thể xác định cổng mở hay đóng vì có thiết bị bảo mật (như Firewall) chặn các gói tin thăm dò.",
            "C. Cổng đó đã bị máy chủ mục tiêu vô hiệu hóa phần cứng.",
            "D. Dịch vụ trên cổng đang bị lỗi."
        ],
        "correctIndex": 1,
        "explanation": "Filtered nghĩa là gói tin của Nmap đã bị Drop ở đâu đó giữa đường (thường do Tường lửa) và không nhận được bất kỳ phản hồi nào."
    },
    {
        "id": 23,
        "question": "Câu 23: Lệnh Nmap nào sau đây được dùng để thực hiện quét UDP?",
        "points": 0.15,
        "options": [
            "A. -sU",
            "B. -sX",
            "C. -sV",
            "D. -sA"
        ],
        "correctIndex": 0,
        "explanation": "-sU chỉ định Nmap thực hiện rà quét các dịch vụ chạy trên giao thức UDP (như DNS, DHCP, SNMP)."
    },
    {
        "id": 24,
        "question": "Câu 24: Kỹ thuật Banner Grabbing (như việc sử dụng tùy chọn -sV của Nmap) nhằm mục đích gì?",
        "points": 0.15,
        "options": [
            "A. Thay đổi địa chỉ MAC của Nmap.",
            "B. Chụp lại giao diện màn hình của mục tiêu.",
            "C. Xác định chính xác phiên bản của ứng dụng và dịch vụ đang chạy trên một cổng mở.",
            "D. Xóa log hệ thống."
        ],
        "correctIndex": 2,
        "explanation": "-sV (Version detection) tương tác với dịch vụ để bắt lấy thông điệp chào mừng (Banner), qua đó biết được phần mềm và phiên bản cụ thể."
    },
    {
        "id": 25,
        "question": "Câu 25: Sniffing mạng là hành động gì?",
        "points": 0.15,
        "options": [
            "A. Sửa đổi mã nguồn trang web từ xa.",
            "B. Khởi động lại hệ điều hành của máy chủ.",
            "C. Bắt giữ, giám sát và phân tích các gói tin dữ liệu truyền qua hạ tầng mạng.",
            "D. Xóa các tệp tin log của Router."
        ],
        "correctIndex": 2,
        "explanation": "Sniffing là kỹ thuật 'nghe lén', thu thập các gói tin đang lưu chuyển trên mạng."
    },
    {
        "id": 26,
        "question": "Câu 26: Card mạng (NIC) phải được thiết lập ở chế độ nào để có thể bắt được các gói tin không gửi trực tiếp đến địa chỉ MAC của nó?",
        "points": 0.15,
        "options": [
            "A. Broadcast Mode.",
            "B. Promiscuous Mode.",
            "C. Secure Mode.",
            "D. Isolation Mode."
        ],
        "correctIndex": 1,
        "explanation": "Promiscuous Mode vô hiệu hóa bộ lọc phần cứng của Card mạng, ép nó nhận và chuyển mọi gói tin bắt được trên đường truyền lên hệ điều hành."
    },
    {
        "id": 27,
        "question": "Câu 27: Công cụ phần mềm nào sau đây là trình phân tích giao thức mạng (Packet Sniffer) phổ biến nhất?",
        "points": 0.15,
        "options": [
            "A. Wireshark",
            "B. John the Ripper",
            "C. Metasploit",
            "D. Hashcat"
        ],
        "correctIndex": 0,
        "explanation": "Wireshark là công cụ mã nguồn mở kinh điển nhất được sử dụng rộng rãi để bắt gói tin và phân tích mạng."
    },
    {
        "id": 28,
        "question": "Câu 28: Kỹ thuật 'ARP Poisoning' (Đầu độc ARP) có hậu quả cốt lõi là gì?",
        "points": 0.15,
        "options": [
            "A. Gây cháy Router.",
            "B. Thay đổi bảng định tuyến BGP.",
            "C. Làm sai lệch bộ nhớ cache ARP của máy mục tiêu, khiến dữ liệu bị gửi nhầm sang máy của kẻ tấn công (Tấn công MITM).",
            "D. Gây mất điện cục bộ."
        ],
        "correctIndex": 2,
        "explanation": "Đầu độc ARP làm mục tiêu tưởng địa chỉ MAC của hacker là MAC của Router, dẫn đến việc hacker nghe lén được toàn bộ luồng dữ liệu (Man-in-the-Middle)."
    },
    {
        "id": 29,
        "question": "Câu 29: Kỹ thuật MAC Flooding có tác dụng gì đối với một Network Switch?",
        "points": 0.15,
        "options": [
            "A. Làm Switch tăng gấp đôi tốc độ truyền tải.",
            "B. Tràn bảng địa chỉ CAM của Switch, khiến Switch mất khả năng định tuyến cổng và hoạt động ngu ngốc như một Hub.",
            "C. Reset mật khẩu quản trị của Switch.",
            "D. Cập nhật Firmware cho Switch."
        ],
        "correctIndex": 1,
        "explanation": "Khi bảng CAM đầy, Switch không biết cổng nào gắn với địa chỉ MAC nào, nó sẽ broadcast gói tin ra toàn bộ các cổng, tạo điều kiện cho hacker nghe lén."
    },
    {
        "id": 30,
        "question": "Câu 30: Một cách phòng thủ cơ bản nhất để chống lại việc bị Sniffing lấy cắp thông tin nhạy cảm là gì?",
        "points": 0.15,
        "options": [
            "A. Sử dụng địa chỉ IP tĩnh.",
            "B. Dùng dây cáp mạng màu đỏ.",
            "C. Sử dụng các giao thức mã hóa đường truyền mạnh mẽ (như HTTPS, SSH, VPN).",
            "D. Tắt máy tính sau khi dùng."
        ],
        "correctIndex": 2,
        "explanation": "Nghe lén không nguy hiểm nếu dữ liệu đã bị mã hóa mạnh. Hacker bắt được gói tin nhưng chỉ thấy những chuỗi ký tự vô nghĩa."
    },
    {
        "id": 31,
        "question": "Câu 31: Kỹ thuật Overlapping Fragments (Phân mảnh IP trùng lấp) được hacker sử dụng nhằm mục đích gì khi đối đầu với Tường lửa?",
        "points": 0.2,
        "options": [
            "A. Giảm kích thước file để lách qua phần mềm diệt virus.",
            "B. Đánh lừa bộ máy kiểm tra gói tin bằng cách gửi các mảnh (fragments) có thông tin độ lệch chồng chéo lên nhau, khiến tường lửa bỏ qua chuỗi mã độc.",
            "C. Tạo ra nhiều bản sao của gói tin để làm tăng băng thông kết nối.",
            "D. Để giải mã các gói tin HTTPS mà không cần khóa."
        ],
        "correctIndex": 1,
        "explanation": "Nếu tường lửa lắp ráp các mảnh IP sai cách so với máy chủ đích, hacker có thể che giấu mã độc ở mảnh thứ hai ghi đè lên mảnh thứ nhất."
    },
    {
        "id": 32,
        "question": "Câu 32: Trong kiến trúc Stateful Firewall, tại sao kỹ thuật quét cổng ACK Scan (cờ ACK được bật) thường có thể lọt qua mà không bị ghi log ngăn chặn?",
        "points": 0.2,
        "options": [
            "A. Vì cờ ACK là cờ mặc định của hệ điều hành Linux.",
            "B. Tường lửa lầm tưởng đó là một phần của luồng dữ liệu thuộc về một kết nối đã được thiết lập hợp lệ từ trước.",
            "C. Vì ACK scan không có gói tin trả về.",
            "D. Vì Tường lửa không kiểm tra được tầng TCP."
        ],
        "correctIndex": 1,
        "explanation": "Cờ ACK xuất hiện trong các gói tin giao tiếp sau quá trình bắt tay 3 bước. Stateful firewall có thể cho qua nếu nó được cấu hình kiểm tra lỏng lẻo đối với các gói ACK phản hồi."
    },
    {
        "id": 33,
        "question": "Câu 33: Cấu hình Tường lửa dựa trên 'Source Routing' bị xem là một điểm yếu bảo mật bởi vì:",
        "points": 0.2,
        "options": [
            "A. Nó yêu cầu tường lửa phải xử lý quá nhiều gói tin cùng lúc.",
            "B. Người gửi (có thể là kẻ tấn công) có quyền tự quyết định tuyến đường đi qua mạng, bỏ qua các chốt kiểm soát an ninh.",
            "C. Nó tiêu tốn quá nhiều RAM của thiết bị Tường lửa.",
            "D. Các gói tin Source Routing luôn bị rớt mạng."
        ],
        "correctIndex": 1,
        "explanation": "Source Routing cho phép máy gửi chỉ định đường dẫn qua các router, có thể bị lợi dụng để điều hướng gói tin vào/ra khỏi mạng mà không đi qua các bộ lọc bảo vệ."
    },
    {
        "id": 34,
        "question": "Câu 34: Hiện tượng 'Alert Fatigue' (Bão hòa cảnh báo) trong quản trị IDS xảy ra do nguyên nhân nào?",
        "points": 0.2,
        "options": [
            "A. Do số lượng cảnh báo giả (False Positive) quá lớn khiến người quản trị mệt mỏi và bỏ lỡ các cuộc tấn công thật.",
            "B. Do phần mềm IDS bị treo và không gửi báo cáo.",
            "C. Do số lượng cảnh báo âm tính giả (False Negative) quá lớn.",
            "D. Do kết nối mạng LAN bị đứt."
        ],
        "correctIndex": 0,
        "explanation": "Alert Fatigue xảy ra khi hệ thống bị cấu hình sai hoặc không tối ưu hóa, sinh ra hàng ngàn cảnh báo vô hại mỗi ngày."
    },
    {
        "id": 35,
        "question": "Câu 35: Kẻ tấn công có thể sử dụng kỹ thuật Obfuscation (Làm xáo trộn mã) nhằm mục đích gì đối mặt với IDS?",
        "points": 0.2,
        "options": [
            "A. Gây ngập lụt hệ thống mạng.",
            "B. Thay đổi hình dạng và cấu trúc chuỗi Payload độc hại để đánh lừa cơ chế phát hiện dựa trên Chữ ký (Signature-based) của IDS.",
            "C. Thay đổi địa chỉ IP của công ty.",
            "D. Làm tăng tốc độ kết nối VPN."
        ],
        "correctIndex": 1,
        "explanation": "Bằng cách encode, mã hóa URL, sử dụng Unicode, hacker có thể giấu chuỗi tấn công (ví dụ SQL Injection) khỏi từ điển chữ ký của IDS."
    },
    {
        "id": 36,
        "question": "Câu 36: Việc lưu lượng mạng được mã hóa toàn bộ bằng TLS/HTTPS mang lại thách thức gì đối với NIDS (Network IDS)?",
        "points": 0.2,
        "options": [
            "A. NIDS sẽ gửi cảnh báo với mọi gói tin TLS.",
            "B. NIDS không thể đọc và phân tích Payload bên trong để phát hiện mã độc nếu không có giải pháp giải mã trung gian (SSL Inspection).",
            "C. NIDS sẽ tự động sập nguồn.",
            "D. Không có thách thức nào, NIDS hoạt động độc lập với giao thức bảo mật."
        ],
        "correctIndex": 1,
        "explanation": "Dữ liệu mã hóa khiến Payload bị ẩn đi. IDS chỉ thấy gói tin TCP giao tiếp mà không thể đối chiếu chữ ký mã độc bên trong."
    },
    {
        "id": 37,
        "question": "Câu 37: Trong Suricata, khái niệm 'Flow' (Luồng dữ liệu) được quản lý như thế nào khác với kiểm tra gói tin đơn lẻ?",
        "points": 0.2,
        "options": [
            "A. Luồng được tự động bỏ qua nếu đã mã hóa.",
            "B. Suricata sử dụng biến trạng thái luồng để ghi nhớ thông tin giữa các gói tin thuộc cùng một kết nối, cho phép phát hiện các cuộc tấn công tinh vi trải dài qua nhiều gói.",
            "C. Khái niệm luồng chỉ dành cho kết nối UDP.",
            "D. Luồng mạng làm vô hiệu hóa các quy tắc của Snort."
        ],
        "correctIndex": 1,
        "explanation": "Flow-tracking giúp Suricata có bối cảnh toàn cục (Stateful), phát hiện kẻ tấn công chia nhỏ shellcode qua nhiều gói tin TCP."
    },
    {
        "id": 38,
        "question": "Câu 38: Ý nghĩa của tùy chọn `content:\"/admin/login.php\"; http_uri;` trong một Rule Suricata là gì?",
        "points": 0.2,
        "options": [
            "A. Tìm chuỗi văn bản trong thân của email.",
            "B. Tìm chuỗi \"/admin/login.php\" ở bất kỳ đâu trong toàn bộ gói tin.",
            "C. Yêu cầu bộ phân tích lớp ứng dụng HTTP của Suricata chỉ tìm chuỗi đó trong phần URI của yêu cầu web, giúp tăng tốc độ xử lý và giảm cảnh báo giả.",
            "D. Lọc toàn bộ kết nối đến cổng 21."
        ],
        "correctIndex": 2,
        "explanation": "Sử dụng các keyword giao thức cụ thể (http_uri) giúp Suricata khoanh vùng chính xác bộ đệm cần kiểm tra, tối ưu hóa hiệu suất mạnh mẽ."
    },
    {
        "id": 39,
        "question": "Câu 39: Tính năng File Extraction của Suricata cho phép người quản trị mạng làm gì?",
        "points": 0.2,
        "options": [
            "A. Tự động xóa các file trên máy chủ web.",
            "B. Phân tích gói tin giao thức HTTP/FTP/SMB, tự động trích xuất các tập tin độc hại gửi qua mạng và lưu xuống ổ cứng để phân tích mã độc.",
            "C. Trích xuất mật khẩu từ file zip đã mã hóa.",
            "D. Phục hồi ổ cứng bị xóa."
        ],
        "correctIndex": 1,
        "explanation": "File Extraction là tính năng nâng cao giúp Suricata hoạt động như một hệ thống thu thập chứng cứ số, kéo các file exe, pdf khả nghi ra khỏi luồng mạng."
    },
    {
        "id": 40,
        "question": "Câu 40: Kỹ thuật quét cổng 'Xmas Scan' (-sX) của Nmap thao tác các cờ TCP nào để lách Tường lửa?",
        "points": 0.2,
        "options": [
            "A. Bật cờ SYN, ACK, và RST.",
            "B. Tắt tất cả các cờ.",
            "C. Bật đồng thời các cờ FIN, PSH và URG, làm gói tin sáng lên 'như cây thông Noel'.",
            "D. Chỉ bật cờ FIN."
        ],
        "correctIndex": 2,
        "explanation": "Xmas Scan là kỹ thuật dị thường nhắm vào hệ điều hành không tuân thủ hoàn toàn RFC TCP, bằng cách gửi một gói mang cờ FIN, PSH, URG để dò xét phản hồi."
    },
    {
        "id": 41,
        "question": "Câu 41: Việc Nmap sử dụng tùy chọn `-D decoy1,decoy2,ME` có tác dụng cụ thể nào trong việc che giấu danh tính?",
        "points": 0.2,
        "options": [
            "A. Thay thế hoàn toàn địa chỉ IP thực của Nmap bằng địa chỉ của Decoy.",
            "B. Tạo ra hàng loạt luồng quét giả mạo từ các địa chỉ IP 'chim mồi' xen kẽ với luồng quét thật, khiến Admin mạng khó phân biệt đâu là nguồn tấn công chính.",
            "C. Thay đổi địa chỉ MAC của các thiết bị mạng.",
            "D. Mã hóa luồng dữ liệu quét."
        ],
        "correctIndex": 1,
        "explanation": "Decoy scan không ẩn IP thật mà trộn nó với các IP của những máy hợp pháp khác, làm nhiễu log cảnh báo của IDS."
    },
    {
        "id": 42,
        "question": "Câu 42: Nmap Timing Template `-T4` khác với `-T2` ở điểm nào, và điều đó ảnh hưởng gì đến IDS?",
        "points": 0.2,
        "options": [
            "A. -T4 chạy chậm hơn nhiều, giúp lách qua IDS dễ dàng hơn.",
            "B. -T4 chạy nhanh hơn, nhưng tạo ra lượng truy cập ồ ạt dễ bị IDS phát hiện và chặn lại; -T2 quét lén lút và chậm rãi hơn.",
            "C. Không có sự khác biệt về tốc độ, chỉ khác nhau ở độ chính xác.",
            "D. -T4 chỉ dùng để quét kết nối mạng IPv6."
        ],
        "correctIndex": 1,
        "explanation": "T4 (Aggressive) tối ưu tốc độ nhanh, phù hợp quét nội bộ. T2 (Polite) cố tình kéo dãn thời gian giữa các gói tin để IDS không kích hoạt ngưỡng cảnh báo tốc độ quét."
    },
    {
        "id": 43,
        "question": "Câu 43: Tại sao trong một mạng Switch (chuyển mạch), Passive Sniffing (nghe lén thụ động) thông thường lại không hiệu quả?",
        "points": 0.2,
        "options": [
            "A. Vì Switch mã hóa tất cả dữ liệu.",
            "B. Vì Switch chỉ gửi các gói tin đến đúng cổng của thiết bị có địa chỉ MAC đích tương ứng, chứ không phát tán (broadcast) ra toàn mạng như Hub.",
            "C. Vì phần mềm Sniffer không tương thích với Switch.",
            "D. Vì tốc độ của Switch quá nhanh so với máy tính phân tích."
        ],
        "correctIndex": 1,
        "explanation": "Switch chia nhỏ collision domain, chỉ máy đích nhận được gói tin. Do đó phải dùng Active Sniffing (như ARP Spoofing) để ép Switch gửi gói tin qua máy của Hacker."
    },
    {
        "id": 44,
        "question": "Câu 44: DNS Spoofing (Đầu độc DNS) trong mạng cục bộ là sự kết hợp của hành động nào với Sniffing?",
        "points": 0.2,
        "options": [
            "A. Đánh cắp ổ cứng máy chủ DNS.",
            "B. Nghe lén các truy vấn DNS, sau đó giả mạo gói tin phản hồi DNS trước khi máy chủ thực kịp trả lời, điều hướng nạn nhân sang trang web giả mạo.",
            "C. Gửi quá nhiều gói tin ping đến máy chủ DNS.",
            "D. Tạo một tài khoản admin giả trên Windows."
        ],
        "correctIndex": 1,
        "explanation": "Kẻ tấn công chạy đua (Race condition) với máy chủ DNS hợp lệ, tận dụng tốc độ nội bộ nhanh hơn để gửi bản ghi DNS độc hại về máy người dùng."
    },
    {
        "id": 45,
        "question": "Câu 45: Phương pháp cấu hình 'Port Security' trên Switch giúp ngăn chặn tấn công MAC Flooding hiệu quả vì:",
        "points": 0.2,
        "options": [
            "A. Nó vô hiệu hóa hoàn toàn cổng đó.",
            "B. Nó giới hạn số lượng địa chỉ MAC cụ thể được phép học trên một cổng; tự động đóng cổng nếu phát hiện máy tấn công liên tục thay đổi địa chỉ MAC giả.",
            "C. Nó cập nhật phần mềm diệt virus cho Switch.",
            "D. Nó cấm sử dụng giao thức ARP trên mạng."
        ],
        "correctIndex": 1,
        "explanation": "Port Security (như sticky MAC, limit=1) dập tắt công cụ macof ngay lập tức, đưa cổng vào trạng thái err-disabled."
    },
    {
        "id": 46,
        "question": "Câu 46 [Vận Dụng - Tường lửa]: Bạn là quản trị viên. Đội SOC báo cáo có một loại botnet mới sử dụng giao thức HTTP hợp lệ trên cổng 80 nhưng chuỗi dữ liệu trong body lại mang tính chất điều khiển mã độc. Tường lửa lọc gói tin (Packet Filtering Firewall) hiện tại không thể chặn. Giải pháp tối ưu và khả thi nhất để triển khai ngay lập tức là gì?",
        "points": 0.5,
        "options": [
            "A. Chặn hoàn toàn lưu lượng trên cổng 80 của toàn bộ công ty.",
            "B. Triển khai và cấu hình một WAF (Web Application Firewall) hoặc nâng cấp lên NGFW (Tường lửa thế hệ mới) để kiểm tra sâu vào tầng ứng dụng (Deep Packet Inspection).",
            "C. Đổi IP mạng công ty sang dải IP mới.",
            "D. Sử dụng IPSec để mã hóa kết nối nội bộ."
        ],
        "correctIndex": 1,
        "explanation": "Packet Filtering Firewall chỉ nhìn thấy Port 80 hợp lệ, trong khi đòn tấn công nằm ở tầng 7. Cần NGFW hoặc WAF sử dụng DPI để đọc phần thân HTTP và chặn Botnet."
    },
    {
        "id": 47,
        "question": "Câu 47 [Vận Dụng - IDS]: Bạn mới lắp đặt NIDS tại cổng Mirror của Core Switch, nhưng hệ thống lại không báo cáo bất kỳ rủi ro nào đối với giao dịch nội bộ nhân viên truy cập máy chủ Kế toán (đã cấu hình qua HTTPS). Đội kiểm thử xác nhận có dùng SQLi thành công. IDS bị lỗi do đâu?",
        "points": 0.5,
        "options": [
            "A. IDS không bắt được địa chỉ MAC của Kế toán.",
            "B. Switch bị lỗi cổng Mirror.",
            "C. NIDS không có khả năng đọc chuỗi dữ liệu mã độc (SQLi) vì toàn bộ giao dịch đang được mã hóa đầu cuối bằng HTTPS. Cần kết hợp giải pháp Offloading SSL/TLS trước khi đẩy vào NIDS.",
            "D. Hacker đã dùng công cụ ẩn danh TOR."
        ],
        "correctIndex": 2,
        "explanation": "Mã hóa TLS làm mù NIDS. Dữ liệu phải được giải mã tại phần biên (SSL Decryption/Offloading) thì IDS mới soi được các chuỗi SQLi ở bên trong gói tin gốc."
    },
    {
        "id": 48,
        "question": "Câu 48 [Vận Dụng - Suricata]: Bạn muốn viết một Rule Suricata để cảnh báo ngay lập tức nếu có ai đó nỗ lực tìm mật khẩu quản trị qua giao thức SSH (cổng 22) từ bên ngoài Internet vào máy chủ nội bộ. Rule nào sau đây có cú pháp CHUẨN XÁC NHẤT?",
        "points": 0.5,
        "options": [
            "A. alert tcp $HOME_NET 22 -> $EXTERNAL_NET any (msg:\"SSH Brute Force\"; sid:10001;)",
            "B. drop udp $EXTERNAL_NET any -> $HOME_NET 22 (msg:\"SSH Alert\"; sid:10002;)",
            "C. alert tcp $EXTERNAL_NET any -> $HOME_NET 22 (msg:\"Possible SSH Brute Force attempt\"; flow:to_server,established; sid:1000001; rev:1;)",
            "D. block ssh any any -> any 22"
        ],
        "correctIndex": 2,
        "explanation": "Giao thức SSH dùng TCP, chiều kết nối là từ $EXTERNAL_NET vào cổng 22 của $HOME_NET. Phải có ID định danh (sid) và cảnh báo hành động (alert)."
    },
    {
        "id": 49,
        "question": "Câu 49 [Vận Dụng - Scanning]: Trong quá trình đánh giá bảo mật (Pen-test), bạn được phép quét mạng công ty XYZ. Doanh nghiệp này cấu hình IPS chặn tự động IP nguồn nếu phát hiện hơn 50 gói SYN trong 1 giây. Lệnh Nmap nào sau đây giúp bạn vẽ bản đồ hệ thống An Toàn nhất để không bị chặn?",
        "points": 0.5,
        "options": [
            "A. nmap -sS -A -T4 192.168.1.0/24",
            "B. nmap -sT --scan-delay 100ms -p 80,443,22 192.168.1.0/24",
            "C. nmap -sU -T5 192.168.1.0/24",
            "D. nmap -sn -PE -T4 192.168.1.0/24"
        ],
        "correctIndex": 1,
        "explanation": "Tham số --scan-delay ép Nmap chờ khoảng 100ms giữa các gói tin. Nó làm chậm quá trình quét (khoảng 10 gói/giây), nằm dưới ngưỡng 50 gói/giây của IPS, tránh bị Block."
    },
    {
        "id": 50,
        "question": "Câu 50 [Vận Dụng - Sniffing]: Khi kiểm tra Wireshark tại mạng LAN công ty, bạn nhận thấy có hàng nghìn gói tin phản hồi ARP vô cớ cho biết địa chỉ IP của Gateway (192.168.1.1) đang nằm tại địa chỉ MAC của một thiết bị không rõ nguồn gốc (AA:BB:CC:DD:EE:FF). Tình huống này khẳng định điều gì và giải pháp ngăn chặn là gì?",
        "points": 0.5,
        "options": [
            "A. Gateway bị hỏng phần cứng; cần khởi động lại Router.",
            "B. Mạng đang bị tấn công Broadcast Storm; cần cắm lại các dây cáp mạng.",
            "C. Hệ thống mạng đang hứng chịu cuộc tấn công ARP Spoofing (MITM). Giải pháp là triển khai công nghệ Dynamic ARP Inspection (DAI) trên Switch để kiểm tra chéo các gói ARP hợp lệ.",
            "D. Do lỗi tràn IP trên DHCP Server; cần cấp phát lại dải IP mới."
        ],
        "correctIndex": 2,
        "explanation": "Sự hiện diện của hàng loạt gói ARP reply giả mạo địa chỉ Router chính là dấu hiệu điển hình của ARP Poisoning. Tính năng DAI của Switch mạng sẽ đối chiếu với DHCP Snooping Binding Table để chặn và rớt gói ARP độc hại này."
    }
];


/*
======================================================================
HƯỚNG DẪN CHẤM ĐIỂM VÀ ĐÁNH GIÁ NĂNG LỰC
======================================================================
Tổng số câu hỏi: 50 câu. 
Tổng điểm tối đa: 10 Điểm.
- Mức độ Nhận biết (30 câu): 0.15 điểm / câu
- Mức độ Thông hiểu (15 câu): 0.20 điểm / câu
- Mức độ Vận dụng (5 câu): 0.50 điểm / câu

Gợi ý đánh giá năng lực của học viên dựa trên Điểm Đạt Được (X):
- X < 5.0 điểm: CẦN CỐ GẮNG (Chưa đạt) - Bạn cần học lại lý thuyết cốt lõi về hệ thống mạng và mô hình OSI trước khi thực hành công cụ.
- 5.0 <= X < 6.5 điểm: TRUNG BÌNH KHÁ - Nắm được khái niệm nhưng chưa hiểu sâu về cơ chế chống vượt tường lửa/IDS.
- 6.5 <= X < 8.0 điểm: KHÁ - Nắm chắc kiến thức cấu hình và cơ chế bảo mật của Nmap, Wireshark, Suricata. 
- 8.0 <= X < 9.5 điểm: GIỎI - Nắm vững bản chất kỹ thuật, phân tích log linh hoạt và cách lách rào phòng thủ.
- 9.5 <= X <= 10 điểm: XUẤT SẮC - Sở hữu tư duy nhạy bén của một chuyên gia đánh giá An Ninh Mạng (Pen-tester / SOC Analyst) thực thụ!
*/
