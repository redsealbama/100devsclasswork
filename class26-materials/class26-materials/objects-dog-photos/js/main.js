//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random") // the server URL
    .then(res => res.json()) // parse response as JSON
    .then(data => {  // everything that comes back from the server goes through this data function
        console.log(data.message) //console.log data.message
        document.querySelector('img').src = data.message // data.message is equal to the img src found on our html
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    //leons example
