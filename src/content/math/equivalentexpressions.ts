import type { Course } from "@/content/courses";

export const course: Course = {
  "id": "equivalent-expressions",
  "title": "Equivalent Expressions",
  "subtitle": "Rewrite algebra without changing its value.",
  "description": "Recognize structure, factor, expand, and simplify expressions efficiently.",
  "estimatedMinutes": 60,
  "difficulty": "Medium",
  "domain": "Advanced Math",
  "objectives": [
    "Factor and expand polynomial expressions",
    "Simplify rational and radical expressions",
    "Use exponent rules accurately",
    "Choose a useful equivalent form"
  ],
  "concepts": [
    {
      "title": "Structure first",
      "body": "Before calculating, look for common factors, squares, and repeated patterns."
    },
    {
      "title": "Factoring and expansion",
      "body": "Factoring reveals zeros and shared structure; expansion reveals coefficients and combined terms."
    },
    {
      "title": "Exponent and radical rules",
      "body": "Apply rules only to matching bases and valid domains."
    },
    {
      "title": "Rational expressions",
      "body": "Factor before canceling and record excluded values."
    }
  ],
  "strategy": [
    {
      "title": "Scan",
      "body": "Identify the algebraic structure."
    },
    {
      "title": "Choose",
      "body": "Decide whether factoring, expanding, or simplifying is most useful."
    },
    {
      "title": "Transform",
      "body": "Apply one valid identity or rule at a time."
    },
    {
      "title": "Restrict",
      "body": "Preserve domain restrictions."
    },
    {
      "title": "Verify",
      "body": "Expand back or test a legal value."
    }
  ],
  "traps": [
    {
      "title": "Canceling terms",
      "body": "Only common factors may be canceled."
    },
    {
      "title": "Exponent drift",
      "body": "Exponents are added for products, not sums."
    },
    {
      "title": "Missing absolute value",
      "body": "In general, √(x²)=|x|."
    },
    {
      "title": "Lost restriction",
      "body": "A simplified expression may still exclude values from the original denominator."
    }
  ],
  "coachTips": [
    "Factor before you cancel.",
    "Equivalent does not mean identical-looking.",
    "Use a quick substitution to verify unfamiliar transformations."
  ],
  "workedExamples": [
    {
      "id": "equivalent-ex-1",
      "passage": "Simplify 3(2x - 5) + 4x.",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "10x - 15",
          "rationale": "Distribute to get 6x - 15, then add 4x."
        },
        {
          "text": "10x - 5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "6x - 1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "7x - 15",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Distribute and combine",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-2",
      "passage": "Factor 6x² + 15x.",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "3x(2x + 5)",
          "rationale": "The greatest common factor is 3x."
        },
        {
          "text": "3(2x² + 5)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "6x(x + 15)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x(6x + 15x)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Greatest common factor",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-3",
      "passage": "For x ≠ 3, simplify (x² - 9)/(x - 3).",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "x + 3",
          "rationale": "Factor the numerator as (x - 3)(x + 3) and cancel x - 3."
        },
        {
          "text": "x - 3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x² + 3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Difference of squares",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-4",
      "passage": "Rewrite x² + 8x + 16.",
      "prompt": "Which factored form is equivalent?",
      "choices": [
        {
          "text": "(x + 4)²",
          "rationale": "The first and last terms are squares and the middle term is 2·x·4."
        },
        {
          "text": "(x + 8)²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x - 4)²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x(x + 8) + 16x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Perfect-square trinomial",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-5",
      "passage": "If a > 0, rewrite a^(3/2).",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "a√a",
          "rationale": "a^(3/2) = a·a^(1/2) = a√a."
        },
        {
          "text": "3√a",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "√(3a)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "a³/2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rational exponents",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-6",
      "passage": "Simplify 2/(x+1) + 3/(x+1).",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "5/(x+1)",
          "rationale": "The denominators match, so add the numerators."
        },
        {
          "text": "5/(2x+2)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "6/(x+1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5/x + 1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rational expressions",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-7",
      "passage": "Rewrite 4x² - 25.",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "(2x - 5)(2x + 5)",
          "rationale": "Use a² - b² = (a-b)(a+b)."
        },
        {
          "text": "(4x - 5)(x + 5)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(2x - 5)²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(4x - 25)(x + 1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Difference of squares",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-8",
      "passage": "Simplify (2x³y²)(3x²y).",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "6x⁵y³",
          "rationale": "Multiply coefficients and add exponents of like bases."
        },
        {
          "text": "5x⁵y³",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "6x⁶y²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "6x⁵y²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponent rules",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-9",
      "passage": "Rewrite (x + 2)² - 4.",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "x² + 4x",
          "rationale": "Expand to x² + 4x + 4, then subtract 4."
        },
        {
          "text": "x² + 4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x² + 2x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x² + 4x + 8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Expand and simplify",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "equivalent-ex-10",
      "passage": "For x > 0, simplify √(49x²).",
      "prompt": "Which expression is equivalent?",
      "choices": [
        {
          "text": "7x",
          "rationale": "√49 = 7 and √x² = x because x is positive."
        },
        {
          "text": "49x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "7√x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x√49x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Radicals",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    }
  ],
  "questions": [
    {
      "id": "equivalent-q-1",
      "passage": "Simplify 5x - 2(3x - 4).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "8 - x",
          "rationale": "5x - 6x + 8 = 8 - x."
        },
        {
          "text": "11x - 8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-x - 8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x + 8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Distribution"
    },
    {
      "id": "equivalent-q-2",
      "passage": "Factor 12y² - 18y.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6y(2y - 3)",
          "rationale": "The GCF is 6y."
        },
        {
          "text": "6(2y² - 3)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3y(4y - 18)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "12y(y - 18)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "GCF"
    },
    {
      "id": "equivalent-q-3",
      "passage": "Simplify (m² - 16)/(m - 4), m ≠ 4.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "m + 4",
          "rationale": "Factor as (m-4)(m+4)."
        },
        {
          "text": "m - 4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "m² + 4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Factoring"
    },
    {
      "id": "equivalent-q-4",
      "passage": "Which equals (3x + 1)(3x - 1)?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "9x² - 1",
          "rationale": "Use (a+b)(a-b)=a²-b²."
        },
        {
          "text": "9x² + 1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "6x² - 1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "9x² - 6x + 1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Difference of squares"
    },
    {
      "id": "equivalent-q-5",
      "passage": "Rewrite x² - 10x + 25.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(x - 5)²",
          "rationale": "The trinomial is a perfect square."
        },
        {
          "text": "(x + 5)²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x - 25)(x + 1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x(x - 10)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Perfect square"
    },
    {
      "id": "equivalent-q-6",
      "passage": "Simplify x^(2/3)·x^(1/3).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x",
          "rationale": "Add exponents: 2/3 + 1/3 = 1."
        },
        {
          "text": "x²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x^(2/9)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x^(1/3)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponent rules"
    },
    {
      "id": "equivalent-q-7",
      "passage": "Simplify 7/(t-2) - 2/(t-2).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "5/(t-2)",
          "rationale": "Subtract numerators over the common denominator."
        },
        {
          "text": "5/t",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "9/(t-2)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5/(2t-4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rational expressions"
    },
    {
      "id": "equivalent-q-8",
      "passage": "Factor x² + 7x + 12.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(x+3)(x+4)",
          "rationale": "3 and 4 multiply to 12 and add to 7."
        },
        {
          "text": "(x+2)(x+6)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x-3)(x-4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x+1)(x+12)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Trinomial factoring"
    },
    {
      "id": "equivalent-q-9",
      "passage": "Simplify (4a²b)(-2ab³).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-8a³b⁴",
          "rationale": "Multiply coefficients and add exponents."
        },
        {
          "text": "-8a²b³",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2a³b⁴",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-6a³b³",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Monomial multiplication"
    },
    {
      "id": "equivalent-q-10",
      "passage": "Which is equivalent to 2(x+3)² - 18?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2x² + 12x",
          "rationale": "Expand, multiply by 2, and subtract 18."
        },
        {
          "text": "2x² + 6x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2x² + 12x + 18",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x² + 6x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Expand"
    },
    {
      "id": "equivalent-q-11",
      "passage": "For z ≥ 0, simplify √(81z²).",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "9z",
          "rationale": "The principal square root is 9z."
        },
        {
          "text": "81z",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "9√z",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "z²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Radicals"
    },
    {
      "id": "equivalent-q-12",
      "passage": "Factor 25p² - 4q².",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(5p-2q)(5p+2q)",
          "rationale": "Treat 25p² and 4q² as squares."
        },
        {
          "text": "(25p-4q)(p+q)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(5p-2q)²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(25p²-4q)(q+1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Difference of squares"
    },
    {
      "id": "equivalent-q-13",
      "passage": "Simplify (x⁴/x), x ≠ 0.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x³",
          "rationale": "Subtract exponents: 4-1=3."
        },
        {
          "text": "x⁴",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x⁵",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1/x³",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Quotient rule"
    },
    {
      "id": "equivalent-q-14",
      "passage": "Rewrite 9x² + 12x + 4.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(3x+2)²",
          "rationale": "The middle term is 2·3x·2."
        },
        {
          "text": "(9x+2)²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(3x-2)²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(9x+4)(x+1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Perfect square"
    },
    {
      "id": "equivalent-q-15",
      "passage": "Simplify 4/(x) · x/10, x ≠ 0.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2/5",
          "rationale": "Cancel x and reduce 4/10."
        },
        {
          "text": "4/10x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2x/5",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "5/2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Rational multiplication"
    },
    {
      "id": "equivalent-q-16",
      "passage": "Factor x³ - 9x.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x(x-3)(x+3)",
          "rationale": "Factor x, then use difference of squares."
        },
        {
          "text": "(x-3)³",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x(x-9)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(x²-3)(x+3)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Multi-step factoring"
    },
    {
      "id": "equivalent-q-17",
      "passage": "Which equals (a+b)²?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "a²+2ab+b²",
          "rationale": "The middle term is 2ab."
        },
        {
          "text": "a²+b²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "a²-ab+b²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2a²+2b²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Binomial square"
    },
    {
      "id": "equivalent-q-18",
      "passage": "Simplify 3√8.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6√2",
          "rationale": "√8=2√2."
        },
        {
          "text": "24",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3√2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "12√2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Radical simplification"
    },
    {
      "id": "equivalent-q-19",
      "passage": "Rewrite x/(x²), x ≠ 0.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "1/x",
          "rationale": "Cancel one factor of x."
        },
        {
          "text": "x",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1/x²",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x³",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Rational simplification"
    },
    {
      "id": "equivalent-q-20",
      "passage": "Factor 2x² + 10x + 12.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2(x+2)(x+3)",
          "rationale": "First factor 2, then factor x²+5x+6."
        },
        {
          "text": "2(x+1)(x+6)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(2x+3)(x+4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2x(x+5)+12",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Factoring"
    }
  ],
  "flashcards": [
    {
      "front": "Distributive property",
      "back": "a(b+c)=ab+ac."
    },
    {
      "front": "Greatest common factor",
      "back": "The largest factor shared by every term."
    },
    {
      "front": "Difference of squares",
      "back": "a²-b²=(a-b)(a+b)."
    },
    {
      "front": "Perfect-square trinomial",
      "back": "a²±2ab+b²=(a±b)²."
    },
    {
      "front": "Product rule for exponents",
      "back": "xᵃxᵇ=xᵃ⁺ᵇ."
    },
    {
      "front": "Quotient rule for exponents",
      "back": "xᵃ/xᵇ=xᵃ⁻ᵇ for x≠0."
    },
    {
      "front": "Power of a power",
      "back": "(xᵃ)ᵇ=xᵃᵇ."
    },
    {
      "front": "Negative exponent",
      "back": "x⁻ᵃ=1/xᵃ."
    },
    {
      "front": "Rational exponent",
      "back": "x^(m/n)=ⁿ√(xᵐ), when defined."
    },
    {
      "front": "Common denominator",
      "back": "Required before adding or subtracting rational expressions."
    },
    {
      "front": "Canceling factors",
      "back": "Cancel factors, not terms joined by addition."
    },
    {
      "front": "Domain restriction",
      "back": "A value excluded because it makes a denominator zero or radical invalid."
    },
    {
      "front": "Equivalent expressions",
      "back": "Expressions with the same value for every allowed input."
    },
    {
      "front": "Factoring",
      "back": "Rewriting a sum as a product."
    },
    {
      "front": "Expansion",
      "back": "Using multiplication to remove grouping symbols."
    },
    {
      "front": "FOIL",
      "back": "A mnemonic for multiplying two binomials."
    },
    {
      "front": "Conjugates",
      "back": "a+b and a-b; their product is a²-b²."
    },
    {
      "front": "Principal square root",
      "back": "The nonnegative square root."
    },
    {
      "front": "√(x²)",
      "back": "Equals |x| in general."
    },
    {
      "front": "Polynomial identity",
      "back": "An equation true for every allowed variable value."
    },
    {
      "front": "Combine like terms",
      "back": "Add coefficients of terms with identical variable parts."
    },
    {
      "front": "Coefficient",
      "back": "The numerical factor of a term."
    },
    {
      "front": "Constant term",
      "back": "A term with no variable."
    },
    {
      "front": "Monomial",
      "back": "A single term with nonnegative integer exponents."
    },
    {
      "front": "Binomial",
      "back": "A polynomial with two terms."
    },
    {
      "front": "Trinomial",
      "back": "A polynomial with three terms."
    },
    {
      "front": "Zero-product property",
      "back": "If ab=0, then a=0 or b=0."
    },
    {
      "front": "Check equivalence",
      "back": "Expand both expressions or test strategically chosen values."
    },
    {
      "front": "Structure clue",
      "back": "Look for common factors, squares, and exponent patterns."
    },
    {
      "front": "SAT efficiency",
      "back": "Choose the form that exposes the feature the question asks about."
    }
  ],
  "nextCourseId": "quadratics"
};
