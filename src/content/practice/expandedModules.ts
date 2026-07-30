import type { PracticeModuleContent, PracticeVocabularyEntry } from "./moduleContent";

function buildExpandedModule(config: { id: string; number: string; title: string; tagline: string; vocabulary: PracticeVocabularyEntry[] }): PracticeModuleContent {
  const vocabulary = config.vocabulary;
  const quiz = vocabulary.slice(0, 10).map((entry, index) => {
    const distractors = vocabulary
      .filter((candidate) => candidate.word !== entry.word && candidate.definition !== entry.definition)
      .filter((candidate, candidateIndex, list) => list.findIndex((item) => item.definition === candidate.definition) === candidateIndex)
      .slice(index % 5, (index % 5) + 3);
    const fallbackDistractors = distractors.length === 3 ? distractors : vocabulary
      .filter((candidate) => candidate.word !== entry.word && candidate.definition !== entry.definition)
      .filter((candidate, candidateIndex, list) => list.findIndex((item) => item.definition === candidate.definition) === candidateIndex)
      .slice(0, 3);
    const answer = index % 4;
    const choices = fallbackDistractors.map((item) => item.definition);
    choices.splice(answer, 0, entry.definition);
    return { question: `Which definition best matches “${entry.word}” as used in this module?`, choices, answer, explanation: `${entry.word} means ${entry.definition}. ${entry.example}` };
  });
  return { id: config.id, number: config.number, title: config.title, tagline: config.tagline,
    strategy: ["Read the full sentence", "Identify the word’s role", "Predict a meaning", "Compare precise distinctions", "Confirm with context"],
    concepts: [
      { title: "Meaning in context", description: "Use surrounding claims, contrasts, examples, and tone before choosing a definition." },
      { title: "Precision", description: "Prefer the choice that matches both the core meaning and the exact degree or attitude." },
      { title: "Word families", description: "Connect related noun, verb, adjective, and adverb forms." },
      { title: "Distractor control", description: "Reject familiar meanings that do not fit the sentence." },
      { title: "Active recall", description: "Explain the word in your own words before revealing the answer." },
    ], vocabulary, quiz };
}

export const expandedTone = buildExpandedModule({
  id: "tone", number: "02", title: "Tone & Attitude", tagline: "Recognize precise shades of attitude, confidence, and emotional stance.", vocabulary: [
    { word: "admiring", definition: "showing warm approval", example: "The reviewer adopts an admiring tone when praising the engineer's elegant solution." },
    { word: "analytical", definition: "focused on careful examination", example: "The article remains analytical as it compares the two competing explanations." },
    { word: "cautious", definition: "careful about claims or conclusions", example: "The researchers use cautious language because the sample is small." },
    { word: "dismissive", definition: "showing that something is unworthy of attention", example: "The critic is dismissive of the proposal's practical value." },
    { word: "enthusiastic", definition: "showing strong excitement or approval", example: "The curator is enthusiastic about the newly recovered manuscript." },
    { word: "objective", definition: "based on facts rather than feelings", example: "The report uses an objective tone and avoids emotional language." },
    { word: "skeptical", definition: "not easily convinced", example: "The author is skeptical that one experiment can establish a universal rule." },
    { word: "tentative", definition: "uncertain or not fully decided", example: "The conclusion is tentative because the evidence is preliminary." },
    { word: "ambivalent", definition: "having mixed or conflicting feelings", example: "The narrator is ambivalent, praising the reform while regretting its costs." },
    { word: "conciliatory", definition: "intended to reduce conflict", example: "The mayor's conciliatory remarks invite both sides to compromise." },
    { word: "critical", definition: "expressing careful judgment, often negative", example: "The essay is critical of assumptions that the earlier study left untested." },
    { word: "defiant", definition: "showing bold resistance", example: "The speaker's defiant tone rejects pressure to withdraw the claim." },
    { word: "detached", definition: "emotionally uninvolved", example: "The historian's detached account reports the violence without personal reaction." },
    { word: "incredulous", definition: "unwilling or unable to believe something", example: "The columnist sounds incredulous that officials ignored repeated warnings." },
    { word: "nostalgic", definition: "expressing affection for the past", example: "The memoir's nostalgic tone recalls childhood summers with warmth." },
    { word: "reverent", definition: "showing deep respect", example: "The biography is reverent when describing the activist's sacrifice." },
    { word: "satirical", definition: "using humor or irony to criticize", example: "The satirical passage exaggerates bureaucracy to expose its absurdity." },
    { word: "somber", definition: "serious and gloomy", example: "The memorial speech adopts a somber tone." },
    { word: "wary", definition: "alert to possible danger or problems", example: "Investors remain wary of conclusions based on volatile data." },
    { word: "qualified", definition: "limited by reservations or conditions", example: "The author's support is qualified: the policy may work only in large cities." },
  ],
});

