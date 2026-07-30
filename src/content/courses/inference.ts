import type { Course } from "./types";

export const inferenceCourse: Course = {
  "id": "inference",
  "title": "Inference",
  "subtitle": "Draw the smallest conclusion the evidence supports.",
  "description": "Learn to distinguish reasonable inference from speculation by grounding every conclusion in specific textual evidence.",
  "estimatedMinutes": 80,
  "difficulty": "Medium",
  "objectives": [
    "Separate stated facts from implied conclusions.",
    "Avoid answers that add unsupported assumptions.",
    "Use cautious language to match the strength of the evidence.",
    "Verify that every part of an answer is supported."
  ],
  "concepts": [
    {
      "title": "Inference is not guessing",
      "body": "An inference is a conclusion supported by what the text states, even when the conclusion is not stated directly."
    },
    {
      "title": "The smallest safe step",
      "body": "Strong SAT inferences usually move only one logical step beyond the passage."
    },
    {
      "title": "Match the evidence strength",
      "body": "Words such as may, likely, and suggests often fit limited evidence better than always, proves, or guarantees."
    }
  ],
  "strategy": [
    {
      "title": "List the facts",
      "body": "Identify what the passage directly establishes."
    },
    {
      "title": "Connect nearby facts",
      "body": "Ask what follows when those facts are considered together."
    },
    {
      "title": "Predict cautiously",
      "body": "State a modest conclusion before reading the choices."
    },
    {
      "title": "Reject added stories",
      "body": "Eliminate choices requiring facts, motives, or future events not supplied."
    },
    {
      "title": "Verify every word",
      "body": "A choice is wrong if even one important part lacks support."
    }
  ],
  "traps": [
    {
      "title": "Over-inference",
      "body": "The answer goes several steps beyond the evidence."
    },
    {
      "title": "Extreme language",
      "body": "Words such as all, never, completely, and certainly overstate limited evidence."
    },
    {
      "title": "Reversed relationship",
      "body": "The answer flips cause and effect or confuses what influenced what."
    },
    {
      "title": "Plausible but unsupported",
      "body": "The idea could be true in real life but is not established by this text."
    },
    {
      "title": "Half-supported choice",
      "body": "One clause is supported, but another clause adds an unsupported claim."
    }
  ],
  "coachTips": [
    "Choose the answer that needs the fewest assumptions.",
    "A reasonable inference is usually boringly precise, not dramatically clever.",
    "When evidence is limited, the correct answer often uses limited language.",
    "Point to the exact words that support your conclusion."
  ],
  "workedExamples": [
    {
      "id": "inf-ex-1",
      "passage": "A city library extended its weekend hours for three months. During that period, Saturday attendance rose sharply, while weekday attendance remained nearly unchanged. The library has now made the weekend schedule permanent.",
      "prompt": "Which conclusion is best supported by the text?",
      "choices": [
        {
          "text": "The longer weekend hours likely contributed to increased Saturday attendance.",
          "rationale": "The timing and selective increase support this cautious conclusion."
        },
        {
          "text": "Most library visitors dislike visiting on weekdays.",
          "rationale": "The passage reports stable weekday attendance, not dislike."
        },
        {
          "text": "The library will soon eliminate weekday hours.",
          "rationale": "No such plan is mentioned."
        },
        {
          "text": "Every city library should adopt the same schedule.",
          "rationale": "The evidence concerns one library and does not justify a universal claim."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-2",
      "passage": "Researchers placed identical plants in two rooms. One room received natural daylight, while the other relied on dim artificial light. After six weeks, the plants in natural daylight were taller on average, though both groups survived.",
      "prompt": "What can reasonably be inferred?",
      "choices": [
        {
          "text": "Natural daylight may promote faster growth under these conditions.",
          "rationale": "The taller average supports a limited inference about growth."
        },
        {
          "text": "Artificial light always kills plants.",
          "rationale": "Both groups survived."
        },
        {
          "text": "Plant height depends only on light.",
          "rationale": "Other factors are not ruled out."
        },
        {
          "text": "The researchers preferred the daylight room.",
          "rationale": "The passage gives no information about preference."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-3",
      "passage": "A novelist revised the opening chapter after early readers said they could not understand why the protagonist left home. In the published version, the chapter includes a brief scene showing the protagonist’s conflict with her family.",
      "prompt": "The text most strongly suggests that the added scene was intended to",
      "choices": [
        {
          "text": "clarify the protagonist’s motivation",
          "rationale": "The revision directly addresses readers’ confusion about why she left."
        },
        {
          "text": "introduce a new setting",
          "rationale": "The scene concerns family conflict, not primarily setting."
        },
        {
          "text": "make the novel shorter",
          "rationale": "Adding a scene would not make it shorter."
        },
        {
          "text": "hide the central conflict",
          "rationale": "The scene makes the conflict clearer."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-4",
      "passage": "A coastal town installed dunes and planted native grasses along an eroding beach. Two years later, storm damage was lower in the treated area than in a nearby untreated stretch of coast.",
      "prompt": "Which inference is best supported?",
      "choices": [
        {
          "text": "The dune restoration may have reduced storm damage.",
          "rationale": "The comparison supports a cautious causal possibility."
        },
        {
          "text": "Storms no longer threaten the town.",
          "rationale": "Damage was lower, not eliminated."
        },
        {
          "text": "Native grasses grow only near oceans.",
          "rationale": "The passage does not discuss where grasses can grow."
        },
        {
          "text": "The untreated coast will be abandoned.",
          "rationale": "No future decision is stated."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-5",
      "passage": "An orchestra offered discounted tickets to students. Student attendance increased, but total ticket revenue also rose because many performances that previously had empty seats became fuller.",
      "prompt": "What does the text imply?",
      "choices": [
        {
          "text": "Lower prices can increase revenue when they attract enough additional buyers.",
          "rationale": "More student buyers filled otherwise empty seats and total revenue rose."
        },
        {
          "text": "The orchestra lost money on every student ticket.",
          "rationale": "The passage does not state per-ticket losses."
        },
        {
          "text": "Regular ticket prices were eliminated.",
          "rationale": "Only student discounts are mentioned."
        },
        {
          "text": "Students attended only because of the musicians.",
          "rationale": "The passage identifies the discount, not musician preference, as the change."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-6",
      "passage": "A historian found that several letters attributed to a political leader used paper manufactured years after the leader’s death. The historian therefore excluded those letters from a new biography.",
      "prompt": "The historian’s decision suggests that the letters were",
      "choices": [
        {
          "text": "unlikely to be authentic",
          "rationale": "The paper date conflicts with the supposed authorship."
        },
        {
          "text": "more informative than official records",
          "rationale": "No comparison is made."
        },
        {
          "text": "written during the leader’s childhood",
          "rationale": "The paper was made after the leader died."
        },
        {
          "text": "translated from another language",
          "rationale": "Translation is not discussed."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-7",
      "passage": "In a survey, commuters who lived within two miles of work were more likely to bicycle than commuters who lived farther away. However, even among nearby commuters, most still drove.",
      "prompt": "Which statement is supported?",
      "choices": [
        {
          "text": "Shorter distance is associated with bicycling, but it does not guarantee it.",
          "rationale": "The survey shows a relationship and an important limitation."
        },
        {
          "text": "All nearby commuters bicycle.",
          "rationale": "Most nearby commuters still drove."
        },
        {
          "text": "Distance has no relationship to transportation choice.",
          "rationale": "Nearby commuters were more likely to bicycle."
        },
        {
          "text": "Driving is impossible for long-distance commuters.",
          "rationale": "The passage says nothing of the kind."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-8",
      "passage": "A museum moved a popular sculpture from a crowded hallway to a quiet gallery and added seating nearby. Visitors then spent more time viewing the sculpture, although the number of visitors to the museum did not change.",
      "prompt": "The results suggest that",
      "choices": [
        {
          "text": "the display environment influenced how long visitors engaged with the sculpture",
          "rationale": "Time increased after the environment changed, while overall attendance stayed stable."
        },
        {
          "text": "the sculpture became more famous",
          "rationale": "Museum attendance did not change, and fame is not measured."
        },
        {
          "text": "visitors disliked the quiet gallery",
          "rationale": "Their longer viewing time suggests the opposite or at least does not support dislike."
        },
        {
          "text": "the museum removed other artworks",
          "rationale": "No removal is mentioned."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-9",
      "passage": "A software team began requiring code reviews before releases. The number of severe bugs found by customers declined, but the average release took one day longer.",
      "prompt": "Which inference is most reasonable?",
      "choices": [
        {
          "text": "The review process may improve reliability at the cost of some speed.",
          "rationale": "The passage reports fewer severe bugs and slightly longer releases."
        },
        {
          "text": "Code reviews eliminate every bug.",
          "rationale": "Only severe customer-found bugs declined."
        },
        {
          "text": "Customers stopped using the software.",
          "rationale": "No usage data are given."
        },
        {
          "text": "Developers wrote less code.",
          "rationale": "The passage does not address code volume."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-10",
      "passage": "A school replaced disposable cafeteria trays with washable ones. Waste volume declined, while water use rose modestly. The school kept the new trays after concluding that the waste reduction outweighed the added water use.",
      "prompt": "The school’s decision indicates that it",
      "choices": [
        {
          "text": "weighed multiple environmental effects rather than considering only one",
          "rationale": "The decision explicitly balances waste reduction against increased water use."
        },
        {
          "text": "believed water use was irrelevant",
          "rationale": "The school considered the added water use."
        },
        {
          "text": "expected waste volume to increase",
          "rationale": "Waste volume declined."
        },
        {
          "text": "planned to close the cafeteria",
          "rationale": "No closure is mentioned."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    }
  ],
  "questions": [
    {
      "id": "inf-q-1",
      "passage": "After a neighborhood added protected bike lanes, bicycle counts increased most during morning and evening commuting hours.",
      "prompt": "Which inference is best supported?",
      "choices": [
        {
          "text": "The lanes may have encouraged some residents to commute by bicycle.",
          "rationale": "The timing of the increase supports a commuting-related inference."
        },
        {
          "text": "All residents stopped driving.",
          "rationale": "No such complete shift is shown."
        },
        {
          "text": "The bike lanes are used only on weekdays.",
          "rationale": "Weekday use is not specified."
        },
        {
          "text": "Traffic congestion disappeared.",
          "rationale": "Congestion is not measured."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-2",
      "passage": "A poet’s early drafts use direct statements of grief, but the final poem conveys grief through images of an empty house and fading photographs.",
      "prompt": "The revisions most likely reflect an effort to",
      "choices": [
        {
          "text": "express emotion more indirectly through imagery",
          "rationale": "The final version replaces direct statements with evocative images."
        },
        {
          "text": "remove emotion from the poem",
          "rationale": "The grief remains central."
        },
        {
          "text": "turn the poem into a comedy",
          "rationale": "Nothing suggests comedy."
        },
        {
          "text": "make the setting historically accurate",
          "rationale": "Historical accuracy is not discussed."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-3",
      "passage": "Two classes used the same textbook, but one class also completed weekly retrieval quizzes. On the final exam, that class remembered more material from early units.",
      "prompt": "What is the most reasonable inference?",
      "choices": [
        {
          "text": "Regular retrieval practice may improve long-term retention.",
          "rationale": "The added quizzes are associated with better memory of earlier material."
        },
        {
          "text": "The textbook was unnecessary.",
          "rationale": "Both classes used it, so this cannot be concluded."
        },
        {
          "text": "Final exams measure only memory.",
          "rationale": "The passage does not define everything the exam measures."
        },
        {
          "text": "Weekly quizzes always produce perfect scores.",
          "rationale": "No perfect scores are reported."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-4",
      "passage": "A restaurant shortened its menu from eighty items to forty. Orders were prepared faster, and the amount of unused food declined.",
      "prompt": "The text suggests that the smaller menu",
      "choices": [
        {
          "text": "made kitchen operations more efficient",
          "rationale": "Faster preparation and less waste both support this."
        },
        {
          "text": "reduced the number of customers",
          "rationale": "Customer counts are not given."
        },
        {
          "text": "made every dish cheaper",
          "rationale": "Prices are not discussed."
        },
        {
          "text": "eliminated the need for cooks",
          "rationale": "Nothing suggests this."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-5",
      "passage": "Birds returned to a restored wetland within one season, but amphibian populations increased only after several years.",
      "prompt": "Which inference is best supported?",
      "choices": [
        {
          "text": "Different species may respond to habitat restoration at different rates.",
          "rationale": "Birds and amphibians recovered on different timelines."
        },
        {
          "text": "Wetland restoration benefits only birds.",
          "rationale": "Amphibians also increased."
        },
        {
          "text": "Amphibians caused the birds to return.",
          "rationale": "No causal relationship is stated."
        },
        {
          "text": "The wetland was fully restored in one season.",
          "rationale": "The delayed amphibian response suggests recovery was not necessarily complete."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-6",
      "passage": "A company allowed employees to choose between remote and office work. Most teams adopted mixed schedules rather than choosing a single arrangement.",
      "prompt": "The result most strongly suggests that",
      "choices": [
        {
          "text": "many employees valued flexibility rather than one universal work setting",
          "rationale": "Mixed schedules indicate a preference for combining options."
        },
        {
          "text": "remote work was banned",
          "rationale": "Remote work remained an option."
        },
        {
          "text": "office work was universally preferred",
          "rationale": "Most teams did not choose one arrangement."
        },
        {
          "text": "productivity declined",
          "rationale": "No productivity data are given."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-7",
      "passage": "A researcher replicated a famous experiment and obtained a much smaller effect than the original study reported. She published both the result and her methods.",
      "prompt": "The researcher’s actions suggest a commitment to",
      "choices": [
        {
          "text": "transparent evaluation of earlier findings",
          "rationale": "She reported a conflicting result and the methods used to obtain it."
        },
        {
          "text": "protecting the original conclusion",
          "rationale": "Her smaller effect challenges it."
        },
        {
          "text": "avoiding public scrutiny",
          "rationale": "Publishing methods invites scrutiny."
        },
        {
          "text": "proving that replication is impossible",
          "rationale": "She completed a replication."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-8",
      "passage": "Residents initially opposed a new public garden because they feared noise. After planners moved event spaces away from homes, opposition declined.",
      "prompt": "Which inference is supported?",
      "choices": [
        {
          "text": "Addressing a specific concern can increase acceptance of a project.",
          "rationale": "Opposition fell after the noise concern was addressed."
        },
        {
          "text": "Residents opposed all green spaces.",
          "rationale": "They objected to anticipated noise, not green space itself."
        },
        {
          "text": "The garden no longer includes events.",
          "rationale": "Events were relocated, not removed."
        },
        {
          "text": "Planners ignored public feedback.",
          "rationale": "They changed the design in response to it."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-9",
      "passage": "A small publisher released an audiobook edition of an older novel. Print sales remained stable, while total sales increased.",
      "prompt": "The data suggest that the audiobook",
      "choices": [
        {
          "text": "reached additional buyers without substantially replacing print purchases",
          "rationale": "Total sales rose while print sales stayed stable."
        },
        {
          "text": "caused readers to abandon print books",
          "rationale": "Print sales did not decline."
        },
        {
          "text": "was less expensive to produce",
          "rationale": "Production costs are not mentioned."
        },
        {
          "text": "changed the novel’s plot",
          "rationale": "Format does not imply plot changes."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-q-10",
      "passage": "A lake’s water clarity improved after nearby farms reduced fertilizer runoff, though clarity still varied after heavy rain.",
      "prompt": "Which inference is best supported?",
      "choices": [
        {
          "text": "Reduced runoff helped, but weather continued to affect water clarity.",
          "rationale": "Improvement followed runoff reduction, and rain still produced variation."
        },
        {
          "text": "Fertilizer was the only factor affecting the lake.",
          "rationale": "Heavy rain also mattered."
        },
        {
          "text": "The lake became perfectly clear.",
          "rationale": "Clarity still varied."
        },
        {
          "text": "Farmers stopped using fertilizer entirely.",
          "rationale": "They reduced runoff; use was not necessarily eliminated."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference"
    },
    {
      "id": "inf-ex-1b",
      "passage": "A city library extended its weekend hours for three months. During that period, Saturday attendance rose sharply, while weekday attendance remained nearly unchanged. The library has now made the weekend schedule permanent.",
      "prompt": "Which conclusion is best supported by the text?",
      "choices": [
        {
          "text": "The longer weekend hours likely contributed to increased Saturday attendance.",
          "rationale": "The timing and selective increase support this cautious conclusion."
        },
        {
          "text": "Most library visitors dislike visiting on weekdays.",
          "rationale": "The passage reports stable weekday attendance, not dislike."
        },
        {
          "text": "The library will soon eliminate weekday hours.",
          "rationale": "No such plan is mentioned."
        },
        {
          "text": "Every city library should adopt the same schedule.",
          "rationale": "The evidence concerns one library and does not justify a universal claim."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-2b",
      "passage": "Researchers placed identical plants in two rooms. One room received natural daylight, while the other relied on dim artificial light. After six weeks, the plants in natural daylight were taller on average, though both groups survived.",
      "prompt": "What can reasonably be inferred?",
      "choices": [
        {
          "text": "Natural daylight may promote faster growth under these conditions.",
          "rationale": "The taller average supports a limited inference about growth."
        },
        {
          "text": "Artificial light always kills plants.",
          "rationale": "Both groups survived."
        },
        {
          "text": "Plant height depends only on light.",
          "rationale": "Other factors are not ruled out."
        },
        {
          "text": "The researchers preferred the daylight room.",
          "rationale": "The passage gives no information about preference."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-3b",
      "passage": "A novelist revised the opening chapter after early readers said they could not understand why the protagonist left home. In the published version, the chapter includes a brief scene showing the protagonist’s conflict with her family.",
      "prompt": "The text most strongly suggests that the added scene was intended to",
      "choices": [
        {
          "text": "clarify the protagonist’s motivation",
          "rationale": "The revision directly addresses readers’ confusion about why she left."
        },
        {
          "text": "introduce a new setting",
          "rationale": "The scene concerns family conflict, not primarily setting."
        },
        {
          "text": "make the novel shorter",
          "rationale": "Adding a scene would not make it shorter."
        },
        {
          "text": "hide the central conflict",
          "rationale": "The scene makes the conflict clearer."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-4b",
      "passage": "A coastal town installed dunes and planted native grasses along an eroding beach. Two years later, storm damage was lower in the treated area than in a nearby untreated stretch of coast.",
      "prompt": "Which inference is best supported?",
      "choices": [
        {
          "text": "The dune restoration may have reduced storm damage.",
          "rationale": "The comparison supports a cautious causal possibility."
        },
        {
          "text": "Storms no longer threaten the town.",
          "rationale": "Damage was lower, not eliminated."
        },
        {
          "text": "Native grasses grow only near oceans.",
          "rationale": "The passage does not discuss where grasses can grow."
        },
        {
          "text": "The untreated coast will be abandoned.",
          "rationale": "No future decision is stated."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-5b",
      "passage": "An orchestra offered discounted tickets to students. Student attendance increased, but total ticket revenue also rose because many performances that previously had empty seats became fuller.",
      "prompt": "What does the text imply?",
      "choices": [
        {
          "text": "Lower prices can increase revenue when they attract enough additional buyers.",
          "rationale": "More student buyers filled otherwise empty seats and total revenue rose."
        },
        {
          "text": "The orchestra lost money on every student ticket.",
          "rationale": "The passage does not state per-ticket losses."
        },
        {
          "text": "Regular ticket prices were eliminated.",
          "rationale": "Only student discounts are mentioned."
        },
        {
          "text": "Students attended only because of the musicians.",
          "rationale": "The passage identifies the discount, not musician preference, as the change."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-6b",
      "passage": "A historian found that several letters attributed to a political leader used paper manufactured years after the leader’s death. The historian therefore excluded those letters from a new biography.",
      "prompt": "The historian’s decision suggests that the letters were",
      "choices": [
        {
          "text": "unlikely to be authentic",
          "rationale": "The paper date conflicts with the supposed authorship."
        },
        {
          "text": "more informative than official records",
          "rationale": "No comparison is made."
        },
        {
          "text": "written during the leader’s childhood",
          "rationale": "The paper was made after the leader died."
        },
        {
          "text": "translated from another language",
          "rationale": "Translation is not discussed."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-7b",
      "passage": "In a survey, commuters who lived within two miles of work were more likely to bicycle than commuters who lived farther away. However, even among nearby commuters, most still drove.",
      "prompt": "Which statement is supported?",
      "choices": [
        {
          "text": "Shorter distance is associated with bicycling, but it does not guarantee it.",
          "rationale": "The survey shows a relationship and an important limitation."
        },
        {
          "text": "All nearby commuters bicycle.",
          "rationale": "Most nearby commuters still drove."
        },
        {
          "text": "Distance has no relationship to transportation choice.",
          "rationale": "Nearby commuters were more likely to bicycle."
        },
        {
          "text": "Driving is impossible for long-distance commuters.",
          "rationale": "The passage says nothing of the kind."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-8b",
      "passage": "A museum moved a popular sculpture from a crowded hallway to a quiet gallery and added seating nearby. Visitors then spent more time viewing the sculpture, although the number of visitors to the museum did not change.",
      "prompt": "The results suggest that",
      "choices": [
        {
          "text": "the display environment influenced how long visitors engaged with the sculpture",
          "rationale": "Time increased after the environment changed, while overall attendance stayed stable."
        },
        {
          "text": "the sculpture became more famous",
          "rationale": "Museum attendance did not change, and fame is not measured."
        },
        {
          "text": "visitors disliked the quiet gallery",
          "rationale": "Their longer viewing time suggests the opposite or at least does not support dislike."
        },
        {
          "text": "the museum removed other artworks",
          "rationale": "No removal is mentioned."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-9b",
      "passage": "A software team began requiring code reviews before releases. The number of severe bugs found by customers declined, but the average release took one day longer.",
      "prompt": "Which inference is most reasonable?",
      "choices": [
        {
          "text": "The review process may improve reliability at the cost of some speed.",
          "rationale": "The passage reports fewer severe bugs and slightly longer releases."
        },
        {
          "text": "Code reviews eliminate every bug.",
          "rationale": "Only severe customer-found bugs declined."
        },
        {
          "text": "Customers stopped using the software.",
          "rationale": "No usage data are given."
        },
        {
          "text": "Developers wrote less code.",
          "rationale": "The passage does not address code volume."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    },
    {
      "id": "inf-ex-10b",
      "passage": "A school replaced disposable cafeteria trays with washable ones. Waste volume declined, while water use rose modestly. The school kept the new trays after concluding that the waste reduction outweighed the added water use.",
      "prompt": "The school’s decision indicates that it",
      "choices": [
        {
          "text": "weighed multiple environmental effects rather than considering only one",
          "rationale": "The decision explicitly balances waste reduction against increased water use."
        },
        {
          "text": "believed water use was irrelevant",
          "rationale": "The school considered the added water use."
        },
        {
          "text": "expected waste volume to increase",
          "rationale": "Waste volume declined."
        },
        {
          "text": "planned to close the cafeteria",
          "rationale": "No closure is mentioned."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Evidence-based inference",
      "walkthrough": [
        "Identify only what the passage establishes.",
        "Prefer the choice requiring the fewest extra assumptions.",
        "Check that every part of the answer is supported."
      ]
    }
  ],
  "flashcards": [
    {
      "front": "Inference",
      "back": "A conclusion supported by evidence but not stated directly."
    },
    {
      "front": "Explicit information",
      "back": "Information stated directly in the text."
    },
    {
      "front": "Implicit information",
      "back": "Information suggested by the text."
    },
    {
      "front": "Over-inference",
      "back": "A conclusion that requires unsupported assumptions."
    },
    {
      "front": "Cautious language",
      "back": "Words such as may, likely, or suggests that match limited evidence."
    },
    {
      "front": "Extreme language",
      "back": "Words such as always, never, completely, or guarantees."
    },
    {
      "front": "Inference is not guessing",
      "back": "An inference is a conclusion supported by what the text states, even when the conclusion is not stated directly."
    },
    {
      "front": "The smallest safe step",
      "back": "Strong SAT inferences usually move only one logical step beyond the passage."
    },
    {
      "front": "Match the evidence strength",
      "back": "Words such as may, likely, and suggests often fit limited evidence better than always, proves, or guarantees."
    },
    {
      "front": "Step 1: List the facts",
      "back": "Identify what the passage directly establishes."
    },
    {
      "front": "Step 2: Connect nearby facts",
      "back": "Ask what follows when those facts are considered together."
    },
    {
      "front": "Step 3: Predict cautiously",
      "back": "State a modest conclusion before reading the choices."
    },
    {
      "front": "Step 4: Reject added stories",
      "back": "Eliminate choices requiring facts, motives, or future events not supplied."
    },
    {
      "front": "Step 5: Verify every word",
      "back": "A choice is wrong if even one important part lacks support."
    },
    {
      "front": "Trap: Over-inference",
      "back": "The answer goes several steps beyond the evidence."
    },
    {
      "front": "Trap: Extreme language",
      "back": "Words such as all, never, completely, and certainly overstate limited evidence."
    },
    {
      "front": "Trap: Reversed relationship",
      "back": "The answer flips cause and effect or confuses what influenced what."
    },
    {
      "front": "Trap: Plausible but unsupported",
      "back": "The idea could be true in real life but is not established by this text."
    },
    {
      "front": "Trap: Half-supported choice",
      "back": "One clause is supported, but another clause adds an unsupported claim."
    },
    {
      "front": "Coach tip 1",
      "back": "Choose the answer that needs the fewest assumptions."
    },
    {
      "front": "Coach tip 2",
      "back": "A reasonable inference is usually boringly precise, not dramatically clever."
    },
    {
      "front": "Coach tip 3",
      "back": "When evidence is limited, the correct answer often uses limited language."
    },
    {
      "front": "Coach tip 4",
      "back": "Point to the exact words that support your conclusion."
    },
    {
      "front": "Best-answer standard",
      "back": "The correct choice must be accurate, relevant, and fully supported."
    },
    {
      "front": "Prediction habit",
      "back": "Form a simple answer before comparing choices."
    },
    {
      "front": "Choice audit",
      "back": "Check every important word in an answer choice."
    },
    {
      "front": "Evidence check",
      "back": "Point to the exact phrase that justifies your answer."
    },
    {
      "front": "Near-miss distractor",
      "back": "A choice that is partly right but fails one key requirement."
    },
    {
      "front": "Scope check",
      "back": "Make sure the answer is neither broader nor narrower than the passage."
    },
    {
      "front": "Tone check",
      "back": "Confirm that the choice matches the passage’s degree and attitude."
    }
  ],
  "nextCourseId": "textual-evidence"
};
