# Imma Let You Fipsum

Imma Let You Fipsum is a React/Gatsby 3 application that lets you relive an infamous time in pop culture history while generating placeholder text.

This infamous time is when Kanye West interrupted Taylor Swift at the 2009 MTV Video Music Awards. The application uses a Taylor Swift quote generator to generate Lorem Ipsum style text that consists of a few of her quotes. Each paragraph in the generated text will be interrupted by a Kanye West quote.

## Authors

- [@joshglazer](https://www.github.com/joshglazer)

## Inspiration

I sat down at my laptop one night and decided to work on a new project. I usually start by looking through lists of free public APIs to integrate with, and saw that there were APIs for both Kanye West and Taylor Swift quotes. Then I remembered about the time that Kanye interrupted Taylor at the MTV VMAs, and the rest of this app just wrote itself.

## Demo

A live demo of Imma Let You Fipsum is available at https://imma-let-you-fipsum.joshglazer.com. This demo is hosted on [Netlify](https://www.netlify.com/) and deployed through a pipeline that is triggered every time code is merged into the main branch of the GitHub repository.

## Run Locally

Clone the project

```bash
  git clone git@github.com:joshglazer/imma-let-you-fipsum.git
```

Go to the project directory

```bash
  cd imma-let-you-fipsum
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Deployment

To deploy this project run

```bash
  npm run build
```

Once this command has been ran, a production build of this application will be available in a folder named `public`. This compiled code can be deployed to any web server.

## Development Process

### Application Architecture

This application was built using the Gatsby framework, so all architecture related to that framework is included in this code repository. The following folders are used to support the built-in Gatsby architecture.

#### API

This folder contains all code needed to retrieve quotes from the 3rd party APIs that this application integrates with. The quotes are also collected, organized and transformed using code in this folder.

#### Components

This folder contains React components that are used throughout the application and its pages.

#### Data

This folder contains two json files that contain Kanye West and Taylor Swift Quotes. I found these quotes in the Github repositories related to the 3rd party APIs that I integrated with. This data is used as a fallback in case the real APIs are not available.

#### Images

This folder contains images that are used throughout the application.

##### Pages

Gatsby automatically sets up routing based on the names of the components stored in this folder. Because this application is very simple and only contains one page, I only included one component for the index page and another to handle 404 errors.

##### Styles

This folder contains a javascript file that stores the color scheme and can be imported into other components. It also contains a global css file.

### Design

I chose a color scheme and design that I thought Kanye West would like. The design is very minimalist and uses a font and design similar to Kanye's website. The beige/tan color scheme is very subtle and matches the outfit that Kanye wore when he announced that he was planning to run for president at the 2015 MTV Video Music Awards.

I also used a picture of Kanye that was taken while he was interrupting Taylor as the loading indicator as a reference to the [meme related to this event](https://knowyourmeme.com/memes/kanye-interrupts-imma-let-you-finish/photos).

### Integrations

This application integrates with [kanye.rest](https://kanye.rest) and [taylor.rest](https://tahlor.rest), which are two different quote generator APIs.

### Challenges

#### Taylor.rest was taken offline.

**Problem:**
One day after I finished building this application, the taylor.rest API was taken offline. This was obviously a problem, because the application heavily depends on this API for the majority of its functionality.

**Solution**
I was able to find the [archived Github repository](https://github.com/gillescoolen/taylor.rest) for taylor.rest and copied all of the quotes into this code repository. Then I wrote in some error handling to pull a random quote from that hardcoded data object if the API call returned an error. I decided to set up a similar fallback for the Kanye quotes from the [kanye.rest Github repository](https://github.com/ajzbc/kanye.rest) in case that API goes offline in the future.
