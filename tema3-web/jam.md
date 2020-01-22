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

* First, it assumes the remote API enables [CORS](cors), which allows your domain to directly access its domain. Many APIs allow this, but not all.
* Secondly, it assumes anonymous access. This is actually _not_ the norm as typically an API requires some kind of identifier. Sometimes this isn’t a big deal. The API has a generous free tier and is not likely to be abused. But as soon as you put an API key into your code, anyone who can view source can then take that key and use it themselves. *Some APIs will let you lock down what domains can use that key, and in that case, you’re pretty safe*. But you absolutely want to keep that in mind.
*   Finally, you are tied to working with data from the API in only the form it provides. That may not sound like a big deal, but what if the API returned a _lot_ of data you don’t need? You’re putting that burden on the user which means (potentially) a slower web site and a (again, potentially) frustrating experience. This is where [GraphQL](graphql) really shines as it lets you specify exactly what data you need.

### Option Two - An API Proxy

The second option is pretty similar to the first, with the main difference being that your code hits an API running on _your_ server. The “server” could be just that, an app server running somewhere in house, but typically will be a serverless platform instead. Basically, instead of your code making an HTTP request to some remote domain, it requests your code which then itself requests data from the remote domain.