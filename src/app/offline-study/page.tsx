import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Offline Study Cheat Sheets",
  description: "Printable Digital SAT English, grammar, math, geometry, vocabulary, and exam-day cheat sheets.",
};

const transitions = [
  ["Addition", "furthermore, moreover, likewise, similarly"],
  ["Contrast", "however, nevertheless, conversely, instead"],
  ["Cause / Result", "therefore, consequently, thus, accordingly"],
  ["Example", "for example, for instance, specifically"],
  ["Sequence", "first, next, subsequently, finally"],
  ["Emphasis", "indeed, notably, above all"],
];

const mathFormulas = [
  ["Slope", "m = (y₂ − y₁) / (x₂ − x₁)"],
  ["Slope-intercept", "y = mx + b"],
  ["Point-slope", "y − y₁ = m(x − x₁)"],
  ["Quadratic formula", "x = (−b ± √(b² − 4ac)) / 2a"],
  ["Vertex x-coordinate", "x = −b / 2a"],
  ["Distance", "d = √((x₂ − x₁)² + (y₂ − y₁)²)"],
  ["Midpoint", "((x₁ + x₂)/2, (y₁ + y₂)/2)"],
  ["Circle", "(x − h)² + (y − k)² = r²"],
  ["Exponential growth", "y = a(1 + r)ᵗ"],
  ["Exponential decay", "y = a(1 − r)ᵗ"],
];

const geometryFormulas = [
  ["Triangle area", "A = ½bh"],
  ["Rectangle area", "A = lw"],
  ["Circle area", "A = πr²"],
  ["Circumference", "C = 2πr"],
  ["Rectangular prism", "V = lwh"],
  ["Cylinder", "V = πr²h"],
  ["Cone", "V = ⅓πr²h"],
  ["Sphere volume", "V = ⁴⁄₃πr³"],
  ["Sphere surface area", "SA = 4πr²"],
  ["Pythagorean theorem", "a² + b² = c²"],
];

const vocabGroups = [
  ["Increase", "augment, amplify, bolster, escalate, proliferate"],
  ["Decrease", "diminish, curtail, mitigate, wane, abate"],
  ["Support", "corroborate, substantiate, validate, reinforce"],
  ["Criticize", "censure, rebuke, denounce, disparage"],
  ["Unclear", "ambiguous, obscure, equivocal, nebulous"],
  ["Careful", "meticulous, prudent, scrupulous, circumspect"],
  ["Change", "alter, transform, modify, fluctuate, evolve"],
  ["Conflict", "contention, discord, antagonism, discrepancy"],
];

