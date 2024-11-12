const mainBtn = document.querySelector(".btn-primary");
const secendryBtn = document.querySelector(".btn-secend");
const addTodoList = document.querySelector(".todo-list");
const titleInput = document.querySelector("#title-input");
const StarInput = document.querySelector(".required-star");
const subtaskBox = document.querySelector(".subtask-section");
const NewSubtask = document.querySelector("#newSubtask");
const labelsContent = document.querySelector(".labelNote");

const date = new Date();
const day = date.getDate();
const month = date.toLocaleString("en", { month: "long" }).substring(0, 3);

function getNewDays(day) {
  if (day >= 1 && day <= 12) {
    return "th";
  } else {
    return "تاریخ مشخص نیست";
  }
}
mainBtn.addEventListener("click", AddNewCard);

function AddNewCard(event) {
  event.preventDefault();

  let title = titleInput.value;
  let textereaBox = document.querySelector("#text-box").value;
  let userAssign = document.querySelector('input[name="en-name"]:checked');

  if (title.trim() === "" || !userAssign) {
    alert("اطلاعات به درستی وارد نشده است");
  } else {
    let newCard = document.createElement("div");
    newCard.classList.add("main-todo-list");

    let titleNode = document.createElement("h3");
    titleNode.classList.add("title-of-main-todo-list");
    titleNode.textContent = title;

    let newSection = document.createElement("div");
    newSection.classList.add("detail-box");

    let dateNode = document.createElement("span");
    dateNode.classList.add("date");
    dateNode.textContent = `${day}${getNewDays(day)} ${month}`;
    newSection.appendChild(dateNode);

    let dotElement = document.createElement("span");
    dotElement.classList.add("dott");
    dotElement.textContent = ".";
    newSection.appendChild(dotElement);

    let assignElement = document.createElement("span");
    assignElement.classList.add("assign");
    assignElement.textContent = "Assigned to ";
    newSection.appendChild(assignElement);

    let assignedUser = document.createElement("span");
    assignedUser.classList.add("assigned-user");
    assignedUser.textContent = userAssign.value;
    newSection.appendChild(assignedUser);
    let TexttextereaBox = document.createElement("p");
    TexttextereaBox.classList.add("detailTodo");
    TexttextereaBox.textContent = textereaBox;
    newSection.appendChild(TexttextereaBox);
    // subtask
    subtaskContainer = AddSubtask();
    subtaskContainer.style.fontSize = "16px";
    subtaskContainer.style.fontWeight = "600";
    newSection.appendChild(subtaskContainer);

    //* label
    let selectedButtons = document.querySelectorAll(".selectBtn.selected");
    let checkLabel = new Set(); //no repeat
    if (selectedButtons.length > 0) {
      selectedButtons.forEach((buttonData) => {
        const labelText = buttonData.textContent;
        if (!checkLabel.has(labelText)) {
          const newButton = buttonData.cloneNode(true);
          newButton.style.margin = "8px";
          newButton.style.textAlign = "center";
          newSection.appendChild(newButton);
          checkLabel.add(labelText);
        }
      });
    }

    newCard.appendChild(titleNode);
    newCard.appendChild(newSection);

    addTodoList.appendChild(newCard);
  }
}

const addSubTask = document.querySelector("#newSubtask");
subtaskBox.addEventListener("click", AddSubtask);
// ! add subtask
function AddSubtask() {
  const subtaskContainer = document.createElement("div");
  subtaskContainer.classList.add("subtask-container");
  NewSubtask.appendChild(subtaskContainer);

  const checkboxNode = document.createElement("input");
  checkboxNode.classList.add("checkbox-input");
  checkboxNode.setAttribute("type", "checkbox");
  subtaskContainer.appendChild(checkboxNode);

  const InputSubtask = document.createElement("input");
  InputSubtask.classList.add("newIntputSub");
  InputSubtask.placeholder = "write subtask";
  InputSubtask.type = "text";
  subtaskContainer.appendChild(InputSubtask);
  return subtaskContainer;
  //   !
}

// !label labelsContent
function addLabel(labelText, backgroundColor, textColor) {
  const buttonData = document.createElement("button");
  buttonData.classList.add("selectBtn");
  buttonData.style.background = backgroundColor;
  buttonData.style.color = textColor;
  //   buttonData.style.width = width;
  buttonData.textContent = labelText;

  buttonData.addEventListener("click", () => {
    buttonData.classList.toggle("selected");
  });

  labelsContent.appendChild(buttonData);
}

addLabel("Design", "#F7D4FF", "#A300F4");
addLabel("Development", "#D1FADF", "#12B76A");
addLabel("Product", "#DFDAFF", "#3D24F6");
addLabel("Marketing", "#FFDFDF", "#FF1616");
addLabel("Business", "#D1FAF7", "#00DBC2");
addLabel("Operation", "#FAFAD1", "#EBBC00");

secendryBtn.addEventListener("click", ClearData);

function ClearData(event) {
  event.preventDefault();
  titleInput.value = "";
  document.querySelector("#text-box").value = "";
  const userAssigns = document.querySelectorAll('input[name="en-name"]');
  userAssigns.forEach((assign) => {
    assign.checked = false;
  });
  const selectedButtons = document.querySelectorAll(".selectBtn.selected");
  for (let button of selectedButtons) {
    button.classList.remove("selected");
  }

  NewSubtask.innerHTML = "";
}

// *
titleInput.addEventListener("keypress", () => {
  StarInput.style.display = "none";
});
titleInput.addEventListener("blur", () => {
  StarInput.style.display = "none";
});
