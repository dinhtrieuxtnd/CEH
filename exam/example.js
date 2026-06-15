const quizData = [
        {
            // Câu thuộc Mức Nhận Biết (0.15 điểm)
            id: 1,
            question: "Câu 1: Ba thành tố cốt lõi tạo nên cấu trúc An toàn thông tin (CIA Triad) bao gồm những gì?",
            points: 0.15,
            options: [
                "A. Confidentiality, Integrity, Accountability",
                "B. Confidentiality, Integrity, Availability",
                "C. Cryptography, Identification, Authorization",
                "D. Compliance, Inspection, Availability"
            ],
            correctIndex: 1, // B là index 1 (A=0, B=1, C=2, D=3)
            explanation: "CIA đại diện cho Confidentiality (Bảo mật), Integrity (Toàn vẹn), Availability (Sẵn sàng)."
        },
        {
            id: 2,
            question: "Câu 2: Quy trình Hacking một hệ thống (System Hacking) theo chuẩn CEH gồm 5 giai đoạn theo thứ tự nào sau đây?",
            points: 0.15,
            options: [
                "A. Reconnaissance → Scanning → Gaining Access → Maintaining Access → Clearing Logs",
                "B. Scanning → Enumeration → Gaining Access → Privilege Escalation → Covering Tracks",
                "C. Reconnaissance → Gaining Access → Privilege Escalation → Malware Injection → Clearing Logs",
                "D. Footprinting → Vulnerability Analysis → Exploitation → Maintaining Access → Reporting"
            ],
            correctIndex: 0,
            explanation: "Quy trình chuẩn CEH: Trinh sát (Reconnaissance) → Quét mạng (Scanning) → Chiếm quyền (Gaining Access) → Duy trì quyền (Maintaining Access) → Xóa dấu vết (Clearing Logs)."
        },
        {
            // Câu thuộc Mức Thông Hiểu (0.25 điểm)
            id: 31,
            question: "Câu 31: Sự khác biệt cốt lõi giữa Phishing (Tấn công giả mạo) thông thường và Spear Phishing là gì?",
            points: 0.25,
            options: [
                "A. Phishing thông thường dùng mã độc mã hóa, còn Spear Phishing chỉ dùng email văn bản thuần túy.",
                "B. Phishing thông thường nhắm vào hệ điều hành Windows, còn Spear Phishing nhắm vào hệ điều hành di động.",
                "C. Phishing thông thường gửi hàng loạt ngẫu nhiên không chọn lọc; Spear Phishing được cá nhân hóa sâu sắc, nhắm mục tiêu vào một cá nhân/tổ chức cụ thể.",
                "D. Phishing thông thường do hacker mũ đen thực hiện, còn Spear Phishing do hacker mũ trắng thực hiện."
            ],
            correctIndex: 2,
            explanation: "Spear Phishing là đòn tấn công giả mạo có đích ngắm cụ thể, được cá nhân hóa sâu sắc thay vì rải rác ngẫu nhiên."
        },
        {
            id: 32,
            question: "Câu 32: Tại sao kỹ thuật quét cổng 'TCP FIN Scan' lại thường không hoạt động hiệu quả khi nhắm vào các máy chủ Windows?",
            points: 0.25,
            options: [
                "A. Vì Windows sử dụng hệ thống tường lửa cứng mặc định chặn tất cả các gói tin có cờ lạ.",
                "B. Vì Windows không tuân thủ hoàn toàn chuẩn RFC 793; nó sẽ phản hồi bằng gói tin RST cho bất kỳ gói tin lạ nào gửi đến, khiến Nmap hiểu nhầm cổng luôn đóng.",
                "C. Vì Windows tự động đổi địa chỉ IP khi nhận thấy có lưu lượng quét cổng.",
                "D. Vì các gói tin FIN chỉ có thể truyền trên hạ tầng mạng Linux."
            ],
            correctIndex: 1,
            explanation: "Windows gửi gói RST cho mọi gói tin lạ (FIN, Xmas, Null) bất kể cổng mở hay đóng, làm sai lệch logic quét của Nmap."
        },
        {
            // Câu thuộc Mức Vận Dụng (0.35 điểm)
            id: 46,
            question: "Câu 46: Bạn sử dụng lệnh Nmap gửi gói FIN đến máy chủ Linux. Bạn dùng Wireshark giám sát và nhận thấy KHÔNG CÓ bất kỳ gói tin phản hồi nào quay ngược lại. Trạng thái cổng là gì?",
            points: 0.35,
            options: [
                "A. Cổng chắc chắn đang bị ĐÓNG (Closed).",
                "B. Cổng đang MỞ (Open) hoặc đang bị chặn bởi một thiết bị lọc gói tin (Filtered).",
                "C. Máy chủ mục tiêu đã bị sập hoàn toàn do đòn tấn công FIN Flood.",
                "D. Hệ điều hành Linux của mục tiêu đã tự động chuyển đổi cổng."
            ],
            correctIndex: 1,
            explanation: "Theo chuẩn RFC 793, cổng Linux đang mở sẽ im lặng (Drop) trước gói FIN, còn cổng đóng sẽ trả về RST. Do đó im lặng nghĩa là cổng MỞ (hoặc bị Firewall chặn)."
        }
    ];