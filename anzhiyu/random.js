var posts=["2025/10/10/Flow-Matching/","2025/06/14/use-of-AFF3CT/","2023/06/20/thread-safety-of-gorm/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };