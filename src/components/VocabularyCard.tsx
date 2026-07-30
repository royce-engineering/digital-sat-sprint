import type { VocabularyWord } from "@/content/sat/types";
import FavoriteButton from "@/components/FavoriteButton";
import VocabularyMasteryButton from "@/components/VocabularyMasteryButton";

type VocabularyCardProps = {
  item: VocabularyWord;
  number: number;
  day?: number;
  lessonTitle?: string;
};

export default function VocabularyCard({
  item,
  number,
  day = 0,
  lessonTitle = "Vocabulary",
}: VocabularyCardProps) {
  return (
    <article className="wordCard" id={`word-${number}`}>
      <div className="wordTop">
        <div className="wordIdentity">
          <span className="wordIndex">{String(number).padStart(2, "0")}</span>
          <div>
            <h2 className="wordTitle">{item.word}</h2>
            {item.partOfSpeech ? (
              <span className="partOfSpeech">{item.partOfSpeech}</span>
            ) : null}
          </div>
        </div>

        <div className="wordCardActions">
          <VocabularyMasteryButton word={item.word} />
          <FavoriteButton
            day={day}
            wordIndex={number - 1}
            lessonTitle={lessonTitle}
            word={item.word}
            partOfSpeech={item.partOfSpeech}
            definition={item.definition}
            example={item.example}
            synonyms={item.synonyms}
            compact
          />
        <span
          className="rating"
          aria-label={`${item.rating} out of 5 importance rating`}
        >
          {"★".repeat(item.rating)}
          {"☆".repeat(5 - item.rating)}
        </span>
        </div>
      </div>

      <div className="wordContentGrid">
        <div>
          <p className="label">Definition</p>
          <p className="value">{item.definition}</p>

          <p className="label">Example</p>
          <p className="value exampleSentence">“{item.example}”</p>
        </div>

        <div className="wordDetails">
          <p className="label">Synonyms</p>
          <div className="tagList">
            {item.synonyms.map((synonym) => (
              <span className="tag" key={synonym}>
                {synonym}
              </span>
            ))}
          </div>

          {item.collocations?.length ? (
            <>
              <p className="label">Common Collocations</p>
              <div className="tagList">
                {item.collocations.map((collocation) => (
                  <span className="tag tagSoft" key={collocation}>
                    {collocation}
                  </span>
                ))}
              </div>
            </>
          ) : null}

          {item.wordFamily?.length ? (
            <>
              <p className="label">Word Family</p>
              <p className="value compactValue">{item.wordFamily.join(" • ")}</p>
            </>
          ) : null}

          <p className="label">SAT Profile</p>
          <div className="tagList">
            <span className="tag tagSoft">{item.difficulty || "Core"}</span>
            <span className="tag tagSoft">{item.frequency || (item.rating === 5 ? "High" : "Medium")} frequency</span>
          </div>

          {item.root ? (
            <>
              <p className="label">Root clue</p>
              <p className="value compactValue">{item.root}</p>
            </>
          ) : null}

          {item.antonyms?.length ? (
            <>
              <p className="label">Antonyms</p>
              <div className="tagList">
                {item.antonyms.map((antonym, index) => (
                  <span className="tag" key={`${item.word}-antonym-${index}`}>{antonym}</span>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>

      {item.satTip ? (
        <aside className="tip">
          <span className="tipIcon">SAT</span>
          <p>
            <strong>Test tip:</strong> {item.satTip}
          </p>
        </aside>
      ) : null}
    </article>
  );
}
