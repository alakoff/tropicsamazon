insert into orderStatus(orderStatus) values('InCart');
insert into orderStatus(orderStatus) values('Order Placed');
insert into orderStatus(orderStatus) values('Pending Payment');
insert into orderStatus(orderStatus) values('Payment Approved');
insert into orderStatus(orderStatus) values('Order Confirmed');
insert into orderStatus(orderStatus) values('Shipped');
insert into orderStatus(orderStatus) values('Deliverd');
insert into orderStatus(orderStatus) values('Cancelled');

select * from orderStatus;
INSERT into state (stateCode,stateName)values ('AL', 'Alabama'),
('AK', 'Alaska'),
('AZ', 'Arizona'),
('AR', 'Arkansas'),
('CA', 'California'),
('CO', 'Colorado'),
('CT', 'Connecticut'),
('DE', 'Delaware'),
('DC', 'District of Columbia'),
('FL', 'Florida'),
('GA', 'Georgia'),
('HI', 'Hawaii'),
('ID', 'Idaho'),
('IL', 'Illinois'),
('IN', 'Indiana'),
('IA', 'Iowa'),
('KS', 'Kansas'),
('KY', 'Kentucky'),
('LA', 'Louisiana'),
('ME', 'Maine'),
('MD', 'Maryland'),
('MA', 'Massachusetts'),
('MI', 'Michigan'),
('MN', 'Minnesota'),
('MS', 'Mississippi'),
('MO', 'Missouri'),
('MT', 'Montana'),
('NE', 'Nebraska'),
('NV', 'Nevada'),
('NH', 'New Hampshire'),
('NJ', 'New Jersey'),
('NM', 'New Mexico'),
('NY', 'New York'),
('NC', 'North Carolina'),
('ND', 'North Dakota'),
('OH', 'Ohio'),
('OK', 'Oklahoma'),
('OR', 'Oregon'),
('PA', 'Pennsylvania'),
('PR', 'Puerto Rico'),
('RI', 'Rhode Island'),
('SC', 'South Carolina'),
('SD', 'South Dakota'),
('TN', 'Tennessee'),
('TX', 'Texas'),
('UT', 'Utah'),
('VT', 'Vermont'),
('VA', 'Virginia'),
('WA', 'Washington'),
('WV', 'West Virginia'),
('WI', 'Wisconsin'),
('WY', 'Wyoming');

select * from state;

insert into UserProfile(userName,userEmail,userPasswd,userStatus,userType,userAddress,city,zipcode,createdat,updatedAt) 
values('Admin','silpashinto@gmail.com','admin',1,'admin','3244 kilburn','Glen Allen','23233',CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP());

select * from UserProfile;