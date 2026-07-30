import type { Course } from "./types";

export const vocabularyInContextCourse: Course = {
  "id": "vocabulary-in-context",
  "title": "Vocabulary in Context",
  "subtitle": "Choose the meaning the sentence demands—not the first dictionary definition you remember.",
  "description": "Use syntax, contrast, examples, and sentence purpose to determine how a familiar word functions in a specific passage.",
  "estimatedMinutes": 75,
  "difficulty": "Medium",
  "objectives": [
    "Predict a meaning before viewing choices.",
    "Use contrast and cause-effect clues.",
    "Distinguish literal, figurative, and academic meanings.",
    "Check that a replacement preserves tone and grammar."
  ],
  "concepts": [
    {
      "title": "Words have jobs",
      "body": "The correct meaning is the one that performs the word’s job in this sentence."
    },
    {
      "title": "Context outranks memory",
      "body": "A familiar dictionary definition may be wrong if it does not fit the surrounding logic."
    },
    {
      "title": "Substitution is a test",
      "body": "Replace the word with each option and ask whether the sentence still makes sense."
    }
  ],
  "strategy": [
    {
      "title": "Read the whole sentence",
      "body": "Do not isolate the tested word."
    },
    {
      "title": "Mark logic clues",
      "body": "Notice contrast, examples, cause-effect, and restatements."
    },
    {
      "title": "Predict simply",
      "body": "Write a short synonym in your own words."
    },
    {
      "title": "Substitute choices",
      "body": "Check meaning, grammar, and tone."
    },
    {
      "title": "Reject near misses",
      "body": "Eliminate options that fit one definition but not this context."
    }
  ],
  "traps": [
    {
      "title": "Most familiar meaning",
      "body": "The everyday definition may not fit the academic context."
    },
    {
      "title": "Right topic, wrong relationship",
      "body": "The option sounds relevant but reverses the sentence’s logic."
    },
    {
      "title": "Too strong or too weak",
      "body": "The option does not match the degree of the original word."
    },
    {
      "title": "Wrong part of speech",
      "body": "The meaning may be related but cannot function grammatically in the sentence."
    },
    {
      "title": "Literal-only reading",
      "body": "Academic passages often use common words metaphorically."
    }
  ],
  "coachTips": [
    "Cover the word and predict before looking at choices.",
    "A correct synonym must preserve the sentence’s logic, not merely share a broad association.",
    "Read one sentence before and after when available.",
    "Use the author’s tone to separate close meanings."
  ],
  "workedExamples": [
    {
      "id": "vic-ex-1",
      "passage": "Because the first experiment produced inconsistent results, the researchers conducted a second trial to **resolve** the issue.",
      "prompt": "As used in the text, “resolve” most nearly means",
      "choices": [
        {
          "text": "decide firmly",
          "rationale": "Possible elsewhere, but not the best fit here."
        },
        {
          "text": "solve or clarify",
          "rationale": "The second trial is meant to clear up the inconsistent result."
        },
        {
          "text": "break into parts",
          "rationale": "That meaning does not fit the context."
        },
        {
          "text": "display clearly",
          "rationale": "The sentence concerns settling an issue, not displaying it."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-2",
      "passage": "The committee’s initial proposal was ambitious, but budget limits forced members to **temper** several of its recommendations.",
      "prompt": "As used in the text, “temper” most nearly means",
      "choices": [
        {
          "text": "make less extreme",
          "rationale": "Budget limits caused the recommendations to be moderated."
        },
        {
          "text": "test the strength of",
          "rationale": "That metallurgical meaning does not fit."
        },
        {
          "text": "become angry",
          "rationale": "The noun meaning of mood is irrelevant."
        },
        {
          "text": "combine randomly",
          "rationale": "No random combination is described."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-3",
      "passage": "The new evidence does not **undermine** the theory; instead, it narrows the conditions under which the theory applies.",
      "prompt": "As used in the text, “undermine” most nearly means",
      "choices": [
        {
          "text": "secretly excavate",
          "rationale": "The physical meaning is not intended."
        },
        {
          "text": "weaken",
          "rationale": "The contrast shows that the evidence does not weaken the theory."
        },
        {
          "text": "summarize",
          "rationale": "Narrowing conditions is not summarizing."
        },
        {
          "text": "replace",
          "rationale": "The theory remains in use."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-4",
      "passage": "The curator arranged the paintings chronologically so visitors could **trace** the artist’s changing technique.",
      "prompt": "As used in the text, “trace” most nearly means",
      "choices": [
        {
          "text": "copy onto thin paper",
          "rationale": "That physical action is not intended."
        },
        {
          "text": "follow the development of",
          "rationale": "The chronology lets visitors observe change over time."
        },
        {
          "text": "erase completely",
          "rationale": "Opposite of the context."
        },
        {
          "text": "criticize harshly",
          "rationale": "No criticism is mentioned."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-5",
      "passage": "The mayor called the pilot program a **promising** approach, emphasizing that more data were needed before expansion.",
      "prompt": "As used in the text, “promising” most nearly means",
      "choices": [
        {
          "text": "making a formal pledge",
          "rationale": "The mayor is evaluating potential, not pledging."
        },
        {
          "text": "likely to succeed",
          "rationale": "The approach shows potential, though more evidence is needed."
        },
        {
          "text": "already proven",
          "rationale": "The need for more data rules this out."
        },
        {
          "text": "popular with everyone",
          "rationale": "Popularity is not discussed."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-6",
      "passage": "The biography offers a **measured** account of the leader, praising major achievements while acknowledging serious failures.",
      "prompt": "As used in the text, “measured” most nearly means",
      "choices": [
        {
          "text": "determined with a ruler",
          "rationale": "The literal meaning does not fit."
        },
        {
          "text": "carefully balanced",
          "rationale": "The account includes both praise and criticism."
        },
        {
          "text": "extremely brief",
          "rationale": "Length is not discussed."
        },
        {
          "text": "mathematically exact",
          "rationale": "The sentence concerns tone and judgment."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-7",
      "passage": "Although the policy had broad goals, its immediate effects were **modest**: only a small number of households changed their behavior.",
      "prompt": "As used in the text, “modest” most nearly means",
      "choices": [
        {
          "text": "humble in personality",
          "rationale": "The word describes effects, not a person."
        },
        {
          "text": "limited in size",
          "rationale": "Only a small number changed behavior."
        },
        {
          "text": "morally admirable",
          "rationale": "No moral judgment is made."
        },
        {
          "text": "unexpectedly rapid",
          "rationale": "The passage says nothing about speed."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-8",
      "passage": "The fossil record is **fragmentary**, so paleontologists must draw conclusions from incomplete evidence.",
      "prompt": "As used in the text, “fragmentary” most nearly means",
      "choices": [
        {
          "text": "broken or incomplete",
          "rationale": "The next clause explicitly explains this meaning."
        },
        {
          "text": "highly controversial",
          "rationale": "Controversy is not mentioned."
        },
        {
          "text": "carefully organized",
          "rationale": "This contradicts incomplete evidence."
        },
        {
          "text": "recently discovered",
          "rationale": "Age of discovery is not discussed."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-9",
      "passage": "The author uses humor to **disarm** readers before presenting a sharp criticism of consumer culture.",
      "prompt": "As used in the text, “disarm” most nearly means",
      "choices": [
        {
          "text": "remove weapons from",
          "rationale": "The metaphorical context concerns readers."
        },
        {
          "text": "make less defensive",
          "rationale": "Humor lowers resistance before criticism."
        },
        {
          "text": "confuse completely",
          "rationale": "The purpose is persuasion, not confusion."
        },
        {
          "text": "entertain without purpose",
          "rationale": "The humor has a strategic role."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-10",
      "passage": "The scientist’s claim is **qualified** by her acknowledgment that the sample was small.",
      "prompt": "As used in the text, “qualified” most nearly means",
      "choices": [
        {
          "text": "certified for a profession",
          "rationale": "That meaning does not fit a claim."
        },
        {
          "text": "limited or made less absolute",
          "rationale": "The acknowledgment places a limit on the claim."
        },
        {
          "text": "made more complicated",
          "rationale": "Complexity is not the main idea."
        },
        {
          "text": "proven beyond doubt",
          "rationale": "The small sample does the opposite."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    }
  ],
  "questions": [
    {
      "id": "vic-q-1",
      "passage": "The discovery **yielded** several new questions about how the species migrated.",
      "prompt": "As used in the text, “yielded” most nearly means",
      "choices": [
        {
          "text": "surrendered",
          "rationale": "No conflict is described."
        },
        {
          "text": "produced",
          "rationale": "The discovery generated new questions."
        },
        {
          "text": "bent under pressure",
          "rationale": "The physical meaning does not fit."
        },
        {
          "text": "delayed",
          "rationale": "The questions were created, not postponed."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-2",
      "passage": "The critic argues that the final scene **echoes** the opening scene, though the characters’ roles are reversed.",
      "prompt": "As used in the text, “echoes” most nearly means",
      "choices": [
        {
          "text": "repeats or resembles",
          "rationale": "The final scene parallels the opening."
        },
        {
          "text": "makes a loud sound",
          "rationale": "The context is structural, not acoustic."
        },
        {
          "text": "rejects",
          "rationale": "The scene resembles rather than rejects the opening."
        },
        {
          "text": "explains",
          "rationale": "No explanation is implied."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-3",
      "passage": "The archive contains **rich** evidence about ordinary workers’ lives, including letters, receipts, and photographs.",
      "prompt": "As used in the text, “rich” most nearly means",
      "choices": [
        {
          "text": "wealthy",
          "rationale": "The evidence does not possess money."
        },
        {
          "text": "abundant and detailed",
          "rationale": "The examples show plentiful, informative evidence."
        },
        {
          "text": "colorful",
          "rationale": "Color is irrelevant."
        },
        {
          "text": "difficult to access",
          "rationale": "Accessibility is not discussed."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-4",
      "passage": "The new findings **complicate** the traditional account by showing that local communities responded differently.",
      "prompt": "As used in the text, “complicate” most nearly means",
      "choices": [
        {
          "text": "make less simple",
          "rationale": "Different local responses add nuance to the account."
        },
        {
          "text": "damage beyond repair",
          "rationale": "The account is revised, not destroyed."
        },
        {
          "text": "translate",
          "rationale": "No language change occurs."
        },
        {
          "text": "confirm completely",
          "rationale": "The findings challenge simplicity rather than fully confirm it."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-5",
      "passage": "The engineer designed a **robust** system that continued operating despite heat, vibration, and dust.",
      "prompt": "As used in the text, “robust” most nearly means",
      "choices": [
        {
          "text": "physically large",
          "rationale": "Size is not the focus."
        },
        {
          "text": "strong and reliable",
          "rationale": "Continued operation under stress shows reliability."
        },
        {
          "text": "expensive",
          "rationale": "Cost is not mentioned."
        },
        {
          "text": "simple to understand",
          "rationale": "The system’s complexity is not discussed."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-6",
      "passage": "The essay **frames** the debate as a conflict between efficiency and fairness.",
      "prompt": "As used in the text, “frames” most nearly means",
      "choices": [
        {
          "text": "places in a border",
          "rationale": "The physical meaning is not intended."
        },
        {
          "text": "presents or defines",
          "rationale": "The essay presents the debate in a particular way."
        },
        {
          "text": "proves",
          "rationale": "Presentation is not proof."
        },
        {
          "text": "ends",
          "rationale": "The essay begins a perspective rather than ends discussion."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-7",
      "passage": "The evidence is **consistent** with the hypothesis, but it does not prove the hypothesis conclusively.",
      "prompt": "As used in the text, “consistent” most nearly means",
      "choices": [
        {
          "text": "unchanging over time",
          "rationale": "That is not the relevant sense."
        },
        {
          "text": "compatible or in agreement",
          "rationale": "The evidence fits the hypothesis without proving it."
        },
        {
          "text": "frequent",
          "rationale": "Frequency is not discussed."
        },
        {
          "text": "carefully measured",
          "rationale": "Measurement is not the meaning here."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-8",
      "passage": "The professor used a familiar example to **anchor** an otherwise abstract explanation.",
      "prompt": "As used in the text, “anchor” most nearly means",
      "choices": [
        {
          "text": "attach to the ocean floor",
          "rationale": "The use is metaphorical."
        },
        {
          "text": "provide a stable reference for",
          "rationale": "The familiar example grounds the abstract idea."
        },
        {
          "text": "shorten",
          "rationale": "The example may help, but shortening is not stated."
        },
        {
          "text": "challenge",
          "rationale": "The example supports understanding rather than challenges it."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-9",
      "passage": "The report **credits** community organizers with increasing voter participation.",
      "prompt": "As used in the text, “credits” most nearly means",
      "choices": [
        {
          "text": "lends money to",
          "rationale": "Financial credit is irrelevant."
        },
        {
          "text": "attributes achievement to",
          "rationale": "The report assigns responsibility for the increase."
        },
        {
          "text": "lists alphabetically",
          "rationale": "No listing is described."
        },
        {
          "text": "questions the honesty of",
          "rationale": "The report recognizes their contribution."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-q-10",
      "passage": "The playwright leaves the ending **open**, allowing audiences to decide whether the characters reconcile.",
      "prompt": "As used in the text, “open” most nearly means",
      "choices": [
        {
          "text": "not physically closed",
          "rationale": "The word describes an ending, not a door."
        },
        {
          "text": "unresolved or subject to interpretation",
          "rationale": "Audiences must decide what happens."
        },
        {
          "text": "available to the public",
          "rationale": "Access is not discussed."
        },
        {
          "text": "honest and direct",
          "rationale": "The ambiguity points away from this meaning."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context"
    },
    {
      "id": "vic-ex-1b",
      "passage": "Because the first experiment produced inconsistent results, the researchers conducted a second trial to **resolve** the issue.",
      "prompt": "As used in the text, “resolve” most nearly means",
      "choices": [
        {
          "text": "decide firmly",
          "rationale": "Possible elsewhere, but not the best fit here."
        },
        {
          "text": "solve or clarify",
          "rationale": "The second trial is meant to clear up the inconsistent result."
        },
        {
          "text": "break into parts",
          "rationale": "That meaning does not fit the context."
        },
        {
          "text": "display clearly",
          "rationale": "The sentence concerns settling an issue, not displaying it."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-2b",
      "passage": "The committee’s initial proposal was ambitious, but budget limits forced members to **temper** several of its recommendations.",
      "prompt": "As used in the text, “temper” most nearly means",
      "choices": [
        {
          "text": "make less extreme",
          "rationale": "Budget limits caused the recommendations to be moderated."
        },
        {
          "text": "test the strength of",
          "rationale": "That metallurgical meaning does not fit."
        },
        {
          "text": "become angry",
          "rationale": "The noun meaning of mood is irrelevant."
        },
        {
          "text": "combine randomly",
          "rationale": "No random combination is described."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-3b",
      "passage": "The new evidence does not **undermine** the theory; instead, it narrows the conditions under which the theory applies.",
      "prompt": "As used in the text, “undermine” most nearly means",
      "choices": [
        {
          "text": "secretly excavate",
          "rationale": "The physical meaning is not intended."
        },
        {
          "text": "weaken",
          "rationale": "The contrast shows that the evidence does not weaken the theory."
        },
        {
          "text": "summarize",
          "rationale": "Narrowing conditions is not summarizing."
        },
        {
          "text": "replace",
          "rationale": "The theory remains in use."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-4b",
      "passage": "The curator arranged the paintings chronologically so visitors could **trace** the artist’s changing technique.",
      "prompt": "As used in the text, “trace” most nearly means",
      "choices": [
        {
          "text": "copy onto thin paper",
          "rationale": "That physical action is not intended."
        },
        {
          "text": "follow the development of",
          "rationale": "The chronology lets visitors observe change over time."
        },
        {
          "text": "erase completely",
          "rationale": "Opposite of the context."
        },
        {
          "text": "criticize harshly",
          "rationale": "No criticism is mentioned."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-5b",
      "passage": "The mayor called the pilot program a **promising** approach, emphasizing that more data were needed before expansion.",
      "prompt": "As used in the text, “promising” most nearly means",
      "choices": [
        {
          "text": "making a formal pledge",
          "rationale": "The mayor is evaluating potential, not pledging."
        },
        {
          "text": "likely to succeed",
          "rationale": "The approach shows potential, though more evidence is needed."
        },
        {
          "text": "already proven",
          "rationale": "The need for more data rules this out."
        },
        {
          "text": "popular with everyone",
          "rationale": "Popularity is not discussed."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-6b",
      "passage": "The biography offers a **measured** account of the leader, praising major achievements while acknowledging serious failures.",
      "prompt": "As used in the text, “measured” most nearly means",
      "choices": [
        {
          "text": "determined with a ruler",
          "rationale": "The literal meaning does not fit."
        },
        {
          "text": "carefully balanced",
          "rationale": "The account includes both praise and criticism."
        },
        {
          "text": "extremely brief",
          "rationale": "Length is not discussed."
        },
        {
          "text": "mathematically exact",
          "rationale": "The sentence concerns tone and judgment."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-7b",
      "passage": "Although the policy had broad goals, its immediate effects were **modest**: only a small number of households changed their behavior.",
      "prompt": "As used in the text, “modest” most nearly means",
      "choices": [
        {
          "text": "humble in personality",
          "rationale": "The word describes effects, not a person."
        },
        {
          "text": "limited in size",
          "rationale": "Only a small number changed behavior."
        },
        {
          "text": "morally admirable",
          "rationale": "No moral judgment is made."
        },
        {
          "text": "unexpectedly rapid",
          "rationale": "The passage says nothing about speed."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-8b",
      "passage": "The fossil record is **fragmentary**, so paleontologists must draw conclusions from incomplete evidence.",
      "prompt": "As used in the text, “fragmentary” most nearly means",
      "choices": [
        {
          "text": "broken or incomplete",
          "rationale": "The next clause explicitly explains this meaning."
        },
        {
          "text": "highly controversial",
          "rationale": "Controversy is not mentioned."
        },
        {
          "text": "carefully organized",
          "rationale": "This contradicts incomplete evidence."
        },
        {
          "text": "recently discovered",
          "rationale": "Age of discovery is not discussed."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-9b",
      "passage": "The author uses humor to **disarm** readers before presenting a sharp criticism of consumer culture.",
      "prompt": "As used in the text, “disarm” most nearly means",
      "choices": [
        {
          "text": "remove weapons from",
          "rationale": "The metaphorical context concerns readers."
        },
        {
          "text": "make less defensive",
          "rationale": "Humor lowers resistance before criticism."
        },
        {
          "text": "confuse completely",
          "rationale": "The purpose is persuasion, not confusion."
        },
        {
          "text": "entertain without purpose",
          "rationale": "The humor has a strategic role."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    },
    {
      "id": "vic-ex-10b",
      "passage": "The scientist’s claim is **qualified** by her acknowledgment that the sample was small.",
      "prompt": "As used in the text, “qualified” most nearly means",
      "choices": [
        {
          "text": "certified for a profession",
          "rationale": "That meaning does not fit a claim."
        },
        {
          "text": "limited or made less absolute",
          "rationale": "The acknowledgment places a limit on the claim."
        },
        {
          "text": "made more complicated",
          "rationale": "Complexity is not the main idea."
        },
        {
          "text": "proven beyond doubt",
          "rationale": "The small sample does the opposite."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Meaning in context",
      "walkthrough": [
        "Replace the tested word with a simple blank.",
        "Use the sentence’s logic and nearby clues to predict a meaning.",
        "Choose the option that preserves both meaning and tone."
      ]
    }
  ],
  "flashcards": [
    {
      "front": "Context clue",
      "back": "Nearby information that helps determine meaning."
    },
    {
      "front": "Substitution test",
      "back": "Replacing the word with a choice to check fit."
    },
    {
      "front": "Connotation",
      "back": "The emotional or evaluative association of a word."
    },
    {
      "front": "Denotation",
      "back": "A word’s direct dictionary meaning."
    },
    {
      "front": "Figurative meaning",
      "back": "A nonliteral use that expresses an idea by comparison or extension."
    },
    {
      "front": "Degree",
      "back": "The strength or intensity of a word’s meaning."
    },
    {
      "front": "Words have jobs",
      "back": "The correct meaning is the one that performs the word’s job in this sentence."
    },
    {
      "front": "Context outranks memory",
      "back": "A familiar dictionary definition may be wrong if it does not fit the surrounding logic."
    },
    {
      "front": "Substitution is a test",
      "back": "Replace the word with each option and ask whether the sentence still makes sense."
    },
    {
      "front": "Step 1: Read the whole sentence",
      "back": "Do not isolate the tested word."
    },
    {
      "front": "Step 2: Mark logic clues",
      "back": "Notice contrast, examples, cause-effect, and restatements."
    },
    {
      "front": "Step 3: Predict simply",
      "back": "Write a short synonym in your own words."
    },
    {
      "front": "Step 4: Substitute choices",
      "back": "Check meaning, grammar, and tone."
    },
    {
      "front": "Step 5: Reject near misses",
      "back": "Eliminate options that fit one definition but not this context."
    },
    {
      "front": "Trap: Most familiar meaning",
      "back": "The everyday definition may not fit the academic context."
    },
    {
      "front": "Trap: Right topic, wrong relationship",
      "back": "The option sounds relevant but reverses the sentence’s logic."
    },
    {
      "front": "Trap: Too strong or too weak",
      "back": "The option does not match the degree of the original word."
    },
    {
      "front": "Trap: Wrong part of speech",
      "back": "The meaning may be related but cannot function grammatically in the sentence."
    },
    {
      "front": "Trap: Literal-only reading",
      "back": "Academic passages often use common words metaphorically."
    },
    {
      "front": "Coach tip 1",
      "back": "Cover the word and predict before looking at choices."
    },
    {
      "front": "Coach tip 2",
      "back": "A correct synonym must preserve the sentence’s logic, not merely share a broad association."
    },
    {
      "front": "Coach tip 3",
      "back": "Read one sentence before and after when available."
    },
    {
      "front": "Coach tip 4",
      "back": "Use the author’s tone to separate close meanings."
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
  "nextCourseId": "authors-purpose"
};
