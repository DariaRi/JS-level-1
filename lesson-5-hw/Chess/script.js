function getChess() {
    let chessBoard = document.querySelector('#main');
    let block;
    let mark = true;
    let count = 8;
    let topIndent = 27;
    let leftIndent = 29;
    const blockSize = 70;
    let letterCode = 65;
    for (let v = 0; v < 8; v++) { // создаем ячейки шахматной доски

        let number = document.createElement('div'); //  производим нумерацию ячеек
        number.className = 'number';
        number.innerHTML = count--; // присваивваем свой номер для каждой ячейки
        number.style.top = topIndent + 'px'; // т.к. высота ячеек = 70px, использую такой подсчет для равного расстояния между порядковым номером каждой ячейки
        topIndent += blockSize; // прибавляем к предыдущему значению 70px
        chessBoard.appendChild(number);

        for (let h = 0; h < 8; h++) {
            if (h == 0) { // создаем сдвиг ячеек, изменяя их порядок на обратный, т.е. получается чередование
                mark = !mark
            }

            block = document.createElement('div');

            if (mark) {
                block.className = 'block brown'
            } else {
                block.className = 'block beige'
            }

            chessBoard.appendChild(block);
            mark = !mark;
        }
        if (v == 7) {
            for (let h = 0; h < 8; h++) {
                let letter = document.createElement('div');// создаем пустой блок, куда потом поместим буквы
                letter.className = 'letter';
                letter.innerHTML = String.fromCharCode(letterCode++);// присваивваем свою букву для каждой ячейки при помощи ascii, т.е цифры конвертируем в буквы
                letter.style.left = leftIndent + 'px';
                leftIndent += blockSize; // прибавляем к предыдущему значению 70px
                chessBoard.appendChild(letter);
            }
        }
    }
}
getChess();