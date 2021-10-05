/*Création de la BDD et supression si elle existe déjà*/
DROP DATABASE IF EXISTS gescom_eval;
CREATE DATABASE IF NOT EXISTS gescom_eval;
/*Utilisation de la BDD*/
USE gescom_eval;

/*Création de la table en tête de liste car elle ne dérive d'aucune autre table*/
DROP TABLE IF EXISTS categories;
CREATE TABLE IF NOT EXISTS categories(
   cat_id INT,
   cat_name VARCHAR(50) NOT NULL,
   cat_id_1 INT NOT NULL,
   PRIMARY KEY(cat_id),
   FOREIGN KEY(cat_id_1) REFERENCES categories(cat_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Création d'une autre table qui applique mais ne reçois pas de contrainte*/
DROP TABLE IF EXISTS countries;
CREATE TABLE IF NOT EXISTS countries(
   cou_id CHAR(2),
   cou_name VARCHAR(45) NOT NULL,
   PRIMARY KEY(cou_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Création de customers qui est contraint par countries*/
DROP TABLE IF EXISTS customers;
CREATE TABLE IF NOT EXISTS customers(
   cus_id INT,
   cus_lastname VARCHAR(50) NOT NULL,
   cus_firstname VARCHAR(50) NOT NULL,
   cus_address VARCHAR(150) NOT NULL,
   cus_zipcode VARCHAR(5) NOT NULL,
   cus_city VARCHAR(50) NOT NULL,
   cus_mail VARCHAR(255) NOT NULL,
   cus_phone INT NOT NULL,
   cus_password VARCHAR(60) NOT NULL,
   cus_add_date DATETIME NOT NULL,
   cus_update_date DATETIME,
   cou_id CHAR(2) NOT NULL,
   PRIMARY KEY(cus_id),
   FOREIGN KEY(cou_id) REFERENCES countries(cou_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Création de orders qui est contraint par customers*/
DROP TABLE IF EXISTS orders;
CREATE TABLE IF NOT EXISTS orders(
   ord_id INT,
   ord_status VARCHAR(25) NOT NULL,
   ord_order_date DATE NOT NULL,
   ord_payment_date DATE NOT NULL,
   ord_ship_date DATE NOT NULL,
   ord_reception_date DATE NOT NULL,
   cus_id INT NOT NULL,
   PRIMARY KEY(ord_id),
   FOREIGN KEY(cus_id) REFERENCES customers(cus_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Création de orders_details qui est contraint pas orders*/
DROP TABLE IF EXISTS orders_details;
CREATE TABLE IF NOT EXISTS orders_details(
   ode_id INT,
   ode_unit_price DECIMAL(7,2) NOT NULL,
   ode_discount DECIMAL(4,2) NOT NULL,
   ode_quantity INT NOT NULL,
   PRIMARY KEY(ode_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Création de post qui n'est pas contraint*/
DROP TABLE IF EXISTS posts;
CREATE TABLE IF NOT EXISTS posts(
   pos_id INT,
   pos_label VARCHAR(30) NOT NULL,
   PRIMARY KEY(pos_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Création de suppliers qui est contraint par countries*/
DROP TABLE IF EXISTS suppliers;
CREATE TABLE IF NOT EXISTS suppliers(
   sup_id INT,
   sup_name VARCHAR(50) NOT NULL,
   sup_city VARCHAR(50) NOT NULL,
   sup_address VARCHAR(150) NOT NULL,
   sup_zipcode VARCHAR(5) NOT NULL,
   sup_contact VARCHAR(100) NOT NULL,
   sup_phone VARCHAR(10) NOT NULL,
   sup_mail VARCHAR(75) NOT NULL,
   cou_id CHAR(2) NOT NULL,
   PRIMARY KEY(sup_id),
   FOREIGN KEY(cou_id) REFERENCES countries(cou_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Création de products qui est contraint par orders_details*/
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products(
   pro_id INT,
   pro_cat_id INT NOT NULL,
   pro_price DECIMAL(7,2) NOT NULL,
   pro_ref VARCHAR(8) NOT NULL,
   pro_ean VARCHAR(13) NOT NULL,
   pro_stock INT NOT NULL,
   pro_stock_alert INT NOT NULL,
   pro_color VARCHAR(30) NOT NULL,
   pro_picture VARCHAR(50) NOT NULL,
   pro_name VARCHAR(50) NOT NULL,
   pro_desc TEXT NOT NULL,
   pro_publish BOOLEAN NOT NULL,
   pro_sup_id INT NOT NULL,
   pro_add_date DATETIME NOT NULL,
   pro_update_date DATETIME,
   cat_id INT NOT NULL,
   PRIMARY KEY(pro_id),
   FOREIGN KEY(cat_id) REFERENCES categories(cat_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Création de employees qui est contraint par posts*/
DROP TABLE IF EXISTS employees;
CREATE TABLE IF NOT EXISTS employees(
   emp_id INT,
   emp_pos_id INT NOT NULL,
   emp_last_name VARCHAR(50) NOT NULL,
   emp_first_name VARCHAR(50) NOT NULL,
   emp_address VARCHAR(150) NOT NULL,
   emp_zipcode VARCHAR(5),
   emp_city VARCHAR(50) NOT NULL,
   emp_mail VARCHAR(255) NOT NULL,
   emp_phone INT NOT NULL,
   emp_salary INT NOT NULL,
   emp_enter_date DATE NOT NULL,
   emp_gender CHAR(1) NOT NULL,
   emp_children INT NOT NULL,
   emp_id_1 INT NOT NULL,
   pos_id INT NOT NULL,
   PRIMARY KEY(emp_id),
   FOREIGN KEY(emp_id_1) REFERENCES employees(emp_id),
   FOREIGN KEY(pos_id) REFERENCES posts(pos_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*contain qui fait la liaison entre orders_details et products*/
DROP TABLE IF EXISTS contain;
CREATE TABLE IF NOT EXISTS contain(
   ode_id INT,
   pro_id INT,
   ode_pro_id INT NOT NULL,
   PRIMARY KEY(ode_id, pro_id),
   FOREIGN KEY(ode_id) REFERENCES orders_details(ode_id),
   FOREIGN KEY(pro_id) REFERENCES products(pro_id)
);

/*asso_6 qui lie orders à orders_details*/
CREATE TABLE Asso_6(
   ord_id INT,
   ode_id INT,
   ode_ord_id INT NOT NULL,
   PRIMARY KEY(ord_id, ode_id),
   FOREIGN KEY(ord_id) REFERENCES orders(ord_id),
   FOREIGN KEY(ode_id) REFERENCES orders_details(ode_id)
);

/*asso_10 qui lie suppliers et products*/
CREATE TABLE Asso_10(
   sup_id INT,
   pro_id INT,
   PRIMARY KEY(sup_id, pro_id),
   FOREIGN KEY(sup_id) REFERENCES suppliers(sup_id),
   FOREIGN KEY(pro_id) REFERENCES products(pro_id)
);
