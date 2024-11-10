const mainBtn = document.querySelector(".btn-primary");
const addTodoList = document.querySelector(".todo-list");

mainBtn.addEventListener("click", addNewCard);

function addNewCard(event) {
  event.preventDefault();
  let textereaBox = document.querySelector("#text-box").value;
  let assignUser = document.querySelector(".radio-box label").value;
  if (textereaBox.trim("") === "" || assignUser === "") {
    alert("لطفا اطلاعات اولیه را وارد کنید.");
    return;
  } else {
    let newCard = document.createElement("div");
    newCard.classList.add("main-todo-list");
    newCard.innerHTML = `<h3>${textereaBox}</h3>
      <div class="detail-box">
        <span class="date">${new Date().toLocaleDateString("default", {
          day: "numeric",
          month: "long",
        })}
        </span>
        <span class="dott">.</span>
        <span class="assign">Assigned to <span> ${assignUser}</span></span>
    </div>
    `;
    addTodoList.appendChild(newCard);

    // remove
    // document.querySelectorAll("input[name='radio-box']").forEach(radio => radio.checked = false);
  }
  // addNewTask.appendChild(textereaBox);
}
