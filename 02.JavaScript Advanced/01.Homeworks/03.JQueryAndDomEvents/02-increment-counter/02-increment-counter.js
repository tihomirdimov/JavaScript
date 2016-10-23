function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textarea = $('<textarea class="counter"></textarea>');
    textarea.attr('disabled', true);
    textarea.val('0');
    let incrementButton = $('<button class="btn" id="incrementBtn">Increment</button>').click(incrementNumber);
    let addButton = $('<button class="btn" id="addBtn">Add</button>').click(addNumber);
    let list = $('<ul>');
    list.addClass('results');

    textarea.appendTo(fragment);
    incrementButton.appendTo(fragment);
    addButton.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
    $('body').append(container);

    function incrementNumber() {
        let resultNumber = Number($('.counter').val()) + 1;
        $('textarea').val(resultNumber);
    }

    function addNumber() {
        let li = $('<li>');
        let value = parseInt(textarea.val());
        li.text(value);
        list.append(li);
    }
}
