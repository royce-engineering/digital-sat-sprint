import type { Course } from "@/content/courses";

export const course: Course = {
  "id": "systems-equations",
  "title": "Systems of Equations",
  "subtitle": "Connect algebraic solutions to intersections and real constraints.",
  "description": "Use substitution, elimination, and graph interpretation to solve systems.",
  "estimatedMinutes": 55,
  "difficulty": "Medium",
  "objectives": [
    "Choose substitution or elimination efficiently",
    "Interpret a system as intersecting graphs",
    "Recognize no-solution and infinite-solution systems",
    "Model two-constraint word problems"
  ],
  "concepts": [
    {
      "title": "What a solution means",
      "body": "A solution satisfies every equation in the system simultaneously."
    },
    {
      "title": "Substitution",
      "body": "Solve one equation for a variable, then replace that variable in the other equation."
    },
    {
      "title": "Elimination",
      "body": "Add or subtract equations so one variable cancels."
    },
    {
      "title": "Graph interpretation",
      "body": "One intersection means one solution; parallel lines mean none; the same line means infinitely many."
    }
  ],
  "strategy": [
    {
      "title": "Compare",
      "body": "Inspect coefficients before choosing a method."
    },
    {
      "title": "Align",
      "body": "Write equations in matching variable order."
    },
    {
      "title": "Eliminate or substitute",
      "body": "Use the method requiring fewer steps."
    },
    {
      "title": "Back-substitute",
      "body": "Find the second variable."
    },
    {
      "title": "Verify",
      "body": "Check the ordered pair in both equations."
    }
  ],
  "traps": [
    {
      "title": "One-equation check",
      "body": "A pair satisfies one equation but not the other."
    },
    {
      "title": "Reversed coordinates",
      "body": "The x- and y-values are swapped."
    },
    {
      "title": "Dependent-system miss",
      "body": "Equivalent equations are treated as distinct lines."
    },
    {
      "title": "Context mismatch",
      "body": "A mathematically valid value violates a real-world constraint."
    }
  ],
  "coachTips": [
    "The solution is an ordered pair, not two unrelated numbers.",
    "Elimination is usually fastest when coefficients already match.",
    "Graph language can reveal the number of solutions without solving."
  ],
  "workedExamples": [
    {
      "id": "systems-equations-ex-1",
      "passage": "Solve the system x + y = 11 and x - y = 3.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(7, 4)",
          "rationale": "Add the equations to get 2x = 14, then find y."
        },
        {
          "text": "(4, 7)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(8, 3)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(11, 3)",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Elimination",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-2",
      "passage": "Two notebooks and three pens cost $13. One notebook and two pens cost $8. What is the cost of one notebook?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "$2",
          "rationale": "Eliminate one variable or subtract a multiple of the equations."
        },
        {
          "text": "$3",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "$4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "$5",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context system",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-3",
      "passage": "The lines y = 2x + 1 and y = -x + 10 intersect at what point?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(3, 7)",
          "rationale": "Set the expressions for y equal, solve for x, then substitute."
        },
        {
          "text": "(7, 3)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(2, 5)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(4, 9)",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Intersection",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-4",
      "passage": "A system has equations 2x + 4y = 8 and x + 2y = 4. How many solutions does it have?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "Infinitely many",
          "rationale": "The first equation is twice the second, so they are the same line."
        },
        {
          "text": "Exactly one",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "None",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "Exactly two",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Number of solutions",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-5",
      "passage": "A system has equations y = 3x + 2 and y = 3x - 5. How many solutions?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "No solutions",
          "rationale": "Equal slopes and different intercepts mean parallel lines."
        },
        {
          "text": "One solution",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "Two solutions",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "Infinitely many",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Parallel lines",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-6",
      "passage": "Solve the system x + y = 11 and x - y = 3.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(7, 4)",
          "rationale": "Add the equations to get 2x = 14, then find y."
        },
        {
          "text": "(4, 7)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(8, 3)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(11, 3)",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Elimination",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-7",
      "passage": "Two notebooks and three pens cost $13. One notebook and two pens cost $8. What is the cost of one notebook?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "$2",
          "rationale": "Eliminate one variable or subtract a multiple of the equations."
        },
        {
          "text": "$3",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "$4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "$5",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context system",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-8",
      "passage": "The lines y = 2x + 1 and y = -x + 10 intersect at what point?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(3, 7)",
          "rationale": "Set the expressions for y equal, solve for x, then substitute."
        },
        {
          "text": "(7, 3)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(2, 5)",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "(4, 9)",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Intersection",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-9",
      "passage": "A system has equations 2x + 4y = 8 and x + 2y = 4. How many solutions does it have?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "Infinitely many",
          "rationale": "The first equation is twice the second, so they are the same line."
        },
        {
          "text": "Exactly one",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "None",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "Exactly two",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Number of solutions",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "systems-equations-ex-10",
      "passage": "A system has equations y = 3x + 2 and y = 3x - 5. How many solutions?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "No solutions",
          "rationale": "Equal slopes and different intercepts mean parallel lines."
        },
        {
          "text": "One solution",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "Two solutions",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "Infinitely many",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Parallel lines",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    }
  ],
  "questions": [
    {
      "id": "systems-equations-q-1",
      "passage": "The lines y = 2x + 1 and y = -x + 10 intersect at what point?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(3, 7)",
          "rationale": "Set the expressions for y equal, solve for x, then substitute."
        },
        {
          "text": "(7, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(2, 5)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(4, 9)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Intersection"
    },
    {
      "id": "systems-equations-q-2",
      "passage": "A system has equations 2x + 4y = 8 and x + 2y = 4. How many solutions does it have?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "Infinitely many",
          "rationale": "The first equation is twice the second, so they are the same line."
        },
        {
          "text": "Exactly one",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "None",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Exactly two",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Number of solutions"
    },
    {
      "id": "systems-equations-q-3",
      "passage": "A system has equations y = 3x + 2 and y = 3x - 5. How many solutions?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "No solutions",
          "rationale": "Equal slopes and different intercepts mean parallel lines."
        },
        {
          "text": "One solution",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Two solutions",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Infinitely many",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Parallel lines"
    },
    {
      "id": "systems-equations-q-4",
      "passage": "Solve the system x + y = 11 and x - y = 3.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(7, 4)",
          "rationale": "Add the equations to get 2x = 14, then find y."
        },
        {
          "text": "(4, 7)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(8, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(11, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Elimination"
    },
    {
      "id": "systems-equations-q-5",
      "passage": "Two notebooks and three pens cost $13. One notebook and two pens cost $8. What is the cost of one notebook?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "$2",
          "rationale": "Eliminate one variable or subtract a multiple of the equations."
        },
        {
          "text": "$3",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "$4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "$5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context system"
    },
    {
      "id": "systems-equations-q-6",
      "passage": "The lines y = 2x + 1 and y = -x + 10 intersect at what point?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(3, 7)",
          "rationale": "Set the expressions for y equal, solve for x, then substitute."
        },
        {
          "text": "(7, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(2, 5)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(4, 9)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Intersection"
    },
    {
      "id": "systems-equations-q-7",
      "passage": "A system has equations 2x + 4y = 8 and x + 2y = 4. How many solutions does it have?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "Infinitely many",
          "rationale": "The first equation is twice the second, so they are the same line."
        },
        {
          "text": "Exactly one",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "None",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Exactly two",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Number of solutions"
    },
    {
      "id": "systems-equations-q-8",
      "passage": "A system has equations y = 3x + 2 and y = 3x - 5. How many solutions?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "No solutions",
          "rationale": "Equal slopes and different intercepts mean parallel lines."
        },
        {
          "text": "One solution",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Two solutions",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Infinitely many",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Parallel lines"
    },
    {
      "id": "systems-equations-q-9",
      "passage": "Solve the system x + y = 11 and x - y = 3.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(7, 4)",
          "rationale": "Add the equations to get 2x = 14, then find y."
        },
        {
          "text": "(4, 7)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(8, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(11, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Elimination"
    },
    {
      "id": "systems-equations-q-10",
      "passage": "Two notebooks and three pens cost $13. One notebook and two pens cost $8. What is the cost of one notebook?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "$2",
          "rationale": "Eliminate one variable or subtract a multiple of the equations."
        },
        {
          "text": "$3",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "$4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "$5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context system"
    },
    {
      "id": "systems-equations-q-11",
      "passage": "The lines y = 2x + 1 and y = -x + 10 intersect at what point?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(3, 7)",
          "rationale": "Set the expressions for y equal, solve for x, then substitute."
        },
        {
          "text": "(7, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(2, 5)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(4, 9)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Intersection"
    },
    {
      "id": "systems-equations-q-12",
      "passage": "A system has equations 2x + 4y = 8 and x + 2y = 4. How many solutions does it have?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "Infinitely many",
          "rationale": "The first equation is twice the second, so they are the same line."
        },
        {
          "text": "Exactly one",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "None",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Exactly two",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Number of solutions"
    },
    {
      "id": "systems-equations-q-13",
      "passage": "A system has equations y = 3x + 2 and y = 3x - 5. How many solutions?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "No solutions",
          "rationale": "Equal slopes and different intercepts mean parallel lines."
        },
        {
          "text": "One solution",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Two solutions",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Infinitely many",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Parallel lines"
    },
    {
      "id": "systems-equations-q-14",
      "passage": "Solve the system x + y = 11 and x - y = 3.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(7, 4)",
          "rationale": "Add the equations to get 2x = 14, then find y."
        },
        {
          "text": "(4, 7)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(8, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(11, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Elimination"
    },
    {
      "id": "systems-equations-q-15",
      "passage": "Two notebooks and three pens cost $13. One notebook and two pens cost $8. What is the cost of one notebook?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "$2",
          "rationale": "Eliminate one variable or subtract a multiple of the equations."
        },
        {
          "text": "$3",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "$4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "$5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context system"
    },
    {
      "id": "systems-equations-q-16",
      "passage": "The lines y = 2x + 1 and y = -x + 10 intersect at what point?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(3, 7)",
          "rationale": "Set the expressions for y equal, solve for x, then substitute."
        },
        {
          "text": "(7, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(2, 5)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(4, 9)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Intersection"
    },
    {
      "id": "systems-equations-q-17",
      "passage": "A system has equations 2x + 4y = 8 and x + 2y = 4. How many solutions does it have?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "Infinitely many",
          "rationale": "The first equation is twice the second, so they are the same line."
        },
        {
          "text": "Exactly one",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "None",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Exactly two",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Number of solutions"
    },
    {
      "id": "systems-equations-q-18",
      "passage": "A system has equations y = 3x + 2 and y = 3x - 5. How many solutions?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "No solutions",
          "rationale": "Equal slopes and different intercepts mean parallel lines."
        },
        {
          "text": "One solution",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Two solutions",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "Infinitely many",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Parallel lines"
    },
    {
      "id": "systems-equations-q-19",
      "passage": "Solve the system x + y = 11 and x - y = 3.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "(7, 4)",
          "rationale": "Add the equations to get 2x = 14, then find y."
        },
        {
          "text": "(4, 7)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(8, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "(11, 3)",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Elimination"
    },
    {
      "id": "systems-equations-q-20",
      "passage": "Two notebooks and three pens cost $13. One notebook and two pens cost $8. What is the cost of one notebook?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "$2",
          "rationale": "Eliminate one variable or subtract a multiple of the equations."
        },
        {
          "text": "$3",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "$4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "$5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Context system"
    }
  ],
  "flashcards": [
    {
      "front": "What a solution means",
      "back": "A solution satisfies every equation in the system simultaneously."
    },
    {
      "front": "Substitution",
      "back": "Solve one equation for a variable, then replace that variable in the other equation."
    },
    {
      "front": "Elimination",
      "back": "Add or subtract equations so one variable cancels."
    },
    {
      "front": "Graph interpretation",
      "back": "One intersection means one solution; parallel lines mean none; the same line means infinitely many."
    },
    {
      "front": "Compare",
      "back": "Inspect coefficients before choosing a method."
    },
    {
      "front": "Align",
      "back": "Write equations in matching variable order."
    },
    {
      "front": "Eliminate or substitute",
      "back": "Use the method requiring fewer steps."
    },
    {
      "front": "Back-substitute",
      "back": "Find the second variable."
    },
    {
      "front": "Verify",
      "back": "Check the ordered pair in both equations."
    },
    {
      "front": "What a solution means Review 10",
      "back": "A solution satisfies every equation in the system simultaneously."
    },
    {
      "front": "Substitution Review 11",
      "back": "Solve one equation for a variable, then replace that variable in the other equation."
    },
    {
      "front": "Elimination Review 12",
      "back": "Add or subtract equations so one variable cancels."
    },
    {
      "front": "Graph interpretation Review 13",
      "back": "One intersection means one solution; parallel lines mean none; the same line means infinitely many."
    },
    {
      "front": "Compare Review 14",
      "back": "Inspect coefficients before choosing a method."
    },
    {
      "front": "Align Review 15",
      "back": "Write equations in matching variable order."
    },
    {
      "front": "Eliminate or substitute Review 16",
      "back": "Use the method requiring fewer steps."
    },
    {
      "front": "Back-substitute Review 17",
      "back": "Find the second variable."
    },
    {
      "front": "Verify Review 18",
      "back": "Check the ordered pair in both equations."
    },
    {
      "front": "What a solution means Review 19",
      "back": "A solution satisfies every equation in the system simultaneously."
    },
    {
      "front": "Substitution Review 20",
      "back": "Solve one equation for a variable, then replace that variable in the other equation."
    },
    {
      "front": "Elimination Review 21",
      "back": "Add or subtract equations so one variable cancels."
    },
    {
      "front": "Graph interpretation Review 22",
      "back": "One intersection means one solution; parallel lines mean none; the same line means infinitely many."
    },
    {
      "front": "Compare Review 23",
      "back": "Inspect coefficients before choosing a method."
    },
    {
      "front": "Align Review 24",
      "back": "Write equations in matching variable order."
    },
    {
      "front": "Eliminate or substitute Review 25",
      "back": "Use the method requiring fewer steps."
    },
    {
      "front": "Back-substitute Review 26",
      "back": "Find the second variable."
    },
    {
      "front": "Verify Review 27",
      "back": "Check the ordered pair in both equations."
    },
    {
      "front": "What a solution means Review 28",
      "back": "A solution satisfies every equation in the system simultaneously."
    },
    {
      "front": "Substitution Review 29",
      "back": "Solve one equation for a variable, then replace that variable in the other equation."
    },
    {
      "front": "Elimination Review 30",
      "back": "Add or subtract equations so one variable cancels."
    }
  ],
  "nextCourseId": "linear-inequalities"
} as Course;
