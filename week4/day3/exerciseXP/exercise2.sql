-- exercise2
-- q1
-- UPDATE film
-- SET language_id = 5
-- WHERE title = 'Zorro Ark'

-- UPDATE film
-- SET language_id = 3
-- WHERE title = 'Academy Dinosaur'

-- UPDATE film
-- SET language_id = 4
-- WHERE title = 'Bed Highball'

-- q2
-- customer_address

-- q3
-- DROP TABLE customer_review
-- it was easy

-- q4
-- SELECT COUNT(*) FROM rental WHERE return_date IS NULL

-- q5
-- SELECT film.title, inventory.film_id, payment.amount, rental.return_date
-- FROM film
-- INNER JOIN inventory
-- ON film.film_id=inventory.film_id
-- INNER JOIN rental
-- ON inventory.inventory_id=rental.inventory_id
-- INNER JOIN payment
-- ON payment.rental_id=rental.rental_id
-- WHERE rental.return_date IS NULL
-- ORDER BY amount DESC LIMIT 30



-- q6
-- q6/1
-- SELECT film.title, film.description, actor.first_name, actor.last_name
-- FROM film
-- INNER JOIN film_actor
-- ON film.film_id=film_actor.film_id
-- INNER JOIN actor
-- ON film_actor.actor_id = actor.actor_id
-- WHERE film.description ILIKE '%sumo%' AND actor.first_name ='Penelope' AND actor.last_name='Monroe'

-- q6/2
-- SELECT title FROM film WHERE description ILIKE '%documentary%' AND length<60 AND rating='R'

-- q6/3
-- SELECT film.title
-- FROM film
-- INNER JOIN inventory
-- ON film.film_id=inventory.film_id
-- INNER JOIN rental
-- ON inventory.inventory_id=rental.inventory_id
-- INNER JOIN payment
-- ON payment.rental_id=rental.rental_id
-- INNER JOIN customer
-- ON rental.customer_id=customer.customer_id
-- WHERE customer.first_name='Matthew' AND customer.last_name='Mahan'
-- AND payment.amount>4
-- AND rental.return_date BETWEEN '08/28/2005' and '09/01/2005'

-- q6/4
-- SELECT film.title, film.replacement_cost
-- FROM film
-- INNER JOIN inventory
-- ON film.film_id=inventory.film_id
-- INNER JOIN rental
-- ON inventory.inventory_id=rental.inventory_id
-- INNER JOIN customer
-- ON rental.customer_id=customer.customer_id
-- WHERE customer.first_name='Matthew' AND customer.last_name='Mahan'
-- AND film.description ILIKE '%boat%' OR film.title ILIKE '%boat%'
-- ORDER BY replacement_cost DESC LIMIT 1









