const DataBase = require("./db")

const saveOrphanage = require("./saveOrphanage")

DataBase.then(async db => {
    //await saveOrphanage(db, {
    //    lat: "-27.222633",
    //    lng: "-49.6555874",
    //    name: "Lar dos meninos",
    //    about: "Presta assitência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
    //    whatsapp: "98939433439439",
    //    images: [
    //        "https://images.unsplash.com/photo-1599663253423-7cad6e5fae1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNzEzNDY5ODc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    //        "https://images.unsplash.com/photo-1709614506729-b7b00a80d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNzEzNDY5OTM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
    //    ].toString(),
    //    instructions: "Venha como se sentir avontade e traga muito amor e paciência para dar.",
    //    opening_hours: "Horários de visitas Das 18h até 8h",
    //    open_on_weekends: "0"
    //})

    const selected = await db.all(`SELECT * FROM orphanages`)
    console.log(selected)

    //const orphanage = await db.all("SELECT * FROM orphanages WHERE id=3")
    //console.log(orphanage)

    //console.log(await db.run("DELETE FROM orphanages WHERE id=5"))
})

