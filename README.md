# Koala
Koala is a simple UUID v4 generator made for node.js.

# But why?
Yes, I'm aware that true and tested resources like [Kelektiv's UUID](https://github.com/kelektiv/node-uuid) out there, but in all honesty?
I _hate_ dependencies I have no control over. The leftPad, uws, etc incidents kinda shows why.

# Alright, how?

Rather simple actually

## v4

```javascript
const  {v4: KoalaV4} = require('athenas-koala');

//To get a simple text uuid
const text_uuid = KoalaV4.new();
```

# LICENSE

## MIT License

Copyright (c) 2019 Athena

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.