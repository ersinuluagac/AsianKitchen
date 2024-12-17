# Patika.dev'in SQL Derslerinin sekizinci Ödevi (GROUP BY and HAVING)

## Ders
Ödev ve talimatlar: [patika.dev](https://academy.patika.dev/tr/courses/sql/Odev8)

## Senaryolar
1.  test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
2.  Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
3.  Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
4.  Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

## Cevaplar
1.  CREATE TABLE employee (  
    id INTEGER,  
    name VARCHAR(50),  
    birthday DATE,  
    email VARCHAR(100)  
    );

2.  insert into employee (id, name, birthday, email) values (1, 'Chuck', '2023-06-19', 'cbootherstone0@yahoo.co.jp');  
    insert into employee (id, name, birthday, email) values (2, 'Lucienne', '2024-02-16', 'lsleany1@google.nl');  
    insert into employee (id, name, birthday, email) values (3, 'Philbert', '2023-05-26', 'pduffie2@ovh.net');  
    insert into employee (id, name, birthday, email) values (4, 'Sanford', '2024-02-07', 'smurkin3@homestead.com');  
    insert into employee (id, name, birthday, email) values (5, 'Brendin', '2023-08-01', 'bthraves4@java.com');  
    insert into employee (id, name, birthday, email) values (6, 'Yolanthe', '2023-07-02', 'ybrayn5@ca.gov');  
    insert into employee (id, name, birthday, email) values (7, 'Rudy', '2023-12-16', 'rfairlamb6@princeton.edu');  
    insert into employee (id, name, birthday, email) values (8, 'Lynea', '2023-05-18', 'lhenkens7@nationalgeographic.com');  
    insert into employee (id, name, birthday, email) values (9, 'Sayre', '2024-03-25', 'sdanieli8@taobao.com');  
    insert into employee (id, name, birthday, email) values (10, 'Izabel', '2023-07-08', 'ipoetz9@mysql.com');  
    insert into employee (id, name, birthday, email) values (11, 'Pace', '2023-06-04', 'pyesenina@archive.org');  
    insert into employee (id, name, birthday, email) values (12, 'Carling', '2023-08-20', 'csmurfitb@berkeley.edu');  
    insert into employee (id, name, birthday, email) values (13, 'Edlin', '2023-05-10', 'esturgisc@omniture.com');  
    insert into employee (id, name, birthday, email) values (14, 'Giustino', '2024-04-06', 'gelweld@globo.com');  
    insert into employee (id, name, birthday, email) values (15, 'Francklyn', '2024-02-26', 'fralestone@salon.com');  
    insert into employee (id, name, birthday, email) values (16, 'Allayne', '2024-04-28', 'aporrittf@homestead.com');  
    insert into employee (id, name, birthday, email) values (17, 'Devon', '2023-10-16', 'dhodgeng@360.cn');  
    insert into employee (id, name, birthday, email) values (18, 'Tabbie', '2023-10-25', 'tshanksh@google.com.au');  
    insert into employee (id, name, birthday, email) values (19, 'Bradan', '2023-05-11', 'bbrockwayi@imageshack.us');  
    insert into employee (id, name, birthday, email) values (20, 'Mechelle', '2024-04-24', 'mrunnaclesj@meetup.com');  
    insert into employee (id, name, birthday, email) values (21, 'Chelsy', '2023-11-08', 'ccaudelierk@hud.gov');  
    insert into employee (id, name, birthday, email) values (22, 'Raleigh', '2023-05-18', 'rgiraudeaul@tumblr.com');  
    insert into employee (id, name, birthday, email) values (23, 'Waneta', '2023-12-10', 'wgarstanm@shutterfly.com');  
    insert into employee (id, name, birthday, email) values (24, 'Silvester', '2023-08-30', 'smatyushonokn@bbb.org');  
    insert into employee (id, name, birthday, email) values (25, 'Horatius', '2023-12-05', 'hraymeno@blogspot.com');  
    insert into employee (id, name, birthday, email) values (26, 'Merralee', '2023-05-15', 'mdeemingp@newyorker.com');  
    insert into employee (id, name, birthday, email) values (27, 'Jan', '2023-11-01', 'jtotterdellq@theatlantic.com');  
    insert into employee (id, name, birthday, email) values (28, 'Charmion', '2024-03-26', 'cbrimnerr@fotki.com');  
    insert into employee (id, name, birthday, email) values (29, 'Eugene', '2023-09-23', 'eeagans@addthis.com');  
    insert into employee (id, name, birthday, email) values (30, 'Thurstan', '2023-12-29', 'temsleyt@goodreads.com');  
    insert into employee (id, name, birthday, email) values (31, 'Sorcha', '2024-03-13', 'szorzoniu@pagesperso-orange.fr');  
    insert into employee (id, name, birthday, email) values (32, 'Linell', '2024-02-15', 'lmassenhovev@fda.gov');  
    insert into employee (id, name, birthday, email) values (33, 'Jordan', '2023-07-25', 'jmarzellew@wisc.edu');  
    insert into employee (id, name, birthday, email) values (34, 'Berna', '2023-11-11', 'bgallopx@amazon.co.uk');  
    insert into employee (id, name, birthday, email) values (35, 'Kippie', '2023-06-20', 'kskirrowy@yellowpages.com');  
    insert into employee (id, name, birthday, email) values (36, 'Jermayne', '2024-03-12', 'jissacsonz@deliciousdays.com');  
    insert into employee (id, name, birthday, email) values (37, 'Augusta', '2023-05-10', 'aortmann10@sogou.com');  
    insert into employee (id, name, birthday, email) values (38, 'Francklyn', '2023-08-31', 'fatcock11@ovh.net');  
    insert into employee (id, name, birthday, email) values (39, 'Ileana', '2023-12-06', 'iharnetty12@forbes.com');  
    insert into employee (id, name, birthday, email) values (40, 'Stevie', '2023-12-13', 'sllelweln13@arstechnica.com');  
    insert into employee (id, name, birthday, email) values (41, 'Krishnah', '2023-05-20', 'kleuren14@bravesites.com');  
    insert into employee (id, name, birthday, email) values (42, 'Coraline', '2023-06-15', 'cupwood15@dell.com');  
    insert into employee (id, name, birthday, email) values (43, 'Chrysa', '2023-08-06', 'cpook16@lulu.com');  
    insert into employee (id, name, birthday, email) values (44, 'Joye', '2023-07-28', 'jhews17@ebay.co.uk');  
    insert into employee (id, name, birthday, email) values (45, 'Murial', '2023-11-22', 'mdurtnal18@cargocollective.com');  
    insert into employee (id, name, birthday, email) values (46, 'Micaela', '2023-08-07', 'martist19@ed.gov');  
    insert into employee (id, name, birthday, email) values (47, 'Lannie', '2023-10-29', 'lmaharey1a@digg.com');  
    insert into employee (id, name, birthday, email) values (48, 'Donni', '2024-02-01', 'dcurror1b@slate.com');  
    insert into employee (id, name, birthday, email) values (49, 'Shandy', '2024-02-12', 'sedmeads1c@google.ru');  
    insert into employee (id, name, birthday, email) values (50, 'Wilie', '2023-08-23', 'wbonhan1d@addthis.com');

3.  UPDATE employee  
    SET email = 'update1@upd.com'  
    WHERE name = 'Brendin';

    UPDATE employee  
    SET name = 'update2'  
    WHERE id = 9;

    UPDATE employee  
    SET birthday = '1933-12-13'  
    WHERE email = 'mrunnaclesj@meetup.com';

    UPDATE employee  
    SET name = 'update4'  
    WHERE id = 24;
    
    UPDATE employee  
    SET name = 'update5'  
    WHERE name = 'Murial';

4.  DELETE FROM employee  
    WHERE id = 2;

    DELETE FROM employee  
    WHERE name = 'Sanford';

    DELETE FROM employee  
    WHERE email = 'fralestone@salon.com';

    DELETE FROM employee  
    WHERE birthday = '2023-10-25';

    DELETE FROM employee  
    WHERE name = 'Raleigh';

## Sonuç
![SQL Ödev 8](/SQL/8-CRUD/Odev8.jpg "SQL Ödev 8")