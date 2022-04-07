## CallBack trong javascript :fire:

### 1. Đặt vấn đề 
    trong trường hợp ta sẽ có các task làm việc cần thực hiện đúng trình tự  Ví dụ : Task1 -> Taks 2 -> Task 3 . Nhưng trong thực tế JS là ngôn ngữ thông dịch và không đồng bộ .
    => vấn để sinh ra ở đây , trong trường hợp task 2 làm việc hết 3s -> thì task 3 sẽ không đợi. Vậy làm sao để giải quyết vấn đề ? . 
    - Sử dụng CallBack 
    - Sử dụng Promise (ES 6)
    - Sử dụng Async/Await (ES 8)
   
### 2 . Vậy Callback là gì ? nó có thật sự giải quyết được vấn đề  ? nó hoạt động ra sao ? 
#### 2.1 Call back là gì
  Theo W3School . Callback được định nghĩa như sau: 
   - A callback is a function passed as an argument to another function

   - This technique allows a function to call another function

  - A callback function can run after another function has finished . 
:bulb: Ta có thể đơn gian nó là hàm -> nó được gọi lại trong hàm khác -> nó có thế thực thi trong khi hàm khác chạy xong 
#### 2.2 Nó hoạt động như thế nào ? 
     Nó được truyền dưới dạng đối số nên khi khi truyền vào nó sẽ không thực thi luôn => khi nào gọi mới thực thi 
#### 2.3 Vậy nó giải quyết vấn đề như thế nào ??
    Cùng đi vào ví dụ để hiểu hơn nhé. Hope You enjoy :smile: 