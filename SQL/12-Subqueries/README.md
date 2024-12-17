# Patika.dev'in SQL Derslerinin On İkinci Ödevi (SUBQUERIES)

## Ders
Ödev ve talimatlar: [patika.dev](https://academy.patika.dev/tr/courses/sql/Odev12)

## Senaryolar
1.  film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
2.  film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
3.  film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
4.  payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

## Cevaplar
1.  SELECT COUNT(*) FROM film  
    WHERE length >  
    (  
        SELECT AVG(length) FROM film  
    );

2.  SELECT COUNT(*) FROM film  
    WHERE rental_rate =  
    (  
    	SELECT MAX(rental_rate) FROM film  
    );

3.  SELECT title, rental_rate, replacement_cost FROM film  
    WHERE  
        rental_rate = (SELECT MIN(rental_rate) FROM film)  
        AND  
        replacement_cost = (SELECT MIN(replacement_cost) FROM film);

4.  SELECT customer.first_name, customer.last_name, COUNT(payment.customer_id) AS shopping_amount  
    FROM customer  
    INNER JOIN payment ON customer.customer_id = payment.customer_id  
    GROUP BY customer.first_name, customer.last_name  
    ORDER BY shopping_amount DESC;

## Sonuç
![SQL Ödev 12](/SQL/12-Subqueries/Odev12.jpg "SQL Ödev 12")