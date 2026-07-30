export interface ContextVocabulary {
  id: number;
  word: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  satTip: string;
  difficulty: 1 | 2 | 3;
}

export const contextClueTypes = [
  { title: "Definition", description: "The sentence directly explains the unfamiliar word.", signals: ["that is", "in other words", "namely", "means"] },
  { title: "Restatement", description: "The idea is repeated in simpler or equivalent language.", signals: ["or", "also called", "put differently", "to clarify"] },
  { title: "Contrast", description: "An opposite or unexpected idea reveals the meaning.", signals: ["however", "although", "but", "yet", "unlike", "instead"] },
  { title: "Cause & Effect", description: "A cause, result, or consequence helps define the word.", signals: ["because", "therefore", "consequently", "thus", "hence"] },
  { title: "Example", description: "Specific examples illustrate the broader meaning.", signals: ["for example", "such as", "including", "for instance"] },
];

export const contextVocabulary: ContextVocabulary[] = [
  { id: 1, word: "ambiguous", partOfSpeech: "adjective", definition: "having more than one possible meaning; unclear", example: "The manager's instructions were so ambiguous that each employee completed the task differently.", synonyms: ["vague", "unclear", "indefinite"], antonyms: ["clear", "explicit"], collocations: ["ambiguous statement", "ambiguous language", "ambiguous result"], satTip: "Often contrasted with clear or explicit.", difficulty: 3 },
  { id: 2, word: "coherent", partOfSpeech: "adjective", definition: "logical, organized, and easy to understand", example: "The author's argument is coherent because every paragraph supports the main claim.", synonyms: ["logical", "consistent", "organized"], antonyms: ["confusing", "disorganized"], collocations: ["coherent argument", "coherent explanation", "coherent essay"], satTip: "Frequently describes essays and arguments.", difficulty: 2 },
  { id: 3, word: "explicit", partOfSpeech: "adjective", definition: "clearly stated; leaving no doubt", example: "The professor gave explicit instructions before the experiment began.", synonyms: ["clear", "direct", "specific"], antonyms: ["implicit", "vague"], collocations: ["explicit instructions", "explicit statement", "explicit evidence"], satTip: "Often tested together with implicit.", difficulty: 1 },
  { id: 4, word: "implicit", partOfSpeech: "adjective", definition: "suggested but not directly stated", example: "The author's criticism is implicit rather than openly expressed.", synonyms: ["implied", "suggested"], antonyms: ["explicit", "direct"], collocations: ["implicit meaning", "implicit assumption", "implicit message"], satTip: "A common word in inference questions.", difficulty: 2 },
  { id: 5, word: "meticulous", partOfSpeech: "adjective", definition: "extremely careful about details", example: "The engineer was meticulous when checking every measurement.", synonyms: ["careful", "precise", "thorough"], antonyms: ["careless", "sloppy"], collocations: ["meticulous planning", "meticulous research", "meticulous record"], satTip: "Usually carries a positive meaning.", difficulty: 2 },
  { id: 6, word: "pragmatic", partOfSpeech: "adjective", definition: "practical rather than theoretical", example: "The committee adopted a pragmatic solution that could be implemented immediately.", synonyms: ["practical", "realistic", "sensible"], antonyms: ["idealistic", "impractical"], collocations: ["pragmatic approach", "pragmatic solution", "pragmatic decision"], satTip: "Common in economics, science, and policy passages.", difficulty: 2 },
  { id: 7, word: "skeptical", partOfSpeech: "adjective", definition: "having doubts; not easily convinced", example: "Many scientists were skeptical until additional evidence became available.", synonyms: ["doubtful", "questioning", "unconvinced"], antonyms: ["convinced", "trusting"], collocations: ["skeptical audience", "skeptical attitude", "skeptical reader"], satTip: "Common in author-tone questions.", difficulty: 2 },
  { id: 8, word: "mitigate", partOfSpeech: "verb", definition: "to make less severe or harmful", example: "Planting more trees can help mitigate the effects of climate change.", synonyms: ["reduce", "lessen", "alleviate"], antonyms: ["worsen", "intensify"], collocations: ["mitigate risk", "mitigate damage", "mitigate effects"], satTip: "Often appears in science and environmental passages.", difficulty: 3 },
  { id: 9, word: "arbitrary", partOfSpeech: "adjective", definition: "based on personal choice rather than reason", example: "The cutoff score seemed arbitrary because no explanation was provided.", synonyms: ["random", "capricious", "unreasonable"], antonyms: ["logical", "systematic"], collocations: ["arbitrary decision", "arbitrary rule", "arbitrary limit"], satTip: "Usually carries a negative connotation.", difficulty: 3 },
  { id: 10, word: "subtle", partOfSpeech: "adjective", definition: "not obvious; difficult to notice", example: "The novel contains subtle hints about the ending.", synonyms: ["slight", "delicate", "faint"], antonyms: ["obvious", "clear"], collocations: ["subtle difference", "subtle change", "subtle clue"], satTip: "Frequently appears in inference questions.", difficulty: 3 },
];

export const contextQuiz = [
  { question: "Although the instructions appeared ambiguous, the instructor later explained every step in detail. What does ambiguous most nearly mean?", choices: ["clear", "confusing", "practical", "careful"], answer: 1, explanation: "Although signals contrast. The later explanation makes the instructions clear, so ambiguous means confusing or unclear." },
  { question: "The committee adopted a pragmatic solution that could be implemented immediately. What does pragmatic most nearly mean?", choices: ["unrealistic", "emotional", "practical", "traditional"], answer: 2, explanation: "The phrase implemented immediately points to a practical, workable solution." },
  { question: "The researcher remained skeptical until additional data confirmed the hypothesis. What does skeptical most nearly mean?", choices: ["doubtful", "excited", "confused", "indifferent"], answer: 0, explanation: "Until additional data confirmed the hypothesis shows that the researcher was not yet convinced." },
  { question: "The new policy was designed to mitigate traffic congestion. What does mitigate most nearly mean?", choices: ["increase", "reduce", "ignore", "predict"], answer: 1, explanation: "A policy intended to address congestion would reduce or lessen it." },
  { question: "The author's criticism is implicit rather than directly stated. What does implicit most nearly mean?", choices: ["suggested", "obvious", "incorrect", "humorous"], answer: 0, explanation: "Rather than directly stated defines implicit as suggested or implied." },
];
