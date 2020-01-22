# Serverless

## ¿Qué es Serverless?

**[Serverless Stack](https://serverless-stack.com/chapters/es/what-is-serverless.html)**

> La computación sin servidor (o serverless para abreviar) es un modelo de ejecución en el que el proveedor en la nube (AWS, Azure o Google Cloud) es responsable de ejecutar un fragmento de código mediante la asignación dinámica de los recursos. Y cobrando solo por la cantidad de recursos utilizados para ejecutar el código. El código, generalmente, se ejecuta dentro de contenedores sin estado que pueden ser activados por una variedad de eventos que incluyen solicitudes HTTP, eventos de base de datos, servicios de colas, alertas de monitoreo, carga de archivos, eventos programados (trabajos cron), etc. El código que se envía a al proveedor en la nube para la ejecución es generalmente en forma de una función. Por lo tanto, serverless a veces se denomina _“Funciones como servicio”_ o _“FaaS”_. Las siguientes son las ofertas de FaaS de los principales proveedores en la nube:

*   AWS: [AWS Lambda](https://aws.amazon.com/lambda/)
*   Microsoft Azure: [Azure Functions](https://azure.microsoft.com/en-us/services/functions/)
*   Google Cloud: [Cloud Functions](https://cloud.google.com/functions/)

Mientras que serverless abstrae la infraestructura subyacente al desarrollador, los servidores aún participan en la ejecución de nuestras funciones.

Dado que el código se ejecutará como funciones individuales, hay algunas cosas que debemos tener en cuenta.

## Microservicios

> El cambio más grande al que nos enfrentamos durante la transición a un mundo sin servidor es que nuestra aplicación debe ser diseñada en forma de funciones. Puede que estés acostumbrado a implementar tu desarrollo como una sola aplicación monolítica en Rails o Express. Pero, en el mundo sin servidor normalmente se requiere que adopte una arquitectura basada en microservicios. Puedes solucionar esto ejecutando toda la aplicación dentro de una sola función como un monolito y manejando el enrutamiento por ti mismo. Pero esto no se recomienda ya que es mejor reducir el tamaño de tus funciones. 

## serverless-stack.com tutorial


### Preface

*   [Who is this guide for?](https://serverless-stack.com/chapters/who-is-this-guide-for.html)
*   [What does this guide cover?](https://serverless-stack.com/chapters/what-does-this-guide-cover.html)
*   [How to get help?](https://serverless-stack.com/chapters/how-to-get-help.html)

### Introduction

*   [What is Serverless?](https://serverless-stack.com/chapters/what-is-serverless.html)
*   [What is AWS Lambda?](https://serverless-stack.com/chapters/what-is-aws-lambda.html)
*   [Why create Serverless apps?](https://serverless-stack.com/chapters/why-create-serverless-apps.html)

### Set up your AWS account

*   [Create an AWS account](https://serverless-stack.com/chapters/create-an-aws-account.html)
*   [Create an IAM user](https://serverless-stack.com/chapters/create-an-iam-user.html)
    *   [What is IAM](https://serverless-stack.com/chapters/what-is-iam.html)
    *   [What is an ARN](https://serverless-stack.com/chapters/what-is-an-arn.html)
*   [Configure the AWS CLI](https://serverless-stack.com/chapters/configure-the-aws-cli.html)

### Setting up the Serverless backend

*   [Create a DynamoDB table](https://serverless-stack.com/chapters/create-a-dynamodb-table.html)
*   [Create an S3 bucket for file uploads](https://serverless-stack.com/chapters/create-an-s3-bucket-for-file-uploads.html)
*   [Create a Cognito user pool](https://serverless-stack.com/chapters/create-a-cognito-user-pool.html)
    *   [Create a Cognito test user](https://serverless-stack.com/chapters/create-a-cognito-test-user.html)
*   [Set up the Serverless Framework](https://serverless-stack.com/chapters/setup-the-serverless-framework.html)
    *   [Add support for ES6/ES7 JavaScript](https://serverless-stack.com/chapters/add-support-for-es6-es7-javascript.html)
*   [Initialize the backend repo](https://serverless-stack.com/chapters/initialize-the-backend-repo.html)

### Building a Serverless REST API

*   [Add a create note API](https://serverless-stack.com/chapters/add-a-create-note-api.html)
*   [Add a get note API](https://serverless-stack.com/chapters/add-a-get-note-api.html)
*   [Add a list all the notes API](https://serverless-stack.com/chapters/add-a-list-all-the-notes-api.html)
*   [Add an update note API](https://serverless-stack.com/chapters/add-an-update-note-api.html)
*   [Add a delete note API](https://serverless-stack.com/chapters/add-a-delete-note-api.html)
*   [Working with 3rd party APIs](https://serverless-stack.com/chapters/working-with-3rd-party-apis.html)
    *   [Setup a Stripe account](https://serverless-stack.com/chapters/setup-a-stripe-account.html)
    *   [Add a billing API](https://serverless-stack.com/chapters/add-a-billing-api.html)
    *   [Load secrets from .env](https://serverless-stack.com/chapters/load-secrets-from-env.html)
    *   [Test the billing API](https://serverless-stack.com/chapters/test-the-billing-api.html)
*   [Unit tests in Serverless](https://serverless-stack.com/chapters/unit-tests-in-serverless.html)
*   [Handle API Gateway CORS errors](https://serverless-stack.com/chapters/handle-api-gateway-cors-errors.html)

### Deploying the backend

*   [Deploy the APIs](https://serverless-stack.com/chapters/deploy-the-apis.html)
*   [Create a Cognito identity pool](https://serverless-stack.com/chapters/create-a-cognito-identity-pool.html)
    *   [Cognito user pool vs identity pool](https://serverless-stack.com/chapters/cognito-user-pool-vs-identity-pool.html)
*   [Test the APIs](https://serverless-stack.com/chapters/test-the-apis.html)

### Setting up a React app

*   [Create a new React.js app](https://serverless-stack.com/chapters/create-a-new-reactjs-app.html)
    *   [Initialize the frontend repo](https://serverless-stack.com/chapters/initialize-the-frontend-repo.html)
    *   [Add app favicons](https://serverless-stack.com/chapters/add-app-favicons.html)
    *   [Set up custom fonts](https://serverless-stack.com/chapters/setup-custom-fonts.html)
    *   [Set up Bootstrap](https://serverless-stack.com/chapters/setup-bootstrap.html)
*   [Handle routes with React Router](https://serverless-stack.com/chapters/handle-routes-with-react-router.html)
    *   [Create containers](https://serverless-stack.com/chapters/create-containers.html)
    *   [Adding links in the navbar](https://serverless-stack.com/chapters/adding-links-in-the-navbar.html)
    *   [Handle 404s](https://serverless-stack.com/chapters/handle-404s.html)
*   [Configure AWS Amplify](https://serverless-stack.com/chapters/configure-aws-amplify.html)

### Building a React app

*   [Create a login page](https://serverless-stack.com/chapters/create-a-login-page.html)
    *   [Login with AWS Cognito](https://serverless-stack.com/chapters/login-with-aws-cognito.html)
    *   [Add the session to the state](https://serverless-stack.com/chapters/add-the-session-to-the-state.html)
    *   [Load the state from the session](https://serverless-stack.com/chapters/load-the-state-from-the-session.html)
    *   [Clear the session on logout](https://serverless-stack.com/chapters/clear-the-session-on-logout.html)
    *   [Redirect on login and logout](https://serverless-stack.com/chapters/redirect-on-login-and-logout.html)
    *   [Give feedback while logging in](https://serverless-stack.com/chapters/give-feedback-while-logging-in.html)
    *   [Create a Custom React Hook to Handle Form Fields](https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html)
*   [Create a signup page](https://serverless-stack.com/chapters/create-a-signup-page.html)
    *   [Create the signup form](https://serverless-stack.com/chapters/create-the-signup-form.html)
    *   [Signup with AWS Cognito](https://serverless-stack.com/chapters/signup-with-aws-cognito.html)
*   [Add the create note page](https://serverless-stack.com/chapters/add-the-create-note-page.html)
    *   [Call the create API](https://serverless-stack.com/chapters/call-the-create-api.html)
    *   [Upload a file to S3](https://serverless-stack.com/chapters/upload-a-file-to-s3.html)
*   [List all the notes](https://serverless-stack.com/chapters/list-all-the-notes.html)
    *   [Call the list API](https://serverless-stack.com/chapters/call-the-list-api.html)
*   [Display a note](https://serverless-stack.com/chapters/display-a-note.html)
    *   [Render the note form](https://serverless-stack.com/chapters/render-the-note-form.html)
    *   [Save changes to a note](https://serverless-stack.com/chapters/save-changes-to-a-note.html)
    *   [Delete a note](https://serverless-stack.com/chapters/delete-a-note.html)
*   [Create a settings page](https://serverless-stack.com/chapters/create-a-settings-page.html)
    *   [Add Stripe keys to config](https://serverless-stack.com/chapters/add-stripe-keys-to-config.html)
    *   [Create a billing form](https://serverless-stack.com/chapters/create-a-billing-form.html)
    *   [Connect the billing form](https://serverless-stack.com/chapters/connect-the-billing-form.html)
*   [Set up secure pages](https://serverless-stack.com/chapters/setup-secure-pages.html)
    *   [Create a route that redirects](https://serverless-stack.com/chapters/create-a-route-that-redirects.html)
    *   [Use the redirect routes](https://serverless-stack.com/chapters/use-the-redirect-routes.html)
    *   [Redirect on login](https://serverless-stack.com/chapters/redirect-on-login.html)

### Deploying the backend to production

*   [Getting production ready](https://serverless-stack.com/chapters/getting-production-ready.html)
*   [What is Infrastructure as Code?](https://serverless-stack.com/chapters/what-is-infrastructure-as-code.html)
    *   [Configure DynamoDB in Serverless](https://serverless-stack.com/chapters/configure-dynamodb-in-serverless.html)
    *   [Configure S3 in Serverless](https://serverless-stack.com/chapters/configure-s3-in-serverless.html)
    *   [Configure Cognito User Pool in Serverless](https://serverless-stack.com/chapters/configure-cognito-user-pool-in-serverless.html)
    *   [Configure Cognito Identity Pool in Serverless](https://serverless-stack.com/chapters/configure-cognito-identity-pool-in-serverless.html)
*   [Deploy your Serverless infrastructure](https://serverless-stack.com/chapters/deploy-your-serverless-infrastructure.html)
*   [Automating Serverless deployments](https://serverless-stack.com/chapters/automating-serverless-deployments.html)
    *   [Setting up your project on Seed](https://serverless-stack.com/chapters/setting-up-your-project-on-seed.html)
    *   [Configure secrets in Seed](https://serverless-stack.com/chapters/configure-secrets-in-seed.html)
    *   [Deploying through Seed](https://serverless-stack.com/chapters/deploying-through-seed.html)
    *   [Set custom domains through Seed](https://serverless-stack.com/chapters/set-custom-domains-through-seed.html)
*   [Test the configured APIs](https://serverless-stack.com/chapters/test-the-configured-apis.html)
*   [Monitoring deployments in Seed](https://serverless-stack.com/chapters/monitoring-deployments-in-seed.html)

### Deploying the frontend to production

*   [Automating React Deployments](https://serverless-stack.com/chapters/automating-react-deployments.html)
    *   [Manage environments in Create React App](https://serverless-stack.com/chapters/manage-environments-in-create-react-app.html)
    *   [Create a build script](https://serverless-stack.com/chapters/create-a-build-script.html)
    *   [Setting up your project on Netlify](https://serverless-stack.com/chapters/setting-up-your-project-on-netlify.html)
    *   [Custom Domains in Netlify](https://serverless-stack.com/chapters/custom-domain-in-netlify.html)
*   [Frontend workflow](https://serverless-stack.com/chapters/frontend-workflow.html)

### Conclusion

*   [Wrapping up](https://serverless-stack.com/chapters/wrapping-up.html)
*   [Futher reading](https://serverless-stack.com/chapters/further-reading.html)
*   [Translations](https://serverless-stack.com/chapters/translations.html)
*   [Giving back](https://serverless-stack.com/chapters/giving-back.html)
*   [Changelog](https://serverless-stack.com/chapters/changelog.html)
*   [Staying up to date](https://serverless-stack.com/chapters/staying-up-to-date.html)