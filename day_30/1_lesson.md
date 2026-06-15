**BÀI GIẢNG CHI TIẾT – NGÀY 30: MẬT MÃ HỌC - LÁ CHẮN CUỐI CÙNG TRONG AN NINH MẠNG**

* **Môn học:** Ethical Hacking (Tư duy chuẩn CEH v11 - Module 20: Cryptography)
* **Thời lượng giảng dạy gợi ý:** 60 phút
* **Mục tiêu bài học (Đo lường được):**
1. Phân biệt chính xác bản chất logic, ưu nhược điểm và kịch bản sử dụng của Mã hóa đối xứng (Symmetric Encryption) và Mã hóa bất đối xứng (Asymmetric Encryption).
2. Hiểu rõ cơ chế toán học của Hàm băm (Hash Function) và phân biệt nó với các thuật toán mã hóa thông thường.
3. Trực quan hóa hạ tầng khóa công khai PKI và giải thích cách chứng chỉ số SSL/TLS bảo vệ dữ liệu truyền tải trên Internet.



---

### 1. MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Chào các em! Hãy tưởng tượng các em đang là tổng chỉ huy bảo vệ một tòa lâu đài. Các em đã xây tường thành kiên cố (Firewall), đặt lính canh khắp các hành lang (IDS/IPS), thậm chí tạo ra các căn phòng giả để đánh lừa kẻ trộm (Honeypot). Nhưng chuyện gì xảy ra nếu kẻ tấn công là một "gián điệp nằm vùng" hoặc bằng cách nào đó vượt qua tất cả để chạm vào hòm thư mật của nhà vua?

Nếu bức thư đó viết bằng ngôn ngữ thông thường, lâu đài chính thức thất thủ. Nhưng nếu bức thư được viết bằng một loại mật mã mà chỉ nhà vua và tể tướng hiểu được, thì dù kẻ trộm có cầm bức thư trên tay, hắn cũng chỉ thấy những ký tự vô nghĩa. Trong thế giới an ninh mạng, mật mã học chính là bức tường cuối cùng như vậy. Khi mọi tầng phòng thủ bị xuyên thủng, dữ liệu được mã hóa vẫn an toàn. Hôm nay, chúng ta sẽ cùng khám phá "Lá chắn cuối cùng" này!

---

### 2. KIẾN THỨC CỐT LÕI (CORE KNOWLEDGE)

Mật mã học (Cryptography) nghe có vẻ phức tạp với đầy rẫy các thuật toán toán học, nhưng bản chất logic của nó xoay quanh 3 trục xương sống: Mã hóa đối xứng, Mã hóa bất đối xứng và Hàm băm. Chúng ta sẽ bẻ khóa từng khái niệm bằng các ví dụ đời sống nhất.

#### Khái niệm 1: Mã hóa đối xứng (Symmetric Encryption) - "Một chiếc chìa khóa duy nhất"

* **Bản chất:** Là cơ chế mà người gửi và người nhận **dùng chung một chiếc chìa khóa duy nhất** (Shared Secret Key) cho cả hai quá trình: mã hóa văn bản gốc (Plaintext) thành văn bản mã hóa (Ciphertext) và giải mã ngược lại.
* **Ví dụ thực tế:** Nó giống hệt như chiếc két sắt ở nhà các em. Em bỏ tài liệu vào két, dùng chiếc chìa khóa cơ để khóa lại. Khi người thân của em muốn lấy tài liệu, em phải đưa chính chiếc chìa khóa đó cho họ để mở két.
* **Thuật toán phổ biến:** DES, 3DES, **AES** (Advanced Encryption Standard - chuẩn mã hóa quân đội, cực kỳ an toàn và phổ biến hiện nay).
* **Đặc điểm:** Tốc độ xử lý cực kỳ nhanh, tiêu tốn ít tài nguyên phần cứng. Rất thích hợp để mã hóa các khối dữ liệu lớn (như ổ cứng, file dung lượng cao). Tuy nhiên, điểm yếu chết người của nó là: *Làm sao để gửi chiếc chìa khóa này cho người nhận một cách an toàn qua Internet mà không bị hacker nghe lén?*

