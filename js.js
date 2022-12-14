
    var flag = true;

    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    // Kiểm tra biến flag
    if (flag == true){
        alert(n + " là số nguyên tố <br/>");
    }
    else{
        alert(n + " không phải là số nguyên tố <br/>");
    }
3
//nhập số từ bàn phím
    a(prompt("Nhập số a vào:"));
    b(prompt("Nhập số b vào:"));
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
