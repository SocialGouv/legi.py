const getConteneurData = (knex, filters) =>
  knex
    .clearSelect()
    .clearWhere()
    .clearOrder()
    .select()
    .from("conteneurs")
    .where(filters)
    .orderBy("date_publi", "desc")
    .first()
    .catch(console.log);

module.exports = getConteneurData;
