USE database;

create table stores(
    store_id int PRIMARY KEY AUTO_INCREMENT,
    store_name varchar(128) NOT NULL,
    store_introduction varchar(255),
    mail_address varchar(255) NOT NULL,
    phone_number long NOT NULL,
    representative_name varchar(128) NOT NULL,
    password varchar(255) NOT NULL
);

create table options(
    option_id int PRIMARY KEY AUTO_INCREMENT,
    option_name varchar(255) NOT NULL,
    option_price int NOT NULL
);

create table products_categories(
    category_id int PRIMARY KEY AUTO_INCREMENT,
    category_name varchar(255) NOT NULL
);


create table products(
    product_id int PRIMARY KEY AUTO_INCREMENT,
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
    product_id int,
    option_id int,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (option_id) REFERENCES options(option_id),
    PRIMARY KEY(product_id,option_id)
);

create table allergies(
    allergy_id int PRIMARY KEY AUTO_INCREMENT,
    ingredient varchar(64) NOT NULL
);

create table products_allergies(
    product_id int,
    allergy_id int,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (allergy_id) REFERENCES allergies(allergy_id),
    PRIMARY KEY(product_id,allergy_id)
);

create table orders(
    order_id int PRIMARY KEY AUTO_INCREMENT,
    store_id int  NOT NULL,
    receipt_number varchar(32) NOT NULL,
    phone_number int NOT NULL,
    orderer_name varchar(128) NOT NULL,
    order_time time NOT NULL,
    receipt_complete boolean NOT NULL
);