#### Khái niệm 2: Mã hóa bất đối xứng (Asymmetric Encryption) - "Hòm thư công cộng"

* **Bản chất:** Để giải quyết bài toán phân phối khóa của mã hóa đối xứng, mã hóa bất đối xứng ra đời và sử dụng **một cặp khóa có mối quan hệ toán học chặt chẽ với nhau**:
* **Khóa công khai (Public Key):** Ai cũng có thể biết. Dùng để **mã hóa** dữ liệu.
* **Khóa bí mật (Private Key):** Chỉ duy nhất chủ sở hữu được biết và giữ bí mật. Dùng để **giải mã** dữ liệu.
* *Nguyên tắc vàng:* Dữ liệu đã mã hóa bằng Public Key thì **chỉ có** Private Key tương ứng mới giải mã được.


* **Ví dụ thực tế:** Hãy tưởng tượng mỗi người sở hữu một hòm thư đặt ở lề đường. Hòm thư này có một khe hở để ai đi qua cũng có thể đút thư vào (đây chính là Public Key - ai cũng có thể dùng để gửi dữ liệu bảo mật cho em). Tuy nhiên, khe hở này thiết kế một chiều, đút thư vào rồi thì không thò tay lấy ra được. Chỉ có em - người giữ chiếc chìa khóa mở cửa hòm thư (Private Key) - mới mở được hòm để đọc thư.
* **Thuật toán phổ biến:** RSA, ECC (Elliptic Curve Cryptography), Diffie-Hellman.
* **Đặc điểm:** Giải quyết triệt để bài toán truyền khóa qua Internet. Nhưng vì thuật toán toán học phức tạp (dựa trên việc nhân các số nguyên tố khổng lồ), tốc độ của nó **chậm hơn mã hóa đối xứng hàng trăm lần**. Do đó, người ta không dùng nó để mã hóa file lớn, mà chỉ dùng để mã hóa các thông tin nhỏ như: chữ ký số, phiên làm việc hoặc chính chiếc "chìa khóa đối xứng".

#### Khái niệm 3: Hàm băm (Hash Function) - "Dấu vân tay số"

* **Bản chất:** Hàm băm **không phải là thuật toán mã hóa** vì nó hoạt động một chiều (One-way). Nó biến một dữ liệu đầu vào có độ dài bất kỳ (một chữ cái, một cuốn sách, hay một bộ phim dung lượng 10GB) thành một chuỗi ký tự có **độ dài cố định** (gọi là Hash value hoặc Message Digest).
* **Nguyên tắc cốt lõi:**
1. *Tính một chiều:* Từ dữ liệu gốc tính ra chuỗi băm rất dễ, nhưng từ chuỗi băm không bao giờ dịch ngược lại được dữ liệu gốc.
2. *Hiệu ứng domino (Avalanche Effect):* Chỉ cần thay đổi một dấu chấm hoặc một ký tự trong dữ liệu gốc, chuỗi băm đầu ra sẽ thay đổi hoàn toàn.


* **Ví dụ thực tế:** Hàm băm giống như việc lăn dấu vân tay của một người. Nhìn vào dấu vân tay, em không thể vẽ lại khuôn mặt hay tính cách của người đó (tính một chiều). Nhưng nếu hai người có dấu vân tay giống hệt nhau thì chắc chắn đó là một người. Nếu tài liệu bị chỉnh sửa dù chỉ một chữ, "dấu vân tay số" (chuỗi băm) của nó sẽ biến dạng ngay lập tức.
* **Thuật toán phổ biến:** MD5 (đã bị lỗi thời, có lỗ hổng), SHA-1 (đã yếu), **SHA-256**, SHA-3 (an toàn hiện tại).
* **Ứng dụng:** Kiểm tra tính toàn vẹn của dữ liệu (Integrity) xem file tải về có bị hacker cài cắm mã độc hay không; hoặc dùng để lưu trữ mật khẩu trong cơ sở dữ liệu (Database) của hệ thống.

