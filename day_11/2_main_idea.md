Dưới đây là bản tóm tắt nội dung bài giảng **NGÀY 11: Thâm nhập hệ thống và Bẻ khóa mật khẩu** theo đúng các yêu cầu của bạn:

1. 🎛️ **HÀM BĂM (HASH):** Hệ thống bảo vệ mật khẩu bằng cách chuyển văn bản thô thành một chuỗi ký tự không thể đảo ngược thông qua "máy xay một chiều" hàm băm.
2. 📖 **TẤN CÔNG TỪ ĐIỂN (DICTIONARY ATTACK):** Hacker dùng danh sách từ điển chứa hàng triệu mật khẩu thông dụng có sẵn để băm và đối chiếu nhanh với chuỗi băm mục tiêu.
3. 🔢 **TẤN CÔNG VÉT CẠN (BRUTE-FORCE ATTACK):** Phương pháp thử mọi tổ hợp ký tự có thể xảy ra, đảm bảo thành công 100% nhưng cực kỳ tiêu tốn thời gian với mật khẩu dài.
4. 🧂 **THÊM MUỐI (SALTING):** Kỹ thuật chèn thêm chuỗi ký tự ngẫu nhiên vào mật khẩu trước khi băm nhằm đảm bảo hai người chung mật khẩu vẫn có chuỗi băm hoàn toàn khác nhau.
5. 🐢 **HÀM BĂM CHẬM (SLOW HASHES):** Người phòng thủ sử dụng các thuật toán như Bcrypt, Scrypt hay Argon2 để bắt máy tính của hacker tốn nhiều tài nguyên xử lý hơn, làm chậm tốc độ bẻ khóa.
6. 🔌 **BẺ KHÓA OFFLINE (OFFLINE CRACKING):** Kỹ thuật dùng các công cụ như John the Ripper hoặc Hashcat chỉ hoạt động khi hacker đã lấy được tệp chứa chuỗi băm về máy cục bộ, tránh bị hệ thống phát hiện hay khóa tài khoản.
7. 📏 **ĐỘ DÀI TỐI THƯỢNG (PASSPHRASE):** Để chống lại sức mạnh xử lý của card đồ họa (GPU) hiện đại, độ dài của mật khẩu (cụm mật khẩu) quan trọng và an toàn hơn rất nhiều so với sự phức tạp ký tự.

✨ **Câu chốt hạ:** *"Mật khẩu ngắn là lời mời gọi kẻ thù, độ dài mới là chiếc khiên vững vàng nhất của phòng thủ!"*