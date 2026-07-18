INSERT INTO machines
(name,sector,type,status,energy_consumption,temperature)

VALUES

('Esteira 01',

'Montagem',

'Esteira',

'EM_OPERACAO',

18.5,

37.2),

('Prensa 02',

'Estamparia',

'Prensa',

'MANUTENCAO',

25.0,

29.8),

('Robô 01',

'Solda',

'Robô',

'EM_OPERACAO',

12.7,

31.5);

INSERT INTO productions(

product,

produced_quantity,

expected_quantity,

production_date,

machine_id

)

VALUES

(

'Peça A',

900,

1000,

CURRENT_DATE,

1

),

(

'Peça B',

400,

500,

CURRENT_DATE,

2

),

(

'Peça C',

700,

900,

CURRENT_DATE,

3

);