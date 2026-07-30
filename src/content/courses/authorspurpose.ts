import type { Course } from "./types";

export const authorsPurposeCourse: Course = {
  "id": "authors-purpose",
  "title": "Author’s Purpose",
  "subtitle": "Describe what a passage—or one part of it—is doing.",
  "description": "Learn to distinguish content from function and identify moves such as explain, illustrate, qualify, concede, challenge, and reframe.",
  "estimatedMinutes": 75,
  "difficulty": "Medium",
  "objectives": [
    "Identify the passage’s overall goal.",
    "Explain the function of examples, contrasts, and limitations.",
    "Distinguish concession from agreement and qualification from rejection.",
    "Use precise purpose verbs."
  ],
  "concepts": [
    {
      "title": "Content vs. function",
      "body": "Content tells what a sentence says; function tells why the author included it."
    },
    {
      "title": "Purpose verbs matter",
      "body": "Explain, illustrate, qualify, concede, challenge, and reframe describe different rhetorical actions."
    },
    {
      "title": "Local purpose supports global purpose",
      "body": "A paragraph’s job usually contributes to the passage’s larger goal."
    }
  ],
  "strategy": [
    {
      "title": "Summarize the passage",
      "body": "State the main point in one sentence."
    },
    {
      "title": "Locate the move",
      "body": "Identify the sentence, example, or contrast named in the question."
    },
    {
      "title": "Name the action",
      "body": "Use a precise verb: illustrate, qualify, challenge, concede, or explain."
    },
    {
      "title": "Connect it upward",
      "body": "Ask how the move advances the larger passage."
    },
    {
      "title": "Reject content-only choices",
      "body": "A choice that merely repeats the topic may not explain its function."
    }
  ],
  "traps": [
    {
      "title": "Content instead of purpose",
      "body": "The answer says what is discussed but not why it is included."
    },
    {
      "title": "Overstated goal",
      "body": "The choice turns a limited illustration into a universal argument."
    },
    {
      "title": "Wrong rhetorical verb",
      "body": "For example, a concession acknowledges a point; a refutation argues against it."
    },
    {
      "title": "Local/global mismatch",
      "body": "The choice describes the entire passage when the question asks about one sentence, or vice versa."
    },
    {
      "title": "Invented audience effect",
      "body": "The answer claims the author wants to entertain or shock without textual support."
    }
  ],
  "coachTips": [
    "Finish this sentence: “The author includes this in order to…”",
    "Purpose answers usually contain both an action and an object.",
    "Do not confuse acknowledging a benefit with endorsing the whole position.",
    "Rhetorical questions often reframe or complicate rather than request information."
  ],
  "workedExamples": [
    {
      "id": "ap-ex-1",
      "passage": "Some cities paint roofs white to reflect sunlight. After describing the physics of reflection, the passage presents temperature data from three neighborhoods that adopted the practice.",
      "prompt": "What is the primary purpose of the passage?",
      "choices": [
        {
          "text": "To explain a cooling strategy and illustrate its effects with data",
          "rationale": "The passage explains the mechanism and then provides evidence."
        },
        {
          "text": "To criticize cities that use dark roofs",
          "rationale": "No criticism is presented."
        },
        {
          "text": "To argue that all buildings must be painted white",
          "rationale": "The passage reports a strategy but does not make a universal demand."
        },
        {
          "text": "To narrate the history of urban architecture",
          "rationale": "The focus is present-day cooling, not historical development."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-2",
      "passage": "A critic first summarizes the common view that a poem celebrates technological progress. She then points to images of exhaustion and isolation to argue that the poem is actually skeptical of that progress.",
      "prompt": "The critic’s discussion of the common view primarily serves to",
      "choices": [
        {
          "text": "provide a position that she later challenges",
          "rationale": "She introduces the standard reading before arguing against it."
        },
        {
          "text": "prove that the poem has no clear meaning",
          "rationale": "She offers an alternative meaning."
        },
        {
          "text": "praise earlier critics",
          "rationale": "No praise is stated."
        },
        {
          "text": "describe the poet’s biography",
          "rationale": "Biography is not discussed."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-3",
      "passage": "The passage describes a failed battery design, explains what engineers learned from it, and shows how those lessons informed a later successful prototype.",
      "prompt": "What is the author’s main purpose?",
      "choices": [
        {
          "text": "To show how failure contributed to later innovation",
          "rationale": "The sequence connects the failed design to subsequent success."
        },
        {
          "text": "To discourage experimentation",
          "rationale": "The passage presents failure as useful."
        },
        {
          "text": "To compare battery prices",
          "rationale": "Prices are not mentioned."
        },
        {
          "text": "To argue that the first design was secretly successful",
          "rationale": "It is explicitly described as failed."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-4",
      "passage": "After presenting evidence that exercise improves memory, the author notes that the studies involved small samples and calls for larger trials.",
      "prompt": "Why does the author mention the small samples?",
      "choices": [
        {
          "text": "To qualify the strength of the conclusion",
          "rationale": "The limitation prevents the evidence from being treated as final."
        },
        {
          "text": "To reject all research on exercise",
          "rationale": "The author still presents positive evidence."
        },
        {
          "text": "To explain how memory works biologically",
          "rationale": "Sample size is methodological, not biological."
        },
        {
          "text": "To praise the researchers’ efficiency",
          "rationale": "No praise is implied."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-5",
      "passage": "The passage opens with a detailed description of a crowded train station before introducing a study of how people navigate complex public spaces.",
      "prompt": "The opening description primarily serves to",
      "choices": [
        {
          "text": "provide a concrete example of the problem the study investigates",
          "rationale": "The station scene illustrates navigation in complexity."
        },
        {
          "text": "prove that trains are inefficient",
          "rationale": "Efficiency is not the focus."
        },
        {
          "text": "introduce the study’s lead researcher",
          "rationale": "No researcher appears in the description."
        },
        {
          "text": "argue that stations should be closed",
          "rationale": "No such argument is made."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-6",
      "passage": "An essay acknowledges that remote work can reduce commuting time, then argues that organizations must also address isolation and unequal home working conditions.",
      "prompt": "The acknowledgment of reduced commuting time serves to",
      "choices": [
        {
          "text": "concede a benefit before introducing limitations",
          "rationale": "The author grants an advantage and then qualifies the overall picture."
        },
        {
          "text": "refute the claim that remote work exists",
          "rationale": "The essay assumes it exists."
        },
        {
          "text": "change the topic to transportation policy",
          "rationale": "Commuting is part of the remote-work discussion."
        },
        {
          "text": "show that isolation is unimportant",
          "rationale": "The essay argues the opposite."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-7",
      "passage": "A historian compares two newspapers’ accounts of the same protest to demonstrate how political alignment shaped what each paper emphasized.",
      "prompt": "What is the primary purpose of the comparison?",
      "choices": [
        {
          "text": "To illustrate how perspective influences reporting",
          "rationale": "Different emphases linked to political alignment support this purpose."
        },
        {
          "text": "To identify which newspaper sold more copies",
          "rationale": "Sales are not discussed."
        },
        {
          "text": "To prove that protests are always misunderstood",
          "rationale": "The claim would be too broad."
        },
        {
          "text": "To summarize the protest’s entire history",
          "rationale": "The comparison focuses on reporting perspective."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-8",
      "passage": "The author lists several successful community gardens, then describes one project that failed because residents were not involved in planning.",
      "prompt": "Why does the author include the failed project?",
      "choices": [
        {
          "text": "To show a condition that can limit otherwise promising programs",
          "rationale": "The failure highlights the importance of community involvement."
        },
        {
          "text": "To argue that all community gardens fail",
          "rationale": "The passage lists several successes."
        },
        {
          "text": "To provide comic relief",
          "rationale": "Nothing suggests humor."
        },
        {
          "text": "To question whether plants need water",
          "rationale": "The issue is planning, not plant biology."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-9",
      "passage": "A scientist uses the phrase 'a useful map, not a perfect mirror' to describe a climate model.",
      "prompt": "The metaphor primarily serves to",
      "choices": [
        {
          "text": "clarify that the model is informative but simplified",
          "rationale": "A map can guide without reproducing reality perfectly."
        },
        {
          "text": "claim that climate models are useless",
          "rationale": "The metaphor calls the model useful."
        },
        {
          "text": "describe the model’s physical appearance",
          "rationale": "The phrase is conceptual, not literal."
        },
        {
          "text": "compare maps from different centuries",
          "rationale": "No historical comparison is made."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-10",
      "passage": "The passage ends by asking whether preserving a building’s façade is enough if the community that gave the building meaning has been displaced.",
      "prompt": "The final question primarily serves to",
      "choices": [
        {
          "text": "complicate a narrow definition of preservation",
          "rationale": "It expands preservation from physical structure to community meaning."
        },
        {
          "text": "request a factual answer from readers",
          "rationale": "The question is rhetorical and conceptual."
        },
        {
          "text": "summarize construction costs",
          "rationale": "Costs are not mentioned."
        },
        {
          "text": "prove that façades should never be preserved",
          "rationale": "The passage questions sufficiency, not all preservation."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    }
  ],
  "questions": [
    {
      "id": "ap-q-1",
      "passage": "The author describes how one coral species survives warmer water, not to suggest that reefs are safe, but to identify traits that may help scientists predict resilience.",
      "prompt": "What is the author’s purpose in discussing the coral species?",
      "choices": [
        {
          "text": "To illustrate traits relevant to predicting resilience",
          "rationale": "The example supports a broader scientific goal."
        },
        {
          "text": "To prove warming is harmless",
          "rationale": "The passage explicitly rejects that implication."
        },
        {
          "text": "To rank coral species by beauty",
          "rationale": "Beauty is irrelevant."
        },
        {
          "text": "To explain how to build an aquarium",
          "rationale": "No practical aquarium guidance is given."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-2",
      "passage": "A review praises a museum exhibit’s research but criticizes labels that use unexplained technical language.",
      "prompt": "The review primarily aims to",
      "choices": [
        {
          "text": "evaluate both strengths and weaknesses of the exhibit",
          "rationale": "It offers praise and criticism."
        },
        {
          "text": "summarize every object in the exhibit",
          "rationale": "Only broad evaluation is provided."
        },
        {
          "text": "argue against museums in general",
          "rationale": "The criticism is specific."
        },
        {
          "text": "teach visitors the technical terms",
          "rationale": "The review objects to unexplained jargon rather than teaching it."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-3",
      "passage": "Before presenting a new theory, the researcher outlines the older theory’s achievements and the observations it cannot explain.",
      "prompt": "The discussion of the older theory serves mainly to",
      "choices": [
        {
          "text": "establish both the foundation for and need for the new theory",
          "rationale": "The older theory’s successes and limits set up the new proposal."
        },
        {
          "text": "show that earlier researchers were dishonest",
          "rationale": "No dishonesty is alleged."
        },
        {
          "text": "avoid presenting evidence",
          "rationale": "The passage is preparing an evidence-based argument."
        },
        {
          "text": "prove the older theory was entirely useless",
          "rationale": "Its achievements are acknowledged."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-4",
      "passage": "The passage recounts a chef’s repeated attempts to reproduce a traditional dish after moving abroad.",
      "prompt": "What is the primary purpose of the narrative?",
      "choices": [
        {
          "text": "To explore how memory and adaptation shape cultural tradition",
          "rationale": "Repeated attempts abroad connect tradition, memory, and adaptation."
        },
        {
          "text": "To provide an exact recipe",
          "rationale": "No recipe is described."
        },
        {
          "text": "To criticize all modern cooking",
          "rationale": "The focus is personal and cultural."
        },
        {
          "text": "To compare restaurant prices",
          "rationale": "Prices are absent."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-5",
      "passage": "The author cites a 19th-century prediction that bicycles would destroy public manners, then notes similar warnings about smartphones.",
      "prompt": "The historical example mainly serves to",
      "choices": [
        {
          "text": "show that anxiety about new technology often follows recurring patterns",
          "rationale": "The parallel links reactions across eras."
        },
        {
          "text": "prove bicycles and smartphones are identical",
          "rationale": "The author compares reactions, not technologies themselves."
        },
        {
          "text": "argue that manners never change",
          "rationale": "No such absolute claim is made."
        },
        {
          "text": "describe bicycle engineering",
          "rationale": "The focus is social anxiety."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-6",
      "passage": "The passage provides two possible explanations for declining bird numbers and explains what evidence would distinguish between them.",
      "prompt": "The author’s primary purpose is to",
      "choices": [
        {
          "text": "clarify competing hypotheses and how they could be tested",
          "rationale": "The passage compares explanations and identifies discriminating evidence."
        },
        {
          "text": "select one explanation without evidence",
          "rationale": "The passage does not yet choose."
        },
        {
          "text": "describe bird anatomy",
          "rationale": "Anatomy is not the topic."
        },
        {
          "text": "oppose further research",
          "rationale": "It outlines how research could proceed."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-7",
      "passage": "An economist introduces a hypothetical household budget before discussing national inflation statistics.",
      "prompt": "The household example primarily serves to",
      "choices": [
        {
          "text": "make an abstract economic measure concrete",
          "rationale": "The example links national statistics to familiar decisions."
        },
        {
          "text": "prove one household represents the entire nation",
          "rationale": "A hypothetical example cannot prove that."
        },
        {
          "text": "replace the need for statistics",
          "rationale": "The statistics are still discussed."
        },
        {
          "text": "criticize household spending",
          "rationale": "No criticism is stated."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-8",
      "passage": "The writer repeats the phrase 'not yet' at the end of three paragraphs describing unfinished reforms.",
      "prompt": "The repetition primarily serves to",
      "choices": [
        {
          "text": "emphasize that progress remains incomplete",
          "rationale": "The repeated phrase reinforces unfinished work."
        },
        {
          "text": "introduce three unrelated topics",
          "rationale": "The topics are linked by incomplete reform."
        },
        {
          "text": "create uncertainty about grammar",
          "rationale": "The repetition is rhetorical."
        },
        {
          "text": "show that the reforms have failed permanently",
          "rationale": "'Not yet' leaves open future progress."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-9",
      "passage": "The passage describes a translation choice, presents two alternatives, and explains what nuance each alternative would lose.",
      "prompt": "What is the primary purpose?",
      "choices": [
        {
          "text": "To demonstrate the trade-offs involved in translation",
          "rationale": "Comparing alternatives and lost nuances reveals trade-offs."
        },
        {
          "text": "To prove only one language is expressive",
          "rationale": "No language hierarchy is claimed."
        },
        {
          "text": "To summarize the author’s biography",
          "rationale": "Biography is absent."
        },
        {
          "text": "To teach pronunciation",
          "rationale": "The focus is semantic nuance."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-q-10",
      "passage": "The author ends a discussion of automation by proposing that the key question is not whether jobs will change, but who will control the transition.",
      "prompt": "The final sentence serves mainly to",
      "choices": [
        {
          "text": "redirect the debate toward power and decision-making",
          "rationale": "It reframes the central question around control."
        },
        {
          "text": "deny that jobs will change",
          "rationale": "It assumes change and shifts focus."
        },
        {
          "text": "summarize the history of machines",
          "rationale": "History is not the purpose."
        },
        {
          "text": "predict an exact unemployment rate",
          "rationale": "No numerical prediction appears."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose"
    },
    {
      "id": "ap-ex-1b",
      "passage": "Some cities paint roofs white to reflect sunlight. After describing the physics of reflection, the passage presents temperature data from three neighborhoods that adopted the practice.",
      "prompt": "What is the primary purpose of the passage?",
      "choices": [
        {
          "text": "To explain a cooling strategy and illustrate its effects with data",
          "rationale": "The passage explains the mechanism and then provides evidence."
        },
        {
          "text": "To criticize cities that use dark roofs",
          "rationale": "No criticism is presented."
        },
        {
          "text": "To argue that all buildings must be painted white",
          "rationale": "The passage reports a strategy but does not make a universal demand."
        },
        {
          "text": "To narrate the history of urban architecture",
          "rationale": "The focus is present-day cooling, not historical development."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-2b",
      "passage": "A critic first summarizes the common view that a poem celebrates technological progress. She then points to images of exhaustion and isolation to argue that the poem is actually skeptical of that progress.",
      "prompt": "The critic’s discussion of the common view primarily serves to",
      "choices": [
        {
          "text": "provide a position that she later challenges",
          "rationale": "She introduces the standard reading before arguing against it."
        },
        {
          "text": "prove that the poem has no clear meaning",
          "rationale": "She offers an alternative meaning."
        },
        {
          "text": "praise earlier critics",
          "rationale": "No praise is stated."
        },
        {
          "text": "describe the poet’s biography",
          "rationale": "Biography is not discussed."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-3b",
      "passage": "The passage describes a failed battery design, explains what engineers learned from it, and shows how those lessons informed a later successful prototype.",
      "prompt": "What is the author’s main purpose?",
      "choices": [
        {
          "text": "To show how failure contributed to later innovation",
          "rationale": "The sequence connects the failed design to subsequent success."
        },
        {
          "text": "To discourage experimentation",
          "rationale": "The passage presents failure as useful."
        },
        {
          "text": "To compare battery prices",
          "rationale": "Prices are not mentioned."
        },
        {
          "text": "To argue that the first design was secretly successful",
          "rationale": "It is explicitly described as failed."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-4b",
      "passage": "After presenting evidence that exercise improves memory, the author notes that the studies involved small samples and calls for larger trials.",
      "prompt": "Why does the author mention the small samples?",
      "choices": [
        {
          "text": "To qualify the strength of the conclusion",
          "rationale": "The limitation prevents the evidence from being treated as final."
        },
        {
          "text": "To reject all research on exercise",
          "rationale": "The author still presents positive evidence."
        },
        {
          "text": "To explain how memory works biologically",
          "rationale": "Sample size is methodological, not biological."
        },
        {
          "text": "To praise the researchers’ efficiency",
          "rationale": "No praise is implied."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-5b",
      "passage": "The passage opens with a detailed description of a crowded train station before introducing a study of how people navigate complex public spaces.",
      "prompt": "The opening description primarily serves to",
      "choices": [
        {
          "text": "provide a concrete example of the problem the study investigates",
          "rationale": "The station scene illustrates navigation in complexity."
        },
        {
          "text": "prove that trains are inefficient",
          "rationale": "Efficiency is not the focus."
        },
        {
          "text": "introduce the study’s lead researcher",
          "rationale": "No researcher appears in the description."
        },
        {
          "text": "argue that stations should be closed",
          "rationale": "No such argument is made."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-6b",
      "passage": "An essay acknowledges that remote work can reduce commuting time, then argues that organizations must also address isolation and unequal home working conditions.",
      "prompt": "The acknowledgment of reduced commuting time serves to",
      "choices": [
        {
          "text": "concede a benefit before introducing limitations",
          "rationale": "The author grants an advantage and then qualifies the overall picture."
        },
        {
          "text": "refute the claim that remote work exists",
          "rationale": "The essay assumes it exists."
        },
        {
          "text": "change the topic to transportation policy",
          "rationale": "Commuting is part of the remote-work discussion."
        },
        {
          "text": "show that isolation is unimportant",
          "rationale": "The essay argues the opposite."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-7b",
      "passage": "A historian compares two newspapers’ accounts of the same protest to demonstrate how political alignment shaped what each paper emphasized.",
      "prompt": "What is the primary purpose of the comparison?",
      "choices": [
        {
          "text": "To illustrate how perspective influences reporting",
          "rationale": "Different emphases linked to political alignment support this purpose."
        },
        {
          "text": "To identify which newspaper sold more copies",
          "rationale": "Sales are not discussed."
        },
        {
          "text": "To prove that protests are always misunderstood",
          "rationale": "The claim would be too broad."
        },
        {
          "text": "To summarize the protest’s entire history",
          "rationale": "The comparison focuses on reporting perspective."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-8b",
      "passage": "The author lists several successful community gardens, then describes one project that failed because residents were not involved in planning.",
      "prompt": "Why does the author include the failed project?",
      "choices": [
        {
          "text": "To show a condition that can limit otherwise promising programs",
          "rationale": "The failure highlights the importance of community involvement."
        },
        {
          "text": "To argue that all community gardens fail",
          "rationale": "The passage lists several successes."
        },
        {
          "text": "To provide comic relief",
          "rationale": "Nothing suggests humor."
        },
        {
          "text": "To question whether plants need water",
          "rationale": "The issue is planning, not plant biology."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-9b",
      "passage": "A scientist uses the phrase 'a useful map, not a perfect mirror' to describe a climate model.",
      "prompt": "The metaphor primarily serves to",
      "choices": [
        {
          "text": "clarify that the model is informative but simplified",
          "rationale": "A map can guide without reproducing reality perfectly."
        },
        {
          "text": "claim that climate models are useless",
          "rationale": "The metaphor calls the model useful."
        },
        {
          "text": "describe the model’s physical appearance",
          "rationale": "The phrase is conceptual, not literal."
        },
        {
          "text": "compare maps from different centuries",
          "rationale": "No historical comparison is made."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    },
    {
      "id": "ap-ex-10b",
      "passage": "The passage ends by asking whether preserving a building’s façade is enough if the community that gave the building meaning has been displaced.",
      "prompt": "The final question primarily serves to",
      "choices": [
        {
          "text": "complicate a narrow definition of preservation",
          "rationale": "It expands preservation from physical structure to community meaning."
        },
        {
          "text": "request a factual answer from readers",
          "rationale": "The question is rhetorical and conceptual."
        },
        {
          "text": "summarize construction costs",
          "rationale": "Costs are not mentioned."
        },
        {
          "text": "prove that façades should never be preserved",
          "rationale": "The passage questions sufficiency, not all preservation."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Author’s purpose",
      "walkthrough": [
        "Identify what the author is doing in the referenced part.",
        "Connect that move to the passage’s larger argument or explanation.",
        "Choose the answer that describes function, not merely content."
      ]
    }
  ],
  "flashcards": [
    {
      "front": "Illustrate",
      "back": "Make an idea clearer through an example."
    },
    {
      "front": "Qualify",
      "back": "Limit or make a claim less absolute."
    },
    {
      "front": "Concede",
      "back": "Acknowledge a point before advancing another claim."
    },
    {
      "front": "Refute",
      "back": "Argue that a claim is wrong."
    },
    {
      "front": "Reframe",
      "back": "Present an issue from a different perspective."
    },
    {
      "front": "Evaluate",
      "back": "Judge strengths, weaknesses, or significance."
    },
    {
      "front": "Content vs. function",
      "back": "Content tells what a sentence says; function tells why the author included it."
    },
    {
      "front": "Purpose verbs matter",
      "back": "Explain, illustrate, qualify, concede, challenge, and reframe describe different rhetorical actions."
    },
    {
      "front": "Local purpose supports global purpose",
      "back": "A paragraph’s job usually contributes to the passage’s larger goal."
    },
    {
      "front": "Step 1: Summarize the passage",
      "back": "State the main point in one sentence."
    },
    {
      "front": "Step 2: Locate the move",
      "back": "Identify the sentence, example, or contrast named in the question."
    },
    {
      "front": "Step 3: Name the action",
      "back": "Use a precise verb: illustrate, qualify, challenge, concede, or explain."
    },
    {
      "front": "Step 4: Connect it upward",
      "back": "Ask how the move advances the larger passage."
    },
    {
      "front": "Step 5: Reject content-only choices",
      "back": "A choice that merely repeats the topic may not explain its function."
    },
    {
      "front": "Trap: Content instead of purpose",
      "back": "The answer says what is discussed but not why it is included."
    },
    {
      "front": "Trap: Overstated goal",
      "back": "The choice turns a limited illustration into a universal argument."
    },
    {
      "front": "Trap: Wrong rhetorical verb",
      "back": "For example, a concession acknowledges a point; a refutation argues against it."
    },
    {
      "front": "Trap: Local/global mismatch",
      "back": "The choice describes the entire passage when the question asks about one sentence, or vice versa."
    },
    {
      "front": "Trap: Invented audience effect",
      "back": "The answer claims the author wants to entertain or shock without textual support."
    },
    {
      "front": "Coach tip 1",
      "back": "Finish this sentence: “The author includes this in order to…”"
    },
    {
      "front": "Coach tip 2",
      "back": "Purpose answers usually contain both an action and an object."
    },
    {
      "front": "Coach tip 3",
      "back": "Do not confuse acknowledging a benefit with endorsing the whole position."
    },
    {
      "front": "Coach tip 4",
      "back": "Rhetorical questions often reframe or complicate rather than request information."
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
  "nextCourseId": "tone-attitude"
};
