-- Database For Our BLOG APP

-- Creating Our Database 

create database blog_app;
use blog_app;

-- Creating Our Tables

-- USER TABLE
create table app_user(user_id int NOT NULL auto_increment,
					  user_name varchar(250),
					  email varchar(250),
					  account_username varchar(150),
                      account_password varchar(150),
                      profile_pic varchar(300),
                      Constraint App_User_PK primary key(user_id)
					  );
insert into app_user(user_name) values ('APPLE');
select * from app_user;
drop table app_user;
show create table app_user;


-- BLOG TABLE
create table articles( id int NOT NULL auto_increment primary key,
					   blog_title varchar(100),
                       blog_text longtext,
                       blog_image text,
                       rating float,
                       publisher int
                       );
alter table articles add constraint Articles_Publisher_FK foreign key (publisher) references app_user(user_id);

-- Comments Table
create table comments( comment_id int NOT NULL auto_increment primary key,
					   comment_text varchar(150),
                       comment_publisher int,
                       comment_article int
                       );
alter table comments add constraint Comment_Publisher_FK foreign key(comment_publisher) references app_user(user_id);
alter table comments add constraint Comment_Article_FK foreign key(comment_article) references articles(id);
