# 📝 CHECKLIST THỰC HÀNH CHIẾN THUẬT: NGÀY 5

### Đưa Lý Thuyết Ping & Nmap Vào Thực Tế Trong 24 Giờ

- **Tên cá nhân/Nhóm học:** .......................................................
- **Ngày bắt đầu thực hiện:** ....../....../2026

---

## Nhiệm vụ 1 — Xác định ranh giới mạng của bạn

| | |
| --- | --- |
| ⏱ Thời gian | **5 phút** |
| 🎯 Kết quả mong đợi | Biết chính xác địa chỉ IP của mình và dải mạng cần quét (Ví dụ dải quét: `192.168.1.0/24`). |

**Cách làm:** Mở Terminal/CMD lên.

- Hệ điều hành Linux/Mac: Gõ `ip a` hoặc `ifconfig`
- Hệ điều hành Windows: Gõ `ipconfig`
- Tìm dòng chứa địa chỉ IPv4 và Subnet Mask (Ví dụ: `192.168.1.15/24`).

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 2 — Thử nghiệm tương tác ICMP cơ bản

| | |
| --- | --- |
| ⏱ Thời gian | **5 phút** |
| 🎯 Kết quả mong đợi | Nhận đủ 4 gói tin phản hồi (`Echo Reply`). Thấy rõ chỉ số thời gian phản hồi (ms) và tỉ lệ mất gói tin (`0% packet loss`). |

**Cách làm:** Chọn một địa chỉ IP sống trong nhà (như Router mặc định `192.168.1.1`) hoặc một máy chủ Internet. Chạy lệnh:

```bash
# Trên Linux/Mac
ping -c 4 [Địa_chỉ_IP]

# Trên Windows
ping -n 4 [Địa_chỉ_IP]
```

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 3 — Săn tìm "Thiết bị ẩn mình" qua Tường lửa

| | |
| --- | --- |
| ⏱ Thời gian | **10 phút** |
| 🎯 Kết quả mong đợi | Nhận ra sự khác biệt: Lệnh Ping thông thường báo `Request timed out`, nhưng Nmap vẫn ghi nhận `Host is up` nhờ cơ chế thăm dò đa giao thức. |

**Cách làm:** Hãy chạy lệnh Ping tới một máy tính chạy Windows gần đó đang bật nhưng bật tường lửa (hoặc thử ping IP `1.1.1.1`). Quan sát dòng thông báo lỗi.

Sau đó dùng Nmap để xác minh trạng thái sống/chết bằng giao thức ARP/TCP:

```bash
sudo nmap -sn [IP_Mục_Tiêu]
```

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 4 — Quét diện rộng toàn mạng (Ping Sweep)

| | |
| --- | --- |
| ⏱ Thời gian | **15 phút** |
| 🎯 Kết quả mong đợi | Nmap xuất ra một danh sách sạch sẽ, thống kê chính xác số lượng thiết bị đang kết nối vào mạng (Ví dụ: *Nmap done: 254 IP addresses (5 hosts up)*). |

**Cách làm:** Sử dụng máy cài hệ điều hành Kali Linux hoặc máy có cài sẵn công cụ Nmap. Tiến hành quét tìm tất cả các thiết bị đang hoạt động trong mạng nội bộ gia đình:

```bash
nmap -sn [Dải_mạng_của_bạn]/24
```

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 5 — Rà soát các cổng dịch vụ (Port Scanning)

| | |
| --- | --- |
| ⏱ Thời gian | **15 phút** |
| 🎯 Kết quả mong đợi | Xuất ra bảng danh sách gồm 3 cột: `PORT`, `STATE`, `SERVICE`. Xác định được cổng nào đang mở (`open`), đóng (`closed`) hoặc bị lọc (`filtered`). |

**Cách làm:** Chọn ra một IP mục tiêu thuộc quyền sở hữu của bạn (Ví dụ: Máy ảo Lab hoặc điện thoại của bạn đã tìm thấy ở bước 4). Thực hiện quét 1.000 cổng mặc định:

```bash
nmap [IP_Mục_Tiêu]
```

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## Nhiệm vụ 6 — Vẽ sơ đồ Topo mạng trực quan

| | |
| --- | --- |
| ⏱ Thời gian | **20 phút** |
| 🎯 Kết quả mong đợi | Thiết lập được một bản đồ mạng trực quan thể hiện mối liên kết giữa Router trung tâm, máy tấn công (Kali), và các nút mạng thiết bị đích xung quanh. |

**Cách làm:**

- **Cá nhân:** Dùng giấy bút hoặc công cụ phần mềm (Draw.io / Visio) vẽ sơ đồ kết nối mạng dựa trên danh sách IP thu được.
- **Học nhóm:** Sử dụng giao diện đồ họa Zenmap (Nmap GUI), vào tab `Topology` sau khi quét dải mạng.

> Trạng thái: ☐ Chưa làm  /  ☐ Đang làm  /  ☐ Đã xong

---

## 💡 HƯỚNG DẪN DÀNH CHO NHÓM HỌC (TEAMWORK CHALLENGE)

- **Phân chia nhiệm vụ:** Đội trưởng phân công mỗi thành viên kết nối một thiết bị khác nhau vào mạng nội bộ (máy in, điện thoại, máy tính Windows, máy ảo Ubuntu...).
- **Thách thức đối kháng:**
  - *Thành viên nhóm A:* Đóng vai người phòng thủ, thử bật/tắt Tường lửa (Firewall) trên máy Windows của mình.
  - *Thành viên nhóm B:* Dùng lệnh `nmap -sn` để kiểm tra xem có phát hiện được máy của nhóm A khi họ đang bật tường lửa hay không.
- **Họp đánh giá (Debriefing):** Sau 24h, cả nhóm ngồi lại đối chiếu sơ đồ mạng tự vẽ xem có khớp với số lượng thiết bị thực tế hay không. Ai tìm ra nhiều thiết bị ẩn nhất sẽ là người chiến thắng.

---

## ⚠️ QUY TẮC AN TOÀN TRƯỚC KHI TICK (MUST-READ)

- *Chỉ tick chọn hoàn thành khi bạn thực hiện các câu lệnh trong mạng nội bộ (LAN/Home Lab) do bạn toàn quyền kiểm soát.*
- *Tuyệt đối không sử dụng dải IP mạng công cộng (Public IP) của bất kỳ tổ chức nào khi chưa có giấy phép test.*