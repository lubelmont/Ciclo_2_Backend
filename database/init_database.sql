-- ===========================================
-- Script de Base de Datos para Sistema CRUD
-- MariaDB/MySQL Compatible
-- ===========================================

-- Crear la base de datos
DROP DATABASE IF EXISTS sistema_crud;
CREATE DATABASE sistema_crud;
USE sistema_crud;

-- ===========================================
-- TABLA: usuarios (para el sistema)
-- ===========================================
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'empleado', 'usuario') DEFAULT 'usuario',
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ===========================================
-- TABLA: clientes
-- ===========================================
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion TEXT,
    ciudad VARCHAR(100),
    estado VARCHAR(100),
    codigo_postal VARCHAR(10),
    fecha_nacimiento DATE,
    activo BOOLEAN DEFAULT TRUE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ===========================================
-- TABLA: categorias (para productos)
-- ===========================================
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===========================================
-- TABLA: productos
-- ===========================================
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    precio_costo DECIMAL(10,2),
    stock INT DEFAULT 0,
    stock_minimo INT DEFAULT 5,
    codigo_barras VARCHAR(50) UNIQUE,
    categoria_id INT,
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL
);

-- ===========================================
-- TABLA: pedidos
-- ===========================================
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    estado ENUM('pendiente', 'procesando', 'enviado', 'entregado', 'cancelado') DEFAULT 'pendiente',
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

-- ===========================================
-- TABLA: detalles_pedido
-- ===========================================
CREATE TABLE detalles_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE RESTRICT
);

-- ===========================================
-- INSERTAR DATOS DE EJEMPLO
-- ===========================================

-- Usuarios del sistema
INSERT INTO usuarios (nombre, email, password, rol) VALUES
('Administrador', 'admin@sistema.com', '$2b$10$hash_ejemplo_admin', 'admin'),
('Juan Pérez', 'juan.perez@sistema.com', '$2b$10$hash_ejemplo_empleado', 'empleado'),
('María García', 'maria.garcia@sistema.com', '$2b$10$hash_ejemplo_usuario', 'usuario'),
('Carlos López', 'carlos.lopez@sistema.com', '$2b$10$hash_ejemplo_usuario', 'usuario'),
('Ana Martínez', 'ana.martinez@sistema.com', '$2b$10$hash_ejemplo_empleado', 'empleado');

-- Clientes
INSERT INTO clientes (nombre, apellido, email, telefono, direccion, ciudad, estado, codigo_postal, fecha_nacimiento) VALUES
('Roberto', 'González', 'roberto.gonzalez@email.com', '555-0101', 'Calle Principal 123', 'Ciudad de México', 'CDMX', '01000', '1985-03-15'),
('Laura', 'Hernández', 'laura.hernandez@email.com', '555-0102', 'Av. Reforma 456', 'Guadalajara', 'Jalisco', '44100', '1990-07-22'),
('Miguel', 'Torres', 'miguel.torres@email.com', '555-0103', 'Calle Morelos 789', 'Monterrey', 'Nuevo León', '64000', '1988-11-08'),
('Carmen', 'Ruiz', 'carmen.ruiz@email.com', '555-0104', 'Av. Juárez 321', 'Puebla', 'Puebla', '72000', '1992-01-30'),
('Diego', 'Sánchez', 'diego.sanchez@email.com', '555-0105', 'Calle Hidalgo 654', 'Mérida', 'Yucatán', '97000', '1987-05-12');

-- Categorías
INSERT INTO categorias (nombre, descripcion) VALUES
('Electrónicos', 'Dispositivos electrónicos y gadgets'),
('Ropa', 'Vestimenta y accesorios'),
('Hogar', 'Artículos para el hogar y decoración'),
('Deportes', 'Equipamiento deportivo y fitness'),
('Libros', 'Literatura y material educativo'),
('Alimentación', 'Productos alimenticios y bebidas');

-- Productos
INSERT INTO productos (nombre, descripcion, precio, precio_costo, stock, categoria_id, codigo_barras) VALUES
('iPhone 14', 'Smartphone Apple iPhone 14 128GB', 25999.99, 20000.00, 15, 1, '1234567890123'),
('Samsung Galaxy S23', 'Smartphone Samsung Galaxy S23 256GB', 22999.99, 18000.00, 12, 1, '1234567890124'),
('Laptop Dell Inspiron', 'Laptop Dell Inspiron 15 Intel Core i5', 18999.99, 15000.00, 8, 1, '1234567890125'),
('Camisa Polo', 'Camisa polo 100% algodón', 599.99, 300.00, 25, 2, '1234567890126'),
('Jeans Levis', 'Pantalón de mezclilla Levis 501', 1299.99, 800.00, 18, 2, '1234567890127'),
('Sofá 3 plazas', 'Sofá moderno de 3 plazas color gris', 8999.99, 6000.00, 5, 3, '1234567890128'),
('Mesa de Centro', 'Mesa de centro de madera y vidrio', 2499.99, 1500.00, 10, 3, '1234567890129'),
('Bicicleta Montaña', 'Bicicleta de montaña 21 velocidades', 4999.99, 3500.00, 7, 4, '1234567890130'),
('Pelota de Fútbol', 'Pelota de fútbol profesional FIFA', 899.99, 500.00, 20, 4, '1234567890131'),
('Libro: JavaScript', 'Libro de programación JavaScript avanzado', 749.99, 400.00, 30, 5, '1234567890132');

