SELECT *FROM actors;
UPDATE actors SET first_name='Maty' WHERE first_name='Matt';
UPDATE actors SET numbers_oscars =4 WHERE first_name='George'
RETURNING *;
ALTER TABLE actors RENAME COLUMN age TO birth_date
DELETE FROM actors WHERE actor_id=3
Returning *;