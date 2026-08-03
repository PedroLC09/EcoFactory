SELECT * FROM machines;

SELECT * FROM productions;

SELECT * FROM safety_occurrences;

SELECT

status,

COUNT(*) AS quantidade

FROM machines

GROUP BY status;

SELECT

p.product,

p.produced_quantity,

m.name

FROM productions p

JOIN machines m

ON p.machine_id=m.id;