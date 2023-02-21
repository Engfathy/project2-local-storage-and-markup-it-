let allspan = document.querySelectorAll(".button span");
let result = document.querySelector(".result > span");
let input = document.querySelector("#the-input");

//------

input.addEventListener("focus", () => {
    result.innerHTML = "Results here";
});

//---------------
allspan.forEach(function (span) {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check-item")) {
            checkItem();
        }
        if (e.target.classList.contains("add-item")) {
            addItem();
        }
        if (e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        if (e.target.classList.contains("show-item")) {
            showItem();
        }
    });
});

function checkItem() {
    if (!/\S+/g.test(input.value)) {
        result.innerHTML = "the input must not be empty";
    } else {
        if (localStorage.getItem(input.value)) {
            result.innerHTML = `Found local item called <span>${input.value}</span>`;
        } else {
            result.innerHTML = `NO local storage item with name <span>${input.value}</span>`;
        }
    }
}
function addItem() {
    if (!/\S+/g.test(input.value)) {
        result.innerHTML = "the input must not be empty";
    } else {
        if (localStorage.getItem(input.value)) {
            result.innerHTML = `Local storage item called <span>${input.value}</span> is already added`;
        } else {
            localStorage.setItem(input.value, "hello there");
            result.innerHTML = `Local storage item called <span>${input.value}</span> added`;
            input.value = "";
        }
    }
}
function deleteItem() {
    if (!/\S+/g.test(input.value)) {
        result.innerHTML = "the input must not be empty";
    } else {
        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value);
            result.innerHTML = `Local storage item called <span>${input.value}</span> deleted`;
        } else {
            result.innerHTML = `NO Local storage item called <span>${input.value}</span> `;
            input.value = "";
        }
    }
}
function showItem() {
    if (localStorage.length == 0) {
        result.innerHTML = `Locsl storage is empty`;
    } else {
        result.innerHTML = " ";
        for (let [key, value] of Object.entries(localStorage)) {
            result.innerHTML += `<span class="key"> ${key} </span>`;
        }
    }
}
