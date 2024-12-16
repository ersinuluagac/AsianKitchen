# [22, 27, 16, 2, 18, 6] -> Insertion Sort

> Yukarı verilen dizinin insertion sort türüne göre aşamalarını yazınız.
Adım 0 - [22, 27, 16, 2, 18, 6] Başlangıç  
Adım 1 - [22, 27, 16, 2, 18, 6] İkinci sayı kontrol edilir ve 27, 22'den büyük olduğu için bu ikisi sıralanmış sayılır.  
Adım 2 - [16, 22, 27, 2, 18, 6] 22 ve 27 zaten sıralı olduğu için atlanır ve 16 kontrol edilir ve 22'nin önüne geçirilir.  
Adım 3 - [2, 16, 22, 27, 18, 6] Sıradaki sayı olan 2 kontrol edilir ve 16'nın önüne geçirilir.  
Adım 4 - [2, 16, 18, 22, 27, 6] Sıradaki sayı olan 18 kontrol edilir ve 22'nin önüne 16'nın arkasına geçirilir.  
Adım 5 - [2, 6, 16, 18, 22, 22] Son sayı olan 6 kontrol edilir ve 16'nın önüne 2'nin arkasına geçirilir.

> Big-O gösterimini yazınız.
Big-O gösterimi:  
n + (n - 1) + (n - 2) + ... + 1  
n.(n+1)/2 = n^2 + n / 2  
domine eden değer n^2 olduğu için  
Big-O: O(n^2)'dir.

> Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız
>
> Average case: Aradığımız sayının ortada olması
>
> Worst case: Aradığımız sayının sonda olması
>
> Best case: Aradığımız sayının dizinin en başında olması.

18 sayısı average case (ortalama durum) kapsamına girer çünkü sayı tam ortada olmasa da sonda veya başta da değildir.

# [7, 3, 5, 8, 2, 9, 4, 15, 6] -> Selection Sort

> Yukarıdaki dizinin selection sort'a göre ilk 4 adımını yazınız.
Adım 0 - [7, 3, 5, 8, 2, 9, 4, 15, 6] Başlangıç  
Adım 1 - [2, 3, 5, 8, 7, 9, 4, 15, 6] En küçük sayı (2) bulundu ve ilk sıra ile yer değiştirildi.  
Adım 2 - [2, 3, 5, 8, 7, 9, 4, 15, 6] İlk sıra hariç en küçük sayı (3) bulundu ve ikinci sırada olduğu için yerinde bırakıldı.  
Adım 3 - [2, 3, 4, 8, 7, 9, 5, 15, 6] İlk iki sıra hariç en küçük sayı (4) bulunda ve üçüncü sıra ile yer değiştirildi.  
Adım 4 - [2, 3, 4, 5, 7, 9, 8, 15, 6] İlk üç sıra hariç en küçük sayı (5) bulundu ve dördüncü sıra ile yer değiştirildi.  