import type { Course } from "./types";

export const mainIdeaCourse: Course = {
  "id": "main-idea",
  "title": "Main Idea & Central Claim",
  "subtitle": "Find what the author is really saying—not merely what the passage mentions.",
  "description": "A complete Digital SAT course on identifying topics, central claims, best summaries, and primary ideas while avoiding common distractors.",
  "estimatedMinutes": 90,
  "difficulty": "Medium",
  "objectives": [
    "Distinguish a topic from a main idea.",
    "Identify a central claim and its qualifications.",
    "Predict the main idea before evaluating choices.",
    "Eliminate answers that are too broad, too narrow, or unsupported."
  ],
  "concepts": [
    {
      "title": "Topic vs. Main Idea",
      "body": "The topic names the subject. The main idea states the author’s key message about that subject.",
      "bullets": [
        "Topic: urban trees",
        "Main idea: Urban trees provide several benefits, but those benefits depend on thoughtful, diverse maintenance."
      ]
    },
    {
      "title": "Central Claim",
      "body": "In argumentative passages, the main idea often appears as a claim supported by reasons or evidence.",
      "bullets": [
        "Find the position the evidence is designed to support.",
        "Preserve important limits such as may, often, or under certain conditions."
      ]
    },
    {
      "title": "Best Summary",
      "body": "A strong summary includes the central idea and the passage’s most important development without copying every detail.",
      "bullets": [
        "Cover the whole passage.",
        "Stay within the text’s scope.",
        "Use accurate, moderate wording."
      ]
    }
  ],
  "strategy": [
    {
      "title": "1. Name the topic",
      "body": "Reduce the passage to a short noun phrase."
    },
    {
      "title": "2. Find the author’s point",
      "body": "Ask what the author wants you to understand about the topic."
    },
    {
      "title": "3. Track structure",
      "body": "Notice contrasts, causes, examples, and conclusions."
    },
    {
      "title": "4. Predict first",
      "body": "State the main idea in your own words before reading choices."
    },
    {
      "title": "5. Verify every word",
      "body": "Reject any choice containing an unsupported or exaggerated phrase."
    }
  ],
  "traps": [
    {
      "title": "Too Narrow",
      "body": "Accurately repeats one example but misses the passage’s overall point."
    },
    {
      "title": "Too Broad",
      "body": "Expands the passage into a universal claim or a larger topic."
    },
    {
      "title": "True but Secondary",
      "body": "States something supported by the text but not central."
    },
    {
      "title": "Extreme or Unsupported",
      "body": "Uses absolute language or adds a conclusion the author never makes."
    },
    {
      "title": "Reversed Emphasis",
      "body": "Mentions the right ideas but makes a minor detail seem primary."
    }
  ],
  "coachTips": [
    "A correct answer must be both true and central.",
    "When two choices seem possible, prefer the one that explains why the details were included.",
    "Do not reward a choice for sounding sophisticated; verify every phrase against the passage.",
    "A qualification is part of the main idea, not an optional detail."
  ],
  "workedExamples": [
    {
      "id": "example-1",
      "passage": "Urban trees do more than beautify streets. Their leaves shade pavement, lowering surface temperatures during heat waves, while their roots absorb stormwater that might otherwise overwhelm drainage systems. Researchers caution, however, that these benefits depend on planting diverse species and maintaining them over time. A city that plants thousands of identical trees may gain shade quickly but remain vulnerable to a single pest.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Urban forestry programs work best when cities pair large-scale planting with long-term, species-diverse maintenance.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-2",
      "passage": "For decades, historians treated household account books as minor records. More recent scholars have shown that these documents reveal how ordinary families responded to inflation, shortages, and changing labor patterns. Because account books record repeated purchases rather than dramatic events, they can expose gradual economic shifts that official reports overlook.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Household account books can provide valuable evidence about slow economic changes in everyday life.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-3",
      "passage": "Biologists once assumed that sleep merely allowed the body to rest. Experiments now indicate that sleep also helps the brain consolidate memories by strengthening some neural connections and weakening others. This process may explain why students who sleep after learning often remember more than students who remain awake for the same number of hours.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Sleep actively supports memory formation rather than serving only as passive rest.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-4",
      "passage": "The architect Lina Bo Bardi often combined rough concrete with open public spaces. Critics initially viewed the unfinished surfaces as severe, but Bo Bardi used them to shift attention from decoration to human activity. In her buildings, ramps, plazas, and flexible interiors invite visitors to move, gather, and reshape the space.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Bo Bardi used austere materials to emphasize adaptable public use rather than ornament.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-5",
      "passage": "Some economists measure a transportation project only by the minutes it saves commuters. Yet a new rail line may also connect workers to jobs, reduce household transportation costs, and encourage development near stations. Evaluating the line solely through travel time therefore captures only part of its economic value.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Transportation projects should be evaluated through broader social and economic effects, not travel-time savings alone.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-6",
      "passage": "In the novel, Mara repeatedly repairs a cracked cup rather than replacing it. At first the action seems practical, but the cup appears whenever Mara avoids discussing her family. By the final chapter, its visible seams mirror the relationships she has tried to preserve without confronting their damage.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The repaired cup functions as a symbol of Mara's fragile, unresolved family relationships.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-7",
      "passage": "Researchers studying coral reefs have found that local conservation can matter even when global temperatures continue to rise. Reefs protected from overfishing and polluted runoff often recover more effectively after bleaching events. Local action cannot eliminate climate stress, but it can increase a reef's capacity to survive it.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Local reef protection cannot stop warming but can improve reefs' resilience to climate-related damage.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-8",
      "passage": "Early public libraries were sometimes designed like private clubs, with imposing stairs and restricted reading rooms. Twentieth-century librarians increasingly favored street-level entrances, children's areas, and open shelves. These changes reflected a broader shift: libraries were becoming institutions meant for active public use rather than quiet guardians of scarce books.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Library design evolved as libraries shifted from restricted repositories toward accessible public institutions.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-9",
      "passage": "A team testing a new battery reported a dramatic increase in capacity. The result drew attention, but later labs struggled to reproduce it. When the original team released more detailed temperature-control procedures, other researchers obtained similar results. The episode illustrates that reproducibility may depend not only on sharing conclusions but also on documenting methods precisely.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Scientific findings become reproducible when researchers communicate procedures as carefully as results.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    },
    {
      "id": "example-10",
      "passage": "Poet Gwendolyn Brooks often compresses social observation into ordinary scenes: a kitchenette, a vacant lot, a brief conversation. The small scale does not make the poems apolitical. Instead, it allows broad forces such as segregation and poverty to appear through the choices and constraints of individual lives.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Brooks uses intimate everyday scenes to reveal the effects of larger social forces.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Main Idea",
      "walkthrough": [
        "Name the topic in a few words.",
        "Identify what the author says about that topic.",
        "Separate examples from the central claim.",
        "Check that the answer covers the whole text without exaggerating."
      ]
    }
  ],
  "questions": [
    {
      "id": "practice-1",
      "passage": "A museum replaced lengthy wall labels with shorter labels and optional audio guides. Visitors spent more time examining artworks and reported feeling less overwhelmed. The museum concluded that offering layers of information can serve both casual visitors and specialists.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Layered information can make museum interpretation more accessible without eliminating depth.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Main Idea"
    },
    {
      "id": "practice-2",
      "passage": "Farmers in one region planted hedgerows beside crop fields. The hedgerows occupied some farmland, but they sheltered pollinators and reduced soil erosion. Over several seasons, farms with hedgerows experienced more stable yields.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Hedgerows can trade a small amount of planting space for ecological benefits that support stable harvests.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 1,
      "difficulty": "Easy",
      "skill": "Main Idea"
    },
    {
      "id": "practice-3",
      "passage": "A linguist compared text messages across age groups and found that older and younger writers both used abbreviations, though they preferred different ones. The finding challenges the claim that abbreviated digital language belongs only to teenagers.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Digital abbreviation is used across age groups, although its forms vary.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 2,
      "difficulty": "Easy",
      "skill": "Main Idea"
    },
    {
      "id": "practice-4",
      "passage": "A city converted an abandoned rail line into a walking path. Nearby businesses gained customers, but rising rents also displaced several long-standing shops. The project brought benefits while creating new equity concerns.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "Urban redevelopment can produce economic gains while also causing displacement.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        }
      ],
      "answer": 3,
      "difficulty": "Easy",
      "skill": "Main Idea"
    },
    {
      "id": "practice-5",
      "passage": "An astronomer reexamined old photographic plates with modern software. The plates contained faint objects that earlier researchers could not measure. New tools therefore gave historical observations fresh scientific value.",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Modern analysis can reveal useful information in older scientific records.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Easy",
      "skill": "Main Idea"
    },
    {
      "id": "practice-6",
      "passage": "A museum replaced lengthy wall labels with shorter labels and optional audio guides. Visitors spent more time examining artworks and reported feeling less overwhelmed. The museum concluded that offering layers of information can serve both casual visitors and specialists. This case also reminds researchers to distinguish central conclusions from individual observations (6).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Layered information can make museum interpretation more accessible without eliminating depth.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-7",
      "passage": "Farmers in one region planted hedgerows beside crop fields. The hedgerows occupied some farmland, but they sheltered pollinators and reduced soil erosion. Over several seasons, farms with hedgerows experienced more stable yields. This case also reminds researchers to distinguish central conclusions from individual observations (7).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Hedgerows can trade a small amount of planting space for ecological benefits that support stable harvests.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-8",
      "passage": "A linguist compared text messages across age groups and found that older and younger writers both used abbreviations, though they preferred different ones. The finding challenges the claim that abbreviated digital language belongs only to teenagers. This case also reminds researchers to distinguish central conclusions from individual observations (8).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "Digital abbreviation is used across age groups, although its forms vary.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        }
      ],
      "answer": 3,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-9",
      "passage": "A city converted an abandoned rail line into a walking path. Nearby businesses gained customers, but rising rents also displaced several long-standing shops. The project brought benefits while creating new equity concerns. This case also reminds researchers to distinguish central conclusions from individual observations (9).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Urban redevelopment can produce economic gains while also causing displacement.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-10",
      "passage": "An astronomer reexamined old photographic plates with modern software. The plates contained faint objects that earlier researchers could not measure. New tools therefore gave historical observations fresh scientific value. This case also reminds researchers to distinguish central conclusions from individual observations (10).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Modern analysis can reveal useful information in older scientific records.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-11",
      "passage": "A museum replaced lengthy wall labels with shorter labels and optional audio guides. Visitors spent more time examining artworks and reported feeling less overwhelmed. The museum concluded that offering layers of information can serve both casual visitors and specialists. This case also reminds researchers to distinguish central conclusions from individual observations (11).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Layered information can make museum interpretation more accessible without eliminating depth.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-12",
      "passage": "Farmers in one region planted hedgerows beside crop fields. The hedgerows occupied some farmland, but they sheltered pollinators and reduced soil erosion. Over several seasons, farms with hedgerows experienced more stable yields. This case also reminds researchers to distinguish central conclusions from individual observations (12).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "Hedgerows can trade a small amount of planting space for ecological benefits that support stable harvests.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        }
      ],
      "answer": 3,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-13",
      "passage": "A linguist compared text messages across age groups and found that older and younger writers both used abbreviations, though they preferred different ones. The finding challenges the claim that abbreviated digital language belongs only to teenagers. This case also reminds researchers to distinguish central conclusions from individual observations (13).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Digital abbreviation is used across age groups, although its forms vary.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-14",
      "passage": "A city converted an abandoned rail line into a walking path. Nearby businesses gained customers, but rising rents also displaced several long-standing shops. The project brought benefits while creating new equity concerns. This case also reminds researchers to distinguish central conclusions from individual observations (14).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Urban redevelopment can produce economic gains while also causing displacement.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 1,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-15",
      "passage": "An astronomer reexamined old photographic plates with modern software. The plates contained faint objects that earlier researchers could not measure. New tools therefore gave historical observations fresh scientific value. This case also reminds researchers to distinguish central conclusions from individual observations (15).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Modern analysis can reveal useful information in older scientific records.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 2,
      "difficulty": "Medium",
      "skill": "Main Idea"
    },
    {
      "id": "practice-16",
      "passage": "A museum replaced lengthy wall labels with shorter labels and optional audio guides. Visitors spent more time examining artworks and reported feeling less overwhelmed. The museum concluded that offering layers of information can serve both casual visitors and specialists. This case also reminds researchers to distinguish central conclusions from individual observations (16).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "Layered information can make museum interpretation more accessible without eliminating depth.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        }
      ],
      "answer": 3,
      "difficulty": "Hard",
      "skill": "Main Idea"
    },
    {
      "id": "practice-17",
      "passage": "Farmers in one region planted hedgerows beside crop fields. The hedgerows occupied some farmland, but they sheltered pollinators and reduced soil erosion. Over several seasons, farms with hedgerows experienced more stable yields. This case also reminds researchers to distinguish central conclusions from individual observations (17).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "Hedgerows can trade a small amount of planting space for ecological benefits that support stable harvests.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 0,
      "difficulty": "Hard",
      "skill": "Main Idea"
    },
    {
      "id": "practice-18",
      "passage": "A linguist compared text messages across age groups and found that older and younger writers both used abbreviations, though they preferred different ones. The finding challenges the claim that abbreviated digital language belongs only to teenagers. This case also reminds researchers to distinguish central conclusions from individual observations (18).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Digital abbreviation is used across age groups, although its forms vary.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 1,
      "difficulty": "Hard",
      "skill": "Main Idea"
    },
    {
      "id": "practice-19",
      "passage": "A city converted an abandoned rail line into a walking path. Nearby businesses gained customers, but rising rents also displaced several long-standing shops. The project brought benefits while creating new equity concerns. This case also reminds researchers to distinguish central conclusions from individual observations (19).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "Urban redevelopment can produce economic gains while also causing displacement.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        },
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        }
      ],
      "answer": 2,
      "difficulty": "Hard",
      "skill": "Main Idea"
    },
    {
      "id": "practice-20",
      "passage": "An astronomer reexamined old photographic plates with modern software. The plates contained faint objects that earlier researchers could not measure. New tools therefore gave historical observations fresh scientific value. This case also reminds researchers to distinguish central conclusions from individual observations (20).",
      "prompt": "Which choice best states the main idea of the text?",
      "choices": [
        {
          "text": "The passage proves that the discussed approach will solve the problem completely.",
          "rationale": "This choice overstates the evidence and adds an unsupported conclusion."
        },
        {
          "text": "The passage describes one specific detail mentioned by the author.",
          "rationale": "This choice is too narrow; it focuses on a supporting detail instead of the whole passage."
        },
        {
          "text": "The passage argues that all public policy decisions should be based on scientific research.",
          "rationale": "This choice is too broad and introduces a claim the passage does not make."
        },
        {
          "text": "Modern analysis can reveal useful information in older scientific records.",
          "rationale": "This choice captures the passage’s central claim and its important qualification."
        }
      ],
      "answer": 3,
      "difficulty": "Hard",
      "skill": "Main Idea"
    }
  ],
  "flashcards": [
    {
      "front": "Topic",
      "back": "The general subject of a passage."
    },
    {
      "front": "Main idea",
      "back": "What the author says about the topic across the whole passage."
    },
    {
      "front": "Central claim",
      "back": "The author’s primary arguable point."
    },
    {
      "front": "Summary",
      "back": "A concise restatement of the passage’s essential content."
    },
    {
      "front": "Supporting detail",
      "back": "Evidence, example, or explanation that develops the main idea."
    },
    {
      "front": "Too narrow",
      "back": "An answer that covers only one detail or section."
    },
    {
      "front": "Too broad",
      "back": "An answer that reaches beyond what the passage establishes."
    },
    {
      "front": "Extreme language",
      "back": "Words such as always, never, completely, or proves that often overstate the text."
    },
    {
      "front": "Outside information",
      "back": "A claim that may be true but is not supported by the passage."
    },
    {
      "front": "Half-true choice",
      "back": "An answer that starts accurately but ends with an unsupported claim."
    },
    {
      "front": "Qualification",
      "back": "A limit or condition placed on a claim."
    },
    {
      "front": "Scope",
      "back": "The range of ideas covered by the passage or answer."
    },
    {
      "front": "Repeated idea",
      "back": "A concept developed more than once and often central to the text."
    },
    {
      "front": "Contrast clue",
      "back": "A shift such as however or yet that may reveal the author’s real point."
    },
    {
      "front": "Conclusion sentence",
      "back": "A final sentence that may synthesize the passage, though it is not automatically the main idea."
    },
    {
      "front": "Prediction",
      "back": "A brief answer formed before reading the choices."
    },
    {
      "front": "Paraphrase",
      "back": "Expressing the same meaning in different words."
    },
    {
      "front": "Distractor",
      "back": "A plausible but incorrect answer choice."
    },
    {
      "front": "Evidence check",
      "back": "Confirming that the entire answer is supported by the passage."
    },
    {
      "front": "Author focus",
      "back": "The aspect of the topic the writer emphasizes."
    },
    {
      "front": "Purpose vs. main idea",
      "back": "Purpose asks why the author wrote; main idea asks what the author says."
    },
    {
      "front": "Fact vs. claim",
      "back": "A fact is information; a claim is the point built from information."
    },
    {
      "front": "General-to-specific structure",
      "back": "A broad claim followed by examples or evidence."
    },
    {
      "front": "Specific-to-general structure",
      "back": "Examples that build toward a broader conclusion."
    },
    {
      "front": "Cause-and-effect structure",
      "back": "A passage organized around reasons and results."
    },
    {
      "front": "Compare-and-contrast structure",
      "back": "A passage that explains similarities and differences."
    },
    {
      "front": "Problem-solution structure",
      "back": "A passage that presents an issue and evaluates a response."
    },
    {
      "front": "One-sentence test",
      "back": "Explain the passage to a friend in one accurate sentence."
    },
    {
      "front": "Whole-passage test",
      "back": "Ask whether an answer accounts for every major part of the text."
    },
    {
      "front": "Moderate wording",
      "back": "Precise, limited wording is often more defensible than absolute wording."
    }
  ],
  "nextCourseId": "inference"
} as Course;
