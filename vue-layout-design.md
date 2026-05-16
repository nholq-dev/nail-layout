# Thiết Kế Layout Web Vue.js

## 1. Mô tả hệ thống

Hệ thống là một nền tảng quản lý và đặt lịch cho tiệm nail. Người dùng có thể truy cập hệ thống để tìm kiếm các tiệm nail ở gần vị trí của mình, xem thông tin chi tiết của từng tiệm, đặt lịch dịch vụ và xem đánh giá từ những khách hàng khác.

Ngoài trải nghiệm dành cho khách hàng, hệ thống còn có thể được bán cho các tiệm nail như một phần mềm quản lý vận hành. Chủ tiệm có thể dùng hệ thống để quản lý doanh thu, quản lý nhân viên, quản lý lịch hẹn, theo dõi dịch vụ và hỗ trợ thanh toán.

Các chức năng chính ban đầu:

Nhóm chức năng dành cho khách hàng:

- Tìm kiếm tiệm nail gần vị trí hiện tại của người dùng.
- Xem danh sách tiệm nail theo khoảng cách, đánh giá, giá dịch vụ hoặc mức độ phổ biến.
- Xem chi tiết một tiệm nail, bao gồm hình ảnh, địa chỉ, giờ mở cửa, dịch vụ, bảng giá và đánh giá.
- Đặt lịch làm nail theo dịch vụ, nhân viên, ngày và khung giờ.
- Xem đánh giá và điểm số của từng tiệm nail.

Nhóm chức năng dành cho tiệm nail:

- Quản lý thông tin tiệm, hình ảnh, địa chỉ, giờ mở cửa và chính sách đặt lịch.
- Quản lý dịch vụ, bảng giá và thời lượng thực hiện từng dịch vụ.
- Quản lý lịch hẹn của khách hàng.
- Quản lý nhân viên, ca làm việc, năng suất và lịch làm việc.
- Quản lý doanh thu theo ngày, tuần, tháng hoặc từng nhân viên.
- Hỗ trợ thanh toán, ghi nhận trạng thái thanh toán và lịch sử giao dịch.
- Xem báo cáo tổng quan về hoạt động kinh doanh của tiệm.

Nhóm chức năng dành cho admin hệ thống:

- Tạo tenant mới khi bán hệ thống cho một tiệm nail.
- Quản lý danh sách tenant đang sử dụng hệ thống.
- Cấu hình thông tin ban đầu cho tenant, bao gồm tên tiệm, chủ tiệm, gói dịch vụ và trạng thái kích hoạt.
- Tạo tài khoản chủ tiệm đầu tiên cho mỗi tenant.
- Theo dõi trạng thái hoạt động, thanh toán gói SaaS và ngày hết hạn của từng tenant.
- Tạm khóa, kích hoạt lại hoặc cấu hình lại tenant khi cần.

## 2. Mục tiêu layout

Xây dựng một layout web hiện đại bằng Vue.js cho hệ thống quản lý tiệm nail và đặt lịch dịch vụ. Layout cần hỗ trợ hai trải nghiệm chính: khách hàng tìm kiếm và đặt lịch, chủ tiệm quản lý vận hành kinh doanh. Giao diện cần rõ ràng, thuận tiện, dễ mở rộng và responsive tốt trên desktop, tablet, mobile.

## 3. Đối tượng người dùng

- Khách hàng muốn tìm tiệm nail gần mình.
- Khách hàng muốn xem dịch vụ, giá, hình ảnh và đánh giá trước khi đặt lịch.
- Khách hàng muốn đặt lịch nhanh theo ngày, giờ và dịch vụ mong muốn.
- Chủ tiệm nail cần quản lý doanh thu, dịch vụ, nhân viên, lịch hẹn và thanh toán.
- Nhân viên tiệm nail cần xem lịch làm việc, lịch hẹn được phân công và trạng thái dịch vụ.
- Quản trị viên hệ thống cần tạo tenant, quản lý tenant và theo dõi các tiệm nail đang sử dụng nền tảng theo mô hình SaaS.

