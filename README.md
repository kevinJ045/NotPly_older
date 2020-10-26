# Notply: A Notification Plugin !!

NotPly is a simple plugin that let's you show notifications, There are 4 types of notifications here
Hey Hey, and also, to use this plugin, use 
```js
$('body').NotPly()
``` 
But make sure it's on a big container like <code>&lt;html></code> tag or <code>&lt;body></code> tag, 
```js
$('#bigElement').NotPly()
```

if you want use the 
```js
$.NotPly()
```
method

### Example

```js
    $('body').NotPly({
      text: "<p>Hello </p>",
      title: "Title",
      oncancel: function(){
        alert("Cancel")
      },
      type: "sheet",
      theme: "custom",
      transition: ".8s"
     });
```

### Importing

```html
<link rel="stylesheet" href="/path/to/notply.css" />
```

```html
<script src="/path/to/notply.js"></script>
```
