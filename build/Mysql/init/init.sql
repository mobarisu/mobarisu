create table stores(
    store_id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    store_name varchar(128) NOT NULL,
    store_introduction varchar(255),
    mail_address varchar(255) NOT NULL,
    phone_number int NOT NULL,
    representative_name varchar(128) NOT NULL,
    password varchar(255) NOT NULL
);

create table products(
    product_id int PRIMARY KEY NOT NULL,
    store_id int NOT NULL,
    category_id int NOT NULL,
    product_name varchar(128) NOT NULL,
    product_introduction varchar(255),
    product_price int NOT NULL,
    on_sale boolean NOT NULL,
    FOREIGN KEY (store_id) REFERENCES stores(store_id),
    FOREIGN KEY (category_id) REFERENCES products_categories(category_id)
);

create table products_options(
    product_id int PRIMARY KEY NOT NULL,
    option_id int PRIMARY KEY NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (option_id) REFERENCES options(option_id)
);

create teble options(
    option_id int PRIMARY KEY NOT NULL,
    option_name varchar(255) NOT NULL,
    option_price int NOT NULL
);

create teble products_allergies(
    product_id int PRIMARY KEY NOT NULL,
    allergy_id int  PRIMARY KEY NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (allergy_id) REFERENCES options(allergy_id)
);

create table products_categories(
    category_id int PRIMARY KEY NOT NULL,
    category_name varchar(255) NOT NULL
);

create table allergies(
    allergy_id int PRIMARY KEY NOT NULL,
    ingredient varchar(64) NOT NULL
);

create table orders(
    order_id int PRIMARY KEY NOT NULL,
    store_id int  NOT NULL,
    receipt_number varchar(32) NOT NULL,
    phone_number int NOT NULL,
    orderer_name varchar(128) NOT NULL,
    order_time time NOT NULL,
    receipt_complete boolean NOT NULL,
);

create table orders_details(
    order_id int PRIMARY KEY NOT NULL,
    product_id int PRIMARY KEY NOT NULL,
    quantity int NOT NULL,
    FOREIGN KEY (order_id) REFERENCES products(order_id),
    FOREIGN KEY (product_id) REFERENCES options(product_id)
);