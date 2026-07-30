import { expandedTone, expandedTransitionWords, expandedCommonSatVerbs, expandedLogic, expandedAdvancedVocabulary, expandedMixedReview, expandedFinalReview } from "./expandedModules";
import { literatureVocabularyContent } from "./literatureVocabulary";
import { humanitiesVocabularyContent } from "./humanitiesVocabulary";
import { historyVocabularyContent } from "./historyVocabulary";
import { governmentVocabularyContent } from "./governmentVocabulary";
import { collocationsContent } from "./collocations";
import { wordRootsAffixesContent } from "./wordRootsAffixes";
import { scienceVocabularyContent } from "./scienceVocabulary";
import { socialScienceVocabularyContent } from "./socialScienceVocabulary";
import { economicsVocabularyContent } from "./economicsVocabulary";

export interface PracticeConcept { title: string; description: string; }
export interface PracticeVocabularyEntry { word: string; definition: string; example: string; partOfSpeech?: string; synonyms?: string[]; collocations?: string[]; usageNote?: string; group?: string; }
export interface PracticeQuizItem { question: string; choices: string[]; answer: number; explanation: string; }
export interface PracticeModuleContent { id: string; number: string; title: string; tagline: string; strategy: string[]; concepts: PracticeConcept[]; vocabulary: PracticeVocabularyEntry[]; quiz: PracticeQuizItem[]; }

