
// Your Code Here
async function getBooks() {
    let booksList = await fetch('http://localhost:3001/listBooks');
    let booksResponse = await booksList.json();
    console.log(booksResponse)

    booksResponse.forEach(bookTitles);
};

getBooks();

function bookTitles(title) {
    let titleList = document.querySelector('#root');
    titleList.innerHTML += `
    <li>${title.title}</li>
    <input type='text' class='totalBooks' value=${title.quantity} />
    <button type='type' id='numberOfBooks' class='btn btn-primary'>Save</button> 
    `
    let bookQuantity = document.getElementsByClassName('totalBooks').value;
    let submitQuantity = document.getElementsByClassName('btn');

    submitQuantity.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: title.id,
                quantity: bookQuantity,
            })
        })
    });
    let result = response.json();
    console.log(result)

}


// let bookQuantity = document.getElementsByClassName('totalBooks').value;
// let submitQuantity = document.getElementsByClassName('btn');

// submitQuantity.addEventListener('click',

// fetch('http://localhost:3001/updateBook', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "id": book.id,
//             "quantity": bookQuantity,
//         })
//     }));
//     let result = response.json();
//     console.log(result)








// async function updateBookTitle() {
//     let response = await fetch('http://localhost:3001/updateBook', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "id": 3,
//             "title": "The Legends of Arathrae",
//         })
//     });
//     let result = await response.json();
//     console.log(result)
// };




// submitQuantity.addEventListener('click', async function completeUpdate() {
//     let response = await fetch('http://localhost:3001/updateBook', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             'id': 0,
//             'quantity': bookQuantity,
//         })
//     });
//     let result = await response.json();
//     console.log(result)
// });


// let bookQuantity = document.getElementById('totalBooks').value;
// let submitQuantity = document.getElementById('numberOfBooks');

// submitQuantity.addEventListener('click', async function completeUpdate() {
//     let response = await fetch('http://localhost:3001/updateBook', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             id: 2,
//             quantity: bookQuantity,
//         })
//     });
//     let result = await response.json();
//     console.log(result)
// });


// This code pulled all quantity values
// function TestBooks () {
//     for (var i = 0; i < bookQuantityItems.length; i++) {
//     var bookQuantity = bookQuantityItems[i].value;
//     console.log('Book Quantity:', bookQuantity);
// }
// }
// let bookQuantity = bookQuantityItems.value;


// let bookQuantity = document.getElementById('#totalBooks').value;
// let submitQuantity = document.getElementById('#numberOfBooks');
// submitQuantity.addEventListener('click', completeUpdate());

// async function completeUpdate() {
//     let response = await fetch('http://localhost:3001/updateBook', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             quantity: bookQuantity,
//         })
//     });
//     let result = await response.json();
//     console.log(result)
// }

// let submitQuantity = document.getElementById('#numberOfBooks');
// submitQuantity.addEventListener('click', completeUpdate());


// function updateQuantity() {
//     let bookQuantity = document.getElementById('#totalBooks').value;
//     let submitQuantity = document.getElementById('numberOfBooks');
//     submitQuantity.addEventListener('click', (event) => {
//         async function completeUpdate() {
//             let response = await fetch('http://localhost:3001/updateBook', {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     quantity: bookQuantity,
//                 })
//             });
//             let result = await response.json();
//             console.log(result)
//         }
//     })
//     completeUpdate();
// }

// updateQuantity();


// async function updateBookTitle() {
//     let response = await fetch('http://localhost:3001/updateBook', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "id": 3,
//             "title": "The Legends of Arathrae",
//         })
//     });
//     let result = await response.json();
//     console.log(result)
// };