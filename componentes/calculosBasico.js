function geradorNumeros()
{
    return Math.floor(Math.random() * 100) + 1;
}
function celsiusFareinath(celsius)
{
    return(celsius * 9) / 5 +32;
}

module.exports = {
    geradorNumeros,
    celsiusFareinath,
};

