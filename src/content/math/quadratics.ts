import type { Course } from "@/content/courses";

export const course: Course = {
  "id": "quadratics",
  "title": "Quadratics",
  "subtitle": "Connect equations, graphs, roots, and maximum or minimum values.",
  "description": "Solve and interpret quadratic relationships in the form best suited to the question.",
  "estimatedMinutes": 65,
  "difficulty": "Medium",
  "domain": "Advanced Math",
  "objectives": [
    "Solve quadratics using multiple methods",
    "Interpret vertex, zeros, and intercepts",
    "Use the discriminant to classify roots",
    "Model maximum and minimum situations"
  ],
  "concepts": [
    {
      "title": "Three useful forms",
      "body": "Standard, vertex, and factored forms reveal different features."
    },
    {
      "title": "Roots and factors",
      "body": "Zeros correspond to x-intercepts and factors."
    },
    {
      "title": "Vertex and symmetry",
      "body": "The vertex lies on x=-b/(2a)."
    },
    {
      "title": "Discriminant",
      "body": "b²-4ac predicts the number of real solutions."
    }
  ],
  "strategy": [
    {
      "title": "Identify",
      "body": "Determine whether the question asks for roots, vertex, intercept, or a model."
    },
    {
      "title": "Choose form",
      "body": "Use the representation that exposes that feature."
    },
    {
      "title": "Solve",
      "body": "Factor, complete the square, or use the quadratic formula."
    },
    {
      "title": "Check",
      "body": "Substitute roots or inspect the graph’s behavior."
    },
    {
      "title": "Interpret",
      "body": "Connect the algebra to the context and units."
    }
  ],
  "traps": [
    {
      "title": "One-root loss",
      "body": "Taking a square root requires both positive and negative solutions."
    },
    {
      "title": "Vertex sign error",
      "body": "In (x-h)², the x-coordinate is h, not the visible sign."
    },
    {
      "title": "Wrong discriminant",
      "body": "Use b²-4ac with parentheses around signed values."
    },
    {
      "title": "Form mismatch",
      "body": "Expanding can hide the very feature the question asks for."
    }
  ],
  "coachTips": [
    "Pick the form that answers the question fastest.",
    "A graph can confirm the number and approximate location of roots.",
    "In context, reject roots that violate time, length, or count restrictions."
  ],
  "workedExamples": [
    {
      "id": "quadratics-ex-1",
      "passage": "Solve x² - 9 = 0.",
      "prompt": "What are the solutions?",
      "choices": [
        {
          "text": "x = -3 and x = 3",
          "rationale": "Factor as (x-3)(x+3)=0."
        },
        {
          "text": "x = 3 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x = -9 and x = 9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x = 0 and x = 9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Solving by factoring",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-2",
      "passage": "The graph of y=(x-4)²+2 has which vertex?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(4, 2)",
          "rationale": "In y=(x-h)²+k, the vertex is (h,k)."
        },
        {
          "text": "(-4, 2)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(2, 4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(4, -2)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Vertex form",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-3",
      "passage": "Factor x²+5x+6.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(x+2)(x+3)",
          "rationale": "2 and 3 multiply to 6 and add to 5."
        },
        {
          "text": "(x+1)(x+6)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x-2)(x-3)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x+5)(x+1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Factoring",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-4",
      "passage": "For y=2x²-8x+1, what is the axis of symmetry?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x = 2",
          "rationale": "Use x=-b/(2a)=8/4=2."
        },
        {
          "text": "x = -2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x = 4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x = 1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Axis of symmetry",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-5",
      "passage": "A ball’s height is h(t)=-16t²+64t+5. When does it reach maximum height?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2 seconds",
          "rationale": "The vertex occurs at t=-64/(2·-16)=2."
        },
        {
          "text": "4 seconds",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1 second",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5 seconds",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Maximum",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-6",
      "passage": "What is the discriminant of x²-4x+7=0?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-12",
          "rationale": "b²-4ac=16-28=-12."
        },
        {
          "text": "12",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "28",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Discriminant",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-7",
      "passage": "How many real solutions does 3x²+2x+5=0 have?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "0",
          "rationale": "The discriminant is negative."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Number of roots",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-8",
      "passage": "Solve x²-6x=16.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x = 8 or x = -2",
          "rationale": "Move 16 left: x²-6x-16=(x-8)(x+2)."
        },
        {
          "text": "x = 4 or x = 2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x = 8 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x = -8 or x = 2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rearrange and factor",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-9",
      "passage": "If the zeros are 1 and 5, which monic quadratic has these zeros?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x²-6x+5",
          "rationale": "Use (x-1)(x-5)."
        },
        {
          "text": "x²+6x+5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x²-5x+1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x²+5x-6",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Build from zeros",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "quadratics-ex-10",
      "passage": "Complete the square: x²+10x+7.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(x+5)²-18",
          "rationale": "Add and subtract 25: x²+10x+25-18."
        },
        {
          "text": "(x+5)²+7",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x-5)²-18",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x+10)²-93",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Completing the square",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    }
  ],
  "questions": [
    {
      "id": "quadratics-q-1",
      "passage": "Solve x²-16=0.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-4 and 4",
          "rationale": "Use difference of squares."
        },
        {
          "text": "4 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-16 and 16",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0 and 16",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Factoring"
    },
    {
      "id": "quadratics-q-2",
      "passage": "Vertex of y=(x+3)²-5?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(-3,-5)",
          "rationale": "h=-3 and k=-5."
        },
        {
          "text": "(3,-5)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(-5,-3)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(3,5)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Vertex form"
    },
    {
      "id": "quadratics-q-3",
      "passage": "Factor x²-7x+12.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(x-3)(x-4)",
          "rationale": "-3 and -4 multiply to 12 and add to -7."
        },
        {
          "text": "(x+3)(x+4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x-2)(x-6)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x-1)(x-12)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Factoring"
    },
    {
      "id": "quadratics-q-4",
      "passage": "Axis of y=x²+6x-1?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x=-3",
          "rationale": "-b/(2a)=-6/2."
        },
        {
          "text": "x=3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x=-6",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x=1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Axis"
    },
    {
      "id": "quadratics-q-5",
      "passage": "Discriminant of 2x²+3x-2=0?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "25",
          "rationale": "3²-4(2)(-2)=25."
        },
        {
          "text": "-7",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "17",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Discriminant"
    },
    {
      "id": "quadratics-q-6",
      "passage": "How many real roots does x²+2x+1=0 have?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "1",
          "rationale": "The discriminant is zero; the root is repeated."
        },
        {
          "text": "0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Root count"
    },
    {
      "id": "quadratics-q-7",
      "passage": "Solve x²+2x-15=0.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "3 and -5",
          "rationale": "(x+5)(x-3)=0."
        },
        {
          "text": "5 and -3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "15 and -1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-3 and -5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Factoring"
    },
    {
      "id": "quadratics-q-8",
      "passage": "A parabola opens downward when...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "a<0",
          "rationale": "The sign of the leading coefficient controls opening."
        },
        {
          "text": "a>0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "b<0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "c<0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Graph behavior"
    },
    {
      "id": "quadratics-q-9",
      "passage": "Zeros of y=(x+2)(x-7)?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-2 and 7",
          "rationale": "Set each factor equal to zero."
        },
        {
          "text": "2 and -7",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-2 and -7",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2 and 7",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Zeros"
    },
    {
      "id": "quadratics-q-10",
      "passage": "Minimum of y=(x-1)²+4?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "4",
          "rationale": "The minimum y-value is the vertex’s y-coordinate."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Vertex"
    },
    {
      "id": "quadratics-q-11",
      "passage": "Solve 4x²=36.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x=±3",
          "rationale": "x²=9, so x=±3."
        },
        {
          "text": "x=9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x=±9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x=3 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Square roots"
    },
    {
      "id": "quadratics-q-12",
      "passage": "For y=-2(x+1)²+8, the maximum is...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "8",
          "rationale": "The vertex y-value is 8 and the parabola opens down."
        },
        {
          "text": "-2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Maximum"
    },
    {
      "id": "quadratics-q-13",
      "passage": "Which equation has zeros 2 and -3?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x²+x-6=0",
          "rationale": "(x-2)(x+3)=x²+x-6."
        },
        {
          "text": "x²-x-6=0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x²+5x+6=0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x²-5x-6=0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Build equation"
    },
    {
      "id": "quadratics-q-14",
      "passage": "Complete square: x²-8x+3.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(x-4)²-13",
          "rationale": "Add and subtract 16."
        },
        {
          "text": "(x-4)²+3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x+4)²-13",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x-8)²-61",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Completing square"
    },
    {
      "id": "quadratics-q-15",
      "passage": "If discriminant > 0, a quadratic has...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "two distinct real roots",
          "rationale": "Positive discriminant means two real roots."
        },
        {
          "text": "one repeated real root",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "no real roots",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "three roots",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Discriminant"
    },
    {
      "id": "quadratics-q-16",
      "passage": "The y-intercept of y=3x²-2x+7 is...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "7",
          "rationale": "Set x=0."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Intercept"
    },
    {
      "id": "quadratics-q-17",
      "passage": "Which form shows the zeros most directly?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "factored form",
          "rationale": "Factors give zeros by the zero-product property."
        },
        {
          "text": "standard form",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "vertex form",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "slope-intercept form",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Forms"
    },
    {
      "id": "quadratics-q-18",
      "passage": "Which form shows the vertex most directly?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "vertex form",
          "rationale": "y=a(x-h)²+k shows (h,k)."
        },
        {
          "text": "factored form",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "standard form",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "point-slope form",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Forms"
    },
    {
      "id": "quadratics-q-19",
      "passage": "If a quadratic has roots r and s, their sum is...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-b/a",
          "rationale": "For ax²+bx+c, r+s=-b/a."
        },
        {
          "text": "b/a",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "c/a",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-c/a",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Vieta"
    },
    {
      "id": "quadratics-q-20",
      "passage": "If roots are 4 and 6, their product is...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "24",
          "rationale": "4·6=24."
        },
        {
          "text": "10",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-24",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Roots"
    }
  ],
  "flashcards": [
    {
      "front": "Standard form",
      "back": "y=ax²+bx+c."
    },
    {
      "front": "Vertex form",
      "back": "y=a(x-h)²+k."
    },
    {
      "front": "Factored form",
      "back": "y=a(x-r₁)(x-r₂)."
    },
    {
      "front": "Axis of symmetry",
      "back": "x=-b/(2a)."
    },
    {
      "front": "Vertex x-coordinate",
      "back": "-b/(2a)."
    },
    {
      "front": "Discriminant",
      "back": "b²-4ac."
    },
    {
      "front": "Positive discriminant",
      "back": "Two distinct real roots."
    },
    {
      "front": "Zero discriminant",
      "back": "One repeated real root."
    },
    {
      "front": "Negative discriminant",
      "back": "No real roots."
    },
    {
      "front": "Quadratic formula",
      "back": "x=(-b±√(b²-4ac))/(2a)."
    },
    {
      "front": "Zero-product property",
      "back": "If factors multiply to zero, at least one factor is zero."
    },
    {
      "front": "Parabola opens up",
      "back": "a>0."
    },
    {
      "front": "Parabola opens down",
      "back": "a<0."
    },
    {
      "front": "Maximum or minimum",
      "back": "The vertex y-coordinate."
    },
    {
      "front": "Y-intercept",
      "back": "c in standard form."
    },
    {
      "front": "Zeros from factors",
      "back": "Set each factor equal to zero."
    },
    {
      "front": "Complete the square",
      "back": "Create a perfect-square trinomial."
    },
    {
      "front": "Sum of roots",
      "back": "-b/a."
    },
    {
      "front": "Product of roots",
      "back": "c/a."
    },
    {
      "front": "Monic quadratic from roots",
      "back": "(x-r)(x-s)."
    },
    {
      "front": "Double root",
      "back": "A repeated zero where the graph touches the x-axis."
    },
    {
      "front": "Symmetry",
      "back": "Points equally far from the axis have equal y-values."
    },
    {
      "front": "Transformation h",
      "back": "Horizontal shift in vertex form."
    },
    {
      "front": "Transformation k",
      "back": "Vertical shift in vertex form."
    },
    {
      "front": "Leading coefficient magnitude",
      "back": "Controls vertical stretch or compression."
    },
    {
      "front": "Context maximum",
      "back": "Often modeled by a downward-opening parabola."
    },
    {
      "front": "Context minimum",
      "back": "Often modeled by an upward-opening parabola."
    },
    {
      "front": "Best form for zeros",
      "back": "Factored form."
    },
    {
      "front": "Best form for vertex",
      "back": "Vertex form."
    },
    {
      "front": "Best form for y-intercept",
      "back": "Standard form."
    }
  ],
  "nextCourseId": "polynomials"
};
