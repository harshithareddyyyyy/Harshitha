const p=new Promise((resolve,reject) =>
{
    setTimeout(() => {
        resolve("success")
    },2000);
});
p.then(console.log)
