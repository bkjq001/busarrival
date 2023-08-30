
const { default: axios } = require("axios")

const busStop = "18141"
const api = 
  `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStop}`

const config = {
  headers: {
    'AccountKey' : 'xHrBZD3HTbqeGcgRVnd/1A=='
  }
}
//Here we CREATE an asynchronous function
async function loadBusData() {
  console.log("start")

  // You can ONLY use await inside an async function
  // axios.get() gives me back a Promise<Object>
  const res = await axios.get(api, config)
    //.then((res) => console.log(res.data))
    //.catch((err) => {
// // What do I want to do now that my request has errorred? 
    //console.log(err)
    //})

  console.log(res.data.Services)
  console.log("end")

}

// Here we RUN our newly created async function
loadBusData() // Promise<void>
.catch((err) => console.log(err))


