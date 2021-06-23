const fs = require('fs')
const axios = require('axios')

function fetchData() {
  let data = []
  axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos'
  })
  .then(result => {
      result.data.forEach(el => {
          let rawData = {
              id: el.id,
              title: el.title,
              AlbumId: el.albumId,
              url: el.url,
              thumbnailUrl: el.thumbnailUrl
          }
          data.push(rawData)
      })
      let parseData = JSON.stringify(data)
      fs.writeFile('./seeders/data.json', parseData, 'utf8', function (err) {
          if (err) {
              console.log("An error occured while writing JSON Object to File.");
              return console.log(err);
          }
       
          console.log("JSON file has been saved.");
      })
  })
}

fetchData()
