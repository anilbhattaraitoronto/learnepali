
// //Starting constants

const yesButton = document.querySelector('#yes-button');
const lessonScoreButton = document.querySelector('#lesson-score');
const nextButton = document.querySelector('#next');
const masterScoreButton = document.querySelector('#master-score');
const totalScore = document.querySelector('#total-score-count');
const message = document.querySelector('#message');

const startPlay = document.querySelector('#start-playing');
const practiceForm = document.forms['practice-form'];
const legend = document.querySelector('legend');
const lessonScore = document.querySelector('#score-count');
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
    keyboardSetup.style.display = 'none';
})

const blogList = document.querySelector('#blog-list');
const blogs = document.querySelector('#blog');
blogList.addEventListener('click', function (e) {
    e.preventDefault();
    blogs.style.display = 'block';
    characterDescription.style.display = 'none';
    lessons.style.display = 'none';
    startPlay.style.display = 'none';
    keyboardSetup.style.display = 'none';
})

const keyboard = document.querySelector('#setup');
const keyboardSetup = document.querySelector('#keyboard-setup');
keyboard.addEventListener('click', function (e) {
    e.preventDefault();
    keyboardSetup.style.display = 'block';
    blogs.style.display = 'none';
    lessons.style.display = 'none';
    startPlay.style.display = 'none';
    characterDescription.style.display = 'none';
})

const vowels1 = document.querySelectorAll('#vowels1 div');
const vowels2 = document.querySelectorAll('#vowels2 div');
const vowels3 = document.querySelectorAll('#vowels3 div');
const syllables1 = document.querySelectorAll('#syllables1 div');
const syllables2 = document.querySelectorAll('#syllables2 div');
const syllables3 = document.querySelectorAll('#syllables3 div');
const syllables4 = document.querySelectorAll('#syllables4 div');
const syllables5 = document.querySelectorAll('#syllables5 div');
const syllables6 = document.querySelectorAll('#syllables6 div');
const syllables7 = document.querySelectorAll('#syllables7 div');


yesButton.addEventListener('click', function (event) {
    startPlay.style.display = 'none';
    characterList.textContent = 'Learning Vowels';
    legend.textContent = "Please type the vowel"
    document.querySelector('#vowels1').style.display = 'grid';
    practiceForm.style.display = 'initial';
    lessonScoreButton.style.display = 'inline';
    masterScoreButton.style.display = 'inline';
});
practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    vowels1.forEach(function (vowel) {
        if (value === vowels1[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
            practiceForm.querySelector('input[type="text"]').addEventListener('focus', function (event) {
                event.target.value = '';
            })
        }
        if (Number(lessonScore.textContent) === 4) {
            document.querySelector('#vowels2').style.display = 'grid';
            document.querySelector('#vowels1').style.display = 'none';
            lessonScore.textContent = 0;
        }
    });

});

practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    vowels2.forEach(function (vowel) {
        if (value === vowels2[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 4) {
            document.querySelector('#vowels3').style.display = 'grid';
            document.querySelector('#vowels2').style.display = 'none';
            lessonScore.textContent = 0;
        }
    });
});
practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    vowels3.forEach(function (vowel) {
        if (value === vowels3[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 4) {
            document.querySelector('#syllables1').style.display = 'grid';
            document.querySelector('#vowels3').style.display = 'none';
            lessonScore.textContent = 0;
            characterList.textContent = "Learning Root Syllables";
        }
    });
});
practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    syllables1.forEach(function (vowel) {
        if (value === syllables1[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 5) {
            document.querySelector('#syllables2').style.display = 'grid';
            document.querySelector('#syllables1').style.display = 'none';
            lessonScore.textContent = 0;
        }
    });

});
practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    syllables2.forEach(function (vowel) {
        if (value === syllables2[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 5) {
            document.querySelector('#syllables3').style.display = 'grid';
            document.querySelector('#syllables2').style.display = 'none';
            lessonScore.textContent = 0;
        }
    });

});

practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    syllables3.forEach(function (vowel) {
        if (value === syllables3[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 5) {
            document.querySelector('#syllables4').style.display = 'grid';
            document.querySelector('#syllables3').style.display = 'none';
            lessonScore.textContent = 0;
        }
    });
});

practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    syllables4.forEach(function (vowel) {
        if (value === syllables4[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 5) {
            document.querySelector('#syllables5').style.display = 'grid';
            document.querySelector('#syllables4').style.display = 'none';
            lessonScore.textContent = 0;
        }
    });
});

practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    syllables5.forEach(function (vowel) {
        if (value === syllables5[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 5) {
            document.querySelector('#syllables6').style.display = 'grid';
            document.querySelector('#syllables5').style.display = 'none';
            lessonScore.textContent = 0;
        }
    });
});

practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    syllables6.forEach(function (vowel) {
        if (value === syllables6[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 5) {
            document.querySelector('#syllables7').style.display = 'grid';
            document.querySelector('#syllables6').style.display = 'none';
            lessonScore.textContent = 0;
        }
    });
});
practiceForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = practiceForm.querySelector('input[type="text"]').value;
    syllables7.forEach(function (vowel) {
        if (value === syllables7[lessonScore.textContent].textContent) {
            lessonScore.textContent++;
            totalScore.textContent++;
        }
        if (Number(lessonScore.textContent) === 6) {
            message.style.display = 'block';
            lessonScore.textContent = 0;
        }
    });
});
// vowels1Form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     var value = vowels1Form.querySelector('input[type="text"]').value;
//     vowels1.forEach(function (vowel) {
//         if (value == vowels1[scoreCount.textContent].textContent) {
//             scoreCount.textContent++;
practiceForm.querySelector('input[type="text"]').addEventListener('focus', function (e) {
    e.target.value = '';
})
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


