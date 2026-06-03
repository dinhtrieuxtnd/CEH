## CHỦ ĐỀ 3: TUYỆT CHIÊU GOOGLE HACKING (GHDB) & WAYBACK MACHINE

**Môn học:** Ethical Hacking (CEH v11)

**Thời lượng giảng dạy:** 45 phút

---

## MỞ ĐẦU: TÌNH HUỐNG THỰC TẾ

Chào các bạn! Hãy tưởng tượng các bạn vừa dọn đến một căn nhà mới. Bạn khóa cửa chính rất cẩn thận, lắp cả camera an ninh ở cổng. Nhưng bạn lại vô tình quên mất rằng mình đã để một chiếc chìa khóa dự phòng dưới thảm chùi chân, và cửa sổ phòng kho phía sau nhà thì chỉ khép hờ chứ không chốt.

Trong thế giới Internet cũng vậy, một doanh nghiệp có thể chi hàng tỷ đồng để mua tường lửa (Firewall) hay hệ thống phát hiện xâm nhập (IDS), nhưng các lập trình viên hoặc quản trị viên hệ thống của họ lại vô tình bỏ quên những "chiếc chìa khóa dự phòng" – như file cấu hình chứa mật khẩu, file sao lưu dữ liệu (backup), hay tài liệu nội bộ – lộ lọt ngay trên website mà họ không hề hay biết. Đáng sợ hơn, các cỗ máy tìm kiếm như Google đã tự động đi gom nhặt, lưu trữ toàn bộ những sơ hở đó và phơi bày ra cho cả thế giới.

Hôm nay, chúng ta sẽ cùng học cách tư duy của một Hacker Mũ Trắng để đi tìm những "cánh cửa bỏ quên" đó bằng một kỹ thuật cực kỳ mạnh mẽ mang tên: **Google Hacking (Google Dorking)**.

---

## KIẾN THỨC CỐT LÕI: GIẢI THÍCH KHÁI NIỆM

### 1. Khái niệm Google Hacking / Google Dorking là gì?

Thông thường, chúng ta dùng Google để tìm kiếm phim ảnh, công thức nấu ăn hay tin tức bằng những từ khóa rất cơ bản. Tuy nhiên, Google sở hữu một bộ lọc cực kỳ thông minh với các **toán tử nâng cao (Advanced Operators)**.

> **Google Hacking (hay Google Dorking):** Là kỹ thuật sử dụng các toán tử tìm kiếm nâng cao của Google nhằm mục đích lọc ra các thông tin nhạy cảm, các lỗ hổng cấu hình sai, hoặc tài liệu bảo mật bị lộ lọt trên mạng Internet một cách vô ý[cite: 1, 2].

*Ví dụ đời thực:* Nếu tìm kiếm thông thường giống như bạn đi vào một thư viện và hô lớn: *"Tôi muốn tìm sách về lịch sử"*, thì Google Dorking giống như việc bạn đưa cho thủ thư một yêu cầu chi tiết: *"Tôi muốn tìm cuốn sách bìa màu xanh, xuất bản năm 2010, ở kệ số 5, chương 3 có nhắc đến tên Nguyễn Văn A"*.

### 2. Thành thạo 5 toán tử nâng cao quyền lực của Google



Để trở thành một chuyên gia dò quét thông tin qua Google, bạn buộc phải nằm lòng 5 vũ khí sau:

* **`site:` (Giới hạn phạm vi tên miền)**
* *Ý nghĩa:* Ép Google chỉ được tìm kiếm kết quả bên trong một trang web hoặc một đuôi tên miền cụ thể.
* *Ví dụ:* `site:tuoitre.vn "giáo dục"` $\rightarrow$ Google chỉ tìm các bài viết có chữ "giáo dục" thuộc duy nhất trang Tuổi Trẻ.


* **`filetype:` hoặc `ext:` (Tìm chính xác định dạng file)**
* *Ý nghĩa:* Chỉ lọc ra các kết quả có định dạng file cụ thể (như PDF, DOCX, XLSX, conf, log)[cite: 1, 2].
* *Ví dụ:* `site:gov.vn filetype:pdf "báo cáo tài chính"` $\rightarrow$ Tìm tất cả các file PDF là báo cáo tài chính trên các website của chính phủ.


* **`intitle:` (Tìm từ khóa trong tiêu đề trang)**
* *Ý nghĩa:* Tìm kiếm các trang web có chứa từ khóa chính xác nằm trong thẻ tiêu đề (Title) hiển thị trên tab trình duyệt.
* *Ví dụ:* `intitle:"index of"` $\rightarrow$ Tìm các máy chủ cấu hình sai, để lộ danh mục thư mục gốc (thay vì hiển thị giao diện web).