## 4. Cấu trúc tổng thể

```text
App
├── AppHeader
├── AppShell
│   ├── AppSidebar
│   └── MainContent
│       ├── PageHeader
│       ├── ContentToolbar
│       └── ContentArea
└── AppFooter
```

## 5. Bố cục desktop

```text
┌─────────────────────────────────────────────────────────────┐
│ Header                                                      │
├───────────────┬─────────────────────────────────────────────┤
│ Sidebar       │ Page Header                                 │
│               ├─────────────────────────────────────────────┤
│ Navigation    │ Toolbar / Filters / Actions                 │
│               ├─────────────────────────────────────────────┤
│               │ Main Content                                │
│               │                                             │
│               │ Cards / Table / Form / Detail View          │
├───────────────┴─────────────────────────────────────────────┤
│ Footer                                                      │
└─────────────────────────────────────────────────────────────┘
```

### Kích thước gợi ý

- Chiều cao header: `64px`
- Chiều rộng sidebar: `260px`
- Chiều rộng nội dung: không giới hạn với dashboard, `1200px` với landing page hoặc content page
- Padding desktop: `24px`
- Padding mobile: `16px`
- Border radius cho card, button, input: `6px` đến `8px`

## 6. Bố cục mobile

Trên mobile, sidebar nên chuyển thành drawer hoặc bottom navigation.

```text
┌───────────────────────────────┐
│ Mobile Header                 │
├───────────────────────────────┤
│ Page Header                   │
├───────────────────────────────┤
│ Toolbar / Primary Action      │
├───────────────────────────────┤
│ Main Content                  │
│                               │
│ Stacked Cards / List / Form   │
├───────────────────────────────┤
│ Footer or Bottom Navigation   │
└───────────────────────────────┘
```

## 7. Thiết kế component

### AppHeader

Chức năng:

- Hiển thị logo hoặc tên sản phẩm.
- Có nút mở hoặc đóng sidebar trên mobile.
- Có thể có ô tìm kiếm toàn cục.
- Có khu vực user menu, thông báo và theme toggle.

Thành phần gợi ý:

- `Logo`
- `GlobalSearch`
- `NotificationButton`
- `UserMenu`
- `MobileMenuButton`

### AppSidebar

Chức năng:

- Điều hướng chính của ứng dụng.
- Hiển thị trang đang active.
- Có thể thu gọn nếu ứng dụng cần thêm không gian hiển thị.

Menu mẫu:

Menu dành cho khách hàng:

- Khám phá tiệm nail
- Lịch hẹn của tôi
- Đánh giá
- Ưu đãi
- Cài đặt tài khoản

Menu dành cho chủ tiệm:

- Tổng quan
- Lịch hẹn
- Khách hàng
- Dịch vụ
- Nhân viên
- Doanh thu
- Thanh toán
- Đánh giá
- Cài đặt tiệm

Menu dành cho admin hệ thống:

- Tổng quan hệ thống
- Tenants
- Tạo tenant
- Gói dịch vụ
- Thanh toán SaaS
- Người dùng hệ thống
- Nhật ký hoạt động
- Cấu hình hệ thống

Trạng thái:

- `expanded`
- `collapsed`
- `mobile-open`
- `mobile-closed`

### PageHeader

Chức năng:

- Hiển thị tiêu đề trang.
- Hiển thị mô tả ngắn về nội dung trang.
- Hiển thị hành động chính của trang.

Ví dụ:

```text
Title: Tìm tiệm nail gần bạn
Description: Khám phá các tiệm nail gần vị trí hiện tại, xem đánh giá và đặt lịch nhanh.
Primary action: Đặt lịch ngay
```

### ContentToolbar

Chức năng:

