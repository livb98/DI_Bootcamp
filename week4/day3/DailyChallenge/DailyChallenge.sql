-- part1
-- q1
-- CREATE TABLE customer (
--   id SERIAL,
--   first_name VARCHAR(100),
--   last_name VARCHAR (100) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE customer_profile (
--   id SERIAL,
--   isLoggedIn BOOLEAN DEFAULT FALSE,
--   customer_id INTEGER NOT NULL,
--   PRIMARY KEY (id),
--   CONSTRAINT customer_id FOREIGN KEY (customer_id) REFERENCES customer (id)
-- );

-- q2
-- INSERT INTO customer (first_name,last_name)
-- VALUES ('John','Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

-- q3
-- INSERT INTO customer_profile(customer_id, isLoggedIn) VALUES
-- ((SELECT id FROM customer WHERE first_name='John'),
--  (TRUE));

-- INSERT INTO customer_profile(customer_id, isLoggedIn) VALUES
-- ((SELECT id FROM customer WHERE first_name='Jerome'),
--  (FALSE));

-- q4
-- SELECT customer.first_name
-- FROM customer
-- INNER JOIN customer_profile
-- ON customer.id=customer_profile.customer_id

-- SELECT customer.first_name
-- FROM customer
-- FULL OUTER JOIN customer_profile
-- ON customer.id=customer_profile.customer_id

-- SELECT COUNT(*)
-- FROM customer
-- FULL OUTER JOIN customer_profile
-- ON customer.id=customer_profile.customer_id
-- WHERE isLoggedIn = FALSE

-- part2
-- q1
-- CREATE TABLE book(
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR NOT NULL,
-- 	author VARCHAR NOT NULL
-- )

-- q2
-- INSERT INTO book (title,author)
-- VALUES ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird','Harper Lee')

-- q3
-- CREATE TABLE student(
-- 	student_id SERIAL PRIMARY KEY, 
-- 	name VARCHAR NOT NULL UNIQUE,
-- 	age SMALLINT
-- )

-- q4
-- INSERT INTO student (name,age)
-- VALUES ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14)

-- q5
-- CREATE TABLE library (
--  	book_fk_id INTEGER NOT NULL,
--  	student_id INTEGER NOT NULL,
-- 	borrowed_date DATE,
--   PRIMARY KEY (book_fk_id, student_id),
--   FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON UPDATE CASCADE,
--   FOREIGN KEY (student_id) REFERENCES student(student_id) ON UPDATE CASCADE
-- );

-- q6
-- INSERT into library(book_fk_id,student_fk_id,borrowed_date) VALUES 
-- ((SELECT book_id FROM book where title='Alice In Wonderland' ), 
-- (SELECT student_id FROM student where name='John'), 
-- '02/15/2022'),
-- ((SELECT book_id  FROM book where title='To kill a mockingbird' ), 
-- (SELECT student_id FROM student where name='Bob'), 
-- '03/03/2021'),
-- ((SELECT book_id  FROM book where title='Alice In Wonderland' ), 
-- (SELECT student_id FROM student where name='Lera'), 
-- '05/23/2021'),
-- ((SELECT book_id  FROM book where title='Harry Potter' ), 
-- (SELECT student_id FROM student where name='Bob'), 
-- '08/12/2021')

-- q7
-- SELECT * FROM library 

-- SELECT student.name, book.title
-- FROM library
-- INNER JOIN student
-- ON student.student_id = library.student_fk_id
-- INNER JOIN book
-- ON book.book_id = library.book_fk_id

-- SELECT AVG(student.age)
-- FROM student
-- INNER JOIN library
-- ON student.student_id = library.student_fk_id
-- INNER JOIN book
-- ON book.book_id = library.book_fk_id
-- WHERE book.title='Alice in Wonderland'

-- SELECT AVG(student.age)
-- FROM library
-- FULL OUTER JOIN student
-- ON student.student_id = library.student_fk_id
-- FULL OUTER JOIN book
-- ON book.book_id = library.book_fk_id
-- WHERE book.title='Alice In Wonderland'

-- DELETE FROM student WHERE name = 'Bob';
-- violate the parent table







