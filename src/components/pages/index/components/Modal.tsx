import { ReactNode } from "react";
import "./modal.css";

export const Modal = ({
  children,
  close,
}: {
  children: ReactNode;
  close: () => void;
}) => {
  return (
    <section className="modal">
        <div className="modalContentsWrapper">
          <div className="modalContents">
            {children}
          </div>
          <div className="modalCloseButton" onClick={close}>閉じる</div>
        </div>
    </section>
  )
}