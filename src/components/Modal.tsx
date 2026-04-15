//_ src/components/Modal.tsx
import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
  zIndex?: number;
};

export function Modal({ children, onClose, zIndex = 100 }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return createPortal(
    <div
      className="walletModalOverlay"
      style={{ zIndex }}
      onClick={() => onClose?.()}
    >
      <div
        className="walletModal"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("portals")!
  );
}