- Tìm kiếm trong phạm vi trang hiện tại.
- Lọc dữ liệu.
- Sắp xếp dữ liệu.
- Hỗ trợ bulk actions nếu trang có danh sách.

Thành phần gợi ý:

- Input search
- Dropdown filter
- Segmented control cho view mode: `List | Grid`
- Button action phụ

### ContentArea

Tùy mục đích trang, có thể dùng một trong các kiểu nội dung:

- Dashboard metrics
- Data table
- Card grid
- Detail panel
- Form layout
- Empty state
- Loading state
- Error state

## 8. Trạng thái UI cần có

Mỗi view quan trọng nên có các trạng thái sau:

- `loading`: đang tải dữ liệu
- `empty`: chưa có dữ liệu
- `error`: lỗi tải dữ liệu hoặc lỗi validate
- `success`: thao tác thành công
- `disabled`: không được thao tác
- `active`: item hoặc menu hiện tại

## 9. Quy tắc responsive

Breakpoint gợi ý:

```css
mobile: 0 - 639px
tablet: 640px - 1023px
desktop: 1024px+
```

Quy tắc:

- Mobile: nội dung xếp một cột, sidebar chuyển thành drawer.
- Tablet: nội dung có thể xếp hai cột nếu đủ không gian.
- Desktop: sidebar cố định, content chiếm phần còn lại.
- Toolbar trên mobile nên tự xuống dòng hoặc chuyển thành filter sheet.

## 10. Design tokens

### Spacing

```text
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
```

### Typography

```text
body: 14px / 20px
small: 12px / 16px
h1: 28px / 36px
h2: 22px / 30px
h3: 18px / 26px
```

### Màu sắc gợi ý

```text
background: #f8fafc
surface: #ffffff
border: #e2e8f0
text-primary: #0f172a
text-secondary: #475569
primary: #2563eb
primary-hover: #1d4ed8
danger: #dc2626
success: #16a34a
warning: #d97706
```

## 11. Cấu trúc file Vue gợi ý

```text
src/
├── App.vue
├── main.js
├── assets/
│   └── styles/
│       ├── base.css
│       ├── layout.css
│       └── tokens.css
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   ├── AppSidebar.vue
│   │   ├── AppFooter.vue
│   │   └── AppShell.vue
│   └── ui/
│       ├── Button.vue
│       ├── Card.vue
│       ├── Input.vue
│       └── Dropdown.vue
└── views/
    ├── HomeView.vue
    ├── SalonSearchView.vue
    ├── SalonDetailView.vue
    ├── BookingView.vue
    ├── MyAppointmentsView.vue
    ├── owner/
    │   ├── OwnerDashboardView.vue
    │   ├── OwnerAppointmentsView.vue
    │   ├── OwnerStaffView.vue
    │   ├── OwnerServicesView.vue
    │   ├── OwnerRevenueView.vue
    │   └── OwnerPaymentsView.vue
    └── admin/
        ├── AdminDashboardView.vue
        ├── AdminTenantsView.vue
        ├── AdminCreateTenantView.vue
        ├── AdminTenantDetailView.vue
        ├── AdminPlansView.vue
        ├── AdminSaasBillingView.vue
        └── AdminUsersView.vue
```

## 12. Hành vi của AppShell

State cần quản lý:

```js
const sidebarOpen = ref(false)
const sidebarCollapsed = ref(false)
```

Behavior:

- Desktop: sidebar hiển thị mặc định.
- Mobile: sidebar ẩn mặc định, mở bằng nút menu.
- Khi click overlay mobile thì đóng sidebar.
- Khi route change trên mobile thì tự động đóng sidebar.

## 13. Kiến trúc xác thực và session

Hệ thống sử dụng Clerk để quản lý đăng nhập, đăng ký, xác thực người dùng và session. Frontend Vue.js không tự quản lý mật khẩu hoặc token thủ công, mà lấy JWT từ Clerk khi cần gọi API.

### Vai trò của Clerk

