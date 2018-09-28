
// //Starting constants

const yesButton = document.querySelector('#yes-button');
const redoButton = document.querySelector('#redo');
const nextButton = document.querySelector('#next');

const startPlay = document.querySelector('#start-playing');
const practiceForm = document.forms['practice-form'];
const legend = document.querySelector('legend');
const scoreCount = document.querySelector('#score-count');
const lessons = document.querySelector('#lessons');

const characterList = document.querySelector('#character-list');
const characterDescription = document.querySelector('#character-description');
const characters = document.querySelector('#characters');
characters.addEventListener('click', function (e) {
    e.preventDefault();
    characterDescription.style.display = 'block';
    blogs.style.display = 'none';
    lessons.style.display = 'none';
    startPlay.style.display = 'none';
})

const blogList = document.querySelector('#blog-list');
const blogs = document.querySelector('#blog');
blogList.addEventListener('click', function (e) {
    e.preventDefault();
    blogs.style.display = 'block';
    characterDescription.style.display = 'none';
    lessons.style.display = 'none';
    startPlay.style.display = 'none';
})

const vowels1 = document.querySelector('#vowels1');
const vowels2 = document.querySelector('#vowels2');
redoButton.addEventListener('click', function (e) {
    scoreCount.textContent = -1;
    vowels1.style.display = 'grid';
});

yesButton.addEventListener('click', function (event) {
    startPlay.style.display = 'none';
    characterList.textContent = 'Playing Vowels';
    legend.textContent = "Please type the vowel from left to right"
    vowels1.style.display = 'grid';
    practiceForm.style.display = 'initial';

    practiceForm.addEventListener('submit', function (event) {
        event.preventDefault();
        //get value and conditions to increment the score
        scoreCount.textContent++;
    });

});


// const startPlay = document.querySelector('#start-play');
// const scoreReset = document.querySelector('#score-reset');
// const scoreCount = document.querySelector('#score-count');

// //Learn Vowels - used constants

// const vowelList1 = document.querySelector('#vowel-list1');
// const vowels1Form = document.forms['vowel-lesson1-form'];
// const vowels1 = document.querySelectorAll('#vowel-lesson1 div');

// const vowelList2 = document.querySelector('#vowel-list2');
// const vowels2Form = document.forms['vowel-lesson2-form'];
// const vowels2 = document.querySelectorAll('#vowel-lesson2 div');

// const vowelList3 = document.querySelector('#vowel-list3');
// const vowels3Form = document.forms['vowel-lesson3-form'];
// const vowels3 = document.querySelectorAll('#vowel-lesson3 div');

// //Learn Root Syllables -used constants

// const syllableList1 = document.querySelector('#syllable-list1');
// const syllable1Form = document.forms['syllable-lesson1-form'];
// const syllables1 = document.querySelectorAll('#syllable-lesson1 div');

// const syllableList2 = document.querySelector('#syllable-list2');
// const syllable2Form = document.forms['syllable-lesson2-form'];
// const syllables2 = document.querySelectorAll('#syllable-lesson2 div');

// const syllableList3 = document.querySelector('#syllable-list3');
// const syllable3Form = document.forms['syllable-lesson3-form'];
// const syllables3 = document.querySelectorAll('#syllable-lesson3 div');

// const syllableList4 = document.querySelector('#syllable-list4');
// const syllable4Form = document.forms['syllable-lesson4-form'];
// const syllables4 = document.querySelectorAll('#syllable-lesson4 div');

// const syllableList5 = document.querySelector('#syllable-list5');
// const syllable5Form = document.forms['syllable-lesson5-form'];
// const syllables5 = document.querySelectorAll('#syllable-lesson5 div');

// const syllableList6 = document.querySelector('#syllable-list6');
// const syllable6Form = document.forms['syllable-lesson6-form'];
// const syllables6 = document.querySelectorAll('#syllable-lesson6 div');

// const syllableList7 = document.querySelector('#syllable-list7');
// const syllable7Form = document.forms['syllable-lesson7-form'];
// const syllables7 = document.querySelectorAll('#syllable-lesson7 div');
// const message = document.querySelector('#message');



// yesButton.addEventListener('click', function (event) {
//     startPlay.style.display = 'none';
//     scoreReset.style.display = 'block';
//     vowelList1.style.display = 'block';
// });

