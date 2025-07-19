// Auto-refreshing data

let intervalid = setInterval(async () => {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await res.json();
        console.log("Refreshing data:", data.title);
    }catch(err){
        console.log("Fetch Error:",err)
    }
}, 5000)