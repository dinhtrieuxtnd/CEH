## CHÀO MỪNG CÁC EM ĐẾN VỚI NGÀY 2: "SĂN TIN" CHỦ ĐỘNG & BỊ ĐỘNG

Hãy tưởng tượng các em là một thám tử tư được thuê để điều tra về một tập đoàn lớn, hoặc đơn giản hơn là một người đang chuẩn bị đi phỏng vấn xin việc. Các em có lao ngay vào văn phòng của họ, lục lọi giấy tờ trên bàn làm việc của Giám đốc không? Chắc chắn là không, vì làm vậy các em sẽ bị bảo vệ tóm cổ ngay lập tức!

Thay vào đó, các em sẽ lên Google tra cứu lịch sử công ty, lướt trang cá nhân của ban lãnh đạo, hoặc đóng vai khách hàng đến ngồi ở quán cà phê đối diện để quan sát giờ giấc ra vào.

Trong thế giới An ninh mạng cũng vậy. Trước khi tung ra bất kỳ một lệnh tấn công hay quét hệ thống nào, một Hacker (dù là mũ đen hay mũ trắng) đều phải trải qua một bước cực kỳ quan trọng: **Thu thập thông tin** — hay trong thuật ngữ chuyên môn của CEH gọi là **Footprinting**. Hôm nay, chúng ta sẽ cùng nhau học cách "săn tin" sao cho hiệu quả và đặc biệt là làm thế nào để "ẩn mình" hoàn hảo nhất.

---

## 1. KIẾN THỨC CỐT LÕI: FOOTPRINTING LÀ GÌ?

### Khái niệm Footprinting

**Footprinting** (Dấu chân số / Thu thập thông tin nền tảng) là giai đoạn đầu tiên và là nền móng của mọi cuộc kiểm thử xâm nhập (Penetration Testing) hoặc tấn công mạng. Đây là quá trình thu thập tối đa thông tin có thể về hệ thống mạng, máy chủ, con người và tổ chức của mục tiêu. Mục tiêu lớn nhất của bước này là tạo ra một **Hồ sơ mục tiêu (Target Profile)** càng chi tiết càng tốt.

> **Ví dụ thực tế:** Footprinting giống như việc một kiến trúc sư đi khảo sát thực địa trước khi sửa nhà. Họ cần biết ngôi nhà có bao nhiêu cửa, hệ thống điện đi đường nào, tường dày bao nhiêu, và chủ nhà thường có nhà vào giờ nào.

---

### Phân loại: Footprinting Bị Động vs. Chủ Động

Để thu thập thông tin, chúng ta có hai trường phái tiếp cận chính: **Bị động (Passive)** và **Chủ động (Active)**. Ranh giới giữa hai phương pháp này nằm ở việc **em có tương tác trực tiếp với thiết bị của mục tiêu hay không**.

```
                   [ GIAI ĐOẠN FOOTPRINTING ]
                               |
        +----------------------+----------------------+
        |                                             |
[ BỊ ĐỘNG (Passive) ]                      [ CHỦ ĐỘNG (Active) ]
  - Không chạm vào mục tiêu                  - Tương tác với mục tiêu
  - Thu thập qua bên thứ ba                  - Gửi gói tin thăm dò
  - An toàn 100% (Không thính chấn)         - Nguy cơ bị IDS/Firewall phát hiện

```

#### A. Footprinting Bị Động (Passive Footprinting)

* **Định nghĩa:** Là việc thu thập thông tin mà **không thực hiện bất kỳ tương tác trực tiếp nào** với hệ thống, máy chủ hay hạ tầng của mục tiêu. Các em hoàn toàn đóng vai một "khán giả vô hình".


* **Cơ chế:** Chúng ta thu thập thông tin dựa trên các nguồn công khai, các bộ máy tìm kiếm (Google, Bing), các trang mạng xã hội (LinkedIn, Facebook), hoặc các bên thứ ba lưu trữ dữ liệu (như cơ sở dữ liệu đăng ký tên miền Whois).


* **Ưu điểm:** An toàn tuyệt đối. Hệ thống phòng thủ của mục tiêu (như Tường lửa - Firewall hay Hệ thống phát hiện xâm nhập - IDS) hoàn toàn không biết sự tồn tại của các em, vì các em đâu có chạm vào họ!
* **Ví dụ công việc:** Các em muốn tìm hiểu công ty X đang dùng công nghệ gì. Thay vì hack vào mạng của họ, các em lên LinkedIn, tìm kiếm tài khoản của các kỹ sư IT đang làm việc tại công ty X và đọc mô tả công việc của họ (ví dụ: *"Kinh nghiệm 3 năm quản trị hệ thống Windows Server 2019, cấu hình Cisco Router"*). Thế là các em đã biết rõ công ty họ dùng hệ điều hành và thiết bị gì rồi!

#### B. Footprinting Chủ Động (Active Footprinting)

* **Định nghĩa:** Là việc thu thập thông tin bằng cách **tương tác trực tiếp** với hệ thống của mục tiêu.


