CREATE TABLE carstable(
    carid serial unique primary key,
    name character varying(20) not null,
    model character varying(200) not null
);

ALTER TABLE carstable
    OWNER TO schenker;

alter role schenker connection limit -1;

insert into carstable(name,model)
values('Mercedes','1965');
insert into carstable(name,model)
values('Volvo','1990');
