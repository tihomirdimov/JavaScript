function attachEvents() {
    $('#btnAdd').on('click', function () {
        let town = document.getElementById("newItem").value;
        if (town != "") {
            let option = document.createElement('option');
            option.text = town;
            document.getElementById("towns").appendChild(option);
        }
    });
    $('#btnDelete').on('click', function () {
        var selected = $("#towns option:selected");
        if (selected != "") {
            $("#towns option:selected").remove();
        }
    });
}