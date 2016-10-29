function solve () {
    let resultObject = (() => {
        let domObject = {};

        return {
            init: (selector1, selector2, resultSelector) => {
                domObject.firstNum = $(selector1);
                domObject.secondNum = $(selector2);
                domObject.resultBox = $(resultSelector);
            },
            add: () => {
                domObject.firstNum = Number($('#num1').val());
                domObject.secondNum = Number($('#num2').val());
                let resultValue = domObject.firstNum + domObject.secondNum;
                domObject.resultBox.val(resultValue);
            },
            subtract: () => {
                domObject.firstNum = Number($('#num1').val());
                domObject.secondNum = Number($('#num2').val());
                let resultValue = domObject.firstNum - domObject.secondNum;
                domObject.resultBox.val(resultValue);
            }
        }
    })();

    return resultObject;
}