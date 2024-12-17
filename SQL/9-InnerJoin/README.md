# Patika.dev'in SQL Derslerinin Dokuzuncu Ödevi (INNER JOIN)

## Ders
Ödev ve talimatlar: [patika.dev](https://academy.patika.dev/tr/courses/sql/Odev9)

## Senaryolar
1.  city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
2.  customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
3.  customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

## Cevaplar
1.  SELECT city, country FROM city  
    INNER JOIN country ON city.country_id = country.country_id;

2.  SELECT payment_id, first_name, last_name FROM customer  
    JOIN payment ON customer.customer_id = payment.customer_id;

3.  SELECT rental_id, first_name, last_name FROM customer  
    INNER JOIN rental ON customer.customer_id = rental.customer_id;

## Sonuç
![SQL Ödev 9](/SQL/9-InnerJoin/Odev9.jpg "SQL Ödev 9")