export const expandedTransitionWords = buildExpandedModule({
  id: "transition-words", number: "03", title: "Transition Words", tagline: "Choose connectors that express exact logical relationships.", vocabulary: [
    { word: "accordingly", definition: "as a result", example: "The evidence was incomplete; accordingly, the team delayed publication." },
    { word: "additionally", definition: "in addition", example: "The device is inexpensive; additionally, it is easy to repair." },
    { word: "by contrast", definition: "showing a difference", example: "The first species thrives in shade; by contrast, the second requires sunlight." },
    { word: "consequently", definition: "as a result", example: "Rainfall declined; consequently, crop yields fell." },
    { word: "for example", definition: "introducing an illustration", example: "Several metals conduct electricity; for example, copper does so efficiently." },
    { word: "furthermore", definition: "adding a related point", example: "The method is accurate; furthermore, it requires little training." },
    { word: "however", definition: "introducing a contrast", example: "The theory is elegant; however, the supporting evidence is weak." },
    { word: "indeed", definition: "emphasizing or confirming", example: "The policy was costly; indeed, it exceeded every initial estimate." },
    { word: "instead", definition: "presenting an alternative", example: "The team did not discard the sample; instead, it tested it again." },
    { word: "likewise", definition: "showing similarity", example: "The first group improved; likewise, the second group made gains." },
    { word: "meanwhile", definition: "at the same time", example: "The northern region industrialized; meanwhile, the south remained agricultural." },
    { word: "moreover", definition: "adding stronger support", example: "The treatment is safe; moreover, it appears highly effective." },
    { word: "nevertheless", definition: "despite what was just stated", example: "The route was difficult; nevertheless, the expedition continued." },
    { word: "on the other hand", definition: "presenting another side", example: "The plan is inexpensive; on the other hand, it may be unreliable." },
    { word: "otherwise", definition: "if not or in different circumstances", example: "The samples must remain frozen; otherwise, they will degrade." },
    { word: "similarly", definition: "in a comparable way", example: "The two novels similarly use fragmented narration." },
    { word: "specifically", definition: "introducing a precise detail", example: "Several factors mattered; specifically, temperature had the largest effect." },
    { word: "therefore", definition: "for that reason", example: "Demand increased; therefore, prices rose." },
    { word: "thus", definition: "as a result", example: "The variable was controlled, thus reducing uncertainty." },
    { word: "ultimately", definition: "in the final analysis", example: "Ultimately, the committee selected the more sustainable design." },
  ],
});

export const expandedCommonSatVerbs = buildExpandedModule({
  id: "common-sat-verbs", number: "04", title: "Common SAT Verbs", tagline: "Master analytical verbs frequently used in passages and question stems.", vocabulary: [
    { word: "acknowledge", definition: "recognize or admit", example: "The author acknowledges a limitation before defending the study." },
    { word: "advocate", definition: "publicly support", example: "The editorial advocates stricter environmental standards." },
    { word: "assert", definition: "state confidently", example: "The researcher asserts that the pattern is not accidental." },
    { word: "challenge", definition: "question the validity of", example: "The new evidence challenges the traditional interpretation." },
    { word: "characterize", definition: "describe the distinctive nature of", example: "The passage characterizes the policy as ambitious but impractical." },
    { word: "clarify", definition: "make easier to understand", example: "The second example clarifies the author's central distinction." },
    { word: "concede", definition: "admit a point reluctantly", example: "The critic concedes that the method is efficient." },
    { word: "contend", definition: "argue or maintain", example: "The historians contend that economic pressures accelerated reform." },
    { word: "corroborate", definition: "confirm with additional evidence", example: "New records corroborate the witness's account." },
    { word: "demonstrate", definition: "show clearly with evidence", example: "The experiment demonstrates a relationship between light and growth." },
    { word: "differentiate", definition: "show or identify a difference", example: "The author differentiates correlation from causation." },
    { word: "emphasize", definition: "give special importance to", example: "The conclusion emphasizes the need for replication." },
    { word: "establish", definition: "show something to be true", example: "The data establish that the two groups differed significantly." },
    { word: "illustrate", definition: "explain by giving an example", example: "The anecdote illustrates the broader social trend." },
    { word: "imply", definition: "suggest without stating directly", example: "The narrator implies that the agreement will not last." },
    { word: "qualify", definition: "limit or modify a claim", example: "The final paragraph qualifies the earlier generalization." },
    { word: "refute", definition: "prove a claim false", example: "The later study refutes the original hypothesis." },
    { word: "reinforce", definition: "strengthen an idea or effect", example: "The statistics reinforce the author's warning." },
    { word: "synthesize", definition: "combine ideas into a coherent whole", example: "The review synthesizes findings from several disciplines." },
    { word: "underscore", definition: "emphasize strongly", example: "The unexpected result underscores the need for caution." },
  ],
});

