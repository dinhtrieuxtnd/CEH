# BÀI GIẢNG CHI TIẾT – NGÀY 12: "BẺ KHÓA" MẬT KHẨU VÀ CƠ CHẾ BẢO VỆ HỆ THỐNG

Chào các bạn! Chào mừng các bạn đến với ngày thứ 12 trong lộ trình chinh phục chứng chỉ Hacker mũ trắng CEH v11.

Chúng ta đã đi được gần nửa chặng đường, từ việc trinh sát, quét cổng, thu thập thông tin cho đến phân tích lỗ hổng. Hôm nay, chúng ta sẽ bước vào một trong những module "kinh điển" và kích thích nhất của System Hacking: **Tấn công và bảo vệ mật khẩu**.

---

## 1. MỞ ĐẦU: CÂU CHUYỆN KHÓA CỬA VÀ CHIẾC CHÌA VẠN NĂNG

Hãy tưởng tượng bạn là một chủ doanh nghiệp. Để bảo vệ phòng chứa tài liệu mật, bạn lắp một chiếc ổ khóa cơ cực kỳ đắt tiền. Bạn tự tin rằng không ai có thể cậy phá nó. Thế nhưng, một ngày nọ, kẻ trộm không thèm bẻ khóa. Hắn mang đến một bao tải chứa... 10.000 chiếc chìa khóa khác nhau thu thập được từ khắp nơi, rồi kiên trì đứng thử từng chiếc một vào ổ khóa của bạn. Đến chiếc thứ 5.432 thì *tạch* – cửa mở.

Trong thế giới số, điều này xảy ra hàng giây. Kẻ tấn công thường không hack vào thuật toán mã hóa của hệ thống (vì nó quá mạnh), mà chúng hack vào chính **sự lười biếng hoặc chủ quan của con người** khi đặt mật khẩu. Hôm nay, chúng ta sẽ cùng nhau lột trần chiếc mặt nạ của các kỹ thuật bẻ khóa và học cách xây dựng một hệ thống phòng thủ kiên cố nhất.

---

## 2. KIẾN THỨC CỐT LÕI: TỪ MÃ BĂM ĐẾN CÁC KIỂU TẤN CÔNG

Để hiểu cách hacker "bẻ" mật khẩu, trước hết chúng ta phải hiểu cách máy tính lưu trữ mật khẩu. Hệ điều hành thông minh hơn chúng ta nghĩ: **Chúng không bao giờ lưu mật khẩu dưới dạng văn bản rõ (Plaintext).**

### 2.1. Cơ chế lưu băm mật khẩu (Password Hashing) là gì?

Khi bạn tạo mật khẩu, hệ thống sẽ chạy mật khẩu đó qua một hàm toán học gọi là **Hàm băm (Hash Function)** để biến nó thành một chuỗi ký tự kỳ dị, có độ dài cố định, gọi là **Mã băm (Hash)**.

> **Ví dụ thực tế:** > Mật khẩu của bạn là: `AnhYeuEm123`
> Sau khi qua hàm băm MD5, nó biến thành: `607590b5b1574971df05a0d33e72152a`

Khi bạn đăng nhập, hệ thống chỉ cần băm cái chữ bạn vừa nhập vào rồi so sánh hai chuỗi băm với nhau. Nếu trùng khớp, bạn được vào. Bản chất của hàm băm là **mã hóa một chiều** – nghĩa là từ chuỗi băm, bạn không thể dùng toán học để "dịch ngược" lại thành chữ `AnhYeuEm123`.

Vậy các hệ điều hành phổ biến lưu các mã băm này ở đâu?

* **Trên Windows (SAM Database):** Windows lưu mã băm mật khẩu của người dùng trong một file có tên là **SAM (Security Accounts Manager)** nằm tại đường dẫn `C:\Windows\System32\config\SAM`. Khi máy tính đang chạy, file này bị khóa chặt bởi hệ điều hành, không ai có thể copy hay mở ra đọc trực tiếp được. Windows thường dùng cơ chế băm **NTLM** (hoặc Kerberos trong môi trường domain).
* **Trên Linux (Shadow File):** Linux tiến bộ hơn. Ngày xưa nó lưu ở file `/etc/passwd` (ai cũng đọc được), nhưng giờ đây mật khẩu đã được chuyển sang file `/etc/shadow` – file này chỉ có tài khoản tối cao (`root`) mới có quyền mở. Linux thường dùng các hàm băm mạnh mẽ như **SHA-512** hoặc **bcrypt**.

---

### 2.2. Ba kiểu tấn công mật khẩu kinh điển

Hacker không thể dịch ngược mã băm, vậy chúng làm thế nào? Chúng dùng phương pháp **Thử và Sai (Trial and Error)** trên quy mô lớn bằng máy tính. Có 3 kiểu tấn công chính:

