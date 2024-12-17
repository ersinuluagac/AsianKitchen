# Patika.dev'in SQL Derslerinin On Birinci Ödevi (UNION, INTERSECT, EXCEPT)

## Ders
Ödev ve talimatlar: [patika.dev](https://academy.patika.dev/tr/courses/sql/Odev11)

## Senaryolar
1.  actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
2.  actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
3.  actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
4.  İlk 3 sorguyu tekrar eden veriler için de yapalım.

## Cevaplar
1.  (  
    SELECT first_name FROM actor  
    )  
    UNION --ALL  
    (  
    SELECT first_name FROM customer  
    );

2.  (  
    SELECT first_name FROM actor  
    )  
    INTERSECT --ALL (ALL kullanılması sonucu değiştirmez.)  
    (  
    SELECT first_name FROM customer  
    );

3.  (  
    SELECT first_name FROM actor  
    )  
    EXCEPT --ALL  
    (  
    SELECT first_name FROM customer  
    );

## Sonuç
![SQL Ödev 11](/SQL/11-Union&Intersect&Except/Odev11.jpg "SQL Ödev 11")