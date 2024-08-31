import { useEffect } from "react";

export const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";

      const srollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = srollHeight + "px";
    }
  }, [textAreaRef, value]);
};