* **Cơ chế:** Các em sẽ gửi các gói tin kỹ thuật (như ICMP, TCP, UDP) đến máy chủ của mục tiêu và phân tích phản hồi trả về để đoán định cấu hình.
* **Nhược điểm:** Dễ để lại dấu vết. Nếu hệ thống của mục tiêu có trang bị các lớp bảo mật mạnh, hành vi của các em sẽ bị ghi lại vào file nhật ký hệ thống (Log) hoặc kích hoạt cảnh báo nguy hiểm.
* **Ví dụ công việc:** Các em thực hiện lệnh `ping` hoặc gửi một yêu cầu truy cập đến máy chủ Web của họ để xem máy chủ đó phản hồi lại tên phần mềm là gì (ví dụ trả về thông tin: `http-server-header: Microsoft-HTTPAPI/2.8`). Lúc này, IP của các em đã xuất hiện trong hệ thống của họ.

---

### Các mục tiêu cốt lõi khi trinh sát

Khi tiến hành Footprinting, một Hacker cần phải tìm kiếm chính xác các nhóm thông tin sau đây để phục vụ cho các bước tấn công tiếp theo:

| Nhóm thông tin | Nội dung chi tiết cần thu thập |
| --- | --- |
| **Thông tin mạng (Network)** | Dải địa chỉ IP (IP Range), Tên miền (Domain name), Bản ghi DNS, Sơ đồ định tuyến mạng.

 |
| **Thông tin hệ thống (System)** | Tên hệ điều hành (Windows, Linux), Các cổng đang mở (Open Ports), Các dịch vụ đang chạy và phiên bản của chúng. |
| **Thông tin tổ chức (Organization)** | Địa chỉ trụ sở, số điện thoại, cơ cấu phòng ban, danh sách email nhân viên, các tài liệu nội bộ vô tình bị rò rỉ trên mạng.

 |

---

## 2. PHÂN TÍCH SÂU: GÓC NHÌN ĐA CHIỀU VỀ FOOTPRINTING

Để hiểu sâu sắc về bài học hôm nay, chúng ta hãy cùng phân tích nó dưới 3 lăng kính khác nhau:

### Góc nhìn của Hacker Mũ Đen (Kẻ tấn công)

Đối với tội phạm mạng, Footprinting chiếm tới **70% - 80% thời gian** của cả chiến dịch tấn công. Kẻ tấn công hiểu rằng: *"Nếu đổ mồ hôi trên sàn trinh sát, sẽ ít tốn máu trên chiến trường"*. Càng tìm được nhiều thông tin, chúng càng có nhiều "vũ khí".

* Ví dụ: Nếu Footprinting bị động phát hiện ra email của Giám đốc tài chính và biết được công ty vừa ký hợp đồng với đối tác A, kẻ tấn công có thể lập tức dựng một kịch bản lừa đảo giả mạo (Phishing) cực kỳ tinh vi để chiếm đoạt tài sản.

### Góc nhìn của Kỹ sư An ninh mạng / Hacker Mũ Trắng (Người phòng thủ)

Ở vị trí người bảo vệ, chúng ta thực hiện Footprinting trên chính hệ thống của công ty mình để làm gì? Đó là để **xác định "Bề mặt tấn công" (Attack Surface)**. Chúng ta cần biết thế giới bên ngoài đang nhìn thấy gì về công ty mình. Nếu chúng ta (bằng cách bị động) tìm thấy một tài liệu mật của công ty nằm chình ình trên Google, hoặc thấy một cổng dịch vụ cũ kỹ từ 10 năm trước vẫn đang mở công khai, chúng ta phải lập tức vá nó lại trước khi mũ đen tìm ra.

### Góc nhìn Pháp lý và Đạo đức

Footprinting Bị Động hoàn toàn **hợp pháp** vì các em chỉ sử dụng dữ liệu công khai. Tuy nhiên, Footprinting Chủ Động bắt đầu bước vào **vùng xám**. Việc các em liên tục gửi gói tin thăm dò vào một hệ thống mà không được sự cho phép của chủ sở hữu có thể bị coi là hành vi quét trái phép, phá hoại hoặc thăm dò bất hợp pháp tùy theo luật an ninh mạng của từng quốc gia. Do đó, nguyên tắc tối thượng của Mũ Trắng là: *Chỉ thực hiện chủ động khi có sự đồng ý bằng văn bản (Pentest Contract)*.

---

## 3. CÁCH ÁP DỤNG VÀO THỰC TẾ: QUY TRÌNH THIẾT LẬP HỒ SƠ MỤC TIÊU CƠ BẢN

Sau đây là hướng dẫn từng bước giúp các em thiết lập một hồ sơ mục tiêu ban đầu theo đúng chuẩn CEH mà vẫn đảm bảo tính an toàn (ẩn mình hoàn hảo).

### Bước 1: Xác định mục tiêu và thu thập thông tin công ty (Bị động)

