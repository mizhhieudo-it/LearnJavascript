### Promise là gì ? nó giả quyết được gì ? nó hoạt động như thế nào ? :fire: 
#### 1.1 Promise giải quyết vấn để gì ? 
    Quay trở lại callback khi cần làm các task vụ có trình tự ta có thể sử dụng callback . Nhưng các Task quá phức tạp rất dễ  dẫn đến tình trạng **callback hell** . Để giải quyết vấn đề này chính ta có promise 
#### 1.2 Promise hoạt động như thế nào  ? 
    Promise là một đối tượng mà contructor của nó cần truyền vào 2 tham số Resolve, Reject.
    - Resolve được lưu thành công 
    - Reject được lưu khi thất bại 
    => Dữ liệu của task sẽ được lưu vào theo kiểu 
    Reject and Resolve
#### :construction_worker: Cách sử dụng Promise
    Đối tượng promise . then() lấy dữ liệu ra .catch() lấy dữ liệu bị lỗi 