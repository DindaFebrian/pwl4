document.getElementById("addButton").addEventListener("click", function () {
   const input = document.getElementById("todoInput").value;
   if (input) {
       const todoList = document.getElementById("todoList");

       const listItem = document.createElement("li");
       listItem.classList.add("flex", "justify-between", "items-center", "bg-gray-100", "p-2", "mb-2", "rounded");

       const taskText = document.createElement("span");
       taskText.textContent = input;

       const selesaiButton = document.createElement("button");
       selesaiButton.textContent = "SELESAI";
       selesaiButton.classList.add("bg-green-200", "text-green-800", "px-2", "py-1", "rounded", "hover:bg-green-300");
       selesaiButton.addEventListener("click", function () {
           taskText.classList.add("line-through");
       });

       const hapusButton = document.createElement("button");
       hapusButton.textContent = "HAPUS";
       hapusButton.classList.add("bg-red-200", "text-red-800", "px-2", "py-1", "rounded", "hover:bg-red-300");
       hapusButton.addEventListener("click", function () {
           todoList.removeChild(listItem);
       });

       listItem.appendChild(taskText);
       listItem.appendChild(selesaiButton);
       listItem.appendChild(hapusButton);

       todoList.appendChild(listItem);

       document.getElementById("todoInput").value = "";
   }
});
