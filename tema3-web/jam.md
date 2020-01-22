# The JAM Stack

You may have already seen or worked on a Jamstack site! They might be built using by hand, or with Jekyll, Hugo, Nuxt, Next, Gatsby, or another <a href="https://www.staticgen.com">static site generator</a>...

* [What is the JAM Stack?](https://youtu.be/Y8PXMbr0Kqo) Youtube video by Maximilian Schwarzmüller. 2018
  * [The repo](https://github.com/academind/yt-jamstack-intro)
* [Do we really need this JAMstack thing? And what even is it?](https://youtu.be/YljH-aqKUFk) by Phil Hawksworth. YouTube video

## Multiple Ways of API Integration in your JAMStack

* [Multiple Ways of API Integration in your JAMStack](https://www.raymondcamden.com/2019/07/25/multiple-ways-of-api-integration-in-your-jamstack) by Raymon Camden
  * Associated GitHub repo [https://github.com/cfjedimaster/jamstack_api_approaches](https://github.com/cfjedimaster/jamstack_api_approaches)

> When adding interactivity to a JAMStack site, typically you think of APIs, remote services that can be used to get dynamic data which is then rendered on your site with JavaScript.
But there’s multiple ways of using those APIs, and JavaScript, that may not be apparent to you at first. 

### Option One - Direct Access to a Remote API

* Associated GitHub repo [https://github.com/cfjedimaster/jamstack_api_approaches](https://github.com/cfjedimaster/jamstack_api_approaches)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://vuejs.org/js/vue.min.js"></script>
  <title>SWAPI Example</title>
</head>
<body>

<div id="app">
  <h1>Star Wars Films</h1>
  <ul>
    <li v-for="film in films">{% raw %}{{ film.title }}{% endraw %}</li>
  </ul>
</div>

<script>
const app = new Vue({
  el:'#app',
  data: {
    films:[]
  },
  created() {
    fetch('https://swapi.co/api/films')
    .then(res => res.json())
    .then(res => {
      this.films = res.results;
      let titles = this.films.map(x => x.title);
      console.log(titles);
    });
  }
});
</script>
</body>
</html>
```

* First, it assumes the remote API enables [CORS](cors), which allows your domain to directly access its domain. Many APIs allow this, but not all.
* Secondly, it assumes anonymous access. This is actually _not_ the norm as typically an API requires some kind of identifier. Sometimes this isn’t a big deal. The API has a generous free tier and is not likely to be abused. But as soon as you put an API key into your code, anyone who can view source can then take that key and use it themselves. *Some APIs will let you lock down what domains can use that key, and in that case, you’re pretty safe*. But you absolutely want to keep that in mind.
*   Finally, you are tied to working with data from the API in only the form it provides. That may not sound like a big deal, but what if the API returned a _lot_ of data you don’t need? You’re putting that burden on the user which means (potentially) a slower web site and a (again, potentially) frustrating experience. This is where [GraphQL](graphql) really shines as it lets you specify exactly what data you need.

### Option Two - An API Proxy

The second option is pretty similar to the first, with the main difference being that your code hits an API running on _your_ server. The *server* could be just that, an app server running somewhere in house, but typically will be a [serverless](serverless) platform instead. Basically, instead of your code making an HTTP request to some remote domain, it requests your code which then itself requests data from the remote domain.

Consider this example using the [Weather API](https://developer.here.com/documentation/weather/topics/overview.html) from https://developer.here.com/documentation/examples/rest/auto_weather/weather-forecast-7days-astronomy. Their API requires two specific authentication values, an `app_id` and `app_code`. If I put that in my client-side code, anyone could use it, which wouldn’t be desirable. I’m going to use a serverless proxy set up with [Netlify Functions](https://www.netlify.com/docs/functions/) to proxy requests to HERE’s API from my client side code.

```js
const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  try {
    let app_id = process.env.HERE_APP_ID;
    let app_code = process.env.HERE_APP_CODE;

    const response = await fetch(`https://weather.api.here.com/weather/1.0/report.json?app_id=${app_id}&app_code=${app_code}&product=forecast_astronomy&name=Lafayette,LA`, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    let results = data.astronomy.astronomy.map(r => {
      return {
        moonRise:r.moonrise,
        moonSet:r.moonset,
        moonPhase:r.moonPhase,
        moonPhaseDesc:r.moonPhaseDesc,
        time:r.utcTime
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ data:results })
    };
  } catch (err) {
    console.log(err); 
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) 
    };
  }
};
```

In general this is just some trivial Node code, but I want to point out some specific tweaks I did here:

1. First, HERE’s weather API supports returning astronomy data. For my demo I want to know about the moon, so you can see me filtering that out in the `map` call. This will result in less data going to be my client-side code. 
2. Also note that the API has slightly different casing going on. So for `moonrise` it’s all lowercase, but then they use `moonPhase`. There may be a good reason for that, but to me it wasn’t what I expected so I took the opportunity to reformat the data a bit as well.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<script src="https://vuejs.org/js/vue.min.js"></script>
	<title>Moon Data</title>
</head>
<body>

<div id="app">
	<h1>Moon Data for Lafayette, LA</h1>
	<ul>
		<li v-for="result in results">
			On {{result.time | formatDate}}, the moon will rise at {{result.moonRise}} and set at {{result.moonSet}}. It is in {{result.moonPhaseDesc}}. 
		</li>
	</ul>
</div>

<script>
Vue.filter('formatDate', function(d) {
	if(!window.Intl) return d;
	return new Intl.DateTimeFormat('en-US').format(new Date(d));
}); 

const app = new Vue({
	el:'#app',
	data: {
		results:[]
	},
	created() {
		fetch('/.netlify/functions/get-moon')
		.then(res => res.json())
		.then(res => {
			this.results = res.data;
		});
	}
});
</script>
</body>
</html>
```

So, this one is a bit more work, but depending on your app platform, it could be easy. As I said, I used Netlify Functions, and outside of a configuration issue I had, it was trivial. What does this give us?

*   We have the ability to hide any required keys.
*   We have the ability to shape the result. This could include removing data we don’t need, changing data for our needs, or heck, we could even add data too if it would be useful to the client.
*   We could even switch providers. If I need to use someone besides [https://weather.ls.hereapi.com/](https://weather.ls.hereapi.com/) for my data, I can change it at the server and the front-end code won’t have to know. I’d just ensure the result data matches what I used before.
*   You could also add caching. Some API providers ask that you don’t do this, but you could store data locally and only fetch when you need to.
*   The only real *drawback* I can see is that it’s definitely a bit more work. To me this was rather easy, but I’ve got experience writing code on the server and working with serverless platforms. I don’t want to minimize the fact that not having these skills would be a bit of a jump if your only JavaScript experience is in client-side code.