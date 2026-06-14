Chào các em, chào mừng các em đã đi được gần nửa chặng đường của lộ trình chinh phục CEH!

Hôm nay, chúng ta sẽ cùng nhau bước vào **Ngày 13: Leo thang đặc quyền & Chiếm quyền kiểm soát**. Đây là một trong những nội dung "kịch tính" nhất trong chuỗi bài học về *System Hacking*. Hãy pha một tách cà phê, chuẩn bị sổ tay và chúng ta cùng bắt đầu nhé!

---

## Mở đầu: Câu chuyện từ chiếc chìa khóa của bác lao công

Hãy tưởng tượng một ngày đẹp trời, kẻ trộm lừa được một nhân viên bảo vệ hoặc một bác lao công để lấy bản sao chiếc chìa khóa cổng phụ của một ngân hàng lớn. Kẻ trộm lách được vào bên trong tòa nhà. Nhưng liệu mục tiêu của hắn có dừng lại ở cái sảnh hay phòng chứa chổi không? Chắc chắn là không. Mục tiêu của hắn là phòng giám đốc, là kho lưu trữ hồ sơ mật, hoặc tối thượng nhất là phòng hầm chứa két sắt cốt lõi.

Trong thế giới an ninh mạng cũng vậy. Khi một Hacker (hoặc một Ethical Hacker là chúng ta) chiếm được quyền truy cập ban đầu vào hệ thống thông qua một lỗ hổng ứng dụng web hay một tài khoản nhân viên bị lộ mật khẩu, tài khoản đó thường chỉ là tài khoản quyền thấp (Low-privileged user). Bạn không thể cài phần mềm, không thể đọc file cấu hình của hệ thống, không thể xóa log. Bạn bị "giam" trong một chiếc hộp chật hẹp. Để làm chủ hoàn toàn hệ thống, bạn buộc phải thực hiện một kỹ thuật gọi là **Privilege Escalation** — **Leo thang đặc quyền**.

---

## 1. Kiến thức cốt lõi: Leo thang đặc quyền là gì?

Nói một cách đơn giản, leo thang đặc quyền là hành vi lợi dụng các lỗi cấu hình, lỗ hổng bảo mật hoặc lỗi thiết kế trong hệ điều hành/ứng dụng để biến một tài khoản từ **"dân thường"** thành **"vua"** (Admin trên Windows hoặc Root/System trên Linux).

Theo tài liệu CEH v11, chúng ta phân chia kỹ thuật này thành hai hướng đi chính:

### 1.1. Leo thang đặc quyền hàng ngang (Horizontal Privilege Escalation)

* **Khái niệm:** Là việc một người dùng chiếm quyền truy cập vào tài nguyên hoặc chức năng của một người dùng khác có **cùng mức độ đặc quyền** với mình.
* **Ví dụ thực tế:** Bạn là nhân viên A trong phòng Kế toán, bạn tìm cách truy cập vào máy tính hoặc tài khoản của nhân viên B cũng ở phòng Kế toán để xem bảng lương của họ.
* **Minh họa đời sống:** Bạn dùng chìa khóa phòng trọ số 101 của mình nhưng loay hoay thế nào lại mở được cửa phòng trọ số 102 của người hàng xóm bên cạnh (do chủ nhà lắp nhầm ổ khóa cùng loại). Bạn không trở thành chủ nhà trọ, nhưng bạn xem được đồ đạc của phòng bên cạnh.

### 1.2. Leo thang đặc quyền hàng dọc (Vertical Privilege Escalation)

* **Khái niệm:** Là việc một người dùng có quyền hạn thấp tìm cách chiếm đoạt quyền hạn của người dùng có **mức đặc quyền cao hơn** (Manager, Administrator, Root). Đây chính là trọng tâm của các cuộc tấn công System Hacking.
* **Ví dụ thực tế:** Bạn là một nhân viên thực tập, nhưng bạn khai thác được lỗ hổng phần mềm trên máy chủ để biến tài khoản của mình có toàn quyền chỉnh sửa, xóa bỏ toàn bộ cơ sở dữ liệu của công ty.
* **Minh họa đời sống:** Bạn là một vị khách vào xem phim, nhưng bạn phát hiện ra cửa thoát hiểm phòng điều khiển máy chiếu không khóa. Bạn lẻn vào, ngồi lên ghế của kỹ thuật viên trưởng và nắm quyền tắt/mở phim của cả rạp.