```
[Mật khẩu mục tiêu] <--- Thử từng ký tự một (Brute-Force)
                     <--- Thử theo danh sách từ ngữ (Dictionary)
                     <--- Tra cứu bảng mã băm sẵn (Rainbow Table)

```

#### A. Tấn công vét cạn (Brute-Force Attack)

Đây là kiểu tấn công "cơ bắp" nhất. Phần mềm hack sẽ tự động tạo ra tất cả các tổ hợp ký tự có thể có và thử lần lượt.

* *Cách thức:* Thử `a`, `b`, `c`... rồi đến `aa`, `ab`, `ac`... rồi `aaaaaa1`, `aaaaaa2`...
* *Ví dụ đời thực:* Bạn quên mật mã vali gồm 3 chữ số, bạn ngồi xoay từ `000`, `001`, `002` cho đến `999`.
* *Ưu điểm:* Chắc chắn 100% sẽ tìm ra nếu có đủ thời gian.
* *Nhược điểm:* Nếu mật khẩu dài (ví dụ trên 12 ký tự gồm cả chữ hoa, chữ thường, số, ký tự đặc biệt), thời gian tính toán có thể lên tới **hàng trăm năm**.

#### B. Tấn công từ điển (Dictionary Attack)

Kẻ tấn công không thử mò mẫm vô định nữa. Chúng tận dụng một thực tế: Con người thường đặt mật khẩu là các từ có nghĩa, tên riêng, ngày sinh hoặc những cụm từ phổ biến.

* *Cách thức:* Hacker nạp vào phần mềm một file văn bản chứa hàng triệu mật khẩu thông dụng (gọi là Wordlist hoặc Dictionary, ví dụ file `rockyou.txt` nổi tiếng chứa hơn 14 triệu mật khẩu lộ lọt). Phần mềm sẽ băm từng từ trong file này rồi so sánh với mã băm mục tiêu.
* *Ví dụ đời thực:* Bạn đoán mật khẩu két sắt của bạn thân dựa trên ngày sinh của người yêu nó, tên con chó nó nuôi, hoặc từ `123456`.
* *Ưu điểm:* Tốc độ cực nhanh. Giải quyết được phần lớn các tài khoản của người dùng phổ thông trong vài giây.
* *Nhược điểm:* Hoàn toàn bất lực nếu người dùng đặt mật khẩu ngẫu nhiên kiểu `gH$7mK!pQ`.

#### C. Tấn công bằng bảng cầu vồng (Rainbow Table Attack)

Đây là sự kết hợp đỉnh cao giữa toán học và lưu trữ dữ liệu để tối ưu hóa tốc độ.

* *Cách thức:* Nếu dùng tấn công từ điển, mỗi lần hack một mục tiêu mới, máy tính lại phải tốn công ngồi băm lại từ đầu cả triệu từ ngữ $\rightarrow$ Rất tốn CPU. Kẻ tấn công khôn ngoan hơn: Họ bỏ thời gian băm sẵn hàng tỷ tỷ từ ngữ trước, lưu kết quả thành một cơ sở dữ liệu khổng lồ (gọi là Rainbow Table). Khi đi hack, họ chỉ cần mang bảng này ra và **tra cứu (Look-up)**: Chuỗi băm này tương ứng với chữ gì?
* *Ví dụ đời thực:* Cuốn từ điển tra cứu ngược. Bạn cầm một chuỗi ký tự kỳ dị, lật đúng trang trong sách là ra ngay từ gốc.
* *Ưu điểm:* Bẻ khóa nhanh như chớp (vài miligiây) vì chỉ là thao tác tìm kiếm dữ liệu có sẵn.
* *Nhược điểm:* Các file Rainbow Table cực kỳ nặng (có thể lên tới hàng Terabyte) và hoàn toàn bị vô hiệu hóa bởi kỹ thuật **Salting** (Thêm muối - chúng ta sẽ học ở phần sau).

---

## 3. PHÂN TÍCH SÂU: GÓC NHÌN ĐA CHIỀU VỀ BẺ KHÓA MẬT KHẨU

Để trở thành một chuyên gia an ninh mạng giỏi, bạn không thể nhìn vấn đề một cách phiến diện. Hãy cùng mổ xẻ bài toán mật khẩu dưới 3 lăng kính khác nhau:

### Góc nhìn thứ nhất: Kẻ tấn công (Hacker) – "Tối ưu hóa tài nguyên"

Đối với hacker, thời gian là tiền bạc. Chúng hiếm khi chạy Brute-force trực tiếp lên một hệ thống đang online (như trang đăng nhập Facebook) vì sẽ bị khóa tài khoản sau 5 lần nhập sai.
Do đó, chiến lược của chúng luôn là:

