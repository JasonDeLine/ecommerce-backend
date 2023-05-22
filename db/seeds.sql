-- Insert categories
INSERT INTO categories (category_name)
VALUES ('Electronics'), ('Clothing'), ('Home');

-- Insert tags
INSERT INTO tags (tag_name)
VALUES ('Technology'), ('Fashion'), ('Appliances');

-- Insert products
INSERT INTO products (product_name, price, stock, category_id)
VALUES
  ('iPhone 12 Pro', 999.99, 20, 1),
  ('Men\'s T-Shirt', 19.99, 50, 2),
  ('Smart TV', 699.99, 30, 1),
  ('Women\'s Dress', 49.99, 40, 2),
  ('Robot Vacuum Cleaner', 299.99, 10, 3),
  ('Laptop', 899.99, 15, 1),
  ('Women\'s Shoes', 39.99, 25, 2),
  ('Refrigerator', 1299.99, 5, 3),
  ('Bluetooth Speaker', 59.99, 30, 1),
  ('Sports Watch', 149.99, 20, 2),
  ('Headphones', 99.99, 15, 1),
  ('Microwave Oven', 199.99, 10, 3),
  ('Backpack', 29.99, 35, 2),
  ('Gaming Console', 399.99, 20, 1),
  ('Air Purifier', 79.99, 40, 3);
