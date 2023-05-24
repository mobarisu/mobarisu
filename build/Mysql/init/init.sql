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

insert into products_categories
(category_name)
values
('メイン'),
('サイド'),
('ドリンク');

insert into allergies
(ingredient)
values
('卵'),
('乳'),
('小麦'),
('えび'),
('かに'),
('そば'),
('落花生'),
('アーモンド'),
('あわび'),
('いか'),
('いくら'),
('オレンジ'),
('カシューナッツ'),
('キウイフルーツ'),
('牛肉'),
('くるみ'),
('ごま'),
('さけ'),
('さば'),
('大豆'),
('鶏肉'),
('バナナ'),
('豚肉'),
('まつたけ'),
('もも'),
('やまいも'),
('りんご'),
('ゼラチン');

insert into stores
(store_name,store_introduction,mail_address,phone_number,representative_name,password)
values (マクドナルド,世界的なファストフードチェーンで、美味しいハンバーガーやポテトなど幅広いメニューを提供。快適な空間で楽しい食事体験をお届けします。,
mac@gmail.com,00012340123,ドナルドマクドナルド,Pass_1234_qwaszx);


insert into stores
(store_name,store_introduction,mail_address,phone_number,representative_name,password)
values (モスバーガー,新鮮な素材で作る美味しいバーガーやサイドメニューを提供。心地よい空間でお楽しみいただけます。ご家族や友人との食事に最適です。,
mos@gmail.com,12323450123,モス,Qwerty_1234_pass);


insert into stores
(store_name,store_introduction,mail_address,phone_number,representative_name,password)
values (すき家,新鮮な食材を使った美味しいすき焼きや丼物をリーズナブルに提供。心地よい雰囲気でおくつろぎください。ご家族や友人との食事に最適です。,
sukiya@gmail.com,12342345123,スキヤ,Qwaszx_1234_pass);

insert into stores
(store_name,store_introduction,mail_address,phone_number,representative_name,password)
values (松屋,美味しい牛丼や定食をリーズナブルに提供。忙しい日常に手軽でヘルシーな食事をお届けします。心地よい雰囲気でおくつろぎください。ご来店をお待ちしています！,
matuya@gmail.com,09871234098,マツヤ,QWerasd_10293_pass);