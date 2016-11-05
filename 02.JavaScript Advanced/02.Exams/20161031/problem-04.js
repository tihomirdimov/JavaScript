class TitleBar {
    constructor (pageTitle) {
        this.title = pageTitle;
        this.list = $('<nav class="menu">');
    }

    addLink (href, linkName) {
        let newLink = $('<a>');
        newLink.text(linkName);
        newLink.addClass('menu-link');
        newLink.attr('href', href);
        this.list.append(newLink);
    }

    appendTo (selector) {
        let titleSpan = $('<span>');
        titleSpan.addClass('title');
        titleSpan.text(this.title);

        // create menu button and append event to it
        let visibilityButton = $('<a>&#9776;</a>');
        visibilityButton.addClass('button');
        visibilityButton.click(() => {
            let menuContainer = $('.drawer');

            if (menuContainer.css('display').toLowerCase() === 'block') {
                menuContainer.css('display', 'none');
            } else {
                menuContainer.css('display', 'block');
            }
        });

        let drawer = $('<div class="drawer"></div>');
        drawer.css('display', 'none');
        drawer.append(this.list);

        let header = $('<header class="header"></header>');
        let headerRow = $('<div class="header-row">');
        headerRow.append(visibilityButton);
        headerRow.append(titleSpan);
        header.append(headerRow);
        header.append(drawer);

        $(selector).prepend(header);
    }
}
