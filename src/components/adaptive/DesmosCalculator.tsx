"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

interface DesmosCalculatorProps {
  moduleKey: string;
  open: boolean;
  onClose: () => void;
}

const DESMOS_EMBED_URL = "https://www.desmos.com/calculator?embed";
const DESMOS_EXTERNAL_URL = "https://www.desmos.com/calculator";

export function DesmosCalculator({ moduleKey, open, onClose }: DesmosCalculatorProps) {
  const storageKey = `sat-desmos-width-${moduleKey}`;
  const [width, setWidth] = useState(430);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const drag = useRef<{ startX: number; startWidth: number } | null>(null);

  useEffect(() => {
    const saved = Number(window.localStorage.getItem(storageKey));
    if (Number.isFinite(saved) && saved >= 340 && saved <= 760) setWidth(saved);
  }, [storageKey]);

  useEffect(() => {
    if (!open || loaded) return;
    const timer = window.setTimeout(() => setSlow(true), 7000);
    return () => window.clearTimeout(timer);
  }, [open, loaded]);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (!drag.current) return;
      const next = Math.min(760, Math.max(340, drag.current.startWidth + drag.current.startX - event.clientX));
      setWidth(next);
    };
    const up = () => {
      if (!drag.current) return;
      drag.current = null;
      window.localStorage.setItem(storageKey, String(width));
      document.body.classList.remove("calculatorResizing");
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [storageKey, width]);

  return (
    <aside className={`desmosPanel ${open ? "open" : "closed"}`} aria-hidden={!open} style={{ "--calculator-width": `${width}px` } as CSSProperties} aria-label="Desmos graphing calculator">
      <button
        className="desmosResizeHandle"
        aria-label="Resize calculator"
        onPointerDown={(event) => {
          drag.current = { startX: event.clientX, startWidth: width };
          document.body.classList.add("calculatorResizing");
        }}
      />
      <div className="desmosToolbar">
        <div>
          <strong>Graphing Calculator</strong>
          <span>Powered by Desmos</span>
        </div>
        <div className="desmosToolbarActions">
          <a href={DESMOS_EXTERNAL_URL} target="_blank" rel="noreferrer">Open separately</a>
          <button type="button" onClick={onClose} aria-label="Close calculator">Close</button>
        </div>
      </div>
      <div className="desmosFrameWrap">
        {!loaded && <div className="desmosLoading">Loading calculator…</div>}
        <iframe
          key={moduleKey}
          className="desmosFrame"
          title="Desmos graphing calculator"
          src={DESMOS_EMBED_URL}
          loading="eager"
          allow="clipboard-read; clipboard-write"
          onLoad={() => { setLoaded(true); setSlow(false); }}
        />
      </div>
      {slow && (
        <div className="desmosFallback" role="status">
          <strong>The embedded calculator is taking longer than expected.</strong>
          <span>Your browser or network may block third-party frames.</span>
          <a href={DESMOS_EXTERNAL_URL} target="_blank" rel="noreferrer">Open Desmos in a new tab</a>
        </div>
      )}
    </aside>
  );
}
