Dưới đây là bộ quiz trắc nghiệm gồm 10 câu hỏi được thiết kế dựa trên nội dung bài giảng **Ngày 30: Mật mã học**. Bộ câu hỏi này phân bổ theo ba mức độ tư duy, giúp kiểm tra sâu sắc hiểu biết của học viên về bản chất và ứng dụng của Mật mã học trong an ninh mạng.

---

### BỘ QUIZ TRẮC NGHIỆM: MẬT MÃ HỌC (NGÀY 30)

#### I. MỨC ĐỘ NHẬN BIẾT (KIỂM TRA GHI NHỚ)

**Câu 1:** Thuật toán nào sau đây được coi là chuẩn mã hóa đối xứng an toàn và phổ biến nhất hiện nay?
A. DES
B. RSA
C. AES
D. MD5

* **Đáp án:** C.
* **Giải thích:** AES (Advanced Encryption Standard) là chuẩn mã hóa đối xứng hiện đại, cực kỳ an toàn và có tốc độ xử lý nhanh. DES đã lỗi thời (dễ bị bẻ khóa), RSA là mã hóa bất đối xứng, MD5 là hàm băm.

**Câu 2:** Đặc điểm cơ bản nhất của Hàm băm (Hash Function) là gì?
A. Có thể đảo ngược để lấy lại văn bản gốc từ chuỗi băm.
B. Chỉ cần thay đổi một ký tự đầu vào thì chuỗi băm đầu ra sẽ thay đổi hoàn toàn.
C. Sử dụng hai khóa khác nhau để mã hóa và giải mã.
D. Độ dài của chuỗi băm thay đổi tùy theo dung lượng dữ liệu đầu vào.

* **Đáp án:** B.
* **Giải thích:** Đây là "hiệu ứng domino" (Avalanche Effect) đặc trưng của hàm băm. Đáp án A, C, D đều sai về bản chất của hàm băm (hàm băm không đảo ngược, không dùng khóa, độ dài luôn cố định).

**Câu 3:** Khóa Công khai (Public Key) trong hệ thống mã hóa bất đối xứng được dùng để làm gì?
A. Giải mã dữ liệu do người gửi gửi đến.
B. Xác thực danh tính của người giữ Khóa Bí mật.
C. Mã hóa dữ liệu trước khi gửi cho người nhận.
D. Lưu trữ mật khẩu của người dùng trên cơ sở dữ liệu.

* **Đáp án:** C.
* **Giải thích:** Public Key dùng để mã hóa dữ liệu. Chỉ có Private Key tương ứng mới có thể giải mã được.

**Câu 4:** Kỹ thuật "Muối" (Salting) trong lưu trữ mật khẩu có tác dụng gì?
A. Tăng tốc độ tính toán hàm băm.
B. Làm cho mật khẩu khó bị dò tìm hơn bằng Rainbow Table.
C. Thay thế hoàn toàn thuật toán băm (ví dụ thay SHA-256).
D. Giúp quản trị viên có thể xem lại mật khẩu gốc của người dùng.

* **Đáp án:** B.
* **Giải thích:** Muối (Salt) là chuỗi ký tự ngẫu nhiên cộng thêm vào mật khẩu trước khi băm, khiến các bảng tra cứu băm sẵn (Rainbow Table) của hacker trở nên vô dụng.

---

#### II. MỨC ĐỘ THÔNG HIỂU (KIỂM TRA BẢN CHẤT)

**Câu 5:** Tại sao mô hình Hybrid Cryptography (kết hợp) lại được sử dụng trong kết nối HTTPS?
A. Vì mã hóa bất đối xứng quá nhanh nhưng không an toàn.
B. Để tận dụng tốc độ của mã hóa đối xứng và tính an toàn của mã hóa bất đối xứng khi truyền khóa.
C. Vì hàm băm không thể bảo vệ dữ liệu khi truyền tải.
D. Vì các trình duyệt không hỗ trợ mã hóa bất đối xứng hoàn toàn.

* **Đáp án:** B.
* **Giải thích:** Mã hóa bất đối xứng chậm nên dùng để truyền khóa phiên (Session Key), sau đó dùng mã hóa đối xứng (AES) để truyền dữ liệu cho nhanh.

