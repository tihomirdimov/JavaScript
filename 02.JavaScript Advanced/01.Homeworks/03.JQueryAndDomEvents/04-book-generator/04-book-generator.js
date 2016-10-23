let createBook = (function createBook() {
    let bookId = 1;
    return function (selector, title, author, isbn) {
        $(selector)
            .append($('<div>').attr('id', 'book' + bookId++)
                .append($('<p>').addClass('title').text(title))
                .append($('<p>').addClass('author').text(author))
                .append($('<p>').addClass('isbn').text(isbn))
                .append($('<button>').text('Select').click(select))
                .append($('<button>').text('Deselect').click(deselect)));
        function select() {
            $(this).parent().css('border', '2px solid blue');
        }
        function deselect() {
            $(this).parent().css('border', 'none');
        }
    }
})()