var midv = className("android.widget.TextView").visibleToUser(true).find().filter(item => item && item.desc() !== null)
var comment_List = midv.filter(item => item && item.text() && item.desc() && item.desc() == item.text())
var first_comment = comment_List[0]
log(first_comment)
log(comment_List)
if (first_comment) {

    comment_action(first_comment, ["1"])


}




function comment_action(target, 留言数组) {
  target.clickCenter()
  sleep(random(1500, 2500))

  var randomIndex = Math.floor(Math.random() * 留言数组.length); // 生成一个随机索引
  var randomText = 留言数组[randomIndex]
  setText(randomText)

  sleep(random(1500, 2500))
  var returned = text("发送").findOne(500);
  if   (returned) {
  returned.click()}
  else {log("未找到发送按钮")}
  sleep(1500)

}