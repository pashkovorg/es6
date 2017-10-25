//async catch

function makeRequest() {
    try {
        getJSON()
            .then(result => {
                // json parsing could cause an error
                const data = JSON.parse(result);
                console.log(data)
            })
        // uncomment this to catch error
        // .catch((err) => {
        //   console.log(err)
        // })
    } catch (err) {
        console.log(err)
    }
}

async function makeRequest() {
    try {
        // json parsing could cause an error
        const data = JSON.parse(await getJSON())
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}