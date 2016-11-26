function loadCommits () {
    $("#commits").empty();
    let url = "https://api.github.com/repos/" +
        $("#username").val() + "/" +
        $("#repo").val() + "/commits";
    $.get(url)
        .then(displayCommits)
        .catch(displayError);
    function displayCommits(commits) {
        $('#commits').empty();
        for (let commit of commits) {
            let li = $('<li>');
            li.text(`${commit.commit.author.name}: ${commit.commit.message}`);
            $('#commits').append(li);
        }
    }
    function displayError(err) {
        $('#commits').empty();
        let errorLi = $('<li>');
        errorLi.text(`Error: ${err.status} (${err.statusText})`);
        $('#commits').append(errorLi);
    }
}