### 1.3. Cơ chế cốt lõi để Leo thang đặc quyền

Làm sao một tài khoản thường lại có thể "hóa rồng"? Kẻ tấn công thường dựa vào 3 yếu tố:

* **Lỗ hổng hạt nhân (Kernel Vulnerabilities):** Hệ điều hành (Windows/Linux) luôn có những lỗi chưa được vá trong lõi hệ thống. Khi chạy một mã khai thác (Exploit) tác động vào Kernel, hệ thống sẽ bị đánh lừa và cấp quyền cao nhất cho tiến trình đó.
* **Sai cấu hình hệ thống (Misconfiguration):** Đây là lỗi do con người. Ví dụ: Cấp quyền cho một file thực thi của hệ thống quá lỏng lẻo (ai cũng có quyền sửa đổi), hoặc lưu mật khẩu của tài khoản Admin dưới dạng văn bản thuần (Clear-text) trong các file cấu hình bị bỏ quên.
* **Ứng dụng chạy với quyền cao (Privileged Processes):** Một phần mềm bên thứ ba (như phần mềm diệt virus, dịch vụ sao lưu dữ liệu) được chạy dưới quyền `SYSTEM` hoặc `root`, nhưng bản thân phần mềm đó lại dính lỗi (như Buffer Overflow - Tràn bộ đệm). Kẻ tấn công sẽ tấn công phần mềm này để mượn tay nó thực thi lệnh với quyền cao nhất.

---

## 2. Phân tích sâu: Ba góc nhìn về Leo thang đặc quyền

Để trở thành một chuyên gia an ninh mạng giỏi, chúng ta không thể chỉ nhìn vấn đề một chiều. Hãy cùng phân tích hiện tượng "Leo thang đặc quyền" dưới 3 góc nhìn khác nhau:

### Góc nhìn 1: Từ phía Kẻ tấn công (Attacker) – "Sự kiên nhẫn và tính logic"

Đối với một hacker, leo thang đặc quyền không phải là một cú "click chuột ăn ngay". Đó là một quá trình trinh sát nội bộ (Local Reconnaissance) cực kỳ tỉ mỉ. Khi vừa vào được hệ thống, hacker sẽ tự hỏi: *Tôi là ai? (Whoami), Tôi đang ở hệ điều hành phiên bản nào? (Uname -a hoặc systeminfo), Có dịch vụ nào đang chạy nội bộ mà bên ngoài không thấy không?* Hacker xem hệ thống như một mê cung gồm nhiều mảng ghép lỗi. Họ tìm kiếm từ những chi tiết nhỏ nhất như một file backup quên xóa, một tiến trình chạy ngầm cũ kỹ, cho đến một bản vá Windows (Hotfix) bị thiếu. Kẻ tấn công chỉ cần tìm ra **một** sơ hở duy nhất để chiến thắng.

### Góc nhìn 2: Từ phía Người quản trị (Administrator) – "Nguyên tắc đặc quyền tối thiểu"

Dưới góc nhìn phòng thủ, leo thang đặc quyền là hậu quả của việc "lười biếng" hoặc "thiếu quy trình" trong quản trị. Người quản trị thường có xu hướng cấp quyền rộng rãi cho nhân viên hoặc cho các phần mềm để "chạy cho mượt, đỡ bị lỗi chặn quyền". Chính tư duy này đã mở đường cho hacker.
Để chặn đứng leo thang đặc quyền, người quản trị phải áp dụng triệt để nguyên tắc **Least Privilege (Đặc quyền tối thiểu)**: Một người hoặc một ứng dụng chỉ được cấp đúng và đủ quyền để hoàn thành công việc của họ, không hơn không kém. Nếu một nhân viên chỉ cần gõ văn bản, họ tuyệt đối không được có quyền cài đặt phần mềm hay chỉnh sửa Registry.

### Góc nhìn 3: Từ phía Nhà phát triển hệ điều hành (OS Developer) – "Ranh giới an toàn (Trust Boundary)"

