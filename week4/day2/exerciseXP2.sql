-- SELECT * FROM customer

-- SELECT CONCAT(first_name ,' ', last_name)  AS full_name FROM customer 

-- SELECT DISTINCT create_date FROM customer

-- SELECT * FROM customer ORDER BY first_name DESC

-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

-- SELECT address, phone FROM address WHERE district='Texas'

-- SELECT * FROM film WHERE film_id = 15 or film_id=150

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Harry Potter'

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'ha%'

-- SELECT title AS cheapest_film,rental_rate  FROM film ORDER BY rental_rate ASC LIMIT 10

-- SELECT payment.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment
-- ON customer.customer_id = payment.customer_id
-- ORDER BY payment.customer_id ASC

-- SELECT film.title, inventory.film_id, film.film_id
-- FROM film 
-- RIGHT OUTER JOIN inventory
-- ON film.film_id!=inventory.film_id

-- SELECT country.country, city.city
-- FROM country
-- INNER JOIN city
-- ON country.country_id=city.country_id













