var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyWvlXmSn55006bY'}).base('app7RMaUfSoIVwdde');

base('user').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 5,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log(record.get('ID'), record.get('company')); 
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});



base('user').create({
  "ID": 1,
  "company": "Google",
  "position": "Software Engineer ",
  "salary": 10,
  "age": "24"
}, function(err, record) {
    if (err) { console.error(err); return; }
    console.log(record.getId());
});
