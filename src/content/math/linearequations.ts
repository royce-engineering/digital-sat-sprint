import type { Course } from "@/content/courses";

export const course: Course = {
  "id": "linear-equations",
  "title": "Linear Equations & Models",
  "subtitle": "Build, solve, and interpret linear relationships.",
  "description": "Master the algebra language behind rates, lines, and one-variable equations.",
  "estimatedMinutes": 55,
  "difficulty": "Medium",
  "objectives": [
    "Translate words into linear equations",
    "Solve equations with variables on both sides",
    "Interpret slope and intercept in context",
    "Check solutions efficiently"
  ],
  "concepts": [
    {
      "title": "Equation structure",
      "body": "Keep both sides balanced while isolating the variable.",
      "bullets": [
        "Inverse operations: undo addition, subtraction, multiplication, and division",
        "Distribution: multiply every term inside parentheses"
      ]
    },
    {
      "title": "Slope-intercept form",
      "body": "In y = mx + b, m is the rate of change and b is the starting value.",
      "bullets": [
        "Slope: change in y divided by change in x",
        "Intercept: value of y when x = 0"
      ]
    },
    {
      "title": "Context modeling",
      "body": "Define the variable and attach units before writing the equation."
    },
    {
      "title": "Equivalent forms",
      "body": "Different-looking equations can represent the same line or relationship."
    }
  ],
  "strategy": [
    {
      "title": "Define",
      "body": "State what the variable represents."
    },
    {
      "title": "Model",
      "body": "Translate the relationship into an equation."
    },
    {
      "title": "Solve",
      "body": "Use inverse operations systematically."
    },
    {
      "title": "Check",
      "body": "Substitute the result into the original equation."
    },
    {
      "title": "Interpret",
      "body": "Answer with the requested units and meaning."
    }
  ],
  "traps": [
    {
      "title": "Sign drift",
      "body": "A negative sign is lost while moving or distributing terms."
    },
    {
      "title": "Wrong quantity",
      "body": "The algebra is correct, but the answer does not match what was asked."
    },
    {
      "title": "Rate confusion",
      "body": "Total change is mistaken for change per unit."
    },
    {
      "title": "Unverified solution",
      "body": "A calculation error survives because the answer is not checked."
    }
  ],
  "coachTips": [
    "Write units beside intermediate values.",
    "On the SAT, substitute answer choices when direct solving is slower.",
    "A slope is a rate, not merely a number."
  ],
  "workedExamples": [
    {
      "id": "linear-equations-ex-1",
      "passage": "Solve 3x + 7 = 25.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x = 6",
          "rationale": "Subtract 7, then divide by 3."
        },
        {
          "text": "x = 4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 8",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 32",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable equation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-2",
      "passage": "A taxi charges $4 plus $2.50 per mile. The fare is $19. How many miles were traveled?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6 miles",
          "rationale": "Model the fare as 4 + 2.5m = 19."
        },
        {
          "text": "5 miles",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "7.6 miles",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "9.2 miles",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Linear model",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-3",
      "passage": "If 5(x - 2) = 3x + 10, what is x?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x = 10",
          "rationale": "Distribute, collect x-terms, and solve."
        },
        {
          "text": "x = 0",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 20",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Multi-step equation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-4",
      "passage": "The line y = 4x - 9 passes through (k, 15). What is k?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6",
          "rationale": "Substitute y = 15 and solve 15 = 4k - 9."
        },
        {
          "text": "4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "9",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "24",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Coordinate substitution",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-5",
      "passage": "A quantity increases from 40 to 58 at a constant rate over 6 hours. What is the hourly rate?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "3 per hour",
          "rationale": "Rate equals change divided by time: 18/6."
        },
        {
          "text": "2 per hour",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "6 per hour",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "18 per hour",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Slope and rate",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-6",
      "passage": "Solve 3x + 7 = 25.",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x = 6",
          "rationale": "Subtract 7, then divide by 3."
        },
        {
          "text": "x = 4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 8",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 32",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable equation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-7",
      "passage": "A taxi charges $4 plus $2.50 per mile. The fare is $19. How many miles were traveled?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6 miles",
          "rationale": "Model the fare as 4 + 2.5m = 19."
        },
        {
          "text": "5 miles",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "7.6 miles",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "9.2 miles",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Linear model",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-8",
      "passage": "If 5(x - 2) = 3x + 10, what is x?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "x = 10",
          "rationale": "Distribute, collect x-terms, and solve."
        },
        {
          "text": "x = 0",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 5",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "x = 20",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Multi-step equation",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-9",
      "passage": "The line y = 4x - 9 passes through (k, 15). What is k?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "6",
          "rationale": "Substitute y = 15 and solve 15 = 4k - 9."
        },
        {
          "text": "4",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "9",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "24",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Coordinate substitution",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    },
    {
      "id": "linear-equations-ex-10",
      "passage": "A quantity increases from 40 to 58 at a constant rate over 6 hours. What is the hourly rate?",
      "prompt": "Which answer is correct?",
      "choices": [
        {
          "text": "3 per hour",
          "rationale": "Rate equals change divided by time: 18/6."
        },
        {
          "text": "2 per hour",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "6 per hour",
          "rationale": "This choice results from a common setup or calculation error."
        },
        {
          "text": "18 per hour",
          "rationale": "This choice results from a common setup or calculation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Slope and rate",
      "walkthrough": [
        "Identify the quantity the question asks for.",
        "Translate the relationship into an equation or function.",
        "Solve carefully and check the result in the original context."
      ]
    }
  ],
  "questions": [
    {
      "id": "linear-equations-q-1",
      "passage": "If 5(x - 2) = 3x + 10, what is x?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = 10",
          "rationale": "Distribute, collect x-terms, and solve."
        },
        {
          "text": "x = 0",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 20",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Multi-step equation"
    },
    {
      "id": "linear-equations-q-2",
      "passage": "The line y = 4x - 9 passes through (k, 15). What is k?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6",
          "rationale": "Substitute y = 15 and solve 15 = 4k - 9."
        },
        {
          "text": "4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "24",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Coordinate substitution"
    },
    {
      "id": "linear-equations-q-3",
      "passage": "A quantity increases from 40 to 58 at a constant rate over 6 hours. What is the hourly rate?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "3 per hour",
          "rationale": "Rate equals change divided by time: 18/6."
        },
        {
          "text": "2 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "6 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "18 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Slope and rate"
    },
    {
      "id": "linear-equations-q-4",
      "passage": "Solve 3x + 7 = 25.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = 6",
          "rationale": "Subtract 7, then divide by 3."
        },
        {
          "text": "x = 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 32",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable equation"
    },
    {
      "id": "linear-equations-q-5",
      "passage": "A taxi charges $4 plus $2.50 per mile. The fare is $19. How many miles were traveled?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6 miles",
          "rationale": "Model the fare as 4 + 2.5m = 19."
        },
        {
          "text": "5 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "7.6 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9.2 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Linear model"
    },
    {
      "id": "linear-equations-q-6",
      "passage": "If 5(x - 2) = 3x + 10, what is x?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = 10",
          "rationale": "Distribute, collect x-terms, and solve."
        },
        {
          "text": "x = 0",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 20",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Multi-step equation"
    },
    {
      "id": "linear-equations-q-7",
      "passage": "The line y = 4x - 9 passes through (k, 15). What is k?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6",
          "rationale": "Substitute y = 15 and solve 15 = 4k - 9."
        },
        {
          "text": "4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "24",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Coordinate substitution"
    },
    {
      "id": "linear-equations-q-8",
      "passage": "A quantity increases from 40 to 58 at a constant rate over 6 hours. What is the hourly rate?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "3 per hour",
          "rationale": "Rate equals change divided by time: 18/6."
        },
        {
          "text": "2 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "6 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "18 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Slope and rate"
    },
    {
      "id": "linear-equations-q-9",
      "passage": "Solve 3x + 7 = 25.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = 6",
          "rationale": "Subtract 7, then divide by 3."
        },
        {
          "text": "x = 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 32",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable equation"
    },
    {
      "id": "linear-equations-q-10",
      "passage": "A taxi charges $4 plus $2.50 per mile. The fare is $19. How many miles were traveled?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6 miles",
          "rationale": "Model the fare as 4 + 2.5m = 19."
        },
        {
          "text": "5 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "7.6 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9.2 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Linear model"
    },
    {
      "id": "linear-equations-q-11",
      "passage": "If 5(x - 2) = 3x + 10, what is x?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = 10",
          "rationale": "Distribute, collect x-terms, and solve."
        },
        {
          "text": "x = 0",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 20",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Multi-step equation"
    },
    {
      "id": "linear-equations-q-12",
      "passage": "The line y = 4x - 9 passes through (k, 15). What is k?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6",
          "rationale": "Substitute y = 15 and solve 15 = 4k - 9."
        },
        {
          "text": "4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "24",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Coordinate substitution"
    },
    {
      "id": "linear-equations-q-13",
      "passage": "A quantity increases from 40 to 58 at a constant rate over 6 hours. What is the hourly rate?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "3 per hour",
          "rationale": "Rate equals change divided by time: 18/6."
        },
        {
          "text": "2 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "6 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "18 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Slope and rate"
    },
    {
      "id": "linear-equations-q-14",
      "passage": "Solve 3x + 7 = 25.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = 6",
          "rationale": "Subtract 7, then divide by 3."
        },
        {
          "text": "x = 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 32",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable equation"
    },
    {
      "id": "linear-equations-q-15",
      "passage": "A taxi charges $4 plus $2.50 per mile. The fare is $19. How many miles were traveled?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6 miles",
          "rationale": "Model the fare as 4 + 2.5m = 19."
        },
        {
          "text": "5 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "7.6 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9.2 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Linear model"
    },
    {
      "id": "linear-equations-q-16",
      "passage": "If 5(x - 2) = 3x + 10, what is x?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = 10",
          "rationale": "Distribute, collect x-terms, and solve."
        },
        {
          "text": "x = 0",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 5",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 20",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Multi-step equation"
    },
    {
      "id": "linear-equations-q-17",
      "passage": "The line y = 4x - 9 passes through (k, 15). What is k?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6",
          "rationale": "Substitute y = 15 and solve 15 = 4k - 9."
        },
        {
          "text": "4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "24",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Coordinate substitution"
    },
    {
      "id": "linear-equations-q-18",
      "passage": "A quantity increases from 40 to 58 at a constant rate over 6 hours. What is the hourly rate?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "3 per hour",
          "rationale": "Rate equals change divided by time: 18/6."
        },
        {
          "text": "2 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "6 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "18 per hour",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Slope and rate"
    },
    {
      "id": "linear-equations-q-19",
      "passage": "Solve 3x + 7 = 25.",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "x = 6",
          "rationale": "Subtract 7, then divide by 3."
        },
        {
          "text": "x = 4",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 8",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "x = 32",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "One-variable equation"
    },
    {
      "id": "linear-equations-q-20",
      "passage": "A taxi charges $4 plus $2.50 per mile. The fare is $19. How many miles were traveled?",
      "prompt": "Select the correct answer.",
      "choices": [
        {
          "text": "6 miles",
          "rationale": "Model the fare as 4 + 2.5m = 19."
        },
        {
          "text": "5 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "7.6 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        },
        {
          "text": "9.2 miles",
          "rationale": "This answer reflects a likely sign, substitution, or interpretation error."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Linear model"
    }
  ],
  "flashcards": [
    {
      "front": "Equation structure",
      "back": "Keep both sides balanced while isolating the variable."
    },
    {
      "front": "Inverse operations",
      "back": "Inverse operations: undo addition, subtraction, multiplication, and division"
    },
    {
      "front": "Distribution",
      "back": "Distribution: multiply every term inside parentheses"
    },
    {
      "front": "Slope-intercept form",
      "back": "In y = mx + b, m is the rate of change and b is the starting value."
    },
    {
      "front": "Slope",
      "back": "Slope: change in y divided by change in x"
    },
    {
      "front": "Intercept",
      "back": "Intercept: value of y when x = 0"
    },
    {
      "front": "Context modeling",
      "back": "Define the variable and attach units before writing the equation."
    },
    {
      "front": "Equivalent forms",
      "back": "Different-looking equations can represent the same line or relationship."
    },
    {
      "front": "Define",
      "back": "State what the variable represents."
    },
    {
      "front": "Model",
      "back": "Translate the relationship into an equation."
    },
    {
      "front": "Solve",
      "back": "Use inverse operations systematically."
    },
    {
      "front": "Check",
      "back": "Substitute the result into the original equation."
    },
    {
      "front": "Interpret",
      "back": "Answer with the requested units and meaning."
    },
    {
      "front": "Equation structure Review 14",
      "back": "Keep both sides balanced while isolating the variable."
    },
    {
      "front": "Inverse operations Review 15",
      "back": "Inverse operations: undo addition, subtraction, multiplication, and division"
    },
    {
      "front": "Distribution Review 16",
      "back": "Distribution: multiply every term inside parentheses"
    },
    {
      "front": "Slope-intercept form Review 17",
      "back": "In y = mx + b, m is the rate of change and b is the starting value."
    },
    {
      "front": "Slope Review 18",
      "back": "Slope: change in y divided by change in x"
    },
    {
      "front": "Intercept Review 19",
      "back": "Intercept: value of y when x = 0"
    },
    {
      "front": "Context modeling Review 20",
      "back": "Define the variable and attach units before writing the equation."
    },
    {
      "front": "Equivalent forms Review 21",
      "back": "Different-looking equations can represent the same line or relationship."
    },
    {
      "front": "Define Review 22",
      "back": "State what the variable represents."
    },
    {
      "front": "Model Review 23",
      "back": "Translate the relationship into an equation."
    },
    {
      "front": "Solve Review 24",
      "back": "Use inverse operations systematically."
    },
    {
      "front": "Check Review 25",
      "back": "Substitute the result into the original equation."
    },
    {
      "front": "Interpret Review 26",
      "back": "Answer with the requested units and meaning."
    },
    {
      "front": "Equation structure Review 27",
      "back": "Keep both sides balanced while isolating the variable."
    },
    {
      "front": "Inverse operations Review 28",
      "back": "Inverse operations: undo addition, subtraction, multiplication, and division"
    },
    {
      "front": "Distribution Review 29",
      "back": "Distribution: multiply every term inside parentheses"
    },
    {
      "front": "Slope-intercept form Review 30",
      "back": "In y = mx + b, m is the rate of change and b is the starting value."
    }
  ],
  "nextCourseId": "systems-equations"
} as Course;
