export function newNews(payload) {
  console.log("diparo la action");
  return { type: "NEW_NEWS", payload };
}
