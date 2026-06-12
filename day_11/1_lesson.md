### BÀI GIẢNG CHI TIẾT: NGÀY 11 – THÂM NHẬP HỆ THỐNG VÀ BẺ KHÓA MẬT KHẨU (PASSWORD CRACKING)

**Môn học:** Ethical Hacking (Tư duy chuẩn CEH v11)

**Thời lượng giảng dạy gợi ý:** 60 phút

---

#### 1. MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Chào các bạn! Rất vui được gặp lại các bạn trong buổi học Ngày 11. Hãy tưởng tượng một tình huống quen thuộc: Bạn đi làm về muộn và nhận ra mình đã đánh rơi chiếc chìa khóa cửa nhà ở đâu đó. Trước mắt bạn là một cánh cửa khóa chặt. Bạn sẽ làm gì?

Có người sẽ dùng một chiếc kẹp tăm để cố gắng "gảy" chốt (dò tìm điểm yếu cơ học), có người dùng một chùm chìa khóa cũ thử từng chiếc một, và nếu trong tình thế khẩn cấp, có thể ai đó sẽ dùng búa để phá khóa.

Trong thế giới an ninh mạng, khi một hacker đã đi qua các bước trinh sát, quét cổng và phân tích lỗ hổng (từ Ngày 1 đến Ngày 10), họ đang đứng trước "cánh cửa" của hệ thống mục tiêu. Hôm nay, chúng ta sẽ chính thức học cách họ "mở khóa" thông qua giai đoạn kịch tính nhất: **Thâm nhập hệ thống (Gaining Access)** bằng kỹ thuật **Bẻ khóa mật khẩu (Password Cracking)**.

---

#### 2. KIẾN THỨC CỐT LÕI

Để hiểu cách bẻ khóa, trước hết chúng ta cần hiểu cách máy tính lưu trữ và bảo vệ mật khẩu. Máy tính không bao giờ lưu mật khẩu dưới dạng văn bản thuần túy (Plaintext) như `MatKhau123`. Nếu làm vậy, chỉ cần một quản trị viên tò mò hoặc một lỗi nhỏ hệ thống là toàn bộ mật khẩu sẽ bị lộ. Thay vào đó, chúng sử dụng một khái niệm gọi là **Hash (Hàm băm)**.

##### Khái niệm 1: Hàm băm mật khẩu (Password Hashing) là gì?

Hãy tưởng tượng hàm băm giống như một máy xay sinh tố một chiều. Bạn bỏ vào một quả xoài, máy xay ra một ly sinh tố xoài màu vàng. Từ ly sinh tố đó, bạn không thể nào "lắp ghép" ngược lại thành quả xoài ban đầu.

Trong kỹ thuật:

* **Plaintext:** `AnToanThongTin`
* **Hàm băm (ví dụ MD5):** Chuyển chuỗi trên thành `e20bc2412803b9b46210f8546b404d7c`

Khi bạn đăng nhập, hệ thống không so sánh mật khẩu bạn gõ với mật khẩu gốc, mà nó lấy mật khẩu bạn vừa gõ, bỏ vào "máy xay" (hàm băm) rồi so sánh hai ly sinh tố với nhau. Nếu hai chuỗi băm trùng khớp, bạn được vào cửa. Do đó, bẻ khóa mật khẩu thực chất là quá trình đi tìm một chuỗi ký tự sao cho khi băm ra, nó cho ra kết quả trùng với chuỗi băm đang có sẵn.

##### Khái niệm 2: Các kỹ thuật bẻ khóa mật khẩu phổ biến

Hacker không "đoán mò" một cách vô định, họ có các chiến lược rất rõ ràng:

1. **Tấn công từ điển (Dictionary Attack):**
* **Bản chất:** Con người rất lười suy nghĩ, chúng ta thường đặt mật khẩu bằng những từ có trong từ điển (như `password`, `love`, `admin`, `123456`). Hacker sẽ chuẩn bị một tệp văn bản chứa hàng triệu từ thông dụng này (gọi là Wordlist). Công cụ bẻ khóa sẽ băm từng từ trong danh sách này và so sánh với chuỗi băm mục tiêu.
* **Ví dụ thực tế:** Giống như một tên trộm mang theo một chùm chìa khóa gồm 1.000 chiếc phổ biến nhất trên thị trường để thử vào ổ khóa nhà bạn.


2. **Tấn công vét cạn (Brute-Force Attack):**
* **Bản chất:** Nếu mật khẩu không nằm trong từ điển, công cụ sẽ thử mọi tổ hợp ký tự có thể có (ví dụ: `aaaa`, `aaab`, `aaac`... cho đến `ZZZZ`).
* **Ví dụ thực tế:** Thử mở ổ khóa vali 3 số bằng cách quay từ `000`, `001`, `002` lần lượt cho đến `999`. Phương pháp này chắc chắn thành công 100%, nhưng nhược điểm là cực kỳ tốn thời gian nếu mật khẩu dài và phức tạp.