-- Pedidos de ejemplo
INSERT INTO pedidos (cliente_id, total, estado) VALUES
(1, 26599.98, 'entregado'),
(2, 1899.98, 'procesando'),
(3, 5749.98, 'enviado'),
(4, 11499.98, 'pendiente'),
(5, 1649.98, 'entregado');

-- Detalles de pedidos
INSERT INTO detalles_pedido (pedido_id, producto_id, cantidad, precio_unitario, subtotal) VALUES
-- Pedido 1
(1, 1, 1, 25999.99, 25999.99),
(1, 4, 1, 599.99, 599.99),
-- Pedido 2
(2, 4, 2, 599.99, 1199.98),
(2, 10, 1, 749.99, 749.99),
-- Pedido 3
(3, 8, 1, 4999.99, 4999.99),
(3, 10, 1, 749.99, 749.99),
-- Pedido 4
(4, 6, 1, 8999.99, 8999.99),
(4, 7, 1, 2499.99, 2499.99),
-- Pedido 5
(5, 5, 1, 1299.99, 1299.99),
(5, 9, 1, 899.99, 899.99);

-- ===========================================
-- VISTAS ÚTILES PARA LA APLICACIÓN
-- ===========================================

-- Vista de productos con categoría
CREATE VIEW vista_productos AS
SELECT 
    p.id,
    p.nombre,
    p.descripcion,
    p.precio,
    p.stock,
    p.codigo_barras,
    c.nombre as categoria,
    p.activo,
    p.fecha_creacion
FROM productos p
LEFT JOIN categorias c ON p.categoria_id = c.id;

-- Vista de pedidos con cliente
CREATE VIEW vista_pedidos AS
SELECT 
    p.id,
    CONCAT(c.nombre, ' ', c.apellido) as cliente,
    c.email as cliente_email,
    p.total,
    p.estado,
    p.fecha_pedido
FROM pedidos p
JOIN clientes c ON p.cliente_id = c.id;

-- ===========================================
-- PROCEDIMIENTOS ALMACENADOS ÚTILES
-- ===========================================

DELIMITER //

-- Procedimiento para crear un nuevo pedido
CREATE PROCEDURE CrearPedido(
    IN p_cliente_id INT,
    IN p_producto_id INT,
    IN p_cantidad INT
)
BEGIN
    DECLARE v_precio DECIMAL(10,2);
    DECLARE v_subtotal DECIMAL(10,2);
    DECLARE v_pedido_id INT;
    
    -- Obtener precio del producto
    SELECT precio INTO v_precio FROM productos WHERE id = p_producto_id;
    SET v_subtotal = v_precio * p_cantidad;
    
    -- Crear el pedido
    INSERT INTO pedidos (cliente_id, total) VALUES (p_cliente_id, v_subtotal);
    SET v_pedido_id = LAST_INSERT_ID();
    
    -- Agregar detalle del pedido
    INSERT INTO detalles_pedido (pedido_id, producto_id, cantidad, precio_unitario, subtotal)
    VALUES (v_pedido_id, p_producto_id, p_cantidad, v_precio, v_subtotal);
    
    -- Actualizar stock
    UPDATE productos SET stock = stock - p_cantidad WHERE id = p_producto_id;
    
    SELECT v_pedido_id as pedido_id;
END //

DELIMITER ;

-- ===========================================
-- ÍNDICES PARA MEJOR RENDIMIENTO
-- ===========================================

CREATE INDEX idx_productos_categoria ON productos(categoria_id);
CREATE INDEX idx_productos_activo ON productos(activo);
CREATE INDEX idx_clientes_email ON clientes(email);
CREATE INDEX idx_pedidos_cliente ON pedidos(cliente_id);
CREATE INDEX idx_pedidos_estado ON pedidos(estado);
CREATE INDEX idx_detalles_pedido ON detalles_pedido(pedido_id);

-- ===========================================
-- MOSTRAR INFORMACIÓN DE LA BASE DE DATOS
-- ===========================================

SELECT 'Base de datos creada exitosamente!' as mensaje;
SELECT 'Tablas creadas:' as info;
SHOW TABLES;

SELECT 'Datos insertados:' as info;
SELECT 'Usuarios' as tabla, COUNT(*) as registros FROM usuarios
UNION ALL
SELECT 'Clientes' as tabla, COUNT(*) as registros FROM clientes
UNION ALL
SELECT 'Categorías' as tabla, COUNT(*) as registros FROM categorias
UNION ALL
SELECT 'Productos' as tabla, COUNT(*) as registros FROM productos
UNION ALL
SELECT 'Pedidos' as tabla, COUNT(*) as registros FROM pedidos;
