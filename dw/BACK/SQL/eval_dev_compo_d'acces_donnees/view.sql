CREATE VIEW cat_product
AS
SELECT pro_id, pro_ref, pro_name FROM products
SELECT cat_id, cat_name FROM categories