1. Tấn công vào máy chủ để **trộm file chứa mã băm (SAM hoặc Shadow)** về máy của mình (gọi là Tấn công ngoại tuyến - Offline Attack).
2. Khi đã có mã băm trên máy cục bộ, chúng có thể thử hàng tỷ lần một giây mà không sợ ai phát hiện hay khóa tài khoản. Chúng sẽ ưu tiên dùng *Dictionary Attack* trước, sau đó là *Rainbow Table*, và cuối cùng khi bất lực mới dùng *Brute-Force* có giới hạn.

### Góc nhìn thứ hai: Nhà phát triển hệ thống (Developer) – "Trận chiến thuật toán"

Người làm hệ thống luôn phải đau đầu tìm cách làm chậm tốc độ của hacker. Nếu hàm băm MD5 quá nhanh (máy tính có thể tính được hàng tỷ băm mỗi giây), Developer phải đổi sang các thuật toán "cố tình làm cho chậm và tốn tài nguyên" như **Argon2** hoặc **bcrypt**.
Ngoài ra, họ sử dụng tuyệt chiêu **Salting (Thêm muối)**. Trước khi băm mật khẩu, hệ thống sẽ tự động thêm một chuỗi ký tự ngẫu nhiên vào mật khẩu đó.

> `Mật khẩu gốc: 123456` + `Muối: @xYz9!` $\rightarrow$ `Chuỗi đem băm: 123456@xYz9!`

Vì "muối" của mỗi người dùng là ngẫu nhiên và khác nhau, nên dù hai người có đặt mật khẩu giống hệt nhau thì mã băm lưu trong database cũng hoàn toàn khác nhau. Điều này khiến toàn bộ các bảng *Rainbow Table* tiền tỷ của hacker trở thành đống rác phế liệu!

### Góc nhìn thứ ba: Người dùng cuối (User) – "Sự tiện dụng vs. Tính an toàn"

Đây là điểm gãy lớn nhất của an ninh thông tin. Người dùng ghét những gì phức tạp. Bắt họ nhớ một mật khẩu kiểu `M#p9$kL@zQ` cho 20 dịch vụ khác nhau là một cực hình. Kết quả là họ sẽ viết nó ra giấy dán dưới bàn phím, hoặc dùng chung một mật khẩu dễ nhớ cho tất cả mọi nơi (Email, Ngân hàng, Facebook, Shopee). Hacker chỉ cần hack được một trang web yếu kém là sẽ có chìa khóa mở tất cả các tài khoản còn lại của nạn nhân (kỹ thuật **Credential Stuffing**).

---

## 4. CÁCH ÁP DỤNG VÀO THỰC TẾ (STEP-BY-STEP)

Sau đây là hướng dẫn từng bước giúp doanh nghiệp nhỏ hoặc chính gia đình bạn thiết lập một hệ thống quản lý và cấu hình chính sách mật khẩu mạnh mẽ để chống lại các đợt tấn công trên.

### Bước 1: Triển khai chính sách mật khẩu nghiêm ngặt (Password Policy)

Nếu bạn là Admin hệ thống Windows Server (Active Directory) hoặc quản trị máy bộ bộ, hãy cấu hình Local Security Policy (`secpol.msc`) theo các tiêu chuẩn sau:

| Tiêu chuẩn cấu hình | Giá trị khuyến nghị | Mục đích phòng thủ |
| --- | --- | --- |
| **Độ dài tối thiểu** (Minimum password length) | **Từ 12 ký tự trở lên** | Vô hiệu hóa hoàn toàn khả năng Brute-force thông thường. |
| **Độ phức tạp** (Password must meet complexity requirements) | **Bật (Enabled)** | Bắt buộc phải có: Chữ hoa (A-Z), chữ thường (a-z), số (0-9) và ký tự đặc biệt (`!@#$%...`). |
| **Thời hạn mật khẩu** (Maximum password age) | **90 ngày** | Buộc người dùng thay đổi định kỳ để giảm thiểu rủi ro nếu mật khẩu đã bị lộ ngầm trước đó. |
| **Lịch sử mật khẩu** (Enforce password history) | **Nhớ 5 lần gần nhất** | Ngăn người dùng đổi qua đổi lại giữa 2 mật khẩu quen thuộc. |

---

### Bước 2: Kích hoạt cơ chế chống Vét cạn (Account Lockout Policy)

Để chặn đứng các công cụ bẻ khóa online tự động (như Hydra hay Medusa), bạn phải cấu hình chính sách khóa tài khoản:

