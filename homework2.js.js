const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
function transformJson(jsonString) {
    const data = JSON.parse(jsonString);
    const list = data.list;
    let result = { list: [] };

    list.forEach(function(elem) {
        result.list.push(elem);
    });

    console.log(result);
}

transformJson(jsonString);
