const Database = require("./db");

Database.then(async db => {
  //inserir dados na tabela
 /* await db.run(`
     INSERT INTO orphanages (
       lat, 
       lng, 
       name, 
       about,
       whatsapp,
       images,
       instructions,
       opening_hours,
       open_on_weekends
     ) VALUES (
    "-23.4270688",
    "-51.9527964",
    "Lar dos meninos",
    "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social." ,
    "44999670711",
    "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "Venha ver como é se sentir a vontade e traga muito amor e paciência para dar.",
    "Horário de visitas: Das 8h às 18h.",
    "0"
  );
    
`);*/

  // consultar dados da tabela
  //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  //console.log(selectedOrphanages)

  //consultar somente 1 orphanage, pelo id
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)


})