* **Account lockout threshold (Ngưỡng khóa):** Đặt là `5` lần. Nếu nhập sai quá 5 lần, tài khoản tự động bị khóa.
* **Account lockout duration (Thời gian khóa):** Đặt là `15 hoặc 30 phút`. Kẻ tấn công không thể đứng đợi 30 phút chỉ để thử thêm 5 mật khẩu tiếp theo được.

---

### Bước 3: Đào tạo người dùng sử dụng Mật khẩu cụm từ (Passphrase) và Trình quản lý mật khẩu

Hãy hướng dẫn nhân viên từ bỏ tư duy đặt "mật khẩu ký tự" khó nhớ và chuyển sang **Passphrase (Cụm mật khẩu)**.

* Thay vì đặt: `P@ssw0rd1!` (Rất dễ bị dò ra bằng từ điển).
* Hãy đặt thành một câu thơ hoặc câu nói có dấu cách/ký tự đặc biệt: `ToiYeuHaNoi!VaoMuaThu` (Chuỗi này dài tới 21 ký tự, cực kỳ an toàn nhưng lại rất dễ nhớ đối với người Việt).

Đồng thời, khuyến khích sử dụng các công cụ quản lý mật khẩu uy tín (Password Manager) như 1Password, Bitwarden để sinh mật khẩu ngẫu nhiên cho từng dịch vụ.

---

### Bước 4: Lá chắn tối thượng – Xác thực 2 yếu tố (2FA / MFA)

Dù mật khẩu có bị bẻ khóa thành công, hacker vẫn sẽ bị chặn lại ở lớp cửa thứ hai. Hãy bắt buộc kích hoạt MFA (qua Google Authenticator, Microsoft Authenticator hoặc khóa bảo mật vật lý Yubikey) trên toàn bộ các tài khoản trọng yếu như Email doanh nghiệp, VPN, và tài khoản quản trị hệ thống.

---

## 5. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

Trong quá trình làm việc thực tế, rất nhiều quản trị viên hệ thống và người dùng mắc phải các sai lầm chí mạng sau:

> ❌ **Sai lầm 1: Nghĩ rằng thay đổi ký tự kiểu "Leetspeak" là an toàn.**
> *Thực tế:* Thay vì viết `password`, người dùng đổi thành `P@ssw0rd` (thay `a` bằng `@`, `o` bằng `0`). Họ nghĩ thế là thông minh. Nhưng các công cụ hack ngày nay như *Hashcat* hay *John the Ripper* đều có sẵn các bộ quy tắc (Rules) tự động chuyển đổi ký tự thông minh này. Nó sẽ bẻ gãy mật khẩu dạng này trong vòng một nốt nhạc!

> ❌ **Sai lầm 2: Chỉ đổi mật khẩu trên ứng dụng mà quên kiểm tra các tài khoản dịch vụ (Service Accounts).**
> *Thực tế:* Các doanh nghiệp thường chạy các dịch vụ ngầm (như sao lưu dữ liệu, kết nối database). Các tài khoản dịch vụ này thường được cấp quyền quản trị cao nhưng lại ít khi được đổi mật khẩu vì sợ... lỗi hệ thống. Hacker rất thích tìm kiếm các tài khoản dịch vụ bị lãng quên này để khai thác.

> ❌ **Sai lầm 3: Không mã hóa file Backup chứa Database.**
> *Thực tế:* Hệ thống chính chạy rất bảo mật, file SAM được khóa kỹ. Nhưng nhân viên IT lại vô tình backup toàn bộ hệ thống ra một ổ cứng di động hoặc một thư mục chia sẻ trên mạng mà không đặt mật khẩu bảo vệ. Hacker chỉ cần lấy trộm file backup đó mang về nhà tha hồ bẻ khóa offline.

---

## TỔNG KẾT BÀI HỌC (MILESTONE NGÀY 12)

Hôm nay, chúng ta đã cùng nhau làm sáng tỏ "hộp đen" của quá trình tấn công mật khẩu. Các bạn cần nhớ nằm lòng:

* Hệ thống không lưu mật khẩu, hệ thống lưu **Mã băm (Hash)** nằm trong **SAM** (Windows) hoặc **Shadow** (Linux).
* 3 cách bẻ khóa: **Brute-Force** (Vét cạn mọi khả năng), **Dictionary** (Dùng danh sách có sẵn) và **Rainbow Table** (Tra cứu bảng băm sẵn).
* Vũ khí tối thượng của người phòng thủ: **Độ dài mật khẩu (Passphrase) + Salting + Chính sách khóa tài khoản + MFA.**

Chúc các bạn học tốt và hẹn gặp lại các bạn ở bài giảng **Ngày 13: Leo thang đặc quyền** – Nơi chúng ta sẽ học cách biến một tài khoản khách thông thường thành bá chủ hệ thống sau khi đã bẻ khóa thành công!