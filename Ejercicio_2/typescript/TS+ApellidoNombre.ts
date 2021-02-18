async function operacion (string: string)  {
    return await import('./modules/_resta')                      
}

const operaciones = (a: number, b: number, string: string = 'suma') => { 
    return operacion(string)
        .then(func => func)
        .catch(e => e)
};


operaciones(5, 4, 'resta');