import type { Course } from "./types";

export const textualEvidenceCourse: Course = {
  "id": "textual-evidence",
  "title": "Textual Evidence",
  "subtitle": "Match every claim with the strongest support.",
  "description": "Learn to identify the specific sentence, detail, or result that most directly supports a claim or interpretation.",
  "estimatedMinutes": 80,
  "difficulty": "Medium",
  "objectives": [
    "Restate a claim before searching for evidence.",
    "Distinguish direct support from background information.",
    "Combine related details when a claim has multiple parts.",
    "Prefer precise evidence over merely relevant information."
  ],
  "concepts": [
    {
      "title": "Evidence answers “How do you know?”",
      "body": "The best evidence directly demonstrates the claim rather than merely discussing the same topic."
    },
    {
      "title": "Specific beats general",
      "body": "Measured results, quotations, and concrete observations usually support claims more strongly than broad context."
    },
    {
      "title": "Match every part",
      "body": "When a claim contains two ideas, the evidence must support both."
    }
  ],
  "strategy": [
    {
      "title": "Underline the claim",
      "body": "Identify exactly what must be supported."
    },
    {
      "title": "Translate it",
      "body": "Restate the claim in simpler words."
    },
    {
      "title": "Scan for proof",
      "body": "Find data, quotations, or observations that demonstrate it."
    },
    {
      "title": "Compare directness",
      "body": "Choose the evidence with the shortest logical distance to the claim."
    },
    {
      "title": "Test completeness",
      "body": "Confirm that the evidence supports every important part."
    }
  ],
  "traps": [
    {
      "title": "Same topic, weak support",
      "body": "The choice discusses the subject but does not prove the claim."
    },
    {
      "title": "Background detail",
      "body": "The information provides context rather than evidence."
    },
    {
      "title": "Result without mechanism",
      "body": "The choice may show what happened but not why, when the claim concerns explanation."
    },
    {
      "title": "Partial evidence",
      "body": "The choice supports only one part of a compound claim."
    },
    {
      "title": "Expertise instead of evidence",
      "body": "A person’s title or profession does not substitute for textual proof."
    }
  ],
  "coachTips": [
    "Ask “How exactly does this sentence prove the claim?”",
    "The strongest evidence usually lets you explain the connection in one sentence.",
    "Do not choose a quotation merely because it contains the same words as the claim.",
    "Specific observations beat general statements."
  ],
  "workedExamples": [
    {
      "id": "ev-ex-1",
      "passage": "Marine biologist Lena Ortiz argues that artificial reefs can support fish populations when they are carefully placed and monitored. She notes that poorly designed structures may damage existing habitats, so reef projects should be evaluated individually.",
      "prompt": "Which quotation best supports the claim that Ortiz does not endorse every artificial reef project?",
      "choices": [
        {
          "text": "“can support fish populations”",
          "rationale": "This shows a possible benefit, not her limitation."
        },
        {
          "text": "“carefully placed and monitored”",
          "rationale": "This gives conditions but does not as directly show case-by-case judgment."
        },
        {
          "text": "“poorly designed structures may damage existing habitats”",
          "rationale": "This directly shows that some projects can be harmful."
        },
        {
          "text": "“support fish populations”",
          "rationale": "This repeats the benefit only."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-2",
      "passage": "Historian Dev Malik studies household account books because official tax records often omit informal work. Account books, he says, can reveal payments for childcare, repairs, and seasonal labor that governments never recorded.",
      "prompt": "Which detail best supports Malik’s reason for using household account books?",
      "choices": [
        {
          "text": "He is a historian.",
          "rationale": "His profession does not explain the source choice."
        },
        {
          "text": "Official records often omit informal work.",
          "rationale": "This directly explains why another source is needed."
        },
        {
          "text": "Governments collected taxes.",
          "rationale": "Tax collection alone is not the reason."
        },
        {
          "text": "Seasonal labor existed.",
          "rationale": "This is an example of omitted work, but the broader reason is stated more directly elsewhere."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-3",
      "passage": "A study found that students remembered more from a lecture when they took notes by hand than when they transcribed nearly every word on laptops. The researchers propose that handwriting encouraged students to select and reorganize ideas.",
      "prompt": "Which sentence provides the strongest evidence for the researchers’ proposed explanation?",
      "choices": [
        {
          "text": "Students remembered more from a lecture.",
          "rationale": "This is the result, not the mechanism."
        },
        {
          "text": "They took notes by hand.",
          "rationale": "This identifies the condition but not why it helped."
        },
        {
          "text": "Laptop users transcribed nearly every word.",
          "rationale": "This contrasts behaviors but does not fully state the proposed mechanism."
        },
        {
          "text": "Handwriting encouraged students to select and reorganize ideas.",
          "rationale": "This directly states the mechanism."
        }
      ],
      "answer": 3,
      "difficulty": "Hard",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-4",
      "passage": "Architect Mina Cho preserved the brick exterior of a former factory while converting the interior into apartments. Cho says the project succeeds because it accommodates new uses without erasing evidence of the site’s industrial past.",
      "prompt": "Which detail best supports the idea that the renovation combines preservation with adaptation?",
      "choices": [
        {
          "text": "The building contains apartments.",
          "rationale": "This shows adaptation but not preservation."
        },
        {
          "text": "The brick exterior was preserved while the interior was converted.",
          "rationale": "This directly includes both preservation and new use."
        },
        {
          "text": "The site has an industrial past.",
          "rationale": "This provides context only."
        },
        {
          "text": "Cho is an architect.",
          "rationale": "Her profession is irrelevant to the claim."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-5",
      "passage": "Economist Priya Sen found that a transit subsidy increased ridership most among workers with irregular schedules. She concludes that flexible access, not merely lower cost, shaped the program’s effect.",
      "prompt": "Which finding most directly supports Sen’s conclusion?",
      "choices": [
        {
          "text": "The program was a subsidy.",
          "rationale": "That establishes lower cost but not flexibility."
        },
        {
          "text": "Ridership increased.",
          "rationale": "This gives the overall result but not the subgroup pattern."
        },
        {
          "text": "The largest increase occurred among workers with irregular schedules.",
          "rationale": "This subgroup result supports the importance of flexible access."
        },
        {
          "text": "Sen is an economist.",
          "rationale": "Her profession is not evidence."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-6",
      "passage": "In her review, critic Ana Bell praises the novel’s vivid setting but argues that its final chapter resolves the conflict too quickly. She recommends the book while acknowledging that the ending is less developed than the earlier chapters.",
      "prompt": "Which statement best supports the claim that Bell’s evaluation is qualified rather than entirely positive?",
      "choices": [
        {
          "text": "She praises the vivid setting.",
          "rationale": "This is positive only."
        },
        {
          "text": "She recommends the book.",
          "rationale": "This is also positive."
        },
        {
          "text": "She argues that the final chapter resolves the conflict too quickly.",
          "rationale": "This criticism limits her praise."
        },
        {
          "text": "The novel has a final chapter.",
          "rationale": "That fact does not show evaluation."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-7",
      "passage": "Botanist Omar Lee observed that seedlings near mature trees survived drought better than isolated seedlings. Soil tests showed that fungal networks connected many roots in the clustered plots.",
      "prompt": "Which evidence best supports the hypothesis that mature trees may help nearby seedlings?",
      "choices": [
        {
          "text": "The study involved seedlings.",
          "rationale": "This is background only."
        },
        {
          "text": "Drought occurred.",
          "rationale": "This sets the condition but not the relationship."
        },
        {
          "text": "Seedlings near mature trees survived better, and roots were connected by fungal networks.",
          "rationale": "Together these observations support a possible helping mechanism."
        },
        {
          "text": "Some seedlings were isolated.",
          "rationale": "This identifies a comparison group but is weaker than the combined evidence."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-8",
      "passage": "A theater company introduced pay-what-you-can performances. Attendance increased most among first-time visitors, while attendance by regular subscribers stayed stable.",
      "prompt": "Which evidence most strongly supports the claim that the policy expanded the audience?",
      "choices": [
        {
          "text": "The company stages performances.",
          "rationale": "This is background."
        },
        {
          "text": "Attendance increased most among first-time visitors.",
          "rationale": "This directly indicates new audience members."
        },
        {
          "text": "Subscribers continued attending.",
          "rationale": "This shows retention but not expansion."
        },
        {
          "text": "Ticket prices varied.",
          "rationale": "The policy itself is not evidence of its effect."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-9",
      "passage": "Geologist Sara Kim argues that a valley was shaped by repeated floods rather than one catastrophic event. Sediment layers show several distinct deposits separated by periods of soil formation.",
      "prompt": "Which evidence best supports Kim’s argument?",
      "choices": [
        {
          "text": "The valley contains sediment.",
          "rationale": "Sediment alone does not show repeated events."
        },
        {
          "text": "The deposits are separated by periods of soil formation.",
          "rationale": "Separate deposits with intervening soil indicate multiple events over time."
        },
        {
          "text": "Floods can shape valleys.",
          "rationale": "This general fact is weaker than site-specific evidence."
        },
        {
          "text": "Kim is a geologist.",
          "rationale": "Expertise is not the direct evidence requested."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-10",
      "passage": "A school’s later start time was followed by improved attendance and fewer first-period absences. Grades, however, changed little during the first semester.",
      "prompt": "Which evidence best supports the claim that the policy affected attendance more clearly than academic performance?",
      "choices": [
        {
          "text": "The school changed its start time.",
          "rationale": "This identifies the policy only."
        },
        {
          "text": "Attendance improved and first-period absences fell, while grades changed little.",
          "rationale": "This directly compares the two outcomes."
        },
        {
          "text": "Grades were measured.",
          "rationale": "Measurement alone does not show relative effect."
        },
        {
          "text": "The first semester ended.",
          "rationale": "This is irrelevant."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    }
  ],
  "questions": [
    {
      "id": "ev-q-1",
      "passage": "A conservation group claims that a river cleanup improved habitat quality. After the cleanup, dissolved oxygen increased and two sensitive insect species returned.",
      "prompt": "Which evidence most directly supports the claim?",
      "choices": [
        {
          "text": "The river was cleaned.",
          "rationale": "This is the intervention, not its result."
        },
        {
          "text": "Dissolved oxygen increased and sensitive species returned.",
          "rationale": "Both outcomes directly indicate improved habitat quality."
        },
        {
          "text": "The group supports conservation.",
          "rationale": "Its mission is not evidence."
        },
        {
          "text": "Insects live near rivers.",
          "rationale": "This general fact is too broad."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-2",
      "passage": "Scholar Mei Wong argues that a diary was written for a private audience. The author uses abbreviations, leaves people unnamed, and never explains local events.",
      "prompt": "Which feature best supports Wong’s argument?",
      "choices": [
        {
          "text": "The diary mentions events.",
          "rationale": "That is true of many documents."
        },
        {
          "text": "The author assumes readers already know people and events.",
          "rationale": "Unexplained references strongly suggest a private or familiar audience."
        },
        {
          "text": "The diary has an author.",
          "rationale": "This is trivial."
        },
        {
          "text": "Some words are abbreviated.",
          "rationale": "This helps, but the assumption of shared knowledge is strongest."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-3",
      "passage": "A manufacturer says its new packaging reduces shipping damage. In a six-month trial, damaged-item reports fell from 4.2 percent to 1.1 percent.",
      "prompt": "Which evidence best supports the manufacturer’s claim?",
      "choices": [
        {
          "text": "The trial lasted six months.",
          "rationale": "Duration helps context but is not the main supporting result."
        },
        {
          "text": "The company changed its packaging.",
          "rationale": "This identifies the intervention."
        },
        {
          "text": "Damage reports fell from 4.2 percent to 1.1 percent.",
          "rationale": "The measured decline directly supports the claim."
        },
        {
          "text": "The items were shipped.",
          "rationale": "This is background."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-4",
      "passage": "Critic Noah Price argues that a film’s silence is purposeful rather than accidental. The soundtrack disappears whenever the protagonist avoids answering a difficult question.",
      "prompt": "Which detail best supports Price’s interpretation?",
      "choices": [
        {
          "text": "The film has a protagonist.",
          "rationale": "This is background."
        },
        {
          "text": "Silence repeatedly occurs at moments of avoidance.",
          "rationale": "The patterned connection supports intentional use."
        },
        {
          "text": "The soundtrack exists in other scenes.",
          "rationale": "This helps but is less direct than the repeated pattern."
        },
        {
          "text": "Some questions are difficult.",
          "rationale": "Difficulty does not establish purposeful silence."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-5",
      "passage": "A town claims that tree planting reduced summer heat downtown. Temperatures on shaded blocks averaged 2.3°C lower than on nearby unshaded blocks.",
      "prompt": "Which evidence best supports the claim?",
      "choices": [
        {
          "text": "The town planted trees.",
          "rationale": "This is the action, not the measured effect."
        },
        {
          "text": "Downtown has blocks.",
          "rationale": "Irrelevant."
        },
        {
          "text": "Shaded blocks were 2.3°C cooler than nearby unshaded blocks.",
          "rationale": "This comparison directly supports the cooling claim."
        },
        {
          "text": "Summer can be hot.",
          "rationale": "General background is weaker than local data."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-6",
      "passage": "Researcher Luis Vega proposes that bees use landmarks when returning to a hive. Bees released near familiar structures returned faster than bees released in visually altered locations.",
      "prompt": "Which result most directly supports Vega’s proposal?",
      "choices": [
        {
          "text": "Bees returned to a hive.",
          "rationale": "This does not distinguish how they navigated."
        },
        {
          "text": "Return times differed depending on whether visual landmarks were familiar.",
          "rationale": "The difference directly links landmarks to navigation."
        },
        {
          "text": "Some locations were altered.",
          "rationale": "This describes the method only."
        },
        {
          "text": "Vega studied bees.",
          "rationale": "This is irrelevant."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-7",
      "passage": "An editor says a revised article is more concise. The new version is 18 percent shorter and removes three examples that repeated earlier points.",
      "prompt": "Which evidence best supports the editor’s assessment?",
      "choices": [
        {
          "text": "The article was revised.",
          "rationale": "Revision does not necessarily mean concision."
        },
        {
          "text": "It is shorter and removes repetitive examples.",
          "rationale": "Both details directly demonstrate concision."
        },
        {
          "text": "It contains examples.",
          "rationale": "Examples can be concise or excessive."
        },
        {
          "text": "The editor read it.",
          "rationale": "Reading is not evidence of the quality."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-8",
      "passage": "A historian argues that merchants influenced city policy. Meeting records show that officials changed harbor fees after receiving a petition signed by major trading firms.",
      "prompt": "Which evidence best supports the historian’s argument?",
      "choices": [
        {
          "text": "The city had a harbor.",
          "rationale": "Background only."
        },
        {
          "text": "Trading firms signed a petition.",
          "rationale": "This shows advocacy, but not necessarily influence by itself."
        },
        {
          "text": "Officials changed fees after receiving the merchants’ petition.",
          "rationale": "The sequence directly supports influence."
        },
        {
          "text": "Meeting records exist.",
          "rationale": "The existence of records is not the substantive evidence."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-9",
      "passage": "A teacher claims that peer feedback improved student revisions. Drafts submitted after peer review contained clearer thesis statements and more specific evidence.",
      "prompt": "Which evidence best supports the claim?",
      "choices": [
        {
          "text": "Students wrote drafts.",
          "rationale": "Background only."
        },
        {
          "text": "Students participated in peer review.",
          "rationale": "This is the intervention, not the outcome."
        },
        {
          "text": "Later drafts showed clearer theses and more specific evidence.",
          "rationale": "These measured improvements support the claim."
        },
        {
          "text": "The teacher assigned writing.",
          "rationale": "Irrelevant to whether peer feedback helped."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-q-10",
      "passage": "A musicologist argues that a composer borrowed from folk traditions. The symphony uses a melody documented in regional songs decades earlier.",
      "prompt": "Which evidence most directly supports the argument?",
      "choices": [
        {
          "text": "The work is a symphony.",
          "rationale": "Genre alone does not show borrowing."
        },
        {
          "text": "A matching melody appears in earlier regional songs.",
          "rationale": "The documented earlier melody directly supports borrowing."
        },
        {
          "text": "The composer wrote music.",
          "rationale": "Trivial."
        },
        {
          "text": "Folk traditions vary by region.",
          "rationale": "General context is weaker than the specific melodic match."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Selecting evidence"
    },
    {
      "id": "ev-ex-1b",
      "passage": "Marine biologist Lena Ortiz argues that artificial reefs can support fish populations when they are carefully placed and monitored. She notes that poorly designed structures may damage existing habitats, so reef projects should be evaluated individually.",
      "prompt": "Which quotation best supports the claim that Ortiz does not endorse every artificial reef project?",
      "choices": [
        {
          "text": "“can support fish populations”",
          "rationale": "This shows a possible benefit, not her limitation."
        },
        {
          "text": "“carefully placed and monitored”",
          "rationale": "This gives conditions but does not as directly show case-by-case judgment."
        },
        {
          "text": "“poorly designed structures may damage existing habitats”",
          "rationale": "This directly shows that some projects can be harmful."
        },
        {
          "text": "“support fish populations”",
          "rationale": "This repeats the benefit only."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-2b",
      "passage": "Historian Dev Malik studies household account books because official tax records often omit informal work. Account books, he says, can reveal payments for childcare, repairs, and seasonal labor that governments never recorded.",
      "prompt": "Which detail best supports Malik’s reason for using household account books?",
      "choices": [
        {
          "text": "He is a historian.",
          "rationale": "His profession does not explain the source choice."
        },
        {
          "text": "Official records often omit informal work.",
          "rationale": "This directly explains why another source is needed."
        },
        {
          "text": "Governments collected taxes.",
          "rationale": "Tax collection alone is not the reason."
        },
        {
          "text": "Seasonal labor existed.",
          "rationale": "This is an example of omitted work, but the broader reason is stated more directly elsewhere."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-3b",
      "passage": "A study found that students remembered more from a lecture when they took notes by hand than when they transcribed nearly every word on laptops. The researchers propose that handwriting encouraged students to select and reorganize ideas.",
      "prompt": "Which sentence provides the strongest evidence for the researchers’ proposed explanation?",
      "choices": [
        {
          "text": "Students remembered more from a lecture.",
          "rationale": "This is the result, not the mechanism."
        },
        {
          "text": "They took notes by hand.",
          "rationale": "This identifies the condition but not why it helped."
        },
        {
          "text": "Laptop users transcribed nearly every word.",
          "rationale": "This contrasts behaviors but does not fully state the proposed mechanism."
        },
        {
          "text": "Handwriting encouraged students to select and reorganize ideas.",
          "rationale": "This directly states the mechanism."
        }
      ],
      "answer": 3,
      "difficulty": "Hard",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-4b",
      "passage": "Architect Mina Cho preserved the brick exterior of a former factory while converting the interior into apartments. Cho says the project succeeds because it accommodates new uses without erasing evidence of the site’s industrial past.",
      "prompt": "Which detail best supports the idea that the renovation combines preservation with adaptation?",
      "choices": [
        {
          "text": "The building contains apartments.",
          "rationale": "This shows adaptation but not preservation."
        },
        {
          "text": "The brick exterior was preserved while the interior was converted.",
          "rationale": "This directly includes both preservation and new use."
        },
        {
          "text": "The site has an industrial past.",
          "rationale": "This provides context only."
        },
        {
          "text": "Cho is an architect.",
          "rationale": "Her profession is irrelevant to the claim."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-5b",
      "passage": "Economist Priya Sen found that a transit subsidy increased ridership most among workers with irregular schedules. She concludes that flexible access, not merely lower cost, shaped the program’s effect.",
      "prompt": "Which finding most directly supports Sen’s conclusion?",
      "choices": [
        {
          "text": "The program was a subsidy.",
          "rationale": "That establishes lower cost but not flexibility."
        },
        {
          "text": "Ridership increased.",
          "rationale": "This gives the overall result but not the subgroup pattern."
        },
        {
          "text": "The largest increase occurred among workers with irregular schedules.",
          "rationale": "This subgroup result supports the importance of flexible access."
        },
        {
          "text": "Sen is an economist.",
          "rationale": "Her profession is not evidence."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-6b",
      "passage": "In her review, critic Ana Bell praises the novel’s vivid setting but argues that its final chapter resolves the conflict too quickly. She recommends the book while acknowledging that the ending is less developed than the earlier chapters.",
      "prompt": "Which statement best supports the claim that Bell’s evaluation is qualified rather than entirely positive?",
      "choices": [
        {
          "text": "She praises the vivid setting.",
          "rationale": "This is positive only."
        },
        {
          "text": "She recommends the book.",
          "rationale": "This is also positive."
        },
        {
          "text": "She argues that the final chapter resolves the conflict too quickly.",
          "rationale": "This criticism limits her praise."
        },
        {
          "text": "The novel has a final chapter.",
          "rationale": "That fact does not show evaluation."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-7b",
      "passage": "Botanist Omar Lee observed that seedlings near mature trees survived drought better than isolated seedlings. Soil tests showed that fungal networks connected many roots in the clustered plots.",
      "prompt": "Which evidence best supports the hypothesis that mature trees may help nearby seedlings?",
      "choices": [
        {
          "text": "The study involved seedlings.",
          "rationale": "This is background only."
        },
        {
          "text": "Drought occurred.",
          "rationale": "This sets the condition but not the relationship."
        },
        {
          "text": "Seedlings near mature trees survived better, and roots were connected by fungal networks.",
          "rationale": "Together these observations support a possible helping mechanism."
        },
        {
          "text": "Some seedlings were isolated.",
          "rationale": "This identifies a comparison group but is weaker than the combined evidence."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-8b",
      "passage": "A theater company introduced pay-what-you-can performances. Attendance increased most among first-time visitors, while attendance by regular subscribers stayed stable.",
      "prompt": "Which evidence most strongly supports the claim that the policy expanded the audience?",
      "choices": [
        {
          "text": "The company stages performances.",
          "rationale": "This is background."
        },
        {
          "text": "Attendance increased most among first-time visitors.",
          "rationale": "This directly indicates new audience members."
        },
        {
          "text": "Subscribers continued attending.",
          "rationale": "This shows retention but not expansion."
        },
        {
          "text": "Ticket prices varied.",
          "rationale": "The policy itself is not evidence of its effect."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-9b",
      "passage": "Geologist Sara Kim argues that a valley was shaped by repeated floods rather than one catastrophic event. Sediment layers show several distinct deposits separated by periods of soil formation.",
      "prompt": "Which evidence best supports Kim’s argument?",
      "choices": [
        {
          "text": "The valley contains sediment.",
          "rationale": "Sediment alone does not show repeated events."
        },
        {
          "text": "The deposits are separated by periods of soil formation.",
          "rationale": "Separate deposits with intervening soil indicate multiple events over time."
        },
        {
          "text": "Floods can shape valleys.",
          "rationale": "This general fact is weaker than site-specific evidence."
        },
        {
          "text": "Kim is a geologist.",
          "rationale": "Expertise is not the direct evidence requested."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    },
    {
      "id": "ev-ex-10b",
      "passage": "A school’s later start time was followed by improved attendance and fewer first-period absences. Grades, however, changed little during the first semester.",
      "prompt": "Which evidence best supports the claim that the policy affected attendance more clearly than academic performance?",
      "choices": [
        {
          "text": "The school changed its start time.",
          "rationale": "This identifies the policy only."
        },
        {
          "text": "Attendance improved and first-period absences fell, while grades changed little.",
          "rationale": "This directly compares the two outcomes."
        },
        {
          "text": "Grades were measured.",
          "rationale": "Measurement alone does not show relative effect."
        },
        {
          "text": "The first semester ended.",
          "rationale": "This is irrelevant."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Selecting evidence",
      "walkthrough": [
        "Restate the claim in precise terms.",
        "Locate the detail that directly proves or illustrates that claim.",
        "Prefer specific evidence over background or general context."
      ]
    }
  ],
  "flashcards": [
    {
      "front": "Direct evidence",
      "back": "A detail that clearly proves or illustrates a claim."
    },
    {
      "front": "Background information",
      "back": "Context that may be relevant but does not directly prove the claim."
    },
    {
      "front": "Compound claim",
      "back": "A claim with more than one part, all of which need support."
    },
    {
      "front": "Specific evidence",
      "back": "A quotation, measurement, or observation tied closely to the claim."
    },
    {
      "front": "Relevance",
      "back": "Connection to the topic; relevance alone may not equal strong support."
    },
    {
      "front": "Evidence chain",
      "back": "The logical link from detail to claim."
    },
    {
      "front": "Evidence answers “How do you know?”",
      "back": "The best evidence directly demonstrates the claim rather than merely discussing the same topic."
    },
    {
      "front": "Specific beats general",
      "back": "Measured results, quotations, and concrete observations usually support claims more strongly than broad context."
    },
    {
      "front": "Match every part",
      "back": "When a claim contains two ideas, the evidence must support both."
    },
    {
      "front": "Step 1: Underline the claim",
      "back": "Identify exactly what must be supported."
    },
    {
      "front": "Step 2: Translate it",
      "back": "Restate the claim in simpler words."
    },
    {
      "front": "Step 3: Scan for proof",
      "back": "Find data, quotations, or observations that demonstrate it."
    },
    {
      "front": "Step 4: Compare directness",
      "back": "Choose the evidence with the shortest logical distance to the claim."
    },
    {
      "front": "Step 5: Test completeness",
      "back": "Confirm that the evidence supports every important part."
    },
    {
      "front": "Trap: Same topic, weak support",
      "back": "The choice discusses the subject but does not prove the claim."
    },
    {
      "front": "Trap: Background detail",
      "back": "The information provides context rather than evidence."
    },
    {
      "front": "Trap: Result without mechanism",
      "back": "The choice may show what happened but not why, when the claim concerns explanation."
    },
    {
      "front": "Trap: Partial evidence",
      "back": "The choice supports only one part of a compound claim."
    },
    {
      "front": "Trap: Expertise instead of evidence",
      "back": "A person’s title or profession does not substitute for textual proof."
    },
    {
      "front": "Coach tip 1",
      "back": "Ask “How exactly does this sentence prove the claim?”"
    },
    {
      "front": "Coach tip 2",
      "back": "The strongest evidence usually lets you explain the connection in one sentence."
    },
    {
      "front": "Coach tip 3",
      "back": "Do not choose a quotation merely because it contains the same words as the claim."
    },
    {
      "front": "Coach tip 4",
      "back": "Specific observations beat general statements."
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
  "nextCourseId": "vocabulary-in-context"
};
