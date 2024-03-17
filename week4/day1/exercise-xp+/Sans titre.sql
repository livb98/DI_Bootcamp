-- CREATE TABLE students(
-- 	student_id SERIAL PRIMARY KEY,
-- 	last_name varchar(50) NOT NULL,
-- 	first_name varchar(50) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )
-- INSERT INTO students(last_name,first_name,birth_date)
-- VALUES ('Marc','Benichou','11/02/1998'),
-- ('Yoan','Cohen','12/03/2010'),
-- ('Lea','Benichou','07/27/1987'),
-- ('Amelia','Dux','04/07/1996'),
-- ('David','Grez','06/14/2003'),
-- ('Omer','Simpson','10/03/1980');

-- INSERT INTO students(last_name,first_name,birth_date)
-- VALUES ('Boughanim','Livnath','03/24/1998');

-- UPDATE students
-- SET last_name = first_name,
--     first_name = last_name;

-- UPDATE students
-- SET last_name = 'Boughanim',
--     first_name = 'Livnath'
-- WHERE student_id=7;

-- SELECT * FROM students

-- SELECT first_name,last_name FROM students

-- SELECT first_name,last_name 
-- FROM students 
-- WHERE last_name='Benichou' AND
-- first_name='Marc';

-- SELECT first_name,last_name 
-- FROM students 
-- WHERE last_name='Benichou' OR
-- first_name='Marc';

-- SELECT first_name,last_name 
-- FROM students 
-- WHERE first_name ILIKE '%a%';

-- SELECT first_name,last_name 
-- FROM students 
-- WHERE first_name ILIKE 'a%';

-- SELECT first_name,last_name 
-- FROM students 
-- WHERE substring(first_name,2,50) ILIKE '%a%';

-- SELECT first_name,last_name
-- FROM students
-- WHERE student_id=1 OR student_id=3;


SELECT * FROM students WHERE birth_date>'01/01/2000';


















