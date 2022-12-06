create database blog;
use blog;


-- Creating User Table

create table users( id int primary key auto_increment, name varchar(150) not null, email varchar(150) not null, unique_name varchar(200), password varchar(300) not null, avatar varchar(250) generated always as (concat("avatar-",unique_name,".webp")), description text(500), rating float default 5, constraint USERNAME_UK unique(unique_name), constraint USEREMAIL_UK unique(email) ); 

truncate users;
drop table users;


-- Creating Articles Table

create table articles( id int primary key auto_increment, title varchar(150), description varchar(500), content varchar(2500), publisher int, publish_date date);
alter table articles add constraint User_Article_FK foreign key(publisher) references users(id);

truncate articles;
drop table articles;

-- Creating Article Images Table

create table article_images(id int primary key auto_increment, thumbnail varchar(300), cover_image varchar(300), article int);	
alter table articles add constraint User_Article_FK foreign key(publisher) references users(id);

drop table article_images;                    
truncate article_images;


-- Creating Comments Table

create table comments( id int primary key auto_increment, text varchar(250), publisher int, article int, publish_date date );
alter table comments add constraint Comments_User_FK foreign key(publisher) references users(id);


-- Fetching Data From Tables

-- Fetching User DATA

select * from users;
select id, name, email, avatar, description from users where email="mianishaq401@gmail.com"; 


-- Fetching Article DATA

select * from articles;

-- Select all Articles Of A Specific User
select articles.id, articles.title, articles.description, articles.publish_date, article_images.thumbnail, users.id as "publisher_id", users.name as "publisher_name" 
from articles
inner join article_images on articles.id = article_images.article
inner join users on articles.id = users.id
where users.id = 1 ;
-- Stored Procedure For Above Statement
call articles_by_a_user(1);


-- Select Data Of A Single Article Page
select articles.title, articles.content, articles.publish_date, article_images.cover_image, users.id as "publisher_id", users.name as "publisher_name" 
from articles
inner join article_images on articles.id = article_images.article
inner join users on articles.id = users.id
where articles.id = 1 ;
-- Stored Procedure For Above Statement
call single_article(1);


-- Search Article With Title Marching To Query
select articles.id, articles.title, articles.description, articles.publish_date, article_images.thumbnail, users.id as "publisher_id", users.name as "publisher_name" 
from articles
inner join article_images on articles.id = article_images.article
inner join users on articles.id = users.id
where articles.title like search_term;
-- Stored Procedure For Above Statement
call search_article("tit");


-- Fetching Comments Data

-- Fetch Comments Of A Specific Article.
Select comments.text, comments.publish_date, users.name as "comment_publisher_name", users.avatar 
from comments
inner join users on comments.publisher = users.id
where comments.article = 1;





