# Redux DevTools Issue 1000

https://github.com/reduxjs/redux-devtools/issues/1000

To reproduce:
- Make sure you've installed the redux devtools on your browser (chrome, brave, ...)
- Fire up your webserver of choice on the root of this project directory (e.g. `python -m SimpleHTTPServer 8000`)
  - If you serve from disk, the extension may not be enabled for the page
- Go to the index.html
- Open the Redux DevTools
  - Notice there are 2 instances: "Top window" and "Iframe window"
- Select the "Iframe window"
- Dispatch an action from either frame using the "Dispatch action" that's on either page.
- Notice the instance switcher changed back to "Top window"
  - It is irrelevant where abouts the action came from, dispatching from top or iframe resets the instance switcher to look at the top window
