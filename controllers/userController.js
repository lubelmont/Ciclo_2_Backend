const userServices = require('../services/userServices');

const loginUserByEmail = async (req, res) => {
    const { email, password } = req.body;
    console.log(`Email: ${email}, Password: ${password}`); // Verificar los datos recibidos
    if (!email || !password) {
        return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }
    try {
        const token = await userServices.loginUserByEmail(email, password);
        if (!token) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        res.status(200).json({ token });
    } catch (error) {
        
        console.error('Error al iniciar sesión:', error.message);
        
        // Usar el statusCode del error, o 500 por defecto
        const statusCode = error.statusCode || 500;
        
        res.status(statusCode).json({ 
            message: error.message 
        });
    }
}

module.exports = {
    loginUserByEmail
};