Các kỹ sư phát triển Windows hay Linux thiết kế hệ điều hành dựa trên các "Ranh giới tin cậy". Họ phân chia thế giới thành User Mode (chế độ người dùng - nơi ứng dụng chạy công khai) và Kernel Mode (chế độ hạt nhân - nơi kiểm soát phần cứng và bảo mật).
Leo thang đặc quyền thực chất là hành vi **phá vỡ ranh giới tin cậy** này. Khi một lỗ hổng leo thang đặc quyền xuất hiện (ví dụ lỗi hoành tráng như *Dirty COW* trên Linux hay *PrintNightmare* trên Windows), điều đó có nghĩa là bức tường ngăn cách giữa User Mode và Kernel Mode đã bị thủng một lỗ.

---

## 3. Cách áp dụng vào thực tế: Kịch bản chiếm quyền tối cao (Root/System)

Để các em dễ hình dung, tôi sẽ mô phỏng lại một kịch bản thực tế phổ biến khi chúng ta làm bài kiểm tra đánh giá an ninh mạng (Penetration Testing). Hãy xem cách một Ethical Hacker đi từ tài khoản thường lên quyền `root` trên một máy chủ Linux.

```
[Tài khoản thường: www-data] ---> [Khai thác cấu hình sai SUID] ---> [Tài khoản tối cao: root]

```

### Bước 1: Thu thập thông tin nội bộ (Local Enumeration)

Sau khi khai thác thành công một lỗ hổng trên website (ví dụ: lỗi File Upload), ta có được một Reverse Shell (đường kết nối ngược về máy ta) với quyền của tài khoản `www-data` (đây là tài khoản mặc định của dịch vụ Web Apache trên Linux, quyền cực kỳ thấp).

Ta gõ lệnh:

```bash
whoami
# Kết quả trả về: www-data (Quyền thấp)

uname -a
# Kiểm tra phiên bản Kernel xem có lỗi cũ nào chưa vá không.

```

### Bước 2: Săn tìm "Chìa khóa vàng" - Tính năng SUID

Trong Linux, có một tính năng rất đặc biệt tên là **SUID (Set User ID)**. Nếu một file thực thi được bật tính năng này, khi bất kỳ ai chạy nó, nó sẽ được thực thi với quyền của **chủ sở hữu file** (thường là `root`), chứ không phải quyền của người đang gõ lệnh.

Ta dùng lệnh sau để tìm tất cả các file có quyền SUID trên hệ thống:

```bash
find / -perm -4000 -type f 2>/dev/null

```

*Giải thích lệnh: Tìm từ thư mục gốc (`/`), các file có quyền (`-perm`) SUID (`-4000`), định dạng là file (`-type f`), và đẩy các thông báo lỗi vào sọt rác (`2>/dev/null`).*

### Bước 3: Phát hiện điểm yếu cấu hình sai

Trong danh sách kết quả trả về, ta phát hiện ra trình biên dịch văn bản `NANO` được bật quyền SUID và chủ sở hữu là `root`.

> **Phân tích lỗi:** Đây là một sai lầm chết người của người quản trị! Trình chỉnh sửa văn bản cho phép đọc và sửa file. Nếu nó chạy với quyền `root`, người dùng thường có thể dùng nó để sửa bất kỳ file hệ thống nào.

### Bước 4: Thực hiện đòn bẩy chiếm quyền (The Escalation)

Bây giờ, với trình `nano` chạy quyền `root`, ta có thể làm gì? Ta sẽ sửa file `/etc/passwd` hoặc `/etc/shadow` để tự tạo ra một người dùng mới có quyền `root`, hoặc đơn giản là đọc nội dung file chứa mật khẩu băm của hệ thống.

Hoặc tinh vi hơn, ta tận dụng chính tính năng của `nano` để gọi ra một lớp vỏ lệnh (Shell) mới ngay bên trong nó. Vì `nano` đang chạy với quyền `root`, lớp vỏ lệnh mới sinh ra cũng sẽ thừa hưởng quyền `root`.

Khi mở `nano`, ta thực hiện tổ hợp phím để thực thi lệnh hệ thống (trong cấu hình của Nano):

```bash
# Kết quả sau khi gọi Shell từ Nano:
whoami
# Kết quả trả về: root

```

