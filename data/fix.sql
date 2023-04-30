CREATE TABLE poppel_copy
AS
SELECT 
  * 
FROM poppel;


ALTER TABLE poppel_copy MODIFY popIngress col VARBINARY(...) ...;
ALTER TABLE poppel_copy MODIFY popIngress col VARCHAR(...) ... CHARACTER SET utf8 ...;
