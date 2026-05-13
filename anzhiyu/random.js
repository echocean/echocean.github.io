var posts=["2025/10/10/Flow-Matching/","2026/05/13/ToolDNS/","2023/06/20/thread-safety-of-gorm/","2025/06/14/use-of-AFF3CT/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };