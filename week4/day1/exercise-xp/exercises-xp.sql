-- CREATE TABLE items(
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_type varchar(50) NOT NULL,
-- 	item_price money NOT NULL
-- 	)

-- CREATE TABLE customers(
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name varchar(50) NOT NULL,
-- 	last_name varchar(50) NOT NULL
-- )

-- INSERT INTO items(item_type,item_price)
-- VALUES ('Small Desk',100),
-- ('Large Desk',300),
-- ('Fan',80);

-- INSERT INTO customers(first_name,last_name)
-- VALUES ('Greg','Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie', 'Johnson');

-- ALTER TABLE items
-- ALTER COLUMN item_price SET DATA TYPE decimal;


-- SELECT * FROM customers;

-- SELECT * FROM items WHERE item_price>80;

-- SELECT * FROM items WHERE item_price<=300;

-- SELECT * FROM customers WHERE last_name='Smith';

-- SELECT * FROM customers WHERE last_name='Jones';

-- SELECT * FROM customers WHERE last_name!='Jones';