- Quản lý đăng nhập và đăng ký người dùng.
- Quản lý session hiện tại của người dùng.
- Cung cấp JWT để frontend gửi lên backend.
- Hỗ trợ phân biệt người dùng đã đăng nhập và chưa đăng nhập.
- Có thể lưu metadata phục vụ phân quyền, ví dụ `role`, `tenantId`, `salonId`.

### Hàm gọi API có xác thực

Frontend nên dùng một helper chung tên `fetchAuthenticated()` để gọi API cần xác thực. Helper này có nhiệm vụ lấy JWT từ Clerk và đính kèm vào header `Authorization`.

Ví dụ ý tưởng:

```js
async function fetchAuthenticated(url, options = {}) {
  const token = await getToken()

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}
```

Ghi chú:

- `getToken()` là hàm lấy JWT từ Clerk.
- Tất cả API cần xác thực nên đi qua `fetchAuthenticated()`.
- API public như tìm kiếm tiệm nail hoặc xem chi tiết tiệm có thể dùng `fetch()` bình thường nếu không yêu cầu đăng nhập.
- Backend cần verify JWT từ Clerk trước khi xử lý các API riêng tư.

### Luồng xác thực dự kiến

```text
User đăng nhập bằng Clerk
→ Clerk tạo session
→ Frontend gọi getToken() để lấy JWT
→ Frontend gọi API qua fetchAuthenticated()
→ Backend nhận Authorization: Bearer <token>
→ Backend verify JWT với Clerk
→ Backend xác định user, role và tenant
→ Backend xử lý request theo quyền truy cập
```

### Phân quyền theo JWT

JWT hoặc metadata từ Clerk nên hỗ trợ xác định:

- Người dùng là `Customer`, `Salon Owner`, `Staff` hay `System Admin`.
- Người dùng thuộc tenant nào.
- Người dùng có quyền truy cập salon nào.
- Người dùng có được phép thực hiện hành động hiện tại hay không.

### Quy tắc sử dụng trong frontend

- Route cần đăng nhập phải kiểm tra session từ Clerk.
- Route dành cho chủ tiệm phải kiểm tra role `Salon Owner` hoặc `Staff`.
- Route dành cho admin phải kiểm tra role `System Admin`.
- Khi session hết hạn, hệ thống nên chuyển người dùng về màn hình đăng nhập.
- Khi API trả về `401`, frontend nên yêu cầu đăng nhập lại.
- Khi API trả về `403`, frontend nên hiển thị thông báo không có quyền truy cập.

## 14. Workflow phát triển với Codex

Dự án sẽ sử dụng Codex để hỗ trợ phát triển layout, component và tài liệu kỹ thuật. Vì vậy, repository nên có cấu hình và hướng dẫn rõ ràng để Codex làm việc đúng với stack, convention và workflow của dự án.

### Nguyên tắc quản lý `.codex/skills`

Chỉ giữ các skill thật sự sát với stack và workflow của hệ thống quản lý nail trong thư mục `.codex/skills`.

Không nên duy trì một bộ skill vendor hoặc community quá rộng nếu các skill đó không giúp Codex làm việc tốt hơn trong repo này. Việc giữ quá nhiều skill không liên quan có thể làm nhiễu ngữ cảnh, khiến Codex chọn sai hướng dẫn hoặc tốn thời gian đọc những workflow không cần thiết.

### Skill nên ưu tiên giữ

- Skill liên quan trực tiếp đến Vue.js layout và component.
- Skill liên quan đến design system hoặc UI convention nội bộ.
- Skill liên quan đến Clerk authentication nếu dự án có workflow riêng.
- Skill liên quan đến multi-tenant SaaS nếu có quy tắc triển khai cụ thể.
- Skill liên quan đến API client, `fetchAuthenticated()` và phân quyền frontend.
- Skill liên quan đến cách viết tài liệu, review layout hoặc kiểm thử UI trong repo.

