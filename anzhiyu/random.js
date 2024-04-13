var posts=["2023/10/22/hello-world/","2024/04/13/笨蛋/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };