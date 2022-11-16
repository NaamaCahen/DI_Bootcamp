CREATE TABLE actors(
actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (100) NOT NULL,
	age DATE  NOT NULL,
	numbers_oscars SMALLINT NOT NULL
)

SELECT * FROM actors;

INSERT INTO actors (first_name,last_name,age,numbers_oscars)
VALUES ('Naama','Cahen','2003-05-07',10)
INSERT INTO actors (first_name,last_name,age,numbers_oscars)
VALUES ('Yehoudit','Cahen','2005-07-31',11)
INSERT INTO actors (first_name, last_name, age, numbers_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, numbers_oscars)
VALUES('George','Clooney','06/05/1961', 2);
INSERT INTO actors (first_name, last_name, age, numbers_oscars)
VALUES('yoyo','smith','06/07/1961', 7),
('ruti','salomon','06/07/2006', 8);

SELECT * FROM actors WHERE actor_id <=4;
SELECT * FROM actors WHERE actor_id <=4 ORDER BY last_name DESC ;
SELECT * FROM actors WHERE first_name ILIKE '%e%';
SELECT * FROM actors WHERE numbers_oscars >=5;