* **`inurl:` (Tìm từ khóa nằm trong đường dẫn URL)**
* *Ý nghĩa:* Lọc các trang web mà trên thanh địa chỉ của nó có chứa cụm từ bạn yêu cầu.
* *Ví dụ:* `inurl:admin/login.php` $\rightarrow$ Săn tìm các đường dẫn đăng nhập vào hệ thống quản trị của website.


* **`intext:` (Tìm từ khóa trong nội dung bài viết)**
* *Ý nghĩa:* Bắt buộc Google tìm cụm từ nằm trong phần thân (body) của trang web.
* *Ví dụ:* `intext:"username" intext:"password"` $\rightarrow$ Tìm các trang hiển thị chuỗi ký tự chứa thông tin tài khoản.



### 3. Google Hacking Database (GHDB) là gì?

Bạn không cần phải tự nghĩ ra mọi câu lệnh dork phức tạp. Cộng đồng bảo mật quốc tế đã tập hợp một "kho vũ khí" tối tân được gọi là **GHDB (Google Hacking Database)** do tổ chức Exploit-DB quản lý. Đây là nơi lưu trữ hàng ngàn câu lệnh Dork được thiết kế sẵn để tìm từ camera an ninh bị lộ, máy in hở cổng, cho đến các cơ sở dữ liệu chứa mật khẩu của các doanh nghiệp trên toàn cầu.

### 4. Khai thác cỗ máy thời gian Internet: WayBack Machine



Hacker thường rỉ tai nhau: *"Thứ gì đã đưa lên Internet thì sẽ ở lại Internet mãi mãi"*. Nếu một doanh nghiệp phát hiện ra họ bị lộ file cấu hình mật khẩu và vội vàng xóa nó đi vào ngày hôm nay, liệu có quá muộn không? Câu trả lời là: Có!

> **WayBack Machine (archive.org):** Là một thư viện số khổng lồ tự động chụp lại trạng thái (snapshot) của toàn bộ các website trên thế giới theo từng mốc thời gian trong quá khứ.
> 
> 

Hacker Mũ Trắng sử dụng công cụ này để lục lại lịch sử của một công ty, xem xem trong quá khứ (ví dụ 3 năm trước) hệ thống của họ từng có những file gì, có sơ hở gì đã từng bị lộ nhưng quên đổi mật khẩu hay không[cite: 1, 2].

---

## PHÂN TÍCH SÂU: CÁC GÓC NHÌN KHÁC NHAU VỀ GOOGLE HACKING

Để hiểu trọn vẹn bản chất của kỹ thuật này, chúng ta cần phân tích nó dưới 3 góc độ:

```
                  ┌──────────────────────────────┐
                  │        GOOGLE HACKING        │
                  └──────────────┬───────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
【Góc nhìn Kẻ tấn công】  【Góc nhìn Phòng thủ】    【Góc nhìn Pháp lý/Đạo đức】
- Trinh sát thụ động     - Rà quét chủ động       - Ranh giới mong manh
- Không để lại dấu vết   - Vá lỗi cấu hình        - Chỉ xem, không phá hủy
- Tìm lỗ hổng nhanh      - Sử dụng robots.txt     - Phải có sự cho phép

```

### Góc nhìn của Kẻ tấn công (Attacker)

Đối với hacker, Google Dorking là phương pháp **Trinh sát bị động (Passive Footprinting)** hoàn hảo nhất. Tại sao? Vì hacker không hề tương tác trực tiếp hay gửi bất kỳ gói tin tấn công nào đến máy chủ của nạn nhân. Mọi truy vấn đều gửi đến máy chủ của Google. Do đó, hệ thống phòng thủ (Firewall/IDS) của nạn nhân hoàn toàn "mù lòa" và không thể ghi nhận hay chặn địa chỉ IP của hacker.

### Góc nhìn của Người phòng thủ (Defender / Ethical Hacker)

Là một người bảo vệ hệ thống, bạn phải là người dùng Google Dorking thành thạo hơn ai hết. Bạn phải dùng chính các câu lệnh của hacker để tự quét "nhà" mình định kỳ. Nếu bạn tìm thấy file nhạy cảm của công ty mình trên Google, bạn phải ngay lập tức gỡ bỏ và cấu hình file `robots.txt` để ra lệnh cho các cỗ máy tìm kiếm không được phép thu thập dữ liệu (index) các khu vực nhạy cảm đó nữa.

### Góc nhìn về Đạo đức và Pháp lý

Ranh giới giữa một Ethical Hacker và một Tội phạm mạng (Black Hat) trong bài học này cực kỳ mong manh. Việc bạn dùng toán tử nâng cao để tìm ra một lỗ hổng công khai trên Google không vi phạm pháp luật (vì dữ liệu đó do Google công khai). Tuy nhiên, nếu bạn sử dụng thông tin tìm được đó để đăng nhập trái phép, tải dữ liệu nội bộ về máy hoặc tống tiền doanh nghiệp, bạn đã chính thức trở thành tội phạm mạng.

---

