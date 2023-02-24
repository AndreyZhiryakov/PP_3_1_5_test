

// fetch('http://localhost:8080/api/admin')
// //     .then(response => response.json())
// //     .catch(error => console.log(error))
//
// //fetch(url)
// //     .then (date=> date.json())
// //     console.log(json);
//
// const xhr = new XMLHttpRequest();
// console.log(xhr);
// alert("Hello page");
// Функция для вывода всех юзеров (коннектимся и циклом передаем данные дальфе в функцию)
async function getAllUser () {
    const getFetchAllUser =  await fetch('http://localhost:8080/api/admin') // get запрос на вывод всех юзеров с полученимем результата
    const getAllUser  = await getFetchAllUser.json(); //  Декодирование нашего ответа




    // Передаем в SELECT роли на вывод

}

// Нам это надо делать тогда, когда загрузиться данная страница
window.addEventListener('DOMContentLoaded', getAllUser); // Когда страница загружена, используем нашу функцию