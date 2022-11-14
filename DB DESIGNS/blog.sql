create database blog;

use blog;

-- Creating User Table
create table users(
					id int primary key auto_increment,
                    name varchar(150) not null,
                    email varchar(150) not null,
                    unique_name varchar(200),
                    password varchar(300) not null,
                    avatar varchar(250) generated always as (concat("avatar-",unique_name,".webp")),
                    description text(500),
                    rating float default 5,
                    constraint USERNAME_UK unique(unique_name),
                    constraint USEREMAIL_UK unique(email)
                    ); 
drop table users;

-- Creating avatars Table

create table avatars(
						id int primary key auto_increment,
                        path varchar(250)
					);	


-- Creating Articles Table

create table articles(
						id int primary key auto_increment,
                        title varchar(150),
                        description varchar(500),
                        content varchar(2500),
                        thumbnail_image int,
                        cover_image int,
                        publisher int,
                        category varchar(100),
					    publish_date date
                      );


-- Creating Articles Category Table

create table categories(
							id int primary key auto_increment,
                            name varchar(100)
					   );
drop table categories;

-- Creating Article Images Table

create table article_images(
						id int primary key auto_increment,
                        thumbnail varchar(300),
                        cover_image varchar(300)
					);	
    

-- Creating Comments Table

create table comments(
						id int primary key auto_increment,
                        text varchar(250),
                        publisher int,
                        article int,
                        publish_date date
                        );