import express from 'express';

const app = express();
const port = 8000;

app.use(express.json());

let clientes = []

app.post('/clientes',(req,res) => {
    const cliente = req.body;
    clientes.push(cliente);
    res.status(201).json(cliente);
});

app.get('/clientes',(req, res) => {
    res.json(clientes);
})

app.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const novoCliente = req.body;
    clientes[id] = novoCliente;
    res.json(clientes[id]);
})

app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
    clientes.splice(id,1);
    res.json({mensagem: 'Cliente deletado com sucesso'})
})