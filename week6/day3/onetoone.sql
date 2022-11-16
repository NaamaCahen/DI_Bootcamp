-- EXERCISE

-- If you did the exercise of yesterday, use Emp/Dept database

-- 1. Create a new database, and create the table department

   CREATE TABLE DEPARTMENT
      (
         DEPTCODE   INTEGER PRIMARY KEY,
         DeptName   CHAR(30),
         LOCATION   VARCHAR(33)
      );
	  INSERT INTO DEPARTMENT(DEPTCODE,DeptName,LOCATION)
	  VALUES(25,'Finance','tlv'),(30,'sales','NY');
select * from department;
-- 2. Create a Boss table with the columns boss_id, boss_name, boss_type (ie.nice, angry, funny ect...), and dept_number:
-- The boss table, has a one to one relationship with the department table:
-- => a department can be managed by only 1 boss, and a boss can manage only 1 department
CREATE TABLE boss(
	boss_id SERIAL PRIMARY KEY,
	boss_name VARCHAR(50),
	boss_type VARCHAR (30),
	dept_number INTEGER UNIQUE REFERENCES DEPARTMENT (deptcode)
)
select * from boss;
INSERT INTO boss(boss_name,boss_type,dept_number)
VALUES ('raph','sinic',(SELECT DEPTCODE FROM department WHERE DeptName='Finance' )),('johnathan','funny',(SELECT DEPTCODE FROM department WHERE DeptName='sales' ))
-- 1. Add a few bosses : one for the finance dept, one for sales and one for marketing
-- 2. What is the type and name of the boss of the dept Finance (show the dept name, not the dept id)