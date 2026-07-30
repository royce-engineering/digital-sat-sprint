import type { Course } from "@/content/courses";

export const course: Course = {
  "id": "polynomials",
  "title": "Polynomials",
  "subtitle": "Use degree, factors, zeros, and end behavior to analyze polynomial functions.",
  "description": "Connect algebraic structure to graph features and division results.",
  "estimatedMinutes": 60,
  "difficulty": "Medium",
  "domain": "Advanced Math",
  "objectives": [
    "Evaluate and combine polynomials",
    "Apply the remainder and factor theorems",
    "Relate degree to zeros and turning points",
    "Interpret multiplicity and end behavior"
  ],
  "concepts": [
    {
      "title": "Polynomial anatomy",
      "body": "Degree, leading coefficient, and constant term summarize key structure."
    },
    {
      "title": "Remainders and factors",
      "body": "P(c) connects substitution, division, and factors."
    },
    {
      "title": "Zeros and multiplicity",
      "body": "Repeated factors change how a graph behaves at an intercept."
    },
    {
      "title": "End behavior",
      "body": "The leading term controls the graph far from the origin."
    }
  ],
  "strategy": [
    {
      "title": "Organize",
      "body": "Write terms in descending powers."
    },
    {
      "title": "Identify",
      "body": "Locate degree, leading term, and requested feature."
    },
    {
      "title": "Apply",
      "body": "Use evaluation, factoring, or division."
    },
    {
      "title": "Connect",
      "body": "Translate factors and degree into graph behavior."
    },
    {
      "title": "Verify",
      "body": "Multiply back or evaluate proposed zeros."
    }
  ],
  "traps": [
    {
      "title": "Degree before simplifying",
      "body": "Combine like terms before naming the degree."
    },
    {
      "title": "Sign distribution",
      "body": "Subtracting a polynomial changes every sign."
    },
    {
      "title": "Wrong factor input",
      "body": "For x+5, evaluate P(-5), not P(5)."
    },
    {
      "title": "Exact-count assumption",
      "body": "Degree gives a maximum number of real zeros, not always an exact count."
    }
  ],
  "coachTips": [
    "Put polynomials in standard order before working.",
    "Use the factor theorem to test answer choices quickly.",
    "The leading term tells the long-run graph story."
  ],
  "workedExamples": [
    {
      "id": "polynomials-ex-1",
      "passage": "What is the degree of 4x⁵-2x³+x-7?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "5",
          "rationale": "The highest exponent is 5."
        },
        {
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "7",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Degree",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-2",
      "passage": "If P(x)=x³-4x+1, what is P(2)?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "1",
          "rationale": "8-8+1=1."
        },
        {
          "text": "9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evaluation",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-3",
      "passage": "What is the remainder when x²+3x+5 is divided by x-2?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "15",
          "rationale": "The remainder is P(2)=4+6+5=15."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Remainder theorem",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-4",
      "passage": "If x-3 is a factor of P(x), what must be true?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "P(3)=0",
          "rationale": "x-c is a factor exactly when P(c)=0."
        },
        {
          "text": "P(-3)=0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "P(0)=3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "P(3)=1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Factor theorem",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-5",
      "passage": "Expand (x²+2x-1)+(3x²-x+4).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "4x²+x+3",
          "rationale": "Combine coefficients of like powers."
        },
        {
          "text": "4x²+3x+3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3x⁴+x+3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "4x²+x-5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Polynomial addition",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-6",
      "passage": "Multiply x(x²-5x+6).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x³-5x²+6x",
          "rationale": "Multiply every term by x."
        },
        {
          "text": "x³-5x+6",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x²-5x+6",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x³+x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Polynomial multiplication",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-7",
      "passage": "A cubic polynomial can have at most how many real zeros?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "3",
          "rationale": "A degree-3 polynomial has at most 3 real zeros."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Degree and roots",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-8",
      "passage": "Which is a zero of P(x)=x³-4x?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2",
          "rationale": "P(2)=8-8=0."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Zeros",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-9",
      "passage": "What is the leading coefficient of -7x⁴+2x²+9?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-7",
          "rationale": "It is the coefficient of the highest-degree term."
        },
        {
          "text": "7",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Leading coefficient",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "polynomials-ex-10",
      "passage": "Factor x³+x²-4x-4 by grouping.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(x+1)(x-2)(x+2)",
          "rationale": "Group x²(x+1)-4(x+1)=(x+1)(x²-4)."
        },
        {
          "text": "(x-1)(x²+4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x+4)(x²-1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x+2)²(x-1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Grouping",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    }
  ],
  "questions": [
    {
      "id": "polynomials-q-1",
      "passage": "Degree of 9x⁷+x²-1?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "7",
          "rationale": "Highest exponent is 7."
        },
        {
          "text": "9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Degree"
    },
    {
      "id": "polynomials-q-2",
      "passage": "P(x)=2x²-3x+4. P(-1)=?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "9",
          "rationale": "2+3+4=9."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evaluation"
    },
    {
      "id": "polynomials-q-3",
      "passage": "Remainder of x³+1 divided by x+1?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "0",
          "rationale": "Evaluate at -1: -1+1=0."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Remainder theorem"
    },
    {
      "id": "polynomials-q-4",
      "passage": "If x+5 is a factor, then...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "P(-5)=0",
          "rationale": "x-(-5)=x+5."
        },
        {
          "text": "P(5)=0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "P(0)=5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "P(-5)=1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Factor theorem"
    },
    {
      "id": "polynomials-q-5",
      "passage": "Add (2x²+3x)+(x²-5x+1).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "3x²-2x+1",
          "rationale": "Combine like terms."
        },
        {
          "text": "3x²+8x+1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2x⁴-2x+1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x²-2x+1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Addition"
    },
    {
      "id": "polynomials-q-6",
      "passage": "Subtract (x²-2x+3) from (4x²+x-1).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "3x²+3x-4",
          "rationale": "Distribute the subtraction sign."
        },
        {
          "text": "5x²-x+2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3x²-x+2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3x²+3x+2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Subtraction"
    },
    {
      "id": "polynomials-q-7",
      "passage": "Multiply 3x²(2x-5).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6x³-15x²",
          "rationale": "Multiply each term."
        },
        {
          "text": "6x²-15x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5x³-8x²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "6x⁴-15x²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Multiplication"
    },
    {
      "id": "polynomials-q-8",
      "passage": "Max number of real zeros of degree 6?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6",
          "rationale": "At most the degree."
        },
        {
          "text": "5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "7",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Degree"
    },
    {
      "id": "polynomials-q-9",
      "passage": "Leading coefficient of 8-3x+x⁵?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "1",
          "rationale": "Write in descending powers: x⁵-3x+8."
        },
        {
          "text": "5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Leading coefficient"
    },
    {
      "id": "polynomials-q-10",
      "passage": "Constant term of 4x³-x+12?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "12",
          "rationale": "It has no variable."
        },
        {
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Constant"
    },
    {
      "id": "polynomials-q-11",
      "passage": "Which is a zero of x²-5x+6?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2",
          "rationale": "Factor as (x-2)(x-3)."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Zeros"
    },
    {
      "id": "polynomials-q-12",
      "passage": "If P(4)=0, then which is a factor?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x-4",
          "rationale": "P(c)=0 means x-c is a factor."
        },
        {
          "text": "x+4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "4x-1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Factor theorem"
    },
    {
      "id": "polynomials-q-13",
      "passage": "Remainder dividing P(x) by x-3 equals...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "P(3)",
          "rationale": "The remainder is P(3)."
        },
        {
          "text": "P(-3)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3P(x)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0 always",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Remainder theorem"
    },
    {
      "id": "polynomials-q-14",
      "passage": "A polynomial with odd degree and real coefficients must have...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "at least one real zero",
          "rationale": "Opposite end behavior forces an x-axis crossing."
        },
        {
          "text": "no real zeros",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "exactly two real zeros",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "only positive zeros",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "End behavior"
    },
    {
      "id": "polynomials-q-15",
      "passage": "Expand (x+2)(x²-2x+4).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x³+8",
          "rationale": "This is the sum-of-cubes pattern."
        },
        {
          "text": "x³-8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x³+4x²+8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x³+2x+8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Sum of cubes"
    },
    {
      "id": "polynomials-q-16",
      "passage": "Factor x³-8.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(x-2)(x²+2x+4)",
          "rationale": "a³-b³=(a-b)(a²+ab+b²)."
        },
        {
          "text": "(x-2)(x²-2x+4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x+2)(x²-2x+4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x-8)(x²+1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Difference of cubes"
    },
    {
      "id": "polynomials-q-17",
      "passage": "If degree is 4, maximum turning points?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "3",
          "rationale": "At most degree minus one."
        },
        {
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Turning points"
    },
    {
      "id": "polynomials-q-18",
      "passage": "For large positive x, 2x⁵ dominates 3x² because...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "it has higher degree",
          "rationale": "Highest-degree term controls end behavior."
        },
        {
          "text": "it has larger coefficient only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "it is always positive",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x² becomes zero",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "End behavior"
    },
    {
      "id": "polynomials-q-19",
      "passage": "Multiplicity 2 at x=1 means graph usually...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "touches and turns",
          "rationale": "Even multiplicity usually touches."
        },
        {
          "text": "crosses sharply",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "has no x-intercept",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "has a vertical asymptote",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Multiplicity"
    },
    {
      "id": "polynomials-q-20",
      "passage": "Multiplicity 3 at x=-2 means graph usually...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "crosses with flattening",
          "rationale": "Odd multiplicity crosses; higher multiplicity flattens."
        },
        {
          "text": "touches and turns",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "has no zero",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "is linear",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Multiplicity"
    }
  ],
  "flashcards": [
    {
      "front": "Polynomial",
      "back": "A sum of terms with nonnegative integer exponents."
    },
    {
      "front": "Degree",
      "back": "Highest exponent after simplification."
    },
    {
      "front": "Leading term",
      "back": "Term with highest degree."
    },
    {
      "front": "Leading coefficient",
      "back": "Coefficient of the leading term."
    },
    {
      "front": "Constant term",
      "back": "Term independent of the variable."
    },
    {
      "front": "Evaluate P(c)",
      "back": "Substitute c for x."
    },
    {
      "front": "Remainder theorem",
      "back": "Remainder on division by x-c is P(c)."
    },
    {
      "front": "Factor theorem",
      "back": "x-c is a factor iff P(c)=0."
    },
    {
      "front": "Zero",
      "back": "An input c for which P(c)=0."
    },
    {
      "front": "Root and x-intercept",
      "back": "Related; a real root gives an x-intercept."
    },
    {
      "front": "Maximum real zeros",
      "back": "At most the degree."
    },
    {
      "front": "Maximum turning points",
      "back": "At most degree minus one."
    },
    {
      "front": "Even degree end behavior",
      "back": "Both ends point the same general direction."
    },
    {
      "front": "Odd degree end behavior",
      "back": "Ends point in opposite general directions."
    },
    {
      "front": "Positive leading coefficient",
      "back": "Right end rises."
    },
    {
      "front": "Negative leading coefficient",
      "back": "Right end falls."
    },
    {
      "front": "Multiplicity",
      "back": "Number of times a factor repeats."
    },
    {
      "front": "Even multiplicity",
      "back": "Graph typically touches and turns."
    },
    {
      "front": "Odd multiplicity",
      "back": "Graph typically crosses."
    },
    {
      "front": "Polynomial addition",
      "back": "Combine like powers."
    },
    {
      "front": "Polynomial subtraction",
      "back": "Distribute the negative first."
    },
    {
      "front": "Polynomial multiplication",
      "back": "Multiply every term and combine like terms."
    },
    {
      "front": "Synthetic division",
      "back": "Efficient division by x-c."
    },
    {
      "front": "Long division",
      "back": "Works for any polynomial divisor."
    },
    {
      "front": "Sum of cubes",
      "back": "a³+b³=(a+b)(a²-ab+b²)."
    },
    {
      "front": "Difference of cubes",
      "back": "a³-b³=(a-b)(a²+ab+b²)."
    },
    {
      "front": "Grouping",
      "back": "Factor common binomials from pairs of terms."
    },
    {
      "front": "End behavior",
      "back": "Controlled by degree and leading coefficient."
    },
    {
      "front": "Repeated root",
      "back": "A zero with multiplicity greater than 1."
    },
    {
      "front": "Verification",
      "back": "Multiply factors or evaluate at proposed zeros."
    }
  ],
  "nextCourseId": "nonlinear-systems"
};
