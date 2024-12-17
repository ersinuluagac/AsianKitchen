# Patika.dev'in SQL Derslerinin Dördüncü Ödevi (DISTINCT and COUNT)

## Ders
Ödev ve talimatlar: [patika.dev](https://academy.patika.dev/tr/courses/sql/Odev4)

## Senoryalar
1.  film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
2.  film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
3.  film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
4.  country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
5.  city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?

## Çözümler
1.  SELECT DISTINCT replacement_cost FROM film;

2.  SELECT COUNT (DISTINCT replacement_cost) FROM film;

3.  SELECT COUNT(*) FROM film  
    WHERE (title LIKE 'T%') AND (rating IN ('G'));

4.  SELECT COUNT (*) FROM country  
    WHERE country ILIKE '_____';

5.  SELECT COUNT (*) FROM city  
    WHERE city ILIKE '%r';

## Sonuç
![SQL Ödev 4](/SQL/4-Distinct&Count/Odev4.jpg "SQL Ödev 4")