## CÁCH ÁP DỤNG VÀO THỰC TẾ: QUY TRÌNH THỰC HIỆN TỪNG BƯỚC

Hôm nay, chúng ta sẽ thực hành tìm kiếm thông tin lộ lọt của một mục tiêu giả định (ví dụ: `targetsite.com`). Hãy thực hiện theo các bước sau:

### Bước 1: Kiểm tra cấu trúc thư mục lộ lọt và các trang quản trị

Mở trình duyệt Google và gõ câu lệnh sau vào thanh tìm kiếm:

```text
site:targetsite.com intitle:"index of"

```

*Ý nghĩa:* Bạn đang rà soát xem trang web này có thư mục nào bị cấu hình sai, hiển thị toàn bộ danh sách file ra ngoài hay không. Nếu có, hãy kiểm tra tiếp các trang quản trị bằng lệnh:

```text
site:targetsite.com inurl:admin OR inurl:login

```

### Bước 2: Săn tìm các tài liệu nội bộ hoặc file chứa dữ liệu nhạy cảm

Doanh nghiệp thường vô tình tải lên các file chứa danh sách nhân viên, thông tin tài chính hoặc sơ đồ mạng[cite: 1, 2]. Bạn hãy dùng bộ lọc định dạng file:

```text
site:targetsite.com filetype:sql OR filetype:backup OR filetype:conf

```

*Mẹo:* Bạn cũng có thể săn tìm các file tài liệu văn phòng bằng lệnh: `site:targetsite.com (filetype:docx OR filetype:xlsx OR filetype:pdf) "CONFIDENTIAL"` (Tìm các file có chữ "BẢO MẬT").

### Bước 3: Tra cứu "Quá khứ" bằng WayBack Machine



1. Truy cập vào trang web [https://archive.org](https://archive.org).


2. Nhập URL `targetsite.com` vào thanh tìm kiếm của WayBack Machine.


3. Quan sát biểu đồ lịch sử theo năm. Chọn một năm bất kỳ (ví dụ: năm 2022) và click vào các ngày có chấm tròn màu xanh (thời điểm hệ thống lưu lại ảnh chụp website).


4. Kiểm tra xem ở phiên bản cũ, website có để lộ các đường dẫn hoặc file nào mà phiên bản hiện tại đã xóa nhưng dữ liệu cũ vẫn còn giá trị sử dụng hay không.

---

## LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

* **Bị Google "khóa" tạm thời (Dính Captcha):** Khi bạn thực hiện các câu lệnh dork liên tục với tần suất cao, Google sẽ nghi ngờ bạn là một bot tự động (scrapper) và sẽ liên tục bắt bạn giải mã Captcha (chọn hình ảnh xe cộ, đèn giao thông).
* *Cách khắc phục:* Hãy thực hiện các truy vấn một cách chậm rãi, giãn cách thời gian, hoặc sử dụng VPN/Proxy để thay đổi IP khi cần thiết.


* **Quên không sử dụng dấu ngoặc kép `""` cho cụm từ chính xác:** Nếu bạn gõ `intitle:index of` (không có dấu ngoặc kép), Google sẽ hiểu là bạn tìm tiêu đề có chữ `index` và trong nội dung có chữ `of`. Bạn phải viết chính xác là: `intitle:"index of"`.
* **Nhầm lẫn rằng dữ liệu trên WayBack Machine luôn là dữ liệu mới nhất:** Hãy nhớ WayBack Machine chỉ là "ảnh chụp trong quá khứ". Mật khẩu tìm thấy trong file cấu hình của năm 2020 có thể đã bị thay đổi ở năm 2026. Đừng vội vã kết luận mà chưa có sự đối chiếu với thực tế.



---

## KẾT LUẬN & BÀI TẬP VỀ NHÀ (MILESTONE)

**Tóm lại:** Google không chỉ là một công cụ tìm kiếm, nó là một kính hiển vi cực mạnh giúp Ethical Hacker nhìn thấu những góc khuất, những sai lầm trong cấu hình hệ thống của doanh nghiệp mà không cần tốn một viên đạn (không gửi gói tin độc hại)[cite: 1, 2].

Bài tập Milestone cho Ngày 3:
Các bạn hãy truy cập vào một hệ thống website giả lập thử nghiệm (hoặc sử dụng chính website cá nhân/trường học của bạn nếu có thẩm quyền), thực hiện viết 3 câu lệnh Google Dorking khác nhau để:

1. Tìm tất cả các file dạng `.pdf` đang có trên hệ thống đó.


2. Tìm xem có trang đăng nhập (`login`) nào của hệ thống hiển thị trên Google không.
3. Chụp lại màn hình kết quả và giải thích ý nghĩa của từng câu lệnh bạn đã dùng.

Chúc các bạn có một ngày thực hành thú vị và hãy luôn ghi nhớ: *Sử dụng kỹ năng này với một tinh thần trách nhiệm và đạo đức cao nhất!*