# Patika.dev'in SQL Derslerinin Beşinci Ödevi (LIMIT and OFFSET)

## Ders
Ödev ve talimatlar: [patika.dev](https://academy.patika.dev/tr/courses/sql/Odev5)

## Senaryolar
1.  film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.
2.  film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.
3.  customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.

## Çözümler
1.  SELECT * FROM film  
    WHERE title ILIKE '%n'  
    ORDER BY length DESC  
    LIMIT 5;

2.  SELECT * FROM film  
    WHERE title ILIKE '%n'  
    ORDER BY length ASC  
    OFFSET 5  
    LIMIT 5;

3.  SELECT * FROM customer  
    WHERE store_id = 1  
    ORDER BY last_name DESC  
    LIMIT 4;

## Sonuç
![SQL Ödev 5](/SQL/5-Limit&Offset/Odev5.jpg "SQL Ödev 5")