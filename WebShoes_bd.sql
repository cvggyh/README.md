--CREAR TABLA SELLER
CREATE TABLE SELLER (
    seller_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    seller_name TEXT NOT NULL,                   
    seller_birthdate NUMERIC NOT NULL,          
    seller_email TEXT UNIQUE NOT NULL,           
    seller_phone NUMERIC NOT NULL,                
    seller_typedocument TEXT NOT NULL,            
    seller_document NUMERIC UNIQUE NOT NULL       
);

--CREAR TABLA CLIENT 
CREATE TABLE CLIENT (
    client_id INTEGER PRIMARY KEY AUTOINCREMENT,  
    client_name TEXT NOT NULL,                    
    client_birthdate NUMERIC NOT NULL,           
    client_phone NUMERIC NOT NULL,                
    client_typedocument TEXT NOT NULL,            
    client_document NUMERIC UNIQUE NOT NULL       
);

--CREAR TABLA PRODUCT
CREATE TABLE PRODUCT (
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,  
    product_name TEXT NOT NULL,                 
    product_color TEXT,                          
    product_size NUMERIC NOT NULL,               
    product_price NUMERIC NOT NULL,            
    product_amount NUMERIC NOT NULL            
);

--CREAR TABLA PAYMENTS
CREATE TABLE PAYMENTS (
    payments_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    payments_credit_weekly NUMERIC NOT NULL,       
    payments_credit_biweekly NUMERIC NOT NULL,     
    payments_credit_monthly NUMERIC NOT NULL,       
    payments_cash NUMERIC NOT NULL,                 
    payments_transfer NUMERIC NOT NULL            
);

--CREAR TABLA INCOME
CREATE TABLE INCOME (
    income_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    income_date INTEGER NOT NULL,                 
    income_type TEXT NOT NULL,            
    income_amount NUMERIC NOT NULL,               
    income_description TEXT                     
);

--CREAR TABLA BUSINESS
CREATE TABLE BUSINESS (
    business_id INTEGER PRIMARY KEY AUTOINCREMENT,  
    business_name TEXT NOT NULL,                    
    business_address TEXT NOT NULL,         
    business_phone NUMERIC NOT NULL,                
    business_email TEXT UNIQUE NOT NULL,          
    business_schedules TEXT NOT NULL              
);

--CREAR TABLA BILL
CREATE TABLE BILL (
    bill_id INTEGER PRIMARY KEY AUTOINCREMENT,        
    bill_seller_id INTEGER NOT NULL,                  
    bill_seller_name TEXT NOT NULL,                   
    bill_seller_phone NUMERIC,                        
    bill_seller_document NUMERIC UNIQUE,              
    bill_seller_typedocument TEXT,                    
    bill_seller_email TEXT UNIQUE,                    
    bill_client_id INTEGER NOT NULL,                  
    bill_client_name TEXT NOT NULL,                   
    bill_client_phone NUMERIC,                        
    bill_client_document NUMERIC UNIQUE,              
    bill_client_typedocument TEXT,                    
    bill_product_id INTEGER NOT NULL,                 
    bill_product_name TEXT NOT NULL,                 
    bill_product_color TEXT,                         
    bill_product_price NUMERIC NOT NULL,              
    bill_product_size NUMERIC,                       
    bill_product_amount NUMERIC NOT NULL,             
    bill_business_address TEXT,                      
    bill_business_id INTEGER NOT NULL,               
    bill_totalValue NUMERIC NOT NULL,                 
    bill_income_id INTEGER,                          
    FOREIGN KEY (bill_seller_id) REFERENCES Seller(seller_id),
    FOREIGN KEY (bill_client_id) REFERENCES Client(client_id),
    FOREIGN KEY (bill_product_id) REFERENCES Product(product_id),
    FOREIGN KEY (bill_business_id) REFERENCES Business(business_id),
    FOREIGN KEY (bill_income_id) REFERENCES Income(income_id)
);