### Skill nên tránh đưa vào repo nếu không dùng trực tiếp

- Skill vendor quá rộng nhưng không gắn với stack hiện tại.
- Skill community chỉ mang tính tham khảo chung.
- Skill cho framework hoặc ngôn ngữ không dùng trong dự án.
- Skill trùng lặp nhiệm vụ với skill nội bộ đã có.
- Skill tạo thêm convention mới nhưng không được áp dụng trong codebase.

### Tiêu chí thêm skill mới

Một skill mới chỉ nên được thêm vào `.codex/skills` khi thỏa các tiêu chí:

- Giải quyết một workflow lặp lại trong dự án.
- Có hướng dẫn cụ thể, ngắn gọn và áp dụng được ngay.
- Phù hợp với stack thực tế của hệ thống quản lý nail.
- Giúp Codex ra quyết định tốt hơn khi sửa code hoặc tạo layout.
- Không trùng lặp với skill đã tồn tại.

## 15. Accessibility checklist

- Tất cả button có label rõ ràng.
- Icon-only button cần có `aria-label`.
- Màu chữ và màu nền cần đảm bảo độ tương phản.
- Có focus state cho input, button và menu item.
- Drawer mobile có thể đóng bằng phím `Esc`.
- Navigation active nên có `aria-current="page"`.

## 16. Checklist triển khai

- [ ] Tạo Vue project.
- [ ] Thêm base CSS và design tokens.
- [ ] Tạo `AppShell.vue`.
- [ ] Tạo `AppHeader.vue`.
- [ ] Tạo `AppSidebar.vue`.
- [ ] Tạo `HomeView.vue`.
- [ ] Tạo `SalonSearchView.vue`.
- [ ] Tạo `SalonDetailView.vue`.
- [ ] Tạo `BookingView.vue`.
- [ ] Tạo `OwnerDashboardView.vue`.
- [ ] Tạo `OwnerAppointmentsView.vue`.
- [ ] Tạo `OwnerStaffView.vue`.
- [ ] Tạo `OwnerRevenueView.vue`.
- [ ] Tạo `OwnerPaymentsView.vue`.
- [ ] Tạo `AdminDashboardView.vue`.
- [ ] Tạo `AdminTenantsView.vue`.
- [ ] Tạo `AdminCreateTenantView.vue`.
- [ ] Tạo `AdminTenantDetailView.vue`.
- [ ] Tích hợp Clerk để quản lý đăng nhập và session.
- [ ] Tạo helper `fetchAuthenticated()`.
- [ ] Gắn JWT vào header `Authorization` khi gọi API cần xác thực.
- [ ] Xử lý trạng thái `401` và `403` trong frontend.
- [ ] Kiểm tra `.codex/skills` và chỉ giữ skill sát stack, workflow của hệ thống quản lý nail.
- [ ] Loại bỏ hoặc không thêm các skill vendor/community quá rộng nếu không phục vụ trực tiếp repo.
- [ ] Thêm responsive layout.
- [ ] Thêm loading, empty và error state.
- [ ] Kiểm tra trên mobile width `375px`.
- [ ] Kiểm tra trên tablet width `768px`.
- [ ] Kiểm tra trên desktop width `1440px`.

## 17. Wireframe nội dung mẫu cho trang tìm kiếm tiệm nail

```text
Page: Tìm tiệm nail

Header:
- Logo
- Search
- Notification
- User menu

Sidebar:
- Khám phá tiệm nail
- Lịch hẹn của tôi
- Đánh giá
- Ưu đãi
- Cài đặt tài khoản

Main:
- Page title: Tìm tiệm nail gần bạn
- Description: Khám phá tiệm nail gần vị trí hiện tại, xem đánh giá và đặt lịch nhanh.
- Primary action: Đặt lịch ngay

Filters:
- Vị trí hiện tại
- Khoảng cách
- Dịch vụ
- Mức giá
- Đánh giá

Main sections:
- Danh sách tiệm nail gần bạn
- Bản đồ vị trí tiệm
- Tiệm được đánh giá cao
- Ưu đãi nổi bật
```

