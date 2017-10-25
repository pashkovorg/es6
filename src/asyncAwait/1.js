//promise - async difference

function makeRequest() {
    http.getJSON("http://url")
        .then(data => {
            console.log(data);
            return "done"
        });
}
makeRequest();

/*
async function makeRequest2() {
    console.log(await getJSON())
    return "done";
}

makeRequest2();*/
