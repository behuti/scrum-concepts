'use client';

import { useEffect, useRef } from 'react';
import { Topic } from '@/lib/types';
import styles from './TopicModal.module.scss';

interface TopicModalProps {
  topic: Topic | null;
  onClose: () => void;
}

function getFocusable(el: HTMLElement): HTMLElement[] {
  return [
    ...el.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    ),
  ];
}

export default function TopicModal({ topic, onClose }: TopicModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!topic) return;

    const previousFocus = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      if (overlayRef.current) {
        const first = getFocusable(overlayRef.current)[0];
        if (first) first.focus();
        else overlayRef.current.focus();
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !overlayRef.current) return;
      const focusable = getFocusable(overlayRef.current);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (previousFocus && document.body.contains(previousFocus)) {
        previousFocus.focus();
      }
    };
  }, [!!topic, onClose]);

  if (!topic) return null;

  return (
    <div
      className={`${styles.overlay} ${styles.open}`}
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 id="modalTitle">{topic.title}</h2>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className={styles.body}>
          <span className={styles.badge} data-category={topic.category}>
            {topic.category}
          </span>
          <p className={styles.description}>{topic.description}</p>
          <div className={styles.metaLabel}>Keywords</div>
          <div className={styles.keywords}>
            {topic.keywords.map((k) => (
              <span key={k} className={styles.keyword}>{k}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}