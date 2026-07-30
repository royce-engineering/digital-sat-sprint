export interface ContextVocabulary {
  id:number;
  word:string;
  partOfSpeech:string;
  definition:string;
  example:string;
  synonyms:string[];
  antonyms:string[];
  collocations:string[];
  satTip:string;
  difficulty:1|2|3;
}

export const contextClues: ContextVocabulary[] = [
{id:1,word:"ambiguous",partOfSpeech:"adjective",definition:"having more than one possible meaning; unclear",example:"The manager's instructions were so ambiguous that each employee completed the task differently.",synonyms:["vague","unclear","indefinite"],antonyms:["clear","explicit"],collocations:["ambiguous statement","ambiguous language","ambiguous result"],satTip:"Often contrasted with clear or explicit.",difficulty:3},
{id:2,word:"coherent",partOfSpeech:"adjective",definition:"logical, organized, and easy to understand",example:"The author's argument is coherent because every paragraph supports the main claim.",synonyms:["logical","consistent","organized"],antonyms:["confusing","disorganized"],collocations:["coherent argument","coherent explanation","coherent essay"],satTip:"Frequently describes essays and arguments.",difficulty:2},
{id:3,word:"explicit",partOfSpeech:"adjective",definition:"clearly stated; leaving no doubt",example:"The professor gave explicit instructions before the experiment began.",synonyms:["clear","direct","specific"],antonyms:["implicit","vague"],collocations:["explicit instructions","explicit statement","explicit evidence"],satTip:"Often tested together with implicit.",difficulty:1},
{id:4,word:"implicit",partOfSpeech:"adjective",definition:"suggested but not directly stated",example:"The author's criticism is implicit rather than openly expressed.",synonyms:["implied","suggested"],antonyms:["explicit","direct"],collocations:["implicit meaning","implicit assumption","implicit message"],satTip:"Common SAT inference word.",difficulty:2},
{id:5,word:"meticulous",partOfSpeech:"adjective",definition:"extremely careful about details",example:"The engineer was meticulous when checking every measurement.",synonyms:["careful","precise","thorough"],antonyms:["careless","sloppy"],collocations:["meticulous planning","meticulous research","meticulous record"],satTip:"Usually positive.",difficulty:2},
{id:6,word:"pragmatic",partOfSpeech:"adjective",definition:"practical rather than theoretical",example:"The committee adopted a pragmatic solution that could be implemented immediately.",synonyms:["practical","realistic","sensible"],antonyms:["idealistic","impractical"],collocations:["pragmatic approach","pragmatic solution","pragmatic decision"],satTip:"Common in economics and policy.",difficulty:2},
{id:7,word:"skeptical",partOfSpeech:"adjective",definition:"having doubts; not easily convinced",example:"Many scientists were skeptical until additional evidence became available.",synonyms:["doubtful","questioning","unconvinced"],antonyms:["convinced","trusting"],collocations:["skeptical audience","skeptical attitude","skeptical reader"],satTip:"Common author-tone word.",difficulty:2},
{id:8,word:"mitigate",partOfSpeech:"verb",definition:"to make less severe or harmful",example:"Planting more trees can help mitigate the effects of climate change.",synonyms:["reduce","lessen","alleviate"],antonyms:["worsen","intensify"],collocations:["mitigate risk","mitigate damage","mitigate effects"],satTip:"Often appears in science passages.",difficulty:3},
{id:9,word:"arbitrary",partOfSpeech:"adjective",definition:"based on personal choice rather than reason",example:"The cutoff score seemed arbitrary because no explanation was provided.",synonyms:["random","capricious","unreasonable"],antonyms:["logical","systematic"],collocations:["arbitrary decision","arbitrary rule","arbitrary limit"],satTip:"Usually negative.",difficulty:3},
{id:10,word:"subtle",partOfSpeech:"adjective",definition:"not obvious; difficult to notice",example:"The novel contains subtle hints about the ending.",synonyms:["slight","delicate","faint"],antonyms:["obvious","clear"],collocations:["subtle difference","subtle change","subtle clue"],satTip:"Common in inference questions.",difficulty:3}
];
