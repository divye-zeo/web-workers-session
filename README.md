# Simplifying Web Workers 

This is a short tutorial about the web workers to hands on experience the benefit of using web workers.

### Setup

```
npm install 
npm start # to host the app on localhost
```

### Session structure 

The Session walks you through the problem statement of calculating average of sum of numbers , where the numbers upto is provided by the user. The commits on this branch can help you go to the end result of every step. Either look at the commits or find the commit ids below : 

Step 1 : Basic setup where the script blocks the UI main thread . commit `7303784`

Step 2 : Using Async calls to divide the work to unblock the main thread. commit `3bb14b8`

Step 3 : Creating a dumb Web worker. commit `0d16358`

Step 4 : Improving the web worker to do the heavy lifting for us :commit `1b7f554`

Reference links that helped me : 

https://www.freecodecamp.org/news/web-workers-in-action-2c9ff33be266/







