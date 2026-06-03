Dưới đây là thiết kế **Checklist hành động thực tế trong vòng 24 giờ** được xây dựng dựa trên các kiến thức cốt lõi của Ngày 1 (Hacker Mũ Trắng, Tam giác bảo mật CIA, và 5 Giai đoạn Hacking theo chuẩn CEH v11).

Bảng được thiết kế trực quan, căn chỉnh gọn gàng, sẵn sàng để in ra giấy A4 cho cá nhân tự học hoặc phân công thảo luận theo đội nhóm (Teamwork).

---

### 📋 CHECKLIST HÀNH ĐỘNG 24H: BIẾN TƯ DUY NGÀY 1 THÀNH THỰC TẾ

*Mục tiêu: Kích hoạt ngay tư duy An ninh thông tin, thiết lập ranh giới đạo đức và tự đánh giá hệ thống cá nhân/doanh nghiệp.*

| STT | Trạng thái | Việc cần làm | Cách thức thực hiện chi tiết | Thời gian | Kết quả mong đợi (Milestones) | Ghi chú Nhóm (Nếu có) |
| --- | --- | --- | --- | --- | --- | --- |
| **1** | ☐ | **Cam kết Quy tắc Đạo đức (Ethical Bound)** | Đọc và ghi nhớ ranh giới pháp lý. Tự viết ra giấy hoặc ký biên bản nhóm: *Tuyên bố tuyệt đối không sử dụng công cụ rà quét vào hệ thống thật khi chưa có sự cho phép bằng văn bản*. | 5 phút | Thiết lập bộ lọc đạo đức và hiểu rõ trách nhiệm pháp lý cá nhân. | *Cả nhóm cùng ký tên cam kết chung trước khi làm lab.* |
| **2** | ☐ | **Kiểm tra Độc lập Tính Bảo mật [C]** | Rà soát toàn bộ tài khoản cá nhân/công việc. Đảm bảo các mật khẩu quan trọng không dùng chung một chuỗi trùng lặp. Kiểm tra xem email của mình từng bị lộ lọt trong vụ hack nào chưa qua trang web uy tín `haveibeenpwned.com`. | 15 phút | Xác định được các lỗ hổng rò rỉ thông tin cá nhân và đổi mật khẩu yếu ngay lập tức. | *Mỗi thành viên tự chạy quét email cá nhân và báo cáo số vụ lộ lọt.* |
| **3** | ☐ | **Đánh giá Tính Toàn vẹn [I]** | Kiểm tra xem máy tính đã bật tính năng hiển thị đuôi tệp tin chưa (nhằm tránh bị lừa mở file `invoice.pdf.exe` giả dạng). Tìm hiểu cách kiểm tra mã băm Hash (MD5/SHA256) của một bộ cài phần mềm vừa tải về từ Internet để đảm bảo tệp không bị chỉnh sửa/chèn mã độc. | 15 phút | Cấu hình thành công hiển thị đuôi tệp; hiểu cách đối chiếu mã băm để xác thực dữ liệu nguyên vẹn. | *Nhóm thực hành kiểm tra mã băm của một file mẫu và đối chiếu kết quả.* |
| **4** | ☐ | **Thiết lập Tính Sẵn sàng [A]** | Rà soát phương án sao lưu dữ liệu (Backup). Kiểm tra xem ổ cứng di động hoặc dịch vụ Cloud (Drive/OneDrive) có đang tự động đồng bộ các file làm việc cốt lõi không. Đặt tình huống: *Nếu máy tính hỏng nguồn ngay bây giờ, mất bao lâu để khôi phục lại công việc trên máy khác?* | 20 phút | Kích hoạt hoặc cập nhật thành công ít nhất 1 bản sao lưu dữ liệu quan trọng nhất. | *Kiểm tra phân quyền thư mục lưu trữ chung của nhóm xem có phương án backup chưa.* |
| **5** | ☐ | **Nhận diện Chiến thuật Trinh sát (Phase 1)** | Đóng vai hacker thực hiện trinh sát bị động (Passive Reconnaissance) chính bản thân hoặc doanh nghiệp của mình. Lên Google tra cứu thông tin công khai về: Email cá nhân, số điện thoại, hoặc các bài đăng mạng xã hội của nhân sự xem có để lộ thông tin nhạy cảm nào không. | 30 phút | Phát hiện và ẩn/xóa bỏ những thông tin quá nhạy cảm có thể bị lợi dụng để tấn công Social Engineering. | *Phân chéo cặp: Thành viên A tìm kiếm thông tin lộ lọt của thành viên B và ngược lại.* |
| **6** | ☐ | **Xây dựng Môi trường Lab An toàn** | Cài đặt phần mềm tạo máy ảo (VirtualBox hoặc VMware Workstation Player). Tải xuống sẵn một file ISO hệ điều hành chạy thử nghiệm (ví dụ: Ubuntu Linux hoặc Windows 10 Evaluation) để chuẩn bị cho việc thực hành rà quét cổng mạng ở những ngày tiếp theo. | 45 phút | Cài đặt xong phần mềm máy ảo cốt nền, tạo môi trường "Sandbox" hoàn toàn cô lập với máy thật. | *Đảm bảo tất cả thành viên trong nhóm thống nhất dùng chung một phiên bản máy ảo.* |

---

### 💡 HƯỚNG DẪN SỬ DỤNG CHO HỌC VIÊN:

* **Nếu học Cá nhân (Self-study):** Hãy in bảng này ra, dán ngay trước bàn học. Cứ sau mỗi hành động hoàn thành, dùng bút mực đỏ tick vào ô vuông **☐**. Hãy cố gắng hoàn tất cả 6 đầu việc này trước khi bước sang bài học của **Ngày 2**.
* **Nếu học theo Nhóm (Teamwork):** Trưởng nhóm sử dụng bảng này để giao việc tại buổi thảo luận đầu tiên. Phân chia rõ cặp thực hiện ở bước số 5 (Trinh sát chéo) để tăng tính khách quan, vì người ngoài luôn dễ tìm thấy điểm sơ hở của bạn hơn là chính bạn tự tìm.

*Chúc bạn và đội nhóm hoàn thành xuất sắc những bước chân thực tế đầu tiên!*