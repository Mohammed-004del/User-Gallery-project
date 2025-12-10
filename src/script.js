






// function waitThreeSeconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Done");
//     }, 3000);
//   });
// }

// waitThreeSeconds().then(result => console.log(result));





// function waitThreeSeconds(success) { // ال function العاديه بتنفذ الكود علطول بدون انتظار اما ال promise بتتعامل مع الحاجات الي بتاخد وقت زي قراءة البيانات او استدعاء ال api يعني  من الاخر ال promise هي الي بتتعامل مع ال setTimeout و بتخلي العمليه Asynchronous.
//   return new Promise((resolve, reject) => {
//     console.log("waiting for result...");

//     setTimeout(() => { //  لازم استخدم مع ال setTimeout ال promise لان هي الي بتمسك القيمه بتاعت ال setTimeout و بتمررها للفانكشن الي بستديعها تحت في ال async و ال await
//       if (success) {
//         resolve("Done");
//       } else {
//         reject("Error");
//       }
//     }, 3000);
//   });
// }

// async function load(){
//   try{
//     let result = await waitThreeSeconds(true); // ال async/await لازمتهم انهم تنظيم و اسهل قرايه للكود و لازم استخدم ال await عشان اخلي الفانكشن تنتظر نتيجة ال promise من فوق عشان لو شيلتها و نفذت الكود الفانكشن هاتطبع قبل ما اخد نتيجة ال promise لان الفانكشن العاديه مش بتستنى ف مش هايطبع حاجه او هايدي ايرور, عشان كده لازم استخدم ال await مع ال async و ال promise
//     console.log(result);
//   } catch (error){
//     console.log(error);
//   }
// }

// load();










// async function fetchUserData(username) {
//   try {

//     await new Promise(resolve => setTimeout(resolve, 2000)); // استخدمنا await هنا عشان عايزين ننتظر نتيجة ال object بعد ثانيتين مش عايزينها علطول.

//     return {
//       name: username,
//       age: 25,
//       email: "user@email.com"
//     };

//   } catch (error) {
//     throw new Error("Something went wrong while fetching user data");
//   }
// }


// async function showUser() {
//   try {
//     const user = await fetchUserData("Mohammed"); // عملنا استدعاء للنتيجه الي متخزنه في الفانكشن الي فوق و عملنا await عشان ينتظر الاجابه من الفانكشن الي فوق لان لو شيلتها هايجيبلي: promise <pending>
//     console.log(user);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// showUser();




// *بستخدم await او اكتر على حسب عدد الحاجات الي عايز استناها*







const loadBtn = document.getElementById('loadBtn');
        const retryBtn = document.getElementById('retryBtn');
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        const errorMsg = document.getElementById('errorMsg');
        const usersGrid = document.getElementById('usersGrid');

        async function loadUsers() {
            // Reset UI
            loadBtn.classList.add('hidden');
            loading.classList.remove('hidden');
            error.classList.add('hidden');
            usersGrid.innerHTML = '';

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!response.ok) {
                    throw new Error('Data loading from server failed');
                }

                const users = await response.json();
                
                loading.classList.add('hidden');
                displayUsers(users);

            } catch (err) {
                loading.classList.add('hidden');
                error.classList.remove('hidden');
                errorMsg.textContent = err.message || 'An unexpected error occurred. Please try again..';
            }
        }

        function displayUsers(users) {
            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'card-hover bg-white rounded-xl shadow-md overflow-hidden';
                
                card.innerHTML = `
                    <div class="bg-linear-to-r from-indigo-500 to-purple-600 p-6">
                        <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                            <span class="text-3xl font-bold text-indigo-600">${user.name.charAt(0)}</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">${user.name}</h2>
                        
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3 space-x-reverse text-gray-600">
                                <svg class="w-5 h-5 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span class="text-sm break-all">${user.email}</span>
                            </div>
                            
                            <div class="flex items-center space-x-3 space-x-reverse text-gray-600">
                                <svg class="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span class="text-sm">${user.phone}</span>
                            </div>
                            
                            <div class="flex items-center space-x-3 space-x-reverse text-gray-600">
                                <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                                <span class="text-sm break-all">${user.website}</span>
                            </div>
                            
                            <div class="flex items-center space-x-3 space-x-reverse text-gray-600">
                                <svg class="w-5 h-5 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                                <span class="text-sm">${user.company.name}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                usersGrid.appendChild(card);
            });
        }

        loadBtn.addEventListener('click', loadUsers);
        retryBtn.addEventListener('click', () => {
            loadBtn.classList.remove('hidden');
            error.classList.add('hidden');
        });