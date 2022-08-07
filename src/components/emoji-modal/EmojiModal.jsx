import React from "react";
import styles from "./emoji-modal.module.css";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

export const EmojiModal = ({
  data: { isEmojiModalVisible, setEmojiModalState, getChosenEmoji },
}) => {
  const onEmojiClick = (event, emojiObject) => {
    setEmojiModalState((prev) => !prev);
    getChosenEmoji(emojiObject);
  };

  return (
    <section
      className={`${styles.emoji_modal_wrapper} ${
        isEmojiModalVisible && styles.show_modal
      }`}
    >
      <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
        skinTone={SKIN_TONE_MEDIUM_DARK}
        groupNames={{ smileys_people: "PEOPLE" }}
        native
      />
    </section>
  );
};