**Câu 6:** Sự khác biệt lớn nhất giữa Mã hóa (Encryption) và Mã hóa định dạng (Encoding - như Base64) là gì?
A. Encoding cần khóa (Key) để giải mã, còn mã hóa thì không.
B. Mã hóa được thiết kế để bảo mật dữ liệu, còn Encoding chỉ để chuyển đổi định dạng.
C. Encoding có khả năng băm dữ liệu, còn mã hóa thì không.
D. Mã hóa luôn luôn không thể đảo ngược, còn Encoding thì có.

* **Đáp án:** B.
* **Giải thích:** Encoding (như Base64) chỉ nhằm định dạng lại dữ liệu để truyền dẫn không lỗi, không bảo mật. Mã hóa yêu cầu khóa và nhằm mục đích bảo mật.

**Câu 7:** Trong giao dịch HTTPS, làm thế nào để trình duyệt tin tưởng Public Key nhận được từ Server là của chính chủ chứ không phải của Hacker mạo danh?
A. Kiểm tra qua Hàm băm của website.
B. Dựa vào Certificate (Chứng chỉ số) do một CA (Certificate Authority) uy tín cấp.
C. Hacker không thể mạo danh Public Key vì nó là công khai.
D. Trình duyệt tự so sánh Public Key với dữ liệu lưu trong bộ nhớ cache.

* **Đáp án:** B.
* **Giải thích:** Chứng chỉ số (Digital Certificate) được ký bởi CA là bằng chứng xác thực danh tính của chủ sở hữu Public Key, ngăn chặn tấn công mạo danh (Man-in-the-middle).

---

#### III. MỨC ĐỘ VẬN DỤNG (KIỂM TRA TÌNH HUỐNG)

**Câu 8:** Nếu bạn tải một file cài đặt từ trang web và trang đó cung cấp chuỗi SHA-256. Bạn dùng lệnh `Get-FileHash` kiểm tra file tải về và thấy chuỗi băm **khác biệt hoàn toàn** với chuỗi trang web cung cấp. Bạn nên làm gì?
A. Tiếp tục cài đặt vì file có thể bị lỗi do đường truyền mạng.
B. Dùng mã hóa đối xứng để giải mã file đó.
C. Lập tức xóa file vì dữ liệu có thể đã bị thay đổi (tấn công chèn mã độc).
D. Chạy file trong môi trường ảo hóa để xem nó có thực sự là virus hay không.

* **Đáp án:** C.
* **Giải thích:** Khi chuỗi băm sai lệch, tính toàn vẹn đã mất. Nguyên tắc an toàn là không bao giờ tin tưởng file đó.

**Câu 9:** Một lập trình viên lưu mật khẩu trong CSDL bằng thuật toán băm SHA-256 nhưng **không dùng Salt**. Bạn là chuyên gia bảo mật, hãy đánh giá rủi ro?
A. Hệ thống an toàn tuyệt đối vì SHA-256 chưa bao giờ bị bẻ gãy.
B. Dễ bị tấn công bằng Rainbow Table nếu người dùng đặt mật khẩu yếu.
C. Hệ thống sẽ bị chậm khi người dùng đăng nhập do thiếu Salt.
D. Rủi ro là không đáng kể nếu website có tường lửa mạnh.

* **Đáp án:** B.
* **Giải thích:** Thiếu Salt cho phép hacker sử dụng các bảng Rainbow Table (chứa sẵn các giá trị băm của mật khẩu phổ biến) để dò tìm ngược ra mật khẩu gốc cực nhanh.

**Câu 10:** Bạn đang xây dựng hệ thống web và muốn lưu trữ dữ liệu người dùng an toàn. Chiến lược nào là **tối ưu nhất** để phòng thủ chống lại các đòn bẻ khóa mật khẩu bằng GPU công suất lớn?
A. Sử dụng thuật toán băm nhanh như MD5 để tối ưu hóa hiệu năng máy chủ.
B. Lưu trữ mật khẩu ở dạng rõ (Plaintext) để quản trị viên dễ dàng quản lý.
C. Sử dụng hàm băm chậm (như Argon2 hoặc Bcrypt) kết hợp với Salt ngẫu nhiên cho mỗi người dùng.
D. Tăng độ dài mật khẩu lên 100 ký tự mà không cần băm.

* **Đáp án:** C.
* **Giải thích:** Các hàm băm chậm (Argon2, Bcrypt) được thiết kế đặc biệt để kháng lại tấn công từ GPU bằng cách làm chậm quá trình băm mật khẩu, kết hợp với Salt để vô hiệu hóa Rainbow Table. Các phương án khác đều sai về nguyên tắc bảo mật.