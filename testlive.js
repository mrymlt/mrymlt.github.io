<div id="container"></div>
<script type="module">
import { createPlayground } from 'https://unpkg.com/livecodes@0.5.0';

createPlayground('#container', {
  params: {
    markdown: '# Hello LiveCodes!',
    css: 'h1 {color: dodgerblue;}',
    js: 'console.log("Hello, from JS!");',
    console: 'open',
  },
});