export default function OfflineStudyPage() {
  return (
    <main className="pageShell offlineStudyPage">
      <section className="pageHero offlineStudyHero noPrintBackground">
        <div className="container featureHeroGrid">
          <div>
            <p className="eyebrow">Offline Study · Printable reference</p>
            <h1>English and Math cheat sheets for fast SAT review.</h1>
            <p>
              Review the highest-frequency reading, writing, algebra, geometry,
              statistics, and vocabulary rules. Print the full collection or save
              it as a PDF for offline study.
            </p>
            <div className="offlineHeroActions">
              <PrintButton />
              <Link className="button" href="#english">Start with English</Link>
            </div>
          </div>
          <div className="featurePreviewCard">
            <span className="largeFeatureIcon">PDF</span>
            <span className="statusPill">Printer friendly</span>
            <h2>Six compact study sheets</h2>
            <p>English, grammar, math, geometry, vocabulary, and exam-day preparation in one place.</p>
          </div>
        </div>
      </section>

      <div className="container pageContent offlineStudyContent">
        <nav className="cheatSheetIndex noPrint" aria-label="Cheat sheet sections">
          <a href="#english">English</a>
          <a href="#grammar">Grammar</a>
          <a href="#math">Math</a>
          <a href="#geometry">Geometry</a>
          <a href="#vocabulary">Vocabulary</a>
          <a href="#exam-day">Exam Day</a>
        </nav>

        <section className="cheatSheetSection" id="english">
          <div className="cheatSheetHeading">
            <span>01</span><div><p className="sectionKicker">Reading and Writing</p><h2>SAT English Strategy</h2></div>
          </div>
          <div className="cheatCardGrid">
            <article className="cheatCard"><h3>Main Idea</h3><ol><li>Identify the topic.</li><li>Find the author’s central claim.</li><li>Ignore supporting examples.</li><li>Choose the answer covering the whole passage.</li></ol><p className="trapNote"><strong>Common traps:</strong> too narrow, too broad, opposite, or true but irrelevant.</p></article>
            <article className="cheatCard"><h3>Inference</h3><p className="formulaFlow">Text evidence → reasonable conclusion</p><p>An inference must be supported by the passage. Do not rely on outside knowledge or choose what merely seems plausible.</p></article>
            <article className="cheatCard"><h3>Words in Context</h3><ol><li>Cover the choices.</li><li>Write a simple replacement.</li><li>Check tone and grammar.</li><li>Select the closest contextual meaning—not the most familiar dictionary definition.</li></ol></article>
            <article className="cheatCard"><h3>Command of Evidence</h3><ol><li>Answer the claim question first.</li><li>Locate the sentence that proves it.</li><li>Check that the evidence supports the exact wording.</li><li>Reject evidence that is related but incomplete.</li></ol></article>
            <article className="cheatCard"><h3>Author Purpose</h3><p>Ask what the sentence or detail <em>does</em>:</p><div className="chipList"><span>introduces</span><span>illustrates</span><span>supports</span><span>contrasts</span><span>qualifies</span><span>refutes</span></div></article>
            <article className="cheatCard"><h3>Transitions</h3><div className="miniTable">{transitions.map(([type, words]) => <div key={type}><strong>{type}</strong><span>{words}</span></div>)}</div></article>
          </div>
        </section>

        <section className="cheatSheetSection" id="grammar">
          <div className="cheatSheetHeading"><span>02</span><div><p className="sectionKicker">Standard English Conventions</p><h2>Grammar and Punctuation</h2></div></div>
          <div className="cheatCardGrid">
            <article className="cheatCard"><h3>Sentence Boundaries</h3><div className="ruleStack"><p><strong>Period:</strong> independent clause. Independent clause.</p><p><strong>Semicolon:</strong> independent clause; independent clause.</p><p><strong>Comma + FANBOYS:</strong> clause, and/but/or/so/for/yet/nor clause.</p><p><strong>Colon:</strong> complete sentence: explanation or list.</p></div></article>
            <article className="cheatCard"><h3>Subject–Verb Agreement</h3><p>Ignore interrupting phrases. Match the verb with the true subject.</p><div className="examplePair"><p><strong>Correct:</strong> The collection of essays <u>is</u> valuable.</p><p><strong>Correct:</strong> The essays in the collection <u>are</u> valuable.</p></div></article>
            <article className="cheatCard"><h3>Pronouns</h3><p>A pronoun must clearly match its antecedent in number and person.</p><p className="trapNote">Watch for vague <em>it, they, this,</em> and <em>which</em>.</p></article>
            <article className="cheatCard"><h3>Modifiers</h3><p>Place a modifying phrase next to the word it describes.</p><div className="examplePair"><p><strong>Wrong:</strong> Walking to school, the rain soaked Maya.</p><p><strong>Correct:</strong> Walking to school, Maya was soaked by the rain.</p></div></article>
            <article className="cheatCard"><h3>Parallelism</h3><p>Items in a series must use the same grammatical form.</p><div className="examplePair"><p><strong>Correct:</strong> researching, drafting, and revising</p><p><strong>Wrong:</strong> researching, to draft, and revision</p></div></article>
            <article className="cheatCard"><h3>Possessives vs. Plurals</h3><div className="ruleStack"><p><strong>student</strong> = one student</p><p><strong>students</strong> = multiple students</p><p><strong>student’s</strong> = belonging to one</p><p><strong>students’</strong> = belonging to multiple</p></div></article>
          </div>
        </section>

        <section className="cheatSheetSection" id="math">
          <div className="cheatSheetHeading"><span>03</span><div><p className="sectionKicker">Algebra and Advanced Math</p><h2>Core Math Formulas</h2></div></div>
          <div className="formulaGrid">{mathFormulas.map(([name, formula]) => <article className="formulaCard" key={name}><span>{name}</span><strong>{formula}</strong></article>)}</div>
          <div className="cheatCardGrid compactCards">
            <article className="cheatCard"><h3>Percent Change</h3><p className="formulaFlow">percent change = (new − original) / original × 100%</p><p>Increase: original × (1 + r). Decrease: original × (1 − r).</p></article>
            <article className="cheatCard"><h3>Systems of Equations</h3><p><strong>One solution:</strong> lines intersect once.</p><p><strong>No solution:</strong> same slope, different intercepts.</p><p><strong>Infinite solutions:</strong> equivalent equations.</p></article>
            <article className="cheatCard"><h3>Functions</h3><p><strong>f(a)</strong> means substitute <em>a</em> for every x.</p><p>For transformations, <strong>f(x − h) + k</strong> shifts right h and up k.</p></article>
            <article className="cheatCard"><h3>Exponents</h3><p>aᵐaⁿ = aᵐ⁺ⁿ</p><p>aᵐ/aⁿ = aᵐ⁻ⁿ</p><p>(aᵐ)ⁿ = aᵐⁿ</p><p>a⁻ⁿ = 1/aⁿ</p></article>
          </div>
        </section>

        <section className="cheatSheetSection" id="geometry">
          <div className="cheatSheetHeading"><span>04</span><div><p className="sectionKicker">Geometry and Trigonometry</p><h2>Geometry Formula Sheet</h2></div></div>
          <div className="formulaGrid">{geometryFormulas.map(([name, formula]) => <article className="formulaCard" key={name}><span>{name}</span><strong>{formula}</strong></article>)}</div>
          <div className="cheatCardGrid compactCards">
            <article className="cheatCard"><h3>Special Right Triangles</h3><p><strong>45–45–90:</strong> x, x, x√2</p><p><strong>30–60–90:</strong> x, x√3, 2x</p></article>
            <article className="cheatCard"><h3>Trigonometry</h3><p className="formulaFlow">SOH–CAH–TOA</p><p>sin θ = opposite/hypotenuse<br/>cos θ = adjacent/hypotenuse<br/>tan θ = opposite/adjacent</p></article>
            <article className="cheatCard"><h3>Similar Figures</h3><p>Side lengths scale by <strong>k</strong>, areas by <strong>k²</strong>, and volumes by <strong>k³</strong>.</p></article>
            <article className="cheatCard"><h3>Angle Facts</h3><p>Line: 180° · Circle: 360° · Triangle: 180° · Vertical angles are equal · Parallel-line corresponding angles are equal.</p></article>
          </div>
        </section>

        <section className="cheatSheetSection" id="vocabulary">
          <div className="cheatSheetHeading"><span>05</span><div><p className="sectionKicker">High-frequency vocabulary</p><h2>Vocabulary Meaning Families</h2></div></div>
          <div className="vocabFamilyGrid">{vocabGroups.map(([label, words]) => <article key={label}><strong>{label}</strong><p>{words}</p></article>)}</div>
          <article className="cheatCard fullWidthCard"><h3>Roots and Prefixes</h3><div className="rootGrid"><span><strong>bene-</strong> good</span><span><strong>mal-</strong> bad</span><span><strong>anti-</strong> against</span><span><strong>circum-</strong> around</span><span><strong>cred-</strong> believe</span><span><strong>dict-</strong> say</span><span><strong>mit / miss-</strong> send</span><span><strong>scrib / script-</strong> write</span><span><strong>spect-</strong> look</span><span><strong>voc-</strong> call</span></div></article>
        </section>

        <section className="cheatSheetSection" id="exam-day">
          <div className="cheatSheetHeading"><span>06</span><div><p className="sectionKicker">Final preparation</p><h2>Digital SAT Exam-Day Checklist</h2></div></div>
          <div className="checklistGrid">
            {[
              "Admission ticket available", "Acceptable photo ID", "Approved testing device", "Bluebook installed and updated", "Device fully charged", "Power cord or charger", "Calculator ready", "Pen or pencil for scratch work", "Water and snack for break", "Testing location and arrival time confirmed", "Complete exam setup before test day", "Use breaks to reset—not review mistakes"
            ].map((item) => <label key={item}><span>□</span>{item}</label>)}
          </div>
          <article className="examStrategyBanner"><h3>Three final rules</h3><div><p><strong>1. Keep moving.</strong> Flag a hard question and return later.</p><p><strong>2. Use every clue.</strong> Units, labels, transitions, and answer forms matter.</p><p><strong>3. Answer everything.</strong> There is no penalty for guessing.</p></div></article>
        </section>

        <div className="offlineFooterActions noPrint"><PrintButton /><Link className="button" href="/">Return home</Link></div>
      </div>
    </main>
  );
}
