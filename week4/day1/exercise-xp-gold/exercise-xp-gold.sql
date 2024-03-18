-- SELECT first_name AS name_actor, age AS birth_date FROM actor;
-- SELECT * FROM actor

-- SELECT avg(number_oscars) AS average_number_oscars FROM actor;

-- SELECT count(first_name) AS name_actor FROM actor;

-- SELECT * FROM actor;

-- SELECT DATE_PART('YEAR', AGE(CURRENT_DATE, age)) FROM actor;
-- SELECT DISTINCT first_name FROM actor ORDER BY first_name DESC;
-- SELECT DISTINCT first_name FROM actor;

-- INSERT INTO actor (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Ross','03/01/1970', 0);

-- SELECT * FROM actor;

-- SELECT * FROM actor WHERE first_name in ('Matt','Lea','Davis');

-- SELECT * FROM actor WHERE first_name not in ('Matt','Lea','Davis');

-- SELECT * FROM actor WHERE age between '1927-01-01' and '1962-01-01';

-- SELECT first_name, last_name, sum(number_oscars) FROM actor GROUP BY first_name, last_name;








-- SELECT avg(number_oscars) AS avg_oscar FROM actor

-- SELECT DISTINCT first_name FROM actor WHERE number_oscars BETWEEN 0 AND 6

-- SELECT * FROM actor WHERE age >'1970-01-01';

-- SELECT * FROM actor WHERE first_name in ('David','Morgan','Will');



