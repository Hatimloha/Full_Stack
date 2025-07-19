async function fetchTwoAPIs() {
  try {
    let res1 = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res1.json();

    let res2 = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await res2.json();

    console.log("Users:", users);
    console.log("Posts:", posts);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}