export const expandedLogic = buildExpandedModule({
  id: "logic", number: "05", title: "Logic & Argument", tagline: "Identify claims, evidence, assumptions, objections, and conclusions.", vocabulary: [
    { word: "assumption", definition: "an unstated belief required by an argument", example: "The proposal rests on the assumption that demand will remain stable." },
    { word: "claim", definition: "a statement presented as true", example: "The author's main claim is that urban trees reduce heat." },
    { word: "conclusion", definition: "the judgment reached from evidence", example: "The conclusion follows only if the measurements are reliable." },
    { word: "counterargument", definition: "an opposing line of reasoning", example: "The essay addresses the counterargument that the reform is too expensive." },
    { word: "counterexample", definition: "an example that disproves a general claim", example: "One flightless bird is a counterexample to the claim that all birds fly." },
    { word: "deduction", definition: "reasoning from a general rule to a specific result", example: "The deduction is valid if both premises are true." },
    { word: "evidence", definition: "information supporting or challenging a claim", example: "The survey provides evidence of changing public attitudes." },
    { word: "fallacy", definition: "an error in reasoning", example: "Attacking the speaker instead of the claim is a fallacy." },
    { word: "generalization", definition: "a broad statement based on examples", example: "The conclusion is an overgeneralization from only three cases." },
    { word: "hypothesis", definition: "a testable proposed explanation", example: "The experiment was designed to evaluate the hypothesis." },
    { word: "implication", definition: "a likely consequence or suggested meaning", example: "One implication of the data is that the policy needs revision." },
    { word: "inference", definition: "a conclusion drawn from evidence", example: "The reader can make an inference from the character's hesitation." },
    { word: "premise", definition: "a statement used to support a conclusion", example: "The argument begins with the premise that resources are limited." },
    { word: "qualification", definition: "a limitation placed on a claim", example: "The phrase 'in some settings' adds an important qualification." },
    { word: "rebuttal", definition: "a response intended to disprove an objection", example: "The final paragraph offers a rebuttal to the critics." },
    { word: "relevance", definition: "the degree to which evidence bears on a claim", example: "The anecdote is vivid but has little relevance to the conclusion." },
    { word: "sufficient", definition: "enough to justify a conclusion", example: "The evidence is suggestive but not sufficient." },
    { word: "valid", definition: "logically well formed", example: "A valid argument cannot have true premises and a false conclusion." },
    { word: "causation", definition: "a relationship in which one factor produces another", example: "Correlation alone does not establish causation." },
    { word: "correlation", definition: "a statistical association between variables", example: "The correlation may result from a third variable." },
  ],
});

export const expandedAdvancedVocabulary = buildExpandedModule({
  id: "advanced-vocabulary", number: "18", title: "Advanced Vocabulary", tagline: "Master precise, high-difficulty academic words and near-synonym distinctions.", vocabulary: [
    { word: "abstruse", definition: "difficult to understand", example: "The paper's abstruse terminology obscured an otherwise simple argument." },
    { word: "ameliorate", definition: "make a bad situation better", example: "The policy was designed to ameliorate housing shortages." },
    { word: "anomalous", definition: "deviating from what is expected", example: "The anomalous result prompted a second trial." },
    { word: "assiduous", definition: "showing persistent care and effort", example: "Her assiduous research uncovered several overlooked records." },
    { word: "circumspect", definition: "careful to consider risks", example: "The committee remained circumspect about making predictions." },
    { word: "concomitant", definition: "naturally accompanying", example: "Industrial growth brought concomitant changes in migration." },
    { word: "deleterious", definition: "causing harm", example: "The chemical had a deleterious effect on aquatic life." },
    { word: "equivocal", definition: "ambiguous or uncertain", example: "The equivocal evidence supports no firm conclusion." },
    { word: "exigent", definition: "requiring immediate attention", example: "The exigent circumstances justified rapid action." },
    { word: "fastidious", definition: "very attentive to detail", example: "The editor was fastidious about factual accuracy." },
    { word: "inchoate", definition: "not fully formed", example: "The movement began as an inchoate collection of local protests." },
    { word: "intransigent", definition: "unwilling to compromise", example: "Both sides remained intransigent during negotiations." },
    { word: "laconic", definition: "using very few words", example: "His laconic reply revealed little about his intentions." },
    { word: "munificent", definition: "very generous", example: "A munificent donation funded the new laboratory." },
    { word: "obdurate", definition: "stubbornly refusing to change", example: "The board remained obdurate despite mounting criticism." },
    { word: "parsimonious", definition: "extremely economical; using few assumptions", example: "Scientists often prefer the most parsimonious explanation." },
    { word: "perfunctory", definition: "done with little care", example: "The agency's perfunctory review missed several risks." },
    { word: "recondite", definition: "known by few; obscure", example: "The lecture explored a recondite branch of philosophy." },
    { word: "sagacious", definition: "showing wise judgment", example: "Her sagacious decision prevented a costly error." },
    { word: "tendentious", definition: "promoting a particular viewpoint", example: "The tendentious account selectively presents the evidence." },
  ],
});

