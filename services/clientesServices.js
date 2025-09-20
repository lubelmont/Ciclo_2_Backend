const ClienteModel = require('../models/clienteModel');


const getAllClientes = async(limite, offset) => {




    clientesList = await ClienteModel.getAllClientes(limite, offset);

    clientesList = clientesList.sort((a, b) => {
        const apellidoA = a.apellido.toLowerCase();
        const apellidoB = b.apellido.toLowerCase();
        if (apellidoA < apellidoB) return -1;
        if (apellidoA > apellidoB) return 1;
        return 0;
    }); // Ordenar por apellido ascendente



    return clientesList;

}

const createCliente = async (cliente) => {
    return await ClienteModel.createCliente(cliente);
}

module.exports = {
    getAllClientes,
    createCliente
};