## 18. Wireframe nội dung mẫu cho trang quản lý của chủ tiệm

```text
Page: Tổng quan tiệm nail

Header:
- Logo hệ thống
- Tìm kiếm nhanh
- Thông báo
- Tài khoản chủ tiệm

Sidebar:
- Tổng quan
- Lịch hẹn
- Khách hàng
- Dịch vụ
- Nhân viên
- Doanh thu
- Thanh toán
- Đánh giá
- Cài đặt tiệm

Main:
- Page title: Tổng quan
- Description: Theo dõi hoạt động kinh doanh, lịch hẹn và doanh thu của tiệm.
- Primary action: Tạo lịch hẹn

Metrics:
- Doanh thu hôm nay
- Số lịch hẹn hôm nay
- Lịch hẹn chờ xác nhận
- Nhân viên đang làm việc

Main sections:
- Lịch hẹn sắp tới
- Doanh thu theo ngày
- Dịch vụ bán chạy
- Hiệu suất nhân viên
- Giao dịch thanh toán gần đây
```

## 19. Các màn hình chính dự kiến

### Trang khám phá tiệm nail

Mục đích:

- Cho phép người dùng tìm kiếm tiệm nail theo vị trí.
- Hiển thị danh sách tiệm nail gần người dùng.
- Hỗ trợ lọc theo dịch vụ, khoảng cách, giá và đánh giá.

Thành phần chính:

- Ô tìm kiếm địa điểm hoặc tên tiệm.
- Nút dùng vị trí hiện tại.
- Bộ lọc dịch vụ, khoảng cách, mức giá và đánh giá.
- Danh sách salon dạng card.
- Khu vực bản đồ nếu hệ thống cần hiển thị vị trí trực quan.

### Trang chi tiết tiệm nail

Mục đích:

- Cung cấp thông tin đầy đủ về một tiệm nail.
- Giúp người dùng quyết định có đặt lịch hay không.

Thành phần chính:

- Hình ảnh tiệm nail.
- Tên tiệm, địa chỉ, khoảng cách, giờ mở cửa.
- Điểm đánh giá trung bình và số lượng đánh giá.
- Danh sách dịch vụ và bảng giá.
- Danh sách nhân viên nếu có.
- Đánh giá từ khách hàng.
- Nút đặt lịch.

### Trang đặt lịch

Mục đích:

- Cho phép người dùng chọn dịch vụ, nhân viên, ngày và khung giờ.
- Xác nhận thông tin đặt lịch.

Thành phần chính:

- Thông tin tiệm nail.
- Chọn dịch vụ.
- Chọn nhân viên hoặc chọn bất kỳ nhân viên nào.
- Chọn ngày.
- Chọn khung giờ còn trống.
- Thông tin khách hàng.
- Tổng giá dự kiến.
- Nút xác nhận đặt lịch.

### Trang lịch hẹn của tôi

Mục đích:

- Cho phép người dùng xem lại các lịch hẹn đã đặt.
- Hỗ trợ hủy hoặc đổi lịch nếu chính sách tiệm cho phép.

Thành phần chính:

- Lịch hẹn sắp tới.
- Lịch hẹn đã hoàn thành.
- Trạng thái lịch hẹn: chờ xác nhận, đã xác nhận, đã hủy, đã hoàn thành.
- Nút xem chi tiết, đổi lịch hoặc hủy lịch.

### Trang tổng quan cho chủ tiệm

Mục đích:

- Giúp chủ tiệm theo dõi nhanh tình hình hoạt động trong ngày.
- Hiển thị doanh thu, lịch hẹn, thanh toán và hiệu suất nhân viên.

Thành phần chính:

