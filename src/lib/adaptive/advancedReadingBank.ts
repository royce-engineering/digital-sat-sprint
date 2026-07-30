import type { ExamDifficulty, ExamQuestion, ReadingPassageType } from "./types";

const choice = (text: string, rationale: string) => ({ text, rationale });
const rotate = <T>(items: T[], shift: number) =>
  items.map((_, index) => items[(index + shift) % items.length]);

function buildQuestion(args: {
  id: string;
  difficulty: ExamDifficulty;
  skill: string;
  domain: "Information and Ideas" | "Craft and Structure";
  passageType: ReadingPassageType;
  passage: string;
  prompt: string;
  correct: string;
  distractors: string[];
  explanation: string;
}): ExamQuestion {
  const seed = [...args.id].reduce(
    (sum, character) => sum + character.charCodeAt(0),
    0,
  );
  const ordered = rotate([args.correct, ...args.distractors], seed % 4);
  const answer = ordered.indexOf(args.correct);
  return {
    id: args.id,
    examId: args.id,
    section: "Reading & Writing",
    courseId: `reading-v2-advanced-${args.skill.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    courseTitle: `Reading Engine 2.1 · ${args.passageType}`,
    difficulty: args.difficulty,
    skill: args.skill,
    domain: args.domain,
    passageType: args.passageType,
    passage: args.passage,
    prompt: args.prompt,
    choices: ordered.map((text, index) =>
      choice(
        text,
        index === answer
          ? args.explanation
          : "This choice conflicts with the data, overstates the evidence, or does not answer the question asked.",
      ),
    ),
    answer,
  };
}

const dataQuestions: ExamQuestion[] = [
  buildQuestion({
    id: "rw21-data-01",
    difficulty: "Easy",
    skill: "Quantitative Evidence",
    domain: "Information and Ideas",
    passageType: "Science Data",
    passage:
      "A botanist measured average seedling height after four weeks.\n\nFertilizer A: 18 cm\nFertilizer B: 24 cm\nNo fertilizer: 15 cm\n\nThe botanist concludes that Fertilizer B produced the greatest average growth under the tested conditions.",
    prompt:
      "Which choice best uses the data to support the botanist's conclusion?",
    correct:
      "Seedlings given Fertilizer B averaged 24 cm, compared with 18 cm for Fertilizer A and 15 cm with no fertilizer.",
    distractors: [
      "All seedlings grew to at least 24 cm.",
      "Fertilizer A increased average height by 24 cm.",
      "The no-fertilizer group was taller than both fertilizer groups.",
    ],
    explanation:
      "The choice accurately compares all three averages and directly supports the conclusion.",
  }),
  buildQuestion({
    id: "rw21-data-02",
    difficulty: "Easy",
    skill: "Quantitative Evidence",
    domain: "Information and Ideas",
    passageType: "Social Science Data",
    passage:
      "A library recorded workshop attendance.\n\nMorning: 42 attendees\nAfternoon: 57 attendees\nEvening: 39 attendees\n\nA coordinator claims that the afternoon workshop drew the largest audience.",
    prompt: "Which choice most effectively supports the coordinator's claim?",
    correct:
      "Attendance in the afternoon was 57, exceeding both the morning total of 42 and the evening total of 39.",
    distractors: [
      "The three workshops attracted exactly the same number of people.",
      "The evening workshop exceeded the afternoon workshop by 18 attendees.",
      "Morning attendance was more than twice afternoon attendance.",
    ],
    explanation:
      "The numerical comparison establishes that the afternoon total was the largest.",
  }),
  buildQuestion({
    id: "rw21-data-03",
    difficulty: "Medium",
    skill: "Quantitative Evidence",
    domain: "Information and Ideas",
    passageType: "Economics Data",
    passage:
      "A town tracked the share of commuters using bicycles before and after protected lanes were installed.\n\n2019: 8%\n2021: 11%\n2023: 14%\n\nAn analyst argues that bicycle commuting increased steadily during the period shown.",
    prompt: "Which statement best supports the analyst's argument?",
    correct:
      "The share rose by 3 percentage points from 2019 to 2021 and by another 3 points from 2021 to 2023.",
    distractors: [
      "The share fell by 6 percentage points overall.",
      "The largest share occurred in 2019.",
      "The data prove that protected lanes were the only cause of the increase.",
    ],
    explanation:
      "Equal increases across both intervals support the claim of a steady rise without making an unsupported causal claim.",
  }),
  buildQuestion({
    id: "rw21-data-04",
    difficulty: "Medium",
    skill: "Quantitative Evidence",
    domain: "Information and Ideas",
    passageType: "Science Data",
    passage:
      "Researchers measured the percentage of a pollutant removed by three filters.\n\nFilter X: 71%\nFilter Y: 84%\nFilter Z: 82%\n\nThe researchers describe Y and Z as similarly effective, with Y performing slightly better.",
    prompt: "Which choice best supports the researchers' description?",
    correct:
      "Filters Y and Z differed by only 2 percentage points, and both removed more pollutant than Filter X.",
    distractors: [
      "Filter X removed more pollutant than either Y or Z.",
      "Y and Z had identical results of 84%.",
      "Filter Y removed 13 times as much pollutant as Filter X.",
    ],
    explanation:
      "A two-point difference justifies 'similarly effective,' while 84% is slightly above 82%.",
  }),
  buildQuestion({
    id: "rw21-data-05",
    difficulty: "Hard",
    skill: "Quantitative Evidence",
    domain: "Information and Ideas",
    passageType: "Experimental Data",
    passage:
      "Students completed a reasoning test after studying under one of three conditions.\n\nSilence: mean 78, range 61–94\nInstrumental music: mean 81, range 63–96\nMusic with lyrics: mean 72, range 60–88\n\nA researcher claims that instrumental music was associated with the highest average score, but individual outcomes overlapped substantially across conditions.",
    prompt: "Which choice best supports both parts of the researcher's claim?",
    correct:
      "The instrumental-music group had the highest mean, 81, while its score range overlapped with the ranges for both other groups.",
    distractors: [
      "Every student hearing instrumental music outscored every student in silence.",
      "The lyrical-music group had both the highest mean and the narrowest range.",
      "Because the means differed, the score ranges could not overlap.",
    ],
    explanation:
      "The mean supports the first claim, and the overlapping ranges support the qualification about individual outcomes.",
  }),
  buildQuestion({
    id: "rw21-data-06",
    difficulty: "Hard",
    skill: "Quantitative Evidence",
    domain: "Information and Ideas",
    passageType: "Historical Data",
    passage:
      "A historian counted references to three commodities in merchants' letters.\n\n1760s: tea 36, sugar 22, cloth 41\n1780s: tea 54, sugar 39, cloth 38\n\nThe historian argues that discussion shifted toward imported food commodities even though cloth remained prominent.",
    prompt: "Which choice most precisely supports the historian's argument?",
    correct:
      "References to tea and sugar both increased, by 18 and 17 respectively, while cloth references declined only slightly from 41 to 38.",
    distractors: [
      "All three commodities were mentioned less often in the 1780s.",
      "Cloth disappeared entirely from the later letters.",
      "Tea references declined while sugar references remained unchanged.",
    ],
    explanation:
      "The changes in all three categories support both the shift toward foods and the continued prominence of cloth.",
  }),
];

const crossTextQuestions: ExamQuestion[] = [
  buildQuestion({
    id: "rw21-cross-01",
    difficulty: "Easy",
    skill: "Cross-Text Connections",
    domain: "Craft and Structure",
    passageType: "Paired Science Texts",
    passage:
      "Text 1\nUrban trees can reduce afternoon temperatures by shading pavement. A city planner therefore recommends planting trees along streets with little existing shade.\n\nText 2\nTree planting can cool streets, but young trees provide limited shade for several years. A researcher recommends combining planting with temporary shade structures.",
    prompt:
      "How would the author of Text 2 most likely respond to the recommendation in Text 1?",
    correct:
      "By agreeing with the goal but suggesting an additional short-term measure while trees mature.",
    distractors: [
      "By rejecting tree planting as incapable of affecting temperature.",
      "By claiming that all streets already have sufficient shade.",
      "By arguing that temporary structures permanently replace the need for trees.",
    ],
    explanation:
      "Text 2 accepts tree planting but adds a qualification about the time needed for trees to provide shade.",
  }),
  buildQuestion({
    id: "rw21-cross-02",
    difficulty: "Easy",
    skill: "Cross-Text Connections",
    domain: "Craft and Structure",
    passageType: "Paired Humanities Texts",
    passage:
      "Text 1\nA critic praises a novel's spare dialogue, arguing that what characters leave unsaid creates tension.\n\nText 2\nAnother critic notes that the novel's brief dialogue can occasionally obscure characters' motives, though the resulting ambiguity is often compelling.",
    prompt: "What point would both critics most likely agree on?",
    correct: "The novel's limited dialogue contributes to ambiguity.",
    distractors: [
      "The novel explains every character's motive directly.",
      "The dialogue should be removed entirely.",
      "The novel contains no tension.",
    ],
    explanation:
      "Both texts connect the spare dialogue with what remains unclear or unstated.",
  }),
  buildQuestion({
    id: "rw21-cross-03",
    difficulty: "Medium",
    skill: "Cross-Text Connections",
    domain: "Craft and Structure",
    passageType: "Paired History Texts",
    passage:
      "Text 1\nA historian argues that a harbor's expansion was driven primarily by regional trade records showing rapidly increasing cargo volume.\n\nText 2\nAn archaeologist agrees that trade mattered but emphasizes military maps showing that officials also sought a harbor suitable for naval defense.",
    prompt:
      "How do the texts differ in their explanations of the harbor's expansion?",
    correct:
      "Text 1 emphasizes commercial demand, whereas Text 2 adds strategic military considerations.",
    distractors: [
      "Text 1 denies that cargo volume increased, while Text 2 confirms it.",
      "Both texts attribute the expansion exclusively to tourism.",
      "Text 2 rejects all documentary evidence.",
    ],
    explanation:
      "The disagreement concerns emphasis: commerce alone versus commerce plus military strategy.",
  }),
  buildQuestion({
    id: "rw21-cross-04",
    difficulty: "Medium",
    skill: "Cross-Text Connections",
    domain: "Craft and Structure",
    passageType: "Paired Social Science Texts",
    passage:
      "Text 1\nA study found that remote workers reported fewer interruptions and greater satisfaction. Its authors suggest that remote work generally improves productivity.\n\nText 2\nA second study found benefits only among workers with quiet home offices; workers sharing crowded spaces reported more interruptions than office workers.",
    prompt:
      "Which finding in Text 2 most directly qualifies the conclusion in Text 1?",
    correct:
      "The benefits of remote work depended on workers' home environments.",
    distractors: [
      "Every remote worker had a private office.",
      "Office workers never experience interruptions.",
      "Satisfaction and productivity are identical measures.",
    ],
    explanation:
      "Text 2 identifies a condition under which Text 1's general conclusion may not hold.",
  }),
  buildQuestion({
    id: "rw21-cross-05",
    difficulty: "Hard",
    skill: "Cross-Text Connections",
    domain: "Craft and Structure",
    passageType: "Paired Science Texts",
    passage:
      "Text 1\nLaboratory trials show that a coating reduces corrosion by 60 percent under constant humidity. The researchers call the coating a strong candidate for outdoor equipment.\n\nText 2\nOutdoor humidity fluctuates, and repeated wet-dry cycles can damage coatings differently than constant humidity does. Field trials are therefore necessary before durability claims are made.",
    prompt:
      "Based on Text 2, what is the main limitation of the evidence in Text 1?",
    correct:
      "The laboratory conditions do not reproduce an important source of variation in outdoor environments.",
    distractors: [
      "Text 1 contains no measurement of corrosion.",
      "Constant humidity is always harsher than outdoor conditions.",
      "A 60 percent reduction proves that the coating will fail outdoors.",
    ],
    explanation:
      "Text 2 questions external validity, not the laboratory result itself.",
  }),
  buildQuestion({
    id: "rw21-cross-06",
    difficulty: "Hard",
    skill: "Cross-Text Connections",
    domain: "Craft and Structure",
    passageType: "Paired Economics Texts",
    passage:
      "Text 1\nLower transit fares increased ridership by 12 percent, suggesting that price was a major barrier.\n\nText 2\nThe fare reduction coincided with more frequent service and the opening of two new stations. Because these changes occurred together, the independent effect of price cannot be isolated.",
    prompt:
      "Which statement best describes the relationship between the texts?",
    correct:
      "Text 2 accepts the reported increase but challenges Text 1's causal attribution.",
    distractors: [
      "Text 2 disputes that ridership increased at all.",
      "Text 1 and Text 2 use unrelated outcomes.",
      "Text 2 proves that lower fares reduced ridership.",
    ],
    explanation:
      "The second text does not deny the increase; it argues that several simultaneous changes could have caused it.",
  }),
];

const evidenceQuestions: ExamQuestion[] = [
  buildQuestion({
    id: "rw21-evidence-01",
    difficulty: "Easy",
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "Science",
    passage:
      "A student claims that a desert plant reduces water loss during the hottest part of the day. Measurements showed that the plant's leaf pores were mostly closed at noon but open before sunrise, when temperatures were lower.",
    prompt:
      "Which finding from the text most directly supports the student's claim?",
    correct: "The leaf pores were mostly closed at noon.",
    distractors: [
      "The plant grew in a desert.",
      "Temperatures were lower before sunrise.",
      "The measurements were collected by a student.",
    ],
    explanation:
      "Closing leaf pores during peak heat directly limits water loss through transpiration.",
  }),
  buildQuestion({
    id: "rw21-evidence-02",
    difficulty: "Easy",
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "History",
    passage:
      "A historian argues that a market served travelers as well as local residents. Records list payments in several foreign currencies, and excavations uncovered storage jars produced hundreds of kilometers away.",
    prompt: "Which detail best supports the historian's argument?",
    correct: "The records include payments in several foreign currencies.",
    distractors: [
      "The market had written records.",
      "The jars were used for storage.",
      "Local residents lived near the market.",
    ],
    explanation:
      "Foreign currencies are direct evidence that people connected to other regions used the market.",
  }),
  buildQuestion({
    id: "rw21-evidence-03",
    difficulty: "Medium",
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "Social Science",
    passage:
      "A researcher hypothesizes that students participate more when discussion prompts are distributed before class. In one course, participation rose after advance prompts were introduced, but the instructor also began grading participation that same week.",
    prompt:
      "Which additional evidence would most help evaluate the researcher's hypothesis?",
    correct:
      "Participation data from classes that introduced advance prompts without changing grading practices.",
    distractors: [
      "A list of the instructor's favorite prompts.",
      "Students' grades from courses taken several years earlier.",
      "The number of chairs in the classroom.",
    ],
    explanation:
      "A comparison without the grading change would help isolate the effect of advance prompts.",
  }),
  buildQuestion({
    id: "rw21-evidence-04",
    difficulty: "Medium",
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "Literature",
    passage:
      "Mara reread the acceptance letter twice, then folded it into the smallest square she could manage and placed it beneath a stack of unpaid bills. When her brother asked whether any mail had arrived, she said, 'Nothing important.'",
    prompt:
      "Which choice best supports the inference that Mara has mixed feelings about the letter?",
    correct:
      "She rereads the letter but then hides it and denies that important mail arrived.",
    distractors: [
      "She receives the letter through the mail.",
      "Her brother asks a question.",
      "The bills are stacked together.",
    ],
    explanation:
      "Her attention to the letter suggests importance, while hiding and denying it suggests reluctance or conflict.",
  }),
  buildQuestion({
    id: "rw21-evidence-05",
    difficulty: "Hard",
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "Experimental Design",
    passage:
      "Researchers found that neighborhoods with more public gardens also reported stronger social trust. They proposed that gardens increase trust by creating spaces for repeated interaction.",
    prompt:
      "Which finding would most strongly support the proposed explanation rather than merely the observed association?",
    correct:
      "After new gardens opened, residents who visited them frequently formed more new neighborhood ties than otherwise similar residents who rarely visited.",
    distractors: [
      "Neighborhoods with gardens had higher trust at one point in time.",
      "Many gardens contained flowering plants.",
      "Residents in several cities said that trust is important.",
    ],
    explanation:
      "The finding links garden use, repeated interaction, and subsequent relationship formation while including a comparison group.",
  }),
  buildQuestion({
    id: "rw21-evidence-06",
    difficulty: "Hard",
    skill: "Command of Evidence",
    domain: "Information and Ideas",
    passageType: "Science",
    passage:
      "A biologist argues that a fish species adjusts its feeding depth in response to water temperature rather than light level. In the lake studied, deeper water was both colder and darker.",
    prompt:
      "Which experiment would best distinguish the biologist's explanation from the alternative explanation involving light?",
    correct:
      "Observe fish in tanks where temperature and light can be varied independently.",
    distractors: [
      "Measure temperature and light at the same lake depths again.",
      "Count fish only at the darkest point in the lake.",
      "Compare the lake with a second lake that is also colder and darker at depth.",
    ],
    explanation:
      "Independent manipulation separates the two variables that are confounded in the lake.",
  }),
];

export const advancedReadingBank: ExamQuestion[] = [
  ...dataQuestions,
  ...crossTextQuestions,
  ...evidenceQuestions,
];