3. **Tấn công lai (Hybrid Attack):**
* **Bản chất:** Sự kết hợp thông minh giữa Từ điển và Vét cạn. Thay vì thử từ `password` đơn thuần, công cụ sẽ tự động thêm số hoặc ký tự đặc biệt dựa trên các quy luật tâm lý con người, ví dụ: `Password123!`, `P@ssword2026`.



##### Khái niệm 3: Kỹ thuật tăng cường - Salt (Muối băm)

Nếu hai người dùng cùng đặt mật khẩu là `123456`, chuỗi băm của họ trong cơ sở dữ liệu sẽ giống y hệt nhau. Hacker chỉ cần bẻ khóa được một người là biết luôn mật khẩu người kia.

Để giải quyết vấn đề này, các hệ thống hiện đại dùng một kỹ thuật gọi là **Salting (Thêm muối)**. Hệ thống sẽ tự động tạo ra một chuỗi ký tự ngẫu nhiên (gọi là muối) và nối vào mật khẩu trước khi băm.

* *Mật khẩu của người A:* `123456` + Muối `xyz` $\rightarrow$ Chuỗi băm A
* *Mật khẩu của người B:* `123456` + Muối `abc` $\rightarrow$ Chuỗi băm B
Két quả là dù cùng mật khẩu, hai chuỗi băm lưu trong hệ thống vẫn hoàn toàn khác nhau, khiến công việc của hacker trở nên khó khăn gấp bội.

---

#### 3. PHÂN TÍCH SÂU: CÁC GÓC NHÌN KHÁC NHAU VỀ VẤN ĐỀ

Để trở thành một chuyên gia bảo mật thực thụ, chúng ta không chỉ nhìn hành vi bẻ khóa mật khẩu dưới một góc nhìn kỹ thuật đơn thuần, mà cần đặt nó vào bức tranh toàn cảnh:

* **Góc nhìn của Kẻ tấn công (Offensive Mindset):** Mật khẩu là mắt xích yếu nhất trong chuỗi an toàn. Kẻ tấn công luôn ưu tiên tìm kiếm mật khẩu thông qua các con đường tốn ít công sức nhất như Phishing (lừa đảo số), thu thập lại các mật khẩu bị lộ trong các vụ rò rỉ dữ liệu cũ (Credential Stuffing), hoặc quét các tệp cấu hình bị bỏ quên. Bẻ khóa bằng máy tính (Cracking) chỉ là giải pháp cuối cùng khi họ đã nắm trong tay tệp chứa chuỗi băm mật khẩu (ví dụ tệp `/etc/shadow` trên Linux hoặc cơ sở dữ liệu của một website) nhưng không thể đọc trực tiếp.
* **Góc nhìn của Người phòng thủ (Defensive Mindset):** Người phòng thủ không thể ngăn cản năng lực tính toán của máy tính tăng lên mỗi ngày (Định luật Moore), nhưng họ có thể làm chậm tốc độ bẻ khóa của hacker. Thay vì dùng các hàm băm tốc độ cao vốn được thiết kế cho việc xử lý dữ liệu nhanh (như MD5, SHA-1, SHA-256), người phòng thủ bắt buộc phải dùng các hàm băm "chậm" được thiết kế riêng cho mật khẩu như **Bcrypt, Scrypt, hoặc Argon2**. Các hàm băm này ép máy tính của hacker phải tốn nhiều tài nguyên CPU/RAM hơn cho mỗi lần thử, biến một chiến dịch bẻ khóa đáng lẽ mất 2 tiếng thành 200 năm.
* **Góc nhìn về Chi phí và Tài nguyên (Economics of Hacking):** Kỹ thuật bẻ khóa hiện đại ngày nay dựa rất nhiều vào sức mạnh của card đồ họa (GPU) thay vì vi xử lý máy tính thông thường (CPU). Một chiếc GPU có thể thử hàng tỷ chuỗi băm mỗi giây. Do đó, cuộc chiến bẻ khóa thực chất là cuộc chiến kinh tế: Liệu giá trị của thông tin bên trong hệ thống có đáng để kẻ tấn công đầu tư tiền điện và dàn máy GPU đắt tiền để bẻ khóa hay không?

---

#### 4. CÁCH ÁP DỤNG VÀO THỰC TẾ (HƯỚNG DẪN TỪNG BƯỚC)

Trong vai trò là một Hacker Mũ Trắng thực hiện kiểm thử an ninh (Penetration Testing) được cấp phép, quy trình kiểm tra độ an toàn của mật khẩu trong hệ thống nội bộ thường diễn ra theo 4 bước chuẩn sau:

##### Bước 1: Thu thập chuỗi băm (Hash Extraction)

Để bẻ khóa, bạn phải có mục tiêu. Trong một bài kiểm thử hệ thống Linux giả lập, nếu bạn đã chiếm được quyền cao nhất (Root), bạn sẽ trích xuất tệp `/etc/shadow` - nơi lưu trữ toàn bộ chuỗi băm mật khẩu của hệ điều hành.

##### Bước 2: Chuẩn bị "Vũ khí" (Wordlist & Tool)

