-- 1.
SELECT city,COUNT(city) FROM city_info GROUP BY city ;
-- 2.
SELECT AVG(dust) AS average_dust FROM city_info WHERE event_datetime BETWEEN '2015-03-01' AND '2015-03-05' AND city='Boston';
-- 3.
SELECT city, COUNT(city) FROM city_info WHERE city='San Francisco' GROUP BY city;
-- 4.
SELECT EXTRACT(HOUR FROM event_datetime) AS hour,city FROM city_info WHERE sound= (SELECT MAX(sound) FROM city_info);