---

### 3. PHÂN TÍCH SÂU (DEEP DIVE)

Để trở thành một Chuyên gia an ninh mạng thực thụ, chúng ta cần phân tích sâu các góc nhìn bản chất và sự kết hợp của mật mã học trong thực tế.

#### Góc nhìn 1: Tại sao hệ thống lưu trữ không bao giờ được lưu mật khẩu dạng rõ (Plaintext) mà phải lưu chuỗi băm kèm Salt?

Khi các em đăng ký tài khoản trên một website, nếu quản trị viên lưu mật khẩu của các em là `AnhYeuEm123` thẳng vào Database, thì khi Database bị hack (qua lỗi SQL Injection chẳng hạn), hacker sẽ chiếm toàn bộ mật khẩu.

Để bảo mật, hệ thống sẽ đưa mật khẩu `AnhYeuEm123` qua hàm băm SHA-256 để tạo ra chuỗi băm dạng `a591a6d...` rồi lưu chuỗi này vào Database. Lần sau em đăng nhập, hệ thống chỉ cần băm mật khẩu em vừa gõ và đối chiếu hai chuỗi băm với nhau.

Tuy nhiên, hacker có một vũ khí gọi là **Rainbow Table** (Bảng tra cứu các chuỗi băm có sẵn của các mật khẩu phổ biến). Nếu em đặt mật khẩu yếu, hacker chỉ cần đối chiếu chuỗi băm chiếm được với bảng này là ra mật khẩu gốc. Để chống lại điều này, các chuyên gia sử dụng kỹ thuật **Salt (Muối)**. Trước khi băm, hệ thống tự động cộng thêm một chuỗi ký tự ngẫu nhiên vào mật khẩu của em (Ví dụ: `AnhYeuEm123 + @#$xyz`). Việc này làm vô hiệu hóa hoàn toàn các bảng Rainbow Table của hacker, ép hắn phải dò phá thủ công (Brute-force) vô cùng tốn thời gian.

#### Góc nhìn 2: Bản chất của kết nối HTTPS (SSL/TLS) - Sự kết hợp hoàn hảo đầy nghệ thuật

Khi các em truy cập vào một trang web ngân hàng có biểu tượng ổ khóa màu xanh (HTTPS), hệ thống đang sử dụng một mô hình mã hóa kết hợp (Hybrid Cryptography) để tối ưu hóa ưu điểm của cả mã hóa đối xứng lẫn bất đối xứng:

```
[Trình duyệt của bạn]                                           [Máy chủ Ngân hàng]
         |                                                               |
         | ------ 1. Yêu cầu kết nối bảo mật (Hello) ------------------> |
         | <----- 2. Gửi Chứng chỉ số chứa Public Key của Server ------- |
         |                                                               |
         | -- 3. Tạo ra Chìa khóa đối xứng ngẫu nhiên (Session Key). -- |
         | --    Mã hóa chiếc chìa này bằng Public Key của Server. ---- |
         | ------ 4. Gửi chiếc chìa đã khóa này qua Internet ---------> |
         |                                                               |
         |                                   [Server dùng Private Key]   |
         |                                   [để giải mã lấy Session Key]|
         |                                                               |
         | <===== 5. Từ đây, hai bên giao tiếp bằng Session Key ========> |
         |           (Mã hóa đối xứng - Tốc độ cực nhanh)                |

```

