let str = "* * 15 1 12 *"
let regExp = /^([1-5]?[0-9|*][\s][1-5]?[0-9|*][\s]([1-9]?|1[0-9]?|2[0-3])|[*])[\s]([1-9]?|[1-2][0-9]?|3[0-1]|[*])[\s]([1-9]?|1[0-2]|[*])[\s][0-7|*]$/gi;
if (!regExp.test(str)) {
  console.log("cron表达式格式不正确");
  return;
}else{
  console.log("cron表达式通过验证");
  return;
}
