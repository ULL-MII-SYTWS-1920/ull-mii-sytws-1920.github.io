API testing requires an application to interact with API. 
Rest API can be tested with tools like:

* Insomnia
* Postman
* Curl

##### Example Using Insomnia

![request with inmsomnia](/assets/images/insomnia.png)

* [https://insomnia.rest/](https://insomnia.rest/)

##### Example Using Postman

![request with Postman](/assets/images/postman.png)

* [https://www.getpostman.com/](https://www.getpostman.com/)
* [API Building and Testing Made Easier with Postman](https://www.sitepoint.com/api-building-and-testing-made-easier-with-postman/)
* [Postman docs](https://learning.getpostman.com/docs/postman/launching_postman/installation_and_updates/)

##### Example Using curl

```
~/.../chapter20-node-js-crguezl/the-http-module(master)]$ curl -d "param1=value1&param2=value2" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://10.150.22.51:8000/data

<h1>Hello!</h1>
<p>You asked for 
<code>
/data 
<!-- The url is the full URL without the server, protocol or port. -->
</code>
using the POST method
</p>
<p>Your headers:</p> 
<pre>
{
  host: '10.150.22.51:8000',
  'user-agent': 'curl/7.54.0',
  accept: '*/*',
  'content-type': 'application/x-www-form-urlencoded',
  'content-length': '27'
}
</pre>
```

* [curl.md](https://gist.github.com/subfuzion/08c5d85437d5d4f00e58) gist illustrating the use of curl