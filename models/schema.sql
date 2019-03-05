DROP DATABASE IF EXISTS uramazon;
CREATE DATABASE uramazon; 
USE uramazon;

drop table if exists departments;
create table departments(departmentId integer(11) auto_increment not null,
departmentName varchar(30) not null,
overHeadCosts DECIMAL(11,4) not NULL,
primary key(departmentId)
);

drop table if exists orderStatus;
create table orderStatus(orderStatusId integer(11)  auto_increment not null,
orderStatus varchar(30) not null,
primary key(orderStatusId)
);

drop table if exists userProfile; 
create table userProfile(userId integer(11) auto_increment not null,
userName varchar(30) not null,
userEmail varchar(30) not null,
userPasswd varchar(30) not null,
userStatus boolean not null,
userType varchar(30) not null,
userAddress text(255),
city varchar(30),
state varchar(10),
zipcode varchar(10),
primary key(user_id)
);

drop table if exists item;
create table item(itemId integer(11)  auto_increment not null,
itemName varchar(100) not null,
itemDescription varchar(255) not null,
itemImage blob,
departmentId integer(11) not null,
itemPrice  DECIMAL(11,4) not NULL,
stockQuantity integer(11) not null,
productSales DECIMAL(11,4) NULL,
primary key(itemId),
FOREIGN KEY (departmentId) REFERENCES departments(departmentId)
);

drop table if exists userOrder;
create table userOrder(orderId integer(11) auto_increment not null,
userId integer(11) not null,
orderStatusId integer(11) not null,
orderTotal DECIMAL(11,4) not NULL,
primary key(orderId),
FOREIGN KEY (orderStatusId) REFERENCES orderStatus(orderStatusId)
);

drop table if exists orderDetails;
create table orderDetails(orderDetailsId integer(11) not null,
itemId integer(11) not null,
itemQuantity integer(11) not null,
lineItemTotal DECIMAL(11,4) not NULL,
FOREIGN KEY (orderDetailsId) REFERENCES userOrder(orderId),
FOREIGN KEY (itemId) REFERENCES item(itemId)
);