document.addEventListener("DOMContentLoaded", function () {
    var tableBody = document.querySelector("#Table > tbody");

    fetch("database_old.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(function (value, index) {
            var tRow = "<tr><td>" + value.souche + "</td><td>" + value.SEXE + "</td><td>" + value.age +
                "</td><td>" + value["désignation"] + "</td><td>" + "/" + "</td><td>" + "/" +
                "</td></tr>";
            tableBody.innerHTML += tRow;
        });

        $('#Table').DataTable({
            pageLength: 9,
            lengthMenu: [
                [8, 10, 20, -1],
                [8, 10, 20, 100]
            ]
        });
    })
    .catch(function (error) {
        console.error("Error fetching data:", error);
    });
});