* **Hành động:** Sử dụng các mạng xã hội việc làm như LinkedIn hoặc các trang tuyển dụng (VietnamWorks, TopCV...).
* **Cách làm:** Tìm kiếm tên công ty mục tiêu. Đọc kỹ các bài đăng tuyển dụng vị trí "Kỹ sư hệ thống" hoặc "Chuyên viên bảo mật".
* **Mục đích:** Các bài tuyển dụng thường ghi rất rõ: *"Yêu cầu kinh nghiệm cấu hình Firewall Fortinet, quản trị AWS Cloud..."*. Chúc mừng các em, các em đã nắm được 50% kiến trúc hạ tầng của họ mà không tốn một giọt mồi hôi.

### Bước 2: Khai thác thông tin từ các bộ máy tìm kiếm nâng cao (Bị động)

* **Hành động:** Sử dụng các công cụ lưu trữ lịch sử Internet như **Wayback Machine** (archive.org).
* **Cách làm:** Nhập tên miền của công ty vào trang web này để xem lại giao diện và các tài liệu họ từng đăng tải trong quá khứ (có thể phiên bản web cũ từ 5 năm trước có chứa các file danh sách nhân viên hoặc số điện thoại nội bộ đã bị xóa ở bản web hiện tại).

### Bước 3: Thu thập thông tin đăng ký tên miền và hạ tầng mạng (Bị động)

* **Hành động:** Sử dụng các trang web tra cứu Whois công khai (như `whois.domaintools.com` hoặc `whois.inet.vn`).
* **Cách làm:** Nhập tên miền của mục tiêu để xem thông tin người đăng ký, số điện thoại, email của người quản trị tên miền, và dải IP mà DNS Server của họ đang trỏ về.

### Bước 4: Tổng hợp và đóng gói thành "Hồ sơ mục tiêu"

* Tạo một file báo cáo (Excel hoặc Mindmap) ghi rõ:
* Tên miền chính, các tên miền phụ (Subdomain).
* Dải IP công khai sở hữu.
* Danh sách email nhân viên thu thập được.
* Công nghệ, thiết bị, hệ điều hành dự đoán.



---

## 4. LƯU Ý QUAN TRỌNG: NHỮNG SAI LẦM THƯỜNG GẶP CẦN TRÁNH

Trong quá trình làm Footprinting, các học viên mới thường rất dễ mắc phải các sai lầm kinh điển sau:

> ❌ **Sai lầm 1: Nhầm lẫn giữa Quét hệ thống (Scanning) và Thu thập thông tin (Footprinting).**
> * *Thực tế:* Nhiều bạn vừa nhận đề bài lập tức mở ngay công cụ Nmap để quét cổng (Port Scanning). Đây là hành vi Footprinting Chủ Động cực kỳ lộ liễu. Hãy luôn nhớ quy tắc: **Bị động trước, Chủ động sau**. Phải tận dụng hết các nguồn tin ẩn mình trước khi quyết định "chạm" vào mục tiêu.
> 
> 
> 
> 

> ❌ **Sai lầm 2: Sử dụng IP cá nhân (IP nhà riêng) để thực hiện trinh sát chủ động.**
> * *Thực tế:* Khi các em gửi gói tin trực tiếp đến máy chủ mục tiêu, IP của các em sẽ bị ghi lại. Nếu hệ thống mục tiêu bật tính năng chặn tự động, IP của các em sẽ bị đưa vào danh sách đen (Blacklist). Khi làm thực tế, các chuyên gia luôn sử dụng mạng VPN, Proxy hoặc các máy chủ trung gian (VPS) để che giấu danh tính.
> 
> 

> ❌ **Sai lầm 3: Thu thập thông tin tràn lan, không có mục đích.**
> * *Thực tế:* Các em dễ bị sa đà vào việc đọc tất cả các bài viết trên mạng của mục tiêu mà quên mất mục tiêu cốt lõi: Chúng ta cần tìm **Lối vào** (IP, Cổng, Lỗ hổng) chứ không phải đi đọc tin tức giải trí của doanh nghiệp. Hãy bám sát bảng "Mục tiêu cốt lõi" ở phần 1.
> 
> 

---

## BÀI TẬP TỰ RÈN LUYỆN (MILESTONE NGÀY 2)  

Để hoàn thành mục tiêu ngày hôm nay, thầy có một thử thách nhỏ dành cho các em:

1. Hãy chọn một trang web bất kỳ (khuyến khích các trang web tin tức hoặc trang web giả lập thực hành).
2. Hãy đóng vai một Hacker Mũ Trắng, sử dụng **100% phương pháp Footprinting Bị Động** để tìm ra: Tên công ty quản lý, Email của người quản trị hệ thống, và dải IP máy chủ của họ.


3. Ghi lại kết quả vào một bản báo cáo ngắn gọn.

Bài học Ngày 2 của chúng ta đến đây là kết thúc. Các em hãy nắm thật chắc lý thuyết về Săn tin chủ động và bị động nhé, bởi vì ngày mai — **Ngày 3**, chúng ta sẽ cùng nhau học một "tuyệt chiêu" cực kỳ lợi hại để hiện thực hóa kỹ năng bị động này: **Tuyệt chiêu Google Hacking (Google Dorking)**.

Chúc các em học tốt và hẹn gặp lại các em vào ngày mai!