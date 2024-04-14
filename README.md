# Particle - University of Washington SWEHacks 2024 📙

## By Derek Zhu, Ruslan Mukhamedvaleev, and Aruna Srivastava
![SWEHacks 2024](https://github.com/digitalRM/SWEHacks2024/assets/70782025/475fd44f-9988-464c-a762-88cbebc8a6f7)

## The Track
*We chose to compete in the Accessibility track by building a program designed to help children with speech impediments by making books easier to read. 18% of school-aged children with disabilities have speech impediments. Non-English speaking households are 50% less likely to receive speech therapy, and children in black communities are 48% less likely to be receiving speech services.* 



- ### Inspiration
We have seen young children who struggle with speech impediments and notice that its very difficult for lower income or busy families to access speech therapy tools and tutors.

- ### What it does
We built a online webapp that will help children with their speech impediments through easily digestible and engaging stories that allow children to practice challenging issues they encounter in their daily speaking. By using a finetuned LLM and various speech to text APIs we built a helpful and user friendly web-app to better engage and help kids with customizable stories and beautiful graphics. There are various tools built in to help them with hearing and speaking practice as well.

- ### How we built it
We build this application by using a multipart full-stack approach, making use of Next.js sleek and efficient paging ability and Express.js robust server components. We also made use of various speech and pronunciation APIs for extra features to help out with learning and made use of a finetuned LLM to generate engaging and interesting stories for elementary vocabularies.

- ### Challenges we ran into
We ran into issues revolving around API calls and server side rendering but we're happy to say we got past them and fixed many of the issues!

- ### What's next for Particle
We plan to continue working on this project, updating bits and pieces to help cover even more speech impediments along with more complex books and stories. Theres a whole world out there and we're super hyped to continue helping people improve their vocab and speech with software and AI tooling!
![369shots_so](https://github.com/digitalRM/SWEHacks2024/assets/70782025/26beaac8-4f03-4a3e-8895-cf2b98bb26f2)
# Running Locally

To get a local copy up and running, follow these steps:

### Prerequisites for Front End

- npm
- Node.js

### Installation

Clone the repository

```bash
git clone https://github.com/digitalRM/SWEHacks2024.git
```

Install required packages

```bash
npm install
```

Run the frontend server

```bash
npm run dev
```

Replace OpenAI API key with your own

```js
const openai = new OpenAI({
    apiKey: ""
});
```

Run the backend server

```bash
node API/server
```


## Built With

- NextJS - *` React.JS framework `*
- ExpressJS - *` Back-end web framework `*
- Tailwind CSS & UI - *` CSS framework and UI library `*
- Lucide React - *` Icon Libray `*
- OpenAI API - *` OpenAI API access with JS `*








