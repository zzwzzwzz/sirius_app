# Mind Capsule

This is a simple web app with a Node.js back-end and a placeholder front-end.

## Folder Structure

- `/public` - Contains the front-end static files (HTML, CSS).
- `/server` - Contains the back-end Node.js code (Express server, routes, controllers).
- `/docs` - Contains documentation for the project.
- `.gitignore` - Specifies which files should be ignored by Git.

## Getting Started

1. Install dependencies: `npm install`.
2. Run the back-end server: `node server/src/app.js`.
3. Open `public/index.html` in your browser to view the front-end.

## Inspiration
During our ideation phase, we reflected on a recurring problem we often face, how we feel differently in specific situations. For example, we get stressed during assignment due dates, before final exams, or just before a hackathon submission, while we feel excited or happy when a vacation is near. We wished _we could be more self-aware or self-motivated during these emotional fluctuations_. Then, we thought: What if many others also experience these emotional ups and downs, but fail to recognize the patterns in how they react to different situations? Without this awareness, they often repeat the same emotional responses, feeling overwhelmed, stuck, unmotivated, too excited or embarassed, without recognizing their common emotional patterns.

While support and recognision from others is invaluable during emotional fluctuations, what if you could be your own guide? What if your past experiences could empower your future self?

We believe emotional resilience is not just about reacting to feelings but about recognizing patterns, rewiring responses, and building mental strength. With this tool, you can tap into your emotions, track recurring patterns, and leave messages (your own words of wisdom) to help guide you through similar moments in the future. 

**Because the best support comes from within you !**

## What it does
Mind Capsule is designed to help individuals better understand and manage their emotions, using principles from Cognitive Behavioral Therapy (CBT). While it applies CBT techniques to guide users in emotional self-awareness and improvement, it is not a replacement for professional therapy.

**Key Features:**

Emotion Identification: Users can select their emotions from color-coded blocks, with definitions provided for unfamiliar terms.

Reflection and Tracking: Users are guided to write about their emotional triggers and physical reactions, helping them reflect on their feelings.

Emotion Classification: The app stores and tracks emotional responses, organizing them based on type to monitor patterns.

Self-Guidance (Gifts): Users can leave personalized messages for themselves (referred to as "gifts") that will appear when they encounter similar emotions in the future.

## How we built it
We began by defining our problem statement: 
**People want to take control of their emotions in specific situations and react better in future occurrences.** 
With this in mind, we carefully mapped out the user journey and discussed the key features of our app. To build the system, we split into two groups: one focused on the back-end and the other on the front-end. 
For the front-end, we used _JavaScript_, _Tailwind CSS_ and _HTML_, while for the back-end, we utilized _JavaScript_, _Express.js_ and _Node.js_, for handling data storage, we chose _MongoDB Atlas_.

## Challenges we ran into'
The ideation phase was both challenging and crucial, as the lack of a specific theme led to a wide range of ideas during brainstorming. Besides, we had to balance committing to one idea to move forward quickly with taking the time to develop the best concept. 
During our development, we faced minor challenges choosing the ideal stack and managing app dependencies which slowed our progress toward building the product slightly.

## Accomplishments that we're proud of
Afterall we are a group of students who just met 2 days ago to come up with an idea and tackle the yet undefined issue. Despite these challenges and uncertainties, we are incredibly proud of the idea we developed, the way we collaborated and came together throughout the last 48 hours. The experience was both rewarding and fun, and it showed us our ability to come together quickly and work toward a common goal.

## What we learned
Reflecting on our experiences, including the challenges and enjoyable moments, we each wanted to share our individual lessons learned from this hackathon.

**Joycelyn:** _I've leant how to quickly build the framewok and connecting fornt-end and back-end to run the program._

**Ziwen:** _Tailwind CSS is an interesting tool for Front-End Development, I've learned a lot in this Hackathon. I didn't expect it's so hard to connect Front-End with Back-End, but we manage to handle it, and communication is always the key. MongoDB, Node.js are also a new tools for me, I need to spend more time on it in the future._

**Casey:**_Connecting backend logic with remote database._

**Buya:** _Before this hackathon I only worked on python to build backend. But I learned how to build JavaScript backend with Express from my colleague Casey. Overall I learned a lot from my teammates.

## What's next for Sirius
Personalized music and film recommendations: Tailored to specific emotional states, with options to either boost or embrace your emotions depending on the situation, allowing users to either lift their mood or fully experience their feelings.

Mobile App Version: Expanding accessibility with a mobile app for on-the-go emotional support.

Enhanced AI Feedback: Offering more personalized and insightful feedback based on your messages during future events and emotional triggers.
