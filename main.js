
//contoh feth & axios
// //fetch
// const table = document.getElementById('data');
// table.innerHTML = massage('loading...'); //loading muter
// const data = fetch('https://jsonplaceholder.typicode.com/user')

// data
//     .then(res => res.json())
//     .then(res => {
//         table.innerHTML = render(res)
//     })
//     .catch (err => {
//         table.innerHTML =massage(err.massage)
//     })
//     .finally(()=>{

//     })

// //axios (library)
// axios.get('https://jsonplaceholder.typicode.com/user').then(res => {
//     document.getElementById('data').innerHTML = render(res.data);
// });