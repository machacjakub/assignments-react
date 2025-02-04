# Decisions

It is hard for me to explain my decisions because the app was very simple.
However, here are a few paragraphs about the choices I made.

## Libraries & Packages
I chose libraries that I am familiar with.
So I used ReactQuery with Axios,
because I find them easy to use, and they provide all the necessary functionalities, such as refetching/invalidating queries for example.

## Client app structure
I decided to create `/components`, `/hooks`, and `/providers` folders inside `/src`,
to structure the files based on their functionality.
I also added barrel files in the component subdirectories to simplify imports.
I am aware that in larger projects, this may be an antipattern, but for a project of this size, I think it helps.

I also renamed `App.tsx` to `RootLayout.tsx`,
where I put all the providers so that I could create a new `App.tsx`
to fetch the todo items and handle the visual layout.

## Stories
I failed to complete the **SB3** task. I tried some Storybook plugins and tried
to find some documentation for that.
But within the timeframe I set for myself for that task,
I wasn't able to come up with a working solution.

## Lint & Prettier
Lint and Prettier rules were both set up comfortably enough for me,
so I felt no need to adjust them.

## Coding style and principles
I tried to write DRY code and easy-to-read, and reusable components, as I am used to.

Also, I implemented `useBoolean` hook, which I think is cleaner and easier way to work
with boolean state, than writing things like `() => setState(!state)`.

I didn't implement any error handling or loading state visualization because
I felt there was no need for it in this app,
and I also thought I wouldn't have time for it.