create table orders_details(
    order_id int,
    product_id int,
    quantity int NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    PRIMARY KEY(order_id,product_id)
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
values ('マクドナルド','世界的なファストフードチェーンで、美味しいハンバーガーやポテトなど幅広いメニューを提供。快適な空間で楽しい食事体験をお届けします。',
'mac@gmail.com',00012340123,'ドナルドマクドナルド','Pass_1234_qwaszx');

insert into stores
(store_name,store_introduction,mail_address,phone_number,representative_name,password)
values ('モスバーガー','新鮮な素材で作る美味しいバーガーやサイドメニューを提供。心地よい空間でお楽しみいただけます。ご家族や友人との食事に最適です。',
'mos@gmail.com',02323450123,'モス','Qwerty_1234_pass');

insert into stores
(store_name,store_introduction,mail_address,phone_number,representative_name,password)
values ('すき家','新鮮な食材を使った美味しいすき焼きや丼物をリーズナブルに提供。心地よい雰囲気でおくつろぎください。ご家族や友人との食事に最適です。',
'sukiya@gmail.com',02342345123,'スキヤ','Qwaszx_1234_pass');

insert into stores
(store_name,store_introduction,mail_address,phone_number,representative_name,password)
values ('松屋','美味しい牛丼や定食をリーズナブルに提供。忙しい日常に手軽でヘルシーな食事をお届けします。心地よい雰囲気でおくつろぎください。ご来店をお待ちしています！',
'matuya@gmail.com',09871234098,'マツヤ','QWerasd_10293_pass');

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (1,1,'炙り醤油風ダブル肉厚ビーフ','2枚重ねた厚みのある100%ビーフのおいしさを、香ばしい炙り醤油風のソースが引き立てる、思わずやみつきになる一品です。',
550,true);

insert into products_allergies
(product_id,allergy_id)
values
(1,1),
(1,2),
(1,3),
(1,15),
(1,17),
(1,20),
(1,21),
(1,23);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (1,1,'炙り醤油風ベーコントマト肉厚ビーフ','厚みのある100%ビーフとふんだんな野菜に、香ばしい炙り醤油風のソースが決め手の、肉と野菜のバランスが絶妙な一品です。',
540,true);

insert into products_allergies
(product_id,allergy_id)
values
(2,1),
(2,2),
(2,3),
(2,15),
(2,17),
(2,20),
(2,21),
(2,23);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (1,1,'チキンフィレオ','ボリュームたっぷりのムネ肉を使ったチキンパティで、食べ応えもばっちり。オーロラソースとの相性も抜群のサンドイッチです。',
380,true);

insert into products_allergies
(product_id,allergy_id)
values
(3,1),
(3,2),
(3,3),
(3,12),
(3,15),
(3,17),
(3,20),
(3,21);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (1,1,'ゆず香るおろしチキンタツタ','国産ゆずなどの柑橘でさっぱり仕上げた角切り大根入りのおろしと、たまり醤油マヨソースが相性抜群のチキンタツタが新登場！',
460,false);

insert into products_allergies
(product_id,allergy_id)
values
(4,1),
(4,2),
(4,3),
(4,12),
(4,15),
(4,17),
(4,20),
(4,21);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (1,2,'マックフライポテト','外はカリッとゴールデンブラウン。中はホクホクとベイクドポテトのような食感。こだわりぬいた、マクドナルドのベストセラー。',
330,true);

insert into options
(option_name,option_price)
values
('Sサイズ',-140),
('Lサイズ',50);

insert into products_options
(product_id,option_id)
values
(5,1),
(5,2);

insert into products_allergies
(product_id,allergy_id)
values
(5,15),
(5,20);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (1,2,'サイドサラダ','レタス、紫キャベツ、赤と黄色のパプリカを組み合わせた彩り豊かなサラダです。ドレッシングはお好みに合わせてお選びください。',
300,true);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (1,2,'えだまめコーン','栄養バランスを考慮してスイートコーンにえだまめをプラスした、おいしく栄養を摂っていただけるメニューです。',
250,true);

insert into products_allergies
(product_id,allergy_id)
values
(7,20);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (2,1,'ダブルとびきりチーズ ～北海道産ゴーダチーズ使用～','国産肉（牛・豚合挽き肉）を100％使用したハンバーグに、国産丸大豆醤油を使用したコクと深みのある“和風ソース”をかけました。',
800,true);

insert into products_allergies
(product_id,allergy_id)
values
(8,1),
(8,2),
(8,3),
(8,7),
(8,15),
(8,16),
(8,17),
(8,20),
(8,23),
(8,27);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (2,1,'グリーンバーガー＜テリヤキ＞ GREEN BURGER TERIYAKI','やさしい甘みのベジタブルバンズと、大豆由来の原料を使用したパティを合わせたバーガーに、別添えのグリーンテリマヨソースをかけながらお召しあがりください。',
590,true);

insert into products_allergies
(product_id,allergy_id)
values
(9,1),
(9,2),
(9,3),
(9,4),
(9,5),
(9,7),
(9,15),
(9,20),
(9,23);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (2,1,'とびきりトマト＆レタス','国産肉（牛・豚合挽き肉）を100％使用したハンバーグに、モスオリジナルの“和風ソース”をかけました。和風ソースが引き立てた、モスのこだわりがたっぷりつまった一品です。',
550,true);

insert into products_allergies
(product_id,allergy_id)
values
(10,1),
(10,2),
(10,3),
(10,7),
(10,15),
(10,16),
(10,17),
(10,20),
(10,23),
(10,27);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (2,3,'アイスコーヒー','甘くなめらかな口当たりが特長で、まろやかな苦みとすっきりとした味わいのアイスコーヒーです。',
320,true);

insert into options
(option_name,option_price)
values
('Sサイズ',-70),
('Lサイズ',70);

insert into products_options
(product_id,option_id)
values
(11,3),
(11,4);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (2,3,'ペプシコーラ','炭酸の刺激と独特な味わいが、のどの乾きを癒してくれます。',
270,true);

insert into options
(option_name,option_price)
values
('Sサイズ',-70),
('Lサイズ',70);

insert into products_options
(product_id,option_id)
values
(12,3),
(12,4);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (3,1,'トマトチーズ牛丼','トマトソースと濃厚なチーズが調和した洋風な味わいの商品です。マイルドなチーズと絡めてお召し上がりください。',
580,true);

insert into options
(option_name,option_price)
values
('ミニ',-50),
('中盛',180),
('大盛',180),
('特盛',330),
('メガ',480);

insert into products_options
(product_id,option_id)
values
(13,5),
(13,6),
(13,7),
(13,8),
(13,9);

insert into products_allergies
(product_id,allergy_id)
values
(13,1),
(13,2),
(13,3),
(13,4),
(13,5),
(13,7),
(13,8),
(13,9),
(13,10),
(13,11),
(13,12),
(13,13),
(13,14),
(13,15),
(13,16),
(13,17),
(13,18),
(13,19),
(13,20),
(13,21),
(13,22),
(13,23),
(13,25),
(13,26),
(13,27),
(13,28);

insert into products
(store_id,category_id,product_name,product_introduction,product_price,on_sale)
values (3,1,'とろ〜り3種のチーズ牛丼','ミックスチーズと、とろ〜りとろけるチーズソースが牛肉とよく絡み、一口食べればチーズのまろやかさが口いっぱいに広がる定番の商品の一つです。',
580,true);

insert into options
(option_name,option_price)
values
('ミニ',-50),
('中盛',180),
('大盛',180),
('特盛',330),
('メガ',480);

insert into products_options
(product_id,option_id)
values
(14,10),
(14,11),
(14,12),
(14,13),
(14,14);

insert into products_allergies
(product_id,allergy_id)
values
(14,1),
(14,2),
(14,3),
(14,4),
(14,5),
(14,7),
(14,8),
(14,9),
(14,10),
(14,11),
(14,12),
(14,13),
(14,14),
(14,15),
(14,16),
(14,17),
(14,18),
(14,19),
(14,20),
(14,21),
(14,22),
(14,23),
(14,25),
(14,26),
(14,27),
(14,28);