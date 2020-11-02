onmessage = function(e) {
  console.log('Message received from main script: '+e.data);
  let workerResult = 'Result: ' + (e.data.first * e.data.second);
  console.log('Posting message back to main script: "'+workerResult+'"');
  postMessage(workerResult);
}
