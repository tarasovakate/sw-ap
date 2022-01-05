import * as React from 'react';
import styled from 'styled-components/macro';
import ChevronRight from './chevron-right';
import ChevronLeft from './chevron-left';
import Loading from './loading-icon';
import { useState } from 'react';

interface Person {
  name: string;
  height: string;
  mass: string;
  films: string[];
  gender: string;
  eye_color: string;
  skin_color: string;
}

interface PeopleData {
  count: number;
  results: Person[];
}

interface TableProps {
  title?: string;
  data: PeopleData;
  handleSetDetail: Function;
  handlePageChange: Function;
  isFetchingPeople: boolean;
}

const NUM_OF_RECORDS = 10;

export function Table(props: TableProps) {
  const {
    title,
    data,
    handleSetDetail,
    handlePageChange,
    isFetchingPeople,
  } = props;
  const { count } = data;
  const [page, setPage] = useState<number>(1);
  
  const totalPage = Math.ceil(count / NUM_OF_RECORDS) || 1;

  const getPersonDetail = (name: string, films: string[]) => {
    return () => {
      handleSetDetail(name, films);
    };
  };

  const getPeopleByPage = (nextPageNum: number) => {
    return () => {
      const targetPage = page + nextPageNum;
      if (targetPage < 1 || targetPage > totalPage) return;
      handlePageChange(targetPage);
      setPage(targetPage);
    };
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <StyledTable data-is-fetching={isFetchingPeople}>
        <thead>
          <tr>
            <StyledHeaderCell>#</StyledHeaderCell>
            <StyledHeaderCell>Name</StyledHeaderCell>
            <StyledHeaderCell>Height</StyledHeaderCell>
            <StyledHeaderCell>Mass</StyledHeaderCell>
            <StyledHeaderCell>Gender</StyledHeaderCell>
            <StyledHeaderCell>Eye color</StyledHeaderCell>
            <StyledHeaderCell>Skin color</StyledHeaderCell>
          </tr>
        </thead>
        <tbody>
          {isFetchingPeople ? (
            <StyledRow>
              <StyledLoadingCell colSpan={7}>
                <Loading />
              </StyledLoadingCell>
            </StyledRow>
          ) : (
            data.results.map((person,index) => {
              return (
                <StyledRow
                  key={person.name}
                  onClick={getPersonDetail(person.name, person.films)}
                >
                  <StyledCell   >{index+1}</StyledCell>
                  <StyledCell>{person.name}</StyledCell>
                  <StyledCell>{person.height}</StyledCell>
                  <StyledCell>{person.mass}</StyledCell>
                  <StyledCell>{person.gender}</StyledCell>
                  <StyledCell>{person.eye_color}</StyledCell>
                  <StyledCell>{person.skin_color}</StyledCell>
                </StyledRow>
              );
            })
          )}
        </tbody>
      </StyledTable>
      <PaginationSection>
        <IconWrapper onClick={getPeopleByPage(-1)}>
          <ChevronLeft />
        </IconWrapper>
        <PageInfo>
          Page {page} of {totalPage}
        </PageInfo>
        <IconWrapper onClick={getPeopleByPage(1)}>
          <ChevronRight />
        </IconWrapper>
      </PaginationSection>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 25px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  min-height: ${p => (p['data-is-fetching'] ? '460px' : 'auto')};
`;

const StyledRow = styled.tr`
  cursor: pointer;
  &:nth-child(even) {
    background: #f9f8f8;
  }
  &:hover {
    background: #e8e8e8;
  }
`;

const StyledCell = styled.td`
  border: 1px solid #929191;
  padding: 0.5rem;
  height: 1.5rem;
`;

const StyledHeaderCell = styled(StyledCell)`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #006989;
  color: white;
`;

const StyledLoadingCell = styled(StyledCell)`
  text-align: center;
`;

const PaginationSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.5rem;
`;

const PageInfo = styled.div`
  margin: 0 1rem;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;
