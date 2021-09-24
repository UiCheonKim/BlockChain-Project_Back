module.exports = {
  list: {
    query: "select * from t_person",
  },
  createPerson: {
    query: "insert into own_url_table set ?",
    //query문이 자동으로 완성되서 들어감
  },
  geturl: {
    query: "select own_url from own_url_table where own_addr = ?",
  },
  createImage: {
    query: "insert into newtable set ?",
  },
  deletePerson: {
    query: "delete from t_person where id=?",
  },
  updatePerson: {
    query: "update t_person set ? where id=?",
  },
};
