import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.tr`
  list-style: none;
  padding: 10px 0;
  width: 90%;

  & > td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

type Props = {
  columns: Array<string>;
};

const CveSearchListItem: React.FC<Props> = ({ columns }: Props) => (
  <StyledWrapper>
    {columns.map((column, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <td key={index}>
        <Paragraph>{column}</Paragraph>
      </td>
    ))}
  </StyledWrapper>
);

export default CveSearchListItem;
