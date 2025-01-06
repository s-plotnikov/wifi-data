'use strict';

$(function () {

    // таблица с номерами
    let tableNum = $('.table-numbers');
    // создаем три строки и добавляем их в таблицу
    for (let i = 0; i < 600; i++) {
        const row = document.createElement('tr');
        tableNum.append(row);

        // для каждой строки создаем две ячейки и добавляем их в строку
        for (let j = 0; j < 1; j++) {
            const cell = document.createElement('td');
            row.append(cell);

            // добавляем текст в ячейку
            const qnt = document.createTextNode(i);
            cell.append(qnt);
        }
    }




    $('.goroda').each(function () {

        var arr = $(this).find('.dws_goroda_list a');
        var region = $(this).find('.heading').text();

        // создаем таблицу и добавляем ее на страницу
        var table = document.createElement('table');
        $("#table-here").append(table);

        // шапка таблицы с регионом
        var head = document.createElement('caption');
        table.append(head);
        // $(head).text($('.heading').text());
        $(head).text(region);

        $(arr).each(function (index, element) {
            // div — селектор функции each()
            // index — текущий индекс
            // element — ссылка на текущий элемент
            console.log(index + ':' + $(element).attr('title'));
            var title = $(element).attr('title');
            var qnt = $(index);
            console.log(qnt);
            console.log(title);

            // создаем три строки и добавляем их в таблицу
            for (let i = 0; i < 1; i++) {
                const row = document.createElement('tr');
                table.append(row);

                // для каждой строки создаем две ячейки и добавляем их в строку
                for (let j = 0; j < 1; j++) {
                    const cell = document.createElement('td');
                    row.append(cell);

                    // добавляем текст в ячейку
                    const text = document.createTextNode(`${title}`);
                    cell.append(text);
                }
            }

        });

    });


});

