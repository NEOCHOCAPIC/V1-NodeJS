create database dbcompañia;
use dbcompañia;

create table empleado(

id INT(11) not null auto_increment,
nombre VARCHAR(45) default null, 
salario INT(8) default null,
primary key (id)
)

insert into empleado values 
    (1, 'Juan', 250000),
    (2, 'Antonia', 900000),
    (3, 'Eduardo', 300000),
    (4, 'Goku', 500000);
