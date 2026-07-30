import type { Course } from "@/content/courses";

export const course: Course = {
  "id": "functions-nonlinear",
  "title": "Functions & Nonlinear Equations",
  "subtitle": "Interpret notation, quadratics, and exponential models.",
  "description": "Move from linear algebra into the nonlinear relationships common on the Digital SAT.",
  "estimatedMinutes": 55,
  "difficulty": "Medium",
  "objectives": [
    "Evaluate and interpret functions",
    "Solve basic quadratic equations",
    "Read vertex and factored forms",
    "Interpret exponential growth and decay"
  ],
  "concepts": [
    {
      "title": "Function notation",
      "body": "f(x) names the output produced by input x; it is not multiplication."
    },
    {
      "title": "Quadratic forms",
      "body": "Standard, factored, and vertex forms reveal different features."
    },
    {
      "title": "Exponential models",
      "body": "In a(b)^x, a is the initial value and b is the repeated growth or decay factor."
    },
    {
      "title": "Zeros and intersections",
      "body": "Solving f(x)=0 finds x-intercepts; solving f(x)=g(x) finds intersections."
    }
  ],
  "strategy": [
    {
      "title": "Identify the form",
      "body": "Decide which representation exposes the needed feature."
    },
    {
      "title": "Substitute or transform",
      "body": "Insert the input or rewrite the expression."
    },
    {
      "title": "Solve",
      "body": "Factor, isolate, or use graph relationships."
    },
    {
      "title": "Check domain",
      "body": "Reject impossible or extraneous values."
    },
    {
      "title": "Interpret",
      "body": "Connect the algebraic result to the graph or context."
    }
  ],
  "traps": [
    {
      "title": "Notation error",
      "body": "f(x) is treated as f times x."
    },
    {
      "title": "Single-root answer",
      "body": "One of two quadratic solutions is omitted."
    },
    {
      "title": "Growth-factor confusion",
      "body": "1.08 is read as 108% growth instead of 8% growth."
    },
    {
      "title": "Form mismatch",
      "body": "A correct feature is taken from the wrong equation form."
    }
  ],
  "coachTips": [
    "Choose the form that makes the requested feature visible.",
    "For exponential models, separate initial value from percent change.",
    "Check both roots when squaring is involved."
  ],
  "workedExamples": [
    {
      "id": "functions-nonlinear-ex-1",
      "passage": "If f(x) = 2x\u00b2 - 3, what is f(4)?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "29",
          "rationale": "Substitute 4 for x: 2(16) - 3."
        },
        {
          "text": "13",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "25",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "61",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Function evaluation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-2",
      "passage": "The function g(x) = 5(1.08)^x models a quantity. What does 1.08 represent?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "An 8% increase per unit x",
          "rationale": "An exponential factor of 1 + 0.08 indicates 8% growth."
        },
        {
          "text": "An 8% decrease",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "An initial value of 1.08",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "An increase of 108%",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponential interpretation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-3",
      "passage": "What are the solutions to x\u00b2 - 9 = 0?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x = -3 and x = 3",
          "rationale": "Factor as (x - 3)(x + 3)."
        },
        {
          "text": "x = 3 only",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = -9 and x = 9",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 0 and x = 9",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Quadratic equation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-4",
      "passage": "A parabola has vertex (2, -5). Which form displays the vertex directly?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "y = (x - 2)\u00b2 - 5",
          "rationale": "Vertex form is y = a(x - h)\u00b2 + k."
        },
        {
          "text": "y = (x + 2)\u00b2 - 5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "y = x\u00b2 - 2x - 5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "y = (x - 5)\u00b2 + 2",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Vertex form",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-5",
      "passage": "If f(x + 1) = 3x + 7, what is f(5)?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "19",
          "rationale": "Set x + 1 = 5, so x = 4; then compute 3(4) + 7."
        },
        {
          "text": "15",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "22",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "25",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Function notation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-6",
      "passage": "If f(x) = 2x\u00b2 - 3, what is f(4)?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "29",
          "rationale": "Substitute 4 for x: 2(16) - 3."
        },
        {
          "text": "13",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "25",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "61",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Function evaluation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-7",
      "passage": "The function g(x) = 5(1.08)^x models a quantity. What does 1.08 represent?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "An 8% increase per unit x",
          "rationale": "An exponential factor of 1 + 0.08 indicates 8% growth."
        },
        {
          "text": "An 8% decrease",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "An initial value of 1.08",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "An increase of 108%",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponential interpretation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-8",
      "passage": "What are the solutions to x\u00b2 - 9 = 0?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x = -3 and x = 3",
          "rationale": "Factor as (x - 3)(x + 3)."
        },
        {
          "text": "x = 3 only",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = -9 and x = 9",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 0 and x = 9",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Quadratic equation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-9",
      "passage": "A parabola has vertex (2, -5). Which form displays the vertex directly?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "y = (x - 2)\u00b2 - 5",
          "rationale": "Vertex form is y = a(x - h)\u00b2 + k."
        },
        {
          "text": "y = (x + 2)\u00b2 - 5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "y = x\u00b2 - 2x - 5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "y = (x - 5)\u00b2 + 2",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Vertex form",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "functions-nonlinear-ex-10",
      "passage": "If f(x + 1) = 3x + 7, what is f(5)?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "19",
          "rationale": "Set x + 1 = 5, so x = 4; then compute 3(4) + 7."
        },
        {
          "text": "15",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "22",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "25",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Function notation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    }
  ],
  "questions": [
    {
      "id": "functions-nonlinear-q-1",
      "passage": "What are the solutions to x\u00b2 - 9 = 0?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = -3 and x = 3",
          "rationale": "Factor as (x - 3)(x + 3)."
        },
        {
          "text": "x = 3 only",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = -9 and x = 9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 0 and x = 9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Quadratic equation"
    },
    {
      "id": "functions-nonlinear-q-2",
      "passage": "A parabola has vertex (2, -5). Which form displays the vertex directly?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "y = (x - 2)\u00b2 - 5",
          "rationale": "Vertex form is y = a(x - h)\u00b2 + k."
        },
        {
          "text": "y = (x + 2)\u00b2 - 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "y = x\u00b2 - 2x - 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "y = (x - 5)\u00b2 + 2",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Vertex form"
    },
    {
      "id": "functions-nonlinear-q-3",
      "passage": "If f(x + 1) = 3x + 7, what is f(5)?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "19",
          "rationale": "Set x + 1 = 5, so x = 4; then compute 3(4) + 7."
        },
        {
          "text": "15",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "22",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "25",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Function notation"
    },
    {
      "id": "functions-nonlinear-q-4",
      "passage": "If f(x) = 2x\u00b2 - 3, what is f(4)?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "29",
          "rationale": "Substitute 4 for x: 2(16) - 3."
        },
        {
          "text": "13",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "25",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "61",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Function evaluation"
    },
    {
      "id": "functions-nonlinear-q-5",
      "passage": "The function g(x) = 5(1.08)^x models a quantity. What does 1.08 represent?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "An 8% increase per unit x",
          "rationale": "An exponential factor of 1 + 0.08 indicates 8% growth."
        },
        {
          "text": "An 8% decrease",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "An initial value of 1.08",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "An increase of 108%",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponential interpretation"
    },
    {
      "id": "functions-nonlinear-q-6",
      "passage": "What are the solutions to x\u00b2 - 9 = 0?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = -3 and x = 3",
          "rationale": "Factor as (x - 3)(x + 3)."
        },
        {
          "text": "x = 3 only",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = -9 and x = 9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 0 and x = 9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Quadratic equation"
    },
    {
      "id": "functions-nonlinear-q-7",
      "passage": "A parabola has vertex (2, -5). Which form displays the vertex directly?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "y = (x - 2)\u00b2 - 5",
          "rationale": "Vertex form is y = a(x - h)\u00b2 + k."
        },
        {
          "text": "y = (x + 2)\u00b2 - 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "y = x\u00b2 - 2x - 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "y = (x - 5)\u00b2 + 2",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Vertex form"
    },
    {
      "id": "functions-nonlinear-q-8",
      "passage": "If f(x + 1) = 3x + 7, what is f(5)?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "19",
          "rationale": "Set x + 1 = 5, so x = 4; then compute 3(4) + 7."
        },
        {
          "text": "15",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "22",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "25",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Function notation"
    },
    {
      "id": "functions-nonlinear-q-9",
      "passage": "If f(x) = 2x\u00b2 - 3, what is f(4)?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "29",
          "rationale": "Substitute 4 for x: 2(16) - 3."
        },
        {
          "text": "13",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "25",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "61",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Function evaluation"
    },
    {
      "id": "functions-nonlinear-q-10",
      "passage": "The function g(x) = 5(1.08)^x models a quantity. What does 1.08 represent?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "An 8% increase per unit x",
          "rationale": "An exponential factor of 1 + 0.08 indicates 8% growth."
        },
        {
          "text": "An 8% decrease",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "An initial value of 1.08",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "An increase of 108%",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponential interpretation"
    },
    {
      "id": "functions-nonlinear-q-11",
      "passage": "What are the solutions to x\u00b2 - 9 = 0?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = -3 and x = 3",
          "rationale": "Factor as (x - 3)(x + 3)."
        },
        {
          "text": "x = 3 only",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = -9 and x = 9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 0 and x = 9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Quadratic equation"
    },
    {
      "id": "functions-nonlinear-q-12",
      "passage": "A parabola has vertex (2, -5). Which form displays the vertex directly?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "y = (x - 2)\u00b2 - 5",
          "rationale": "Vertex form is y = a(x - h)\u00b2 + k."
        },
        {
          "text": "y = (x + 2)\u00b2 - 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "y = x\u00b2 - 2x - 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "y = (x - 5)\u00b2 + 2",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Vertex form"
    },
    {
      "id": "functions-nonlinear-q-13",
      "passage": "If f(x + 1) = 3x + 7, what is f(5)?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "19",
          "rationale": "Set x + 1 = 5, so x = 4; then compute 3(4) + 7."
        },
        {
          "text": "15",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "22",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "25",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Function notation"
    },
    {
      "id": "functions-nonlinear-q-14",
      "passage": "If f(x) = 2x\u00b2 - 3, what is f(4)?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "29",
          "rationale": "Substitute 4 for x: 2(16) - 3."
        },
        {
          "text": "13",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "25",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "61",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Function evaluation"
    },
    {
      "id": "functions-nonlinear-q-15",
      "passage": "The function g(x) = 5(1.08)^x models a quantity. What does 1.08 represent?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "An 8% increase per unit x",
          "rationale": "An exponential factor of 1 + 0.08 indicates 8% growth."
        },
        {
          "text": "An 8% decrease",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "An initial value of 1.08",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "An increase of 108%",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponential interpretation"
    },
    {
      "id": "functions-nonlinear-q-16",
      "passage": "What are the solutions to x\u00b2 - 9 = 0?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = -3 and x = 3",
          "rationale": "Factor as (x - 3)(x + 3)."
        },
        {
          "text": "x = 3 only",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = -9 and x = 9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 0 and x = 9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Quadratic equation"
    },
    {
      "id": "functions-nonlinear-q-17",
      "passage": "A parabola has vertex (2, -5). Which form displays the vertex directly?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "y = (x - 2)\u00b2 - 5",
          "rationale": "Vertex form is y = a(x - h)\u00b2 + k."
        },
        {
          "text": "y = (x + 2)\u00b2 - 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "y = x\u00b2 - 2x - 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "y = (x - 5)\u00b2 + 2",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Vertex form"
    },
    {
      "id": "functions-nonlinear-q-18",
      "passage": "If f(x + 1) = 3x + 7, what is f(5)?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "19",
          "rationale": "Set x + 1 = 5, so x = 4; then compute 3(4) + 7."
        },
        {
          "text": "15",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "22",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "25",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Function notation"
    },
    {
      "id": "functions-nonlinear-q-19",
      "passage": "If f(x) = 2x\u00b2 - 3, what is f(4)?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "29",
          "rationale": "Substitute 4 for x: 2(16) - 3."
        },
        {
          "text": "13",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "25",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "61",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Function evaluation"
    },
    {
      "id": "functions-nonlinear-q-20",
      "passage": "The function g(x) = 5(1.08)^x models a quantity. What does 1.08 represent?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "An 8% increase per unit x",
          "rationale": "An exponential factor of 1 + 0.08 indicates 8% growth."
        },
        {
          "text": "An 8% decrease",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "An initial value of 1.08",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "An increase of 108%",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponential interpretation"
    }
  ],
  "flashcards": [
    {
      "front": "Function notation",
      "back": "f(x) names the output produced by input x; it is not multiplication."
    },
    {
      "front": "Quadratic forms",
      "back": "Standard, factored, and vertex forms reveal different features."
    },
    {
      "front": "Exponential models",
      "back": "In a(b)^x, a is the initial value and b is the repeated growth or decay factor."
    },
    {
      "front": "Zeros and intersections",
      "back": "Solving f(x)=0 finds x-intercepts; solving f(x)=g(x) finds intersections."
    },
    {
      "front": "Identify the form",
      "back": "Decide which representation exposes the needed feature."
    },
    {
      "front": "Substitute or transform",
      "back": "Insert the input or rewrite the expression."
    },
    {
      "front": "Solve",
      "back": "Factor, isolate, or use graph relationships."
    },
    {
      "front": "Check domain",
      "back": "Reject impossible or extraneous values."
    },
    {
      "front": "Interpret",
      "back": "Connect the algebraic result to the graph or context."
    },
    {
      "front": "Function notation Review 10",
      "back": "f(x) names the output produced by input x; it is not multiplication."
    },
    {
      "front": "Quadratic forms Review 11",
      "back": "Standard, factored, and vertex forms reveal different features."
    },
    {
      "front": "Exponential models Review 12",
      "back": "In a(b)^x, a is the initial value and b is the repeated growth or decay factor."
    },
    {
      "front": "Zeros and intersections Review 13",
      "back": "Solving f(x)=0 finds x-intercepts; solving f(x)=g(x) finds intersections."
    },
    {
      "front": "Identify the form Review 14",
      "back": "Decide which representation exposes the needed feature."
    },
    {
      "front": "Substitute or transform Review 15",
      "back": "Insert the input or rewrite the expression."
    },
    {
      "front": "Solve Review 16",
      "back": "Factor, isolate, or use graph relationships."
    },
    {
      "front": "Check domain Review 17",
      "back": "Reject impossible or extraneous values."
    },
    {
      "front": "Interpret Review 18",
      "back": "Connect the algebraic result to the graph or context."
    },
    {
      "front": "Function notation Review 19",
      "back": "f(x) names the output produced by input x; it is not multiplication."
    },
    {
      "front": "Quadratic forms Review 20",
      "back": "Standard, factored, and vertex forms reveal different features."
    },
    {
      "front": "Exponential models Review 21",
      "back": "In a(b)^x, a is the initial value and b is the repeated growth or decay factor."
    },
    {
      "front": "Zeros and intersections Review 22",
      "back": "Solving f(x)=0 finds x-intercepts; solving f(x)=g(x) finds intersections."
    },
    {
      "front": "Identify the form Review 23",
      "back": "Decide which representation exposes the needed feature."
    },
    {
      "front": "Substitute or transform Review 24",
      "back": "Insert the input or rewrite the expression."
    },
    {
      "front": "Solve Review 25",
      "back": "Factor, isolate, or use graph relationships."
    },
    {
      "front": "Check domain Review 26",
      "back": "Reject impossible or extraneous values."
    },
    {
      "front": "Interpret Review 27",
      "back": "Connect the algebraic result to the graph or context."
    },
    {
      "front": "Function notation Review 28",
      "back": "f(x) names the output produced by input x; it is not multiplication."
    },
    {
      "front": "Quadratic forms Review 29",
      "back": "Standard, factored, and vertex forms reveal different features."
    },
    {
      "front": "Exponential models Review 30",
      "back": "In a(b)^x, a is the initial value and b is the repeated growth or decay factor."
    }
  ],
  "nextCourseId": null
} as Course;