- Doanh thu hôm nay, tuần này, tháng này.
- Số lịch hẹn hôm nay.
- Số lịch hẹn chờ xác nhận.
- Danh sách lịch hẹn sắp tới.
- Biểu đồ doanh thu.
- Danh sách giao dịch thanh toán gần đây.
- Dịch vụ được đặt nhiều nhất.

### Trang quản lý doanh thu

Mục đích:

- Cho phép chủ tiệm theo dõi doanh thu theo thời gian, dịch vụ, nhân viên hoặc phương thức thanh toán.

Thành phần chính:

- Bộ lọc thời gian: hôm nay, tuần này, tháng này, tùy chỉnh.
- Tổng doanh thu.
- Doanh thu theo dịch vụ.
- Doanh thu theo nhân viên.
- Doanh thu theo phương thức thanh toán.
- Danh sách giao dịch.
- Export báo cáo nếu cần.

### Trang quản lý nhân viên

Mục đích:

- Cho phép chủ tiệm quản lý hồ sơ nhân viên, lịch làm việc và hiệu suất.

Thành phần chính:

- Danh sách nhân viên.
- Thông tin liên hệ và vai trò.
- Trạng thái làm việc.
- Lịch làm việc.
- Số lượng lịch hẹn đã thực hiện.
- Doanh thu tạo ra theo từng nhân viên.
- Nút thêm, sửa, tạm ngưng nhân viên.

### Trang quản lý thanh toán

Mục đích:

- Theo dõi trạng thái thanh toán của từng lịch hẹn và lịch sử giao dịch.
- Hỗ trợ các phương thức thanh toán phù hợp với tiệm nail.

Thành phần chính:

- Danh sách giao dịch.
- Trạng thái thanh toán: chờ thanh toán, đã thanh toán, hoàn tiền, thất bại.
- Phương thức thanh toán: tiền mặt, thẻ, ví điện tử hoặc cổng thanh toán online.
- Tổng tiền dịch vụ.
- Tiền tip nếu có.
- Mã giao dịch.
- Biên lai hoặc hóa đơn.

### Trang quản lý dịch vụ

Mục đích:

- Cho phép chủ tiệm cấu hình danh sách dịch vụ, giá và thời lượng.

Thành phần chính:

- Danh sách dịch vụ.
- Tên dịch vụ.
- Mô tả dịch vụ.
- Giá dịch vụ.
- Thời lượng thực hiện.
- Trạng thái hiển thị.
- Nút thêm, sửa, ẩn hoặc xóa dịch vụ.

### Trang tổng quan admin hệ thống

Mục đích:

- Giúp admin theo dõi tình hình hoạt động của toàn bộ nền tảng.
- Hiển thị số lượng tenant, tenant đang hoạt động, tenant sắp hết hạn và doanh thu SaaS.

Thành phần chính:

- Tổng số tenant.
- Tenant đang hoạt động.
- Tenant đang bị tạm khóa.
- Tenant sắp hết hạn gói dịch vụ.
- Doanh thu SaaS theo tháng.
- Danh sách tenant mới tạo gần đây.
- Cảnh báo tenant cần xử lý.

### Trang danh sách tenant

Mục đích:

- Cho phép admin xem và quản lý toàn bộ tiệm nail đang sử dụng hệ thống.

Thành phần chính:

- Bảng danh sách tenant.
- Tên tenant hoặc tên tiệm nail.
- Chủ tiệm.
- Email hoặc số điện thoại liên hệ.
- Gói dịch vụ đang sử dụng.
- Trạng thái: đang hoạt động, chờ kích hoạt, tạm khóa, hết hạn.
- Ngày tạo.
- Ngày hết hạn gói.
- Hành động: xem chi tiết, chỉnh sửa, tạm khóa, kích hoạt lại.

### Trang tạo tenant

Mục đích:

- Cho phép admin tạo tenant mới khi bán hệ thống cho một tiệm nail.
- Thiết lập dữ liệu ban đầu để chủ tiệm có thể đăng nhập và bắt đầu cấu hình tiệm.

