const getLongestLength = (string) => {
    const arr = string.split('');
    const result = [];
    let currentMostSubstring = [];

    for (let i = 0; i < arr.length;) {
        if (currentMostSubstring.includes(arr[i])) {
            result.push(currentMostSubstring.join('').length);
            currentMostSubstring = [];
            arr.splice(0, (arr.indexOf(arr[i]) + 1));
            i = 0;
        } else {
            currentMostSubstring.push(arr[i]);
            i += 1
        }
    }
    result.push(currentMostSubstring.join('').length);
    return Math.max(...result);
}

// const getLongestLength = (str) => {
//     let sequence = [];
//     let maxLength = 0;
  
//     // Проходимся по всем символам переданной строки.
//     for (const char of str) {
//       // Ищем в сформированной последовательности
//       // позицию первого вхождения текущего символа.
//       const index = sequence.indexOf(char);
//       // Добавляем в последовательность текущий символ.
//       sequence.push(char);
//       if (index !== -1) {
//         // Если символ в последовательности был найден,
//         // значит в неё был добавлен повторяющийся символ.
//         // Отсекаем все символы включая найденный.
//         sequence = sequence.slice(index + 1);
//       }
//       // Получаем длину последовательности.
//       const sequenceLength = sequence.length;
//       if (sequenceLength > maxLength) {
//         // Если длина последовательности больше чем максимальная,
//         // устанавливаем новую максимальную длину.
//         maxLength = sequenceLength;
//       }
//     }
  
//     return maxLength;
//   };

getLongestLength('jabjcdel'); //7
getLongestLength('abcddef'); //4
getLongestLength('abbccddeffg'); //3
getLongestLength('abcd'); //4
getLongestLength('1234561qweqwer'); //9
getLongestLength('1234561qweqwerqer'); //9
getLongestLength(''); //0
getLongestLength('jabjcdeljrshmgdhj'); //10