* **Công cụ nổi tiếng:** **John the Ripper** hoặc **Hashcat** (đây là hai công cụ mã nguồn mở phổ biến nhất được tích hợp sẵn trong Kali Linux).
* **Tệp từ điển:** Sử dụng tệp `rockyou.txt` (đây là bộ từ điển huyền thoại chứa hơn 14 triệu mật khẩu thực tế từng bị rò rỉ trên Internet, cực kỳ hiệu quả để kiểm tra độ yếu của mật khẩu nhân viên).

##### Bước 3: Xác định loại hàm băm (Hash Identification)

Trước khi ra lệnh cho công cụ chạy, bạn phải cho nó biết chuỗi băm này thuộc loại nào (MD5, SHA-256, hay Bcrypt...). Bạn có thể dùng một công cụ nhỏ tên là `hash-identifier` để nhận diện cấu trúc chuỗi ký tự.

##### Bước 4: Thực hiện bẻ khóa và Đọc kết quả

Sử dụng câu lệnh cơ bản trên Kali Linux (Ví dụ với John the Ripper):

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt [ten_file_chua_chuoi_bam]

```

Công cụ sẽ chạy tự động. Nếu mật khẩu của người dùng quá yếu (ví dụ: `password123`), John the Ripper sẽ ngay lập tức hiển thị mật khẩu đó dưới dạng plaintext trên màn hình.

##### Bước 5: Báo cáo và Đề xuất giải pháp

Là một Ethical Hacker, sau khi tìm ra các tài khoản có mật khẩu yếu, bạn phải ghi nhận vào báo cáo, yêu cầu hệ thống ép buộc người dùng đổi mật khẩu phức tạp hơn và cấu hình cơ chế khóa tài khoản nếu gõ sai quá 5 lần.

---

#### 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

Trong quá trình học và làm việc thực tế, rất nhiều bạn học viên đã mắc phải những sai lầm kinh điển sau đây:

* **Sai lầm 1: Nhầm lẫn giữa Quét mật khẩu Online và Bẻ khóa mật khẩu Offline**
* *Thực tế:* Bạn không thể dùng lệnh Brute-Force bắn liên tục hàng triệu mật khẩu trực tiếp vào trang đăng nhập của một ngân hàng hay Facebook (Tấn công Online). Hệ thống của họ sẽ khóa tài khoản hoặc chặn IP của bạn ngay sau 5-10 lần thử sai. Kỹ thuật bẻ khóa bằng John the Ripper hay Hashcat mà chúng ta học hôm nay chỉ thực hiện được **Offline**, nghĩa là khi bạn đã lấy được tệp chứa chuỗi băm về máy cục bộ của mình và tự bẻ khóa trên máy mình mà không làm phiền đến hệ thống đích.


* **Sai lầm 2: Nghĩ rằng mật khẩu dài 8 ký tự là đủ an toàn**
* *Thực tế:* Với sức mạnh của các dàn máy đào coin hoặc card đồ họa chuyên dụng ngày nay, một mật khẩu 8 ký tự chỉ gồm chữ thường và số có thể bị quét sạch (Brute-Force toàn bộ) trong vòng vài phút đến vài giờ. Hãy chuyển sang tư duy sử dụng **Passphrase** (Một cụm từ dài gồm nhiều từ ghép lại có nghĩa với riêng bạn, ví dụ: `TroiHomNayNhieuMayVaCoMua2026!`). Độ dài mới là chìa khóa tối thượng chống lại Brute-force, chứ không chỉ là sự phức tạp của ký tự.


* **Sai lầm 3: Thử nghiệm bẻ khóa trên các tệp dữ liệu không có thẩm quyền**
* *Thực tế:* Việc cố tình tải về, trích xuất hoặc bẻ khóa mật khẩu của bất kỳ cá nhân, tổ chức nào khi chưa có văn bản đồng ý phê duyệt kiểm thử (Rules of Engagement) là hành vi vi phạm pháp luật nghiêm trọng. Hãy luôn thực hành trong môi trường Lab biệt lập (như các máy ảo DVWA, Metasploitable hoặc các nền tảng Hack The Box, TryHackMe).



---

#### CỦNG CỐ BÀI HỌC (MILESTONE NGÀY 11)

Để kết thúc bài học hôm nay, các bạn hãy tự trả lời câu hỏi tư duy sau: *Nếu một website lưu trữ mật khẩu của người dùng bằng hàm băm MD5 kết hợp với một chuỗi Salt cố định cho toàn bộ hệ thống, hệ thống này có an toàn trước đòn tấn công từ điển hay không? Tại sao?*

Hãy ghi lại câu trả lời vào sổ tay học tập. Bài học Ngày 11 của chúng ta dừng lại ở đây. Ngày mai, chúng ta sẽ tiếp tục nâng cấp kỹ năng để tìm hiểu làm thế nào hacker có thể "leo thang đặc quyền" (Privilege Escalation) sau khi đã chiếm được một tài khoản thông thường. Chúc các bạn học tốt!