1. **Giai đoạn Thiết lập (Asymmetric):** Trình duyệt của em và Server dùng mã hóa bất đối xứng để chào hỏi. Server gửi Public Key cho trình duyệt. Trình duyệt tự tạo ra một "Chìa khóa phiên" (Session Key - đây là khóa đối xứng). Sau đó, trình duyệt dùng Public Key của Server để mã hóa và gửi Session Key này về cho Server. Kẻ tấn công trên đường truyền dù có bắt được gói tin này cũng chịu chết vì không có Private Key của Server để giải mã lấy chiếc Session Key bên trong.
2. **Giai đoạn Truyền tải (Symmetric):** Khi cả trình duyệt và Server đã cầm an toàn chiếc Session Key chung đó trong tay, họ lập tức tắt chế độ mã hóa bất đối xứng đi và chuyển hoàn toàn sang mã hóa đối xứng (AES) để truyền tải hình ảnh, video, dữ liệu tài khoản với tốc độ cực nhanh.

---

### 4. CÁCH ÁP DỤNG VÀO THỰC TẾ (REAL-WORLD APPLICATION)

Học mật mã học không phải là học thuộc các công thức toán, mà là biết cách ứng dụng các công cụ để bảo vệ thông tin. Dưới đây là hướng dẫn từng bước giúp các em thực hành kiểm tra tính toàn vẹn và mã hóa tệp tin trực tiếp trên máy tính.

#### Bước 1: Kiểm tra tính toàn vẹn (Integrity Check) bằng Hàm băm

Khi tải một công cụ hacking (như Kali Linux ISO) từ trên mạng về, nhà phát hành luôn cung cấp một chuỗi SHA-256 kèm theo. Hãy kiểm tra xem file tải về có nguyên vẹn không:

* **Trên Windows (Sử dụng PowerShell):**
Mở PowerShell và gõ lệnh:
`Get-FileHash C:\Path\To\File.iso -Algorithm SHA256`
* **Trên Linux/Kali Linux:**
Mở Terminal và gõ lệnh:
`sha256sum File.iso`
* **Cách đối chiếu:** So sánh chuỗi ký tự hiển thị trên màn hình với chuỗi ký tự trên website của nhà phát hành. Nếu trùng khớp 100%, file an toàn. Nếu sai lệch dù chỉ 1 ký tự, lập tức xóa file vì dữ liệu đã bị lỗi hoặc đã bị hacker can thiệp cài cắm mã độc mã hóa độc hại.

#### Bước 2: Mã hóa file dữ liệu bằng công cụ OpenSSL (Mã hóa đối xứng AES)

Hãy giả sử em có một file chứa danh sách mật khẩu hệ thống tên là `matkhau.txt` và em muốn mã hóa nó trước khi gửi lên Cloud lưu trữ:

* Mở terminal trên Linux và thực hiện lệnh sau:
`openssl enc -aes-256-cbc -salt -in matkhau.txt -out matkhau.enc`
* Hệ thống sẽ yêu cầu em nhập mật khẩu bảo vệ (chính là chiếc chìa khóa đối xứng). Sau khi chạy xong, file `matkhau.enc` được tạo ra dưới dạng các ký tự rác rưởi, không ai đọc được.
* Để giải mã lại file khi cần sử dụng, em dùng câu lệnh ngược lại:
`openssl enc -aes-256-cbc -d -in matkhau.enc -out matkhau_giaima.txt`
(Hệ thống sẽ bắt nhập đúng chiếc chìa khóa ban đầu để khôi phục dữ liệu gốc).

---

### 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

Trong quá trình thiết kế hệ thống và làm bảo mật, các học viên mới hoặc các lập trình viên thường mắc phải các sai lầm kinh điển sau:

* **❌ Sai lầm 1: Tự phát minh ra thuật toán mã hóa riêng của mình.**
* *Thực tế:* Nhiều bạn nghĩ rằng: *"Mình sẽ tự viết một hàm hoán đổi vị trí các chữ cái theo quy luật riêng, không ai biết quy luật này nên sẽ an toàn nhất!"*. Đây là sai lầm chết người. Các thuật toán như AES hay RSA an toàn không phải vì thế giới giấu kín cách thức hoạt động của nó (mọi thuật toán đều được công khai mã nguồn công cộng). Nó an toàn vì nó đã được hàng triệu nhà toán học và chuyên gia mật mã trên thế giới rà quét, chứng minh bằng toán học rằng không thể bẻ gãy nổi trong hàng triệu năm bằng sức mạnh máy tính hiện tại. Thuật toán tự chế của các em sẽ dễ dàng bị bẻ gãy bằng các kỹ thuật phân tích tần suất ký tự (Cryptanalysis) cơ bản.


