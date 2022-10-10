# stopwatch-js
Accurately measure elapsed time while changing the rate/speed of time.

## Example

```js
import { Stopwatch } from "./stopwatch.js";

const stopwatch = new Stopwatch();

stopwatch.start();

// wait 2 seconds..

stopwatch.elapsed(); // returns 2 seconds
stopwatch.setRate(2);

// wait 2 seconds..

stopwatch.elapsed(); // returns 6 seconds
```
