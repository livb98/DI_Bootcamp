-- 1
-- SELECT * FROM customer

-- 2
-- SELECT CONCAT(first_name ,' ', last_name)  AS full_name FROM customer 

--3
-- SELECT DISTINCT create_date FROM customer

-- 4
-- SELECT * FROM customer ORDER BY first_name DESC

-- 5
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

-- 6 
-- SELECT address, phone FROM address WHERE district='Texas'

-- 7
-- SELECT * FROM film WHERE film_id = 15 or film_id=150

--8
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Harry Potter'

-- 9
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'ha%'

-- 10
-- SELECT title AS cheapest_film,rental_rate  FROM film ORDER BY rental_rate ASC LIMIT 10

-- 12
-- SELECT payment.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment
-- ON customer.customer_id = payment.customer_id
-- ORDER BY payment.customer_id ASC

-- 13
--  SELECT film_id,title FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory)

-- 14
-- SELECT country.country, city.city
-- FROM country
-- INNER JOIN city
-- ON country.country_id=city.country_id
-- ORDER BY country.country ASC











