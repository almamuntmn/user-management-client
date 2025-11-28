/*
* 1. for the post ==> you have to mention the method
* 2. add an object after the url of the fetch
* 3. inside the object must mention method: 'POST'
* 4. mention the headers: which is an object itself
* 5. in the headers object mention content-type: application/json and the value will be application/json to inform the server that you are sending json data
* 6. add body to the fetch option
* 7. value of the body will be the json data that you want to send to the server
* 8. make sure that you use JSON.stringify() to convert the json data to string into json
*/ 