export const practiceModuleContent: Record<string, PracticeModuleContent> = {
  "word-roots-affixes": wordRootsAffixesContent,
  "collocations": collocationsContent,
  "tone": {
    "id": "tone",
    "title": "Tone & Attitude",
    "number": "02",
    "tagline": "Recognize the writer’s attitude, confidence, and emotional stance.",
    "strategy": [
      "Identify the subject",
      "Notice evaluative language",
      "Measure intensity",
      "Separate tone from topic",
      "Choose the most precise label"
    ],
    "concepts": [
      {
        "title": "Positive",
        "description": "admiring, enthusiastic, appreciative"
      },
      {
        "title": "Negative",
        "description": "critical, dismissive, resentful"
      },
      {
        "title": "Neutral",
        "description": "objective, detached, analytical"
      },
      {
        "title": "Uncertain",
        "description": "tentative, skeptical, cautious"
      },
      {
        "title": "Mixed",
        "description": "qualified, ambivalent, bittersweet"
      }
    ],
    "vocab": [
      [
        "admiring",
        "showing warm approval",
        "The biographer’s admiring description emphasizes the inventor’s persistence."
      ],
      [
        "analytical",
        "focused on careful examination",
        "The essay maintains an analytical tone while comparing both studies."
      ],
      [
        "cautious",
        "careful about claims or conclusions",
        "The researcher is cautious because the sample is small."
      ],
      [
        "dismissive",
        "showing that something is unworthy of attention",
        "The critic’s dismissive remark ignores the novel’s complexity."
      ],
      [
        "enthusiastic",
        "showing strong excitement or approval",
        "The reviewer is enthusiastic about the new technique."
      ],
      [
        "objective",
        "based on facts rather than feelings",
        "The report uses an objective tone and presents measured results."
      ],
      [
        "skeptical",
        "not easily convinced",
        "The author remains skeptical until stronger evidence appears."
      ],
      [
        "tentative",
        "uncertain or not fully decided",
        "The conclusion is tentative because the data are preliminary."
      ]
    ],
    "quiz": [
      {
        "question": "The author praises the architect’s ingenuity and calls the building ‘remarkably elegant.’ Which tone best fits?",
        "choices": [
          "Admiring",
          "Dismissive",
          "Skeptical",
          "Neutral"
        ],
        "answer": 0,
        "explanation": "Praise and strongly positive wording create an admiring tone."
      },
      {
        "question": "The scientist repeatedly notes that the results ‘may’ suggest a pattern. The tone is primarily...",
        "choices": [
          "Enthusiastic",
          "Tentative",
          "Resentful",
          "Sarcastic"
        ],
        "answer": 1,
        "explanation": "Words such as may signal uncertainty."
      },
      {
        "question": "A passage presents statistics without praise or criticism. Its tone is most likely...",
        "choices": [
          "Objective",
          "Bitter",
          "Playful",
          "Alarmed"
        ],
        "answer": 0,
        "explanation": "Fact-focused language without judgment is objective."
      },
      {
        "question": "The reviewer calls the proposal ‘hardly worth serious consideration.’ The tone is...",
        "choices": [
          "Admiring",
          "Dismissive",
          "Hopeful",
          "Cautious"
        ],
        "answer": 1,
        "explanation": "The wording rejects the proposal as unworthy of attention."
      },
      {
        "question": "The author questions whether one small experiment can support a broad claim. The tone is...",
        "choices": [
          "Skeptical",
          "Celebratory",
          "Nostalgic",
          "Humorous"
        ],
        "answer": 0,
        "explanation": "Questioning insufficient evidence is skeptical."
      }
    ],
    "vocabulary": [
      {
        "word": "admiring",
        "definition": "showing warm approval",
        "example": "The biographer’s admiring description emphasizes the inventor’s persistence."
      },
      {
        "word": "analytical",
        "definition": "focused on careful examination",
        "example": "The essay maintains an analytical tone while comparing both studies."
      },
      {
        "word": "cautious",
        "definition": "careful about claims or conclusions",
        "example": "The researcher is cautious because the sample is small."
      },
      {
        "word": "dismissive",
        "definition": "showing that something is unworthy of attention",
        "example": "The critic’s dismissive remark ignores the novel’s complexity."
      },
      {
        "word": "enthusiastic",
        "definition": "showing strong excitement or approval",
        "example": "The reviewer is enthusiastic about the new technique."
      },
      {
        "word": "objective",
        "definition": "based on facts rather than feelings",
        "example": "The report uses an objective tone and presents measured results."
      },
      {
        "word": "skeptical",
        "definition": "not easily convinced",
        "example": "The author remains skeptical until stronger evidence appears."
      },
      {
        "word": "tentative",
        "definition": "uncertain or not fully decided",
        "example": "The conclusion is tentative because the data are preliminary."
      }
    ]
  },
  "transition-words": {
    "id": "transition-words",
    "title": "Transition Words",
    "number": "03",
    "tagline": "Choose connectors that express the exact logical relationship between ideas.",
    "strategy": [
      "Summarize sentence one",
      "Summarize sentence two",
      "Name the relationship",
      "Ignore punctuation first",
      "Test the transition in context"
    ],
    "concepts": [
      {
        "title": "Continuation",
        "description": "furthermore, moreover, similarly"
      },
      {
        "title": "Contrast",
        "description": "however, nevertheless, instead"
      },
      {
        "title": "Cause and result",
        "description": "therefore, consequently, thus"
      },
      {
        "title": "Example",
        "description": "for example, specifically, namely"
      },
      {
        "title": "Conclusion",
        "description": "overall, ultimately, in sum"
      }
    ],
    "vocab": [
      [
        "consequently",
        "as a result",
        "The sample was contaminated; consequently, the trial was repeated."
      ],
      [
        "furthermore",
        "in addition",
        "The device is inexpensive; furthermore, it is easy to repair."
      ],
      [
        "however",
        "in contrast",
        "The theory is elegant; however, the evidence is weak."
      ],
      [
        "likewise",
        "in the same way",
        "The first group improved; likewise, the second group made gains."
      ],
      [
        "meanwhile",
        "at the same time or in contrast",
        "The north expanded rapidly; meanwhile, the south grew slowly."
      ],
      [
        "nevertheless",
        "despite that",
        "The route was difficult; nevertheless, the team continued."
      ],
      [
        "specifically",
        "to state an exact detail",
        "Several factors mattered; specifically, temperature had the largest effect."
      ],
      [
        "therefore",
        "for that reason",
        "Demand increased; therefore, prices rose."
      ]
    ],
    "quiz": [
      {
        "question": "The method is inexpensive. ___, it requires little training.",
        "choices": [
          "However",
          "Furthermore",
          "Instead",
          "Nevertheless"
        ],
        "answer": 1,
        "explanation": "The second sentence adds another advantage."
      },
      {
        "question": "The evidence was limited. ___, the researchers avoided a firm conclusion.",
        "choices": [
          "Therefore",
          "For example",
          "Similarly",
          "Meanwhile"
        ],
        "answer": 0,
        "explanation": "The second idea is a result of the first."
      },
      {
        "question": "The two paintings use similar colors. ___, both rely on geometric forms.",
        "choices": [
          "Likewise",
          "However",
          "Instead",
          "Consequently"
        ],
        "answer": 0,
        "explanation": "The ideas are parallel."
      },
      {
        "question": "The policy was unpopular. ___, lawmakers approved it.",
        "choices": [
          "Furthermore",
          "Nevertheless",
          "For example",
          "Therefore"
        ],
        "answer": 1,
        "explanation": "Approval occurred despite the unpopularity."
      },
      {
        "question": "Many variables affected growth. ___, rainfall explained most of the variation.",
        "choices": [
          "Specifically",
          "Meanwhile",
          "Otherwise",
          "Likewise"
        ],
        "answer": 0,
        "explanation": "The second sentence identifies one exact factor."
      }
    ],
    "vocabulary": [
      {
        "word": "consequently",
        "definition": "as a result",
        "example": "The sample was contaminated; consequently, the trial was repeated."
      },
      {
        "word": "furthermore",
        "definition": "in addition",
        "example": "The device is inexpensive; furthermore, it is easy to repair."
      },
      {
        "word": "however",
        "definition": "in contrast",
        "example": "The theory is elegant; however, the evidence is weak."
      },
      {
        "word": "likewise",
        "definition": "in the same way",
        "example": "The first group improved; likewise, the second group made gains."
      },
      {
        "word": "meanwhile",
        "definition": "at the same time or in contrast",
        "example": "The north expanded rapidly; meanwhile, the south grew slowly."
      },
      {
        "word": "nevertheless",
        "definition": "despite that",
        "example": "The route was difficult; nevertheless, the team continued."
      },
      {
        "word": "specifically",
        "definition": "to state an exact detail",
        "example": "Several factors mattered; specifically, temperature had the largest effect."
      },
      {
        "word": "therefore",
        "definition": "for that reason",
        "example": "Demand increased; therefore, prices rose."
      }
    ]
  },
  "common-sat-verbs": {
    "id": "common-sat-verbs",
    "title": "Common SAT Verbs",
    "number": "04",
    "tagline": "Master the analytical verbs used in passages and question stems.",
    "strategy": [
      "Find the verb’s object",
      "Identify the writer’s action",
      "Distinguish claim from evidence",
      "Check degree of certainty",
      "Paraphrase in simple English"
    ],
    "concepts": [
      {
        "title": "Claiming",
        "description": "assert, contend, maintain"
      },
      {
        "title": "Showing",
        "description": "demonstrate, illustrate, reveal"
      },
      {
        "title": "Suggesting",
        "description": "imply, indicate, propose"
      },
      {
        "title": "Emphasizing",
        "description": "underscore, highlight, stress"
      },
      {
        "title": "Questioning",
        "description": "challenge, qualify, dispute"
      }
    ],
    "vocab": [
      [
        "assert",
        "state confidently",
        "The historian asserts that trade shaped the city’s growth."
      ],
      [
        "contend",
        "argue or maintain",
        "The author contends that the reform produced mixed results."
      ],
      [
        "demonstrate",
        "show with evidence",
        "The experiment demonstrates a relationship between light and growth."
      ],
      [
        "illustrate",
        "clarify with an example",
        "The anecdote illustrates the difficulty of migration."
      ],
      [
        "imply",
        "suggest without stating directly",
        "The narrator implies that the decision was regretted."
      ],
      [
        "indicate",
        "point to or show",
        "The data indicate a gradual decline."
      ],
      [
        "qualify",
        "limit or modify a claim",
        "The final paragraph qualifies the earlier conclusion."
      ],
      [
        "underscore",
        "emphasize",
        "The contrast underscores the importance of timing."
      ]
    ],
    "quiz": [
      {
        "question": "Which verb means ‘state confidently’ ?",
        "choices": [
          "Assert",
          "Imply",
          "Qualify",
          "Illustrate"
        ],
        "answer": 0,
        "explanation": "Assert means to state a claim confidently."
      },
      {
        "question": "A chart provides evidence of a decline. It most directly...",
        "choices": [
          "demonstrates the decline",
          "qualifies the decline",
          "disputes the decline",
          "imagines the decline"
        ],
        "answer": 0,
        "explanation": "Demonstrate means show with evidence."
      },
      {
        "question": "An author hints but does not state. The author...",
        "choices": [
          "underscores",
          "implies",
          "asserts",
          "illustrates"
        ],
        "answer": 1,
        "explanation": "Imply means suggest indirectly."
      },
      {
        "question": "A later sentence narrows an earlier broad claim. It...",
        "choices": [
          "qualifies it",
          "illustrates it",
          "asserts it",
          "reveals it"
        ],
        "answer": 0,
        "explanation": "Qualify limits or modifies a claim."
      },
      {
        "question": "An example makes an abstract point clearer. It...",
        "choices": [
          "contends",
          "illustrates",
          "disputes",
          "maintains"
        ],
        "answer": 1,
        "explanation": "Illustrate means clarify through an example."
      }
    ],
    "vocabulary": [
      {
        "word": "assert",
        "definition": "state confidently",
        "example": "The historian asserts that trade shaped the city’s growth."
      },
      {
        "word": "contend",
        "definition": "argue or maintain",
        "example": "The author contends that the reform produced mixed results."
      },
      {
        "word": "demonstrate",
        "definition": "show with evidence",
        "example": "The experiment demonstrates a relationship between light and growth."
      },
      {
        "word": "illustrate",
        "definition": "clarify with an example",
        "example": "The anecdote illustrates the difficulty of migration."
      },
      {
        "word": "imply",
        "definition": "suggest without stating directly",
        "example": "The narrator implies that the decision was regretted."
      },
      {
        "word": "indicate",
        "definition": "point to or show",
        "example": "The data indicate a gradual decline."
      },
      {
        "word": "qualify",
        "definition": "limit or modify a claim",
        "example": "The final paragraph qualifies the earlier conclusion."
      },
      {
        "word": "underscore",
        "definition": "emphasize",
        "example": "The contrast underscores the importance of timing."
      }
    ]
  },
  "logic": {
    "id": "logic",
    "title": "Logic & Argument",
    "number": "05",
    "tagline": "Trace claims, evidence, assumptions, conclusions, and counterarguments.",
    "strategy": [
      "Locate the main claim",
      "Mark supporting evidence",
      "Identify the hidden assumption",
      "Find objections or limits",
      "Test whether the conclusion follows"
    ],
    "concepts": [
      {
        "title": "Claim",
        "description": "the point the author wants accepted"
      },
      {
        "title": "Evidence",
        "description": "facts or examples supporting a claim"
      },
      {
        "title": "Assumption",
        "description": "an unstated idea the reasoning depends on"
      },
      {
        "title": "Counterargument",
        "description": "an opposing view addressed by the author"
      },
      {
        "title": "Conclusion",
        "description": "the final inference drawn from the reasoning"
      }
    ],
    "vocab": [
      [
        "assumption",
        "an unstated belief taken for granted",
        "The argument depends on the assumption that all voters received the notice."
      ],
      [
        "claim",
        "a statement presented as true",
        "The article’s central claim concerns access to public transit."
      ],
      [
        "conclusion",
        "a judgment reached from evidence",
        "The conclusion follows only if the survey is representative."
      ],
      [
        "counterargument",
        "an opposing line of reasoning",
        "The author addresses a counterargument about cost."
      ],
      [
        "evidence",
        "information supporting a claim",
        "The study provides evidence from three independent trials."
      ],
      [
        "inference",
        "a conclusion drawn from clues",
        "The reader can make an inference from the repeated imagery."
      ],
      [
        "premise",
        "a supporting statement in an argument",
        "The first premise states that demand is rising."
      ],
      [
        "rebuttal",
        "a response that challenges an objection",
        "The final paragraph offers a rebuttal to critics."
      ]
    ],
    "quiz": [
      {
        "question": "A statistic used to support a proposal is best described as...",
        "choices": [
          "evidence",
          "an assumption",
          "a conclusion",
          "a counterargument"
        ],
        "answer": 0,
        "explanation": "A supporting statistic is evidence."
      },
      {
        "question": "An unstated idea required for reasoning is an...",
        "choices": [
          "example",
          "assumption",
          "rebuttal",
          "summary"
        ],
        "answer": 1,
        "explanation": "An assumption is taken for granted rather than directly stated."
      },
      {
        "question": "A response to an opposing view is a...",
        "choices": [
          "premise",
          "rebuttal",
          "claim",
          "inference"
        ],
        "answer": 1,
        "explanation": "A rebuttal answers or challenges an objection."
      },
      {
        "question": "The point an author wants readers to accept is the...",
        "choices": [
          "claim",
          "detail",
          "transition",
          "quotation"
        ],
        "answer": 0,
        "explanation": "The main claim is the central position."
      },
      {
        "question": "A judgment drawn from evidence is a...",
        "choices": [
          "counterargument",
          "conclusion",
          "premise",
          "definition"
        ],
        "answer": 1,
        "explanation": "A conclusion is the result of the reasoning."
      }
    ],
    "vocabulary": [
      {
        "word": "assumption",
        "definition": "an unstated belief taken for granted",
        "example": "The argument depends on the assumption that all voters received the notice."
      },
      {
        "word": "claim",
        "definition": "a statement presented as true",
        "example": "The article’s central claim concerns access to public transit."
      },
      {
        "word": "conclusion",
        "definition": "a judgment reached from evidence",
        "example": "The conclusion follows only if the survey is representative."
      },
      {
        "word": "counterargument",
        "definition": "an opposing line of reasoning",
        "example": "The author addresses a counterargument about cost."
      },
      {
        "word": "evidence",
        "definition": "information supporting a claim",
        "example": "The study provides evidence from three independent trials."
      },
      {
        "word": "inference",
        "definition": "a conclusion drawn from clues",
        "example": "The reader can make an inference from the repeated imagery."
      },
      {
        "word": "premise",
        "definition": "a supporting statement in an argument",
        "example": "The first premise states that demand is rising."
      },
      {
        "word": "rebuttal",
        "definition": "a response that challenges an objection",
        "example": "The final paragraph offers a rebuttal to critics."
      }
    ]
  },
  "science": {
    "id": "science",
    "title": "Science",
    "number": "06",
    "tagline": "Read experiments, data, hypotheses, and scientific explanations with precision.",
    "strategy": [
      "Identify the research question",
      "Separate variables",
      "Read trends before numbers",
      "Distinguish correlation from causation",
      "Match claims to evidence"
    ],
    "concepts": [
      {
        "title": "Hypothesis",
        "description": "a testable proposed explanation"
      },
      {
        "title": "Variable",
        "description": "a factor that can change"
      },
      {
        "title": "Control",
        "description": "a comparison condition"
      },
      {
        "title": "Replication",
        "description": "repeating a study"
      },
      {
        "title": "Correlation",
        "description": "an association that may not be causal"
      }
    ],
    "vocab": [
      [
        "causal",
        "involving cause and effect",
        "The study cannot establish a causal relationship from correlation alone."
      ],
      [
        "control",
        "a comparison condition in an experiment",
        "The untreated plants served as the control."
      ],
      [
        "empirical",
        "based on observation or experiment",
        "The theory gained empirical support from field measurements."
      ],
      [
        "hypothesis",
        "a testable proposed explanation",
        "The team tested the hypothesis that heat speeds the reaction."
      ],
      [
        "replicate",
        "repeat to check reliability",
        "Other laboratories attempted to replicate the finding."
      ],
      [
        "sample",
        "a subset studied to represent a larger group",
        "The sample included 300 participants."
      ],
      [
        "variable",
        "a factor that can change",
        "Temperature was the independent variable."
      ],
      [
        "valid",
        "well founded or accurately measured",
        "The instrument must be calibrated for the results to be valid."
      ]
    ],
    "quiz": [
      {
        "question": "A proposed explanation that can be tested is a...",
        "choices": [
          "hypothesis",
          "control",
          "sample",
          "correlation"
        ],
        "answer": 0,
        "explanation": "A hypothesis is a testable explanation."
      },
      {
        "question": "Repeating an experiment mainly helps assess...",
        "choices": [
          "replication and reliability",
          "tone",
          "symbolism",
          "scarcity"
        ],
        "answer": 0,
        "explanation": "Replication checks whether a result can be reproduced."
      },
      {
        "question": "A relationship between two variables does not necessarily prove...",
        "choices": [
          "a sample",
          "causation",
          "measurement",
          "variation"
        ],
        "answer": 1,
        "explanation": "Correlation alone does not establish causation."
      },
      {
        "question": "The group that does not receive the treatment is often the...",
        "choices": [
          "variable",
          "control",
          "hypothesis",
          "outcome"
        ],
        "answer": 1,
        "explanation": "The control provides a basis for comparison."
      },
      {
        "question": "Evidence based on observation is...",
        "choices": [
          "empirical",
          "arbitrary",
          "figurative",
          "implicit"
        ],
        "answer": 0,
        "explanation": "Empirical evidence comes from observation or experiment."
      }
    ],
    "vocabulary": [
      {
        "word": "causal",
        "definition": "involving cause and effect",
        "example": "The study cannot establish a causal relationship from correlation alone."
      },
      {
        "word": "control",
        "definition": "a comparison condition in an experiment",
        "example": "The untreated plants served as the control."
      },
      {
        "word": "empirical",
        "definition": "based on observation or experiment",
        "example": "The theory gained empirical support from field measurements."
      },
      {
        "word": "hypothesis",
        "definition": "a testable proposed explanation",
        "example": "The team tested the hypothesis that heat speeds the reaction."
      },
      {
        "word": "replicate",
        "definition": "repeat to check reliability",
        "example": "Other laboratories attempted to replicate the finding."
      },
      {
        "word": "sample",
        "definition": "a subset studied to represent a larger group",
        "example": "The sample included 300 participants."
      },
      {
        "word": "variable",
        "definition": "a factor that can change",
        "example": "Temperature was the independent variable."
      },
      {
        "word": "valid",
        "definition": "well founded or accurately measured",
        "example": "The instrument must be calibrated for the results to be valid."
      }
    ]
  },
  "humanities": {
    "id": "humanities",
    "title": "Humanities",
    "number": "07",
    "tagline": "Analyze writing about art, music, philosophy, architecture, and culture.",
    "strategy": [
      "Identify the work or idea",
      "Locate the critic’s claim",
      "Notice interpretation versus fact",
      "Track historical context",
      "Connect examples to the thesis"
    ],
    "concepts": [
      {
        "title": "Aesthetics",
        "description": "principles of beauty and artistic value"
      },
      {
        "title": "Interpretation",
        "description": "an explanation of meaning"
      },
      {
        "title": "Context",
        "description": "historical or cultural circumstances"
      },
      {
        "title": "Medium",
        "description": "the material or form used"
      },
      {
        "title": "Critique",
        "description": "careful evaluation of a work or idea"
      }
    ],
    "vocab": [
      [
        "aesthetic",
        "related to beauty or artistic value",
        "The museum emphasizes the sculpture’s aesthetic qualities."
      ],
      [
        "depict",
        "represent in art or language",
        "The mural depicts workers rebuilding the city."
      ],
      [
        "evoke",
        "bring a feeling or memory to mind",
        "The music evokes a sense of distance and loss."
      ],
      [
        "interpret",
        "explain the meaning of",
        "Critics interpret the repeated circle as a symbol of continuity."
      ],
      [
        "medium",
        "the material or form used by an artist",
        "The artist chose glass as her primary medium."
      ],
      [
        "motif",
        "a recurring element with significance",
        "A river motif appears throughout the exhibition."
      ],
      [
        "perspective",
        "a particular viewpoint",
        "The essay examines the painting from a feminist perspective."
      ],
      [
        "tradition",
        "a practice or style passed down over time",
        "The composer adapts a regional musical tradition."
      ]
    ],
    "quiz": [
      {
        "question": "A recurring image in a work is a...",
        "choices": [
          "motif",
          "sample",
          "tariff",
          "premise"
        ],
        "answer": 0,
        "explanation": "A motif is a repeated meaningful element."
      },
      {
        "question": "To represent a scene visually is to...",
        "choices": [
          "depict it",
          "mitigate it",
          "qualify it",
          "replicate it"
        ],
        "answer": 0,
        "explanation": "Depict means represent in art or language."
      },
      {
        "question": "A material such as oil paint is an artistic...",
        "choices": [
          "medium",
          "claim",
          "variable",
          "incentive"
        ],
        "answer": 0,
        "explanation": "Medium is the form or material used."
      },
      {
        "question": "A song that brings childhood memories to mind...",
        "choices": [
          "evokes them",
          "disputes them",
          "ratifies them",
          "subsidizes them"
        ],
        "answer": 0,
        "explanation": "Evoke means call a feeling or memory to mind."
      },
      {
        "question": "An explanation of a poem’s meaning is an...",
        "choices": [
          "interpretation",
          "experiment",
          "jurisdiction",
          "scarcity"
        ],
        "answer": 0,
        "explanation": "Interpretation explains meaning."
      }
    ],
    "vocabulary": [
      {
        "word": "aesthetic",
        "definition": "related to beauty or artistic value",
        "example": "The museum emphasizes the sculpture’s aesthetic qualities."
      },
      {
        "word": "depict",
        "definition": "represent in art or language",
        "example": "The mural depicts workers rebuilding the city."
      },
      {
        "word": "evoke",
        "definition": "bring a feeling or memory to mind",
        "example": "The music evokes a sense of distance and loss."
      },
      {
        "word": "interpret",
        "definition": "explain the meaning of",
        "example": "Critics interpret the repeated circle as a symbol of continuity."
      },
      {
        "word": "medium",
        "definition": "the material or form used by an artist",
        "example": "The artist chose glass as her primary medium."
      },
      {
        "word": "motif",
        "definition": "a recurring element with significance",
        "example": "A river motif appears throughout the exhibition."
      },
      {
        "word": "perspective",
        "definition": "a particular viewpoint",
        "example": "The essay examines the painting from a feminist perspective."
      },
      {
        "word": "tradition",
        "definition": "a practice or style passed down over time",
        "example": "The composer adapts a regional musical tradition."
      }
    ]
  },
  "history": {
    "id": "history",
    "title": "History",
    "number": "08",
    "tagline": "Understand change, reform, institutions, and evidence from primary sources.",
    "strategy": [
      "Identify time and place",
      "Distinguish primary from secondary sources",
      "Track cause and consequence",
      "Notice continuity and change",
      "Evaluate the author’s perspective"
    ],
    "concepts": [
      {
        "title": "Primary source",
        "description": "evidence created during the period"
      },
      {
        "title": "Reform",
        "description": "change intended to improve a system"
      },
      {
        "title": "Precedent",
        "description": "an earlier example guiding later action"
      },
      {
        "title": "Continuity",
        "description": "what remains stable over time"
      },
      {
        "title": "Causation",
        "description": "how events contribute to later outcomes"
      }
    ],
    "vocab": [
      [
        "abolish",
        "formally end a practice",
        "The movement sought to abolish the law."
      ],
      [
        "legislation",
        "laws considered or enacted by a government",
        "The reformers supported new labor legislation."
      ],
      [
        "precedent",
        "an earlier example used as a guide",
        "The ruling established a legal precedent."
      ],
      [
        "ratify",
        "formally approve",
        "The states voted to ratify the agreement."
      ],
      [
        "reform",
        "change intended to improve",
        "The campaign demanded electoral reform."
      ],
      [
        "revolution",
        "a major political or social transformation",
        "The revolution altered the structure of government."
      ],
      [
        "sovereignty",
        "supreme authority over a territory",
        "The treaty recognized national sovereignty."
      ],
      [
        "testimony",
        "a spoken or written account offered as evidence",
        "The historian compared testimony from several witnesses."
      ]
    ],
    "quiz": [
      {
        "question": "To formally approve a treaty is to...",
        "choices": [
          "ratify it",
          "abolish it",
          "evoke it",
          "replicate it"
        ],
        "answer": 0,
        "explanation": "Ratify means formally approve."
      },
      {
        "question": "An earlier court decision guiding later cases is a...",
        "choices": [
          "precedent",
          "sample",
          "motif",
          "variable"
        ],
        "answer": 0,
        "explanation": "A precedent is a prior example used as a guide."
      },
      {
        "question": "A letter written during an event is a...",
        "choices": [
          "primary source",
          "hypothesis",
          "counterargument",
          "transition"
        ],
        "answer": 0,
        "explanation": "It was created during the historical period."
      },
      {
        "question": "To end a law formally is to...",
        "choices": [
          "abolish it",
          "subsidize it",
          "infer it",
          "depict it"
        ],
        "answer": 0,
        "explanation": "Abolish means formally end."
      },
      {
        "question": "Supreme political authority is...",
        "choices": [
          "sovereignty",
          "scarcity",
          "aesthetics",
          "cohesion"
        ],
        "answer": 0,
        "explanation": "Sovereignty is supreme authority."
      }
    ],
    "vocabulary": [
      {
        "word": "abolish",
        "definition": "formally end a practice",
        "example": "The movement sought to abolish the law."
      },
      {
        "word": "legislation",
        "definition": "laws considered or enacted by a government",
        "example": "The reformers supported new labor legislation."
      },
      {
        "word": "precedent",
        "definition": "an earlier example used as a guide",
        "example": "The ruling established a legal precedent."
      },
      {
        "word": "ratify",
        "definition": "formally approve",
        "example": "The states voted to ratify the agreement."
      },
      {
        "word": "reform",
        "definition": "change intended to improve",
        "example": "The campaign demanded electoral reform."
      },
      {
        "word": "revolution",
        "definition": "a major political or social transformation",
        "example": "The revolution altered the structure of government."
      },
      {
        "word": "sovereignty",
        "definition": "supreme authority over a territory",
        "example": "The treaty recognized national sovereignty."
      },
      {
        "word": "testimony",
        "definition": "a spoken or written account offered as evidence",
        "example": "The historian compared testimony from several witnesses."
      }
    ]
  },
  "social-science": {
    "id": "social-science",
    "title": "Social Science",
    "number": "09",
    "tagline": "Read research in psychology, sociology, anthropology, and education.",
    "strategy": [
      "Identify population and sample",
      "Separate observation from interpretation",
      "Watch for bias",
      "Compare groups carefully",
      "Avoid overgeneralizing results"
    ],
    "concepts": [
      {
        "title": "Bias",
        "description": "a systematic influence on judgment"
      },
      {
        "title": "Norm",
        "description": "a shared expectation within a group"
      },
      {
        "title": "Cohesion",
        "description": "the strength of social bonds"
      },
      {
        "title": "Behavior",
        "description": "observable action"
      },
      {
        "title": "Perception",
        "description": "how people interpret information"
      }
    ],
    "vocab": [
      [
        "bias",
        "a systematic tendency that affects judgment",
        "Selection bias may have shaped the survey results."
      ],
      [
        "cohesion",
        "the strength of connection within a group",
        "Shared goals increased team cohesion."
      ],
      [
        "demographic",
        "related to population characteristics",
        "The report compares demographic groups by age."
      ],
      [
        "hierarchy",
        "a ranked system of status or authority",
        "The organization has a clear hierarchy."
      ],
      [
        "norm",
        "a shared rule or expectation",
        "The practice became a social norm."
      ],
      [
        "perception",
        "the way something is understood",
        "Lighting influenced participants’ perception of color."
      ],
      [
        "respondent",
        "a person who answers a survey",
        "Each respondent completed the same questionnaire."
      ],
      [
        "trend",
        "a general direction of change",
        "The data reveal a long-term trend toward urbanization."
      ]
    ],
    "quiz": [
      {
        "question": "A shared expectation within a group is a...",
        "choices": [
          "norm",
          "variable",
          "tariff",
          "motif"
        ],
        "answer": 0,
        "explanation": "A norm is a socially shared expectation."
      },
      {
        "question": "A person answering a questionnaire is a...",
        "choices": [
          "respondent",
          "legislator",
          "narrator",
          "control"
        ],
        "answer": 0,
        "explanation": "Respondent is the survey participant who answers."
      },
      {
        "question": "A systematic influence on judgment is...",
        "choices": [
          "bias",
          "cohesion",
          "scarcity",
          "imagery"
        ],
        "answer": 0,
        "explanation": "Bias can distort judgment or sampling."
      },
      {
        "question": "The strength of social bonds is...",
        "choices": [
          "cohesion",
          "jurisdiction",
          "causation",
          "sovereignty"
        ],
        "answer": 0,
        "explanation": "Cohesion describes group connectedness."
      },
      {
        "question": "A general direction of change is a...",
        "choices": [
          "trend",
          "premise",
          "medium",
          "subsidy"
        ],
        "answer": 0,
        "explanation": "Trend means a broad pattern over time."
      }
    ],
    "vocabulary": [
      {
        "word": "bias",
        "definition": "a systematic tendency that affects judgment",
        "example": "Selection bias may have shaped the survey results."
      },
      {
        "word": "cohesion",
        "definition": "the strength of connection within a group",
        "example": "Shared goals increased team cohesion."
      },
      {
        "word": "demographic",
        "definition": "related to population characteristics",
        "example": "The report compares demographic groups by age."
      },
      {
        "word": "hierarchy",
        "definition": "a ranked system of status or authority",
        "example": "The organization has a clear hierarchy."
      },
      {
        "word": "norm",
        "definition": "a shared rule or expectation",
        "example": "The practice became a social norm."
      },
      {
        "word": "perception",
        "definition": "the way something is understood",
        "example": "Lighting influenced participants’ perception of color."
      },
      {
        "word": "respondent",
        "definition": "a person who answers a survey",
        "example": "Each respondent completed the same questionnaire."
      },
      {
        "word": "trend",
        "definition": "a general direction of change",
        "example": "The data reveal a long-term trend toward urbanization."
      }
    ]
  },
  "economics": economicsVocabularyContent,
  "government": {
    "id": "government",
    "title": "Government",
    "number": "11",
    "tagline": "Review institutions, constitutional principles, public policy, and civic arguments.",
    "strategy": [
      "Identify the institution",
      "Locate the source of authority",
      "Separate power from policy",
      "Track checks and limits",
      "Evaluate competing civic values"
    ],
    "concepts": [
      {
        "title": "Federalism",
        "description": "power divided across national and regional governments"
      },
      {
        "title": "Jurisdiction",
        "description": "legal authority over an area or issue"
      },
      {
        "title": "Legislation",
        "description": "laws made by a legislature"
      },
      {
        "title": "Judicial review",
        "description": "court evaluation of constitutionality"
      },
      {
        "title": "Public policy",
        "description": "government action addressing public issues"
      }
    ],
    "vocab": [
      [
        "constitution",
        "a fundamental framework of government",
        "The constitution defines the branches’ powers."
      ],
      [
        "executive",
        "the branch that administers laws",
        "The executive implemented the new policy."
      ],
      [
        "federalism",
        "division of power between levels of government",
        "Federalism gives states and the national government distinct roles."
      ],
      [
        "jurisdiction",
        "legal authority over a place or issue",
        "The court lacked jurisdiction over the dispute."
      ],
      [
        "legislative",
        "related to making laws",
        "The legislative committee revised the bill."
      ],
      [
        "referendum",
        "a direct vote by citizens on a proposal",
        "The measure passed in a statewide referendum."
      ],
      [
        "regulation",
        "an official rule governing activity",
        "The agency issued a safety regulation."
      ],
      [
        "veto",
        "reject a proposed law officially",
        "The governor threatened to veto the bill."
      ]
    ],
    "quiz": [
      {
        "question": "Legal authority over a case is...",
        "choices": [
          "jurisdiction",
          "scarcity",
          "imagery",
          "cohesion"
        ],
        "answer": 0,
        "explanation": "Jurisdiction means legal authority."
      },
      {
        "question": "A direct public vote on a proposal is a...",
        "choices": [
          "referendum",
          "tariff",
          "hypothesis",
          "motif"
        ],
        "answer": 0,
        "explanation": "A referendum lets citizens vote directly."
      },
      {
        "question": "The branch that administers laws is the...",
        "choices": [
          "executive",
          "legislative",
          "judicial review",
          "electorate"
        ],
        "answer": 0,
        "explanation": "The executive carries out laws."
      },
      {
        "question": "To reject a bill officially is to...",
        "choices": [
          "veto it",
          "ratify it",
          "evoke it",
          "infer it"
        ],
        "answer": 0,
        "explanation": "Veto means formally reject a proposed law."
      },
      {
        "question": "Power divided between national and state governments is...",
        "choices": [
          "federalism",
          "inflation",
          "aesthetics",
          "replication"
        ],
        "answer": 0,
        "explanation": "Federalism divides authority across levels."
      }
    ],
    "vocabulary": [
      {
        "word": "constitution",
        "definition": "a fundamental framework of government",
        "example": "The constitution defines the branches’ powers."
      },
      {
        "word": "executive",
        "definition": "the branch that administers laws",
        "example": "The executive implemented the new policy."
      },
      {
        "word": "federalism",
        "definition": "division of power between levels of government",
        "example": "Federalism gives states and the national government distinct roles."
      },
      {
        "word": "jurisdiction",
        "definition": "legal authority over a place or issue",
        "example": "The court lacked jurisdiction over the dispute."
      },
      {
        "word": "legislative",
        "definition": "related to making laws",
        "example": "The legislative committee revised the bill."
      },
      {
        "word": "referendum",
        "definition": "a direct vote by citizens on a proposal",
        "example": "The measure passed in a statewide referendum."
      },
      {
        "word": "regulation",
        "definition": "an official rule governing activity",
        "example": "The agency issued a safety regulation."
      },
      {
        "word": "veto",
        "definition": "reject a proposed law officially",
        "example": "The governor threatened to veto the bill."
      }
    ]
  },
  "literature": {
    "id": "literature",
    "title": "Literature",
    "number": "12",
    "tagline": "Analyze characterization, imagery, symbolism, structure, and narrative technique.",
    "strategy": [
      "Identify speaker and situation",
      "Track changes in character",
      "Notice repeated images",
      "Connect form to meaning",
      "Distinguish literal from figurative language"
    ],
    "concepts": [
      {
        "title": "Characterization",
        "description": "how a character is presented"
      },
      {
        "title": "Imagery",
        "description": "language appealing to the senses"
      },
      {
        "title": "Symbolism",
        "description": "an object or image representing a larger idea"
      },
      {
        "title": "Structure",
        "description": "the organization of a text"
      },
      {
        "title": "Point of view",
        "description": "the perspective from which a story is told"
      }
    ],
    "vocab": [
      [
        "allusion",
        "an indirect reference to another work or event",
        "The poem’s allusion to Icarus suggests dangerous ambition."
      ],
      [
        "characterization",
        "the presentation of a character’s qualities",
        "Dialogue contributes to the protagonist’s characterization."
      ],
      [
        "foreshadowing",
        "hints about later events",
        "The broken clock provides foreshadowing of the crisis."
      ],
      [
        "imagery",
        "descriptive sensory language",
        "The winter imagery creates a feeling of isolation."
      ],
      [
        "metaphor",
        "a direct comparison without like or as",
        "The narrator uses a storm as a metaphor for conflict."
      ],
      [
        "motif",
        "a recurring meaningful element",
        "The motif of doors emphasizes choice."
      ],
      [
        "narrator",
        "the voice telling a story",
        "The narrator withholds key information."
      ],
      [
        "symbolism",
        "use of something concrete to represent an idea",
        "The bridge’s symbolism centers on reconciliation."
      ]
    ],
    "quiz": [
      {
        "question": "A hint about a later event is...",
        "choices": [
          "foreshadowing",
          "federalism",
          "replication",
          "inflation"
        ],
        "answer": 0,
        "explanation": "Foreshadowing anticipates later events."
      },
      {
        "question": "Sensory descriptive language is...",
        "choices": [
          "imagery",
          "jurisdiction",
          "evidence",
          "scarcity"
        ],
        "answer": 0,
        "explanation": "Imagery appeals to the senses."
      },
      {
        "question": "An indirect reference to another work is an...",
        "choices": [
          "allusion",
          "assumption",
          "tariff",
          "variable"
        ],
        "answer": 0,
        "explanation": "An allusion points indirectly to another text or event."
      },
      {
        "question": "The voice telling a story is the...",
        "choices": [
          "narrator",
          "respondent",
          "legislator",
          "control"
        ],
        "answer": 0,
        "explanation": "The narrator tells the story."
      },
      {
        "question": "A recurring meaningful element is a...",
        "choices": [
          "motif",
          "subsidy",
          "sample",
          "premise"
        ],
        "answer": 0,
        "explanation": "A motif recurs and contributes to meaning."
      }
    ],
    "vocabulary": [
      {
        "word": "allusion",
        "definition": "an indirect reference to another work or event",
        "example": "The poem’s allusion to Icarus suggests dangerous ambition."
      },
      {
        "word": "characterization",
        "definition": "the presentation of a character’s qualities",
        "example": "Dialogue contributes to the protagonist’s characterization."
      },
      {
        "word": "foreshadowing",
        "definition": "hints about later events",
        "example": "The broken clock provides foreshadowing of the crisis."
      },
      {
        "word": "imagery",
        "definition": "descriptive sensory language",
        "example": "The winter imagery creates a feeling of isolation."
      },
      {
        "word": "metaphor",
        "definition": "a direct comparison without like or as",
        "example": "The narrator uses a storm as a metaphor for conflict."
      },
      {
        "word": "motif",
        "definition": "a recurring meaningful element",
        "example": "The motif of doors emphasizes choice."
      },
      {
        "word": "narrator",
        "definition": "the voice telling a story",
        "example": "The narrator withholds key information."
      },
      {
        "word": "symbolism",
        "definition": "use of something concrete to represent an idea",
        "example": "The bridge’s symbolism centers on reconciliation."
      }
    ]
  },
  "advanced-vocabulary": {
    "id": "advanced-vocabulary",
    "title": "Advanced Vocabulary",
    "number": "13",
    "tagline": "Study challenging academic words and fine distinctions among near-synonyms.",
    "strategy": [
      "Learn the core meaning",
      "Study connotation",
      "Notice common collocations",
      "Compare close synonyms",
      "Use the word in a new sentence"
    ],
    "concepts": [
      {
        "title": "Precision",
        "description": "choose the narrowest accurate meaning"
      },
      {
        "title": "Connotation",
        "description": "notice positive, neutral, or negative associations"
      },
      {
        "title": "Register",
        "description": "recognize formal academic usage"
      },
      {
        "title": "Collocation",
        "description": "learn words that commonly appear together"
      },
      {
        "title": "Contrast",
        "description": "compare near-synonyms to avoid confusion"
      }
    ],
    "vocab": [
      [
        "equivocal",
        "open to more than one interpretation",
        "The witness gave an equivocal answer that satisfied neither side."
      ],
      [
        "ephemeral",
        "lasting a very short time",
        "The installation was ephemeral and disappeared after one week."
      ],
      [
        "intransigent",
        "unwilling to compromise",
        "Both parties remained intransigent during negotiations."
      ],
      [
        "mitigate",
        "make less severe",
        "The new design may mitigate flood damage."
      ],
      [
        "pragmatic",
        "focused on practical results",
        "The mayor adopted a pragmatic approach."
      ],
      [
        "ubiquitous",
        "present or found everywhere",
        "Smartphones have become ubiquitous in daily life."
      ],
      [
        "vindicate",
        "show to be right or justified",
        "Later evidence helped vindicate the researcher’s claim."
      ],
      [
        "volatile",
        "likely to change suddenly",
        "Prices remained volatile throughout the month."
      ]
    ],
    "quiz": [
      {
        "question": "Something found nearly everywhere is...",
        "choices": [
          "ubiquitous",
          "ephemeral",
          "equivocal",
          "tentative"
        ],
        "answer": 0,
        "explanation": "Ubiquitous means widespread or everywhere."
      },
      {
        "question": "A position unwilling to compromise is...",
        "choices": [
          "intransigent",
          "pragmatic",
          "subtle",
          "coherent"
        ],
        "answer": 0,
        "explanation": "Intransigent describes refusal to compromise."
      },
      {
        "question": "Something short-lived is...",
        "choices": [
          "ephemeral",
          "volatile",
          "explicit",
          "rigorous"
        ],
        "answer": 0,
        "explanation": "Ephemeral means lasting briefly."
      },
      {
        "question": "An unclear or double-meaning answer is...",
        "choices": [
          "equivocal",
          "vindicated",
          "meticulous",
          "causal"
        ],
        "answer": 0,
        "explanation": "Equivocal means ambiguous or open to multiple readings."
      },
      {
        "question": "Evidence that proves a person was right may...",
        "choices": [
          "vindicate the person",
          "mitigate the person",
          "depict the person",
          "qualify the person"
        ],
        "answer": 0,
        "explanation": "Vindicate means show to be justified or correct."
      }
    ],
    "vocabulary": [
      {
        "word": "equivocal",
        "definition": "open to more than one interpretation",
        "example": "The witness gave an equivocal answer that satisfied neither side."
      },
      {
        "word": "ephemeral",
        "definition": "lasting a very short time",
        "example": "The installation was ephemeral and disappeared after one week."
      },
      {
        "word": "intransigent",
        "definition": "unwilling to compromise",
        "example": "Both parties remained intransigent during negotiations."
      },
      {
        "word": "mitigate",
        "definition": "make less severe",
        "example": "The new design may mitigate flood damage."
      },
      {
        "word": "pragmatic",
        "definition": "focused on practical results",
        "example": "The mayor adopted a pragmatic approach."
      },
      {
        "word": "ubiquitous",
        "definition": "present or found everywhere",
        "example": "Smartphones have become ubiquitous in daily life."
      },
      {
        "word": "vindicate",
        "definition": "show to be right or justified",
        "example": "Later evidence helped vindicate the researcher’s claim."
      },
      {
        "word": "volatile",
        "definition": "likely to change suddenly",
        "example": "Prices remained volatile throughout the month."
      }
    ]
  },
  "mixed-review": {
    "id": "mixed-review",
    "title": "Mixed Review",
    "number": "14",
    "tagline": "Combine vocabulary, reading, grammar, and math in one focused review session.",
    "strategy": [
      "Identify the tested domain",
      "Use the shortest reliable method",
      "Eliminate clearly wrong choices",
      "Check units and wording",
      "Review errors by category"
    ],
    "concepts": [
      {
        "title": "Vocabulary",
        "description": "meaning in context"
      },
      {
        "title": "Reading",
        "description": "claims, evidence, inference, and structure"
      },
      {
        "title": "Grammar",
        "description": "sentence boundaries, agreement, and modifiers"
      },
      {
        "title": "Math",
        "description": "algebra, data, geometry, and functions"
      },
      {
        "title": "Review",
        "description": "classify each error before retrying"
      }
    ],
    "vocab": [
      [
        "coherent",
        "logical and organized",
        "A coherent argument connects every reason to the claim."
      ],
      [
        "corroborate",
        "confirm with additional evidence",
        "A second source helped corroborate the account."
      ],
      [
        "diminish",
        "make or become smaller",
        "The effect diminished over time."
      ],
      [
        "feasible",
        "possible and practical",
        "The engineers proposed a feasible solution."
      ],
      [
        "infer",
        "draw a conclusion from evidence",
        "Readers can infer the speaker’s disappointment."
      ],
      [
        "justify",
        "provide a valid reason for",
        "The data do not justify such a broad claim."
      ],
      [
        "reinforce",
        "strengthen",
        "The example reinforces the main idea."
      ],
      [
        "sufficient",
        "enough for a purpose",
        "The sample was sufficient for the preliminary analysis."
      ]
    ],
    "quiz": [
      {
        "question": "Which word means ‘possible and practical’ ?",
        "choices": [
          "Feasible",
          "Arbitrary",
          "Implicit",
          "Volatile"
        ],
        "answer": 0,
        "explanation": "Feasible means capable of being done."
      },
      {
        "question": "A sentence joins two independent clauses with only a comma. This is a...",
        "choices": [
          "comma splice",
          "modifier",
          "parallel structure",
          "possessive"
        ],
        "answer": 0,
        "explanation": "A comma alone cannot join two independent clauses."
      },
      {
        "question": "If 3x + 5 = 20, x equals...",
        "choices": [
          "3",
          "5",
          "15",
          "25"
        ],
        "answer": 1,
        "explanation": "Subtract 5 and divide by 3: x = 5."
      },
      {
        "question": "Additional evidence that strengthens a claim...",
        "choices": [
          "reinforces it",
          "abolishes it",
          "evokes it",
          "qualifies it"
        ],
        "answer": 0,
        "explanation": "Reinforce means strengthen."
      },
      {
        "question": "A conclusion drawn from textual clues is an...",
        "choices": [
          "inference",
          "tariff",
          "referendum",
          "medium"
        ],
        "answer": 0,
        "explanation": "An inference is derived from evidence."
      }
    ],
    "vocabulary": [
      {
        "word": "coherent",
        "definition": "logical and organized",
        "example": "A coherent argument connects every reason to the claim."
      },
      {
        "word": "corroborate",
        "definition": "confirm with additional evidence",
        "example": "A second source helped corroborate the account."
      },
      {
        "word": "diminish",
        "definition": "make or become smaller",
        "example": "The effect diminished over time."
      },
      {
        "word": "feasible",
        "definition": "possible and practical",
        "example": "The engineers proposed a feasible solution."
      },
      {
        "word": "infer",
        "definition": "draw a conclusion from evidence",
        "example": "Readers can infer the speaker’s disappointment."
      },
      {
        "word": "justify",
        "definition": "provide a valid reason for",
        "example": "The data do not justify such a broad claim."
      },
      {
        "word": "reinforce",
        "definition": "strengthen",
        "example": "The example reinforces the main idea."
      },
      {
        "word": "sufficient",
        "definition": "enough for a purpose",
        "example": "The sample was sufficient for the preliminary analysis."
      }
    ]
  },
  "final-review": {
    "id": "final-review",
    "title": "Final Review",
    "number": "15",
    "tagline": "Complete an exam-week review of the highest-value strategies and vocabulary.",
    "strategy": [
      "Prioritize recurring weaknesses",
      "Review formulas and rules",
      "Practice under time limits",
      "Check explanations, not just answers",
      "Finish with confidence-building material"
    ],
    "concepts": [
      {
        "title": "Reading",
        "description": "predict answers before choices"
      },
      {
        "title": "Writing",
        "description": "identify sentence function and boundaries"
      },
      {
        "title": "Math",
        "description": "translate words into equations"
      },
      {
        "title": "Vocabulary",
        "description": "use context and word relationships"
      },
      {
        "title": "Exam day",
        "description": "pace steadily and mark uncertain items"
      }
    ],
    "vocab": [
      [
        "ambiguous",
        "unclear or open to multiple meanings",
        "The wording was ambiguous until the author supplied an example."
      ],
      [
        "concise",
        "brief but complete",
        "The best revision is concise and precise."
      ],
      [
        "empirical",
        "based on observation",
        "The claim requires empirical support."
      ],
      [
        "implicit",
        "suggested rather than directly stated",
        "The narrator’s criticism is implicit."
      ],
      [
        "meticulous",
        "extremely careful",
        "A meticulous review caught several errors."
      ],
      [
        "pragmatic",
        "practical",
        "The team chose a pragmatic solution."
      ],
      [
        "skeptical",
        "doubtful",
        "The reader should remain skeptical of unsupported claims."
      ],
      [
        "validate",
        "confirm or support",
        "A second experiment may validate the result."
      ]
    ],
    "quiz": [
      {
        "question": "The best first step in a vocabulary-in-context question is to...",
        "choices": [
          "predict the meaning from context",
          "pick the longest choice",
          "ignore the sentence",
          "choose the most familiar word"
        ],
        "answer": 0,
        "explanation": "Prediction reduces distraction from answer choices."
      },
      {
        "question": "A semicolon correctly joins...",
        "choices": [
          "two closely related independent clauses",
          "a subject and verb",
          "an adjective and noun",
          "a dependent clause only"
        ],
        "answer": 0,
        "explanation": "A semicolon can join two independent clauses."
      },
      {
        "question": "A line with slope 3 rises...",
        "choices": [
          "3 units for every 1 unit right",
          "1 unit for every 3 units right",
          "3 units only",
          "0 units"
        ],
        "answer": 0,
        "explanation": "Slope is rise over run."
      },
      {
        "question": "A claim based on observation has...",
        "choices": [
          "empirical support",
          "arbitrary support",
          "figurative support",
          "implicit punctuation"
        ],
        "answer": 0,
        "explanation": "Empirical means based on observed evidence."
      },
      {
        "question": "On exam day, the strongest pacing strategy is to...",
        "choices": [
          "move steadily and return to marked questions",
          "spend unlimited time on one question",
          "skip all hard questions permanently",
          "change every first answer"
        ],
        "answer": 0,
        "explanation": "Steady pacing preserves time for review."
      }
    ],
    "vocabulary": [
      {
        "word": "ambiguous",
        "definition": "unclear or open to multiple meanings",
        "example": "The wording was ambiguous until the author supplied an example."
      },
      {
        "word": "concise",
        "definition": "brief but complete",
        "example": "The best revision is concise and precise."
      },
      {
        "word": "empirical",
        "definition": "based on observation",
        "example": "The claim requires empirical support."
      },
      {
        "word": "implicit",
        "definition": "suggested rather than directly stated",
        "example": "The narrator’s criticism is implicit."
      },
      {
        "word": "meticulous",
        "definition": "extremely careful",
        "example": "A meticulous review caught several errors."
      },
      {
        "word": "pragmatic",
        "definition": "practical",
        "example": "The team chose a pragmatic solution."
      },
      {
        "word": "skeptical",
        "definition": "doubtful",
        "example": "The reader should remain skeptical of unsupported claims."
      },
      {
        "word": "validate",
        "definition": "confirm or support",
        "example": "A second experiment may validate the result."
      }
    ]
  }
  ,
  "academic-vocabulary": {
    "id": "academic-vocabulary",
    "title": "Academic Vocabulary",
    "number": "16",
    "tagline": "Master 100 high-value words used across Digital SAT reading, research, and argument passages.",
    "strategy": [
      "Identify the word’s role in the sentence",
      "Use nearby logical and grammatical clues",
      "Test the definition in context",
      "Compare close synonyms for precision",
      "Review the word in a new academic sentence"
    ],
    "concepts": [
      {
        "title": "Analysis and Evidence",
        "description": "Examine claims, interpret data, and connect conclusions to supporting evidence."
      },
      {
        "title": "Cause and Effect",
        "description": "Describe factors, consequences, triggers, and relationships among events."
      },
      {
        "title": "Comparison and Contrast",
        "description": "Identify similarities, differences, equivalence, and logical reversals."
      },
      {
        "title": "Research and Methodology",
        "description": "Understand how studies collect data, test hypotheses, and evaluate reliability."
      },
      {
        "title": "Argument and Evaluation",
        "description": "Recognize claims, premises, concessions, counterarguments, and standards of proof."
      },
      {
        "title": "Change and Development",
        "description": "Track shifts, trends, persistence, adaptation, and transformation over time."
      },
      {
        "title": "Quantity and Significance",
        "description": "Judge scale, frequency, proportion, importance, and statistical meaning."
      },
      {
        "title": "Institutions and Society",
        "description": "Read precisely about policy, organizations, communities, resources, and public systems."
      }
    ],
    "vocabulary": [
      {
        "word": "analyze",
        "partOfSpeech": "verb",
        "definition": "to examine something carefully by separating it into parts",
        "example": "Researchers analyzed the survey results to identify patterns in student behavior.",
        "synonyms": [
          "examine",
          "evaluate"
        ],
        "collocations": [
          "analyze data",
          "analyze evidence"
        ],
        "usageNote": "Use analyze for close, structured examination rather than a quick look.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "assess",
        "partOfSpeech": "verb",
        "definition": "to judge the quality, importance, or value of something",
        "example": "The committee assessed whether the new policy had improved attendance.",
        "synonyms": [
          "evaluate",
          "appraise"
        ],
        "collocations": [
          "assess impact",
          "assess risk"
        ],
        "usageNote": "Assess usually implies applying criteria to reach a judgment.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "attribute",
        "partOfSpeech": "verb",
        "definition": "to regard something as being caused by a particular factor",
        "example": "The authors attribute the decline to changes in habitat quality.",
        "synonyms": [
          "ascribe",
          "credit"
        ],
        "collocations": [
          "attribute a change to",
          "attribute success to"
        ],
        "usageNote": "Use the pattern attribute X to Y.",
        "group": "Cause and Effect"
      },
      {
        "word": "corroborate",
        "partOfSpeech": "verb",
        "definition": "to confirm or support a claim with additional evidence",
        "example": "A second experiment corroborated the team’s original findings.",
        "synonyms": [
          "confirm",
          "substantiate"
        ],
        "collocations": [
          "corroborate evidence",
          "corroborate a claim"
        ],
        "usageNote": "Corroborate suggests independent supporting evidence.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "derive",
        "partOfSpeech": "verb",
        "definition": "to obtain or develop something from a source",
        "example": "The formula is derived from earlier work on fluid motion.",
        "synonyms": [
          "obtain",
          "deduce"
        ],
        "collocations": [
          "derive from",
          "derive a conclusion"
        ],
        "usageNote": "Derive often describes origin, reasoning, or extraction.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "empirical",
        "partOfSpeech": "adjective",
        "definition": "based on observation or experiment rather than theory alone",
        "example": "The proposal is supported by empirical evidence from three field studies.",
        "synonyms": [
          "observational",
          "experimental"
        ],
        "collocations": [
          "empirical evidence",
          "empirical research"
        ],
        "usageNote": "Empirical evidence comes from measured or observed data.",
        "group": "Research and Methodology"
      },
      {
        "word": "evaluate",
        "partOfSpeech": "verb",
        "definition": "to determine the significance, quality, or effectiveness of something",
        "example": "The study evaluates several methods for reducing energy use.",
        "synonyms": [
          "assess",
          "judge"
        ],
        "collocations": [
          "evaluate effectiveness",
          "evaluate evidence"
        ],
        "usageNote": "Evaluate requires a reasoned judgment, not merely a description.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "evidence",
        "partOfSpeech": "noun",
        "definition": "information that supports or challenges a conclusion",
        "example": "The fossil record provides evidence of gradual environmental change.",
        "synonyms": [
          "support",
          "proof"
        ],
        "collocations": [
          "supporting evidence",
          "compelling evidence"
        ],
        "usageNote": "On the SAT, distinguish evidence from opinion or background information.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "indicate",
        "partOfSpeech": "verb",
        "definition": "to show, suggest, or point to a conclusion",
        "example": "The data indicate that the treatment had a modest effect.",
        "synonyms": [
          "suggest",
          "demonstrate"
        ],
        "collocations": [
          "indicate a trend",
          "indicate that"
        ],
        "usageNote": "Indicate can be cautious; it does not always mean prove.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "infer",
        "partOfSpeech": "verb",
        "definition": "to reach a conclusion based on evidence and reasoning",
        "example": "Readers can infer that the speaker distrusts the proposed solution.",
        "synonyms": [
          "deduce",
          "conclude"
        ],
        "collocations": [
          "infer from",
          "reasonably infer"
        ],
        "usageNote": "The writer implies; the reader infers.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "interpret",
        "partOfSpeech": "verb",
        "definition": "to explain the meaning or significance of something",
        "example": "Historians interpret the speech differently because they emphasize different contexts.",
        "synonyms": [
          "explain",
          "understand"
        ],
        "collocations": [
          "interpret data",
          "interpret a passage"
        ],
        "usageNote": "Interpretation should be grounded in textual or numerical evidence.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "substantiate",
        "partOfSpeech": "verb",
        "definition": "to provide evidence that proves or supports a claim",
        "example": "The article fails to substantiate its broad conclusion with reliable data.",
        "synonyms": [
          "support",
          "verify"
        ],
        "collocations": [
          "substantiate a claim",
          "substantiate an allegation"
        ],
        "usageNote": "Substantiate means support with concrete evidence.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "valid",
        "partOfSpeech": "adjective",
        "definition": "well founded, logically sound, or acceptable",
        "example": "The criticism is valid because it identifies a flaw in the study’s design.",
        "synonyms": [
          "sound",
          "legitimate"
        ],
        "collocations": [
          "valid argument",
          "valid conclusion"
        ],
        "usageNote": "A valid claim is supported by sound reasoning or evidence.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "verify",
        "partOfSpeech": "verb",
        "definition": "to confirm that something is accurate or true",
        "example": "The researchers repeated the measurements to verify the result.",
        "synonyms": [
          "confirm",
          "validate"
        ],
        "collocations": [
          "verify accuracy",
          "verify a result"
        ],
        "usageNote": "Verify emphasizes checking truth or accuracy.",
        "group": "Analysis and Evidence"
      },
      {
        "word": "affect",
        "partOfSpeech": "verb",
        "definition": "to produce a change in something",
        "example": "Temperature can affect the rate at which the reaction occurs.",
        "synonyms": [
          "influence",
          "alter"
        ],
        "collocations": [
          "affect outcomes",
          "significantly affect"
        ],
        "usageNote": "Affect is usually a verb; effect is usually a noun.",
        "group": "Cause and Effect"
      },
      {
        "word": "catalyst",
        "partOfSpeech": "noun",
        "definition": "a person, event, or factor that causes or speeds change",
        "example": "The court ruling became a catalyst for broader reform.",
        "synonyms": [
          "stimulus",
          "trigger"
        ],
        "collocations": [
          "catalyst for change",
          "serve as a catalyst"
        ],
        "usageNote": "In academic prose, catalyst often describes a force that accelerates change.",
        "group": "Cause and Effect"
      },
      {
        "word": "consequence",
        "partOfSpeech": "noun",
        "definition": "a result or effect of an action or condition",
        "example": "One unintended consequence of the policy was increased administrative cost.",
        "synonyms": [
          "result",
          "outcome"
        ],
        "collocations": [
          "unintended consequence",
          "long-term consequence"
        ],
        "usageNote": "Consequence can be neutral, though it often suggests a negative result.",
        "group": "Cause and Effect"
      },
      {
        "word": "contribute",
        "partOfSpeech": "verb",
        "definition": "to help cause or add to a result",
        "example": "Several social factors contributed to the decline in voter participation.",
        "synonyms": [
          "add",
          "lead"
        ],
        "collocations": [
          "contribute to",
          "contributing factor"
        ],
        "usageNote": "Use contribute to, not contribute for, when expressing causation.",
        "group": "Cause and Effect"
      },
      {
        "word": "factor",
        "partOfSpeech": "noun",
        "definition": "an element that contributes to a result",
        "example": "Access to transportation was a major factor in the program’s success.",
        "synonyms": [
          "element",
          "influence"
        ],
        "collocations": [
          "key factor",
          "contributing factor"
        ],
        "usageNote": "A factor is one cause among several possible causes.",
        "group": "Cause and Effect"
      },
      {
        "word": "generate",
        "partOfSpeech": "verb",
        "definition": "to produce or create something",
        "example": "The new model generated predictions that closely matched the observed data.",
        "synonyms": [
          "produce",
          "create"
        ],
        "collocations": [
          "generate data",
          "generate interest"
        ],
        "usageNote": "Generate is common in scientific, economic, and technological contexts.",
        "group": "Cause and Effect"
      },
      {
        "word": "influence",
        "partOfSpeech": "verb",
        "definition": "to affect the development or behavior of something",
        "example": "Cultural expectations influence how people interpret the gesture.",
        "synonyms": [
          "shape",
          "affect"
        ],
        "collocations": [
          "influence behavior",
          "strongly influence"
        ],
        "usageNote": "Influence does not necessarily imply total control.",
        "group": "Cause and Effect"
      },
      {
        "word": "mediate",
        "partOfSpeech": "verb",
        "definition": "to serve as an intermediate process or to help resolve a dispute",
        "example": "Trust may mediate the relationship between communication and cooperation.",
        "synonyms": [
          "intervene",
          "moderate"
        ],
        "collocations": [
          "mediate a relationship",
          "mediate a dispute"
        ],
        "usageNote": "In research, mediate means explain how one variable affects another.",
        "group": "Cause and Effect"
      },
      {
        "word": "precipitate",
        "partOfSpeech": "verb",
        "definition": "to cause an event or situation to happen suddenly",
        "example": "A sharp rise in prices precipitated public protests.",
        "synonyms": [
          "trigger",
          "provoke"
        ],
        "collocations": [
          "precipitate a crisis",
          "precipitate change"
        ],
        "usageNote": "As a verb, precipitate means cause, often abruptly.",
        "group": "Cause and Effect"
      },
      {
        "word": "result",
        "partOfSpeech": "verb",
        "definition": "to occur as a consequence of something",
        "example": "Lower costs may result from improvements in manufacturing.",
        "synonyms": [
          "follow",
          "arise"
        ],
        "collocations": [
          "result from",
          "result in"
        ],
        "usageNote": "Result from introduces a cause; result in introduces an effect.",
        "group": "Cause and Effect"
      },
      {
        "word": "trigger",
        "partOfSpeech": "verb",
        "definition": "to cause an event or reaction to begin",
        "example": "The discovery triggered renewed interest in the abandoned theory.",
        "synonyms": [
          "initiate",
          "provoke"
        ],
        "collocations": [
          "trigger a response",
          "trigger change"
        ],
        "usageNote": "Trigger often implies a specific initiating event.",
        "group": "Cause and Effect"
      },
      {
        "word": "analogous",
        "partOfSpeech": "adjective",
        "definition": "similar in certain important ways",
        "example": "The author argues that the two historical situations are analogous.",
        "synonyms": [
          "comparable",
          "parallel"
        ],
        "collocations": [
          "analogous to",
          "roughly analogous"
        ],
        "usageNote": "Analogous means comparable, not identical.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "comparable",
        "partOfSpeech": "adjective",
        "definition": "similar enough to be meaningfully compared",
        "example": "The two samples were comparable in size and demographic composition.",
        "synonyms": [
          "similar",
          "equivalent"
        ],
        "collocations": [
          "comparable to",
          "directly comparable"
        ],
        "usageNote": "Comparable items share relevant features or standards.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "contrast",
        "partOfSpeech": "verb",
        "definition": "to compare in order to emphasize differences",
        "example": "The passage contrasts urban growth with rural decline.",
        "synonyms": [
          "differentiate",
          "oppose"
        ],
        "collocations": [
          "contrast with",
          "sharply contrast"
        ],
        "usageNote": "Contrast highlights differences; compare may identify both similarities and differences.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "conversely",
        "partOfSpeech": "adverb",
        "definition": "introducing an idea that reverses or contrasts with the previous one",
        "example": "High demand can raise prices; conversely, weak demand can lower them.",
        "synonyms": [
          "in contrast",
          "on the other hand"
        ],
        "collocations": [
          "conversely,",
          "the converse is true"
        ],
        "usageNote": "Use conversely when the relationship is logically reversed.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "differentiate",
        "partOfSpeech": "verb",
        "definition": "to recognize or establish a difference between things",
        "example": "The test differentiates between temporary fatigue and chronic illness.",
        "synonyms": [
          "distinguish",
          "separate"
        ],
        "collocations": [
          "differentiate between",
          "clearly differentiate"
        ],
        "usageNote": "Differentiate often appears with between or from.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "distinction",
        "partOfSpeech": "noun",
        "definition": "a difference between similar things or ideas",
        "example": "The author draws a distinction between correlation and causation.",
        "synonyms": [
          "difference",
          "contrast"
        ],
        "collocations": [
          "draw a distinction",
          "important distinction"
        ],
        "usageNote": "A distinction is a precise difference worth noting.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "equivalent",
        "partOfSpeech": "adjective",
        "definition": "equal in value, meaning, function, or effect",
        "example": "The two formulas are mathematically equivalent.",
        "synonyms": [
          "equal",
          "corresponding"
        ],
        "collocations": [
          "equivalent to",
          "roughly equivalent"
        ],
        "usageNote": "Equivalent means equal in a relevant respect, not necessarily identical.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "inconsistent",
        "partOfSpeech": "adjective",
        "definition": "not in agreement or not remaining the same",
        "example": "The witness’s later statement was inconsistent with the earlier account.",
        "synonyms": [
          "contradictory",
          "incompatible"
        ],
        "collocations": [
          "inconsistent with",
          "internally inconsistent"
        ],
        "usageNote": "Inconsistent evidence may weaken an argument.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "parallel",
        "partOfSpeech": "adjective",
        "definition": "similar and occurring in a corresponding way",
        "example": "The two novels follow parallel patterns of conflict and reconciliation.",
        "synonyms": [
          "corresponding",
          "analogous"
        ],
        "collocations": [
          "parallel development",
          "parallel structure"
        ],
        "usageNote": "Parallel can describe similar patterns, structures, or developments.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "whereas",
        "partOfSpeech": "conjunction",
        "definition": "used to introduce a contrast between two statements",
        "example": "The first method emphasizes speed, whereas the second prioritizes accuracy.",
        "synonyms": [
          "while",
          "in contrast"
        ],
        "collocations": [
          "whereas the first",
          "whereas others"
        ],
        "usageNote": "Whereas directly connects contrasting clauses.",
        "group": "Comparison and Contrast"
      },
      {
        "word": "approach",
        "partOfSpeech": "noun",
        "definition": "a method of dealing with a problem or subject",
        "example": "The researchers used a qualitative approach to study classroom behavior.",
        "synonyms": [
          "method",
          "strategy"
        ],
        "collocations": [
          "research approach",
          "alternative approach"
        ],
        "usageNote": "Approach is broader than a single technique.",
        "group": "Research and Methodology"
      },
      {
        "word": "bias",
        "partOfSpeech": "noun",
        "definition": "a systematic preference or distortion that affects judgment or results",
        "example": "Selection bias may have influenced which participants entered the study.",
        "synonyms": [
          "prejudice",
          "distortion"
        ],
        "collocations": [
          "selection bias",
          "reduce bias"
        ],
        "usageNote": "In research, bias often means systematic error rather than personal prejudice.",
        "group": "Research and Methodology"
      },
      {
        "word": "data",
        "partOfSpeech": "noun",
        "definition": "facts or measurements collected for analysis",
        "example": "The data reveal a steady increase in average temperature.",
        "synonyms": [
          "information",
          "measurements"
        ],
        "collocations": [
          "collect data",
          "data set"
        ],
        "usageNote": "In formal academic English, data is often treated as plural, though singular usage is common.",
        "group": "Research and Methodology"
      },
      {
        "word": "framework",
        "partOfSpeech": "noun",
        "definition": "a structure of ideas used to organize or explain information",
        "example": "The theory provides a framework for understanding social change.",
        "synonyms": [
          "structure",
          "model"
        ],
        "collocations": [
          "conceptual framework",
          "analytical framework"
        ],
        "usageNote": "A framework organizes thinking without necessarily predicting exact outcomes.",
        "group": "Research and Methodology"
      },
      {
        "word": "hypothesis",
        "partOfSpeech": "noun",
        "definition": "a testable proposed explanation or prediction",
        "example": "The experiment was designed to test the hypothesis that light affects growth.",
        "synonyms": [
          "prediction",
          "proposition"
        ],
        "collocations": [
          "test a hypothesis",
          "support a hypothesis"
        ],
        "usageNote": "A hypothesis must be testable and may be supported or rejected.",
        "group": "Research and Methodology"
      },
      {
        "word": "methodology",
        "partOfSpeech": "noun",
        "definition": "the system of methods and principles used in a study",
        "example": "The paper explains its methodology before presenting the results.",
        "synonyms": [
          "research design",
          "procedure"
        ],
        "collocations": [
          "research methodology",
          "sound methodology"
        ],
        "usageNote": "Methodology refers to the overall system, not just one method.",
        "group": "Research and Methodology"
      },
      {
        "word": "parameter",
        "partOfSpeech": "noun",
        "definition": "a limit, condition, or measurable characteristic in a system",
        "example": "The researchers defined the parameters of the simulation before running it.",
        "synonyms": [
          "boundary",
          "variable"
        ],
        "collocations": [
          "within the parameters",
          "model parameter"
        ],
        "usageNote": "Parameter can mean a boundary or a fixed feature in a model.",
        "group": "Research and Methodology"
      },
      {
        "word": "qualitative",
        "partOfSpeech": "adjective",
        "definition": "based on descriptions, qualities, or meanings rather than numerical measurement",
        "example": "The interviews provided qualitative evidence about participants’ experiences.",
        "synonyms": [
          "descriptive",
          "nonquantitative"
        ],
        "collocations": [
          "qualitative research",
          "qualitative analysis"
        ],
        "usageNote": "Qualitative research emphasizes meaning and description.",
        "group": "Research and Methodology"
      },
      {
        "word": "quantitative",
        "partOfSpeech": "adjective",
        "definition": "based on numerical measurement or statistical analysis",
        "example": "The team conducted a quantitative analysis of voting patterns.",
        "synonyms": [
          "numerical",
          "statistical"
        ],
        "collocations": [
          "quantitative data",
          "quantitative study"
        ],
        "usageNote": "Quantitative research focuses on measurable quantities.",
        "group": "Research and Methodology"
      },
      {
        "word": "replicate",
        "partOfSpeech": "verb",
        "definition": "to repeat a study or process to see whether the same result occurs",
        "example": "Independent scientists were unable to replicate the original experiment.",
        "synonyms": [
          "repeat",
          "reproduce"
        ],
        "collocations": [
          "replicate findings",
          "replicate a study"
        ],
        "usageNote": "Replication tests whether results are reliable beyond one study.",
        "group": "Research and Methodology"
      },
      {
        "word": "sample",
        "partOfSpeech": "noun",
        "definition": "a smaller group selected to represent a larger population",
        "example": "The survey used a nationally representative sample of adults.",
        "synonyms": [
          "subset",
          "selection"
        ],
        "collocations": [
          "sample size",
          "representative sample"
        ],
        "usageNote": "A sample should reflect the population relevant to the claim.",
        "group": "Research and Methodology"
      },
      {
        "word": "variable",
        "partOfSpeech": "noun",
        "definition": "a factor that can change or take different values",
        "example": "The study controlled every variable except temperature.",
        "synonyms": [
          "factor",
          "quantity"
        ],
        "collocations": [
          "control a variable",
          "independent variable"
        ],
        "usageNote": "Variables may be independent, dependent, or controlled.",
        "group": "Research and Methodology"
      },
      {
        "word": "assert",
        "partOfSpeech": "verb",
        "definition": "to state a claim confidently",
        "example": "The author asserts that public transit can reduce congestion.",
        "synonyms": [
          "claim",
          "maintain"
        ],
        "collocations": [
          "assert that",
          "strongly assert"
        ],
        "usageNote": "An assertion still requires evidence to be convincing.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "claim",
        "partOfSpeech": "noun",
        "definition": "a statement presented as true and open to support or challenge",
        "example": "The passage’s central claim is that the reform improved access.",
        "synonyms": [
          "assertion",
          "proposition"
        ],
        "collocations": [
          "central claim",
          "support a claim"
        ],
        "usageNote": "A claim is the idea an argument asks readers to accept.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "compelling",
        "partOfSpeech": "adjective",
        "definition": "strongly convincing or persuasive",
        "example": "The researcher presents compelling evidence for the revised explanation.",
        "synonyms": [
          "persuasive",
          "convincing"
        ],
        "collocations": [
          "compelling evidence",
          "compelling argument"
        ],
        "usageNote": "Compelling describes evidence or reasoning that is difficult to dismiss.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "concede",
        "partOfSpeech": "verb",
        "definition": "to admit that something is true, often before making a counterargument",
        "example": "The critic concedes that the plan is ambitious but questions its cost.",
        "synonyms": [
          "acknowledge",
          "admit"
        ],
        "collocations": [
          "concede that",
          "concede a point"
        ],
        "usageNote": "Concession often strengthens an argument by recognizing a valid opposing point.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "contend",
        "partOfSpeech": "verb",
        "definition": "to argue or maintain that something is true",
        "example": "Several historians contend that the policy had broader effects than previously recognized.",
        "synonyms": [
          "argue",
          "maintain"
        ],
        "collocations": [
          "contend that",
          "scholars contend"
        ],
        "usageNote": "Contend signals a debatable position, not an established fact.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "counterargument",
        "partOfSpeech": "noun",
        "definition": "an argument that challenges another argument",
        "example": "The essay addresses the strongest counterargument before restating its thesis.",
        "synonyms": [
          "objection",
          "rebuttal"
        ],
        "collocations": [
          "address a counterargument",
          "strong counterargument"
        ],
        "usageNote": "A counterargument presents a competing line of reasoning.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "critique",
        "partOfSpeech": "noun",
        "definition": "a detailed analysis that identifies strengths and weaknesses",
        "example": "The article offers a critique of the conventional model.",
        "synonyms": [
          "evaluation",
          "review"
        ],
        "collocations": [
          "critical critique",
          "offer a critique"
        ],
        "usageNote": "A critique is analytical and need not be entirely negative.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "justify",
        "partOfSpeech": "verb",
        "definition": "to provide reasons or evidence showing that something is reasonable",
        "example": "The available evidence does not justify such a broad conclusion.",
        "synonyms": [
          "support",
          "warrant"
        ],
        "collocations": [
          "justify a conclusion",
          "justify the decision"
        ],
        "usageNote": "Justify means show why a claim or action is reasonable.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "plausible",
        "partOfSpeech": "adjective",
        "definition": "seemingly reasonable or likely to be true",
        "example": "The explanation is plausible, but it has not yet been tested.",
        "synonyms": [
          "credible",
          "reasonable"
        ],
        "collocations": [
          "plausible explanation",
          "highly plausible"
        ],
        "usageNote": "Plausible does not mean proven.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "premise",
        "partOfSpeech": "noun",
        "definition": "a statement or assumption on which an argument is based",
        "example": "The argument depends on the premise that consumers have complete information.",
        "synonyms": [
          "assumption",
          "proposition"
        ],
        "collocations": [
          "basic premise",
          "underlying premise"
        ],
        "usageNote": "A weak premise can undermine an otherwise logical argument.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "qualify",
        "partOfSpeech": "verb",
        "definition": "to limit or modify a statement so that it is more precise",
        "example": "The author qualifies the claim by noting that the trend applies only to urban areas.",
        "synonyms": [
          "limit",
          "modify"
        ],
        "collocations": [
          "qualify a claim",
          "carefully qualify"
        ],
        "usageNote": "Qualifying language narrows certainty or scope.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "refute",
        "partOfSpeech": "verb",
        "definition": "to prove that a claim or argument is false",
        "example": "The new evidence refutes the idea that the species disappeared suddenly.",
        "synonyms": [
          "disprove",
          "rebut"
        ],
        "collocations": [
          "refute a claim",
          "attempt to refute"
        ],
        "usageNote": "Refute is stronger than disagree; it requires evidence.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "relevant",
        "partOfSpeech": "adjective",
        "definition": "directly connected to the matter being considered",
        "example": "The reviewer excludes details that are not relevant to the main question.",
        "synonyms": [
          "applicable",
          "pertinent"
        ],
        "collocations": [
          "relevant evidence",
          "directly relevant"
        ],
        "usageNote": "Relevant evidence must bear directly on the claim.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "warrant",
        "partOfSpeech": "verb",
        "definition": "to justify or make a conclusion reasonable",
        "example": "The limited data do not warrant a nationwide policy change.",
        "synonyms": [
          "justify",
          "support"
        ],
        "collocations": [
          "warrant a conclusion",
          "warrant concern"
        ],
        "usageNote": "Warrant often appears when judging whether evidence supports an action or conclusion.",
        "group": "Argument and Evaluation"
      },
      {
        "word": "adapt",
        "partOfSpeech": "verb",
        "definition": "to change in response to new conditions",
        "example": "Many species adapt to seasonal changes in food supply.",
        "synonyms": [
          "adjust",
          "modify"
        ],
        "collocations": [
          "adapt to",
          "adapt a method"
        ],
        "usageNote": "Adapt to means adjust oneself; adapt something means modify it.",
        "group": "Change and Development"
      },
      {
        "word": "alter",
        "partOfSpeech": "verb",
        "definition": "to change something, usually without completely replacing it",
        "example": "The discovery altered scientists’ understanding of the region’s climate history.",
        "synonyms": [
          "modify",
          "change"
        ],
        "collocations": [
          "significantly alter",
          "alter a pattern"
        ],
        "usageNote": "Alter suggests modification rather than total transformation.",
        "group": "Change and Development"
      },
      {
        "word": "decline",
        "partOfSpeech": "noun",
        "definition": "a decrease in amount, quality, or strength",
        "example": "The report documents a decline in local biodiversity.",
        "synonyms": [
          "decrease",
          "reduction"
        ],
        "collocations": [
          "sharp decline",
          "decline in"
        ],
        "usageNote": "Decline can be a noun or verb.",
        "group": "Change and Development"
      },
      {
        "word": "evolve",
        "partOfSpeech": "verb",
        "definition": "to develop gradually over time",
        "example": "The legal doctrine evolved through a series of court decisions.",
        "synonyms": [
          "develop",
          "progress"
        ],
        "collocations": [
          "gradually evolve",
          "evolve into"
        ],
        "usageNote": "Evolve does not always imply biological evolution.",
        "group": "Change and Development"
      },
      {
        "word": "fluctuate",
        "partOfSpeech": "verb",
        "definition": "to rise and fall irregularly",
        "example": "Energy prices fluctuate in response to seasonal demand.",
        "synonyms": [
          "vary",
          "oscillate"
        ],
        "collocations": [
          "prices fluctuate",
          "fluctuate over time"
        ],
        "usageNote": "Fluctuation involves repeated or irregular change.",
        "group": "Change and Development"
      },
      {
        "word": "innovation",
        "partOfSpeech": "noun",
        "definition": "a new idea, method, or product",
        "example": "The innovation reduced production costs without lowering quality.",
        "synonyms": [
          "advance",
          "novelty"
        ],
        "collocations": [
          "technological innovation",
          "drive innovation"
        ],
        "usageNote": "Innovation emphasizes novelty plus practical change.",
        "group": "Change and Development"
      },
      {
        "word": "persist",
        "partOfSpeech": "verb",
        "definition": "to continue despite difficulty or over time",
        "example": "The pattern persisted even after researchers controlled for age.",
        "synonyms": [
          "continue",
          "endure"
        ],
        "collocations": [
          "persist over time",
          "problem persists"
        ],
        "usageNote": "Persist often highlights duration or resistance to change.",
        "group": "Change and Development"
      },
      {
        "word": "reform",
        "partOfSpeech": "noun",
        "definition": "a change intended to improve a system or institution",
        "example": "The legislation introduced major reforms to the election process.",
        "synonyms": [
          "improvement",
          "revision"
        ],
        "collocations": [
          "policy reform",
          "implement reform"
        ],
        "usageNote": "Reform implies purposeful improvement, not merely change.",
        "group": "Change and Development"
      },
      {
        "word": "shift",
        "partOfSpeech": "noun",
        "definition": "a change in position, direction, or emphasis",
        "example": "The data reveal a shift in public attitudes toward remote work.",
        "synonyms": [
          "change",
          "transition"
        ],
        "collocations": [
          "major shift",
          "shift in emphasis"
        ],
        "usageNote": "Shift often describes gradual changes in trends or priorities.",
        "group": "Change and Development"
      },
      {
        "word": "transform",
        "partOfSpeech": "verb",
        "definition": "to change something substantially in form or character",
        "example": "Digital tools transformed how researchers share data.",
        "synonyms": [
          "convert",
          "reshape"
        ],
        "collocations": [
          "transform into",
          "radically transform"
        ],
        "usageNote": "Transform implies a major, not minor, change.",
        "group": "Change and Development"
      },
      {
        "word": "trend",
        "partOfSpeech": "noun",
        "definition": "a general direction in which something is changing",
        "example": "The graph shows a long-term trend toward lower energy use.",
        "synonyms": [
          "pattern",
          "tendency"
        ],
        "collocations": [
          "long-term trend",
          "upward trend"
        ],
        "usageNote": "A trend describes direction over time, not a single data point.",
        "group": "Change and Development"
      },
      {
        "word": "abundant",
        "partOfSpeech": "adjective",
        "definition": "existing in large quantities",
        "example": "Fresh water is abundant in the region during the spring.",
        "synonyms": [
          "plentiful",
          "ample"
        ],
        "collocations": [
          "abundant evidence",
          "abundant resources"
        ],
        "usageNote": "Abundant means more than sufficient.",
        "group": "Quantity and Significance"
      },
      {
        "word": "approximate",
        "partOfSpeech": "adjective",
        "definition": "close to the actual value but not exact",
        "example": "The approximate population was calculated from incomplete records.",
        "synonyms": [
          "estimated",
          "rough"
        ],
        "collocations": [
          "approximate value",
          "approximate number"
        ],
        "usageNote": "Approximate signals acceptable imprecision.",
        "group": "Quantity and Significance"
      },
      {
        "word": "considerable",
        "partOfSpeech": "adjective",
        "definition": "large enough to be important or noticeable",
        "example": "The proposal received considerable support from local businesses.",
        "synonyms": [
          "substantial",
          "significant"
        ],
        "collocations": [
          "considerable amount",
          "considerable evidence"
        ],
        "usageNote": "Considerable means notably large, not merely present.",
        "group": "Quantity and Significance"
      },
      {
        "word": "disproportionate",
        "partOfSpeech": "adjective",
        "definition": "too large or too small in relation to something else",
        "example": "The change had a disproportionate effect on low-income households.",
        "synonyms": [
          "unequal",
          "imbalanced"
        ],
        "collocations": [
          "disproportionate impact",
          "disproportionate share"
        ],
        "usageNote": "Disproportionate expresses an imbalance relative to a baseline.",
        "group": "Quantity and Significance"
      },
      {
        "word": "marginal",
        "partOfSpeech": "adjective",
        "definition": "small, limited, or near the edge of significance",
        "example": "The second treatment produced only a marginal improvement.",
        "synonyms": [
          "slight",
          "minimal"
        ],
        "collocations": [
          "marginal increase",
          "marginal effect"
        ],
        "usageNote": "Marginal often means too small to matter much.",
        "group": "Quantity and Significance"
      },
      {
        "word": "negligible",
        "partOfSpeech": "adjective",
        "definition": "so small or unimportant that it can be ignored",
        "example": "The difference between the two measurements was negligible.",
        "synonyms": [
          "insignificant",
          "minimal"
        ],
        "collocations": [
          "negligible effect",
          "negligible amount"
        ],
        "usageNote": "Negligible is weaker than small: it suggests practical unimportance.",
        "group": "Quantity and Significance"
      },
      {
        "word": "prevalent",
        "partOfSpeech": "adjective",
        "definition": "common or widespread in a particular place or time",
        "example": "The custom was prevalent throughout the region in the nineteenth century.",
        "synonyms": [
          "widespread",
          "common"
        ],
        "collocations": [
          "highly prevalent",
          "prevalent among"
        ],
        "usageNote": "Prevalent describes frequency or distribution.",
        "group": "Quantity and Significance"
      },
      {
        "word": "proportion",
        "partOfSpeech": "noun",
        "definition": "a part or share of a whole",
        "example": "A large proportion of respondents preferred the revised design.",
        "synonyms": [
          "fraction",
          "share"
        ],
        "collocations": [
          "large proportion",
          "in proportion to"
        ],
        "usageNote": "Proportion compares a part with a whole or with another quantity.",
        "group": "Quantity and Significance"
      },
      {
        "word": "significant",
        "partOfSpeech": "adjective",
        "definition": "important, meaningful, or unlikely to be due to chance",
        "example": "The study found a statistically significant difference between the groups.",
        "synonyms": [
          "important",
          "notable"
        ],
        "collocations": [
          "significant effect",
          "statistically significant"
        ],
        "usageNote": "In research, significant may have a precise statistical meaning.",
        "group": "Quantity and Significance"
      },
      {
        "word": "substantial",
        "partOfSpeech": "adjective",
        "definition": "large in amount, value, or importance",
        "example": "The new evidence provides substantial support for the theory.",
        "synonyms": [
          "considerable",
          "sizable"
        ],
        "collocations": [
          "substantial evidence",
          "substantial increase"
        ],
        "usageNote": "Substantial suggests a meaningful amount.",
        "group": "Quantity and Significance"
      },
      {
        "word": "aggregate",
        "partOfSpeech": "adjective",
        "definition": "formed by combining several separate elements",
        "example": "The report presents aggregate data rather than individual responses.",
        "synonyms": [
          "combined",
          "total"
        ],
        "collocations": [
          "aggregate data",
          "aggregate demand"
        ],
        "usageNote": "Aggregate refers to a combined whole.",
        "group": "Quantity and Significance"
      },
      {
        "word": "institution",
        "partOfSpeech": "noun",
        "definition": "an established organization or system in society",
        "example": "Universities are institutions that preserve and produce knowledge.",
        "synonyms": [
          "organization",
          "establishment"
        ],
        "collocations": [
          "public institution",
          "social institution"
        ],
        "usageNote": "Institution can mean an organization or a durable social practice.",
        "group": "Institutions and Society"
      },
      {
        "word": "legislation",
        "partOfSpeech": "noun",
        "definition": "laws considered or enacted by a governing body",
        "example": "The legislation expanded access to public records.",
        "synonyms": [
          "law",
          "statute"
        ],
        "collocations": [
          "proposed legislation",
          "pass legislation"
        ],
        "usageNote": "Legislation is a collective noun for laws or lawmaking proposals.",
        "group": "Institutions and Society"
      },
      {
        "word": "policy",
        "partOfSpeech": "noun",
        "definition": "a principle or plan used to guide decisions",
        "example": "The city adopted a policy encouraging energy-efficient construction.",
        "synonyms": [
          "guideline",
          "strategy"
        ],
        "collocations": [
          "public policy",
          "implement a policy"
        ],
        "usageNote": "Policy describes an official course of action.",
        "group": "Institutions and Society"
      },
      {
        "word": "regulate",
        "partOfSpeech": "verb",
        "definition": "to control an activity through rules or standards",
        "example": "Federal agencies regulate the safety of commercial aviation.",
        "synonyms": [
          "control",
          "govern"
        ],
        "collocations": [
          "regulate industry",
          "strictly regulate"
        ],
        "usageNote": "Regulation imposes standards rather than necessarily banning something.",
        "group": "Institutions and Society"
      },
      {
        "word": "authority",
        "partOfSpeech": "noun",
        "definition": "the power or right to make decisions or enforce rules",
        "example": "The agency has the authority to issue safety standards.",
        "synonyms": [
          "power",
          "jurisdiction"
        ],
        "collocations": [
          "legal authority",
          "exercise authority"
        ],
        "usageNote": "Authority can refer to power or to an expert source.",
        "group": "Institutions and Society"
      },
      {
        "word": "community",
        "partOfSpeech": "noun",
        "definition": "a group of people connected by place, identity, or shared interests",
        "example": "The project was designed in consultation with the local community.",
        "synonyms": [
          "population",
          "group"
        ],
        "collocations": [
          "local community",
          "scientific community"
        ],
        "usageNote": "Academic texts may use community for geographic, professional, or cultural groups.",
        "group": "Institutions and Society"
      },
      {
        "word": "demographic",
        "partOfSpeech": "adjective",
        "definition": "relating to characteristics of populations",
        "example": "The survey revealed important demographic differences in media use.",
        "synonyms": [
          "population-based",
          "statistical"
        ],
        "collocations": [
          "demographic group",
          "demographic data"
        ],
        "usageNote": "Demographic characteristics include age, income, education, and location.",
        "group": "Institutions and Society"
      },
      {
        "word": "equity",
        "partOfSpeech": "noun",
        "definition": "fairness in access, treatment, or outcomes",
        "example": "The policy aims to improve equity in educational opportunity.",
        "synonyms": [
          "fairness",
          "justice"
        ],
        "collocations": [
          "social equity",
          "promote equity"
        ],
        "usageNote": "Equity focuses on fairness; equality focuses on sameness.",
        "group": "Institutions and Society"
      },
      {
        "word": "incentive",
        "partOfSpeech": "noun",
        "definition": "something that motivates or encourages action",
        "example": "Tax credits provide an incentive for companies to invest in clean energy.",
        "synonyms": [
          "motivation",
          "inducement"
        ],
        "collocations": [
          "financial incentive",
          "create an incentive"
        ],
        "usageNote": "An incentive changes the costs or benefits of a choice.",
        "group": "Institutions and Society"
      },
      {
        "word": "infrastructure",
        "partOfSpeech": "noun",
        "definition": "the basic physical or organizational systems needed for a society or activity",
        "example": "Reliable internet infrastructure supports economic development.",
        "synonyms": [
          "facilities",
          "systems"
        ],
        "collocations": [
          "public infrastructure",
          "transportation infrastructure"
        ],
        "usageNote": "Infrastructure includes networks such as roads, power, water, and communications.",
        "group": "Institutions and Society"
      },
      {
        "word": "norm",
        "partOfSpeech": "noun",
        "definition": "a standard or expectation shared by a group",
        "example": "The study examines how social norms influence consumer behavior.",
        "synonyms": [
          "standard",
          "convention"
        ],
        "collocations": [
          "social norm",
          "cultural norm"
        ],
        "usageNote": "A norm is an expected pattern of behavior, not necessarily a law.",
        "group": "Institutions and Society"
      },
      {
        "word": "resource",
        "partOfSpeech": "noun",
        "definition": "a useful supply, asset, or source of support",
        "example": "The library provides digital resources for independent research.",
        "synonyms": [
          "asset",
          "supply"
        ],
        "collocations": [
          "natural resource",
          "allocate resources"
        ],
        "usageNote": "Resources may be material, financial, informational, or human.",
        "group": "Institutions and Society"
      },
      {
        "word": "sector",
        "partOfSpeech": "noun",
        "definition": "a distinct part of an economy, society, or field",
        "example": "Employment grew fastest in the technology sector.",
        "synonyms": [
          "division",
          "segment"
        ],
        "collocations": [
          "private sector",
          "economic sector"
        ],
        "usageNote": "Sector identifies one broad segment of a larger system.",
        "group": "Institutions and Society"
      },
      {
        "word": "stakeholder",
        "partOfSpeech": "noun",
        "definition": "a person or group affected by or interested in a decision",
        "example": "The planning process included residents, businesses, and other stakeholders.",
        "synonyms": [
          "participant",
          "interested party"
        ],
        "collocations": [
          "key stakeholder",
          "stakeholder input"
        ],
        "usageNote": "Stakeholders may influence a decision or experience its consequences.",
        "group": "Institutions and Society"
      },
      {
        "word": "structure",
        "partOfSpeech": "noun",
        "definition": "the arrangement of parts within a whole",
        "example": "The article’s structure moves from historical background to current evidence.",
        "synonyms": [
          "organization",
          "framework"
        ],
        "collocations": [
          "social structure",
          "organizational structure"
        ],
        "usageNote": "Structure can describe texts, institutions, systems, or physical forms.",
        "group": "Institutions and Society"
      },
      {
        "word": "allocate",
        "partOfSpeech": "verb",
        "definition": "to distribute resources for a particular purpose",
        "example": "The district allocated additional funds to schools with the greatest need.",
        "synonyms": [
          "assign",
          "distribute"
        ],
        "collocations": [
          "allocate resources",
          "allocate funds"
        ],
        "usageNote": "Allocate implies deliberate distribution according to priorities.",
        "group": "Institutions and Society"
      },
      {
        "word": "constraint",
        "partOfSpeech": "noun",
        "definition": "a limitation or restriction",
        "example": "Budget constraints prevented the researchers from expanding the sample.",
        "synonyms": [
          "limit",
          "restriction"
        ],
        "collocations": [
          "time constraint",
          "budget constraint"
        ],
        "usageNote": "A constraint restricts available choices or actions.",
        "group": "Institutions and Society"
      }
    ],
    "quiz": [
      {
        "question": "The researchers repeated the experiment in three independent laboratories to ______ the original findings.",
        "choices": [
          "corroborate",
          "qualify",
          "fluctuate",
          "allocate"
        ],
        "answer": 0,
        "explanation": "Corroborate means confirm a claim with additional independent evidence."
      },
      {
        "question": "Because the survey included only volunteers, the authors warn that selection ______ may limit the conclusions.",
        "choices": [
          "equity",
          "bias",
          "norm",
          "incentive"
        ],
        "answer": 1,
        "explanation": "Selection bias occurs when the sample is systematically unrepresentative."
      },
      {
        "question": "The passage first presents the benefits of the policy and then introduces a strong ______ concerning its cost.",
        "choices": [
          "parameter",
          "counterargument",
          "aggregate",
          "framework"
        ],
        "answer": 1,
        "explanation": "A counterargument challenges the original argument."
      },
      {
        "question": "The evidence is suggestive but not conclusive, so the author ______ the claim by limiting it to one region.",
        "choices": [
          "refutes",
          "qualifies",
          "triggers",
          "replicates"
        ],
        "answer": 1,
        "explanation": "To qualify a claim is to narrow or limit it."
      },
      {
        "question": "A sharp increase in fuel prices ______ a broader debate about transportation policy.",
        "choices": [
          "precipitated",
          "verified",
          "allocated",
          "interpreted"
        ],
        "answer": 0,
        "explanation": "Precipitated means caused something to happen, often suddenly."
      },
      {
        "question": "Which word best describes evidence based on direct observation and experiment?",
        "choices": [
          "Empirical",
          "Plausible",
          "Marginal",
          "Analogous"
        ],
        "answer": 0,
        "explanation": "Empirical evidence comes from observation or experimentation."
      },
      {
        "question": "The two studies used samples of similar size and age distribution, making their results reasonably ______.",
        "choices": [
          "negligible",
          "comparable",
          "prevalent",
          "tentative"
        ],
        "answer": 1,
        "explanation": "Comparable means similar enough for a meaningful comparison."
      },
      {
        "question": "The study found only a ______ improvement, too small to justify the program’s cost.",
        "choices": [
          "substantial",
          "compelling",
          "marginal",
          "abundant"
        ],
        "answer": 2,
        "explanation": "Marginal means small or limited."
      },
      {
        "question": "The author’s central ______ is that urban design influences public health.",
        "choices": [
          "claim",
          "sample",
          "sector",
          "parameter"
        ],
        "answer": 0,
        "explanation": "A claim is the main proposition an argument asks readers to accept."
      },
      {
        "question": "The data do not ______ the conclusion that the policy works in every community.",
        "choices": [
          "warrant",
          "fluctuate",
          "adapt",
          "contrast"
        ],
        "answer": 0,
        "explanation": "Warrant means justify or support a conclusion."
      },
      {
        "question": "The interviews produced ______ evidence about how participants experienced the program.",
        "choices": [
          "quantitative",
          "qualitative",
          "aggregate",
          "disproportionate"
        ],
        "answer": 1,
        "explanation": "Qualitative evidence focuses on descriptions and meanings rather than numbers."
      },
      {
        "question": "The team used a nationally representative ______ rather than surveying the entire population.",
        "choices": [
          "premise",
          "sample",
          "norm",
          "outcome"
        ],
        "answer": 1,
        "explanation": "A sample is a smaller group chosen to represent a larger population."
      },
      {
        "question": "The new evidence directly ______ the earlier claim by showing that the species survived for centuries longer.",
        "choices": [
          "refutes",
          "concedes",
          "derives",
          "implements"
        ],
        "answer": 0,
        "explanation": "Refute means prove a claim false with evidence."
      },
      {
        "question": "The court decision served as a ______ for reform across several states.",
        "choices": [
          "constraint",
          "catalyst",
          "proportion",
          "methodology"
        ],
        "answer": 1,
        "explanation": "A catalyst causes or accelerates change."
      },
      {
        "question": "The report distinguishes equality from ______, which focuses on fairness in access and outcomes.",
        "choices": [
          "authority",
          "equity",
          "infrastructure",
          "legislation"
        ],
        "answer": 1,
        "explanation": "Equity concerns fairness, while equality concerns sameness."
      },
      {
        "question": "The researchers controlled every ______ except the amount of light.",
        "choices": [
          "variable",
          "stakeholder",
          "premise",
          "sector"
        ],
        "answer": 0,
        "explanation": "A variable is a factor that can change or take different values."
      },
      {
        "question": "The difference between the two measurements was so small that it was considered ______.",
        "choices": [
          "considerable",
          "negligible",
          "prevalent",
          "compelling"
        ],
        "answer": 1,
        "explanation": "Negligible means too small or unimportant to matter."
      },
      {
        "question": "The theory provides a useful ______ for organizing evidence about social change.",
        "choices": [
          "framework",
          "consequence",
          "incentive",
          "distinction"
        ],
        "answer": 0,
        "explanation": "A framework is a structure of ideas used to organize information."
      },
      {
        "question": "The district decided to ______ more funds to schools with aging science laboratories.",
        "choices": [
          "infer",
          "allocate",
          "replicate",
          "differentiate"
        ],
        "answer": 1,
        "explanation": "Allocate means distribute resources for a purpose."
      },
      {
        "question": "The author ______ that the plan has benefits but argues that its costs remain too high.",
        "choices": [
          "concedes",
          "verifies",
          "generates",
          "regulates"
        ],
        "answer": 0,
        "explanation": "Concede means admit a point, often before presenting a counterargument."
      }
    ]
  },
  "confusing-word-pairs": {
  "id": "confusing-word-pairs",
  "title": "Confusing Word Pairs",
  "number": "17",
  "tagline": "Distinguish frequently confused words by meaning, grammar, context, and common usage.",
  "strategy": [
    "Identify each word's part of speech",
    "State the precise distinction",
    "Look for grammar and collocation clues",
    "Substitute each option into the sentence",
    "Confirm that both meaning and usage fit"
  ],
  "concepts": [
    {
      "title": "Meaning",
      "description": "Separate words that sound similar but express different ideas."
    },
    {
      "title": "Grammar",
      "description": "Check whether the blank requires a noun, verb, adjective, pronoun, or contraction."
    },
    {
      "title": "Direction",
      "description": "Notice relationships such as from versus to, sender versus receiver, or cause versus result."
    },
    {
      "title": "Collocation",
      "description": "Use familiar combinations such as infer from, averse to, and pique interest."
    },
    {
      "title": "Context",
      "description": "Read the entire sentence; one nearby clue often eliminates the tempting choice."
    }
  ],
  "vocabulary": [
    {
      "word": "affect vs. effect",
      "definition": "Affect is usually a verb meaning to influence; effect is usually a noun meaning a result.",
      "example": "The policy may affect attendance, but its long-term effect is still unknown.",
      "partOfSpeech": "verb vs. noun",
      "collocations": [
        "affect behavior",
        "produce an effect"
      ],
      "usageNote": "Use affect for the action and effect for the result. Effect can also be a formal verb meaning to bring about.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "adapt vs. adopt",
      "definition": "Adapt means to modify for a new use or environment; adopt means to take up, accept, or begin using.",
      "example": "The team adapted the survey for teenagers and adopted a new scoring method.",
      "partOfSpeech": "verbs",
      "collocations": [
        "adapt to change",
        "adopt a policy"
      ],
      "usageNote": "Ask whether something is being changed or being accepted.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "adverse vs. averse",
      "definition": "Adverse means harmful or unfavorable; averse means strongly opposed or unwilling.",
      "example": "The drug caused no adverse effects, but some patients were averse to taking it daily.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "adverse conditions",
        "averse to risk"
      ],
      "usageNote": "Averse is normally followed by to.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "allude vs. elude",
      "definition": "Allude means to refer indirectly; elude means to escape, avoid, or remain difficult to grasp.",
      "example": "The poet alludes to mythology, but the poem's final meaning may elude some readers.",
      "partOfSpeech": "verbs",
      "collocations": [
        "allude to a source",
        "elude detection"
      ],
      "usageNote": "Allude always takes to when naming the reference.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "assure vs. ensure vs. insure",
      "definition": "Assure means to reassure a person; ensure means to make certain; insure means to provide insurance.",
      "example": "The director assured the staff that new checks would ensure accuracy, and the company insured the equipment.",
      "partOfSpeech": "verbs",
      "collocations": [
        "assure someone",
        "ensure compliance",
        "insure property"
      ],
      "usageNote": "Match the verb to a person, a guaranteed outcome, or financial coverage.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "cite vs. site vs. sight",
      "definition": "Cite means to quote or reference; site means a location; sight relates to seeing.",
      "example": "The report cites a study conducted at a coastal site within sight of the lighthouse.",
      "partOfSpeech": "verb and nouns",
      "collocations": [
        "cite evidence",
        "research site",
        "within sight"
      ],
      "usageNote": "These homophones have distinct grammatical and semantic roles.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "complement vs. compliment",
      "definition": "Complement means to complete or enhance; compliment means praise.",
      "example": "The map complements the article, and the reviewer compliments the designer's clarity.",
      "partOfSpeech": "verb or noun",
      "collocations": [
        "complement a feature",
        "pay a compliment"
      ],
      "usageNote": "Complement is about fit; compliment is about praise.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "conscience vs. conscious",
      "definition": "Conscience is a noun referring to moral awareness; conscious is an adjective meaning aware or deliberate.",
      "example": "Her conscience troubled her because she was conscious of the unequal treatment.",
      "partOfSpeech": "noun vs. adjective",
      "collocations": [
        "clear conscience",
        "conscious decision"
      ],
      "usageNote": "Conscious can also describe being awake.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "continual vs. continuous",
      "definition": "Continual means recurring with interruptions; continuous means unbroken.",
      "example": "Continual updates occurred during the continuous twenty-four-hour observation.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "continual interruptions",
        "continuous process"
      ],
      "usageNote": "Decide whether pauses occur.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "credible vs. credulous",
      "definition": "Credible means believable; credulous means too ready to believe.",
      "example": "The source was credible, but a credulous audience accepted even its unsupported claims.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "credible evidence",
        "credulous reader"
      ],
      "usageNote": "One describes information; the other usually describes a person.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "deduce vs. induce",
      "definition": "Deduce means to reach a conclusion from evidence; induce means to cause or bring about.",
      "example": "Researchers deduced the cause after a chemical induced the same reaction in a second trial.",
      "partOfSpeech": "verbs",
      "collocations": [
        "deduce from evidence",
        "induce a response"
      ],
      "usageNote": "Deduction is reasoning; induction here is causation.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "discreet vs. discrete",
      "definition": "Discreet means tactful or unobtrusive; discrete means separate and distinct.",
      "example": "The interviewer was discreet when discussing the three discrete groups in the study.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "discreet inquiry",
        "discrete categories"
      ],
      "usageNote": "Discrete contains 'ete,' suggesting separate units.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "emigrate vs. immigrate",
      "definition": "Emigrate means to leave a country; immigrate means to enter a country to live.",
      "example": "Her grandparents emigrated from Italy and immigrated to the United States.",
      "partOfSpeech": "verbs",
      "collocations": [
        "emigrate from",
        "immigrate to"
      ],
      "usageNote": "The prepositions from and to reveal the direction.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "eminent vs. imminent",
      "definition": "Eminent means distinguished or prominent; imminent means about to happen.",
      "example": "An eminent scientist warned that a major breakthrough was imminent.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "eminent scholar",
        "imminent change"
      ],
      "usageNote": "One concerns status; the other concerns timing.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "explicit vs. implicit",
      "definition": "Explicit means directly stated; implicit means suggested without being stated.",
      "example": "The contract gives explicit deadlines but leaves the penalty implicit.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "explicit statement",
        "implicit assumption"
      ],
      "usageNote": "SAT questions often ask whether an idea is stated or inferred.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "fewer vs. less",
      "definition": "Fewer generally modifies countable items; less generally modifies uncountable amounts.",
      "example": "The revised design uses fewer parts and requires less energy.",
      "partOfSpeech": "determiners",
      "collocations": [
        "fewer errors",
        "less time"
      ],
      "usageNote": "Use fewer when individual units can be counted.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "formally vs. formerly",
      "definition": "Formally means officially or according to convention; formerly means previously.",
      "example": "The building formerly housed a bank but was formally designated a landmark in 2018.",
      "partOfSpeech": "adverbs",
      "collocations": [
        "formally announce",
        "formerly known as"
      ],
      "usageNote": "The r changes the word from manner to time.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "historic vs. historical",
      "definition": "Historic means important in history; historical means related to the past or its study.",
      "example": "The historic ruling is examined in several historical essays.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "historic decision",
        "historical record"
      ],
      "usageNote": "Not every historical event is historic.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "imply vs. infer",
      "definition": "A speaker or text implies; a reader or listener infers.",
      "example": "The author implies that costs will rise, and readers infer that the plan may be delayed.",
      "partOfSpeech": "verbs",
      "collocations": [
        "imply a connection",
        "infer from evidence"
      ],
      "usageNote": "Track who sends the suggestion and who draws the conclusion.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "incidence vs. incidents",
      "definition": "Incidence means frequency or rate; incidents are separate events.",
      "example": "The incidence of equipment failure declined, although two minor incidents occurred.",
      "partOfSpeech": "nouns",
      "collocations": [
        "incidence rate",
        "reported incidents"
      ],
      "usageNote": "Incidence is often used in scientific and statistical contexts.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "ingenious vs. ingenuous",
      "definition": "Ingenious means clever or inventive; ingenuous means innocent, candid, or unsophisticated.",
      "example": "The engineer proposed an ingenious solution, while her ingenuous explanation revealed complete honesty.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "ingenious design",
        "ingenuous response"
      ],
      "usageNote": "Ingenious relates to ingenuity; ingenuous relates to openness.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "its vs. it's",
      "definition": "Its is possessive; it's is a contraction of it is or it has.",
      "example": "The committee revised its report because it's missing a key citation.",
      "partOfSpeech": "possessive vs. contraction",
      "collocations": [
        "its purpose",
        "it's clear"
      ],
      "usageNote": "Expand it's to it is or it has to test the sentence.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "lay vs. lie",
      "definition": "Lay means to place something and takes an object; lie means to recline and does not take an object.",
      "example": "Lay the samples on the tray, then let them lie undisturbed.",
      "partOfSpeech": "verbs",
      "collocations": [
        "lay the foundation",
        "lie dormant"
      ],
      "usageNote": "Past forms differ: laid for lay; lay for lie.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "loath vs. loathe",
      "definition": "Loath is an adjective meaning reluctant; loathe is a verb meaning to hate intensely.",
      "example": "The editor was loath to remove a passage that readers seemed to loathe.",
      "partOfSpeech": "adjective vs. verb",
      "collocations": [
        "loath to admit",
        "loathe hypocrisy"
      ],
      "usageNote": "The final e signals the verb and changes pronunciation.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "moral vs. morale",
      "definition": "Moral concerns ethics or a lesson; morale is the confidence or enthusiasm of a group.",
      "example": "The leader's moral argument improved the team's morale.",
      "partOfSpeech": "adjective/noun vs. noun",
      "collocations": [
        "moral principle",
        "boost morale"
      ],
      "usageNote": "Morale almost always concerns emotional condition.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "personal vs. personnel",
      "definition": "Personal means private or individual; personnel means employees or staff.",
      "example": "Personnel records contain personal information and must remain secure.",
      "partOfSpeech": "adjective vs. noun",
      "collocations": [
        "personal opinion",
        "military personnel"
      ],
      "usageNote": "Personnel is usually plural in meaning even without an s.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "precede vs. proceed",
      "definition": "Precede means to come before; proceed means to continue or move forward.",
      "example": "A brief introduction will precede the lecture, after which the speaker will proceed to the evidence.",
      "partOfSpeech": "verbs",
      "collocations": [
        "precede an event",
        "proceed with caution"
      ],
      "usageNote": "Pre- signals before; pro- here signals forward.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "prescribe vs. proscribe",
      "definition": "Prescribe means to recommend or order; proscribe means to prohibit.",
      "example": "The guidelines prescribe safety checks and proscribe the use of damaged equipment.",
      "partOfSpeech": "verbs",
      "collocations": [
        "prescribe treatment",
        "proscribe conduct"
      ],
      "usageNote": "The words express nearly opposite actions.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "principal vs. principle",
      "definition": "Principal means main or can name a school leader; principle is a rule or belief.",
      "example": "The principal reason for the policy is the principle of equal access.",
      "partOfSpeech": "adjective/noun vs. noun",
      "collocations": [
        "principal cause",
        "guiding principle"
      ],
      "usageNote": "Principal can be remembered as the main person or thing.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "respectfully vs. respectively",
      "definition": "Respectfully means politely; respectively links items in the order already given.",
      "example": "The two speakers respectfully disagreed; their approval ratings were 54 and 61 percent, respectively.",
      "partOfSpeech": "adverbs",
      "collocations": [
        "respectfully request",
        "A and B, respectively"
      ],
      "usageNote": "Respectively requires a parallel ordered list.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "stationary vs. stationery",
      "definition": "Stationary means not moving; stationery means writing materials.",
      "example": "The bicycle remained stationary beside a shop that sold stationery.",
      "partOfSpeech": "adjective vs. noun",
      "collocations": [
        "stationary object",
        "office stationery"
      ],
      "usageNote": "Stationery has e for envelope.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "than vs. then",
      "definition": "Than introduces comparisons; then refers to time or consequence.",
      "example": "The second method was faster than the first, so researchers then tested it again.",
      "partOfSpeech": "conjunction/preposition vs. adverb",
      "collocations": [
        "greater than",
        "then concluded"
      ],
      "usageNote": "Use than only when comparing.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "their vs. there vs. they're",
      "definition": "Their is possessive; there indicates place or existence; they're means they are.",
      "example": "They're presenting their findings over there after lunch.",
      "partOfSpeech": "possessive, adverb, contraction",
      "collocations": [
        "their study",
        "there is",
        "they're ready"
      ],
      "usageNote": "Expand they're to they are; identify ownership for their.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "who vs. whom",
      "definition": "Who functions as a subject; whom functions as an object.",
      "example": "The researcher who led the study thanked the colleague whom the committee honored.",
      "partOfSpeech": "pronouns",
      "collocations": [
        "who argues",
        "to whom"
      ],
      "usageNote": "Substitute he for who and him for whom.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "whose vs. who's",
      "definition": "Whose is possessive; who's is a contraction of who is or who has.",
      "example": "The author whose article won the award is someone who's studied the topic for years.",
      "partOfSpeech": "possessive vs. contraction",
      "collocations": [
        "whose claim",
        "who's responsible"
      ],
      "usageNote": "Expand who's to test it.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "accept vs. except",
      "definition": "Accept means to receive or agree to; except means excluding.",
      "example": "All participants except one accepted the revised schedule.",
      "partOfSpeech": "verb vs. preposition/conjunction",
      "collocations": [
        "accept a proposal",
        "everyone except"
      ],
      "usageNote": "Accept is an action; except marks an exclusion.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "alternate vs. alternative",
      "definition": "Alternate often means every other or to switch back and forth; alternative means another option.",
      "example": "The classes meet on alternate days, but students may choose an alternative schedule.",
      "partOfSpeech": "adjective/verb vs. noun/adjective",
      "collocations": [
        "alternate routes",
        "alternative explanation"
      ],
      "usageNote": "In formal writing, use alternative for a choice among options.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "amount vs. number",
      "definition": "Amount refers to uncountable quantities; number refers to countable items.",
      "example": "The amount of rainfall increased, as did the number of flooded streets.",
      "partOfSpeech": "nouns",
      "collocations": [
        "amount of water",
        "number of studies"
      ],
      "usageNote": "Pair amount with mass nouns and number with count nouns.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "among vs. between",
      "definition": "Among generally describes relationships involving a group; between often describes distinct, named parties or choices.",
      "example": "The funding was divided among six labs after negotiations between the two universities.",
      "partOfSpeech": "prepositions",
      "collocations": [
        "among participants",
        "between alternatives"
      ],
      "usageNote": "Between can apply to more than two when the items are distinct.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "capital vs. capitol",
      "definition": "Capital can mean a city, wealth, or an uppercase letter; capitol is a legislative building.",
      "example": "The state capital invested public capital in repairs to the capitol.",
      "partOfSpeech": "nouns/adjective",
      "collocations": [
        "capital city",
        "Capitol building"
      ],
      "usageNote": "Capitol with o refers specifically to a building.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "coarse vs. course",
      "definition": "Coarse means rough or crude; course means a route, class, or sequence.",
      "example": "The river changed course after carrying coarse sediment downstream.",
      "partOfSpeech": "adjective vs. noun",
      "collocations": [
        "coarse texture",
        "course of action"
      ],
      "usageNote": "Course has many meanings but not roughness.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "elicit vs. illicit",
      "definition": "Elicit means to draw out a response; illicit means illegal or forbidden.",
      "example": "The survey was designed to elicit honest answers about illicit trade.",
      "partOfSpeech": "verb vs. adjective",
      "collocations": [
        "elicit a response",
        "illicit activity"
      ],
      "usageNote": "Elicit is an action; illicit describes something prohibited.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "farther vs. further",
      "definition": "Farther usually refers to physical distance; further usually refers to additional degree, time, or discussion.",
      "example": "The second station is farther away, so further analysis will require more travel.",
      "partOfSpeech": "adverbs/adjectives",
      "collocations": [
        "farther north",
        "further research"
      ],
      "usageNote": "In many contexts further is broader and more abstract.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "medal vs. meddle vs. mettle",
      "definition": "A medal is an award; meddle means to interfere; mettle means courage or resilience.",
      "example": "The athlete showed her mettle, won a medal, and asked reporters not to meddle in team disputes.",
      "partOfSpeech": "noun, verb, noun",
      "collocations": [
        "gold medal",
        "meddle in",
        "test one's mettle"
      ],
      "usageNote": "Pronunciation is similar, but meaning and spelling differ.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "peak vs. peek vs. pique",
      "definition": "Peak is a highest point; peek is a quick look; pique means to stimulate interest or cause irritation.",
      "example": "A peek at the graph revealed a peak that piqued the scientist's curiosity.",
      "partOfSpeech": "noun/verb, noun/verb, verb",
      "collocations": [
        "reach a peak",
        "take a peek",
        "pique interest"
      ],
      "usageNote": "Pique is common in the collocation pique curiosity or interest.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "perquisite vs. prerequisite",
      "definition": "A perquisite is a benefit or privilege; a prerequisite is something required beforehand.",
      "example": "Free housing was a job perquisite, while laboratory experience was a prerequisite.",
      "partOfSpeech": "nouns",
      "collocations": [
        "employee perquisite",
        "course prerequisite"
      ],
      "usageNote": "Prerequisite contains pre-, meaning before.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "practical vs. practicable",
      "definition": "Practical means useful, realistic, or concerned with action; practicable means capable of being done.",
      "example": "The proposal is practical in theory but not practicable within the current budget.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "practical solution",
        "practicable plan"
      ],
      "usageNote": "Practicable focuses narrowly on feasibility.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "rational vs. rationale",
      "definition": "Rational is an adjective meaning logical; rationale is a noun meaning an underlying reason.",
      "example": "The committee offered a rational explanation and clearly stated its rationale.",
      "partOfSpeech": "adjective vs. noun",
      "collocations": [
        "rational decision",
        "policy rationale"
      ],
      "usageNote": "Do not use rationale as an adjective.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "tenant vs. tenet",
      "definition": "A tenant rents or occupies property; a tenet is a principle or belief.",
      "example": "Every tenant agreed that fairness should remain a central tenet of the housing policy.",
      "partOfSpeech": "nouns",
      "collocations": [
        "commercial tenant",
        "basic tenet"
      ],
      "usageNote": "Tenet has one n in the middle and refers to an idea.",
      "group": "Frequently Confused Words"
    },
    {
      "word": "tortuous vs. torturous",
      "definition": "Tortuous means winding or excessively complicated; torturous means causing extreme pain or suffering.",
      "example": "The tortuous approval process became torturous for applicants waiting months for a decision.",
      "partOfSpeech": "adjectives",
      "collocations": [
        "tortuous route",
        "torturous ordeal"
      ],
      "usageNote": "A complicated process is tortuous; a painful experience is torturous.",
      "group": "Frequently Confused Words"
    }
  ],
  "quiz": [
    {
      "question": "The new evidence may _____ how historians interpret the event, but its full _____ will not be known for years.",
      "choices": [
        "effect; affect",
        "affect; effect",
        "adapt; effect",
        "affect; affect"
      ],
      "answer": 1,
      "explanation": "Affect is the verb meaning influence; effect is the noun meaning result."
    },
    {
      "question": "From the author's cautious wording, readers can _____ that the results are preliminary, although the author never directly _____ this conclusion.",
      "choices": [
        "imply; infers",
        "infer; implies",
        "infer; eludes",
        "deduce; induces"
      ],
      "answer": 1,
      "explanation": "Readers infer; authors or texts imply."
    },
    {
      "question": "The university will _____ a new attendance policy and _____ it for online courses.",
      "choices": [
        "adapt; adopt",
        "adopt; adapt",
        "accept; except",
        "ensure; assure"
      ],
      "answer": 1,
      "explanation": "The university adopts the policy and adapts it for a specific setting."
    },
    {
      "question": "The scientist was _____ to exaggeration and therefore described only the study's _____ findings.",
      "choices": [
        "adverse; adverse",
        "averse; adverse",
        "averse; averse",
        "adverse; averse"
      ],
      "answer": 1,
      "explanation": "Averse means opposed; adverse means unfavorable."
    },
    {
      "question": "The report _____ three earlier studies conducted at the same research _____.",
      "choices": [
        "sites; cite",
        "cites; site",
        "sights; cite",
        "cites; sight"
      ],
      "answer": 1,
      "explanation": "Cites means references; site means location."
    },
    {
      "question": "The two colors _____ each other, and the designer received a _____ on the result.",
      "choices": [
        "compliment; complement",
        "complement; compliment",
        "complement; complement",
        "compliment; compliment"
      ],
      "answer": 1,
      "explanation": "Complement means enhance; compliment means praise."
    },
    {
      "question": "The experiment involved _____ trials over a _____ six-hour period.",
      "choices": [
        "continuous; continual",
        "continual; continuous",
        "continual; continual",
        "continuous; continuous"
      ],
      "answer": 1,
      "explanation": "Recurring trials are continual; an unbroken period is continuous."
    },
    {
      "question": "The article is _____ because it relies on verified records; a _____ reader would accept claims without verification.",
      "choices": [
        "credible; credulous",
        "credulous; credible",
        "explicit; implicit",
        "historic; historical"
      ],
      "answer": 0,
      "explanation": "Credible describes believable evidence; credulous describes someone too ready to believe."
    },
    {
      "question": "The analyst _____ that temperature caused the change after a controlled heater _____ the same response.",
      "choices": [
        "induced; deduced",
        "deduced; induced",
        "inferred; implied",
        "elicited; eluded"
      ],
      "answer": 1,
      "explanation": "One deduces a conclusion; something induces a response."
    },
    {
      "question": "The three _____ categories were discussed in a _____ meeting to protect participants' privacy.",
      "choices": [
        "discreet; discrete",
        "discrete; discreet",
        "discrete; discrete",
        "discreet; discreet"
      ],
      "answer": 1,
      "explanation": "Discrete means separate; discreet means tactful or private."
    },
    {
      "question": "Her family _____ from Poland and later _____ to Canada.",
      "choices": [
        "immigrated; emigrated",
        "emigrated; immigrated",
        "emigrated; migrated",
        "immigrated; immigrated"
      ],
      "answer": 1,
      "explanation": "People emigrate from one country and immigrate to another."
    },
    {
      "question": "An _____ economist predicted that a recession was _____.",
      "choices": [
        "imminent; eminent",
        "eminent; imminent",
        "eminent; implicit",
        "historic; imminent"
      ],
      "answer": 1,
      "explanation": "Eminent means distinguished; imminent means about to happen."
    },
    {
      "question": "The instructions state the deadline _____, but the expectation of daily progress is only _____.",
      "choices": [
        "implicit; explicit",
        "explicit; implicit",
        "historic; historical",
        "formal; former"
      ],
      "answer": 1,
      "explanation": "Explicit is directly stated; implicit is suggested."
    },
    {
      "question": "The revision contains _____ errors and requires _____ time to edit.",
      "choices": [
        "less; fewer",
        "fewer; less",
        "fewer; fewer",
        "less; less"
      ],
      "answer": 1,
      "explanation": "Errors are countable; time is treated as an amount."
    },
    {
      "question": "The museum, _____ known as a courthouse, was _____ opened as a public archive.",
      "choices": [
        "formally; formerly",
        "formerly; formally",
        "historically; historic",
        "formally; formally"
      ],
      "answer": 1,
      "explanation": "Formerly means previously; formally means officially."
    },
    {
      "question": "The court issued a _____ ruling that scholars now examine through _____ documents.",
      "choices": [
        "historical; historic",
        "historic; historical",
        "historic; historic",
        "historical; historical"
      ],
      "answer": 1,
      "explanation": "Historic indicates importance; historical means related to history."
    },
    {
      "question": "The _____ of the disease fell, although several isolated _____ were still reported.",
      "choices": [
        "incidents; incidence",
        "incidence; incidents",
        "incident; incidences",
        "incidence; incidence"
      ],
      "answer": 1,
      "explanation": "Incidence is a rate; incidents are events."
    },
    {
      "question": "The committee's _____ reason was that the proposal violated a basic ethical _____.",
      "choices": [
        "principle; principal",
        "principal; principle",
        "principal; principal",
        "principle; principle"
      ],
      "answer": 1,
      "explanation": "Principal means main; principle means rule or belief."
    },
    {
      "question": "The chair _____ asked both teams to submit their reports on Monday and Tuesday, _____.",
      "choices": [
        "respectively; respectfully",
        "respectfully; respectively",
        "respectful; respective",
        "respectively; respectively"
      ],
      "answer": 1,
      "explanation": "Respectfully means politely; respectively maps items in order."
    },
    {
      "question": "A short overview will _____ the debate; afterward, the panel will _____ to questions.",
      "choices": [
        "proceed; precede",
        "precede; proceed",
        "prescribe; proscribe",
        "precede; precede"
      ],
      "answer": 1,
      "explanation": "Precede means come before; proceed means continue."
    }
  ]
},



} as Record<string, PracticeModuleContent>;
practiceModuleContent["science"] = scienceVocabularyContent;
practiceModuleContent["social-science"] = socialScienceVocabularyContent;

practiceModuleContent["history"] = historyVocabularyContent;
practiceModuleContent["government"] = governmentVocabularyContent;

practiceModuleContent["literature"] = literatureVocabularyContent;
practiceModuleContent["humanities"] = humanitiesVocabularyContent;

Object.assign(practiceModuleContent, {
  tone: expandedTone,
  "transition-words": expandedTransitionWords,
  "common-sat-verbs": expandedCommonSatVerbs,
  logic: expandedLogic,
  "advanced-vocabulary": expandedAdvancedVocabulary,
  "mixed-review": expandedMixedReview,
  "final-review": expandedFinalReview,
});
