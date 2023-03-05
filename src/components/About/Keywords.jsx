import React, { useState } from "react";
import styled from "styled-components";
import { useAboutStore } from "../../store/aboutStore";
import { KeywordItem } from "./KeywordItem";

export const Keywords = () => {
  const offset = useAboutStore((store) => store.offset);

  const listWords = ["me", "coding", "cycling", "running", "japan", "anime", "badminton", "piano"];

  return (
    <KeywordContent>
      <ListContainer offset={offset * -50}>
        {listWords.map((word, index) => (
          <KeywordItem
            keyword={word}
            index={index}
            key={index}
          />
        ))}
      </ListContainer>
    </KeywordContent>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: 100%;
  transform: translateY(${(props) => props.offset}px);
  transition: transform 0.3s;
`;

const KeywordContent = styled.div`
  width: 100%;
  height: 44rem;
  overflow: hidden;
`;