// resetButton.addEventListener('click', function (event) {
//     scoreCount.textContent = 0;
// });
// vowels1Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     var value = vowels1Form.querySelector('input[type="text"]').value;
//     vowels1.forEach(function (vowel) {
//         if (value == vowels1[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             vowels1Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             })
//             if (scoreCount.textContent == 4) {
//                 scoreCount.textContent = 0;
//                 vowelList2.style.display = 'block';
//                 vowelList1.style.display = 'none';
//             }
//         }
//     })
// });

// vowels2Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = vowels2Form.querySelector('input[type="text"]').value;
//     vowels2.forEach(function (vowel) {
//         if (value == vowels2[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             vowels2Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             });
//             if (scoreCount.textContent == 4) {
//                 scoreCount.textContent = 0;
//                 vowelList3.style.display = 'block';
//                 vowelList2.style.display = 'none';
//             }
//         }
//     })
// })

// vowels3Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = vowels3Form.querySelector('input[type="text"]').value;
//     vowels3.forEach(function (vowel) {
//         if (value == vowels3[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             vowels3Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             })
//             if (scoreCount.textContent == 4) {
//                 scoreCount.textContent = 0;
//                 vowelList3.style.display = 'none';
//                 syllableList1.style.display = 'block';
//             }
//         }
//     })
// });

// syllable1Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = syllable1Form.querySelector('input[type="text"]').value;
//     syllables1.forEach(function (syllable) {
//         if (value == syllables1[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             syllable1Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             });
//             if (scoreCount.textContent == 5) {
//                 scoreCount.textContent = 0;
//                 syllableList1.style.display = 'none';
//                 syllableList2.style.display = 'block';
//             }
//         }
//     })
// });

// syllable2Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = syllable2Form.querySelector('input[type="text"]').value;
//     syllables2.forEach(function (syllable) {
//         if (value == syllables2[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             syllable2Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             });
//             if (scoreCount.textContent == 5) {
//                 scoreCount.textContent = 0;
//                 syllableList2.style.display = 'none';
//                 syllableList3.style.display = 'block';
//             }
//         }
//     })
// });

// syllable3Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = syllable3Form.querySelector('input[type="text"]').value;
//     syllables3.forEach(function (syllable) {
//         if (value == syllables3[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             syllable3Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             });
//             if (scoreCount.textContent == 5) {
//                 scoreCount.textContent = 0;
//                 syllableList3.style.display = 'none';
//                 syllableList4.style.display = 'block';
//             }
//         }
//     })
// });

// syllable4Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = syllable4Form.querySelector('input[type="text"]').value;
//     syllables4.forEach(function (syllable) {
//         if (value == syllables4[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             syllable4Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             });
//             if (scoreCount.textContent == 5) {
//                 scoreCount.textContent = 0;
//                 syllableList4.style.display = 'none';
//                 syllableList5.style.display = 'block';
//             }
//         }
//     })
// });

// syllable5Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = syllable5Form.querySelector('input[type="text"]').value;
//     syllables5.forEach(function (syllable) {
//         if (value == syllables5[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             syllable5Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             });
//             if (scoreCount.textContent == 5) {
//                 scoreCount.textContent = 0;
//                 syllableList5.style.display = 'none';
//                 syllableList6.style.display = 'block';
//             }
//         }
//     })
// });

// syllable6Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = syllable6Form.querySelector('input[type="text"]').value;
//     syllables6.forEach(function (syllable) {
//         if (value == syllables6[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             syllable6Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             });
//             if (scoreCount.textContent == 5) {
//                 scoreCount.textContent = 0;
//                 syllableList6.style.display = 'none';
//                 syllableList7.style.display = 'block';
//             }
//         }
//     })
// });

// syllable7Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const value = syllable7Form.querySelector('input[type="text"]').value;
//     syllables7.forEach(function (syllable) {
//         if (value == syllables7[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
//             syllable7Form.querySelector('input[type="text"]').addEventListener('focus', function (e) {
//                 e.target.value = '';
//             });
//             if (scoreCount.textContent == 6) {
//                 scoreCount.textContent = 0;
//                 syllableList7.style.display = 'none';
//                 message.style.display = 'block';
//                 startPlay.style.display = 'block';
//             }
//         }
//     })
// });