Thành phần chính:

- Tên tenant.
- Tên tiệm nail.
- Slug hoặc mã định danh tenant.
- Thông tin chủ tiệm: họ tên, email, số điện thoại.
- Tài khoản đăng nhập ban đầu cho chủ tiệm.
- Gói dịch vụ SaaS.
- Ngày bắt đầu sử dụng.
- Ngày hết hạn hoặc chu kỳ thanh toán.
- Trạng thái tenant: chờ kích hoạt hoặc kích hoạt ngay.
- Ghi chú nội bộ cho admin.
- Nút tạo tenant.

Luồng xử lý chính:

```text
Admin nhập thông tin tenant
→ Hệ thống kiểm tra slug hoặc mã tenant đã tồn tại chưa
→ Hệ thống tạo tenant
→ Hệ thống tạo tài khoản Salon Owner đầu tiên
→ Hệ thống gán gói dịch vụ cho tenant
→ Hệ thống gửi thông tin kích hoạt hoặc email mời chủ tiệm
```

### Trang chi tiết tenant

Mục đích:

- Cho phép admin xem toàn bộ thông tin của một tenant.
- Hỗ trợ cấu hình, theo dõi và xử lý vấn đề cho từng tiệm nail.

Thành phần chính:

- Thông tin tenant.
- Thông tin chủ tiệm.
- Gói dịch vụ hiện tại.
- Trạng thái hoạt động.
- Ngày tạo và ngày hết hạn.
- Số lượng nhân viên.
- Số lượng lịch hẹn.
- Trạng thái thanh toán SaaS.
- Nhật ký hoạt động gần đây.
- Hành động quản trị: cập nhật gói, gia hạn, tạm khóa, kích hoạt lại.

## 20. Mô hình phân quyền dự kiến

```text
Guest:
- Tìm kiếm tiệm nail
- Xem chi tiết tiệm
- Xem đánh giá

Customer:
- Đặt lịch
- Quản lý lịch hẹn cá nhân
- Viết đánh giá

Salon Owner:
- Quản lý thông tin tiệm
- Quản lý dịch vụ
- Quản lý nhân viên
- Quản lý lịch hẹn
- Quản lý doanh thu
- Quản lý thanh toán

Staff:
- Xem lịch làm việc
- Xem lịch hẹn được phân công
- Cập nhật trạng thái dịch vụ

System Admin:
- Tạo tenant cho tiệm nail mới
- Quản lý các tenant trên nền tảng
- Tạo tài khoản chủ tiệm ban đầu
- Quản lý gói dịch vụ SaaS
- Quản lý thanh toán SaaS
- Theo dõi hoạt động toàn hệ thống
```

## 21. Tiêu chí hoàn thành

Layout được xem là hoàn thành khi:

- Desktop có header, sidebar và main content rõ ràng.
- Mobile không bị tràn ngang.
- Các nút và input có spacing nhất quán.
- Navigation active dễ nhận biết.
- Nội dung chính có loading, empty và error state.
- Code component tách rõ layout và UI controls.
- Có layout riêng hoặc trạng thái điều hướng rõ ràng cho khách hàng và chủ tiệm.
- Chủ tiệm có thể xem được doanh thu, nhân viên, lịch hẹn và thanh toán ở cấp layout thiết kế.
- Admin có thể tạo tenant mới và quản lý danh sách tenant ở cấp layout thiết kế.
- Tài liệu mô tả rõ Clerk dùng để quản lý session và JWT.
- Frontend có định hướng sử dụng `fetchAuthenticated()` cho các API cần xác thực.
- Workflow Codex có nguyên tắc rõ ràng cho việc duy trì `.codex/skills`.
- Repository không duy trì bộ skill vendor/community quá rộng nếu không giúp ích trực tiếp cho hệ thống quản lý nail.
