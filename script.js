function renderTable(arr) {
  let existTable = document.querySelector("table");
  existTable && existTable.remove();
  let table = document.createElement("table");
  let tableHeader = document.createElement("thead");
  let tableBody = document.createElement("tbody");

  let heading = [
    ...new Set(
      arr.map((row) => Object.keys(row)).reduce((all, arr) => [...all, ...arr])
    ),
  ];

  console.log(heading);
  console.log(heading);
  let trHead = document.createElement("tr");
  arr.forEach((row, index) => {
    let trBody = document.createElement("tr");

    heading.forEach((head) => {
      if (!index) {
        let th = document.createElement("th");

        th.innerText = head;
        trHead.appendChild(th);
      }
      let td = document.createElement("td");

      td.innerText = row[head];
      trBody.appendChild(td);
    });
    tableBody.appendChild(trBody);
  });
  tableHeader.appendChild(trHead);

  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  document.querySelector("#root").appendChild(table);
}

let data = [
  { name: "mohamed", age: 18, sexe: "M" },
  { name: "oussama", fullName: "3", age: 20, sexe: "F" },
  { name: "yassine", age: 16, sexe: "F" },
];

renderTable(data);
document.querySelector("#search").addEventListener("change", (e) => {
  renderTable(data.filter((person) => person.name.includes(e.target.value)));
});
