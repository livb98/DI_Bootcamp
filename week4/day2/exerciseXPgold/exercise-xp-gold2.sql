-- exercise2

-- Update
-- q1
-- UPDATE students
-- SET birth_date='11/02/1998'
-- WHERE first_name='Lea'

-- q2
-- UPDATE students
-- SET last_name='Guez'
-- WHERE first_name='David'

-- Delete
-- q1
-- DELETE FROM students WHERE student_id=3

-- Count
-- q1
-- SELECT COUNT(*) FROM students

-- q2
-- SELECT COUNT(*) FROM students WHERE birth_date > '1/01/2000' 

-- Insert / Alter
-- q1
-- ALTER TABLE students ADD COLUMN math_grade SMALLINT;

-- q2
-- UPDATE students
-- SET math_grade=80
-- WHERE student_id=1

-- q3
-- UPDATE students
-- SET math_grade=90
-- WHERE student_id=2 or student_id=4;

-- q4
-- UPDATE students
-- SET math_grade=40
-- WHERE student_id=6;

-- q5
-- SELECT COUNT(*) FROM students WHERE math_grade>83;

-- q6
-- INSERT INTO students (last_name,first_name,birth_date,math_grade)
-- VALUES ('Simpson','Omer','10/03/1980',70)

-- SUM
-- q1
-- SELECT sum(math_grade) FROM students