* **❌ Sai lầm 2: Nhầm lẫn giữa Mã hóa (Encryption), Băm (Hashing) và Mã hóa Base64 (Encoding).**
* *Thực tế:* Rất nhiều người thấy một chuỗi ký tự dạng `YWRtaW46MTIzNDU2` liền kết luận: *"Dữ liệu này đã được mã hóa an toàn"*. Thực chất, đây chỉ là mã hóa định dạng **Base64** (Encoding). Encoding chỉ nhằm mục đích chuyển đổi cấu trúc dữ liệu để các hệ thống truyền dẫn không bị lỗi hiển thị ký tự đặc biệt, **nó hoàn toàn không có tính năng bảo mật**. Bất kỳ ai cũng có thể Decode Base64 trong vòng 1 giây mà không cần bất kỳ chiếc chìa khóa nào. Hãy nhớ: **Mã hóa thì bắt buộc phải có khóa (Key), Băm thì không thể dịch ngược, còn Encoding thì dịch ngược dễ dàng không cần khóa.**



---

### 📊 BẢNG TỔNG KẾT BÀI HỌC (LÁ CHẮN CUỐI CÙNG)

| Tiêu chí so sánh | Mã hóa đối xứng (Symmetric) | Mã hóa bất đối xứng (Asymmetric) | Hàm băm (Hash Function) |
| --- | --- | --- | --- |
| **Số lượng khóa** | Dùng chung 1 Khóa duy nhất. | Sử dụng 1 cặp khóa (Public & Private). | Không sử dụng khóa (Hoạt động 1 chiều). |
| **Tốc độ xử lý** | Cực kỳ nhanh. | Rất chậm (Tốn tài nguyên). | Rất nhanh. |
| **Mục tiêu bảo mật** | Đảm bảo tính Bí mật (Confidentiality). | Giải quyết bài toán Phân phối khóa, Chữ ký số. | Đảm bảo tính Toàn vẹn dữ liệu (Integrity). |
| **Thuật toán tiêu biểu** | AES, DES, 3DES. | RSA, ECC, Diffie-Hellman. | SHA-256, SHA-3, MD5. |
| **Ứng dụng thực tế** | Mã hóa ổ cứng, file dung lượng lớn. | HTTPS (SSL/TLS Handshake), SSH. | Lưu mật khẩu, check mã băm ứng dụng. |

---

### 💡 SLOGAN CHỐT HẠ:

> **"Thuật toán có thể công khai, nhưng chìa khóa phải giữ kín; Tường thành có thể sụp đổ, nhưng Mật mã phải vững bền!"**

---

### BÀI TẬP TỰ RÈN LUYỆN (MILESTONE NGÀY 30)

Để hoàn thành ngày học cuối cùng trong lộ trình 30 ngày và sẵn sàng cho các thử thách lớn hơn, thầy giao cho các em một nhiệm vụ thực tế sau:

1. Hãy tải một phần mềm bất kỳ trên mạng (Khuyến khích công cụ Wireshark hoặc bản ISO của Ubuntu).
2. Thực hiện trích xuất mã băm SHA-256 của tệp tin vừa tải về bằng Terminal/PowerShell.
3. Chụp ảnh đối chiếu chuỗi băm đó với chuỗi băm do trang chủ cung cấp để chứng minh file hoàn toàn toàn vẹn và không bị chỉnh sửa.
4. Hãy dùng OpenSSL tạo một cặp khóa RSA (Public/Private Key) trên máy tính của mình và thực hành gửi một đoạn tin nhắn mã hóa cho bạn của em.