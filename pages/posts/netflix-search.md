---

title: Building an International Netflix Content Search App with ChatGPT

date: 2023/04/08

description: I built a Netflix Content Comparison tool using AWS Serverless, Python Lambda functions for the back end, and Chat-GPT 4 helped create most of the Angular front end.

tag: AWS, ChatGPT 4, Python, Angular 

author: Evan Caplan

---

## Repositories

[Netflix Search UI](https://github.com/evancaplan/netflix-search-ui)\
[Netflix Search Service](https://github.com/evancaplan/netflix-search-service)

## Demo
_Please click the image below to view the demo on Youtube._
[![Netflix Search Demo](https://img.youtube.com/vi/N_ER0gkuWSk/0.jpg)](https://www.youtube.com/watch?v=N_ER0gkuWSk)


## Introduction

My wife and I often need help finding shows or movies on Netflix that are available in both our countries.
When we want to watch a show or a movie on Netflix, a lot of the time, we find something we each want to watch, but the
other person doesn't have the listing on their country's Netflix.
So I built a tool around the [uNoGS Next Generation API](https://rapidapi.com/unogs/api/unogsng) on Rapid
API.

I also had an ulterior motive for wanting to build this tool; I wanted to get more hands-on experience using AWS and
its serverless tools.
I just became an AWS Certified Cloud practitioner.
To make things more interesting, I let Chat GPT 4 build most of the Angular front end.
I know, we could just use a VPN, but where is the fun in that?

## How I Built the Back End

I won't lie; at first, I didn't know much about what I was doing. I created Python AWS Lambda functions to get all the
needed data, but I manually set those up in the UI.
I also added my API key for uNoGS to AWS Secrets Manager and configured the Lambdas to get the API key from the manager.
I created a Lambda to find a list of movies or shows that were shared between two countries sorted by rating, a
Lambda to find the details of the show or movie, and a Lambda to find the list of countries to select from.

Before I built the front end, I decided to ask Chat GPT how I could serve the data from the Lambdas to the front end. It
told me about a tool called [Serverless](https://www.serverless.com/).
I didn't know this tool existed, but it was exactly what I needed for my use case. After
running `npm install serverless`,
I had to learn how to use this powerful resource. It really wasn't difficult at all to configure.
Inside the `serverless.yml` file, you can add API Gateway as a provider, and you also add the Lambda functions you
want to create.
After configuring the serverless.yml I just copied and pasted the code from my existing lambdas to new Python files in
the Serverless project.
Deploying the project was as simple as configuring my AWS account to serverless and running `serverless deploy`.

Some things I encountered after deploying were that I needed to re-add the layer to the lambdas to allow them to
access
the Secrets Manager,
update the policy each of the lambdas had to read from the Secrets Manager, and a layer to allow them to use common
code for making HTTP request, and accessing the API Key I had put in the `lib` package.
I decided I also wanted to store the Countries retrieved from the uNogS API in a DynamoDB table just to get more
experience using that service.
After I had thoroughly tested the API through API Gateway and was happy with the JSON I was getting back, I decided to
move on to the front end.

## How ChatGPT 4 Built the Front End

I decided that I wanted ChatGPT to build an Angular Front End using a UI library called PrimeNG. I am very familiar with
both of these, as they are what I use for my normal job.
I chose that framework and library just because I knew I could tweak anything ChatGPT would give me. My introduction
prompt is below, I had all of this in one single prompt.

- Hello I am a Senior Software Engineer who specializes building web apps. I need some help building a web application
  quickly, using a lightweight front end framework and AWS lambda and AWS API gateway to serve data to the front end. I
  would like if you helped me and be my programming assistant. I look forward to working with you. Follow these next
  instructions:
- I need help creating a web app that would allow me to search on two countries by country code abbreviation, to see
  what Netflix shows or movies they have in common. I am an American and my wife is Brazilian and we both live on
  separate continents while we wait for her visa to process. We run into the issue that either she or I find something
  we want to watch on Netflix, but the other person's country doesn't have it.

- Create a search page, a page to show the list of similar shows or movies, and then a page to fetch and display the
  details of that show or movie

- The data for this app will be retrieved through AWS API gateway, that serves data from lambdas that hit the UNOGS
  netflix API through rapid api. The API gateway and lambdas have already been created and deployed using serverless.
  The uri to hit is /search. For the details page the endpoint is /details/{id}

- First think step-by-step-describe your plan for what to build in psuedocode, written in markdown to great detail.

- Then output the code in a single codeblock for each component you create

- I would like the front end to use angular and PrimeNG UI library

- I am excited to learn as we build the app together.

ChatGPT then gave me its plan of action and the initial steps to create my Angular project and set up the initial
components. The initial components were the `SearchComponent`, `ResultsComponent`, the `DetailsComponent`, and
the `CountryDropdDownComponent`. It then assisted me in refining the components, troubleshooting issues, and
implementing
new features.

I would ask ChatGPT to either implement something new or correct an issue I was experiencing. For example, I forgot to
tell it that the list of shows or movies
was paginated, but it was easily able to update the code for this. I also used it to help me debug CORS issues I was
running into, and that made my life a lot easier.
All I had to do was copy and paste my `serverless.yml` file from the Serverless project, and it was able to tell me what
to manipulate, as well as what I needed to add to my Lambda functions.
Overall, I only needed to tweak about 10% of the code to achieve a finished product I was happy with.

## Conclusion

After using ChatGPT 4 as my front end dev, I had some takeaways: it doesn't finish its responses sometimes, and it was a
little slow moving, but overall it built a pretty solid UI for the tool. It also helped me how to learn to
use
Serverless, which is really simple and easy to use but extremely powerful. As I explore the cloud and my company starts
to migrate more towards the cloud, I think I can leverage it for much more than a side project. I plan on deploying the
tool to a private
site for my wife and me to use,
but for now, I use it locally for us to find something to watch.

