const tbody = document.querySelector("#table .table-container-list tbody");
const inputFirst = document.getElementById("inputFirst");
const inputLast = document.getElementById("inputLast");
const inputSalary = document.getElementById("salary");
const btnAdd = document.getElementById("add");
const btnLoad = document.getElementById("load");
const orderList = document.getElementById("order-list");

let employeAdded = [];
// DATASs
const company1 = {
  companyName: "AISTGroup MMC",
  employees: [
    {
      firstName: "Mehman",
      lastName: "Memmedov",
      salary: 1000,
    },
    {
      firstName: "Namiq",
      lastName: "Huseynov",
      salary: 3000,
    },
    {
      firstName: "Cavid",
      lastName: "Aslanlı",
      salary: 5000,
    },
    {
      firstName: "Azər",
      lastName: "Quliyev",
      salary: 1500,
    },
  ],
};

const company2 = {
  companyName: "TimeSoft",
  employees: [
    {
      firstName: "Fariz",
      lastName: "Hüseynov",
      salary: 3000,
    },
    {
      firstName: "Murad",
      lastName: "Həsənov",
      salary: 2000,
    },
    {
      firstName: "Ümid",
      lastName: "Aslanlı",
      salary: 5000,
    },
    {
      fisrtName: "Elgiz",
      lastName: "Ələsgərli",
      salary: 6000,
    },
  ],
};

const company3 = {
  companyName: "İTECH Group",
  employees: [
    {
      firstName: "Ramil",
      lastName: "Həsənov",
      salary: 3500,
    },
    {
      firstName: "Şakir",
      lastName: "Quliyev",
      salary: 7000,
    },
    {
      firstName: "Vasif",
      lastName: "Talıbov",
      salary: 5500,
    },
    {
      firstName: "İlham",
      lastName: "Əliyev",
      salary: 10000,
    },
  ],
};
const employees = [company1, company2, company3];

// FUNCTIONS

const employeDetails = function (employeDetails) {
  tbody.innerHTML = "";
  employeDetails.forEach((employe) => {
    let inputHtml = `
	 <tr>
            <td>${employe.firstName}</td>
            <td>${employe.lastName}</td>
            <td>${employe.salary}</td>
          </tr>
	 `;

    tbody.insertAdjacentHTML("afterbegin", inputHtml);
  });
};

const loadEmployelist = function (employees) {
  orderList.innerHTML = "";
  employees.forEach((employees) => {
    let inputEmployeListHtml = `
    <li class="list-group-item">${employees.firstName} - ${employees.lastName} - ${employees.salary}</li>
    `;
    orderList.insertAdjacentHTML("afterbegin", inputEmployeListHtml);
  });
};

const clarInput = () => {
  inputFirst.value = "";
  inputLast.value = "";
  inputSalary.value = "";
};

const displayEmployees = function (currentEmploye) {
  employeDetails(currentEmploye.employees);
  btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const employe = new Map();
    employe.set("firstName", inputFirst.value);
    employe.set("lastName", inputLast.value);
    employe.set("salary", inputSalary.value);

    employeAdded.push(Object.fromEntries(employe));
    loadEmployelist(employeAdded);
    clarInput();
  });

  btnLoad.addEventListener("click", (e) => {
    e.preventDefault;

    if (employeAdded) {
      currentEmploye.employees = [...currentEmploye.employees, ...employeAdded];
      orderList.innerHTML = "<li class='list-group-item'>List item</li>";
      employeDetails(currentEmploye.employees);
    }
  });
};

displayEmployees(employees[2]);
