export const Item = ({ datos }) => {
    const datos = [
        {firstname: "demo0", lastname: "0demo", dni: 1234},
        {firstname: "demo1", lastname: "1demo", dni: 5678},
        {firstname: "demo2", lastname: "2demo", dni: 9012},
        {firstname: "demo3", lastname: "3demo", dni: 3456}
    ];
    return (
        <div>
            <h1>Bienvenido {datos.firstname}</h1>
            <h2>Señor/a {datos.lastname}, que actividad le gustaría hacer hoy?</h2>
            <p>{datos.dni}</p>
        </div>
    )
}