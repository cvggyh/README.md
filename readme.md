MODELO RELACIONAL PARA UNA TIENDA DE ZAPATOS

INTEGRANTES
Charlotte Valencia Calderón ---- Maria Isabel Gomez Quiroz 10°C
______________________________________________________
VENDEDOR/SELLER
seller_id: INTEGER, Clave primaria, autoincremental.
seller_name: TEXT, Nombre del vendedor (NO NULL).
seller_birthdate: NUMERIC, Fecha de nacimiento del vendedor (NO NULL).
seller_email: TEXT, Correo electrónico del vendedor (ÚNICO, NO NULL).
seller_phone: NUMERIC, Teléfono del vendedor (NO NULL)
seller_typedocument: TEXT, Tipo de documento del vendedor (NO NULL).
seller_document: NUMERIC, Documento del vendedor (ÚNICO, NO NULL).
______________________________________________________
CLIENTE/CLIENT
client_id: INTEGER, Clave primaria, autoincremental.
client_name: TEXT, Nombre del cliente (NO NULL).
client_birthdate: NUMERIC, Fecha de nacimiento del cliente (NO NULL).
client_phone: NUMERIC, Teléfono del cliente (NO NULL).
client_typedocument: TEXT, Tipo de documento del cliente (NO NULL).
client_document: NUMERIC, Documento del cliente (ÚNICO, NO NULL).

______________________________________________________
PRODUCTO/PRODUCT
product_id: INTEGER, Clave primaria, autoincremental.
product_name: TEXT, Nombre del producto (NO NULL).
product_color: TEXT, Color del producto.
product_size: NUMERIC, Tamaño del producto (NO NULL).
product_price: NUMERIC, Precio del producto (NO NULL).
product_amount: NUMERIC, Cantidad disponible del producto (NO NULL).

______________________________________________________
(FORMA DE PAGOS) PAGOS/PAYMENTS
payments_id: INTEGER, Clave primaria, autoincremental.
payments_credit_weekly: NUMERIC, Pago a crédito semanal (NO NULL).
payments_credit_biweekly: NUMERIC, Pago a crédito quincenal (NO NULL).
payments_credit_monthly: NUMERIC, Pago a crédito mensual (NO NULL).
payments_cash: NUMERIC, Pago en efectivo (NO NULL).
payments_transfer: NUMERIC, Pago por transferencia (NO NULL).

_______________________________________________________
INGRESOS/INCOME
income_id: INTEGER, Clave primaria, autoincremental.
income_date: INTEGER, Fecha del ingreso (NO NULL).
income_type: TEXT, Tipo de ingreso (NO NULL).
income_amount: NUMERIC, Monto del ingreso (NO NULL).
income_description: TEXT, Descripción del ingreso.

_______________________________________________________
COMERCIO (NEGOCIO)/BUSINESS
business_id: INTEGER, Clave primaria, autoincremental.
business_name: TEXT, Nombre del negocio (NO NULL).
business_address: TEXT, Dirección del negocio (NO NULL).
business_phone: NUMERIC, Teléfono del negocio (NO NULL).
business_email: TEXT, Correo electrónico del negocio (ÚNICO, NO NULL).
business_schedules: TEXT, Horarios del negocio (NO NULL).

_______________________________________________________
FACTURA/BILL
bill_id: INTEGER, Clave primaria, autoincremental.
bill_seller_id: INTEGER, ID del vendedor (NO NULL).
bill_seller_name: TEXT, Nombre del vendedor (NO NULL).
bill_seller_phone: NUMERIC, Teléfono del vendedor.
bill_seller_document: NUMERIC, Documento del vendedor (ÚNICO).
bill_seller_typedocument: TEXT, Tipo de documento del vendedor.
bill_seller_email: TEXT, Correo electrónico del vendedor (ÚNICO).
bill_client_id: INTEGER, ID del cliente (NO NULL).
bill_client_name: TEXT, Nombre del cliente (NO NULL).
bill_client_phone: NUMERIC, Teléfono del cliente.
bill_client_document: NUMERIC, Documento del cliente (ÚNICO).
bill_client_typedocument: TEXT, Tipo de documento del cliente.
bill_product_id`: INTEGER, ID del producto (NO NULL).
bill_product_name: TEXT, Nombre del producto (NO NULL).
bill_product_color: TEXT, Color del producto.
bill_product_price: NUMERIC, Precio del producto (NO NULL).
bill_product_size: NUMERIC, Tamaño del producto.
bill_product_amount: NUMERIC, Cantidad del producto (NO NULL).
bill_business_address: TEXT, Dirección del negocio.
bill_business_id: INTEGER, ID del negocio (NO NULL).
bill_totalValue: NUMERIC, Valor total de la factura (NO NULL).
bill_income_id: INTEGER, ID del ingreso (opcional).
--(FK)
bill_seller_id referencia SELLER(seller_id).
bill_client_id referencia CLIENT(client_id).
bill_product_id referencia PRODUCT(product_id).
bill_business_id referencia BUSINESS(business_id).
bill_income_id referencia INCOME(income_id).