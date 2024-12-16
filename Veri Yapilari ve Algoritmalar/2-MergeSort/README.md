# [16, 21, 11, 8, 12, 22] -> Merge Sort

>Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

```
Adım 1              [16, 21, 11, 8, 12, 22]<br/>
Adım 2           [16, 21, 11] --- [8, 12, 22]<br/>
Adım 3      [16, 21] --- [11] --- [8] --- [12, 22]<br/>
Adım 4 [16] --- [21] --- [11] --- [8] --- [12] --- [22]<br/>
Adım 5      [16, 21] --- [11] --- [8] --- [12, 22]<br/>
Adım 6           [11, 16, 21] --- [8, 12, 22]<br/>
Adım 7              [8, 11, 12, 16, 21, 22]<br/>
```

>Big-O gösterimini yazınız.

Big-O: O(nlogn)