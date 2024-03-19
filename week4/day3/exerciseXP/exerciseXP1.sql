-- exercise1
-- q1
-- SELECT * FROM language

-- q2
-- SELECT film.title,film.description, language.name
-- FROM language
-- INNER JOIN film
-- ON film.language_id = language.language_id

-- q3
-- SELECT  language.name, film.title,film.description
-- FROM film
-- FULL OUTER JOIN language
-- ON film.language_id = language.language_id

-- q4
-- CREATE TABLE new_film(
-- 	new_film_id SERIAL PRIMARY KEY,
-- 	new_film_name varchar(50)
-- )
-- INSERT INTO new_film(new_film_name)
-- VALUES('Harry Potter'),
-- ('Idiana Jones'),
-- ('Jumper'),
-- ('Five')

-- q5
-- CREATE TABLE customer_review(
-- 	review_id SERIAL PRIMARY KEY NOT NULL ,
-- 	film_id INTEGER NOT NULL,
--    CONSTRAINT fk_film_id FOREIGN KEY (film_id)
-- 	REFERENCES new_film (new_film_id) ON DELETE CASCADE,
-- 	language_id INTEGER NOT NULL,
--   	FOREIGN KEY (language_id) REFERENCES language(language_id),
-- 	title varchar (50) ,
-- 	score INT NOT NULL,
-- 	CHECK (score BETWEEN 1 AND 10),
-- 	review_text text NOT NULL,
-- 	last_update date NOT NULL
-- )

-- q6
-- INSERT into customer_review(film_id, language_id,title,score,review_text,last_update) VALUES 
-- ((SELECT new_film_id FROM new_film where new_film_name = 'Harry Potter'),
--  (SELECT language_id FROM language where language_id= 2),
--  'title1',4,'text of the review','03/03/2024')

-- INSERT into customer_review(film_id, language_id,title,score,review_text,last_update) VALUES 
-- ((SELECT new_film_id FROM new_film where new_film_name = 'Jumper'),
--  (SELECT language_id FROM language where language_id=1),
--  'title2',2,'text of jumper','10/01/2024')

-- q7
-- DELETE FROM new_film WHERE new_film_name='Jumper'





