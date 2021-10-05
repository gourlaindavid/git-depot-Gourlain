CREATE PROCEDURE facture( 
	IN commande_id INT(10)
)
BEGIN 
	SELECT ode_unit_price
	FROM orders, orders_details
	WHERE commande_id = ord_id; 
END ;
	