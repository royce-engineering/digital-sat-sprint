"use client";

export default function PrintButton() {
  return (
    <button className="button buttonPrimary printButton" type="button" onClick={() => window.print()}>
      Print / Save PDF
    </button>
  );
}
