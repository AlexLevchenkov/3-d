$(document).ready(function(){
  console.log($("model-viewer").attr("src"))
  $(".model").click(function(){
    const src = $("model-viewer").attr("src")
    const dir = src.split("/")
    if ($(this).attr("id")!=dir[1]) {
      dir[1]=$(this).attr("id")
      $("model-viewer").attr("src",dir.join("/"))
      $("model-viewer").attr("ios-src",dir.join("/"))
    }
  })
});