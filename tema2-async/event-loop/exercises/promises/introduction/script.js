if(window.Promise) {

  console.log('Promise found');

  let promise=new Promise(function(resolve,reject){
        let request = new XMLHttpRequest();

        request.open('GET', 'http://api.icndb.com/jokes/random');
        //request.open('GET', 'http://api.icndb.cam/');
        
        request.onload = function() {
          if (request.status == 200) {
            resolve(request.response); //we get the data here.So, resolve the Promise
          }
          else {
            reject(Error(request.statusText)); //if status is not 200 OK, reject.
          }
        };

        request.onerror = function() {
          reject(Error("Error fetching data.")); //error occurred, reject the Promise
        };

        request.send(); //send the request
  });

  console.log('Asynchronous request made.');

  promise.then(function(data){
        console.log('Got data! Promise fulfilled.');
        document.getElementById('joke').innerHTML=JSON.parse(data).value.joke;
      }).catch( 
    (err) => { 
      console.log(err);
      document.getElementById('joke').innerHTML= err
  });

}
else console.log('Promise not available');