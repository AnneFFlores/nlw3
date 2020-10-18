const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {


  //inserir dados na tabela
  await saveOrphanage(db, {   
      lat: "-23.4270688",
      lng: "-51.9627964",
      name:"Lar de amor",
      description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social." ,
      images: [        
        "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      
        "https://images.unsplash.com/photo-1567701554261-fcc4bda64847?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      ].toString(),
  
      instructions: "Venha ver como é se sentir a vontade e traga muito amor e paciência para dar.",
  
      opening_hours: "Horário de visitas: Das 8h às 18h.",
  
      open_on_weekends:"1"
  })
    
 // consultar dados da tabela
 const selectedOrphanages = await db.all("SELECT * FROM orphanages")
 console.log(selectedOrphanages)

 //consultar somente 1 orphanage, pelo ID
 const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
 console.log(orphanage)
})