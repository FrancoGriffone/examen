muestra = function(param) {
    param();
};

function param() {
    let saludar = "Openbravo!!!" 
    //la variable puede utilizarse tanto de manera global 
    //como local para que funcione
    console.log(saludar)
};
muestra(param);