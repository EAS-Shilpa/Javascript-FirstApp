request = require('request')

//console .log(process.argv);
const data = process.argv;
let url = ``
const idProvided = !isNaN(parseInt(process.argv[3]))
if (idProvided) {
    url = (`https://jsonplaceholder.typicode.com/$%7Bprocess.argv[2]%7D/$%7Bprocess.argv[3]%7D%60`)
} else {

    url = (`https://jsonplaceholder.typicode.com/${process.argv[2]}?${process.argv.slice(3).join("&")}`)

}
console.log(url)

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)

    if (idProvided) {
        console.table(data)
    } else {

        if (data.length > 0) {
            //console.log(data);
            console.table(data)
        }
        else {
            console.log("Data not found")

        }
    }
});