export const expandedMixedReview = buildExpandedModule({
  id: "mixed-review", number: "20", title: "Mixed Review", tagline: "Review high-value vocabulary from reading, science, history, and argument.", vocabulary: [
    { word: "ambiguous", definition: "open to more than one interpretation", example: "The ambiguous wording allowed both sides to claim victory." },
    { word: "bolster", definition: "support or strengthen", example: "The new data bolster the original conclusion." },
    { word: "coherent", definition: "logical and internally consistent", example: "The essay presents a coherent explanation of the trend." },
    { word: "constrain", definition: "limit or restrict", example: "Limited funding constrained the scope of the study." },
    { word: "derive", definition: "obtain from a source", example: "The researchers derive the estimate from census records." },
    { word: "empirical", definition: "based on observation or experiment", example: "The theory needs empirical support." },
    { word: "fluctuate", definition: "rise and fall irregularly", example: "Temperatures fluctuate throughout the season." },
    { word: "inhibit", definition: "slow or prevent", example: "Low temperatures inhibit bacterial growth." },
    { word: "mediate", definition: "help produce or explain an effect", example: "Trust may mediate the relationship between communication and cooperation." },
    { word: "nuance", definition: "a subtle distinction", example: "The revised account adds nuance to the earlier interpretation." },
    { word: "paradigm", definition: "a model or framework", example: "The discovery challenged the dominant scientific paradigm." },
    { word: "plausible", definition: "apparently reasonable", example: "The explanation is plausible but not yet proven." },
    { word: "prevalent", definition: "widespread", example: "The practice became prevalent during the nineteenth century." },
    { word: "robust", definition: "strong and reliable", example: "The conclusion remained robust across several models." },
    { word: "salient", definition: "most noticeable or important", example: "Cost was the most salient concern for voters." },
    { word: "substantiate", definition: "support with evidence", example: "The records substantiate the witness's account." },
    { word: "transient", definition: "temporary", example: "The treatment produced only a transient improvement." },
    { word: "undermine", definition: "weaken", example: "Measurement errors undermine confidence in the result." },
    { word: "viable", definition: "capable of working successfully", example: "Solar power became a viable alternative." },
    { word: "warrant", definition: "justify", example: "The small difference does not warrant a broad conclusion." },
  ],
});

export const expandedFinalReview = buildExpandedModule({
  id: "final-review", number: "21", title: "Final Review", tagline: "Complete a focused review of the most transferable SAT vocabulary.", vocabulary: [
    { word: "advocate", definition: "support publicly", example: "The author advocates a gradual rather than immediate transition." },
    { word: "ambivalent", definition: "having mixed feelings", example: "The narrator is ambivalent about technological change." },
    { word: "corroborate", definition: "confirm with independent evidence", example: "The archive corroborates the oral history." },
    { word: "disparate", definition: "fundamentally different", example: "The study combines data from disparate regions." },
    { word: "elicit", definition: "draw out a response", example: "The survey question was designed to elicit honest reactions." },
    { word: "exacerbate", definition: "make worse", example: "Drought may exacerbate food insecurity." },
    { word: "implicit", definition: "suggested but not directly expressed", example: "The passage contains an implicit criticism of the policy." },
    { word: "mitigate", definition: "make less severe", example: "Trees can mitigate urban heat." },
    { word: "novel", definition: "new or original", example: "The researchers proposed a novel method." },
    { word: "pragmatic", definition: "focused on practical results", example: "The committee adopted a pragmatic compromise." },
    { word: "profound", definition: "very great or deep", example: "The invention had a profound effect on communication." },
    { word: "provisional", definition: "temporary and subject to revision", example: "The agency released a provisional estimate." },
    { word: "reconcile", definition: "make consistent or compatible", example: "The theory must reconcile the two conflicting findings." },
    { word: "redundant", definition: "unnecessarily repetitive", example: "The editor removed redundant sentences." },
    { word: "scrutinize", definition: "examine closely", example: "Reviewers scrutinize the methods before publication." },
    { word: "sporadic", definition: "occurring irregularly", example: "Sporadic rainfall made farming unpredictable." },
    { word: "subtle", definition: "not immediately obvious", example: "The passage makes a subtle distinction between authority and influence." },
    { word: "tenuous", definition: "weak or uncertain", example: "The connection between the variables is tenuous." },
    { word: "validate", definition: "confirm accuracy or legitimacy", example: "A second experiment helped validate the model." },
    { word: "versatile", definition: "able to serve many purposes", example: "The versatile material can be used in several industries." },
  ],
});
