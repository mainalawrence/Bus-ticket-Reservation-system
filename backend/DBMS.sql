










CREATE DATABASE traverous;

CREATE Table admin(
    id serial,
    name varchar(200) NOT NULL,
    username varchar(200) NOT NULL,
    password varchar(200) NOT NULL
);
CREATE Table locations(
    id serial,
    _location varchar(200) Not NULL primary key
);
CREATE Table buses(
    id bigserial  ,
    location varchar(200) REFERENCES locations(_location) ,
    name varchar(200) Not NULL primary key,
    sits text[]
);

CREATE Table dates(
    id bigserial  primary key,
    _date date NOT NULL,
    arrival time,
    depart time,
    buse_id varchar(200) REFERENCES buses(name)
);
CREATE Table bookings(
    id bigserial,
    Location text,
    CustomerName varchar(200) NOT NULL,
    CustomerPhoneNumber integer NOT NULL,
    DepartureTime time,
    Date date
);
INSERT INTO locations VALUES('MOMBASA'),('KISUMU'),('KITALE'),('Nairobi');
INSERT INTO buses VALUES ('Nairobi','KAZ 1092A','{"1","2","3","4","5","6"}'),
 ('MOMBASA','KFZ 1092B','{"1","2","3","4","5","6"}'),
 ('KITALE','KDZ 1092C','{"1","2","3","4","5","6"}'),
 ('KISUMU','KEZ 1092D','{"1","2","3","4","5","6"}');

INSERT INTO dates VALUES('1/19/2021'::date,'11:00 PM'::time,'12:00 PM'::time,'KAZ 1092A'),
 ('12/19/2020'::date,'11:00 PM'::time,'12:00 PM'::time ,'KFZ 1092B'),
 ('12/20/2020'::date,'11:00 PM'::time,'12:00 PM'::time ,'KDZ 1092C'),
 ('12/20/2020'::date,'11:00 PM'::time,'12:00 PM'::time ,'KEZ 1092D');

INSERT INTO bookings VALUES(021457878 ,'11:00 PM'::time,'12/19/2020'::date,'Mombasa','Kimani mwnainki');
 