Chúc mừng! Bạn đã từ một tài khoản "vô danh tiểu tốt" trở thành "chúa tể" của hệ thống máy chủ đó. Bạn đã chiếm quyền kiểm soát hoàn toàn (Full System Control).

---

## 4. Lưu ý quan trọng: Những sai lầm thường gặp cần tránh

Trong quá trình học tập và làm việc thực tế, rất nhiều bạn (kể cả các bạn đã đi làm) vẫn mắc phải các sai lầm nghiêm trọng sau đây khi đối mặt với việc Leo thang đặc quyền:

| Sai lầm thường gặp | Hậu quả | Giải pháp đúng đắn |
| --- | --- | --- |
| **Lạm dụng Script quét tự động (như LinPeas, WinPeas) một cách mù quáng** | Chạy Script tự động sinh ra hàng nghìn dòng log, làm sập các dịch vụ nhạy cảm của khách hàng hoặc bị hệ thống IDS/Firewall phát hiện và chặn ngay lập tức. | Hiểu rõ từng câu lệnh trong Script. Sử dụng phương pháp thủ công trước để rà soát, chỉ dùng công cụ tự động khi được phép và trong môi trường lab an toàn. |
| **Cài đặt bừa bãi mã khai thác Kernel (Kernel Exploits) tải từ Internet** | Mã khai thác lỗi Kernel (như các file đuôi `.c` hoặc `.py`) rất dễ gây ra lỗi màn hình xanh (BSOD) trên Windows hoặc hiện hiện tượng Kernel Panic trên Linux, làm treo cứng máy chủ doanh nghiệp. | Kiểm tra kỹ phiên bản hệ điều hành. Chỉ chạy mã khai thác Kernel khi không còn con đường nào khác (như lỗi cấu hình) và phải thử nghiệm trước trên môi trường Lab có phiên bản tương đương. |
| **Quên dọn dẹp "rác" sau khi leo thang đặc quyền thành công** | Để lại các tài khoản phụ (Backdoor) vừa tạo, các file thực thi độc hại trên thư mục `/tmp` hoặc `C:\Users\Public`, tạo điều kiện cho hacker thật lợi dụng hoặc làm lộ lỗ hổng của khách hàng. | Ghi chép lại toàn bộ những gì mình đã thay đổi (thêm file nào, sửa file nào). Sau khi kết thúc quá trình Pen-test, phải thực hiện xóa sạch và khôi phục lại trạng thái ban đầu của hệ thống. |
| **Bỏ qua việc phân tích quyền hạn của các dịch vụ bên thứ ba** | Quá tập trung vào việc tìm lỗi của chính hệ điều hành Windows/Linux mà quên mất rằng các phần mềm như Jenkins, Tomcat, TeamViewer... cài thêm trên máy mới là những nơi dễ bị cấu hình sai nhất. | Thực hiện kiểm tra toàn diện (Enum) danh sách phần mềm bên thứ ba đang chạy. Kiểm tra xem các thư mục cài đặt của chúng có cho phép người dùng thường ghi đè file (`Writable folders`) hay không. |

---

## Tóm tắt bài học hôm nay

Hôm nay chúng ta đã làm rõ:

1. **Leo thang đặc quyền** là bước bắt buộc để biến quyền truy cập hạn chế ban đầu thành quyền kiểm soát toàn diện.
2. Phân biệt rõ **Hàng ngang** (chiếm quyền người cùng cấp) và **Hàng dọc** (chiếm quyền cấp cao hơn).
3. Nắm được tư duy săn tìm lỗi cấu hình (như SUID trên Linux hay Unquoted Service Path trên Windows) thay vì chỉ chăm chăm phụ thuộc vào các mã khai thác Kernel nguy hiểm.
4. Luôn ghi nhớ **Nguyên tắc đặc quyền tối thiểu** khi thiết lập hệ thống phòng thủ.

Bài học Ngày 13 đến đây là kết thúc. Ở Ngày 14 tiếp theo, chúng ta sẽ học cách sau khi đã lên được quyền tối cao rồi, làm sao để giấu các file quan trọng và "bốc hơi" không để lại dấu vết (Clearing Logs) trước sự truy vết của các chuyên gia điều tra số.

Chúc các em học tốt và hẹn gặp lại các em vào bài học ngày mai!