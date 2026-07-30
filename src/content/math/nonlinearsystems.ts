import type { Course } from "@/content/courses";

export const course: Course = {
  "id": "nonlinear-systems",
  "title": "Nonlinear Systems",
  "subtitle": "Find where lines, parabolas, circles, and exponentials meet.",
  "description": "Solve systems with at least one nonlinear equation and interpret intersections.",
  "estimatedMinutes": 65,
  "difficulty": "Hard",
  "domain": "Advanced Math",
  "objectives": [
    "Solve nonlinear systems by substitution",
    "Use discriminants to count intersections",
    "Interpret graphical solutions",
    "Reject extraneous or context-invalid solutions"
  ],
  "concepts": [
    {
      "title": "Intersection meaning",
      "body": "A solution is a point shared by every graph in the system."
    },
    {
      "title": "Substitution",
      "body": "Equating two expressions for y often produces a quadratic."
    },
    {
      "title": "Counting intersections",
      "body": "The discriminant predicts 0, 1, or 2 line-parabola intersections."
    },
    {
      "title": "Context and verification",
      "body": "Check each coordinate in both original equations and against real-world restrictions."
    }
  ],
  "strategy": [
    {
      "title": "Represent",
      "body": "Write both relationships clearly."
    },
    {
      "title": "Substitute",
      "body": "Eliminate one variable."
    },
    {
      "title": "Solve",
      "body": "Solve the resulting linear, quadratic, or exponential equation."
    },
    {
      "title": "Pair",
      "body": "Find the matching coordinate for each solution."
    },
    {
      "title": "Verify",
      "body": "Check every ordered pair in both equations."
    }
  ],
  "traps": [
    {
      "title": "Half-solution",
      "body": "An x-value alone is not a complete ordered-pair solution."
    },
    {
      "title": "Intersection-count confusion",
      "body": "A repeated quadratic root represents one tangent point."
    },
    {
      "title": "Extraneous point",
      "body": "A candidate may fail one original equation."
    },
    {
      "title": "Context violation",
      "body": "Negative or noninteger results may be invalid in a stated model."
    }
  ],
  "coachTips": [
    "Graph first to predict the number of solutions, then solve exactly.",
    "When two equations both equal y, set their right sides equal.",
    "Verify ordered pairs in both original equations."
  ],
  "workedExamples": [
    {
      "id": "nonlinear-systems-ex-1",
      "passage": "Solve y=x² and y=4.",
      "prompt": "What are the intersection x-values?",
      "choices": [
        {
          "text": "-2 and 2",
          "rationale": "Set x²=4."
        },
        {
          "text": "2 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-4 and 4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0 and 4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Line-parabola intersection",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-2",
      "passage": "Solve y=x+2 and y=x².",
      "prompt": "Which point is an intersection?",
      "choices": [
        {
          "text": "(-1,1)",
          "rationale": "Set x²=x+2, giving (x-2)(x+1)=0; (-1,1) is one point."
        },
        {
          "text": "(1,3)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(2,4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(0,0)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Substitution",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-3",
      "passage": "How many intersections can a line and a circle have?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "0, 1, or 2",
          "rationale": "A line can miss, touch, or cross a circle."
        },
        {
          "text": "exactly 1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "exactly 2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "at most 3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Intersection count",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-4",
      "passage": "Solve x²+y²=25 with y=0.",
      "prompt": "What are the solutions?",
      "choices": [
        {
          "text": "(-5,0) and (5,0)",
          "rationale": "Substitute y=0, so x²=25."
        },
        {
          "text": "(0,-5) and (0,5)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(5,5)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(0,0)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Circle intersection",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-5",
      "passage": "The system y=x²+1 and y=-x²+9 has which x-values?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-2 and 2",
          "rationale": "Set x²+1=-x²+9, so 2x²=8."
        },
        {
          "text": "-4 and 4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-8 and 8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Two parabolas",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-6",
      "passage": "If substitution produces x²+1=0, how many real intersections exist?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "0",
          "rationale": "x² cannot equal -1 for real x."
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
      "skill": "No real intersection",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-7",
      "passage": "Solve y=2ˣ and y=8.",
      "prompt": "What is x?",
      "choices": [
        {
          "text": "3",
          "rationale": "2³=8."
        },
        {
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "8",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponential intersection",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-8",
      "passage": "A line is tangent to a parabola when the resulting quadratic has...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "discriminant 0",
          "rationale": "One repeated solution means one touching point."
        },
        {
          "text": "positive discriminant",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "negative discriminant",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "degree 1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tangency",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-9",
      "passage": "Solve xy=12 and y=3.",
      "prompt": "What is x?",
      "choices": [
        {
          "text": "4",
          "rationale": "Substitute y=3 into 3x=12."
        },
        {
          "text": "9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "15",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "36",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Substitution",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    },
    {
      "id": "nonlinear-systems-ex-10",
      "passage": "If a system’s graphs intersect at (2,5), what does that mean?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "Both equations are true at x=2,y=5",
          "rationale": "A system solution satisfies every equation."
        },
        {
          "text": "Only the first equation is true",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "The equations have the same formula",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "There are no other intersections",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Meaning of solution",
      "walkthrough": [
        "Identify the target form or quantity.",
        "Apply an algebraic transformation that preserves equivalence.",
        "Verify the result by substitution, expansion, or comparison."
      ]
    }
  ],
  "questions": [
    {
      "id": "nonlinear-systems-q-1",
      "passage": "Solve y=x² and y=9. x-values?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-3 and 3",
          "rationale": "x²=9."
        },
        {
          "text": "3 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-9 and 9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0 and 9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Substitution"
    },
    {
      "id": "nonlinear-systems-q-2",
      "passage": "Intersection of y=x+1 and y=3?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(2,3)",
          "rationale": "x+1=3."
        },
        {
          "text": "(3,2)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(1,3)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(0,1)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Line intersection"
    },
    {
      "id": "nonlinear-systems-q-3",
      "passage": "Circle x²+y²=16 with x=0 gives...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(0,-4),(0,4)",
          "rationale": "y²=16."
        },
        {
          "text": "(-4,0),(4,0)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(0,16)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(4,4)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Circle"
    },
    {
      "id": "nonlinear-systems-q-4",
      "passage": "Solve y=x² and y=2x.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "(0,0),(2,4)",
          "rationale": "x²=2x gives x(x-2)=0."
        },
        {
          "text": "(0,0),(1,2)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(-2,-4),(0,0)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "(2,2)",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Substitution"
    },
    {
      "id": "nonlinear-systems-q-5",
      "passage": "If a line and parabola give discriminant <0, intersections?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "0",
          "rationale": "No real quadratic solutions."
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
          "text": "infinitely many",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Discriminant"
    },
    {
      "id": "nonlinear-systems-q-6",
      "passage": "If discriminant =0, intersections?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "1",
          "rationale": "One repeated solution."
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
      "difficulty": "Easy",
      "skill": "Tangency"
    },
    {
      "id": "nonlinear-systems-q-7",
      "passage": "If discriminant >0, intersections?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2",
          "rationale": "Two distinct real solutions."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "infinitely many",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Intersection count"
    },
    {
      "id": "nonlinear-systems-q-8",
      "passage": "Solve y=3ˣ and y=27.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x=3",
          "rationale": "3³=27."
        },
        {
          "text": "x=9",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x=2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x=27",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Exponential"
    },
    {
      "id": "nonlinear-systems-q-9",
      "passage": "Solve xy=20 and x=4.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "y=5",
          "rationale": "4y=20."
        },
        {
          "text": "y=16",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "y=24",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "y=80",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Substitution"
    },
    {
      "id": "nonlinear-systems-q-10",
      "passage": "System y=x²-1 and y=0 has...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x=±1",
          "rationale": "x²-1=0."
        },
        {
          "text": "x=1 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x=0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x=±2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Zeros"
    },
    {
      "id": "nonlinear-systems-q-11",
      "passage": "For y=x²+4 and y=2, real intersections?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "0",
          "rationale": "x²+4 cannot equal 2."
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
          "text": "4",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "No intersection"
    },
    {
      "id": "nonlinear-systems-q-12",
      "passage": "Solve x²+y²=25 and x=3. y-values?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "-4 and 4",
          "rationale": "9+y²=25."
        },
        {
          "text": "-3 and 3",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "4 only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "-16 and 16",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Circle"
    },
    {
      "id": "nonlinear-systems-q-13",
      "passage": "The solutions to a system appear graphically as...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "intersection points",
          "rationale": "Both equations share those points."
        },
        {
          "text": "y-intercepts only",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "turning points",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "asymptotes",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Graph interpretation"
    },
    {
      "id": "nonlinear-systems-q-14",
      "passage": "A tangent line and circle have...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "1 intersection",
          "rationale": "A tangent touches once."
        },
        {
          "text": "0 intersections",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2 intersections",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "3 intersections",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Tangency"
    },
    {
      "id": "nonlinear-systems-q-15",
      "passage": "A secant line and circle have...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "2 intersections",
          "rationale": "A secant crosses twice."
        },
        {
          "text": "1 intersection",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "0 intersections",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "infinitely many",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Secant"
    },
    {
      "id": "nonlinear-systems-q-16",
      "passage": "Solve y=x+6 and y=x². Which equation finds x?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x²-x-6=0",
          "rationale": "Set x²=x+6."
        },
        {
          "text": "x²+x+6=0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "x²=6",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2x=6",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Setup"
    },
    {
      "id": "nonlinear-systems-q-17",
      "passage": "If two equations are identical representations of the same curve, solutions are...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "infinitely many",
          "rationale": "Every point on the curve satisfies both."
        },
        {
          "text": "0",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "1",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "2",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Coincident graphs"
    },
    {
      "id": "nonlinear-systems-q-18",
      "passage": "A nonlinear system includes...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "at least one nonlinear equation",
          "rationale": "At least one equation is nonlinear."
        },
        {
          "text": "only linear equations",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "exactly two circles",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "no variables",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Definition"
    },
    {
      "id": "nonlinear-systems-q-19",
      "passage": "After finding x, to find y you should...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "substitute into either original equation",
          "rationale": "A solution needs both coordinates."
        },
        {
          "text": "differentiate",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "factor y",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "change the equation",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Back substitution"
    },
    {
      "id": "nonlinear-systems-q-20",
      "passage": "Context check matters because...",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "some algebraic solutions may violate real constraints",
          "rationale": "Negative time or impossible lengths may be excluded."
        },
        {
          "text": "all roots are always valid",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "graphs cannot show solutions",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        },
        {
          "text": "units never matter",
          "rationale": "This choice reflects a common algebra, sign, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Interpretation"
    }
  ],
  "flashcards": [
    {
      "front": "System solution",
      "back": "A point satisfying every equation."
    },
    {
      "front": "Graphical solution",
      "back": "An intersection point."
    },
    {
      "front": "Substitution",
      "back": "Replace one variable using an equivalent expression."
    },
    {
      "front": "Line-parabola intersections",
      "back": "Determined by a resulting quadratic."
    },
    {
      "front": "Discriminant < 0",
      "back": "No real intersections."
    },
    {
      "front": "Discriminant = 0",
      "back": "One tangent intersection."
    },
    {
      "front": "Discriminant > 0",
      "back": "Two real intersections."
    },
    {
      "front": "Line-circle intersections",
      "back": "0, 1, or 2."
    },
    {
      "front": "Tangent",
      "back": "Touches a curve at one intersection in the system context."
    },
    {
      "front": "Secant",
      "back": "Crosses a circle at two points."
    },
    {
      "front": "Coincident graphs",
      "back": "Infinitely many solutions."
    },
    {
      "front": "No intersection",
      "back": "No real solution."
    },
    {
      "front": "Back-substitution",
      "back": "Use a found x-value to compute y."
    },
    {
      "front": "Extraneous solution",
      "back": "A candidate that fails an original equation or restriction."
    },
    {
      "front": "Circle standard form",
      "back": "(x-h)²+(y-k)²=r²."
    },
    {
      "front": "Parabola",
      "back": "Graph of a quadratic relation."
    },
    {
      "front": "Exponential equation",
      "back": "Variable appears in the exponent."
    },
    {
      "front": "Product relation",
      "back": "Example: xy=k, often a hyperbola."
    },
    {
      "front": "Intersection x-values",
      "back": "Solutions after equating two y-expressions."
    },
    {
      "front": "Intersection coordinates",
      "back": "Pair each x-value with its corresponding y-value."
    },
    {
      "front": "Real solution",
      "back": "Uses real-number coordinates."
    },
    {
      "front": "Model restriction",
      "back": "A context may require nonnegative or integer values."
    },
    {
      "front": "Technology check",
      "back": "Graphing can estimate intersections before exact algebra."
    },
    {
      "front": "Exact solution",
      "back": "Use algebra to confirm graph estimates."
    },
    {
      "front": "Eliminate y",
      "back": "Set two expressions for y equal."
    },
    {
      "front": "Eliminate x",
      "back": "Substitute a known x relation."
    },
    {
      "front": "Symmetry",
      "back": "Can produce paired positive and negative solutions."
    },
    {
      "front": "Tangency test",
      "back": "A repeated root in the intersection equation."
    },
    {
      "front": "Verify point",
      "back": "Substitute both coordinates into both equations."
    },
    {
      "front": "SAT workflow",
      "back": "Model, substitute, solve, pair coordinates, interpret."
    }
  ]
};
