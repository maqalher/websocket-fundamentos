

const socketController = (socket) => {
    // console.log('Cliente conectado', socket.id);

    socket.on('enviar-mensaje', (payload, callback) => {
        console.log(payload)

        // this.io.emit('enviar-mensaje', payload);
        const id = 123456;
        callback(id);
        // socket.emit('enviar-mensaje', payload); // Solo manda respuesta al cliente que envio peticion
        socket.broadcast.emit('enviar-mensaje', payload); // Envia a todos menos al que envio

    });


    socket.on('disconnect', () => {
        // console.log('Cliente desconectado', socket.id)
    })
}

module.exports = {
    socketController
}