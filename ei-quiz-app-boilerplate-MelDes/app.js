/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How does Daenerys Targaryen command her dragons to breathe fire?',
      answers: [
        'Valor Morghulis',
        'Khaleesi',
        'Drogo',
        'Dracarys'
      ],
      correctAnswer: 'Dracarys'
    },
    {
      question: 'Who is the Three-eyed Raven',
      answers: [
        'Bran',
        'Hodor',
        'Sansa',
        'Jon'
      ],
      correctAnswer: 'Bran'
    },
    {
      question: 'Jaime Lannister lost his: ',
      answers: [
        'hand',
        'head',
        'arm',
        'leg'
      ],
      correctAnswer: 'hand'
    },
    {
      question: 'Cersei Lannister was romantically in love with her: ',
      answers: [
        'twin brother',
        'father',
        'cousin',
        'son'
      ],
      correctAnswer: 'twin brother'
    },
    {
      question: 'Sansa\'s favorite food is: '
      answers: [
        'pork pie',
        'lemon cake',
        'pigeon pie',
        'direwolf bread'
      ],
      correctAnswer: 'lemon cake'
    }
  ],
  questionNumber: 0,
  score: 0
};

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */