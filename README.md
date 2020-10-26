# Notply: A Notification Plugin !!

<p>NotPly is a simple plugin that let's you show notifications, There are 3 types of notifications here:</p>
<p> Hey Hey, and also, to use this plugin, use <code>$('body').NotPly()</code> But make sure it's on a big container like <code>&lt;html></code> tag or <code>&lt;body></code> tag, <code>$('#bigElement').NotPly()<code>
if you want use the <code>$('body').NotPly()</code> method</p>

### Example

***

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
     
