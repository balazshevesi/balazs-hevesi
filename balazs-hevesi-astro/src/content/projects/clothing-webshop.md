---
title: E-handel 🛍️
pathName: "clothing-webshop"
readme: "https://github.com/Balazs-topg/clothing-webshop?tab=readme-ov-file#--clothing-webshop-%EF%B8%8F"
källkod: "https://clothing-webshop-one.vercel.app/"
live: "https://clothing-webshop-one.vercel.app/"
videoEmbed: '<div style="position: relative; padding-bottom: 64.98194945848375%; height: 0;"><iframe src="https://www.loom.com/embed/1732ebd9747940a68bd79ff6c3301aa9?sid=595f1ee1-f7fd-454f-982c-7ab086987456" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>'

img: "/clothing-webshop.png"
---

# E-handel

## Beskrivning

Detta är "projekt delen" av mitt gymnasie arbete.

Jag valde ut teck-stacken och infrastrukturen själv, och sedan arkitekterade ut resten appen. Frontenden och Backenden kommunicerar genom ett RESTful:t API som körs med Bun och Hono.js. Jag valde [Bun](https://bun.sh/) och [Hono](https://hono.dev/) dels för att ["Express is the new JQuery" (Ben Holmes)](https://x.com/BHolmesDev/status/1679907011918430221?s=20) och dels för att jag ville testa något nytt (APIn är ju skit-lik express, men det ska tydligen vara 3.5 gånger snabbare, inte för att det egentligen spelar någon roll men aa).

Se gärna [readme filen](https://github.com/Balazs-topg/clothing-webshop?tab=readme-ov-file#--clothing-webshop-%EF%B8%8F) för en mer detaljerad beskrivning

## Problemlösning

Detta projekt vart fullt av lärdomar för mig. Jag stötte på alla sorters problem, allt ifrån att jag låste ut mig själv ifrån min egen databas, till att [jag satt i timmar med en ".Dockerfile", som borde hetat "Dockerfile" 😂](https://www.youtube.com/watch?v=D2_r4q2imnQ&ab_channel=GamingSoundFX).

Se gärna [readme filen](https://github.com/Balazs-topg/clothing-webshop?tab=readme-ov-file#--clothing-webshop-%EF%B8%8F) för induvidduella exempel där jag diskuterar problemen som jag stötte på.

## Tech stack

[Next](https://nextjs.org/), [Zustand](https://zustand-demo.pmnd.rs/), [Tanstack Query](https://tanstack.com/query/latest),[Tailwind](https://tailwindcss.com/), [Bun](https://bun.sh/), [Hono](https://hono.dev/), [Drizzle ORM](https://orm.drizzle.team/), [MySQL](https://www.mysql.com/), [Typescript](https://www.typescriptlang.org/), [Valibot](https://valibot.dev/), [Docker](https://www.docker.com/)
